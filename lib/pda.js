// pda for L = {0n1n: n >= 0}
var pda = function (symbol) {
    if (!symbol.every(function (c) { return (c === 0 || c === 1); }))
        return false;
    // TODO
};
module.exports = pda;
