import { describe, it, expect, beforeEach } from 'vitest';
import removeInlineStyles from './removeInlineStyles';

describe('removeInlineStyles', () => {
  it('removes inline styles from an element', () => {
    const el = document.createElement('div');
    el.setAttribute('style', 'color: red; font-size: 16px;');
    removeInlineStyles(el);
    expect(el.getAttribute('style')).toBeNull();
  });

  it('works on an element with no existing inline styles', () => {
    const el = document.createElement('div');
    removeInlineStyles(el);
    expect(el.getAttribute('style')).toBeNull();
  });
});
