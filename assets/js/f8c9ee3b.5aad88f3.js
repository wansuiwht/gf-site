"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[7960],{663838:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray/\u6570\u7ec4\u7c7b\u578b-garray","title":"\u6570\u7ec4\u7c7b\u578b-garray","description":"GoFrame\u6846\u67b6\u4e2d\u7684\u6570\u7ec4\u7c7b\u578bgarray\u53ca\u5176\u57fa\u672c\u529f\u80fd\u3002\u901a\u8fc7garray\u6a21\u5757\uff0c\u7528\u6237\u80fd\u591f\u4f7f\u7528\u5e76\u53d1\u5b89\u5168\u7684\u6570\u7ec4\u5bb9\u5668\uff0c\u652f\u6301\u666e\u901a\u6570\u7ec4\u4e0e\u6392\u5e8f\u6570\u7ec4\uff0c\u63d0\u4f9b\u5bf9\u6570\u636e\u9879\u552f\u4e00\u6027\u77eb\u6b63\u3001int/string/interface{}\u6570\u636e\u7c7b\u578b\u7684\u652f\u6301\u53ca\u8be6\u7ec6\u7684\u63a5\u53e3\u6587\u6863\u7b49\u529f\u80fd\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray/\u6570\u7ec4\u7c7b\u578b-garray.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray","slug":"/docs/components/container-garray","permalink":"/docs/components/container-garray","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6570\u7ec4\u7c7b\u578b-garray/\u6570\u7ec4\u7c7b\u578b-garray.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/container-garray","title":"\u6570\u7ec4\u7c7b\u578b-garray","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","garray","\u6570\u7ec4\u5bb9\u5668","\u5e76\u53d1\u5b89\u5168","\u6392\u5e8f\u6570\u7ec4","\u63a5\u53e3\u6587\u6863","\u6570\u636e\u7c7b\u578b","\u5de5\u5177\u5305","\u6570\u636e\u9879\u552f\u4e00\u6027"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684\u6570\u7ec4\u7c7b\u578bgarray\u53ca\u5176\u57fa\u672c\u529f\u80fd\u3002\u901a\u8fc7garray\u6a21\u5757\uff0c\u7528\u6237\u80fd\u591f\u4f7f\u7528\u5e76\u53d1\u5b89\u5168\u7684\u6570\u7ec4\u5bb9\u5668\uff0c\u652f\u6301\u666e\u901a\u6570\u7ec4\u4e0e\u6392\u5e8f\u6570\u7ec4\uff0c\u63d0\u4f9b\u5bf9\u6570\u636e\u9879\u552f\u4e00\u6027\u77eb\u6b63\u3001int/string/interface{}\u6570\u636e\u7c7b\u578b\u7684\u652f\u6301\u53ca\u8be6\u7ec6\u7684\u63a5\u53e3\u6587\u6863\u7b49\u529f\u80fd\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5b57\u5178\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/docs/components/container-gmap-funcs"},"next":{"title":"\u6570\u7ec4\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/docs/components/container-garray-example"}}');var s=n(474848),o=n(28453),c=n(103514);const i={slug:"/docs/components/container-garray",title:"\u6570\u7ec4\u7c7b\u578b-garray",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","garray","\u6570\u7ec4\u5bb9\u5668","\u5e76\u53d1\u5b89\u5168","\u6392\u5e8f\u6570\u7ec4","\u63a5\u53e3\u6587\u6863","\u6570\u636e\u7c7b\u578b","\u5de5\u5177\u5305","\u6570\u636e\u9879\u552f\u4e00\u6027"],description:"GoFrame\u6846\u67b6\u4e2d\u7684\u6570\u7ec4\u7c7b\u578bgarray\u53ca\u5176\u57fa\u672c\u529f\u80fd\u3002\u901a\u8fc7garray\u6a21\u5757\uff0c\u7528\u6237\u80fd\u591f\u4f7f\u7528\u5e76\u53d1\u5b89\u5168\u7684\u6570\u7ec4\u5bb9\u5668\uff0c\u652f\u6301\u666e\u901a\u6570\u7ec4\u4e0e\u6392\u5e8f\u6570\u7ec4\uff0c\u63d0\u4f9b\u5bf9\u6570\u636e\u9879\u552f\u4e00\u6027\u77eb\u6b63\u3001int/string/interface{}\u6570\u636e\u7c7b\u578b\u7684\u652f\u6301\u53ca\u8be6\u7ec6\u7684\u63a5\u53e3\u6587\u6863\u7b49\u529f\u80fd\u3002"},a=void 0,l={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsx)(r.p,{children:"\u6570\u7ec4\u5bb9\u5668\uff0c\u63d0\u4f9b\u666e\u901a\u6570\u7ec4\uff0c\u53ca\u6392\u5e8f\u6570\u7ec4\uff0c\u652f\u6301\u6570\u636e\u9879\u552f\u4e00\u6027\u77eb\u6b63\uff0c\u652f\u6301\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u63a7\u5236\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,s.jsx)(r.p,{children:"\u6570\u7ec4\u64cd\u4f5c\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/garray"\n'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/garray",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/garray"})}),"\n",(0,s.jsx)(r.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"garray"})," \u6a21\u5757\u4e0b\u7684\u5bf9\u8c61\u53ca\u65b9\u6cd5\u8f83\u591a\uff0c\u5efa\u8bae\u4ed4\u7ec6\u770b\u770b\u63a5\u53e3\u6587\u6863\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"garray"})," \u652f\u6301 ",(0,s.jsx)(r.code,{children:"int"}),"/ ",(0,s.jsx)(r.code,{children:"string"}),"/ ",(0,s.jsx)(r.code,{children:"interface{}"})," \u4e09\u79cd\u5e38\u7528\u7684\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"garray"})," \u652f\u6301\u666e\u901a\u6570\u7ec4\u548c\u6392\u5e8f\u6570\u7ec4\uff0c\u666e\u901a\u6570\u7ec4\u7684\u7ed3\u6784\u4f53\u540d\u79f0\u5b9a\u4e49\u4e3a ",(0,s.jsx)(r.code,{children:"*Array"})," \u683c\u5f0f\uff0c\u6392\u5e8f\u6570\u7ec4\u7684\u7ed3\u6784\u4f53\u540d\u79f0\u5b9a\u4e49\u4e3a ",(0,s.jsx)(r.code,{children:"Sorted*Array"})," \u683c\u5f0f\uff0c\u5982\u4e0b\uff1a","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"Array"}),", ",(0,s.jsx)(r.code,{children:"intArray"}),", ",(0,s.jsx)(r.code,{children:"StrArray"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"SortedArray"}),", ",(0,s.jsx)(r.code,{children:"SortedIntArray"}),", ",(0,s.jsx)(r.code,{children:"SortedStrArray"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u5176\u4e2d\u6392\u5e8f\u6570\u7ec4 ",(0,s.jsx)(r.code,{children:"SortedArray"}),"\uff0c\u9700\u8981\u7ed9\u5b9a\u6392\u5e8f\u6bd4\u8f83\u65b9\u6cd5\uff0c\u5728\u5de5\u5177\u5305 ",(0,s.jsx)(r.code,{children:"gutil"})," \u4e2d\u4e5f\u5b9a\u4e49\u4e86\u5f88\u591a ",(0,s.jsx)(r.code,{children:"Comparator*"})," \u6bd4\u8f83\u65b9\u6cd5"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(c.A,{})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},103514:(e,r,n)=>{n.d(r,{A:()=>j});n(296540);var t=n(634164),s=n(944718),o=n(328774),c=n(853465),i=n(316654),a=n(721312),l=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function h(e){let{href:r,children:n}=e;return(0,u.jsx)(o.A,{href:r,className:(0,t.A)("card padding--lg",d.cardContainer),children:n})}function g(e){let{href:r,icon:n,title:s,description:o}=e;return(0,u.jsxs)(h,{href:r,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,t.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,t.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function m(e){let{item:r}=e;const n=(0,s.Nr)(r),t=function(){const{selectMessage:e}=(0,c.W)();return r=>e(r,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return n?(0,u.jsx)(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:r.description??t(r.items.length)}):null}function p(e){let{item:r}=e;const n=(0,i.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,s.cC)(r.docId??void 0);return(0,u.jsx)(g,{href:r.href,icon:n,title:r.label,description:r.description??t?.description})}function f(e){let{item:r}=e;switch(r.type){case"link":return(0,u.jsx)(p,{item:r});case"category":return(0,u.jsx)(m,{item:r});default:throw new Error(`unknown item type ${JSON.stringify(r)}`)}}function x(e){let{className:r}=e;const n=(0,s.$S)();return(0,u.jsx)(j,{items:n.items,className:r})}function j(e){const{items:r,className:n}=e;if(!r)return(0,u.jsx)(x,{...e});const o=(0,s.d1)(r);return(0,u.jsx)("section",{className:(0,t.A)("row",n),children:o.map(((e,r)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},r)))})}},853465:(e,r,n)=>{n.d(r,{W:()=>l});var t=n(296540),s=n(144586);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((r=>e.includes(r)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,t.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:c(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(r,n)=>function(e,r,n){const t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const s=n.select(r),o=n.pluralForms.indexOf(s);return t[Math.min(o,t.length-1)]}(n,r,e)}}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);