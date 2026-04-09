/**
 * slugify - Converts a string to a URL-safe slug.
 * e.g. 'Hello World!' → 'hello-world'
 *
 * @param {string} str
 * @returns {string}
 */
export default function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/-+/g, '-');
}
