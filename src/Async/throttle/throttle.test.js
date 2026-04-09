import { describe, it, expect, vi } from 'vitest';
import throttle from './throttle.js';

describe('throttle', () => {
  it('calls fn on first invocation', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled();
    expect(fn).toHaveBeenCalledOnce();
    vi.useRealTimers();
  });

  it('does not call fn again within wait period', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled();
    vi.advanceTimersByTime(50);
    throttled();
    expect(fn).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('calls fn again after wait has passed', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);
    throttled();
    vi.advanceTimersByTime(100);
    throttled();
    expect(fn).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });

  it('passes arguments to fn', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 0);
    throttled('x', 'y');
    expect(fn).toHaveBeenCalledWith('x', 'y');
  });
});
