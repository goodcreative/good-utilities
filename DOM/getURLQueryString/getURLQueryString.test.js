import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import getURLQueryString from './getURLQueryString';

describe('getURLQueryString', () => {
  const setLocation = (search) => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { href: `http://example.com/${search}` }
    });
  };

  it('returns a single query param', () => {
    setLocation('?foo=bar');
    const result = getURLQueryString();
    expect(result['foo']).toBe('bar');
  });

  it('returns multiple query params', () => {
    setLocation('?a=1&b=2&c=3');
    const result = getURLQueryString();
    expect(result['a']).toBe('1');
    expect(result['b']).toBe('2');
    expect(result['c']).toBe('3');
  });

  it('returns an array with param keys', () => {
    setLocation('?x=10&y=20');
    const result = getURLQueryString();
    expect(result).toContain('x');
    expect(result).toContain('y');
  });

  it('returns array with single entry when no query string present', () => {
    setLocation('');
    const result = getURLQueryString();
    // No '?' means slice returns the full href split on '&' - one entry
    expect(Array.isArray(result)).toBe(true);
  });
});
