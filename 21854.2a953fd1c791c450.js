"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[21854],{21854:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiMonth} from '@taiga-ui/cdk';\nimport {TuiInputMonthModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiInputMonthModule, ReactiveFormsModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly control = new FormControl<TuiMonth | null>(null);\n}\n"}}]);