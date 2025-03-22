# Dependencies

Zetawar uses a variety of dependencies to implement its functionality. This document provides an overview of the key dependencies used in the project, their purposes, and how they are integrated.

## ClojureScript Dependencies

The ClojureScript dependencies are defined in `deps.edn`:

```clojure
{:paths ["assets" "src/clj" "src/cljc" "src/cljs"]
 :deps
 {;; Core dependencies
  com.cognitect/transit-cljs {:mvn/version "0.8.280"}
  datascript/datascript {:mvn/version "1.5.3"}
  integrant/integrant {:mvn/version "0.8.1"}
  org.clojure/clojurescript {:mvn/version "1.11.60"}
  org.clojure/core.async {:mvn/version "1.6.673"}
  org.clojure/tools.cli {:mvn/version "1.0.219"}
  posh/posh {:mvn/version "0.5.5"}
  reagent/reagent {:mvn/version "1.2.0"}
  
  ;; Site generation
  cryogen-core/cryogen-core {:mvn/version "0.4.1"}
  hiccup/hiccup {:mvn/version "2.0.0-alpha2"}
  
  ;; Other dependencies
  tongue/tongue {:mvn/version "0.4.4"}}

 :aliases
 {:antq
  {:extra-deps {com.github.liquidz/antq {:mvn/version "2.11.1276"}}
   :main-opts ["-m" "antq.core"]}
  
  :dev
  {:extra-paths ["test/cljs"]
   :extra-deps
   {thheller/shadow-cljs {:mvn/version "2.25.2"}
    binaryage/devtools {:mvn/version "1.0.6"}
    nubank/workspaces {:mvn/version "1.1.1"}}}
  
  :build
  {:deps {io.github.clojure/tools.build {:mvn/version "0.9.4"}}
   :ns-default build}
  
  :test
  {:extra-paths ["test/cljs"]
   :extra-deps
   {org.clojure/test.check {:mvn/version "1.1.1"}
    com.gfredericks/test.chuck {:mvn/version "0.2.13"}}}
  
  :run-tests
  {:main-opts ["-m" "shadow.cljs.devtools.cli" "compile" "test"]}
  
  :serve
  {:main-opts ["-m" "shadow.cljs.devtools.cli" "watch" "app"]}}}
```

### Core Dependencies

1. **ClojureScript** (`org.clojure/clojurescript`): The ClojureScript compiler and runtime.

2. **DataScript** (`datascript/datascript`): An immutable in-memory database and Datalog query engine. DataScript is used to store and query the game state, providing a powerful and flexible way to model the game's entities and their relationships.

3. **Posh** (`posh/posh`): A library that provides reactive queries over DataScript. Posh is used to create reactive subscriptions that automatically update when the underlying data changes, enabling the UI to stay in sync with the game state.

4. **Reagent** (`reagent/reagent`): A ClojureScript interface to React. Reagent is used to build the UI components, providing a functional and declarative way to define the user interface.

5. **Integrant** (`integrant/integrant`): A micro-framework for building applications with component dependencies. Integrant is used to manage the lifecycle of the application's components, such as the database, router, and game engine.

6. **Core.Async** (`org.clojure/core.async`): A library for asynchronous programming. Core.Async is used to handle asynchronous operations, such as user interactions and AI player turns.

7. **Transit** (`com.cognitect/transit-cljs`): A data exchange format and set of libraries for conveying values between applications. Transit is used for serializing and deserializing game state.

8. **Tools.CLI** (`org.clojure/tools.cli`): A library for parsing command-line arguments. Tools.CLI is used for the command-line interface of the game.

### Site Generation

1. **Cryogen** (`cryogen-core/cryogen-core`): A static site generator. Cryogen is used to generate the game's website.

2. **Hiccup** (`hiccup/hiccup`): A library for representing HTML in Clojure. Hiccup is used to generate HTML for the game's website.

### Other Dependencies

1. **Tongue** (`tongue/tongue`): A library for internationalization. Tongue is used to provide translations for the game's UI.

### Development Dependencies

1. **Shadow-CLJS** (`thheller/shadow-cljs`): A build tool for ClojureScript. Shadow-CLJS is used to compile the ClojureScript code and manage the development workflow.

2. **Devtools** (`binaryage/devtools`): A set of tools for ClojureScript development. Devtools is used to enhance the development experience, providing features like better console output and object inspection.

3. **Workspaces** (`nubank/workspaces`): A tool for developing and testing UI components in isolation. Workspaces is used to develop and test the game's UI components.

4. **Test.Check** (`org.clojure/test.check`): A property-based testing library. Test.Check is used to write property-based tests for the game's logic.

5. **Test.Chuck** (`com.gfredericks/test.chuck`): Extensions for Test.Check. Test.Chuck is used to enhance the property-based testing capabilities.

## JavaScript Dependencies

The JavaScript dependencies are defined in `package.json`:

```json
{
  "name": "zetawar",
  "description": "A turn based strategy game and AI platform",
  "repository": {
    "type": "git",
    "url": "https://github.com/Zetawar/zetawar.git"
  },
  "license": "MIT",
  "version": "0.1.0",
  "scripts": {
    "css:build": "sass --load-path=node_modules src/scss/tailwind.scss:assets/css/tailwind.css && npx tailwindcss -c tailwind.config.js -i assets/css/tailwind.css -o assets/css/main.css",
    "css:watch": "sass --load-path=node_modules --watch src/scss/tailwind.scss:assets/css/tailwind.css & npx tailwindcss -c tailwind.config.js -i assets/css/tailwind.css -o assets/css/main.css --watch",
    "css:build:prod": "sass --load-path=node_modules src/scss/tailwind.scss:assets/css/tailwind.css --style compressed && npx tailwindcss -c tailwind.config.js -i assets/css/tailwind.css -o assets/css/main.css --minify",
    "css:autoprefixer": "postcss assets/css/main.css --use autoprefixer -o assets/css/main.css",
    "dev": "npm run css:build && shadow-cljs watch app",
    "build": "npm run css:build:prod && shadow-cljs release app",
    "test": "shadow-cljs compile test"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "postcss-cli": "^11.0.1",
    "postcss-import": "^16.1.0",
    "postcss-nesting": "^13.0.1",
    "sass": "^1.63.6",
    "shadow-cljs": "^2.25.2",
    "source-map-support": "^0.5.21",
    "tailwindcss": "^3.3.3"
  },
  "dependencies": {
    "clipboard": "^2.0.11",
    "highlight.js": "^11.8.0",
    "raven-js": "^3.27.2",
    "react": "^16.3.0",
    "react-dom": "^16.3.0",
    "react-grid-layout": "^1.5.1",
    "react-icons": "^4.10.1",
    "reakit": "0.11.2",
    "zetawar-js-lib": "file:../zetawar-js-lib"
  }
}
```

### Core Dependencies

1. **React** (`react` and `react-dom`): A JavaScript library for building user interfaces. React is used as the underlying UI library for Reagent.

2. **Clipboard.js** (`clipboard`): A modern approach to copy text to clipboard. Clipboard.js is used to implement the "Copy URL" functionality.

3. **Highlight.js** (`highlight.js`): A syntax highlighter. Highlight.js is used to highlight code snippets on the website.

4. **Raven.js** (`raven-js`): A JavaScript client for Sentry, an error tracking service. Raven.js is used to track and report errors in the application.

5. **React Grid Layout** (`react-grid-layout`): A draggable and resizable grid layout for React. React Grid Layout is used to implement the grid-based layout of the game board.

6. **React Icons** (`react-icons`): A collection of popular icons for React. React Icons is used to add icons to the UI.

7. **Reakit** (`reakit`): A toolkit for building accessible UI components. Reakit is used to enhance the accessibility of the UI.

8. **Zetawar JS Lib** (`zetawar-js-lib`): A custom JavaScript library for Zetawar. This library provides JavaScript-specific functionality for the game.

### Development Dependencies

1. **Tailwind CSS** (`tailwindcss`): A utility-first CSS framework. Tailwind CSS is used to style the UI components.

2. **Sass** (`sass`): A CSS preprocessor. Sass is used to write more maintainable CSS.

3. **PostCSS** (`postcss`, `postcss-cli`, `postcss-import`, `postcss-nesting`): A tool for transforming CSS with JavaScript. PostCSS is used to process the CSS, adding features like nesting and importing.

4. **Autoprefixer** (`autoprefixer`): A PostCSS plugin to parse CSS and add vendor prefixes. Autoprefixer is used to ensure cross-browser compatibility.

5. **Source Map Support** (`source-map-support`): Adds source map support to Node.js. Source Map Support is used to improve the debugging experience.

## Integration

The dependencies are integrated into the project through the build system and the application code:

1. **Build System**: Shadow-CLJS is used to compile the ClojureScript code and manage the JavaScript dependencies. The `shadow-cljs.edn` file configures the build process:

```clojure
;; shadow-cljs configuration
{:deps {:aliases [:dev]}
 :dev-http {8080 "assets"}
 :builds
 {:app
  {:target :browser
   :output-dir "assets/js/main"
   :asset-path "/js/main"
   :modules {:main {:init-fn zetawar.core/init}}
   :devtools {:after-load zetawar.core/reload}}
  
  :cli
  {:target :node-script
   :output-to "assets/js/cli.js"
   :main zetawar.cli/main
   :devtools {:after-load zetawar.cli/reload}}
  
  :workspaces
  {:target nubank.workspaces.shadow-cljs.target
   :ns-regexp "-(test|cards)$"
   :output-dir "assets/js/workspaces"
   :asset-path "/js/workspaces"
   :devtools {:http-root "assets"
              :http-port 8081
              :http-resource-root "."}}
  
  :test
  {:target :browser-test
   :test-dir "target/test"
   :devtools {:http-port 8082
              :http-root "target/test"}
   :ns-regexp ".*-test$"}}}
```

2. **Application Code**: The dependencies are used throughout the application code to implement various features. For example:

   - DataScript is used in `src/cljs/zetawar/db.cljs` to define the database schema and query functions.
   - Reagent is used in `src/cljs/zetawar/views.cljs` to define the UI components.
   - Integrant is used in `src/cljs/zetawar/system.cljs` to define the system components and their dependencies.
   - Posh is used in `src/cljs/zetawar/subs.cljs` to define reactive queries.

## Dependency Management

The project uses two dependency management systems:

1. **deps.edn**: For ClojureScript dependencies, using the Clojure CLI tools.
2. **package.json**: For JavaScript dependencies, using npm.

The `install-deps.sh` script is used to install both sets of dependencies:

```bash
#!/bin/bash

# Install npm dependencies
npm install

# Install Clojure dependencies
clojure -P
```

This script ensures that all dependencies are installed correctly before running the application.
