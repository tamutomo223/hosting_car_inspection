(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{162:function(e,t,n){var content=n(171);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("17faa38a",content,!0,{sourceMap:!1})},163:function(e,t,n){var content=n(176);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("4daaa332",content,!0,{sourceMap:!1})},164:function(e,t,n){"use strict";n.r(t);var r={name:"SideMenu",components:{BaseText:n(160).default},data:function(){return{isActiveIndex:0}},props:{sideMenu:{type:Array,required:!0},color:{type:String,required:!0}},computed:{isActive:function(){var e=this;return function(t){if(e.isActiveIndex===t)return"active-".concat(e.color)}},classes:function(){return"side_menu-".concat(this.color)}},methods:{sideMenuClick:function(e,t){this.isActiveIndex=e,this.isActive(e),this.$emit("textListUpdate",t)}}},c=(n(170),n(21)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"side_menu",class:e.classes},[n("div",{staticClass:"menu_list"},e._l(e.sideMenu,(function(t,r){return n("div",{key:r,staticClass:"text_box",class:e.isActive(r),on:{click:function(n){return e.sideMenuClick(r,t)}}},[n("BaseText",{staticClass:"index",attrs:{color:"black",face:"bold",size:"60"}},[e._v(e._s(r+1))]),e._v(" "),n("BaseText",{staticClass:"text",attrs:{color:"black",face:"bold",size:"36"}},[e._v(e._s(t.text))])],1)})),0)])}),[],!1,null,"a1b48a92",null);t.default=component.exports;installComponents(component,{BaseText:n(160).default})},165:function(e,t,n){"use strict";n.r(t);n(31),n(172);var r=n(160),c=n(161),o={name:"InspectionGuide",components:{BaseText:r.default,BaseIcon:c.default},props:{inspection:{type:Array,required:!0},sideMenuId:{type:Number,required:!0},lang:{type:String,require:!0},color:{type:String,required:!0}},data:function(){return{icon:{blue:!1,yellow:!1,green:!1}}},computed:{getText:function(){for(var e=[],t=[],i=0;i<this.inspection.length;i++)this.sideMenuId==this.inspection[i].id&&e.push(this.inspection[i]);for(var element=e[0],n=0;n<element.japan.length;n++){var r={sub:element.japan[n],main:element.list[n]};t.push(r)}return t},classes:function(){return this.color}},mounted:function(){"blue"==this.color&&(this.icon.blue=!0),"yellow"==this.color&&(this.icon.yellow=!0),"green"==this.color&&(this.icon.green=!0)},methods:{speakerClick:function(text){var e=new SpeechSynthesisUtterance,t=this.lang;switch(console.log(t,text),e.text=text,t){case"ja":e.lang="ja_JP",e.name="日本語 日本";break;case"en":e.lang="en_US",e.name="英語 アメリカ合衆国";break;case"ch1":case"ch2":e.lang="zh_CN_#Hans",e.name="中国語 中国";break;case"ko":e.lang="ko_KR",e.name="韓国語 韓国";break;case"pt":e.lang="pt_PT",e.name="ポルトガル語 ポルトガル"}speechSynthesis.speak(e)}}},l=(n(175),n(21)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"inspection"},[n("div",{staticClass:"card_list"},e._l(e.getText,(function(text,t){return n("div",{key:t,staticClass:"card",class:"card-"+e.classes},[n("div",{staticClass:"card-id",class:"card-id-"+e.classes},[n("BaseText",{attrs:{size:"44",face:"bold",color:"white"}},[e._v(e._s(e.sideMenuId)+"-"+e._s(t+1))])],1),e._v(" "),n("div",{staticClass:"card-box"},[n("div",[n("BaseText",{staticClass:"text",attrs:{size:"44",face:"bold",color:"gray"}},[e._v(e._s(text.sub))]),e._v(" "),n("BaseText",{staticClass:"text text-main",attrs:{size:"79",face:"bold",color:"black"}},[e._v(e._s(text.main))])],1),e._v(" "),n("div",{staticClass:"speaker",on:{click:function(t){return e.speakerClick(text.main)}}},[e.icon.blue?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_blue.svg"}}):e._e(),e._v(" "),e.icon.yellow?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_yellow.svg"}}):e._e(),e._v(" "),e.icon.green?n("BaseIcon",{staticClass:"icon",attrs:{icon:"speaker_green.svg"}}):e._e()],1)])])})),0)])}),[],!1,null,"37826aa5",null);t.default=component.exports;installComponents(component,{BaseText:n(160).default,BaseIcon:n(161).default})},170:function(e,t,n){"use strict";var r=n(162);n.n(r).a},171:function(e,t,n){(t=n(41)(!1)).push([e.i,".side_menu[data-v-a1b48a92]{position:fixed;top:12.5vh;width:35.41667vw;padding:2.91667vh 3.90625vw;height:100vh}.side_menu-blue[data-v-a1b48a92]{background:#9ad2f9}.side_menu-yellow[data-v-a1b48a92]{background:#f9d59c}.side_menu-green[data-v-a1b48a92]{background:#97d8a4}.text_box[data-v-a1b48a92]{margin:0 auto;height:7.5vh;width:27.60417vw;background:#fff;border-radius:2.5vh;display:flex;align-items:center;box-shadow:0 6px 6px rgba(0,0,0,.10196)}.text_box[data-v-a1b48a92]:not(:first-child){margin-top:14px}.index[data-v-a1b48a92]{padding-left:1.5625vw}.index[data-v-a1b48a92],.text[data-v-a1b48a92]{display:block}.text[data-v-a1b48a92]{padding-left:2.08333vw}.active-blue[data-v-a1b48a92]{background:#3fa9f5}.active-blue .index[data-v-a1b48a92],.active-blue .text[data-v-a1b48a92]{color:#fff}.active-yellow[data-v-a1b48a92]{background:#fbb03b}.active-yellow .index[data-v-a1b48a92],.active-yellow .text[data-v-a1b48a92]{color:#fff}.active-green[data-v-a1b48a92]{background:#39b54a}.active-green .index[data-v-a1b48a92],.active-green .text[data-v-a1b48a92]{color:#fff}",""]),e.exports=t},172:function(e,t,n){"use strict";var r=n(4),c=n(16),o=n(22),l=n(108),d=n(62),f=n(9),v=n(43).f,h=n(63).f,x=n(8).f,m=n(173).trim,_=r.Number,y=_,w=_.prototype,k="Number"==o(n(79)(w)),I="trim"in String.prototype,C=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,c,o=(t=I?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,r)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(k?f((function(){w.valueOf.call(n)})):"Number"!=o(n))?l(new y(C(t)),n,_):C(t)};for(var M,O=n(7)?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;O.length>N;N++)c(y,M=O[N])&&!c(_,M)&&x(_,M,h(y,M));_.prototype=w,w.constructor=_,n(10)(r,"Number",_)}},173:function(e,t,n){var r=n(6),c=n(23),o=n(9),l=n(174),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(e,t,n){var c={},d=o((function(){return!!l[e]()||"​"!="​"[e]()})),f=c[e]=d?t(x):l[e];n&&(c[n]=f),r(r.P+r.F*d,"String",c)},x=h.trim=function(e,t){return e=String(c(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(v,"")),e};e.exports=h},174:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},175:function(e,t,n){"use strict";var r=n(163);n.n(r).a},176:function(e,t,n){(t=n(41)(!1)).push([e.i,".inspection[data-v-37826aa5]{width:100%;overflow:scroll;margin-left:35.41667vw;margin-top:12.5vh;margin-bottom:30px}.card[data-v-37826aa5]{border-radius:30px;display:flex;width:61.71875vw;margin:2vh auto 0}.card-blue[data-v-37826aa5]{border:6px solid #3fa9f5}.card-yellow[data-v-37826aa5]{border:6px solid #fbb03b}.card-green[data-v-37826aa5]{border:6px solid #39b54a}.card-id[data-v-37826aa5]{display:flex;align-items:center;padding:0 1.19792vw;border-top-left-radius:10px;border-bottom-left-radius:10px;white-space:nowrap}.card-id-blue[data-v-37826aa5]{background:#3fa9f5}.card-id-yellow[data-v-37826aa5]{background:#fbb03b}.card-id-green[data-v-37826aa5]{background:#39b54a}.card-box[data-v-37826aa5]{width:100%;padding:2.5vh 1.19792vw;display:flex;justify-content:space-between;align-items:center}.text[data-v-37826aa5]{display:block;width:600px}.text-main[data-v-37826aa5]{line-height:1.14em}.icon[data-v-37826aa5]{width:2.12656vw;height:5.34167vh;display:block}",""]),e.exports=t},202:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("53f3e642",content,!0,{sourceMap:!1})},214:function(e,t,n){"use strict";var r=n(202);n.n(r).a},215:function(e,t,n){(t=n(41)(!1)).push([e.i,".main[data-v-0a2d2175]{display:flex}",""]),e.exports=t},229:function(e,t,n){"use strict";n.r(t);n(78),n(29),n(30),n(13),n(61);var r=n(44),c=n(164),o=n(165),l=n(64),d=n(177);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v={name:"car",components:{SideMenu:c.default,InspectionGuide:o.default},data:function(){return{languageJson:{},sideMenu:[],sideMenuId:1}},created:function(){this.languageJson=Object(d.cloneDeep)(this.getLanguage),this.sideMenu=this.languageJson.inspection.sideMenu.carText},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)(["getLanguage"])),methods:{textListUpdate:function(data){this.sideMenuId=data.id}}},h=(n(214),n(21)),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"car"},[n("Header",{attrs:{backGround:"blue",headerText:e.languageJson.header}}),e._v(" "),n("div",{staticClass:"main"},[n("SideMenu",{attrs:{sideMenu:e.sideMenu,color:"blue"},on:{textListUpdate:e.textListUpdate}}),e._v(" "),n("InspectionGuide",{attrs:{inspection:e.languageJson.inspection.mainText.carText,sideMenuId:e.sideMenuId,lang:e.languageJson.language,color:"blue"}})],1)],1)}),[],!1,null,"0a2d2175",null);t.default=component.exports;installComponents(component,{Header:n(178).default,SideMenu:n(164).default,InspectionGuide:n(165).default})}}]);