(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[28198],{28198:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {takeUntilDestroyed} from '@angular/core/rxjs-interop';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport type {TuiPopover} from '@taiga-ui/cdk';\nimport {TuiButtonDirective, TuiDialogCloseService} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport type {PromptOptions} from './prompt-options';\n\n@Component({\n    standalone: true,\n    selector: 'prompt',\n    imports: [PolymorpheusModule, TuiButtonDirective],\n    templateUrl: './prompt.template.html',\n    styleUrls: ['./prompt.style.less'],\n    changeDetection,\n    providers: [TuiDialogCloseService],\n})\nexport class PromptComponent {\n    protected readonly context =\n        inject<TuiPopover<PromptOptions, boolean>>(POLYMORPHEUS_CONTEXT);\n\n    // Here you get options + content + id + observer\n    constructor() {\n        // Close on click outside/Escape button\n        inject(TuiDialogCloseService)\n            .pipe(takeUntilDestroyed())\n            .subscribe(() => this.context.$implicit.complete());\n    }\n\n    protected onClick(response: boolean): void {\n        this.context.completeWith(response);\n    }\n}\n"}}]);