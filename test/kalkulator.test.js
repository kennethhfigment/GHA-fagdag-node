const { expect, test } = require("@jest/globals");
const { sum } = require("../src/kalkulator");

test("1 + 2 er 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("0 + 0 er 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("-1 + -1 er -2", () => {
  expect(sum(-1, -1)).toBe(-2);
});

test("1.5 + 2.5 er 4", () => {
  expect(sum(1.5, 2.5)).toBe(4);
});

test("100 + 200 er 300", () => {
  expect(sum(100, 200)).toBe(300);
});
