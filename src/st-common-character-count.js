import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }

  const index = s2.indexOf(s1[0]);
  if (index === -1) {
    return getCommonCharacterCount(s1.substring(1), s2);
  }

  return (
    1 +
    getCommonCharacterCount(
      s1.substring(1),
      s2.substring(0, index) + s2.substring(index + 1)
    )
  );
}
