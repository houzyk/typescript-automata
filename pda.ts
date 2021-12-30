// pda for L = {0n1n: n >= 0}
const pda = (symbol: number[]): boolean => {
  if (!symbol.every(c => (c === 0 || c === 1))) return false;

  // TODO
}

module.exports = pda;
