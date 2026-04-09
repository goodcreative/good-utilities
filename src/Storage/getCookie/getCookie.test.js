import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import getCookie from './getCookie.js';

describe('getCookie', () => {
  afterEach(() => {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date(0).toUTCString() + ';path=/');
    });
  });

  it('returns cookie value by name', () => {
    document.cookie = 'testCookie=hello';
    expect(getCookie('testCookie')).toBe('hello');
  });

  it('returns null for missing cookie', () => {
    expect(getCookie('nonExistent')).toBeNull();
  });
});
