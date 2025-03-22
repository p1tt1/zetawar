# AI System

Zetawar includes an AI system that allows players to play against computer-controlled opponents. This document explains how the AI system works, the different AI implementations, and how they make decisions.

## AI Architecture

The AI system is designed to be modular and extensible, allowing for different AI implementations with varying levels of complexity. The system is built around the concept of players, which can be either human or AI-controlled.

### Key Files

- `src/cljs/zetawar/players.cljs`: Contains the player system implementation
- `src/cljs/zetawar/players/ai/reference.cljs`: Contains the reference AI implementation
- `src/cljs/zetawar/players/ai/custom.cljs`: Contains a customizable AI implementation
- `src/cljs/zetawar/players/ai/custom_js.cljs`: Contains a JavaScript-based customizable AI implementation
- `src/cljs/zetawar/players/human.cljs`: Contains the human player implementation

## Player System

The player system is defined in `src/cljs/zetawar/players.cljs` and provides a common interface for both human and AI players:

```clojure
(def player-types
  {:zetawar.players/human
   {:description "Human"
    :ai false}

   :zetawar.players/reference-ai
   {:description "Reference AI"
    :ai true}

   :zetawar.players/custom-ai
   {:description "Custom AI"
    :ai true}

   :zetawar.players/custom-js-ai
   {:description "Custom JS AI"
    :ai true}})
```

Each player type has a description and an `ai` flag that indicates whether it's an AI player.

## AI Player Implementation

AI players implement a common interface that allows them to make decisions based on the game state. The main function is `start-turn`, which is called when it's the AI player's turn:

```clojure
(defmethod players/start-turn :zetawar.players/reference-ai
  [player]
  (let [{:keys [conn color]} player]
    (when-not (:stopping player)
      (let [db @conn
            game (app/current-game db)
            cur-faction-color (game/current-faction-color game)]
        (when (= cur-faction-color color)
          (js/setTimeout #(take-turn player) 500))))))
```

This function checks if it's the AI player's turn and, if so, schedules the `take-turn` function to be called after a short delay.

## Decision Making

The AI makes decisions by evaluating the available actions and choosing the best one based on a set of heuristics. The reference AI implementation in `src/cljs/zetawar/players/ai/reference.cljs` provides a simple example:

```clojure
(defn take-turn [player]
  (let [{:keys [conn color]} player
        db @conn
        game (app/current-game db)
        cur-faction-color (game/current-faction-color game)]
    (when (= cur-faction-color color)
      (let [db @conn
            game (app/current-game db)
            cur-faction (game/faction-by-color db game color)
            actionable-units (game/actionable-units db game)
            actionable-bases (game/actionable-bases db game)]
        (cond
          ;; If there are actionable units, take an action with one of them
          (not-empty actionable-units)
          (let [unit (rand-nth (vec actionable-units))
                action (choose-unit-action db game unit)]
            (if action
              (do
                (log/debug "AI taking action:" action)
                (router/dispatch-sync conn [:zetawar.events.game/execute-action
                                            (assoc action :action/faction-color color)]))
              (do
                (log/debug "AI ending turn")
                (router/dispatch-sync conn [:zetawar.events.game/execute-action
                                            {:action/type :action.type/end-turn
                                             :action/faction-color color}]))))

          ;; If there are actionable bases, build a unit at one of them
          (not-empty actionable-bases)
          (let [base (rand-nth (vec actionable-bases))
                action (choose-base-action db game base)]
            (if action
              (do
                (log/debug "AI taking action:" action)
                (router/dispatch-sync conn [:zetawar.events.game/execute-action
                                            (assoc action :action/faction-color color)]))
              (do
                (log/debug "AI ending turn")
                (router/dispatch-sync conn [:zetawar.events.game/execute-action
                                            {:action/type :action.type/end-turn
                                             :action/faction-color color}]))))

          ;; If there are no actionable units or bases, end the turn
          :else
          (do
            (log/debug "AI ending turn")
            (router/dispatch-sync conn [:zetawar.events.game/execute-action
                                        {:action/type :action.type/end-turn
                                         :action/faction-color color}])))))))
```

This function:
1. Checks if it's the AI player's turn
2. Gets the actionable units and bases
3. If there are actionable units, chooses an action for one of them
4. If there are actionable bases, chooses an action for one of them
5. If there are no actionable units or bases, ends the turn

## Action Selection

The AI selects actions based on a set of heuristics. For example, the reference AI implementation uses the following function to choose an action for a unit:

```clojure
(defn choose-unit-action [db game unit]
  (let [unit-actions (game/unit-actions db game unit)
        attack-actions (filter #(= (:action/type %) :action.type/attack-unit) unit-actions)
        capture-actions (filter #(= (:action/type %) :action.type/capture-base) unit-actions)
        repair-actions (filter #(= (:action/type %) :action.type/repair-unit) unit-actions)
        field-repair-actions (filter #(= (:action/type %) :action.type/field-repair-unit) unit-actions)
        move-actions (filter #(= (:action/type %) :action.type/move-unit) unit-actions)]
    (cond
      ;; If the unit can attack, do that
      (not-empty attack-actions)
      (rand-nth (vec attack-actions))

      ;; If the unit can capture a base, do that
      (not-empty capture-actions)
      (rand-nth (vec capture-actions))

      ;; If the unit can repair itself, do that
      (not-empty repair-actions)
      (rand-nth (vec repair-actions))

      ;; If the unit can repair another unit, do that
      (not-empty field-repair-actions)
      (rand-nth (vec field-repair-actions))

      ;; If the unit can move, do that
      (not-empty move-actions)
      (rand-nth (vec move-actions))

      ;; Otherwise, return nil (no action)
      :else
      nil)))
```

This function prioritizes actions in the following order:
1. Attack
2. Capture
3. Repair
4. Field repair
5. Move

If multiple actions of the same type are available, it chooses one randomly.

## Custom AI

Zetawar also supports custom AI implementations, allowing players to create their own AI strategies. There are two types of custom AI:

1. **ClojureScript-based**: Defined in `src/cljs/zetawar/players/ai/custom.cljs`
2. **JavaScript-based**: Defined in `src/cljs/zetawar/players/ai/custom_js.cljs`

These implementations provide a framework for creating custom AI strategies, with hooks for decision-making functions that can be customized.

## AI Configuration

Players can configure which AI implementation to use for each faction through the UI. This is handled by the `::set-faction-player-type` event handler in `src/cljs/zetawar/events/ui.cljs`:

```clojure
(defmethod router/handle-event ::set-faction-player-type
  [{:as handler-ctx :keys [ev-chan conn db players]} [_ faction player-type-id]]
  (let [{:as app :keys [ai-turn-stepping]} (app/root db)
        {:keys [game/factions game/current-faction]} (app/current-game db)
        ;; Get the actual faction entity from the app if it's not already an entity
        faction (cond
                  ;; If faction is nil or not a valid entity, get it from app
                  (or (nil? faction)
                      (not (or (number? faction) 
                               (and (map? faction) (:db/id faction)))))
                  (:app/configuring-faction app)
                  
                  ;; Otherwise use the provided faction
                  :else faction)]
    ;; Only proceed if we have a valid faction
    (when faction
      (let [{:keys [faction/color]} faction
            other-factions (remove #(= (e faction) (e %)) factions)
            {:keys [ai]} (players/player-types-by-id player-type-id)
            tx [{:db/id (e faction)
                 :faction/ai ai
                 :faction/player-type player-type-id}]
        cur-player (color @players)
        new-player (players/new-player handler-ctx player-type-id color)
        notify (when (and ai (= (e faction) (e current-faction)))
                 [[:zetawar.players/start-turn color]])]
    (players/stop cur-player)
    (players/start new-player)
    (swap! players assoc color new-player)
    (if (and ai (= (count other-factions)
                   (count (filter :faction/ai other-factions))))
      {:tx (conj tx [:db/add (e app) :app/ai-turn-stepping (not ai-turn-stepping)])
       :dispatch [[::alert "AI enabled for all factions. Enabling turn stepping."]]
       :notify notify}
      {:tx (conj tx [:db/add (e app) :app/ai-turn-stepping false])
       :notify notify})))))
```

This function:
1. Gets the faction to configure
2. Gets the player type to set
3. Creates a new player of the specified type
4. Stops the old player and starts the new one
5. Updates the faction's player type in the database

## AI Helpers

The game provides several helper functions in `src/cljs/zetawar/game.cljs` that AI implementations can use to make decisions:

```clojure
;; Get all units that can take actions
(defn actionable-units [db game]
  (let [units (get-in game [:game/current-faction :faction/units])]
    (filter #(unit-can-act? db game %) units)))

;; Get all bases where units can be built
(defn actionable-bases [db game]
  (let [faction (:game/current-faction game)
        bases (faction-bases db faction)]
    (filter #(base-can-act? db game %) bases)))

;; Get all enemies of a unit
(defn enemies [db game unit]
  (let [u-faction (unit-faction db unit)]
    (qess '[:find ?u
            :in $ ?g ?f-arg
            :where
            [?g :game/factions ?f]
            [?f :faction/units ?u]
            [(not= ?f ?f-arg)]]
          db (e game) (e u-faction))))

;; Get all enemies in range of a unit
(defn enemies-in-range [db game unit]
  (into []
        (filter #(in-range? db unit %))
        (enemies db game unit)))

;; Get the closest enemy to a unit
(defn closest-enemy [db game unit]
  (let [unit-q (:unit/q unit)
        unit-r (:unit/r unit)]
    (reduce
     (fn [closest enemy]
       (let [enemy-q (:unit/q enemy)
             enemy-r (:unit/r enemy)
             closest-q (:unit/q closest)
             closest-r (:unit/r closest)]
         (if (< (hex/distance unit-q unit-r enemy-q enemy-r)
                (hex/distance unit-q unit-r closest-q closest-r))
           enemy
           closest)))
     (enemies db game unit))))
```

These functions help AI implementations analyze the game state and make informed decisions.

## AI Limitations

The current AI implementations are relatively simple and do not use advanced techniques like minimax or Monte Carlo Tree Search. They make decisions based on simple heuristics and do not look ahead to anticipate the consequences of their actions.

Future improvements to the AI system could include:
- More sophisticated decision-making algorithms
- Look-ahead planning to anticipate opponent moves
- Learning from past games to improve performance
- Different difficulty levels for AI opponents
