const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < arr[i + 1])
      return Number(arr.slice(0, i).join("") + arr.slice(i + 1).join(""));
  }
  return Number(arr.slice(0, arr.length - 1).join(""));
}

module.exports = {
  deleteDigit,
};
