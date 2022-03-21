const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  if (str === '') {return ''}

  let currentSymbol = '';
  let currentQty = 1;
  let outString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] != currentSymbol) {
      outString = outString + ((currentQty == 1) ? '' : currentQty) + currentSymbol;
      currentQty = 1;
      currentSymbol = str[i];
    } else {
      currentQty++;
    }
  }
  outString = outString + ((currentQty == 1) ? '' : currentQty) + currentSymbol;

  return outString;
}

// console.log(encodeLine('aabbbbc'));
// console.log(encodeLine('aabbbcaaa'));
// console.log(encodeLine('xyz'));

module.exports = {
  encodeLine
};
