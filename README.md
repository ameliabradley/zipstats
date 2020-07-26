[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

# zipstats

> For a given file, show compression stats for its content

![Screenshot](https://github.com/leebradley/zipstats/raw/master/screen.png)

## Getting started

### CLI

```sh
$ yarn add -G zipstats
```

```
Usage: zipstats [FILENAME]
```

### Library

```sh
$ yarn add zipstats --dev
```

```javascript
const zipstats = require('zipstats');

console.log(zipstats("file.zip");
```

## License

Blue Oak License v1.0.0 - A modern [alternative](https://writing.kemitchell.com/2019/03/09/Deprecation-Notice.html) to the MIT License.

[npm-url]: https://www.npmjs.com/package/zipstats
[npm-image]: https://badgen.net/npm/v/zipstats

[gh-url]: https://github.com/leebradley/zipstats

[travis-url]: https://travis-ci.com/leebradley/zipstats
[travis-image]: https://travis-ci.com/leebradley/zipstats.svg?branch=master