"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51038],{51038:e=>{e.exports="import {AsyncPipe, isPlatformServer} from '@angular/common';\nimport {Component, inject, PLATFORM_ID} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E} from '@taiga-ui/cdk';\nimport {TuiProgressModule} from '@taiga-ui/kit';\nimport {map, of, repeat, share, takeWhile, timer} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [TuiProgressModule, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly max = 100;\n\n    protected readonly value$ =\n        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))\n            ? of(30)\n            : timer(300, 200).pipe(\n                  takeWhile(value => value <= this.max),\n                  share(),\n                  repeat(),\n              );\n\n    protected readonly color$ = this.value$.pipe(\n        map(value => {\n            if (value < 33) {\n                return 'red';\n            }\n\n            if (value < 66) {\n                return 'yellow';\n            }\n\n            return 'green';\n        }),\n    );\n}\n"}}]);