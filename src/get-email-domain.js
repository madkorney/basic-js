const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 
  //validate args
  if(!email) {return ''}

  let emailDomain = email.substring(email.lastIndexOf('@') + 1);

  return emailDomain
}

// const tzt = 'pretty@and@simple.example.com';
// console.log(getEmailDomain(tzt));

module.exports = {
  getEmailDomain
};
