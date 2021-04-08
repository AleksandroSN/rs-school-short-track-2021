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
  // throw new Error('Not implemented');
  const arrN = Array.from(n.toString()).map(Number);
  const min = Math.min(...arrN);
  const indexMin = arrN.indexOf(min);
  arrN.splice(indexMin, 1);
  return +arrN.join('');
}

module.exports = deleteDigit;
