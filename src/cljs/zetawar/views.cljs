(ns zetawar.views
  (:require
   [reagent.core :as r]
   [zetawar.site :as site]))

;; Simplified views that don't rely on complex game logic
(defn app-root [_]
  [:div
   [:h2 "Simplified App Root"]
   [:p "This is a placeholder for the full game UI."]])
