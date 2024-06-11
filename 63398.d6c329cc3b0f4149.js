"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63398],{63398:e=>{e.exports="import {Component} from '@angular/core';\nimport {RouterLink} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {DemoRoute} from '@demo/routes';\nimport {TuiItemDirective} from '@taiga-ui/cdk';\nimport {TuiButtonDirective, TuiDialogModule, TuiLinkDirective} from '@taiga-ui/core';\nimport {\n    TuiCarouselButtonsDirective,\n    TuiCarouselComponent,\n    TuiPaginationModule,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiButtonDirective,\n        TuiDialogModule,\n        TuiCarouselComponent,\n        TuiLinkDirective,\n        RouterLink,\n        TuiPaginationModule,\n        TuiCarouselButtonsDirective,\n        TuiItemDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly routes = DemoRoute;\n    protected open = false;\n\n    protected index = 0;\n\n    protected get background(): string {\n        switch (this.index) {\n            case 0:\n                return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';\n            case 1:\n                return 'url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)';\n            default:\n                return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';\n        }\n    }\n\n    protected onClick(): void {\n        this.index = 0;\n        this.open = true;\n    }\n\n    protected navigate(delta: number): void {\n        this.index = (this.index + delta) % 3;\n    }\n}\n"}}]);