(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8289],{8289:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiTableFiltersModule:()=>S});var i=n(88692),l=n(69900),a=n(91795),o=n(64500),c=n(29297),u=n(75526),r=n(498),d=n(64537),m=n(83074),s=n(43560),p=n(93525),g=n(38868),b=n(16753),f=n(13735),T=n(82535),h=n(19582),Z=n(57681),x=n(222),A=n(96408),w=n(48598),M=n(84190),q=n(62818),y=n(76215),_=n(98777),J=n(92338),U=n(59544),F=n(44910);function N(e,t){if(1&e&&(d.TgZ(0,"td",12),d._uU(1),d.qZA()),2&e){const e=d.oxw().$implicit;d.xp6(1),d.hij(" ",e.name," ")}}function k(e,t){if(1&e&&(d.TgZ(0,"td",12),d._uU(1),d.ALo(2,"tuiFormatNumber"),d.qZA()),2&e){const e=d.oxw().$implicit;d.xp6(1),d.hij(" ",d.lcZ(2,1,e.balance)," ")}}function v(e,t){1&e&&(d.TgZ(0,"tr",10),d.YNc(1,N,2,1,"td",11),d.YNc(2,k,3,3,"td",11),d.qZA()),2&e&&(d.xp6(1),d.Q6J("tuiCell","name"),d.xp6(1),d.Q6J("tuiCell","balance"))}const C=function(){return{standalone:!0}};let Q=(()=>{var e;class t{constructor(){this.form=new l.cw({balance:new l.NI(0)}),this.data=[{name:"Alex Inkin",balance:1323525},{name:"Roman Sedov",balance:523242},{name:"Vladimir Potekhin",balance:645465},{name:"Nikita Barsukov",balance:468468},{name:"Maxim Ivanov",balance:498654}],this.columns=Object.keys(this.data[0]),this.filter=(e,t)=>e>=t}onToggle(e){e?this.form.enable():this.form.disable()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-table-filters-example-1"]],decls:18,vars:11,consts:[["tuiTableFilters",""],[3,"formGroup"],["formControlName","balance","tuiTableFilter","balance",3,"tuiGenericFilter"],[1,"toggle"],[3,"ngModel","ngModelOptions","ngModelChange"],["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh",""],["tuiTbody",""],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""]],template:function(e,t){1&e&&(d.ynx(0,0),d.TgZ(1,"form",1)(2,"tui-input-number",2),d._uU(3," Minimal balance "),d.qZA(),d.TgZ(4,"label",3)(5,"tui-toggle",4),d.NdJ("ngModelChange",(function(e){return t.onToggle(e)})),d.qZA(),d._uU(6," Enable filtering "),d.qZA()(),d.TgZ(7,"table",5)(8,"thead")(9,"tr",6)(10,"th",7),d._uU(11,"Name"),d.qZA(),d.TgZ(12,"th",7),d._uU(13,"Balance"),d.qZA()()(),d.TgZ(14,"tbody",8),d.YNc(15,v,3,2,"tr",9),d.ALo(16,"async"),d.ALo(17,"tuiTableFilters"),d.qZA()(),d.BQk()),2&e&&(d.xp6(1),d.Q6J("formGroup",t.form),d.xp6(1),d.Q6J("tuiGenericFilter",t.filter),d.xp6(3),d.Q6J("ngModel",t.form.enabled)("ngModelOptions",d.DdM(10,C)),d.xp6(2),d.Q6J("columns",t.columns),d.xp6(8),d.Q6J("ngForOf",d.lcZ(16,6,d.lcZ(17,8,t.data))))},dependencies:[i.sg,l._Y,l.JJ,l.JL,l.On,l.sg,l.u,b.q,f.g,T.p,h.c,Z.j,x.E,A.W,w.K,M.f,q.B,y.w,_.X,J.C,i.Ov,U.m,F.h],styles:[".toggle[_ngcontent-%COMP%]{display:flex;align-items:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;gap:1rem;margin:1rem 0}.table[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})();function O(e,t){if(1&e&&(d.TgZ(0,"p"),d._uU(1,"This module allows you to filter table data in a flexible way."),d.qZA(),d.TgZ(2,"tui-doc-example",3),d._UZ(3,"tui-table-filters-example-1"),d.qZA()),2&e){const e=d.oxw();d.xp6(2),d.Q6J("content",e.example1)}}function B(e,t){if(1&e&&(d.TgZ(0,"ol",4)(1,"li")(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiTableFiltersModule"),d.qZA(),d._uU(6," into a module where you want to filter data for your table "),d.qZA(),d._UZ(7,"tui-doc-code",5),d.qZA(),d.TgZ(8,"li")(9,"p"),d._uU(10,"Add directives and pipe to the template:"),d.qZA(),d._UZ(11,"tui-doc-code",6),d.qZA()()),2&e){const e=d.oxw();d.xp6(7),d.Q6J("code",e.exampleModule),d.xp6(4),d.Q6J("code",e.exampleHtml)}}let L=(()=>{var e;class t{constructor(){this.example1={TypeScript:n.e(31739).then(n.t.bind(n,31739,17)),HTML:n.e(98907).then(n.t.bind(n,98907,17)),LESS:n.e(78318).then(n.t.bind(n,78318,17))},this.exampleModule=n.e(13837).then(n.t.bind(n,13837,17)),this.exampleHtml=n.e(24361).then(n.t.bind(n,24361,17))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["example-table-filters"]],decls:3,vars:0,consts:[["header","TableFilters","package","ADDON-TABLE","type","components"],["pageTab",""],["pageTab","Setup"],["id","basic","heading","Basic",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,O,4,1,"ng-template",1),d.YNc(2,B,12,2,"ng-template",2),d.qZA())},dependencies:[m.c,s.q,p.n,g.f,Q],encapsulation:2,changeDetection:0}),t})(),S=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[i.ez,l.u5,l.UX,u.TuiFormatNumberPipeModule,r.TuiInputNumberModule,r.TuiToggleModule,c.TuiTableModule,c.TuiTableFiltersModule,o.fV,a.Bz.forChild((0,o.Ve)(L))]}),t})()}}]);