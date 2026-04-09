import { describe, it, expect } from 'vitest';
import sample from './sample.js';

describe('sample', () => {
  it('returns n items from the array', () => {
    expect(sample([1, 2, 3, 4, 5], 3)).toHaveLength(3);
  });

  it('returned items are all from the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = sample(arr, 3);
    result.forEach(item => expect(arr).toContain(item));
  });

  it('returns no duplicates', () => {
    const result = sample([1, 2, 3, 4, 5], 5);
    expect(new Set(result).size).toBe(5);
  });

  it('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    sample(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('returns empty array when n is 0', () => {
    expect(sample([1, 2, 3], 0)).toEqual([]);
  });

  it('returns all items when n exceeds array length', () => {
    const result = sample([1, 2, 3], 10);
    expect(result).toHaveLength(3);
    expect(new Set(result).size).toBe(3);
  });
});
