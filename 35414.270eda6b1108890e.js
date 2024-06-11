"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35414],{35414:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport type {TuiSheetOptions} from '@taiga-ui/legacy';\nimport {TuiSheetModule} from '@taiga-ui/legacy';\n\nconst FRAMES = 166;\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [TuiButtonDirective, TuiSheetModule, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected open = false;\n\n    protected readonly options: Partial<TuiSheetOptions> = {\n        overlay: true,\n        stops: ['4.5rem'],\n    };\n\n    protected toggle(): void {\n        this.open = !this.open;\n    }\n\n    protected getTransform(y: number | null): string {\n        const frame = Math.round((y || 0) / 2);\n        const looped = frame % FRAMES;\n        const percent = (100 / FRAMES) * looped;\n\n        return `translate3d(0, -${percent}%, 0)`;\n    }\n}\n"}}]);