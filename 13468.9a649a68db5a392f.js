"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13468],{13468:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAutoFocusDirective} from '@taiga-ui/cdk';\nimport {\n    TuiButtonDirective,\n    TuiDataListComponent,\n    TuiDataListDirective,\n    TuiOptionComponent,\n    TuiSvgComponent,\n} from '@taiga-ui/core';\nimport {\n    TuiSelectModule,\n    TuiTextareaModule,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        ReactiveFormsModule,\n        TuiSelectModule,\n        TuiTextfieldControllerModule,\n        TuiDataListComponent,\n        TuiDataListDirective,\n        NgIf,\n        TuiOptionComponent,\n        TuiSvgComponent,\n        NgForOf,\n        TuiTextareaModule,\n        TuiAutoFocusDirective,\n        TuiButtonDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly items = [\n        'https://twitter.com/marsibarsi',\n        'https://twitter.com/waterplea',\n    ];\n\n    protected readonly testForm = new FormGroup({\n        email: new FormControl<string | null>(null),\n        signature: new FormControl(''),\n    });\n\n    protected signatureVisible = false;\n\n    protected toggle(): void {\n        this.signatureVisible = !this.signatureVisible;\n    }\n}\n"}}]);