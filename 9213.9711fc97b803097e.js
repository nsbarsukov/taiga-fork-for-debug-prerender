"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9213],{9213:n=>{n.exports='<tui-combo-box\n    [stringify]="stringify"\n    [(ngModel)]="value"\n>\n    Find the best employees\n    <input\n        placeholder="Type a name"\n        tuiTextfieldLegacy\n    />\n    <ng-container *tuiDataList>\n        <tui-data-list>\n            <button\n                *ngFor="let item of items | tuiFilterByInput"\n                tuiOption\n                [disabled]="item.disabled"\n                [value]="item"\n            >\n                {{ stringify(item) }}\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-combo-box>\n\n<p class="tui-space_top-2">Selected value: {{ value | json }}</p>\n'}}]);