(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(e,t,n){var content=n(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("20c4a9d2",content,!0,{sourceMap:!1})},216:function(e,t,n){"use strict";var c=n(203);n.n(c).a},217:function(e,t,n){(t=n(41)(!1)).push([e.i,".device[data-v-2e6c11a2]{background:#f8fcff;height:100vh;min-height:100%}.device-text[data-v-2e6c11a2]{display:block;text-align:center;padding-top:16.82vw}.icon_box[data-v-2e6c11a2]{display:flex;justify-content:space-between;padding:0 2.71vw;margin-top:2.71vw}.icon_box .icon[data-v-2e6c11a2]{width:30.05vw}",""]),e.exports=t},230:function(e,t,n){"use strict";n.r(t);n(78),n(29),n(30),n(13),n(61);var c=n(44),r=n(169),o=n(160),d=n(161),l=n(178),f=n(64),v=n(177);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var O={name:"device",components:{BaseButton:r.default,BaseText:o.default,BaseIcon:d.default,Header:l.default},data:function(){return{languageJson:{}}},created:function(){this.languageJson=Object(v.cloneDeep)(this.getLanguage)},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(f.b)(["getLanguage"])),methods:{routerPush:function(e){this.$router.push(e)}}},w=(n(216),n(21)),component=Object(w.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"device"},[n("Header",{attrs:{backGround:"white",headerText:e.languageJson.header}}),e._v(" "),n("BaseText",{staticClass:"device-text",attrs:{size:"s"}},[e._v("検査機器を選択してください")]),e._v(" "),n("div",{staticClass:"icon_box"},[n("div",{on:{click:function(t){return e.routerPush("car")}}},[n("BaseIcon",{staticClass:"icon",attrs:{icon:"device_car.svg"}})],1),e._v(" "),n("div",{on:{click:function(t){return e.routerPush("track")}}},[n("BaseIcon",{staticClass:"icon",attrs:{icon:"device_track.svg"}})],1),e._v(" "),n("div",{on:{click:function(t){return e.routerPush("bike")}}},[n("BaseIcon",{staticClass:"icon",attrs:{icon:"device_bike.svg"},on:{click:function(t){return e.routerPush()}}})],1)])],1)}),[],!1,null,"2e6c11a2",null);t.default=component.exports;installComponents(component,{Header:n(178).default,BaseText:n(160).default,BaseIcon:n(161).default})}}]);