(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5,6,7,9],{345:function(t,e,o){var content=o(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("51685c80",content,!0,{sourceMap:!1})},346:function(t,e,o){var content=o(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("6422aec0",content,!0,{sourceMap:!1})},349:function(t,e,o){"use strict";o(345)},350:function(t,e,o){var r=o(71)(!1);r.push([t.i,".actions{display:flex;justify-content:space-between;width:120px;margin:auto}.actions div{background-color:#727272;width:30px;height:30px;border-radius:15px;display:flex;justify-content:center;align-items:center}.actions div:hover{background-color:#00c8c8}.item .menu{background-color:#fff;box-shadow:0 0 24px rgba(0,0,0,.14);position:absolute;display:none;flex-direction:column;align-items:center;left:0;right:0;padding:21px 55px 17px;z-index:999999}.menu .title{color:#727272;font-family:Montserrat;font-size:13px;font-weight:700;line-height:20px;text-align:center;text-transform:uppercase}.menu .description{color:#8e8c8c;font-family:Roboto;font-size:15px;line-height:normal;text-align:center;line-height:22px;line-height:20px}",""]),t.exports=r},352:function(t,e,o){"use strict";o.r(e);var r=o(91),n={name:"ItemMenu",props:{title:{type:String,required:!0},description:{type:String,required:!0}},computed:{faCompressAlt:function(){return r.a},faShoppingCart:function(){return r.e}}},l=(o(349),o(61)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("div",{staticClass:"actions"},[o("div",[o("fa",{attrs:{icon:t.faShoppingCart,color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:"heart",color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:t.faCompressAlt,color:"white"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},354:function(t,e,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("b9787296",content,!0,{sourceMap:!1})},355:function(t,e,o){var content=o(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("2172e032",content,!0,{sourceMap:!1})},356:function(t,e,o){"use strict";o(346)},357:function(t,e,o){var r=o(71)(!1);r.push([t.i,".item{position:relative}.item:hover{box-shadow:0 0 24px rgba(0,0,0,.14)}.item:hover .infoIcon,.item:hover .menu,.item:hover .thumbs{display:flex}div .item:first-of-type,div .item:nth-of-type(2){width:49%}.items_wrapper:first-of-type .item:nth-of-type(3){margin-top:2%}.items_wrapper:last-of-type .item:nth-of-type(3){margin-bottom:2%}.item .price{color:#9a9a9a;font-family:Montserrat;font-size:21px;font-weight:300;text-align:left;text-transform:uppercase;letter-spacing:1.05px;position:absolute;top:15px;left:15px}.infoIcon{top:calc(50% - 24px);left:calc(50% - 24px);font-size:48px}.infoIcon,.thumbs{position:absolute;display:none}.thumbs{top:15px;right:15px;width:10%;flex-direction:column}.thumbs img{width:100%;height:auto;margin-bottom:10px}",""]),t.exports=r},358:function(t,e,o){var content=o(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("40afa12e",content,!0,{sourceMap:!1})},359:function(t,e,o){"use strict";o.r(e);var r=o(91),n={name:"Item",props:{imgSrc:{type:String,required:!0},price:{type:String,required:!0},thumbs:{type:Array}},computed:{faInfoCircle:function(){return r.c}}},l=(o(356),o(61)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"imgSrc"}],attrs:{src:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=",alt:""}}),t._v(" "),o("span",{staticClass:"price"},[t._v(t._s(t.price))]),t._v(" "),o("fa",{staticClass:"infoIcon",attrs:{icon:t.faInfoCircle,color:"white"}}),t._v(" "),o("div",{staticClass:"thumbs"},t._l(t.thumbs,(function(t){return o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"thumb.src"}],key:t.id,attrs:{src:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=",alt:t.title}})})),0),t._v(" "),o("ItemMenu",{attrs:{title:"this is a title",description:"And this is a description"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemMenu:o(352).default})},362:function(t,e,o){"use strict";o(354)},363:function(t,e,o){var r=o(71)(!1);r.push([t.i,"#carousel-1[data-v-04fc74ed]{display:none}.heroHome[data-v-04fc74ed]{text-shadow:1px 1px 2px #333;margin:auto;width:80%}.heroHome_wrapper[data-v-04fc74ed]{align-items:flex-end}.header_mobile[data-v-04fc74ed],.heroHome_wrapper[data-v-04fc74ed]{display:flex;flex-direction:column}.header_mobile[data-v-04fc74ed]{align-items:center}.header_mobile__links-wrapper[data-v-04fc74ed]{display:flex;justify-content:center;flex-wrap:wrap}.header_mobile__link[data-v-04fc74ed]{margin-right:5px;margin-bottom:10px;margin-left:5px;text-align:center;min-width:190px;padding:5px;width:45%}h1[data-v-04fc74ed]{color:#575153;font-size:100px;font-weight:700;letter-spacing:22.5px;line-height:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a[data-v-04fc74ed],h1[data-v-04fc74ed]{font-family:Montserrat,sans-serif;text-transform:uppercase}a[data-v-04fc74ed]{display:inline-flex;border:2px solid #737373;width:342px;height:59px;justify-content:center;align-items:center;color:#454647;font-size:16px;font-weight:400;letter-spacing:3.2px}a[data-v-04fc74ed]:hover{background-color:#00c8c8;border:none;color:#f8f8f8;text-decoration:none}@media screen and (min-width:768px){#carousel-1[data-v-04fc74ed]{display:block}.header_mobile[data-v-04fc74ed]{display:none}.heroHome[data-v-04fc74ed]{width:100%}h1[data-v-04fc74ed]{font-size:200px}a[data-v-04fc74ed]{align-self:flex-end;background-color:#575153;color:#fff}}@media screen and (min-width:1500px){h1[data-v-04fc74ed]{font-size:450px}}",""]),t.exports=r},364:function(t,e,o){"use strict";o(355)},365:function(t,e,o){var r=o(71)(!1);r.push([t.i,".items{border-top:1px solid #eee;margin:62px auto;padding-top:54px;padding-bottom:62px;width:80%}.items_content,.items_wrapper{display:flex;flex-wrap:wrap;justify-content:space-between}.items_wrapper{width:49%}.items_wrapper:last-of-type .item:last-of-type{order:-1}.items a{font-weight:700;line-height:20px;color:#727272;font-family:Montserrat,sans-serif;font-size:13px;padding:0;text-align:left;text-transform:uppercase}.items a:hover{color:#00c8c8}.items .nav{margin-bottom:61px}img{width:100%;height:auto}",""]),t.exports=r},366:function(t,e,o){"use strict";o(358)},367:function(t,e,o){var r=o(71)(!1);r.push([t.i,".lookbook[data-v-53460d15]{align-items:center;background-color:#f8f8f8;display:flex;flex-wrap:wrap;justify-content:space-between;padding-top:43px;padding-right:57px;padding-left:39px;width:32%}.text[data-v-53460d15]{display:flex;flex-direction:column;align-items:flex-end;margin-bottom:85px;width:290px}.title[data-v-53460d15]{color:#575153;font-family:Montserrat,sans-serif;font-size:48px;font-weight:300;letter-spacing:normal;line-height:54px;margin-bottom:29px;text-align:right;text-transform:uppercase}.title span[data-v-53460d15]{font-weight:700}.description[data-v-53460d15]{color:#727272;font-family:Roboto,sans-serif;font-size:15px;line-height:22px;text-align:right;line-height:normal;margin-bottom:31px}img[data-v-53460d15]{width:41%}a[data-v-53460d15]{color:#454647;font-family:Montserrat;font-size:16px;text-align:center;text-transform:uppercase;letter-spacing:3.2px;border:2px solid #737373;background-color:transparent;padding:23px 34px 24px 33px}a[data-v-53460d15]:hover{background-color:#00c8c8;border-color:#00c8c8;color:#f8f8f8;text-decoration:none}@media screen and (max-width:768px){.lookbook[data-v-53460d15]{flex-direction:column;padding:5px;width:100%}.text[data-v-53460d15]{align-items:stretch}}",""]),t.exports=r},371:function(t,e,o){var content=o(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("1b7833da",content,!0,{sourceMap:!1})},375:function(t,e,o){"use strict";o.r(e);var r={name:"HeroHome",props:{title:{type:String},links:{type:Array,required:!0}}},n=(o(362),o(61)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"heroHome"},[o("b-carousel",{attrs:{id:"carousel-1",interval:4e3,fade:!0,controls:"",background:"#ababab"}},t._l(t.links,(function(link){return o("b-carousel-slide",{key:link.id,attrs:{"img-src":link.background,"img-alt":link.title}},[o("div",{staticClass:"heroHome_wrapper"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("nuxt-link",{attrs:{to:link.url}},[t._v(t._s(link.title))])],1)])})),1),t._v(" "),o("div",{staticClass:"header_mobile"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"header_mobile__links-wrapper"},t._l(t.links,(function(link){return o("nuxt-link",{key:link.id,staticClass:"header_mobile__link",attrs:{to:link.url}},[t._v(t._s(link.title))])})),1)])],1)}),[],!1,null,"04fc74ed",null);e.default=component.exports},376:function(t,e,o){"use strict";o.r(e);var r={},n=(o(364),o(61)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"items"},[o("div",[o("b-nav",[o("b-nav-item",{attrs:{active:""}},[t._v("Popular")]),t._v(" "),o("b-nav-item",[t._v("New arrivals")]),t._v(" "),o("b-nav-item",[t._v("Best sellers")]),t._v(" "),o("b-nav-item",[t._v("Special offers")]),t._v(" "),o("b-nav-item",[t._v("Coming soon")])],1)],1),t._v(" "),o("div",{staticClass:"items_content"},[o("div",{staticClass:"items_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=314",price:"20.47$",thumbs:[{id:1,title:"Thumb 1",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=317",price:"20.47$",thumbs:[{id:2,title:"Thumb 2",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/870/704/?image=323",price:"20.47$",thumbs:[{id:3,title:"Thumb 3",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}})],1),t._v(" "),o("div",{staticClass:"items_wrapper"},[o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=350",price:"20.47$",thumbs:[{id:4,title:"Thumb 4",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/420/500/?image=352",price:"20.47$",thumbs:[{id:5,title:"Thumb 5",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{imgSrc:"https://picsum.photos/870/704/?image=327",price:"20.47$",thumbs:[{id:6,title:"Thumb 6",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Item:o(359).default})},377:function(t,e,o){"use strict";o.r(e);var r={name:"Lookbook",props:{title:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!0},imgSrc:{type:String,required:!0}}},n=(o(366),o(61)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lookbook"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"imgSrc"}],attrs:{src:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=",alt:"lookbook image"}}),t._v(" "),o("div",{staticClass:"text"},[o("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("nuxt-link",{attrs:{to:"/lookbooks"+t.url}},[t._v("View now")])],1)])}),[],!1,null,"53460d15",null);e.default=component.exports},384:function(t,e,o){"use strict";o(371)},385:function(t,e,o){var r=o(71)(!1);r.push([t.i,".hero_wrapper{padding-top:29px}.lookbooks_wrapper{display:flex;flex-direction:column;justify-content:space-between}.carousel-caption{top:0}@media screen and (min-width:768px){.hero_wrapper{padding-top:85px}.lookbooks_wrapper{flex-direction:row}}",""]),t.exports=r},393:function(t,e,o){"use strict";o.r(e);var r={asyncData:function(){return{lookbooks:[{id:1,title:"Men's lookbook",description:"Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.",url:"/men",imgSrc:"/silhouette.png"},{id:2,title:"Women's lookbook",description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames . Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.",url:"/women",imgSrc:"/silhouette.png"},{id:3,title:"Your lookbook",description:"See an item you like and click the  button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!",url:"/your",imgSrc:"/silhouette.png"}]}}},n=(o(384),o(61)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hero_wrapper"},[o("HeroHome",{attrs:{title:"Ave",links:[{id:1,title:"Shop men's collection",url:"/men",background:"https://picsum.photos/2053/920/?image=275"},{id:2,title:"Shop women's collection",url:"/women",background:"https://picsum.photos/2053/920/?image=280"}]}}),t._v(" "),o("Items"),t._v(" "),o("div",{staticClass:"lookbooks_wrapper"},t._l(t.lookbooks,(function(t){return o("Lookbook",{key:t.id,attrs:{title:t.title,description:t.description,url:t.url,imgSrc:t.imgSrc}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroHome:o(375).default,Items:o(376).default,Lookbook:o(377).default})}}]);