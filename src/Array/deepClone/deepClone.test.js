import { describe, it, expect } from 'vitest';
import deepClone from './deepClone.js';

describe('deepClone', () => {
  it('clones an object', () => {
    const original = { a: 1, b: { c: 2 } };
    const clone = deepClone(original);
    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
  });

  it('does not share nested references', () => {
    const original = { nested: { value: 1 } };
    const clone = deepClone(original);
    clone.nested.value = 99;
    expect(original.nested.value).toBe(1);
  });

  it('clones arrays', () => {
    const original = [1, [2, 3], { a: 4 }];
    const clone = deepClone(original);
    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
  });
});
