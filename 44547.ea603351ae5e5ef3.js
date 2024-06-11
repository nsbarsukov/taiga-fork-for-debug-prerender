"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44547],{44547:n=>{n.exports="import {Component, ElementRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiElementDirective} from '@taiga-ui/cdk';\nimport {TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiAvatarComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [TuiAvatarComponent, TuiElementDirective, TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected isLink(component: unknown): boolean {\n        return component instanceof TuiAvatarComponent;\n    }\n\n    protected isElement(element: unknown): boolean {\n        return element instanceof ElementRef;\n    }\n}\n"}}]);