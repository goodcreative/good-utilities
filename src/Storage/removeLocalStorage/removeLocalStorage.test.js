import { describe, it, expect, beforeEach } from 'vitest';
import removeLocalStorage from './removeLocalStorage.js';

describe('removeLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  it('removes a localStorage item', () => {
    localStorage.setItem('key', 'value');
    removeLocalStorage('key');
    expect(localStorage.getItem('key')).toBeNull();
  });

  it('does not throw for missing key', () => {
    expect(() => removeLocalStorage('nonExistent')).not.toThrow();
  });
});
