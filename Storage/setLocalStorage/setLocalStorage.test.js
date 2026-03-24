import { describe, it, expect, beforeEach } from 'vitest';
import setLocalStorage from './setLocalStorage.js';

describe('setLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  it('stores value as JSON string', () => {
    setLocalStorage('key', { a: 1 });
    expect(localStorage.getItem('key')).toBe('{"a":1}');
  });

  it('stores primitive values', () => {
    setLocalStorage('num', 42);
    expect(localStorage.getItem('num')).toBe('42');
  });
});
