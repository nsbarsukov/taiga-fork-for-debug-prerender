(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14756],{14756:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {TuiDialogFormService} from '@taiga-ui/kit';\nimport {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-dialog-example-8',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [TuiDialogFormService],\n})\nexport class TuiDialogExampleComponent8 {\n    private readonly dialogForm = inject(TuiDialogFormService);\n    private readonly dialogs = inject(TuiDialogService);\n\n    protected value = '';\n\n    protected onModelChange(value: string): void {\n        this.value = value;\n        this.dialogForm.markAsDirty();\n    }\n\n    protected onClick(content: PolymorpheusContent): void {\n        const closeable = this.dialogForm.withPrompt({\n            label: 'Are you sure?',\n            data: {\n                content: 'Your data will be <strong>lost</strong>',\n            },\n        });\n\n        this.dialogs.open(content, {closeable, dismissible: closeable}).subscribe({\n            complete: () => {\n                this.value = '';\n                this.dialogForm.markAsPristine();\n            },\n        });\n    }\n}\n"}}]);