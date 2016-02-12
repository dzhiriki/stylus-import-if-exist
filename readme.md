Stylus Import If Exist
=================

[![Build Status](https://travis-ci.org/dzhiriki/stylus-import-if-exist.svg?branch=master)](https://travis-ci.org/dzhiriki/stylus-import-if-exist)
[![Coverage Status](https://coveralls.io/repos/github/dzhiriki/stylus-import-if-exist/badge.svg?branch=master)](https://coveralls.io/github/dzhiriki/stylus-import-if-exist?branch=master)
[![Dependency Status](https://david-dm.org/dzhiriki/stylus-import-if-exist.svg?style=flat-square)](https://david-dm.org/dzhiriki/stylus-import-if-exist)

Stylus fail build when you try import file which not exist. In some cases it's bad behavior.
This plugin solve this problem.

### Installation

You can install through npm as such: `npm install stylus-import-if-exist`

### Usage

You can include stylus-import-if-exist as a normal stylus plugin. Example:

```js
var stylus = require('stylus');
var importIfExist = require('stylus-import-if-exist');

stylus(css)
  .use(importIfExist())
  .render(function(err, output){
    console.log(output);
  });
```

You should replace all your `@import` with `import()`. For example, instead use `@import 'example'` you should use `import(example)`. If file exist, it will be imported; if not  – nothing will happen.
