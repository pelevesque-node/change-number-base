[![Build Status](https://travis-ci.org/pelevesque/change-number-base.svg?branch=master)](https://travis-ci.org/pelevesque/change-number-base)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/change-number-base/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/change-number-base?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# change-number-base

Converts a number from one base to another.

## Node Repository

https://www.npmjs.com/package/@pelevesque/change-number-base

## Installation

`npm install @pelevesque/change-number-base`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

```js
const changeNumberBase = require('@pelevesque/change-number-base')
```

```js
const numb = 102
const initialBase = 3
const newBase = 10
const result = changeNumberBase(numb, initialBase, newBase)
// result === 11
```
