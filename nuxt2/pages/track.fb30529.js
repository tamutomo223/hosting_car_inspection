(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(t,e,n){var content=n(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("17faa38a",content,!0,{sourceMap:!1})},163:function(t,e,n){var content=n(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("8fc32bc2",content,!0,{sourceMap:!1})},164:function(t,e,n){"use strict";n.r(e);var c={name:"SideMenu",components:{BaseText:n(160).default},data:function(){return{isActiveIndex:0}},props:{sideMenu:{type:Array,required:!0},color:{type:String,required:!0}},computed:{isActive:function(){var t=this;return function(e){if(t.isActiveIndex===e)return"active-".concat(t.color)}},classes:function(){return"side_menu-".concat(this.color)}},methods:{sideMenuClick:function(t,e){this.isActiveIndex=t,this.isActive(t),this.$emit("textListUpdate",e)}}},r=(n(170),n(21)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"side_menu",class:t.classes},[n("div",{staticClass:"menu_list"},t._l(t.sideMenu,(function(e,c){return n("div",{key:c,staticClass:"text_box",class:t.isActive(c),on:{click:function(n){return t.sideMenuClick(c,e)}}},[n("BaseText",{staticClass:"index",attrs:{color:"black",face:"bold",size:"60"}},[t._v(t._s(c+1))]),t._v(" "),n("BaseText",{staticClass:"text",attrs:{color:"black",face:"bold",size:"36"}},[t._v(t._s(e.text))])],1)})),0)])}),[],!1,null,"a1b48a92",null);e.default=component.exports;installComponents(component,{BaseText:n(160).default})},165:function(t,e,n){"use strict";n.r(e);n(31),n(16);var c=n(2),r=(n(172),n(160)),o=n(161),d={name:"InspectionGuide",components:{BaseText:r.default,BaseIcon:o.default},props:{inspection:{type:Array,required:!0},sideMenuId:{type:Number,required:!0},lang:{type:String,require:!0},color:{type:String,required:!0}},data:function(){return{icon:{blue:!1,yellow:!1,green:!1,white:!0},isActive:Number,isSpeek:!1,uttr:Object}},computed:{getText:function(){for(var t=[],e=[],i=0;i<this.inspection.length;i++)this.sideMenuId==this.inspection[i].id&&(t.push(this.inspection[i]),this.isActive=-1);for(var element=t[0],n=0;n<element.japan.length;n++){var c={sub:element.japan[n],main:element.list[n]};e.push(c)}return e},classes:function(){return this.color},clickActive:function(){var t=this;return function(e,n){return t.isActive===n?"".concat(e,"-active-").concat(t.color):""}}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new SpeechSynthesisUtterance;case 2:t.uttr=e.sent,n=t.lang,e.t0=n,e.next="ja"===e.t0?7:"en"===e.t0?10:"ch1"===e.t0?13:"ch2"===e.t0?16:"ko"===e.t0?19:"pt"===e.t0?22:25;break;case 7:return t.uttr.lang="ja_JP",t.uttr.name="日本語 日本",e.abrupt("break",25);case 10:return t.uttr.lang="en_US",t.uttr.name="英語 アメリカ合衆国",e.abrupt("break",25);case 13:case 16:return t.uttr.lang="zh_CN_#Hans",t.uttr.name="中国語 中国",e.abrupt("break",25);case 19:return t.uttr.lang="ko_KR",t.uttr.name="韓国語 韓国",e.abrupt("break",25);case 22:return t.uttr.lang="pt_PT",t.uttr.name="ポルトガル語 ポルトガル",e.abrupt("break",25);case 25:case"end":return e.stop()}}),e)})))()},mounted:function(){"blue"===this.color&&(this.icon.blue=!0),"yellow"===this.color&&(this.icon.yellow=!0),"green"===this.color&&(this.icon.green=!0)},methods:{speakerClick:function(text,t){var e=this.uttr;this.isActive=t,e.text=text,speechSynthesis.speak(e),this.isSpeek=!0;var n=this;e.onend=function(t){n.isSpeek=!1}}}},l=(n(175),n(21)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"inspection"},[t.isSpeek?n("div",{staticClass:"speech_mask"}):t._e(),t._v(" "),n("div",{staticClass:"card_list"},t._l(t.getText,(function(text,e){return n("div",{key:e,staticClass:"card",class:["card-"+t.classes,t.clickActive("card",e)]},[n("div",{staticClass:"card-id",class:["card-id-"+t.classes,t.clickActive("card-id",e)]},[n("BaseText",{class:t.clickActive("card-id-text",e),attrs:{size:"44",face:"bold",color:"white"}},[t._v("\n          "+t._s(t.sideMenuId)+"-"+t._s(e+1))])],1),t._v(" "),n("div",{staticClass:"card-box",class:t.clickActive("card-box",e),on:{click:function(n){return t.speakerClick(text.main,e)}}},[n("div",{staticClass:"text-box"},[n("BaseText",{staticClass:"text",class:t.clickActive("text",e),attrs:{size:"44",face:"bold",color:"gray"}},[t._v(t._s(text.sub))]),t._v(" "),n("BaseText",{staticClass:"text text-main",class:t.clickActive("text-main",e),attrs:{size:"79",face:"bold",color:"black"}},[t._v(t._s(text.main))])],1),t._v(" "),n("div",{staticClass:"speaker"},[t.icon.blue?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_blue.svg"}}):t._e(),t._v(" "),t.icon.yellow?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_yellow.svg"}}):t._e(),t._v(" "),t.icon.green?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_green.svg"}}):t._e(),t._v(" "),t.icon.white?n("BaseIcon",{staticClass:"icon-white",class:t.clickActive("icon-white",e),attrs:{icon:"speaker_white.svg"}}):t._e()],1)])])})),0)])}),[],!1,null,"c1885430",null);e.default=component.exports;installComponents(component,{BaseText:n(160).default,BaseIcon:n(161).default})},170:function(t,e,n){"use strict";var c=n(162);n.n(c).a},171:function(t,e,n){(e=n(41)(!1)).push([t.i,".side_menu[data-v-a1b48a92]{position:fixed;top:12.5vh;width:35.41667vw;padding:2.91667vh 3.90625vw;height:100vh}.side_menu-blue[data-v-a1b48a92]{background:#9ad2f9}.side_menu-yellow[data-v-a1b48a92]{background:#f9d59c}.side_menu-green[data-v-a1b48a92]{background:#97d8a4}.text_box[data-v-a1b48a92]{margin:0 auto;height:7.5vh;width:27.60417vw;background:#fff;border-radius:2.5vh;display:flex;align-items:center;box-shadow:0 6px 6px rgba(0,0,0,.10196)}.text_box[data-v-a1b48a92]:not(:first-child){margin-top:14px}.index[data-v-a1b48a92]{padding-left:1.5625vw}.index[data-v-a1b48a92],.text[data-v-a1b48a92]{display:block}.text[data-v-a1b48a92]{padding-left:2.08333vw}.active-blue[data-v-a1b48a92]{background:#3fa9f5}.active-blue .index[data-v-a1b48a92],.active-blue .text[data-v-a1b48a92]{color:#fff}.active-yellow[data-v-a1b48a92]{background:#fbb03b}.active-yellow .index[data-v-a1b48a92],.active-yellow .text[data-v-a1b48a92]{color:#fff}.active-green[data-v-a1b48a92]{background:#39b54a}.active-green .index[data-v-a1b48a92],.active-green .text[data-v-a1b48a92]{color:#fff}",""]),t.exports=e},172:function(t,e,n){"use strict";var c=n(4),r=n(17),o=n(22),d=n(108),l=n(62),v=n(9),f=n(43).f,h=n(63).f,x=n(8).f,m=n(173).trim,w=c.Number,k=w,_=w.prototype,y="Number"==o(n(79)(_)),I="trim"in String.prototype,C=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,c,r,o=(e=I?e.trim():m(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+e}for(var code,d=e.slice(2),i=0,v=d.length;i<v;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,c)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?v((function(){_.valueOf.call(n)})):"Number"!=o(n))?d(new k(C(e)),n,w):C(e)};for(var A,O=n(7)?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;O.length>M;M++)r(k,A=O[M])&&!r(w,A)&&x(w,A,h(k,A));w.prototype=_,_.constructor=w,n(10)(c,"Number",w)}},173:function(t,e,n){var c=n(6),r=n(23),o=n(9),d=n(174),l="["+d+"]",v=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),h=function(t,e,n){var r={},l=o((function(){return!!d[t]()||"​"!="​"[t]()})),v=r[t]=l?e(x):d[t];n&&(r[n]=v),c(c.P+c.F*l,"String",r)},x=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},174:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},175:function(t,e,n){"use strict";var c=n(163);n.n(c).a},176:function(t,e,n){(e=n(41)(!1)).push([t.i,".speech_mask[data-v-c1885430]{width:100%;height:100vh;position:fixed;overflow:hidden;top:0;left:0;z-index:100;background:rgba(16,16,16,.5098);opacity:.5}.inspection[data-v-c1885430]{width:100%;overflow:scroll;margin-left:35.41667vw;margin-top:12.5vh;margin-bottom:30px}.card[data-v-c1885430]{border-radius:30px;display:flex;width:61.71875vw;margin:2vh auto 0}.card-blue[data-v-c1885430]{border:6px solid #3fa9f5}.card-yellow[data-v-c1885430]{border:6px solid #fbb03b}.card-green[data-v-c1885430]{border:6px solid #39b54a}.card-active-blue[data-v-c1885430]{border:9px solid #3fa9f5;background:#3fa9f5}.card-active-yellow[data-v-c1885430]{border:9px solid #fbb03b;background:#fbb03b}.card-active-green[data-v-c1885430]{border:9px solid #39b54a;background:#39b54a}.card-id[data-v-c1885430]{display:flex;align-items:center;padding:0 1.19792vw;border-top-left-radius:27px;border-bottom-left-radius:27px;white-space:nowrap;margin:-1px}.card-id-blue[data-v-c1885430]{background:#3fa9f5}.card-id-yellow[data-v-c1885430]{background:#fbb03b}.card-id-green[data-v-c1885430]{background:#39b54a}.card-box[data-v-c1885430]{width:100%;padding:2.5vh 1.19792vw;display:flex;justify-content:space-between;align-items:center;position:relative}.card-box-active-blue[data-v-c1885430]{background:#3fa9f5}.card-box-active-yellow[data-v-c1885430]{background:#fbb03b}.card-box-active-green[data-v-c1885430]{background:#39b54a}.text[data-v-c1885430]{display:block;width:600px}.text-active-blue[data-v-c1885430],.text-active-green[data-v-c1885430],.text-active-yellow[data-v-c1885430]{color:hsla(0,0%,100%,.7)}.text-main[data-v-c1885430]{line-height:1.14em}.text-main-active-blue[data-v-c1885430],.text-main-active-green[data-v-c1885430],.text-main-active-yellow[data-v-c1885430]{color:#fff;font-size:70px}.icon[data-v-c1885430]{display:block}.icon[data-v-c1885430],.icon-white[data-v-c1885430]{width:2.12656vw;height:5.34167vh}.icon-white[data-v-c1885430]{position:absolute;top:50%;transform:translateY(-50%);z-index:-1}.icon-white-active-blue[data-v-c1885430],.icon-white-active-green[data-v-c1885430],.icon-white-active-yellow[data-v-c1885430]{z-index:1}",""]),t.exports=e},205:function(t,e,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("a6630f86",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";var c=n(205);n.n(c).a},220:function(t,e,n){(e=n(41)(!1)).push([t.i,".main[data-v-aa0af4c4]{display:flex}",""]),t.exports=e},232:function(t,e,n){"use strict";n.r(e);n(78),n(29),n(30),n(13),n(61);var c=n(44),r=n(164),o=n(165),d=n(64),l=n(177);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"traffic",components:{SideMenu:r.default,InspectionGuide:o.default},data:function(){return{languageJson:{},sideMenu:[],sideMenuId:1}},created:function(){this.languageJson=Object(l.cloneDeep)(this.getLanguage),this.sideMenu=this.languageJson.inspection.sideMenu.trafficText},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["getLanguage"])),methods:{textListUpdate:function(data){this.sideMenuId=data.id}}},h=(n(219),n(21)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"traffic"},[n("Header",{attrs:{backGround:"yellow",headerText:t.languageJson.header}}),t._v(" "),n("div",{staticClass:"main"},[n("SideMenu",{attrs:{sideMenu:t.sideMenu,color:"yellow"},on:{textListUpdate:t.textListUpdate}}),t._v(" "),n("InspectionGuide",{attrs:{inspection:t.languageJson.inspection.mainText.trafficText,sideMenuId:t.sideMenuId,lang:t.languageJson.language,color:"yellow"}})],1)],1)}),[],!1,null,"aa0af4c4",null);e.default=component.exports;installComponents(component,{Header:n(178).default,SideMenu:n(164).default,InspectionGuide:n(165).default})}}]);