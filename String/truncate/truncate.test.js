import { describe, it, expect } from 'vitest';
import truncate from './truncate.js';

describe('truncate', () => {
  it('returns string unchanged when within maxLen', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('truncates and appends default suffix when over maxLen', () => {
    expect(truncate('hello world', 5)).toBe('hello…');
  });

  it('uses custom suffix', () => {
    expect(truncate('hello world', 5, '...')).toBe('hello...');
  });

  it('handles exact length (no truncation)', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });
});
