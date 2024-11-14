"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[31999],{289014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u63a5\u53e3\u6587\u6863/\u63a5\u53e3\u6587\u6863","title":"\u63a5\u53e3\u6587\u6863","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u751f\u6210\u81ea\u52a8\u5316\u63a5\u53e3\u6587\u6863\u7684\u529f\u80fd\u3002GoFrame\u6846\u67b6\u652f\u6301\u901a\u8fc7OpenAPIv3\u534f\u8bae\u7684\u6807\u51c6\u5316\u65b9\u5f0f\u751f\u6210\u63a5\u53e3\u6587\u6863\uff0c\u786e\u4fdd\u4ee3\u7801\u4e0e\u6587\u6863\u540c\u6b65\u66f4\u65b0\u3002\u5efa\u8bae\u7528\u6237\u5728\u4f7f\u7528\u6b64\u529f\u80fd\u524d\uff0c\u5148\u4e86\u89e3\u6846\u67b6\u7684\u89c4\u8303\u8def\u7531\u7279\u6027\uff0c\u4ee5\u4fbf\u4e8e\u66f4\u597d\u5730\u7ba1\u7406\u8def\u7531\u548c\u6ce8\u518c\u63a5\u53e3\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u63a5\u53e3\u6587\u6863/\u63a5\u53e3\u6587\u6863.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u63a5\u53e3\u6587\u6863","slug":"/docs/web/api-document","permalink":"/docs/web/api-document","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u63a5\u53e3\u6587\u6863/\u63a5\u53e3\u6587\u6863.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/web/api-document","title":"\u63a5\u53e3\u6587\u6863","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u63a5\u53e3\u6587\u6863","\u81ea\u52a8\u5316","OpenAPIv3","API\u6587\u6863\u751f\u6210","\u8def\u7531\u7279\u6027","\u6846\u67b6\u89c4\u8303","\u4ee3\u7801\u540c\u6b65","\u6587\u6863\u7ef4\u62a4"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u751f\u6210\u81ea\u52a8\u5316\u63a5\u53e3\u6587\u6863\u7684\u529f\u80fd\u3002GoFrame\u6846\u67b6\u652f\u6301\u901a\u8fc7OpenAPIv3\u534f\u8bae\u7684\u6807\u51c6\u5316\u65b9\u5f0f\u751f\u6210\u63a5\u53e3\u6587\u6863\uff0c\u786e\u4fdd\u4ee3\u7801\u4e0e\u6587\u6863\u540c\u6b65\u66f4\u65b0\u3002\u5efa\u8bae\u7528\u6237\u5728\u4f7f\u7528\u6b64\u529f\u80fd\u524d\uff0c\u5148\u4e86\u89e3\u6846\u67b6\u7684\u89c4\u8303\u8def\u7531\u7279\u6027\uff0c\u4ee5\u4fbf\u4e8e\u66f4\u597d\u5730\u7ba1\u7406\u8def\u7531\u548c\u6ce8\u518c\u63a5\u53e3\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668-\u5e38\u89c1\u95ee\u9898","permalink":"/docs/web/router-middleware-faq"},"next":{"title":"\u63a5\u53e3\u6587\u6863-OpenAPIv3","permalink":"/docs/web/api-document-openapiv3"}}');var o=n(474848),s=n(28453),i=n(103514);const c={slug:"/docs/web/api-document",title:"\u63a5\u53e3\u6587\u6863",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u63a5\u53e3\u6587\u6863","\u81ea\u52a8\u5316","OpenAPIv3","API\u6587\u6863\u751f\u6210","\u8def\u7531\u7279\u6027","\u6846\u67b6\u89c4\u8303","\u4ee3\u7801\u540c\u6b65","\u6587\u6863\u7ef4\u62a4"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u751f\u6210\u81ea\u52a8\u5316\u63a5\u53e3\u6587\u6863\u7684\u529f\u80fd\u3002GoFrame\u6846\u67b6\u652f\u6301\u901a\u8fc7OpenAPIv3\u534f\u8bae\u7684\u6807\u51c6\u5316\u65b9\u5f0f\u751f\u6210\u63a5\u53e3\u6587\u6863\uff0c\u786e\u4fdd\u4ee3\u7801\u4e0e\u6587\u6863\u540c\u6b65\u66f4\u65b0\u3002\u5efa\u8bae\u7528\u6237\u5728\u4f7f\u7528\u6b64\u529f\u80fd\u524d\uff0c\u5148\u4e86\u89e3\u6846\u67b6\u7684\u89c4\u8303\u8def\u7531\u7279\u6027\uff0c\u4ee5\u4fbf\u4e8e\u66f4\u597d\u5730\u7ba1\u7406\u8def\u7531\u548c\u6ce8\u518c\u63a5\u53e3\u3002"},a=void 0,l={},d=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u652f\u6301\u5168\u81ea\u52a8\u5316\u7684\u63a5\u53e3\u6587\u6863\u751f\u6210\uff0c\u4fdd\u969c\u4ee3\u7801\u4e0e\u63a5\u53e3\u6587\u6863\u540c\u6b65\u7ef4\u62a4\uff0c\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\u6587\u6863\u91c7\u7528\u7684\u662f\u6807\u51c6\u7684 ",(0,o.jsx)(t.code,{children:"OpenAPIv3"})," \u534f\u8bae\u3002\u5728\u4ecb\u7ecd ",(0,o.jsx)(t.code,{children:"OpenAPIv3"})," \u534f\u8bae\u4e4b\u524d\uff0c\u5efa\u8bae\u60a8\u5148\u9605\u8bfb\u4e86\u89e3\u6846\u67b6\u7684\u89c4\u8303\u8def\u7531\u7279\u6027\uff1a ",(0,o.jsx)(t.a,{href:"/docs/web/router-registering-strict-router",children:"\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531"})," \u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(334283).A+"",width:"3838",height:"1952"})}),"\n",(0,o.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},103514:(e,t,n)=>{n.d(t,{A:()=>j});n(296540);var r=n(634164),o=n(944718),s=n(328774),i=n(853465),c=n(316654),a=n(721312),l=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},334283:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/487a4457a16a6cf2c86a7d706ce0d9cd-c67c075db06dfae7227a34e4342700bf.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);