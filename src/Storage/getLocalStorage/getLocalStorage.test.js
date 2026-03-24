import { describe, it, expect, beforeEach } from 'vitest';
import getLocalStorage from './getLocalStorage.js';

describe('getLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  it('returns null for missing key', () => {
    expect(getLocalStorage('missing')).toBeNull();
  });

  it('parses stored JSON value', () => {
    localStorage.setItem('key', JSON.stringify({ a: 1 }));
    expect(getLocalStorage('key')).toEqual({ a: 1 });
  });

  it('returns raw string if not valid JSON', () => {
    localStorage.setItem('raw', 'plain text');
    expect(getLocalStorage('raw')).toBe('plain text');
  });
});
