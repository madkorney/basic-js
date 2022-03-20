const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayOfDigits = n.toString(10).split('');
  let digitsNumber = arrayOfDigits.length;
  let maxNumber = 0;

  for (let i = 0; i < arrayOfDigits.length; i++) {
    let testN = Number(new Array().concat(arrayOfDigits.slice(0,i),arrayOfDigits.slice(i+1)).join(''));
    if (testN > maxNumber) {maxNumber = testN}
  }
  return maxNumber
}


module.exports = {
  deleteDigit
};
