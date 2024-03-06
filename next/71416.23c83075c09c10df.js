(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[71416],{71416:e=>{e.exports="import type {OnInit} from '@angular/core';\nimport {ChangeDetectorRef, Component, inject, NgZone} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E, TuiDestroyService, tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk';\nimport {takeUntil, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-input-inline-example-3',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    encapsulation,\n    changeDetection,\n    providers: [TuiDestroyService],\n})\nexport class TuiInputInlineExample3 implements OnInit {\n    private readonly cd = inject(ChangeDetectorRef);\n    private readonly destroy$ = inject(TuiDestroyService, {self: true});\n    private readonly zone = inject(NgZone);\n    protected readonly isE2E = inject(TUI_IS_E2E);\n\n    protected count = '0';\n\n    public ngOnInit(): void {\n        if (this.isE2E) {\n            return;\n        }\n\n        timer(0, 3000)\n            .pipe(\n                tuiZoneOptimized(this.zone),\n                tuiWatch(this.cd),\n                takeUntil(this.destroy$),\n            )\n            .subscribe(value => {\n                this.count = String(value);\n            });\n    }\n}\n"}}]);