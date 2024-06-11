"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14933],{14933:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiTime} from '@taiga-ui/cdk';\nimport {tuiCreateTimePeriods} from '@taiga-ui/kit';\nimport {TuiInputTimeModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [ReactiveFormsModule, TuiInputTimeModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiTime | null>(null),\n    });\n\n    protected items1 = tuiCreateTimePeriods();\n    protected items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);\n}\n"}}]);