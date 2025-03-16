(ns zetawar.cryogen-config
  (:require [cryogen-core.config :refer [resolve-config]]
            [zetawar.views.site :as site-views]))

(defn custom-config []
  (merge (resolve-config)
         {:site-title "Zetawar"
          :description "A turn based strategy game and AI platform"
          :blog-prefix "/blog"
          :posts-per-page 10
          :post-date-format "yyyy-MM-dd"
          :sass-src "src/scss"
          :sass-dest "assets/css"
          :resources ["assets"]
          :keep-files [".git"]
          :ignored-files [#"\.#.*" #".*\.swp$"]
          :previews? true
          :post-preview-size 300
          :clean-urls true
          :hide-future-posts true
          :klipse {:settings {:selector ".klipse-cljs"}}
          :debug? false
          
          ;; Custom renderers to match your existing site
          :page-renderer 'zetawar.views.site/render-page
          :post-renderer 'zetawar.views.site/render-blog-post
          :home-renderer 'zetawar.views.site/render-index
          :tag-renderer 'zetawar.views.site/render-blog-index
          
          ;; Custom metadata
          :environment "dev"
          :prefix ""}))
