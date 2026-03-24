import { describe, it, expect } from 'vitest';
import slugify from './slugify.js';

describe('slugify', () => {
  it('converts to lowercase with hyphens', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('collapses multiple spaces/hyphens', () => {
    expect(slugify('  hello   world  ')).toBe('hello-world');
  });

  it('handles accented characters', () => {
    expect(slugify('Héllo Wörld')).toBe('hello-world');
  });
});
