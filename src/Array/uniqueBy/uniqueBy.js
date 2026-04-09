/**
 * uniqueBy - Remove duplicates from an array of objects by a property key.
 *
 * @param {Array}  arr  Array of objects
 * @param {string} key  Property to deduplicate by
 * @returns {Array}     Array with first occurrence of each key value kept
 */
export default function uniqueBy(arr, key) {
  const seen = new Set();
  return arr.filter(item => {
    const val = item[key];
    if (seen.has(val)) return false;
    seen.add(val);
    return true;
  });
}
