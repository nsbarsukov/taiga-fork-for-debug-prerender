"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60518],{60518:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIconComponent, TuiTitleDirective, TuiTooltipModule} from '@taiga-ui/core';\nimport {\n    TuiAvatarComponent,\n    TuiBlockDirective,\n    TuiCheckboxComponent,\n    TuiSwitchComponent,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        ReactiveFormsModule,\n        TuiAvatarComponent,\n        TuiTooltipModule,\n        TuiIconComponent,\n        TuiBlockDirective,\n        TuiCheckboxComponent,\n        TuiTitleDirective,\n        TuiSwitchComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n        testValue4: new FormControl(false),\n    });\n}\n"}}]);