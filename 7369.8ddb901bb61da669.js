"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7369],{7369:n=>{n.exports="import {NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAutoColorPipe, TuiButtonDirective, TuiInitialsPipe} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiAvatarStackComponent} from '@taiga-ui/kit';\nimport {TuiBlockStatus} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        NgFor,\n        TuiBlockStatus,\n        TuiButtonDirective,\n        TuiAvatarComponent,\n        TuiAutoColorPipe,\n        TuiInitialsPipe,\n        TuiAvatarStackComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly users = [\n        'Alex Inkin',\n        'Vladimir Potekhin',\n        'Nikita Barsukov',\n        'Maxim Ivanov',\n    ];\n}\n"}}]);