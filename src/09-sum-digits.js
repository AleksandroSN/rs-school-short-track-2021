/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new Error('Not implemented');
  const sum = Array.from(String(n))
    .map(Number)
    .reduce((ac, cur) => ac + cur, 0);
  if (sum < 10) return sum;
  return getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
