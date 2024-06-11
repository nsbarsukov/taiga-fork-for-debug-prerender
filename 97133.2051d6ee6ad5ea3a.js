"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97133],{97133:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime} from '@taiga-ui/cdk';\nimport {TuiUnfinishedValidatorDirective} from '@taiga-ui/kit';\nimport {TuiInputTimeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputTimeModule,\n        TuiTextfieldControllerModule,\n        TuiUnfinishedValidatorDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiTime(12, 30)),\n    });\n}\n"}}]);