"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93232],{93232:n=>{n.exports="import {NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiDay} from '@taiga-ui/cdk';\nimport {TuiCalendarComponent} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent7\",\n    imports: [NgIf, TuiCalendarComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value: TuiDay | null = null;\n\n    protected onDayClick(day: TuiDay): void {\n        this.value = day;\n    }\n}\n"}}]);