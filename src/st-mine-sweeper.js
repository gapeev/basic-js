import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const getMine = (rowIndex, colIndex) => {
    if (
      rowIndex < 0 ||
      rowIndex === matrix.length ||
      colIndex < 0 ||
      colIndex === matrix[0].length
    ) {
      return 0;
    }
    return matrix[rowIndex][colIndex] ? 1 : 0;
  };

  const getMinesCount = (rowIndex, colIndex) => {
    return (
      getMine(rowIndex - 1, colIndex - 1) +
      getMine(rowIndex - 1, colIndex) +
      getMine(rowIndex - 1, colIndex + 1) +
      getMine(rowIndex, colIndex - 1) +
      getMine(rowIndex, colIndex + 1) +
      getMine(rowIndex + 1, colIndex - 1) +
      getMine(rowIndex + 1, colIndex) +
      getMine(rowIndex + 1, colIndex + 1)
    );
  };

  return matrix.map((row, rowIndex) =>
    row.map((_, colIndex) => getMinesCount(rowIndex, colIndex))
  );
}
