(window.webpackJsonp=window.webpackJsonp||[]).push([[1868],{vxs0:function(n,t,e){"use strict";e.r(t),t.default='<p\n    tuiTextfieldSize="m"\n    class="filters"\n>\n    <tui-input\n        class="input"\n        [tuiTextfieldCleaner]="true"\n        [(ngModel)]="search"\n    >\n        Find on page\n    </tui-input>\n    <tui-input-count\n        class="tui-space_horizontal-3"\n        [formControl]="minAge"\n    >\n        Minimum age\n    </tui-input-count>\n    <tui-hosted-dropdown [content]="dropdown">\n        <button\n            tuiButton\n            size="m"\n            [iconRight]="arrow"\n        >\n            Columns\n        </button>\n        <ng-template #dropdown>\n            <tui-reorder\n                class="columns"\n                [enabled]="enabled"\n                [(items)]="initial"\n                (enabledChange)="onEnabled($event)"\n            ></tui-reorder>\n        </ng-template>\n    </tui-hosted-dropdown>\n</p>\n<tui-loader\n    [overlay]="true"\n    [showLoader]="!!(loading$ | async)"\n>\n    <table\n        *tuiLet="data$ | async as data"\n        tuiTable\n        class="table"\n        [columns]="columns"\n        [direction]="(direction$ | async) || 1"\n        [tuiSortBy]="sorter$ | async"\n        (tuiSortByChange)="sorter$.next($event!)"\n        (directionChange)="direction$.next($event)"\n    >\n        <thead>\n            <tr tuiThGroup>\n                <th\n                    *tuiHead="\'name\'"\n                    tuiTh\n                    tuiSortable\n                >\n                    Name\n                </th>\n                <th\n                    *tuiHead="\'dob\'"\n                    tuiTh\n                    tuiSortable\n                >\n                    Date of Birth\n                </th>\n                <th\n                    *tuiHead="\'age\'"\n                    tuiTh\n                    tuiSortable\n                >\n                    Age\n                </th>\n            </tr>\n        </thead>\n        <tbody\n            tuiTbody\n            [data]="data"\n        >\n            <tr\n                *tuiRow="let item of data"\n                tuiTr\n            >\n                <td\n                    *tuiCell="\'name\'"\n                    tuiTd\n                    [class.match]="isMatch(item.name)"\n                >\n                    {{ item.name }}\n                </td>\n                <td\n                    *tuiCell="\'dob\'"\n                    tuiTd\n                    [class.match]="isMatch(item.dob)"\n                >\n                    {{ item.dob }}\n                </td>\n                <td\n                    *tuiCell="\'age\'"\n                    tuiTd\n                    [class.match]="isMatch(getAge(item))"\n                >\n                    {{ getAge(item) }}\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td [colSpan]="columns.length">\n                    <tui-table-pagination\n                        class="tui-space_top-2"\n                        [total]="(total$ | async) || 0"\n                        (pageChange)="onPage($event)"\n                        (sizeChange)="onSize($event)"\n                    ></tui-table-pagination>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</tui-loader>\n'}}]);