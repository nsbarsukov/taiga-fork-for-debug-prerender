"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[15204],{15204:n=>{n.exports='<tui-tabs-with-more\n    [itemsLimit]="3"\n    [(activeItemIndex)]="activeItemIndex"\n>\n    <button\n        *tuiItem\n        iconLeft="tuiIconCreditCard"\n        tuiTab\n        (click)="onClick(\'Maps\')"\n    >\n        Maps\n    </button>\n    <button\n        *tuiItem\n        disabled\n        iconLeft="tuiIconPhone"\n        tuiTab\n        (click)="onClick(\'Calls\')"\n    >\n        Calls\n    </button>\n    <button\n        *tuiItem\n        iconLeft="tuiIconSettings"\n        tuiTab\n        (click)="onClick(\'Settings\')"\n    >\n        Settings\n    </button>\n    <button\n        *tuiItem\n        iconLeft="tuiIconHeart"\n        tuiTab\n        (click)="onClick(\'Favorite\')"\n    >\n        Favorite\n    </button>\n    <button\n        *tuiItem\n        iconLeft="tuiIconTrash"\n        tuiTab\n        (click)="onClick(\'Trash\')"\n    >\n        Trash\n    </button>\n</tui-tabs-with-more>\n<tui-input-number\n    class="tui-space_top-4"\n    [max]="4"\n    [min]="0"\n    [step]="1"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-number>\n'}}]);