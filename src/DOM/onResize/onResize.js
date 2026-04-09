/**
 * onResize - Sets up a ResizeObserver on an element and calls callback when
 * the element's size changes.
 *
 * @param {Element}  el        Element to observe
 * @param {Function} callback  Called with (entry, observer) on each resize
 * @returns {ResizeObserver}   The observer instance (call .disconnect() to stop)
 */
export default function onResize(el, callback) {
  const observer = new ResizeObserver((entries) => {
    entries.forEach((entry) => callback(entry, observer));
  });
  observer.observe(el);
  return observer;
}
