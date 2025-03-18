(ns zetawar.views
  (:require
   [cljsjs.clipboard]
   [clojure.string :as string]
   [datascript.core :as d]
   [posh.reagent :as posh]
   [reagent.core :as r :refer [with-let]]
   ["react-icons/fa" :refer [FaLaptop FaUser FaAngleDoubleLeft]]
   [zetawar.data :as data]
   [zetawar.db :refer [e qe]]
   [zetawar.events.ui :as events.ui]
   [zetawar.game :as game]
   [zetawar.logging :as log]
   [zetawar.players :as players]
   [zetawar.site :as site]
   [zetawar.subs :as subs]
   [zetawar.tiles :as tiles]
   [zetawar.util :refer [breakpoint inspect only oonly]]
   [zetawar.views.common :refer [footer navbar]]))

(defn tile-border [{:as view-ctx :keys [conn]} q r]
  (let [[x y] (tiles/offset->pixel q r)]
    [:g {:id (str "border-" q "," r)}
     (cond
       ;; Selected
       @(subs/selected? conn q r)
       [:image {:x x :y y
                :width tiles/width :height tiles/height
                :xlink-href (site/prefix "/images/game/borders/selected.png")}]

       ;; Enemy unit targeted
       (and @(subs/targeted? conn q r)
            @(subs/enemy-at? conn q r))
       [:image {:x x :y y
                :width tiles/width :height tiles/height
                :xlink-href (site/prefix "/images/game/borders/targeted-enemy.png")}]

       ;; Friend unit targeted (for repair)
       (and @(subs/targeted? conn q r)
            @(subs/friend-at? conn q r))
       [:image {:x x :y y
                :width tiles/width :height tiles/height
                :xlink-href (site/prefix "/images/game/borders/targeted-friend.png")}]

       ;; Terrain targeted
       @(subs/targeted? conn q r)
       [:image {:x x :y y
                :width tiles/width :height tiles/height
                :xlink-href (site/prefix "/images/game/borders/selected.png")}])]))

(defn unit-image [unit]
  (let [color-name (-> unit game/unit-color name)]
    ;; TODO: return placeholder if terrain image is not found
    (some-> unit
            (get-in [:unit/type :unit-type/image])
            (string/replace "COLOR" color-name))))

(defn board-unit [{:as view-ctx :keys [conn dispatch]} q r]
  (when-let [unit @(subs/unit-at conn q r)]
    (let [[x y] (tiles/offset->pixel q r)
          image (unit-image unit)]
      [:g {:id (str "unit-" (e unit))}
       [:image {:x x :y y
                :width tiles/width :height tiles/height
                :xlink-href (site/prefix "/images/game/" image)
                :on-click #(dispatch [::events.ui/select-hex q r])}]
       (when (:unit/capturing unit)
         [:image {:x x :y y
                  :width tiles/width :height tiles/height
                  :xlink-href (site/prefix "/images/game/capturing.gif")}])
       [:image {:x x :y y
                :width tiles/width :height tiles/height
                :xlink-href (site/prefix "/images/game/health/" (:unit/count unit) ".png")}]])))

(defn tile-mask [{:as view-ctx :keys [conn]} q r]
  (let [[x y] (tiles/offset->pixel q r)
        show (or
              ;; No unit selected and tile contains current unit with no actions
              (and (not @(subs/unit-selected? conn))
                   @(subs/current-unit-at? conn q r)
                   (not @(subs/unit-can-act? conn q r)))

              ;; Unit selected and tile is a valid attack, repair, or move target
              (and @(subs/unit-selected? conn)
                   (not @(subs/selected? conn q r))
                   (not @(subs/enemy-in-range-of-selected? conn q r))
                   (not (and @(subs/repairable-friend-in-range-of-selected? conn q r)
                             @(subs/selected-can-field-repair? conn)
                             @(subs/has-repairable-armor-type? conn q r)))
                   (not @(subs/valid-destination-for-selected? conn q r))))]
    [:image {:visibility (if show "visible" "hidden")
             :x x :y y
             :width tiles/width :height tiles/height
             :xlink-href (site/prefix "/images/game/mask.png")}]))

(defn terrain-image [terrain]
  (let [color-name (-> terrain
                       (get-in [:terrain/owner :faction/color])
                       (or :none)
                       name)]
    ;; TODO: return placeholder if terrain image is not found
    (some-> terrain
            (get-in [:terrain/type :terrain-type/image])
            (string/replace "COLOR" color-name))))

(defn terrain-tile [view-ctx terrain q r]
  (let [[x y] (tiles/offset->pixel q r)
        image (terrain-image terrain)]
    [:image {:x x :y y
             :width tiles/width :height tiles/height
             :xlink-href (site/prefix "/images/game/" image)}]))

(defn tile [{:as view-ctx :keys [conn dispatch]} terrain]
  (let [{:keys [terrain/q terrain/r]} terrain]
    ^{:key (str q "," r)}
    [:g {:on-click #(dispatch [::events.ui/select-hex q r])
         :on-mouse-enter #(dispatch [::events.ui/hover-hex-enter q r])
         :on-mouse-leave #(dispatch [::events.ui/hover-hex-leave q r])
         :cursor (if @(subs/clickable? conn q r)
                   "pointer"
                   "default")}
     [terrain-tile view-ctx terrain q r]
     [tile-border view-ctx q r]
     [board-unit view-ctx q r]
     [tile-mask view-ctx q r]]))

(defn tiles [{:as view-ctx :keys [conn]}]
  (into [:g]
        (for [terrain @(subs/terrains conn)]
          [tile view-ctx terrain])))

(defn board [{:as view-ctx :keys [conn]}]
  [:svg#board {:width @(subs/map-width-px conn)
               :height @(subs/map-height-px conn)}
   [tiles view-ctx]])

(defn faction-credits [{:as view-ctx :keys [conn translate]}]
  (let [{:keys [faction/credits]} @(subs/current-faction conn)
        {:keys [map/credits-per-base]} @(subs/game-map conn)
        income @(subs/current-income conn)]
    [:p#faction-credits.flex.justify-between.items-center.mb-4.font-medium
     [:span.font-bold (str credits " " (translate :credits-label))]
     [:span.text-gray-600
      (str "+" income)]]))

(defn copy-url-link [{:as view-ctx :keys [conn translate]}]
  (let [clipboard (atom nil)
        node-ref (atom nil)
        text-fn (fn [] js/window.location)]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (reset! clipboard (js/Clipboard. @node-ref #js {"text" text-fn})))
      :component-will-unmount
      (fn [this]
        (.destroy @clipboard)
        (reset! clipboard nil))
      :reagent-render
      (fn [this]
        [:a {:href "#" 
             :ref #(reset! node-ref %)
             :on-click #(.preventDefault %)}
         (translate :copy-game-url-link)])})))

(defn modal [{:keys [show on-hide title body footer]}]
  [:div.fixed.inset-0.z-50.overflow-auto.bg-black.bg-opacity-50
   {:class (when show "block")
    :style {:display (if show "flex" "none")}
    :on-click (fn [e]
                (when (= (.-target e) (.-currentTarget e))
                  (on-hide)))}
   [:div.relative.bg-white.rounded-lg.shadow-xl.m-auto.max-w-lg.w-full
    (when title
      [:div.px-6.py-4.border-b.border-gray-200
       [:button.absolute.top-4.right-4.text-gray-500.hover:text-gray-700
        {:type "button" :on-click on-hide} "×"]
       [:h4.text-xl.font-medium title]])
    (when body
      [:div.px-6.py-4 body])
    (when footer
      [:div.px-6.py-4.border-t.border-gray-200.flex.justify-end.space-x-2 footer])]])

(defn end-turn-alert [{:as view-ctx :keys [conn dispatch translate]}]
  [modal
   {:show @(subs/show-end-turn-alert? conn)
    :on-hide #(dispatch [::events.ui/hide-end-turn-alert])
    :body (translate :end-turn-alert)
    :footer (r/as-element
             [:div.flex.space-x-2
              [:button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600
               {:on-click (fn [e]
                            (.preventDefault e)
                            (dispatch [::events.ui/end-turn])
                            (dispatch [::events.ui/hide-end-turn-alert]))}
               (translate :end-turn-confirm)]
              [:button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400
               {:on-click #(dispatch [::events.ui/hide-end-turn-alert])}
               (translate :cancel-button)]])}])

(defn faction-status [{:as view-ctx :keys [conn dispatch translate]}]
  (let [{:keys [app/show-copy-link]} @(subs/app conn)
        {:keys [game/round]} @(subs/game conn)
        base-count @(subs/current-base-count conn)]
    [:div#faction-status.flex.justify-between.items-center.mb-4
     [:div
      ;; TODO: make link red
      [:a.text-red-600.hover:text-red-800.font-medium 
       {:href "#" 
        :on-click (fn [e]
                    (.preventDefault e)
                    (if @(subs/available-moves-left? conn)
                      (dispatch [::events.ui/show-end-turn-alert])
                      (dispatch [::events.ui/end-turn])))}
       (translate :end-turn-link)]
      (when show-copy-link
        [:span.mx-2 "·" [:span.mx-2 [copy-url-link view-ctx]]])]
     [:div
      [:a.text-blue-600.hover:text-blue-800.mr-2
       {:href "#"
        :on-click (fn [e]
                    (.preventDefault e)
                    (dispatch [::events.ui/show-new-game-settings]))}
       (translate :new-game-link)]
      [:span.mx-2 "·"]
      [:span.ml-2 (str (translate :round-label) " " round)]]]))

(defn faction-actions [{:as view-ctx :keys [conn dispatch translate]}]
  ;; TODO: replace query with something from subs ns
  (let [[round current-color] (-> @(posh/q '[:find ?round ?current-color
                                             :where
                                             [?g :game/round ?round]
                                             [?g :game/current-faction ?f]
                                             [?f :faction/color ?current-color]]
                                           conn)
                                  first)
        {:keys [faction/credits]} @(subs/current-faction conn)]
    [:div#faction-actions
     (when @(subs/selected-can-move-to-targeted? conn)
       [:p
        [:button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50
         {:on-click #(dispatch [::events.ui/move-selected-unit])}
         (translate :move-unit-button)]])
     (when @(subs/selected-can-build? conn)
       [:p
        [:button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50
         {:on-click #(dispatch [::events.ui/show-unit-picker])}
         (translate :build-unit-button)]])
     (when @(subs/selected-can-attack-targeted? conn)
       [:p
        [:button.w-full.py-2.px-4.bg-red-500.text-white.rounded.hover:bg-red-600.focus:outline-none.focus:ring-2.focus:ring-red-500.focus:ring-opacity-50
         {:on-click #(dispatch [::events.ui/attack-targeted])}
         (translate :attack-unit-button)]])
     (when @(subs/selected-can-repair? conn)
       [:p
        [:button.w-full.py-2.px-4.bg-green-500.text-white.rounded.hover:bg-green-600.focus:outline-none.focus:ring-2.focus:ring-green-500.focus:ring-opacity-50
         {:on-click #(dispatch [::events.ui/repair-selected])}
         (translate :repair-unit-button)]])
     (when @(subs/selected-can-repair-targeted? conn)
       [:p
        [:button.w-full.py-2.px-4.bg-green-500.text-white.rounded.hover:bg-green-600.focus:outline-none.focus:ring-2.focus:ring-green-500.focus:ring-opacity-50
         {:on-click #(dispatch [::events.ui/repair-targeted])}
         (translate :field-repair-button)]])
     (when @(subs/selected-can-capture? conn)
       [:p
        [:button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50
         {:on-click #(dispatch [::events.ui/capture-selected])}
         (translate :capture-base-button)]])
     ;; TODO: cleanup conditionals
     ;; TODO: make help text a separate component
     (when (not (or @(subs/selected-can-move? conn)
                    @(subs/selected-can-build? conn)
                    @(subs/selected-can-attack? conn)
                    @(subs/selected-can-repair? conn)
                    @(subs/selected-can-capture? conn)))
       [:p.hidden-xs.hidden-sm
        (translate :select-unit-or-base-tip)])
     (when (and
            (or @(subs/selected-can-move? conn)
                @(subs/selected-can-attack? conn)
                @(subs/selected-can-repair? conn))
            (not
             (or @(subs/selected-can-move-to-targeted? conn)
                 @(subs/selected-can-attack-targeted? conn)
                 @(subs/selected-can-repair-targeted? conn))))
       [:p.hidden-xs.hidden-sm
        (translate :select-target-or-destination-tip)])
     ;; TODO: only display when starting faction is active
     (when (and (= round 1)
                (not @(subs/selected-hex conn)))
       [:p.hidden-xs.hidden-sm
        {:dangerouslySetInnerHTML {:__html (translate :multiplayer-tip)}}])]))

(defn faction-list [{:as view-ctx :keys [conn dispatch translate]}]
  (into [:ul.divide-y.divide-gray-200.border.border-gray-200.rounded]
        (for [faction @(subs/factions conn)]
          (let [faction-eid (e faction)
                color (-> faction
                          :faction/color
                          name
                          string/capitalize)
                active (= faction-eid @(subs/current-faction-eid conn))
                li-class (if active
                           "bg-blue-100 text-blue-800 px-4 py-2 flex justify-between items-center"
                           "bg-white hover:bg-gray-50 px-4 py-2 flex justify-between items-center")]
            [:li {:class li-class}
             [:div.flex.items-center
              [:span color]
              " "
              (when active
                [:> FaAngleDoubleLeft {:className "ml-2" :aria-hidden true}])]
             [:div
              (if (:faction/ai faction)
                [:> FaLaptop {:className "cursor-pointer"
                              :aria-hidden true
                              :onClick #(dispatch [::events.ui/configure-faction faction])
                              :title (translate :configure-faction-tip)}]
                [:> FaUser {:className "cursor-pointer"
                            :aria-hidden true
                            :onClick #(dispatch [::events.ui/configure-faction faction])
                            :title (translate :configure-faction-tip)}])]]))))

(defn status-info [{:as view-ctx :keys [conn translate]}]
  [:div.mt-4.text-sm.text-gray-700
   (let [[sel-q sel-r] @(subs/selected-hex conn)
         [tar-q tar-r] @(subs/targeted-hex conn)
         [sel-mc sel-at sel-ar] @(subs/selected-terrain-effects conn)
         [tar-mc tar-at tar-ar] @(subs/targeted-terrain-effects conn)
         [hover-q hover-r] @(subs/hover-hex conn)]
     [:div.flex.flex-wrap.items-center
      [:div.mr-2
       [:span.font-medium (translate :selected-label)]
       (if sel-q
         [:span
          [:abbr.ml-1.font-mono {:title (translate :tile-coordinates-label) :style {:cursor "inherit"}}
           (str sel-q "," sel-r)]
          (if sel-mc ;; If selected doesn't contain a unit
            [:span
             " ("
             [:abbr.font-mono {:title (translate :terrain-effects-label) :style {:cursor "inherit"}}
              (str sel-mc "," sel-at "," sel-ar)]
             ")"])]
         [:span.ml-1 "-"])]
      [:div.mx-2 "•"]
      [:div.mx-2
       [:span.font-medium (translate :targeted-label)]
       (if tar-q
         [:span
          [:abbr.ml-1.font-mono {:title (translate :tile-coordinates-label) :style {:cursor "inherit"}}
           (str tar-q "," tar-r)]
          " ("
          [:abbr.font-mono {:title (translate :terrain-effects-label) :style {:cursor "inherit"}}
           (str tar-mc "," tar-at "," tar-ar)]
          ")"]
         [:span.ml-1 "-"])]
      [:div.hidden.md:block
       [:div.mx-2 "•"]
       [:div.mx-2
        [:span.font-medium (translate :hover-tile-location)]
        [:span.ml-1.font-mono
         (if hover-q
           (str hover-q "," hover-r)
           "-")]]]])])

(def armor-type-abbrevs
  {:unit-type.armor-type/personnel "P"
   :unit-type.armor-type/armored "Ar"
   :unit-type.armor-type/naval "N"
   :unit-type.armor-type/air "Ai"})

(defn unit-picker-row [unit-type color translate dispatch]
  (let [color-or-grey (if (:affordable unit-type)
                        color
                        "unavailable")
        image (->> (string/replace (:unit-type/image unit-type)
                                   "COLOR" color-or-grey)
                   (str "/images/game/"))
        media-class (if (:affordable unit-type)
                      "media text-left"
                      "media text-left text-muted")
        {:keys [unit-type/id
                unit-type/description
                unit-type/cost
                unit-type/movement
                unit-type/armor
                unit-type/armor-type
                unit-type/can-capture
                unit-type/capturing-armor
                unit-type/min-range
                unit-type/max-range]} unit-type
        armor-type-abbrev (armor-type-abbrevs armor-type)]
    ^{:key (str "unit-row-" id)}
    [:tr.text-center.clickable
     {:on-click #(when (:affordable unit-type)
                   (dispatch [::events.ui/hide-unit-picker])
                   (dispatch [::events.ui/build-unit id]))}
     [:td
      [:div {:class media-class}
       [:div.media-left.media-middle
        [:img {:src image}]]
       [:div.media-body
        [:h4.media-heading description]
        (str (translate :unit-cost-label) cost)]]]
     [:td (case armor-type
            :unit-type.armor-type/personnel
            [:abbr {:title (translate :personnel-name)
                    :style {:cursor "inherit"}}
             armor-type-abbrev]

            :unit-type.armor-type/armored
            [:abbr {:title (translate :armored-name)
                    :style {:cursor "inherit"}}
             armor-type-abbrev]

            :unit-type.armor-type/naval
            [:abbr {:title (translate :naval-name)
                    :style {:cursor "inherit"}}
             armor-type-abbrev]

            :unit-type.armor-type/air
            [:abbr {:title (translate :air-name)
                    :style {:cursor "inherit"}}
             armor-type-abbrev])]
     [:td movement]
     [:td (if can-capture
            [:abbr {:title (str (translate :while-capturing-label)
                                capturing-armor)
                    :style {:cursor "inherit"}}
             armor]
            [:abbr {:title (translate :unit-cannot-capture-bases-label)
                    :style {:cursor "inherit"}}
             armor])]
     [:td (str min-range "-" max-range)]
     [:td 
      (for [unit-strength (:unit-type/strengths unit-type)]
        (let [{:keys [unit-strength/armor-type
                      unit-strength/attack]} unit-strength
              armor-type-abbrev (armor-type-abbrevs armor-type)]
          ^{:key (str "strength-" id "-" (name armor-type))}
          [:div (str armor-type-abbrev ": " attack)]))]
     [:td (string/join ", "
                       (for [can-repair (:unit-type/can-repair unit-type)]
                         (armor-type-abbrevs can-repair "")))]]))

(defn unit-picker [{:as view-ctx :keys [conn dispatch translate]}]
  (let [unit-types @(subs/available-unit-types conn)
        cur-faction @(subs/current-faction conn)
        color (name (:faction/color cur-faction))
        hide-picker #(dispatch [::events.ui/hide-unit-picker])]
    [modal
     {:show @(subs/picking-unit? conn)
      :on-hide hide-picker
      :title (translate :build-title)
      :body (r/as-element
             [:div
              [:table.table.table-bordered.table-striped.table-condensed.table-hover
               [:thead
                [:tr
                 [:th ""]
                 [:th.text-center {:style {:width "12%"}} (translate :armor-type-label)]
                 [:th.text-center {:style {:width "12%"}} (translate :movement-label)]
                 [:th.text-center {:style {:width "12%"}} (translate :armor-label)]
                 [:th.text-center {:style {:width "12%"}} (translate :range-label)]
                 [:th.text-center {:style {:width "12%"}} (translate :attack-label)]
                 [:th.text-center {:style {:width "12%"}} (translate :field-repair-label)]]]
               [:tbody
                (for [unit-type unit-types]
                  [unit-picker-row unit-type color translate dispatch])]]])
      :footer (r/as-element
               [:button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50
                {:on-click hide-picker}
                (translate :cancel-button)])}]))

(def faction-settings-state (r/atom {:selected-player-type nil}))

(defn faction-settings [{:as views-ctx :keys [conn dispatch translate]}]
  (let [faction (subs/faction-to-configure conn)
        faction-color (when faction (subs/faction-color-name faction))
        hide-settings #(dispatch [::events.ui/hide-faction-settings])
        select-player-type #(swap! faction-settings-state assoc :selected-player-type (.-target.value %))
        set-player-type (fn [e]
                          (.preventDefault e)
                          (when-let [player-type-id (->> (or (:selected-player-type @faction-settings-state) :human)
                                                         (keyword 'zetawar.players))]
                            (swap! faction-settings-state assoc :selected-player-type nil)
                            (when faction
                              (dispatch [::events.ui/set-faction-player-type faction player-type-id])))
                          (hide-settings))]
    [modal
     {:show (some? faction)
      :on-hide hide-settings
      :title (str (translate :configure-faction-title-prefix) " " (when faction-color (translate faction-color)))
      :body (r/as-element
             [:form {:on-submit set-player-type}
              [:div.mb-4
               [:label.block.text-gray-700.text-sm.font-bold.mb-2 {:for "player-type"}
                (translate :player-type-label)]
               (into [:select.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight.focus:outline-none.focus:shadow-outline
                      {:id "player-type"
                       :value (or (:selected-player-type @faction-settings-state)
                                  (some-> faction :faction/player-type name)
                                  "")
                       :on-change select-player-type}]
                     (for [[player-type-id {:keys [description ai]}] players/player-types]
                       [:option {:key (name player-type-id)
                                 :value (name player-type-id)}
                        description]))]])
      :footer (r/as-element
               [:div.flex.space-x-2
                [:button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50
                 {:type "button" :on-click set-player-type}
                 (translate :save-button)]
                [:button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50
                 {:type "button" :on-click hide-settings}
                 (translate :cancel-button)]])}]))

(def new-game-settings-state (r/atom {:selected-scenario-id :sterlings-aruba-multiplayer}))

(defn new-game-settings [{:as view-ctx :keys [conn dispatch translate]}]
  (let [default-scenario-id :sterlings-aruba-multiplayer
        hide-settings #(dispatch [::events.ui/hide-new-game-settings])
        select-scenario #(swap! new-game-settings-state assoc :selected-scenario-id (keyword (.-target.value %)))
        start-new-game (fn [e]
                         (.preventDefault e)
                         (dispatch [::events.ui/start-new-game (:selected-scenario-id @new-game-settings-state)])
                         (swap! new-game-settings-state assoc :selected-scenario-id default-scenario-id)
                         (hide-settings))]
    [modal
     {:show @(subs/configuring-new-game? conn)
      :on-hide hide-settings
      :title (translate :new-game-title)
      :body (r/as-element
             [:form {:on-submit start-new-game}
              [:div.mb-4
               [:label.block.text-gray-700.text-sm.font-bold.mb-2 {:for "scenario-id"}
                (translate :scenario-label)]
               (into [:select.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight.focus:outline-none.focus:shadow-outline
                      {:id "scenario-id"
                       :value (name (:selected-scenario-id @new-game-settings-state))
                       :on-change select-scenario}]
                     (for [[scenario-id {:keys [description notes]}] data/scenarios]
                       [:option {:key (str "scenario-" (name scenario-id))
                                 :value (name scenario-id)}
                        (if notes
                          (str description ": " notes)
                          description)]))]])
      :footer (r/as-element
               [:div.flex.space-x-2
                [:button.px-4.py-2.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50
                 {:type "button" :on-click start-new-game}
                 (translate :start-button)]
                [:button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50
                 {:type "button" :on-click hide-settings}
                 (translate :cancel-button)]])}]))

(defn alert [{:as view-ctx :keys [conn dispatch]}]
  (let [{:keys [app/alert-message app/alert-type]} @(subs/app conn)
        alert-class (case (some-> alert-type name)
                      "success" "bg-green-100 border-green-500 text-green-700"
                      "info" "bg-blue-100 border-blue-500 text-blue-700"
                      "warning" "bg-yellow-100 border-yellow-500 text-yellow-700"
                      "danger" "bg-red-100 border-red-500 text-red-700"
                      "bg-gray-100 border-gray-500 text-gray-700")]
    (when alert-message
      [:div.w-full.mb-4
       [:div.w-full
        [:div.border-l-4.p-4.rounded {:class alert-class}
         [:button.float-right.text-gray-500.hover:text-gray-700 
          {:type :button
           :aria-label "Close"
           :on-click #(dispatch [::events.ui/hide-alert])}
          [:span {:aria-hidden true} "×"]]
         alert-message]]])))

(defn game-interface [view-ctx]
  [:div {:class "flex flex-wrap"}
   [:div {:class "w-full md:w-1/6 lg:w-1/5 p-2"}
    [faction-credits view-ctx]
    [faction-list view-ctx]
    [faction-actions view-ctx]]
   [:div {:class "w-full md:w-5/6 lg:w-4/5 p-2"}
    [faction-status view-ctx]
    [board view-ctx]
    [status-info view-ctx]]])

(defn app-root [{:as view-ctx :keys [conn dispatch translate]}]
  [:div
   [new-game-settings view-ctx]
   [faction-settings view-ctx]
   [unit-picker view-ctx]
   [end-turn-alert view-ctx]
   ;; TODO: break win dialog out into it's own component
   ;; TODO: add continue + start new game buttons to win dialog
   [modal
    {:show @(subs/show-win-message? conn)
     :on-hide #(dispatch [::events.ui/hide-win-message])
     :title (translate :win-title)
     :body (r/as-element
            [:div {:dangerouslySetInnerHTML {:__html (translate :win-body)}}])
     :footer (r/as-element
              [:button.px-4.py-2.bg-gray-300.text-gray-800.rounded.hover:bg-gray-400.focus:outline-none.focus:ring-2.focus:ring-gray-500.focus:ring-opacity-50
               {:on-click #(dispatch [::events.ui/hide-win-message])}
               (translate :close-button)])}]
   (navbar "Game")
   [:div {:class "container mx-auto px-4"}
    [alert view-ctx]
    [game-interface view-ctx]]
   (footer)])
