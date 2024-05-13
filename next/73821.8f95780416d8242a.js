(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[73821],{73821:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiRepeatTimesDirective} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiCheckboxComponent, TuiChipDirective} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [\n        TuiChipDirective,\n        TuiRepeatTimesDirective,\n        FormsModule,\n        TuiButtonDirective,\n        TuiCheckboxComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected readonly checked = [true, false, true];\n    protected readonly values = ['test', 'Some text', 'WOW!'];\n\n    protected onChip(index: number): void {\n        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();\n    }\n\n    protected onX(index: number): void {\n        this.alerts.open(`Removed chip ${index + 1}`, {status: 'error'}).subscribe();\n    }\n}\n"}}]);