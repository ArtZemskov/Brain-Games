install:
		npm ci

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run
	
lint:
		npx eslint .

test:
		npx jest

test-coverage:
		npx jest --coverage