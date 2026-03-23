import { describe, it, expect } from 'vitest';
import createCustomEvent from './createCustomEvent';

describe('createCustomEvent', () => {
  it('returns a CustomEvent with the given name', () => {
    const event = createCustomEvent('my-event', {});
    expect(event.type).toBe('my-event');
  });

  it('sets detail.data to the provided eventData', () => {
    const data = { foo: 'bar' };
    const event = createCustomEvent('test', data);
    expect(event.detail.data).toEqual(data);
  });

  it('creates a bubbling event', () => {
    const event = createCustomEvent('bubbling-event', null);
    expect(event.bubbles).toBe(true);
  });

  it('returns an instance of CustomEvent', () => {
    const event = createCustomEvent('typed-event', 42);
    expect(event).toBeInstanceOf(CustomEvent);
  });
});
