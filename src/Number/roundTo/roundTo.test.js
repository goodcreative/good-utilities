import { describe, it, expect } from 'vitest';
import roundTo from './roundTo.js';

describe('roundTo', () => {
  it('rounds to given decimal places', () => {
    expect(roundTo(3.14159, 2)).toBe(3.14);
  });

  it('rounds up correctly', () => {
    expect(roundTo(1.005, 2)).toBe(1.01);
  });

  it('rounds to 0 decimals', () => {
    expect(roundTo(4.7, 0)).toBe(5);
  });

  it('handles whole number input', () => {
    expect(roundTo(5, 2)).toBe(5);
  });

  it('handles negative values', () => {
    expect(roundTo(-3.14159, 2)).toBe(-3.14);
  });
});
