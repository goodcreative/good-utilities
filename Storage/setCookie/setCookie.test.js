import { describe, it, expect, afterEach } from 'vitest';
import setCookie from './setCookie.js';

describe('setCookie', () => {
  afterEach(() => {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date(0).toUTCString() + ';path=/');
    });
  });

  it('sets a cookie that can be read back', () => {
    setCookie('myCookie', 'world', null, '');
    expect(document.cookie).toContain('myCookie=world');
  });

  it('uses custom config string', () => {
    setCookie('another', 'value', null, '; path=/');
    expect(document.cookie).toContain('another=value');
  });
});
