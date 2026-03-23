import { describe, it, expect, afterEach, vi } from 'vitest';
import PubSub from 'pubsub-js';
import bindGlobalResizeMessage from './bindGlobalResizeMessage';

describe('bindGlobalResizeMessage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    window.onresize = null;
  });

  it('publishes page/resize after debounce delay when window resizes', async () => {
    vi.useFakeTimers();
    const publishSpy = vi.spyOn(PubSub, 'publish');
    bindGlobalResizeMessage();
    window.onresize();
    expect(publishSpy).not.toHaveBeenCalled();
    vi.advanceTimersByTime(200);
    expect(publishSpy).toHaveBeenCalledWith('page/resize');
  });

  it('only publishes once for multiple rapid resize events', async () => {
    vi.useFakeTimers();
    const publishSpy = vi.spyOn(PubSub, 'publish');
    bindGlobalResizeMessage();
    window.onresize();
    window.onresize();
    window.onresize();
    vi.advanceTimersByTime(200);
    expect(publishSpy).toHaveBeenCalledTimes(1);
  });
});
