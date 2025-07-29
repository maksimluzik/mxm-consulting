# MXM Consulting Website - Development Commands

.PHONY: install serve build clean update deploy help

# Install dependencies
install:
	bundle install

# Serve with live reload (development)
serve:
	bundle exec jekyll serve --livereload --watch

# Serve with incremental builds (faster)
serve-fast:
	bundle exec jekyll serve --livereload --incremental

# Serve with drafts and future posts
serve-all:
	bundle exec jekyll serve --livereload --drafts --future

# Build for production
build:
	bundle exec jekyll build

# Clean generated files
clean:
	bundle exec jekyll clean

# Update dependencies
update:
	bundle update

# Deploy changes to GitHub Pages
deploy:
	git add .
	git commit -m "update $(shell date '+%Y-%m-%d %H:%M:%S')"
	git push

# Help - show available commands
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make serve      - Serve with live reload"
	@echo "  make serve-fast - Serve with incremental builds"
	@echo "  make serve-all  - Serve with drafts and future posts"
	@echo "  make build      - Build for production"
	@echo "  make clean      - Clean generated files"
	@echo "  make update     - Update dependencies"
	@echo "  make deploy     - Deploy changes to GitHub Pages (add, commit, push)"
	@echo "  make help       - Show this help"
