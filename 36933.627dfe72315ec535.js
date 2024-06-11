"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36933],{36933:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPx} from '@taiga-ui/cdk';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [ReactiveFormsModule, TuiInputNumberModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    protected get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return tuiPx(value ?? 0);\n    }\n}\n"}}]);