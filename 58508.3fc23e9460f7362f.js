"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58508],{58508:n=>{n.exports="import {AsyncPipe, isPlatformBrowser, NgIf} from '@angular/common';\nimport {Component, inject, PLATFORM_ID} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport type {TuiDurationOptions} from '@taiga-ui/core';\nimport {tuiFadeIn} from '@taiga-ui/core';\nimport {concatMap, delay, from, of, repeat, startWith} from 'rxjs';\n\nimport {AnimationState} from '../../state';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent3\",\n    imports: [NgIf, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    animations: [tuiFadeIn],\n})\nexport default class ExampleComponent {\n    protected speed = inject(AnimationState);\n\n    protected isShown$ = isPlatformBrowser(inject(PLATFORM_ID))\n        ? from([false, true]).pipe(\n              concatMap(val => of(val).pipe(delay(1.5 * this.speed.value))),\n              repeat(),\n              startWith(true),\n          )\n        : of(true);\n\n    @tuiPure\n    protected getAnimation(duration: number): TuiDurationOptions {\n        return {value: '', params: {duration}};\n    }\n}\n"}}]);