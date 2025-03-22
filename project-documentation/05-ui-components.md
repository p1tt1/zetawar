# UI Components and Rendering

Zetawar's user interface is built using Reagent, a ClojureScript interface to React. This document explains the UI components, rendering process, and how the UI interacts with the game state.

## UI Architecture

The UI follows a reactive architecture where components are functions of the application state. When the state changes, the components automatically re-render to reflect the new state.

### Key Files

- `src/cljs/zetawar/views.cljs`: Contains the main UI components
- `src/cljs/zetawar/subs.cljs`: Contains reactive queries (subscriptions) that components use to access the game state
- `src/cljs/zetawar/events/ui.cljs`: Contains event handlers for user interactions

## Main Components

### App Root

The `app-root` component is the entry point for the UI:

```clojure
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
```

### Game Interface

The `game-interface` component contains the main game UI:

```clojure
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
```

### Game Board

The `board` component renders the game board:

```clojure
(defn board [{:as view-ctx :keys [conn]}]
  [:svg#board {:width @(subs/map-width-px conn)
               :height @(subs/map-height-px conn)}
   [tiles view-ctx]])
```

The `tiles` component renders all the terrain tiles:

```clojure
(defn tiles [{:as view-ctx :keys [conn]}]
  (into [:g]
        (for [terrain @(subs/terrains conn)]
          [tile view-ctx terrain])))
```

Each `tile` component renders a terrain tile, its border, any unit on the tile, and a mask if needed:

```clojure
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
```

### Faction Actions

The `faction-actions` component renders the action buttons for the selected unit or base:

```clojure
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
```

### Modals

The UI includes several modal dialogs for various purposes:

- `unit-picker`: For selecting a unit to build
- `faction-settings`: For configuring faction settings
- `new-game-settings`: For starting a new game
- `end-turn-alert`: For confirming the end of a turn
- `win-message`: For displaying a win message

Here's an example of the `modal` component:

```clojure
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
```

## Reactive Queries (Subscriptions)

The UI components use reactive queries defined in `subs.cljs` to access the game state. These queries automatically update when the underlying data changes, causing the components to re-render.

Here are some examples of reactive queries:

```clojure
;; Get the current faction
(deftrack current-faction [conn]
  @(posh/pull conn faction-pull @(current-faction-eid conn)))

;; Check if a unit can move
(deftrack can-move? [conn q r]
  (when-let [unit @(unit-at conn q r)]
    (game/can-move? @conn @(game conn) unit)))

;; Check if a unit can attack
(deftrack can-attack? [conn q r]
  (when-let [unit @(unit-at conn q r)]
    (and (game/can-attack? @conn @(game conn) unit)
         @(any-enemy-in-range-of? conn q r))))

;; Check if a tile is selected
(deftrack selected? [conn q r]
  (let [app' @(app conn)]
    (and (= q (:app/selected-q app'))
         (= r (:app/selected-r app')))))
```

## Event Handling

User interactions trigger events that are handled by functions in `events/ui.cljs`. These functions update the game state, which in turn causes the UI to re-render.

Here's an example of an event handler:

```clojure
(defmethod router/handle-event ::select-hex
  [{:as handler-ctx :keys [db]} [_ ev-q ev-r]]
  (let [app (app/root db)
        game (app/current-game db)
        [selected-q selected-r] (app/selected-hex db)
        [targeted-q targeted-r] (app/targeted-hex db)
        unit (game/unit-at db game ev-q ev-r)
        terrain (game/terrain-at db game ev-q ev-r)
        selected-unit (game/unit-at db game selected-q selected-r)
        selected-terrain (game/terrain-at db game selected-q selected-r)
        targeted-unit (game/unit-at db game targeted-q targeted-r)
        targeted-terrain (game/terrain-at db game targeted-q targeted-r)]
    {:tx (cond
           ;; selecting selected tile
           (and (= ev-q selected-q) (= ev-r selected-r))
           (cond-> []
             (and selected-q selected-r)
             (conj [:db/retract (e app) :app/selected-q selected-q]
                   [:db/retract (e app) :app/selected-r selected-r])

             (and targeted-q targeted-r)
             (conj [:db/retract (e app) :app/targeted-q targeted-q]
                   [:db/retract (e app) :app/targeted-r targeted-r]))

           ;; selecting targeted tile
           (and (= ev-q targeted-q) (= ev-r targeted-r))
           [[:db/retract (e app) :app/targeted-q targeted-q]
            [:db/retract (e app) :app/targeted-r targeted-r]]

           ;; selecting in range enemy unit with unit selected
           (and unit
                selected-unit
                (not (game/unit-current? db game unit))
                (and (game/can-attack? db game selected-unit)
                     (game/in-range? db selected-unit unit)))
           [{:db/id (e app)
             :app/targeted-q ev-q
             :app/targeted-r ev-r}]

           ;; ... more conditions ...
           )}))
```

## Rendering Process

The rendering process follows these steps:

1. The `core.cljs` file initializes the system and renders the `app-root` component.
2. The `app-root` component renders the main UI components.
3. These components use reactive queries to access the game state.
4. When the user interacts with the UI, events are dispatched to update the game state.
5. When the game state changes, the reactive queries update, causing the components to re-render.

This reactive architecture ensures that the UI always reflects the current game state, making the application more maintainable and easier to reason about.

## Styling

The UI is styled using Tailwind CSS, a utility-first CSS framework. Tailwind classes are applied directly to the HTML elements in the Reagent components.

For example:

```clojure
[:button.w-full.py-2.px-4.bg-blue-500.text-white.rounded.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500.focus:ring-opacity-50
 {:on-click #(dispatch [::events.ui/move-selected-unit])}
 (translate :move-unit-button)]
```

This approach allows for rapid UI development without the need for custom CSS files.
