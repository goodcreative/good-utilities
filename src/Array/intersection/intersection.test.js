import { describe, it, expect } from 'vitest';
import intersection from './intersection.js';

describe('intersection', () => {
  it('returns items present in both arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('returns empty when no overlap', () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });

  it('returns all of arr1 when fully contained in arr2', () => {
    expect(intersection([1, 2], [1, 2, 3])).toEqual([1, 2]);
  });

  it('returns empty for empty input', () => {
    expect(intersection([], [1, 2])).toEqual([]);
  });
});
