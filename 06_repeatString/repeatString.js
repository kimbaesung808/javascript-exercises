const repeatString = function(string, numRepeats) {
  if (numRepeats < 0) {
    return "ERROR";
  }

  let repeatedString = "";
  for (let i = 0; i < numRepeats; i++) {
    repeatedString += string;
  }
  
  return repeatedString;
 };

// Do not edit below this line
module.exports = repeatString;
