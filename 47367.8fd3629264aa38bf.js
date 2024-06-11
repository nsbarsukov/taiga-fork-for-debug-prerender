"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[47367],{47367:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDataListDirective} from '@taiga-ui/core';\nimport {TuiDataListWrapperComponent} from '@taiga-ui/kit';\nimport {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\nimport type {Observable} from 'rxjs';\nimport {delay, of, startWith, Subject, switchMap} from 'rxjs';\n\nconst databaseMockData: readonly string[] = [\n    'John Cleese',\n    'Eric Idle',\n    'Michael Palin',\n    'Terry Gilliam',\n    'Terry Jones',\n    'Graham Chapman',\n];\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        TuiInputTagModule,\n        TuiTextfieldControllerModule,\n        FormsModule,\n        TuiDataListWrapperComponent,\n        TuiDataListDirective,\n        AsyncPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly search$ = new Subject<string>();\n\n    protected value = [];\n\n    protected readonly items$ = this.search$.pipe(\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<readonly string[] | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    protected onSearchChange(search: string): void {\n        this.search$.next(search);\n    }\n\n    /**\n     * Server request emulation\n     */\n    private serverRequest(search: string): Observable<readonly string[]> {\n        const result = databaseMockData.filter(item =>\n            item.toLowerCase().includes(search.toLowerCase()),\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n"}}]);