/**
 * difference - Return items in arr1 not present in arr2.
 *
 * @param {Array} arr1  Source array
 * @param {Array} arr2  Array of values to exclude
 * @returns {Array}     Filtered array
 */
export default function difference(arr1, arr2) {
  const set = new Set(arr2);
  return arr1.filter(item => !set.has(item));
}
