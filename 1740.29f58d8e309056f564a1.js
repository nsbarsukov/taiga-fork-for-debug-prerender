(window.webpackJsonp=window.webpackJsonp||[]).push([[1740],{NY1w:function(n,e,t){"use strict";t.r(e),e.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <label\n        tuiLabel\n        label="Enter an email"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            i18n\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Required\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue2"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n\n    <label\n        tuiLabel\n        label="Minimum and maximum length"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n        >\n            4 letters word...\n        </tui-input>\n\n        <tui-error\n            formControlName="testValue1"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n\n    <label\n        tuiLabel\n        label="Minimum number"\n    >\n        <tui-input-count\n            formControlName="testValue3"\n            tuiTextfieldSize="m"\n        >\n            number\n        </tui-input-count>\n\n        <tui-error\n            formControlName="testValue3"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n</form>\n'}}]);