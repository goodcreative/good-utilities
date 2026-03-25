//  Good Utilities - index.js

/////////////
// Imports //
/////////////

// DOM
import createNodeFromHTML from "./src/DOM/createNodeFromHTML/createNodeFromHTML.js";
import decodeCharacters from "./src/DOM/decodeCharacters/decodeCharacters.js";
import getClosestDescendentByDepth from "./src/DOM/getClosestDescendentByDepth/getClosestDescendentByDepth.js";
import getIndexOfNode from "./src/DOM/getIndexOfNode/getIndexOfNode.js";
import getIndexOfNodeInNodeList from "./src/DOM/getIndexOfNodeInNodeList/getIndexOfNodeInNodeList.js";
import getOffset from "./src/DOM/getOffset/getOffset.js";
import getOuterHeight from "./src/DOM/getOuterHeight/getOuterHeight.js";
import getOuterWidth from "./src/DOM/getOuterWidth/getOuterWidth.js";
import isElementInView from "./src/DOM/isElementInView/isElementInView.js";
import onIntersect from "./src/DOM/onIntersect/onIntersect.js";
import onResize from "./src/DOM/onResize/onResize.js";
import prefersReducedMotion from "./src/DOM/prefersReducedMotion/prefersReducedMotion.js";
import ready from "./src/DOM/ready/ready.js";
import removeInlineStyles from "./src/DOM/removeInlineStyles/removeInlineStyles.js";
import wrapElement from "./src/DOM/wrapElement/wrapElement.js";

// Events
import messageBus from "./src/Events/messageBus/messageBus.js";
import bindGlobalMessages from "./src/Events/bindGlobalMessages/bindGlobalMessages.js";
import bindGlobalScrollMessage from "./src/Events/bindGlobalScrollMessage/bindGlobalScrollMessage.js";
import bindGlobalResizeMessage from "./src/Events/bindGlobalResizeMessage/bindGlobalResizeMessage.js";
import createDelegatedEventListener from "./src/Events/createDelegatedEventListener/createDelegatedEventListener.js";
import createGlobalMessenger from "./src/Events/createGlobalMessenger/createGlobalMessenger.js";
import messages from "./src/Events/messages/messages.js";

// Storage
import getCookie from "./src/Storage/getCookie/getCookie.js";
import setCookie from "./src/Storage/setCookie/setCookie.js";
import getLocalStorage from "./src/Storage/getLocalStorage/getLocalStorage.js";
import setLocalStorage from "./src/Storage/setLocalStorage/setLocalStorage.js";
import removeLocalStorage from "./src/Storage/removeLocalStorage/removeLocalStorage.js";
import getSessionStorage from "./src/Storage/getSessionStorage/getSessionStorage.js";
import setSessionStorage from "./src/Storage/setSessionStorage/setSessionStorage.js";
import removeSessionStorage from "./src/Storage/removeSessionStorage/removeSessionStorage.js";

// String
import truncate from "./src/String/truncate/truncate.js";
import slugify from "./src/String/slugify/slugify.js";
import { capitalize, titleCase } from "./src/String/capitalize/capitalize.js";
import stripHTML from "./src/String/stripHTML/stripHTML.js";

// Array
import groupBy from "./src/Array/groupBy/groupBy.js";
import deepClone from "./src/Array/deepClone/deepClone.js";
import chunk from "./src/Array/chunk/chunk.js";
import unique from "./src/Array/unique/unique.js";
import uniqueBy from "./src/Array/uniqueBy/uniqueBy.js";
import difference from "./src/Array/difference/difference.js";
import intersection from "./src/Array/intersection/intersection.js";

// Async
import debounce from "./src/Async/debounce/debounce.js";
import throttle from "./src/Async/throttle/throttle.js";

// Number
import clamp from "./src/Number/clamp/clamp.js";
import randomBetween from "./src/Number/randomBetween/randomBetween.js";
import roundTo from "./src/Number/roundTo/roundTo.js";
import formatBytes from "./src/Number/formatBytes/formatBytes.js";

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
export { unique };
export { uniqueBy };
export { difference };
export { intersection };

// Async
export { debounce };
export { throttle };

// Number
export { clamp };
export { randomBetween };
export { roundTo };
export { formatBytes };
