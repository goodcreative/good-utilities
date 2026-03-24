/**
 * setCookie - Sets a browser cookie.
 *
 * @param {string} cookieName  Name of the cookie
 * @param {string} value       Cookie value
 * @param {number} [days]      Expiry in days; omit for session cookie
 * @param {string} [config]    Cookie attributes string
 */
export default function setCookie(
  cookieName,
  value,
  days,
  config = "; path=/ ; SameSite=None; Secure"
) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = cookieName + "=" + value + expires + config;
}
