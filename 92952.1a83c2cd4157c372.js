"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[92952],{92952:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent7\",\n    imports: [TuiInputTagModule, FormsModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = ['Use', 'space', 'button'];\n    protected customSeparator = /[\\s,]/; // Use space or comma to create new tag\n}\n"}}]);