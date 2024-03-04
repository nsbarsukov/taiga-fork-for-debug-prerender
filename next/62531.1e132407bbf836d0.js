(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[62531],{62531:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {type TuiSwipe} from '@taiga-ui/cdk';\nimport {Subject} from 'rxjs';\n\n@Component({\n    selector: 'tui-swipe-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSwipeExample2 {\n    protected readonly open$ = new Subject<boolean>();\n\n    protected toggle(open: boolean): void {\n        this.open$.next(open);\n    }\n\n    protected onSwipe(swipe: TuiSwipe): void {\n        console.info(swipe.direction);\n\n        if (swipe.direction === 'left') {\n            this.toggle(true);\n        }\n\n        if (swipe.direction === 'right') {\n            this.toggle(false);\n        }\n    }\n}\n"}}]);