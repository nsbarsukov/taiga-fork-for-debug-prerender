(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[24628],{24628:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDataListComponent,\n    TuiHostedDropdownModule,\n    TuiLinkDirective,\n    TuiOptGroupDirective,\n    TuiOptionComponent,\n    TuiSvgComponent,\n} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [\n        TuiHostedDropdownModule,\n        TuiSvgComponent,\n        TuiLinkDirective,\n        TuiDataListComponent,\n        TuiOptGroupDirective,\n        NgForOf,\n        TuiOptionComponent,\n        NgIf,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected open = false;\n\n    protected readonly items = [\n        ['By interest', 'By genre', 'By release year', 'By subject'],\n        ['Ascending', 'Descending'],\n    ];\n\n    protected primary = 'By genre';\n\n    protected ascending = false;\n\n    protected onClick(item: string): void {\n        if (this.items[0].includes(item)) {\n            this.primary = item;\n\n            return;\n        }\n\n        this.ascending = item === this.items[1][0];\n    }\n\n    protected itemIsActive(item: string): boolean {\n        return (\n            item === this.primary ||\n            (this.ascending && item === this.items[1][0]) ||\n            (!this.ascending && item === this.items[1][1])\n        );\n    }\n}\n"}}]);