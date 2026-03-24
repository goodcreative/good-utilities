/**
 * throttle - Returns a throttled version of fn that invokes at most once per
 * wait milliseconds.
 *
 * @param {Function} fn    Function to throttle
 * @param {number}   wait  Minimum interval between calls in milliseconds
 * @returns {Function}
 */
export default function throttle(fn, wait) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall < wait) return;
    lastCall = now;
    return fn.apply(this, args);
  };
}
