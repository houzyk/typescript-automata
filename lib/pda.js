// pda for L = {0n1n: n >= 0}
const pda = (symbol) => {
    if (!symbol.every(c => (c === 0 || c === 1)))
        return false;
    const stack = ["$"];
    function compute() {
        if (symbol[0] === 0) {
            stack.push(symbol[0]);
            symbol.shift();
            compute();
        }
        else if (symbol[0] === 1 && stack[stack.length - 1] === 0) {
            stack.pop();
            symbol.shift();
            compute();
        }
        return (symbol.length === 0 && stack.length === 1 && stack.every(c => c === "$"));
    }
    return compute();
};
// ! DO NOT REMOVE
module.exports = pda;
// yarn test pda.test.js
