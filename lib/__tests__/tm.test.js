const tm = require('../tm.js');

describe("TM Test Suite", () => {
  // handle wrong input
  it("should reject arrays which contain anything but 0, 1 and 2", () => {
    expect(tm([5, 35, 1, 1, 1, 1, 1])).toBeFalsy();
    expect(tm([10, 10, 10, 110, 10, 1, 5])).toBeFalsy();
    expect(tm([5, 5, 20, 20, 220, 5, 5])).toBeFalsy();
    expect(tm([5, 10, 10, 10, 20, 51, 5])).toBeFalsy();
    expect(tm([10])).toBeFalsy();
  })

  // * accept strings
  it("should accept '001122'", () => {
    expect(tm([0, 0, 1, 1, 2, 2])).toBeTruthy();
  });
  it("should accept '000001111122222'", () => {
    expect(tm([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2])).toBeTruthy();
  });
  it("should accept '012'", () => {
    expect(tm([0, 1, 2])).toBeTruthy();
  });

  // ! reject strings
  it("should reject '00112'", () => {
    expect(tm([0, 0, 1, 1, 2])).toBeFalsy();
  });
  it("should reject epsilon", () => {
    expect(tm([])).toBeFalsy();
  });
  it("should reject '0120'", () => {
    expect(tm([0, 1, 2, 0])).toBeFalsy();
  });
})
