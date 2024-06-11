(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58797],{58797:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiDataListWrapper,\n        TuiFilterByInputPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    protected readonly form = new FormGroup({\n        user: new FormControl(''),\n    });\n}\n"}}]);