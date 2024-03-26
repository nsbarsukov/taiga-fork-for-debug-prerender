(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40450],{40450:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiPureModule:()=>J});var o,c,i=n(76733),u=n(72133),a=n(42932),s=n(87253),r=n(64064),p=n(1882),l=n(20755),d=n(36877),h=n(43894),f=n(17894),g=n(97967),m=n(84911),Z=n(25373),x=n(13117),b=n(93815),T=n(47880);function w(t,e){if(1&t&&(l.TgZ(0,"div",1),l._uU(1),l.ALo(2,"json"),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.hij(" Result: ",l.lcZ(2,1,t.calculate(t.counter,t.text)),"\n")}}class _{constructor(){this.text="",this.show=!1,this.counter={count:0}}calculate(t,e){return t.count++,{text:e}}}function A(t,e){if(1&t&&(l.TgZ(0,"div",2),l._uU(1),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.hij(" fibonacci(42) = ",t.fibonacci42,"\n")}}(o=_).ɵfac=function(t){return new(t||o)},o.ɵcmp=l.Xpm({type:o,selectors:[["example-tui-pure-function"]],decls:7,vars:3,consts:[[3,"ngModel","ngModelChange"],[1,"tui-space_top-2"],["class","tui-space_top-2",4,"ngIf"],["tuiButton","","type","button",1,"tui-space_top-2",3,"click"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-input",0),l.NdJ("ngModelChange",(function(t){return e.text=t})),l._uU(1,"Type a text to start computing"),l.qZA(),l.TgZ(2,"div",1),l._uU(3),l.qZA(),l.YNc(4,w,3,3,"div",2),l.TgZ(5,"button",3),l.NdJ("click",(function(){return e.show=!e.show})),l._uU(6," Show/hide\n"),l.qZA()),2&t&&(l.Q6J("ngModel",e.text),l.xp6(3),l.hij("Called times: ",e.counter.count,""),l.xp6(1),l.Q6J("ngIf",e.show))},dependencies:[i.O5,u.JJ,u.On,x.K,b.w,T.v,i.Ts],encapsulation:2,changeDetection:0}),(0,m.gn)([Z.tuiPure],_.prototype,"calculate",null);class q{constructor(){this.show=!1}get fibonacci42(){return this.fibonacci(42)}fibonacci(t){return t<=1?t:this.fibonacci(t-1)+this.fibonacci(t-2)}}function v(t,e){if(1&t&&(l.TgZ(0,"div",3),l._uU(1,"Decorator for memoization of pure methods and getters"),l.qZA(),l.TgZ(2,"p"),l._uU(3," Decorator can help to cache result of methods or getters that can be computed once in the first call. The next calls to getter will just use computed static value. "),l.qZA(),l.TgZ(4,"p"),l._uU(5," If you use decorator with methods, it does not compute the result again if arguments did not change after the last call (concept similar to Angular pure pipes) "),l.qZA(),l.TgZ(6,"tui-doc-example",4),l._UZ(7,"example-tui-pure-getter"),l.qZA(),l.TgZ(8,"tui-doc-example",5),l._UZ(9,"example-tui-pure-function"),l.qZA()),2&t){const t=l.oxw();l.xp6(6),l.Q6J("content",t.example1),l.xp6(2),l.Q6J("content",t.example2)}}function U(t,e){if(1&t&&(l.TgZ(0,"ol",6)(1,"li")(2,"p"),l._uU(3," Add "),l.TgZ(4,"code"),l._uU(5,"@tuiPure"),l.qZA(),l._uU(6," decorator for your method or getter: "),l.qZA(),l._UZ(7,"tui-doc-code",7),l.qZA()()),2&t){const t=l.oxw();l.xp6(7),l.Q6J("code",t.exampleDecorator)}}(c=q).ɵfac=function(t){return new(t||c)},c.ɵcmp=l.Xpm({type:c,selectors:[["example-tui-pure-getter"]],decls:3,vars:1,consts:[["class","tui-space_bottom-2",4,"ngIf"],["tuiButton","","type","button",3,"click"],[1,"tui-space_bottom-2"]],template:function(t,e){1&t&&(l.YNc(0,A,2,1,"div",0),l.TgZ(1,"button",1),l.NdJ("click",(function(){return e.show=!e.show})),l._uU(2," Show/hide\n"),l.qZA()),2&t&&l.Q6J("ngIf",e.show)},dependencies:[i.O5,T.v],encapsulation:2,changeDetection:0}),(0,m.gn)([Z.tuiPure],q.prototype,"fibonacci42",null);let y=(()=>{var t;class e{constructor(){this.exampleDecorator=n.e(26021).then(n.t.bind(n,26021,17)),this.example1={TypeScript:n.e(17007).then(n.t.bind(n,17007,17)),HTML:n.e(1778).then(n.t.bind(n,1778,17))},this.example2={TypeScript:n.e(74777).then(n.t.bind(n,74777,17)),HTML:n.e(51676).then(n.t.bind(n,51676,17))}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["example-tui-pure"]],decls:3,vars:0,consts:[["header","Pure","package","CDK","path","cdk/decorators/pure.ts"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-3"],["id","getter","heading","Getter",3,"content"],["id","function","heading","Function",3,"content"],[1,"b-demo-steps"],["filename","myClass.component.ts",3,"code"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,v,10,2,"ng-template",1),l.YNc(2,U,8,1,"ng-template",2),l.qZA())},dependencies:[d.c,h.q,f.n,g.f,_,q],encapsulation:2,changeDetection:0}),e})(),J=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=l.oAB({type:t}),t.ɵinj=l.cJS({imports:[i.ez,u.u5,p.TuiInputModule,r.TuiButtonModule,s.fV,a.Bz.forChild((0,s.Ve)(y))]}),e})()}}]);