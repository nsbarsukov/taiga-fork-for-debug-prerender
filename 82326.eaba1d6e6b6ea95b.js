"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82326],{82326:(z,m,o)=>{o.r(m),o.d(m,{default:()=>Q});var c=o(4594),t=o(35548),l=o(66094),u=o(37399),r=o(69104),d=o(98808),p=o(39908),h=o(85483);class f{constructor(i,n,a=null,s=!1){this.firstName=i,this.lastName=n,this.avatarUrl=a,this.disabled=s}toString(){return`${this.firstName} ${this.lastName}`}}const v=[new f("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368"),new f("Alex","Inkin",h.Ll`/images/avatar.jpg`)];var g=o(54795),C=o(13448),T=o(24815),b=o(275),E=o(97318),Z=o(75133),L=o(905),A=o(59582);let x=(()=>{var e;class i{constructor(){this.destroyRef=(0,t.f3M)(t.ktI),this.request$=new C.x,this.response$=this.request$.pipe((0,T.x)(),(0,b.w)(a=>(0,E.of)(v.filter(s=>(0,u.TUI_DEFAULT_MATCHER)(s,a))).pipe((0,Z.g)(1e3*Math.random()+500),(0,L.O)(null))),(0,g.sL)(this.destroyRef),(0,A.d)({bufferSize:1,refCount:!0}))}request(a){return this.request$.next(a||""),this.response$}}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),i})();var O=o(97749),U=o(80681),y=o(139),M=o(99931),N=o(88635),I=o(23199),J=o(10188);function S(e,i){if(1&e&&(t.TgZ(0,"tui-avatar",5),t._uU(1),t.ALo(2,"tuiInitials"),t.qZA(),t.TgZ(3,"span",6),t._uU(4),t.qZA()),2&e){const n=i.$implicit;t.Q6J("src",n.avatarUrl),t.xp6(1),t.hij(" ",t.lcZ(2,3,n.toString())," "),t.xp6(3),t.Oqu(n)}}function R(e,i){if(1&e&&(t.TgZ(0,"button",10)(1,"tui-avatar",5),t._uU(2),t.ALo(3,"tuiInitials"),t.qZA(),t.TgZ(4,"span",6),t._uU(5),t.qZA()()),2&e){const n=i.$implicit;t.Q6J("disabled",n.disabled)("value",n),t.xp6(1),t.Q6J("src",n.avatarUrl),t.xp6(1),t.hij(" ",t.lcZ(3,5,n.toString())," "),t.xp6(3),t.Oqu(n)}}function $(e,i){if(1&e&&(t.TgZ(0,"tui-data-list"),t.YNc(1,R,6,7,"button",9),t.qZA()),2&e){const n=t.oxw(2).tuiLet;t.xp6(1),t.Q6J("ngForOf",n)}}function j(e,i){1&e&&t._UZ(0,"tui-loader",11)}function F(e,i){if(1&e&&(t.YNc(0,$,2,1,"tui-data-list",7),t.YNc(1,j,1,0,"ng-template",null,8,t.W1O)),2&e){const n=t.MAs(2),a=t.oxw().tuiLet;t.Q6J("ngIf",a)("ngIfElse",n)}}function D(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tui-combo-box",1),t.NdJ("searchChange",function(s){t.CHM(n);const Y=t.oxw();return t.KtG(Y.search=s)}),t._uU(1," Find the best employees "),t._UZ(2,"input",2),t.YNc(3,S,5,5,"ng-template",null,3,t.W1O),t.YNc(5,F,3,2,"ng-template",4),t.qZA()}if(2&e){const n=t.MAs(4),a=t.oxw();t.Q6J("formControl",a.control)("tuiTextfieldLabelOutside",!0)("valueContent",n)("search",a.search)}}const Q=(()=>{var e;class i{constructor(){this.service=(0,t.f3M)(x),this.search="",this.control=new l.NI(v[0])}}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-combo-box-example-2"]],standalone:!0,exportAs:"ExampleComponent2",features:[t._Bn([x]),t.jDz],decls:4,vars:3,consts:[[3,"formControl","tuiTextfieldLabelOutside","valueContent","search","searchChange",4,"tuiLet"],[3,"formControl","tuiTextfieldLabelOutside","valueContent","search","searchChange"],["placeholder","Type a name","tuiTextfieldLegacy",""],["value",""],["tuiDataList",""],["size","xs",1,"avatar",3,"src"],[1,"name"],[4,"ngIf","ngIfElse"],["loading",""],["tuiOption","",3,"disabled","value",4,"ngFor","ngForOf"],["tuiOption","",3,"disabled","value"],[1,"tui-space_vertical-4"]],template:function(a,s){1&a&&(t.TgZ(0,"label"),t._uU(1," Type a name: "),t.YNc(2,D,6,4,"tui-combo-box",0),t.ALo(3,"async"),t.qZA()),2&a&&(t.xp6(2),t.Q6J("tuiLet",t.lcZ(3,1,s.service.request(s.search))))},dependencies:[c.Ov,c.O5,c.sg,l.UX,l.JJ,l.oH,u.TuiLetDirective,p.jpe,O._,U.m,y.M,r.TuiDataList,M.q,N.v,I.g,d.TuiAvatarComponent,r.TuiLoaderComponent,r.TuiInitialsPipe,p.cnw,J.x],styles:[".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],changeDetection:0}),i})()}}]);