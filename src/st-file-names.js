import { NotImplementedError } from "../extensions/index.js";

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
export default function renameFiles(names) {
  const iter = (index, acc) => {
    if (index === names.length) {
      return acc;
    }

    const lastIndex = acc.lastIndexOf(names[index]);
    if (lastIndex === -1) {
      return iter(index + 1, [...acc, names[index]]);
    }

    const counts = acc
      .filter((name) => {
        const count = name.match(/(?<=\()\d+(?=\)$)/g);
        return count !== null && name === `${names[index]}(${count[0]})`;
      })
      .map((name) => Number(name.match(/(?<=\()\d+(?=\)$)/g)[0]));

    return iter(index + 1, [
      ...acc,
      `${names[index]}(${(counts[counts.length - 1] || 0) + 1})`,
    ]);
  };
  return iter(0, []);
}
