"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93850],{93850:n=>{n.exports='<form [formGroup]="testForm">\n    <label\n        tuiLabel\n        class="tui-space_bottom-4"\n    >\n        Enter an email\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Required\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue2"\n            [error]="[] | tuiFieldError | async"\n        />\n    </label>\n\n    <label\n        tuiLabel\n        class="tui-space_bottom-4"\n    >\n        Minimum and maximum length\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n        >\n            4 letters word...\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue1"\n            [error]="[] | tuiFieldError | async"\n        />\n    </label>\n\n    <label tuiLabel>\n        Minimum number\n        <tui-input-number\n            formControlName="testValue3"\n            tuiTextfieldSize="m"\n            [step]="1"\n        >\n            number\n        </tui-input-number>\n\n        <tui-error\n            formControlName="testValue3"\n            [error]="[] | tuiFieldError | async"\n        />\n    </label>\n</form>\n'}}]);