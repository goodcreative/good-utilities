import { describe, it, expect, beforeEach } from 'vitest';
import removeSessionStorage from './removeSessionStorage.js';

describe('removeSessionStorage', () => {
  beforeEach(() => sessionStorage.clear());

  it('removes a sessionStorage item', () => {
    sessionStorage.setItem('key', 'value');
    removeSessionStorage('key');
    expect(sessionStorage.getItem('key')).toBeNull();
  });

  it('does not throw for missing key', () => {
    expect(() => removeSessionStorage('nonExistent')).not.toThrow();
  });
});
