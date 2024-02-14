const { NotImplementedError } = require("../extensions/index.js");

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
  const map = new Map();
  domains.forEach((domain) => {
    const arr = domain.split(".").reverse();
    console.log(arr);
    let temp = "";
    arr.forEach((el) => {
      temp += `.${el}`;
      if (map.has(temp)) map.set(temp, map.get(temp) + 1);
      else map.set(temp, 1);
    });
  });
  const obj = {};
  [...map].forEach(([key, value]) => (obj[key] = value));
  return obj;
}

module.exports = {
  getDNSStats,
};
