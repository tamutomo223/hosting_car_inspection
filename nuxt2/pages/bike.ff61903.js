(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(e,t,c){var content=c(168);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(42).default)("d4fb27ae",content,!0,{sourceMap:!1})},163:function(e,t,c){var content=c(174);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(42).default)("4879a42a",content,!0,{sourceMap:!1})},164:function(e,t,c){"use strict";c.r(t);var n={name:"SideMenu",components:{BaseText:c(160).default},data:function(){return{isActiveIndex:0}},props:{sideMenu:{type:Array,required:!0},color:{type:String,required:!0}},computed:{isActive:function(){var e=this;return function(t){if(e.isActiveIndex===t)return"active-".concat(e.color)}},classes:function(){return"side_menu-".concat(this.color)}},methods:{sideMenuClick:function(e,t){this.isActiveIndex=e,this.isActive(e),scrollTo(0,0),this.$emit("textListUpdate",t)}}},r=(c(167),c(21)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",{staticClass:"side_menu",class:e.classes},[c("div",{staticClass:"menu_list"},e._l(e.sideMenu,(function(t,n){return c("div",{key:n,staticClass:"text_box",class:e.isActive(n),on:{click:function(c){return e.sideMenuClick(n,t)}}},[c("BaseText",{staticClass:"index",attrs:{color:"black",face:"bold",size:"60"}},[e._v(e._s(n+1))]),e._v(" "),c("BaseText",{staticClass:"text",attrs:{color:"black",face:"bold",size:"36"}},[e._v(e._s(t.text))])],1)})),0)])}),[],!1,null,"f19d9878",null);t.default=component.exports;installComponents(component,{BaseText:c(160).default})},165:function(e,t,c){"use strict";c.r(t);c(169);var n=c(160),r=c(161),o={name:"InspectionGuide",components:{BaseText:n.default,Baseicon:r.default},props:{inspection:{type:Array,required:!0},sideMenuId:{type:Number,required:!0},lang:{type:String,require:!0},color:{type:String,required:!0}},data:function(){return{icons:[{active:!1,icon:"speaker_blue.svg"},{active:!1,icon:"speaker_yellow.svg"},{active:!1,icon:"speaker_green.svg"},{active:!1,icon:"speaker_purple.svg"}],isActive:Number,isSpeek:!1,uttr:Object}},computed:{getText:function(){for(var e=[],t=[],i=0;i<this.inspection.length;i++)this.sideMenuId==this.inspection[i].id&&(e.push(this.inspection[i]),this.isActive=-1);for(var element=e[0],c=0;c<element.japan.length;c++){var n={sub:element.japan[c],main:element.list[c]};t.push(n)}return t},classes:function(){return this.color},clickActive:function(){var e=this;return function(t,c){return e.isActive===c?"".concat(t,"-active-").concat(e.color):""}}},mounted:function(){"blue"===this.color&&(this.icons[0].active=!0),"yellow"===this.color&&(this.icons[1].active=!0),"green"===this.color&&(this.icons[2].active=!0),"purple"===this.color&&(this.icons[3].active=!0)},methods:{speakerClick:function(text,e){return this.isActive=e,this.$el.querySelector(".card-".concat(e)).scrollIntoView({behavior:"auto",block:"center",inline:"nearest"}),this.speech(this.lang,text)}}},d=(c(173),c(21)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",{staticClass:"inspection"},[e.isSpeek?c("div",{staticClass:"speech_mask"}):e._e(),e._v(" "),c("div",{staticClass:"card_list"},e._l(e.getText,(function(text,t){return c("div",{key:t,staticClass:"card",class:["card-"+e.classes,e.clickActive("card",t),"card-"+t]},[c("div",{staticClass:"card-id",class:["card-id-"+e.classes,e.clickActive("card-id",t)]},[c("BaseText",{class:e.clickActive("card-id-text",t),attrs:{size:"44",face:"bold",color:"white"}},[e._v("\n          "+e._s(e.sideMenuId)+"-"+e._s(t+1))])],1),e._v(" "),c("div",{staticClass:"card-box",class:e.clickActive("card-box",t),on:{click:function(c){return e.speakerClick(text.main,t)}}},[c("div",{staticClass:"text-box"},[c("BaseText",{staticClass:"text",class:e.clickActive("text",t),attrs:{size:"44",face:"bold",color:"gray"}},[e._v(e._s(text.sub)+"\n          ")]),e._v(" "),c("BaseText",{staticClass:"text text-main",class:e.clickActive("text-main",t),attrs:{face:"bold",color:"black"}},[e._v(e._s(text.main)+"\n          ")])],1),e._v(" "),c("div",{staticClass:"speaker"},[e._l(e.icons,(function(t,n){return[t.active?c("Baseicon",{key:n,staticClass:"icon",attrs:{icon:t.icon}}):e._e()]}))],2)])])})),0)])}),[],!1,null,"4b55925c",null);t.default=component.exports;installComponents(component,{BaseText:c(160).default,Baseicon:c(161).default})},167:function(e,t,c){"use strict";var n=c(162);c.n(n).a},168:function(e,t,c){(t=c(41)(!1)).push([e.i,".side_menu[data-v-f19d9878]{position:fixed;top:12.5vh;width:35.41667vw;padding:2.91667vh 3.90625vw;height:100vh}.side_menu-blue[data-v-f19d9878]{background:#9ad2f9}.side_menu-yellow[data-v-f19d9878]{background:#f9d59c}.side_menu-green[data-v-f19d9878]{background:#97d8a4}.side_menu-purple[data-v-f19d9878]{background:#d1b0e4}.text_box[data-v-f19d9878]{margin:0 auto;height:7.5vh;width:27.60417vw;background:#fff;border-radius:2.5vh;display:flex;align-items:center;box-shadow:0 6px 6px rgba(0,0,0,.10196)}.text_box[data-v-f19d9878]:not(:first-child){margin-top:14px}.index[data-v-f19d9878]{padding-left:1.5625vw}.index[data-v-f19d9878],.text[data-v-f19d9878]{display:block}.text[data-v-f19d9878]{padding-left:2.08333vw}.active-blue[data-v-f19d9878]{background:#3fa9f5}.active-blue .index[data-v-f19d9878],.active-blue .text[data-v-f19d9878]{color:#fff}.active-yellow[data-v-f19d9878]{background:#fbb03b}.active-yellow .index[data-v-f19d9878],.active-yellow .text[data-v-f19d9878]{color:#fff}.active-green[data-v-f19d9878]{background:#39b54a}.active-green .index[data-v-f19d9878],.active-green .text[data-v-f19d9878]{color:#fff}.active-purple[data-v-f19d9878]{background:#ac67c9}.active-purple .index[data-v-f19d9878],.active-purple .text[data-v-f19d9878]{color:#fff}",""]),e.exports=t},169:function(e,t,c){"use strict";var n=c(4),r=c(16),o=c(22),d=c(108),l=c(62),v=c(9),f=c(43).f,x=c(63).f,h=c(8).f,m=c(170).trim,k=n.Number,w=k,_=k.prototype,y="Number"==o(c(79)(_)),I="trim"in String.prototype,A=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var c,n,r,o=(t=I?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(c=t.charCodeAt(2))||120===c)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var code,d=t.slice(2),i=0,v=d.length;i<v;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,n)}}return+t};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(e){var t=arguments.length<1?0:e,c=this;return c instanceof k&&(y?v((function(){_.valueOf.call(c)})):"Number"!=o(c))?d(new w(A(t)),c,k):A(t)};for(var C,M=c(7)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;M.length>O;O++)r(w,C=M[O])&&!r(k,C)&&h(k,C,x(w,C));k.prototype=_,_.constructor=k,c(10)(n,"Number",k)}},170:function(e,t,c){var n=c(6),r=c(23),o=c(9),d=c(171),l="["+d+"]",v=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),x=function(e,t,c){var r={},l=o((function(){return!!d[e]()||"​"!="​"[e]()})),v=r[e]=l?t(h):d[e];c&&(r[c]=v),n(n.P+n.F*l,"String",r)},h=x.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(v,"")),2&t&&(e=e.replace(f,"")),e};e.exports=x},171:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},173:function(e,t,c){"use strict";var n=c(163);c.n(n).a},174:function(e,t,c){(t=c(41)(!1)).push([e.i,".speech_mask[data-v-4b55925c]{width:100%;height:100vh;position:fixed;overflow:hidden;top:0;left:0;z-index:100;background:rgba(16,16,16,.5098);opacity:0}.inspection[data-v-4b55925c]{width:100%;overflow:scroll;margin-left:35.41667vw;margin-top:12.5vh;margin-bottom:30px}.card_list[data-v-4b55925c]{padding-bottom:100px}.card[data-v-4b55925c]{border-radius:30px;display:flex;width:61.71875vw;margin:2vh auto 0}.card-blue[data-v-4b55925c]{border:6px solid #3fa9f5}.card-yellow[data-v-4b55925c]{border:6px solid #fbb03b}.card-green[data-v-4b55925c]{border:6px solid #39b54a}.card-purple[data-v-4b55925c]{border:6px solid #ac67c9}.card-active-blue[data-v-4b55925c]{border:9px solid #3fa9f5;background:#3fa9f5}.card-active-yellow[data-v-4b55925c]{border:9px solid #fbb03b;background:#fbb03b}.card-active-green[data-v-4b55925c]{border:9px solid #39b54a;background:#39b54a}.card-active-purple[data-v-4b55925c]{border:9px solid #ac67c9;background:#ac67c9}.card-id[data-v-4b55925c]{width:10.8%;display:flex;align-items:center;justify-content:center;border-top-left-radius:27px;border-bottom-left-radius:27px;white-space:nowrap;margin:-1px}.card-id-blue[data-v-4b55925c]{background:#3fa9f5}.card-id-yellow[data-v-4b55925c]{background:#fbb03b}.card-id-green[data-v-4b55925c]{background:#39b54a}.card-id-purple[data-v-4b55925c]{background:#ac67c9}.card-box[data-v-4b55925c]{width:100%;padding:2.5vh 1.19792vw;display:flex;justify-content:space-between;align-items:center;position:relative}.card-box-active-blue[data-v-4b55925c]{background:#3fa9f5}.card-box-active-yellow[data-v-4b55925c]{background:#fbb03b}.card-box-active-green[data-v-4b55925c]{background:#39b54a}.card-box-active-purple[data-v-4b55925c]{background:#ac67c9}.text[data-v-4b55925c]{display:block}.text-active-blue[data-v-4b55925c],.text-active-green[data-v-4b55925c],.text-active-purple[data-v-4b55925c],.text-active-yellow[data-v-4b55925c]{color:hsla(0,0%,100%,.7)}.text-main[data-v-4b55925c]{line-height:1.14em;font-size:3.64vw}.text-main-active-blue[data-v-4b55925c],.text-main-active-green[data-v-4b55925c],.text-main-active-purple[data-v-4b55925c],.text-main-active-yellow[data-v-4b55925c]{color:#fff;font-size:4.5vw}.icon[data-v-4b55925c]{display:block}.icon[data-v-4b55925c],.icon-white[data-v-4b55925c]{width:2.12656vw;height:5.34167vh}.icon-white[data-v-4b55925c]{position:absolute;top:50%;transform:translateY(-50%);z-index:-1}.icon-white-active-blue[data-v-4b55925c],.icon-white-active-green[data-v-4b55925c],.icon-white-active-purple[data-v-4b55925c],.icon-white-active-yellow[data-v-4b55925c]{z-index:1}",""]),e.exports=t},201:function(e,t,c){var content=c(214);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(42).default)("b809e8f8",content,!0,{sourceMap:!1})},213:function(e,t,c){"use strict";var n=c(201);c.n(n).a},214:function(e,t,c){(t=c(41)(!1)).push([e.i,".main[data-v-d3e6a4f6]{display:flex}",""]),e.exports=t},235:function(e,t,c){"use strict";c.r(t);c(78),c(30),c(31),c(13),c(61);var n=c(44),r=c(164),o=c(165),d=c(64),l=c(177);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,c)}return t}var f={name:"bike",components:{SideMenu:r.default,InspectionGuide:o.default},data:function(){return{languageJson:{},sideMenu:[],sideMenuId:1}},created:function(){this.languageJson=Object(l.cloneDeep)(this.getLanguage),this.sideMenu=this.languageJson.inspection.sideMenu.bikeText},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(d.b)(["getLanguage"])),methods:{textListUpdate:function(data){this.sideMenuId=data.id}}},x=(c(213),c(21)),component=Object(x.a)(f,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("section",{staticClass:"bike"},[c("Header",{attrs:{backGround:"green",headerText:e.languageJson.header}}),e._v(" "),c("div",{staticClass:"main"},[c("SideMenu",{attrs:{sideMenu:e.sideMenu,color:"green"},on:{textListUpdate:e.textListUpdate}}),e._v(" "),c("InspectionGuide",{attrs:{inspection:e.languageJson.inspection.mainText.bikeText,sideMenuId:e.sideMenuId,lang:e.languageJson.language,color:"green"}})],1)],1)}),[],!1,null,"d3e6a4f6",null);t.default=component.exports;installComponents(component,{Header:c(178).default,SideMenu:c(164).default,InspectionGuide:c(165).default})}}]);