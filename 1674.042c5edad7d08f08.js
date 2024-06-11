"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1674],{1674:n=>{n.exports="```ts\nimport {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputTimeModule} from '@taiga-ui/legacy';\n\n// ...\n\n@Component({\n  standalone: true,\n  imports: [\n    // ...\n    FormsModule,\n    ReactiveFormsModule,\n    TuiInputTimeModule,\n  ],\n  providers: [\n    {\n      provide: TUI_INPUT_TIME_OPTIONS,\n      useValue: {\n        icon: 'tuiIconCheckCircleLarge',\n        mode: 'HH:MM:SS',\n        itemSize: 's',\n      },\n    },\n  ],\n})\nexport class MyComponent {\n  testForm = new FormGroup({\n    testValue: new FormControl(new TuiTime(12, 30)),\n  });\n}\n```\n"}}]);