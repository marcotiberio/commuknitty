(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{474:function(e,t,o){var content=o(482);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(63).default)("b25e4044",content,!0,{sourceMap:!1})},481:function(e,t,o){"use strict";var n=o(474);o.n(n).a},482:function(e,t,o){(t=o(62)(!1)).push([e.i,".logo[data-v-ae58a406]{display:none}#about-page[data-v-ae58a406]{width:100vw;height:100vh;margin:0;position:fixed;top:0;left:0;background-color:#226ad3}#about-page-main[data-v-ae58a406]{margin-top:30%;padding:2% 1%;margin-left:auto;margin-right:auto;width:80%;background-color:#fff;box-shadow:15px -15px 15px rgba(0,0,0,.5);background-image:linear-gradient(90deg,red 50%,#fff 0),linear-gradient(-90deg,red 50%,#fff 0),linear-gradient(0deg,red 50%,#fff 0),linear-gradient(-180deg,red 50%,#fff 0);background-size:12px 4px,12px 4px,4px 12px,4px 12px;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;background-position:0 0,100% 100%,100% 0,0 100%;-webkit-animation:rolling-border-data-v-ae58a406 2s linear infinite;animation:rolling-border-data-v-ae58a406 2s linear infinite}@-webkit-keyframes rolling-border-data-v-ae58a406{0%{background-position:0 0,100% 100%,100% 0,0 100%}to{background-position:36px 0,calc(100% - 36px) 100%,100% 36px,0 calc(100% - 36px)}}@keyframes rolling-border-data-v-ae58a406{0%{background-position:0 0,100% 100%,100% 0,0 100%}to{background-position:36px 0,calc(100% - 36px) 100%,100% 36px,0 calc(100% - 36px)}}#about-page-main p[data-v-ae58a406]{padding:5%;white-space:pre-line;font-family:Old Standard TT,serif;font-size:2rem;color:#226ad3}footer img[data-v-ae58a406]{width:20%;position:fixed;bottom:0;left:0}@media (min-width:35rem){#about-page-main[data-v-ae58a406]{margin:14% 10% 0;background-color:#fff;box-shadow:15px -15px 15px rgba(0,0,0,.5);background-image:linear-gradient(90deg,red 50%,#fff 0),linear-gradient(-90deg,red 50%,#fff 0),linear-gradient(0deg,red 50%,#fff 0),linear-gradient(-180deg,red 50%,#fff 0);background-size:12px 4px,12px 4px,4px 12px,4px 12px;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;background-position:0 0,100% 100%,100% 0,0 100%;-webkit-animation:rolling-border-data-v-ae58a406 2s linear infinite;animation:rolling-border-data-v-ae58a406 2s linear infinite}@-webkit-keyframes rolling-border-data-v-ae58a406{0%{background-position:0 0,100% 100%,100% 0,0 100%}to{background-position:36px 0,calc(100% - 36px) 100%,100% 36px,0 calc(100% - 36px)}}@keyframes rolling-border-data-v-ae58a406{0%{background-position:0 0,100% 100%,100% 0,0 100%}to{background-position:36px 0,calc(100% - 36px) 100%,100% 36px,0 calc(100% - 36px)}}#about-page-main p[data-v-ae58a406]{white-space:pre-line;font-size:2rem;color:#226ad3;padding:3% 5%}footer img[data-v-ae58a406]{width:100px;position:fixed;bottom:0;left:0}}",""]),e.exports=t},489:function(e,t,o){"use strict";o.r(t);var n={asyncData:function(e){return e.app.$storyapi.get("cdn/stories/about",{version:e.idDev?"draft":"published"}).then((function(e){return{blok:e.data.story.content,title:e.data.story.content.title,content:e.data.story.content.content}}))},mounted:function(){this.$storybridge.on("change",(function(){location.reload()}))}},r=(o(481),o(47)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],attrs:{id:"about-page"}},[o("div",{attrs:{id:"about-page-main"}},[o("h1",[e._v(e._s(e.title))]),e._v(" "),o("p",[e._v(e._s(e.content))])]),e._v(" "),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("img",{attrs:{src:"https://a.storyblok.com/f/86071/220x220/95013943a6/icon.png",alt:"Icon Commuknitty"}})])}],!1,null,"ae58a406",null);t.default=component.exports}}]);