import { describe, it, expect, vi } from 'vitest';
import messageBus from '../messageBus/messageBus.js';
import bindGlobalResizeMessage from './bindGlobalResizeMessage';

describe('bindGlobalResizeMessage', () => {
  // Each test intercepts window.addEventListener to prevent listener accumulation
  function captureResizeListener() {
    let capturedFn;
    vi.spyOn(window, 'addEventListener').mockImplementation((type, fn) => {
      if (type === 'resize') capturedFn = fn;
    });
    return () => capturedFn;
  }

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('dispatches page/resize on messageBus after debounce delay', () => {
    vi.useFakeTimers();
    const getListener = captureResizeListener();
    const dispatchSpy = vi.spyOn(messageBus, 'dispatchEvent');
    bindGlobalResizeMessage();
    getListener()();
    expect(dispatchSpy).not.toHaveBeenCalled();
    vi.advanceTimersByTime(200);
    expect(dispatchSpy).toHaveBeenCalledOnce();
    expect(dispatchSpy.mock.calls[0][0].type).toBe('page/resize');
  });

  it('only dispatches once for multiple rapid resize events', () => {
    vi.useFakeTimers();
    const getListener = captureResizeListener();
    const dispatchSpy = vi.spyOn(messageBus, 'dispatchEvent');
    bindGlobalResizeMessage();
    getListener()();
    getListener()();
    getListener()();
    vi.advanceTimersByTime(200);
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
});
