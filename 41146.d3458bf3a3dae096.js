"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41146],{41146:(v,i,t)=>{t.r(i),t.d(i,{default:()=>d});var r=t(66094),u=t(37399),_=t(69104),s=t(39908),e=t(35548),l=t(59756),c=t(74922);const E=function(){return{precision:3}},d=(()=>{var a;class m{constructor(){this.parametersForm=new r.cw({value:new r.NI(1.005),precision:new r.NI(2)})}get rounded(){const{value:n,precision:o}=this.parametersForm.value;return(0,u.tuiRound)(n??1.005,o??2)}get floored(){const{value:n,precision:o}=this.parametersForm.value;return(0,u.tuiFloor)(n??1.005,o??2)}get ceiled(){const{value:n,precision:o}=this.parametersForm.value;return(0,u.tuiCeil)(n??1.005,o??2)}}return(a=m).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent1",features:[e.jDz],decls:12,vars:6,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"tuiNumberFormat"],["formControlName","precision",1,"tui-space_top-2"]],template:function(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"form",0)(7,"div",1)(8,"tui-input-number",2),e._uU(9," value "),e.qZA(),e.TgZ(10,"tui-input-number",3),e._uU(11," precision "),e.qZA()()()),2&n&&(e.xp6(1),e.hij("",o.rounded," = round(value, precision);"),e.xp6(2),e.hij("",o.floored," = floor(value, precision);"),e.xp6(2),e.hij("",o.ceiled," = ceil(value, precision);"),e.xp6(1),e.Q6J("formGroup",o.parametersForm),e.xp6(2),e.Q6J("tuiNumberFormat",e.DdM(5,E)))},dependencies:[r.UX,r._Y,r.JJ,r.JL,r.sg,r.u,s._Hh,l.q,c.g,_.TuiNumberFormatDirective],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),m})()}}]);