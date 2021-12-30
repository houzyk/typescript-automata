// pda for L = {0n1n: n >= 0}
const pda = (symbol: number[]): boolean => {
  if (!symbol.every(c => (c === 0 || c === 1))) return false;

  const stack: (string | number)[] = [];
  let start: boolean = true;

  function compute(): boolean {
    if (start) {
      stack.push("$");
      start = false;
    }
  }

  return compute();
}

// ! NO DOT REMOVE
module.exports = pda;
// yarn test pda.test.js
