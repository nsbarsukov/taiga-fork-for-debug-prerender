(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82122],{82122:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiPrimitiveTextfieldModule:()=>ve});var i=n(88692),o=n(69900),a=n(91795),u=n(64500),r=n(75526),l=n(58146),c=n(89570),s=n(64537);let d=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[o.u5,i.ez,u.Lx,u.mG,r.TuiModeModule,l.TuiAccordionModule]}),t})(),p=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({}),t})();var m=n(77788),f=n(75695),h=n(82387),g=n(98204),x=n(57750),y=n(54218),v=n(16406),C=n(15800),T=n(63060),P=n(62733),b=n(64374),M=n(6707),V=n(68874),w=n(10200),Z=n(88494),_=n(3729),A=n(44998),H=n(89437),J=n(87205),U=n(79121),N=n(44124),I=n(66596),O=n(34880),L=n(84848),q=n(83074),S=n(10977),F=n(62840),k=n(60404),Q=n(43560),z=n(93525),G=n(38868),D=n(53222),B=n(91030),E=n(67446),Y=n(29070),K=n(54255),j=n(15491),R=n(2697);function W(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-svg",4),s.NdJ("click",(function(){s.CHM(e);const t=s.oxw();return s.KtG(t.togglePasswordVisibility())})),s.qZA()}if(2&e){const e=s.oxw(),t=s.MAs(6);s.Q6J("src",e.icon)("tuiHint",t)}}function X(e,t){if(1&e&&s._uU(0),2&e){const e=s.oxw();s.Oqu(e.hint)}}const $=["*"];let ee=(()=>{var e;class t extends D.AbstractTuiControl{constructor(){super(...arguments),this.isPasswordHidden=!0}get focused(){return!!this.textfield?.focused}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get icon(){return this.isPasswordHidden?"tuiIconEyeLarge":"tuiIconEyeOffLarge"}get hint(){return this.isPasswordHidden?"Show password":"Hide password"}get inputType(){return this.isPasswordHidden?"password":"text"}onFocused(e){this.updateFocused(e)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["tui-primitive-textfield-example-1"]],viewQuery:function(e,t){if(1&e&&s.Gf(r.TuiPrimitiveTextfieldComponent,5),2&e){let e;s.iGM(e=s.CRH())&&(t.textfield=e.first)}},features:[s.qOj],ngContentSelectors:$,decls:7,vars:7,consts:[[3,"disabled","focusable","invalid","readOnly","tuiTextfieldIcon","value","valueChange","focusedChange"],["tuiTextfield","",3,"type"],["iconContent",""],["hintContent",""],["appearance","icon","tuiWrapper","",1,"icon",3,"src","tuiHint","click"]],template:function(e,t){if(1&e&&(s.F$t(),s.TgZ(0,"tui-primitive-textfield",0),s.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),s.Hsn(1),s._UZ(2,"input",1),s.qZA(),s.YNc(3,W,1,2,"ng-template",null,2,s.W1O),s.YNc(5,X,1,1,"ng-template",null,3,s.W1O)),2&e){const e=s.MAs(4);s.Q6J("disabled",t.disabled)("focusable",t.focusable)("invalid",t.computedInvalid)("readOnly",t.readOnly)("tuiTextfieldIcon",e)("value",t.value),s.xp6(2),s.Q6J("type",t.inputType)}},dependencies:[T.y,P.B,B.M,Z.A,O.P,E.D,Y.x,K.t,j.D,R.o],styles:["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],changeDetection:0}),t})();var te=n(88135);let ne=(()=>{var e;class t extends D.AbstractTuiControl{get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return!!this.textfield?.focused}onFocused(e){this.updateFocused(e)}getFallbackValue(){return""}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["tui-primitive-textfield-example-2"]],viewQuery:function(e,t){if(1&e&&s.Gf(r.TuiPrimitiveTextfieldComponent,5),2&e){let e;s.iGM(e=s.CRH())&&(t.textfield=e.first)}},features:[s._Bn([(0,r.tuiTextfieldOptionsProvider)({iconCleaner:"tuiIconEdit2",hintOnDisabled:!0})]),s.qOj],decls:9,vars:5,consts:[["tuiTextfieldSize","m",1,"b-form",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside"],["tuiLabel","Modified cleaner icon"],[3,"value","valueChange","focusedChange"],["tuiTextfield","","type","email"],["tuiLabel","Override modified cleaner icon",1,"tui-space_top-4"],["iconCleaner","tuiIconEdit2","tuiHintContent","Hint is shown for disabled control",3,"disabled","value","valueChange","focusedChange"]],template:function(e,t){1&e&&(s.TgZ(0,"form",0)(1,"label",1)(2,"tui-primitive-textfield",2),s.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),s._uU(3," Type an email "),s._UZ(4,"input",3),s.qZA()(),s.TgZ(5,"label",4)(6,"tui-primitive-textfield",5),s.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),s._uU(7," Type an email "),s._UZ(8,"input",3),s.qZA()()()),2&e&&(s.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),s.xp6(2),s.Q6J("value",t.value),s.xp6(4),s.Q6J("disabled",!0)("value",t.value))},dependencies:[o._Y,o.JL,o.F,T.y,P.B,B.M,b.b,V.x,w.s,L.bZ,te.A],encapsulation:2,changeDetection:0}),t})();const ie=["interactiveContent"];function oe(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"p"),s._uU(1," PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. "),s.TgZ(2,"strong"),s._uU(3,"Does not work with Angular forms"),s.qZA()(),s.TgZ(4,"tui-doc-example",2)(5,"tui-notification",3),s._uU(6," Simplified version of "),s.TgZ(7,"a",4)(8,"code"),s._uU(9,"InputPassword"),s.qZA()()(),s.TgZ(10,"tui-primitive-textfield-example-1",5),s.NdJ("ngModelChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.password=t)})),s._uU(11," Type a password "),s.qZA()(),s.TgZ(12,"tui-doc-example",6)(13,"tui-notification",3),s._uU(14," If you need to set some attributes or listen to events on native "),s.TgZ(15,"code"),s._uU(16,"input"),s.qZA(),s._uU(17," , you can put it inside with "),s.TgZ(18,"code"),s._uU(19,"Textfield"),s.qZA(),s._uU(20," directive as shown below "),s.qZA(),s.TgZ(21,"tui-primitive-textfield-example-2",7),s.NdJ("ngModelChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.example2Value=t)})),s.qZA()()}if(2&e){const e=s.oxw();s.xp6(4),s.Q6J("content",e.example1),s.xp6(6),s.Q6J("ngModel",e.password),s.xp6(2),s.Q6J("content",e.example2),s.xp6(9),s.Q6J("ngModel",e.example2Value)}}function ae(e,t){if(1&e&&(s.TgZ(0,"tui-avatar",20),s._uU(1),s.qZA(),s._uU(2)),2&e){const e=t.$implicit;s.xp6(1),s.hij(" ",e," "),s.xp6(1),s.hij(" ",e," ")}}function ue(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-svg",21),s.NdJ("click",(function(){s.CHM(e);const t=s.oxw(2);return s.KtG(t.onClick())})),s.qZA()}}function re(e,t){1&e&&s._uU(0," Disabled state ")}function le(e,t){1&e&&s._uU(0," Native input allows inputting ")}function ce(e,t){1&e&&(s._uU(0," Pale text suggestion for input (e.g. HH:MM:SS for time). Use "),s.TgZ(1,"code"),s._uU(2,"tuiTextfieldFiller"),s.qZA(),s._uU(3," instead "))}function se(e,t){1&e&&(s._uU(0," Icon content. If content is a string, it is used as stringified svg or a name of icon registered in "),s.TgZ(1,"a",22)(2,"code"),s._uU(3,"SvgService"),s.qZA()(),s.TgZ(4,"p"),s._uU(5," Requires you to import "),s.TgZ(6,"code"),s._uU(7,"TuiTextfieldControllerModule"),s.qZA()())}function de(e,t){1&e&&s._uU(0," Component is read only ")}function pe(e,t){1&e&&s._uU(0," Invalid state ")}function me(e,t){1&e&&s._uU(0," Value ")}function fe(e,t){1&e&&s._uU(0," Custom align content by text-align ")}function he(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo")(1,"tui-primitive-textfield",8),s.NdJ("valueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.value=t)})),s._uU(2," Component label "),s.qZA()(),s.YNc(3,ae,3,2,"ng-template",null,9,s.W1O),s.YNc(5,ue,1,0,"ng-template",null,10,s.W1O),s.TgZ(7,"tui-doc-documentation"),s.YNc(8,re,1,0,"ng-template",11),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.disabled=t)})),s.YNc(9,le,1,0,"ng-template",12),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.editable=t)})),s.YNc(10,ce,4,0,"ng-template",13),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.filler=t)})),s.YNc(11,se,8,0,"ng-template",14),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.selectedIcon=t)})),s.YNc(12,de,1,0,"ng-template",15),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.readOnly=t)})),s.YNc(13,pe,1,0,"ng-template",16),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.invalid=t)})),s.YNc(14,me,1,0,"ng-template",17),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.value=t)})),s.qZA(),s._UZ(15,"hint-controller-documentation")(16,"textfield-controller-documentation")(17,"inherited-documentation"),s.TgZ(18,"tui-doc-documentation",18),s.YNc(19,fe,1,0,"ng-template",19),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.textAlign=t)})),s.qZA()}if(2&e){const e=s.oxw();s.xp6(1),s.Udp("text-align",e.textAlign),s.Q6J("disabled",e.disabled)("editable",e.editable)("focusable",e.focusable)("invalid",e.invalid)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("readOnly",e.readOnly)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldFiller",e.filler)("tuiTextfieldIcon",e.iconContent)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldPostfix",e.postfix)("tuiTextfieldPrefix",e.prefix)("tuiTextfieldSize",e.size)("value",e.value),s.xp6(7),s.Q6J("documentationPropertyValue",e.disabled),s.xp6(1),s.Q6J("documentationPropertyValue",e.editable),s.xp6(1),s.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.filler),s.xp6(1),s.Q6J("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.selectedIcon),s.xp6(1),s.Q6J("documentationPropertyValue",e.readOnly),s.xp6(1),s.Q6J("documentationPropertyValue",e.invalid),s.xp6(1),s.Q6J("documentationPropertyValue",e.value),s.xp6(5),s.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function ge(e,t){if(1&e&&(s.TgZ(0,"ol",23)(1,"li")(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiPrimitiveTextfieldModule"),s.qZA(),s._uU(6," into a module where you want to use our component "),s.qZA(),s._UZ(7,"tui-doc-code",24),s.qZA(),s.TgZ(8,"li")(9,"p"),s._uU(10,"Add to the template:"),s.qZA(),s._UZ(11,"tui-doc-code",25),s.qZA()()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}const xe="Bell";let ye=(()=>{var e;class t extends x.O{constructor(){super(...arguments),this.example1={TypeScript:n.e(75945).then(n.t.bind(n,75945,17)),HTML:n.e(34943).then(n.t.bind(n,34943,17)),LESS:n.e(35047).then(n.t.bind(n,35047,17))},this.example2={TypeScript:n.e(74039).then(n.t.bind(n,74039,17)),HTML:n.e(80036).then(n.t.bind(n,80036,17))},this.exampleModule=n.e(67875).then(n.t.bind(n,67875,17)),this.exampleHtml=n.e(83057).then(n.t.bind(n,83057,17)),this.themes=["Taiga UI","Bootstrap","Material"],this.theme=this.themes[0],this.iconVariants=["","tuiIconSearchLarge","Interactive content"],this.selectedIcon=this.iconVariants[0],this.iconLeftVariants=["","tuiIconPieChartLarge","tuiIconCreditCardLarge"],this.iconLeft="",this.typeVariants=["text","email","password","tel","url"],this.cleaner=!1,this.editable=!0,this.filler="",this.prefix="",this.postfix="",this.maxLengthVariants=[10],this.maxLength=null,this.inputModeVariants=["text","numeric"],this.inputMode=this.inputModeVariants[0],this.customContentVariants=["",xe,"<span>LongTextContent</span>"],this.customContentSelected=this.customContentVariants[0],this.password="",this.example2Value="mail@example.com",this.value="",this.exampleText="",this.disabled=!1,this.readOnly=!1,this.labelOutside=!1,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[2],this.hintContentVariants=["","Ivan Ivanov"],this.hintDirectionVariants=r.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.invalid=!1,this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0]}get customContent(){return this.customContentSelected===xe?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get iconContent(){return""===this.selectedIcon?"":this.interactiveIcon&&"tuiIconSearchLarge"!==this.selectedIcon?this.interactiveIcon:"tuiIconSearchLarge"}get isBootstrap(){return this.theme===this.themes[1]}get isMaterial(){return this.theme===this.themes[2]}get placeholder(){return this.isBootstrap?"Type a value":"Theming sample"}get customizationSize(){return this.isBootstrap?"s":"l"}onClick(){console.info("Interactive icon clicked")}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-primitive-textfield"]],viewQuery:function(e,t){if(1&e&&s.Gf(ie,5),2&e){let e;s.iGM(e=s.CRH())&&(t.interactiveIcon=e.first)}},features:[s._Bn([{provide:g.x,useExisting:(0,s.Gpc)((()=>e))}]),s.qOj],decls:4,vars:0,consts:[["header","PrimitiveTextfield","package","CORE","type","components"],["pageTab",""],["id","example-size","heading","sizes",3,"content"],[1,"tui-space_bottom-4","b-form"],["routerLink","/components/input-password","tuiLink",""],[1,"b-form",3,"ngModel","ngModelChange"],["id","options","heading","Options",3,"content"],[3,"ngModel","ngModelChange"],[3,"disabled","editable","focusable","invalid","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldFiller","tuiTextfieldIcon","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","value","valueChange"],["template",""],["interactiveContent",""],["documentationPropertyMode","input","documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","editable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","filler","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldIcon","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","readOnly","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","invalid","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","value","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["size","xs",1,"avatar"],["src","tuiIconCalendarLarge",1,"icon-button",3,"click"],["routerLink","/services/svg-service","tuiLink",""],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,oe,22,4,"ng-template",1),s.YNc(2,he,20,34,"ng-template",1),s.YNc(3,ge,12,2,"ng-template",1),s.qZA())},dependencies:[o.JJ,o.On,y.w,v.F,C.O,T.y,P.B,b.b,M.B,V.x,w.s,Z.A,_.a,A.A,H.T,J.k,U.L,N.J,I.V,O.P,L.bZ,q.c,S.F,F.z,k.B,Q.q,z.n,G.f,a.rH,ee,ne],styles:["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:.5rem}.label[_ngcontent-%COMP%]{width:22.5rem}.input[_ngcontent-%COMP%]{margin-top:.25rem}"],changeDetection:0}),t})(),ve=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[i.ez,o.u5,o.UX,f.f,m.I,h.J,r.TuiPrimitiveTextfieldModule,r.TuiTextfieldControllerModule,r.TuiNotificationModule,l.TuiAvatarComponent,r.TuiLinkModule,r.TuiSvgModule,r.TuiButtonModule,c.wq,r.TuiHintModule,l.TuiRadioListModule,d,r.TuiLabelModule,r.TuiWrapperModule,p,u.fV,a.Bz.forChild((0,u.Ve)(ye))]}),t})()}}]);