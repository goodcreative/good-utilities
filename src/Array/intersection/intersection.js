/**
 * intersection - Return items present in both arrays.
 *
 * @param {Array} arr1  First array
 * @param {Array} arr2  Second array
 * @returns {Array}     Items found in both
 */
export default function intersection(arr1, arr2) {
  const set = new Set(arr2);
  return arr1.filter(item => set.has(item));
}
