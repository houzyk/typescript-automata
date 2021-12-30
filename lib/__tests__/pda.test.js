const pda = require('../pda.js');

describe("PDA Test Suite", () => {
  // handle wrong inputs
  it("should reject arrays which contain anything but 0 and 1", () => {
    expect(pda([5, 35, 1, 1, 1, 1, 1])).toBeFalsy();
    expect(pda([10, 10, 10, 110, 10, 1, 5])).toBeFalsy();
    expect(pda([5, 5, 20, 20, 220, 5, 5])).toBeFalsy();
    expect(pda([5, 10, 10, 10, 20, 51, 5])).toBeFalsy();
    expect(pda([10])).toBeFalsy();
  })

  // * accept strings
  it("should accept '01'", () => {
    expect(pda([0, 1])).toBeTruthy();
  })

  it("should accept '000111'", () => {
    expect(pda([0, 0, 0, 1, 1, 1])).toBeTruthy();
  })

  it("should accept '0000000000011111111111'", () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(pda(input)).toBeTruthy();
  })

  it("should accept ''", () => {
    expect(pda([])).toBeTruthy();
  })

  // ! reject strings
  it("should reject '1'", () => {
    expect(pda([1])).toBeFalsy();
  })

  it("should reject '0'", () => {
    expect(pda([0])).toBeFalsy();
  })

  it("should reject '00000000000111111111111'", () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(pda(input)).toBeFalsy();
  })

  it("should reject '10'", () => {
    expect(pda([1, 0])).toBeFalsy();
  })

  it("should reject '1100'", () => {
    expect(pda([1, 1, 0, 0])).toBeFalsy();
  })
});
