"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78398],{78398:n=>{n.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTabBar} from '@taiga-ui/addon-mobile';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {map, startWith, Subject, switchMap, timer} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [TuiButtonDirective, TuiTabBar, AsyncPipe, NgForOf],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly load$ = new Subject<void>();\n\n    protected readonly items$ = this.load$.pipe(\n        startWith(null),\n        switchMap(() =>\n            timer(3000).pipe(\n                map(() => [\n                    {\n                        text: 'Favorites',\n                        icon: 'tuiIconHeartLarge',\n                    },\n                    {\n                        text: 'Calls',\n                        icon: 'tuiIconPhoneLarge',\n                    },\n                    {\n                        text: 'Profile',\n                        icon: 'tuiIconUserLarge',\n                    },\n                    {\n                        text: 'Settings and configuration',\n                        icon: 'tuiIconSettingsLarge',\n                    },\n                ]),\n                startWith([]),\n            ),\n        ),\n    );\n}\n"}}]);