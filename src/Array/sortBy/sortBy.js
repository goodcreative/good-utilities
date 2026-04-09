/**
 * sortBy - Sort an array of objects by a property.
 *
 * @param {Array}  arr        Array of objects
 * @param {string} key        Property to sort by
 * @param {string} [direction='asc']  'asc' or 'desc'
 * @returns {Array}           New sorted array (original not mutated)
 */
export default function sortBy(arr, key, direction = 'asc') {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}
