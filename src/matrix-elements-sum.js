const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //validate args
  if (!matrix) {return 0}
  if (matrix.length === 0 || matrix[0].length === 0) {return 0}

  let elementsSum = 0;
  const Y = matrix.length;
  const X = matrix[0].length;

  elementsSum = matrix[0].reduce((prev, curr) => prev + curr, 0); // first row has no zeros above

  for (let i = 1; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      elementsSum += (matrix[i-1][j] === 0)? 0 : matrix[i][j];
    }
  } 


  return elementsSum;
}

// let matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
//  ];

// console.log(getMatrixElementsSum(matrix));

module.exports = {
  getMatrixElementsSum
};
