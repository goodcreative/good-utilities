import { describe, it, expect, afterEach, vi } from 'vitest';
import PubSub from 'pubsub-js';
import bindGlobalScrollMessage from './bindGlobalScrollMessage';

describe('bindGlobalScrollMessage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('publishes page/scroll when window scroll event fires', () => {
    const publishSpy = vi.spyOn(PubSub, 'publish');
    bindGlobalScrollMessage();
    window.dispatchEvent(new Event('scroll'));
    expect(publishSpy).toHaveBeenCalledWith('page/scroll');
  });
});
