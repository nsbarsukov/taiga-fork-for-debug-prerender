"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[28667],{28667:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiRepeatTimesDirective} from '@taiga-ui/cdk';\nimport {TuiTagModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiTagModule, TuiRepeatTimesDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected tag = 'Hello!';\n}\n"}}]);