/**
 * createCustomEvent - Returns a custom event object
 *
 * @param {string} eventName Name of the custom event
 * @param {object} eventData Associated data passed through as part of the event object
 *
 * @returns {object} Custom Event object
 */
export default function createCustomEvent(eventName, eventData) {
  let customEvent;

  if (window.CustomEvent) {
    customEvent = new CustomEvent(eventName, { detail: { data: eventData }, bubbles: true });
  } else {
    customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(eventName, true, true, { data: eventData });
  }

  return customEvent;
}
