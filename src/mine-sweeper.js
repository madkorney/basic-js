const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(matrix)) {return []}
  if (matrix.length == 0) {return []}

  let lengthY = matrix.length;
  let lengthX = matrix[0].length;
  let gameFieldSetup = [];

  function calculateMinesAround(y,x, matrix) {
    let minesNumber = 0;
    for (let i=-1; i<2; i++) {
      for (let j=-1; j<2; j++) {
        if (!(i == 0 && j == 0)) {
          if (y+i >= 0 && x+j >=0 && x+j < matrix[0].length && y+i < matrix.length) {
            if (matrix[y+i][x+j]) {minesNumber++}
          }
        }
      }
    }
    return minesNumber;
  }

  for (let i=0; i < lengthY; i++) {
    gameFieldSetup.push([]);
    for (let j=0; j < lengthX; j++) {
      gameFieldSetup[i].push(calculateMinesAround(i,j, matrix));
    }
  }

  return gameFieldSetup;
}

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
//  ];

//  console.table(matrix);
//  console.table(minesweeper(matrix));

module.exports = {
  minesweeper
};
