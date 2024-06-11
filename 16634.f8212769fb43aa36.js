(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16634],{16634:e=>{e.exports="import {AsyncPipe, PercentPipe} from '@angular/common';\nimport {Component, HostListener} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_FALSE_HANDLER, tuiClamp} from '@taiga-ui/cdk';\nimport {TuiButtonDirective, TuiHint} from '@taiga-ui/core';\nimport {TuiSliderComponent, TuiSliderThumbLabelComponent} from '@taiga-ui/kit';\nimport {BehaviorSubject, distinctUntilChanged, map, of, switchMap, timer} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        TuiButtonDirective,\n        TuiSliderThumbLabelComponent,\n        TuiHint,\n        PercentPipe,\n        AsyncPipe,\n        TuiSliderComponent,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected min = 0.5;\n    protected max = 2;\n    protected value = 1;\n\n    protected readonly active$ = new BehaviorSubject(false);\n    protected readonly showHint$ = this.active$.pipe(\n        distinctUntilChanged(),\n        switchMap(active =>\n            active ? of(true) : timer(1000).pipe(map(TUI_FALSE_HANDLER)),\n        ),\n    );\n\n    @HostListener('pointerdown', ['true'])\n    @HostListener('document:pointerup', ['false'])\n    protected onKeydown(show: boolean): void {\n        this.active$.next(show);\n    }\n\n    protected change(step: number): void {\n        this.value = tuiClamp(this.value + step, this.min, this.max);\n    }\n}\n"}}]);