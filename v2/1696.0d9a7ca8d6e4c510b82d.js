(window.webpackJsonp=window.webpackJsonp||[]).push([[1696],{tKEC:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'example-css-breakpoints-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class ExampleBreakpointsComponent1 {\n    breakpoints = [\n        'mobile-m',\n        'mobile-m-min',\n        'mobile-m-interval',\n        'tablet-lg',\n        'tablet-lg-min',\n        'tablet-lg-interval',\n        'desktop-s',\n        'desktop-s-min',\n        'desktop-s-interval',\n        'desktop-m-min',\n    ] as const;\n}\n"}}]);