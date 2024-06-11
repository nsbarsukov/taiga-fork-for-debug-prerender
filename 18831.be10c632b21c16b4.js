"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18831],{18831:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiButtonDirective,\n    TuiDataListComponent,\n    TuiDropdownDirective,\n    TuiDropdownOpenDirective,\n    TuiDropdownOptionsDirective,\n    TuiDropdownPositionSidedDirective,\n    TuiOptGroupDirective,\n    TuiOptionComponent,\n} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiButtonDirective,\n        TuiDropdownOptionsDirective,\n        TuiDropdownDirective,\n        TuiDropdownPositionSidedDirective,\n        TuiDropdownOpenDirective,\n        TuiDataListComponent,\n        TuiOptGroupDirective,\n        NgForOf,\n        TuiOptionComponent,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];\n\n    protected open = false;\n\n    protected onClick(): void {\n        this.open = false;\n    }\n}\n"}}]);