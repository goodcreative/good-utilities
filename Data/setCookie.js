
/**
 * Set a cookie
 *
 * @export
 * @param {*} cookieName
 * @param {*} value
 * @param {*} days
 */
export default function setCookie(cookieName,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = cookieName + "=" + (value || "")  + expires + "; path=/";
}
