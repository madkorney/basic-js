const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  let sortedShortArray = [];
  for (let item of arr) {
    if (item != -1) {sortedShortArray.push(item)}
  }
  sortedShortArray.sort((a,b) => a - b);

  let outArray = [];
  let index = 0;
  for (let i =0; i < arr.length; i++) {
    if (arr[i] == -1) {
      outArray.push(-1);
    } else {
      outArray.push(sortedShortArray[index]);
      index++;
    }
  }
  
  return outArray;
}

module.exports = {
  sortByHeight
};
