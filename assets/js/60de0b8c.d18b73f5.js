"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[95641],{634963:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/\u5f00\u53d1\u5de5\u5177/\u5f00\u53d1\u5de5\u5177","title":"\u5f00\u53d1\u5de5\u5177","description":"GoFrame\u6846\u67b6\u63d0\u4f9b\u7684gf\u547d\u4ee4\u884c\u5f00\u53d1\u5de5\u5177\uff0c\u6db5\u76d6\u4e86\u5de5\u5177\u804c\u8d23\u3001\u6ce8\u610f\u4e8b\u9879\u3001\u914d\u7f6e\u652f\u6301\u3001\u5de5\u5177\u8c03\u8bd5\u548c\u547d\u4ee4\u603b\u89c8\u7b49\u65b9\u9762\u7684\u8be6\u7ec6\u4fe1\u606f\u3002gf\u5de5\u5177\u65e8\u5728\u7b80\u5316\u5de5\u7a0b\u5f00\u53d1\u548c\u63d0\u9ad8\u6548\u7387\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u53ca\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f\u8fdb\u884c\u53c2\u6570\u914d\u7f6e\uff0c\u4ee5\u589e\u5f3a\u5de5\u5177\u7684\u6613\u7528\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5f00\u53d1\u5de5\u5177/\u5f00\u53d1\u5de5\u5177.md","sourceDirName":"docs/\u5f00\u53d1\u5de5\u5177","slug":"/docs/cli","permalink":"/2.7.x/docs/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5f00\u53d1\u5de5\u5177/\u5f00\u53d1\u5de5\u5177.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/cli","title":"\u5f00\u53d1\u5de5\u5177","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gf\u547d\u4ee4\u884c\u5de5\u5177","\u5f00\u53d1\u5de5\u5177","CLI\u5de5\u5177","\u6846\u67b6\u8bbe\u8ba1\u89c4\u8303","\u547d\u4ee4\u884c\u53c2\u6570","\u914d\u7f6e\u6587\u4ef6","\u8c03\u8bd5\u6a21\u5f0f","\u4ee3\u7801\u751f\u6210"],"description":"GoFrame\u6846\u67b6\u63d0\u4f9b\u7684gf\u547d\u4ee4\u884c\u5f00\u53d1\u5de5\u5177\uff0c\u6db5\u76d6\u4e86\u5de5\u5177\u804c\u8d23\u3001\u6ce8\u610f\u4e8b\u9879\u3001\u914d\u7f6e\u652f\u6301\u3001\u5de5\u5177\u8c03\u8bd5\u548c\u547d\u4ee4\u603b\u89c8\u7b49\u65b9\u9762\u7684\u8be6\u7ec6\u4fe1\u606f\u3002gf\u5de5\u5177\u65e8\u5728\u7b80\u5316\u5de5\u7a0b\u5f00\u53d1\u548c\u63d0\u9ad8\u6548\u7387\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u53ca\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f\u8fdb\u884c\u53c2\u6570\u914d\u7f6e\uff0c\u4ee5\u589e\u5f3a\u5de5\u5177\u7684\u6613\u7528\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5fae\u670d\u52a1\u4e0e\u6846\u67b6\u804c\u8d23\u8fb9\u754c","permalink":"/2.7.x/docs/design/micro-service-border"},"next":{"title":"\u5de5\u5177\u5b89\u88c5-install","permalink":"/2.7.x/docs/cli/install"}}');var i=r(474848),o=r(28453),s=r(103514);const c={slug:"/docs/cli",title:"\u5f00\u53d1\u5de5\u5177",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gf\u547d\u4ee4\u884c\u5de5\u5177","\u5f00\u53d1\u5de5\u5177","CLI\u5de5\u5177","\u6846\u67b6\u8bbe\u8ba1\u89c4\u8303","\u547d\u4ee4\u884c\u53c2\u6570","\u914d\u7f6e\u6587\u4ef6","\u8c03\u8bd5\u6a21\u5f0f","\u4ee3\u7801\u751f\u6210"],description:"GoFrame\u6846\u67b6\u63d0\u4f9b\u7684gf\u547d\u4ee4\u884c\u5f00\u53d1\u5de5\u5177\uff0c\u6db5\u76d6\u4e86\u5de5\u5177\u804c\u8d23\u3001\u6ce8\u610f\u4e8b\u9879\u3001\u914d\u7f6e\u652f\u6301\u3001\u5de5\u5177\u8c03\u8bd5\u548c\u547d\u4ee4\u603b\u89c8\u7b49\u65b9\u9762\u7684\u8be6\u7ec6\u4fe1\u606f\u3002gf\u5de5\u5177\u65e8\u5728\u7b80\u5316\u5de5\u7a0b\u5f00\u53d1\u548c\u63d0\u9ad8\u6548\u7387\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u53ca\u914d\u7f6e\u6587\u4ef6\u65b9\u5f0f\u8fdb\u884c\u53c2\u6570\u914d\u7f6e\uff0c\u4ee5\u589e\u5f3a\u5de5\u5177\u7684\u6613\u7528\u6027\u3002"},l=void 0,a={},d=[{value:"\u5de5\u5177\u804c\u8d23",id:"\u5de5\u5177\u804c\u8d23",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u914d\u7f6e\u652f\u6301",id:"\u914d\u7f6e\u652f\u6301",level:2},{value:"\u5de5\u5177\u8c03\u8bd5",id:"\u5de5\u5177\u8c03\u8bd5",level:2},{value:"\u547d\u4ee4\u603b\u89c8",id:"\u547d\u4ee4\u603b\u89c8",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u529f\u80fd\u5f3a\u5927\u7684 ",(0,i.jsx)(n.code,{children:"gf"})," \u547d\u4ee4\u884c\u5f00\u53d1\u8f85\u52a9\u5de5\u5177\uff0c\u662f\u6846\u67b6\u53d1\u5c55\u7684\u4e00\u4e2a\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u5de5\u5177\u5730\u5740\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/cmd/gf",children:"https://github.com/gogf/gf/tree/master/cmd/gf"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5de5\u5177\u5b89\u88c5\u8bf7\u53c2\u8003\u4ed3\u5e93\u9875\u9762\u3002\u5de5\u5177\u5b89\u88c5\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"gf"})," \u6216\u8005 ",(0,i.jsx)(n.code,{children:"gf -h"})," \u67e5\u770b\u6240\u6709\u652f\u6301\u7684\u547d\u4ee4\u3002\u590d\u6742\u7684\u547d\u4ee4\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"gf COMMAND -h"})," \u67e5\u770b\u66f4\u8be6\u7ec6\u7684\u4f7f\u7528\u5e2e\u52a9\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a ",(0,i.jsx)(n.code,{children:"gf gen -h"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5de5\u5177\u804c\u8d23",children:"\u5de5\u5177\u804c\u8d23"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7b80\u5316\u5de5\u7a0b\u5f00\u53d1\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387"}),"\n",(0,i.jsx)(n.li,{children:"\u652f\u6301\u6846\u67b6\u5de5\u7a0b\u8bbe\u8ba1\u89c4\u8303\u51c6\u786e\u843d\u5730"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u90e8\u5206\u547d\u4ee4\u9700\u8981\u60a8\u5148\u5b89\u88c5\u597d ",(0,i.jsx)(n.code,{children:"Golang"})," \u57fa\u7840\u7684\u5f00\u53d1\u73af\u5883\uff0c\u73af\u5883\u5b89\u88c5\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/install-go/index",children:"\u73af\u5883\u5b89\u88c5"})," \u7ae0\u8282\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6700\u65b0\u7684 ",(0,i.jsx)(n.code,{children:"CLI"})," \u5de5\u5177\u7248\u672c\u4f1a\u968f\u7740\u6700\u65b0\u7684\u6846\u67b6\u7248\u672c\u8d70\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u652f\u6301",children:"\u914d\u7f6e\u652f\u6301"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5de5\u5177\u7684\u6240\u6709\u547d\u4ee4\u5747\u540c\u65f6\u652f\u6301\u547d\u4ee4\u884c\u53ca\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u53c2\u6570\uff0c\u4ee5\u63d0\u9ad8\u6613\u7528\u6027\u3002\u5f53\u7ed9\u5b9a\u547d\u4ee4\u884c\u53c2\u6570\u65f6\u4f18\u5148\u8bfb\u53d6\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u5982\u679c\u547d\u4ee4\u884c\u53c2\u6570\u4e0d\u5b58\u5728\u65f6\uff0c\u81ea\u52a8\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u4e2d\u5bf9\u5e94\u7684\u53c2\u6570\u540d\u79f0\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u4f18\u5148\u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"hack"})," \u76ee\u5f55\uff08 ",(0,i.jsx)(n.code,{children:"hack/config.yaml"}),"\uff09\uff0c\u5176\u6b21\u6309\u7167\u6846\u67b6\u9ed8\u8ba4\u7684\u914d\u7f6e\u8def\u5f84\u68c0\u7d22\u914d\u7f6e\u6587\u4ef6\u3002\u6846\u67b6\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u68c0\u7d22\u8def\u5f84\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/core/gcfg-file",children:"\u914d\u7f6e\u7ba1\u7406-\u6587\u4ef6\u914d\u7f6e"})]}),"\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# GoFrame CLI tool configuration.\ngfcli:\n  gen:\n    dao:\n    - link:            "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n      tables:          "user"\n      removePrefix:    "gf_"\n      descriptionTag:  true\n      noModelComment:  true\n\n  docker:\n    build: "-a amd64 -s linux -p temp"\n    tagPrefixes:\n    - ccr.ccs.tencentyun.com/xxx\n    - hkccr.ccs.tencentyun.com/xxx\n    - sgccr.ccs.tencentyun.com/xxx\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f\u4ee5\u4e0a\u914d\u7f6e\u793a\u4f8b\u4ec5\u4f9b\u53c2\u8003\uff0c\u5177\u4f53\u914d\u7f6e\u9879\u8bf7\u53c2\u8003\u5177\u4f53\u547d\u4ee4\u5e2e\u52a9\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5de5\u5177\u8c03\u8bd5",children:"\u5de5\u5177\u8c03\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u5728\u5de5\u5177\u7684\u4f7f\u7528\u4e2d\u9047\u5230\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u6253\u5f00\u5de5\u5177\u7684\u8c03\u8bd5\u6a21\u5f0f\u83b7\u5f97\u66f4\u8be6\u7ec6\u7684\u5de5\u5177\u6267\u884c\u65e5\u5fd7\u4fe1\u606f\uff0c\u6253\u5f00\u5de5\u5177\u8c03\u8bd5\u6a21\u5f0f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"debug"})," \u547d\u4ee4\u884c\u9009\u9879\u5f00\u542f\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gf build main.go --debug\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,i.jsx)(n.code,{children:"gf"})," \u5de5\u5177\u4e5f\u662f\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5f00\u53d1\uff0c\u56e0\u6b64\u8c03\u8bd5\u4fe1\u606f\u7684\u5f00\u542f\u4e5f\u662f\u540c\u6846\u67b6\u65b9\u5f0f\u4e00\u81f4\uff0c\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u6846\u67b6\u4ecb\u7ecd\u6587\u6863\uff1a ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/core/debugging",children:"\u8c03\u8bd5\u6a21\u5f0f"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u547d\u4ee4\u603b\u89c8",children:"\u547d\u4ee4\u603b\u89c8"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u524d\u5e2e\u52a9\u6587\u6863\u4ee5 ",(0,i.jsx)(n.code,{children:"gf cli v2.0.0"})," \u7248\u672c\u4e3a\u4f8b\u8fdb\u884c\u7b80\u5355\u7684\u4ecb\u7ecd\uff0c\u8be6\u7ec6\u7684\u4ecb\u7ecd\u4fe1\u606f\u8bf7\u67e5\u770b\u547d\u4ee4\u884c\u5e2e\u52a9\u4fe1\u606f\u3002\u672c\u7ae0\u5185\u5bb9\u4fe1\u606f\u53ef\u80fd\u4f1a\u6709\u6ede\u540e\uff0c\u6700\u65b0\u7684\u5177\u4f53\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u67e5\u770b\u5de5\u5177\u5e2e\u52a9\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ gf\nUSAGE\n   gf COMMAND [OPTION]\n\nCOMMAND\n   env        show current Golang environment variables\n   run        running go codes with hot-compiled-like feature\n   gen        automatically generate go files for dao/dto/entity/pb/pbentity...\n   init       create and initialize an empty GoFrame project\n   pack       packing any file/directory to a resource file, or a go file\n   build      cross-building go project for lots of platforms\n   docker     build docker image for current GoFrame project\n   install    install gf binary to system (might need root/admin permission)\n   version    show version information of current binary\n\nOPTION\n   -y, --yes        all yes for all command without prompt ask\n   -v, --version    show version information of current binary\n   -d, --debug      show internal detailed debugging information\n   -h, --help       more information about this command\n\nADDITIONAL\n    Use "gf COMMAND -h" for details about a command.\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,i.jsx)(s.A,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},103514:(e,n,r)=>{r.d(n,{A:()=>j});r(296540);var t=r(634164),i=r(944718),o=r(328774),s=r(853465),c=r(316654),l=r(721312),a=r(751107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(474848);function h(e){let{href:n,children:r}=e;return(0,u.jsx)(o.A,{href:n,className:(0,t.A)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:n,icon:r,title:i,description:o}=e;return(0,u.jsxs)(h,{href:n,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,t.A)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),o&&(0,u.jsx)("p",{className:(0,t.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function f(e){let{item:n}=e;const r=(0,i.Nr)(n),t=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function g(e){let{item:n}=e;const r=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,i.cC)(n.docId??void 0);return(0,u.jsx)(m,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(g,{item:n});case"category":return(0,u.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function p(e){let{className:n}=e;const r=(0,i.$S)();return(0,u.jsx)(j,{items:r.items,className:n})}function j(e){const{items:n,className:r}=e;if(!n)return(0,u.jsx)(p,{...e});const o=(0,i.d1)(n);return(0,u.jsx)("section",{className:(0,t.A)("row",r),children:o.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},n)))})}},853465:(e,n,r)=>{r.d(n,{W:()=>a});var t=r(296540),i=r(144586);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const i=r.select(n),o=r.pluralForms.indexOf(i);return t[Math.min(o,t.length-1)]}(r,n,e)}}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(296540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);