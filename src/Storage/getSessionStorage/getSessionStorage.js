/**
 * getSessionStorage - Gets a sessionStorage item, automatically parsing JSON.
 *
 * @param {string} key
 * @returns {*}  Parsed value, or null if not found
 */
export default function getSessionStorage(key) {
  const item = sessionStorage.getItem(key);
  if (item === null) return null;
  try {
    return JSON.parse(item);
  } catch {
    return item;
  }
}
