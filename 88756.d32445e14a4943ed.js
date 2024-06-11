"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88756],{88756:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';\nimport {TuiSheetDialogDirective} from '@taiga-ui/addon-mobile';\nimport {TuiButtonDirective} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiButtonDirective, TuiSheetDialogDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected open = false;\n\n    protected readonly options: Partial<TuiSheetDialogOptions> = {\n        label: 'Alexander Inkin',\n        closeable: false,\n    };\n}\n"}}]);