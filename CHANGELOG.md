# Changelog

All notable changes to `@wearegood/good-utilities` are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] — v2.0.0

### Added
- `String` module: `truncate`, `slugify`, `capitalize`, `titleCase`, `stripHTML`
- `Array` module: `groupBy`, `deepClone` (via `structuredClone`), `chunk`
- `Async` module: `debounce`, `throttle`
- `Storage` module: `getCookie`, `setCookie`, `getLocalStorage`, `setLocalStorage`, `removeLocalStorage`, `getSessionStorage`, `setSessionStorage`, `removeSessionStorage`
- `DOM`: `onIntersect` (IntersectionObserver wrapper), `onResize` (ResizeObserver wrapper), `prefersReducedMotion`
- `Events/messageBus` — singleton `EventTarget` as pub/sub message bus (replaces `pubsub-js`)
- Pure ESM (`"type": "module"` in package.json)
- Zero runtime dependencies

### Removed
- `Analytics` module (`trackPageEvent`) — Google Universal Analytics was sunset July 2023
- `DOM/collapseElement`, `DOM/expandElement` — CSS-based patterns preferred
- `DOM/getClosestParent` — superseded by native `Element.closest()`
- `DOM/getElementOffsetOnPage` — duplicate of `getOffset` (used deprecated `pageXOffset`)
- `DOM/getURLQueryString` — superseded by native `URLSearchParams`
- `DOM/createCustomEvent` — superseded by `new CustomEvent()` constructor
- `Data` module / `searchArrayByItemPropertyValue` — superseded by native `Array.find()`

### Changed
- `isElementInView` rewritten using `IntersectionObserver` (was manual scroll math)
- `Events` bindings rewritten with native event delegation (removed `delegate` dep)
- Resize debounce inlined (removed `debounce` dep)
- `Data` module cookies moved to new `Storage` module

---

## [1.7.3] — 2024

### Changed
- Bumped package version; comprehensive README documentation added
- Migrated test suite to Vitest with 90% coverage threshold
- Added `index.js` smoke test for all exports

---

## [1.7.2] — 2024

### Changed
- Added default `config` parameter to `setCookie`

---

## [1.7.1] — 2024

### Fixed
- Export bug for cookie functions

---

## [1.7.0] — 2024

### Added
- `getCookie` and `setCookie` functions

---

## [1.6.0] — 2023

### Changed
- Migrated to Vitest, restructured all functions into subfolders
- Added DOM layout-dependent and static manipulation tests
- Added Data and Analytics tests

---

## [1.5.3] — 2023

### Fixed
- Removed buggy code from `expandElement`

---

## [1.5.2] — 2023

### Fixed
- Bugs in `getClosestDescendentByDepth`

---

## [1.5.1] — 2023

### Changed
- Updated `getClosestDescendentByDepth` with tests

---

## [1.5.0] — 2023

### Added
- `getClosestDescendentByDepth` function

---

## [1.2.0] — earlier

### Added
- `createCustomEvent` improved data handling
- `getIndexOfNodeInNodeList` function
- `getElementOffsetOnPage` function
- Array search function (`searchArrayByItemPropertyValue`)
- `trackPageEvent` analytics function

### Changed
- Split global messages into individual bind functions
- Various bug fixes and IE11 compatibility improvements

---

## [1.0.0] — initial

### Added
- Initial DOM utility functions
- Event-related functions (`createDelegatedEventListener`, `createGlobalMessenger`, `bindGlobalMessages`, `messages`)
- `getOffset`, `getIndexOfNode`, `getOuterHeight`, `getOuterWidth`, `ready`, `removeInlineStyles`, `wrapElement`, `createNodeFromHTML`, `decodeCharacters`, `isElementInView`
