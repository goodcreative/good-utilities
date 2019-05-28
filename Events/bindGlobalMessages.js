
import bindGlobalScrollMessage from "./bindGlobalScrollMessage";
import bindGlobalResizeMessage from "./bindGlobalResizeMessage";

/**
 * bindGlobalMessages - Binds event listeners to global browser events and fires global messages in response
 *
 * @returns {type} Description
 */
export default function bindGlobalMessages() {
  bindGlobalScrollMessage();
  bindGlobalResizeMessage();
}
