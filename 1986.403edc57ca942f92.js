(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1986],{1986:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var o=n(66094),r=n(37399),a=n(98808),u=n(39908),s=n(35548),l=n(8396),c=n(37865);let i=(()=>{var t;class e extends r.TuiValueTransformer{constructor(){super(...arguments),this.separator=", "}fromControlValue(t){const[e,n=""]=t.split(this.separator);return e?[r.TuiDay.normalizeParse(e),n?r.TuiTime.fromString(n):null]:[null,null]}toControlValue([t,e]){return t?t.toString()+(e?`${this.separator}${e.toString()}`:""):""}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=s.n5z(t)))(n||t)}}(),t.ɵprov=s.Yz7({token:t,factory:t.ɵfac}),e})();const p=(()=>{var t;class e{constructor(){this.control=new o.NI("19.01.2022, 12:33")}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[s._Bn([{provide:a.TUI_DATE_TIME_VALUE_TRANSFORMER,useClass:i}]),s.jDz],decls:7,vars:2,consts:[[3,"formControl"]],template:function(t,e){1&t&&(s.TgZ(0,"tui-input-date-time",0),s._uU(1,"Choose date and time"),s.qZA(),s.TgZ(2,"p"),s._uU(3,"Stringified control value:"),s.qZA(),s.TgZ(4,"p")(5,"code"),s._uU(6),s.qZA()()),2&t&&(s.Q6J("formControl",e.control),s.xp6(6),s.Oqu(e.control.value))},dependencies:[u.DAN,l.u,c.c,o.UX,o.JJ,o.oH],encapsulation:2,changeDetection:0}),e})()}}]);