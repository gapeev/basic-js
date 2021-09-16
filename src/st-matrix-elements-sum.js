import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const reversedMatrix = [...matrix].map((row) => [...row].reverse());
  const rotatedMatrix = reversedMatrix[0].map((_, colIndex) =>
    reversedMatrix.map((row) => row[colIndex])
  );

  return rotatedMatrix
    .map((row) => {
      const zeroIndex = row.indexOf(0);
      if (zeroIndex === -1) {
        return row;
      }
      return row.slice(0, zeroIndex);
    })
    .map((row) => row.reduce((acc, value) => acc + value, 0))
    .reduce((acc, value) => acc + value, 0);
}
