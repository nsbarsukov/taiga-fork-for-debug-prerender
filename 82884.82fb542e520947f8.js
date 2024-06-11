(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82884],{82884:n=>{n.exports="import {NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {RouterLink} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiItemDirective} from '@taiga-ui/cdk';\nimport {TuiLinkDirective} from '@taiga-ui/core';\nimport {TuiBreadcrumbsComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        NgFor,\n        RouterLink,\n        TuiBreadcrumbsComponent,\n        TuiLinkDirective,\n        TuiItemDirective,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected items = [\n        {\n            caption: 'Selects',\n            routerLink: '/components/select',\n        },\n        {\n            caption: 'Multi',\n            routerLink: '/components/multi-select',\n        },\n        {\n            caption: 'With tags',\n            routerLink: '/components/multi-select',\n        },\n        {\n            caption: 'Current',\n            routerLink: '/navigation/breadcrumbs',\n            routerLinkActiveOptions: {exact: true},\n        },\n    ];\n}\n"}}]);