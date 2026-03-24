/**
 * onIntersect - Sets up an IntersectionObserver on an element and calls
 * callback when intersection state changes.
 *
 * @param {Element}  el        Element to observe
 * @param {Function} callback  Called with (entry, observer) on each intersection change
 * @param {object}   [options] IntersectionObserver options (root, rootMargin, threshold)
 * @returns {IntersectionObserver}  The observer instance (call .disconnect() to stop)
 */
export default function onIntersect(el, callback, options = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => callback(entry, observer));
  }, options);
  observer.observe(el);
  return observer;
}
