/**
 * deepClone - Deep copies an object or array using the native structuredClone API.
 *
 * @param {*} value  Value to clone
 * @returns {*}      Deep clone of the value
 */
export default function deepClone(value) {
  return structuredClone(value);
}
