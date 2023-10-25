(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[49513],{49513:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTypedMapper} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-mapper-example2`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMapperExample2 {\n    numbers = [1, 2, 3, 4, 5] as const;\n\n    readonly mapper: TuiTypedMapper<[readonly number[], number], number[]> = (\n        numbers,\n        multiplier,\n    ) => numbers.map(number => number * multiplier);\n}\n"}}]);