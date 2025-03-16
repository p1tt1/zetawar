# Boot to deps.edn Migration Plan

**Date:** March 16, 2025  
**Note:** This document is AI-generated.

## Project Overview

The Zetawar project currently uses:
- **Boot** as the primary build tool
- **Perun** for static site generation
- **ClojureScript** for the game logic
- **Reagent** for UI components
- **Integrant** for system components
- **Devcards** for development and testing
- **Shadow-cljs** for workspaces (partially implemented)

## Migration Goals

1. Completely remove Boot dependencies
2. Use deps.edn as the primary project manager
3. Modernize the development workflow
4. Maintain all existing functionality

## Migration Challenges

The main challenges in this migration are:

1. **Static Site Generation**: Perun is tightly integrated with Boot, so we'll need an alternative
2. **CSS Processing**: Currently using Boot's SASS integration
3. **Development Workflow**: Hot reloading, REPL integration
4. **Build Process**: Production builds, optimizations
5. **Deployment**: Currently using Boot tasks and a deploy script

## Proposed Solution

The migration will use:

1. **deps.edn** as the primary dependency manager
2. **shadow-cljs** for ClojureScript compilation (expanding existing config)
3. **tools.build** for build automation
4. **Cryogen** to replace Perun for static site generation
5. **npm scripts** directly for CSS processing
6. **Workspaces** to replace Devcards

## Detailed Implementation Plan

### 1. Complete deps.edn Configuration

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
 {:dev
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

### 2. Create shadow-cljs.edn Configuration

```clojure
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

### 3. Create build.clj Script

```clojure
(ns build
  (:require [clojure.tools.build.api :as b]
            [clojure.java.shell :as shell]
            [clojure.string :as str]
            [cryogen.core :as cryogen]))

(def lib 'zetawar/zetawar)
(def version "0.1.0")
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def uber-file (format "target/%s-%s-standalone.jar" (name lib) version))

;; CSS compilation using npm
(defn compile-css [_]
  (println "Compiling CSS...")
  (let [result (shell/sh "npm" "run" "css:build")]
    (if (zero? (:exit result))
      (println "CSS compilation successful")
      (do
        (println "CSS compilation failed:")
        (println (:err result))
        (throw (ex-info "CSS compilation failed" {:result result}))))))

;; Production CSS compilation
(defn compile-css-prod [_]
  (println "Compiling production CSS...")
  (let [result (shell/sh "npm" "run" "css:build:prod")]
    (if (zero? (:exit result))
      (println "Production CSS compilation successful")
      (do
        (println "Production CSS compilation failed:")
        (println (:err result))
        (throw (ex-info "Production CSS compilation failed" {:result result}))))))

;; Generate site using Cryogen
(defn generate-site [{:keys [env] :or {env "dev"}}]
  (println (str "Generating site with environment: " env))
  (binding [cryogen/*config* (merge cryogen/*config* 
                                   {:environment env
                                    :prefix (System/getenv "ZETAWAR_PREFIX")})]
    (cryogen/compile-assets-timed)))

;; Clean target directory
(defn clean [_]
  (println "Cleaning target directory...")
  (b/delete {:path "target"}))

;; Build for development
(defn dev [opts]
  (clean opts)
  (compile-css opts)
  (generate-site (assoc opts :env "dev")))

;; Build for production
(defn prod [opts]
  (clean opts)
  (compile-css-prod opts)
  (generate-site (assoc opts :env "prod")))

;; Deploy to S3 (reusing existing deploy script)
(defn deploy [{:keys [env bucket] :or {env "prod" bucket "www.zetawar.com"}}]
  (println (str "Deploying to " bucket "..."))
  (let [cmd ["./bin/deploy" "-b" bucket "-P"]
        result (apply shell/sh cmd)]
    (if (zero? (:exit result))
      (println "Deployment successful")
      (do
        (println "Deployment failed:")
        (println (:err result))
        (throw (ex-info "Deployment failed" {:result result}))))))
```

### 4. Update package.json for CSS Processing

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
    "css:build": "sass src/scss/main.scss:assets/css/main.css",
    "css:watch": "sass --watch src/scss/main.scss:assets/css/main.css",
    "css:build:prod": "sass src/scss/main.scss:assets/css/main.css --style compressed",
    "css:autoprefixer": "postcss assets/css/main.css --use autoprefixer -o assets/css/main.css",
    "dev": "shadow-cljs watch app",
    "build": "shadow-cljs release app",
    "test": "shadow-cljs compile test"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "postcss-cli": "^10.1.0",
    "sass": "^1.63.6",
    "shadow-cljs": "^2.25.2",
    "source-map-support": "^0.5.21"
  },
  "dependencies": {
    "highlight.js": "^11.8.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-grid-layout": "^1.3.4",
    "react-icons": "^4.10.1",
    "reakit": "^1.3.11"
  }
}
```

### 5. Create Cryogen Configuration

Create a new file `src/clj/zetawar/cryogen_config.clj`:

```clojure
(ns zetawar.cryogen-config
  (:require [cryogen-core.config :refer [resolve-config]]
            [zetawar.views.site :as site-views]))

(defn custom-config []
  (merge (resolve-config)
         {:site-title "Zetawar"
          :description "A turn based strategy game and AI platform"
          :blog-prefix "/blog"
          :posts-per-page 10
          :post-date-format "yyyy-MM-dd"
          :sass-src "src/scss"
          :sass-dest "assets/css"
          :resources ["assets"]
          :keep-files [".git"]
          :ignored-files [#"\.#.*" #".*\.swp$"]
          :previews? true
          :post-preview-size 300
          :clean-urls true
          :hide-future-posts true
          :klipse {:settings {:selector ".klipse-cljs"}}
          :debug? false
          
          ;; Custom renderers to match your existing site
          :page-renderer 'zetawar.views.site/render-page
          :post-renderer 'zetawar.views.site/render-blog-post
          :home-renderer 'zetawar.views.site/render-index
          :tag-renderer 'zetawar.views.site/render-blog-index
          
          ;; Custom metadata
          :environment "dev"
          :prefix ""}))
```

### 6. Create a Makefile Replacement

```makefile
.PHONY: dev build-staging build-prod deploy-staging deploy-prod clean

dev:
	npx shadow-cljs watch app

build-staging:
	clojure -T:build prod :env '"staging"'

build-prod:
	clojure -T:build prod :env '"prod"'

deploy-staging: build-staging
	./bin/deploy -b staging.zetawar.com -P

deploy-prod: build-prod
	./bin/deploy -b www.zetawar.com -P

clean:
	clojure -T:build clean

test:
	npx shadow-cljs compile test
```

## Implementation Steps

1. **Update deps.edn** with the complete configuration
2. **Update shadow-cljs.edn** with the expanded configuration
3. **Create build.clj** for build automation
4. **Update package.json** with CSS processing scripts
5. **Create Cryogen configuration**
6. **Update Makefile** for common tasks
7. **Migrate content** from Perun to Cryogen format
8. **Update core.cljs** to work with the new build system
9. **Test the development workflow**
10. **Test the production build**
11. **Test the deployment process**

## Files to Remove

Once the migration is complete, these Boot-related files can be removed:
- build.boot
- boot.properties
- Any Boot-specific configuration files

## Benefits of Migration

1. **Modern Tooling**: Using the latest Clojure tooling ecosystem
2. **Simplified Workflow**: Clearer separation of concerns
3. **Better Maintainability**: Easier to update dependencies
4. **Improved Development Experience**: Modern hot reloading and REPL integration
5. **Future-Proof**: deps.edn is the standard for Clojure projects
