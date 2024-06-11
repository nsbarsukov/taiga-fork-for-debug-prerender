"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[42202],{42202:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiActiveZoneDirective} from '@taiga-ui/cdk';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport type {TuiInputComponent} from '@taiga-ui/legacy';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiActiveZoneDirective,\n        TuiInputModule,\n        ReactiveFormsModule,\n        TuiButtonDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly control = new FormControl('');\n\n    protected childActive = false;\n\n    protected parentActive = false;\n\n    protected items = [1, 2, 3];\n\n    protected onParentActiveZone(active: boolean): void {\n        this.parentActive = active;\n    }\n\n    protected onChildActiveZone(active: boolean): void {\n        this.childActive = active;\n    }\n\n    protected onClick({nativeFocusableElement}: TuiInputComponent): void {\n        if (nativeFocusableElement) {\n            nativeFocusableElement.focus();\n        }\n    }\n}\n"}}]);