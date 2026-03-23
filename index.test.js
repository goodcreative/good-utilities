import { describe, it, expect } from 'vitest';
import {
  // DOM
  collapseElement,
  createNodeFromHTML,
  decodeCharacters,
  expandElement,
  getClosestDescendentByDepth,
  getClosestParent,
  getIndexOfNode,
  getIndexOfNodeInNodeList,
  getOffset,
  getOuterHeight,
  getOuterWidth,
  getURLQueryString,
  isElementInView,
  ready,
  removeInlineStyles,
  wrapElement,
  getElementOffsetOnPage,
  // Events
  bindGlobalMessages,
  bindGlobalScrollMessage,
  bindGlobalResizeMessage,
  createCustomEvent,
  createDelegatedEventListener,
  createGlobalMessenger,
  messages,
  // Analytics
  trackPageEvent,
  // Data
  searchArrayByItemPropertyValue,
  getCookie,
  setCookie
} from './index';

describe('index.js exports', () => {
  describe('DOM functions', () => {
    it('exports collapseElement as a function', () => { expect(typeof collapseElement).toBe('function'); });
    it('exports createNodeFromHTML as a function', () => { expect(typeof createNodeFromHTML).toBe('function'); });
    it('exports decodeCharacters as a function', () => { expect(typeof decodeCharacters).toBe('function'); });
    it('exports expandElement as a function', () => { expect(typeof expandElement).toBe('function'); });
    it('exports getClosestDescendentByDepth as a function', () => { expect(typeof getClosestDescendentByDepth).toBe('function'); });
    it('exports getClosestParent as a function', () => { expect(typeof getClosestParent).toBe('function'); });
    it('exports getIndexOfNode as a function', () => { expect(typeof getIndexOfNode).toBe('function'); });
    it('exports getIndexOfNodeInNodeList as a function', () => { expect(typeof getIndexOfNodeInNodeList).toBe('function'); });
    it('exports getOffset as a function', () => { expect(typeof getOffset).toBe('function'); });
    it('exports getOuterHeight as a function', () => { expect(typeof getOuterHeight).toBe('function'); });
    it('exports getOuterWidth as a function', () => { expect(typeof getOuterWidth).toBe('function'); });
    it('exports getURLQueryString as a function', () => { expect(typeof getURLQueryString).toBe('function'); });
    it('exports isElementInView as a function', () => { expect(typeof isElementInView).toBe('function'); });
    it('exports ready as a function', () => { expect(typeof ready).toBe('function'); });
    it('exports removeInlineStyles as a function', () => { expect(typeof removeInlineStyles).toBe('function'); });
    it('exports wrapElement as a function', () => { expect(typeof wrapElement).toBe('function'); });
    it('exports getElementOffsetOnPage as a function', () => { expect(typeof getElementOffsetOnPage).toBe('function'); });
  });

  describe('Events exports', () => {
    it('exports bindGlobalMessages as a function', () => { expect(typeof bindGlobalMessages).toBe('function'); });
    it('exports bindGlobalScrollMessage as a function', () => { expect(typeof bindGlobalScrollMessage).toBe('function'); });
    it('exports bindGlobalResizeMessage as a function', () => { expect(typeof bindGlobalResizeMessage).toBe('function'); });
    it('exports createCustomEvent as a function', () => { expect(typeof createCustomEvent).toBe('function'); });
    it('exports createDelegatedEventListener as a function', () => { expect(typeof createDelegatedEventListener).toBe('function'); });
    it('exports createGlobalMessenger as a function', () => { expect(typeof createGlobalMessenger).toBe('function'); });
    it('exports messages as an object', () => { expect(typeof messages).toBe('object'); });
    it('messages object has expected keys', () => {
      expect(messages).toHaveProperty('scroll');
      expect(messages).toHaveProperty('resize');
      expect(messages).toHaveProperty('load');
    });
  });

  describe('Analytics exports', () => {
    it('exports trackPageEvent as a function', () => { expect(typeof trackPageEvent).toBe('function'); });
  });

  describe('Data exports', () => {
    it('exports searchArrayByItemPropertyValue as a function', () => { expect(typeof searchArrayByItemPropertyValue).toBe('function'); });
    it('exports getCookie as a function', () => { expect(typeof getCookie).toBe('function'); });
    it('exports setCookie as a function', () => { expect(typeof setCookie).toBe('function'); });
  });
});
