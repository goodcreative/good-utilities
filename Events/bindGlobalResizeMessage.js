import PubSub from "pubsub-js";
import debounce from "debounce";

import MESSAGES from "./messages";

/**
 * bindGlobalMessages - Binds event listeners to global browser events and fires global messages in response
 *
 * @returns {type} Description
 */
export default function bindGlobalResizeMessage() {
  // Handle debounced resize by publishing a global PubSub message from
  // a single eventListener instance
  window.onresize = debounce(function() {
    // Publish global  message
    PubSub.publish(MESSAGES.resize);
  }, 200);
}
