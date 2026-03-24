/**
 * stripHTML - Removes all HTML tags from a string.
 *
 * @param {string} str
 * @returns {string}
 */
export default function stripHTML(str) {
  return str.replace(/<[^>]*>/g, '');
}
