import { describe, it, expect, beforeEach } from 'vitest';
import getIndexOfNodeInNodeList from './getIndexOfNodeInNodeList';

describe('getIndexOfNodeInNodeList', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul id="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
      </ul>
    `;
  });

  it('returns 0 for the first node', () => {
    const list = document.querySelectorAll('.item');
    expect(getIndexOfNodeInNodeList(list[0], list)).toBe(0);
  });

  it('returns correct index for a middle node', () => {
    const list = document.querySelectorAll('.item');
    expect(getIndexOfNodeInNodeList(list[1], list)).toBe(1);
  });

  it('returns correct index for the last node', () => {
    const list = document.querySelectorAll('.item');
    expect(getIndexOfNodeInNodeList(list[2], list)).toBe(2);
  });

  it('returns -1 when node is not in the list', () => {
    const list = document.querySelectorAll('.item');
    const other = document.createElement('li');
    expect(getIndexOfNodeInNodeList(other, list)).toBe(-1);
  });
});
