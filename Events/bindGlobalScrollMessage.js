import PubSub from "pubsub-js";

import MESSAGES from "./messages";

/**
 * bindGlobalMessages - Binds event listeners to global browser events and fires global messages in response
 *
 * @returns {type} Description
 */
export default function bindGlobalScrollMessage() {
  // Handle page scroll by publishing a global PubSub message from
  // a single eventListener instance
  window.addEventListener("scroll", function() {
    // Publish global message
    PubSub.publish(MESSAGES.scroll);
  });
}
