"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[99711],{99711:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent10\",\n    imports: [\n        TuiNotificationComponent,\n        TuiInputModule,\n        ReactiveFormsModule,\n        TuiLinkDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(''),\n    });\n}\n"}}]);