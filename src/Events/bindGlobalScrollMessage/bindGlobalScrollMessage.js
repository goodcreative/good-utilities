import messageBus from "../messageBus/messageBus.js";
import MESSAGES from "../messages/messages.js";

/**
 * bindGlobalScrollMessage - Attaches a scroll listener to window and publishes
 * a global message on the messageBus on each scroll event.
 */
export default function bindGlobalScrollMessage() {
  window.addEventListener("scroll", function() {
    messageBus.dispatchEvent(new CustomEvent(MESSAGES.scroll));
  });
}
