"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76194],{76194:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiProgressModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [TuiProgressModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly arrayColors = [\n        '#39b54a',\n        '#ffd450',\n        '#ffd450',\n        '#fcc521',\n        '#fab619',\n        '#f8a34d',\n        '#e01f19',\n    ];\n}\n"}}]);