/**
 * formatBytes - Convert a byte count to a human-readable file size string.
 *
 * @param {number} bytes  Number of bytes
 * @returns {string}      Human-readable size (e.g. '1.5 KB', '2 MB')
 */
export default function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  let value = bytes;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i++;
  }
  const formatted = parseFloat(value.toFixed(2));
  return `${formatted} ${units[i]}`;
}
