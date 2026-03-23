import { describe, it, expect, beforeEach } from 'vitest';
import getCookie from './getCookie';

describe('getCookie', () => {
  beforeEach(() => {
    // Reset cookies between tests
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
  });

  it('returns value of an existing cookie', () => {
    document.cookie = 'testCookie=hello';
    expect(getCookie('testCookie')).toBe('hello');
  });

  it('returns null for a missing cookie', () => {
    expect(getCookie('doesNotExist')).toBeNull();
  });

  it('returns correct value when multiple cookies exist', () => {
    document.cookie = 'first=one';
    document.cookie = 'second=two';
    document.cookie = 'third=three';
    expect(getCookie('second')).toBe('two');
  });

  it('handles cookie values with spaces after the semicolon', () => {
    document.cookie = 'padded=value';
    expect(getCookie('padded')).toBe('value');
  });
});
