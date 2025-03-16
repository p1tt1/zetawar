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
