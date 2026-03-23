
import bindGlobalScrollMessage from "../bindGlobalScrollMessage/bindGlobalScrollMessage";
import bindGlobalResizeMessage from "../bindGlobalResizeMessage/bindGlobalResizeMessage";

/**
 * bindGlobalMessages - Binds event listeners to global browser events and fires global messages in response
 *
 * @returns {type} Description
 */
export default function bindGlobalMessages() {
  bindGlobalScrollMessage();
  bindGlobalResizeMessage();
}
