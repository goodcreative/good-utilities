import { describe, it, expect, afterEach, vi } from 'vitest';
import getOuterHeight from './getOuterHeight';

describe('getOuterHeight', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns height including top and bottom margins', () => {
    const el = document.createElement('div');
    Object.defineProperty(el, 'offsetHeight', { configurable: true, get: () => 100 });
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      marginTop: '10px',
      marginBottom: '20px'
    });
    expect(getOuterHeight(el)).toBe(130);
  });

  it('returns height unchanged when margins are zero', () => {
    const el = document.createElement('div');
    Object.defineProperty(el, 'offsetHeight', { configurable: true, get: () => 50 });
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      marginTop: '0px',
      marginBottom: '0px'
    });
    expect(getOuterHeight(el)).toBe(50);
  });
});
