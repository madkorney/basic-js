const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  
  
  //validate arguments
  if (!names || names.length == 0) {return []}

  let outputUniqueNames = [];
  outputUniqueNames.push(names[0]); // first name is just passed thru

  for (let i = 1; i < names.length; i++) {
    let renamedCounter = 1;
    let nameToVerify = names[i];
    for (let k=0; k < i; k++) {
      if (outputUniqueNames[k] === nameToVerify) {
        nameToVerify = names[i] + `(${renamedCounter})`;
        renamedCounter++;
      }
    }
    outputUniqueNames.push(nameToVerify);
  }
  
  return outputUniqueNames;
}


module.exports = {
  renameFiles
};
