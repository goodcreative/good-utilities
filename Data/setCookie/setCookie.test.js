import { describe, it, expect, beforeEach, vi } from 'vitest';
import setCookie from './setCookie';

describe('setCookie', () => {
  let cookieJar;

  beforeEach(() => {
    cookieJar = '';
    Object.defineProperty(document, 'cookie', {
      configurable: true,
      get: () => cookieJar,
      set: (val) => { cookieJar = val; }
    });
  });

  it('sets a cookie with default config string', () => {
    setCookie('myCookie', 'myValue');
    expect(document.cookie).toContain('myCookie=myValue');
    expect(document.cookie).toContain('; path=/ ; SameSite=None; Secure');
  });

  it('sets a cookie with expiry when days is provided', () => {
    setCookie('expiring', 'soon', 7);
    expect(document.cookie).toContain('expiring=soon');
    expect(document.cookie).toContain('expires=');
  });

  it('sets a cookie with no expiry when days is omitted', () => {
    setCookie('noExpiry', 'forever');
    expect(document.cookie).not.toContain('expires=');
  });

  it('uses custom config string when provided', () => {
    setCookie('custom', 'val', undefined, '; path=/admin');
    expect(document.cookie).toContain('custom=val');
    expect(document.cookie).toContain('; path=/admin');
    expect(document.cookie).not.toContain('SameSite');
  });

  it('uses empty string when value is falsy', () => {
    setCookie('empty', '');
    expect(document.cookie).toContain('empty=');
  });
});
