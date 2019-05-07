/**
 * Searches an array of objects, looking to match the value of an object property, and returning
 * the first object with a matching property value
 *
 * @export
 * @param {*} nameKey
 * @param {*} property
 * @param {*} arrayToSearch
 * @returns
 */
export default function searchArrayByItemPropertyValue (nameKey, property, arrayToSearch) {
  for (var i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][property] === nameKey) {
      return arrayToSearch[i];
    }
  }

  return false;
}
