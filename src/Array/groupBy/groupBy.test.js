import { describe, it, expect } from 'vitest';
import groupBy from './groupBy.js';

describe('groupBy', () => {
  const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
  ];

  it('groups items by key', () => {
    const result = groupBy(items, 'type');
    expect(result.fruit).toHaveLength(2);
    expect(result.vegetable).toHaveLength(1);
  });

  it('preserves items in each group', () => {
    const result = groupBy(items, 'type');
    expect(result.fruit[0].name).toBe('apple');
    expect(result.fruit[1].name).toBe('banana');
  });

  it('returns empty object for empty array', () => {
    expect(groupBy([], 'type')).toEqual({});
  });
});
