(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[56462],{56462:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiArrayRemove} from '@taiga-ui/cdk';\nimport {TuiButtonDirective, TuiExpand} from '@taiga-ui/core';\nimport {TuiChevronDirective, TuiElasticContainerModule} from '@taiga-ui/kit';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiButtonDirective,\n        TuiElasticContainerModule,\n        NgForOf,\n        TuiChevronDirective,\n        TuiExpand,\n        TuiInputModule,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected items = [\n        {\n            expanded: false,\n            value: 'Test 1',\n        },\n        {\n            expanded: false,\n            value: 'Test 2',\n        },\n    ];\n\n    protected add(): void {\n        this.items = this.items.concat({expanded: false, value: 'New value'});\n    }\n\n    protected remove(index: number): void {\n        this.items = tuiArrayRemove(this.items, index);\n    }\n}\n"}}]);