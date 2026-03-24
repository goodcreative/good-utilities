import messageBus from "../messageBus/messageBus.js";
import MESSAGES from "../messages/messages.js";

/**
 * bindGlobalResizeMessage - Attaches a debounced resize listener to window and
 * publishes a global message on the messageBus (200ms debounce).
 */
export default function bindGlobalResizeMessage() {
  let timer;
  window.addEventListener("resize", function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      messageBus.dispatchEvent(new CustomEvent(MESSAGES.resize));
    }, 200);
  });
}
