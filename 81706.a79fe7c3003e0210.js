"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81706],{81706:n=>{n.exports='<ng-container *tuiLet="count$ | async as count">\n    <div *ngIf="count | tuiIsPresent; else loading">\n        count is\n        <code>{{ count | json }}</code>\n    </div>\n\n    <ng-template #loading>\n        <div>\n            count is\n            <code>{{ count | json }}</code>\n            while it\'s loading\n        </div>\n    </ng-template>\n</ng-container>\n\n<button\n    size="m"\n    tuiButton\n    type="button"\n    class="tui-space_top-4"\n    (click)="loadCount()"\n>\n    Load count\n</button>\n'}}]);