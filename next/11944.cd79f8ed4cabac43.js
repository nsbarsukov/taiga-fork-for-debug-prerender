(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[11944,61386,99503,50517,11820,61505,99781,50023,61702,98323],{10882:(n,t,r)=>{r.d(t,{Fb:()=>s,UR:()=>i,bM:()=>o});var e=r(87882);const i={currency:null,currencyAlign:"right",sign:"negative-only"},o=(0,e.tuiCreateToken)(i);function s(n){return(0,e.tuiProvideOptions)(o,n,i)}},61386:(n,t,r)=>{r.d(t,{E:()=>a});var e=r(20755),i=r(93517),o=r(87882),s=r(17628),u=r(92425),c=r(10882);let a=(()=>{var n;class t{constructor(){this.options=(0,e.f3M)(c.bM),this.format=(0,e.f3M)(s.TUI_NUMBER_FORMAT)}transform(n,t=this.options.currency,r=this.options.currencyAlign){return this.format.pipe((0,u.U)((e=>{const u=(0,i.$v)(n,this.options.sign),c=(0,i.BP)(t),a=(0,s.tuiFormatNumber)(Math.abs(n),{...e,precision:Number.isNaN(e.precision)?2:e.precision}),p=c?.length>1||"right"===r?o.CHAR_NO_BREAK_SPACE:"";return"right"===r?`${u}${a}${p}${c}`:`${u}${c}${p}${a}`})))}}return(n=t).ɵfac=function(t){return new(t||n)},n.ɵpipe=e.Yjl({name:"tuiAmount",type:n,pure:!0,standalone:!0}),t})()}}]);