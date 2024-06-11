"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23333],{23333:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core';\nimport type {TuiLanguage} from '@taiga-ui/i18n';\nimport {TUI_LANGUAGE} from '@taiga-ui/i18n';\nimport {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\nimport type {BehaviorSubject, Observable} from 'rxjs';\nimport {map, switchMap} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent7\",\n    imports: [TuiInputNumberModule, TuiTextfieldControllerModule, FormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            deps: [TUI_LANGUAGE],\n            useFactory: (lang: BehaviorSubject<Observable<TuiLanguage>>) =>\n                lang.pipe(\n                    switchMap(lang => lang),\n                    map(({name}) => ({\n                        ...TUI_DEFAULT_NUMBER_FORMAT,\n                        thousandSeparator: name === 'english' ? ',' : ' ',\n                        decimalSeparator: name === 'english' ? '.' : ',',\n                    })),\n                ),\n        },\n    ],\n})\nexport default class ExampleComponent {\n    protected value = 1234.56;\n}\n"}}]);