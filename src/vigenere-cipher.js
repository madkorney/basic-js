const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  directMachine = true;
 

  constructor(isDirect) {
    if (arguments.length == 0) {
      this.directMachine = true;
    } else {
      this.directMachine = isDirect;
    }
  }

  encrypt(str, key) {
    const argErrorMessage = 'Incorrect arguments!';

    function tabulaRectaEncodeChar(charY,charX) {
      let Y=charY.toUpperCase().charCodeAt(0);
      let X=charX.toUpperCase().charCodeAt(0);
      if (X+Y-65 > 90 ) {
        return String.fromCharCode(X+Y-65-26)
      } else {
        return String.fromCharCode(X+Y-65)
      }
    }

    if (arguments.length < 2) {throw new Error(argErrorMessage)}
    if (arguments[0] === undefined || arguments[1] === undefined ) {throw new Error(argErrorMessage)}
    
    let stringToEncode = ('' + str).toUpperCase();
    let symbolsToEncode = '';
    for (let  i=0; i < stringToEncode.length; i++) {
      if (stringToEncode.charCodeAt(i)>=65 && stringToEncode.charCodeAt(i) <= 90) {
        symbolsToEncode = symbolsToEncode + stringToEncode[i];
      }
    }
    
    let adjustedKey = (''+ key).repeat(Math.trunc(symbolsToEncode.length / key.length)).toUpperCase() + 
                      (''+ key).substring(0,symbolsToEncode.length % key.length).toUpperCase();
    
    let encodedString = '';
    let k =0;
    for (let i = 0; i < stringToEncode.length; i++) {
      if (stringToEncode.charCodeAt(i)>=65 && stringToEncode.charCodeAt(i) <= 90) {
        encodedString = encodedString + tabulaRectaEncodeChar(stringToEncode[i],adjustedKey[k]);
        k++;
      } else {
        encodedString = encodedString + stringToEncode[i]; 
      }
    }

    if (!this.directMachine) {encodedString = encodedString.split('').reverse().join('')}

//    console.log(encodedString);//todo - remove

    return encodedString;

  }

  decrypt(str, key) {
    const argErrorMessage = `Incorrect arguments!`;

    function tabulaRectaDecodeChar(charEncoded,charKey) {
      let C=charEncoded.toUpperCase().charCodeAt(0);
      let X=charKey.toUpperCase().charCodeAt(0);
      let decodedCharCode = 65 + C - X;
      if (decodedCharCode < 65) {decodedCharCode += 26}
      return String.fromCharCode(decodedCharCode)
    }

    if (arguments.length < 2) {throw new Error(argErrorMessage)}
    if (arguments[0] === undefined || arguments[1] === undefined ) {throw new Error(argErrorMessage)}
    
    let stringToDecode = ('' + str).toUpperCase();
    let symbolsToDecode = '';
    for (let  i=0; i < stringToDecode.length; i++) {
      if (stringToDecode.charCodeAt(i)>=65 && stringToDecode.charCodeAt(i) <= 90) {
        symbolsToDecode = symbolsToDecode + stringToDecode[i];
       }
    }
    
    let adjustedKey = (''+ key).repeat(Math.trunc(symbolsToDecode.length / key.length)).toUpperCase() + 
                      (''+ key).substring(0,symbolsToDecode.length % key.length).toUpperCase();
    
    let decodedString = '';
    let k =0;
    for (let i = 0; i < stringToDecode.length; i++) {
      if (stringToDecode.charCodeAt(i)>=65 && stringToDecode.charCodeAt(i) <= 90) {
        decodedString = decodedString + tabulaRectaDecodeChar(stringToDecode[i],adjustedKey[k]);
        k++;
      } else {
        decodedString = decodedString + stringToDecode[i]; 
      }
    }

    if (!this.directMachine) {decodedString = decodedString.split('').reverse().join('')}

    //console.log(decodedString);//todo - remove

    return decodedString;
    
  }
}

//A-Z  65-90
let tabulaRecta = [];

for (let i=65; i < 91 ; i++) {
  tabulaRecta.push([]);
  for(let k=65; k < 91; k++) {
    let charCode = k + i - 65;
    if (charCode> 90) {charCode = charCode - 26;}
    tabulaRecta[i-65].push(String.fromCharCode(charCode));
  }
  

}


const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

directMachine.encrypt('attack at dawn!', 'alphonse'); // ` => `'AEIHQX SX DLLU!'
directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'); //` => `'ATTACK AT DAWN!'
reverseMachine.encrypt('attack at dawn!', 'alphonse'); //` => `'!ULLD XS XQHIEA'
reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'); //` => `'!NWAD TA KCATTA'

module.exports = {
  VigenereCipheringMachine
};
