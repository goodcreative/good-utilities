import { describe, it, expect } from 'vitest';
import stripHTML from './stripHTML.js';

describe('stripHTML', () => {
  it('removes simple tags', () => {
    expect(stripHTML('<p>Hello</p>')).toBe('Hello');
  });

  it('removes nested tags', () => {
    expect(stripHTML('<div><strong>Bold</strong> text</div>')).toBe('Bold text');
  });

  it('returns plain string unchanged', () => {
    expect(stripHTML('No tags here')).toBe('No tags here');
  });

  it('removes self-closing tags', () => {
    expect(stripHTML('Line 1<br/>Line 2')).toBe('Line 1Line 2');
  });
});
