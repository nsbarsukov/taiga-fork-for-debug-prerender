"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[37109],{37109:e=>{e.exports="import {JsonPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiKeySteps} from '@taiga-ui/kit';\nimport {TuiRangeComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [TuiRangeComponent, FormsModule, NgForOf, JsonPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];\n    protected readonly segments = this.ticksLabels.length - 1;\n\n    // 12.5% (of total distance) per step\n    protected readonly stepPercentage = 100 / (2 * this.segments);\n\n    protected value = [0, 100_000];\n\n    protected readonly keySteps: TuiKeySteps = [\n        // [percent, value]\n        [0, 0],\n        [25, 10_000],\n        [50, 100_000],\n        [75, 500_000],\n        [100, 1_000_000],\n    ];\n}\n"}}]);