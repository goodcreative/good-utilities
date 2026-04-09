import { describe, it, expect, afterEach, vi } from 'vitest';
import getOuterWidth from './getOuterWidth';

describe('getOuterWidth', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns width including left and right margins', () => {
    const el = document.createElement('div');
    Object.defineProperty(el, 'offsetWidth', { configurable: true, get: () => 200 });
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      marginLeft: '15px',
      marginRight: '25px'
    });
    expect(getOuterWidth(el)).toBe(240);
  });

  it('returns width unchanged when margins are zero', () => {
    const el = document.createElement('div');
    Object.defineProperty(el, 'offsetWidth', { configurable: true, get: () => 80 });
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      marginLeft: '0px',
      marginRight: '0px'
    });
    expect(getOuterWidth(el)).toBe(80);
  });
});
