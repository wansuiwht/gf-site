"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[29934],{116765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6/I18N\u7ec4\u4ef6","title":"I18N\u7ec4\u4ef6","description":"I18N\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u4e2d\u7684\u91cd\u8981\u6a21\u5757\uff0c\u63d0\u4f9b\u56fd\u9645\u5316\u548c\u672c\u5730\u5316\u652f\u6301\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u591a\u8bed\u8a00\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u3002\u901a\u8fc7I18N\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e0d\u540c\u8bed\u8a00\u73af\u5883\u4e2d\u66f4\u6d41\u7545\u5730\u4f53\u9a8c\u8f6f\u4ef6\u529f\u80fd\uff0c\u63d0\u5347\u5168\u7403\u7528\u6237\u7684\u4f7f\u7528\u4f53\u9a8c\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6/I18N\u7ec4\u4ef6.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6","slug":"/docs/components/i18n","permalink":"/en/docs/components/i18n","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6/I18N\u7ec4\u4ef6.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/components/i18n","title":"I18N\u7ec4\u4ef6","sidebar_position":10,"hide_title":true,"keywords":["I18N","\u56fd\u9645\u5316","\u672c\u5730\u5316","\u7ffb\u8bd1","\u8bed\u8a00\u652f\u6301","\u591a\u8bed\u8a00","GoFrame","GoFrame\u6846\u67b6","\u5f00\u6e90\u6846\u67b6","\u53ef\u6269\u5c55\u7ec4\u4ef6"],"description":"I18N\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u4e2d\u7684\u91cd\u8981\u6a21\u5757\uff0c\u63d0\u4f9b\u56fd\u9645\u5316\u548c\u672c\u5730\u5316\u652f\u6301\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u591a\u8bed\u8a00\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u3002\u901a\u8fc7I18N\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e0d\u540c\u8bed\u8a00\u73af\u5883\u4e2d\u66f4\u6d41\u7545\u5730\u4f53\u9a8c\u8f6f\u4ef6\u529f\u80fd\uff0c\u63d0\u5347\u5168\u7403\u7528\u6237\u7684\u4f7f\u7528\u4f53\u9a8c\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8c03\u8bd5\u529f\u80fd-gdebug","permalink":"/en/docs/components/debug-gdebug"},"next":{"title":"\u56fd\u9645\u5316-gi18n","permalink":"/en/docs/components/i18n-gi18n"}}');var o=n(474848),s=n(28453),i=n(103514);const c={slug:"/docs/components/i18n",title:"I18N\u7ec4\u4ef6",sidebar_position:10,hide_title:!0,keywords:["I18N","\u56fd\u9645\u5316","\u672c\u5730\u5316","\u7ffb\u8bd1","\u8bed\u8a00\u652f\u6301","\u591a\u8bed\u8a00","GoFrame","GoFrame\u6846\u67b6","\u5f00\u6e90\u6846\u67b6","\u53ef\u6269\u5c55\u7ec4\u4ef6"],description:"I18N\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u4e2d\u7684\u91cd\u8981\u6a21\u5757\uff0c\u63d0\u4f9b\u56fd\u9645\u5316\u548c\u672c\u5730\u5316\u652f\u6301\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5b9e\u73b0\u591a\u8bed\u8a00\u7f51\u7ad9\u6216\u5e94\u7528\u7a0b\u5e8f\u3002\u901a\u8fc7I18N\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e0d\u540c\u8bed\u8a00\u73af\u5883\u4e2d\u66f4\u6d41\u7545\u5730\u4f53\u9a8c\u8f6f\u4ef6\u529f\u80fd\uff0c\u63d0\u5347\u5168\u7403\u7528\u6237\u7684\u4f7f\u7528\u4f53\u9a8c\u3002"},l=void 0,a={},u=[];function d(e){return(0,o.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},103514:(e,t,n)=>{n.d(t,{A:()=>x});n(296540);var r=n(634164),o=n(944718),s=n(328774),i=n(853465),c=n(316654),l=n(721312),a=n(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(474848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(N,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),o=n(144586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);