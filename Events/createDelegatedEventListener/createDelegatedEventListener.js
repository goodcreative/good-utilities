/**
 * createDelegatedEventListener - Binds a delegated event listener to document.body.
 * When the event fires on an element matching selector, prevents default,
 * stops propagation, and dispatches a custom event on the target element.
 *
 * @param {string} eventType      Event type to listen for
 * @param {string} selector       CSS selector for the delegated target
 * @param {string} eventToTrigger Name of the custom event to dispatch on target
 * @param {*}      eventData      Optional data attached at event.detail.data
 */
export default function createDelegatedEventListener(eventType, selector, eventToTrigger, eventData = null) {
  document.body.addEventListener(eventType, (e) => {
    if (!e.target.closest(selector)) return;
    e.preventDefault();
    e.stopPropagation();
    e.target.dispatchEvent(new CustomEvent(eventToTrigger, {
      bubbles: true,
      detail: { data: eventData }
    }));
  });
}
