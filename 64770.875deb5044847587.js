"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64770],{64770:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLabelDirective} from '@taiga-ui/core';\nimport {TuiSensitiveDirective, TuiSwitchComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiSensitiveDirective, TuiLabelDirective, TuiSwitchComponent, FormsModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected sensitive = true;\n}\n"}}]);