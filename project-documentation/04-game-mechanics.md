# Game Mechanics and Flow

This document explains the core game mechanics and flow of Zetawar, including how turns work, unit actions, combat, and win conditions.

## Game Initialization

The game is initialized in `src/cljs/zetawar/core.cljs` with the `init` function:

```clojure
(defn ^:export init []
  (when-not (site/viewing-devcards?)
    (reset! system (ig/init system/game-config))
    (let [game-cfg (:zetawar.system/game @system)
          encoded-game-state (some-> js/window.location.hash
                                     not-empty
                                     (subs 1))]
      (if encoded-game-state
        (serialization/load-encoded-game-state! game-cfg encoded-game-state)
        (app/start-new-game! game-cfg :sterlings-aruba-multiplayer))
      (set! (.-onload js/window) run))))
```

This function:
1. Initializes the system using Integrant
2. Checks if there's an encoded game state in the URL hash
3. If there is, loads that game state; otherwise, starts a new game
4. Sets up the window load handler to run the game

## Game Flow

The game follows a turn-based flow where players take turns controlling their factions. The flow is managed by the event system and the game state in the DataScript database.

### Turn Structure

1. **Start Turn**: When a turn starts, the current faction is set to the active faction.
2. **Player Actions**: The player can perform various actions with their units (move, attack, repair, capture, build).
3. **End Turn**: When the player ends their turn, the current faction is updated to the next faction, and any end-of-turn effects are applied.

The turn flow is implemented in `src/cljs/zetawar/game.cljs` with the `end-turn-tx` function:

```clojure
(defn end-turn-tx
  "Return a transaction that completes captures, clears per round unit flags,
  updates the current faction, adds faction credits, and updates the round."
  [db game]
  (let [starting-faction (:game/starting-faction game)
        cur-faction (:game/current-faction game)
        next-faction (:faction/next-faction cur-faction)
        cur-round (:game/round game)
        new-round (if (= starting-faction next-faction)
                    (inc cur-round)
                    cur-round)
        credits (+ (:faction/credits next-faction)
                   (if (> new-round 1)
                     (income db game next-faction)
                     0))
        units (:faction/units cur-faction)
        attacked-froms (:game/attacked-froms game)]
    (into [{:db/id (e next-faction)
            :faction/credits credits}
           {:db/id (e game)
            :game/round new-round
            :game/current-faction (e next-faction)}]
          (mapcat #(unit-end-turn-tx db game %) units))))
```

### Player Types

Players can be human or AI:

- **Human Players**: Controlled by user interactions through the UI
- **AI Players**: Controlled by AI algorithms that make decisions based on the game state

Player types are defined in `src/cljs/zetawar/players.cljs` and can be configured in the game UI.

## Unit Actions

Units can perform various actions during a player's turn:

### Movement

Units can move to valid destinations based on their movement range and terrain:

```clojure
(defn move-tx
  "Returns a transaction that updates the unit's location and move count."
  ([db game unit to-terrain]
   (let [new-move-count (inc (:unit/move-count unit 0))
         [to-q to-r] (terrain-hex to-terrain)
         new-state (check-can-move db game unit)]
     [{:db/id (e unit)
       :unit/game-pos-idx (game-pos-idx game to-q to-r)
       :unit/q to-q
       :unit/r to-r
       :unit/terrain (e to-terrain)
       :unit/move-count new-move-count
       :unit/state (e new-state)}]))
  ([db game from-q from-r to-q to-r]
   (let [unit (checked-unit-at db game from-q from-r)
         terrain (checked-terrain-at db game to-q to-r)]
     (move-tx db game unit terrain))))
```

### Attack

Units can attack enemy units within their attack range:

```clojure
(defn battle-tx
  ([db game attacker defender attacker-damage defender-damage]
   (let [new-state (check-can-attack db game attacker)]
     (check-in-range db attacker defender)
     (let [attacker-terrain (:unit/terrain attacker)
           defender-terrain (:unit/terrain defender)
           attack-count (:unit/attack-count attacker 0)
           attacker-count (:unit/count attacker)
           defender-count (:unit/count defender)]
       (cond-> []
         (> defender-count defender-damage)
         (conj {:db/id (e defender)
                :unit/count (- defender-count defender-damage)
                :unit/attacked-count (inc (:unit/attacked-count defender))
                :unit/attacked-from (e attacker-terrain)})

         (= defender-count defender-damage)
         (conj [:db.fn/retractEntity (e defender)])

         (> attacker-count attacker-damage)
         (conj {:db/id (e attacker)
                :unit/count (- attacker-count attacker-damage)
                :unit/attack-count (inc attack-count)
                :unit/state (e new-state)})

         (= attacker-count attacker-damage)
         (conj [:db.fn/retractEntity (e attacker)])))))
```

### Repair

Units can be repaired at bases or by other units with repair capabilities:

```clojure
(defn repair-tx
  "Returns a transaction that increments unit count and sets the unit repaired
  flag to true."
  ([db game unit]
   (let [new-state (check-can-repair db game unit)]
     [{:db/id (e unit)
       :unit/count (min (:game/max-count-per-unit game)
                        (+ (:unit/count unit)
                           (get-in unit [:unit/type :unit-type/repair])))
       :unit/repaired true
       :unit/state (e new-state)}]))
  ([db game q r]
   (let [unit (checked-unit-at db game q r)]
     (repair-tx db game unit))))
```

### Capture

Units can capture enemy bases:

```clojure
(defn capture-tx
  "Returns a transaction that sets the unit capturing flag and capture round."
  ([db game unit]
   (let [base (base-at db game (:unit/q unit) (:unit/r unit))
         round (:game/round game)
         new-state (check-capturable db game unit base)]
     [{:db/id (e unit)
       :unit/capturing true
       :unit/capture-round (inc round)
       :unit/state (e new-state)}]))
  ([db game q r]
   (let [unit (checked-unit-at db game q r)]
     (capture-tx db game unit))))
```

### Build

Players can build new units at their bases:

```clojure
(defn build-tx
  "Returns a transaction that creates a new unit and updates faction credits."
  ([db game q r unit-type-id]
   (let [base (checked-base-at db game q r)]
     (build-tx db game base unit-type-id)))
  ([db game base unit-type-id]
   (let [unit-type (find-by db :unit-type/id unit-type-id)
         cur-faction (:game/current-faction game)
         credits (:faction/credits cur-faction)
         cost (:unit-type/cost unit-type)
         base-q (:terrain/q base)
         base-r (:terrain/r base)]
     (check-base-current db game base)
     (check-unoccupied db game base-q base-r)
     (when (> cost credits)
       (throw (ex-info "Unit cost exceeds available credits"
                       {:credits credits
                        :cost cost})))
     [{:db/id -1
       :unit/game-pos-idx (game-pos-idx game base-q base-r)
       :unit/q base-q
       :unit/r base-r
       :unit/terrain (e base)
       :unit/round-built (:game/round game)
       :unit/type (e unit-type)
       :unit/count (:game/max-count-per-unit game)
       :unit/move-count 0
       :unit/attack-count 0
       :unit/attacked-count 0
       :unit/repaired false
       :unit/capturing false
       :unit/state (-> unit-type built-state e)}
      {:db/id (e cur-faction)
       :faction/credits (- credits cost)
       :faction/units -1}])))
```

## Combat System

The combat system is based on unit strengths, armor types, and terrain effects:

```clojure
(defn attack-damage [db game attacker defender attacker-terrain defender-terrain]
  (let [defender-armor-type (get-in defender [:unit/type :unit-type/armor-type])
        [attacker-q attacker-r] (unit-hex attacker)
        [defender-q defender-r] (unit-hex defender)
        attack-strength (oonly (d/q '[:find ?s
                                      :in $ ?u ?at
                                      :where
                                      [?u  :unit/type ?ut]
                                      [?ut :unit-type/strengths ?us]
                                      [?us :unit-strength/armor-type ?at]
                                      [?us :unit-strength/attack ?s]]
                                    db (e attacker) defender-armor-type))
        armor (if (:unit/capturing defender)
                (get-in defender [:unit/type :unit-type/capturing-armor])
                (get-in defender [:unit/type :unit-type/armor]))
        attack-bonus (oonly (d/q '[:find ?a
                                   :in $ ?u ?t
                                   :where
                                   [?u  :unit/type ?ut]
                                   [?t  :terrain/type ?tt]
                                   [?tt :terrain-type/effects ?e]
                                   [?e  :terrain-effect/unit-type ?ut]
                                   [?e  :terrain-effect/attack-bonus ?a]]
                                 db (e attacker) (e attacker-terrain)))
        armor-bonus (oonly (d/q '[:find ?d
                                  :in $ ?u ?t
                                  :where
                                  [?u  :unit/type ?ut]
                                  [?t  :terrain/type ?tt]
                                  [?tt :terrain-type/effects ?e ]
                                  [?e  :terrain-effect/unit-type ?ut]
                                  [?e  :terrain-effect/armor-bonus ?d]]
                                db (e defender) (e defender-terrain)))
        attack-hexes (into #{} (map terrain-hex) (:unit/attacked-from defender))
        ranged-attack-hexes (into #{}
                                  (filter #(> (apply hex/distance defender-q defender-r %) 1))
                                  attack-hexes)
        adjacent-attack-hexes (into #{}
                                    (filter #(and (apply hex/adjacent? attacker-q attacker-r %)
                                                  (apply hex/adjacent? defender-q defender-r %)))
                                    attack-hexes)
        opposite-attack-hexes (into #{}
                                    (filter #(apply hex/opposite? attacker-q attacker-r defender-q defender-r %))
                                    attack-hexes)
        flanking-attack-hexes (clojure.set/difference attack-hexes
                                                      ranged-attack-hexes
                                                      adjacent-attack-hexes
                                                      opposite-attack-hexes)
        gang-up-bonus (+ (* (count ranged-attack-hexes)
                            (:game/ranged-attack-bonus game))
                         (* (count adjacent-attack-hexes)
                            (:game/adjacent-attack-bonus game))
                         (* (count flanking-attack-hexes)
                            (:game/flanking-attack-bonus game))
                         (* (count opposite-attack-hexes)
                            (:game/opposite-attack-bonus game)))]
    (let [p (-> (+ 0.5 (* 0.05 (+ (- (+ attack-strength attack-bonus)
                                     (+ armor armor-bonus))
                                  gang-up-bonus)))
                (max 0)
                (min 1))]
      (js/Math.round
       (if (:game/stochastic-damage game)
         (let [hits (->> (repeatedly #(rand))
                         (take (* 6 (:unit/count attacker)))
                         (filter #(< % p))
                         count)]
           (quot hits 6))
         (* (:unit/count attacker) p))))))
```

## Win Conditions

A faction wins when it has eliminated all enemy units and captured all enemy bases:

```clojure
(defn faction-won? [db faction]
  (and (= 0 enemy-base-count db faction)
       (= 0 enemy-unit-count db faction)))
```

This is checked in the UI through the `current-faction-won?` subscription:

```clojure
(deftrack current-faction-won? [conn]
  (= @(current-faction-eid conn)
     @(winning-faction-eid conn)))
```

When a faction wins, a win message is displayed to the player:

```clojure
(deftrack show-win-message? [conn]
  (and @(current-faction-won? conn)
       (not (:faction/ai @(current-faction conn)))
       (not (:app/hide-win-message @(app conn)))))
```

## User Interface Flow

The user interface flow is managed by event handlers in `src/cljs/zetawar/events/ui.cljs` and UI components in `src/cljs/zetawar/views.cljs`. The main components of the UI flow are:

1. **Selection**: Players select units or bases by clicking on them
2. **Targeting**: Players target destinations or enemy units by clicking on them
3. **Action**: Players perform actions by clicking on action buttons
4. **End Turn**: Players end their turn by clicking the end turn button

This flow is implemented through event handlers like `::select-hex`, `::move-selected-unit`, `::attack-targeted`, and `::end-turn`.
