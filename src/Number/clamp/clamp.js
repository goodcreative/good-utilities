/**
 * clamp - Constrain a value within a range.
 *
 * @param {number} value  Value to clamp
 * @param {number} min    Lower bound
 * @param {number} max    Upper bound
 * @returns {number}      Clamped value
 */
export default function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
