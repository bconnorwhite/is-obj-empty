import { test, expect } from "@jest/globals";
import isEmpty from "../source/index.js";

test("object", () => {
  expect(isEmpty({})).toBe(true);
});

test("object undefined", () => {
  expect(isEmpty({ a: undefined })).toBe(false);
});

test("object number key", () => {
  expect(isEmpty({ 1: "a" })).toBe(false);
});

test("object string key", () => {
  expect(isEmpty({ a: true })).toBe(false);
});

test("object symbol key", () => {
  expect(isEmpty({ [Symbol("a")]: true })).toBe(false);
});

test("object symbol key, ignore symbols", () => {
  expect(isEmpty({ [Symbol("a")]: true }, { ignoreSymbolKeys: true })).toBe(true);
});

test("array", () => {
  expect(isEmpty([])).toBe(true);
});

test("array undefined", () => {
  expect(isEmpty([undefined])).toBe(false);
});

test("array with value", () => {
  expect(isEmpty([true])).toBe(false);
});

test("array with symbol", () => {
  expect(isEmpty([Symbol("a")])).toBe(false);
});
