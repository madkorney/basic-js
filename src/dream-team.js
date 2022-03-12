const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) {return false}
  if (members.lenfgth == 0) {return ''}

  let teamName = members.reduce((prev, item, index)=>{
    let curr = '';
    if (typeof item == 'string') {
      curr = item.trimStart().charAt(0).toUpperCase();
    }
    return prev + curr;
  },'').split('').sort().join('');

  return teamName;

  }


  // console.log(createDreamTeam([
  //   '   William Alston ',
  //   ' Paul Benacerraf',
  //   '  Ross Cameron',
  //   '       Gilles Deleuze',
  //   '  Arda Denkel ',
  //   '  Michael Devitt',
  //   '  Kit Fine',
  //   ' Nelson Goodman',
  //   'David Kolb',
  //   '   Saul Kripke',
  //   '  Trenton Merricks',
  //   '  Jay Rosenberg',
  // ]) +' vs ' + 'ADGJKMNPRSTW');


  // console.log(createDreamTeam([
  //   ['David Abram'],
  //   ['Robin Attfield'],
  //   'Thomas Berry',
  //   ['Paul R.Ehrlich'],
  //   'donna Haraway',
  //   ' BrIaN_gOodWiN  ',
  //   {
  //     0: 'Serenella Iovino'
  //   },
  //   'Erazim Kohak',
  //   '  val_plumwood',
  // ])+' vs ' +   'BDETV');

module.exports = {
  createDreamTeam
};
