(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{366:function(e,t,o){var content=o(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(72).default)("86339442",content,!0,{sourceMap:!1})},389:function(e,t,o){var map={"./static/README.md":390,"./static/favicon.ico":391,"./static/image_black_24dp.svg":392,"./static/london.png":393,"./static/ny.png":394,"./static/paris.png":395,"./static/silhouette.png":396,"./static/thumb.jpg":397};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=389},390:function(e,t){throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> # STATIC\n| \n| **This directory is not required, you can delete it if you don't want to use it.**")},391:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},392:function(e,t){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#D3D3D3"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>')},393:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},394:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},395:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},396:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},397:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},398:function(e,t,o){"use strict";o(366)},399:function(e,t,o){var r=o(71)(!1);r.push([e.i,".lookbook[data-v-547ea6d0]{align-items:center;background-color:#f8f8f8;display:flex;flex-wrap:wrap;justify-content:space-between;padding-top:43px;padding-right:57px;padding-left:39px;width:32%}.text[data-v-547ea6d0]{display:flex;flex-direction:column;align-items:flex-end;margin-bottom:85px;width:290px}.title[data-v-547ea6d0]{color:#575153;font-family:Montserrat,sans-serif;font-size:48px;font-weight:300;letter-spacing:normal;line-height:54px;margin-bottom:29px;text-align:right;text-transform:uppercase}.title span[data-v-547ea6d0]{font-weight:700}.description[data-v-547ea6d0]{color:#727272;font-family:Roboto,sans-serif;font-size:15px;line-height:22px;text-align:right;line-height:normal;margin-bottom:31px}img[data-v-547ea6d0]{width:41%}a[data-v-547ea6d0]{color:#454647;font-family:Montserrat;font-size:16px;text-align:center;text-transform:uppercase;letter-spacing:3.2px;border:2px solid #737373;background-color:transparent;padding:23px 34px 24px 33px}a[data-v-547ea6d0]:hover{background-color:#00c8c8;border-color:#00c8c8;color:#f8f8f8;text-decoration:none}@media screen and (max-width:768px){.lookbook[data-v-547ea6d0]{flex-direction:column;padding:5px;width:100%}.text[data-v-547ea6d0]{align-items:stretch}}",""]),e.exports=r},408:function(e,t,o){"use strict";o.r(t);var r={name:"Lookbook",props:{title:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!0},imgSrc:{type:String,required:!0}}},n=(o(398),o(61)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lookbook"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o(389)("./static"+e.imgSrc),expression:"require('@/static' + imgSrc + '?webp')"}],attrs:{src:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=",alt:"lookbook image",width:"237",height:"437"}}),e._v(" "),r("div",{staticClass:"text"},[r("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),r("p",{staticClass:"description"},[e._v(e._s(e.description))]),e._v(" "),r("nuxt-link",{attrs:{to:"/lookbooks"+e.url}},[e._v("View now")])],1)])}),[],!1,null,"547ea6d0",null);t.default=component.exports}}]);