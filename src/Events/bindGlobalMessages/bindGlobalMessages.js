
import bindGlobalScrollMessage from "../bindGlobalScrollMessage/bindGlobalScrollMessage.js";
import bindGlobalResizeMessage from "../bindGlobalResizeMessage/bindGlobalResizeMessage.js";

/**
 * bindGlobalMessages - Binds event listeners to global browser events and fires global messages in response
 *
 * @returns {type} Description
 */
export default function bindGlobalMessages() {
  bindGlobalScrollMessage();
  bindGlobalResizeMessage();
}
