# Roadmap

Future additions and ideas for `@wearegood/good-utilities`. Items are grouped by module and ordered roughly by priority within each group. Nothing here is committed — this is a living reference to avoid duplication and guide what gets added next.

---

## Existing modules — gap-fills

### DOM

| Function | Description |
|---|---|
| `copyToClipboard(text)` | Clipboard API wrapper; returns a Promise |
| `scrollToElement(el, options)` | Smooth scroll to element with optional offset support |
| `getViewportSize()` | Returns `{ width, height }` from `window.visualViewport` |
| `isTouchDevice()` | `true` if primary pointer is coarse (`pointer: coarse` media query) |
| `getFocusableElements(container)` | Returns all keyboard-focusable elements within a container (a11y) |
| `trapFocus(container)` / `releaseFocus()` | Confine tab focus inside a modal/dialog and restore it on close (a11y) |

### String

| Function | Description |
|---|---|
| `camelCase(str)` | `'hello world'` → `'helloWorld'` |
| `kebabCase(str)` | `'Hello World'` → `'hello-world'` (complements `slugify`) |
| `snakeCase(str)` | `'Hello World'` → `'hello_world'` |
| `countWords(str)` | Returns the number of words in a string |

### Array ✓ implemented

| Function | Description |
|---|---|
| `unique(arr)` | Remove duplicate primitive values |
| `uniqueBy(arr, key)` | Remove duplicates from array of objects by property |
| `sortBy(arr, key[, direction])` | Sort array of objects by a property (`'asc'` / `'desc'`) |
| `shuffle(arr)` | Fisher-Yates randomise — returns a new array |
| `sample(arr, n)` | Return `n` random items without replacement |
| `difference(arr1, arr2)` | Items in `arr1` not present in `arr2` |
| `intersection(arr1, arr2)` | Items present in both arrays |

### Async

| Function | Description |
|---|---|
| `once(fn)` | Returns a wrapper that only executes `fn` on the first call |
| `memoize(fn)` | Cache return values by serialised arguments |
| `sleep(ms)` | Promise-based delay: `await sleep(500)` |
| `timeout(promise, ms)` | Race a Promise against a deadline; rejects if deadline is reached |
| `retry(fn, options)` | Retry a failing async function with configurable attempts and back-off delay |

---

## New modules

### Object

Pure object utilities with no DOM dependency.

| Function | Description |
|---|---|
| `pick(obj, keys)` | Return a new object containing only the listed keys |
| `omit(obj, keys)` | Return a new object excluding the listed keys |
| `deepMerge(target, ...sources)` | Recursive merge — unlike `Object.assign`, nested objects are merged not replaced |
| `isEqual(a, b)` | Structural deep equality check |
| `isEmpty(value)` | `true` for `null`, `undefined`, `''`, `[]`, `{}` |

### Number ✓ implemented

| Function | Description |
|---|---|
| `clamp(value, min, max)` | Constrain a value within a range |
| `randomBetween(min, max)` | Random float between two values |
| `roundTo(value, decimals)` | `roundTo(3.14159, 2)` → `3.14` |
| `formatBytes(bytes)` | `1048576` → `'1 MB'` — human-readable file sizes |

### URL

Complements the removal of `getURLQueryString` from v1 with a more ergonomic set.

| Function | Description |
|---|---|
| `getQueryParam(name)` | Get a single param from the current URL via `URLSearchParams` |
| `setQueryParam(name, value)` | Update a URL param without a page reload (`history.pushState`) |
| `buildURL(base, params)` | Construct a URL from a base string and an object of query params |
| `getPathSegments()` | Split `window.location.pathname` into a clean array of segments |

---

## Notes

- All additions should follow the existing pattern: one function per file under `src/<Module>/<fnName>/`, with a co-located `.test.js`.
- No new runtime dependencies — use native browser/Node APIs wherever possible.
- Check browser baseline support before adding — target the same baseline as the rest of the library (modern evergreen browsers).
