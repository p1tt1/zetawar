(ns zetawar.cryogen
  (:require [cryogen-core.compiler :as compiler]
            [cryogen-core.config :as config]
            [zetawar.cryogen-config :as zetawar-config]))

(defn compile-site
  "Compile the site with the given environment."
  [& [env]]
  (let [config (zetawar-config/custom-config)]
    (compiler/compile-assets config)))

(defn -main [& args]
  (compile-site))
