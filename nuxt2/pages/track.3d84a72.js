(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,n){var content=n(171);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("17faa38a",content,!0,{sourceMap:!1})},163:function(e,t,n){var content=n(176);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("42428b2a",content,!0,{sourceMap:!1})},164:function(e,t,n){"use strict";n.r(t);var c={name:"SideMenu",components:{BaseText:n(160).default},data:function(){return{isActiveIndex:0}},props:{sideMenu:{type:Array,required:!0},color:{type:String,required:!0}},computed:{isActive:function(){var e=this;return function(t){if(e.isActiveIndex===t)return"active-".concat(e.color)}},classes:function(){return"side_menu-".concat(this.color)}},methods:{sideMenuClick:function(e,t){this.isActiveIndex=e,this.isActive(e),this.$emit("textListUpdate",t)}}},r=(n(170),n(21)),component=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"side_menu",class:e.classes},[n("div",{staticClass:"menu_list"},e._l(e.sideMenu,(function(t,c){return n("div",{key:c,staticClass:"text_box",class:e.isActive(c),on:{click:function(n){return e.sideMenuClick(c,t)}}},[n("BaseText",{staticClass:"index",attrs:{color:"black",face:"bold",size:"60"}},[e._v(e._s(c+1))]),e._v(" "),n("BaseText",{staticClass:"text",attrs:{color:"black",face:"bold",size:"36"}},[e._v(e._s(t.text))])],1)})),0)])}),[],!1,null,"a1b48a92",null);t.default=component.exports;installComponents(component,{BaseText:n(160).default})},165:function(e,t,n){"use strict";n.r(t);n(31),n(16);var c=n(2),r=(n(172),n(160)),o=n(161),d={name:"InspectionGuide",components:{BaseText:r.default,BaseIcon:o.default},props:{inspection:{type:Array,required:!0},sideMenuId:{type:Number,required:!0},lang:{type:String,require:!0},color:{type:String,required:!0}},data:function(){return{icon:{blue:!1,yellow:!1,green:!1,white:!0},isActive:Number,isSpeek:!1,uttr:Object}},computed:{getText:function(){for(var e=[],t=[],i=0;i<this.inspection.length;i++)this.sideMenuId==this.inspection[i].id&&(e.push(this.inspection[i]),this.isActive=-1);for(var element=e[0],n=0;n<element.japan.length;n++){var c={sub:element.japan[n],main:element.list[n]};t.push(c)}return t},classes:function(){return this.color},clickActive:function(){var e=this;return function(t,n){return e.isActive===n?"".concat(t,"-active-").concat(e.color):""}},noScroll:function(){if(this.isSpeek)return"noscroll"}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new SpeechSynthesisUtterance;case 2:e.uttr=t.sent,n=e.lang,t.t0=n,t.next="ja"===t.t0?7:"en"===t.t0?10:"ch1"===t.t0?13:"ch2"===t.t0?16:"ko"===t.t0?19:"pt"===t.t0?22:25;break;case 7:return e.uttr.lang="ja_JP",e.uttr.name="日本語 日本",t.abrupt("break",25);case 10:return e.uttr.lang="en_US",e.uttr.name="英語 アメリカ合衆国",t.abrupt("break",25);case 13:case 16:return e.uttr.lang="zh_CN_#Hans",e.uttr.name="中国語 中国",t.abrupt("break",25);case 19:return e.uttr.lang="ko_KR",e.uttr.name="韓国語 韓国",t.abrupt("break",25);case 22:return e.uttr.lang="pt_PT",e.uttr.name="ポルトガル語 ポルトガル",t.abrupt("break",25);case 25:case"end":return t.stop()}}),t)})))()},mounted:function(){"blue"===this.color&&(this.icon.blue=!0),"yellow"===this.color&&(this.icon.yellow=!0),"green"===this.color&&(this.icon.green=!0)},methods:{speakerClick:function(text,e){var t=this.uttr;this.isActive=e,t.text=text,speechSynthesis.speak(t),this.isSpeek=!0;var n=this;t.onend=function(e){n.isSpeek=!1}}}},l=(n(175),n(21)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"inspection",class:e.noScroll},[e.isSpeek?n("div",{staticClass:"speech_mask"}):e._e(),e._v(" "),n("div",{staticClass:"card_list"},e._l(e.getText,(function(text,t){return n("div",{key:t,staticClass:"card",class:["card-"+e.classes,e.clickActive("card",t)]},[n("div",{staticClass:"card-id",class:["card-id-"+e.classes,e.clickActive("card-id",t)]},[n("BaseText",{class:e.clickActive("card-id-text",t),attrs:{size:"44",face:"bold",color:"white"}},[e._v("\n          "+e._s(e.sideMenuId)+"-"+e._s(t+1))])],1),e._v(" "),n("div",{staticClass:"card-box",class:e.clickActive("card-box",t),on:{click:function(n){return e.speakerClick(text.main,t)}}},[n("div",{staticClass:"text-box"},[n("BaseText",{staticClass:"text",class:e.clickActive("text",t),attrs:{size:"44",face:"bold",color:"gray"}},[e._v(e._s(text.sub))]),e._v(" "),n("BaseText",{staticClass:"text text-main",class:e.clickActive("text-main",t),attrs:{size:"79",face:"bold",color:"black"}},[e._v(e._s(text.main))])],1),e._v(" "),n("div",{staticClass:"speaker"},[e.icon.blue?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_blue.svg"}}):e._e(),e._v(" "),e.icon.yellow?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_yellow.svg"}}):e._e(),e._v(" "),e.icon.green?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_green.svg"}}):e._e(),e._v(" "),e.icon.white?n("BaseIcon",{staticClass:"icon-white",class:e.clickActive("icon-white",t),attrs:{icon:"speaker_white.svg"}}):e._e()],1)])])})),0)])}),[],!1,null,"dec36924",null);t.default=component.exports;installComponents(component,{BaseText:n(160).default,BaseIcon:n(161).default})},170:function(e,t,n){"use strict";var c=n(162);n.n(c).a},171:function(e,t,n){(t=n(41)(!1)).push([e.i,".side_menu[data-v-a1b48a92]{position:fixed;top:12.5vh;width:35.41667vw;padding:2.91667vh 3.90625vw;height:100vh}.side_menu-blue[data-v-a1b48a92]{background:#9ad2f9}.side_menu-yellow[data-v-a1b48a92]{background:#f9d59c}.side_menu-green[data-v-a1b48a92]{background:#97d8a4}.text_box[data-v-a1b48a92]{margin:0 auto;height:7.5vh;width:27.60417vw;background:#fff;border-radius:2.5vh;display:flex;align-items:center;box-shadow:0 6px 6px rgba(0,0,0,.10196)}.text_box[data-v-a1b48a92]:not(:first-child){margin-top:14px}.index[data-v-a1b48a92]{padding-left:1.5625vw}.index[data-v-a1b48a92],.text[data-v-a1b48a92]{display:block}.text[data-v-a1b48a92]{padding-left:2.08333vw}.active-blue[data-v-a1b48a92]{background:#3fa9f5}.active-blue .index[data-v-a1b48a92],.active-blue .text[data-v-a1b48a92]{color:#fff}.active-yellow[data-v-a1b48a92]{background:#fbb03b}.active-yellow .index[data-v-a1b48a92],.active-yellow .text[data-v-a1b48a92]{color:#fff}.active-green[data-v-a1b48a92]{background:#39b54a}.active-green .index[data-v-a1b48a92],.active-green .text[data-v-a1b48a92]{color:#fff}",""]),e.exports=t},172:function(e,t,n){"use strict";var c=n(4),r=n(17),o=n(22),d=n(108),l=n(62),v=n(9),f=n(43).f,h=n(63).f,x=n(8).f,m=n(173).trim,w=c.Number,k=w,_=w.prototype,y="Number"==o(n(79)(_)),I="trim"in String.prototype,C=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,c,r,o=(t=I?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+t}for(var code,d=t.slice(2),i=0,v=d.length;i<v;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,c)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(y?v((function(){_.valueOf.call(n)})):"Number"!=o(n))?d(new k(C(t)),n,w):C(t)};for(var A,O=n(7)?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;O.length>S;S++)r(k,A=O[S])&&!r(w,A)&&x(w,A,h(k,A));w.prototype=_,_.constructor=w,n(10)(c,"Number",w)}},173:function(e,t,n){var c=n(6),r=n(23),o=n(9),d=n(174),l="["+d+"]",v=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),h=function(e,t,n){var r={},l=o((function(){return!!d[e]()||"​"!="​"[e]()})),v=r[e]=l?t(x):d[e];n&&(r[n]=v),c(c.P+c.F*l,"String",r)},x=h.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(v,"")),2&t&&(e=e.replace(f,"")),e};e.exports=h},174:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},175:function(e,t,n){"use strict";var c=n(163);n.n(c).a},176:function(e,t,n){(t=n(41)(!1)).push([e.i,".speech_mask[data-v-dec36924]{width:100%;height:100vh;position:fixed;overflow:hidden;top:0;left:0;z-index:100;background:rgba(16,16,16,.5098);opacity:.5}.inspection[data-v-dec36924]{width:100%;overflow:scroll;margin-left:35.41667vw;margin-top:12.5vh;margin-bottom:30px}.card[data-v-dec36924]{border-radius:30px;display:flex;width:61.71875vw;margin:2vh auto 0}.card-blue[data-v-dec36924]{border:6px solid #3fa9f5}.card-yellow[data-v-dec36924]{border:6px solid #fbb03b}.card-green[data-v-dec36924]{border:6px solid #39b54a}.card-active-blue[data-v-dec36924]{border:9px solid #3fa9f5;background:#3fa9f5}.card-active-yellow[data-v-dec36924]{border:9px solid #fbb03b;background:#fbb03b}.card-active-green[data-v-dec36924]{border:9px solid #39b54a;background:#39b54a}.card-id[data-v-dec36924]{display:flex;align-items:center;padding:0 1.19792vw;border-top-left-radius:27px;border-bottom-left-radius:27px;white-space:nowrap;margin:-1px}.card-id-blue[data-v-dec36924]{background:#3fa9f5}.card-id-yellow[data-v-dec36924]{background:#fbb03b}.card-id-green[data-v-dec36924]{background:#39b54a}.card-box[data-v-dec36924]{width:100%;padding:2.5vh 1.19792vw;display:flex;justify-content:space-between;align-items:center;position:relative}.card-box-active-blue[data-v-dec36924]{background:#3fa9f5}.card-box-active-yellow[data-v-dec36924]{background:#fbb03b}.card-box-active-green[data-v-dec36924]{background:#39b54a}.text[data-v-dec36924]{display:block;width:600px}.text-active-blue[data-v-dec36924],.text-active-green[data-v-dec36924],.text-active-yellow[data-v-dec36924]{color:hsla(0,0%,100%,.7)}.text-main[data-v-dec36924]{line-height:1.14em}.text-main-active-blue[data-v-dec36924],.text-main-active-green[data-v-dec36924],.text-main-active-yellow[data-v-dec36924]{color:#fff;font-size:70px}.icon[data-v-dec36924]{display:block}.icon[data-v-dec36924],.icon-white[data-v-dec36924]{width:2.12656vw;height:5.34167vh}.icon-white[data-v-dec36924]{position:absolute;top:50%;transform:translateY(-50%);z-index:-1}.icon-white-active-blue[data-v-dec36924],.icon-white-active-green[data-v-dec36924],.icon-white-active-yellow[data-v-dec36924]{z-index:1}.noscroll[data-v-dec36924]{position:fixed;overflow:hidden;left:-17.7%}",""]),e.exports=t},205:function(e,t,n){var content=n(220);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("a6630f86",content,!0,{sourceMap:!1})},219:function(e,t,n){"use strict";var c=n(205);n.n(c).a},220:function(e,t,n){(t=n(41)(!1)).push([e.i,".main[data-v-aa0af4c4]{display:flex}",""]),e.exports=t},232:function(e,t,n){"use strict";n.r(t);n(78),n(29),n(30),n(13),n(61);var c=n(44),r=n(164),o=n(165),d=n(64),l=n(177);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f={name:"traffic",components:{SideMenu:r.default,InspectionGuide:o.default},data:function(){return{languageJson:{},sideMenu:[],sideMenuId:1}},created:function(){this.languageJson=Object(l.cloneDeep)(this.getLanguage),this.sideMenu=this.languageJson.inspection.sideMenu.trafficText},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(d.b)(["getLanguage"])),methods:{textListUpdate:function(data){this.sideMenuId=data.id}}},h=(n(219),n(21)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"traffic"},[n("Header",{attrs:{backGround:"yellow",headerText:e.languageJson.header}}),e._v(" "),n("div",{staticClass:"main"},[n("SideMenu",{attrs:{sideMenu:e.sideMenu,color:"yellow"},on:{textListUpdate:e.textListUpdate}}),e._v(" "),n("InspectionGuide",{attrs:{inspection:e.languageJson.inspection.mainText.trafficText,sideMenuId:e.sideMenuId,lang:e.languageJson.language,color:"yellow"}})],1)],1)}),[],!1,null,"aa0af4c4",null);t.default=component.exports;installComponents(component,{Header:n(178).default,SideMenu:n(164).default,InspectionGuide:n(165).default})}}]);