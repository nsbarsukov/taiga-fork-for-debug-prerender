(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87105],{95840:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiMonthRange} from '@taiga-ui/cdk';\nimport {TuiInputMonthRangeModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [ReactiveFormsModule, TuiInputMonthRangeModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiMonthRange | null>(null),\n    });\n}\n"}}]);