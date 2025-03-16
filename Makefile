.PHONY: dev build-staging build-prod deploy-staging deploy-prod clean test

dev:
	npx shadow-cljs watch app

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
