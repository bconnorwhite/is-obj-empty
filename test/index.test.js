const isEmpty = require("../build")["default"];

test("object", () => {
  expect(isEmpty({})).toBe(true);
});

test("object undefined", () => {
  expect(isEmpty({ a: undefined })).toBe(false);
});

test("object value", () => {
  expect(isEmpty({ a: true })).toBe(false);
});

test("array", () => {
  expect(isEmpty([])).toBe(true);
});

test("array undefined", () => {
  expect(isEmpty([undefined])).toBe(false);
});

test("object value", () => {
  expect(isEmpty([true])).toBe(false);
});
