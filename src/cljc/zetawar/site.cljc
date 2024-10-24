(ns zetawar.site
  (:require
   [clojure.string :as string])
  #?(:cljs
     (:require-macros
      [zetawar.site :refer [env-prefix env-build env-build-timestamp]])))

#?(:clj
   (do

     (defmacro env-prefix []
       (or (System/getenv "ZETAWAR_PREFIX") ""))

     (defmacro env-build []
       (or (System/getenv "ZETAWAR_BUILD") ""))

     (defmacro env-build-timestamp []
       (or (System/getenv "BUILD_TIMESTAMP") ""))

     )
   )

(def +prefix+ (env-prefix))

(defn prefix [& url-parts]
  (apply str +prefix+ url-parts))

(def build (env-build))

(def build-timestamp (env-build-timestamp))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Perun

#?(:clj
   (do

     (defn slug-fn [_ m]
       (let [[year month day & parts] (string/split (:filename m) #"[-\.]")
             name-part (some->> parts
                                drop-last
                                not-empty
                                (string/join "-")
                                string/lower-case)]
         (when (and year month day name-part)
           (str year "/" month "/" day "/" name-part))))

     (defn permalink-fn [global-meta {:keys [slug parent-path filename] :as m}]
       (if (string/starts-with? parent-path "posts")
         (str +prefix+ "/blog/" slug "/")
         (str +prefix+ (string/replace filename #"\.markdown" "/"))))

     (defn devcards? [{:keys [path]}]
       (= path "pages/devcards.markdown"))

     (defn page? [{:keys [path]}]
       (and (not (devcards? path))
            (string/starts-with? path "pages/")))

     (defn post? [{:keys [path]}]
       (and (not (devcards? path))
            (string/starts-with? path "posts/")))

     )
   )

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Devcards

#?(:cljs
   (do

     (defn viewing-devcards?
       "Returns true if currently viewing devcards."
       []
       (re-matches #".*/devcards.*" js/window.location.href))

     )
   )
