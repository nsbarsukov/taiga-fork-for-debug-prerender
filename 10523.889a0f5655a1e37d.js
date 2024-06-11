"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[10523],{10523:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport type {TemplateRef} from '@angular/core';\nimport {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiAutoFocusDirective} from '@taiga-ui/cdk';\nimport type {TuiDialogContext} from '@taiga-ui/core';\nimport {\n    TuiButtonDirective,\n    TuiDialogService,\n    TuiTextfieldOptionsDirective,\n} from '@taiga-ui/core';\nimport {TuiDataListWrapper, TuiSlider} from '@taiga-ui/kit';\nimport {\n    TuiInputModule,\n    TuiSelectModule,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/legacy';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    standalone: true,\n    imports: [\n        TuiInputModule,\n        TuiAmountPipe,\n        AsyncPipe,\n        TuiAutoFocusDirective,\n        TuiTextfieldOptionsDirective,\n        FormsModule,\n        TuiSelectModule,\n        TuiTextfieldControllerModule,\n        TuiDataListWrapper,\n        TuiSlider,\n        TuiButtonDirective,\n    ],\n    templateUrl: './dialog-example.template.html',\n    styleUrls: ['./dialog-example.style.less'],\n    changeDetection,\n})\nexport class DialogExampleComponent {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly context =\n        inject<TuiDialogContext<number, number>>(POLYMORPHEUS_CONTEXT);\n\n    protected value: number | null = null;\n    protected name = '';\n    protected items = [10, 50, 100];\n\n    protected get hasValue(): boolean {\n        return this.value !== null;\n    }\n\n    protected get data(): number {\n        return this.context.data;\n    }\n\n    protected submit(): void {\n        if (this.value !== null) {\n            this.context.completeWith(this.value);\n        }\n    }\n\n    protected showDialog(content: TemplateRef<TuiDialogContext>): void {\n        this.dialogs.open(content, {dismissible: true}).subscribe();\n    }\n}\n"}}]);