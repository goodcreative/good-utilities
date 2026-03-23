import { describe, it, expect } from 'vitest';
import MESSAGES from './messages';

describe('messages', () => {
  it('exports an object', () => {
    expect(typeof MESSAGES).toBe('object');
  });

  it('has correct scroll message', () => {
    expect(MESSAGES.scroll).toBe('page/scroll');
  });

  it('has correct resize message', () => {
    expect(MESSAGES.resize).toBe('page/resize');
  });

  it('has correct load message', () => {
    expect(MESSAGES.load).toBe('page/loaded');
  });

  it('has correct contentChange message', () => {
    expect(MESSAGES.contentChange).toBe('page-content/change');
  });

  it('has correct contentDisplayed message', () => {
    expect(MESSAGES.contentDisplayed).toBe('page-content/displayed');
  });

  it('has correct layoutChange message', () => {
    expect(MESSAGES.layoutChange).toBe('layout/change');
  });

  it('has correct breakChange message', () => {
    expect(MESSAGES.breakChange).toBe('breakpoint/change');
  });

  it('has correct imageLoaded message', () => {
    expect(MESSAGES.imageLoaded).toBe('image/loaded');
  });

  it('has correct modalOpened message', () => {
    expect(MESSAGES.modalOpened).toBe('modal/opened');
  });

  it('has correct displayModal message', () => {
    expect(MESSAGES.displayModal).toBe('modal/display');
  });

  it('has correct stopMedia message', () => {
    expect(MESSAGES.stopMedia).toBe('media/stop');
  });
});
