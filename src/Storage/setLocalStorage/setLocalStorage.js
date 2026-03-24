/**
 * setLocalStorage - Sets a localStorage item, automatically stringifying values.
 *
 * @param {string} key
 * @param {*}      value  Value to store (will be JSON.stringified)
 */
export default function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
