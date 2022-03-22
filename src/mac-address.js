const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputAddress) {
  const allowedSymbols = '0123456789ABCDEF-'; 
  //validate args
   if (!inputAddress) {return false} 


   if (inputAddress.split('-').length != 6) {return false} // not 6 groups

   if (!inputAddress.split('-').reduce((previous, current)=>{previous = previous && (current.length===2); return previous},true)) {return false} // does each segment have exactly 2 digits?
   
   for (let i = 0; i < inputAddress.length; i++) {
    if (!allowedSymbols.includes(inputAddress[i].toUpperCase())) {return false} //contains invalid symbols
   } 

   return true; //it is a MAC address
}

// let mac= 'FF-FF-FF-FF-FF-FF';
// console.log(mac, ' is a MAC? - ', isMAC48Address(mac));
// assert.strictEqual(isMAC48Address('00-1B-63-84-45-E6'), true);
// assert.strictEqual(isMAC48Address('Z1-1B-63-84-45-E6'), false);
// assert.strictEqual(isMAC48Address('not a MAC-48 address'), false);
// assert.strictEqual(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
// assert.strictEqual(isMAC48Address('G0-00-00-00-00-00'), false);

module.exports = {
  isMAC48Address
};
