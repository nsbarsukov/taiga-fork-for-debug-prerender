"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7019],{7019:t=>{t.exports='<label>\n    Type a name:\n    <tui-multi-select\n        *tuiLet="items$ | async as items"\n        placeholder="Find by ..."\n        [formControl]="testValue"\n        [rows]="1"\n        [tuiTextfieldLabelOutside]="true"\n        (searchChange)="onSearchChange($event)"\n    >\n        Rock Star Frontend Developers\n        <tui-data-list-wrapper\n            *tuiDataList\n            [itemContent]="itemContent"\n            [items]="items | tuiHideSelected"\n        />\n    </tui-multi-select>\n</label>\n\n<ng-template\n    #itemContent\n    let-data\n>\n    <div class="template">\n        <tui-avatar\n            size="xs"\n            class="avatar"\n            [src]="data.avatarUrl || (data.toString() | tuiInitials)"\n        />\n        {{ data }}\n    </div>\n</ng-template>\n'}}]);