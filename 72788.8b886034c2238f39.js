"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72788],{72788:(v,s,n)=>{n.r(s),n.d(s,{default:()=>T});var r=n(4594),c=n(66094),d=n(37399),l=n(69104),p=n(98808),E=n(39908),t=n(35548),I=n(59756),x=n(74922);function g(i,a){if(1&i){const m=t.EpF();t.TgZ(0,"button",5),t.NdJ("keydown.delete",function(){t.CHM(m);const e=t.oxw().$implicit,_=t.oxw();return t.KtG(_.remove(e))}),t._uU(1),t.TgZ(2,"tui-icon",6),t.NdJ("click.stop",function(){t.CHM(m);const e=t.oxw().$implicit,_=t.oxw();return t.KtG(_.remove(e))}),t.qZA()()}if(2&i){const m=t.oxw().$implicit;t.xp6(1),t.hij(" ",m," "),t.xp6(1),t.Udp("font-size",1,"rem")}}function C(i,a){1&i&&(t.ynx(0),t.YNc(1,g,3,3,"button",4),t.BQk())}const T=(()=>{var i;class a{constructor(){this.open=!1,this.activeItemIndex=0,this.items=Array.from({length:5},(o,e)=>`Item #${e}`)}add(){this.items=this.items.concat(`Item #${Date.now()}`)}remove(o){const e=this.items.indexOf(o);this.items=this.items.filter(_=>_!==o),e<=this.activeItemIndex&&(this.activeItemIndex=Math.max(this.activeItemIndex-1,0))}}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent5",features:[t.jDz],decls:8,vars:8,consts:[["size","m",3,"itemsLimit","activeItemIndex","activeItemIndexChange"],[4,"ngFor","ngForOf"],["tuiButton","","type","button",3,"click"],["decimal","never",1,"tui-space_top-4",3,"max","min","step","ngModel","ngModelChange"],["tuiTab","",3,"keydown.delete",4,"tuiItem"],["tuiTab","",3,"keydown.delete"],["icon","tuiIconClose",1,"tui-space_left-2",3,"click.stop"]],template:function(o,e){1&o&&(t.TgZ(0,"tui-tabs-with-more",0),t.NdJ("activeItemIndexChange",function(u){return e.activeItemIndex=u}),t.YNc(1,C,2,0,"ng-container",1),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return e.add()}),t._uU(5," Add one more\n"),t.qZA(),t.TgZ(6,"tui-input-number",3),t.NdJ("ngModelChange",function(u){return e.activeItemIndex=u}),t._uU(7," activeItemIndex\n"),t.qZA()),2&o&&(t.Q6J("itemsLimit",3)("activeItemIndex",e.activeItemIndex),t.xp6(1),t.Q6J("ngForOf",e.items),t.xp6(2),t.Oqu(e.items[e.activeItemIndex]),t.xp6(3),t.Q6J("max",4)("min",0)("step",1)("ngModel",e.activeItemIndex))},dependencies:[p.TuiTabsWithMoreComponent,d.TuiItemDirective,p.TuiTabDirective,r.sg,l.TuiIconComponent,l.TuiButtonDirective,E._Hh,I.q,x.g,c.u5,c.JJ,c.On],encapsulation:2,changeDetection:0}),a})()}}]);