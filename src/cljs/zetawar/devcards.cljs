(ns zetawar.devcards
  (:require
   [devcards.core :as devcards :include-macros true]
   [zetawar.devcards.data-formats]
   [zetawar.devcards.game-specs]
   [zetawar.devcards.maps-and-scenarios]
   [zetawar.devcards.selection-and-target]
   [zetawar.site :as site]))

(defn ^:export init []
  (devcards/start-devcard-ui!))
