# Data Model and Game State

Zetawar uses DataScript, an immutable in-memory database, to store and manage the game state. This document explains the data model and how the game state is structured.

## DataScript Schema

The schema is defined in `src/cljs/zetawar/db.cljs` and describes the structure of the entities in the game. Here's an overview of the main entity types:

### App Entity

The root entity that contains references to the current game and UI state:

```clojure
:app/game                        {:db/valueType   :db.type/ref}
:app/configuring-faction         {:db/valueType   :db.type/ref}
```

### Game Entity

Represents a game instance with references to terrain types, unit types, factions, and other game-related data:

```clojure
:game/id                         {:db/unique      :db.unique/identity}
:game/terrain-types              {:db/valueType   :db.type/ref
                                 :db/cardinality :db.cardinality/many
                                 :db/isComponent true}
:game/unit-types                 {:db/valueType   :db.type/ref
                                 :db/cardinality :db.cardinality/many
                                 :db/isComponent true}
:game/map                        {:db/valueType   :db.type/ref
                                 :db/isComponent true}
:game/factions                   {:db/valueType   :db.type/ref
                                 :db/cardinality :db.cardinality/many
                                 :db/isComponent true}
:game/starting-faction           {:db/valueType   :db.type/ref}
:game/current-faction            {:db/valueType   :db.type/ref}
```

### Faction Entity

Represents a player's faction with references to units and other faction-related data:

```clojure
:faction/next-faction            {:db/valueType   :db.type/ref}
:faction/units                   {:db/valueType   :db.type/ref
                                 :db/cardinality :db.cardinality/many
                                 :db/isComponent true
                                 :db/index       true}
```

### Unit Entity

Represents a unit on the game board with references to its type, state, and position:

```clojure
:unit/game-pos-idx               {:db/unique      :db.unique/identity}
:unit/type                       {:db/valueType   :db.type/ref}
:unit/attacked-from              {:db/valueType   :db.type/ref
                                 :db/cardinality :db.cardinality/many}
:unit/state                      {:db/valueType   :db.type/ref}
:unit/terrain                    {:db/valueType   :db.type/ref}
```

### Terrain Entity

Represents a terrain tile on the game board with references to its type and owner:

```clojure
:terrain/game-pos-idx            {:db/unique      :db.unique/identity}
:terrain/owner                   {:db/valueType   :db.type/ref}
:terrain/type                    {:db/valueType   :db.type/ref}
```

## Game State Management

The game state is managed through a combination of DataScript transactions and event handlers:

1. **Initialization**: The game state is initialized in `core.cljs` using the `init` function, which sets up the system and starts a new game.

2. **Event Handling**: User interactions trigger events that are handled by functions in `events/ui.cljs` and other event namespaces.

3. **Transactions**: Event handlers generate transactions that update the DataScript database, which in turn updates the UI through reactive queries.

4. **Subscriptions**: UI components subscribe to reactive queries defined in `subs.cljs` to access and display the game state.

## Game Position Indexing

The game uses a coordinate system based on axial coordinates (q, r) for the hexagonal grid. To efficiently look up entities at specific positions, the game uses a position indexing system:

```clojure
(def game-pos-idx
  (memoize
   (fn game-pos-idx [game q r]
     (if (and game q r)
       (+ r (* 1000 (+ (* (e game) 1000) q)))
       -1))))
```

This function generates a unique index for each position on the game board, which is used as a unique identifier for units and terrains.

## Entity Relationships

The data model uses references to establish relationships between entities:

- A game has many factions
- A faction has many units
- A unit has one type and one state
- A terrain has one type and optionally one owner (a faction)

These relationships are queried using DataScript's query language, which is similar to Datalog.

## Example Queries

Here are some example queries from the codebase:

```clojure
;; Get the current faction
(deftrack current-faction [conn]
  @(posh/pull conn faction-pull @(current-faction-eid conn)))

;; Get all terrains
(deftrack terrains [conn]
  (let [map-eid' @(game-map-eid conn)]
    (:map/terrains
     @(posh/pull conn [{:map/terrains terrain-pull}]
                 map-eid'))))

;; Check if a unit can move
(deftrack can-move? [conn q r]
  (when-let [unit @(unit-at conn q r)]
    (game/can-move? @conn @(game conn) unit)))
```

These queries are used by UI components to display the game state and respond to user interactions.
