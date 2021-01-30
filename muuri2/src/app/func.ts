import { VirtualScrollerDefaultOptions } from 'ngx-virtual-scroller';

export function vsDefaultOptionsFactory(): VirtualScrollerDefaultOptions {
    return {
        checkResizeInterval: 1000,
        modifyOverflowStyleOfParentScroll: true,
        resizeBypassRefreshThreshold: 5,
        scrollAnimationTime: 750,
        scrollDebounceTime: 0,
        scrollThrottlingTime: 0,
        stripedTable: false
    };
  }