import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str.length === 0) {
    return str;
  }

  const iter = (index, count, acc) => {
    if (index > str.length) {
      return acc;
    }
    return iter(
      index + 1,
      str[index] !== str[index - 1] ? 1 : count + 1,
      str[index] !== str[index - 1]
        ? `${acc}${count === 1 ? "" : count}${str[index - 1]}`
        : acc
    );
  };
  return iter(1, 1, "");
}
