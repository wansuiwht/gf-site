"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[45267],{622531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6587\u672c\u5904\u7406","title":"\u6587\u672c\u5904\u7406","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6587\u672c\u5904\u7406\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u9ad8\u6548\u5730\u5728GoFrame\u73af\u5883\u4e2d\u6784\u5efa\u548c\u7ba1\u7406\u6587\u672c\u5185\u5bb9\u3002\u5229\u7528GoFrame\u7684\u5f3a\u5927\u529f\u80fd\uff0c\u7b80\u5316\u7f16\u7a0b\u8fc7\u7a0b\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u8ba9\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6587\u672c\u5904\u7406.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406","slug":"/docs/components/text","permalink":"/2.7.x/docs/components/text","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6587\u672c\u5904\u7406.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/text","title":"\u6587\u672c\u5904\u7406","sidebar_position":2,"hide_title":true,"keywords":["\u6587\u672c\u5904\u7406","GoFrame","GoFrame\u6846\u67b6","\u7ec4\u4ef6","\u7f16\u7a0b","\u5f00\u53d1","\u5de5\u5177","\u524d\u7aef\u5f00\u53d1","\u540e\u7aef\u5f00\u53d1","Web\u5f00\u53d1"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6587\u672c\u5904\u7406\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u9ad8\u6548\u5730\u5728GoFrame\u73af\u5883\u4e2d\u6784\u5efa\u548c\u7ba1\u7406\u6587\u672c\u5185\u5bb9\u3002\u5229\u7528GoFrame\u7684\u5f3a\u5927\u529f\u80fd\uff0c\u7b80\u5316\u7f16\u7a0b\u8fc7\u7a0b\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u8ba9\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6587\u4ef6\u76d1\u63a7-gfsnotify","permalink":"/2.7.x/docs/components/os-gfsnotify"},"next":{"title":"\u5b57\u7b26\u4e32\u5904\u7406-gstr","permalink":"/2.7.x/docs/components/text-gstr"}}');var o=n(474848),s=n(28453),i=n(103514);const c={slug:"/docs/components/text",title:"\u6587\u672c\u5904\u7406",sidebar_position:2,hide_title:!0,keywords:["\u6587\u672c\u5904\u7406","GoFrame","GoFrame\u6846\u67b6","\u7ec4\u4ef6","\u7f16\u7a0b","\u5f00\u53d1","\u5de5\u5177","\u524d\u7aef\u5f00\u53d1","\u540e\u7aef\u5f00\u53d1","Web\u5f00\u53d1"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6587\u672c\u5904\u7406\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u9ad8\u6548\u5730\u5728GoFrame\u73af\u5883\u4e2d\u6784\u5efa\u548c\u7ba1\u7406\u6587\u672c\u5185\u5bb9\u3002\u5229\u7528GoFrame\u7684\u5f3a\u5927\u529f\u80fd\uff0c\u7b80\u5316\u7f16\u7a0b\u8fc7\u7a0b\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u8ba9\u5f00\u53d1\u8005\u4e13\u6ce8\u4e8e\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u3002"},a=void 0,l={},d=[];function u(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},103514:(e,t,n)=>{n.d(t,{A:()=>F});n(296540);var r=n(634164),o=n(944718),s=n(328774),i=n(853465),c=n(316654),a=n(721312),l=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(F,{items:n.items,className:t})}function F(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);