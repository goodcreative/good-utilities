import { describe, it, expect } from 'vitest';
import formatBytes from './formatBytes.js';

describe('formatBytes', () => {
  it('formats bytes', () => {
    expect(formatBytes(512)).toBe('512 B');
  });

  it('formats kilobytes', () => {
    expect(formatBytes(1024)).toBe('1 KB');
  });

  it('formats megabytes', () => {
    expect(formatBytes(1048576)).toBe('1 MB');
  });

  it('formats gigabytes', () => {
    expect(formatBytes(1073741824)).toBe('1 GB');
  });

  it('formats terabytes', () => {
    expect(formatBytes(1099511627776)).toBe('1 TB');
  });

  it('formats fractional values', () => {
    expect(formatBytes(1536)).toBe('1.5 KB');
  });

  it('returns 0 B for zero', () => {
    expect(formatBytes(0)).toBe('0 B');
  });

  it('formats to at most 2 decimal places', () => {
    // 1234 bytes = 1.205078125 KB — should round to 2 dp, not show 9+
    expect(formatBytes(1234)).toBe('1.21 KB');
  });
});
