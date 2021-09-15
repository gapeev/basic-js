import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

const monthToSeason = (monthIndex) => {
  switch (monthIndex) {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "fall";
  }
};

export default function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (
    !(date instanceof Date) ||
    Object.prototype.hasOwnProperty.call(date, "toString") ||
    isNaN(date)
  ) {
    throw new Error("Invalid date!");
  }

  return monthToSeason(date.getMonth());
}
