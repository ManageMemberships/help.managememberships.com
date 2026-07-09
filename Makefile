.PHONY: deploy

deploy:
	npm run build && npm run push && npm run clear-cache
