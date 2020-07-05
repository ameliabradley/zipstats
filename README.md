[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![Dependencies][deps-image]][deps-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][travis-image]][travis-url]

# zipstats

> Show zip stats including % compression and totals

![Screenshot](https://github.com/leebradley/zipstats/raw/master/screenshot.png)

## Install

```sh
$ yarn add zipstats --dev
```

## Usage

### CLI

```
Usage: zipstats [FILENAME]
```

### Library

```javascript
const zipstats = require('zipstats');

console.log(zipstats("file.zip");
```

## License

MIT © 2020 [Lee Bradley](https://github.com/leebradley)

[npm-url]: https://www.npmjs.com/package/zipstats
[npm-image]: https://badgen.net/npm/v/zipstats
[npm-downloads-image]: https://badgen.net/npm/dt/zipstats

[deps-url]: https://david-dm.org/leebradley/zipstats
[deps-image]: https://badgen.net/david/dep/leebradley/zipstats

[gh-url]: https://github.com/leebradley/zipstats
[gh-stars-image]: https://badgen.net/github/stars/leebradley/zipstats
[gh-forks-image]: https://badgen.net/github/forks/leebradley/zipstats

[travis-url]: https://travis-ci.com/leebradley/zipstats
[travis-image]: https://travis-ci.com/leebradley/zipstats.svg?branch=master