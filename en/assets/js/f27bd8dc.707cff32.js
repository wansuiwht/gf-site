"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["61937"],{105686:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u7CFB\u7EDF\u76F8\u5173","title":"\u7CFB\u7EDF\u76F8\u5173","description":"GoFrame\u6846\u67B6\u4E2D\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u6A21\u5757\uFF0C\u5305\u62EC\u5982\u4F55\u5728\u4E0D\u540C\u5E73\u53F0\u4E0A\u7BA1\u7406\u548C\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u529F\u80FD\uFF0C\u63D0\u4F9B\u7CFB\u7EDF\u7EA7\u522B\u7684\u5DE5\u5177\u548C\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u6709\u6548\u5730\u8FDB\u884C\u8F6F\u4EF6\u5F00\u53D1\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u7CFB\u7EDF\u76F8\u5173.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/docs/components/os","permalink":"/en/2.7.x/docs/components/os","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u7CFB\u7EDF\u76F8\u5173.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/os","title":"\u7CFB\u7EDF\u76F8\u5173","sidebar_position":1,"hide_title":true,"keywords":["\u7CFB\u7EDF\u7BA1\u7406","\u64CD\u4F5C\u7CFB\u7EDF","GoFrame","GoFrame\u6846\u67B6","\u7CFB\u7EDF\u7EC4\u4EF6","\u5E73\u53F0\u652F\u6301","\u7CFB\u7EDF\u5DE5\u5177","\u8F6F\u4EF6\u5F00\u53D1","\u6280\u672F\u6587\u6863","\u6846\u67B6\u4F7F\u7528"],"description":"GoFrame\u6846\u67B6\u4E2D\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u6A21\u5757\uFF0C\u5305\u62EC\u5982\u4F55\u5728\u4E0D\u540C\u5E73\u53F0\u4E0A\u7BA1\u7406\u548C\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u529F\u80FD\uFF0C\u63D0\u4F9B\u7CFB\u7EDF\u7EA7\u522B\u7684\u5DE5\u5177\u548C\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u6709\u6548\u5730\u8FDB\u884C\u8F6F\u4EF6\u5F00\u53D1\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5E76\u53D1\u5B89\u5168\u73AF-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/en/2.7.x/docs/components/container-gring-funcs"},"next":{"title":"\u5B9A\u65F6\u5668-gtimer","permalink":"/en/2.7.x/docs/components/os-gtimer"}}'),o=n("785893"),s=n("250065"),i=n("203105");let l={slug:"/docs/components/os",title:"\u7CFB\u7EDF\u76F8\u5173",sidebar_position:1,hide_title:!0,keywords:["\u7CFB\u7EDF\u7BA1\u7406","\u64CD\u4F5C\u7CFB\u7EDF","GoFrame","GoFrame\u6846\u67B6","\u7CFB\u7EDF\u7EC4\u4EF6","\u5E73\u53F0\u652F\u6301","\u7CFB\u7EDF\u5DE5\u5177","\u8F6F\u4EF6\u5F00\u53D1","\u6280\u672F\u6587\u6863","\u6846\u67B6\u4F7F\u7528"],description:"GoFrame\u6846\u67B6\u4E2D\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u76F8\u5173\u7684\u6A21\u5757\uFF0C\u5305\u62EC\u5982\u4F55\u5728\u4E0D\u540C\u5E73\u53F0\u4E0A\u7BA1\u7406\u548C\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u529F\u80FD\uFF0C\u63D0\u4F9B\u7CFB\u7EDF\u7EA7\u522B\u7684\u5DE5\u5177\u548C\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u6709\u6548\u5730\u8FDB\u884C\u8F6F\u4EF6\u5F00\u53D1\u3002"},c=void 0,a={},u=[];function d(e){return(0,o.jsx)(i.Z,{})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203105:function(e,t,n){n.d(t,{Z:()=>j});var r=n("785893");n("667294");var o=n("467026"),s=n("698404"),i=n("531183"),l=n("633876"),c=n("266026"),a=n("434751"),u=n("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(i.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:s,description:i}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e,n=(0,s.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,s.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,s.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let i=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:i.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(667294),o=n(49931);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var r=n(667294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);