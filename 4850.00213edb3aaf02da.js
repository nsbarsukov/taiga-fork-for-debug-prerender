"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4850],{4850:n=>{n.exports="```ts\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n// ...\n\nexport class MyDialogComponent {\n  private readonly context: TuiDialogContext<boolean> = inject(POLYMORPHEUS_CONTEXT);\n\n  ok() {\n    this.context.completeWith(true);\n  }\n\n  cancel() {\n    this.context.completeWith(false);\n  }\n}\n```\n"}}]);