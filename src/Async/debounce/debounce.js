/**
 * debounce - Returns a debounced version of fn that delays invoking until
 * after wait milliseconds have elapsed since the last call.
 *
 * @param {Function} fn    Function to debounce
 * @param {number}   wait  Delay in milliseconds
 * @returns {Function}
 */
export default function debounce(fn, wait) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}
