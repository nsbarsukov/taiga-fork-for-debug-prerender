"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49237],{21778:(I,d,e)=>{e.d(d,{Kx:()=>g,ch:()=>c,I3:()=>N.I,yj:()=>N.y,dn:()=>F.dn,Cc:()=>F.Cc,Vl:()=>S,R9:()=>z,Wb:()=>j.W,yc:()=>J.y,Bl:()=>x.B,lk:()=>T,DZ:()=>E.D,eO:()=>M,YX:()=>P.Y,LU:()=>R.L,PQ:()=>B.P,gJ:()=>K.g,F5:()=>H,c4:()=>f.c,WT:()=>lt,m2:()=>G.m,yS:()=>Q.y,jY:()=>k.j,Kt:()=>Z.K,Ws:()=>G.W,EE:()=>Y.E,Nx:()=>W.N,fu:()=>$.f,AS:()=>O,Jz:()=>F.Jz,PT:()=>V});var n=e(4594),t=e(35548),i=e(97377),o=e(69104),_=e(98808),a=e(40970),l=e(37399);const g={icons:{hide:"tuiIconEye",show:"tuiIconEyeOff",drag:"tuiIconDrag"}},c=(0,l.tuiCreateToken)(g);function O(s){return(0,l.tuiProvideOptions)(c,s,g)}var C=e(34598),h=e(65332),D=e(16589);function b(s,v){if(1&s&&(t.ynx(0),t._uU(1),t.BQk()),2&s){const m=v.polymorpheusOutlet;t.xp6(1),t.hij(" ",m," ")}}const U=function(s,v){return{$implicit:s,index:v}};function y(s,v){if(1&s){const m=t.EpF();t.TgZ(0,"tui-tile")(1,"div",2)(2,"div",3),t._UZ(3,"tui-svg",4),t.YNc(4,b,2,1,"ng-container",5),t.qZA(),t.TgZ(5,"button",6),t.NdJ("click",function(){const A=t.CHM(m).$implicit,L=t.oxw();return t.KtG(L.toggle(A))})("keydown.arrowDown.prevent",function(){const A=t.CHM(m).index,L=t.oxw();return t.KtG(L.move(A,1))})("keydown.arrowUp.prevent",function(){const A=t.CHM(m).index,L=t.oxw();return t.KtG(L.move(A,-1))}),t._uU(6),t.ALo(7,"async"),t.qZA()()()}if(2&s){const m=v.$implicit,r=v.index,p=t.oxw();t.Udp("order",p.order.get(r)),t.xp6(3),t.Q6J("src",p.options.icons.drag),t.xp6(1),t.Q6J("polymorpheusOutlet",p.content)("polymorpheusOutletContext",t.WLB(11,U,m,r)),t.xp6(1),t.ekj("t-button_hidden",!p.isEnabled(m)),t.Q6J("iconLeft",p.getIcon(m)),t.xp6(1),t.hij(" ",t.lcZ(7,9,p.showHideText$)," ")}}let M=(()=>{var s;class v{constructor(){this.dragging=!1,this.order=new Map,this.unsortedItems=[],this.options=(0,t.f3M)(c),this.showHideText$=(0,t.f3M)(i.s),this.enabled=[],this.itemsChange=new t.vpe,this.enabledChange=new t.vpe,this.content=({$implicit:r})=>String(r)}set items(r){(r.length!==this.unsortedItems.length||!r.every(p=>this.unsortedItems.includes(p)))&&(this.unsortedItems=r)}noop(){}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(r){return this.enabled.includes(r)}getIcon(r){return this.isEnabled(r)?this.options.icons.hide:this.options.icons.show}toggle(r){this.enabled=this.isEnabled(r)?this.enabled.filter(p=>p!==r):this.enabled.concat(r),this.updateEnabled()}move(r,p){const A=this.order.get(r)??r;if(!A&&p<0||A===this.unsortedItems.length-1&&p>0)return;const L=A+p,dt=Array.from(this.order.values()).findIndex(ht=>ht===L);this.order.set(r,L),this.order.set(dt,A),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const r=new Array(this.unsortedItems.length);return this.unsortedItems.forEach((p,A)=>{r[this.order.get(A)??A]=p}),r}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const r=this.getSortedItems().filter(p=>this.isEnabled(p));this.enabled=r,this.enabledChange.emit(r)}}return(s=v).\u0275fac=function(r){return new(r||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["tui-reorder"]],hostBindings:function(r,p){1&r&&t.NdJ("focusout.stop",function(){return p.noop()})("pointerdown.silent",function(){return p.onDrag()})("pointerup.silent",function(){return p.onDrop()},!1,t.evT)},inputs:{enabled:"enabled",items:"items",content:"content"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},standalone:!0,features:[t.jDz],decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],[3,"order",4,"ngFor","ngForOf"],[1,"t-item"],["tuiTileHandle","",1,"t-draggable"],[1,"t-icon",3,"src"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"iconLeft","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(r,p){1&r&&(t.TgZ(0,"tui-tiles",0),t.NdJ("orderChange",function(L){return p.order=L}),t.YNc(1,y,8,14,"tui-tile",1),t.qZA()),2&r&&(t.Q6J("order",p.order),t.xp6(1),t.Q6J("ngForOf",p.unsortedItems))},dependencies:[_.TuiTiles,C.U,h.D,D.$,n.sg,o.TuiSvgComponent,o.TuiButtonDirective,n.Ov,a.wq,a.Li],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{grid-auto-rows:2rem}.t-draggable[_ngcontent-%COMP%]{cursor:ns-resize;flex:1 1 auto}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-base-01)}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%], .t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),v})();var x=e(99829),u=e(51160),f=e(86561);let T=(()=>{var s;class v{constructor(){this.table=(0,t.f3M)(f.c),this.directionOrderChange=this.table.directionChange.pipe((0,u.U)(r=>1===r?"asc":"desc"))}set directionOrder(r){this.table.direction="asc"===r?1:-1}}return(s=v).\u0275fac=function(r){return new(r||s)},s.\u0275dir=t.lG2({type:s,selectors:[["table","tuiTable","","tuiDirectionOrder",""]],inputs:{directionOrder:"directionOrder"},outputs:{directionOrderChange:"directionOrderChange"},standalone:!0}),v})();var E=e(25138),P=e(87569),R=e(95231),B=e(24242),K=e(23014),W=e(56250),Q=e(90070),N=e(98054),j=e(52473),J=e(26743),k=e(84155);let H=(()=>{var s;class v{}return(s=v).\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[k.j]}),v})();var F=e(83527),Z=e(23772),G=e(93098),Y=e(4855),$=e(64419);const S={sizeOptionContent:function w({$implicit:s}){return`${s}`},showPages:!0,items:[10,20,50,100],size:10},z=(0,l.tuiCreateToken)(S);function V(s){return(0,l.tuiProvideOptions)(z,s,S)}var X=e(99931),q=e(88635);function tt(s,v){if(1&s&&(t.ynx(0),t._uU(1),t.TgZ(2,"strong",6),t._uU(3),t.qZA(),t.BQk()),2&s){const m=t.oxw().ngIf,r=t.oxw();t.xp6(1),t.hij(" ",m.pages," "),t.xp6(2),t.Oqu(r.pages)}}function et(s,v){if(1&s){const m=t.EpF();t.TgZ(0,"button",7),t.NdJ("tuiDropdownOpenChange",function(p){t.CHM(m);const A=t.oxw(2);return t.KtG(A.open=p)}),t.TgZ(1,"strong"),t._uU(2),t.qZA()()}if(2&s){t.oxw();const m=t.MAs(9),r=t.oxw();t.Q6J("tuiDropdown",m)("tuiDropdownOpen",r.open),t.xp6(2),t.AsE("",r.start+1,"\u2013",r.end,"")}}function nt(s,v){1&s&&(t.TgZ(0,"strong"),t._uU(1,"0 - 0"),t.qZA())}function it(s,v){if(1&s&&(t.ynx(0),t._uU(1),t.BQk()),2&s){const m=v.polymorpheusOutlet;t.xp6(1),t.hij(" ",m," ")}}function ot(s,v){if(1&s&&t._UZ(0,"tui-svg",14),2&s){const m=t.oxw(4);t.Q6J("src",m.commonIcons.check)}}function rt(s,v){1&s&&t._UZ(0,"span",15)}const st=function(s,v){return{$implicit:s,total:v}};function at(s,v){if(1&s){const m=t.EpF();t.ynx(0),t.TgZ(1,"button",10),t.NdJ("click",function(){const A=t.CHM(m).$implicit,L=t.oxw(3);return t.KtG(L.onItem(A))}),t.YNc(2,it,2,1,"ng-container",11),t.YNc(3,ot,1,1,"tui-svg",12),t.YNc(4,rt,1,0,"ng-template",null,13,t.W1O),t.qZA(),t.BQk()}if(2&s){const m=v.$implicit,r=t.MAs(5),p=t.oxw(3);t.xp6(2),t.Q6J("polymorpheusOutlet",p.sizeOptionContent)("polymorpheusOutletContext",t.WLB(4,st,m,p.total)),t.xp6(1),t.Q6J("ngIf",m===p.size)("ngIfElse",r)}}function _t(s,v){if(1&s&&(t.TgZ(0,"tui-data-list",8),t.YNc(1,at,6,7,"ng-container",9),t.qZA()),2&s){const m=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",m.items)}}function ct(s,v){if(1&s){const m=t.EpF();t.ynx(0),t.TgZ(1,"button",16),t.NdJ("click",function(){t.CHM(m);const p=t.oxw(2);return t.KtG(p.back())}),t._uU(2),t.qZA(),t.TgZ(3,"button",17),t.NdJ("click",function(){t.CHM(m);const p=t.oxw(2);return t.KtG(p.forth())}),t._uU(4),t.qZA(),t.BQk()}if(2&s){const m=v.ngIf,r=t.oxw(2);t.xp6(1),t.Q6J("disabled",r.leftDisabled)("iconLeft",r.icons.decrement),t.xp6(1),t.hij(" ",m[0]," "),t.xp6(1),t.Q6J("disabled",r.rightDisabled)("iconLeft",r.icons.increment),t.xp6(1),t.hij(" ",m[1]," ")}}function ut(s,v){if(1&s&&(t.ynx(0),t.TgZ(1,"span",1),t.YNc(2,tt,4,2,"ng-container",0),t.qZA(),t.TgZ(3,"span",2),t._uU(4),t.YNc(5,et,3,4,"button",3),t.YNc(6,nt,2,0,"ng-template",null,4,t.W1O),t.YNc(8,_t,2,1,"ng-template",null,5,t.W1O),t._uU(10),t.TgZ(11,"strong",6),t._uU(12),t.qZA()(),t.YNc(13,ct,5,6,"ng-container",0),t.ALo(14,"async"),t.BQk()),2&s){const m=v.ngIf,r=t.MAs(7),p=t.oxw();t.xp6(2),t.Q6J("ngIf",p.showPages),t.xp6(2),t.hij(" ",m.linesPerPage," "),t.xp6(1),t.Q6J("ngIf",0!==p.total)("ngIfElse",r),t.xp6(5),t.hij(" ",m.of," "),t.xp6(2),t.Oqu(p.total),t.xp6(1),t.Q6J("ngIf",t.lcZ(14,7,p.spinTexts$))}}let lt=(()=>{var s;class v{constructor(){this.options=(0,t.f3M)(z),this.open=!1,this.icons=(0,t.f3M)(o.TUI_SPIN_ICONS),this.spinTexts$=(0,t.f3M)(o.TUI_SPIN_TEXTS),this.texts$=(0,t.f3M)(i.J),this.commonIcons=(0,t.f3M)(o.TUI_COMMON_ICONS),this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.paginationChange=new t.vpe}onItem(r){const{start:p}=this;this.size=r,this.open=!1,this.page=Math.floor(p/this.size),this.paginationChange.emit(this.pagination)}get pages(){return Math.ceil(this.total/this.size)}get showPages(){return this.options.showPages}get sizeOptionContent(){return this.options.sizeOptionContent}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}back(){this.page--,this.paginationChange.emit(this.pagination)}forth(){this.page++,this.paginationChange.emit(this.pagination)}}return(s=v).\u0275fac=function(r){return new(r||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{paginationChange:"paginationChange"},standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange",4,"ngIf","ngIfElse"],["zeroTotal",""],["content",""],[1,"t-strong"],["tuiLink","","type","button",3,"tuiDropdown","tuiDropdownOpen","tuiDropdownOpenChange"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","iconLeft","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","iconLeft","click"]],template:function(r,p){1&r&&(t.YNc(0,ut,15,9,"ng-container",0),t.ALo(1,"async")),2&r&&t.Q6J("ngIf",t.lcZ(1,1,p.texts$))},dependencies:[n.O5,n.Ov,o.TuiLinkDirective,o.TuiDropdownDirective,o.TuiDataList,X.q,q.v,a.wq,a.Li,n.sg,o.TuiDropdownOpenDirective,o.TuiSvgComponent,o.TuiButtonDirective],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),v})()},99829:(I,d,e)=>{e.d(d,{B:()=>t});var n=e(35548);let t=(()=>{var i;class o{constructor(){this.tuiCell="",this.template=(0,n.f3M)(n.Rgc)}}return(i=o).\u0275fac=function(a){return new(a||i)},i.\u0275dir=n.lG2({type:i,selectors:[["ng-template","tuiCell",""]],inputs:{tuiCell:"tuiCell"},standalone:!0}),o})()},25138:(I,d,e)=>{e.d(d,{D:()=>t});var n=e(35548);let t=(()=>{var i;class o{constructor(){this.tuiHead="",this.template=(0,n.f3M)(n.Rgc)}}return(i=o).\u0275fac=function(a){return new(a||i)},i.\u0275dir=n.lG2({type:i,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"},standalone:!0}),o})()},87569:(I,d,e)=>{e.d(d,{Y:()=>g});var n=e(4594),t=e(35548),i=e(37399),o=e(275),_=e(24815),a=e(51160),l=e(14279);let g=(()=>{var c;class O{constructor(){this.doc=(0,t.f3M)(n.K0),this.el=(0,i.tuiInjectElement)(),this.tuiResized=(0,i.tuiTypedFromEvent)(this.el,"mousedown").pipe((0,i.tuiPreventDefault)(),(0,o.w)(()=>{var b;const{width:h,right:D}=(null==(b=this.el.closest("th"))?void 0:b.getBoundingClientRect())||i.EMPTY_CLIENT_RECT;return(0,i.tuiTypedFromEvent)(this.doc,"mousemove").pipe((0,_.x)(),(0,a.U)(({clientX:U})=>h+U-D),(0,l.R)((0,i.tuiTypedFromEvent)(this.doc,"mouseup")))}))}}return(c=O).\u0275fac=function(h){return new(h||c)},c.\u0275dir=t.lG2({type:c,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"},standalone:!0}),O})()},95231:(I,d,e)=>{e.d(d,{L:()=>t});var n=e(35548);let t=(()=>{var i;class o{constructor(){this.tuiRowOf=[],this.template=(0,n.f3M)(n.Rgc)}static ngTemplateContextGuard(a,l){return!0}}return(i=o).\u0275fac=function(a){return new(a||i)},i.\u0275dir=n.lG2({type:i,selectors:[["ng-template","tuiRow",""]],inputs:{tuiRowOf:"tuiRowOf"},standalone:!0}),o})()},24242:(I,d,e)=>{e.d(d,{P:()=>g});var n=e(35548),t=e(37399),i=e(75133),o=e(13591),_=e(51160),a=e(23014),l=e(86561);let g=(()=>{var c;class O{constructor(){this.sortables=t.EMPTY_QUERY,this.table=(0,n.f3M)(l.c),this.tuiSortByChange=this.table.sorterChange.pipe((0,i.g)(0),(0,o.h)(()=>!!this.sortables.length),(0,_.U)(h=>this.getKey(h))),this.tuiSortBy=null}set sortBy(h){this.tuiSortBy=h,this.checkSortables()}checkSortables(){this.sortables.forEach(h=>h.check())}getKey(h){var D;return(null==(D=this.sortables.find(b=>b.sorter===h))?void 0:D.key)||null}}return(c=O).\u0275fac=function(h){return new(h||c)},c.\u0275dir=n.lG2({type:c,selectors:[["table","tuiTable","","tuiSortBy",""]],contentQueries:function(h,D,b){if(1&h&&n.Suo(b,a.g,5),2&h){let U;n.iGM(U=n.CRH())&&(D.sortables=U)}},inputs:{sortBy:["tuiSortBy","sortBy"]},outputs:{tuiSortByChange:"tuiSortByChange"},standalone:!0}),O})()},23014:(I,d,e)=>{e.d(d,{g:()=>_});var n=e(35548),t=e(93098),i=e(24242),o=e(86561);let _=(()=>{var a;class l{constructor(){this.table=(0,n.f3M)(o.c),this.th=(0,n.f3M)(t.W),this.sortBy=(0,n.f3M)((0,n.Gpc)(()=>i.P)),this.sorter=()=>0}get key(){return this.th.key}ngOnInit(){this.sorter=this.match?this.table.sorter:this.sorter,this.th.sorter=this.sorter}check(){this.match&&this.table.sorter!==this.sorter&&this.table.updateSorter(this.sorter)}get match(){return this.sortBy.tuiSortBy===this.key}}return(a=l).\u0275fac=function(c){return new(c||a)},a.\u0275dir=n.lG2({type:a,selectors:[["th","tuiTh","","tuiSortable",""]],standalone:!0}),l})()},86561:(I,d,e)=>{e.d(d,{c:()=>a});var n=e(35548),t=e(37399),i=e(98054),o=e(26743),_=e(83527);let a=(()=>{var l;class g extends t.AbstractTuiController{constructor(){super(...arguments),this.options=(0,n.f3M)(_.Cc),this.cdr=(0,n.f3M)(n.sBO),this.stuck$=(0,n.f3M)(i.I),this.columns=[],this.size=this.options.size,this.direction=this.options.direction,this.directionChange=new n.vpe,this.sorterChange=new n.vpe,this.appearance="table",this.cleaner=!1,this.sorter=()=>0}updateSorterAndDirection(O){this.sorter===O?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(O),this.updateDirection(1))}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(O){this.sorter=O||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(O){this.direction=O,this.directionChange.emit(this.direction),this.change$.next()}}return(l=g).\u0275fac=function(){let c;return function(C){return(c||(c=n.n5z(l)))(C||l)}}(),l.\u0275dir=n.lG2({type:l,selectors:[["table","tuiTable",""]],hostAttrs:[2,"border-collapse","separate"],hostVars:1,hostBindings:function(O,C){1&O&&n.NdJ("$.class._stuck",function(){return C.stuck$}),2&O&&n.uIk("data-size",C.size)},inputs:{columns:"columns",size:"size",direction:"direction",sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},standalone:!0,features:[n._Bn(o.y),n.qOj]}),g})()},56250:(I,d,e)=>{e.d(d,{N:()=>o});var n=e(35548),t=e(85400),i=e(98054);let o=(()=>{var _;class a{constructor(){this.stuck$=(0,n.f3M)(i.I)}}return(_=a).\u0275fac=function(g){return new(g||_)},_.\u0275dir=n.lG2({type:_,selectors:[["thead","tuiThead",""]],hostBindings:function(g,c){1&g&&n.NdJ("$.class._stuck",function(){return c.stuck$})},standalone:!0,features:[n._Bn([i.y,t.te,{provide:t.RL,useValue:"0px 10000px 10000px 10000px"}])]}),a})()},90070:(I,d,e)=>{e.d(d,{y:()=>a});var _,n=e(84911),t=e(35548),i=e(37399),o=e(86561);class a{constructor(){this.table=(0,t.f3M)(o.c)}transform(g){return this.sort(g,this.table.sorter,this.table.direction)}sort(g,c,O){return[...g].sort((C,h)=>O*c(C,h))}}(_=a).\u0275fac=function(g){return new(g||_)},_.\u0275pipe=t.Yjl({name:"tuiTableSort",type:_,pure:!1,standalone:!0}),(0,n.gn)([i.tuiPure],a.prototype,"sort",null)},98054:(I,d,e)=>{e.d(d,{I:()=>o,y:()=>_});var n=e(35548),t=e(85400),i=e(51160);const o=new n.OlP("[TUI_STUCK]"),_={provide:o,deps:[n.SBq,t.te],useFactory:({nativeElement:a},l)=>{const g=l.pipe((0,i.U)(([{intersectionRatio:c}])=>c<1));return a["$.class._stuck"]=g,g}}},52473:(I,d,e)=>{e.d(d,{W:()=>a});var n=e(35548),t=e(54795),i=e(37399),o=e(86561);const a=[e(90070).y,{provide:o.c,deps:[[new n.tp0,o.c],n.sBO],useFactory:(l,g)=>(l.change$.pipe((0,i.tuiWatch)(g),(0,t.sL)()).subscribe(),l)}]},26743:(I,d,e)=>{e.d(d,{y:()=>l});var n=e(35548),t=e(85400),i=e(37399),o=e(69104),_=e(86561),a=e(98054);const l=[{provide:t.RL,useValue:"10000px 10000px 10000px 0px"},{provide:t.op,useValue:[0,1]},(0,i.tuiProvide)(o.TUI_TEXTFIELD_OPTIONS,(0,n.Gpc)(()=>_.c)),t.te,a.y]},83527:(I,d,e)=>{e.d(d,{Cc:()=>i,Jz:()=>o,dn:()=>t});var n=e(37399);const t={sticky:!1,resizable:!1,open:!0,size:"m",direction:1,sortIcons:{asc:"tuiIconSortAscending",desc:"tuiIconSortDescending",off:"tuiIconSortOff"}},i=(0,n.tuiCreateToken)(t);function o(_){return(0,n.tuiProvideOptions)(i,_,t)}},84155:(I,d,e)=>{e.d(d,{j:()=>f});var n=e(4594),t=e(35548),i=e(37399),o=e(69104),_=e(98808),a=e(40970),l=e(95231),g=e(86561),c=e(90070),O=e(52473),C=e(83527),h=e(64419);const D=["tuiTbody",""];function b(T,E){if(1&T&&(t.ynx(0),t._uU(1),t.BQk()),2&T){const P=E.polymorpheusOutlet;t.xp6(1),t.hij(" ",P," ")}}function U(T,E){if(1&T){const P=t.EpF();t.TgZ(0,"tr")(1,"th",1)(2,"button",2),t.NdJ("click",function(){t.CHM(P);const B=t.oxw();return t.KtG(B.onClick())}),t.TgZ(3,"span",3),t.YNc(4,b,2,1,"ng-container",4),t.qZA(),t._UZ(5,"tui-icon",5),t.qZA()()()}if(2&T){const P=t.oxw();t.xp6(1),t.Q6J("colSpan",P.table.columns.length),t.xp6(3),t.Q6J("polymorpheusOutlet",P.heading),t.xp6(1),t.Q6J("tuiChevron",P.open)}}function y(T,E){1&T&&(t.ynx(0),t.Hsn(1),t.BQk())}function M(T,E){if(1&T&&(t.GkF(0,7),t.ALo(1,"tuiMapper")),2&T){const P=E.$implicit,R=E.index,B=t.oxw(2);t.Q6J("ngTemplateOutlet",B.row.template)("ngTemplateOutletContext",t.Dn7(1,2,P,B.toContext,R))}}function x(T,E){if(1&T&&(t.ynx(0),t.YNc(1,M,2,6,"ng-container",6),t.BQk()),2&T){const P=t.oxw();t.xp6(1),t.Q6J("ngForOf",P.sorted)}}const u=["*"];let f=(()=>{var T;class E{constructor(){this.pipe=(0,t.f3M)(c.y),this.options=(0,t.f3M)(C.Cc),this.table=(0,t.f3M)((0,t.Gpc)(()=>g.c)),this.rows=i.EMPTY_QUERY,this.data=[],this.open=this.options.open,this.openChange=new t.vpe,this.toContext=(R,B)=>({$implicit:R,index:B})}get sorted(){return this.pipe.transform(this.data)}onClick(){this.open=!this.open,this.openChange.emit(this.open)}}return(T=E).\u0275fac=function(R){return new(R||T)},T.\u0275cmp=t.Xpm({type:T,selectors:[["tbody","tuiTbody",""]],contentQueries:function(R,B,K){if(1&R&&(t.Suo(K,l.L,5),t.Suo(K,h.f,4)),2&R){let W;t.iGM(W=t.CRH())&&(B.row=W.first),t.iGM(W=t.CRH())&&(B.rows=W)}},inputs:{data:"data",heading:"heading",open:"open"},outputs:{openChange:"openChange"},standalone:!0,features:[t._Bn(O.W),t.jDz],attrs:D,ngContentSelectors:u,decls:3,vars:3,consts:[[4,"ngIf"],[1,"t-heading",3,"colSpan"],["type","button",1,"t-expand",3,"click"],[1,"t-name"],[4,"polymorpheusOutlet"],[1,"t-chevron",3,"tuiChevron"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(R,B){1&R&&(t.F$t(),t.YNc(0,U,6,3,"tr",0),t.YNc(1,y,2,0,"ng-container",0),t.YNc(2,x,2,1,"ng-container",0)),2&R&&(t.Q6J("ngIf",B.heading),t.xp6(1),t.Q6J("ngIf",B.open),t.xp6(1),t.Q6J("ngIf",B.open&&B.row))},dependencies:[n.sg,n.O5,n.tP,i.TuiMapperPipe,a.wq,a.Li,o.TuiIconComponent,_.TuiChevronDirective],styles:['[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}'],changeDetection:0}),E})()},23772:(I,d,e)=>{e.d(d,{K:()=>_});var n=e(66094),t=e(35548);const i=["tuiTd",""],o=["*"];let _=(()=>{var a;class l{}return(a=l).\u0275fac=function(c){return new(c||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(c,O,C){if(1&c&&t.Suo(C,n.a5,5),2&c){let h;t.iGM(h=t.CRH())&&(O.control=h.first)}},hostVars:2,hostBindings:function(c,O){2&c&&t.ekj("_editable",O.control)},standalone:!0,features:[t.jDz],attrs:i,ngContentSelectors:o,decls:1,vars:0,template:function(c,O){1&c&&(t.F$t(),t.Hsn(0))},styles:['[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}[tuiTheme="dark"][_nghost-%COMP%]:after, [tuiTheme="dark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),l})()},4855:(I,d,e)=>{e.d(d,{E:()=>y});var n=e(4594),t=e(35548),i=e(37399),o=e(905),_=e(51160),a=e(25138),l=e(86561),g=e(52473),c=e(93098);const O=["tuiThGroup",""];function C(M,x){if(1&M&&(t.TgZ(0,"th",5),t._uU(1),t.qZA()),2&M){const u=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",u.toString()," ")}}function h(M,x){if(1&M&&t.YNc(0,C,2,1,"th",4),2&M){const u=t.oxw(3);t.Q6J("ngIf",!u.th&&!u.heads.length)}}function D(M,x){if(1&M&&(t.ynx(0,2),t.YNc(1,h,1,1,"ng-template",null,3,t.W1O),t.BQk()),2&M){const u=x.$implicit,f=t.MAs(2),T=t.oxw().ngIf;t.Q6J("ngTemplateOutlet",T[u]&&T[u].template||f)}}function b(M,x){if(1&M&&(t.ynx(0),t.YNc(1,D,3,1,"ng-container",1),t.BQk()),2&M){const u=t.oxw();t.xp6(1),t.Q6J("ngForOf",u.table.columns)}}const U=["*"];let y=(()=>{var M;class x{constructor(){this.heads=i.EMPTY_QUERY,this.heads$=null,this.table=(0,t.f3M)((0,t.Gpc)(()=>l.c))}ngAfterContentInit(){this.heads$=this.heads.changes.pipe((0,o.O)(null),(0,_.U)(()=>this.heads.reduce((f,T)=>({...f,[T.tuiHead]:T}),{})))}}return(M=x).\u0275fac=function(f){return new(f||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["tr","tuiThGroup",""]],contentQueries:function(f,T,E){if(1&f&&(t.Suo(E,c.W,5),t.Suo(E,a.D,4)),2&f){let P;t.iGM(P=t.CRH())&&(T.th=P.first),t.iGM(P=t.CRH())&&(T.heads=P)}},standalone:!0,features:[t._Bn([g.W]),t.jDz],attrs:O,ngContentSelectors:U,decls:3,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTh","",4,"ngIf"],["tuiTh",""]],template:function(f,T){1&f&&(t.F$t(),t.Hsn(0),t.YNc(1,b,2,1,"ng-container",0),t.ALo(2,"async")),2&f&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,T.heads$)))},dependencies:[n.O5,n.sg,n.tP,c.W,n.Ov],encapsulation:2,changeDetection:0}),x})()},93098:(I,d,e)=>{e.d(d,{W:()=>b,m:()=>U});var n=e(4594),t=e(35548),i=e(37399),o=e(69104),_=e(25138),a=e(87569),l=e(86561),g=e(83527);const c=["tuiTh",""];function O(y,M){if(1&y){const x=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(x);const f=t.oxw();return t.KtG(f.updateSorterAndDirection())}),t.GkF(1,4),t._uU(2),t.ALo(3,"async"),t._UZ(4,"tui-svg",5),t.qZA()}if(2&y){const x=t.oxw(),u=t.MAs(2);t.ekj("t-sort_sorted",x.isCurrent),t.xp6(1),t.Q6J("ngTemplateOutlet",u),t.xp6(1),t.hij(" ",t.lcZ(3,5,x.table.change$)," "),t.xp6(2),t.Q6J("src",x.icon)}}function C(y,M){1&y&&t.Hsn(0)}function h(y,M){if(1&y){const x=t.EpF();t.TgZ(0,"div",6),t.NdJ("tuiResized",function(f){t.CHM(x);const T=t.oxw();return t.KtG(T.onResized(f))}),t.qZA()}}const D=["*"];let b=(()=>{var y;class M{constructor(){this.options=(0,t.f3M)(g.Cc),this.head=(0,t.f3M)(_.D,{optional:!0}),this.width=null,this.table=(0,t.f3M)((0,t.Gpc)(()=>l.c),{optional:!0}),this.sorter=this.head?(u,f)=>(0,i.tuiDefaultSort)(u[this.key],f[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky}get key(){if(!this.head)throw new U;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){var u;return this.isCurrent?1===(null==(u=this.table)?void 0:u.direction)?this.options.sortIcons.desc:this.options.sortIcons.asc:this.options.sortIcons.off}updateSorterAndDirection(){var u;null==(u=this.table)||u.updateSorterAndDirection(this.isCurrentAndAscDirection?null:this.sorter)}onResized(u){this.width=u}get isCurrentAndAscDirection(){var u,f;return this.sorter===(null==(u=this.table)?void 0:u.sorter)&&-1===(null==(f=this.table)?void 0:f.direction)}}return(y=M).\u0275fac=function(u){return new(u||y)},y.\u0275cmp=t.Xpm({type:y,selectors:[["th","tuiTh",""]],hostVars:4,hostBindings:function(u,f){2&u&&(t.Udp("width",f.width,"px"),t.ekj("_sticky",f.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky"},standalone:!0,features:[t.jDz],attrs:c,ngContentSelectors:D,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-sort-icon",3,"src"],[1,"t-bar",3,"tuiResized"]],template:function(u,f){if(1&u&&(t.F$t(),t.YNc(0,O,5,7,"button",0),t.YNc(1,C,1,0,"ng-template",null,1,t.W1O),t.YNc(3,h,1,0,"div",2)),2&u){const T=t.MAs(2);t.Q6J("ngIf",f.sorter&&f.table)("ngIfElse",T),t.xp6(3),t.Q6J("ngIf",f.resizable)}},dependencies:[a.Y,n.O5,n.tP,o.TuiSvgComponent,n.Ov],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:700;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}[tuiTheme="dark"]._sticky[_nghost-%COMP%]:after, [tuiTheme="dark"]   ._sticky[_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%], [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}[tuiTheme="dark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, [tuiTheme="dark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}'],changeDetection:0}),M})();class U extends Error{constructor(){super("")}}},64419:(I,d,e)=>{e.d(d,{f:()=>x});var n=e(8239),t=e(4594),i=e(35548),o=e(37399),_=e(20982),a=e(275),l=e(51160),g=e(99829),c=e(86561),O=e(52473),C=e(84155),h=e(23772);const D=["tuiTr",""];function b(u,f){if(1&u&&(i.TgZ(0,"td",5),i._uU(1),i.qZA()),2&u){const T=f.ngIf,E=i.oxw(2).$implicit;i.xp6(1),i.hij(" ",T[E]," ")}}function U(u,f){if(1&u&&(i.YNc(0,b,2,1,"td",4),i.ALo(1,"async")),2&u){const T=i.oxw(3);i.Q6J("ngIf",i.lcZ(1,1,T.item$))}}function y(u,f){if(1&u&&(i.ynx(0,2),i.YNc(1,U,2,3,"ng-template",null,3,i.W1O),i.BQk()),2&u){const T=f.$implicit,E=i.MAs(2),P=i.oxw().ngIf;i.Q6J("ngTemplateOutlet",P[T]&&P[T].template||E)}}function M(u,f){if(1&u&&(i.ynx(0),i.YNc(1,y,3,1,"ng-container",1),i.BQk()),2&u){const T=i.oxw();i.xp6(1),i.Q6J("ngForOf",T.table.columns)}}let x=(()=>{var u;class f{constructor(){this.cells=o.EMPTY_QUERY,this.body=(0,i.f3M)((0,i.Gpc)(()=>C.j)),this.contentReady$=new _.t(1),this.table=(0,i.f3M)((0,i.Gpc)(()=>c.c)),this.cells$=this.contentReady$.pipe((0,a.w)(()=>(0,o.tuiQueryListChanges)(this.cells)),(0,l.U)(E=>E.reduce((P,R)=>({...P,[R.tuiCell]:R}),{}))),this.item$=this.contentReady$.pipe((0,a.w)(()=>(0,o.tuiQueryListChanges)(this.body.rows)),(0,l.U)(E=>this.body.sorted[E.findIndex(P=>P===this)]))}ngAfterContentInit(){var E=this;return(0,n.Z)(function*(){yield Promise.resolve(),E.contentReady$.next(!0)})()}}return(u=f).\u0275fac=function(E){return new(E||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["tr","tuiTr",""]],contentQueries:function(E,P,R){if(1&E&&i.Suo(R,g.B,4),2&E){let B;i.iGM(B=i.CRH())&&(P.cells=B)}},standalone:!0,features:[i._Bn([O.W]),i.jDz],attrs:D,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTd","",4,"ngIf"],["tuiTd",""]],template:function(E,P){1&E&&(i.YNc(0,M,2,1,"ng-container",0),i.ALo(1,"async")),2&E&&i.Q6J("ngIf",i.lcZ(1,1,P.cells$))},dependencies:[t.O5,t.sg,t.Ov,t.tP,h.K],encapsulation:2,changeDetection:0}),f})()},38471:(I,d,e)=>{e.d(d,{Y:()=>n});class n{}},4210:(I,d,e)=>{e.d(d,{C:()=>o});var n=e(37399),t=e(38471),i=e(35548);let o=(()=>{var _;class a extends t.Y{constructor(){super(...arguments),this.filter=n.TUI_TRUE_HANDLER}}return(_=a).\u0275fac=function(){let l;return function(c){return(l||(l=i.n5z(_)))(c||_)}}(),_.\u0275dir=i.lG2({type:_,selectors:[["","tuiGenericFilter",""]],inputs:{filter:["tuiGenericFilter","filter"]},standalone:!0,features:[i._Bn([(0,n.tuiProvide)(t.Y,_)]),i.qOj]}),a})()},40979:(I,d,e)=>{e.d(d,{X:()=>O});var n=e(35548),t=e(66094),i=e(21778),o=e(49730),_=e(19403),a=e(20511),l=e(24815),g=e(38471),c=e(11102);let O=(()=>{var C;class h{constructor(){this.head=(0,n.f3M)(i.DZ,{optional:!0}),this.delegate=(0,n.f3M)(g.Y),this.control=(0,n.f3M)(t.a5),this.filters=(0,n.f3M)(c.w),this.refresh$=(0,o.P)(()=>{var b;return(0,_.T)(this.control.valueChanges||a.E,(null==(b=this.control.statusChanges)?void 0:b.pipe((0,l.x)()))||a.E)})}ngOnInit(){this.filters.register(this)}ngOnDestroy(){this.filters.unregister(this)}filter(b){const{disabled:U,value:y}=this.control;return!!U||!this.key||this.delegate.filter(b[this.key],y)}get key(){var b;return this.tuiTableFilter||(null==(b=this.head)?void 0:b.tuiHead)}}return(C=h).\u0275fac=function(b){return new(b||C)},C.\u0275dir=n.lG2({type:C,selectors:[["","tuiTableFilter",""]],inputs:{tuiTableFilter:"tuiTableFilter"},standalone:!0}),h})()},11102:(I,d,e)=>{e.d(d,{w:()=>g});var n=e(20982),t=e(275),i=e(60042),o=e(905),_=e(51160),a=e(19403),l=e(35548);let g=(()=>{var c;class O{constructor(){this.refresh$=new n.t(1),this.filters=[]}register(h){this.filters=this.filters.concat(h),this.update()}unregister(h){this.filters=this.filters.filter(D=>D!==h),this.update()}filter(h){return this.refresh$.pipe((0,t.w)(i.y),(0,o.O)(null),(0,_.U)(()=>h.filter(D=>this.check(D))))}check(h){return this.filters.every(D=>D.filter(h))}update(){this.refresh$.next((0,a.T)(...this.filters.map(({refresh$:h})=>h)))}}return(c=O).\u0275fac=function(h){return new(h||c)},c.\u0275dir=l.lG2({type:c,selectors:[["","tuiTableFilters",""]],standalone:!0}),O})()},60431:(I,d,e)=>{e.d(d,{h:()=>i});var n=e(35548),t=e(11102);let i=(()=>{var o;class _{constructor(){this.filters=(0,n.f3M)(t.w)}transform(l){return this.filters.filter(l)}}return(o=_).\u0275fac=function(l){return new(l||o)},o.\u0275pipe=n.Yjl({name:"tuiTableFilters",type:o,pure:!0,standalone:!0}),_})()},49237:(I,d,e)=>{e.r(d),e.d(d,{AbstractTuiTableFilter:()=>t.Y,TUI_REORDER_DEFAULT_OPTIONS:()=>n.Kx,TUI_REORDER_OPTIONS:()=>n.ch,TUI_STUCK:()=>n.I3,TUI_STUCK_PROVIDER:()=>n.yj,TUI_TABLE_DEFAULT_OPTIONS:()=>n.dn,TUI_TABLE_OPTIONS:()=>n.Cc,TUI_TABLE_PAGINATION_DEFAULT_OPTIONS:()=>n.Vl,TUI_TABLE_PAGINATION_OPTIONS:()=>n.R9,TUI_TABLE_PAGINATION_TEXTS:()=>c.J,TUI_TABLE_PROVIDER:()=>n.Wb,TUI_TABLE_PROVIDERS:()=>n.yc,TUI_TABLE_SHOW_HIDE_MESSAGE:()=>c.s,TuiCellDirective:()=>n.Bl,TuiDirectionOrderDirective:()=>n.lk,TuiGenericFilterDirective:()=>i.C,TuiHeadDirective:()=>n.DZ,TuiReorderComponent:()=>n.eO,TuiResizedDirective:()=>n.YX,TuiRowDirective:()=>n.LU,TuiSortByDirective:()=>n.PQ,TuiSortableDirective:()=>n.gJ,TuiTable:()=>n.F5,TuiTableDirective:()=>n.c4,TuiTableFilterDirective:()=>o.X,TuiTableFilters:()=>l,TuiTableFiltersDirective:()=>_.w,TuiTableFiltersPipe:()=>g.h,TuiTablePaginationComponent:()=>n.WT,TuiTableSortKeyException:()=>n.m2,TuiTableSortPipe:()=>n.yS,TuiTbodyComponent:()=>n.jY,TuiTdComponent:()=>n.Kt,TuiThComponent:()=>n.Ws,TuiThGroupComponent:()=>n.EE,TuiTheadDirective:()=>n.Nx,TuiTrComponent:()=>n.fu,tuiReorderOptionsProvider:()=>n.AS,tuiTableOptionsProvider:()=>n.Jz,tuiTablePaginationOptionsProvider:()=>n.PT});var n=e(21778),t=e(38471),i=e(4210),o=e(40979),_=e(11102),a=e(35548);let l=(()=>{var O;class C{}return(O=C).\u0275fac=function(D){return new(D||O)},O.\u0275mod=a.oAB({type:O}),O.\u0275inj=a.cJS({}),C})();var g=e(60431),c=e(97377)},97377:(I,d,e)=>{e.d(d,{J:()=>o,s:()=>i});var n=e(37399),t=e(75653);const i=(0,n.tuiCreateTokenFromFactory)((0,t.vv)("showHideText")),o=(0,n.tuiCreateTokenFromFactory)((0,t.vv)("paginationTexts"))}}]);