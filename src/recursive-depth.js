const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  

  calculateDepth(arr) {
    let depth = 1;
      
    if (arr.filter((element)=> Array.isArray(element)).length == 0) {return depth} // already flat
    let flattenedArray = arr.flat(1);
    let haveArrayElements = flattenedArray.filter((element)=> Array.isArray(element)).length != 0;  // after flat(1) - do we have arrays as elements?
    if (haveArrayElements) {
      depth = depth + this.calculateDepth(flattenedArray);
    } else {
      depth++; 
      return depth
    };
     
    return depth;
  }
}

// const calc = new DepthCalculator();
// console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]),'-', 2);
// console.log(calc.calculateDepth([1, 2, 3, 1, 4, 5, 2]),'-', 1);
// console.log(calc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]),'-', 3);
// console.log(calc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]),'-', 4);



module.exports = {
  DepthCalculator
};
