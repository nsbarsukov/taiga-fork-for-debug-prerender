"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87138],{87138:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHighDpiDirective, TuiMediaDirective} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiMediaDirective, TuiHighDpiDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected currentTime = 0;\n    protected volume = 1;\n    protected paused = true;\n}\n"}}]);