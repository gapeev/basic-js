import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  const normalizedSampleActivity = parseFloat(sampleActivity);
  if (
    isNaN(normalizedSampleActivity) ||
    normalizedSampleActivity <= 0 ||
    normalizedSampleActivity > MODERN_ACTIVITY
  ) {
    return false;
  }

  const k = Math.LN2 / HALF_LIFE_PERIOD;
  const t =
    Math.log(MODERN_ACTIVITY / normalizedSampleActivity) / Math.log(Math.E) / k;
  return Math.ceil(t);
}
