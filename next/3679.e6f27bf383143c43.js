(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3679],{3679:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiTime} from '@taiga-ui/cdk';\nimport {tuiCreateTimePeriods} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-time-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputTimeExample2 {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiTime | null>(null),\n    });\n\n    protected items1 = tuiCreateTimePeriods();\n    protected items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);\n}\n"}}]);