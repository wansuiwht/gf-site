
.PHONY: build
build:
	rm versions.json
	mv versions.bak.json versions.json
	npm run build