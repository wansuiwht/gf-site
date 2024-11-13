
.PHONY: build
build:
	rm versions.json
	mv versions.build.json versions.json
	npm run build