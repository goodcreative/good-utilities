import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import createDelegatedEventListener from './createDelegatedEventListener';

describe('createDelegatedEventListener', () => {
  let btn;

  beforeEach(() => {
    btn = document.createElement('button');
    btn.className = 'my-btn';
    document.body.appendChild(btn);
  });

  afterEach(() => {
    btn.remove();
  });

  it('dispatches a custom event on the target when clicked', () => {
    createDelegatedEventListener('click', '.my-btn', 'my-custom-event', { value: 1 });
    const handler = vi.fn();
    btn.addEventListener('my-custom-event', handler);
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('dispatched custom event has the correct type', () => {
    createDelegatedEventListener('click', '.my-btn', 'special-event', null);
    let capturedEvent;
    btn.addEventListener('special-event', (e) => { capturedEvent = e; });
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(capturedEvent.type).toBe('special-event');
  });

  it('dispatched custom event carries eventData in detail.data', () => {
    const data = { key: 'value' };
    createDelegatedEventListener('click', '.my-btn', 'data-event', data);
    let capturedEvent;
    btn.addEventListener('data-event', (e) => { capturedEvent = e; });
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(capturedEvent.detail.data).toEqual(data);
  });
});
