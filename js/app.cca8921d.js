(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},o={app:0},a=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d29a4b53"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"4c653359"}[e]+".css",o=c.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===i||d===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var i=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[e],m.parentNode.removeChild(m),n(a)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,n[1](u)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/exampleCovid19/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("8a23"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-navigation-drawer",{attrs:{app:"","mini-variant":e.mini,"expand-on-hover":e.expandOnHoverMethod(),"mini-variant-width":"80"},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-img",{attrs:{src:n("adb8"),gradient:"to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)",height:"100%"}},[i("v-container",[i("v-list-item",{staticClass:"px-2",attrs:{dark:""}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1),i("v-list-item-title",[i("v-img",{attrs:{src:n("ccbd")}})],1)],1),i("v-divider",{staticStyle:{"border-color":"#4f4f4f"}}),i("v-list",{attrs:{dark:""}},[e._l(e.items,(function(t){return[t.children?i("v-list-group",{key:t.text,attrs:{"append-icon":"","prepend-icon":t.model?t.icon:t["icon-alt"]},scopedSlots:e._u([{key:"activator",fn:function(){return[i("v-list-item",{staticClass:"pl-0"},[i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t.text))])],1)],1)]},proxy:!0}],null,!0),model:{value:t.model,callback:function(n){e.$set(t,"model",n)},expression:"item.model"}},e._l(t.children,(function(t,n){return i("v-list-item",{key:n,attrs:{to:t.link,link:""}},[i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t.text))])],1)],1)})),1):i("v-list-item",{key:t.text,attrs:{link:""}},[i("v-list-item-action",[i("v-icon",[e._v(e._s(t.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t.text))])],1)],1)]}))],2)],1)],1)],1),i("v-app-bar",{attrs:{elevation:"0",app:"",height:"100",color:"#eeeeee"}},[i("div",{staticClass:"d-flex align-center"},[i("v-btn",{staticClass:"mx-2 ml-5",attrs:{fab:"",dark:"",small:"",color:"#b70000"},on:{click:function(t){return t.stopPropagation(),e.changeMini()}}},[i("v-icon",[e._v(e._s(e.iconChevron))])],1),i("v-breadcrumbs",{attrs:{items:e.itemsBreadCrumbs},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[i("v-breadcrumbs-item",{attrs:{href:n.href,disabled:n.disabled}},[e._v(e._s(n.text.toUpperCase()))])]}}])})],1),i("v-spacer"),i("v-menu",{attrs:{"offset-y":"",bottom:"",origin:"center center",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"ml-10 mr-5",attrs:{icon:"",color:"info"}},"v-btn",r,!1),n),[i("v-icon",[e._v("mdi-account")])],1)]}}])},[i("v-list",{staticClass:"pr-15"},e._l(e.itemsAppBar,(function(t,n){return i("v-list-item",{key:n},[i("v-list-item-title",[e._v(e._s(t.title))])],1)})),1)],1)],1),i("v-main",{staticStyle:{"background-color":"#eeeeee","padding-top":"120px"}},[i("v-fade-transition",{attrs:{mode:"out-in"}},[i("router-view",{staticClass:"mr-10 ml-10"})],1)],1),i("v-footer",{attrs:{color:"#eeeeee",app:""}},[i("span",{staticClass:"black--text"},[i("strong",[e._v("© 2020 Covid-19")]),e._v(" Powered by Torus Actions SAS ")])])],1)},o=[],a={name:"App",data:function(){return{isMobile:!1,drawer:!0,itemsAppBar:[{title:"Profile"},{title:"Setting"},{title:"Logout"}],itemsBreadCrumbs:[{text:"Home",disabled:!1,href:"breadcrumbs_dashboard"}],items:[{icon:"mdi-chevron-right",text:"Home"},{icon:"mdi-chevron-right",text:"Data"},{icon:"mdi-chevron-right",text:"Methodology"},{icon:"mdi-folder-open","icon-alt":"mdi-folder",text:"Models",model:!1,children:[{text:"Book on epidemic modeling",icon:"mdi-circle"}]},{icon:"mdi-folder-open","icon-alt":"mdi-folder",text:"Resources",model:!1,children:[{icon:"mdi-circle",text:"Methodology"},{icon:"mdi-circle",text:"Models"},{icon:"mdi-circle",text:"Simulations"},{icon:"mdi-circle",text:"Predictions"},{icon:"mdi-circle",text:"State of the art in epidemic modeling"}]},{icon:"mdi-chevron-right",text:"Containment"},{icon:"mdi-chevron-right",text:"News"},{icon:"mdi-chevron-right",text:"About us"}],mini:!1,expandOnhover:!1,iconChevron:"mdi-chevron-left"}},methods:{changeMini:function(){this.isMobile?(this.drawer=!0,this.mini=!1,this.expandOnhover=!1):(this.mini=!this.mini,this.expandOnhover=!this.expandOnhover,this.iconChevron=this.mini?"mdi-chevron-right":"mdi-chevron-left")},expandOnHoverMethod:function(){return this.iconChevron=this.mini?"mdi-chevron-right":"mdi-chevron-left",this.expandOnhover},onResize:function(){this.isMobile=window.innerWidth<600}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})}},s=a,c=(n("034f"),n("2877")),l=n("6544"),d=n.n(l),u=n("7496"),m=n("40dc"),p=n("2bc5"),v=n("f625"),f=n("8336"),h=n("a523"),b=n("ce7e6"),g=n("0789"),x=n("553a"),y=n("132d"),w=n("adda"),_=n("8860"),C=n("56b0"),k=n("da13"),V=n("1800"),O=n("8270"),S=n("5d23"),M=n("f6c4"),A=n("e449"),L=n("f774"),j=n("2fa4"),P=Object(c["a"])(s,r,o,!1,null,null,null),B=P.exports;d()(P,{VApp:u["a"],VAppBar:m["a"],VBreadcrumbs:p["a"],VBreadcrumbsItem:v["a"],VBtn:f["a"],VContainer:h["a"],VDivider:b["a"],VFadeTransition:g["b"],VFooter:x["a"],VIcon:y["a"],VImg:w["a"],VList:_["a"],VListGroup:C["a"],VListItem:k["a"],VListItemAction:V["a"],VListItemAvatar:O["a"],VListItemContent:S["a"],VListItemTitle:S["b"],VMain:M["a"],VMenu:A["a"],VNavigationDrawer:L["a"],VSpacer:j["a"]});var E=n("bc3a"),T=n.n(E),I={install:function(e){e.prototype.$get=function(e){return T.a.get(e).then((function(e){return{state:!0,response:e}})).catch((function(e){return{state:!1,response:e.response}}))}}},N=I,z=n("f309");i["a"].use(z["a"]);var D=new z["a"]({}),F=n("8c4f");i["a"].use(F["a"]);var H=new F["a"]({mode:"hash",base:"/exampleCovid19/",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return n.e("about").then(n.bind(null,"fdab"))}}]}),R=n("9b8b"),$=n.n(R);n("45e3");i["a"].config.productionTip=!1,n("2034"),i["a"].use($.a,{map:"world",backgroundColor:"#FFF"}),i["a"].use(N),new i["a"]({vuetify:D,router:H,render:function(e){return e(B)}}).$mount("#app")},"8a23":function(e,t,n){},adb8:function(e,t,n){e.exports=n.p+"img/rawImage.94f0a8b0.jpg"},ccbd:function(e,t,n){e.exports=n.p+"img/302716571.050afb5c.png"}});
//# sourceMappingURL=app.cca8921d.js.map