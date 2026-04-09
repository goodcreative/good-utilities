/**
 * randomBetween - Generate a random float between two values (inclusive).
 *
 * @param {number} min  Lower bound
 * @param {number} max  Upper bound
 * @returns {number}    Random float in [min, max]
 */
export default function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
