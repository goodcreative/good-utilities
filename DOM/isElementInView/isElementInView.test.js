import { describe, it, expect, afterEach, vi } from 'vitest';
import isElementInView from './isElementInView';

describe('isElementInView', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const makeEl = (top, height) => {
    const el = document.createElement('div');
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({ top });
    Object.defineProperty(el, 'offsetHeight', { configurable: true, get: () => height });
    return el;
  };

  beforeEach(() => {
    Object.defineProperty(window, 'innerHeight', { configurable: true, get: () => 600 });
    Object.defineProperty(window, 'scrollY', { configurable: true, get: () => 0 });
  });

  it('returns true when element is fully in view', () => {
    const el = makeEl(100, 200);
    expect(isElementInView(el)).toBe(true);
  });

  it('returns true when element partially overlaps viewport bottom', () => {
    const el = makeEl(500, 200); // bottom at 700, top at 500, viewport 0-600
    expect(isElementInView(el)).toBe(true);
  });

  it('returns false when element is entirely below viewport', () => {
    const el = makeEl(700, 100); // top 700, viewport ends at 600
    expect(isElementInView(el)).toBe(false);
  });

  it('returns false when element is entirely above viewport', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, get: () => 1000 });
    const el = makeEl(-200, 100); // top -200 in viewport coords, element above
    expect(isElementInView(el)).toBe(false);
  });
});
