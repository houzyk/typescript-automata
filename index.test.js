const dfa = require('./index.js');

describe("DFA Test Suite", () => {
  // Accepted Strings
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

  // ! Rejected Strings
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
})
