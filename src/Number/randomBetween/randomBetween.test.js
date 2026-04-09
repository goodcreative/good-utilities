import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import randomBetween from './randomBetween.js';

describe('randomBetween', () => {
  it('returns a value within [min, max]', () => {
    for (let i = 0; i < 20; i++) {
      const result = randomBetween(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it('returns min when Math.random returns 0', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(randomBetween(5, 15)).toBe(5);
    vi.restoreAllMocks();
  });

  it('returns max when Math.random returns just below 1', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9999999999);
    const result = randomBetween(0, 10);
    expect(result).toBeCloseTo(10, 5);
    vi.restoreAllMocks();
  });

  it('works with negative range', () => {
    const result = randomBetween(-10, -1);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-1);
  });
});
