(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{481:function(t,o,e){var content=e(491);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("6fb308b6",content,!0,{sourceMap:!1})},490:function(t,o,e){"use strict";var n=e(481);e.n(n).a},491:function(t,o,e){var n=e(62),r=e(261),c=e(492);o=n(!1);var d=r(c);o.push([t.i,"#post[data-v-2cc0c88a]{margin-top:8rem}.title-bg[data-v-2cc0c88a]{width:100%;max-width:100%;height:60px;position:fixed;bottom:0;left:0;padding:.5%;margin:0;text-align:center;background:url("+d+");background-size:contain;background-repeat:repeat;text-shadow:.2rem -.2rem red;box-shadow:0 -5px 10px 0 red}.title-bg a[data-v-2cc0c88a]{font-family:Darker Grotesque,sans-serif;font-size:3rem;font-weight:800;color:#fff;position:relative;bottom:10px;margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.post-thumbnail[data-v-2cc0c88a]{width:auto;height:25rem;background-size:contain;background-position:50%;background-repeat:no-repeat}.post-content[data-v-2cc0c88a]{margin:5% auto;width:80%;max-width:90%;display:grid;grid-template-columns:1fr;grid-row-gap:20px;row-gap:20px}.post-content p[data-v-2cc0c88a]{white-space:pre-line}@media (min-width:35rem){.title-bg[data-v-2cc0c88a]{width:100%;max-width:100%;height:100px;position:fixed;bottom:0;left:0;padding:.5%;margin:0;text-align:center;background:url("+d+");background-size:contain;background-repeat:repeat;box-shadow:0 -10px 15px 0 red}.description[data-v-2cc0c88a]{display:block;padding:2%;margin:0 10% 10%;background-color:#226ad3;color:#fff;font-size:2rem}.title-bg a[data-v-2cc0c88a]{font-family:Darker Grotesque,sans-serif;font-size:6rem;font-weight:800;color:#fff;position:relative;bottom:40px;margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.instagram[data-v-2cc0c88a]{display:block;position:absolute;bottom:10px;left:0}#post[data-v-2cc0c88a]{z-index:300}.post-content[data-v-2cc0c88a]{margin:5% auto;width:80%;max-width:90%;display:grid;grid-template-columns:repeat(2,1fr);grid-row-gap:20px;row-gap:20px;grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px}}",""]),t.exports=o},492:function(t,o,e){t.exports=e.p+"img/429abfe.png"},497:function(t,o,e){"use strict";e.r(o);var n={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/archive/"+t.params.postId,{version:"published"}).then((function(t){return{blok:t.data.story.content,image:t.data.story.content.thumbnail,title:t.data.story.content.title,content:t.data.story.content.content,photo1:t.data.story.content.photo1,photo2:t.data.story.content.photo2,instagram:t.data.story.content.instagram}}))},mounted:function(){this.$storybridge.on("change",(function(){location.reload()}))}},r=(e(490),e(47)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"post"}},[e("div",{staticClass:"title-bg"},[e("a",{staticClass:"instagram",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.instagram.url}},[t._v(t._s(t.title))])]),t._v(" "),e("section",{staticClass:"post-content"},[e("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.photo1+")"}}),t._v(" "),e("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.photo2+")"}})]),t._v(" "),e("div",{staticClass:"description"},[e("p",[t._v(" "+t._s(t.content))])])])}),[],!1,null,"2cc0c88a",null);o.default=component.exports}}]);