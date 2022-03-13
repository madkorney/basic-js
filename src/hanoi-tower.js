const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  let hanoiSolution = {
    'turns': Math.pow(2, disksNumber) - 1,
    'seconds': Math.floor((Math.pow(2, disksNumber) - 1) / turnsSpeed * 3600),
  }
  
  return hanoiSolution;
}

// console.log(calculateHanoi(5, 4074));
// console.log(calculateHanoi(38, 4594));
// console.log(calculateHanoi(34, 4005));

module.exports = {
  calculateHanoi
};


// assert.deepEqual(calculateHanoi(5, 4074), { turns: 31, seconds: 27 });
//             assert.deepEqual(calculateHanoi(38, 4594), { turns: 274877906943, seconds: 215402800390 });
//             assert.deepEqual(calculateHanoi(34, 4005), { turns: 17179869183, seconds: 15442579040 });
//             assert.deepEqual(calculateHanoi(19, 4770), { turns: 524287, seconds: 395688 });
//             assert.deepEqual(calculateHanoi(23, 4344), { turns: 8388607, seconds: 6951884 });