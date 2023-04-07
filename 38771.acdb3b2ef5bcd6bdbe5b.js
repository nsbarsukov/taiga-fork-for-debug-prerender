"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[38771],{38771:(Q,a,n)=>{n.r(a),n.d(a,{ExampleTuiLetModule:()=>J});var m=n(12057),s=n(33982),p=n(29851),d=n(68538),T=n(55908),t=n(74788),g=n(88331),x=n(37159),Z=n(57068),v=n(20945),L=n(39761),c=n(40939),u=n(4123);function h(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4," It can be used many times: "),t._UZ(5,"tui-badge",1),t.qZA(),t.TgZ(6,"p"),t._uU(7,"It subsribed once and async pipe unsubsribes it after component destroy"),t.qZA(),t.BQk()),2&e){const o=l.tuiLet;t.xp6(2),t.hij("Timer value: ",o,""),t.xp6(3),t.Q6J("value",o)}}let f=(()=>{class e{constructor(){this.timer$=(0,v.F)(1e3).pipe((0,L.O)(0))}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-let-example-1"]],decls:2,vars:3,consts:[[4,"tuiLet"],[3,"value"]],template:function(o,i){1&o&&(t.YNc(0,h,8,2,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("tuiLet",t.lcZ(1,1,i.timer$))},directives:[c.L,u.g],pipes:[m.Ov],encapsulation:2,changeDetection:0}),e})();var r=n(3497);function y(e,l){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4," That can be used many times: "),t._UZ(5,"tui-badge",1),t.qZA(),t.TgZ(6,"p"),t._uU(7,"And getter is called only once."),t.qZA(),t.qZA()),2&e){const o=l.tuiLet;t.xp6(2),t.hij("Calculated with getter value: ",o,""),t.xp6(3),t.Q6J("value",o)}}let A=(()=>{class e{constructor(o){this.alerts=o}get getter(){return this.alerts.open("Getter called").subscribe(),"\u{1f433}"}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.TuiAlertService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-let-example-2"]],decls:1,vars:1,consts:[[4,"tuiLet"],[3,"value"]],template:function(o,i){1&o&&t.YNc(0,y,8,2,"div",0),2&o&&t.Q6J("tuiLet",i.getter)},directives:[c.L,u.g],encapsulation:2,changeDetection:0}),e})();var E=n(76349);function U(e,l){if(1&e&&(t.TgZ(0,"p"),t._uU(1," Directive "),t.TgZ(2,"code"),t._uU(3,"tuiLet"),t.qZA(),t._uU(4," allows to reuse computed value in several places in template to avoid recalculations of getters or many async pipes "),t.qZA(),t.TgZ(5,"tui-doc-example",3),t._UZ(6,"tui-let-example-1"),t.qZA(),t.TgZ(7,"tui-doc-example",4),t._UZ(8,"tui-let-example-2"),t.qZA()),2&e){const o=t.oxw();t.xp6(5),t.Q6J("content",o.example1),t.xp6(2),t.Q6J("content",o.example2)}}function C(e,l){if(1&e&&(t.TgZ(0,"ol",5),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Import "),t.TgZ(4,"code"),t._uU(5,"TuiLetModule"),t.qZA(),t._uU(6," into a module where you want to use our component "),t.qZA(),t._UZ(7,"tui-doc-code",6),t.qZA(),t.TgZ(8,"li"),t.TgZ(9,"p"),t._uU(10,"Add to the template:"),t.qZA(),t._UZ(11,"tui-doc-code",7),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(7),t.Q6J("code",o.exampleModule),t.xp6(4),t.Q6J("code",o.exampleHtml)}}let M=(()=>{class e{constructor(){this.exampleModule=n.e(89065).then(n.t.bind(n,89065,17)),this.exampleHtml=n.e(10686).then(n.t.bind(n,10686,17)),this.example1={TypeScript:n.e(33542).then(n.t.bind(n,33542,17)),HTML:n.e(757).then(n.t.bind(n,757,17))},this.example2={TypeScript:n.e(43846).then(n.t.bind(n,43846,17)),HTML:n.e(38782).then(n.t.bind(n,38782,17))}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-tui-let"]],decls:3,vars:0,consts:[["header","Let","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","pipe","heading","With Pipe",3,"content"],["id","getter","heading","With getter",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(o,i){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,U,9,2,"ng-template",1),t.YNc(2,C,12,2,"ng-template",2),t.qZA())},directives:[g.q,x.n,Z.f,f,A,E.c],encapsulation:2,changeDetection:0}),e})(),J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,d.TuiLetModule,T.TuiBadgeModule,p.fV,s.Bz.forChild((0,p.Ve)(M))]]}),e})()}}]);