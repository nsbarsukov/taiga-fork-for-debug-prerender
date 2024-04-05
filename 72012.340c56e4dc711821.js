(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72012],{72012:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiBreadcrumbsOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-breadcrumbs-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiBreadcrumbsOptionsProvider({\n            icon: 'tuiIconArrowRight',\n            size: 'l',\n        }),\n    ],\n})\nexport class TuiBreadcrumbsExample2 {\n    protected readonly items = [\n        {\n            caption: 'Open Source',\n            link: 'https://github.com',\n        },\n        {\n            caption: 'Angular',\n            link: 'https://github.com/topics/angular',\n        },\n        {\n            caption: 'Tinkoff',\n            link: 'https://github.com/tinkoff',\n        },\n        {\n            caption: 'Taiga UI',\n            link: 'https://github.com/taiga-family/taiga-ui',\n        },\n        {\n            caption: 'Components',\n            link: 'https://taiga-ui.dev',\n        },\n        {\n            caption: 'Breadcrumbs',\n            link: 'https://taiga-ui.dev/navigation/breadcrumbs',\n        },\n    ];\n\n    protected max = 4;\n}\n"}}]);