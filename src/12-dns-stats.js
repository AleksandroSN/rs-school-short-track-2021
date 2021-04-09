/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new Error('Not implemented');
  if (domains.length < 1) return {};
  const obj = {};
  const j = domains[domains.length - 1].split('.').reverse();
  let y;
  j.forEach((x, i) => {
    let el = x;
    if (i === j.length - 1) {
      el = `${y}.${el}`;
      obj[el] = domains.length === 1 ? domains.length : domains.length - 1;
      return;
    }
    if (i > 0) {
      y = y.substring(1);
      el = `${y}.${el}`;
    }
    el = `.${el}`;
    y = el;
    obj[el] = domains.length;
  });

  return obj;
}

module.exports = getDNSStats;
