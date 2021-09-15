import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  return arr.reduce((acc, item, index) => {
    if (
      arr[index - 1] === "--discard-next" ||
      (arr[index + 1] === "--discard-prev" &&
        arr[index - 1] !== "--double-next") ||
      item === "--discard-next" ||
      item === "--discard-prev" ||
      item === "--double-next" ||
      item === "--double-prev"
    ) {
      return acc;
    }
    if (arr[index - 1] === "--double-next") {
      if (arr[index + 1] === "--double-prev") {
        return [...acc, item, item, item];
      }
      if (arr[index + 1] === "--discard-prev") {
        return [...acc, item];
      }
      return [...acc, item, item];
    }
    return [...acc, item];
  }, []);
}
