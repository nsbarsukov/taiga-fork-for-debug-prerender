(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29297],{3003:(t,e,n)=>{n.d(e,{Kx:()=>u.Kx,ch:()=>u.ch,I3:()=>O.I,yj:()=>O.y,dn:()=>P.dn,Cc:()=>P.Cc,Vl:()=>R.Vl,R9:()=>R.R9,Wb:()=>v.W,yc:()=>y.y,Bl:()=>l.B,lk:()=>p,DZ:()=>g.D,eO:()=>i.e,tk:()=>c,YX:()=>f.Y,LU:()=>b.L,PQ:()=>m.P,gJ:()=>C.g,c4:()=>d.c,jz:()=>k,WT:()=>S.W,y3:()=>A,yS:()=>_.y,jY:()=>w.j,Kt:()=>I.K,Ws:()=>E.W,EE:()=>z.E,Nx:()=>T.N,fu:()=>D.f,AS:()=>u.AS,Jz:()=>P.Jz,PT:()=>R.PT});var i=n(52061),o=n(88692),s=n(75526),r=n(498),a=n(64537);let c=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[o.ez,s.TuiSvgModule,s.TuiButtonModule,r.TuiTilesModule]}),e})();var u=n(47543),l=n(62818),h=n(27969),d=n(19582);let p=(()=>{var t;class e{constructor(){this.table=(0,a.f3M)(d.c),this.directionOrderChange=this.table.directionChange.pipe((0,h.U)((t=>1===t?"asc":"desc")))}set directionOrder(t){this.table.direction="asc"===t?1:-1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=a.lG2({type:t,selectors:[["table","tuiTable","","tuiDirectionOrder",""]],inputs:{directionOrder:"directionOrder"},outputs:{directionOrderChange:"directionOrderChange"}}),e})();var g=n(78979),f=n(17706),b=n(35459),m=n(61006),C=n(10435),T=n(13073),_=n(23301),O=n(15315),v=n(35436),y=n(30479),M=n(53222),x=n(89570);let k=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[o.ez,x.wq,M.TuiMapperPipeModule,s.TuiSvgModule]}),e})();var P=n(73446),w=n(57681),I=n(48598),E=n(96408),z=n(222),D=n(84190),S=n(56946);let A=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[o.ez,s.TuiButtonModule,s.TuiLinkModule,s.TuiHostedDropdownModule,s.TuiDataListModule,s.TuiSvgModule,x.wq]}),e})();var R=n(10450)},52061:(t,e,n)=>{n.d(e,{e:()=>p});var i=n(64537),o=n(23886),s=n(47543),r=n(88692),a=n(34880),c=n(76189),u=n(92309),l=n(5111),h=n(1065);function d(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tui-tile",2)(1,"div",3),i._UZ(2,"tui-svg",4),i._uU(3),i.TgZ(4,"button",5),i.NdJ("click",(function(){const e=i.CHM(t).$implicit,n=i.oxw();return i.KtG(n.toggle(e))}))("keydown.arrowDown.prevent",(function(){const e=i.CHM(t).index,n=i.oxw();return i.KtG(n.move(e,1))}))("keydown.arrowUp.prevent",(function(){const e=i.CHM(t).index,n=i.oxw();return i.KtG(n.move(e,-1))})),i.ALo(5,"async"),i.qZA()()()}if(2&t){const t=e.$implicit,n=e.index,o=i.oxw();i.Udp("order",o.order.get(n)),i.xp6(2),i.Q6J("src",o.options.icons.drag),i.xp6(1),i.hij(" ",t," "),i.xp6(1),i.ekj("t-button_hidden",!o.isEnabled(t)),i.Q6J("icon",o.getIcon(t))("title",i.lcZ(5,8,o.showHideText$))}}let p=(()=>{var t;class e{constructor(){this.dragging=!1,this.enabled=[],this.itemsChange=new i.vpe,this.enabledChange=new i.vpe,this.order=new Map,this.unsortedItems=[],this.options=(0,i.f3M)(s.ch),this.showHideText$=(0,i.f3M)(o.s)}set items(t){t.length===this.unsortedItems.length&&t.every((t=>this.unsortedItems.includes(t)))||(this.unsortedItems=t)}noop(){}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(t){return this.enabled.includes(t)}getIcon(t){return this.isEnabled(t)?this.options.icons.hide:this.options.icons.show}toggle(t){this.enabled=this.isEnabled(t)?this.enabled.filter((e=>e!==t)):this.enabled.concat(t),this.updateEnabled()}move(t,e){const n=this.order.get(t)??t;if(!n&&e<0||n===this.unsortedItems.length-1&&e>0)return;const i=n+e,o=Array.from(this.order.values()).findIndex((t=>t===i));this.order.set(t,i),this.order.set(o,n),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const t=new Array(this.unsortedItems.length);return this.unsortedItems.forEach(((e,n)=>{t[this.order.get(n)??n]=e})),t}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const t=this.getSortedItems().filter((t=>this.isEnabled(t)));this.enabled=t,this.enabledChange.emit(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-reorder"]],hostBindings:function(t,e){1&t&&i.NdJ("focusout.stop",(function(){return e.noop()}))("pointerdown.silent",(function(){return e.onDrag()}))("pointerup.silent",(function(){return e.onDrop()}),!1,i.evT)},inputs:{items:"items",enabled:"enabled"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],["tuiTileHandle","",3,"order",4,"ngFor","ngForOf"],["tuiTileHandle",""],[1,"t-item"],[1,"t-icon",3,"src"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"icon","title","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(t,e){1&t&&(i.TgZ(0,"tui-tiles",0),i.NdJ("orderChange",(function(t){return e.order=t})),i.YNc(1,d,6,10,"tui-tile",1),i.qZA()),2&t&&(i.Q6J("order",e.order),i.xp6(1),i.Q6J("ngForOf",e.unsortedItems))},dependencies:[r.sg,a.P,c.v,u.U,l.D,h.$,r.Ov],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{cursor:ns-resize;grid-auto-rows:2rem}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-base-01)}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%], .t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),e})()},47543:(t,e,n)=>{n.d(e,{AS:()=>r,Kx:()=>o,ch:()=>s});var i=n(53222);const o={icons:{hide:"tuiIconEye",show:"tuiIconEyeOff",drag:"tuiIconDrag"}},s=(0,i.tuiCreateToken)(o);function r(t){return(0,i.tuiProvideOptions)(s,t,o)}},56946:(t,e,n)=>{n.d(e,{W:()=>M});var i=n(64537),o=n(23886),s=n(75526),r=n(10450),a=n(88692),c=n(76189),u=n(66596),l=n(62939),h=n(20933),d=n(35065),p=n(34880),g=n(89570);function f(t,e){if(1&t&&(i.ynx(0),i._uU(1),i.TgZ(2,"strong",6),i._uU(3),i.qZA(),i.BQk()),2&t){const t=i.oxw().ngIf,e=i.oxw();i.xp6(1),i.hij(" ",t.pages," "),i.xp6(2),i.Oqu(e.pages)}}function b(t,e){if(1&t&&(i.ynx(0),i._uU(1),i.BQk()),2&t){const t=e.polymorpheusOutlet;i.xp6(1),i.hij(" ",t," ")}}function m(t,e){if(1&t&&i._UZ(0,"tui-svg",13),2&t){const t=i.oxw(4);i.Q6J("src",t.commonIcons.check)}}function C(t,e){1&t&&i._UZ(0,"span",14)}const T=function(t,e){return{$implicit:t,total:e}};function _(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"button",9),i.NdJ("click",(function(){const e=i.CHM(t).$implicit,n=i.oxw(3);return i.KtG(n.onItem(e))})),i.YNc(2,b,2,1,"ng-container",10),i.YNc(3,m,1,1,"tui-svg",11),i.YNc(4,C,1,0,"ng-template",null,12,i.W1O),i.qZA(),i.BQk()}if(2&t){const t=e.$implicit,n=i.MAs(5),o=i.oxw(3);i.xp6(2),i.Q6J("polymorpheusOutlet",o.options.sizeOptionContent)("polymorpheusOutletContext",i.WLB(4,T,t,o.total)),i.xp6(1),i.Q6J("ngIf",t===o.size)("ngIfElse",n)}}function O(t,e){if(1&t&&(i.TgZ(0,"tui-data-list",7),i.YNc(1,_,6,7,"ng-container",8),i.qZA()),2&t){const t=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",t.items)}}function v(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"button",15),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw(2);return i.KtG(e.back())})),i.qZA(),i.TgZ(2,"button",16),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw(2);return i.KtG(e.forth())})),i.qZA(),i.BQk()}if(2&t){const t=e.ngIf,n=i.oxw(2);i.xp6(1),i.Q6J("disabled",n.leftDisabled)("icon",n.icons.decrement)("title",t[0]),i.xp6(1),i.Q6J("disabled",n.rightDisabled)("icon",n.icons.increment)("title",t[1])}}function y(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"span",1),i.YNc(2,f,4,2,"ng-container",0),i.qZA(),i.TgZ(3,"span",2),i._uU(4),i.TgZ(5,"tui-hosted-dropdown",3),i.NdJ("openChange",(function(e){i.CHM(t);const n=i.oxw();return i.KtG(n.open=e)})),i.TgZ(6,"button",4)(7,"strong"),i._uU(8),i.qZA()(),i.YNc(9,O,2,1,"ng-template",null,5,i.W1O),i.qZA(),i._uU(11),i.TgZ(12,"strong",6),i._uU(13),i.qZA()(),i.YNc(14,v,3,6,"ng-container",0),i.ALo(15,"async"),i.BQk()}if(2&t){const t=e.ngIf,n=i.MAs(10),o=i.oxw();i.xp6(2),i.Q6J("ngIf",o.options.showPages),i.xp6(2),i.hij(" ",t.linesPerPage," "),i.xp6(1),i.Q6J("content",n)("open",o.open),i.xp6(3),i.AsE("",o.start+1,"–",o.end,""),i.xp6(3),i.hij(" ",t.of," "),i.xp6(2),i.Oqu(o.total),i.xp6(1),i.Q6J("ngIf",i.lcZ(15,9,o.spinTexts$))}}let M=(()=>{var t;class e{constructor(){this.options=(0,i.f3M)(r.R9),this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new i.vpe,this.sizeChange=new i.vpe,this.paginationChange=new i.vpe,this.open=!1,this.icons=(0,i.f3M)(s.TUI_SPIN_ICONS),this.spinTexts$=(0,i.f3M)(s.TUI_SPIN_TEXTS),this.texts$=(0,i.f3M)(o.J),this.commonIcons=(0,i.f3M)(s.TUI_COMMON_ICONS)}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(t){const{start:e}=this;this.size=t,this.sizeChange.emit(t),this.open=!1,this.page=Math.floor(e/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(t,e){1&t&&(i.YNc(0,y,16,11,"ng-container",0),i.ALo(1,"async")),2&t&&i.Q6J("ngIf",i.lcZ(1,1,e.texts$))},dependencies:[a.sg,a.O5,c.v,u.V,l.o,h.q,d.v,p.P,g.Li,a.Ov],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),e})()},10450:(t,e,n)=>{n.d(e,{PT:()=>r,R9:()=>s,Vl:()=>o});var i=n(53222);const o={sizeOptionContent:function({$implicit:t}){return`${t}`},showPages:!0,items:[10,20,50,100],size:10},s=(0,i.tuiCreateToken)(o);function r(t){return(0,i.tuiProvideOptions)(s,t,o)}},62818:(t,e,n)=>{n.d(e,{B:()=>o});var i=n(64537);let o=(()=>{var t;class e{constructor(){this.tuiCell="",this.template=(0,i.f3M)(i.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["ng-template","tuiCell",""]],inputs:{tuiCell:"tuiCell"}}),e})()},78979:(t,e,n)=>{n.d(e,{D:()=>o});var i=n(64537);let o=(()=>{var t;class e{constructor(){this.template=(0,i.f3M)(i.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"}}),e})()},17706:(t,e,n)=>{n.d(e,{Y:()=>h});var i=n(88692),o=n(64537),s=n(53222),r=n(75526),a=n(61528),c=n(42147),u=n(27969),l=n(13528);let h=(()=>{var t;class e{constructor(){this.doc=(0,o.f3M)(i.K0),this.el=(0,o.f3M)(o.SBq).nativeElement,this.parentRef=(0,o.f3M)(r.TUI_ELEMENT_REF).nativeElement,this.tuiResized=(0,s.tuiTypedFromEvent)(this.el,"mousedown").pipe((0,s.tuiPreventDefault)(),(0,a.w)((()=>{const{width:t,right:e}=this.parentRef.getBoundingClientRect();return(0,s.tuiTypedFromEvent)(this.doc,"mousemove").pipe((0,c.x)(),(0,u.U)((({clientX:n})=>t+n-e)),(0,l.R)((0,s.tuiTypedFromEvent)(this.doc,"mouseup")))})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=o.lG2({type:t,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"}}),e})()},35459:(t,e,n)=>{n.d(e,{L:()=>o});var i=n(64537);let o=(()=>{var t;class e{constructor(){this.tuiRowOf=[],this.template=(0,i.f3M)(i.Rgc)}static ngTemplateContextGuard(t,e){return!0}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["ng-template","tuiRow",""]],inputs:{tuiRowOf:"tuiRowOf"}}),e})()},61006:(t,e,n)=>{n.d(e,{P:()=>l});var i=n(64537),o=n(53222),s=n(88960),r=n(74970),a=n(27969),c=n(10435),u=n(19582);let l=(()=>{var t;class e{constructor(){this.sortables=o.EMPTY_QUERY,this.table=(0,i.f3M)(u.c),this.tuiSortByChange=this.table.sorterChange.pipe((0,s.g)(0),(0,r.h)((()=>!!this.sortables.length)),(0,a.U)((t=>this.getKey(t)))),this.tuiSortBy=null}set sortBy(t){this.tuiSortBy=t,this.checkSortables()}checkSortables(){this.sortables.forEach((t=>t.check()))}getKey(t){return this.sortables.find((e=>e.sorter===t))?.key||null}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["table","tuiTable","","tuiSortBy",""]],contentQueries:function(t,e,n){if(1&t&&i.Suo(n,c.g,5),2&t){let t;i.iGM(t=i.CRH())&&(e.sortables=t)}},inputs:{sortBy:["tuiSortBy","sortBy"]},outputs:{tuiSortByChange:"tuiSortByChange"}}),e})()},10435:(t,e,n)=>{n.d(e,{g:()=>a});var i=n(64537),o=n(96408),s=n(61006),r=n(19582);let a=(()=>{var t;class e{constructor(){this.table=(0,i.f3M)(r.c),this.th=(0,i.f3M)(o.W),this.sortBy=(0,i.f3M)((0,i.Gpc)((()=>s.P))),this.sorter=()=>0}get key(){return this.th.key}ngOnInit(){this.sorter=this.match?this.table.sorter:this.sorter,this.th.sorter=this.sorter}check(){this.match&&this.table.sorter!==this.sorter&&this.table.updateSorter(this.sorter)}get match(){return this.sortBy.tuiSortBy===this.key}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["th","tuiTh","","tuiSortable",""]]}),e})()},19582:(t,e,n)=>{n.d(e,{c:()=>l});var i=n(64537),o=n(11693),s=n(53222),r=n(75526),a=n(15315),c=n(30479),u=n(73446);let l=(()=>{var t;class e extends s.AbstractTuiController{constructor(){super(...arguments),this.options=(0,i.f3M)(u.Cc),this.cdr=(0,i.f3M)(i.sBO),this.columns=[],this.size=this.options.size,this.direction=this.options.direction,this.directionChange=new i.vpe,this.sorterChange=new i.vpe,this.mode$=(0,i.f3M)(r.TUI_MODE),this.stuck$=(0,i.f3M)(a.I),this.entries$=(0,i.f3M)(o.te),this.sorter=()=>0}updateSorterAndDirection(t){this.sorter===t?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(t),this.updateDirection(1))}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(t){this.sorter=t||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(t){this.direction=t,this.directionChange.emit(this.direction),this.change$.next()}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.ɵdir=i.lG2({type:t,selectors:[["table","tuiTable",""]],hostAttrs:[2,"border-collapse","separate"],hostVars:1,hostBindings:function(t,e){1&t&&i.NdJ("$.data-mode.attr",(function(){return e.mode$}))("$.class._stuck",(function(){return e.stuck$})),2&t&&i.uIk("data-size",e.size)},inputs:{columns:"columns",size:"size",direction:"direction",sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},features:[i._Bn(c.y),i.qOj]}),e})()},13073:(t,e,n)=>{n.d(e,{N:()=>r});var i=n(64537),o=n(11693),s=n(15315);let r=(()=>{var t;class e{constructor(){this.stuck$=(0,i.f3M)(s.I)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["thead","tuiThead",""]],hostBindings:function(t,e){1&t&&i.NdJ("$.class._stuck",(function(){return e.stuck$}))},features:[i._Bn([s.y,o.te,{provide:o.RL,useValue:"0px 10000px 10000px 10000px"}])]}),e})()},23301:(t,e,n)=>{n.d(e,{y:()=>c});var i,o=n(84911),s=n(64537),r=n(53222),a=n(19582);class c{constructor(){this.table=(0,s.f3M)(a.c)}transform(t){return this.sort(t,this.table.sorter,this.table.direction)}sort(t,e,n){return[...t].sort(((t,i)=>n*e(t,i)))}}(i=c).ɵfac=function(t){return new(t||i)},i.ɵpipe=s.Yjl({name:"tuiTableSort",type:i,pure:!1}),(0,o.gn)([r.tuiPure],c.prototype,"sort",null)},15315:(t,e,n)=>{n.d(e,{I:()=>r,y:()=>a});var i=n(64537),o=n(11693),s=n(27969);const r=new i.OlP("[TUI_STUCK]"),a={provide:r,deps:[i.SBq,o.te],useFactory:({nativeElement:t},e)=>{const n=e.pipe((0,s.U)((([{intersectionRatio:t}])=>t<1)));return t["$.class._stuck"]=n,n}}},35436:(t,e,n)=>{n.d(e,{W:()=>c});var i=n(64537),o=n(53222),s=n(75526),r=n(19582),a=n(23301);const c=[o.TuiDestroyService,a.y,{provide:r.c,deps:[[new i.tp0,r.c],i.sBO,o.TuiDestroyService],useFactory:s.tuiWatchedControllerFactory}]},30479:(t,e,n)=>{n.d(e,{y:()=>c});var i=n(64537),o=n(11693),s=n(75526),r=n(19582),a=n(15315);const c=[{provide:o.RL,useValue:"10000px 10000px 10000px 0px"},{provide:o.op,useValue:[0,1]},{provide:s.TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,useFactory:()=>{const t=new s.TuiTextfieldAppearanceDirective;return t.appearance=s.TuiAppearance.Table,t}},{provide:s.TUI_TEXTFIELD_LABEL_OUTSIDE,useValue:{labelOutside:!0}},{provide:s.TUI_TEXTFIELD_SIZE,useExisting:(0,i.Gpc)((()=>r.c))},o.te,s.MODE_PROVIDER,a.y]},73446:(t,e,n)=>{n.d(e,{Cc:()=>s,Jz:()=>r,dn:()=>o});var i=n(53222);const o={sticky:!1,resizable:!1,open:!0,size:"m",direction:1,sortIcons:{asc:"tuiIconSortAscending",desc:"tuiIconSortDescending",off:"tuiIconSortOff"}},s=(0,i.tuiCreateToken)(o);function r(t){return(0,i.tuiProvideOptions)(s,t,o)}},57681:(t,e,n)=>{n.d(e,{j:()=>y});var i=n(64537),o=n(53222),s=n(498),r=n(35459),a=n(19582),c=n(23301),u=n(35436),l=n(73446),h=n(84190),d=n(88692),p=n(89570),g=n(34880),f=n(35271);const b=["tuiTbody",""];function m(t,e){if(1&t&&(i.ynx(0),i._uU(1),i.BQk()),2&t){const t=e.polymorpheusOutlet;i.xp6(1),i.hij(" ",t," ")}}function C(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tr")(1,"th",1)(2,"button",2),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.onClick())})),i.TgZ(3,"span",3),i.YNc(4,m,2,1,"ng-container",4),i.qZA(),i._UZ(5,"tui-svg",5),i.qZA()()()}if(2&t){const t=i.oxw();i.xp6(1),i.Q6J("colSpan",t.table.columns.length),i.xp6(3),i.Q6J("polymorpheusOutlet",t.heading),i.xp6(1),i.ekj("t-chevron_rotated",t.open),i.Q6J("src",t.arrowOptions.iconLarge)}}function T(t,e){1&t&&(i.ynx(0),i.Hsn(1),i.BQk())}function _(t,e){if(1&t&&(i.GkF(0,7),i.ALo(1,"tuiMapper")),2&t){const t=e.$implicit,n=e.index,o=i.oxw(2);i.Q6J("ngTemplateOutlet",o.row.template)("ngTemplateOutletContext",i.Dn7(1,2,t,o.toContext,n))}}function O(t,e){if(1&t&&(i.ynx(0),i.YNc(1,_,2,6,"ng-container",6),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.sorted)}}const v=["*"];let y=(()=>{var t;class e{constructor(){this.pipe=(0,i.f3M)(c.y),this.options=(0,i.f3M)(l.Cc),this.data=[],this.open=this.options.open,this.openChange=new i.vpe,this.rows=o.EMPTY_QUERY,this.arrowOptions=(0,i.f3M)(s.TUI_ARROW_OPTIONS),this.table=(0,i.f3M)((0,i.Gpc)((()=>a.c))),this.toContext=(t,e)=>({$implicit:t,index:e})}get sorted(){return this.pipe.transform(this.data)}onClick(){this.open=!this.open,this.openChange.emit(this.open)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tbody","tuiTbody",""]],contentQueries:function(t,e,n){if(1&t&&(i.Suo(n,r.L,5),i.Suo(n,h.f,4)),2&t){let t;i.iGM(t=i.CRH())&&(e.row=t.first),i.iGM(t=i.CRH())&&(e.rows=t)}},inputs:{data:"data",heading:"heading",open:"open"},outputs:{openChange:"openChange"},features:[i._Bn(u.W)],attrs:b,ngContentSelectors:v,decls:3,vars:3,consts:[[4,"ngIf"],[1,"t-heading",3,"colSpan"],["type","button",1,"t-expand",3,"click"],[1,"t-name"],[4,"polymorpheusOutlet"],[1,"t-chevron",3,"src"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(i.F$t(),i.YNc(0,C,6,5,"tr",0),i.YNc(1,T,2,0,"ng-container",0),i.YNc(2,O,2,1,"ng-container",0)),2&t&&(i.Q6J("ngIf",e.heading),i.xp6(1),i.Q6J("ngIf",e.open),i.xp6(1),i.Q6J("ngIf",e.open&&e.row))},dependencies:[d.sg,d.O5,d.tP,p.Li,g.P,f.c],styles:['[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}'],changeDetection:0}),e})()},48598:(t,e,n)=>{n.d(e,{K:()=>a});var i=n(69900),o=n(64537);const s=["tuiTd",""],r=["*"];let a=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,i.a5,5),2&t){let t;o.iGM(t=o.CRH())&&(e.control=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_editable",e.control)},attrs:s,ngContentSelectors:r,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.Hsn(0))},styles:['[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),e})()},222:(t,e,n)=>{n.d(e,{E:()=>C});var i=n(64537),o=n(53222),s=n(51927),r=n(27969),a=n(78979),c=n(19582),u=n(35436),l=n(96408),h=n(88692);const d=["tuiThGroup",""];function p(t,e){if(1&t&&(i.TgZ(0,"th",5),i._uU(1),i.qZA()),2&t){const t=i.oxw(2).$implicit;i.xp6(1),i.hij(" ",t.toString()," ")}}function g(t,e){if(1&t&&i.YNc(0,p,2,1,"th",4),2&t){const t=i.oxw(3);i.Q6J("ngIf",!t.th&&!t.heads.length)}}function f(t,e){if(1&t&&(i.ynx(0,2),i.YNc(1,g,1,1,"ng-template",null,3,i.W1O),i.BQk()),2&t){const t=e.$implicit,n=i.MAs(2),o=i.oxw().ngIf;i.Q6J("ngTemplateOutlet",o[t]&&o[t].template||n)}}function b(t,e){if(1&t&&(i.ynx(0),i.YNc(1,f,3,1,"ng-container",1),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.table.columns)}}const m=["*"];let C=(()=>{var t;class e{constructor(){this.heads=o.EMPTY_QUERY,this.heads$=null,this.table=(0,i.f3M)((0,i.Gpc)((()=>c.c)))}ngAfterContentInit(){this.heads$=this.heads.changes.pipe((0,s.O)(null),(0,r.U)((()=>this.heads.reduce(((t,e)=>({...t,[e.tuiHead]:e})),{}))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["tr","tuiThGroup",""]],contentQueries:function(t,e,n){if(1&t&&(i.Suo(n,l.W,5),i.Suo(n,a.D,4)),2&t){let t;i.iGM(t=i.CRH())&&(e.th=t.first),i.iGM(t=i.CRH())&&(e.heads=t)}},features:[i._Bn([u.W])],attrs:d,ngContentSelectors:m,decls:3,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTh","",4,"ngIf"],["tuiTh",""]],template:function(t,e){1&t&&(i.F$t(),i.Hsn(0),i.YNc(1,b,2,1,"ng-container",0),i.ALo(2,"async")),2&t&&(i.xp6(1),i.Q6J("ngIf",i.lcZ(2,1,e.heads$)))},dependencies:[h.sg,h.O5,h.tP,l.W,h.Ov],encapsulation:2,changeDetection:0}),e})()},96408:(t,e,n)=>{n.d(e,{W:()=>m});var i=n(64537),o=n(53222),s=n(75526),r=n(78979),a=n(19582),c=n(73446),u=n(88692),l=n(34880),h=n(17706);const d=["tuiTh",""];function p(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",3),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.updateSorterAndDirection())})),i.GkF(1,4),i._uU(2),i.ALo(3,"async"),i._UZ(4,"tui-svg",5),i.qZA()}if(2&t){const t=i.oxw(),e=i.MAs(2);i.ekj("t-sort_sorted",t.isCurrent),i.xp6(1),i.Q6J("ngTemplateOutlet",e),i.xp6(1),i.hij(" ",i.lcZ(3,5,t.table.change$)," "),i.xp6(2),i.Q6J("src",t.icon)}}function g(t,e){1&t&&i.Hsn(0)}function f(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",6),i.NdJ("tuiResized",(function(e){i.CHM(t);const n=i.oxw();return i.KtG(n.onResized(e))})),i.qZA()}}const b=["*"];let m=(()=>{var t;class e{constructor(){this.options=(0,i.f3M)(c.Cc),this.head=(0,i.f3M)(r.D,{optional:!0}),this.sorter=this.head?(t,e)=>(0,o.tuiDefaultSort)(t[this.key],e[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky,this.width=null,this.table=(0,i.f3M)((0,i.Gpc)((()=>a.c)),{optional:!0})}get key(){if(!this.head)throw new o.TuiTableSortKeyException;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){return this.isCurrent?1===this.table?.direction?this.options.sortIcons.desc:this.options.sortIcons.asc:this.options.sortIcons.off}updateSorterAndDirection(){this.table?.updateSorterAndDirection(this.isCurrentAndAscDirection?null:this.sorter)}onResized(t){this.width=t}get isCurrentAndAscDirection(){return this.sorter===this.table?.sorter&&-1===this.table?.direction}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["th","tuiTh",""]],hostVars:4,hostBindings:function(t,e){2&t&&(i.Udp("width",e.width,"px"),i.ekj("_sticky",e.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky"},features:[i._Bn([{provide:s.TUI_ELEMENT_REF,useExisting:i.SBq}])],attrs:d,ngContentSelectors:b,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-sort-icon",3,"src"],[1,"t-bar",3,"tuiResized"]],template:function(t,e){if(1&t&&(i.F$t(),i.YNc(0,p,5,7,"button",0),i.YNc(1,g,1,0,"ng-template",null,1,i.W1O),i.YNc(3,f,1,0,"div",2)),2&t){const t=i.MAs(2);i.Q6J("ngIf",e.sorter&&e.table)("ngIfElse",t),i.xp6(3),i.Q6J("ngIf",e.resizable)}},dependencies:[u.O5,u.tP,l.P,h.Y,u.Ov],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:700;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%], table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}'],changeDetection:0}),e})()},84190:(t,e,n)=>{n.d(e,{f:()=>_});var i=n(8239),o=n(64537),s=n(53222),r=n(5557),a=n(61528),c=n(27969),u=n(62818),l=n(19582),h=n(35436),d=n(57681),p=n(88692),g=n(48598);const f=["tuiTr",""];function b(t,e){if(1&t&&(o.TgZ(0,"td",5),o._uU(1),o.qZA()),2&t){const t=e.ngIf,n=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t[n]," ")}}function m(t,e){if(1&t&&(o.YNc(0,b,2,1,"td",4),o.ALo(1,"async")),2&t){const t=o.oxw(3);o.Q6J("ngIf",o.lcZ(1,1,t.item$))}}function C(t,e){if(1&t&&(o.ynx(0,2),o.YNc(1,m,2,3,"ng-template",null,3,o.W1O),o.BQk()),2&t){const t=e.$implicit,n=o.MAs(2),i=o.oxw().ngIf;o.Q6J("ngTemplateOutlet",i[t]&&i[t].template||n)}}function T(t,e){if(1&t&&(o.ynx(0),o.YNc(1,C,3,1,"ng-container",1),o.BQk()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.table.columns)}}let _=(()=>{var t;class e{constructor(){this.cells=s.EMPTY_QUERY,this.body=(0,o.f3M)((0,o.Gpc)((()=>d.j))),this.contentReady$=new r.t(1),this.table=(0,o.f3M)((0,o.Gpc)((()=>l.c))),this.cells$=this.contentReady$.pipe((0,a.w)((()=>(0,s.tuiQueryListChanges)(this.cells))),(0,c.U)((t=>t.reduce(((t,e)=>({...t,[e.tuiCell]:e})),{})))),this.item$=this.contentReady$.pipe((0,a.w)((()=>(0,s.tuiQueryListChanges)(this.body.rows))),(0,c.U)((t=>this.body.sorted[t.findIndex((t=>t===this))])))}ngAfterContentInit(){var t=this;return(0,i.Z)((function*(){yield Promise.resolve(),t.contentReady$.next(!0)}))()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tr","tuiTr",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,u.B,4),2&t){let t;o.iGM(t=o.CRH())&&(e.cells=t)}},features:[o._Bn([h.W])],attrs:f,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTd","",4,"ngIf"],["tuiTd",""]],template:function(t,e){1&t&&(o.YNc(0,T,2,1,"ng-container",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.cells$))},dependencies:[p.sg,p.O5,p.tP,g.K,p.Ov],encapsulation:2,changeDetection:0}),e})()},3453:(t,e,n)=>{n.d(e,{Y:()=>i});class i{}},92338:(t,e,n)=>{n.d(e,{C:()=>r});var i=n(53222),o=n(3453),s=n(64537);let r=(()=>{var t;class e extends o.Y{constructor(){super(...arguments),this.filter=i.ALWAYS_TRUE_HANDLER}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=s.n5z(t)))(n||t)}}(),t.ɵdir=s.lG2({type:t,selectors:[["","tuiGenericFilter",""]],inputs:{filter:["tuiGenericFilter","filter"]},features:[s._Bn([{provide:o.Y,useExisting:t}]),s.qOj]}),e})()},98777:(t,e,n)=>{n.d(e,{X:()=>d});var i=n(64537),o=n(69900),s=n(3003),r=n(33072),a=n(21860),c=n(9018),u=n(42147),l=n(3453),h=n(76215);let d=(()=>{var t;class e{constructor(){this.head=(0,i.f3M)(s.DZ,{optional:!0}),this.delegate=(0,i.f3M)(l.Y),this.control=(0,i.f3M)(o.a5),this.filters=(0,i.f3M)(h.w),this.refresh$=(0,r.P)((()=>(0,a.T)(this.control.valueChanges||c.E,this.control.statusChanges?.pipe((0,u.x)())||c.E)))}ngOnInit(){this.filters.register(this)}ngOnDestroy(){this.filters.unregister(this)}filter(t){const{disabled:e,value:n}=this.control;return!!e||!this.key||this.delegate.filter(t[this.key],n)}get key(){return this.tuiTableFilter||this.head?.tuiHead}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=i.lG2({type:t,selectors:[["","tuiTableFilter",""]],inputs:{tuiTableFilter:"tuiTableFilter"}}),e})()},76215:(t,e,n)=>{n.d(e,{w:()=>l});var i=n(5557),o=n(61528),s=n(68330),r=n(51927),a=n(27969),c=n(21860),u=n(64537);let l=(()=>{var t;class e{constructor(){this.refresh$=new i.t(1),this.filters=[]}register(t){this.filters=this.filters.concat(t),this.update()}unregister(t){this.filters=this.filters.filter((e=>e!==t)),this.update()}filter(t){return this.refresh$.pipe((0,o.w)(s.y),(0,r.O)(null),(0,a.U)((()=>t.filter((t=>this.check(t))))))}check(t){return this.filters.every((e=>e.filter(t)))}update(){this.refresh$.next((0,c.T)(...this.filters.map((({refresh$:t})=>t))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=u.lG2({type:t,selectors:[["","tuiTableFilters",""]]}),e})()},44910:(t,e,n)=>{n.d(e,{h:()=>s});var i=n(64537),o=n(76215);let s=(()=>{var t;class e{constructor(){this.filters=(0,i.f3M)(o.w)}transform(t){return this.filters.filter(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=i.Yjl({name:"tuiTableFilters",type:t,pure:!0}),e})()},29297:(t,e,n)=>{n.r(e),n.d(e,{AbstractTuiTableFilter:()=>o.Y,TUI_REORDER_DEFAULT_OPTIONS:()=>i.Kx,TUI_REORDER_OPTIONS:()=>i.ch,TUI_STUCK:()=>i.I3,TUI_STUCK_PROVIDER:()=>i.yj,TUI_TABLE_DEFAULT_OPTIONS:()=>i.dn,TUI_TABLE_OPTIONS:()=>i.Cc,TUI_TABLE_PAGINATION_DEFAULT_OPTIONS:()=>i.Vl,TUI_TABLE_PAGINATION_OPTIONS:()=>i.R9,TUI_TABLE_PAGINATION_TEXTS:()=>h.J,TUI_TABLE_PROVIDER:()=>i.Wb,TUI_TABLE_PROVIDERS:()=>i.yc,TUI_TABLE_SHOW_HIDE_MESSAGE:()=>h.s,TuiCellDirective:()=>i.Bl,TuiDirectionOrderDirective:()=>i.lk,TuiGenericFilterDirective:()=>s.C,TuiHeadDirective:()=>i.DZ,TuiReorderComponent:()=>i.eO,TuiReorderModule:()=>i.tk,TuiResizedDirective:()=>i.YX,TuiRowDirective:()=>i.LU,TuiSortByDirective:()=>i.PQ,TuiSortableDirective:()=>i.gJ,TuiTableDirective:()=>i.c4,TuiTableFilterDirective:()=>r.X,TuiTableFiltersDirective:()=>a.w,TuiTableFiltersModule:()=>u,TuiTableFiltersPipe:()=>l.h,TuiTableModule:()=>i.jz,TuiTablePaginationComponent:()=>i.WT,TuiTablePaginationModule:()=>i.y3,TuiTableSortPipe:()=>i.yS,TuiTbodyComponent:()=>i.jY,TuiTdComponent:()=>i.Kt,TuiThComponent:()=>i.Ws,TuiThGroupComponent:()=>i.EE,TuiTheadDirective:()=>i.Nx,TuiTrComponent:()=>i.fu,tuiDefaultSort:()=>d,tuiReorderOptionsProvider:()=>i.AS,tuiTableOptionsProvider:()=>i.Jz,tuiTablePaginationOptionsProvider:()=>i.PT});var i=n(3003),o=n(3453),s=n(92338),r=n(98777),a=n(76215),c=n(64537);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({}),e})();var l=n(44910),h=n(23886);const d=n(53222).tuiDefaultSort},23886:(t,e,n)=>{n.d(e,{J:()=>r,s:()=>s});var i=n(53222),o=n(8514);const s=(0,i.tuiCreateTokenFromFactory)((0,o.vv)("showHideText")),r=(0,i.tuiCreateTokenFromFactory)((0,o.vv)("paginationTexts"))}}]);