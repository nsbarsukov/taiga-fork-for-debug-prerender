(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19707],{19707:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiTime} from '@taiga-ui/cdk';\nimport {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-time-example-5',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            mode: 'HH:MM',\n            maxValues: {HH: 11, MM: 59, SS: 59, MS: 999},\n        }),\n    ],\n})\nexport class TuiInputTimeExample5 {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiTime | null>(null),\n        isPm: new FormControl(false),\n    });\n\n    protected get postfix(): string {\n        return this.testForm.value?.isPm ? 'PM' : 'AM';\n    }\n}\n"}}]);