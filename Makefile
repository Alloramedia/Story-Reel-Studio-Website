.PHONY: dev install build start lint

# Install dependencies and start the dev server
dev:
	cd allora-media && npm install && npm run dev

# Install dependencies only
install:
	cd allora-media && npm install

# Production build
build:
	cd allora-media && npm run build

# Start production server (run `make build` first)
start:
	cd allora-media && npm run start

# Run linter
lint:
	cd allora-media && npm run lint
