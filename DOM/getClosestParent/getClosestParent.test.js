import { describe, it, expect, beforeEach } from 'vitest';
import getClosestParent from './getClosestParent';

describe('getClosestParent', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="grandparent">
        <div class="parent">
          <div class="child">
            <span class="target">Target</span>
          </div>
        </div>
      </div>
    `;
  });

  it('returns direct parent matching selector', () => {
    const target = document.querySelector('.target');
    const result = getClosestParent(target, '.child');
    expect(result.className).toBe('child');
  });

  it('returns ancestor matching selector when direct parent does not match', () => {
    const target = document.querySelector('.target');
    const result = getClosestParent(target, '.grandparent');
    expect(result.className).toBe('grandparent');
  });

  it('returns null when no ancestor matches', () => {
    const target = document.querySelector('.target');
    const result = getClosestParent(target, '.nonexistent');
    expect(result).toBeNull();
  });

  it('returns the element itself when includeSelf is true and it matches', () => {
    const target = document.querySelector('.target');
    const result = getClosestParent(target, '.target', true);
    expect(result).toBe(target);
  });

  it('does not return the element itself when includeSelf is false', () => {
    const target = document.querySelector('.target');
    const result = getClosestParent(target, '.target', false);
    expect(result).toBeNull();
  });
});
