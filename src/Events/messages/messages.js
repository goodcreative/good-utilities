// Messages
// --------
// Keeping all the global messages as values in an object means errors can be found at runtime,
// rather than mismatched message strings being hidden.

/**
 * Object containing pub-sub message strings
 *
 * @constant
 */
const MESSAGES = {
  "resize": "page/resize",
  "scroll": "page/scroll",
  "load": "page/loaded",
  "contentChange": "page-content/change",
  "contentDisplayed": "page-content/displayed",
  "layoutChange": "layout/change",
  "breakChange": "breakpoint/change",
  "imageLoaded": "image/loaded",
  "modalOpened": "modal/opened",
  "displayModal": "modal/display",
  "stopMedia" : "media/stop"
}

export default MESSAGES;
