(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93147],{93147:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDataListComponent,\n    TuiDataListDirective,\n    TuiOptGroupDirective,\n    TuiOptionComponent,\n} from '@taiga-ui/core';\nimport {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [\n        TuiMultiSelectModule,\n        TuiTextfieldControllerModule,\n        FormsModule,\n        TuiDataListComponent,\n        TuiDataListDirective,\n        NgForOf,\n        TuiOptionComponent,\n        TuiOptGroupDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly jedi: readonly string[] = [\n        'Luke Skywalker',\n        'Princess Leia',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    protected readonly sith: readonly string[] = ['Emperor', 'Darth Vader', 'Darth Maul'];\n\n    protected value: readonly string[] = [this.jedi[0]];\n}\n"}}]);