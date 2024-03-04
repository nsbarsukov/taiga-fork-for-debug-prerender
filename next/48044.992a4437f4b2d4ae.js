(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[48044],{48044:e=>{e.exports="import {Directive, ElementRef, inject} from '@angular/core';\nimport {tuiAsPositionAccessor, type TuiPoint, TuiPositionAccessor} from '@taiga-ui/core';\n\n@Directive({\n    selector: '[topRight]',\n    providers: [tuiAsPositionAccessor(TopRightDirective)],\n})\nexport class TopRightDirective extends TuiPositionAccessor {\n    private readonly el: HTMLElement = inject(ElementRef).nativeElement;\n\n    public readonly type = 'dropdown';\n\n    public getPosition({height}: ClientRect): TuiPoint {\n        const {right, top} = this.el.getBoundingClientRect();\n\n        return [top - height, right];\n    }\n}\n"}}]);