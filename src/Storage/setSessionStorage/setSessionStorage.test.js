import { describe, it, expect, beforeEach } from 'vitest';
import setSessionStorage from './setSessionStorage.js';

describe('setSessionStorage', () => {
  beforeEach(() => sessionStorage.clear());

  it('stores value as JSON string', () => {
    setSessionStorage('key', { b: 2 });
    expect(sessionStorage.getItem('key')).toBe('{"b":2}');
  });

  it('stores array values', () => {
    setSessionStorage('arr', [1, 2]);
    expect(sessionStorage.getItem('arr')).toBe('[1,2]');
  });
});
