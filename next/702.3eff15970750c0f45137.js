(window.webpackJsonp=window.webpackJsonp||[]).push([[702],{ZM1n:function(n,t,e){"use strict";e.r(t),t.default='<div class="tui-space_bottom-4">Choose a department:</div>\n\n<div class="filters-with-all">\n    <button\n        tuiButton\n        type="button"\n        size="m"\n        class="tui-space_right-1"\n        [appearance]="(buttonAppearance$ | async) || \'\'"\n        (click)="toggleAll()"\n    >\n        All\n    </button>\n\n    <tui-filter\n        [items]="items"\n        [ngModel]="model$ | async"\n        (ngModelChange)="onModelChange($event)"\n    ></tui-filter>\n</div>\n'}}]);