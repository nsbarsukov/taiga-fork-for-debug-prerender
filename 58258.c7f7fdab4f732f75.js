"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58258],{58258:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiNumberFormatDirective} from '@taiga-ui/core';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [ReactiveFormsModule, TuiInputNumberModule, TuiNumberFormatDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(Math.PI),\n    });\n}\n"}}]);