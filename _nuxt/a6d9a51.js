(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{295:function(t,e,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("d3ed0074",content,!0,{sourceMap:!1})},315:function(t,e,o){"use strict";o(295)},316:function(t,e,o){var r=o(41)(!1);r.push([t.i,".lookbook[data-v-9ac0a04e]{align-items:center;background-color:#f8f8f8;display:flex;flex-wrap:wrap;justify-content:space-between;padding-top:43px;padding-right:57px;padding-left:39px;width:32%}.text[data-v-9ac0a04e]{display:flex;flex-direction:column;align-items:flex-end;margin-bottom:85px;width:290px}.title[data-v-9ac0a04e]{color:#575153;font-family:Montserrat,sans-serif;font-size:48px;font-weight:300;letter-spacing:normal;line-height:54px;margin-bottom:29px;text-align:right;text-transform:uppercase}.title span[data-v-9ac0a04e]{font-weight:700}.description[data-v-9ac0a04e]{color:#727272;font-family:Roboto,sans-serif;font-size:15px;line-height:22px;text-align:right;line-height:normal;margin-bottom:31px}img[data-v-9ac0a04e]{width:41%}a[data-v-9ac0a04e]{color:#454647;font-family:Montserrat;font-size:16px;text-align:center;text-transform:uppercase;letter-spacing:3.2px;border:2px solid #737373;background-color:transparent;padding:23px 34px 24px 33px}a[data-v-9ac0a04e]:hover{background-color:#00c8c8;border-color:#00c8c8;color:#f8f8f8;text-decoration:none}@media screen and (max-width:768px){.lookbook[data-v-9ac0a04e]{flex-direction:column;padding:5px;width:100%}.text[data-v-9ac0a04e]{align-items:stretch}}",""]),t.exports=r},324:function(t,e,o){"use strict";o.r(e);o(14),o(33);var r={name:"Lookbook",props:{title:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!0},imgSrc:{type:String,required:!0}},mounted:function(){var t=document.querySelector("#lookbook".concat(this.$vnode.key));new IntersectionObserver((function(t){var e=this;t.forEach((function(t){if(t.isIntersecting){var img=t.target.children[0],o=img.getAttribute("data-src");img.setAttribute("src",o),e.unobserve(t.target)}}))})).observe(t)}},n=(o(315),o(18)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lookbook",attrs:{id:"lookbook"+t.$vnode.key}},[o("img",{attrs:{"data-src":t.imgSrc,alt:"lookbook image",width:"237",height:"437"}}),t._v(" "),o("div",{staticClass:"text"},[o("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("nuxt-link",{attrs:{to:"/lookbooks"+t.url}},[t._v("View now")])],1)])}),[],!1,null,"9ac0a04e",null);e.default=component.exports}}]);