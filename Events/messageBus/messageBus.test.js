import { describe, it, expect, vi } from 'vitest';
import messageBus from './messageBus.js';

describe('messageBus', () => {
  it('is an EventTarget', () => {
    expect(messageBus).toBeInstanceOf(EventTarget);
  });

  it('dispatches and receives custom events', () => {
    const handler = vi.fn();
    messageBus.addEventListener('test/event', handler);
    messageBus.dispatchEvent(new CustomEvent('test/event', { detail: { value: 42 } }));
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe(42);
    messageBus.removeEventListener('test/event', handler);
  });

  it('removeEventListener stops further calls', () => {
    const handler = vi.fn();
    messageBus.addEventListener('remove/test', handler);
    messageBus.removeEventListener('remove/test', handler);
    messageBus.dispatchEvent(new CustomEvent('remove/test'));
    expect(handler).not.toHaveBeenCalled();
  });
});
