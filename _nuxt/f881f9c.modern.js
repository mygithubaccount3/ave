(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{242:function(e,o,t){var content=t(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(31).default)("aaf6392c",content,!0,{sourceMap:!1})},249:function(e,o,t){"use strict";t(242)},250:function(e,o,t){var r=t(30)(!1);r.push([e.i,".heroHome[data-v-ca5ea506]{text-shadow:1px 1px 2px #333;min-height:220px}.heroHome_wrapper-0[data-v-ca5ea506],.heroHome_wrapper-1[data-v-ca5ea506]{display:flex;flex-direction:column;align-items:flex-end;position:relative;padding-bottom:44.81%;background-repeat:no-repeat;background-size:cover;background-position:50%}.heroHome_link-0[data-v-ca5ea506],.heroHome_link-1[data-v-ca5ea506]{display:inline-flex;border:2px solid #737373;font-family:Montserrat,sans-serif;width:250px;height:30px;justify-content:center;align-items:center;color:#454647;font-size:11px;font-weight:400;text-transform:uppercase;letter-spacing:3.2px;position:absolute;margin-right:20px}.heroHome_link-0[data-v-ca5ea506]:hover,.heroHome_link-1[data-v-ca5ea506]:hover{background-color:#00c8c8;border:none;color:#f8f8f8;text-decoration:none}.heroHome_link-0[data-v-ca5ea506]{bottom:35%}.heroHome_link-1[data-v-ca5ea506]{bottom:10%;border:2px solid #fff;color:#fff}h1[data-v-ca5ea506]{color:#575153;font-family:Montserrat,sans-serif;font-size:50px;font-weight:700;text-transform:uppercase;letter-spacing:22.5px;line-height:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;margin-right:20px}@media screen and (min-width:768px){.heroHome[data-v-ca5ea506]{min-height:330px}.heroHome_link-0[data-v-ca5ea506],.heroHome_link-1[data-v-ca5ea506]{height:40px;background-color:#575153;color:#fff;width:342px;height:59px;font-size:16px}.heroHome_link-0[data-v-ca5ea506]{bottom:10%;color:#fff}.heroHome_link-1[data-v-ca5ea506]{border-color:#737373}h1[data-v-ca5ea506]{font-size:200px}}@media screen and (min-width:1500px){h1[data-v-ca5ea506]{font-size:450px}}",""]),e.exports=r},264:function(e,o,t){"use strict";t.r(o);var r=t(257),n=t.n(r),c=(t(258),t(259),{name:"HeroHome",props:{title:{type:String},links:{type:Array,required:!0}},components:{VueSlickCarousel:n.a},mounted(){var e=this.$refs.heroHome,o=!1;new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(o=!0,this.$refs.carousel.play()):o&&(o=!1,this.$refs.carousel.pause())}))})).observe(e)}}),l=(t(249),t(12)),component=Object(l.a)(c,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{ref:"heroHome",staticClass:"heroHome"},[t("VueSlickCarousel",{ref:"carousel",staticClass:"heroHome_slider",attrs:{arrows:!1,dots:!0,fade:!0,autoplay:!0,mobileFirst:!0,lazyLoad:"progressive"}},e._l(e.links,(function(link,o){return t("div",{key:link.id},[t("div",{class:"heroHome_wrapper-"+o},[t("img",{attrs:{srcset:link.backgroundWebp.small+" 300w, "+link.backgroundWebp.medium+" 600w, "+link.backgroundWebp.big+" 900w, "+link.backgroundWebp.w1200+" 1200w, "+link.backgroundWebp.w1500+" 1500w, "+link.backgroundWebp.w2053+" 2053w",sizes:"100vw",alt:link.title}}),e._v(" "),t("h1",[e._v(e._s(e.title))]),e._v(" "),t("nuxt-link",{class:"heroHome_link-"+o,attrs:{to:link.url}},[e._v(e._s(link.title))])],1)])})),0)],1)}),[],!1,null,"ca5ea506",null);o.default=component.exports}}]);