<div align="center">
  <h1>is-obj-empty</h1>
  <a href="https://npmjs.com/package/is-obj-empty">
    <img alt="npm" src="https://img.shields.io/npm/v/is-obj-empty.svg">
  </a>
  <a href="https://github.com/bconnorwhite/is-obj-empty">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/is-obj-empty.svg">
  </a>
  <a href="https://github.com/bconnorwhite/is-obj-empty">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/is-obj-empty?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Check if an object is empty.

## Installation

```bash
yarn add is-obj-empty
```

```bash
npm install is-obj-empty
```

## API

### Usage

```ts
import isEmpty from "is-obj-empty";

isEmpty({}); // true
isEmpty({ a: undefined }); // false
isEmpty({ a: true }); // false

isEmpty([]); // true
isEmpty([undefined]); // false
isEmpty([true]); // false
```

### Types
```ts
import isEmpty, { AnyObject } from "is-obj-empty";

function isEmpty(object: AnyObject): boolean;

type AnyObject = {
  [index in string | number]: any;
}
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/is-obj-empty.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [jest](https://www.npmjs.com/package/jest): Delightful JavaScript Testing.

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/is-obj-empty.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
