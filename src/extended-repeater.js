const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const optionsExample = {
  'repeatTimes': 0, // integer, if absent - no repeats
  'separator':'', // might be absent , default is +
  'addition':'',  // str, id not - make toString
  'additionRepeatTimes': 0, // integer, if absent - no repeats
  'additionSeparator':'',  // might be absent , default is |
  }

function repeater(str, options) {
  const defaultSeparator = '+';
  const defaultAdditionalSeparator = '|';
  let repeaterString = '';
  
  //verify args
  str = '' + str;  // to string  
  if (arguments.length == 1) {
    //options are omitted
    return str
  }

  if (!('repeatTimes' in options)) {options.repeatTimes = 1};
  if (!('separator' in options)) {options.separator = defaultSeparator};
  if (!('additionSeparator' in options)) {options.additionSeparator = defaultAdditionalSeparator};
  if (!('additionRepeatTimes' in options)) {options.additionRepeatTimes = 1};
  if (!('addition' in options)) {options.addition = ''} else {options.addition = '' + options.addition};
  
  //make string
  let baseArr = new Array(options.repeatTimes);
  let additionalArr = new Array(options.additionRepeatTimes);
  additionalArr.fill(options.addition);
  baseArr.fill(str + additionalArr.join(options.additionSeparator));
  repeaterString = baseArr.join(options.separator);
  
  return repeaterString
}


// console.log(repeater('la', { repeatTimes: 3 })); //, 'la+la+la'
// console.log(repeater('single', { repeatTimes: 1 })); //, 'single'
// console.log(repeater('12345', { repeatTimes: 5 })); //, '12345+12345+12345+12345+12345'




module.exports = {
  repeater
};
