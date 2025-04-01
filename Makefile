.PHONY: dev stop dev-restart devcards devcards-restart build-staging build-prod deploy-staging deploy-prod clean test

dev:
	npx shadow-cljs watch app

stop:
	npx shadow-cljs stop

dev-restart:
	$(MAKE) stop
	$(MAKE) dev

devcards:
	npm run devcards

devcards-restart:
	$(MAKE) stop
	$(MAKE) devcards

build-staging:
	clojure -T:build prod :env '"staging"'

build-prod:
	clojure -T:build prod :env '"prod"'

deploy-staging: build-staging
	./bin/deploy -b staging.zetawar.com -P

deploy-prod: build-prod
	./bin/deploy -b www.zetawar.com -P

clean:
	clojure -T:build clean

test:
	npx shadow-cljs compile test
