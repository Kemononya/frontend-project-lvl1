install:
	npm ci

brain-games:
	node binbrain-games.js

publish:
	npm publish --dry-run
