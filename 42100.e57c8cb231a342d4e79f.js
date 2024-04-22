(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[42100],{89104:(e,n,t)=>{t.d(n,{X:()=>f});var o=t(98204),i=t(74788),a=t(33982),r=t(66596),u=t(61544),d=t(60404),p=t(12057);function c(e,n){1&e&&i._uU(0," Hard control/monitor for the dropdown being visible ")}function l(e,n){1&e&&(i._uU(0," Align of dropdown (does not work together with "),i.TgZ(1,"code"),i._uU(2,"limitWidth === 'fixed'"),i.qZA(),i._uU(3," ) "))}function s(e,n){1&e&&i._uU(0," Set a vertical direction of dropdown ")}function m(e,n){1&e&&i._uU(0," Limit width of dropdown ")}function g(e,n){1&e&&(i._uU(0," Minimum height to calculate that dropdown fits to set "),i.TgZ(1,"code"),i._uU(2,"tuiDropdownDirection"),i.qZA())}function h(e,n){1&e&&i._uU(0," Maximum height of dropdown ")}function w(e,n){1&e&&i._uU(0," Dropdown offset ")}t(155);let f=(()=>{class e{constructor(e){this.documentedComponent=e}}return e.ɵfac=function(n){return new(n||e)(i.Y36(o.x))},e.ɵcmp=i.Xpm({type:e,selectors:[["dropdown-documentation"]],decls:17,vars:12,consts:[[1,"tui-text_h6"],["routerLink","/directives/dropdown","target","_blank","tuiLink",""],["documentationPropertyMode","input-output","documentationPropertyName","tuiDropdownOpen","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownAlign","documentationPropertyType","TuiDropdownAlign",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownDirection","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMinHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownOffset","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"]],template:function(e,n){1&e&&(i.TgZ(0,"h6",0),i._uU(1," Can be expanded with "),i.TgZ(2,"a",1),i._uU(3," TuiDropdown "),i.qZA(),i.qZA(),i.TgZ(4,"p"),i._uU(5," Requires you to import "),i.TgZ(6,"code"),i._uU(7,"TuiDropdownModule"),i.qZA(),i.qZA(),i.TgZ(8,"tui-doc-documentation"),i.YNc(9,c,1,0,"ng-template",2),i.ALo(10,"async"),i.NdJ("documentationPropertyValueChange",(function(e){return n.documentedComponent.dropdownOpen.next(e)})),i.YNc(11,l,4,0,"ng-template",3),i.NdJ("documentationPropertyValueChange",(function(e){return n.documentedComponent.dropdownAlign=e})),i.YNc(12,s,1,0,"ng-template",4),i.NdJ("documentationPropertyValueChange",(function(e){return n.documentedComponent.dropdownDirection=e})),i.YNc(13,m,1,0,"ng-template",5),i.NdJ("documentationPropertyValueChange",(function(e){return n.documentedComponent.dropdownLimitWidth=e})),i.YNc(14,g,3,0,"ng-template",6),i.NdJ("documentationPropertyValueChange",(function(e){return n.documentedComponent.dropdownMinHeight=e})),i.YNc(15,h,1,0,"ng-template",7),i.NdJ("documentationPropertyValueChange",(function(e){return n.documentedComponent.dropdownMaxHeight=e})),i.YNc(16,w,1,0,"ng-template",8),i.NdJ("documentationPropertyValueChange",(function(e){return n.documentedComponent.dropdownOffset=e})),i.qZA()),2&e&&(i.xp6(9),i.Q6J("documentationPropertyValue",i.lcZ(10,10,n.documentedComponent.dropdownOpen)),i.xp6(2),i.Q6J("documentationPropertyValues",n.documentedComponent.dropdownAlignVariants)("documentationPropertyValue",n.documentedComponent.dropdownAlign),i.xp6(1),i.Q6J("documentationPropertyValues",n.documentedComponent.dropdownDirectionVariants)("documentationPropertyValue",n.documentedComponent.dropdownDirection),i.xp6(1),i.Q6J("documentationPropertyValues",n.documentedComponent.dropdownLimitWidthVariants)("documentationPropertyValue",n.documentedComponent.dropdownLimitWidth),i.xp6(1),i.Q6J("documentationPropertyValue",n.documentedComponent.dropdownMinHeight),i.xp6(1),i.Q6J("documentationPropertyValue",n.documentedComponent.dropdownMaxHeight),i.xp6(1),i.Q6J("documentationPropertyValue",n.documentedComponent.dropdownOffset))},directives:[a.yS,r.V,u.z,d.B],pipes:[p.Ov],encapsulation:2,changeDetection:0}),e})()},19180:(e,n,t)=>{t.d(n,{F:()=>d});var o=t(12057),i=t(33982),a=t(52404),r=t(64862),u=t(74788);let d=(()=>{class e{}return e.ɵfac=function(n){return new(n||e)},e.ɵmod=u.oAB({type:e}),e.ɵinj=u.cJS({imports:[[o.ez,i.Bz,a.Lx,r.TuiLinkModule]]}),e})()},155:(e,n,t)=>{t.d(n,{X:()=>a});var o=t(64862),i=t(26215);class a{constructor(){this.dropdownAlignVariants=["left","right","center"],this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownDirectionVariants=["bottom","top"],this.dropdownAlign=o.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownDirection=o.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownLimitWidth=o.TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth,this.dropdownMinHeight=o.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=o.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.dropdownOffset=o.TUI_DROPDOWN_DEFAULT_OPTIONS.offset,this.dropdownOpen=new i.X(!1)}}},98204:(e,n,t)=>{t.d(n,{x:()=>o});const o=new(t(74788).OlP)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},42100:(e,n,t)=>{t.r(n),t.d(n,{ExampleTuiDropdownModule:()=>qe});var o=t(17068),i=t(12057),a=t(23738),r=t(33982),u=t(52404),d=t(24421),p=t(4797),c=t(64862),l=t(25230),s=t(26485),m=t(89570),g=t(19180),h=t(74788),w=t(155),f=t(98204),T=t(43560),M=t(93525),Z=t(66596),y=t(33772),A=t(76189),x=t(26072),C=t(9829),b=t(82886),D=t(7860),_=t(17163),P=t(53279);function U(e,n){1&e&&(h.TgZ(0,"div",2),h._uU(1,"But there is nothing to choose..."),h.qZA())}let v=(()=>{class e{constructor(){this.open=!1}onClick(){this.open=!this.open}onObscured(e){e&&(this.open=!1)}onActiveZone(e){this.open=e&&this.open}}return e.ɵfac=function(n){return new(n||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-dropdown-example-1"]],decls:4,vars:2,consts:[["iconRight","tuiIconChevronDown","tuiButton","","type","button",3,"tuiDropdown","tuiDropdownManual","click","tuiActiveZoneChange","tuiObscured"],["dropdownContent",""],[1,"dropdown"]],template:function(e,n){if(1&e&&(h.TgZ(0,"button",0),h.NdJ("click",(function(){return n.onClick()}))("tuiActiveZoneChange",(function(e){return n.onActiveZone(e)}))("tuiObscured",(function(e){return n.onObscured(e)})),h._uU(1," Choose "),h.YNc(2,U,2,0,"ng-template",null,1,h.W1O),h.qZA()),2&e){const e=h.MAs(3);h.Q6J("tuiDropdown",e)("tuiDropdownManual",n.open)}},directives:[A.v,x.t,C.V,b.A,D.T,_.e,P.z],styles:[".dropdown[_ngcontent-%COMP%]{font-size:.8125rem;line-height:1.25rem;text-transform:uppercase;letter-spacing:.075em;padding:.25rem .75rem}"],changeDetection:0}),e})();var N=t(27075),O=t(82535),q=t(33250),S=t(46516);function J(e,n){if(1&e&&(h.TgZ(0,"div",5),h._UZ(1,"tui-avatar",6),h.TgZ(2,"div",7),h.TgZ(3,"div",8),h._uU(4,"Taiga UI developer"),h.qZA(),h.TgZ(5,"div",9),h._uU(6,"Alex Inkin"),h.qZA(),h.TgZ(7,"div",10),h._uU(8,"a.inkin"),h.qZA(),h.qZA(),h.qZA()),2&e){const e=h.oxw();h.xp6(1),h.Q6J("src",e.avatarUrl)}}let V=(()=>{class e{constructor(){this.open=!1,this.avatarUrl=N.L`/images/avatar.jpg`}onMouseEnter(){this.open=!0}onMouseLeave(){this.open=!1}}return e.ɵfac=function(n){return new(n||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-dropdown-example-2"]],decls:12,vars:5,consts:[[1,"toggle"],["size","l",3,"ngModel","ngModelChange"],["tuiDropdown","A directive to show content in a dropdown","tuiDropdownDirection","bottom",3,"textContent","tuiDropdownManual"],["tuiDropdownDirection","top","tuiLink","","type","button",3,"tuiDropdown","tuiDropdownManual"],["dropdownContent",""],[1,"dropdown"],["size","l",3,"src"],[1,"text"],[1,"label"],[1,"name"],[1,"account"]],template:function(e,n){if(1&e&&(h.TgZ(0,"p"),h.TgZ(1,"label",0),h.TgZ(2,"tui-toggle",1),h.NdJ("ngModelChange",(function(e){return n.open=e})),h.qZA(),h._uU(3," Show help "),h.qZA(),h.qZA(),h._uU(4,"\nYou can ask any questions about\n"),h._UZ(5,"code",2),h._uU(6,"\nand\n"),h.TgZ(7,"button",3),h._uU(8," Alex\n"),h.qZA(),h._uU(9,"\nwill gladly answer! "),h.YNc(10,J,9,1,"ng-template",null,4,h.W1O)),2&e){const e=h.MAs(11);h.xp6(2),h.Q6J("ngModel",n.open),h.xp6(3),h.Q6J("textContent","tuiDropdown")("tuiDropdownManual",n.open),h.xp6(2),h.Q6J("tuiDropdown",e)("tuiDropdownManual",n.open)}},directives:[O.p,a.JJ,a.On,x.t,C.V,b.A,D.T,q.Ek,Z.V,S.J],styles:[".dropdown[_ngcontent-%COMP%]{display:flex;width:14rem;padding:.375rem .75rem}.toggle[_ngcontent-%COMP%]{display:flex;grid-gap:.5rem;gap:.5rem;align-items:center}.text[_ngcontent-%COMP%]{padding:0 .75rem}.label[_ngcontent-%COMP%]{font:var(--tui-font-text-m);color:var(--tui-text-03)}.name[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.account[_ngcontent-%COMP%]{font:var(--tui-font-text-s);margin-top:.25rem;color:var(--tui-text-02)}"],changeDetection:0}),e})();var L=t(20945),k=t(46782),I=t(77027),B=t(41360);function Q(e,n){1&e&&(h.TgZ(0,"p"),h._uU(1," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? "),h.qZA())}function H(e,n){if(1&e){const e=h.EpF();h.TgZ(0,"div",4),h.TgZ(1,"tui-input",0),h.NdJ("ngModelChange",(function(n){return h.CHM(e),h.oxw().value=n})),h._uU(2,"Changes propagate both ways"),h.qZA(),h.TgZ(3,"p"),h._uU(4," Use "),h.TgZ(5,"code"),h._uU(6,"polymorpheus"),h.qZA(),h._uU(7," directive on the template to make changes propagate both ways "),h.qZA(),h.YNc(8,Q,2,0,"p",5),h.qZA()}if(2&e){const e=h.oxw();h.xp6(1),h.Q6J("ngModel",e.value),h.xp6(7),h.Q6J("ngIf",e.showBigText)}}let E=(()=>{class e{constructor(e,n){this.open=!1,this.value="some data",this.showBigText=!1,(0,L.F)(3e3).pipe((0,p.tuiWatch)(n),(0,k.R)(e)).subscribe((()=>{this.showBigText=!this.showBigText}))}}return e.ɵfac=function(n){return new(n||e)(h.Y36(p.TuiDestroyService,2),h.Y36(h.sBO))},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-dropdown-example-3"]],features:[h._Bn([p.TuiDestroyService])],decls:7,vars:5,consts:[[3,"ngModel","ngModelChange"],[1,"flex",3,"tuiDropdown","tuiDropdownManual"],[3,"polymorpheus"],["dropdownContent","polymorpheus"],[1,"dropdown"],[4,"ngIf"]],template:function(e,n){if(1&e&&(h.TgZ(0,"tui-input",0),h.NdJ("ngModelChange",(function(e){return n.value=e})),h._uU(1,"Changes propagate both ways"),h.qZA(),h.TgZ(2,"label",1),h.TgZ(3,"tui-toggle",0),h.NdJ("ngModelChange",(function(e){return n.open=e})),h.qZA(),h._uU(4," Open dropdown\n"),h.qZA(),h.YNc(5,H,9,2,"ng-template",2,3,h.W1O)),2&e){const e=h.MAs(6);h.Q6J("ngModel",n.value),h.xp6(2),h.Q6J("tuiDropdown",e)("tuiDropdownManual",n.open),h.xp6(1),h.Q6J("ngModel",n.open),h.xp6(2),h.Q6J("polymorpheus","")}},directives:[I.K,B.w,a.JJ,a.On,x.t,C.V,b.A,D.T,O.p,m.GL,i.O5],styles:[".flex[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:.5rem;gap:.5rem;margin-top:1rem}.dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:1rem}"],changeDetection:0}),e})();var z=t(79121);function R(e,n){1&e&&(h.TgZ(0,"blockquote"),h._uU(1,"I'm a customized dropdown!"),h.qZA())}let W=(()=>{class e{constructor(){this.open=!1}}return e.ɵfac=function(n){return new(n||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-dropdown-example-4"]],decls:5,vars:3,consts:[["tuiDropdownAlign","center","tuiDropdownAppearance","round","tuiDropdownDirection","top",3,"tuiDropdown","tuiDropdownManual"],["size","l",1,"tui-space_right-2",3,"ngModel","ngModelChange"],["content",""]],template:function(e,n){if(1&e&&(h.TgZ(0,"label",0),h.TgZ(1,"tui-toggle",1),h.NdJ("ngModelChange",(function(e){return n.open=e})),h.qZA(),h._uU(2," Show dropdown "),h.YNc(3,R,2,0,"ng-template",null,2,h.W1O),h.qZA()),2&e){const e=h.MAs(4);h.Q6J("tuiDropdown",e)("tuiDropdownManual",n.open),h.xp6(1),h.Q6J("ngModel",n.open)}},directives:[q.Ek,x.t,C.V,b.A,D.T,O.p,a.JJ,a.On],styles:["tui-dropdown[data-appearance=round]{border-radius:10rem}\n"],encapsulation:2,changeDetection:0}),e})();var Y=t(41967),F=t(89290),G=t(18652),X=t(52219),j=t(50170),K=t(1414),$=t(68874),ee=t(93251),ne=t(49538),te=t(69956),oe=t(16753),ie=t(13735),ae=t(44998),re=t(91030),ue=t(50020),de=t(20501),pe=t(4406),ce=t(29059),le=t(68800),se=t(30114),me=t(38844);function ge(e,n){if(1&e&&(h._UZ(0,"tui-data-list-wrapper",9),h.ALo(1,"tuiFilterByInput")),2&e){const e=h.oxw();h.Q6J("items",h.lcZ(1,1,e.countries))}}function he(e,n){if(1&e&&h._UZ(0,"tui-data-list-wrapper",10),2&e){const e=h.oxw(),n=h.MAs(13);h.Q6J("itemContent",n)("items",e.users)}}function we(e,n){if(1&e){const e=h.EpF();h.ynx(0),h._UZ(1,"tui-data-list-wrapper",11),h.ALo(2,"tuiFilterByInputWith"),h.TgZ(3,"button",12),h.NdJ("click",(function(){return h.CHM(e),h.oxw().open=!1})),h._uU(4," Done "),h.qZA(),h.BQk()}if(2&e){const e=h.oxw(),n=h.MAs(13);h.xp6(1),h.Q6J("itemContent",n)("items",h.xi3(2,2,e.users,e.stringify))}}function fe(e,n){if(1&e&&(h.TgZ(0,"span",13),h._UZ(1,"tui-avatar",14),h.TgZ(2,"span",15),h._uU(3),h.TgZ(4,"span",16),h._uU(5),h.ALo(6,"async"),h.ALo(7,"tuiAmount"),h.qZA(),h.qZA(),h.qZA()),2&e){const e=n.$implicit;h.xp6(1),h.Q6J("src",e.url),h.xp6(2),h.hij(" ",e.name," "),h.xp6(2),h.hij(" ",h.lcZ(6,3,h.Dn7(7,5,e.balance,"$","left"))," ")}}let Te=(()=>{class e{constructor(){this.country=null,this.selected=[],this.sum=null,this.user=null,this.open=!1,this.countries=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation","Rwanda","Réunion","Saint Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"],this.users=[{name:"Alex Inkin",balance:1323525,url:N.L`/images/avatar.jpg`},{name:"Roman Sedov",balance:523242,url:"RS"},{name:"Vladimir Potekhin",balance:645465,url:"VP"},{name:"Nikita Barsukov",balance:468468,url:"NB"},{name:"Maxim Ivanov",balance:498654,url:"MI"}],this.stringify=({name:e})=>e}}return e.ɵfac=function(n){return new(n||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-dropdown-example-5"]],decls:14,vars:9,consts:[["tuiDropdownMobile","",3,"ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[1,"tui-space_vertical-4",3,"tuiDropdownMobile","tuiTextfieldLabelOutside","valueContent","ngModel","ngModelChange"],[3,"itemContent","items",4,"tuiDataList"],["tuiDropdownMobile","",1,"tui-space_vertical-4",3,"stringify","ngModel","tuiDropdownOpen","ngModelChange","tuiDropdownOpenChange"],[4,"tuiDataList"],["tuiTextfieldPrefix","$",3,"ngModel","ngModelChange"],["tuiTextfield",""],["template",""],[3,"items"],[3,"itemContent","items"],["tuiMultiSelectGroup","",3,"itemContent","items"],["appearance","accent","size","m","tuiButton","","tuiDropdownButton","",3,"click"],["tuiCell",""],[3,"src"],["tuiTitle",""],["tuiSubtitle",""]],template:function(e,n){if(1&e&&(h.TgZ(0,"tui-combo-box",0),h.NdJ("ngModelChange",(function(e){return n.country=e})),h._uU(1," Country "),h.YNc(2,ge,2,3,"tui-data-list-wrapper",1),h.qZA(),h.TgZ(3,"tui-select",2),h.NdJ("ngModelChange",(function(e){return n.user=e})),h._uU(4," Select user "),h.YNc(5,he,1,2,"tui-data-list-wrapper",3),h.qZA(),h.TgZ(6,"tui-multi-select",4),h.NdJ("ngModelChange",(function(e){return n.selected=e}))("tuiDropdownOpenChange",(function(e){return n.open=e})),h._uU(7," Pick more users "),h.YNc(8,we,5,5,"ng-container",5),h.qZA(),h.TgZ(9,"tui-input-number",6),h.NdJ("ngModelChange",(function(e){return n.sum=e})),h._uU(10," Sum "),h._UZ(11,"input",7),h.qZA(),h.YNc(12,fe,8,9,"ng-template",null,8,h.W1O)),2&e){const e=h.MAs(13);h.Q6J("ngModel",n.country),h.xp6(3),h.Q6J("tuiDropdownMobile","Select user")("tuiTextfieldLabelOutside",!0)("valueContent",e)("ngModel",n.user),h.xp6(3),h.Q6J("stringify",n.stringify)("ngModel",n.selected)("tuiDropdownOpen",n.open),h.xp6(3),h.Q6J("ngModel",n.sum)}},directives:[Y._,F.m,G.S,a.JJ,a.On,X.g,j.u,K.O,$.x,ee.V,ne.b,te.o,oe.q,ie.g,ae.A,re.M,ue.e,de.Q,A.v,pe.B,S.J,ce.b],pipes:[le.b,se.Y,i.Ov,me.m],encapsulation:2,changeDetection:0}),e})();var Me=t(10977),Ze=t(61544),ye=t(60404),Ae=t(89104),xe=t(83074);const Ce=function(){return["/directives/active-zone"]},be=function(){return["/components/hosted-dropdown"]};function De(e,n){if(1&e&&(h.TgZ(0,"div",2),h.TgZ(1,"code"),h._uU(2,"tuiDropdown"),h.qZA(),h._uU(3," shows a dropdown with custom template. Use "),h.TgZ(4,"a",3),h._uU(5," ActiveZone "),h.qZA(),h._uU(6," directive to hide dropdown. "),h.qZA(),h.TgZ(7,"p"),h._uU(8," See also "),h.TgZ(9,"a",3),h._uU(10," HostedDropdown "),h.qZA(),h.qZA(),h.TgZ(11,"tui-doc-example",4),h._UZ(12,"tui-dropdown-example-1"),h.qZA(),h.TgZ(13,"tui-doc-example",5),h._UZ(14,"tui-dropdown-example-2"),h.qZA(),h.TgZ(15,"tui-doc-example",6),h._UZ(16,"tui-dropdown-example-3"),h.qZA(),h.TgZ(17,"tui-doc-example",7),h.TgZ(18,"tui-notification",2),h._uU(19," Use unencapsulated styles to customize dropdown appearance "),h.qZA(),h._UZ(20,"tui-dropdown-example-4"),h.qZA(),h.TgZ(21,"tui-doc-example",8),h.TgZ(22,"tui-notification",2),h._uU(23," Import "),h.TgZ(24,"code"),h._uU(25,"TuiDropdownMobileModule"),h.qZA(),h._uU(26," from "),h.TgZ(27,"b"),h._uU(28,"addon-mobile"),h.qZA(),h._uU(29," package "),h.qZA(),h._UZ(30,"tui-dropdown-example-5"),h.qZA()),2&e){const e=h.oxw();h.xp6(4),h.Q6J("routerLink",h.DdM(7,Ce)),h.xp6(5),h.Q6J("routerLink",h.DdM(8,be)),h.xp6(2),h.Q6J("content",e.example1),h.xp6(2),h.Q6J("content",e.example2),h.xp6(2),h.Q6J("content",e.example3),h.xp6(2),h.Q6J("content",e.example4),h.xp6(4),h.Q6J("content",e.example5)}}function _e(e,n){1&e&&(h.TgZ(0,"div",14),h._uU(1," Here can be any content "),h.TgZ(2,"p"),h._uU(3,"You can even insert other components:"),h.qZA(),h.TgZ(4,"button",15),h._uU(5," Do not touch! "),h.qZA(),h.TgZ(6,"p"),h._uU(7,"Everything you want... *"),h.qZA(),h.TgZ(8,"sub"),h._uU(9,"* except cases of human rights violation"),h.qZA(),h.qZA())}function Pe(e,n){1&e&&h._uU(0," Show dropdown (basic manual implementation, see related pages for other options) ")}function Ue(e,n){1&e&&h._uU(0," Content ")}function ve(e,n){if(1&e){const e=h.EpF();h.TgZ(0,"tui-doc-demo"),h.TgZ(1,"span",9),h.NdJ("tuiActiveZoneChange",(function(n){return h.CHM(e),h.oxw().onActiveZone(n)})),h.TgZ(2,"button",10),h.NdJ("click",(function(){return h.CHM(e),h.oxw().onClick()}))("tuiObscured",(function(n){return h.CHM(e),h.oxw().onObscured(n)})),h._uU(3," PRESS! "),h.TgZ(4,"i"),h._uU(5,"* There is also a pretty long text to check its width limitations"),h.qZA(),h.qZA(),h.YNc(6,_e,10,0,"ng-template",null,11,h.W1O),h.qZA(),h.qZA(),h.TgZ(8,"tui-doc-documentation"),h.YNc(9,Pe,1,0,"ng-template",12),h.NdJ("documentationPropertyValueChange",(function(n){return h.CHM(e),h.oxw().open=n})),h.YNc(10,Ue,1,0,"ng-template",13),h._UZ(11,"dropdown-documentation"),h.qZA()}if(2&e){const e=h.MAs(7),n=h.oxw();h.xp6(2),h.Q6J("tuiDropdown",e)("tuiDropdownAlign",n.dropdownAlign)("tuiDropdownDirection",n.dropdownDirection)("tuiDropdownLimitWidth",n.dropdownLimitWidth)("tuiDropdownManual",n.open)("tuiDropdownMaxHeight",n.dropdownMaxHeight)("tuiDropdownMinHeight",n.dropdownMinHeight)("tuiDropdownOffset",n.dropdownOffset),h.xp6(7),h.Q6J("documentationPropertyValue",n.open)}}function Ne(e,n){if(1&e&&(h.TgZ(0,"ol",16),h.TgZ(1,"li"),h.TgZ(2,"p"),h._uU(3," Import "),h.TgZ(4,"code"),h._uU(5,"TuiDropdownModule"),h.qZA(),h._uU(6," into a module where you want to use our component "),h.qZA(),h._UZ(7,"tui-doc-code",17),h.qZA(),h.TgZ(8,"li"),h.TgZ(9,"p"),h._uU(10,"Add to the template:"),h.qZA(),h._UZ(11,"tui-doc-code",18),h.qZA(),h.qZA()),2&e){const e=h.oxw();h.xp6(7),h.Q6J("code",e.exampleModule),h.xp6(4),h.Q6J("code",e.exampleHtml)}}let Oe=(()=>{class e extends w.X{constructor(){super(...arguments),this.exampleModule=t.e(21863).then(t.t.bind(t,21863,17)),this.exampleHtml=t.e(92606).then(t.t.bind(t,92606,17)),this.example1={TypeScript:t.e(22680).then(t.t.bind(t,22680,17)),HTML:t.e(46179).then(t.t.bind(t,46179,17))},this.example2={TypeScript:t.e(72398).then(t.t.bind(t,72398,17)),HTML:t.e(67899).then(t.t.bind(t,67899,17))},this.example3={TypeScript:t.e(46029).then(t.t.bind(t,46029,17)),HTML:t.e(53097).then(t.t.bind(t,53097,17))},this.example4={TypeScript:t.e(71119).then(t.t.bind(t,71119,17)),HTML:t.e(90247).then(t.t.bind(t,90247,17)),LESS:t.e(40870).then(t.t.bind(t,40870,17))},this.example5={TypeScript:t.e(22125).then(t.t.bind(t,22125,17)),HTML:t.e(48536).then(t.t.bind(t,48536,17))},this.open=!1}onClick(){this.open=!this.open}onObscured(e){e&&(this.open=!1)}onActiveZone(e){this.open=e&&this.open}}return e.ɵfac=function(){let n;return function(t){return(n||(n=h.n5z(e)))(t||e)}}(),e.ɵcmp=h.Xpm({type:e,selectors:[["example-tui-dropdown"]],features:[h._Bn([{provide:f.x,useExisting:(0,h.Gpc)((()=>e))}]),h.qOj],decls:4,vars:0,consts:[["header","Dropdown","package","CORE","type","directives"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","",3,"routerLink"],["id","base","heading","Basic",3,"content"],["id","full-featured","heading","Interesting one",3,"content"],["id","change-detection","heading","Change detection",3,"content"],["id","appearance","heading","Appearance",3,"content"],["id","mobile","heading","Mobile",3,"content"],[3,"tuiActiveZoneChange"],["tuiButton","","type","button",3,"tuiDropdown","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownManual","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","click","tuiObscured"],["dropdownContent",""],["documentationPropertyMode","input","documentationPropertyName","tuiDropdownManual","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiDropdown","documentationPropertyType","PolymorpheusContent"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,n){1&e&&(h.TgZ(0,"tui-doc-page",0),h.YNc(1,De,31,9,"ng-template",1),h.YNc(2,ve,12,9,"ng-template",1),h.YNc(3,Ne,12,2,"ng-template",1),h.qZA())},directives:[T.q,M.n,Z.V,r.yS,y.f,v,V,E,z.L,W,Te,Me.F,_.e,A.v,x.t,C.V,b.A,D.T,q.Ek,P.z,Ze.z,ye.B,Ae.X,xe.c],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),e})(),qe=(()=>{class e{}return e.ɵfac=function(n){return new(n||e)},e.ɵmod=h.oAB({type:e}),e.ɵinj=h.cJS({imports:[[i.ez,a.u5,m.wq,c.TuiLinkModule,l.Jm,c.TuiButtonModule,c.TuiDropdownModule,s.TuiSelectModule,p.TuiObscuredModule,p.TuiActiveZoneModule,s.TuiToggleModule,s.TuiInputModule,c.TuiNotificationModule,u.fV,g.F,r.Bz.forChild((0,u.Ve)(Oe)),o.Cl,s.TuiComboBoxModule,s.TuiDataListWrapperModule,d.TuiDropdownMobileModule,s.TuiInputNumberModule,c.TuiTextfieldControllerModule,l.Rg,l.V5,s.TuiFilterByInputPipeModule,s.TuiMultiSelectModule,l.BO]]}),e})()}}]);