(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[75170],{75170:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTextfieldOptionsDirective} from '@taiga-ui/core';\nimport {TuiTooltipModule} from '@taiga-ui/experimental';\nimport {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiInputModule,\n        TuiTextfieldOptionsDirective,\n        TuiTextfieldControllerModule,\n        FormsModule,\n        TuiTooltipModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = '';\n}\n"}}]);