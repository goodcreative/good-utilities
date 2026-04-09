import { describe, it, expect } from 'vitest';
import createNodeFromHTML from './createNodeFromHTML';

describe('createNodeFromHTML', () => {
  it('creates a single element from an HTML string', () => {
    const nodes = createNodeFromHTML('<div class="test">Hello</div>');
    expect(nodes.length).toBe(1);
    expect(nodes[0].tagName).toBe('DIV');
    expect(nodes[0].className).toBe('test');
  });

  it('creates multiple sibling nodes', () => {
    const nodes = createNodeFromHTML('<span>A</span><span>B</span><span>C</span>');
    expect(nodes.length).toBe(3);
  });

  it('returns a text node for plain text', () => {
    const nodes = createNodeFromHTML('just text');
    expect(nodes.length).toBe(1);
    expect(nodes[0].nodeType).toBe(Node.TEXT_NODE);
  });

  it('returns a NodeList (not an Array)', () => {
    const nodes = createNodeFromHTML('<p>Para</p>');
    expect(nodes).toBeInstanceOf(NodeList);
  });

  it('handles nested HTML', () => {
    const nodes = createNodeFromHTML('<ul><li>Item 1</li><li>Item 2</li></ul>');
    expect(nodes[0].querySelectorAll('li').length).toBe(2);
  });
});
