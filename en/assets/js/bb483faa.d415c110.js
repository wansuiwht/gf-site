"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[55682],{703473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027","title":"ORM\u9ad8\u7ea7\u7279\u6027","description":"GoFrame\u6846\u67b6\u7684ORM\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3b\u8981\u5305\u62ec\u6570\u636e\u5e93\u7ba1\u7406\u548c\u64cd\u4f5c\u7684\u9ad8\u7ea7\u529f\u80fd\u3002\u8fd9\u4e9b\u7279\u6027\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u5904\u7406\u6570\u636e\u5efa\u6a21\u3001\u4f18\u5316\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u7b80\u5316\u6570\u636e\u64cd\u4f5c\u6d41\u7a0b\uff0c\u8fdb\u800c\u63d0\u9ad8\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u5f00\u53d1\u7684\u6548\u7387\u548c\u8d28\u91cf\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/docs/core/gdb-senior","permalink":"/en/2.7.x/docs/core/gdb-senior","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/core/gdb-senior","title":"ORM\u9ad8\u7ea7\u7279\u6027","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM","\u9ad8\u7ea7\u7279\u6027","\u6570\u636e\u5e93\u7ba1\u7406","gdb","Go\u5f00\u53d1","\u6570\u636e\u64cd\u4f5c","\u5efa\u6a21","\u67e5\u8be2\u4f18\u5316"],"description":"GoFrame\u6846\u67b6\u7684ORM\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3b\u8981\u5305\u62ec\u6570\u636e\u5e93\u7ba1\u7406\u548c\u64cd\u4f5c\u7684\u9ad8\u7ea7\u529f\u80fd\u3002\u8fd9\u4e9b\u7279\u6027\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u5904\u7406\u6570\u636e\u5efa\u6a21\u3001\u4f18\u5316\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u7b80\u5316\u6570\u636e\u64cd\u4f5c\u6d41\u7a0b\uff0c\u8fdb\u800c\u63d0\u9ad8\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u5f00\u53d1\u7684\u6548\u7387\u548c\u8d28\u91cf\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u6a21\u578b\u751f\u6210","permalink":"/en/2.7.x/docs/core/gdb-model-generating"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-RawSQL","permalink":"/en/2.7.x/docs/core/gdb-senior-raw-sql"}}');var o=r(474848),s=r(28453),i=r(103514);const c={slug:"/docs/core/gdb-senior",title:"ORM\u9ad8\u7ea7\u7279\u6027",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM","\u9ad8\u7ea7\u7279\u6027","\u6570\u636e\u5e93\u7ba1\u7406","gdb","Go\u5f00\u53d1","\u6570\u636e\u64cd\u4f5c","\u5efa\u6a21","\u67e5\u8be2\u4f18\u5316"],description:"GoFrame\u6846\u67b6\u7684ORM\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3b\u8981\u5305\u62ec\u6570\u636e\u5e93\u7ba1\u7406\u548c\u64cd\u4f5c\u7684\u9ad8\u7ea7\u529f\u80fd\u3002\u8fd9\u4e9b\u7279\u6027\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u5904\u7406\u6570\u636e\u5efa\u6a21\u3001\u4f18\u5316\u67e5\u8be2\u6027\u80fd\u4ee5\u53ca\u7b80\u5316\u6570\u636e\u64cd\u4f5c\u6d41\u7a0b\uff0c\u8fdb\u800c\u63d0\u9ad8\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u5f00\u53d1\u7684\u6548\u7387\u548c\u8d28\u91cf\u3002"},a=void 0,l={},d=[];function u(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},103514:(e,t,r)=>{r.d(t,{A:()=>M});r(296540);var n=r(634164),o=r(944718),s=r(328774),i=r(853465),c=r(316654),a=r(721312),l=r(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(474848);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,u.jsx)(M,{items:r.items,className:t})}function M(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(296540),o=r(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);