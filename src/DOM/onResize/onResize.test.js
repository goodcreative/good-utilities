import { describe, it, expect, vi, beforeEach } from 'vitest';
import onResize from './onResize.js';

describe('onResize', () => {
  let MockResizeObserver;
  let observeSpy;

  beforeEach(() => {
    observeSpy = vi.fn();
    MockResizeObserver = vi.fn((callback) => ({
      observe: observeSpy,
      disconnect: vi.fn(),
      _trigger: (entries) => callback(entries)
    }));
    vi.stubGlobal('ResizeObserver', MockResizeObserver);
  });

  it('returns a ResizeObserver instance', () => {
    const el = document.createElement('div');
    const observer = onResize(el, vi.fn());
    expect(observer).toBeDefined();
    expect(observeSpy).toHaveBeenCalledWith(el);
  });

  it('calls callback with entry and observer on resize', () => {
    const el = document.createElement('div');
    const callback = vi.fn();
    const observer = onResize(el, callback);
    const fakeEntry = { target: el, contentRect: { width: 100, height: 200 } };
    observer._trigger([fakeEntry]);
    expect(callback).toHaveBeenCalledWith(fakeEntry, observer);
  });
});
