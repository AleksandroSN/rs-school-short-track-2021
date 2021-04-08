/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const resArr = [];
  const sortArr = arr.filter((x) => x > 0).sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      resArr.push(arr[i]);
    } else {
      resArr.push(sortArr[count]);
      count++;
    }
  }
  return resArr;
}

module.exports = sortByHeight;
