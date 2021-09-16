import { NotImplementedError } from "../extensions/index.js";

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

export default function getDNSStats(domains) {
  return domains.reduce((acc, domain) => {
    const domainChunks = domain.split(".").reverse();
    return domainChunks.reduce((acc, _, index) => {
      const name = `.${domainChunks.slice(0, index + 1).join(".")}`;
      return { ...acc, [name]: (acc[name] || 0) + 1 };
    }, acc);
  }, {});
}
