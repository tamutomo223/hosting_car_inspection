(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{160:function(t,e,o){"use strict";o.r(e);var c={name:"BaseText",props:{color:{type:String,required:!1,default:"black"},size:{type:String,required:!1,default:"m"},face:{type:String,required:!1,defalt:"medium"}},computed:{fontColor:function(){return"base-text--color-".concat(this.color)},fixedFontSize:function(){return"s"==this.size?"base-text--size-s":"m"==this.size?"base-text--size-m":"l"==this.size?"base-text--size-l":"base-text--size-variable"},fontSize:function(){return{"--font-size":this.size}},fontFace:function(){return"bold"==this.face?"base-text--face-bold":"regular"==this.face?"base-text--face-regular":""},classes:function(){return[this.fixedFontSize,this.fontFace,this.fontColor]}}},n=(o(180),o(21)),component=Object(n.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"base-text",class:this.classes,style:this.fontSize},[this._t("default")],2)}),[],!1,null,"d79d5b60",null);e.default=component.exports},161:function(t,e,o){"use strict";o.r(e);var c={name:"Baseicon",data:function(){return{path:o(182)("./".concat(this.icon))}},props:{icon:{type:String,required:!0}}},n=(o(199),o(21)),component=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"base_icon"},[e("img",{staticClass:"base-icon",attrs:{src:this.path}})])}),[],!1,null,"45446d76",null);e.default=component.exports},166:function(t,e,o){var content=o(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("74c85b6c",content,!0,{sourceMap:!1})},172:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("67cdbfd9",content,!0,{sourceMap:!1})},175:function(t,e,o){var content=o(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("1d6290ac",content,!0,{sourceMap:!1})},176:function(t,e,o){"use strict";o.r(e);var c={name:"BaseButton",props:{backGroundColor:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{classes:function(){return"btn--".concat(this.backGroundColor)}},methods:{onClick:function(){this.$emit("click")}}},n=(o(202),o(21)),component=Object(n.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:this.classes,attrs:{type:"button",disabled:this.disabled},on:{click:this.onClick}},[this._t("default")],2)}),[],!1,null,"ae301bfc",null);e.default=component.exports},178:function(t,e,o){"use strict";o.r(e);o(78),o(30),o(31),o(13),o(61),o(17);var c=o(2),n=o(43),r=o(176),d=o(160),l=o(161),f=o(179),h=o(211),v=o(62);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={name:"Header",comments:{BaseButton:r.default,BaseText:d.default,Baseicon:l.default,BaseLink:f.default,WarningModal:h.default},data:function(){return{deviceIcons:[{active:!1,icon:"header_car.svg"},{active:!1,icon:"header_truck.svg"},{active:!1,icon:"header_bike.svg"},{active:!1,icon:"header_largetruck.svg"}],isModaActive:!1,isSpeek:!1,icon:{header:"header_back.svg",warning:"warning.svg"},speed:10}},props:{backGround:{type:String,required:!0},headerText:{type:Array,required:!0}},computed:D(D({},Object(v.b)(["getSpeed"])),{},{speedInt:function(){return Math.floor(10*this.getSpeed)/10}}),mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.changeIcon();case 2:t.$store.commit("UPDATE_SPEECH_SPEED",1);case 3:case"end":return e.stop()}}),e)})))()},methods:{modalActive:function(){this.isModaActive=!this.isModaActive},pageBack:function(){window.history.back()},modalSpeech:function(t,text){return this.speech(t,text,this.getSpeed)},speechSpeed:function(t){var e=.1*t.target.value;this.$store.commit("UPDATE_SPEECH_SPEED",e)},changeIcon:function(){"blue"==this.backGround&&(this.deviceIcons[0].active=!0),"yellow"==this.backGround&&(this.deviceIcons[1].active=!0),"green"==this.backGround&&(this.deviceIcons[2].active=!0),"purple"==this.backGround&&(this.deviceIcons[3].active=!0)}}},x=(o(217),o(21)),component=Object(x.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[t.isSpeek?o("div",{staticClass:"speech_mask"}):t._e(),t._v(" "),o("div",{staticClass:"header",class:t.backGround},[o("BaseLink",{attrs:{path:"/"}},[o("BaseText",{staticClass:"header-text",attrs:{face:"bold",color:"white"}},[t._v("\n        "+t._s(t.headerText[0])+"\n      ")])],1),t._v(" "),o("div",{staticClass:"header-left",class:"header-left-"+t.backGround},[o("div",{on:{click:function(e){return t.pageBack()}}},[o("Baseicon",{staticClass:"back_icon",attrs:{icon:"header_back.svg"}}),t._v(" "),t._l(t.deviceIcons,(function(e,c){return[e.active?o("Baseicon",{key:c,staticClass:"device_icon",attrs:{icon:e.icon}}):t._e()]}))],2)]),t._v(" "),o("div",{staticClass:"header-right"},[o("div",{staticClass:"speed_bar"},[o("input",{attrs:{type:"range",min:"5",max:"10",step:"0.1"},on:{change:t.speechSpeed}}),t._v(" "),o("label",{attrs:{for:"volume"}},[t._v(t._s(t.speedInt))])]),t._v(" "),o("BaseButton",{staticClass:"stop_btn",attrs:{backGroundColor:"red"},on:{click:t.modalActive}},[o("BaseText",{attrs:{face:"bold",color:"white"}},[t._v("STOP\n        ")])],1)],1)],1),t._v(" "),t.isModaActive?o("WarningModal",{attrs:{modalText:t.headerText,icon:t.icon},on:{modalActive:t.modalActive,modalSpeech:t.modalSpeech}}):t._e()],1)}),[],!1,null,"385c9634",null);e.default=component.exports;installComponents(component,{BaseText:o(160).default,BaseLink:o(179).default,Baseicon:o(161).default,BaseButton:o(176).default,WarningModal:o(211).default})},179:function(t,e,o){"use strict";o.r(e);o(109);var c={name:"BaseLink",props:{path:{type:String,required:!0,default:""},target:{type:String,required:!1,default:null}},computed:{isRouterLink:function(){var t=this;return this.$router.options.routes.some((function(e){var path=e.path;return new RegExp("^".concat(path)).test(t.path)}))}}},n=o(21),component=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.isRouterLink?e("router-link",{attrs:{to:this.path}},[this._t("default")],2):e("a",{attrs:{href:this.path,target:this.target}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},180:function(t,e,o){"use strict";var c=o(166);o.n(c).a},181:function(t,e,o){(e=o(41)(!1)).push([t.i,".base-text--color-black[data-v-d79d5b60]{color:#333}.base-text--color-white[data-v-d79d5b60]{color:#fff}.base-text--color-gray[data-v-d79d5b60]{color:rgba(51,51,51,.7)}.base-text--color-blue[data-v-d79d5b60]{color:#3fa9f5}.base-text--color-dark_blue[data-v-d79d5b60]{color:#2b7cc3}.base-text--color-red[data-v-d79d5b60]{color:red}.base-text--size-s[data-v-d79d5b60]{font-size:36px}.base-text--size-m[data-v-d79d5b60]{font-size:44px}.base-text--size-l[data-v-d79d5b60]{font-size:70px}.base-text--size-variable[data-v-d79d5b60]{--font-size:18;font-size:calc(0.05208vw*var(--font-size))}.base-text--face-bold[data-v-d79d5b60]{font-weight:700}.base-text--face-regular[data-v-d79d5b60]{font-weight:400}",""]),t.exports=e},182:function(t,e,o){var map={"./device_bike.svg":183,"./device_car.svg":184,"./device_largetruck.svg":185,"./device_truck.svg":186,"./header_back.svg":187,"./header_bike.svg":188,"./header_car.svg":189,"./header_largetruck.svg":190,"./header_truck.svg":191,"./speaker_blue.svg":192,"./speaker_green.svg":193,"./speaker_purple.svg":194,"./speaker_white.svg":195,"./speaker_yellow.svg":196,"./top_footer_logo.svg":197,"./warning.svg":198};function c(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=n,t.exports=c,c.id=182},183:function(t,e,o){t.exports=o.p+"img/device_bike.4faebf5.svg"},184:function(t,e,o){t.exports=o.p+"img/device_car.db1fda7.svg"},185:function(t,e,o){t.exports=o.p+"img/device_largetruck.e93aac2.svg"},186:function(t,e,o){t.exports=o.p+"img/device_truck.fb23fe2.svg"},187:function(t,e,o){t.exports=o.p+"img/header_back.b72bde7.svg"},188:function(t,e,o){t.exports=o.p+"img/header_bike.f7e57db.svg"},189:function(t,e,o){t.exports=o.p+"img/header_car.d119819.svg"},190:function(t,e,o){t.exports=o.p+"img/header_largetruck.64733fc.svg"},191:function(t,e,o){t.exports=o.p+"img/header_truck.ea5aa61.svg"},192:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iIzNmYTlmNSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},193:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iIzM5YjU0YSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},194:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iI2FjNjdjOSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},195:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iI2ZmZiIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},196:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iI2ZiYjAzYiIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},197:function(t,e,o){t.exports=o.p+"img/top_footer_logo.33fde28.svg"},198:function(t,e,o){t.exports=o.p+"img/warning.9283ad0.svg"},199:function(t,e,o){"use strict";var c=o(172);o.n(c).a},200:function(t,e,o){(e=o(41)(!1)).push([t.i,".base_icon[data-v-45446d76]{display:flex;flex-shrink:1}.base_icon img[data-v-45446d76]{display:block;width:100%}",""]),t.exports=e},202:function(t,e,o){"use strict";var c=o(175);o.n(c).a},203:function(t,e,o){(e=o(41)(!1)).push([t.i,"button[data-v-ae301bfc]:focus{outline:0}.btn--blue[data-v-ae301bfc]{background:#3fa9f5}.btn--yellow[data-v-ae301bfc]{background:#fbb03b}.btn--green[data-v-ae301bfc]{background:#39b54a}.btn--red[data-v-ae301bfc]{background:red}.btn--blue_sub[data-v-ae301bfc]{background:#9ad2f9}.btn--blue_sky[data-v-ae301bfc]{background:#e4f3fe}",""]),t.exports=e},204:function(t,e,o){var content=o(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("cf097cd4",content,!0,{sourceMap:!1})},205:function(t,e,o){var content=o(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("c496e448",content,!0,{sourceMap:!1})},211:function(t,e,o){"use strict";o.r(e);var c=o(176),n=o(160),r=o(161),d={name:"WarningModal",components:{BaseButton:c.default,BaseText:n.default,Baseicon:r.default},props:{modalText:{type:Array,required:!0},icon:{type:Object,required:!0}},data:function(){return{languageFont:""}},computed:{fontSizeChange:function(){return"ko"==this.languageFont?"140":"pt"==this.languageFont?"150":"180"}},mounted:function(){this.modalSpeech()},methods:{modalClose:function(){this.$emit("modalActive")},modalSpeech:function(){var t="",text=this.modalText[1].modal;"English"===this.modalText[0]&&(t="en"),"한국어"===this.modalText[0]&&(t="ko"),"中文（简体字）"===this.modalText[0]&&(t="ch1"),"中文（繁體字）"===this.modalText[0]&&(t="ch2"),"Português"===this.modalText[0]&&(t="pt"),this.languageFont=t,this.$emit("modalSpeech",t,text)}}},l=(o(215),o(21)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"warning",on:{click:function(e){return t.modalSpeech()}}},[o("div",{on:{click:function(e){return t.modalClose()}}},[o("Baseicon",{staticClass:"icon",attrs:{icon:t.icon.header}})],1),t._v(" "),o("BaseText",{staticClass:"top_text",attrs:{color:"red",size:"l",face:"bold"}},[t._v("そのまま お待ちください")]),t._v(" "),o("Baseicon",{staticClass:"warning_icon",attrs:{icon:t.icon.warning}}),t._v(" "),o("BaseText",{staticClass:"warnint_text",attrs:{color:"red",face:"bold",size:t.fontSizeChange}},[t._v(t._s(t.modalText[1].modal))])],1)}),[],!1,null,"ee386dd0",null);e.default=component.exports;installComponents(component,{Baseicon:o(161).default,BaseText:o(160).default})},215:function(t,e,o){"use strict";var c=o(204);o.n(c).a},216:function(t,e,o){(e=o(41)(!1)).push([t.i,".warning[data-v-ee386dd0]{background:#fff;position:fixed;top:0;height:100vh;width:100%;z-index:5}.icon[data-v-ee386dd0]{position:absolute;top:6.3%;left:10px;transform:translateY(-50%);height:6.25vw;width:6.25vw}.top_text[data-v-ee386dd0]{display:block;text-align:center;margin-top:15.25vh}.warning_icon[data-v-ee386dd0]{display:block;margin:6.5vh auto 0;width:23.21146vw}.warnint_text[data-v-ee386dd0]{display:block;text-align:center}",""]),t.exports=e},217:function(t,e,o){"use strict";var c=o(205);o.n(c).a},218:function(t,e,o){(e=o(41)(!1)).push([t.i,".speech_mask[data-v-385c9634]{width:100%;height:100vh;position:fixed;overflow:hidden;top:0;left:0;z-index:100;background:rgba(16,16,16,.5098);opacity:0}.header[data-v-385c9634]{z-index:3;display:flex;position:relative;position:fixed;top:0;width:100%;height:12.5vh}.header-text[data-v-385c9634]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.header-left[data-v-385c9634]{height:0;width:77%;border-right:120px solid transparent}.header-left-blue[data-v-385c9634]{border-bottom:12.5vh solid #3fa9f5}.header-left-white[data-v-385c9634]{border-bottom:12.5vh solid #fff}.header-left-yellow[data-v-385c9634]{border-bottom:12.5vh solid #fbb03b}.header-left-green[data-v-385c9634]{border-bottom:12.5vh solid #39b54a}.header-left-purple[data-v-385c9634]{border-bottom:12.5vh solid #ac67c9}.header-left .device_icon[data-v-385c9634]{width:20.92vw;height:6.14vw;position:absolute;top:50%;transform:translateY(-50%);left:9%}.header-right[data-v-385c9634]{height:100%;width:23%;display:flex;align-items:center;justify-content:flex-end;padding-right:10px}.header .back_icon[data-v-385c9634]{position:absolute;top:50%;left:10px;transform:translateY(-50%);height:6.25vw;width:6.25vw}.header .stop_btn[data-v-385c9634]{border:4px solid #fff;border-radius:60px;box-shadow:0 3px 3px #d3d3d3;width:16.66667vw;height:10vh}.white[data-v-385c9634]{background:#fff}.white .header-text[data-v-385c9634]{color:#333}.blue[data-v-385c9634]{background:#9ad2f9}.yellow[data-v-385c9634]{background:#f9d59c}.green[data-v-385c9634]{background:#97d8a4}.purple[data-v-385c9634]{background:#d1b0e4}.speed_bar[data-v-385c9634]{position:absolute;right:18%}.speed_bar label[data-v-385c9634]{display:block}",""]),t.exports=e}}]);