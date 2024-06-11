"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45277],{45277:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButtonDirective, TuiLabelDirective} from '@taiga-ui/core';\nimport {\n    TuiBadgeDirective,\n    TuiSensitiveDirective,\n    TuiSwitchComponent,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiSensitiveDirective,\n        TuiButtonDirective,\n        TuiBadgeDirective,\n        TuiLabelDirective,\n        TuiSwitchComponent,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected sensitive = true;\n}\n"}}]);