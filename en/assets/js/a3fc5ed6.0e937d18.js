"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[75078],{162652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context","title":"\u65e5\u5fd7\u7ec4\u4ef6-Context","description":"GoFrame\u6846\u67b6\u4e2dglog\u65e5\u5fd7\u7ec4\u4ef6\u7684\u4f7f\u7528\uff0c\u7279\u522b\u662f\u5982\u4f55\u901a\u8fc7Context\u4e0a\u4e0b\u6587\u53d8\u91cf\u5b9e\u73b0\u65e5\u5fd7\u6253\u5370\u3002\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86\u81ea\u5b9a\u4e49CtxKeys\u7684\u914d\u7f6e\u548c\u4f7f\u7528\u793a\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e86\u94fe\u8def\u8ddf\u8e2a\u652f\u6301\u7684\u529f\u80fd\u3002\u6b64\u5916\uff0c\u8fd8\u6d89\u53ca\u4e86\u65e5\u5fd7Handler\u7684\u5b9e\u73b0\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u96c6\u6210\u65e5\u5fd7\u529f\u80fd\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/docs/core/glog-context","permalink":"/en/docs/core/glog-context","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/glog-context","title":"\u65e5\u5fd7\u7ec4\u4ef6-Context","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","glog","\u65e5\u5fd7\u7ec4\u4ef6","Context","CtxKeys","\u65e5\u5fd7\u8f93\u51fa","OpenTelemetry","\u94fe\u8def\u8ddf\u8e2a","Handler"],"description":"GoFrame\u6846\u67b6\u4e2dglog\u65e5\u5fd7\u7ec4\u4ef6\u7684\u4f7f\u7528\uff0c\u7279\u522b\u662f\u5982\u4f55\u901a\u8fc7Context\u4e0a\u4e0b\u6587\u53d8\u91cf\u5b9e\u73b0\u65e5\u5fd7\u6253\u5370\u3002\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86\u81ea\u5b9a\u4e49CtxKeys\u7684\u914d\u7f6e\u548c\u4f7f\u7528\u793a\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e86\u94fe\u8def\u8ddf\u8e2a\u652f\u6301\u7684\u529f\u80fd\u3002\u6b64\u5916\uff0c\u8fd8\u6d89\u53ca\u4e86\u65e5\u5fd7Handler\u7684\u5b9e\u73b0\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u96c6\u6210\u65e5\u5fd7\u529f\u80fd\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u989c\u8272\u6253\u5370","permalink":"/en/docs/core/glog-color"},"next":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Handler","permalink":"/en/docs/core/glog-handler"}}');var r=t(474848),c=t(28453);const s={slug:"/docs/core/glog-context",title:"\u65e5\u5fd7\u7ec4\u4ef6-Context",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","glog","\u65e5\u5fd7\u7ec4\u4ef6","Context","CtxKeys","\u65e5\u5fd7\u8f93\u51fa","OpenTelemetry","\u94fe\u8def\u8ddf\u8e2a","Handler"],description:"GoFrame\u6846\u67b6\u4e2dglog\u65e5\u5fd7\u7ec4\u4ef6\u7684\u4f7f\u7528\uff0c\u7279\u522b\u662f\u5982\u4f55\u901a\u8fc7Context\u4e0a\u4e0b\u6587\u53d8\u91cf\u5b9e\u73b0\u65e5\u5fd7\u6253\u5370\u3002\u6587\u7ae0\u8be6\u7ec6\u8bb2\u89e3\u4e86\u81ea\u5b9a\u4e49CtxKeys\u7684\u914d\u7f6e\u548c\u4f7f\u7528\u793a\u4f8b\uff0c\u5e76\u63d0\u4f9b\u4e86\u94fe\u8def\u8ddf\u8e2a\u652f\u6301\u7684\u529f\u80fd\u3002\u6b64\u5916\uff0c\u8fd8\u6d89\u53ca\u4e86\u65e5\u5fd7Handler\u7684\u5b9e\u73b0\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u96c6\u6210\u65e5\u5fd7\u529f\u80fd\u3002"},d=void 0,l={},i=[{value:"\u81ea\u5b9a\u4e49 <code>CtxKeys</code>",id:"\u81ea\u5b9a\u4e49-ctxkeys",level:2},{value:"\u4f7f\u7528\u914d\u7f6e",id:"\u4f7f\u7528\u914d\u7f6e",level:3},{value:"\u65e5\u5fd7\u8f93\u51fa",id:"\u65e5\u5fd7\u8f93\u51fa",level:3},{value:"\u65e5\u5fd7\u793a\u4f8b",id:"\u65e5\u5fd7\u793a\u4f8b",level:3},{value:"\u4f20\u9012\u7ed9 <code>Handler</code>",id:"\u4f20\u9012\u7ed9-handler",level:2},{value:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",id:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4ece ",(0,r.jsx)(n.code,{children:"v2"})," \u7248\u672c\u5f00\u59cb\uff0c ",(0,r.jsx)(n.code,{children:"glog"})," \u7ec4\u4ef6\u5c06 ",(0,r.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f5c\u4e3a\u65e5\u5fd7\u6253\u5370\u7684\u5fc5\u9700\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u81ea\u5b9a\u4e49-ctxkeys",children:["\u81ea\u5b9a\u4e49 ",(0,r.jsx)(n.code,{children:"CtxKeys"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u65e5\u5fd7\u7ec4\u4ef6\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u6253\u5370\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4e2d\u8bfb\u53d6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528\u914d\u7f6e",children:"\u4f7f\u7528\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# \u65e5\u5fd7\u7ec4\u4ef6\u914d\u7f6e\nlogger:\n  Level:   "all"\n  Stdout:  true\n  CtxKeys: ["RequestId", "UserId"]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"CtxKeys"})," \u7528\u4e8e\u914d\u7f6e\u9700\u8981\u4ece ",(0,r.jsx)(n.code,{children:"context.Context"})," \u63a5\u53e3\u5bf9\u8c61\u4e2d\u8bfb\u53d6\u5e76\u8f93\u51fa\u7684\u952e\u540d\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u65e5\u5fd7\u8f93\u51fa",children:"\u65e5\u5fd7\u8f93\u51fa"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u4e0a\u8ff0\u914d\u7f6e\uff0c\u7136\u540e\u5728\u8f93\u51fa\u65e5\u5fd7\u7684\u65f6\u5019\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Ctx"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u6307\u5b9a\u8f93\u51fa\u7684 ",(0,r.jsx)(n.code,{children:"context.Context"})," \u63a5\u53e3\u5bf9\u8c61\uff0c\u8bf7\u6ce8\u610f ",(0,r.jsx)(n.strong,{children:"\u4e0d\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u578b\u4f5c\u4e3aKey"}),"\uff0c\u5426\u5219\u65e0\u6cd5\u8f93\u51fa\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    var ctx = context.Background()\n\n    // \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528String\u4f5c\u4e3aKey\n    ctx = context.WithValue(ctx, "RequestId", "123456789")\n\n    // \u5982\u9700\u5c06Key\u63d0\u53d6\u4e3a\u516c\u5171\u53d8\u91cf\uff0c\u53ef\u4ee5\u4f7f\u7528gctx.StrKey\u7c7b\u578b\uff0c\u6216\u76f4\u63a5\u4f7f\u7528string\u7c7b\u578b\n    const userIdKey gctx.StrKey = "UserId" // or const userIdKey = "UserId"\n    ctx = context.WithValue(ctx, userIdKey, "10000")\n\n    // \u4e0d\u80fd\u81ea\u5b9a\u4e49\u7c7b\u578b\n    type notPrintKeyType string\n    const notPrintKey notPrintKeyType = "NotPrintKey"\n    ctx = context.WithValue(ctx, notPrintKey, "notPrintValue") // \u4e0d\u4f1a\u6253\u5370 notPrintValue\n\n    g.Log().Error(ctx, "runtime error")\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"2024-09-26 11:45:33.790 [ERRO] {123456789, 10000} runtime error\nStack:\n1.  main.main\n    /Users/teemo/GolandProjects/gogf/demo/main.go:24\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u65e5\u5fd7\u793a\u4f8b",children:"\u65e5\u5fd7\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(921978).A+"",width:"2800",height:"538"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4f20\u9012\u7ed9-handler",children:["\u4f20\u9012\u7ed9 ",(0,r.jsx)(n.code,{children:"Handler"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u4e86\u65e5\u5fd7\u5bf9\u8c61\u7684 ",(0,r.jsx)(n.code,{children:"Handler"}),"\uff0c\u90a3\u4e48\u6bcf\u4e2a\u65e5\u5fd7\u6253\u5370\u4f20\u9012\u7684 ",(0,r.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u5c06\u4f1a\u4f20\u9012\u7ed9 ",(0,r.jsx)(n.code,{children:"Handler"})," \u4e2d\u3002\u5173\u4e8e\u65e5\u5fd7 ",(0,r.jsx)(n.code,{children:"Handler"})," \u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"/en/docs/core/glog-handler",children:"\u65e5\u5fd7\u7ec4\u4ef6-Handler"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",children:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"glog"})," \u7ec4\u4ef6\u652f\u6301 ",(0,r.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51c6\u7684\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u8be5\u652f\u6301\u662f\u5185\u7f6e\u7684\uff0c\u65e0\u9700\u5f00\u53d1\u8005\u505a\u4efb\u4f55\u8bbe\u7f6e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(n.a,{href:"/en/docs/obs/tracing",children:"\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(982371).A+"",width:"2450",height:"894"})})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},982371:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/a6ade54c58ba067b6be203a6e17b15e5-c66cb4f4b992630587c97e5617457a96.png"},921978:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/d9b17863576dca859b0b13b98041130e-6f8721f1bdf36091bb8ab5eac0bcba1a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(296540);const r={},c=o.createContext(r);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);