# Architecture and Programming Paradigms

Zetawar employs several architectural patterns and programming paradigms that are common in ClojureScript applications. This document outlines the key architectural decisions and paradigms used in the project.

## Functional Programming

Zetawar is built using functional programming principles, which are core to Clojure and ClojureScript:

- **Immutable Data Structures**: All data in the game is immutable, preventing side effects and making the application more predictable.
- **Pure Functions**: Most functions in the codebase are pure, meaning they have no side effects and always return the same output for the same input.
- **Function Composition**: Complex operations are built by composing smaller, focused functions.
- **Higher-Order Functions**: Functions that take other functions as arguments or return functions are used extensively.

## Reactive Programming

The UI is built using reactive programming principles:

- **Reagent**: A ClojureScript interface to React that provides a way to define UI components as functions of application state.
- **Posh**: A library that provides reactive queries over DataScript, allowing UI components to automatically update when the underlying data changes.
- **Subscriptions**: The `subs.cljs` file defines reactive queries (subscriptions) that components can use to access and react to changes in the game state.

## Event-Driven Architecture

User interactions and game logic are handled through an event system:

- **Event Handlers**: Defined in `events/ui.cljs` and other event namespaces, these functions handle user interactions and game events.
- **Event Dispatch**: Events are dispatched through a central router that directs them to the appropriate handler.
- **Transaction-Based Updates**: Events result in transactions that update the game state in a predictable manner.

## Data-Oriented Design

The game state is modeled using a data-oriented approach:

- **DataScript**: An immutable database that provides a way to model complex relationships and query them efficiently.
- **Entity-Component System**: Game entities (units, terrains, etc.) are modeled as entities with attributes, similar to an entity-component system.
- **Schema Definition**: The schema in `db.cljs` defines the structure of the game data, including entity types and their relationships.

## Model-View-Controller (MVC) Pattern

The application follows a variation of the MVC pattern:

- **Model**: DataScript database and associated queries (in `db.cljs` and `game.cljs`)
- **View**: Reagent components that render the UI (in `views.cljs`)
- **Controller**: Event handlers that process user interactions and update the model (in `events/ui.cljs`)

## Dependency Injection

The application uses a form of dependency injection:

- **Integrant**: A micro-framework for building applications with component dependencies.
- **System Map**: Defined in `system.cljs`, this map describes the components of the application and their dependencies.
- **Component Lifecycle**: Components can be started, stopped, and reloaded independently, which is useful for development.

## Hexagonal Architecture (Ports and Adapters)

The game logic is isolated from external concerns:

- **Core Game Logic**: Pure functions that operate on game state (in `game.cljs`)
- **UI Adapters**: Components that adapt the core game logic for the UI (in `views.cljs`)
- **AI Adapters**: Components that adapt the core game logic for AI players (in `players/ai/*.cljs`)

These architectural patterns and programming paradigms work together to create a maintainable, extensible, and robust application.
