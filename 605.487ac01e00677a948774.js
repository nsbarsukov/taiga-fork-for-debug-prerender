(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{AXQ3:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject, TemplateRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `dialog-example`,\n    templateUrl: `./dialog-example.template.html`,\n    styleUrls: [`./dialog-example.style.less`],\n    changeDetection,\n})\nexport class DialogExampleComponent {\n    value: number | null = null;\n    name = ``;\n    items = [10, 50, 100];\n\n    constructor(\n        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiDialogContext<number, number>,\n    ) {}\n\n    get hasValue(): boolean {\n        return this.value !== null;\n    }\n\n    get data(): number {\n        return this.context.data;\n    }\n\n    submit(): void {\n        if (this.value !== null) {\n            this.context.completeWith(this.value);\n        }\n    }\n\n    showDialog(content: TemplateRef<TuiDialogContext<void>>): void {\n        this.dialogService.open(content, {dismissible: true}).subscribe();\n    }\n}\n"}}]);