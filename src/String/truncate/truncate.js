/**
 * truncate - Truncates a string to a maximum length, appending a suffix if cut.
 *
 * @param {string} str       The string to truncate
 * @param {number} maxLen    Maximum character length
 * @param {string} [suffix]  String appended when truncated (default: '…')
 * @returns {string}
 */
export default function truncate(str, maxLen, suffix = '…') {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen) + suffix;
}
