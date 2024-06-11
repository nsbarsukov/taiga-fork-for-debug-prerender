(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60430],{60430:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiTabDirective, TuiTabsHorizontalDirective} from '@taiga-ui/kit';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiTabsHorizontalDirective,\n        TuiTabDirective,\n        TuiInputNumberModule,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected activeItemIndex = 0;\n\n    protected onClick(item: string): void {\n        this.alerts.open(item).subscribe();\n    }\n}\n"}}]);