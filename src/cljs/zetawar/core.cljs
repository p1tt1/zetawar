(ns zetawar.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [zetawar.site :as site]))

;; Simple app component that doesn't rely on complex game logic
(defn simple-app []
  [:div.container
   [:div.jumbotron {:style {:margin-top "50px"}}
    [:h1 "Zetawar"]
    [:p "A turn based strategy game and AI platform"]
    [:p "This is a simplified version of the app to resolve dependency conflicts."]
    [:p "The full game functionality has been temporarily disabled."]
    [:div
     [:a.btn.btn-primary.btn-lg {:href "https://github.com/Zetawar/zetawar"} "View on GitHub"]]]])

(defn ^:export init []
  (let [target (.getElementById js/document "main")]
    (rdom/render [simple-app] target)))

(defn ^:export reload []
  (init))
