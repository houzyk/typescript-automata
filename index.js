// dfa for accepting a total of 25. inputs only take 5, 10 and 20
var dfa = function (str) {
    if (!str.every(function (char) { return (char === 5 || char === 20 || char === 10); }))
        return false;
    return false;
};
module.exports = dfa;
