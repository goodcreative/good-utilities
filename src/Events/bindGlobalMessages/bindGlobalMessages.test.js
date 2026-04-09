import { describe, it, expect, vi } from 'vitest';
import * as scrollMod from '../bindGlobalScrollMessage/bindGlobalScrollMessage';
import * as resizeMod from '../bindGlobalResizeMessage/bindGlobalResizeMessage';
import bindGlobalMessages from './bindGlobalMessages';

describe('bindGlobalMessages', () => {
  it('calls both bindGlobalScrollMessage and bindGlobalResizeMessage', () => {
    const scrollSpy = vi.spyOn(scrollMod, 'default').mockImplementation(() => {});
    const resizeSpy = vi.spyOn(resizeMod, 'default').mockImplementation(() => {});
    bindGlobalMessages();
    expect(scrollSpy).toHaveBeenCalledOnce();
    expect(resizeSpy).toHaveBeenCalledOnce();
    scrollSpy.mockRestore();
    resizeSpy.mockRestore();
  });
});
