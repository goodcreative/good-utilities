import shuffle from '../shuffle/shuffle.js';

/**
 * sample - Return n random items from an array without replacement.
 *
 * @param {Array}  arr  Input array
 * @param {number} n    Number of items to return
 * @returns {Array}     Random sample of n items
 */
export default function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}
