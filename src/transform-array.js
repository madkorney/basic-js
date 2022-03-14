const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) {throw new Error(`'arr' parameter must be an instance of the Array!`)}
  let transformedArr = [];
  const CONTROL_COMMANDS = [`--discard-next`, `--discard-prev`,`--double-next`, `--double-prev`];

  function isCommand(item) {
    if (typeof item == 'string') {
      if (CONTROL_COMMANDS.includes(item)) { 
        return true 
      } else {
        return false}
    } else {
      return false
    }
  }
  let discardNext = false;
  let doubleNext = false;

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (isCommand(arr[i])) {
      switch (arr[i]) {
        case `--discard-next`:
          discardNext = true;
          break;
        case `--double-next`:
          doubleNext = true;
          break;
        case `--discard-prev`:
          if (transformedArr.length > 0) {
            if (transformedArr[transformedArr.length-1] == arr[i-1]) {
              transformedArr.pop(); 
            }
          }
          break;    
        case `--double-prev`:
          if (transformedArr.length > 0) {
            if (transformedArr[transformedArr.length-1] == arr[i-1]) {
              transformedArr.push(transformedArr[transformedArr.length-1]);
            }
          }
          break;
      }
    } else {
      if (discardNext) {
        
      } else if (doubleNext) {
          
          transformedArr.push(arr[i]);
          transformedArr.push(arr[i]);
        } else {
            transformedArr.push(arr[i]);
          }
          discardNext = false; 
          doubleNext = false;   
    }

  }



  return transformedArr;
}

module.exports = {
  transform
};
