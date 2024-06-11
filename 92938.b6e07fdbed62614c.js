"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[92938],{92938:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiInputRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiInputRangeModule, ReactiveFormsModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    styles: [\n        `\n            tui-input-range {\n                max-width: 30rem;\n            }\n        `,\n    ],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly min = 0;\n    protected readonly max = 20;\n    protected readonly sliderStep = 1;\n    protected readonly steps = (this.max - this.min) / this.sliderStep;\n    protected readonly quantum = 0.00001;\n\n    protected readonly control = new FormControl([3.14159, 15]);\n}\n"}}]);