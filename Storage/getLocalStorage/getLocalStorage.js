/**
 * getLocalStorage - Gets a localStorage item, automatically parsing JSON.
 *
 * @param {string} key
 * @returns {*}  Parsed value, or null if not found
 */
export default function getLocalStorage(key) {
  const item = localStorage.getItem(key);
  if (item === null) return null;
  try {
    return JSON.parse(item);
  } catch {
    return item;
  }
}
