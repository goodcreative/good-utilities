/**
 * removeSessionStorage - Removes a sessionStorage item by key.
 *
 * @param {string} key
 */
export default function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}
