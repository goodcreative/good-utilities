/**
 * isElementInView - Returns a Promise that resolves to true when the element
 * enters the viewport, false if it never does (observer disconnected).
 * Uses IntersectionObserver for performance.
 *
 * @param {Element} element  Element to check
 * @param {object}  [options] IntersectionObserver options
 * @returns {Promise<boolean>}
 */
export default function isElementInView(element, options = {}) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          resolve(true);
        }
      });
    }, options);
    observer.observe(element);
  });
}
