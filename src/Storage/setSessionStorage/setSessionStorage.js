/**
 * setSessionStorage - Sets a sessionStorage item, automatically stringifying values.
 *
 * @param {string} key
 * @param {*}      value  Value to store (will be JSON.stringified)
 */
export default function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}
