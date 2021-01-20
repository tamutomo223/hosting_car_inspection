(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{160:function(e,t,o){"use strict";o.r(t);var n={name:"BaseText",props:{color:{type:String,required:!1,default:"black"},size:{type:String,required:!1,default:"m"},face:{type:String,required:!1,defalt:"medium"}},computed:{fontColor:function(){return"base-text--color-".concat(this.color)},fixedFontSize:function(){return"s"==this.size?"base-text--size-s":"m"==this.size?"base-text--size-m":"l"==this.size?"base-text--size-l":"base-text--size-variable"},fontSize:function(){return{"--font-size":this.size}},fontFace:function(){return"bold"==this.face?"base-text--face-bold":"regular"==this.face?"base-text--face-regular":""},classes:function(){return[this.fixedFontSize,this.fontFace,this.fontColor]}}},r=(o(180),o(21)),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"base-text",class:this.classes,style:this.fontSize},[this._t("default")],2)}),[],!1,null,"d79d5b60",null);t.default=component.exports},161:function(e,t,o){"use strict";o.r(t);var n={name:"Baseicon",data:function(){return{path:o(182)("./".concat(this.icon))}},props:{icon:{type:String,required:!0}}},r=(o(199),o(21)),component=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"base_icon"},[t("img",{staticClass:"base-icon",attrs:{src:this.path}})])}),[],!1,null,"45446d76",null);t.default=component.exports},166:function(e,t,o){var content=o(181);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("74c85b6c",content,!0,{sourceMap:!1})},172:function(e,t,o){var content=o(200);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("67cdbfd9",content,!0,{sourceMap:!1})},175:function(e,t,o){var content=o(203);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("1d6290ac",content,!0,{sourceMap:!1})},176:function(e,t,o){"use strict";o.r(t);var n={name:"BaseButton",props:{backGroundColor:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{classes:function(){return"btn--".concat(this.backGroundColor)}},methods:{onClick:function(){this.$emit("click")}}},r=(o(202),o(21)),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("button",{class:this.classes,attrs:{type:"button",disabled:this.disabled},on:{click:this.onClick}},[this._t("default")],2)}),[],!1,null,"ae301bfc",null);t.default=component.exports},178:function(e,t,o){"use strict";o.r(t);o(78),o(30),o(31),o(13),o(61),o(17);var n=o(2),r=o(43),c=o(176),d=o(160),l=o(161),f=o(179),h=o(211),v=o(62);function M(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={name:"Header",comments:{BaseButton:c.default,BaseText:d.default,Baseicon:l.default,BaseLink:f.default,WarningModal:h.default},data:function(){return{deviceIcons:[{active:!1,icon:"header_car.svg"},{active:!1,icon:"header_truck.svg"},{active:!1,icon:"header_bike.svg"},{active:!1,icon:"header_largetruck.svg"}],isModaActive:!1,isSpeek:!1,icon:{header:"header_back.svg",warning:"warning.svg"},speed:10}},props:{backGround:{type:String,required:!0},headerText:{type:Array,required:!0}},computed:D(D({},Object(v.b)(["getSpeed"])),{},{speedInt:function(){return Math.floor(10*this.getSpeed)/10}}),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.changeIcon();case 2:e.$store.commit("UPDATE_SPEECH_SPEED",1);case 3:case"end":return t.stop()}}),t)})))()},methods:{modalActive:function(){this.isModaActive=!this.isModaActive},pageBack:function(){window.history.back()},modalSpeech:function(e,text){return this.speech(e,text,this.getSpeed)},speechSpeed:function(e){var t=.1*e.target.value;this.$store.commit("UPDATE_SPEECH_SPEED",t)},changeIcon:function(){"blue"==this.backGround&&(this.deviceIcons[0].active=!0),"yellow"==this.backGround&&(this.deviceIcons[1].active=!0),"green"==this.backGround&&(this.deviceIcons[2].active=!0),"purple"==this.backGround&&(this.deviceIcons[3].active=!0)}}},x=(o(217),o(21)),component=Object(x.a)(j,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[e.isSpeek?o("div",{staticClass:"speech_mask"}):e._e(),e._v(" "),o("div",{staticClass:"header",class:e.backGround},[o("BaseLink",{attrs:{path:"/"}},[o("BaseText",{staticClass:"header-text",attrs:{face:"bold",color:"white"}},[e._v("\n        "+e._s(e.headerText[0])+"\n      ")])],1),e._v(" "),o("div",{staticClass:"header-left",class:"header-left-"+e.backGround},[o("div",{on:{click:function(t){return e.pageBack()}}},[o("Baseicon",{staticClass:"back_icon",attrs:{icon:"header_back.svg"}}),e._v(" "),e._l(e.deviceIcons,(function(t,n){return[t.active?o("Baseicon",{key:n,staticClass:"device_icon",attrs:{icon:t.icon}}):e._e()]}))],2)]),e._v(" "),o("div",{staticClass:"header-right"},[o("div",{staticClass:"speed_bar"},[o("input",{attrs:{type:"range",min:"5",max:"10",step:"1"},on:{change:e.speechSpeed}}),e._v(" "),o("label",{attrs:{for:"volume"}},[e._v(e._s(e.speedInt)+"倍速")])]),e._v(" "),o("BaseButton",{staticClass:"stop_btn",attrs:{backGroundColor:"red"},on:{click:e.modalActive}},[o("BaseText",{attrs:{face:"bold",color:"white"}},[e._v("STOP\n        ")])],1)],1)],1),e._v(" "),e.isModaActive?o("WarningModal",{attrs:{modalText:e.headerText,icon:e.icon},on:{modalActive:e.modalActive,modalSpeech:e.modalSpeech}}):e._e()],1)}),[],!1,null,"7e275f94",null);t.default=component.exports;installComponents(component,{BaseText:o(160).default,BaseLink:o(179).default,Baseicon:o(161).default,BaseButton:o(176).default,WarningModal:o(211).default})},179:function(e,t,o){"use strict";o.r(t);o(109);var n={name:"BaseLink",props:{path:{type:String,required:!0,default:""},target:{type:String,required:!1,default:null}},computed:{isRouterLink:function(){var e=this;return this.$router.options.routes.some((function(t){var path=t.path;return new RegExp("^".concat(path)).test(e.path)}))}}},r=o(21),component=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return this.isRouterLink?t("router-link",{attrs:{to:this.path}},[this._t("default")],2):t("a",{attrs:{href:this.path,target:this.target}},[this._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},180:function(e,t,o){"use strict";var n=o(166);o.n(n).a},181:function(e,t,o){(t=o(41)(!1)).push([e.i,".base-text--color-black[data-v-d79d5b60]{color:#333}.base-text--color-white[data-v-d79d5b60]{color:#fff}.base-text--color-gray[data-v-d79d5b60]{color:rgba(51,51,51,.7)}.base-text--color-blue[data-v-d79d5b60]{color:#3fa9f5}.base-text--color-dark_blue[data-v-d79d5b60]{color:#2b7cc3}.base-text--color-red[data-v-d79d5b60]{color:red}.base-text--size-s[data-v-d79d5b60]{font-size:36px}.base-text--size-m[data-v-d79d5b60]{font-size:44px}.base-text--size-l[data-v-d79d5b60]{font-size:70px}.base-text--size-variable[data-v-d79d5b60]{--font-size:18;font-size:calc(0.05208vw*var(--font-size))}.base-text--face-bold[data-v-d79d5b60]{font-weight:700}.base-text--face-regular[data-v-d79d5b60]{font-weight:400}",""]),e.exports=t},182:function(e,t,o){var map={"./device_bike.svg":183,"./device_car.svg":184,"./device_largetruck.svg":185,"./device_truck.svg":186,"./header_back.svg":187,"./header_bike.svg":188,"./header_car.svg":189,"./header_largetruck.svg":190,"./header_truck.svg":191,"./speaker_blue.svg":192,"./speaker_green.svg":193,"./speaker_purple.svg":194,"./speaker_white.svg":195,"./speaker_yellow.svg":196,"./top_footer_logo.svg":197,"./warning.svg":198};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=182},183:function(e,t,o){e.exports=o.p+"img/device_bike.4faebf5.svg"},184:function(e,t,o){e.exports=o.p+"img/device_car.db1fda7.svg"},185:function(e,t,o){e.exports=o.p+"img/device_largetruck.e93aac2.svg"},186:function(e,t,o){e.exports=o.p+"img/device_truck.fb23fe2.svg"},187:function(e,t,o){e.exports=o.p+"img/header_back.b72bde7.svg"},188:function(e,t,o){e.exports=o.p+"img/header_bike.f7e57db.svg"},189:function(e,t,o){e.exports=o.p+"img/header_car.d119819.svg"},190:function(e,t,o){e.exports=o.p+"img/header_largetruck.64733fc.svg"},191:function(e,t,o){e.exports=o.p+"img/header_truck.ea5aa61.svg"},192:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iIzNmYTlmNSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},193:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iIzM5YjU0YSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},194:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iI2FjNjdjOSIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},195:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iI2ZmZiIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},196:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MC44MzMiIGhlaWdodD0iNjQuMTAxIiB2aWV3Qm94PSIwIDAgNDAuODMzIDY0LjEwMSI+CiAgPHBhdGggaWQ9IuODkeOCuV8zNSIgZGF0YS1uYW1lPSLjg5HjgrkgMzUiIGQ9Ik04MTI2LjgyMywyMjY2Ljg3NWwtMTEuNTM1LDcuNTczaDBsLTguNDEzLDUuNTIzaC0xNC4wNjFhNC44MjgsNC44MjgsMCwwLDAtNC44MTMsNC44MTR2MjcuNjA2YTQuODI5LDQuODI5LDAsMCwwLDQuODE1LDQuODE0aDE0LjA2bDIuMDEyLDEuMzIyaDBsLjc5Mi41Miw1LjU0LDMuNjM1aDBsMTEuNiw3LjYxOWMxLjEuNzI2LDIuMDEyLjIzOCwyLjAxMi0xLjA4NnYtNjEuMjU1QzgxMjguODM0LDIyNjYuNjM3LDgxMjcuOTI3LDIyNjYuMTQ4LDgxMjYuODIzLDIyNjYuODc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwODggLTIyNjYuNTM4KSIgZmlsbD0iI2ZiYjAzYiIgc3R5bGU9Imlzb2xhdGlvbjogaXNvbGF0ZSIvPgo8L3N2Zz4K"},197:function(e,t,o){e.exports=o.p+"img/top_footer_logo.33fde28.svg"},198:function(e,t,o){e.exports=o.p+"img/warning.9283ad0.svg"},199:function(e,t,o){"use strict";var n=o(172);o.n(n).a},200:function(e,t,o){(t=o(41)(!1)).push([e.i,".base_icon[data-v-45446d76]{display:flex;flex-shrink:1}.base_icon img[data-v-45446d76]{display:block;width:100%}",""]),e.exports=t},202:function(e,t,o){"use strict";var n=o(175);o.n(n).a},203:function(e,t,o){(t=o(41)(!1)).push([e.i,"button[data-v-ae301bfc]:focus{outline:0}.btn--blue[data-v-ae301bfc]{background:#3fa9f5}.btn--yellow[data-v-ae301bfc]{background:#fbb03b}.btn--green[data-v-ae301bfc]{background:#39b54a}.btn--red[data-v-ae301bfc]{background:red}.btn--blue_sub[data-v-ae301bfc]{background:#9ad2f9}.btn--blue_sky[data-v-ae301bfc]{background:#e4f3fe}",""]),e.exports=t},204:function(e,t,o){var content=o(216);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("cf097cd4",content,!0,{sourceMap:!1})},205:function(e,t,o){var content=o(218);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(42).default)("e145ec64",content,!0,{sourceMap:!1})},211:function(e,t,o){"use strict";o.r(t);var n=o(176),r=o(160),c=o(161),d={name:"WarningModal",components:{BaseButton:n.default,BaseText:r.default,Baseicon:c.default},props:{modalText:{type:Array,required:!0},icon:{type:Object,required:!0}},data:function(){return{languageFont:""}},computed:{fontSizeChange:function(){return"ko"==this.languageFont?"140":"pt"==this.languageFont?"150":"180"}},mounted:function(){this.modalSpeech()},methods:{modalClose:function(){this.$emit("modalActive")},modalSpeech:function(){var e="",text=this.modalText[1].modal;"English"===this.modalText[0]&&(e="en"),"한국어"===this.modalText[0]&&(e="ko"),"中文（简体字）"===this.modalText[0]&&(e="ch1"),"中文（繁體字）"===this.modalText[0]&&(e="ch2"),"Português"===this.modalText[0]&&(e="pt"),this.languageFont=e,this.$emit("modalSpeech",e,text)}}},l=(o(215),o(21)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"warning",on:{click:function(t){return e.modalSpeech()}}},[o("div",{on:{click:function(t){return e.modalClose()}}},[o("Baseicon",{staticClass:"icon",attrs:{icon:e.icon.header}})],1),e._v(" "),o("BaseText",{staticClass:"top_text",attrs:{color:"red",size:"l",face:"bold"}},[e._v("そのまま お待ちください")]),e._v(" "),o("Baseicon",{staticClass:"warning_icon",attrs:{icon:e.icon.warning}}),e._v(" "),o("BaseText",{staticClass:"warnint_text",attrs:{color:"red",face:"bold",size:e.fontSizeChange}},[e._v(e._s(e.modalText[1].modal))])],1)}),[],!1,null,"ee386dd0",null);t.default=component.exports;installComponents(component,{Baseicon:o(161).default,BaseText:o(160).default})},215:function(e,t,o){"use strict";var n=o(204);o.n(n).a},216:function(e,t,o){(t=o(41)(!1)).push([e.i,".warning[data-v-ee386dd0]{background:#fff;position:fixed;top:0;height:100vh;width:100%;z-index:5}.icon[data-v-ee386dd0]{position:absolute;top:6.3%;left:10px;transform:translateY(-50%);height:6.25vw;width:6.25vw}.top_text[data-v-ee386dd0]{display:block;text-align:center;margin-top:15.25vh}.warning_icon[data-v-ee386dd0]{display:block;margin:6.5vh auto 0;width:23.21146vw}.warnint_text[data-v-ee386dd0]{display:block;text-align:center}",""]),e.exports=t},217:function(e,t,o){"use strict";var n=o(205);o.n(n).a},218:function(e,t,o){(t=o(41)(!1)).push([e.i,".speech_mask[data-v-7e275f94]{width:100%;height:100vh;position:fixed;overflow:hidden;top:0;left:0;z-index:100;background:rgba(16,16,16,.5098);opacity:0}.header[data-v-7e275f94]{z-index:3;display:flex;position:relative;position:fixed;top:0;width:100%;height:12.5vh}.header-text[data-v-7e275f94]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.header-left[data-v-7e275f94]{height:0;width:77%;border-right:120px solid transparent}.header-left-blue[data-v-7e275f94]{border-bottom:12.5vh solid #3fa9f5}.header-left-white[data-v-7e275f94]{border-bottom:12.5vh solid #fff}.header-left-yellow[data-v-7e275f94]{border-bottom:12.5vh solid #fbb03b}.header-left-green[data-v-7e275f94]{border-bottom:12.5vh solid #39b54a}.header-left-purple[data-v-7e275f94]{border-bottom:12.5vh solid #ac67c9}.header-left .device_icon[data-v-7e275f94]{width:20.92vw;height:6.14vw;position:absolute;top:50%;transform:translateY(-50%);left:9%}.header-right[data-v-7e275f94]{height:100%;width:23%;display:flex;align-items:center;justify-content:flex-end;padding-right:10px}.header .back_icon[data-v-7e275f94]{position:absolute;top:50%;left:10px;transform:translateY(-50%);height:6.25vw;width:6.25vw}.header .stop_btn[data-v-7e275f94]{border:4px solid #fff;border-radius:60px;box-shadow:0 3px 3px #d3d3d3;width:16.66667vw;height:10vh}.white[data-v-7e275f94]{background:#fff}.white .header-text[data-v-7e275f94]{color:#333}.blue[data-v-7e275f94]{background:#9ad2f9}.yellow[data-v-7e275f94]{background:#f9d59c}.green[data-v-7e275f94]{background:#97d8a4}.purple[data-v-7e275f94]{background:#d1b0e4}.speed_bar[data-v-7e275f94]{position:absolute;right:18%}.speed_bar label[data-v-7e275f94]{display:block}",""]),e.exports=t}}]);