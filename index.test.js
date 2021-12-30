const dfa = require('./index.js');

describe("DFA Test Suite", () => {
  // * accepted strings
  it("should accept the string 5, 5, 10, 5", () => {
    expect(dfa([5, 5, 10, 5])).toBeTruthy();
  });
  it("should accept the string 5, 5, 5, 5, 5", () => {
    expect(dfa([5, 5, 5, 5, 5])).toBeTruthy();
  });
  it("should accept the string 10, 10, 5", () => {
    expect(dfa([10, 10, 5])).toBeTruthy();
  });
  it("should accept the string 20, 5", () => {
    expect(dfa([20, 5])).toBeTruthy();
  });

  // ! rejected strings
  it("should reject the string 5, 5, 5", () => {
    expect(dfa([5, 5, 5])).toBeFalsy();
  });
  it("should reject the string 10, 10, 10", () => {
    expect(dfa([10, 10, 10])).toBeFalsy();
  });
  it("should reject epsilon", () => {
    expect(dfa([])).toBeFalsy();
  });
  it("should reject the string 20, 5, 10, 5", () => {
    expect(dfa([20, 5, 10, 5])).toBeFalsy();
  });

  // handle wrong inputs
  it("should reject arrays which contain anything except 5, 10 and 15", () => {
    expect(dfa[5, 35, 5, 5, 5, 5, 5]).toBeFalsy();
    expect(dfa[10, 10, 10, 110, 10, 5, 5]).toBeFalsy();
    expect(dfa[5, 5, 20, 20, 220, 5, 5]).toBeFalsy();
    expect(dfa[5, 10, 10, 10, 20, 51, 5]).toBeFalsy();
    expect(dfa[5, 20, 203, 10, 10, 53, 20]).toBeFalsy();
  })

    // ! handle excess
  it("should reject the excess string 5, 5, 10, 5, 5", () => {
    expect(dfa([5, 5, 10, 5, 5])).toBeFalsy();
  });
  it("should reject the excess string 5, 5, 5, 5, 5, 5", () => {
    expect(dfa([5, 5, 5, 5, 5, 5])).toBeFalsy();
  });
  it("should reject the excess string 10, 10, 5, 5", () => {
    expect(dfa([10, 10, 5, 5])).toBeFalsy();
  });
  it("should reject the excess string 20, 5, 10", () => {
    expect(dfa([20, 5, 10])).toBeFalsy();
  });
})
