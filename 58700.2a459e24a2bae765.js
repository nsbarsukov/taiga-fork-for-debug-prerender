(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58700],{58700:(e,r,t)=>{t.r(r),t.d(r,{ExampleDateTransformer:()=>i,default:()=>T,getExampleDateRangeTransformer:()=>m});var o=t(66094),n=t(37399),a=t(98808),l=t(39908),s=t(35548),u=t(72265),c=t(13565);class f extends n.TuiValueTransformer{constructor(e){super(),this.dateTransformer=e}fromControlValue(e){const[r,t]=e||[null,null],o=r&&this.dateTransformer.fromControlValue(r),a=t&&this.dateTransformer.fromControlValue(t);return o&&a&&new n.TuiDayRange(o,a)}toControlValue(e){const r=e&&this.dateTransformer.toControlValue(e.from),t=e&&this.dateTransformer.toControlValue(e.to);return r&&t&&[r,t]}}let i=(()=>{var e;class r extends n.TuiValueTransformer{fromControlValue(e){return e&&n.TuiDay.fromLocalNativeDate(e)}toControlValue(e){return e?.toLocalNativeDate()||null}}return(e=r).ɵfac=function(){let r;return function(t){return(r||(r=s.n5z(e)))(t||e)}}(),e.ɵprov=s.Yz7({token:e,factory:e.ɵfac}),r})();function m(e){return e&&new f(e)}const T=(()=>{var e;class r{constructor(){this.control=new o.NI([new Date(2018,2,10),new Date(2018,3,20)])}}return(e=r).ɵfac=function(r){return new(r||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[s._Bn([{provide:a.TUI_DATE_VALUE_TRANSFORMER,useClass:i},{provide:a.TUI_DATE_RANGE_VALUE_TRANSFORMER,deps:[a.TUI_DATE_VALUE_TRANSFORMER],useFactory:m}]),s.jDz],decls:7,vars:2,consts:[[3,"formControl"]],template:function(e,r){1&e&&(s.TgZ(0,"tui-input-date-range",0),s._uU(1,"Choose dates"),s.qZA(),s.TgZ(2,"p"),s._uU(3,"Stringified control value:"),s.qZA(),s.TgZ(4,"p")(5,"code"),s._uU(6),s.qZA()()),2&e&&(s.Q6J("formControl",r.control),s.xp6(6),s.Oqu(r.control.value))},dependencies:[l.sR_,u.H,c.d,o.UX,o.JJ,o.oH],encapsulation:2,changeDetection:0}),r})()}}]);