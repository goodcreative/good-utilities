import { describe, it, expect, afterEach, vi } from 'vitest';
import messageBus from '../messageBus/messageBus.js';
import createGlobalMessenger from './createGlobalMessenger';

describe('createGlobalMessenger', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('dispatches the given message on messageBus when matching element fires event', () => {
    const btn = document.createElement('button');
    btn.className = 'gm-test-btn-1';
    document.body.appendChild(btn);
    const dispatchSpy = vi.spyOn(messageBus, 'dispatchEvent');
    createGlobalMessenger('click', '.gm-test-btn-1', 'test/message', false);
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(dispatchSpy).toHaveBeenCalledOnce();
    expect(dispatchSpy.mock.calls[0][0].type).toBe('test/message');
    btn.remove();
  });

  it('calls preventDefault and stopPropagation when preventBubble is true', () => {
    const btn = document.createElement('button');
    btn.className = 'gm-test-btn-2';
    document.body.appendChild(btn);
    createGlobalMessenger('click', '.gm-test-btn-2', 'test/message', true);
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    const preventSpy = vi.spyOn(clickEvent, 'preventDefault');
    const stopSpy = vi.spyOn(clickEvent, 'stopPropagation');
    btn.dispatchEvent(clickEvent);
    expect(preventSpy).toHaveBeenCalled();
    expect(stopSpy).toHaveBeenCalled();
    btn.remove();
  });

  it('does not call preventDefault when preventBubble is false', () => {
    // Use a unique class to avoid interference from previous tests' listeners
    const btn = document.createElement('button');
    btn.className = 'gm-test-btn-3';
    document.body.appendChild(btn);
    createGlobalMessenger('click', '.gm-test-btn-3', 'no-bubble/message', false);
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    const preventSpy = vi.spyOn(clickEvent, 'preventDefault');
    btn.dispatchEvent(clickEvent);
    expect(preventSpy).not.toHaveBeenCalled();
    btn.remove();
  });

  it('does not dispatch on non-matching element', () => {
    // Register listener for a unique selector, click a non-matching element
    const btn = document.createElement('div');
    btn.className = 'gm-nonmatch-target';
    document.body.appendChild(btn);
    const dispatchSpy = vi.spyOn(messageBus, 'dispatchEvent');
    createGlobalMessenger('click', '.gm-unique-selector-xyz', 'test/message', false);
    btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(dispatchSpy).not.toHaveBeenCalled();
    btn.remove();
  });
});
