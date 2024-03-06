(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5657],{5657:e=>{e.exports="import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport type {TuiDay, TuiHandler} from '@taiga-ui/cdk';\nimport {TUI_DAY_TYPE_HANDLER} from '@taiga-ui/core';\n\nconst handler: TuiHandler<TuiDay, string> = (day: TuiDay) => {\n    if (day.day === 10) {\n        return 'holiday';\n    }\n\n    return day.isWeekend ? 'weekend' : 'weekday';\n};\n\n@Component({\n    selector: 'tui-calendar-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n    providers: [{provide: TUI_DAY_TYPE_HANDLER, useValue: handler}],\n})\nexport class TuiCalendarExample5 {}\n"}}]);