(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25011],{25011:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {TuiTextfieldControllerModule} from '@taiga-ui/core';\nimport {TuiInputDateModule, tuiInputDateOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [TuiInputDateModule, ReactiveFormsModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [tuiInputDateOptionsProvider({nativePicker: true})],\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiDay(2017, 0, 15)),\n    });\n}\n"}}]);