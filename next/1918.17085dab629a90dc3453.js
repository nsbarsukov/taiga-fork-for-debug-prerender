(window.webpackJsonp=window.webpackJsonp||[]).push([[1918],{HvmU:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {flatLength} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-miscellaneous-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample2 {\n    get flatted(): number {\n        return flatLength([\n            [1, 2],\n            [3, 4],\n            [5, 6],\n        ]);\n    }\n}\n"}}]);