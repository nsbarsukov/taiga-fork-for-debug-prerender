"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44374],{44374:e=>{e.exports="import {AsyncPipe, isPlatformBrowser} from '@angular/common';\nimport {Component, inject, Injectable, PLATFORM_ID} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFormatDatePipe, TuiFormatDateService} from '@taiga-ui/core';\nimport {formatDistance} from 'date-fns';\nimport type {Observable} from 'rxjs';\nimport {map, of, timer} from 'rxjs';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n    private readonly delay$ = isPlatformBrowser(inject(PLATFORM_ID))\n        ? timer(0, 1000)\n        : of(0);\n\n    public override format(timestamp: number): Observable<string> {\n        return this.delay$.pipe(map(() => formatDistance(timestamp, Date.now())));\n    }\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiFormatDatePipe, AsyncPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TuiFormatDateService,\n            useClass: FormatService,\n        },\n    ],\n})\nexport default class ExampleComponent {\n    protected readonly now = Date.now();\n}\n"}}]);