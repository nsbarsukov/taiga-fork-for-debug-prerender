"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93699],{93699:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    TuiButtonDirective,\n    TuiHintDescribeDirective,\n    TuiHintDirective,\n    TuiHintOptionsDirective,\n    TuiTooltipModule,\n} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiButtonDirective,\n        TuiHintDirective,\n        TuiHintDescribeDirective,\n        TuiTooltipModule,\n        TuiInputModule,\n        TuiHintOptionsDirective,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = '';\n}\n"}}]);