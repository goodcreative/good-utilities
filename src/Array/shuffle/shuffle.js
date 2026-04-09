/**
 * shuffle - Return a new array with elements in random order (Fisher-Yates).
 *
 * @param {Array} arr  Input array
 * @returns {Array}    New shuffled array (original not mutated)
 */
export default function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
