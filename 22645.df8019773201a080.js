"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[22645],{11854:e=>{e.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport type {TemplateRef} from '@angular/core';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';\nimport {tuiClamp} from '@taiga-ui/cdk';\nimport {\n    TuiButtonDirective,\n    TuiDialogService,\n    TuiDropdownService,\n    TuiNumberFormatDirective,\n} from '@taiga-ui/core';\nimport {TuiAvatarComponent} from '@taiga-ui/kit';\nimport type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiNumberFormatDirective,\n        TuiAmountPipe,\n        AsyncPipe,\n        TuiAvatarComponent,\n        TuiElasticStickyDirective,\n        TuiButtonDirective,\n        NgIf,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly dropdowns = inject(TuiDropdownService);\n\n    protected filters = false;\n\n    protected scale = 1;\n\n    protected get transform(): string {\n        return `scale(${this.scale})`;\n    }\n\n    protected get width(): string {\n        return `calc((100% + 4rem) * ${1 / this.scale})`;\n    }\n\n    protected onElastic(value: number): void {\n        this.scale = tuiClamp(value, 0.5, 1);\n    }\n\n    protected onFilterClick(): void {\n        this.filters = true;\n        this.dialogs.open('Dialog with filters').subscribe({\n            complete: () => {\n                this.filters = false;\n            },\n        });\n    }\n\n    protected showDialog(\n        content: PolymorpheusContent,\n        button: TemplateRef<Record<string, unknown>>,\n    ): void {\n        const templateRef = this.dropdowns.addTemplate(button);\n\n        this.dialogs.open(content).subscribe({\n            complete: () => {\n                this.dropdowns.removeTemplate(templateRef);\n            },\n        });\n    }\n}\n"}}]);