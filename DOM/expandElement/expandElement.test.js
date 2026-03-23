import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import expandElement from './expandElement';

describe('expandElement', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
    el.style.height = '0px';
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
    vi.restoreAllMocks();
  });

  it('sets height to scrollHeight when scrollHeight > 0', () => {
    Object.defineProperty(el, 'scrollHeight', { configurable: true, get: () => 200 });
    expandElement(el);
    expect(el.style.height).toBe('200px');
  });

  it('does not set height when scrollHeight is 0', () => {
    Object.defineProperty(el, 'scrollHeight', { configurable: true, get: () => 0 });
    expandElement(el);
    expect(el.style.height).toBe('0px');
  });

  it('removes height style on transitionend', () => {
    Object.defineProperty(el, 'scrollHeight', { configurable: true, get: () => 100 });
    expandElement(el);
    el.dispatchEvent(new Event('transitionend'));
    expect(el.style.height).toBe('');
  });

  it('transitionend listener fires only once', () => {
    Object.defineProperty(el, 'scrollHeight', { configurable: true, get: () => 100 });
    expandElement(el);
    el.dispatchEvent(new Event('transitionend'));
    el.style.height = '100px'; // simulate re-set
    el.dispatchEvent(new Event('transitionend')); // should not clear again
    expect(el.style.height).toBe('100px');
  });
});
