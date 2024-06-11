"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26545],{26545:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDataListDirective} from '@taiga-ui/core';\nimport {TuiDataListWrapperComponent, tuiItemsHandlersProvider} from '@taiga-ui/kit';\nimport {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\ninterface Employee {\n    readonly dept: {\n        readonly id: number;\n        readonly title: string;\n    };\n    readonly id: number;\n    readonly name: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent10\",\n    imports: [\n        TuiSelectModule,\n        TuiTextfieldControllerModule,\n        ReactiveFormsModule,\n        TuiDataListWrapperComponent,\n        TuiDataListDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiItemsHandlersProvider({\n            stringify: (item: Employee) => `${item.name} (${item.dept.title})`,\n        }),\n    ],\n})\nexport default class ExampleComponent {\n    protected readonly testValue = new FormControl<Employee | null>(null);\n\n    protected readonly items: readonly Employee[] = [\n        {id: 42, name: 'John Cleese', dept: {id: 566, title: 'Financial'}},\n        {id: 237, name: 'Eric Idle', dept: {id: 560, title: 'Staffing'}},\n        {id: 666, name: 'Michael Palin', dept: {id: 566, title: 'Financial'}},\n        {id: 123, name: 'Terry Gilliam', dept: {id: 500, title: 'Administrative'}},\n        {id: 777, name: 'Terry Jones', dept: {id: 566, title: 'Financial'}},\n        {id: 999, name: 'Graham Chapman', dept: {id: 560, title: 'Staffing'}},\n    ];\n}\n"}}]);