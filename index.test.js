import { describe, it, expect } from 'vitest';
import {
  // DOM
  createNodeFromHTML,
  decodeCharacters,
  getClosestDescendentByDepth,
  getIndexOfNode,
  getIndexOfNodeInNodeList,
  getOffset,
  getOuterHeight,
  getOuterWidth,
  isElementInView,
  onIntersect,
  onResize,
  prefersReducedMotion,
  ready,
  removeInlineStyles,
  wrapElement,
  // Events
  messageBus,
  bindGlobalMessages,
  bindGlobalScrollMessage,
  bindGlobalResizeMessage,
  createDelegatedEventListener,
  createGlobalMessenger,
  messages,
  // Storage
  getCookie,
  setCookie,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
  // String
  truncate,
  slugify,
  capitalize,
  titleCase,
  stripHTML,
  // Array
  groupBy,
  deepClone,
  chunk,
  // Async
  debounce,
  throttle
} from './index.js';

describe('index.js exports', () => {
  describe('DOM', () => {
    it('exports createNodeFromHTML', () => { expect(typeof createNodeFromHTML).toBe('function'); });
    it('exports decodeCharacters', () => { expect(typeof decodeCharacters).toBe('function'); });
    it('exports getClosestDescendentByDepth', () => { expect(typeof getClosestDescendentByDepth).toBe('function'); });
    it('exports getIndexOfNode', () => { expect(typeof getIndexOfNode).toBe('function'); });
    it('exports getIndexOfNodeInNodeList', () => { expect(typeof getIndexOfNodeInNodeList).toBe('function'); });
    it('exports getOffset', () => { expect(typeof getOffset).toBe('function'); });
    it('exports getOuterHeight', () => { expect(typeof getOuterHeight).toBe('function'); });
    it('exports getOuterWidth', () => { expect(typeof getOuterWidth).toBe('function'); });
    it('exports isElementInView', () => { expect(typeof isElementInView).toBe('function'); });
    it('exports onIntersect', () => { expect(typeof onIntersect).toBe('function'); });
    it('exports onResize', () => { expect(typeof onResize).toBe('function'); });
    it('exports prefersReducedMotion', () => { expect(typeof prefersReducedMotion).toBe('function'); });
    it('exports ready', () => { expect(typeof ready).toBe('function'); });
    it('exports removeInlineStyles', () => { expect(typeof removeInlineStyles).toBe('function'); });
    it('exports wrapElement', () => { expect(typeof wrapElement).toBe('function'); });
  });

  describe('Events', () => {
    it('exports messageBus as an EventTarget', () => { expect(messageBus).toBeInstanceOf(EventTarget); });
    it('exports bindGlobalMessages', () => { expect(typeof bindGlobalMessages).toBe('function'); });
    it('exports bindGlobalScrollMessage', () => { expect(typeof bindGlobalScrollMessage).toBe('function'); });
    it('exports bindGlobalResizeMessage', () => { expect(typeof bindGlobalResizeMessage).toBe('function'); });
    it('exports createDelegatedEventListener', () => { expect(typeof createDelegatedEventListener).toBe('function'); });
    it('exports createGlobalMessenger', () => { expect(typeof createGlobalMessenger).toBe('function'); });
    it('exports messages as an object', () => { expect(typeof messages).toBe('object'); });
    it('messages has expected keys', () => {
      expect(messages).toHaveProperty('scroll');
      expect(messages).toHaveProperty('resize');
      expect(messages).toHaveProperty('load');
    });
  });

  describe('Storage', () => {
    it('exports getCookie', () => { expect(typeof getCookie).toBe('function'); });
    it('exports setCookie', () => { expect(typeof setCookie).toBe('function'); });
    it('exports getLocalStorage', () => { expect(typeof getLocalStorage).toBe('function'); });
    it('exports setLocalStorage', () => { expect(typeof setLocalStorage).toBe('function'); });
    it('exports removeLocalStorage', () => { expect(typeof removeLocalStorage).toBe('function'); });
    it('exports getSessionStorage', () => { expect(typeof getSessionStorage).toBe('function'); });
    it('exports setSessionStorage', () => { expect(typeof setSessionStorage).toBe('function'); });
    it('exports removeSessionStorage', () => { expect(typeof removeSessionStorage).toBe('function'); });
  });

  describe('String', () => {
    it('exports truncate', () => { expect(typeof truncate).toBe('function'); });
    it('exports slugify', () => { expect(typeof slugify).toBe('function'); });
    it('exports capitalize', () => { expect(typeof capitalize).toBe('function'); });
    it('exports titleCase', () => { expect(typeof titleCase).toBe('function'); });
    it('exports stripHTML', () => { expect(typeof stripHTML).toBe('function'); });
  });

  describe('Array', () => {
    it('exports groupBy', () => { expect(typeof groupBy).toBe('function'); });
    it('exports deepClone', () => { expect(typeof deepClone).toBe('function'); });
    it('exports chunk', () => { expect(typeof chunk).toBe('function'); });
  });

  describe('Async', () => {
    it('exports debounce', () => { expect(typeof debounce).toBe('function'); });
    it('exports throttle', () => { expect(typeof throttle).toBe('function'); });
  });
});
