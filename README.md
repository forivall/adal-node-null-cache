# adal-node-null-cache

Windows Azure Active Directory Authentication with a Null Cache

[![build status](https://secure.travis-ci.org/forivall/adal-node-null-cache.svg)](http://travis-ci.org/forivall/adal-node-null-cache)
[![dependency status](https://david-dm.org/forivall/adal-node-null-cache.svg)](https://david-dm.org/forivall/adal-node-null-cache)
[![coverage status](https://coveralls.io/repos/github/forivall/adal-node-null-cache/badge.svg?branch=master)](https://coveralls.io/github/forivall/adal-node-null-cache?branch=master)

## Installation

```
npm install --save adal-node adal-node-null-cache
```

## Usage

```js
var NullCache = require('adal-node-null-cache').NullCache;
var adal = require('adal-node');
var context = new adal.AuthenticationContext(authority, validateAuthority, new NullCache());
```

This modules uses `adal-node` as an optional peer dependency. If `adal-node` is
installed and accessible, `adal-node-null-cache` will expose all of the methods
of `adal-node`, and a `createAuthenticationContext` method that uses a
`NullCache` instead of a global `MemoryCache`.

```js
var adal = require('adal-node-null-cache');
var context = adal.createAuthenticationContext(authority, validateAuthority);
```

## Credits
[Jordan Klassen](https://github.com/forivall/)

## License

ISC
