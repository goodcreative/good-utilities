/**
 * capitalize - Capitalizes the first letter of a string.
 *
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * titleCase - Capitalizes the first letter of each word.
 *
 * @param {string} str
 * @returns {string}
 */
export function titleCase(str) {
  if (!str) return str;
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
