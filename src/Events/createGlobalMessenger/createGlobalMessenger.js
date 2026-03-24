import messageBus from "../messageBus/messageBus.js";

/**
 * createGlobalMessenger - Binds a delegated event listener to document.body.
 * When the event fires on an element matching selector, publishes a message
 * on the global messageBus.
 *
 * @param {string}  eventType     Event type to listen for
 * @param {string}  selector      CSS selector for the delegated target
 * @param {string}  message       Message topic to publish on messageBus
 * @param {boolean} preventBubble If true, calls preventDefault and stopPropagation
 */
export default function createGlobalMessenger(eventType, selector, message, preventBubble) {
  document.body.addEventListener(eventType, (e) => {
    if (!e.target.closest(selector)) return;
    if (preventBubble) {
      e.preventDefault();
      e.stopPropagation();
    }
    messageBus.dispatchEvent(new CustomEvent(message, { detail: e }));
  });
}
