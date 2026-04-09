import { describe, it, expect } from 'vitest';
import uniqueBy from './uniqueBy.js';

describe('uniqueBy', () => {
  it('removes duplicates by string key', () => {
    const input = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 1, name: 'c' }];
    expect(uniqueBy(input, 'id')).toEqual([{ id: 1, name: 'a' }, { id: 2, name: 'b' }]);
  });

  it('keeps first occurrence', () => {
    const input = [{ x: 'foo' }, { x: 'foo' }, { x: 'bar' }];
    expect(uniqueBy(input, 'x')).toEqual([{ x: 'foo' }, { x: 'bar' }]);
  });

  it('returns empty array for empty input', () => {
    expect(uniqueBy([], 'id')).toEqual([]);
  });

  it('returns all items when no duplicates', () => {
    const input = [{ id: 1 }, { id: 2 }];
    expect(uniqueBy(input, 'id')).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
