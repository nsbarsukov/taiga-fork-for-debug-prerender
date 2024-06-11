"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13909],{13909:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';\nimport {TuiInputDateModule, TuiNamedDay} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [TuiInputDateModule, FormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected from: TuiDay | null = null;\n    protected to: TuiDay | null = null;\n    protected min = new TuiDay(2017, 9, 4);\n    protected max = TuiDay.currentLocal();\n    protected items = [\n        new TuiNamedDay(\n            TUI_LAST_DAY.append({year: -1}),\n            'Until today',\n            TuiDay.currentLocal(),\n        ),\n    ];\n}\n"}}]);