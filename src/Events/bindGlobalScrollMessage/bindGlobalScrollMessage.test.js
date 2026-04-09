import { describe, it, expect, afterEach, vi } from 'vitest';
import messageBus from '../messageBus/messageBus.js';
import bindGlobalScrollMessage from './bindGlobalScrollMessage';

describe('bindGlobalScrollMessage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('dispatches page/scroll on messageBus when window scrolls', () => {
    const dispatchSpy = vi.spyOn(messageBus, 'dispatchEvent');
    bindGlobalScrollMessage();
    window.dispatchEvent(new Event('scroll'));
    expect(dispatchSpy).toHaveBeenCalledOnce();
    expect(dispatchSpy.mock.calls[0][0].type).toBe('page/scroll');
  });
});
