// dfa for accepting a total of 25. inputs only take 5, 10 and 20
const dfa = (symbol: number[]): boolean => {
  if (!symbol.every(c => (c === 5 || c === 20 || c === 10))) return false;

  // rejects epsilon
  if (symbol.length === 0) return false;

  switch (symbol[0]) {
    case 5:
      symbol.shift();
      switch (symbol[0]) {
        case 5:
          symbol.shift();
          switch (symbol[0]) {
            case 5:
              symbol.shift();
              switch (symbol[0]) {
                case 5:
                  symbol.shift();
                  if (symbol[0] === 5) {
                    symbol.shift();
                    return (symbol.length === 0);
                  } else {
                    return false;
                  }

                case 10:
                  symbol.shift();
                  if (symbol[0] === 5) {
                    symbol.shift();
                    return (symbol.length === 0)
                  } else {
                    return false;
                  }

                default:
                  return false;
              }

            case 10:
              symbol.shift();
              if (symbol[0] === 5) {
                symbol.shift();
                return (symbol.length === 0);
              } else {
                return false;
              }

            default:
              return false;
          }

        case 10:
          symbol.shift();
          switch (symbol[0]) {
            case 5:
              symbol.shift();
              if (symbol[0] === 5) {
                symbol.shift();
                return (symbol.length === 0);
              } else {
                return false;
              }

            case 10:
              symbol.shift();
              return (symbol.length === 0);

            default:
              return false;
          }

        case 20:
          symbol.shift();
          if (symbol[0] === 20) {
            symbol.shift();
            return (symbol.length === 0);
          } else {
            return false;
          }

        default:
          return false;
      }

    case 10:
      symbol.shift();
      switch (symbol[0]) {
        case 5:
          symbol.shift();

        case 10:
          symbol.shift();
          if (symbol[0] === 5) {
            symbol.shift();
            return (symbol.length === 0);
          } else {
            return false;
          }

        default:
          return false;
      }

    case 20:
      symbol.shift();
      if (symbol[0] === 5) {
        symbol.shift();
        return (symbol.length === 0);
      } else {
        return false;
      }

    default:
      return false;
  }
}

// ! NO DOT REMOVE
module.exports = dfa;
// yarn test dfa.test.js
