"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[54879],{34800:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TuiDropdownModule, TuiLinkDirective} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiSwitchComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiDropdownModule,\n        TuiSwitchComponent,\n        FormsModule,\n        TuiLinkDirective,\n        TuiAvatarComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected open = false;\n    protected avatarUrl = assets`/images/avatar.jpg`;\n}\n"}}]);