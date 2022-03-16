const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  const SEASONSbyMONTHS = ['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter']; //autumn  = fall
  const failure = 'Unable to determine the time of year!';
  let season = ''; 

  if (arguments.length == 0) {return failure};
  if (Object.keys(date).length > 0) {throw new Error('Invalid date!')}; // real date has 0

  if (date instanceof Date) {
    if (isNaN(date) ) { 
      //invalid date
      throw new Error('Invalid date!');
    } else {
      return SEASONSbyMONTHS[date.getMonth()];
    }
  } else {
    // not a date object
     throw new Error('Invalid date!');
  }
}


module.exports = {
  getSeason
};
