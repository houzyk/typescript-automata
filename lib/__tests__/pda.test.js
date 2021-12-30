const pda = require('../pda.js');

describe("PDA Test Suite", () => {
  // handle wrong inputs
  it("should reject arrays which contain anything but 0 and 1", () => {
    expect(pda[5, 35, 1, 1, 1, 1, 1]).toBeFalsy();
    expect(pda[10, 10, 10, 110, 10, 1, 5]).toBeFalsy();
    expect(pda[5, 5, 20, 20, 220, 5, 5]).toBeFalsy();
    expect(pda[5, 10, 10, 10, 20, 51, 5]).toBeFalsy();
    expect(pda[10]).toBeFalsy();
  })
});
