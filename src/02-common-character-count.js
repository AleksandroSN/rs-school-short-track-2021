/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  let count = 0;

  const getCollection = (str) => {
    const collection = {};
    str.split('').forEach((character) => {
      if (collection[character]) {
        collection[character] += 1;
      } else collection[character] = 1;
    });
    return collection;
  };

  const objS1 = getCollection(s1);
  const objS2 = getCollection(s2);

  Object.keys(objS1).forEach((key) => {
    if (objS2[key] !== undefined) {
      count += Math.min(objS1[key], objS2[key]);
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
