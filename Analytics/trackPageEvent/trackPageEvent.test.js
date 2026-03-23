import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import trackPageEvent from './trackPageEvent';

describe('trackPageEvent', () => {
  afterEach(() => {
    delete window.dataLayer;
    delete window.ga;
    delete window._gaq;
  });

  it('pushes a GAEvent to dataLayer when dataLayer is defined', () => {
    window.dataLayer = [];
    trackPageEvent('Category', 'Action', 'Label', 10);
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toEqual({
      event: 'GAEvent',
      eventCategory: 'Category',
      eventAction: 'Action',
      eventLabel: 'Label',
      eventValue: 10
    });
  });

  it('calls ga() with correct args when ga is defined', () => {
    window.ga = vi.fn();
    trackPageEvent('Cat', 'Act', 'Lab');
    expect(window.ga).toHaveBeenCalledWith('send', 'event', 'Cat', 'Act', 'Lab');
  });

  it('pushes to _gaq when _gaq is defined', () => {
    window._gaq = { push: vi.fn() };
    trackPageEvent('Cat', 'Act', 'Lab');
    expect(window._gaq.push).toHaveBeenCalledWith(['_trackEvent', 'Cat', 'Act', 'Lab']);
  });

  it('does nothing when no analytics are present', () => {
    // Should not throw
    expect(() => trackPageEvent('Cat', 'Act', 'Lab')).not.toThrow();
  });

  it('passes undefined label and value when omitted', () => {
    window.dataLayer = [];
    trackPageEvent('Cat', 'Act');
    expect(window.dataLayer[0].eventLabel).toBeUndefined();
    expect(window.dataLayer[0].eventValue).toBeUndefined();
  });
});
