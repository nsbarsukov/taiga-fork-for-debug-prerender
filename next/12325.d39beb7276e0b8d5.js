(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[12325,61386,99503,50517,11820,61505,99781,50023,11944,61702,98323],{10882:(e,t,n)=>{n.d(t,{Fb:()=>r,UR:()=>o,bM:()=>i});var a=n(87882);const o={currency:null,currencyAlign:"right",sign:"negative-only"},i=(0,a.tuiCreateToken)(o);function r(e){return(0,a.tuiProvideOptions)(i,e,o)}},61386:(e,t,n)=>{n.d(t,{E:()=>c});var a=n(20755),o=n(93517),i=n(87882),r=n(17628),u=n(92425),s=n(10882);let c=(()=>{var e;class t{constructor(){this.options=(0,a.f3M)(s.bM),this.format=(0,a.f3M)(r.TUI_NUMBER_FORMAT)}transform(e,t=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,u.U)((a=>{const u=(0,o.$v)(e,this.options.sign),s=(0,o.BP)(t),c=(0,r.tuiFormatNumber)(Math.abs(e),{...a,precision:Number.isNaN(a.precision)?2:a.precision}),l=s?.length>1||"right"===n?i.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${u}${c}${l}${s}`:`${u}${s}${l}${c}`})))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵpipe=a.Yjl({name:"tuiAmount",type:e,pure:!0,standalone:!0}),t})()},72483:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiAxesModule:()=>E});var a=n(76733),o=n(30925),i=n(33898),r=n(86733),u=n(87253),s=n(17628),c=n(6254),l=n(20755),d=n(79241),p=n(73097),m=n(38404),y=n(65004),x=n(43894),h=n(17894),P=n(97967),V=n(2313),Y=n(25530),g=n(87766),b=n(18903),L=n(82040);function N(e,t){if(1&e&&(l.TgZ(0,"p"),l._uU(1,"Just axes for charts"),l.qZA(),l.TgZ(2,"tui-doc-example",2),l._UZ(3,"tui-axes-example-1"),l.qZA(),l.TgZ(4,"tui-doc-example",3),l._UZ(5,"tui-axes-example-2"),l.qZA(),l.TgZ(6,"tui-doc-example",4)(7,"tui-notification",5),l._uU(8," Labels positioning on x axes were updated. To prevent breaking changes "),l.TgZ(9,"code"),l._uU(10,"new"),l.qZA(),l._uU(11," attribute has to be added to enable new behaviour. "),l.qZA(),l._UZ(12,"tui-axes-example-3"),l.qZA()),2&e){const e=l.oxw();l.xp6(2),l.Q6J("content",e.example1),l.xp6(2),l.Q6J("content",e.example2),l.xp6(2),l.Q6J("content",e.example3)}}function f(e,t){1&e&&l._uU(0," Axis X ")}function T(e,t){1&e&&(l._uU(0," Labels for X. Empty string is empty stroke, "),l.TgZ(1,"code"),l._uU(2,"null"),l.qZA(),l._uU(3," — no stroke "))}function C(e,t){1&e&&l._uU(0," Axis Y ")}function M(e,t){1&e&&l._uU(0," Inset of labels on axis Y ")}function H(e,t){1&e&&l._uU(0," Labels for Y ")}function S(e,t){1&e&&l._uU(0," Name of Y axis ")}function _(e,t){1&e&&l._uU(0," Inset labels for Y ")}function A(e,t){1&e&&l._uU(0," Secondary Y axis labels ")}function J(e,t){1&e&&l._uU(0," Secondary Y axis name ")}function U(e,t){1&e&&l._uU(0," Horizontal lines number ")}function v(e,t){1&e&&l._uU(0," Horizontal lines type handler ")}function w(e,t){1&e&&l._uU(0," Number of vertical lines ")}function Z(e,t){1&e&&l._uU(0," Vertical lines type handler ")}const z=function(){return[]};function I(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-doc-demo"),l._UZ(1,"tui-axes",6),l.qZA(),l.TgZ(2,"tui-doc-documentation"),l.YNc(3,f,1,0,"ng-template",7),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisX=t)})),l.YNc(4,T,4,0,"ng-template",8),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisXLabels=t)})),l.YNc(5,C,1,0,"ng-template",9),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisY=t)})),l.YNc(6,M,1,0,"ng-template",10),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisYInset=t)})),l.YNc(7,H,1,0,"ng-template",11),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisYLabels=t)})),l.YNc(8,S,1,0,"ng-template",12),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisYName=t)})),l.YNc(9,_,1,0,"ng-template",13),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisYSecondaryInset=t)})),l.YNc(10,A,1,0,"ng-template",14),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisYSecondaryLabels=t)})),l.YNc(11,J,1,0,"ng-template",15),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.axisYSecondaryName=t)})),l.YNc(12,U,1,0,"ng-template",16),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.horizontalLines=t)})),l.YNc(13,v,1,0,"ng-template",17),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.horizontalLinesHandler=t)})),l.YNc(14,w,1,0,"ng-template",18),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.verticalLines=t)})),l.YNc(15,Z,1,0,"ng-template",19),l.NdJ("documentationPropertyValueChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.verticalLinesHandler=t)})),l.qZA()}if(2&e){const e=l.oxw();l.xp6(1),l.Q6J("axisX",e.axisX)("axisXLabels",e.axisXLabels||l.DdM(33,z))("axisY",e.axisY)("axisYInset",e.axisYInset)("axisYLabels",e.axisYLabels||l.DdM(34,z))("axisYName",e.axisYName)("axisYSecondaryInset",e.axisYSecondaryInset)("axisYSecondaryLabels",e.axisYSecondaryLabels)("axisYSecondaryName",e.axisYSecondaryName)("horizontalLines",e.horizontalLines)("horizontalLinesHandler",e.horizontalLinesHandler)("verticalLines",e.verticalLines)("verticalLinesHandler",e.verticalLinesHandler),l.xp6(2),l.Q6J("documentationPropertyValues",e.lineVariants)("documentationPropertyValue",e.axisX),l.xp6(1),l.Q6J("documentationPropertyValues",e.labelsXVariants)("documentationPropertyValue",e.axisXLabels),l.xp6(1),l.Q6J("documentationPropertyValues",e.lineVariants)("documentationPropertyValue",e.axisY),l.xp6(1),l.Q6J("documentationPropertyValue",e.axisYInset),l.xp6(1),l.Q6J("documentationPropertyValues",e.labelsYVariants)("documentationPropertyValue",e.axisYLabels),l.xp6(1),l.Q6J("documentationPropertyValue",e.axisYName),l.xp6(1),l.Q6J("documentationPropertyValue",e.axisYSecondaryInset),l.xp6(1),l.Q6J("documentationPropertyValues",e.labelsYVariants)("documentationPropertyValue",e.axisYSecondaryLabels),l.xp6(1),l.Q6J("documentationPropertyValue",e.axisYSecondaryName),l.xp6(1),l.Q6J("documentationPropertyValue",e.horizontalLines),l.xp6(1),l.Q6J("documentationPropertyValues",e.handlerVariants)("documentationPropertyValue",e.horizontalLinesHandler),l.xp6(1),l.Q6J("documentationPropertyValue",e.verticalLines),l.xp6(1),l.Q6J("documentationPropertyValues",e.handlerVariants)("documentationPropertyValue",e.verticalLinesHandler)}}function X(e,t){if(1&e&&l._UZ(0,"tui-setup",20),2&e){const e=l.oxw();l.Q6J("import",e.exampleModule)("template",e.exampleHtml)}}let Q=(()=>{var e;class t{constructor(){this.exampleModule=n.e(49477).then(n.t.bind(n,49477,17)),this.exampleHtml=n.e(70123).then(n.t.bind(n,70123,17)),this.example1={TypeScript:n.e(79766).then(n.t.bind(n,79766,17)),HTML:n.e(67112).then(n.t.bind(n,67112,17)),LESS:n.e(43475).then(n.t.bind(n,43475,17))},this.example2={TypeScript:n.e(77781).then(n.t.bind(n,77781,17)),HTML:n.e(72570).then(n.t.bind(n,72570,17)),LESS:n.e(49767).then(n.t.bind(n,49767,17))},this.example3={TypeScript:n.e(32410).then(n.t.bind(n,32410,17)),HTML:n.e(32385).then(n.t.bind(n,32385,17)),LESS:n.e(46236).then(n.t.bind(n,46236,17))},this.lineVariants=["solid","dashed","none","hidden"],this.labelsXVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One",null,"","Two and a half","Three",null]],this.labelsYVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One","","Two and a half","Three"]],this.handlerVariants=[r.TUI_ALWAYS_SOLID,r.TUI_ALWAYS_DASHED,e=>e%2?"dashed":"solid"],this.axisX=this.lineVariants[0],this.axisXLabels=this.labelsXVariants[0],this.axisY=this.lineVariants[0],this.axisYInset=!1,this.axisYLabels=this.labelsYVariants[0],this.axisYName="",this.axisYSecondaryInset=!1,this.axisYSecondaryLabels=this.labelsYVariants[0],this.axisYSecondaryName="",this.horizontalLines=0,this.horizontalLinesHandler=this.handlerVariants[0],this.verticalLines=0,this.verticalLinesHandler=this.handlerVariants[1]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["example-tui-axes"]],decls:4,vars:0,consts:[["header","Axes","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","advanced","heading","Cool one",3,"content"],["id","bars","heading","With bars",3,"content"],["id","labels","heading","With horizontal bars",3,"content"],[1,"tui-space_bottom-4"],[1,"axes",3,"axisX","axisXLabels","axisY","axisYInset","axisYLabels","axisYName","axisYSecondaryInset","axisYSecondaryLabels","axisYSecondaryName","horizontalLines","horizontalLinesHandler","verticalLines","verticalLinesHandler"],["documentationPropertyMode","input","documentationPropertyName","axisX","documentationPropertyType","TuiLineType",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisXLabels","documentationPropertyType","ReadonlyArray<string | null>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisY","documentationPropertyType","TuiLineType",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisYInset","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisYLabels","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisYName","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisYSecondaryInset","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisYSecondaryLabels","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","axisYSecondaryName","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","horizontalLines","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","horizontalLinesHandler","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","verticalLines","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","verticalLinesHandler","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"import","template"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,N,13,3,"ng-template",1),l.YNc(2,I,16,35,"ng-template",1),l.YNc(3,X,1,2,"ng-template",1),l.qZA())},dependencies:[d.v,p.F,m.z,y.B,x.q,h.n,P.f,V.L,Y.U,g.TuiAxesExample1,b.TuiAxesExample2,L.TuiAxesExample3],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),t})(),E=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[a.ez,o.Bz,r.TuiAxesModule,r.TuiBarChartModule,r.TuiBarModule,s.TuiHintModule,c.wq,u.fV,o.Bz.forChild((0,u.Ve)(Q)),s.TuiNotificationModule,i.UY]}),t})()}}]);