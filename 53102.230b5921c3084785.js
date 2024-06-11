"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53102],{53102:n=>{n.exports='<label>\n    Type a name:\n\n    <tui-combo-box\n        *tuiLet="service.request(search) | async as filtered"\n        [formControl]="control"\n        [tuiTextfieldLabelOutside]="true"\n        [valueContent]="value"\n        [(search)]="search"\n    >\n        Find the best employees\n        <input\n            placeholder="Type a name"\n            tuiTextfieldLegacy\n        />\n        <ng-template\n            #value\n            let-item\n        >\n            <tui-avatar\n                size="xs"\n                class="avatar"\n                [src]="item.avatarUrl"\n            >\n                {{ item.toString() | tuiInitials }}\n            </tui-avatar>\n            <span class="name">{{ item }}</span>\n        </ng-template>\n        <ng-template tuiDataList>\n            <tui-data-list *ngIf="filtered; else loading">\n                <button\n                    *ngFor="let item of filtered"\n                    tuiOption\n                    [disabled]="item.disabled"\n                    [value]="item"\n                >\n                    <tui-avatar\n                        size="xs"\n                        class="avatar"\n                        [src]="item.avatarUrl"\n                    >\n                        {{ item.toString() | tuiInitials }}\n                    </tui-avatar>\n                    <span class="name">{{ item }}</span>\n                </button>\n            </tui-data-list>\n            <ng-template #loading>\n                <tui-loader class="tui-space_vertical-4" />\n            </ng-template>\n        </ng-template>\n    </tui-combo-box>\n</label>\n'}}]);