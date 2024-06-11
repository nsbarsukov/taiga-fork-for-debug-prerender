"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87859],{87859:e=>{e.exports="import {\n    CdkFixedSizeVirtualScroll,\n    CdkVirtualForOf,\n    CdkVirtualScrollViewport,\n} from '@angular/cdk/scrolling';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiScrollableDirective, TuiScrollbarComponent} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        TuiScrollbarComponent,\n        TuiScrollableDirective,\n        CdkVirtualScrollViewport,\n        CdkFixedSizeVirtualScroll,\n        CdkVirtualForOf,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);\n\n    protected add(): void {\n        this.items = [...this.items, `Item #${this.items.length}`];\n    }\n}\n"}}]);