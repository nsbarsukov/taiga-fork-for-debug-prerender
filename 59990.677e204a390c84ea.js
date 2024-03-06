(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[59990],{59990:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiMonth} from '@taiga-ui/cdk';\nimport {TuiMonthRange} from '@taiga-ui/cdk';\nimport type {TuiBooleanHandlerWithContext, TuiMonthContext} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-month-range-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputMonthRangeExample3 {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiMonthRange | null>(null),\n    });\n\n    protected readonly disabledItemHandler: TuiBooleanHandlerWithContext<\n        TuiMonth,\n        TuiMonthContext\n    > = (item: TuiMonth, context?: TuiMonthContext) =>\n        !!context &&\n        !!context.value &&\n        context.value instanceof TuiMonthRange &&\n        !!context.value.isSingleMonth &&\n        item.month < context.value.from.month + 2;\n}\n"}}]);