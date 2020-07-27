[![NPM version][npm-image]][npm-url] [![Node.js CI][workflow-image]][workflow-url]

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

[workflow-url]: https://github.com/leebradley/zipstats/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster
[workflow-image]: https://github.com/leebradley/zipstats/workflows/Node.js%20CI/badge.svg