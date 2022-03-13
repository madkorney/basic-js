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

  if (arguments.length == 0) {return failure}
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (isNaN(date)) { 
      //invalid date
      throw new Error('Invalid date!');
    } else {
      // date object is valid
      return SEASONSbyMONTHS[date.getMonth()];
    }
  } else {
    // not a date object
    throw new Error('Invalid date!');
  }
}


// try {
// // console.log(getSeason(new Date(2361, 2, 24, 22, 13, 47, 69)));
// let aaa = () => new Date();
// console.log(aaa);
// console.log(getSeason(aaa));
// // console.log(getSeason('foo'));
// // console.log(getSeason(['foo']));
// // console.log(getSeason({john:'smith',}));
// // console.log(getSeason(new Date('1990-11-28')));

// console.log(getSeason(new Date('1990-13-28')));
// }  catch(e) {
//   console.log('поймал ');
//   console.error(e);
// }

// () => getSeason('foo'),
// () => getSeason({ John: 'Smith' }),
// () => getSeason(20192701),
// () => getSeason([2019, '27', 0 + '1']),
// () => getSeason(() => new Date())




module.exports = {
  getSeason
};
