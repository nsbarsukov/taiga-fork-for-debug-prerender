"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[85474],{85474:e=>{e.exports="import {Component, Inject, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTiptapEditorService} from '@taiga-ui/addon-editor';\nimport {TuiHostedDropdownComponent} from '@taiga-ui/core';\n\n@Component({\n    selector: 'embed-tool',\n    templateUrl: './embed-tool.template.html',\n    styleUrls: ['./embed-tool.styles.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class ExampleTuiEmbedToolComponent {\n    @ViewChild('dropdown')\n    private readonly dropdown?: TuiHostedDropdownComponent;\n\n    embed =\n        '<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0' +\n        ' 0 30 30\" height=\"30px\" id=\"Embed\" version=\"1.1\" viewBox=\"0 0 30 30\" width=\"20px\" xml:space=\"preserve\"><polygon id=\"_x3E_\" points=\"30,13.917 19,7 19,10 27,15 19,20 19,23 30,15.959 \"/><polygon id=\"_x3C_\" points=\"0,13.917 11,7 11,10 3,15 11,20 11,23 0,15.958 \"/></svg>';\n\n    placeholder = 'https://my-embed.site.com/etc1235';\n    url = '';\n\n    constructor(\n        @Inject(TuiTiptapEditorService)\n        private readonly editor: TuiTiptapEditorService,\n    ) {}\n\n    embedSource(src: string): void {\n        if (src) {\n            this.editor.setIframe({src});\n\n            this.url = '';\n            this.dropdown?.close();\n        }\n    }\n}\n"}}]);