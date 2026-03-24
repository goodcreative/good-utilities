# Good Utilities

A collection of battle-tested JavaScript utility functions for DOM manipulation, event handling, storage, strings, arrays, and async operations — accumulated across many projects and packaged for reuse.

**v2.0** — pure ESM, zero runtime dependencies, modern browser APIs throughout.

## Installation

```bash
npm install @wearegood/good-utilities
```

## Usage

All functions are named exports from the package root:

```js
import { getOffset, debounce, slugify, getCookie } from '@wearegood/good-utilities';
```

---

## API Reference

### DOM

---

#### `createNodeFromHTML(htmlString)`

Parses an HTML string and returns the resulting DOM nodes.

- `htmlString` *(string)* — an HTML string to parse

**Returns** `NodeList`

```js
const nodes = createNodeFromHTML('<li>Item</li><li>Item</li>');
document.querySelector('ul').append(...nodes);
```

---

#### `decodeCharacters(text)`

Decodes HTML entities in a string (e.g. `&amp;` → `&`).

- `text` *(string)*

**Returns** `string`

---

#### `getClosestDescendentByDepth(parentElem, parentSelector, descendentSelector)`

Among all descendants of `parentElem` matching `descendentSelector`, returns the one shallowest in DOM depth. If multiple tie, returns the first.

- `parentElem` *(Element)*
- `parentSelector` *(string)* — CSS selector identifying `parentElem`'s role (used to calculate relative depth)
- `descendentSelector` *(string)* — CSS selector for target descendants

**Returns** `Element|null`

---

#### `getIndexOfNode(node)`

Returns the zero-based index of a DOM node among its siblings.

- `node` *(Node)*

**Returns** `number`

---

#### `getIndexOfNodeInNodeList(node, nodeList)`

Returns the zero-based index of a node within a `NodeList`, or `-1` if not found.

- `node` *(Node)*
- `nodeList` *(NodeList)*

**Returns** `number`

---

#### `getOffset(el)`

Returns an element's position relative to the top-left of the full page.

- `el` *(Element)*

**Returns** `{ left: number, top: number }`

---

#### `getOuterHeight(el)`

Returns the height of an element including its top and bottom margins.

- `el` *(Element)*

**Returns** `number` — pixels

---

#### `getOuterWidth(el)`

Returns the width of an element including its left and right margins.

- `el` *(Element)*

**Returns** `number` — pixels

---

#### `isElementInView(element[, options])`

Returns a Promise that resolves to `true` when the element enters the viewport. Uses `IntersectionObserver`.

- `element` *(Element)*
- `options` *(object, optional)* — `IntersectionObserver` options (`root`, `rootMargin`, `threshold`)

**Returns** `Promise<boolean>`

```js
isElementInView(document.querySelector('.hero')).then(() => {
  // element is now visible
});
```

---

#### `onIntersect(el, callback[, options])`

Sets up an `IntersectionObserver` on an element and calls `callback` on each intersection change. Returns the observer so it can be disconnected.

- `el` *(Element)*
- `callback` *(Function)* — called with `(entry, observer)`
- `options` *(object, optional)* — `IntersectionObserver` options

**Returns** `IntersectionObserver`

```js
const observer = onIntersect(el, (entry) => {
  if (entry.isIntersecting) console.log('visible');
});
// later: observer.disconnect();
```

---

#### `onResize(el, callback)`

Sets up a `ResizeObserver` on an element. Returns the observer so it can be disconnected.

- `el` *(Element)*
- `callback` *(Function)* — called with `(entry, observer)`

**Returns** `ResizeObserver`

```js
const observer = onResize(el, (entry) => {
  console.log(entry.contentRect.width);
});
```

---

#### `prefersReducedMotion()`

Returns `true` if the user has requested reduced motion via `prefers-reduced-motion: reduce`.

**Returns** `boolean`

---

#### `ready(fn)`

Executes a callback when the DOM is fully loaded. Fires immediately if the DOM is already ready.

- `fn` *(Function)*

---

#### `removeInlineStyles(element)`

Clears all inline styles from an element by removing the `style` attribute.

- `element` *(Element)*

---

#### `wrapElement(el, wrapper)`

Wraps a DOM element inside a container element, preserving its position in the document.

- `el` *(Element)* — the element to wrap
- `wrapper` *(Element)* — the container to wrap it in

```js
const div = document.createElement('div');
div.className = 'wrapper';
wrapElement(document.querySelector('.target'), div);
```

---

### Events

The Events module uses a singleton `EventTarget` as a zero-dependency pub/sub message bus.

---

#### `messageBus`

A singleton `EventTarget` instance used as the global message bus. Publish and subscribe using the standard `EventTarget` API:

```js
import { messageBus, messages } from '@wearegood/good-utilities';

// Subscribe
messageBus.addEventListener(messages.scroll, (e) => {
  console.log('page scrolled', e.detail);
});

// Publish
messageBus.dispatchEvent(new CustomEvent(messages.scroll, { detail: data }));

// Unsubscribe
messageBus.removeEventListener(messages.scroll, handler);
```

---

#### `messages`

An object of predefined message string constants. Use these instead of raw strings to keep message names consistent.

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

Convenience function — binds both global scroll and resize message listeners in one call.

---

#### `bindGlobalScrollMessage()`

Attaches a `scroll` listener to `window` that dispatches `page/scroll` on `messageBus`.

---

#### `bindGlobalResizeMessage()`

Attaches a debounced (200ms) `resize` listener to `window` that dispatches `page/resize` on `messageBus`.

---

#### `createDelegatedEventListener(eventType, selector, eventToTrigger[, eventData])`

Sets up a delegated event listener on `document.body`. When a matching element fires the event, `preventDefault` and `stopPropagation` are called, and a `CustomEvent` is dispatched on the target element.

- `eventType` *(string)* — DOM event to listen for (e.g. `"click"`)
- `selector` *(string)* — CSS selector for target elements
- `eventToTrigger` *(string)* — name of the custom event to dispatch
- `eventData` *(any, optional)* — attached at `event.detail.data`

---

#### `createGlobalMessenger(eventType, selector, message[, preventBubble])`

Sets up a delegated event listener on `document.body` that publishes a message on `messageBus` when a matching element fires the event.

- `eventType` *(string)*
- `selector` *(string)*
- `message` *(string)* — message topic to dispatch on `messageBus`
- `preventBubble` *(boolean, optional)* — if `true`, calls `preventDefault` and `stopPropagation`

```js
import { createGlobalMessenger, messages } from '@wearegood/good-utilities';

createGlobalMessenger('click', '.open-modal', messages.displayModal, true);
```

---

### Storage

---

#### `getCookie(cookieName)`

Returns the value of a browser cookie by name.

- `cookieName` *(string)*

**Returns** `string|null`

---

#### `setCookie(cookieName, value[, days[, config]])`

Sets a browser cookie.

- `cookieName` *(string)*
- `value` *(string)*
- `days` *(number, optional)* — expiry in days; omit for session cookie
- `config` *(string, optional)* — cookie attribute string; defaults to `"; path=/ ; SameSite=None; Secure"`

---

#### `getLocalStorage(key)`

Gets a `localStorage` item, automatically parsing JSON. Returns `null` if the key doesn't exist.

- `key` *(string)*

**Returns** `*`

---

#### `setLocalStorage(key, value)`

Sets a `localStorage` item, automatically JSON-stringifying the value.

- `key` *(string)*
- `value` *(any)*

---

#### `removeLocalStorage(key)`

Removes a `localStorage` item.

- `key` *(string)*

---

#### `getSessionStorage(key)`

Gets a `sessionStorage` item, automatically parsing JSON.

- `key` *(string)*

**Returns** `*`

---

#### `setSessionStorage(key, value)`

Sets a `sessionStorage` item, automatically JSON-stringifying the value.

- `key` *(string)*
- `value` *(any)*

---

#### `removeSessionStorage(key)`

Removes a `sessionStorage` item.

- `key` *(string)*

---

### String

---

#### `truncate(str, maxLen[, suffix])`

Truncates a string to a maximum length, appending a suffix if cut.

- `str` *(string)*
- `maxLen` *(number)*
- `suffix` *(string, optional)* — defaults to `'…'`

**Returns** `string`

```js
truncate('Hello, world!', 7); // 'Hello, …'
```

---

#### `slugify(str)`

Converts a string to a URL-safe slug.

- `str` *(string)*

**Returns** `string`

```js
slugify('Hello Wörld!'); // 'hello-world'
```

---

#### `capitalize(str)`

Capitalizes the first letter of a string.

- `str` *(string)*

**Returns** `string`

---

#### `titleCase(str)`

Capitalizes the first letter of each word.

- `str` *(string)*

**Returns** `string`

```js
titleCase('hello world'); // 'Hello World'
```

---

#### `stripHTML(str)`

Removes all HTML tags from a string.

- `str` *(string)*

**Returns** `string`

```js
stripHTML('<p>Hello <strong>world</strong></p>'); // 'Hello world'
```

---

### Array

---

#### `groupBy(arr, key)`

Groups an array of objects by a property value.

- `arr` *(Array)*
- `key` *(string)* — property name to group by

**Returns** `object` — keys are group values, values are arrays of items

```js
groupBy([{ type: 'fruit', name: 'apple' }, { type: 'veg', name: 'carrot' }], 'type');
// { fruit: [{ type: 'fruit', name: 'apple' }], veg: [...] }
```

---

#### `deepClone(value)`

Deep copies an object or array using the native `structuredClone` API.

- `value` *(any)*

**Returns** `*` — deep clone

---

#### `chunk(arr, size)`

Splits an array into chunks of a given size.

- `arr` *(Array)*
- `size` *(number)*

**Returns** `Array<Array>`

```js
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

---

### Async

---

#### `debounce(fn, wait)`

Returns a debounced version of `fn` that delays invoking until `wait` milliseconds have elapsed since the last call.

- `fn` *(Function)*
- `wait` *(number)* — milliseconds

**Returns** `Function`

```js
window.addEventListener('input', debounce(handleInput, 300));
```

---

#### `throttle(fn, wait)`

Returns a throttled version of `fn` that invokes at most once per `wait` milliseconds.

- `fn` *(Function)*
- `wait` *(number)* — milliseconds

**Returns** `Function`

```js
window.addEventListener('scroll', throttle(handleScroll, 100));
```

---

## Development

```bash
npm test                # run all tests once (Vitest)
npm run test:watch      # run tests in watch mode
npm run test:coverage   # run tests with coverage report
```
