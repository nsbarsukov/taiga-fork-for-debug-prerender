"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[67743],{67743:n=>{n.exports="```ts\nimport {TuiAlertOptions} from '@taiga-ui/core';\nimport {TuiPopover} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n//...\n\nexport class NotificationExampleComponent {\n  private readonly context: TuiPopover<TuiAlertOptions<boolean>, boolean> = inject(POLYMORPHEUS_CONTEXT);\n\n  ok() {\n    this.context.completeWith(true);\n  }\n\n  cancel() {\n    this.context.completeWith(false);\n  }\n}\n```\n"}}]);