const sumAll = function(a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  } else if (a % 1 !== 0 || b % 1 !== 0) {
    return "ERROR";
  } else if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  let sum = 0;
  let i;
  let j;

  if (a < b) {
    i = a;
    sum = i++;
    j = b;
  } else {
    i = b;
    sum = i++;
    j = a;
  }

  for (; i <= j; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
