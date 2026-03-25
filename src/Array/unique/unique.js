/**
 * unique - Remove duplicate primitive values from an array.
 *
 * @param {Array} arr  Input array
 * @returns {Array}    Array with duplicates removed, order preserved
 */
export default function unique(arr) {
  return [...new Set(arr)];
}
