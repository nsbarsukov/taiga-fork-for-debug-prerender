(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19353],{19353:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiPushService} from '@taiga-ui/kit';\nimport {switchMap, take} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly push = inject(TuiPushService);\n    protected readonly alert = inject(TuiAlertService);\n\n    protected onClick(): void {\n        this.push\n            .open('This is <strong>heavy</strong>!', {\n                heading: 'Great Scott!',\n                type: 'Quote',\n                icon: 'tuiIconVideoLarge',\n                buttons: ['Roads?', '1.21 Gigawatts!?!'],\n            })\n            .pipe(\n                take(1),\n                switchMap(button => this.alert.open(button)),\n            )\n            .subscribe();\n    }\n}\n"}}]);