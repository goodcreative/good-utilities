import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import getOffset from './getOffset';

describe('getOffset', () => {
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
    Object.defineProperty(window, 'scrollX', { configurable: true, get: () => 0 });
    Object.defineProperty(window, 'scrollY', { configurable: true, get: () => 0 });
    expect(getOffset(el)).toEqual({ left: 0, top: 0 });
  });

  it('adds scroll position to bounding rect values', () => {
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({ left: 100, top: 200 });
    Object.defineProperty(window, 'scrollX', { configurable: true, get: () => 50 });
    Object.defineProperty(window, 'scrollY', { configurable: true, get: () => 75 });
    expect(getOffset(el)).toEqual({ left: 150, top: 275 });
  });

  it('returns an object with left and top properties', () => {
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({ left: 10, top: 20 });
    Object.defineProperty(window, 'scrollX', { configurable: true, get: () => 0 });
    Object.defineProperty(window, 'scrollY', { configurable: true, get: () => 0 });
    const result = getOffset(el);
    expect(result).toHaveProperty('left');
    expect(result).toHaveProperty('top');
  });
});
