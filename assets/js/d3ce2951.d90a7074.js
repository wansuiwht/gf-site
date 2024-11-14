"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[19509],{594183:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-gpool","title":"\u5bf9\u8c61\u590d\u7528-gpool","description":"GoFrame\u6846\u67b6\u4e2d\u7684\u5bf9\u8c61\u590d\u7528\u6c60gpool\u7684\u57fa\u672c\u529f\u80fd\u548c\u4f7f\u7528\u573a\u666f\uff0c\u5305\u62ec\u63d0\u4f9b\u5bf9\u8c61\u7f13\u5b58\u590d\u7528\u3001\u8fc7\u671f\u65f6\u95f4\u3001\u521b\u5efa\u548c\u9500\u6bc1\u65b9\u6cd5\u7684\u5b9a\u4e49\u3002gpool\u8bbe\u8ba1\u4e0esync.Pool\u7684\u533a\u522b\u5728\u4e8e\u5bf9\u8fc7\u671f\u65f6\u95f4\u7684\u652f\u6301\u548cGC\u538b\u529b\u7f13\u89e3\u529f\u80fd\u7684\u4e0d\u540c\uff0c\u662f\u5e76\u53d1\u5b89\u5168\u7684\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-gpool.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool","slug":"/docs/components/container-gpool","permalink":"/2.7.x/docs/components/container-gpool","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u5bf9\u8c61\u590d\u7528-gpool/\u5bf9\u8c61\u590d\u7528-gpool.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/components/container-gpool","title":"\u5bf9\u8c61\u590d\u7528-gpool","sidebar_position":8,"hide_title":true,"keywords":["\u5bf9\u8c61\u590d\u7528","GoFrame\u6846\u67b6","gpool","\u8fc7\u671f\u65f6\u95f4","\u521b\u5efa\u65b9\u6cd5","\u9500\u6bc1\u65b9\u6cd5","\u5e76\u53d1\u5b89\u5168","sync.Pool","GC\u538b\u529b","\u7f13\u5b58\u590d\u7528"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684\u5bf9\u8c61\u590d\u7528\u6c60gpool\u7684\u57fa\u672c\u529f\u80fd\u548c\u4f7f\u7528\u573a\u666f\uff0c\u5305\u62ec\u63d0\u4f9b\u5bf9\u8c61\u7f13\u5b58\u590d\u7528\u3001\u8fc7\u671f\u65f6\u95f4\u3001\u521b\u5efa\u548c\u9500\u6bc1\u65b9\u6cd5\u7684\u5b9a\u4e49\u3002gpool\u8bbe\u8ba1\u4e0esync.Pool\u7684\u533a\u522b\u5728\u4e8e\u5bf9\u8fc7\u671f\u65f6\u95f4\u7684\u652f\u6301\u548cGC\u538b\u529b\u7f13\u89e3\u529f\u80fd\u7684\u4e0d\u540c\uff0c\u662f\u5e76\u53d1\u5b89\u5168\u7684\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/2.7.x/docs/components/container-gtree-funcs"},"next":{"title":"\u5bf9\u8c61\u590d\u7528-\u57fa\u672c\u4f7f\u7528","permalink":"/2.7.x/docs/components/container-gpool-example"}}');var s=n(474848),c=n(28453),r=n(103514);const l={slug:"/docs/components/container-gpool",title:"\u5bf9\u8c61\u590d\u7528-gpool",sidebar_position:8,hide_title:!0,keywords:["\u5bf9\u8c61\u590d\u7528","GoFrame\u6846\u67b6","gpool","\u8fc7\u671f\u65f6\u95f4","\u521b\u5efa\u65b9\u6cd5","\u9500\u6bc1\u65b9\u6cd5","\u5e76\u53d1\u5b89\u5168","sync.Pool","GC\u538b\u529b","\u7f13\u5b58\u590d\u7528"],description:"GoFrame\u6846\u67b6\u4e2d\u7684\u5bf9\u8c61\u590d\u7528\u6c60gpool\u7684\u57fa\u672c\u529f\u80fd\u548c\u4f7f\u7528\u573a\u666f\uff0c\u5305\u62ec\u63d0\u4f9b\u5bf9\u8c61\u7f13\u5b58\u590d\u7528\u3001\u8fc7\u671f\u65f6\u95f4\u3001\u521b\u5efa\u548c\u9500\u6bc1\u65b9\u6cd5\u7684\u5b9a\u4e49\u3002gpool\u8bbe\u8ba1\u4e0esync.Pool\u7684\u533a\u522b\u5728\u4e8e\u5bf9\u8fc7\u671f\u65f6\u95f4\u7684\u652f\u6301\u548cGC\u538b\u529b\u7f13\u89e3\u529f\u80fd\u7684\u4e0d\u540c\uff0c\u662f\u5e76\u53d1\u5b89\u5168\u7684\u3002"},i=void 0,d={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"<code>gpool</code> \u4e0e <code>sync.Pool</code>",id:"gpool-\u4e0e-syncpool",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function p(e){const o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(o.p,{children:["\u5bf9\u8c61\u590d\u7528\u6c60\uff08\u5e76\u53d1\u5b89\u5168\uff09\u3002\u5c06\u5bf9\u8c61\u8fdb\u884c\u7f13\u5b58\u590d\u7528\uff0c\u652f\u6301 ",(0,s.jsx)(o.code,{children:"\u8fc7\u671f\u65f6\u95f4"}),"\u3001 ",(0,s.jsx)(o.code,{children:"\u521b\u5efa\u65b9\u6cd5"})," \u53ca ",(0,s.jsx)(o.code,{children:"\u9500\u6bc1\u65b9\u6cd5"})," \u5b9a\u4e49\u3002"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,s.jsx)(o.p,{children:"\u4efb\u4f55\u9700\u8981\u652f\u6301\u5b9a\u65f6\u8fc7\u671f\u7684\u5bf9\u8c61\u590d\u7528\u573a\u666f\u3002"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/container/gpool"\n'})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gpool"})}),"\n",(0,s.jsx)(o.p,{children:"\u9700\u8981\u6ce8\u610f\u4e24\u70b9\uff1a"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"New"})," \u65b9\u6cd5\u7684\u8fc7\u671f\u65f6\u95f4\u7c7b\u578b\u4e3a ",(0,s.jsx)(o.code,{children:"time.Duration"}),"\u3002"]}),"\n",(0,s.jsxs)(o.li,{children:["\u5bf9\u8c61 ",(0,s.jsx)(o.code,{children:"\u521b\u5efa\u65b9\u6cd5"}),"( ",(0,s.jsx)(o.code,{children:"newFunc NewFunc"}),")\u8fd4\u56de\u503c\u5305\u542b\u4e00\u4e2a ",(0,s.jsx)(o.code,{children:"error"})," \u8fd4\u56de\uff0c\u5f53\u5bf9\u8c61\u521b\u5efa\u5931\u8d25\u65f6\u53ef\u7531\u8be5\u8fd4\u56de\u503c\u53cd\u9988\u539f\u56e0\u3002"]}),"\n",(0,s.jsxs)(o.li,{children:["\u5bf9\u8c61 ",(0,s.jsx)(o.code,{children:"\u9500\u6bc1\u65b9\u6cd5"}),"( ",(0,s.jsx)(o.code,{children:"expireFunc...ExpireFunc"}),")\u4e3a\u53ef\u9009\u53c2\u6570\uff0c\u7528\u4ee5\u5f53\u5bf9\u8c61\u8d85\u65f6/\u6c60\u5173\u95ed\u65f6\uff0c\u81ea\u52a8\u8c03\u7528\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\u9500\u6bc1\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(o.h2,{id:"gpool-\u4e0e-syncpool",children:[(0,s.jsx)(o.code,{children:"gpool"})," \u4e0e ",(0,s.jsx)(o.code,{children:"sync.Pool"})]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"gpool"})," \u4e0e ",(0,s.jsx)(o.code,{children:"sync.Pool"})," \u90fd\u53ef\u4ee5\u8fbe\u5230\u5bf9\u8c61\u590d\u7528\u7684\u4f5c\u7528\uff0c\u4f46\u662f\u4e24\u8005\u7684\u8bbe\u8ba1\u521d\u8877\u548c\u4f7f\u7528\u573a\u666f\u4e0d\u592a\u4e00\u6837\u3002"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"sync.Pool"})," \u7684\u5bf9\u8c61\u751f\u547d\u5468\u671f\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u8fc7\u671f\u65f6\u95f4\uff0c\u7a76\u5176\u539f\u56e0\uff0c ",(0,s.jsx)(o.code,{children:"sync.Pool"})," \u5e76\u4e0d\u662f\u4e00\u4e2a ",(0,s.jsx)(o.code,{children:"Cache"}),"\uff1b ",(0,s.jsx)(o.code,{children:"sync.Pool"})," \u8bbe\u8ba1\u521d\u8877\u662f\u4e3a\u4e86\u7f13\u89e3GC ",(0,s.jsx)(o.code,{children:"\u538b\u529b"}),"\uff0c ",(0,s.jsx)(o.code,{children:"sync.Pool"})," \u4e2d\u7684\u5bf9\u8c61\u4f1a\u5728 ",(0,s.jsx)(o.code,{children:"GC"})," \u5f00\u59cb\u524d\u5168\u90e8\u6e05\u9664\uff1b\u5e76\u4e14 ",(0,s.jsx)(o.code,{children:"sync.Pool"})," \u4e0d\u652f\u6301\u5bf9\u8c61\u521b\u5efa\u65b9\u6cd5\u53ca\u9500\u6bc1\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(o.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,s.jsx)(r.A,{})]})}function u(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},103514:(e,o,n)=>{n.d(o,{A:()=>j});n(296540);var t=n(634164),s=n(944718),c=n(328774),r=n(853465),l=n(316654),i=n(721312),d=n(751107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=n(474848);function u(e){let{href:o,children:n}=e;return(0,p.jsx)(c.A,{href:o,className:(0,t.A)("card padding--lg",a.cardContainer),children:n})}function h(e){let{href:o,icon:n,title:s,description:c}=e;return(0,p.jsxs)(u,{href:o,children:[(0,p.jsxs)(d.A,{as:"h2",className:(0,t.A)("text--truncate",a.cardTitle),title:s,children:[n," ",s]}),c&&(0,p.jsx)("p",{className:(0,t.A)("text--truncate",a.cardDescription),title:c,children:c})]})}function g(e){let{item:o}=e;const n=(0,s.Nr)(o),t=function(){const{selectMessage:e}=(0,r.W)();return o=>e(o,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:o}))}();return n?(0,p.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:o.label,description:o.description??t(o.items.length)}):null}function m(e){let{item:o}=e;const n=(0,l.A)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,s.cC)(o.docId??void 0);return(0,p.jsx)(h,{href:o.href,icon:n,title:o.label,description:o.description??t?.description})}function x(e){let{item:o}=e;switch(o.type){case"link":return(0,p.jsx)(m,{item:o});case"category":return(0,p.jsx)(g,{item:o});default:throw new Error(`unknown item type ${JSON.stringify(o)}`)}}function f(e){let{className:o}=e;const n=(0,s.$S)();return(0,p.jsx)(j,{items:n.items,className:o})}function j(e){const{items:o,className:n}=e;if(!o)return(0,p.jsx)(f,{...e});const c=(0,s.d1)(o);return(0,p.jsx)("section",{className:(0,t.A)("row",n),children:c.map(((e,o)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(x,{item:e})},o)))})}},853465:(e,o,n)=>{n.d(o,{W:()=>d});var t=n(296540),s=n(144586);const c=["zero","one","two","few","many","other"];function r(e){return c.filter((o=>e.includes(o)))}const l={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,t.useMemo)((()=>{try{return function(e){const o=new Intl.PluralRules(e);return{locale:e,pluralForms:r(o.resolvedOptions().pluralCategories),select:e=>o.select(e)}}(e)}catch(o){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${o.message}\n`),l}}),[e])}function d(){const e=i();return{selectMessage:(o,n)=>function(e,o,n){const t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const s=n.select(o),c=n.pluralForms.indexOf(s);return t[Math.min(c,t.length-1)]}(n,o,e)}}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>l});var t=n(296540);const s={},c=t.createContext(s);function r(e){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);