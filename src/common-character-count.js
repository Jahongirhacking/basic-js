const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const map = new Map();
  s1.split("").forEach((char) =>
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1)
  );
  s2.split("").forEach((char) => {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) map.delete(char);
      res++;
    }
  });
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
