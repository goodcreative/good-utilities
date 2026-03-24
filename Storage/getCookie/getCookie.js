/**
 * getCookie - Returns the value of a cookie by name.
 *
 * @param {string} cookieName  Name of the cookie
 * @returns {string|null}      Cookie value, or null if not found
 */
export default function getCookie(cookieName) {
  const name = cookieName + "=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }
  return null;
}
