import { describe, it, expect, vi } from 'vitest';
import ready from './ready';

describe('ready', () => {
  it('calls callback immediately when DOM is already complete', () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'complete'
    });
    const fn = vi.fn();
    ready(fn);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('adds DOMContentLoaded listener when DOM is still loading', () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'loading'
    });
    const addSpy = vi.spyOn(document, 'addEventListener');
    const fn = vi.fn();
    ready(fn);
    expect(addSpy).toHaveBeenCalledWith('DOMContentLoaded', fn);
    expect(fn).not.toHaveBeenCalled();
    addSpy.mockRestore();
  });
});
