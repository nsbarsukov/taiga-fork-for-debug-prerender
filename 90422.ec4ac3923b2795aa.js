"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90422],{90422:n=>{n.exports="import {NgTemplateOutlet} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {TuiSvgComponent} from '@taiga-ui/core';\nimport {TuiTreeItemContentComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [TuiSvgComponent, NgTemplateOutlet],\n    template: `\n        <tui-svg\n            class=\"tui-space_right-2\"\n            [src]=\"icon\"\n        ></tui-svg>\n        <ng-container [ngTemplateOutlet]=\"context.template\"></ng-container>\n    `,\n    styleUrls: ['content.less'],\n    host: {\n        '(click)': 'onClick()',\n    },\n})\nexport class FoldersComponent extends TuiTreeItemContentComponent {\n    protected get icon(): string {\n        return this.isExpandable ? 'tuiIconFolderLarge' : 'tuiIconFileLarge';\n    }\n}\n"}}]);