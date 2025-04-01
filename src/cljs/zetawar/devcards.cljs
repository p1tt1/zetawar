(ns zetawar.devcards
  (:require
   [devcards.core :as devcards :include-macros true]
   [zetawar.devcards.data-formats]
   [zetawar.devcards.game-specs]
   [zetawar.devcards.maps-and-scenarios]
   [zetawar.devcards.selection-and-target]
   [zetawar.site :as site]
   ;; System component namespaces - required for Integrant multimethods
   [zetawar.system.datascript]
   [zetawar.system.game-views]
   [zetawar.system.game]
   [zetawar.system.players]
   [zetawar.system.reagent]
   [zetawar.system.router]
   ;; Player implementation namespaces - required for player multimethods
   [zetawar.players.human]
   [zetawar.players.ai.reference]
   [zetawar.players.ai.custom]
   [zetawar.players.ai.custom-js]))

(defn ^:export init []
  (devcards/start-devcard-ui!))
