import { NotImplementedError } from "../extensions/index.js";

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
export default function deleteDigit(n) {
  const str = String(n);
  const iter = (index, acc) => {
    if (index === str.length) {
      return acc;
    }
    return iter(index + 1, [
      ...acc,
      Number(str.substring(0, index) + str.substring(index + 1)),
    ]);
  };
  return Math.max(...iter(0, []));
}
