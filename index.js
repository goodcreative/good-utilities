//  Good Utilities - index.js

/////////////
// Imports //
/////////////

// DOM
import createNodeFromHTML from "./DOM/createNodeFromHTML/createNodeFromHTML.js";
import decodeCharacters from "./DOM/decodeCharacters/decodeCharacters.js";
import getClosestDescendentByDepth from "./DOM/getClosestDescendentByDepth/getClosestDescendentByDepth.js";
import getIndexOfNode from "./DOM/getIndexOfNode/getIndexOfNode.js";
import getIndexOfNodeInNodeList from "./DOM/getIndexOfNodeInNodeList/getIndexOfNodeInNodeList.js";
import getOffset from "./DOM/getOffset/getOffset.js";
import getOuterHeight from "./DOM/getOuterHeight/getOuterHeight.js";
import getOuterWidth from "./DOM/getOuterWidth/getOuterWidth.js";
import isElementInView from "./DOM/isElementInView/isElementInView.js";
import onIntersect from "./DOM/onIntersect/onIntersect.js";
import onResize from "./DOM/onResize/onResize.js";
import prefersReducedMotion from "./DOM/prefersReducedMotion/prefersReducedMotion.js";
import ready from "./DOM/ready/ready.js";
import removeInlineStyles from "./DOM/removeInlineStyles/removeInlineStyles.js";
import wrapElement from "./DOM/wrapElement/wrapElement.js";

// Events
import messageBus from "./Events/messageBus/messageBus.js";
import bindGlobalMessages from "./Events/bindGlobalMessages/bindGlobalMessages.js";
import bindGlobalScrollMessage from "./Events/bindGlobalScrollMessage/bindGlobalScrollMessage.js";
import bindGlobalResizeMessage from "./Events/bindGlobalResizeMessage/bindGlobalResizeMessage.js";
import createDelegatedEventListener from "./Events/createDelegatedEventListener/createDelegatedEventListener.js";
import createGlobalMessenger from "./Events/createGlobalMessenger/createGlobalMessenger.js";
import messages from "./Events/messages/messages.js";

// Storage
import getCookie from "./Storage/getCookie/getCookie.js";
import setCookie from "./Storage/setCookie/setCookie.js";
import getLocalStorage from "./Storage/getLocalStorage/getLocalStorage.js";
import setLocalStorage from "./Storage/setLocalStorage/setLocalStorage.js";
import removeLocalStorage from "./Storage/removeLocalStorage/removeLocalStorage.js";
import getSessionStorage from "./Storage/getSessionStorage/getSessionStorage.js";
import setSessionStorage from "./Storage/setSessionStorage/setSessionStorage.js";
import removeSessionStorage from "./Storage/removeSessionStorage/removeSessionStorage.js";

// String
import truncate from "./String/truncate/truncate.js";
import slugify from "./String/slugify/slugify.js";
import { capitalize, titleCase } from "./String/capitalize/capitalize.js";
import stripHTML from "./String/stripHTML/stripHTML.js";

// Array
import groupBy from "./Array/groupBy/groupBy.js";
import deepClone from "./Array/deepClone/deepClone.js";
import chunk from "./Array/chunk/chunk.js";

// Async
import debounce from "./Async/debounce/debounce.js";
import throttle from "./Async/throttle/throttle.js";

/////////////
// Exports //
/////////////

// DOM
export { createNodeFromHTML };
export { decodeCharacters };
export { getClosestDescendentByDepth };
export { getIndexOfNode };
export { getIndexOfNodeInNodeList };
export { getOffset };
export { getOuterHeight };
export { getOuterWidth };
export { isElementInView };
export { onIntersect };
export { onResize };
export { prefersReducedMotion };
export { ready };
export { removeInlineStyles };
export { wrapElement };

// Events
export { messageBus };
export { bindGlobalMessages };
export { bindGlobalScrollMessage };
export { bindGlobalResizeMessage };
export { createDelegatedEventListener };
export { createGlobalMessenger };
export { messages };

// Storage
export { getCookie };
export { setCookie };
export { getLocalStorage };
export { setLocalStorage };
export { removeLocalStorage };
export { getSessionStorage };
export { setSessionStorage };
export { removeSessionStorage };

// String
export { truncate };
export { slugify };
export { capitalize };
export { titleCase };
export { stripHTML };

// Array
export { groupBy };
export { deepClone };
export { chunk };

// Async
export { debounce };
export { throttle };
