(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{475:function(t,e,r){var content=r(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("b26ba306",content,!0,{sourceMap:!1})},477:function(t,e,r){"use strict";var n=r(475);r.n(n).a},478:function(t,e,r){(e=r(62)(!1)).push([t.i,"a[data-v-0ee9ff96]{text-decoration:none;color:#000}.post-preview[data-v-0ee9ff96]{border-radius:3px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.5);margin:auto;width:20rem;height:20rem;background-color:#fff;z-index:100}.post-preview article[data-v-0ee9ff96]{display:grid;grid-template-columns:1fr;grid-template-rows:2fr 1fr;height:100%}.post-preview-thumbnail[data-v-0ee9ff96]{background-position:50%;background-size:cover;width:20rem;height:20rem;transition:opacity 1s;z-index:2}.post-preview-thumbnail-hover[data-v-0ee9ff96]{display:none}.post-preview-thumbnail[data-v-0ee9ff96]:hover{opacity:0}.post-preview-content[data-v-0ee9ff96]{text-align:center}@media (min-width:900px){.post-preview[data-v-0ee9ff96]{width:25rem;height:25rem}.post-preview-thumbnail[data-v-0ee9ff96]{z-index:2}.post-preview-thumbnail[data-v-0ee9ff96],.post-preview-thumbnail-hover[data-v-0ee9ff96]{background-position:50%;background-size:cover;width:25rem;height:25rem;transition:opacity 1s}.post-preview-thumbnail-hover[data-v-0ee9ff96]{display:block;position:absolute;z-index:1}}",""]),t.exports=e},479:function(t,e,r){var content=r(487);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("c194cd76",content,!0,{sourceMap:!1})},482:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},thumbnailImageHover:{type:String,required:!0},id:{type:String,required:!0}}},o=(r(477),r(47)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"post-preview",attrs:{to:"/archive/"+this.id}},[e("article",[e("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+this.thumbnailImage+")"}}),this._v(" "),e("div",{staticClass:"post-preview-thumbnail-hover",style:{backgroundImage:"url("+this.thumbnailImageHover+")"}}),this._v(" "),e("div",{staticClass:"post-preview-content"})])])}),[],!1,null,"0ee9ff96",null);e.a=component.exports},486:function(t,e,r){"use strict";var n=r(479);r.n(n).a},487:function(t,e,r){(e=r(62)(!1)).push([t.i,"#posts[data-v-65839d6c]{padding-bottom:5rem;display:grid;grid-template-columns:1fr;grid-row-gap:2rem;row-gap:2rem;text-align:center;z-index:100}@media (min-width:35rem){#posts[data-v-65839d6c]{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2rem;row-gap:2rem;text-align:center}#posts .post-preview[data-v-65839d6c]{margin:auto}}",""]),t.exports=e},494:function(t,e,r){"use strict";r.r(e);var n={components:{PostPreview:r(482).a},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/",{version:t.idDev?"draft":"published",starts_with:"archive/"}).then((function(t){return{posts:t.data.stories.map((function(t){return{id:t.slug,title:t.content.title,previewText:t.content.excerpt,thumbnailUrl:t.content.thumbnail,thumbnailHoverUrl:t.content.thumbnailHover}}))}}))}},o=(r(486),r(47)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"posts"}},this._l(this.posts,(function(t){return e("PostPreview",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,thumbnailImageHover:t.thumbnailHoverUrl,id:t.id}})})),1)}),[],!1,null,"65839d6c",null);e.default=component.exports}}]);