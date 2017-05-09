# regex-slash [![Build Status](https://travis-ci.org/scottrangerio/regex-slash.svg?branch=master)](https://travis-ci.org/scottrangerio/regex-slash)
> Convert regex pattern strings for Windows backslash paths to Unix paths: `path\\\\to\\\\file.js` ➔ `path/to/file.js`

Inspired by [slash](https://github.com/sindresorhus/slash).

## Install

```sh
$ npm install --save regex-slash
```

or with yarn

```sh
$ yarn add regex-slash
```

## Usage

```js
const rslash = require('regex-slash');

const windowsPattern = 'path\\\\to\\\\file.js';
const unixPattern = 'path/to/file.js';

rslash(windowsPattern); // => 'path/to/file.js'
rslash(unixPattern); // => 'path/to/file.js'
```

## API

### rslash(path)

Type: `string`

Accepts a Windows backslash path regex pattern string and returns a Unix path regex pattern string


## License

MIT © Scott Ranger
