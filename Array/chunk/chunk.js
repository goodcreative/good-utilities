/**
 * chunk - Splits an array into chunks of a given size.
 *
 * @param {Array}  arr   Array to split
 * @param {number} size  Chunk size
 * @returns {Array}      Array of chunk arrays
 */
export default function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
