const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str = "STRING_OR_DEFAULT", options) {
  const {
    repeatTimes,
    separator = "+",
    addition = "",
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;
  let temp = String(str);
  const arr = new Array(additionRepeatTimes).fill(String(addition));
  if (arr.length !== 0) temp += arr.join(additionSeparator);
  return new Array(repeatTimes).fill(String(temp)).join(separator);
}

module.exports = {
  repeater,
};
