import { describe, it, expect, vi } from 'vitest';
import prefersReducedMotion from './prefersReducedMotion.js';

describe('prefersReducedMotion', () => {
  it('returns true when prefers-reduced-motion is reduce', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })));
    expect(prefersReducedMotion()).toBe(true);
  });

  it('returns false when prefers-reduced-motion is no-preference', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
    expect(prefersReducedMotion()).toBe(false);
  });
});
