"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49525],{49525:n=>{n.exports="```ts\nconstructor(private readonly dialogs: TuiMobileDialogService) {}\n\n// ...\n\nthis.dialogs\n    .open(\n        'Text',\n        {\n            label: 'Heading',\n            actions: ['Button 1', 'Button 2'],\n            data: 'Some data'\n        },\n    )\n    .subscribe(index => {\n        // Index of clicked button\n        console.log(index);\n    });\n```\n"}}]);