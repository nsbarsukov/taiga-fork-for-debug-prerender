"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6103],{6103:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiItemDirective} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiTabDirective, TuiTabsWithMoreComponent} from '@taiga-ui/kit';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiTabsWithMoreComponent,\n        TuiItemDirective,\n        TuiTabDirective,\n        TuiInputNumberModule,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected activeItemIndex = 0;\n\n    protected onClick(item: string): void {\n        this.alerts.open(item).subscribe();\n    }\n}\n"}}]);