(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14183],{14183:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAxesComponent, TuiLineChartComponent} from '@taiga-ui/addon-charts';\nimport type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';\nimport type {TuiPoint} from '@taiga-ui/core';\nimport {TuiHint} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [TuiAxesComponent, TuiLineChartComponent, TuiHint],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly value: TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n        [200, 150],\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n\n    protected readonly singleValue: TuiPoint[] = [[200, 150]];\n\n    protected readonly hint: TuiStringHandler<TuiContext<TuiPoint>> = ({$implicit}) =>\n        `Vertical: ${$implicit[1]}\\nHorizontal: ${$implicit[0]}`;\n}\n"}}]);