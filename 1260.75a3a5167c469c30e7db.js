(window.webpackJsonp=window.webpackJsonp||[]).push([[1260],{MY6t:function(n,a,t){"use strict";t.r(a),a.default='<div class="example">\n    <h2>Template Driven</h2>\n\n    <p>\n        <b>value = {{ rateValue }}</b>\n    </p>\n    <tui-rating\n        class="rating"\n        [(ngModel)]="rateValue"\n    ></tui-rating>\n\n    <p><b>Read only</b></p>\n    <tui-rating\n        class="rating"\n        [readOnly]="true"\n        [(ngModel)]="rateValue"\n    ></tui-rating>\n\n    <p><b>Disabled</b></p>\n    <tui-rating\n        class="rating"\n        [disabled]="true"\n        [(ngModel)]="rateValue"\n    ></tui-rating>\n</div>\n\n<div class="example">\n    <h2>Reactive Forms / Disabled</h2>\n\n    <p>\n        <b>value = {{ rateControl?.value }}</b>\n    </p>\n    <tui-rating\n        class="rating"\n        [formControl]="rateControl"\n    ></tui-rating>\n</div>\n\n<button\n    tuiButton\n    type="button"\n    size="xs"\n    class="example"\n    (click)="enableOrDisable()"\n>\n    {{ rateControl?.disabled ? \'enable\' : \'disable\' }} form control\n</button>\n'}}]);