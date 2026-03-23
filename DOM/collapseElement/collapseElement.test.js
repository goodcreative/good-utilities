import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import collapseElement from './collapseElement';

describe('collapseElement', () => {
  let el;
  let rafCallbacks;

  beforeEach(() => {
    el = document.createElement('div');
    el.style.height = 'auto';
    Object.defineProperty(el, 'scrollHeight', { configurable: true, get: () => 150 });
    document.body.appendChild(el);

    rafCallbacks = [];
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
      rafCallbacks.push(cb);
      return rafCallbacks.length;
    });
  });

  afterEach(() => {
    el.remove();
    vi.restoreAllMocks();
  });

  const flushRaf = () => {
    const cbs = [...rafCallbacks];
    rafCallbacks = [];
    cbs.forEach(cb => cb());
  };

  it('sets height to scrollHeight on first rAF frame', () => {
    collapseElement(el);
    flushRaf(); // first rAF: sets height + restores transition
    expect(el.style.height).toBe('150px');
  });

  it('sets height to 0 on second rAF frame', () => {
    collapseElement(el);
    flushRaf(); // first frame
    flushRaf(); // second frame
    expect(el.style.height).toBe('0px');
  });

  it('clears transition before first rAF', () => {
    el.style.transition = 'height 0.3s ease';
    collapseElement(el);
    expect(el.style.transition).toBe('');
  });
});
