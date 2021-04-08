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
  // throw new Error('Not implemented');
  const resArr = matrix.reduce((acc, cur) => acc.concat(cur), []);
  const arrLength = matrix[0].length;
  let sum = 0;
  resArr.forEach((x, i) => {
    if (resArr[i - arrLength] !== 0) {
      sum += x;
    }
  });
  return sum;
}

module.exports = getMatrixElementsSum;
