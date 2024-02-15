const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (i !== 0 && matrix[i - 1][j] === 0) {
        continue;
      }
      sum += matrix[i][j];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
