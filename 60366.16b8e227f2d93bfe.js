(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60366],{60366:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLabelDirective, TuiSurfaceDirective} from '@taiga-ui/core';\nimport {TuiCheckboxComponent} from '@taiga-ui/kit';\nimport {TuiCardLargeDirective} from '@taiga-ui/layout';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    selector: 'tui-variables-example-1',\n    imports: [\n        FormsModule,\n        TuiInputModule,\n        TuiLabelDirective,\n        TuiCheckboxComponent,\n        TuiCardLargeDirective,\n        TuiSurfaceDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiVariablesExample1 {\n    protected value = '';\n    protected checkbox = true;\n}\n"}}]);