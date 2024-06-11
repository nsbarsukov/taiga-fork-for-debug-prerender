"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[15886],{15886:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSidebarDirective} from '@taiga-ui/addon-mobile';\nimport {TuiActiveZoneDirective} from '@taiga-ui/cdk';\nimport {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';\nimport {TuiAccordion} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiButtonDirective,\n        TuiActiveZoneDirective,\n        TuiSidebarDirective,\n        TuiAccordion,\n        NgForOf,\n        TuiLinkDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected open = false;\n\n    protected readonly webApis = [\n        'Common',\n        'Audio',\n        'Canvas',\n        'Geolocation',\n        'MIDI',\n        'Workers',\n    ];\n\n    protected readonly taigaFamilyProducts = [\n        'Taiga-UI',\n        'ng-event-plugins',\n        'ng-polymorpheus',\n        'ng-dompurify',\n    ];\n\n    protected toggle(open: boolean): void {\n        this.open = open;\n    }\n}\n"}}]);