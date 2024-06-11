"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78946],{78946:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInjectElement} from '@taiga-ui/cdk';\nimport {\n    tuiAsViewport,\n    TuiDropdownDirective,\n    TuiDropdownHoverDirective,\n    TuiRectAccessor,\n} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    selector: 'tui-viewport-example-1',\n    imports: [TuiDropdownDirective, TuiDropdownHoverDirective],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [tuiAsViewport(TuiViewportExample1)],\n})\nexport class TuiViewportExample1 extends TuiRectAccessor {\n    private readonly el = tuiInjectElement();\n\n    public readonly type = 'viewport';\n\n    public getClientRect(): ClientRect {\n        return this.el.getBoundingClientRect();\n    }\n}\n"}}]);