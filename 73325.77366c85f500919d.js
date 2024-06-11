"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[73325],{73325:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButtonDirective, TuiTitleDirective} from '@taiga-ui/core';\nimport {TuiTooltipModule} from '@taiga-ui/experimental';\nimport {\n    TuiAvatarComponent,\n    TuiBadgeDirective,\n    TuiBadgeNotificationComponent,\n    TuiSensitiveDirective,\n} from '@taiga-ui/kit';\nimport {TuiHeaderDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiBadgeNotificationComponent,\n        TuiHeaderDirective,\n        TuiTitleDirective,\n        TuiButtonDirective,\n        TuiTooltipModule,\n        TuiAvatarComponent,\n        TuiSensitiveDirective,\n        TuiBadgeDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {}\n"}}]);