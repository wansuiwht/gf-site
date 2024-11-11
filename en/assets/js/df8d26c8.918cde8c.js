"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[59564],{379901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-gqueue","title":"\u961f\u5217\u7c7b\u578b-gqueue","description":"GoFrame\u6846\u67b6\u4e2d\u7684\u52a8\u6001\u5927\u5c0f\u5e76\u53d1\u5b89\u5168\u961f\u5217gqueue\uff0c\u5176\u652f\u6301\u56fa\u5b9a\u548c\u52a8\u6001\u5927\u5c0f\u961f\u5217\u7684\u529f\u80fd\uff0c\u4e0e\u6807\u51c6\u5e93\u7684channel\u6548\u7387\u76f8\u5f53\u3002gqueue\u7279\u522b\u9002\u5408\u4e8e\u591agoroutine\u4e4b\u95f4\u7684\u6570\u636e\u901a\u4fe1\uff0c\u5e76\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u7b80\u4fbf\u4e14\u5f3a\u5927\u7684\u5e76\u53d1\u5904\u7406\u80fd\u529b\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-gqueue.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue","slug":"/docs/components/container-gqueue","permalink":"/en/docs/components/container-gqueue","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-gqueue.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/container-gqueue","title":"\u961f\u5217\u7c7b\u578b-gqueue","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gqueue","\u961f\u5217","\u5e76\u53d1\u5b89\u5168","\u52a8\u6001\u961f\u5217","\u56fa\u5b9a\u961f\u5217","goroutine","\u6570\u636e\u901a\u4fe1","Go\u8bed\u8a00"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684\u52a8\u6001\u5927\u5c0f\u5e76\u53d1\u5b89\u5168\u961f\u5217gqueue\uff0c\u5176\u652f\u6301\u56fa\u5b9a\u548c\u52a8\u6001\u5927\u5c0f\u961f\u5217\u7684\u529f\u80fd\uff0c\u4e0e\u6807\u51c6\u5e93\u7684channel\u6548\u7387\u76f8\u5f53\u3002gqueue\u7279\u522b\u9002\u5408\u4e8e\u591agoroutine\u4e4b\u95f4\u7684\u6570\u636e\u901a\u4fe1\uff0c\u5e76\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u7b80\u4fbf\u4e14\u5f3a\u5927\u7684\u5e76\u53d1\u5904\u7406\u80fd\u529b\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5b89\u5168\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","permalink":"/en/docs/components/container-gtype-benchmark"},"next":{"title":"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/en/docs/components/container-gqueue-example"}}');var o=t(474848),s=t(28453),c=t(103514);const i={slug:"/docs/components/container-gqueue",title:"\u961f\u5217\u7c7b\u578b-gqueue",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gqueue","\u961f\u5217","\u5e76\u53d1\u5b89\u5168","\u52a8\u6001\u961f\u5217","\u56fa\u5b9a\u961f\u5217","goroutine","\u6570\u636e\u901a\u4fe1","Go\u8bed\u8a00"],description:"GoFrame\u6846\u67b6\u4e2d\u7684\u52a8\u6001\u5927\u5c0f\u5e76\u53d1\u5b89\u5168\u961f\u5217gqueue\uff0c\u5176\u652f\u6301\u56fa\u5b9a\u548c\u52a8\u6001\u5927\u5c0f\u961f\u5217\u7684\u529f\u80fd\uff0c\u4e0e\u6807\u51c6\u5e93\u7684channel\u6548\u7387\u76f8\u5f53\u3002gqueue\u7279\u522b\u9002\u5408\u4e8e\u591agoroutine\u4e4b\u95f4\u7684\u6570\u636e\u901a\u4fe1\uff0c\u5e76\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u7b80\u4fbf\u4e14\u5f3a\u5927\u7684\u5e76\u53d1\u5904\u7406\u80fd\u529b\u3002"},l=void 0,a={},u=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:["\u52a8\u6001\u5927\u5c0f\u7684\u5e76\u53d1\u5b89\u5168\u961f\u5217\u3002\u540c\u65f6\uff0c ",(0,o.jsx)(n.code,{children:"gqueue"})," \u4e5f\u652f\u6301\u56fa\u5b9a\u961f\u5217\u5927\u5c0f\uff0c\u56fa\u5b9a\u961f\u5217\u5927\u5c0f\u65f6\u961f\u5217\u6548\u7387\u548c\u6807\u51c6\u5e93\u7684 ",(0,o.jsx)(n.code,{children:"channel"})," \u65e0\u5f02\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8be5\u961f\u5217\u662f\u5e76\u53d1\u5b89\u5168\u7684\uff0c\u5e38\u7528\u4e8e\u591a ",(0,o.jsx)(n.code,{children:"goroutine"})," \u6570\u636e\u901a\u4fe1\u4e14\u652f\u6301\u52a8\u6001\u961f\u5217\u5927\u5c0f\u7684\u573a\u666f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gqueue"\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gqueue",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gqueue"})}),"\n",(0,o.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(c.A,{})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},103514:(e,n,t)=>{t.d(n,{A:()=>j});t(296540);var r=t(634164),o=t(944718),s=t(328774),c=t(853465),i=t(316654),l=t(721312),a=t(751107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(474848);function g(e){let{href:n,children:t}=e;return(0,d.jsx)(s.A,{href:n,className:(0,r.A)("card padding--lg",u.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:o,description:s}=e;return(0,d.jsxs)(g,{href:n,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[t," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:n}=e;const t=(0,o.Nr)(n),r=function(){const{selectMessage:e}=(0,c.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,d.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function p(e){let{item:n}=e;const t=(0,i.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(n.docId??void 0);return(0,d.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(p,{item:n});case"category":return(0,d.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,o.$S)();return(0,d.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(n);return(0,d.jsx)("section",{className:(0,r.A)("row",t),children:s.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},n)))})}},853465:(e,n,t)=>{t.d(n,{W:()=>a});var r=t(296540),o=t(144586);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((n=>e.includes(n)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:c(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=t.select(n),s=t.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(296540);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);