/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// function findIndex(array, value) {
//   // throw new Error('Not implemented');
//   let start = 0;
//   // так как бинарный поиск работает только на сорт массивах, можно сдедать end - 1
//   let end = array.length - 1;
//   let center = Math.floor((start + end) / 2);

//   for (let i = 0; i < array.length; i++) {
//     center = Math.floor((start + end) / 2);
//     if (array[center] === value) return center;
//     if (array[center] < value) start = center + 1;
//     if (array[center] > value) end = center - 1;
//   }

//   return 'Upss....nothing.Your index is -1';
// }
function findIndex(array, value) {
  const calcCenter = (start, end) => Math.floor((start + end) / 2);
  const binarySearch = (arr, val, start, end) => {
    const center = calcCenter(start, end);
    if (end - 1 === start) return val === arr[end] ? end : start;
    if (val > arr[center]) return binarySearch(arr, val, center, end);
    if (val < arr[center]) return binarySearch(arr, val, start, center);
    return center;
  };
  return binarySearch(array, value, 0, array.length - 1);
}

module.exports = findIndex;
