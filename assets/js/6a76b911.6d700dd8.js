"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[86338],{786476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x","title":"\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x","description":"","source":"@site/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x.md","sourceDirName":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x","slug":"/release/v1.x","permalink":"/release/v1.x","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731558303000,"sidebarPosition":10000,"frontMatter":{"slug":"/release/v1.x","title":"\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x","sidebar_position":10000,"hide_title":true},"sidebar":"releaseSidebar","previous":{"title":"v2.0 2022-03-09","permalink":"/release/v2.0"},"next":{"title":"v1.16 2021-06-01","permalink":"/release/v1.16"}}');var s=n(474848),o=n(28453),i=n(103514);const l={slug:"/release/v1.x",title:"\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x",sidebar_position:1e4,hide_title:!0},c=void 0,a={},u=[];function d(e){return(0,s.jsx)(i.A,{})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},103514:(e,t,n)=>{n.d(t,{A:()=>v});n(296540);var r=n(634164),s=n(944718),o=n(328774),i=n(853465),l=n(316654),c=n(721312),a=n(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(474848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:s,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},853465:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(296540),s=n(144586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);