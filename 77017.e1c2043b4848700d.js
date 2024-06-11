(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[77017],{77017:n=>{n.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_IOS_LOADER,\n    TUI_PULL_TO_REFRESH_COMPONENT,\n    TUI_PULL_TO_REFRESH_LOADED,\n    TuiPullToRefreshComponent,\n} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';\nimport {Subject} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiPullToRefreshComponent, TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: true,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: false,\n        },\n        {\n            provide: TUI_PULL_TO_REFRESH_COMPONENT,\n            useValue: TUI_IOS_LOADER,\n        },\n        {\n            provide: TUI_PULL_TO_REFRESH_LOADED,\n            useClass: Subject,\n        },\n    ],\n})\nexport default class ExampleComponent {\n    private readonly alerts = inject(TuiAlertService);\n    private readonly loaded$ = inject<Subject<void>>(TUI_PULL_TO_REFRESH_LOADED);\n\n    protected onPull(): void {\n        this.alerts.open('Loading...').subscribe();\n    }\n\n    protected finishLoading(): void {\n        this.loaded$.next();\n    }\n}\n"}}]);