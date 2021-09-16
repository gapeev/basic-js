import { NotImplementedError } from "../extensions/index.js";

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
export default function sortByHeight(arr) {
  const sortedArray = arr.filter((value) => value !== -1).sort((a, b) => a - b);
  const iter = (index, acc) => {
    if (index === arr.length) {
      return acc;
    }
    return iter(index + 1, [
      ...acc,
      arr[index] === -1 ? -1 : sortedArray.shift(),
    ]);
  };
  return iter(0, []);
}
