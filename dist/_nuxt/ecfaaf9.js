(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5,6,7,9],{308:function(t,e,o){var content=o(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("51685c80",content,!0,{sourceMap:!1})},309:function(t,e,o){var content=o(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("6422aec0",content,!0,{sourceMap:!1})},312:function(t,e,o){"use strict";o(308)},313:function(t,e,o){var n=o(66)(!1);n.push([t.i,".actions{display:flex;justify-content:space-between;width:120px;margin:auto}.actions div{background-color:#727272;width:30px;height:30px;border-radius:15px;display:flex;justify-content:center;align-items:center}.actions div:hover{background-color:#00c8c8}.item .menu{background-color:#fff;box-shadow:0 0 24px rgba(0,0,0,.14);position:absolute;display:none;flex-direction:column;align-items:center;left:0;right:0;padding:21px 55px 17px;z-index:999999}.menu .title{color:#727272;font-family:Montserrat;font-size:13px;font-weight:700;line-height:20px;text-align:center;text-transform:uppercase}.menu .description{color:#8e8c8c;font-family:Roboto;font-size:15px;line-height:normal;text-align:center;line-height:22px;line-height:20px}",""]),t.exports=n},315:function(t,e,o){"use strict";o.r(e);var n=o(82),r={name:"ItemMenu",props:{title:{type:String,required:!0},description:{type:String,required:!0}},computed:{faCompressAlt:function(){return n.a},faShoppingCart:function(){return n.e}}},l=(o(312),o(58)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("div",{staticClass:"actions"},[o("div",[o("fa",{attrs:{icon:t.faShoppingCart,color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:"heart",color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:t.faCompressAlt,color:"white"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,o){var content=o(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("820fa74c",content,!0,{sourceMap:!1})},318:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("2172e032",content,!0,{sourceMap:!1})},319:function(t,e,o){"use strict";o(309)},320:function(t,e,o){var n=o(66)(!1);n.push([t.i,".item{position:relative}.item:hover{box-shadow:0 0 24px rgba(0,0,0,.14)}.item:hover .infoIcon,.item:hover .menu,.item:hover .thumbs{display:flex}div .item:first-of-type,div .item:nth-of-type(2){width:49%}.items_wrapper:first-of-type .item:nth-of-type(3){margin-top:2%}.items_wrapper:last-of-type .item:nth-of-type(3){margin-bottom:2%}.item .price{color:#9a9a9a;font-family:Montserrat;font-size:21px;font-weight:300;text-align:left;text-transform:uppercase;letter-spacing:1.05px;position:absolute;top:15px;left:15px}.infoIcon{top:calc(50% - 24px);left:calc(50% - 24px);font-size:48px}.infoIcon,.thumbs{position:absolute;display:none}.thumbs{top:15px;right:15px;width:10%;flex-direction:column}.thumbs img{width:100%;height:auto;margin-bottom:10px}",""]),t.exports=n},321:function(t,e,o){var content=o(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("4d86c84a",content,!0,{sourceMap:!1})},322:function(t,e,o){"use strict";o.r(e);var n=o(82),r={name:"Item",props:{imgSrc:{type:String,required:!0},price:{type:String,required:!0}},computed:{faInfoCircle:function(){return n.c}}},l=(o(319),o(58)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("img",{attrs:{src:t.imgSrc,alt:""}}),t._v(" "),o("span",{staticClass:"price"},[t._v(t._s(t.price))]),t._v(" "),o("fa",{staticClass:"infoIcon",attrs:{icon:t.faInfoCircle,color:"white"}}),t._v(" "),t._m(0),t._v(" "),o("ItemMenu",{attrs:{title:"this is a title",description:"And this is a description"}})],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumbs"},[o("img",{attrs:{src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",alt:""}}),t._v(" "),o("img",{attrs:{src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemMenu:o(315).default})},325:function(t,e,o){"use strict";o(317)},326:function(t,e,o){var n=o(66)(!1);n.push([t.i,".heroHome_wrapper[data-v-23672526]{background-image:url(https://via.placeholder.com/1920x1080/f8f8f8/f8f8f8/?text=);background-size:100% auto;display:flex;flex-direction:column;padding:30px;position:relative;top:0;right:0;left:0;z-index:-999999}h1[data-v-23672526]{color:#575153;font-family:Montserrat,sans-serif;font-size:450px;font-weight:700;text-align:center;text-transform:uppercase;letter-spacing:22.5px;line-height:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (min-width:767px) and (max-width:1100px){h1[data-v-23672526]{font-size:200px}}a[data-v-23672526]{align-self:flex-end;display:inline-flex;border:2px solid #737373;font-family:Montserrat,sans-serif;width:342px;height:59px;justify-content:center;align-items:center;color:#454647;font-size:16px;font-weight:400;text-align:center;text-transform:uppercase;letter-spacing:3.2px}a[data-v-23672526]:hover{background-color:#00c8c8;border:none;color:#f8f8f8;text-decoration:none}@media screen and (max-width:767px){h1[data-v-23672526]{font-size:100px}}",""]),t.exports=n},327:function(t,e,o){"use strict";o(318)},328:function(t,e,o){var n=o(66)(!1);n.push([t.i,".items{border-top:1px solid #eee;margin:62px auto;padding-top:54px;padding-bottom:62px;width:80%}.items_content,.items_wrapper{display:flex;flex-wrap:wrap;justify-content:space-between}.items_wrapper{width:49%}.items_wrapper:last-of-type .item:last-of-type{order:-1}.items a{font-weight:700;line-height:20px;color:#727272;font-family:Montserrat,sans-serif;font-size:13px;padding:0;text-align:left;text-transform:uppercase}.items a:hover{color:#00c8c8}.items .nav{margin-bottom:61px}img{width:100%;height:auto}",""]),t.exports=n},329:function(t,e,o){"use strict";o(321)},330:function(t,e,o){var n=o(66)(!1);n.push([t.i,".lookbook[data-v-4f95eae4]{align-items:center;background-color:#f8f8f8;display:flex;flex-wrap:wrap;justify-content:space-between;padding-top:43px;padding-right:57px;padding-left:39px;width:32%}.text[data-v-4f95eae4]{display:flex;flex-direction:column;align-items:flex-end;margin-bottom:85px;width:290px}.title[data-v-4f95eae4]{color:#575153;font-family:Montserrat,sans-serif;font-size:48px;font-weight:300;letter-spacing:normal;line-height:54px;margin-bottom:29px;text-align:right;text-transform:uppercase}.title span[data-v-4f95eae4]{font-weight:700}.description[data-v-4f95eae4]{color:#727272;font-family:Roboto,sans-serif;font-size:15px;line-height:22px;text-align:right;line-height:normal;margin-bottom:31px}img[data-v-4f95eae4]{width:41%}a[data-v-4f95eae4]{color:#454647;font-family:Montserrat;font-size:16px;text-align:center;text-transform:uppercase;letter-spacing:3.2px;border:2px solid #737373;background-color:transparent;padding:23px 34px 24px 33px}a[data-v-4f95eae4]:hover{background-color:#00c8c8;border-color:#00c8c8;color:#f8f8f8;text-decoration:none}@media screen and (max-width:768px){.lookbook[data-v-4f95eae4]{flex-direction:column;padding:5px;width:100%}.text[data-v-4f95eae4]{align-items:stretch}}",""]),t.exports=n},334:function(t,e,o){var content=o(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(67).default)("c31cbb72",content,!0,{sourceMap:!1})},338:function(t,e,o){"use strict";o.r(e);var n={name:"HeroHome",props:{title:{type:String},linkTitle:{type:String,required:!0}}},r=(o(325),o(58)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,fade:!0,controls:"",indicators:"",background:"#ababab"}},[o("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/2053/920/?image=275"}},[o("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end"}},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("nuxt-link",{attrs:{to:"/men"}},[t._v(t._s(t.linkTitle))])],1)]),t._v(" "),o("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/2053/920/?image=280"}},[o("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end"}},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("nuxt-link",{attrs:{to:"/women"}},[t._v(t._s(t.linkTitle))])],1)])],1)],1)}),[],!1,null,"23672526",null);e.default=component.exports},339:function(t,e,o){"use strict";o.r(e);var n={},r=(o(327),o(58)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"items"},[o("div",[o("b-nav",[o("b-nav-item",{attrs:{active:""}},[t._v("Popular")]),t._v(" "),o("b-nav-item",[t._v("New arrivals")]),t._v(" "),o("b-nav-item",[t._v("Best sellers")]),t._v(" "),o("b-nav-item",[t._v("Special offers")]),t._v(" "),o("b-nav-item",[t._v("Coming soon")])],1)],1),t._v(" "),o("div",{staticClass:"items_content"},[o("div",{staticClass:"items_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=314",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=317",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/870/704/?image=323",price:"20.47$"}})],1),t._v(" "),o("div",{staticClass:"items_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=350",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=352",price:"20.47$"}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/870/704/?image=327",price:"20.47$"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Item:o(322).default})},340:function(t,e,o){"use strict";o.r(e);var n={name:"Lookbook",props:{title:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!0},imgSrc:{type:String,required:!0}}},r=(o(329),o(58)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lookbook"},[o("img",{attrs:{src:t.imgSrc,alt:"lookbook image"}}),t._v(" "),o("div",{staticClass:"text"},[o("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("nuxt-link",{attrs:{to:"/lookbooks"+t.url}},[t._v("View now")])],1)])}),[],!1,null,"4f95eae4",null);e.default=component.exports},347:function(t,e,o){"use strict";o(334)},348:function(t,e,o){var n=o(66)(!1);n.push([t.i,"div[data-v-33e4e7fa]:first-of-type{padding-top:85px}.lookbooks_wrapper[data-v-33e4e7fa]{display:flex;justify-content:space-between}@media screen and (max-width:768px){.lookbooks_wrapper[data-v-33e4e7fa]{flex-direction:column}}",""]),t.exports=n},356:function(t,e,o){"use strict";o.r(e);var n={asyncData:function(){return{lookbooks:[{id:1,title:"Men's lookbook",description:"Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.",url:"/men",imgSrc:"/silhouette.png"},{id:2,title:"Women's lookbook",description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames . Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.",url:"/women",imgSrc:"/silhouette.png"},{id:3,title:"Your lookbook",description:"See an item you like and click the  button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!",url:"/your",imgSrc:"/silhouette.png"}]}}},r=(o(347),o(58)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HeroHome",{attrs:{title:"Ave",linkTitle:"Shop men's collection"}}),t._v(" "),o("Items"),t._v(" "),o("div",{staticClass:"lookbooks_wrapper"},t._l(t.lookbooks,(function(t){return o("Lookbook",{key:t.id,attrs:{title:t.title,description:t.description,url:t.url,imgSrc:t.imgSrc}})})),1)],1)}),[],!1,null,"33e4e7fa",null);e.default=component.exports;installComponents(component,{HeroHome:o(338).default,Items:o(339).default,Lookbook:o(340).default})}}]);