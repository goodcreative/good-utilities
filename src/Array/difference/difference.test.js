import { describe, it, expect } from 'vitest';
import difference from './difference.js';

describe('difference', () => {
  it('returns items in arr1 not in arr2', () => {
    expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  it('returns full arr1 when no overlap', () => {
    expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
  });

  it('returns empty when all items overlap', () => {
    expect(difference([1, 2], [1, 2, 3])).toEqual([]);
  });

  it('returns empty for empty arr1', () => {
    expect(difference([], [1, 2])).toEqual([]);
  });
});
