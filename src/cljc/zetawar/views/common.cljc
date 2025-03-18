(ns zetawar.views.common
  #?@(:clj
      [(:require
        [clojure.java.io :as io]
        [hiccup.page :refer [html5 include-css include-js]]
        [zetawar.site :as site])]
      :cljs
      [(:require
        [zetawar.site :as site])]))

#?(:clj
   (do

     (defn ga [tracking-id]
       [:script
        (str "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){"
             "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),"
             "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)"
             "})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');"
             "ga('create', '" tracking-id "', 'auto');"
             "ga('send', 'pageview');")])

     (defn sentry [sentry-url environment]
       [[:script {:src "https://cdn.ravenjs.com/3.9.1/raven.min.js"}]
        [:script (str "Raven.config('" sentry-url "', {"
                      "release: '" site/build "',"
                      "environment: '" environment "',"
                      "tags: {git_commit: '" site/build "'}"
                      "}).install();")]])

     (defn head [{global-meta :meta :as data} title]
       (into [:head
              [:meta {:charset "utf-8"}]
              [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
              [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
              [:title title]
              (include-css (site/prefix "/css/main.css"))
              (include-css (site/prefix "/css/highlight/default.css"))
              (include-js (site/prefix "/js/highlight.pack.js"))
              [:script "hljs.initHighlightingOnLoad();"]
              (some-> (:google-analytics-tracking-id global-meta)
                      ga)]
             (some-> (:sentry-url global-meta)
                     (sentry (:sentry-environment global-meta)))))

     ))

(def nav-links
  [{:href (site/prefix "/")                            :title "Game"}
   {:href (site/prefix "/blog")                        :title "Blog"}
   {:href (site/prefix "/docs")                        :title "Documentation"}
   {:href "https://github.com/zetawar/zetawar/issues"  :title "Roadmap"}
   {:href (site/prefix "/backers")                     :title "Backers"}])

(defn navbar
  ([] (navbar nil))
  ([active-title]
   #?(:clj
      [:div#navbar-wrapper {:data-active-title active-title}
       [:nav.fixed.top-0.left-0.right-0.z-50.bg-gray-800.text-white
        [:div.container.mx-auto.px-4
         [:div.flex.items-center.h-16
          [:a.flex.items-center.text-xl.font-bold.mr-4 {:href "/"}
           [:img.inline.mr-3 {:src (site/prefix "/images/navbar-logo.svg")}]
           "Zetawar"]]
         [:div
          (into [:ul.flex.space-x-4]
                (for [{:keys [href title]} nav-links]
                  (if (= title active-title)
                    [:li.active [:a.text-white.font-medium {:href href} title]]
                    [:li [:a.text-gray-300.hover:text-white {:href href} title]])))]]]]
      :cljs
      [:nav.fixed.top-0.left-0.right-0.z-50.bg-gray-800.text-white
       [:div.container.mx-auto.px-4
        [:div.flex.items-center.justify-between.h-16
         [:a.flex.items-center.text-xl.font-bold.mr-4 {:href "/"}
          [:img.inline.mr-3 {:src (site/prefix "/images/navbar-logo.svg")}]
          "Zetawar"]
         [:div
          (into [:ul.flex.space-x-4]
                (for [{:keys [href title]} nav-links]
                  (if (= title active-title)
                    [:li.active [:a.text-white.font-medium {:href href} title]]
                    [:li [:a.text-gray-300.hover:text-white.transition-colors {:href href} title]])))]]]])))

(defn footer []
  [:div.container.mx-auto.px-4
   [:div#footer.text-center.mt-5.py-2.border-t.border-gray-300.text-gray-600
    [:p
     "Build: "
     (if (not-empty site/build)
       [:a.text-gray-600.hover:text-gray-800 {:href (str "/builds/" site/build)} site/build]
       "DEV")
     (when (not-empty site/build-timestamp)
       (str " • " site/build-timestamp))]
    [:p
     "Follow "
     [:a.text-gray-600.hover:text-gray-800 {:href "https://twitter.com/ZetawarGame"} "@ZetawarGame"]
     " for updates. "
     "Questions or comments? Send us some "
     [:a.text-gray-600.hover:text-gray-800 {:href "http://goo.gl/forms/RgTpkCYDBk"} "feedback"]
     "."]
    [:p
     "Copyright 2016 Arugaba LLC under the "
     [:a.text-gray-600.hover:text-gray-800 {:href "https://github.com/Zetawar/zetawar/blob/master/LICENSE.txt"}
      "MIT license"]]
    [:p
     "Artwork from "
     [:a.text-gray-600.hover:text-gray-800 {:href "https://github.com/cvincent/elite-command"} "Elite Command"]
     " Copyright 2015 Chris Vincent under "
     [:a.text-gray-600.hover:text-gray-800 {:href "http://creativecommons.org/licenses/by/4.0/"}
      "Creative Commons Attribution 4.0 International License"]]]])
