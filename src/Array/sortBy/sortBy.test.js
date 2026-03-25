import { describe, it, expect } from 'vitest';
import sortBy from './sortBy.js';

describe('sortBy', () => {
  const people = [
    { name: 'Charlie', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ];

  it('sorts ascending by default', () => {
    expect(sortBy(people, 'age').map(p => p.name)).toEqual(['Alice', 'Charlie', 'Bob']);
  });

  it('sorts ascending explicitly', () => {
    expect(sortBy(people, 'name', 'asc').map(p => p.name)).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('sorts descending', () => {
    expect(sortBy(people, 'age', 'desc').map(p => p.name)).toEqual(['Bob', 'Charlie', 'Alice']);
  });

  it('does not mutate the original array', () => {
    const original = [...people];
    sortBy(people, 'age');
    expect(people).toEqual(original);
  });

  it('returns empty array for empty input', () => {
    expect(sortBy([], 'age')).toEqual([]);
  });
});
