"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[49750],{620386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","title":"\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","description":"GoFrame\u6846\u67b6\u4e2dgregex\u5e93\u7684\u57fa\u672c\u529f\u80fd\u548c\u7528\u6cd5\u3002gregex\u662f\u5bf9\u6807\u51c6\u5e93regexp\u7684\u5c01\u88c5\uff0c\u63d0\u4f9b\u4e86\u7b80\u5316\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u4f7f\u7528\u65b9\u5f0f\uff0c\u5e76\u901a\u8fc7\u89e3\u6790\u7f13\u5b58\u8bbe\u8ba1\u4f18\u5316\u4e86\u6267\u884c\u6548\u7387\uff0c\u4f7f\u5f97\u6b63\u5219\u64cd\u4f5c\u66f4\u52a0\u9ad8\u6548\u4fbf\u6377\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","slug":"/docs/components/text-gregex","permalink":"/docs/components/text-gregex","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/text-gregex","title":"\u6b63\u5219\u8868\u8fbe\u5f0f-gregex","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gregex","\u6b63\u5219\u8868\u8fbe\u5f0f","\u6b63\u5219\u5e93","\u6b63\u5219\u89e3\u6790","\u89e3\u6790\u7f13\u5b58","\u6267\u884c\u6548\u7387","\u9879\u76ee\u6587\u6863","golang"],"description":"GoFrame\u6846\u67b6\u4e2dgregex\u5e93\u7684\u57fa\u672c\u529f\u80fd\u548c\u7528\u6cd5\u3002gregex\u662f\u5bf9\u6807\u51c6\u5e93regexp\u7684\u5c01\u88c5\uff0c\u63d0\u4f9b\u4e86\u7b80\u5316\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u4f7f\u7528\u65b9\u5f0f\uff0c\u5e76\u901a\u8fc7\u89e3\u6790\u7f13\u5b58\u8bbe\u8ba1\u4f18\u5316\u4e86\u6267\u884c\u6548\u7387\uff0c\u4f7f\u5f97\u6b63\u5219\u64cd\u4f5c\u66f4\u52a0\u9ad8\u6548\u4fbf\u6377\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5b57\u7b26\u4e32\u5904\u7406-gstr","permalink":"/docs/components/text-gstr"},"next":{"title":"\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528","permalink":"/docs/components/text-gregex-example"}}');var o=r(474848),s=r(28453),c=r(103514);const i={slug:"/docs/components/text-gregex",title:"\u6b63\u5219\u8868\u8fbe\u5f0f-gregex",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gregex","\u6b63\u5219\u8868\u8fbe\u5f0f","\u6b63\u5219\u5e93","\u6b63\u5219\u89e3\u6790","\u89e3\u6790\u7f13\u5b58","\u6267\u884c\u6548\u7387","\u9879\u76ee\u6587\u6863","golang"],description:"GoFrame\u6846\u67b6\u4e2dgregex\u5e93\u7684\u57fa\u672c\u529f\u80fd\u548c\u7528\u6cd5\u3002gregex\u662f\u5bf9\u6807\u51c6\u5e93regexp\u7684\u5c01\u88c5\uff0c\u63d0\u4f9b\u4e86\u7b80\u5316\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u4f7f\u7528\u65b9\u5f0f\uff0c\u5e76\u901a\u8fc7\u89e3\u6790\u7f13\u5b58\u8bbe\u8ba1\u4f18\u5316\u4e86\u6267\u884c\u6548\u7387\uff0c\u4f7f\u5f97\u6b63\u5219\u64cd\u4f5c\u66f4\u52a0\u9ad8\u6548\u4fbf\u6377\u3002"},l=void 0,a={},g=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gregex"})," \u63d0\u4f9b\u4e86\u5bf9\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u652f\u6301\uff0c\u5e95\u5c42\u662f\u5bf9\u6807\u51c6\u5e93 ",(0,o.jsx)(t.code,{children:"regexp"})," \u7684\u5c01\u88c5\uff0c\u6781\u5927\u5730\u7b80\u5316\u4e86\u6b63\u5219\u7684\u4f7f\u7528\uff0c\u5e76\u91c7\u7528\u4e86\u89e3\u6790\u7f13\u5b58\u8bbe\u8ba1\uff0c\u63d0\u9ad8\u4e86\u6267\u884c\u6548\u7387\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/text/gregex"\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/text/gregex",children:"https://pkg.go.dev/github.com/gogf/gf/v2/text/gregex"})}),"\n",(0,o.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(c.A,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},103514:(e,t,r)=>{r.d(t,{A:()=>j});r(296540);var n=r(634164),o=r(944718),s=r(328774),c=r(853465),i=r(316654),l=r(721312),a=r(751107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(474848);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",g.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:o,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",g.cardTitle),title:o,children:[r," ",o]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function x(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function p(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,o.$S)();return(0,d.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(f,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},853465:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(296540),o=r(144586);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(296540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);