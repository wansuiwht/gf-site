"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["29132"],{123604:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u9519\u8BEF\u7BA1\u7406/\u9519\u8BEF\u7BA1\u7406","title":"\u9519\u8BEF\u7BA1\u7406","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884C\u9519\u8BEF\u7BA1\u7406\u548C\u5904\u7406\u3002\u901A\u8FC7\u9002\u5F53\u7684\u65B9\u6CD5\u6355\u83B7\u548C\u5904\u7406\u9519\u8BEF\uFF0C\u53EF\u4EE5\u63D0\u9AD8Web\u5E94\u7528\u7684\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u548C\u5F02\u5E38\u6355\u83B7\u7684\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5E94\u5BF9\u8FD0\u884C\u65F6\u9519\u8BEF\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u9519\u8BEF\u7BA1\u7406/\u9519\u8BEF\u7BA1\u7406.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u9519\u8BEF\u7BA1\u7406","slug":"/docs/components/error","permalink":"/en/2.7.x/docs/components/error","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u9519\u8BEF\u7BA1\u7406/\u9519\u8BEF\u7BA1\u7406.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/components/error","title":"\u9519\u8BEF\u7BA1\u7406","sidebar_position":8,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u9519\u8BEF\u7BA1\u7406","\u9519\u8BEF\u5904\u7406","\u5F02\u5E38\u6355\u83B7","Web\u5F00\u53D1","\u5E94\u7528\u7A0B\u5E8F\u9519\u8BEF","\u7F16\u7A0B\u9519\u8BEF","\u9519\u8BEF\u65E5\u5FD7","\u9519\u8BEF\u8C03\u8BD5"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884C\u9519\u8BEF\u7BA1\u7406\u548C\u5904\u7406\u3002\u901A\u8FC7\u9002\u5F53\u7684\u65B9\u6CD5\u6355\u83B7\u548C\u5904\u7406\u9519\u8BEF\uFF0C\u53EF\u4EE5\u63D0\u9AD8Web\u5E94\u7528\u7684\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u548C\u5F02\u5E38\u6355\u83B7\u7684\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5E94\u5BF9\u8FD0\u884C\u65F6\u9519\u8BEF\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5355\u5143\u6D4B\u8BD5-gtest","permalink":"/en/2.7.x/docs/components/test-gtest"},"next":{"title":"\u9519\u8BEF\u5904\u7406-gerror","permalink":"/en/2.7.x/docs/components/error-gerror"}}'),o=r("785893"),s=r("250065"),i=r("203105");let l={slug:"/docs/components/error",title:"\u9519\u8BEF\u7BA1\u7406",sidebar_position:8,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u9519\u8BEF\u7BA1\u7406","\u9519\u8BEF\u5904\u7406","\u5F02\u5E38\u6355\u83B7","Web\u5F00\u53D1","\u5E94\u7528\u7A0B\u5E8F\u9519\u8BEF","\u7F16\u7A0B\u9519\u8BEF","\u9519\u8BEF\u65E5\u5FD7","\u9519\u8BEF\u8C03\u8BD5"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884C\u9519\u8BEF\u7BA1\u7406\u548C\u5904\u7406\u3002\u901A\u8FC7\u9002\u5F53\u7684\u65B9\u6CD5\u6355\u83B7\u548C\u5904\u7406\u9519\u8BEF\uFF0C\u53EF\u4EE5\u63D0\u9AD8Web\u5E94\u7528\u7684\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\u548C\u5F02\u5E38\u6355\u83B7\u7684\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u5E94\u5BF9\u8FD0\u884C\u65F6\u9519\u8BEF\u3002"},c=void 0,a={},u=[];function d(e){return(0,o.jsx)(i.Z,{})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203105:function(e,t,r){r.d(t,{Z:()=>b});var n=r("785893");r("667294");var o=r("467026"),s=r("698404"),i=r("531183"),l=r("633876"),c=r("266026"),a=r("434751"),u=r("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(i.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:s,description:i}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),i&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e,r=(0,s.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,s.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,s.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let i=(0,s.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:i.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},633876:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),o=r(49931);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(667294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);