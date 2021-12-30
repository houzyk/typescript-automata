// dfa for accepting a total of 25. inputs only take 5, 10 and 20
const dfa = (str: number[]): boolean => {
  if (str.length === 0) return false;
  if (!str.every(c => (c === 5 || c === 20 || c === 10))) return false;

  switch (str[0]) {
    case 5:
      str.shift();
      switch (str[0]) {
        case 5:
          str.shift();
          switch (str[0]) {
            case 5:
              str.shift();
              switch (str[0]) {
                case 5:
                  str.shift();
                  if (str[0] === 5) {
                    str.shift();
                    return (str.length === 0);
                  } else {
                    return false;
                  }

                case 10:
                  str.shift();
                  if (str[0] === 5) {
                    str.shift();
                    return (str.length === 0)
                  } else {
                    return false;
                  }

                default:
                  return false;
              }

            case 10:
              str.shift();
              if (str[0] === 5) {
                str.shift();
                return (str.length === 0);
              } else {
                return false;
              }

            default:
              return false;
          }

        case 10:
          str.shift();
          switch (str[0]) {
            case 5:
              str.shift();
              if (str[0] === 5) {
                str.shift();
                return (str.length === 0);
              } else {
                return false;
              }

            case 10:
              str.shift();
              return (str.length === 0);

            default:
              return false;
          }

        case 20:
          str.shift();
          if (str[0] === 20) {
            str.shift();
            return (str.length === 0);
          } else {
            return false;
          }

        default:
          return false;
      }

    case 10:
      str.shift();
      switch (str[0]) {
        case 5:
          str.shift();

        case 10:
          str.shift();
          if (str[0] === 5) {
            str.shift();
            return (str.length === 0);
          } else {
            return false;
          }

        default:
          return false;
      }

    case 20:
      str.shift();
      if (str[0] === 5) {
        str.shift();
        return (str.length === 0);
      } else {
        return false;
      }

    default:
      return false;
  }
}

module.exports = dfa;
