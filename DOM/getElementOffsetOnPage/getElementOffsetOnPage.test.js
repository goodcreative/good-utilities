import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import getElementOffsetOnPage from './getElementOffsetOnPage';

describe('getElementOffsetOnPage', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
    vi.restoreAllMocks();
  });

  it('returns zero offset when element is at origin with no scroll', () => {
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({ left: 0, top: 0 });
    Object.defineProperty(window, 'pageXOffset', { configurable: true, get: () => 0 });
    Object.defineProperty(window, 'pageYOffset', { configurable: true, get: () => 0 });
    expect(getElementOffsetOnPage(el)).toEqual({ left: 0, top: 0 });
  });

  it('adds scroll position to bounding rect values', () => {
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({ left: 50, top: 80 });
    Object.defineProperty(window, 'pageXOffset', { configurable: true, get: () => 100 });
    Object.defineProperty(window, 'pageYOffset', { configurable: true, get: () => 200 });
    expect(getElementOffsetOnPage(el)).toEqual({ left: 150, top: 280 });
  });

  it('returns an object with left and top properties', () => {
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({ left: 0, top: 0 });
    Object.defineProperty(window, 'pageXOffset', { configurable: true, get: () => 0 });
    Object.defineProperty(window, 'pageYOffset', { configurable: true, get: () => 0 });
    const result = getElementOffsetOnPage(el);
    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
  });
});
