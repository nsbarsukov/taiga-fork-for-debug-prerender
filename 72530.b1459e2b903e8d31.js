"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72530],{72530:n=>{n.exports='<div\n    tuiTheme="dark"\n    class="wrapper"\n>\n    <h1 class="tui-text_h3 title">Monty Python</h1>\n    <tui-tabs-with-more\n        underline="var(--tui-text-01-night)"\n        class="tabs"\n        [activeItemIndex]="activeItemIndex"\n        [moreContent]="more"\n    >\n        <ng-container *ngFor="let tab of tabs">\n            <ng-container *ngIf="isString(tab); else submenu">\n                <button\n                    *tuiItem\n                    tuiTab\n                    (click)="onClick(tab)"\n                >\n                    {{ tab }}\n                </button>\n            </ng-container>\n            <ng-template #submenu>\n                <button\n                    *tuiItem\n                    tuiChevron\n                    tuiTab\n                    [tuiDropdown]="dropdown"\n                    [(tuiDropdownOpen)]="open"\n                    (tui-tab-activate)="stop($event)"\n                >\n                    Collaborators\n                </button>\n            </ng-template>\n        </ng-container>\n    </tui-tabs-with-more>\n</div>\n<section class="content">Currently active: {{ activeElement }}</section>\n<ng-template\n    #dropdown\n    let-activeZone\n    let-close="close"\n>\n    <tui-data-list [tuiActiveZoneParent]="activeZone">\n        <button\n            *ngFor="let collaborator of collaborators"\n            tuiOption\n            (click)="onClick(collaborator); close()"\n        >\n            {{ collaborator }}\n        </button>\n    </tui-data-list>\n</ng-template>\n<ng-template #more>\n    <tui-icon icon="tuiIconMoreHorizontal" />\n</ng-template>\n'}}]);