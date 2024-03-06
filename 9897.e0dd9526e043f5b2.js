(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9897],{9897:n=>{n.exports="import {Component, inject, ViewChild} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiSwipeDirection} from '@taiga-ui/cdk';\nimport {TUI_DEFAULT_MATCHER, TUI_WINDOW_SIZE, tuiControlValue} from '@taiga-ui/cdk';\nimport {TuiInputComponent} from '@taiga-ui/kit';\nimport {map} from 'rxjs';\n\nconst USERS = [\n    'John Doe',\n    'Jane Doe',\n    'John Smith',\n    'Jane Smith',\n    'John Johnson',\n    'Jane Johnson',\n    'John Williams',\n    'Jane Williams',\n    'John Brown',\n    'Jane Brown',\n    'John Davis',\n    'Jane Davis',\n    'John Miller',\n    'Jane Miller',\n    'John Wilson',\n    'Jane Wilson',\n];\n\n@Component({\n    selector: 'tui-sheet-dialog-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSheetDialogExample4 {\n    @ViewChild(TuiInputComponent)\n    private readonly input?: TuiInputComponent;\n\n    private readonly size$ = inject(TUI_WINDOW_SIZE);\n\n    protected open = false;\n\n    protected readonly offset = 16;\n\n    protected readonly search = new FormControl('');\n\n    protected readonly users$ = tuiControlValue<string>(this.search).pipe(\n        map(search => USERS.filter(user => TUI_DEFAULT_MATCHER(user, search))),\n    );\n\n    protected readonly height$ = this.size$.pipe(\n        map(({height}) => `calc(${height - this.offset}px - 14rem`),\n    );\n\n    protected toggle(open: boolean): void {\n        this.open = open;\n\n        if (open) {\n            this.search.setValue('');\n        }\n    }\n\n    protected onSwipe(direction: TuiSwipeDirection): void {\n        if (direction === 'top') {\n            this.scroll();\n        }\n    }\n\n    protected onFocus(): void {\n        this.scroll();\n        this.input?.nativeFocusableElement?.focus();\n    }\n\n    private scroll(): void {\n        const input = this.input?.nativeFocusableElement;\n        const container = input?.closest('tui-sheet-dialog');\n\n        if (!container) {\n            return;\n        }\n\n        container.scrollTop = container.clientHeight;\n    }\n}\n"}}]);