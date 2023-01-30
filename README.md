<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>is-obj-empty</h1>
  <a href="https://npmjs.com/package/is-obj-empty">
    <img alt="NPM" src="https://img.shields.io/npm/v/is-obj-empty.svg">
  </a>
  <a href="https://github.com/bconnorwhite/is-obj-empty">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/is-obj-empty.svg">
  </a>
</div>

<br />

<blockquote align="center">Check if an object is empty.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/is-obj-empty">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/is-obj-empty?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

> Check if an object is empty.

## Installation

```sh
yarn add is-obj-empty
```

```sh
npm install is-obj-empty
```

```sh
pnpm add is-obj-empty
```

## Usage

```ts
import isEmpty from "is-obj-empty";

isEmpty({}); // true
isEmpty({ a: undefined }); // false
isEmpty({ a: true }); // false

isEmpty([]); // true
isEmpty([undefined]); // false
isEmpty([true]); // false
```

Additionally, there an option is provided to ignore symbol keys:

```ts
isEmpty({ [Symbol()]: true }); // false
isEmpty({ [Symbol()]: true }, { ignoreSymbolKeys: true }); // true
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/is-obj-empty.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
