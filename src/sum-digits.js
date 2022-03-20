const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrN = n.toString(10).split('');  
  let sum = 0;
  for (let i = 0; i < arrN.length; i++) {
    sum += Number(arrN[i]);
  }
  if (sum > 9) {
    sum = getSumOfDigits(sum);
  } else {
    return sum
  }
  return sum;
}


//console.log(getSumOfDigits(123));

// assert.strictEqual(getSumOfDigits(91), 1);
//     assert.strictEqual(getSumOfDigits(100), 1);
//     assert.strictEqual(getSumOfDigits(35), 8);
//     assert.strictEqual(getSumOfDigits(99), 9);
//     assert.strictEqual(getSumOfDigits(123), 6);

module.exports = {
  getSumOfDigits
};
