"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88449],{88449:e=>{e.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLegendItemComponent, TuiRingChartComponent} from '@taiga-ui/addon-charts';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiHoveredDirective, tuiSum} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiRingChartComponent,\n        TuiAmountPipe,\n        AsyncPipe,\n        TuiLegendItemComponent,\n        NgForOf,\n        TuiHoveredDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected activeItemIndex = NaN;\n\n    protected readonly value = [13769, 12367, 10172, 3018, 2592];\n    protected readonly sum = tuiSum(...this.value);\n    protected readonly labels = ['Food', 'Cafe', 'OSS', 'Taxi', 'Other'];\n\n    protected isItemActive(index: number): boolean {\n        return this.activeItemIndex === index;\n    }\n\n    protected onHover(index: number, hovered: boolean): void {\n        this.activeItemIndex = hovered ? index : 0;\n    }\n\n    protected getColor(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n}\n"}}]);