"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3418],{3418:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAxesComponent, TuiLineChartComponent} from '@taiga-ui/addon-charts';\nimport type {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiAxesComponent, TuiLineChartComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly value: readonly TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n        [200, 150],\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n}\n"}}]);