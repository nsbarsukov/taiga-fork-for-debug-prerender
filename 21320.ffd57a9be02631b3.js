"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[21320],{21320:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIconComponent} from '@taiga-ui/core';\nimport {\n    TuiAvatarComponent,\n    TuiBadgedContentComponent,\n    TuiBadgeDirective,\n    TuiBadgeNotificationComponent,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiBadgedContentComponent,\n        TuiBadgeNotificationComponent,\n        TuiAvatarComponent,\n        TuiIconComponent,\n        TuiBadgeDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {}\n"}}]);