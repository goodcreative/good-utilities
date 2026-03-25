import { describe, it, expect } from 'vitest';
import unique from './unique.js';

describe('unique', () => {
  it('removes duplicate numbers', () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('removes duplicate strings', () => {
    expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
  });

  it('returns empty array for empty input', () => {
    expect(unique([])).toEqual([]);
  });

  it('returns same array when no duplicates', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
