/**
 * roundTo - Round a number to a given number of decimal places.
 *
 * @param {number} value     Number to round
 * @param {number} decimals  Decimal places
 * @returns {number}         Rounded number
 */
export default function roundTo(value, decimals) {
  return Number(Math.round(parseFloat(value + 'e' + decimals)) + 'e-' + decimals);
}
