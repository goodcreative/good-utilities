# Good Utilities

A collection of battle-tested JavaScript utility functions for DOM manipulation, event handling, analytics tracking, and data operations — accumulated across many projects and packaged for reuse.

## Installation

```bash
npm install @wearegood/good-utilities
```

## Usage

All functions are available as named exports from the package root:

```js
import { collapseElement, getCookie, createCustomEvent } from '@wearegood/good-utilities';
```

## API Reference

### DOM

---

#### `collapseElement(element)`

Animates an element's height to 0 using `requestAnimationFrame` to ensure smooth CSS transitions. Does not remove the element from the DOM.

- `element` *(Element)* — the DOM element to collapse

---

#### `expandElement(element)`

Expands a collapsed element to its natural height by reading `scrollHeight`, then removes the inline height once the CSS transition completes.

- `element` *(Element)* — the DOM element to expand

---

#### `createNodeFromHTML(htmlString)`

Parses an HTML string and returns the resulting DOM nodes.

- `htmlString` *(string)* — an HTML string to parse

**Returns** `NodeList` — the parsed child nodes

```js
const nodes = createNodeFromHTML('<li>Item</li><li>Item</li>');
document.querySelector('ul').append(...nodes);
```

---

#### `decodeCharacters(text)`

Decodes HTML entities in a string (e.g. `&amp;` → `&`).

- `text` *(string)* — a string that may contain HTML entities

**Returns** `string` — the decoded string

---

#### `getClosestParent(el, selector[, includeSelf])`

Traverses up the DOM to find the nearest ancestor matching a CSS selector.

- `el` *(Element)* — the starting element
- `selector` *(string)* — a CSS selector to match against
- `includeSelf` *(boolean, optional)* — if `true`, returns `el` itself if it matches

**Returns** `Element|null`

---

#### `getClosestDescendentByDepth(parentElem, parentSelector, descendentSelector)`

Among all descendants of `parentElem` that match `descendentSelector`, returns the one closest in DOM depth to `parentElem` (i.e. the shallowest match). If multiple descendants tie for the same depth, returns the first.

- `parentElem` *(Element)* — the root element to search within
- `parentSelector` *(string)* — CSS selector identifying `parentElem`'s role (used to calculate relative depth)
- `descendentSelector` *(string)* — CSS selector for the target descendants

**Returns** `Element|null`

---

#### `getElementOffsetOnPage(el)`

Returns an element's position relative to the top-left of the full page, accounting for scroll.

- `el` *(Element)* — a DOM element

**Returns** `{ top: number, left: number }`

---

#### `getOffset(el)`

Returns an element's offset from the top-left of the page using `getBoundingClientRect` plus `scrollX`/`scrollY`.

- `el` *(Element)* — a DOM element

**Returns** `{ left: number, top: number }`

---

#### `getIndexOfNode(node)`

Returns the zero-based index of a DOM node among its siblings.

- `node` *(Node)* — a DOM node

**Returns** `number`

---

#### `getIndexOfNodeInNodeList(node, nodeList)`

Returns the zero-based index of a node within a `NodeList`, or `-1` if not found.

- `node` *(Node)* — the node to locate
- `nodeList` *(NodeList)* — the list to search

**Returns** `number`

---

#### `getOuterHeight(el)`

Returns the height of an element including its top and bottom margins.

- `el` *(Element)* — a DOM element

**Returns** `number` — height in pixels

---

#### `getOuterWidth(el)`

Returns the width of an element including its left and right margins.

- `el` *(Element)* — a DOM element

**Returns** `number` — width in pixels

---

#### `getURLQueryString()`

Parses the current page URL's query string and returns the parameters as an array with both numeric and named (associative) access.

**Returns** `Array` — query params accessible by index or by key (e.g. `result['foo']`)

---

#### `isElementInView(element)`

Checks whether an element is currently visible within the viewport.

- `element` *(Element)* — a DOM element

**Returns** `boolean`

---

#### `ready(fn)`

Executes a callback when the DOM is fully loaded. Fires immediately if the DOM is already ready.

- `fn` *(Function)* — the callback to invoke

---

#### `removeInlineStyles(element)`

Clears all inline styles from an element by removing the `style` attribute.

- `element` *(Element)* — a DOM element

---

#### `wrapElement(el, wrapper)`

Wraps a DOM element inside a container element, preserving its position in the document.

- `el` *(Element)* — the element to wrap
- `wrapper` *(Element)* — the container element to wrap it in

```js
const div = document.createElement('div');
div.className = 'wrapper';
wrapElement(document.querySelector('.target'), div);
```

---

### Events

This module uses [PubSub.js](https://github.com/mroderick/PubSubJS) for global messaging and [delegate](https://github.com/zenorocha/delegate) for event delegation.

---

#### `messages`

An object of predefined PubSub message string constants. Import and use these instead of raw strings to avoid typos and keep message names consistent across a project.

| Key | Value |
|---|---|
| `scroll` | `"page/scroll"` |
| `resize` | `"page/resize"` |
| `load` | `"page/loaded"` |
| `contentChange` | `"page-content/change"` |
| `contentDisplayed` | `"page-content/displayed"` |
| `layoutChange` | `"layout/change"` |
| `breakChange` | `"breakpoint/change"` |
| `imageLoaded` | `"image/loaded"` |
| `modalOpened` | `"modal/opened"` |
| `displayModal` | `"modal/display"` |
| `stopMedia` | `"media/stop"` |

---

#### `bindGlobalMessages()`

Convenience function that binds both the global scroll and resize PubSub message listeners in one call.

---

#### `bindGlobalScrollMessage()`

Attaches a `scroll` listener to `window` that publishes a `page/scroll` PubSub message on each scroll event.

---

#### `bindGlobalResizeMessage()`

Attaches a debounced (200ms) `resize` listener to `window` that publishes a `page/resize` PubSub message.

---

#### `createCustomEvent(eventName, eventData)`

Creates and returns a `CustomEvent` with the provided name and data payload.

- `eventName` *(string)* — the event type name
- `eventData` *(any)* — data attached at `event.detail.data`; the event also has `bubbles: true`

**Returns** `CustomEvent`

---

#### `createDelegatedEventListener(eventType, selector, eventToTrigger[, eventData])`

Sets up a delegated event listener on `document.body`. When a matching element fires the event, `preventDefault` and `stopPropagation` are called, and a custom event is dispatched on the target element.

- `eventType` *(string)* — the DOM event type to listen for (e.g. `"click"`)
- `selector` *(string)* — CSS selector for the target elements
- `eventToTrigger` *(string)* — name of the custom event to dispatch on the target
- `eventData` *(any, optional)* — data to include in the custom event's `detail.data`

---

#### `createGlobalMessenger(eventType, selector, message[, preventBubble])`

Sets up a delegated event listener on `document.body` that publishes a PubSub message when a matching element fires the event.

- `eventType` *(string)* — the DOM event type to listen for
- `selector` *(string)* — CSS selector for the target elements
- `message` *(string)* — the PubSub message to publish
- `preventBubble` *(boolean, optional)* — if `true`, calls `preventDefault` and `stopPropagation`

```js
import { createGlobalMessenger, messages } from '@wearegood/good-utilities';

createGlobalMessenger('click', '.open-modal', messages.displayModal, true);
```

---

### Analytics

---

#### `trackPageEvent(category, action[, label[, value]])`

Fires a Google Analytics event. Automatically detects which analytics implementation is present and uses the appropriate API:

- **Google Tag Manager** — pushes a `GAEvent` to `window.dataLayer`
- **Universal Analytics** — calls `window.ga('send', 'event', ...)`
- **Asynchronous Analytics** — pushes to `window._gaq`

Does nothing if none of the above are present.

- `category` *(string)* — event category
- `action` *(string)* — event action
- `label` *(string, optional)* — event label
- `value` *(number, optional)* — event value

---

### Data

---

#### `getCookie(cookieName)`

Returns the value of a browser cookie by name.

- `cookieName` *(string)* — the name of the cookie to retrieve

**Returns** `string|null` — the cookie value, or `null` if not found

---

#### `setCookie(cookieName, value[, days[, config]])`

Sets a browser cookie.

- `cookieName` *(string)* — the cookie name
- `value` *(string)* — the cookie value
- `days` *(number, optional)* — number of days until expiry; omit for a session cookie
- `config` *(string, optional)* — cookie attribute string; defaults to `"; path=/ ; SameSite=None; Secure"`

---

#### `searchArrayByItemPropertyValue(nameKey, property, arrayToSearch)`

Searches an array of objects for the first item where `item[property] === nameKey`.

- `nameKey` *(any)* — the value to match
- `property` *(string)* — the property name to check on each object
- `arrayToSearch` *(Array)* — the array of objects to search

**Returns** `object|false` — the first matching object, or `false` if none found

```js
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
searchArrayByItemPropertyValue(2, 'id', users); // { id: 2, name: 'Bob' }
```

---

## Development

```bash
npm test                # run all tests once (Vitest)
npm run test:watch      # run tests in watch mode
npm run test:coverage   # run tests with coverage report
```
