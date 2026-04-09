import { describe, it, expect } from 'vitest';
import { capitalize, titleCase } from './capitalize.js';

describe('capitalize', () => {
  it('capitalizes first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('returns empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

  it('handles already-capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });
});

describe('titleCase', () => {
  it('capitalizes each word', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  it('handles single word', () => {
    expect(titleCase('hello')).toBe('Hello');
  });

  it('returns empty string unchanged', () => {
    expect(titleCase('')).toBe('');
  });

  it('returns null unchanged', () => {
    expect(titleCase(null)).toBe(null);
  });
});
