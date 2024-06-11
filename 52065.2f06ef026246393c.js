"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[52065],{52065:n=>{n.exports='<p class="text">\n    Your balance:\n    <span>{{ data | tuiAmount: \'RUB\' | async }}</span>\n</p>\n\n<tui-input\n    tuiAutoFocus\n    tuiTextfieldSize="m"\n    [(ngModel)]="name"\n>\n    Type a name\n</tui-input>\n\n<tui-select\n    tuiTextfieldSize="m"\n    class="tui-space_top-3 tui-space_bottom-5"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n>\n    Select a sum\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items"\n    />\n</tui-select>\n\n<input\n    tuiSlider\n    type="range"\n    class="tui-space_bottom-5"\n    [max]="10"\n    [ngModel]="5"\n/>\n\n<button\n    size="m"\n    tuiButton\n    type="button"\n    [disabled]="!hasValue"\n    (click)="submit()"\n>\n    Submit\n</button>\n\n<p>\n    <button\n        size="m"\n        tuiButton\n        type="button"\n        (click)="showDialog(template)"\n    >\n        Show one more dialog\n    </button>\n</p>\n\n<ng-template #template>\n    <div class="dialog">\n        <p>This one is a template dialog</p>\n    </div>\n</ng-template>\n'}}]);