# Zetawar Technical Overview

Zetawar is a turn-based strategy game and AI platform built with ClojureScript. The game features a hexagonal grid-based map where players control factions with various units to capture bases and defeat enemy units.

## Project Structure

The project follows a typical ClojureScript project structure:

- `src/clj`: Clojure source code (server-side)
- `src/cljc`: Shared Clojure/ClojureScript code
- `src/cljs`: ClojureScript source code (client-side)
- `src/scss`: SCSS stylesheets
- `content`: Cryogen site content
- `assets`: Static assets (images, audio, etc.)

## Key Components

1. **Game Logic**: Core game mechanics, rules, and state management
2. **UI Components**: Reagent-based UI components for rendering the game
3. **Event System**: Event handling for user interactions
4. **AI System**: AI player implementations
5. **Data Model**: DataScript-based data model for game state

## Technology Stack

- **ClojureScript**: Primary programming language
- **Reagent**: React wrapper for UI components
- **DataScript**: Immutable database for game state
- **Posh**: Reactive queries over DataScript
- **Shadow-cljs**: Build tool for ClojureScript
- **Tailwind CSS**: Utility-first CSS framework

## Game Features

- Hexagonal grid-based map
- Multiple unit types with different abilities
- Base capturing and unit building
- Turn-based gameplay
- AI opponents
- Multiplayer support

## License

Zetawar is licensed under the MIT license. The game assets (tiles, sprites, music) are licensed under Creative Commons licenses.
