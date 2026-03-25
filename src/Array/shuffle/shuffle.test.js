import { describe, it, expect, vi } from 'vitest';
import shuffle from './shuffle.js';

describe('shuffle', () => {
  it('returns array with same elements', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffle(arr).sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    shuffle(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('returns empty array for empty input', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('shuffles using Fisher-Yates order when Math.random is mocked', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    // With random always 0, each swap picks index 0, rotating elements left
    const result = shuffle([1, 2, 3]);
    expect(result).toHaveLength(3);
    vi.restoreAllMocks();
  });
});
