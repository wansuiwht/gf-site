"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["21066"],{113536:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1","title":"DAO\u5C01\u88C5\u8BBE\u8BA1","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884CDAO\u5C01\u88C5\u8BBE\u8BA1\uFF0C\u8BE6\u7EC6\u63A2\u8BA8\u4E86\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u8BBE\u8BA1\u7684\u5404\u79CD\u6A21\u5F0F\u548C\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5B9E\u73B0\u9AD8\u6548\u7684\u4EE3\u7801\u5C01\u88C5\u548C\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u63D0\u5347\u8F6F\u4EF6\u67B6\u6784\u7684\u6A21\u5757\u5316\u548C\u53EF\u7EF4\u62A4\u6027\u3002","source":"@site/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1","slug":"/docs/design/project-dao","permalink":"/docs/design/project-dao","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1/DAO\u5C01\u88C5\u8BBE\u8BA1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/design/project-dao","title":"DAO\u5C01\u88C5\u8BBE\u8BA1","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","DAO\u8BBE\u8BA1","\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61","\u8BBE\u8BA1\u6A21\u5F0F","\u8F6F\u4EF6\u67B6\u6784","\u4EE3\u7801\u5C01\u88C5","\u6570\u636E\u5E93\u64CD\u4F5C","\u5F00\u53D1\u6700\u4F73\u5B9E\u8DF5","\u7CFB\u7EDF\u8BBE\u8BA1"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884CDAO\u5C01\u88C5\u8BBE\u8BA1\uFF0C\u8BE6\u7EC6\u63A2\u8BA8\u4E86\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u8BBE\u8BA1\u7684\u5404\u79CD\u6A21\u5F0F\u548C\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5B9E\u73B0\u9AD8\u6548\u7684\u4EE3\u7801\u5C01\u88C5\u548C\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u63D0\u5347\u8F6F\u4EF6\u67B6\u6784\u7684\u6A21\u5757\u5316\u548C\u53EF\u7EF4\u62A4\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5DE5\u7A0B\u76EE\u5F55\u8BBE\u8BA1\uD83D\uDD25","permalink":"/docs/design/project-structure"},"next":{"title":"DAO-\u7EC4\u4EF6\u75DB\u70B9\u53CA\u6539\u8FDB","permalink":"/docs/design/project-dao-pain"}}'),o=r("785893"),i=r("250065"),s=r("203105");let l={slug:"/docs/design/project-dao",title:"DAO\u5C01\u88C5\u8BBE\u8BA1",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","DAO\u8BBE\u8BA1","\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61","\u8BBE\u8BA1\u6A21\u5F0F","\u8F6F\u4EF6\u67B6\u6784","\u4EE3\u7801\u5C01\u88C5","\u6570\u636E\u5E93\u64CD\u4F5C","\u5F00\u53D1\u6700\u4F73\u5B9E\u8DF5","\u7CFB\u7EDF\u8BBE\u8BA1"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884CDAO\u5C01\u88C5\u8BBE\u8BA1\uFF0C\u8BE6\u7EC6\u63A2\u8BA8\u4E86\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u8BBE\u8BA1\u7684\u5404\u79CD\u6A21\u5F0F\u548C\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5B9E\u73B0\u9AD8\u6548\u7684\u4EE3\u7801\u5C01\u88C5\u548C\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u63D0\u5347\u8F6F\u4EF6\u67B6\u6784\u7684\u6A21\u5757\u5316\u548C\u53EF\u7EF4\u62A4\u6027\u3002"},c=void 0,a={},u=[];function d(e){return(0,o.jsx)(s.Z,{})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203105:function(e,t,r){r.d(t,{Z:()=>D});var n=r("785893");r("667294");var o=r("467026"),i=r("698404"),s=r("531183"),l=r("633876"),c=r("266026"),a=r("434751"),u=r("58608");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,o.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:i,description:s}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e,r=(0,i.LM)(t),o=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,i.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,i.jA)();return(0,n.jsx)(D,{items:r.items,className:t})}function D(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let s=(0,i.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},633876:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(667294),o=r(49931);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var n=r(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);