(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49576],{42798:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {type TuiDialogContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'search-dialog-example',\n    templateUrl: './search-dialog-example.template.html',\n    styleUrls: ['./search-dialog-example.component.less'],\n    changeDetection,\n})\nexport class SearchDialogExampleComponent {\n    private readonly context = inject<TuiDialogContext<boolean>>(POLYMORPHEUS_CONTEXT);\n\n    protected close(): void {\n        this.context.completeWith(false);\n    }\n}\n"}}]);