"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[19387],{19387:n=>{n.exports="import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';\nimport {TuiDialog} from '@taiga-ui/cdk';\nimport {TuiPdfViewerOptions} from '@taiga-ui/kit';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\nimport type {Buttons} from './index';\n\n@Component({\n    selector: 'tui-actions-content',\n    template: `\n        <button\n            *ngFor=\"let button of context.data\"\n            tuiButton\n            size=\"s\"\n            shape=\"rounded\"\n            class=\"tui-space_left-3\"\n            (click)=\"button.onClick(context)\"\n        >\n            {{ button.text }}\n        </button>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ActionsContentComponent {\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        readonly context: TuiDialog<TuiPdfViewerOptions<Buttons>, string>,\n    ) {}\n}\n"}}]);