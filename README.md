# Zetawar [![CircleCI](https://circleci.com/gh/Zetawar/zetawar.svg?style=svg&circle-token=b630f4db37e3538b7c390856687648246468e98b)](https://circleci.com/gh/Zetawar/zetawar)

Source code for [Zetawar](http://www.zetawar.com/). Zetawar is funded by the
generous support of the [Zetawar
Kickstarter](https://www.kickstarter.com/projects/djwhitt/zetawar) backers.

## Development

### Prerequisites

- [Clojure CLI tools](https://clojure.org/guides/install_clojure)
- [Node.js and npm](https://nodejs.org/)

### Setup

1. Clone the repository
2. Run `./install-deps.sh` to install dependencies

### Development Workflow

- `make dev` - Start development server
- `make test` - Run tests
- `make clean` - Clean build artifacts

### Building for Production

- `make build-prod` - Build for production
- `make deploy-prod` - Deploy to production

### Project Structure

- `src/clj` - Clojure source code
- `src/cljc` - Shared Clojure/ClojureScript code
- `src/cljs` - ClojureScript source code
- `src/scss` - SCSS stylesheets
- `content` - Cryogen site content
- `assets` - Static assets

## Licenses

Zetawar is Copyright 2016 Arugaba LLC licensed under the terms of the [MIT
license](LICENSE.txt).

Tiles and unit sprites are from Elite Command Copyright 2015 Chris Vincent
under the [Creative Commons Attribution 4.0 International
License](https://creativecommons.org/licenses/by/4.0/).

Music is Copyright 2017 Chris Haislet licensed under the [Creative Commons
Attribution-NonCommercial 4.0
International](https://creativecommons.org/licenses/by-nc/4.0/).

AwesomeForms sponsor logo is Copyright 2015 Awesome Forms LLC 2015 all rights
reserved.
