"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["84703"],{857674:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>l});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u529F\u80FD\u8C03\u8BD5/\u529F\u80FD\u8C03\u8BD5","title":"\u529F\u80FD\u8C03\u8BD5","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u529F\u80FD\u8C03\u8BD5\u3002\u901A\u8FC7\u63D0\u4F9B\u6709\u6548\u7684\u8C03\u8BD5\u5DE5\u5177\u548C\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u8BC6\u522B\u548C\u89E3\u51B3\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\u95EE\u9898\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u6027\u80FD\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u529F\u80FD\u8C03\u8BD5/\u529F\u80FD\u8C03\u8BD5.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u529F\u80FD\u8C03\u8BD5","slug":"/docs/components/debug","permalink":"/en/docs/components/debug","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u529F\u80FD\u8C03\u8BD5/\u529F\u80FD\u8C03\u8BD5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/components/debug","title":"\u529F\u80FD\u8C03\u8BD5","sidebar_position":9,"hide_title":true,"keywords":["\u529F\u80FD\u8C03\u8BD5","\u8C03\u8BD5\u5DE5\u5177","\u4EE3\u7801\u8C03\u8BD5","\u9519\u8BEF\u6392\u67E5","GoFrame","GoFrame\u6846\u67B6","\u5F00\u53D1\u8005\u5DE5\u5177","\u8C03\u8BD5\u6280\u672F","\u6027\u80FD\u4F18\u5316","\u95EE\u9898\u89E3\u51B3"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u529F\u80FD\u8C03\u8BD5\u3002\u901A\u8FC7\u63D0\u4F9B\u6709\u6548\u7684\u8C03\u8BD5\u5DE5\u5177\u548C\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u8BC6\u522B\u548C\u89E3\u51B3\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\u95EE\u9898\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u6027\u80FD\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8BEF\u7801\u63A5\u53E3-gcode","permalink":"/en/docs/components/error-gcode"},"next":{"title":"\u8C03\u8BD5\u529F\u80FD-gdebug","permalink":"/en/docs/components/debug-gdebug"}}'),o=n("785893"),i=n("250065"),s=n("203105");let l={slug:"/docs/components/debug",title:"\u529F\u80FD\u8C03\u8BD5",sidebar_position:9,hide_title:!0,keywords:["\u529F\u80FD\u8C03\u8BD5","\u8C03\u8BD5\u5DE5\u5177","\u4EE3\u7801\u8C03\u8BD5","\u9519\u8BEF\u6392\u67E5","GoFrame","GoFrame\u6846\u67B6","\u5F00\u53D1\u8005\u5DE5\u5177","\u8C03\u8BD5\u6280\u672F","\u6027\u80FD\u4F18\u5316","\u95EE\u9898\u89E3\u51B3"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u529F\u80FD\u8C03\u8BD5\u3002\u901A\u8FC7\u63D0\u4F9B\u6709\u6548\u7684\u8C03\u8BD5\u5DE5\u5177\u548C\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u8BC6\u522B\u548C\u89E3\u51B3\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\u95EE\u9898\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u6027\u80FD\u3002"},c=void 0,a={},u=[];function d(e){return(0,o.jsx)(s.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203105:function(e,t,n){n.d(t,{Z:()=>b});var r=n("785893");n("667294");var o=n("467026"),i=n("698404"),s=n("531183"),l=n("633876"),c=n("266026"),a=n("434751"),u=n("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:s}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,n=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(b,{items:n.items,className:t})}function b(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(667294),o=n(49931);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);