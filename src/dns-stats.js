const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  
  let DNSOptions = {};
  
  for (let i = 0; i < domains.length; i++) {
    let domainsArr = domains[i].split('.').reverse();//.join('.');
    let DNSaddress = '';
    for (let k = 0; k < domainsArr.length; k++) {
      DNSaddress = DNSaddress + '.' + domainsArr[k];
      if (DNSOptions.hasOwnProperty(DNSaddress)) {
          DNSOptions[DNSaddress]++;
      } else {
          DNSOptions[DNSaddress]=1;
      }
    };
  }
  return DNSOptions;
}

// let domains = [
//    'code.yandex.ru',
//    'music.yandex.ru',
//    'yandex.ru'
//   ];

// console.table(getDNSStats(domains));


module.exports = {
  getDNSStats
};
