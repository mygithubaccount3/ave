(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{342:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("51685c80",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n(342)},347:function(t,e,n){var o=n(70)(!1);o.push([t.i,".actions{display:flex;justify-content:space-between;width:120px;margin:auto}.actions div{background-color:#727272;width:30px;height:30px;border-radius:15px;display:flex;justify-content:center;align-items:center}.actions div:hover{background-color:#00c8c8}.item .menu{background-color:#fff;box-shadow:0 0 24px rgba(0,0,0,.14);position:absolute;display:none;flex-direction:column;align-items:center;left:0;right:0;padding:21px 55px 17px;z-index:999999}.menu .title{color:#727272;font-family:Montserrat;font-size:13px;font-weight:700;line-height:20px;text-align:center;text-transform:uppercase}.menu .description{color:#8e8c8c;font-family:Roboto;font-size:15px;line-height:normal;text-align:center;line-height:22px;line-height:20px}",""]),t.exports=o},349:function(t,e,n){"use strict";n.r(e);var o=n(91),r={name:"ItemMenu",props:{title:{type:String,required:!0},description:{type:String,required:!0}},computed:{faCompressAlt:function(){return o.a},faShoppingCart:function(){return o.e}}},c=(n(346),n(61)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"actions"},[n("div",[n("fa",{attrs:{icon:t.faShoppingCart,color:"white"}})],1),t._v(" "),n("div",[n("fa",{attrs:{icon:"heart",color:"white"}})],1),t._v(" "),n("div",[n("fa",{attrs:{icon:t.faCompressAlt,color:"white"}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);