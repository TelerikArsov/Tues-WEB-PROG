import {
  findAdults,
  capitalizeFirstLetters,
  countOccurrences,
  applyToNumericValues,
  reduce,
} from "./exercise.js";

describe("findAdults", () => {
  test("returns names of adults", () => {
    const users = [
      { name: "A", age: 22 },
      { name: "B", age: 17 },
      { name: "C", age: 21 },
    ];
    const result = findAdults(users);
    const expected = ["A", "C"];
    expect(result).toEqual(expected);
  });
});

describe("capitalizeFirstLetters", () => {
  test("capitalizes the first letter of each word", () => {
    const result = capitalizeFirstLetters("hi there");
    const expected = "Hi There";
    expect(result).toBe(expected);
  });

  test("returns empty string if not a string input", () => {
    const result = capitalizeFirstLetters(123);
    const expected = "";
    expect(result).toBe(expected);
  });
});

describe("countOccurrences", () => {
  test("returns count of each unique element", () => {
    const result = countOccurrences(["x", "y", "x", "z"]);
    const expected = {
      x: 2,
      y: 1,
      z: 1,
    };
    expect(result).toEqual(expected);
  });
});

describe("applyToNumericValues", () => {
  test("applies function to numeric values", () => {
    const obj = { a: 1, b: "2", c: { d: 3, e: "4", f: { g: 5 } } };
    const inc = (num) => num + 1;
    const result = applyToNumericValues(obj, inc);
    const expected = { a: 2, b: "2", c: { d: 4, e: "4", f: { g: 6 } } };
    expect(result).toEqual(expected);
  });

  test("handles null values", () => {
    const obj = { a: null };
    const inc = (num) => num + 1;
    const result = applyToNumericValues(obj, inc);
    const expected = { a: null };
    expect(result).toEqual(expected);
  });

  test("does not modify original object", () => {
    const obj = { a: 1, b: "2", c: { d: 3, e: "4", f: { g: 5 } } };
    const objCopy = structuredClone(obj);
    const inc = (num) => num + 1;
    applyToNumericValues(obj, inc);
    expect(obj).toEqual(objCopy);
  });
});

describe("reduce", () => {
  test("transforms array into a single value", () => {
    const arr = [2, 3, 4];
    const add = (acc, cur) => acc + cur;
    const result = reduce(arr, add, 1);
    const expected = 10;
    expect(result).toBe(expected);
  });

  test("uses first element as initial value if none provided", () => {
    const arr = [2, 3, 4];
    const mul = (acc, cur) => acc * cur;
    const result = reduce(arr, mul);
    const expected = 24;
    expect(result).toBe(expected);
  });
});
