(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{234:function(t,e,o){var content=o(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("51685c80",content,!0,{sourceMap:!1})},239:function(t,e,o){var content=o(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("3c8e49d7",content,!0,{sourceMap:!1})},240:function(t,e,o){"use strict";o(234)},241:function(t,e,o){var n=o(30)(!1);n.push([t.i,".actions{display:flex;justify-content:space-between;width:120px;margin:auto}.actions div{background-color:#727272;width:30px;height:30px;border-radius:15px;display:flex;justify-content:center;align-items:center}.actions div:hover{background-color:#00c8c8}.item .menu{background-color:#fff;box-shadow:0 0 24px rgba(0,0,0,.14);position:absolute;display:none;flex-direction:column;align-items:center;align-self:flex-end;left:0;right:0;bottom:-132px;padding:21px 55px 17px;z-index:999999}.menu .title{color:#727272;font-family:Montserrat;font-size:13px;font-weight:700;line-height:20px;text-align:center;text-transform:uppercase}.menu .description{color:#8e8c8c;font-family:Roboto;font-size:15px;line-height:normal;text-align:center;line-height:22px;line-height:20px}",""]),t.exports=n},242:function(t,e,o){"use strict";o.r(e);var n=o(38),r={name:"ItemMenu",props:{title:{type:String,required:!0},description:{type:String,required:!0}},computed:{faCompressAlt:()=>n.a,faShoppingCart:()=>n.e}},l=(o(240),o(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("div",{staticClass:"actions"},[o("div",[o("fa",{attrs:{icon:t.faShoppingCart,color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:"heart",color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:t.faCompressAlt,color:"white"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,o){"use strict";o(239)},246:function(t,e,o){var n=o(30)(!1);n.push([t.i,".item{display:flex;position:relative}.item:hover{box-shadow:0 0 24px rgba(0,0,0,.14)}.item:hover .infoIcon,.item:hover .menu,.item:hover .thumbs{display:flex}.items_wrapper:first-of-type .item:nth-of-type(3){margin-top:2%}.items_wrapper:last-of-type .item:nth-of-type(3){margin-bottom:2%}.item .price{color:#9a9a9a;font-family:Montserrat;font-size:21px;font-weight:300;text-align:left;text-transform:uppercase;letter-spacing:1.05px;top:15px;left:15px}.infoIcon,.item .price{display:none;position:absolute}.infoIcon{top:calc(50% - 24px);left:calc(50% - 24px);font-size:48px}.thumbs{position:absolute;top:15px;right:15px;width:10%;display:none;flex-direction:column}.thumbs img,.thumbs img[lazy=loading]{width:100%;height:auto;margin-bottom:10px}",""]),t.exports=n},257:function(t,e,o){"use strict";o.r(e);var n=o(38),r={name:"Item",props:{imgSrc:{type:String,required:!0},imgWebp:{type:String,required:!0},price:{type:String,required:!0},thumbs:{type:Array}},computed:{faInfoCircle:()=>n.c}},l=(o(245),o(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgWebp,expression:"imgWebp"}],attrs:{"data-srcset":t.imgSrc+", "+t.imgWebp,alt:"",width:t.imgSrc.split("/")[3],height:t.imgSrc.split("/")[4]}}),t._v(" "),o("span",{staticClass:"price"},[t._v(t._s(t.price))]),t._v(" "),o("fa",{staticClass:"infoIcon",attrs:{icon:t.faInfoCircle,color:"white"}}),t._v(" "),o("div",{staticClass:"thumbs"},t._l(t.thumbs,(function(t){return o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"thumb.src"}],key:t.id,attrs:{alt:t.title}})})),0),t._v(" "),o("ItemMenu",{attrs:{title:"this is a title",description:"And this is a description"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemMenu:o(242).default})}}]);