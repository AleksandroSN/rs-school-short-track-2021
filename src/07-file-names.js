/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new Error('Not implemented');
  const resArr = [];
  let suffix = 1;
  let suffix2 = 1;
  names.forEach((x) => {
    if (resArr.includes(x)) {
      if (resArr.indexOf(x) === names.indexOf(x)) {
        resArr.push(`${x}(${suffix})`);
        suffix += 1;
      } else {
        resArr.push(`${x}(${suffix2})`);
        suffix2 += 1;
      }
    } else resArr.push(x);
  });
  return resArr;
}

module.exports = renameFiles;
