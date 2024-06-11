"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88441],{88441:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime} from '@taiga-ui/cdk';\nimport {tuiCreateTimePeriods} from '@taiga-ui/kit';\nimport {\n    TuiInputTimeModule,\n    tuiInputTimeOptionsProvider,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [ReactiveFormsModule, TuiInputTimeModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            nativePicker: true,\n        }),\n    ],\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiTime(10, 30)),\n        testValue2: new FormControl(new TuiTime(10, 30, 0)),\n        testValue3: new FormControl(new TuiTime(14, 30)),\n        testValue4: new FormControl(new TuiTime(10, 30, 0)),\n    });\n\n    protected readonly items = tuiCreateTimePeriods(14, 16, [0, 30]);\n}\n"}}]);