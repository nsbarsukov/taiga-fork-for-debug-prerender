"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[66926],{66926:n=>{n.exports='<p\n    tuiTextfieldSize="m"\n    class="filters"\n>\n    <tui-input\n        class="input"\n        [tuiTextfieldCleaner]="true"\n        [(ngModel)]="search"\n    >\n        Find on page\n    </tui-input>\n    <tui-input-number\n        decimal="never"\n        class="tui-space_horizontal-3"\n        [formControl]="minAge"\n    >\n        Minimum age\n    </tui-input-number>\n    <button\n        size="m"\n        tuiButton\n        tuiChevron\n        tuiDropdownOpen\n        type="button"\n        [tuiDropdown]="dropdown"\n    >\n        Columns\n    </button>\n    <ng-template #dropdown>\n        <tui-reorder\n            class="columns"\n            [enabled]="enabled"\n            [(items)]="initial"\n            (enabledChange)="onEnabled($event)"\n        />\n    </ng-template>\n</p>\n<tui-loader\n    [overlay]="true"\n    [showLoader]="!!(loading$ | async)"\n>\n    <table\n        *ngIf="data$ | async as data"\n        tuiTable\n        class="table"\n        [columns]="columns"\n        [direction]="(direction$ | async) || 1"\n        [tuiSortBy]="sorter$ | async"\n        (directionChange)="direction$.next($event)"\n        (tuiSortByChange)="sorter$.next($event!)"\n    >\n        <thead>\n            <tr tuiThGroup>\n                <th\n                    *tuiHead="\'name\'"\n                    tuiSortable\n                    tuiTh\n                >\n                    Name\n                </th>\n                <th\n                    *tuiHead="\'dob\'"\n                    tuiSortable\n                    tuiTh\n                >\n                    Date of Birth\n                </th>\n                <th\n                    *tuiHead="\'age\'"\n                    tuiSortable\n                    tuiTh\n                >\n                    Age\n                </th>\n            </tr>\n        </thead>\n        <tbody\n            *tuiLet="data | tuiTableSort as sortedData"\n            tuiTbody\n            [data]="sortedData"\n        >\n            <tr\n                *ngFor="let item of sortedData"\n                tuiTr\n            >\n                <td\n                    *tuiCell="\'name\'"\n                    tuiTd\n                    [class.match]="isMatch(item.name)"\n                >\n                    {{ item.name }}\n                </td>\n                <td\n                    *tuiCell="\'dob\'"\n                    tuiTd\n                    [class.match]="isMatch(item.dob)"\n                >\n                    {{ item.dob }}\n                </td>\n                <td\n                    *tuiCell="\'age\'"\n                    tuiTd\n                    [class.match]="isMatch(getAge(item))"\n                >\n                    {{ getAge(item) }}\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td [colSpan]="columns.length">\n                    <tui-table-pagination\n                        class="tui-space_top-2"\n                        [total]="(total$ | async) || 0"\n                        (paginationChange)="onPagination($event)"\n                    />\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</tui-loader>\n'}}]);