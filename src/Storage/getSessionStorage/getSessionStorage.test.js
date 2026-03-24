import { describe, it, expect, beforeEach } from 'vitest';
import getSessionStorage from './getSessionStorage.js';

describe('getSessionStorage', () => {
  beforeEach(() => sessionStorage.clear());

  it('returns null for missing key', () => {
    expect(getSessionStorage('missing')).toBeNull();
  });

  it('parses stored JSON value', () => {
    sessionStorage.setItem('key', JSON.stringify([1, 2, 3]));
    expect(getSessionStorage('key')).toEqual([1, 2, 3]);
  });

  it('returns raw string if not valid JSON', () => {
    sessionStorage.setItem('raw', 'plain text');
    expect(getSessionStorage('raw')).toBe('plain text');
  });
});
