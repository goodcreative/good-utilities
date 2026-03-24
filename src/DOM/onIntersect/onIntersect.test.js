import { describe, it, expect, vi, beforeEach } from 'vitest';
import onIntersect from './onIntersect.js';

describe('onIntersect', () => {
  let MockIntersectionObserver;
  let observeSpy;

  beforeEach(() => {
    observeSpy = vi.fn();
    MockIntersectionObserver = vi.fn((callback) => ({
      observe: observeSpy,
      disconnect: vi.fn(),
      _trigger: (entries) => callback(entries)
    }));
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('returns an IntersectionObserver instance', () => {
    const el = document.createElement('div');
    const observer = onIntersect(el, vi.fn());
    expect(observer).toBeDefined();
    expect(observeSpy).toHaveBeenCalledWith(el);
  });

  it('calls callback with entry and observer on intersection change', () => {
    const el = document.createElement('div');
    const callback = vi.fn();
    const observer = onIntersect(el, callback);
    const fakeEntry = { isIntersecting: true, target: el };
    observer._trigger([fakeEntry]);
    expect(callback).toHaveBeenCalledWith(fakeEntry, observer);
  });

  it('passes options to IntersectionObserver', () => {
    const el = document.createElement('div');
    const options = { threshold: 0.5 };
    onIntersect(el, vi.fn(), options);
    expect(MockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), options);
  });
});
