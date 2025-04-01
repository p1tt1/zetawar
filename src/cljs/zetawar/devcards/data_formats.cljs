(ns zetawar.devcards.data-formats
  (:require
   [clojure.spec.alpha :as s]
   [devcards.core :as dc :include-macros true]
   [integrant.core :as ig]
   [reagent.core :as r]
   [zetawar.app :as app]
   [zetawar.data :as data]
   [zetawar.doc :as doc]
   [zetawar.subs :as subs]
   [zetawar.system :as system]
   [zetawar.util :refer [breakpoint inspect]]
   [zetawar.views :as views])
  (:require-macros
   [devcards.core :refer [defcard defcard-rg]]))

(def maps
  {:simple-map
   {:id :simple-map
    :description "Simple Map"
    :terrains
    [;; Row 1
     {:q 0
      :r 0
      :terrain-type :plains}
     {:q 1
      :r 0
      :terrain-type :plains}
     {:q 2
      :r 0
      :terrain-type :plains}]}})

(def scenarios
  {:simple-scenario
   {:id :simple-scenario
    :description "Simple Scenario"
    :ruleset-id :zetawar
    :map-id :simple-map
    :max-count-per-unit 10
    :credits-per-base 100
    :bases
    [{:q 0 :r 0 :base-type :base}
     {:q 2 :r 0 :base-type :base}]
    :factions
    [{:color :blue
      :credits 100
      :ai false
      :bases [{:q 0 :r 0}]
      :units [{:q 0
               :r 0
               :unit-type :infantry}]}
     {:color :red
      :credits 100
      :ai true
      :bases [{:q 2 :r 0}]
      :units [{:q 2
               :r 0
               :unit-type :infantry}]}]}})

(defcard map-data-example
  (let [{:keys [simple-map]} maps]
    (if (s/valid? :game/map simple-map)
      simple-map
      (s/explain :game/map simple-map))))

(defcard-rg map-attribute-descriptions
  [:div
   [:h3 {:class "text-xl font-bold mb-2"} "Map attributes"]
   [:table {:class "w-full border-collapse border border-gray-300"}
    [:thead
     [:tr {:class "bg-gray-100"}
      [:th {:class "w-1/5 p-2 text-left border border-gray-300"} "Key"]
      [:th {:class "w-1/3 p-2 text-left border border-gray-300"} "Description"]
      [:th {:class "w-1/2 p-2 text-left border border-gray-300"} "Spec"]]]
    (let [ks [:game.map/description
              :game.map/terrains]]
      (into [:tbody]
            (for [k ks]
              [:tr {:class "hover:bg-gray-50"}
               [:td {:class "w-1/5 p-2 border border-gray-300"} (name k)]
               [:td {:class "w-1/3 p-2 border border-gray-300"} (doc/key-descriptions k)]
               [:td {:class "w-1/2 p-2 border border-gray-300"} (pr-str (s/describe k))]])))]
   [:h3 {:class "text-xl font-bold mt-4 mb-2"} "Terrain attributes"]
   [:table {:class "w-full border-collapse border border-gray-300"}
    [:thead
     [:tr {:class "bg-gray-100"}
      [:th {:class "w-1/5 p-2 text-left border border-gray-300"} "Key"]
      [:th {:class "w-1/3 p-2 text-left border border-gray-300"} "Description"]
      [:th {:class "w-1/2 p-2 text-left border border-gray-300"} "Spec"]]]
    (let [ks [:game.map.terrain/q
              :game.map.terrain/r
              :game.map.terrain/terrain-type]]
      (into [:tbody]
            (for [k ks]
              [:tr {:class "hover:bg-gray-50"}
               [:td {:class "w-1/5 p-2 border border-gray-300"} (name k)]
               [:td {:class "w-1/3 p-2 border border-gray-300"} (doc/key-descriptions k)]
               [:td {:class "w-1/2 p-2 border border-gray-300"} (pr-str (s/describe k))]])))]])

(defcard-rg map-and-scenario-example
  (let [system (ig/init system/game-config)
        game-cfg (:zetawar.system/game system)
        views-cfg (:zetawar.system/game-views system)
        conn (:conn views-cfg)]
    (app/start-new-game! game-cfg
                         data/rulesets
                         maps
                         scenarios
                         :simple-scenario)
    [views/board views-cfg]))

(defcard simple-scenario-example-data
  (:simple-scenario scenarios))
