const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  const res = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let arr = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      let temp = 0;
      for (let [y, x] of moves) {
        if (matrix[i + y] && matrix[i + y][j + x]) temp += 1;
      }
      arr.push(temp);
    }
    res.push([...arr]);
  }
  return res;
}

module.exports = {
  minesweeper,
};
