"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35148],{35148:(x,E,a)=>{a.r(E),a.d(E,{default:()=>v});var i,m=a(84911),s=a(4594),r=a(66094),_=a(37399),l=a(69104),p=a(98808),g=a(39908),t=a(35548),f=a(57269),T=a(10188);function C(n,e){if(1&n&&(t.TgZ(0,"button",5),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.Q6J("value",o),t.xp6(1),t.hij(" ",o," ")}}function O(n,e){if(1&n&&(t.TgZ(0,"tui-data-list"),t.YNc(1,C,2,2,"button",4),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",o.filtered)}}function h(n,e){1&n&&(t.ynx(0),t.YNc(1,O,2,1,"tui-data-list",3),t.BQk())}const D=function(){return[]},M=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function d(n){return!/\d/.test(n)}class u{constructor(){this.search="",this.tagValidator=d,this.control=new r.NI([],function P(n){return({value:e})=>(e?e.filter(n):_.EMPTY_ARRAY).length>0?{tags:new _.TuiValidationError("Some tags are invalid")}:null}(d))}get filtered(){return this.filterBy(this.search,this.control.value??[])}filterBy(e,o){return M.filter(c=>(0,_.TUI_DEFAULT_MATCHER)(c,e)&&!o.includes(c))}}(i=u).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[t.jDz],decls:8,vars:12,consts:[[3,"formControl","tagValidator","tuiTextfieldLabelOutside","search","searchChange"],[4,"ngIf"],[3,"error","formControl"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"In this sample, tags with digits are invalid"),t.qZA(),t.TgZ(2,"tui-input-tag",0),t.NdJ("searchChange",function(A){return o.search=A}),t._uU(3," Try it "),t.YNc(4,h,2,0,"ng-container",1),t.qZA(),t._UZ(5,"tui-error",2),t.ALo(6,"async"),t.ALo(7,"tuiFieldError")),2&e&&(t.xp6(2),t.Q6J("formControl",o.control)("tagValidator",o.tagValidator)("tuiTextfieldLabelOutside",!0)("search",o.search),t.xp6(2),t.Q6J("ngIf",o.filtered.length),t.xp6(1),t.Q6J("error",t.lcZ(6,7,t.lcZ(7,9,t.DdM(11,D))))("formControl",o.control))},dependencies:[g.cB5,f.P,r.UX,r.JJ,r.oH,g.cnw,T.x,l.TuiDataListComponent,s.O5,s.sg,l.TuiOptionComponent,l.TuiDataListDirective,l.TuiErrorComponent,p.TuiFieldErrorPipe,s.Ov],encapsulation:2,changeDetection:0}),(0,m.gn)([_.tuiPure],u.prototype,"filterBy",null);const v=u}}]);