"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["75723"],{835272:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u7EC4\u7C7B\u578B-garray/\u6570\u7EC4\u7C7B\u578B-garray","title":"\u6570\u7EC4\u7C7B\u578B-garray","description":"GoFrame\u6846\u67B6\u4E2D\u7684\u6570\u7EC4\u7C7B\u578Bgarray\u53CA\u5176\u57FA\u672C\u529F\u80FD\u3002\u901A\u8FC7garray\u6A21\u5757\uFF0C\u7528\u6237\u80FD\u591F\u4F7F\u7528\u5E76\u53D1\u5B89\u5168\u7684\u6570\u7EC4\u5BB9\u5668\uFF0C\u652F\u6301\u666E\u901A\u6570\u7EC4\u4E0E\u6392\u5E8F\u6570\u7EC4\uFF0C\u63D0\u4F9B\u5BF9\u6570\u636E\u9879\u552F\u4E00\u6027\u77EB\u6B63\u3001int/string/interface{}\u6570\u636E\u7C7B\u578B\u7684\u652F\u6301\u53CA\u8BE6\u7EC6\u7684\u63A5\u53E3\u6587\u6863\u7B49\u529F\u80FD\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u7EC4\u7C7B\u578B-garray/\u6570\u7EC4\u7C7B\u578B-garray.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u7EC4\u7C7B\u578B-garray","slug":"/docs/components/container-garray","permalink":"/docs/components/container-garray","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6570\u7EC4\u7C7B\u578B-garray/\u6570\u7EC4\u7C7B\u578B-garray.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/container-garray","title":"\u6570\u7EC4\u7C7B\u578B-garray","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","garray","\u6570\u7EC4\u5BB9\u5668","\u5E76\u53D1\u5B89\u5168","\u6392\u5E8F\u6570\u7EC4","\u63A5\u53E3\u6587\u6863","\u6570\u636E\u7C7B\u578B","\u5DE5\u5177\u5305","\u6570\u636E\u9879\u552F\u4E00\u6027"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684\u6570\u7EC4\u7C7B\u578Bgarray\u53CA\u5176\u57FA\u672C\u529F\u80FD\u3002\u901A\u8FC7garray\u6A21\u5757\uFF0C\u7528\u6237\u80FD\u591F\u4F7F\u7528\u5E76\u53D1\u5B89\u5168\u7684\u6570\u7EC4\u5BB9\u5668\uFF0C\u652F\u6301\u666E\u901A\u6570\u7EC4\u4E0E\u6392\u5E8F\u6570\u7EC4\uFF0C\u63D0\u4F9B\u5BF9\u6570\u636E\u9879\u552F\u4E00\u6027\u77EB\u6B63\u3001int/string/interface{}\u6570\u636E\u7C7B\u578B\u7684\u652F\u6301\u53CA\u8BE6\u7EC6\u7684\u63A5\u53E3\u6587\u6863\u7B49\u529F\u80FD\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5B57\u5178\u7C7B\u578B-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/docs/components/container-gmap-funcs"},"next":{"title":"\u6570\u7EC4\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/docs/components/container-garray-example"}}'),i=n("785893"),o=n("250065"),a=n("203105");let s={slug:"/docs/components/container-garray",title:"\u6570\u7EC4\u7C7B\u578B-garray",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","garray","\u6570\u7EC4\u5BB9\u5668","\u5E76\u53D1\u5B89\u5168","\u6392\u5E8F\u6570\u7EC4","\u63A5\u53E3\u6587\u6863","\u6570\u636E\u7C7B\u578B","\u5DE5\u5177\u5305","\u6570\u636E\u9879\u552F\u4E00\u6027"],description:"GoFrame\u6846\u67B6\u4E2D\u7684\u6570\u7EC4\u7C7B\u578Bgarray\u53CA\u5176\u57FA\u672C\u529F\u80FD\u3002\u901A\u8FC7garray\u6A21\u5757\uFF0C\u7528\u6237\u80FD\u591F\u4F7F\u7528\u5E76\u53D1\u5B89\u5168\u7684\u6570\u7EC4\u5BB9\u5668\uFF0C\u652F\u6301\u666E\u901A\u6570\u7EC4\u4E0E\u6392\u5E8F\u6570\u7EC4\uFF0C\u63D0\u4F9B\u5BF9\u6570\u636E\u9879\u552F\u4E00\u6027\u77EB\u6B63\u3001int/string/interface{}\u6570\u636E\u7C7B\u578B\u7684\u652F\u6301\u53CA\u8BE6\u7EC6\u7684\u63A5\u53E3\u6587\u6863\u7B49\u529F\u80FD\u3002"},c=void 0,l={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,i.jsx)(r.p,{children:"\u6570\u7EC4\u5BB9\u5668\uFF0C\u63D0\u4F9B\u666E\u901A\u6570\u7EC4\uFF0C\u53CA\u6392\u5E8F\u6570\u7EC4\uFF0C\u652F\u6301\u6570\u636E\u9879\u552F\u4E00\u6027\u77EB\u6B63\uFF0C\u652F\u6301\u5E76\u53D1\u5B89\u5168\u5F00\u5173\u63A7\u5236\u3002"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A"]}),"\n",(0,i.jsx)(r.p,{children:"\u6570\u7EC4\u64CD\u4F5C\u3002"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/garray"\n'})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/garray",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/garray"})}),"\n",(0,i.jsx)(r.p,{children:"\u7B80\u8981\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"garray"})," \u6A21\u5757\u4E0B\u7684\u5BF9\u8C61\u53CA\u65B9\u6CD5\u8F83\u591A\uFF0C\u5EFA\u8BAE\u4ED4\u7EC6\u770B\u770B\u63A5\u53E3\u6587\u6863\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"garray"})," \u652F\u6301 ",(0,i.jsx)(r.code,{children:"int"}),"/ ",(0,i.jsx)(r.code,{children:"string"}),"/ ",(0,i.jsx)(r.code,{children:"interface{}"})," \u4E09\u79CD\u5E38\u7528\u7684\u6570\u636E\u7C7B\u578B\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"garray"})," \u652F\u6301\u666E\u901A\u6570\u7EC4\u548C\u6392\u5E8F\u6570\u7EC4\uFF0C\u666E\u901A\u6570\u7EC4\u7684\u7ED3\u6784\u4F53\u540D\u79F0\u5B9A\u4E49\u4E3A ",(0,i.jsx)(r.code,{children:"*Array"})," \u683C\u5F0F\uFF0C\u6392\u5E8F\u6570\u7EC4\u7684\u7ED3\u6784\u4F53\u540D\u79F0\u5B9A\u4E49\u4E3A ",(0,i.jsx)(r.code,{children:"Sorted*Array"})," \u683C\u5F0F\uFF0C\u5982\u4E0B\uFF1A","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"Array"}),", ",(0,i.jsx)(r.code,{children:"intArray"}),", ",(0,i.jsx)(r.code,{children:"StrArray"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"SortedArray"}),", ",(0,i.jsx)(r.code,{children:"SortedIntArray"}),", ",(0,i.jsx)(r.code,{children:"SortedStrArray"})]}),"\n",(0,i.jsxs)(r.li,{children:["\u5176\u4E2D\u6392\u5E8F\u6570\u7EC4 ",(0,i.jsx)(r.code,{children:"SortedArray"}),"\uFF0C\u9700\u8981\u7ED9\u5B9A\u6392\u5E8F\u6BD4\u8F83\u65B9\u6CD5\uFF0C\u5728\u5DE5\u5177\u5305 ",(0,i.jsx)(r.code,{children:"gutil"})," \u4E2D\u4E5F\u5B9A\u4E49\u4E86\u5F88\u591A ",(0,i.jsx)(r.code,{children:"Comparator*"})," \u6BD4\u8F83\u65B9\u6CD5"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,i.jsx)(a.Z,{})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},203105:function(e,r,n){n.d(r,{Z:()=>j});var t=n("785893");n("667294");var i=n("467026"),o=n("698404"),a=n("531183"),s=n("633876"),c=n("266026"),l=n("434751"),d=n("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function h(e){let{href:r,children:n}=e;return(0,t.jsx)(a.Z,{href:r,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function g(e){let{href:r,icon:n,title:o,description:a}=e;return(0,t.jsxs)(h,{href:r,children:[(0,t.jsxs)(d.Z,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),a&&(0,t.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function p(e){let{item:r}=e,n=(0,o.LM)(r),i=function(){let{selectMessage:e}=(0,s.c)();return r=>e(r,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return n?(0,t.jsx)(g,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:r.label,description:r.description??i(r.items.length)}):null}function m(e){let{item:r}=e,n=(0,c.Z)(r.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,o.xz)(r.docId??void 0);return(0,t.jsx)(g,{href:r.href,icon:n,title:r.label,description:r.description??i?.description})}function f(e){let{item:r}=e;switch(r.type){case"link":return(0,t.jsx)(m,{item:r});case"category":return(0,t.jsx)(p,{item:r});default:throw Error(`unknown item type ${JSON.stringify(r)}`)}}function x(e){let{className:r}=e,n=(0,o.jA)();return(0,t.jsx)(j,{items:n.items,className:r})}function j(e){let{items:r,className:n}=e;if(!r)return(0,t.jsx)(x,{...e});let a=(0,o.MN)(r);return(0,t.jsx)("section",{className:(0,i.Z)("row",n),children:a.map((e,r)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(f,{item:e})},r))})}},633876:function(e,r,n){n.d(r,{c:function(){return c}});var t=n(667294),i=n(49931);let o=["zero","one","two","few","many","other"];function a(e){return o.filter(r=>e.includes(r))}let s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,t.useMemo)(()=>{try{return function(e){let r=new Intl.PluralRules(e);return{locale:e,pluralForms:a(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${r.message}
`),s}},[e])}();return{selectMessage:(r,n)=>(function(e,r,n){let t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);let i=n.select(r);return t[Math.min(n.pluralForms.indexOf(i),t.length-1)]})(n,r,e)}}},250065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return a}});var t=n(667294);let i={},o=t.createContext(i);function a(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);