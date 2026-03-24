/**
 * groupBy - Groups an array of objects by a property value.
 *
 * @param {Array}  arr  Array of objects
 * @param {string} key  Property name to group by
 * @returns {object}    Object where keys are group values, values are arrays of items
 */
export default function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) result[group] = [];
    result[group].push(item);
    return result;
  }, {});
}
