import { describe, it, expect, beforeEach } from 'vitest';
import wrapElement from './wrapElement';

describe('wrapElement', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="container">
        <span id="before">Before</span>
        <p id="target">Target</p>
        <span id="after">After</span>
      </div>
    `;
  });

  it('wraps element in the given wrapper', () => {
    const target = document.getElementById('target');
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapElement(target, wrapper);
    expect(wrapper.contains(target)).toBe(true);
  });

  it('inserts wrapper in the original position', () => {
    const container = document.getElementById('container');
    const target = document.getElementById('target');
    const wrapper = document.createElement('div');
    wrapElement(target, wrapper);
    expect(container.contains(wrapper)).toBe(true);
  });

  it('target element becomes a child of wrapper', () => {
    const target = document.getElementById('target');
    const wrapper = document.createElement('div');
    wrapElement(target, wrapper);
    expect(wrapper.firstChild).toBe(target);
  });

  it('wrapper is placed between adjacent siblings', () => {
    const container = document.getElementById('container');
    const target = document.getElementById('target');
    const wrapper = document.createElement('div');
    wrapElement(target, wrapper);
    const children = Array.from(container.children);
    const wrapperIndex = children.indexOf(wrapper);
    expect(children[wrapperIndex - 1].id).toBe('before');
    expect(children[wrapperIndex + 1].id).toBe('after');
  });
});
