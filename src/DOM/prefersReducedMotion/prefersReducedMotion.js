/**
 * prefersReducedMotion - Returns true if the user has requested reduced motion
 * via the prefers-reduced-motion media query.
 *
 * @returns {boolean}
 */
export default function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
