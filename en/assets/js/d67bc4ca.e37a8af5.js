"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[85175],{453578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1","title":"DAO\u5c01\u88c5\u8bbe\u8ba1","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884cDAO\u5c01\u88c5\u8bbe\u8ba1\uff0c\u8be6\u7ec6\u63a2\u8ba8\u4e86\u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u8bbe\u8ba1\u7684\u5404\u79cd\u6a21\u5f0f\u548c\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u9ad8\u6548\u7684\u4ee3\u7801\u5c01\u88c5\u548c\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u63d0\u5347\u8f6f\u4ef6\u67b6\u6784\u7684\u6a21\u5757\u5316\u548c\u53ef\u7ef4\u62a4\u6027\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1","slug":"/docs/design/project-dao","permalink":"/en/docs/design/project-dao","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1/DAO\u5c01\u88c5\u8bbe\u8ba1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/design/project-dao","title":"DAO\u5c01\u88c5\u8bbe\u8ba1","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","DAO\u8bbe\u8ba1","\u6570\u636e\u8bbf\u95ee\u5bf9\u8c61","\u8bbe\u8ba1\u6a21\u5f0f","\u8f6f\u4ef6\u67b6\u6784","\u4ee3\u7801\u5c01\u88c5","\u6570\u636e\u5e93\u64cd\u4f5c","\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5","\u7cfb\u7edf\u8bbe\u8ba1"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884cDAO\u5c01\u88c5\u8bbe\u8ba1\uff0c\u8be6\u7ec6\u63a2\u8ba8\u4e86\u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u8bbe\u8ba1\u7684\u5404\u79cd\u6a21\u5f0f\u548c\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u9ad8\u6548\u7684\u4ee3\u7801\u5c01\u88c5\u548c\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u63d0\u5347\u8f6f\u4ef6\u67b6\u6784\u7684\u6a21\u5757\u5316\u548c\u53ef\u7ef4\u62a4\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5de5\u7a0b\u76ee\u5f55\u8bbe\u8ba1\ud83d\udd25","permalink":"/en/docs/design/project-structure"},"next":{"title":"DAO-\u7ec4\u4ef6\u75db\u70b9\u53ca\u6539\u8fdb","permalink":"/en/docs/design/project-dao-pain"}}');var o=n(474848),s=n(28453),i=n(103514);const c={slug:"/docs/design/project-dao",title:"DAO\u5c01\u88c5\u8bbe\u8ba1",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","DAO\u8bbe\u8ba1","\u6570\u636e\u8bbf\u95ee\u5bf9\u8c61","\u8bbe\u8ba1\u6a21\u5f0f","\u8f6f\u4ef6\u67b6\u6784","\u4ee3\u7801\u5c01\u88c5","\u6570\u636e\u5e93\u64cd\u4f5c","\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5","\u7cfb\u7edf\u8bbe\u8ba1"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884cDAO\u5c01\u88c5\u8bbe\u8ba1\uff0c\u8be6\u7ec6\u63a2\u8ba8\u4e86\u6570\u636e\u8bbf\u95ee\u5bf9\u8c61\u8bbe\u8ba1\u7684\u5404\u79cd\u6a21\u5f0f\u548c\u65b9\u6cd5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u9ad8\u6548\u7684\u4ee3\u7801\u5c01\u88c5\u548c\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u63d0\u5347\u8f6f\u4ef6\u67b6\u6784\u7684\u6a21\u5757\u5316\u548c\u53ef\u7ef4\u62a4\u6027\u3002"},a=void 0,l={},d=[];function u(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},103514:(e,t,n)=>{n.d(t,{A:()=>A});n(296540);var r=n(634164),o=n(944718),s=n(328774),i=n(853465),c=n(316654),a=n(721312),l=n(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(474848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);