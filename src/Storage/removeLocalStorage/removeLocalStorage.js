/**
 * removeLocalStorage - Removes a localStorage item by key.
 *
 * @param {string} key
 */
export default function removeLocalStorage(key) {
  localStorage.removeItem(key);
}
