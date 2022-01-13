(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5,6,7,8],{233:function(t,e,o){var content=o(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("51685c80",content,!0,{sourceMap:!1})},234:function(t,e,o){var content=o(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("3c8e49d7",content,!0,{sourceMap:!1})},237:function(t,e,o){"use strict";o(233)},238:function(t,e,o){var r=o(30)(!1);r.push([t.i,".actions{display:flex;justify-content:space-between;width:120px;margin:auto}.actions div{background-color:#727272;width:30px;height:30px;border-radius:15px;display:flex;justify-content:center;align-items:center}.actions div:hover{background-color:#00c8c8}.item .menu{background-color:#fff;box-shadow:0 0 24px rgba(0,0,0,.14);position:absolute;display:none;flex-direction:column;align-items:center;align-self:flex-end;left:0;right:0;bottom:-132px;padding:21px 55px 17px;z-index:999999}.menu .title{color:#727272;font-family:Montserrat;font-size:13px;font-weight:700;line-height:20px;text-align:center;text-transform:uppercase}.menu .description{color:#8e8c8c;font-family:Roboto;font-size:15px;line-height:normal;text-align:center;line-height:22px;line-height:20px}",""]),t.exports=r},240:function(t,e,o){"use strict";o.r(e);var r=o(34),n={name:"ItemMenu",props:{title:{type:String,required:!0},description:{type:String,required:!0}},computed:{faCompressAlt:()=>r.a,faShoppingCart:()=>r.e}},l=(o(237),o(12)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu"},[o("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),o("div",{staticClass:"actions"},[o("div",[o("fa",{attrs:{icon:t.faShoppingCart,color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:"heart",color:"white"}})],1),t._v(" "),o("div",[o("fa",{attrs:{icon:t.faCompressAlt,color:"white"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,o){var content=o(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("096feb0f",content,!0,{sourceMap:!1})},243:function(t,e,o){var content=o(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("76eb7cd1",content,!0,{sourceMap:!1})},244:function(t,e,o){"use strict";o(234)},245:function(t,e,o){var r=o(30)(!1);r.push([t.i,".item{display:flex;position:relative}.item:hover{box-shadow:0 0 24px rgba(0,0,0,.14)}.item:hover .infoIcon,.item:hover .menu,.item:hover .thumbs{display:flex}.items_wrapper:first-of-type .item:nth-of-type(3){margin-top:2%}.items_wrapper:last-of-type .item:nth-of-type(3){margin-bottom:2%}.item .price{color:#9a9a9a;font-family:Montserrat;font-size:21px;font-weight:300;text-align:left;text-transform:uppercase;letter-spacing:1.05px;top:15px;left:15px}.infoIcon,.item .price{display:none;position:absolute}.infoIcon{top:calc(50% - 24px);left:calc(50% - 24px);font-size:48px}.thumbs{position:absolute;top:15px;right:15px;width:10%;display:none;flex-direction:column}.thumbs img,.thumbs img[lazy=loading]{width:100%;height:auto;margin-bottom:10px}",""]),t.exports=r},246:function(t,e,o){"use strict";o.r(e);var r=o(34),n={name:"Item",props:{id:{type:String},img:{type:Object,required:!0},price:{type:String,required:!0},thumbs:{type:Array}},computed:{faInfoCircle:()=>r.c},mounted(){var image=document.querySelector("#item".concat(this.id));new IntersectionObserver((function(t){t.forEach((t=>{if(t.isIntersecting){var picture=t.target.children[0],e=picture.getAttribute("data-srcset"),o=t.target.children[3].children[0],r=o.getAttribute("data-src");picture.setAttribute("srcset",e),o.setAttribute("src",r),this.unobserve(t.target)}}))})).observe(image)}},l=(o(244),o(12)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item",attrs:{id:"item"+t.id}},[o("img",{style:{maxWidth:t.img.legacy["3"===t.id||"4"===t.id?"big":"small"].split("/")[3]+"px",maxHeight:t.img.legacy["3"===t.id||"4"===t.id?"big":"small"].split("/")[4]+"px"},attrs:{"data-srcset":t.img.webp.small+" 420w, "+("3"===t.id||"4"===t.id?t.img.webp.big+" 760w,":"")+" "+t.img.legacy.small+" 420w, "+("3"===t.id||"4"===t.id?t.img.legacy.big+" 760w":""),alt:""}}),t._v(" "),o("span",{staticClass:"price"},[t._v(t._s(t.price))]),t._v(" "),o("fa",{staticClass:"infoIcon",attrs:{icon:t.faInfoCircle,color:"white"}}),t._v(" "),o("div",{staticClass:"thumbs"},t._l(t.thumbs,(function(t){return o("img",{key:t.id,attrs:{"data-src":t.src,alt:t.title}})})),0),t._v(" "),o("ItemMenu",{attrs:{title:"this is a title",description:"And this is a description"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemMenu:o(240).default})},249:function(t,e,o){"use strict";o(242)},250:function(t,e,o){var r=o(30)(!1);r.push([t.i,".heroHome[data-v-9454943a]{text-shadow:1px 1px 2px #333;min-height:220px}.heroHome_wrapper-0[data-v-9454943a],.heroHome_wrapper-1[data-v-9454943a]{display:flex;flex-direction:column;align-items:flex-end;position:relative;padding-bottom:44.81%;background-repeat:no-repeat;background-size:cover;background-position:50%}.heroHome_link-0[data-v-9454943a],.heroHome_link-1[data-v-9454943a]{display:inline-flex;border:2px solid #737373;font-family:Montserrat,sans-serif;width:250px;height:30px;justify-content:center;align-items:center;color:#454647;font-size:11px;font-weight:400;text-transform:uppercase;letter-spacing:3.2px;position:absolute;margin-right:20px}.heroHome_link-0[data-v-9454943a]:hover,.heroHome_link-1[data-v-9454943a]:hover{background-color:#00c8c8;border:none;color:#f8f8f8;text-decoration:none}.heroHome_link-0[data-v-9454943a]{bottom:35%}.heroHome_link-1[data-v-9454943a]{bottom:10%;border:2px solid #fff;color:#fff}h1[data-v-9454943a]{color:#575153;font-family:Montserrat,sans-serif;font-size:50px;font-weight:700;text-transform:uppercase;letter-spacing:22.5px;line-height:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;margin-right:20px}@media screen and (min-width:768px){.heroHome[data-v-9454943a]{min-height:330px}.heroHome_link-0[data-v-9454943a],.heroHome_link-1[data-v-9454943a]{height:40px;background-color:#575153;color:#fff;width:342px;height:59px;font-size:16px}.heroHome_link-0[data-v-9454943a]{bottom:10%;color:#fff}.heroHome_link-1[data-v-9454943a]{border-color:#737373}h1[data-v-9454943a]{font-size:200px}}@media screen and (min-width:1500px){h1[data-v-9454943a]{font-size:450px}}",""]),t.exports=r},251:function(t,e,o){"use strict";o(243)},252:function(t,e,o){var r=o(30)(!1);r.push([t.i,'.items{border-top:1px solid #eee;margin:62px auto;padding-top:54px;padding-bottom:62px;width:80%}.items__nav ul{padding-left:0;list-style-type:none;display:flex;flex-wrap:wrap;justify-content:space-around}.items_content{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:10px}.items_content_wrapper{display:grid;grid-gap:10px;grid-template-areas:"item" "item" "item"}.items_content_wrapper>div{min-height:170px}.items_content_wrapper:first-of-type>div:not(:nth-of-type(3)),.items_content_wrapper:last-of-type>div:not(:first-of-type){min-height:300px}.items a{font-weight:700;line-height:20px;color:#727272;font-family:Montserrat,sans-serif;font-size:13px;padding:0;text-align:left;text-transform:uppercase}.items a:hover{color:#00c8c8}.items .nav{margin-bottom:61px}img{width:100%;height:auto}@media screen and (min-width:480px){.items_content{grid-template-columns:repeat(2,1fr)}.items_content_wrapper:first-of-type{grid-template-areas:"top-item-left top-item-right" "bottom-item bottom-item"}.items_content_wrapper:first-of-type .item:last-of-type{grid-area:bottom-item}.items_content_wrapper:last-of-type{grid-template-areas:"top-item top-item" "bottom-item-left bottom-item-right"}.items_content_wrapper:last-of-type .item:first-of-type{grid-area:top-item}}@media screen and (min-width:768px){.items_content{grid-template-columns:repeat(2,1fr)}.items_content_wrapper>div{min-height:300px}}',""]),t.exports=r},256:function(t,e,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("1b7833da",content,!0,{sourceMap:!1})},264:function(t,e,o){"use strict";o.r(e);var r=o(257),n=o.n(r),l=(o(258),o(259),{name:"HeroHome",props:{title:{type:String},links:{type:Array,required:!0}},components:{VueSlickCarousel:n.a},mounted(){var t=document.querySelector(".heroHome"),e=!1;new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?(e=!0,this.$refs.carousel.play()):e&&(e=!1,this.$refs.carousel.pause())}))})).observe(t)}}),m=(o(249),o(12)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"heroHome"},[o("VueSlickCarousel",{ref:"carousel",staticClass:"heroHome_slider",attrs:{arrows:!1,dots:!0,fade:!0,autoplay:!0,mobileFirst:!0,lazyLoad:"progressive"}},t._l(t.links,(function(link,e){return o("div",{key:link.id},[o("div",{class:"heroHome_wrapper-"+e},[o("img",{attrs:{srcset:link.backgroundWebp.small+" 300w, "+link.backgroundWebp.medium+" 600w, "+link.backgroundWebp.big+" 900w, "+link.backgroundWebp.w1200+" 1200w, "+link.backgroundWebp.w1500+" 1500w, "+link.backgroundWebp.w2053+" 2053w",sizes:"100vw",alt:""}}),t._v(" "),o("h1",[t._v(t._s(t.title))]),t._v(" "),o("nuxt-link",{class:"heroHome_link-"+e,attrs:{to:link.url}},[t._v(t._s(link.title))])],1)])})),0)],1)}),[],!1,null,"9454943a",null);e.default=component.exports},265:function(t,e,o){"use strict";o.r(e);var r={},n=(o(251),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"items",attrs:{id:"items"}},[t._m(0),t._v(" "),o("div",{staticClass:"items_content"},[o("div",{staticClass:"items_content_wrapper"},[o("Item",{attrs:{id:"1",img:{webp:{small:"https://picsum.photos/420/500.webp?image=314"},legacy:{small:"https://picsum.photos/420/500/?image=314"}},price:"20.47$",thumbs:[{id:1,title:"Thumb 1",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{id:"2",img:{webp:{small:"https://picsum.photos/420/500.webp?image=317"},legacy:{small:"https://picsum.photos/420/500/?image=317"}},price:"20.47$",thumbs:[{id:2,title:"Thumb 2",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{id:"3",img:{webp:{big:"https://picsum.photos/760/500.webp?image=323",small:"https://picsum.photos/420/277.webp?image=323"},legacy:{big:"https://picsum.photos/760/500/?image=323",small:"https://picsum.photos/420/277?image=323"}},price:"20.47$",thumbs:[{id:3,title:"Thumb 3",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}})],1),t._v(" "),o("div",{staticClass:"items_content_wrapper"},[o("Item",{attrs:{id:"4",img:{webp:{big:"https://picsum.photos/760/500.webp?image=350",small:"https://picsum.photos/420/277.webp?image=350"},legacy:{big:"https://picsum.photos/760/500/?image=350",small:"https://picsum.photos/420/277?image=350"}},price:"20.47$",thumbs:[{id:4,title:"Thumb 4",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{id:"5",img:{webp:{small:"https://picsum.photos/420/500.webp?image=352"},legacy:{small:"https://picsum.photos/420/500/?image=352"}},price:"20.47$",thumbs:[{id:5,title:"Thumb 5",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}}),t._v(" "),o("Item",{attrs:{id:"6",img:{webp:{small:"https://picsum.photos/420/500.webp?image=327"},legacy:{small:"https://picsum.photos/420/500/?image=327"}},price:"20.47$",thumbs:[{id:6,title:"Thumb 6",src:"https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"}]}})],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"items__nav"},[o("ul",[o("li",{attrs:{active:""}},[t._v("Popular")]),t._v(" "),o("li",[t._v("New arrivals")]),t._v(" "),o("li",[t._v("Best sellers")]),t._v(" "),o("li",[t._v("Special offers")]),t._v(" "),o("li",[t._v("Coming soon")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Item:o(246).default})},272:function(t,e,o){"use strict";o(256)},273:function(t,e,o){var r=o(30)(!1);r.push([t.i,".slick-slide img{position:absolute}.slick-next{right:0!important}.slick-prev{left:0!important;z-index:1}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.hero_wrapper{padding-top:29px}.lookbooks_wrapper{display:flex;flex-direction:column;justify-content:space-between}.carousel-caption{top:0}@media screen and (min-width:768px){.hero_wrapper{padding-top:85px}.lookbooks_wrapper{flex-direction:row}}",""]),t.exports=r},285:function(t,e,o){"use strict";o.r(e);var r={asyncData:()=>({lookbooks:[{id:1,title:"Men's lookbook",description:"Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.",url:"/men",imgSrc:"/silhouette.png"},{id:2,title:"Women's lookbook",description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames . Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.",url:"/women",imgSrc:"/silhouette.png"},{id:3,title:"Your lookbook",description:"See an item you like and click the  button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!",url:"/your",imgSrc:"/silhouette.png"}],loadedComponents:[]}),mounted(){var t=document.querySelector("#lookbook"),component=this;new IntersectionObserver((function(t){t.forEach((t=>{t.isIntersecting&&(component.loadedComponents.push(t.target.getAttribute("id").charAt(0).toUpperCase()+t.target.getAttribute("id").slice(1)),this.unobserve(t.target))}))})).observe(t)}},n=r,l=(o(272),o(12)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hero_wrapper"},[o("HeroHome",{attrs:{title:"Ave",links:[{id:1,title:"Shop men's collection",url:"/men",background:{w2053:"https://picsum.photos/2053/920/?image=275",w1500:"https://picsum.photos/1500/673/?image=275",w1200:"https://picsum.photos/1200/538/?image=275",big:"https://picsum.photos/900/404/?image=275",medium:"https://picsum.photos/600/269/?image=275",small:"https://picsum.photos/300/135/?image=275"},backgroundWebp:{w2053:"https://picsum.photos/2053/920.webp?image=275",w1500:"https://picsum.photos/1500/673.webp?image=275",w1200:"https://picsum.photos/1200/538.webp?image=275",big:"https://picsum.photos/900/404.webp?image=275",medium:"https://picsum.photos/600/269.webp?image=275",small:"https://picsum.photos/300/135.webp?image=275"}},{id:2,title:"Shop women's collection",url:"/women",background:{w2053:"https://picsum.photos/2053/920/?image=280",w1500:"https://picsum.photos/1500/673/?image=280",w1200:"https://picsum.photos/1200/538/?image=280",big:"https://picsum.photos/900/404/?image=280",medium:"https://picsum.photos/600/269/?image=280",small:"https://picsum.photos/300/135/?image=280"},backgroundWebp:{w2053:"https://picsum.photos/2053/920.webp?image=280",w1500:"https://picsum.photos/1500/673.webp?image=280",w1200:"https://picsum.photos/1200/538.webp?image=280",big:"https://picsum.photos/900/404.webp?image=280",medium:"https://picsum.photos/600/269.webp?image=280",small:"https://picsum.photos/300/135.webp?image=280"}}]}}),t._v(" "),o("Items"),t._v(" "),o("div",{staticClass:"lookbooks_wrapper",attrs:{id:"lookbook"}},t._l(t.lookbooks,(function(e){return o(t.loadedComponents.find((function(t){return"Lookbook"===t})),{key:e.id,tag:"component",attrs:{title:e.title,description:e.description,url:e.url,imgSrc:e.imgSrc}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroHome:o(264).default,Items:o(265).default})}}]);