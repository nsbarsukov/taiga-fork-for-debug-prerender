"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59818],{59818:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTagModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [TuiTagModule, NgForOf],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected tags: readonly string[] = [\n        'Taiga UI',\n        'is an open-source library',\n        'for awesome people',\n    ];\n\n    protected handleTagEdited(newCaption: string, currentIndex: number): void {\n        this.tags = this.tags\n            .map((caption, index) => (index === currentIndex ? newCaption : caption))\n            .filter(Boolean);\n    }\n}\n"}}]);