"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[70696],{79163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406","title":"ORM\u7ed3\u679c\u5904\u7406","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u63d0\u4f9b\u7684\u529f\u80fd\u8fdb\u884cORM\u7ed3\u679c\u7684\u5904\u7406\uff0c\u8be6\u7ec6\u8bb2\u89e3\u4e86\u6570\u636e\u5e93\u7ed3\u679c\u7684\u68c0\u7d22\u4e0e\u8f6c\u6362\u8fc7\u7a0b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u8fdb\u884c\u6570\u636e\u64cd\u4f5c\u4e0e\u7ba1\u7406\uff0c\u63d0\u5347Web\u5e94\u7528\u7684\u5f00\u53d1\u6548\u7387\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406","slug":"/docs/core/gdb-result","permalink":"/en/2.7.x/docs/core/gdb-result","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/core/gdb-result","title":"ORM\u7ed3\u679c\u5904\u7406","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM\u7ed3\u679c\u5904\u7406","\u6570\u636e\u5e93\u5904\u7406","gdb","\u6570\u636e\u68c0\u7d22","\u7ed3\u679c\u8f6c\u6362","SQL\u67e5\u8be2","\u6570\u636e\u64cd\u4f5c","Web\u5f00\u53d1"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u63d0\u4f9b\u7684\u529f\u80fd\u8fdb\u884cORM\u7ed3\u679c\u7684\u5904\u7406\uff0c\u8be6\u7ec6\u8bb2\u89e3\u4e86\u6570\u636e\u5e93\u7ed3\u679c\u7684\u68c0\u7d22\u4e0e\u8f6c\u6362\u8fc7\u7a0b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u8fdb\u884c\u6570\u636e\u64cd\u4f5c\u4e0e\u7ba1\u7406\uff0c\u63d0\u5347Web\u5e94\u7528\u7684\u5f00\u53d1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u4e8b\u52a1\u5904\u7406-\u5d4c\u5957\u4e8b\u52a1","permalink":"/en/2.7.x/docs/core/gdb-transaction-nested"},"next":{"title":"ORM\u7ed3\u679c\u5904\u7406-\u7ed3\u679c\u7c7b\u578b","permalink":"/en/2.7.x/docs/core/gdb-result-types"}}');var o=r(474848),s=r(28453),i=r(103514);const c={slug:"/docs/core/gdb-result",title:"ORM\u7ed3\u679c\u5904\u7406",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM\u7ed3\u679c\u5904\u7406","\u6570\u636e\u5e93\u5904\u7406","gdb","\u6570\u636e\u68c0\u7d22","\u7ed3\u679c\u8f6c\u6362","SQL\u67e5\u8be2","\u6570\u636e\u64cd\u4f5c","Web\u5f00\u53d1"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u63d0\u4f9b\u7684\u529f\u80fd\u8fdb\u884cORM\u7ed3\u679c\u7684\u5904\u7406\uff0c\u8be6\u7ec6\u8bb2\u89e3\u4e86\u6570\u636e\u5e93\u7ed3\u679c\u7684\u68c0\u7d22\u4e0e\u8f6c\u6362\u8fc7\u7a0b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u8fdb\u884c\u6570\u636e\u64cd\u4f5c\u4e0e\u7ba1\u7406\uff0c\u63d0\u5347Web\u5e94\u7528\u7684\u5f00\u53d1\u6548\u7387\u3002"},l=void 0,a={},d=[];function u(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},103514:(e,t,r)=>{r.d(t,{A:()=>b});r(296540);var n=r(634164),o=r(944718),s=r(328774),i=r(853465),c=r(316654),l=r(721312),a=r(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(474848);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,u.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(296540),o=r(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);