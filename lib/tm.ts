// tm for L = {0n1n2n: n >= 1}
const tm = (symbol: (number | string)[]): boolean => {
  if (!symbol.every(c => (c === 0 || c === 1 || c === 2))) return false;
  if (symbol.length === 0) return false;

  let selectedSymbol: number | string = symbol[0];

  const states: string[] = ["Q0", "Q1", "Q2", "Q3", "Q4", "QA"];
  let headState: string = states[0];

  const blank: string = "$";

  function compute(): boolean {
    switch (headState) {
      case "Q0":
        // todo
        compute();

      case "Q1":
        // todo
        compute();

      case "Q2":
        // todo
        compute();

      case "Q3":
        // todo
        compute();

      case "Q4":
        // todo
        compute();

      case "QA":
        return true;

      default:
        return false;
    }
  }

  return compute();
}

// ! DO NOT REMOVE
module.exports = tm;
// yarn test tm.test.js
