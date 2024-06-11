"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98165],{98165:(Y,u,o)=>{o.r(u),o.d(u,{default:()=>b});var d=o(66094),r=o(85483),i=o(37399),p=o(69104),c=o(39908),s=o(29389),g=o(94344),P=o(43921),t=o(35548),T=o(33701),x=o(55836),E=o(31136),C=o(72187),y=o(34962),M=o(61091),f=o(95413),h=o(76970),D=o(62753),A=o(8141),O=o(7862),v=o(46953),U=o(10188),I=o(85454),V=o(41636);function L(n,_){1&n&&(t.TgZ(0,"p"),t._uU(1,"Component to input a single month"),t.qZA(),t.TgZ(2,"tui-doc-example",3),t.ALo(3,"tuiComponent"),t.ALo(4,"tuiExample"),t.TgZ(5,"tui-notification",4),t._uU(6," If you need to set some attributes or listen to events on native "),t.TgZ(7,"code"),t._uU(8,"input"),t.qZA(),t._uU(9," , you can put it inside with "),t.TgZ(10,"code"),t._uU(11,"Textfield"),t.qZA(),t._uU(12," directive as shown below "),t.qZA()(),t._UZ(13,"tui-doc-example",5),t.ALo(14,"tuiComponent"),t.ALo(15,"tuiExample"),t._UZ(16,"tui-doc-example",6),t.ALo(17,"tuiComponent"),t.ALo(18,"tuiExample")),2&n&&(t.xp6(2),t.Q6J("component",t.lcZ(3,6,1))("content",t.xi3(4,8,1,"html,ts")),t.xp6(11),t.Q6J("component",t.lcZ(14,11,2))("content",t.xi3(15,13,2,"html,ts")),t.xp6(3),t.Q6J("component",t.lcZ(17,16,3))("content",t.xi3(18,18,3,"html,ts")))}function Z(n,_){if(1&n&&(t.TgZ(0,"tui-input-month",14),t._uU(1," Month "),t.qZA()),2&n){const e=t.oxw(2);t.Udp("text-align",e.textAlign),t.Q6J("disabledItemHandler",e.disabledItemHandler)("focusable",e.focusable)("formControl",e.control)("max",e.max)("min",e.min)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}function K(n,_){1&n&&(t._uU(0," Disabled state (use "),t.TgZ(1,"code"),t._uU(2,"formControl.disable()"),t.qZA(),t._uU(3," ) "))}function B(n,_){1&n&&(t.TgZ(0,"div"),t._uU(1,"A handler that gets a date and returns true if it is disabled."),t.qZA(),t.TgZ(2,"strong"),t._uU(3,"Must be a pure function"),t.qZA())}function R(n,_){1&n&&t._uU(0," Minimum date ")}function W(n,_){1&n&&t._uU(0," Maximum date ")}function N(n,_){1&n&&t._uU(0," Custom align content by text-align ")}function H(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"tui-doc-demo",7),t.YNc(1,Z,2,16,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,K,4,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.disabled=a)}),t.YNc(4,B,4,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.disabledItemHandler=a)}),t.YNc(5,R,1,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.min=a)}),t.YNc(6,W,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.max=a)}),t.qZA(),t._UZ(7,"inherited-documentation"),t.TgZ(8,"tui-doc-documentation",12),t.YNc(9,N,1,0,"ng-template",13),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const m=t.oxw();return t.KtG(m.textAlign=a)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("control",e.control),t.xp6(3),t.Q6J("documentationPropertyValue",e.disabled),t.xp6(1),t.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),t.xp6(1),t.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),t.xp6(1),t.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),t.xp6(3),t.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function J(n,_){1&n&&t._UZ(0,"tui-setup")}const b=(()=>{var n;class _ extends g.b{constructor(){super(...arguments),this.minVariants=[i.TUI_FIRST_DAY,new i.TuiMonth(2019,2),new i.TuiMonth(2007,0),new i.TuiDay((new Date).getFullYear()+3,1,1)],this.maxVariants=[i.TUI_LAST_DAY,new i.TuiMonth(2017,2),new i.TuiMonth(2020,2),new i.TuiMonth(2023,0)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[i.TUI_FALSE_HANDLER,({month:l})=>l%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.cleaner=!1,this.control=new d.NI(null,d.kI.required)}}return(n=_).\u0275fac=function(){let e;return function(a){return(e||(e=t.n5z(n)))(a||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],standalone:!0,features:[t._Bn([(0,i.tuiProvide)(s.x,n)]),t.qOj,t.jDz],decls:4,vars:0,consts:[["header","InputMonth","package","KIT","type","components"],["pageTab",""],[4,"pageTab"],["id","base","heading","Basic",3,"component","content"],[1,"tui-space_bottom-4"],["id","sizes","heading","sizes",3,"component","content"],["id","native","heading","Native picker",3,"component","content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiMonth>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"disabledItemHandler","focusable","formControl","max","min","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiTextfieldCleaner","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize"]],template:function(l,a){1&l&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,L,19,21,"ng-template",1),t.YNc(2,H,10,10,"ng-template",1),t.YNc(3,J,1,0,"tui-setup",2),t.qZA())},dependencies:[r.kG,T.F,x.z,E.B,C.f,y.q,M.n,f.U,h.R,D.I,p.TuiNotificationComponent,c.jlj,A.X,O.g,d.UX,d.JJ,d.oH,c.cnw,v.b,U.x,I.s,V.a,P.w],encapsulation:2,changeDetection:0}),_})()}}]);