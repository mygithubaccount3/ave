(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{308:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("51685c80",content,!0,{sourceMap:!1})},309:function(t,e,o){var content=o(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("6422aec0",content,!0,{sourceMap:!1})},312:function(t,e,o){"use strict";o(308)},313:function(t,e,o){var r=o(66)(!1);r.push([t.i,".actions{display:flex;justify-content:space-between;width:120px;margin:auto}.actions div{background-color:#727272;width:30px;height:30px;border-radius:15px;display:flex;justify-content:center;align-items:center}.actions div:hover{background-color:#00c8c8}.item .menu{background-color:#fff;box-shadow:0 0 24px rgba(0,0,0,.14);position:absolute;display:none;flex-direction:column;align-items:center;left:0;right:0;padding:21px 55px 17px;z-index:999999}.menu .title{color:#727272;font-family:Montserrat;font-size:13px;font-weight:700;line-height:20px;text-align:center;text-transform:uppercase}.menu .description{color:#8e8c8c;font-family:Roboto;font-size:15px;line-height:normal;text-align:center;line-height:22px;line-height:20px}",""]),t.exports=r},315:function(t,e,o){"use strict";o.r(e);var r=o(82),n={name:"ItemMenu",props:{title:{type:String,required:!0},description:{type:String,required:!0}},computed:{faCompressAlt:function(){return r.a},faShoppingCart:function(){return r.e}}},c=(o(312),o(58)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("div",{staticClass:"actions"},[o("div",[o("fa",{attrs:{icon:t.faShoppingCart,color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:"heart",color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:t.faCompressAlt,color:"white"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("2172e032",content,!0,{sourceMap:!1})},319:function(t,e,o){"use strict";o(309)},320:function(t,e,o){var r=o(66)(!1);r.push([t.i,".item{position:relative}.item:hover{box-shadow:0 0 24px rgba(0,0,0,.14)}.item:hover .infoIcon,.item:hover .menu,.item:hover .thumbs{display:flex}div .item:first-of-type,div .item:nth-of-type(2){width:49%}.items_wrapper:first-of-type .item:nth-of-type(3){margin-top:2%}.items_wrapper:last-of-type .item:nth-of-type(3){margin-bottom:2%}.item .price{color:#9a9a9a;font-family:Montserrat;font-size:21px;font-weight:300;text-align:left;text-transform:uppercase;letter-spacing:1.05px;position:absolute;top:15px;left:15px}.infoIcon{top:calc(50% - 24px);left:calc(50% - 24px);font-size:48px}.infoIcon,.thumbs{position:absolute;display:none}.thumbs{top:15px;right:15px;width:10%;flex-direction:column}.thumbs img{width:100%;height:auto;margin-bottom:10px}",""]),t.exports=r},322:function(t,e,o){"use strict";o.r(e);var r=o(82),n={name:"Item",props:{imgSrc:{type:String,required:!0},price:{type:String,required:!0}},computed:{faInfoCircle:function(){return r.c}}},c=(o(319),o(58)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("img",{attrs:{src:t.imgSrc,alt:""}}),t._v(" "),o("span",{staticClass:"price"},[t._v(t._s(t.price))]),t._v(" "),o("fa",{staticClass:"infoIcon",attrs:{icon:t.faInfoCircle,color:"white"}}),t._v(" "),t._m(0),t._v(" "),o("ItemMenu",{attrs:{title:"this is a title",description:"And this is a description"}})],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumbs"},[o("img",{attrs:{src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",alt:""}}),t._v(" "),o("img",{attrs:{src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemMenu:o(315).default})},327:function(t,e,o){"use strict";o(318)},328:function(t,e,o){var r=o(66)(!1);r.push([t.i,".items{border-top:1px solid #eee;margin:62px auto;padding-top:54px;padding-bottom:62px;width:80%}.items_content,.items_wrapper{display:flex;flex-wrap:wrap;justify-content:space-between}.items_wrapper{width:49%}.items_wrapper:last-of-type .item:last-of-type{order:-1}.items a{font-weight:700;line-height:20px;color:#727272;font-family:Montserrat,sans-serif;font-size:13px;padding:0;text-align:left;text-transform:uppercase}.items a:hover{color:#00c8c8}.items .nav{margin-bottom:61px}img{width:100%;height:auto}",""]),t.exports=r},339:function(t,e,o){"use strict";o.r(e);var r={},n=(o(327),o(58)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"items"},[o("div",[o("b-nav",[o("b-nav-item",{attrs:{active:""}},[t._v("Popular")]),t._v(" "),o("b-nav-item",[t._v("New arrivals")]),t._v(" "),o("b-nav-item",[t._v("Best sellers")]),t._v(" "),o("b-nav-item",[t._v("Special offers")]),t._v(" "),o("b-nav-item",[t._v("Coming soon")])],1)],1),t._v(" "),o("div",{staticClass:"items_content"},[o("div",{staticClass:"items_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=314",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=317",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/870/704/?image=323",price:"20.47$"}})],1),t._v(" "),o("div",{staticClass:"items_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=350",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=352",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/870/704/?image=327",price:"20.47$"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Item:o(322).default})}}]);