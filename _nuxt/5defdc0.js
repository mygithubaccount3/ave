(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{271:function(t,e,o){var content=o(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("51685c80",content,!0,{sourceMap:!1})},276:function(t,e,o){var content=o(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("3c8e49d7",content,!0,{sourceMap:!1})},277:function(t,e,o){"use strict";o(271)},278:function(t,e,o){var r=o(41)(!1);r.push([t.i,".actions{display:flex;justify-content:space-between;width:120px;margin:auto}.actions div{background-color:#727272;width:30px;height:30px;border-radius:15px;display:flex;justify-content:center;align-items:center}.actions div:hover{background-color:#00c8c8}.item .menu{background-color:#fff;box-shadow:0 0 24px rgba(0,0,0,.14);position:absolute;display:none;flex-direction:column;align-items:center;align-self:flex-end;left:0;right:0;bottom:-132px;padding:21px 55px 17px;z-index:999999}.menu .title{color:#727272;font-family:Montserrat;font-size:13px;font-weight:700;line-height:20px;text-align:center;text-transform:uppercase}.menu .description{color:#8e8c8c;font-family:Roboto;font-size:15px;line-height:normal;text-align:center;line-height:22px;line-height:20px}",""]),t.exports=r},279:function(t,e,o){"use strict";o.r(e);var r=o(60),n={name:"ItemMenu",props:{title:{type:String,required:!0},description:{type:String,required:!0}},computed:{faCompressAlt:function(){return r.a},faShoppingCart:function(){return r.e}}},l=(o(277),o(18)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("div",{staticClass:"actions"},[o("div",[o("fa",{attrs:{icon:t.faShoppingCart,color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:"heart",color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:t.faCompressAlt,color:"white"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,o){"use strict";o(276)},283:function(t,e,o){var r=o(41)(!1);r.push([t.i,".item{display:flex;position:relative}.item:hover{box-shadow:0 0 24px rgba(0,0,0,.14)}.item:hover .infoIcon,.item:hover .menu,.item:hover .thumbs{display:flex}.items_wrapper:first-of-type .item:nth-of-type(3){margin-top:2%}.items_wrapper:last-of-type .item:nth-of-type(3){margin-bottom:2%}.item .price{color:#9a9a9a;font-family:Montserrat;font-size:21px;font-weight:300;text-align:left;text-transform:uppercase;letter-spacing:1.05px;top:15px;left:15px}.infoIcon,.item .price{display:none;position:absolute}.infoIcon{top:calc(50% - 24px);left:calc(50% - 24px);font-size:48px}.thumbs{position:absolute;top:15px;right:15px;width:10%;display:none;flex-direction:column}.thumbs img,.thumbs img[lazy=loading]{width:100%;height:auto;margin-bottom:10px}",""]),t.exports=r},289:function(t,e,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("76eb7cd1",content,!0,{sourceMap:!1})},294:function(t,e,o){"use strict";o.r(e);var r=o(60),n={name:"Item",props:{imgSrc:{type:String,required:!0},imgWebp:{type:String,required:!0},price:{type:String,required:!0},thumbs:{type:Array}},computed:{faInfoCircle:function(){return r.c}}},l=(o(282),o(18)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgWebp,expression:"imgWebp"}],style:{maxWidth:t.imgSrc.split("/")[3]+"px"},attrs:{"data-srcset":t.imgSrc+", "+t.imgWebp,alt:"",width:t.imgSrc.split("/")[3],height:t.imgSrc.split("/")[4]}}),t._v(" "),o("span",{staticClass:"price"},[t._v(t._s(t.price))]),t._v(" "),o("fa",{staticClass:"infoIcon",attrs:{icon:t.faInfoCircle,color:"white"}}),t._v(" "),o("div",{staticClass:"thumbs"},t._l(t.thumbs,(function(t){return o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"thumb.src"}],key:t.id,attrs:{alt:t.title}})})),0),t._v(" "),o("ItemMenu",{attrs:{title:"this is a title",description:"And this is a description"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemMenu:o(279).default})},311:function(t,e,o){"use strict";o(289)},312:function(t,e,o){var r=o(41)(!1);r.push([t.i,'.items{border-top:1px solid #eee;margin:62px auto;padding-top:54px;padding-bottom:62px;width:80%}.items__nav ul{padding-left:0;list-style-type:none;display:flex;flex-wrap:wrap;justify-content:space-around}.items_content{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:10px}.items_content_wrapper{display:grid;grid-gap:10px;grid-template-areas:"item" "item" "item"}.items a{font-weight:700;line-height:20px;color:#727272;font-family:Montserrat,sans-serif;font-size:13px;padding:0;text-align:left;text-transform:uppercase}.items a:hover{color:#00c8c8}.items .nav{margin-bottom:61px}img{width:100%;height:auto}@media screen and (min-width:480px){.items_content{grid-template-columns:repeat(2,1fr)}.items_content_wrapper:first-of-type{grid-template-areas:"top-item-left top-item-right" "bottom-item bottom-item"}.items_content_wrapper:first-of-type .item:last-of-type{grid-area:bottom-item}.items_content_wrapper:last-of-type{grid-template-areas:"top-item top-item" "bottom-item-left bottom-item-right"}.items_content_wrapper:last-of-type .item:first-of-type{grid-area:top-item}}@media screen and (min-width:768px){.items_content{grid-template-columns:repeat(2,1fr);min-height:300px}}',""]),t.exports=r},324:function(t,e,o){"use strict";o.r(e);var r={},n=(o(311),o(18)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"items"},[t._m(0),t._v(" "),o("div",{staticClass:"items_content"},[o("div",{staticClass:"items_content_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=314",imgWebp:"https://picsum.photos/420/500.webp?image=314",price:"20.47$",thumbs:[{id:1,title:"Thumb 1",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=317",imgWebp:"https://picsum.photos/420/500.webp?image=317",price:"20.47$",thumbs:[{id:2,title:"Thumb 2",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/760/500/?image=323",imgWebp:"https://picsum.photos/760/500.webp?image=323",price:"20.47$",thumbs:[{id:3,title:"Thumb 3",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}})],1),t._v(" "),o("div",{staticClass:"items_content_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/760/500/?image=350",imgWebp:"https://picsum.photos/760/500.webp?image=350",price:"20.47$",thumbs:[{id:4,title:"Thumb 4",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=352",imgWebp:"https://picsum.photos/420/500.webp?image=352",price:"20.47$",thumbs:[{id:5,title:"Thumb 5",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=327",imgWebp:"https://picsum.photos/420/500.webp?image=327",price:"20.47$",thumbs:[{id:6,title:"Thumb 6",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}})],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"items__nav"},[o("ul",[o("li",{attrs:{active:""}},[t._v("Popular")]),t._v(" "),o("li",[t._v("New arrivals")]),t._v(" "),o("li",[t._v("Best sellers")]),t._v(" "),o("li",[t._v("Special offers")]),t._v(" "),o("li",[t._v("Coming soon")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Item:o(294).default})}}]);