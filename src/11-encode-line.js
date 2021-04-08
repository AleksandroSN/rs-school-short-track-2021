/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let resStr = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else if (count === 0) {
      resStr += `${str[i]}`;
    } else {
      count += 1;
      resStr += `${count}${str[i]}`;
      count = 0;
    }
  }
  return resStr;
}

module.exports = encodeLine;
