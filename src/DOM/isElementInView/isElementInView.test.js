import { describe, it, expect, vi, beforeEach } from 'vitest';
import isElementInView from './isElementInView.js';

describe('isElementInView', () => {
  let MockIntersectionObserver;

  beforeEach(() => {
    MockIntersectionObserver = vi.fn((callback) => {
      const instance = {
        observe: vi.fn(),
        disconnect: vi.fn(),
        _trigger: (entries) => callback(entries)
      };
      return instance;
    });
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('resolves true when element intersects', async () => {
    const el = document.createElement('div');
    const promise = isElementInView(el);
    const observer = MockIntersectionObserver.mock.results[0].value;
    observer._trigger([{ isIntersecting: true, target: el }]);
    await expect(promise).resolves.toBe(true);
  });

  it('does not resolve when element is not intersecting', async () => {
    const el = document.createElement('div');
    const promise = isElementInView(el);
    const observer = MockIntersectionObserver.mock.results[0].value;
    observer._trigger([{ isIntersecting: false, target: el }]);
    // Promise should remain pending — race against a quick timeout
    const result = await Promise.race([
      promise,
      new Promise((r) => setTimeout(() => r('pending'), 10))
    ]);
    expect(result).toBe('pending');
  });
});
