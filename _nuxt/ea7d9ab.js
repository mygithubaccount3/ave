(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{354:function(e,t,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("546a2235",content,!0,{sourceMap:!1})},362:function(e,t,n){"use strict";n(354)},363:function(e,t,n){var o=n(71)(!1);o.push([e.i,".heroHome[data-v-5068a44a]{text-shadow:1px 1px 2px #333;margin:auto;width:80%}.heroHome_wrapper[data-v-5068a44a]{align-items:flex-end}.header_mobile[data-v-5068a44a],.heroHome_wrapper[data-v-5068a44a]{display:flex;flex-direction:column}.header_mobile[data-v-5068a44a]{align-items:center}.header_mobile__links-wrapper[data-v-5068a44a]{display:flex;justify-content:center;flex-wrap:wrap}.header_mobile__link[data-v-5068a44a]{margin-right:5px;margin-bottom:10px;margin-left:5px;text-align:center;min-width:190px;padding:5px;width:45%}h1[data-v-5068a44a]{color:#575153;font-size:100px;font-weight:700;letter-spacing:22.5px;line-height:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a[data-v-5068a44a],h1[data-v-5068a44a]{font-family:Montserrat,sans-serif;text-transform:uppercase}a[data-v-5068a44a]{display:inline-flex;border:2px solid #737373;width:342px;height:59px;justify-content:center;align-items:center;color:#454647;font-size:16px;font-weight:400;letter-spacing:3.2px}a[data-v-5068a44a]:hover{background-color:#00c8c8;border:none;color:#f8f8f8;text-decoration:none}@media screen and (min-width:768px){.heroHome[data-v-5068a44a]{width:100%}h1[data-v-5068a44a]{font-size:200px}a[data-v-5068a44a]{align-self:flex-end;background-color:#575153;color:#f8f8f8}}@media screen and (min-width:1500px){h1[data-v-5068a44a]{font-size:450px}}",""]),e.exports=o},375:function(e,t,n){"use strict";n.r(t);var o={name:"HeroHome",props:{title:{type:String},links:{type:Array,required:!0}},data:function(){return{isOnMobile:!0}},methods:{checkIfOnMobile:function(){window.innerWidth>768?this.isOnMobile=!1:this.isOnMobile=!0}},created:function(){this.checkIfOnMobile()},beforeMount:function(){window.addEventListener("resize",this.checkIfOnMobile)},beforeUnmount:function(){window.removeEventListener("resize",this.checkIfOnMobile)}},r=(n(362),n(61)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"heroHome"},[n("b-carousel",{directives:[{name:"show",rawName:"v-show",value:!e.isOnMobile,expression:"!isOnMobile"}],attrs:{id:"carousel-1",interval:4e3,fade:!0,controls:"",background:"#ababab"}},e._l(e.links,(function(link){return n("b-carousel-slide",{key:link.id,attrs:{"img-src":link.background,"img-alt":link.title}},[n("div",{staticClass:"heroHome_wrapper"},[n("h1",[e._v(e._s(e.title))]),e._v(" "),n("nuxt-link",{attrs:{to:link.url}},[e._v(e._s(link.title))])],1)])})),1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOnMobile,expression:"isOnMobile"}],staticClass:"header_mobile"},[n("h1",[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"header_mobile__links-wrapper"},e._l(e.links,(function(link){return n("nuxt-link",{key:link.id,staticClass:"header_mobile__link",attrs:{to:link.url}},[e._v(e._s(link.title))])})),1)])],1)}),[],!1,null,"5068a44a",null);t.default=component.exports}}]);