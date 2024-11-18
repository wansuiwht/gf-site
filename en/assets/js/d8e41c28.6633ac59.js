"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["86503"],{650965:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-gtree","title":"\u6811\u5F62\u7C7B\u578B-gtree","description":"\u8BE5\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u63D0\u4F9B\u7684\u6811\u5F62\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u5305\u62ECRedBlackTree\u3001AVLTree\u548CBTree\u7B49\u6570\u636E\u7ED3\u6784\u3002\u6811\u5F62\u5BB9\u5668\u652F\u6301\u5E76\u53D1\u5B89\u5168\u548C\u6709\u5E8F\u904D\u5386\uFF0C\u9002\u5408\u5904\u7406\u5927\u6570\u636E\u91CF\u7684\u5B58\u50A8\u9700\u6C42\u3002\u901A\u8FC7GoFrame\u6846\u67B6\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u9AD8\u6548\u5730\u5B9E\u73B0\u5173\u8054\u6570\u7EC4\u3001\u6392\u5E8F\u952E\u503C\u5BF9\u548C\u5927\u6570\u636E\u91CF\u5185\u5B58CURD\u7B49\u573A\u666F\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-gtree.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree","slug":"/docs/components/container-gtree","permalink":"/en/docs/components/container-gtree","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u6811\u5F62\u7C7B\u578B-gtree/\u6811\u5F62\u7C7B\u578B-gtree.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/components/container-gtree","title":"\u6811\u5F62\u7C7B\u578B-gtree","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","\u6811\u5F62\u5BB9\u5668","gtree","\u5E76\u53D1\u5B89\u5168","\u7EA2\u9ED1\u6811","AVL\u6811","BTree","\u6392\u5E8F","\u5927\u6570\u636E\u5904\u7406","\u6570\u636E\u7ED3\u6784"],"description":"\u8BE5\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u63D0\u4F9B\u7684\u6811\u5F62\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u5305\u62ECRedBlackTree\u3001AVLTree\u548CBTree\u7B49\u6570\u636E\u7ED3\u6784\u3002\u6811\u5F62\u5BB9\u5668\u652F\u6301\u5E76\u53D1\u5B89\u5168\u548C\u6709\u5E8F\u904D\u5386\uFF0C\u9002\u5408\u5904\u7406\u5927\u6570\u636E\u91CF\u7684\u5B58\u50A8\u9700\u6C42\u3002\u901A\u8FC7GoFrame\u6846\u67B6\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u9AD8\u6548\u5730\u5B9E\u73B0\u5173\u8054\u6570\u7EC4\u3001\u6392\u5E8F\u952E\u503C\u5BF9\u548C\u5927\u6570\u636E\u91CF\u5185\u5B58CURD\u7B49\u573A\u666F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u961F\u5217\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","permalink":"/en/docs/components/container-gqueue-benchmark"},"next":{"title":"\u6811\u5F62\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/en/docs/components/container-gtree-example"}}'),i=n("785893"),c=n("250065"),o=n("203105");let s={slug:"/docs/components/container-gtree",title:"\u6811\u5F62\u7C7B\u578B-gtree",sidebar_position:7,hide_title:!0,keywords:["GoFrame","\u6811\u5F62\u5BB9\u5668","gtree","\u5E76\u53D1\u5B89\u5168","\u7EA2\u9ED1\u6811","AVL\u6811","BTree","\u6392\u5E8F","\u5927\u6570\u636E\u5904\u7406","\u6570\u636E\u7ED3\u6784"],description:"\u8BE5\u6587\u6863\u4ECB\u7ECD\u4E86GoFrame\u6846\u67B6\u63D0\u4F9B\u7684\u6811\u5F62\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u5305\u62ECRedBlackTree\u3001AVLTree\u548CBTree\u7B49\u6570\u636E\u7ED3\u6784\u3002\u6811\u5F62\u5BB9\u5668\u652F\u6301\u5E76\u53D1\u5B89\u5168\u548C\u6709\u5E8F\u904D\u5386\uFF0C\u9002\u5408\u5904\u7406\u5927\u6570\u636E\u91CF\u7684\u5B58\u50A8\u9700\u6C42\u3002\u901A\u8FC7GoFrame\u6846\u67B6\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u9AD8\u6548\u5730\u5B9E\u73B0\u5173\u8054\u6570\u7EC4\u3001\u6392\u5E8F\u952E\u503C\u5BF9\u548C\u5927\u6570\u636E\u91CF\u5185\u5B58CURD\u7B49\u573A\u666F\u3002"},a=void 0,l={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:2}];function u(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,i.jsxs)(t.p,{children:["\u652F\u6301\u5E76\u53D1\u5B89\u5168\u5F00\u5173\u7279\u6027\u7684\u6811\u5F62\u5BB9\u5668\uFF0C\u6811\u5F62\u6570\u636E\u7ED3\u6784\u7684\u7279\u70B9\u662F\u652F\u6301\u6709\u5E8F\u904D\u5386\u3001\u5185\u5B58\u5360\u7528\u4F4E\u3001\u590D\u6742\u5EA6\u7A33\u5B9A\u3001\u9002\u5408\u5927\u6570\u636E\u91CF\u5B58\u50A8\u3002\u8BE5\u6A21\u5757\u5305\u542B\u591A\u4E2A\u6570\u636E\u7ED3\u6784\u7684\u6811\u5F62\u5BB9\u5668\uFF1A ",(0,i.jsx)(t.code,{children:"RedBlackTree"}),"\u3001 ",(0,i.jsx)(t.code,{children:"AVLTree"})," \u548C ",(0,i.jsx)(t.code,{children:"BTree"}),"\u3002"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u7C7B\u578B"}),(0,i.jsx)(t.th,{children:"\u6570\u636E\u7ED3\u6784"}),(0,i.jsx)(t.th,{children:"\u5E73\u5747\u590D\u6742\u5EA6"}),(0,i.jsx)(t.th,{children:"\u652F\u6301\u6392\u5E8F"}),(0,i.jsx)(t.th,{children:"\u6709\u5E8F\u904D\u5386"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"RedBlackTree"})}),(0,i.jsx)(t.td,{children:"\u7EA2\u9ED1\u6811"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"O(log N)"})}),(0,i.jsx)(t.td,{children:"\u662F"}),(0,i.jsx)(t.td,{children:"\u662F"}),(0,i.jsx)(t.td,{children:"\u5199\u5165\u6027\u80FD\u6BD4\u8F83\u597D"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"AVLTree"})}),(0,i.jsx)(t.td,{children:"\u9AD8\u5EA6\u5E73\u8861\u6811"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"O(log N)"})}),(0,i.jsx)(t.td,{children:"\u662F"}),(0,i.jsx)(t.td,{children:"\u662F"}),(0,i.jsx)(t.td,{children:"\u67E5\u627E\u6027\u80FD\u6BD4\u8F83\u597D"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"BTree"})}),(0,i.jsx)(t.td,{children:"B\u6811/B-\u6811"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"O(log N)"})}),(0,i.jsx)(t.td,{children:"\u662F"}),(0,i.jsx)(t.td,{children:"\u662F"}),(0,i.jsx)(t.td,{children:"\u5E38\u7528\u4E8E\u5916\u90E8\u5B58\u50A8"})]})]})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u53C2\u8003\u8FDE\u63A5\uFF1A ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Binary_tree",children:"https://en.wikipedia.org/wiki/Binary_tree"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A"]}),"\n",(0,i.jsx)(t.p,{children:"\u5173\u8054\u6570\u7EC4\u573A\u666F\u3001\u6392\u5E8F\u952E\u503C\u5BF9\u573A\u666F\u3001\u5927\u6570\u636E\u91CF\u5185\u5B58CURD\u573A\u666F\u7B49\u7B49\u3002"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gtree"\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gtree",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gtree"})}),"\n",(0,i.jsx)(t.p,{children:"\u51E0\u79CD\u5BB9\u5668\u7684API\u65B9\u6CD5\u90FD\u975E\u5E38\u7C7B\u4F3C\uFF0C\u7279\u70B9\u662F\u9700\u8981\u5728\u521D\u59CB\u5316\u65F6\u63D0\u4F9B\u7528\u4E8E\u6392\u5E8F\u7684\u65B9\u6CD5\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u5728 ",(0,i.jsx)(t.code,{children:"gutil"})," \u6A21\u5757\u4E2D\u63D0\u4F9B\u4E86\u5E38\u7528\u7684\u4E00\u4E9B\u57FA\u672C\u7C7B\u578B\u6BD4\u8F83\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u7A0B\u5E8F\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF0C\u540E\u7EED\u4E5F\u6709\u793A\u4F8B\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func ComparatorByte(a, b interface{}) int\nfunc ComparatorFloat32(a, b interface{}) int\nfunc ComparatorFloat64(a, b interface{}) int\nfunc ComparatorInt(a, b interface{}) int\nfunc ComparatorInt16(a, b interface{}) int\nfunc ComparatorInt32(a, b interface{}) int\nfunc ComparatorInt64(a, b interface{}) int\nfunc ComparatorInt8(a, b interface{}) int\nfunc ComparatorRune(a, b interface{}) int\nfunc ComparatorString(a, b interface{}) int\nfunc ComparatorTime(a, b interface{}) int\nfunc ComparatorUint(a, b interface{}) int\nfunc ComparatorUint16(a, b interface{}) int\nfunc ComparatorUint32(a, b interface{}) int\nfunc ComparatorUint64(a, b interface{}) int\nfunc ComparatorUint8(a, b interface{}) int\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n","\n",(0,i.jsx)(o.Z,{})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},203105:function(e,t,n){n.d(t,{Z:()=>j});var r=n("785893");n("667294");var i=n("467026"),c=n("698404"),o=n("531183"),s=n("633876"),a=n("266026"),l=n("434751"),d=n("58608");let u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function h(e){let{href:t,children:n}=e;return(0,r.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:c,description:o}=e;return(0,r.jsxs)(h,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:c,children:[n," ",c]}),o&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e,n=(0,c.LM)(t),i=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function m(e){let{item:t}=e,n=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,c.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(m,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,n=(0,c.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,{...e});let o=(0,c.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:o.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(x,{item:e})},t))})}},633876:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(667294),i=n(49931);let c=["zero","one","two","few","many","other"];function o(e){return c.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var r=n(667294);let i={},c=r.createContext(i);function o(e){let t=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);