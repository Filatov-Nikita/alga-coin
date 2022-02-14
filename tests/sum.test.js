const sum = require("./sum").sum;

let a;

beforeAll(() => {
  a = 1;
});

describe("sum tests", () => {
  beforeAll(() => {
    a = 2;
  });

  beforeEach(() => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("timeout");
        res();
      }, 2000);
    });
  });

  test("with str arg", () => {
    console.log(a);
    expect(sum(1, 2, "3", "test 4")).toBe(6);
  });

  test("with undefined, null, empty str, negative arg", () => {
    expect(sum(undefined, null, "", "test 4", 0, Infinity, -1)).toBe(-1);
  });

  test("async", () => {
    return expect(
      new Promise((res, rej) => {
        setTimeout(() => {
          console.log("async");
          res("2");
        }, 2000);
      })
    ).resolves.toBe("2");
  });
});
