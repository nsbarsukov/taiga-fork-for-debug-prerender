(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26856],{26856:(e,t,n)=>{n.r(t),n.d(t,{TUI_AMOUNT_DEFAULT_OPTIONS:()=>ee,TUI_AMOUNT_OPTIONS:()=>te,TUI_BIN_TABLE:()=>f,TUI_CARD_CVC_TEXTS:()=>G,TUI_CARD_EXPIRY_TEXTS:()=>N,TUI_CARD_NUMBER_TEXTS:()=>U,TUI_CODE_DICTIONARY:()=>p,TUI_CURRENCY_DICTIONARY:()=>m,TUI_INPUT_CARD_DEFAULT_OPTIONS:()=>Y,TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS:()=>le,TUI_INPUT_CARD_GROUPED_OPTIONS:()=>de,TUI_INPUT_CARD_GROUPED_TEXTS:()=>ge,TUI_INPUT_CARD_OPTIONS:()=>K,TUI_MASK_CARD:()=>x,TUI_MASK_CARD_HOLDER:()=>S,TUI_MASK_CVC:()=>k,TUI_MASK_EXPIRE:()=>E,TUI_PAYMENT_SYSTEM_ICONS:()=>z,TuiAmountPipe:()=>ae,TuiCurrency:()=>c,TuiCurrencyCode:()=>u,TuiCurrencyPipe:()=>re,TuiFormatCardPipe:()=>oe,TuiInputCVC:()=>De,TuiInputCard:()=>Q,TuiInputCardGroupedComponent:()=>ye,TuiInputExpire:()=>xe,TuiThumbnailCardComponent:()=>Ae,tuiAmountOptionsProvider:()=>ne,tuiCardExpireValidator:()=>Ue,tuiCardNumberValidator:()=>Ne,tuiCreateLuhnValidator:()=>Ge,tuiDefaultCardValidator:()=>D,tuiFormatCurrency:()=>d,tuiFormatSignSymbol:()=>ie,tuiGetCodeByCurrency:()=>h,tuiGetCurrencyByCode:()=>g,tuiGetCurrencySymbol:()=>l,tuiGetPaymentSystem:()=>C,tuiInputCardGroupedOptionsProvider:()=>pe,tuiInputCardOptionsProvider:()=>J,tuiIsCardLengthValid:()=>M,tuiIsCardNumberValid:()=>P,tuiIsElectron:()=>T,tuiIsExpireValid:()=>y,tuiIsMaestro:()=>_,tuiIsMastercard:()=>I,tuiIsMir:()=>b,tuiIsVisa:()=>v});var i=n(84911),a=n(35548),r=n(66094),o=n(15514),s=n(37399),c=function(e){return e.ArmenianDram="AMD",e.AustralianDollar="AUD",e.AzerbaijaniManat="AZN",e.Baht="THB",e.BahrainiDinar="BHD",e.BelarusianRuble="BYN",e.BrazilianReal="BRL",e.CanadianDollar="CAD",e.CzechKoruna="CZK",e.Dirham="AED",e.Dollar="USD",e.EastCaribbeanDollar="XCD",e.Euro="EUR",e.Forint="HUF",e.GeorgianLari="GEL",e.HongKongDollar="HKD",e.Hryvnia="UAH",e.IndianRupee="INR",e.IndonesianRupiah="IDR",e.IranianRial="IRR",e.IsraeliShekel="ILS",e.KyrgyzstanSom="KGS",e.MalaysianRinggit="MYR",e.MexicanPeso="MXN",e.MoldovanLeu="MDL",e.MongolianTugrik="MNT",e.NewTurkmenManat="TMT",e.PolandZloty="PLN",e.Pound="GBP",e.Ruble="RUB",e.SaudiRiyal="SAR",e.SerbianDinar="RSD",e.SingaporeDollar="SGD",e.SouthAfricanRand="ZAR",e.SriLankanRupee="LKR",e.SwissFranc="CHF",e.TajikistaniSomoni="TJS",e.Tenge="KZT",e.TurkishLira="TRY",e.UzbekSum="UZS",e.VietnameseDong="VND",e.Won="KRW",e.Yen="JPY",e.YuanRenminbi="CNY",e}(c||{}),u=function(e){return e.ArmenianDram="051",e.AustralianDollar="036",e.AzerbaijaniManat="944",e.Baht="764",e.BahrainiDinar="048",e.BelarusianRuble="933",e.BrazilianReal="986",e.CanadianDollar="124",e.CzechKoruna="203",e.Dirham="784",e.Dollar="840",e.EastCaribbeanDollar="951",e.Euro="978",e.Forint="348",e.GeorgianLari="981",e.HongKongDollar="344",e.Hryvnia="980",e.IndianRupee="356",e.IndonesianRupiah="360",e.IranianRial="364",e.IsraeliShekel="376",e.KyrgyzstanSom="417",e.MalaysianRinggit="458",e.MexicanPeso="484",e.MoldovanLeu="498",e.MongolianTugrik="496",e.NewTurkmenManat="934",e.PolandZloty="985",e.Pound="826",e.Ruble="643",e.SaudiRiyal="682",e.SerbianDinar="941",e.SingaporeDollar="702",e.SouthAfricanRand="710",e.SriLankanRupee="144",e.SwissFranc="756",e.TajikistaniSomoni="972",e.Tenge="398",e.TurkishLira="949",e.UzbekSum="860",e.VietnameseDong="704",e.Won="410",e.Yen="392",e.YuanRenminbi="156",e}(u||{});function l(e){switch(e){case c.Ruble:case u.Ruble:return"₽";case c.Dollar:case u.Dollar:case c.MexicanPeso:case u.MexicanPeso:return"$";case c.SingaporeDollar:case u.SingaporeDollar:return"S$";case c.AustralianDollar:case u.AustralianDollar:return"A$";case c.BahrainiDinar:case u.BahrainiDinar:return"BD";case c.CzechKoruna:case u.CzechKoruna:return"Kč";case c.HongKongDollar:case u.HongKongDollar:return"HK$";case c.CanadianDollar:case u.CanadianDollar:return"C$";case c.EastCaribbeanDollar:case u.EastCaribbeanDollar:return"EC$";case c.Euro:case u.Euro:return"€";case c.Forint:case u.Forint:return"Ft";case c.Pound:case u.Pound:return"£";case c.Baht:case u.Baht:return"฿";case c.TurkishLira:case u.TurkishLira:return"₺";case c.YuanRenminbi:case u.YuanRenminbi:return"CN¥";case c.Yen:case u.Yen:return"¥";case c.IsraeliShekel:case u.IsraeliShekel:return"₪";case c.IndianRupee:case u.IndianRupee:return"₹";case c.SwissFranc:case u.SwissFranc:return"₣";case c.ArmenianDram:case u.ArmenianDram:return"֏";case c.Won:case u.Won:return"₩";case c.Tenge:case u.Tenge:return"₸";case c.Hryvnia:case u.Hryvnia:return"₴";case c.UzbekSum:case u.UzbekSum:return"So'm";case c.KyrgyzstanSom:case u.KyrgyzstanSom:return"c";case c.Dirham:case u.Dirham:return"Dh";case c.TajikistaniSomoni:case u.TajikistaniSomoni:return"SM";case c.MalaysianRinggit:case u.MalaysianRinggit:return"RM";case c.BelarusianRuble:case u.BelarusianRuble:return"Br";case c.GeorgianLari:case u.GeorgianLari:return"₾";case c.AzerbaijaniManat:case u.AzerbaijaniManat:return"₼";case c.SriLankanRupee:case u.SriLankanRupee:return"Rs.";case c.SerbianDinar:case u.SerbianDinar:return"DIN";case c.SaudiRiyal:case u.SaudiRiyal:return"SR";case c.MoldovanLeu:case u.MoldovanLeu:return"L";case c.MongolianTugrik:case u.MongolianTugrik:return"₮";case c.PolandZloty:case u.PolandZloty:return"zł";case c.SouthAfricanRand:case u.SouthAfricanRand:return"R";case c.IranianRial:case u.IranianRial:return"IR";case c.IndonesianRupiah:case u.IndonesianRupiah:return"Rp";case c.VietnameseDong:case u.VietnameseDong:return"đ";case c.NewTurkmenManat:case u.NewTurkmenManat:return"TMT";case c.BrazilianReal:case u.BrazilianReal:return"R$";default:return null}}function d(e){const t=function(e){return null===e||(0,s.tuiIsString)(e)?e||"":String(e).padStart(3,"0")}(e);return l(t)||t}const p={[c.Ruble]:u.Ruble,[c.Dollar]:u.Dollar,[c.MexicanPeso]:u.MexicanPeso,[c.MoldovanLeu]:u.MoldovanLeu,[c.PolandZloty]:u.PolandZloty,[c.SingaporeDollar]:u.SingaporeDollar,[c.AustralianDollar]:u.AustralianDollar,[c.HongKongDollar]:u.HongKongDollar,[c.CanadianDollar]:u.CanadianDollar,[c.CzechKoruna]:u.CzechKoruna,[c.EastCaribbeanDollar]:u.EastCaribbeanDollar,[c.Euro]:u.Euro,[c.Forint]:u.Forint,[c.Pound]:u.Pound,[c.Baht]:u.Baht,[c.BahrainiDinar]:u.BahrainiDinar,[c.TurkishLira]:u.TurkishLira,[c.YuanRenminbi]:u.YuanRenminbi,[c.Yen]:u.Yen,[c.IsraeliShekel]:u.IsraeliShekel,[c.IndianRupee]:u.IndianRupee,[c.SwissFranc]:u.SwissFranc,[c.ArmenianDram]:u.ArmenianDram,[c.Won]:u.Won,[c.Tenge]:u.Tenge,[c.Hryvnia]:u.Hryvnia,[c.UzbekSum]:u.UzbekSum,[c.KyrgyzstanSom]:u.KyrgyzstanSom,[c.Dirham]:u.Dirham,[c.TajikistaniSomoni]:u.TajikistaniSomoni,[c.MalaysianRinggit]:u.MalaysianRinggit,[c.BelarusianRuble]:u.BelarusianRuble,[c.GeorgianLari]:u.GeorgianLari,[c.AzerbaijaniManat]:u.AzerbaijaniManat,[c.SriLankanRupee]:u.SriLankanRupee,[c.SerbianDinar]:u.SerbianDinar,[c.SaudiRiyal]:u.SaudiRiyal,[c.MongolianTugrik]:u.MongolianTugrik,[c.SouthAfricanRand]:u.SouthAfricanRand,[c.IranianRial]:u.IranianRial,[c.IndonesianRupiah]:u.IndonesianRupiah,[c.VietnameseDong]:u.VietnameseDong,[c.NewTurkmenManat]:u.NewTurkmenManat,[c.BrazilianReal]:u.BrazilianReal};function h(e){return p[e]??null}const m={[u.Ruble]:c.Ruble,[u.Dollar]:c.Dollar,[u.MexicanPeso]:c.MexicanPeso,[u.MoldovanLeu]:c.MoldovanLeu,[u.PolandZloty]:c.PolandZloty,[u.SingaporeDollar]:c.SingaporeDollar,[u.AustralianDollar]:c.AustralianDollar,[u.HongKongDollar]:c.HongKongDollar,[u.CanadianDollar]:c.CanadianDollar,[u.CzechKoruna]:c.CzechKoruna,[u.EastCaribbeanDollar]:c.EastCaribbeanDollar,[u.Euro]:c.Euro,[u.Forint]:c.Forint,[u.Pound]:c.Pound,[u.Baht]:c.Baht,[u.BahrainiDinar]:c.BahrainiDinar,[u.TurkishLira]:c.TurkishLira,[u.YuanRenminbi]:c.YuanRenminbi,[u.Yen]:c.Yen,[u.IsraeliShekel]:c.IsraeliShekel,[u.IndianRupee]:c.IndianRupee,[u.SwissFranc]:c.SwissFranc,[u.ArmenianDram]:c.ArmenianDram,[u.Won]:c.Won,[u.Tenge]:c.Tenge,[u.Hryvnia]:c.Hryvnia,[u.UzbekSum]:c.UzbekSum,[u.KyrgyzstanSom]:c.KyrgyzstanSom,[u.Dirham]:c.Dirham,[u.TajikistaniSomoni]:c.TajikistaniSomoni,[u.MalaysianRinggit]:c.MalaysianRinggit,[u.BelarusianRuble]:c.BelarusianRuble,[u.GeorgianLari]:c.GeorgianLari,[u.AzerbaijaniManat]:c.AzerbaijaniManat,[u.SriLankanRupee]:c.SriLankanRupee,[u.SerbianDinar]:c.SerbianDinar,[u.SaudiRiyal]:c.SaudiRiyal,[u.MongolianTugrik]:c.MongolianTugrik,[u.SouthAfricanRand]:c.SouthAfricanRand,[u.IranianRial]:c.IranianRial,[u.IndonesianRupiah]:c.IndonesianRupiah,[u.VietnameseDong]:c.VietnameseDong,[u.NewTurkmenManat]:c.NewTurkmenManat,[u.BrazilianReal]:c.BrazilianReal};function g(e){return m[e]??null}const f=[["mir",2200,2204],["mastercard",2221,2720],["jcb",3528,3589],["amex",34],["amex",37],["dinersclub",36],["electron",4026],["electron",4175],["electron",4405],["electron",4508],["electron",4844],["electron",4913],["electron",4917],["visa",4],["verve",506099,506198],["verve",507865,507964],["maestro",5018],["maestro",5020],["maestro",5038],["maestro",5090],["maestro",5890],["maestro",5893],["rupay",508],["maestro",50],["mastercard",51,55],["maestro",56],["maestro",58],["mastercard",5],["maestro",6e3],["maestro",6304],["maestro",6759,6763],["verve",650002,650027],["maestro",676770],["maestro",676774],["discover",644,649],["discover",6011],["rupay",60],["unionpay",62],["discover",65],["maestro",6],["rupay",81,82],["uzcard",8600],["humo",9860]];function C(e,t){if(!e)return null;const n=f.find((([n,i,a=i])=>{const r=Number.parseInt(e.slice(0,String(i).length),10);return r>=i&&r<=a&&(!t?.length||t.includes(n))}));return n?.[0]??null}function _(e,t,n){return 6===n||50===t||t>55&&t<59||!(e<500)&&e<510}function I(e,t,n){return 5===n||!(t<10)&&(t>50&&t<56||!(e<1e3)&&e>2220&&e<2721)}function b(e){return e>2199&&e<2205}function T(e){switch(e){case 4026:case 4175:case 4405:case 4508:case 4844:case 4913:case 4917:return!0;default:return!1}}function v(e){return 4===e}function M(e){const{length:t}=e;switch(C(e)){case"electron":return 16===t;case"maestro":return t>11&&t<20;case"mastercard":case"mir":return t>15&&t<20;case"visa":return t>12&&t<20;default:return t>8&&t<20}}function P(e){const t=String(e).replace(s.TUI_NON_DIGITS_REGEXP,""),{length:n}=t;return!(t.split("").map(((e,t)=>{const i=parseInt(e,10);if((t+n)%2==0){const e=2*i;return e>9?e-9:e}return i})).reduce(((e,t)=>e+t),0)%10)}function y(e,t=new Date){const n=t.getMonth()+1,i=t.getFullYear()-2e3,a=(0,s.tuiClamp)(parseInt(e.slice(0,2),10),1,12),r=(0,s.tuiClamp)(parseInt(e.slice(-2),10),0,99);return r>i||i===r&&a>=n}const D=e=>e.length>11&&M(e)&&P(e),x={mask:[s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP]},R={А:"F",В:"D",Г:"U",Д:"L",Е:"T",З:"P",И:"B",Й:"Q",К:"R",Л:"K",М:"V",Н:"Y",О:"J",П:"G",Р:"H",С:"C",Т:"N",У:"E",Ф:"A",Ц:"W",Ч:"X",Ш:"I",Щ:"O",Ы:"S",Ь:"M",Я:"Z"};function O(e){return e.toUpperCase().split("").map((e=>R[e]||e)).join("")}const S={mask:/^[a-z\s]+$/i,preprocessors:[({elementState:e,data:t})=>{const{value:n,selection:i}=e;return{elementState:{selection:i,value:O(n)},data:O(t)}}]},k=e=>({mask:new Array(e).fill(s.TUI_DIGIT_REGEXP)}),E=(0,n(64793).tr)({mode:"mm/yy",separator:"/"});var w=n(75653),A=n(97318);const U=(0,s.tuiCreateTokenFromFactory)((0,w.vv)("cardNumber")),N=(0,s.tuiCreateTokenFromFactory)((0,w.vv)("cardExpiry")),G=(0,s.tuiCreateToken)((0,A.of)(["CVC","CVC/CVV"])),z=(0,s.tuiCreateToken)({mir:"tuiIconMir",visa:"tuiIconVisa",electron:"tuiIconElectron",mastercard:"tuiIconMastercard",maestro:"tuiIconMaestro",amex:"tuiIconAmex",dinersclub:"tuiIconDinersClub",discover:"tuiIconDiscover",humo:"tuiIconHumo",jcb:"tuiIconJCB",rupay:"tuiIconRuPay",unionpay:"tuiIconUnionPay",uzcard:"tuiIconUzcard",verve:"tuiIconVerve"});var L=n(69104),F=n(84439),V=n(275),B=n(51160),Z=n(905),H=n(24815),j=n(67271);const Y={icon:null,paymentSystemHandler:C,autocomplete:!1},K=(0,s.tuiCreateToken)(Y);function J(e){return(0,s.tuiProvideOptions)(K,e,Y)}var X;class Q{constructor(){this.icons=(0,a.f3M)(z),this.options=(0,a.f3M)(K),this.resolver=(0,a.f3M)(L.TUI_ICON_RESOLVER),this.control=(0,a.f3M)(r.a5),this.mask=(0,a.f3M)(o.ro),this.accessor=(0,a.f3M)(r.Fj,{self:!0,optional:!0}),this.autocomplete=this.options.autocomplete,this.icon=this.options.icon,this.binChange=(0,F.H)(0).pipe((0,V.w)((()=>(0,s.tuiControlValue)(this.control))),(0,B.U)((e=>e.length<6?null:e.replace(" ","").slice(0,6))),(0,Z.O)(null),(0,H.x)(),(0,j.T)(1))}ngOnInit(){if(this.mask.options=x,this.mask.ngOnChanges(),!this.accessor)return;const e=this.accessor.onChange.bind(this.accessor);this.accessor.onChange=t=>e(t.replaceAll(" ",""))}get backgroundImage(){const e=this.getPaymentSystem(this.control.value),t=this.icon||e&&this.resolver(this.icons[e]);return t&&""!==this.icon?`url(${t})`:null}getPaymentSystem(e){return this.options.paymentSystemHandler(e)}}(X=Q).ɵfac=function(e){return new(e||X)},X.ɵdir=a.lG2({type:X,selectors:[["input","tuiInputCard",""]],hostAttrs:["inputmode","numeric","placeholder","0000 0000 0000 0000"],hostVars:3,hostBindings:function(e,t){2&e&&(a.Ikx("autocomplete",t.autocomplete?"cc-number":"off"),a.Udp("background-image",t.backgroundImage))},inputs:{autocomplete:"autocomplete",icon:"icon"},outputs:{binChange:"binChange"},standalone:!0,features:[a.zW0([o.ro])]}),(0,i.gn)([s.tuiPure],Q.prototype,"getPaymentSystem",null);var $=n(4594),W=n(54795),q=n(72910);const ee={currency:null,currencyAlign:"right",sign:"negative-only"},te=(0,s.tuiCreateToken)(ee);function ne(e){return(0,s.tuiProvideOptions)(te,e,ee)}function ie(e,t){return"never"===t||!e||"negative-only"===t&&e>0?"":"force-negative"===t||e<0&&"force-positive"!==t?s.CHAR_MINUS:s.CHAR_PLUS}let ae=(()=>{var e;class t{constructor(){this.options=(0,a.f3M)(te),this.format=(0,a.f3M)(L.TUI_NUMBER_FORMAT)}transform(e,t=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,B.U)((i=>{const a=ie(e,this.options.sign),r=d(t),o=(0,L.tuiFormatNumber)(Math.abs(e),{...i,precision:Number.isNaN(i.precision)?2:i.precision}),c=r?.length>1||"right"===n?s.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${a}${o}${c}${r}`:`${a}${r}${c}${o}`})))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵpipe=a.Yjl({name:"tuiAmount",type:e,pure:!0,standalone:!0}),t})(),re=(()=>{var e;class t{transform(e){return d(e)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵpipe=a.Yjl({name:"tuiCurrency",type:e,pure:!0,standalone:!0}),t})(),oe=(()=>{var e;class t{transform(e="",t=!1){return e&&!t?e.split("").map(((e,t)=>t&&t%4==0?` ${e}`:e)).join(""):""}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵpipe=a.Yjl({name:"tuiFormatCard",type:e,pure:!0,standalone:!0}),t})();var se=n(98808),ce=n(40970),ue=n(19403);const le={...Y,cardValidator:D,exampleText:"0000 0000 0000 0000",exampleTextCVC:"000",cvcHidden:!0},de=(0,s.tuiCreateToken)(le);function pe(e){return(0,s.tuiProvideOptions)(de,e,le)}var he=n(58230),me=n(29963);const ge=(0,s.tuiCreateTokenFromFactory)((()=>{const e=(0,a.f3M)(he.m9),t=(0,a.f3M)(U),n=(0,a.f3M)(N),i=(0,a.f3M)(G),{desktopSmall:r}=(0,a.f3M)(L.TUI_MEDIA),o=e.matchMedia(`screen and (min-width: ${(r-1)/16}em)`);return(0,s.tuiTypedFromEvent)(o,"change").pipe((0,Z.O)(null),(0,V.w)((()=>(0,me.a)([(0,A.of)(Number(o.matches)),t,n,i]))),(0,B.U)((([e,t,n,i])=>({cardNumberText:t[e],expiryText:n[e],cvcText:i[e]}))))}));var fe;const Ce=["inputCard"],_e=["inputExpire"],Ie=["inputCVC"];function be(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"label",3),a.NdJ("click.silent.prevent",(function(){return 0})),a.TgZ(1,"input",14,15),a.NdJ("focus",(function(){return 0}))("ngModelChange",(function(t){a.CHM(e);const n=a.oxw();return a.KtG(n.onCardChange(t))})),a.ALo(3,"tuiMapper"),a.qZA(),a.TgZ(4,"span",16),a.NdJ("waResizeObserver",(function(){return 0})),a._UZ(5,"span",17,18),a.TgZ(7,"span",19)(8,"span",20),a._uU(9),a.qZA()()(),a.TgZ(10,"div",6),a._uU(11),a.qZA()()}if(2&e){const e=t.tuiLet,n=a.MAs(6),i=a.oxw();let r;a.xp6(1),a.ekj("t-input_hidden",!i.card.length&&i.focus())("t-input_inert",i.cardPrefilled),a.Q6J("autocomplete",i.autocomplete?"cc-number":"off")("disabled",i.disabled())("maskito",i.maskCard)("ngModel",e)("placeholder",i.cardPrefilled?"":i.exampleText)("readOnly",i.readOnly())("tabIndex",i.cardFocusable?0:-1),a.uIk("aria-invalid",!i.cardPrefilled&&!a.xi3(3,23,i.card,i.cardValidator))("id",i.id+"_card"),a.xp6(3),a.ekj("t-collapsed_enable-mask",i.cardCollapsed),a.uIk("data-before",i.masked),a.xp6(1),a.Q6J("textContent",e.slice(-i.tailLength)),a.xp6(3),a.Udp("transform",i.transform(n)),a.xp6(1),a.hij(" ",e," "),a.xp6(1),a.ekj("t-label_raised",i.labelRaised()),a.xp6(1),a.hij(" ",null==(r=i.texts())?null:r.cardNumberText," ")}}function Te(e,t){if(1&e&&(a._UZ(0,"img",23),a.ALo(1,"tuiIcon")),2&e){const e=t.polymorpheusOutlet;a.Q6J("src",a.lcZ(1,1,e),a.LSH)}}function ve(e,t){if(1&e&&(a.TgZ(0,"div",21),a.YNc(1,Te,2,3,"img",22),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("polymorpheusOutlet",e.content)}}function Me(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"tui-icon",24),a.NdJ("click",(function(){a.CHM(e);const t=a.oxw();return a.KtG(t.clear())})),a.qZA()}if(2&e){const e=a.oxw();a.Q6J("icon",e.icons.close)}}function Pe(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"tui-icon",25),a.NdJ("click",(function(){a.CHM(e);const t=a.oxw();return a.KtG(t.toggle())})),a.qZA()}}class ye extends s.TuiControl{constructor(){super(...arguments),this.expirePrefilled=!1,this.paymentSystems=(0,a.f3M)(z),this.options=(0,a.f3M)(de),this.el=(0,s.tuiInjectElement)(),this.hover=(0,s.tuiHovered)(),this.focusedIn=(0,W.O4)((0,ue.T)((0,s.tuiTypedFromEvent)(this.el,"focusin"),(0,s.tuiTypedFromEvent)(this.el,"focusout")).pipe((0,B.U)((()=>(0,s.tuiIsNativeFocusedIn)(this.el)))),{initialValue:!1}),this.exampleTextCVC=this.options.exampleTextCVC,this.cvcHidden=this.options.cvcHidden,this.maskCVC=k(3),this.dropdown=(0,a.f3M)(L.TuiDropdownDirective),this.maskCard=x,this.maskExpire=E,this.icons=(0,a.f3M)(L.TUI_COMMON_ICONS),this.texts=(0,W.O4)((0,a.f3M)(ge)),this.open=(0,s.tuiDirectiveBinding)(L.TuiDropdownOpenDirective,"tuiDropdownOpen",!1),this.state=(0,s.tuiDirectiveBinding)(L.TuiAppearanceDirective,"tuiAppearanceState",(0,a.Flj)((()=>this.disabled()?"disabled":this.hover()?"hover":null))),this.focus=(0,s.tuiDirectiveBinding)(L.TuiAppearanceDirective,"tuiAppearanceFocus",(0,a.Flj)((()=>this.open()||this.focusedIn()))),this.sub=(0,a.f3M)(L.TuiDropdownOpenDirective).tuiDropdownOpenChange.pipe((0,W.sL)()).subscribe((e=>{this.open.set(e)})),this.labelRaised=(0,a.Flj)((()=>this.focus()&&!this.readOnly()||!!this.value()?.card)),this.hasCleaner=(0,a.Flj)((()=>!!this.value()?.card&&this.interactive())),this.exampleText=this.options.exampleText,this.cardValidator=this.options.cardValidator,this.icon=this.options.icon,this.id=(0,a.f3M)(s.TuiIdService).generate(),this.autocomplete=this.options.autocomplete,this.binChange=new a.vpe}set codeLength(e){this.exampleTextCVC="0".repeat(e),this.maskCVC=k(e)}get bin(){return this.card.length<6?null:this.card.slice(0,6)}writeValue(e){const{bin:t}=this;super.writeValue(e),this.updateBin(t),this.expirePrefilled=!!this.expire&&this.cardPrefilled}focusCard(){this.inputCard?.nativeElement.focus({preventScroll:!0})}focusExpire(){this.inputExpire?.nativeElement.focus({preventScroll:!0})}focusCVC(){this.inputCVC?.nativeElement.focus({preventScroll:!0})}handleOption(e){const{card:t="",expire:n="",cvc:i=""}=e||{},{bin:a}=this,r=!t&&this.inputCard?.nativeElement||!n&&this.inputExpire?.nativeElement||this.inputCVC?.nativeElement;this.onChange({card:t,expire:n,cvc:i}),this.updateBin(a),this.open.set(!1),this.expirePrefilled=!!n,r?.focus()}clear(){this.expirePrefilled=!1,this.onChange(null),this.focusCard()}get content(){const e=this.getPaymentSystem(this.card);return this.icon||e&&this.paymentSystems[e]}get card(){return this.value()?.card||""}get expire(){return this.value()?.expire||""}get cvc(){return this.value()?.cvc||""}get cardCollapsed(){return this.isFocusable(this.card)&&!(0,s.tuiIsNativeFocused)(this.inputCard?.nativeElement)}get tailLength(){return this.card.length%4>0?5:4}get cardPrefilled(){return!!this.card.match(s.TUI_NON_DIGIT_REGEXP)}get cvcPrefilled(){return!!this.cvc.match(s.TUI_NON_DIGIT_REGEXP)}get cardFocusable(){return!this.cardPrefilled}get expireFocusable(){return this.isFocusable(this.card)&&!this.expirePrefilled}get cvcFocusable(){return this.isFocusable(this.card)}get masked(){return this.cardPrefilled?`*${this.card.slice(-4)}`:"*"}onCardChange(e){const{value:t,bin:n}=this,i=e.split(" ").join("");t()?.card!==i&&(this.updateProperty(i,"card"),this.updateBin(n),this.cardValidator(this.card)&&!t()?.expire&&this.inputExpire&&this.focusExpire())}onExpireChange(e){this.updateProperty(e,"expire"),5===Number(this.inputExpire?.nativeElement.selectionStart)&&this.focusCVC()}onCVCChange(e){this.updateProperty(e,"cvc")}transform({offsetWidth:e}){return this.cardCollapsed?`translate3d(${e}px, 0, 0)`:""}onMouseDown(e){(0,s.tuiIsElement)(e.target)&&(0,s.tuiIsInput)(e.target)||(e.preventDefault(),this.focusInput())}toggle(){this.open.set(!this.open())}isFocusable(e){return this.cardValidator(e)||this.cardPrefilled}getPaymentSystem(e){return this.options.paymentSystemHandler(e)}updateBin(e){const{bin:t}=this;t===e||this.cardPrefilled||this.binChange.emit(t)}updateProperty(e,t){const{card:n="",expire:i="",cvc:a=""}=this.value()||{},r={card:n,expire:i,cvc:a};r[t]=e,this.onChange(r.expire||r.cvc||r.card?r:null)}focusInput(){const e=this.cardFocusable&&this.inputCard?.nativeElement||this.expireFocusable&&this.inputExpire?.nativeElement||this.inputCVC?.nativeElement;e?.focus()}}(fe=ye).ɵfac=function(){let e;return function(t){return(e||(e=a.n5z(fe)))(t||fe)}}(),fe.ɵcmp=a.Xpm({type:fe,selectors:[["tui-input-card-grouped"]],viewQuery:function(e,t){if(1&e&&(a.Gf(Ce,5),a.Gf(_e,5),a.Gf(Ie,5)),2&e){let e;a.iGM(e=a.CRH())&&(t.inputCard=e.first),a.iGM(e=a.CRH())&&(t.inputExpire=e.first),a.iGM(e=a.CRH())&&(t.inputCVC=e.first)}},hostAttrs:["data-size","l"],hostVars:1,hostBindings:function(e,t){1&e&&a.NdJ("mousedown",(function(e){return t.onMouseDown(e)})),2&e&&a.uIk("data-mode",t.mode())},inputs:{exampleText:"exampleText",cardValidator:"cardValidator",icon:"icon",id:"id",autocomplete:"autocomplete",codeLength:"codeLength"},outputs:{binChange:"binChange"},standalone:!0,features:[a._Bn([(0,L.tuiAsDataListHost)(fe),(0,s.tuiAsControl)(fe),(0,L.tuiDropdownOptionsProvider)({limitWidth:"fixed"}),(0,L.tuiAppearanceOptionsProvider)(L.TUI_TEXTFIELD_OPTIONS),s.TuiHoveredService]),a.qOj,a.jDz,a.zW0([L.TuiAppearanceDirective,L.TuiDropdownDirective,L.TuiWithDataList,{directive:L.TuiDropdownOpenDirective,inputs:["tuiDropdownOpen","open"],outputs:["tuiDropdownOpenChange","openChange"]}])],decls:19,vars:39,consts:[[1,"t-wrapper"],[3,"click.silent.prevent",4,"tuiLet"],[1,"t-wrapper","t-wrapper_expire"],[3,"click.silent.prevent"],["automation-id","tui-input-card-grouped__expire","inputmode","numeric","placeholder","00/00","translate","no",1,"t-input",3,"autocomplete","disabled","maskito","ngModel","readOnly","tabIndex","focus","ngModelChange"],["inputExpire",""],[1,"t-label"],[1,"t-wrapper","t-wrapper_cvc"],["automation-id","tui-input-card-grouped__cvc","inputmode","numeric","translate","no","type","text",1,"t-input",3,"autocomplete","disabled","maskito","ngModel","placeholder","readOnly","tabIndex","focus","ngModelChange"],["inputCVC",""],[1,"t-icons"],["class","t-icon-outlet",4,"ngIf"],["automation-id","tui-input-card-grouped__cleaner","tuiAppearance","icon","class","t-icon",3,"icon","click",4,"ngIf"],["automation-id","tui-input-card-grouped__dropdown","tuiAppearance","icon","tuiChevron","",3,"click",4,"ngIf"],["automation-id","tui-input-card-grouped__card","inputmode","numeric","translate","no","type","text",1,"t-input","t-input_card",3,"autocomplete","disabled","maskito","ngModel","placeholder","readOnly","tabIndex","focus","ngModelChange"],["inputCard",""],["aria-hidden","true","translate","no",1,"t-collapsed",3,"waResizeObserver"],[1,"t-ghost",3,"textContent"],["ghost",""],[1,"t-collapsed-wrapper"],[1,"t-value"],[1,"t-icon-outlet"],["alt","","automation-id","tui-input-card-grouped__icon","class","t-card",3,"src",4,"polymorpheusOutlet"],["alt","","automation-id","tui-input-card-grouped__icon",1,"t-card",3,"src"],["automation-id","tui-input-card-grouped__cleaner","tuiAppearance","icon",1,"t-icon",3,"icon","click"],["automation-id","tui-input-card-grouped__dropdown","tuiAppearance","icon","tuiChevron","",3,"click"]],template:function(e,t){if(1&e&&(a.TgZ(0,"div",0),a.YNc(1,be,12,26,"label",1),a.ALo(2,"tuiFormatCard"),a.qZA(),a.TgZ(3,"div",2)(4,"label",3),a.NdJ("click.silent.prevent",(function(){return 0})),a.TgZ(5,"input",4,5),a.NdJ("focus",(function(){return 0}))("ngModelChange",(function(e){return t.onExpireChange(e)})),a.qZA(),a.TgZ(7,"div",6),a._uU(8),a.qZA()()(),a.TgZ(9,"div",7)(10,"label",3),a.NdJ("click.silent.prevent",(function(){return 0})),a.TgZ(11,"input",8,9),a.NdJ("focus",(function(){return 0}))("ngModelChange",(function(e){return t.onCVCChange(e)})),a.qZA(),a.TgZ(13,"div",6),a._uU(14),a.qZA()()(),a.TgZ(15,"div",10),a.YNc(16,ve,2,1,"div",11),a.YNc(17,Me,1,1,"tui-icon",12),a.YNc(18,Pe,1,0,"tui-icon",13),a.qZA()),2&e){let e,n,i;a.xp6(1),a.Q6J("tuiLet",a.xi3(2,36,null==(e=t.value())?null:e.card,t.cardPrefilled)),a.xp6(2),a.ekj("t-wrapper_active",t.cardCollapsed),a.xp6(2),a.ekj("t-input_inert",!t.expireFocusable),a.Q6J("autocomplete",t.autocomplete?"cc-exp":"off")("disabled",t.disabled())("maskito",t.maskExpire)("ngModel",t.expire)("readOnly",t.readOnly())("tabIndex",t.expireFocusable?0:-1),a.uIk("id",t.id+"_expire")("name",t.autocomplete?"ccexpiryyear":null),a.xp6(2),a.ekj("t-label_raised",t.labelRaised()),a.xp6(1),a.hij(" ",null==(n=t.texts())?null:n.expiryText," "),a.xp6(1),a.ekj("t-wrapper_active",t.cardCollapsed),a.xp6(2),a.ekj("t-input_cvc_hidden",t.cvcHidden)("t-input_prefilled",t.cvcPrefilled),a.Q6J("autocomplete",t.autocomplete?"cc-csc":"off")("disabled",t.disabled())("maskito",t.maskCVC)("ngModel",t.cvc)("placeholder",t.cvcPrefilled?"•••":t.exampleTextCVC)("readOnly",t.readOnly()||t.cvcPrefilled)("tabIndex",t.cvcFocusable?0:-1),a.uIk("id",t.id+"_cvc"),a.xp6(2),a.ekj("t-label_raised",t.labelRaised()),a.xp6(1),a.hij(" ",null==(i=t.texts())?null:i.cvcText," "),a.xp6(2),a.Q6J("ngIf",t.content),a.xp6(1),a.Q6J("ngIf",t.hasCleaner()),a.xp6(1),a.Q6J("ngIf",t.dropdown.content)}},dependencies:[$.O5,r.u5,r.Fj,r.JJ,r.On,o.ro,q.xi,q.P,ce.wq,ce.Li,oe,s.TuiMapperPipe,s.TuiLetDirective,L.TuiIconComponent,se.TuiChevronDirective,L.TuiAppearanceDirective,L.TuiIconPipe],styles:['[_nghost-%COMP%]{position:relative;display:block;height:var(--tui-height-l);width:29.5rem;border-radius:var(--tui-radius-l);overflow:clip}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{width:18rem}.t-outline[_ngcontent-%COMP%]{height:100%;width:100%}.t-wrapper[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;width:100%;height:100%}.t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:7.1875rem;transform:translate3d(100%,0,0)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:4.0625rem}.t-wrapper_expire[_ngcontent-%COMP%]{transform:translate3d(100%,0,0)}.t-wrapper_active[_ngcontent-%COMP%]{transform:translate3d(6.5625rem,0,0)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%]{transform:translate3d(4.125rem,0,0)}.t-card[_ngcontent-%COMP%]{width:2rem;height:2rem}.t-collapsed[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;padding:1.25rem var(--tui-padding-l) 0;box-sizing:border-box;font:var(--tui-font-text-s);line-height:2.25rem;color:var(--tui-text-01);white-space:nowrap;pointer-events:none}.t-collapsed_enable-mask[_ngcontent-%COMP%]:before{content:attr(data-before)}.t-collapsed_enable-mask[_ngcontent-%COMP%]   .t-collapsed-wrapper[_ngcontent-%COMP%]{left:1.375rem}.t-collapsed-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;display:block;width:100%;height:100%;overflow:hidden}.t-value[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;bottom:0;right:100%;display:block;transform:translate3d(100%,0,0)}.t-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:0;margin:0;padding:1.25rem var(--tui-padding-l) 0;outline:none;background:transparent;box-sizing:border-box;font:var(--tui-font-text-s);color:var(--tui-text-01)}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03)}.t-input.t-input.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden), .t-input.t-input.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden)::placeholder, .t-input.t-input.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden):-webkit-autofill{caret-color:var(--tui-base-09);color:transparent!important;-webkit-text-fill-color:transparent!important}.t-input.t-input.t-input_card[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input_inert[_ngcontent-%COMP%]{pointer-events:none}.t-input_cvc_hidden[_ngcontent-%COMP%]{-webkit-text-security:disc}@supports (-webkit-touch-callout: none){.t-input[_ngcontent-%COMP%]:active{font-size:1rem}}.t-icons[_ngcontent-%COMP%]{position:absolute;right:.75rem;display:flex;align-items:center;height:100%}.t-icon-outlet[_ngcontent-%COMP%]{display:flex;margin-right:.25rem}.t-icon[_ngcontent-%COMP%]{cursor:pointer;border:.25rem solid transparent}.t-label[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:1.125rem 1rem;font:var(--tui-font-text-m);line-height:1.25rem;color:var(--tui-text-02)}.t-label_raised[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.7em)}[data-mode="invalid"][_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{color:var(--tui-negative)}[data-focus="true"][_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden}'],changeDetection:0}),(0,i.gn)([s.tuiPure],ye.prototype,"isFocusable",null),(0,i.gn)([s.tuiPure],ye.prototype,"getPaymentSystem",null);let De=(()=>{var e;class t{constructor(){this.mask=(0,a.f3M)(o.ro),this.autocomplete=(0,a.f3M)(K).autocomplete,this.hidden=!0,this.length=3}ngOnInit(){this.refresh()}ngOnChanges(){this.refresh()}refresh(){this.mask.options=k(this.length),this.mask.ngOnChanges()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵdir=a.lG2({type:e,selectors:[["input","tuiInputCVC",""]],hostAttrs:["inputmode","numeric"],hostVars:4,hostBindings:function(e,t){1&e&&a.NdJ("copy.prevent",(function(){return 0})),2&e&&(a.Ikx("autocomplete",t.autocomplete?"cc-csc":"off")("placeholder","0".repeat(t.length)),a.Udp("-webkit-text-security",t.hidden?"disc":null))},inputs:{autocomplete:"autocomplete",hidden:"hidden",length:"length"},standalone:!0,features:[a.TTD,a.zW0([o.ro])]}),t})(),xe=(()=>{var e;class t{constructor(){this.mask=(0,a.f3M)(o.ro),this.autocomplete=(0,a.f3M)(K).autocomplete}ngOnInit(){this.mask.options=E,this.mask.ngOnChanges()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵdir=a.lG2({type:e,selectors:[["input","tuiInputExpire",""]],hostAttrs:["inputmode","numeric","placeholder","00/00","translate","no"],hostVars:1,hostBindings:function(e,t){2&e&&a.Ikx("autocomplete",t.autocomplete?"cc-exp":"off")},inputs:{autocomplete:"autocomplete"},standalone:!0,features:[a.zW0([o.ro])]}),t})();function Re(e,t){if(1&e&&(a.TgZ(0,"div",5),a._UZ(1,"tui-icon",6),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("icon",e.iconLeft)}}function Oe(e,t){if(1&e&&(a.TgZ(0,"div",7),a._UZ(1,"tui-icon",6),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.Q6J("icon",e.iconRight)}}function Se(e,t){if(1&e&&a._UZ(0,"tui-icon",10),2&e){const e=a.oxw(2);a.Q6J("icon",e.paymentIcons[e.paymentSystem])}}function ke(e,t){if(1&e&&a._UZ(0,"img",11),2&e){const e=a.oxw(2);a.Q6J("alt",e.paymentSystem)("src",e.resolver(e.paymentIcons[e.paymentSystem]).replace("Outline",""),a.LSH)}}function Ee(e,t){if(1&e&&(a.ynx(0),a.YNc(1,Se,1,1,"tui-icon",8),a.YNc(2,ke,1,2,"ng-template",null,9,a.W1O),a.BQk()),2&e){const e=a.MAs(3),t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.isMono)("ngIfElse",e)}}const we=["*"];let Ae=(()=>{var e;class t{constructor(){this.paymentIcons=(0,a.f3M)(z),this.resolver=(0,a.f3M)(L.TUI_ICON_RESOLVER),this.size="m",this.paymentSystem=null,this.iconLeft="",this.iconRight=""}get isMono(){switch(this.paymentSystem){case"mir":case"visa":case"electron":return!0;default:return!1}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["tui-thumbnail-card"]],hostVars:1,hostBindings:function(e,t){2&e&&a.uIk("data-size",t.size)},inputs:{size:"size",paymentSystem:"paymentSystem",iconLeft:"iconLeft",iconRight:"iconRight"},standalone:!0,features:[a.jDz],ngContentSelectors:we,decls:6,vars:3,consts:[[1,"t-front"],["class","t-left",4,"ngIf"],["class","t-right",4,"ngIf"],[4,"ngIf"],[1,"t-back"],[1,"t-left"],[1,"t-icon",3,"icon"],[1,"t-right"],["class","t-logo",3,"icon",4,"ngIf","ngIfElse"],["colored",""],[1,"t-logo",3,"icon"],[1,"t-logo",3,"alt","src"]],template:function(e,t){1&e&&(a.F$t(),a.TgZ(0,"div",0),a.YNc(1,Re,2,1,"div",1),a.YNc(2,Oe,2,1,"div",2),a.Hsn(3),a.YNc(4,Ee,4,2,"ng-container",3),a.qZA(),a._UZ(5,"div",4)),2&e&&(a.xp6(1),a.Q6J("ngIf",t.iconLeft),a.xp6(1),a.Q6J("ngIf",t.iconRight),a.xp6(2),a.Q6J("ngIf",t.paymentSystem))},dependencies:[L.TuiIconComponent,$.O5],styles:['[_nghost-%COMP%]{position:relative;display:inline-flex;flex-shrink:0;background:#000;color:#fff;transform-style:preserve-3d;overflow:hidden}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:""}[data-size=s][_nghost-%COMP%]{width:2.5rem;height:1.625rem;border-radius:.25rem;font-size:0}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.125rem,.125rem) scale(.625)}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{display:none}[data-size=s][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.375rem;transform:scale(.55)}[data-size=m][_nghost-%COMP%]{width:3rem;height:2rem;border-radius:.3125rem;text-indent:.1875rem;font:normal .5625rem/.875rem var(--tui-font-text)}[data-size=m][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.25rem) scale(.75)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem) scale(.875)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.714)}[data-size=m][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.3125rem;transform:scale(.55)}[data-size=l][_nghost-%COMP%]{width:3.375rem;height:2.25rem;border-radius:.375rem;text-indent:.3125rem;font:normal .625rem/1.125rem var(--tui-font-text)}[data-size=l][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.1875rem;transform:scale(.75)}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{position:absolute;top:0;display:flex}.t-left[_ngcontent-%COMP%]{left:0;transform-origin:top left}.t-right[_ngcontent-%COMP%]{right:0;transform-origin:top right}.t-right[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background:currentColor;opacity:.35}.t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:#fff;transform:scale(.625)}.t-logo[_ngcontent-%COMP%]{position:absolute;right:.1875rem;width:1.5rem;height:1.5rem;transform-origin:right}.t-icon[_ngcontent-%COMP%]{width:1rem;height:1rem}.t-front[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:flex-end;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:inset 0 0 0 1px var(--tui-clear);border-radius:inherit}.t-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);background:#b0b0b0;border-radius:inherit}.t-back[_ngcontent-%COMP%]:after{position:absolute;left:0;right:0;content:"";top:20%;bottom:60%;background:#959595}'],changeDetection:0}),t})();function Ue({value:e}){return 5!==e?.expire?.length||y(e?.expire)?null:{expire:new s.TuiValidationError("Expire date")}}function Ne({value:e}){return e?.card&&!P(e.card)?{card:new s.TuiValidationError("Invalid card number")}:null}function Ge(e){return({value:t})=>P(t)?null:{luhn:new s.TuiValidationError(e)}}}}]);