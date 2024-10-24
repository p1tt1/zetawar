(ns zetawar.dev
  (:require
   [cljs.spec.test.alpha :as spec.test]
   [devtools.core :as devtools]
   [zetawar.game-test]
   [zetawar.subs-test]
   [zetawar.devcards]))

(enable-console-print!)

(devtools/install!)

(spec.test/instrument)
