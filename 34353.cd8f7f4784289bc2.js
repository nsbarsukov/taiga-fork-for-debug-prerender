(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[34353],{34353:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAppearanceDirective} from '@taiga-ui/core';\nimport {TuiTooltipModule, tuiTooltipOptionsProvider} from '@taiga-ui/experimental';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [TuiTooltipModule, TuiAppearanceDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiTooltipOptionsProvider({\n            icons: 'tuiIconInfo',\n        }),\n    ],\n})\nexport default class ExampleComponent {}\n"}}]);