(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{"kmX/":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_HINT_DEFAULT_OPTIONS, TUI_HINT_OPTIONS} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-tooltip-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_HINT_OPTIONS, // <-- You are looking for this token\n            useValue: {\n                ...TUI_HINT_DEFAULT_OPTIONS,\n                tooltipIcon: 'tuiIconCameraLarge',\n            },\n        },\n    ],\n})\nexport class TuiTooltipExample4 {}\n"}}]);