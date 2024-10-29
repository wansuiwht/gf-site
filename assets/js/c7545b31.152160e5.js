"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94599],{41581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var c=t(74848),r=t(28453);const d={title:"\u65e5\u5fd7\u7ec4\u4ef6-Context",sidebar_position:5,hide_title:!0},s=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context",title:"\u65e5\u5fd7\u7ec4\u4ef6-Context",description:"\u4ece v2 \u7248\u672c\u5f00\u59cb\uff0c glog \u7ec4\u4ef6\u5c06 ctx \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f5c\u4e3a\u65e5\u5fd7\u6253\u5370\u7684\u5fc5\u9700\u53c2\u6570\u3002",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6/5-\u65e5\u5fd7\u7ec4\u4ef6-Context.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Context",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6/5-\u65e5\u5fd7\u7ec4\u4ef6-Context.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:5,frontMatter:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Context",sidebar_position:5,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u989c\u8272\u6253\u5370",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u989c\u8272\u6253\u5370"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-Handler",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Handler"}},o={},l=[{value:"\u81ea\u5b9a\u4e49 <code>CtxKeys</code>",id:"\u81ea\u5b9a\u4e49-ctxkeys",level:2},{value:"\u4f7f\u7528\u914d\u7f6e",id:"\u4f7f\u7528\u914d\u7f6e",level:3},{value:"\u65e5\u5fd7\u8f93\u51fa",id:"\u65e5\u5fd7\u8f93\u51fa",level:3},{value:"\u65e5\u5fd7\u793a\u4f8b",id:"\u65e5\u5fd7\u793a\u4f8b",level:3},{value:"\u4f20\u9012\u7ed9 <code>Handler</code>",id:"\u4f20\u9012\u7ed9-handler",level:2},{value:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",id:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u4ece ",(0,c.jsx)(n.code,{children:"v2"})," \u7248\u672c\u5f00\u59cb\uff0c ",(0,c.jsx)(n.code,{children:"glog"})," \u7ec4\u4ef6\u5c06 ",(0,c.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4f5c\u4e3a\u65e5\u5fd7\u6253\u5370\u7684\u5fc5\u9700\u53c2\u6570\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u81ea\u5b9a\u4e49-ctxkeys",children:["\u81ea\u5b9a\u4e49 ",(0,c.jsx)(n.code,{children:"CtxKeys"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u65e5\u5fd7\u7ec4\u4ef6\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u6253\u5370\uff0c\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u4e2d\u8bfb\u53d6\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4f7f\u7528\u914d\u7f6e",children:"\u4f7f\u7528\u914d\u7f6e"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'# \u65e5\u5fd7\u7ec4\u4ef6\u914d\u7f6e\nlogger:\n  Level:   "all"\n  Stdout:  true\n  CtxKeys: ["RequestId", "UserId"]\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"CtxKeys"})," \u7528\u4e8e\u914d\u7f6e\u9700\u8981\u4ece ",(0,c.jsx)(n.code,{children:"context.Context"})," \u63a5\u53e3\u5bf9\u8c61\u4e2d\u8bfb\u53d6\u5e76\u8f93\u51fa\u7684\u952e\u540d\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u65e5\u5fd7\u8f93\u51fa",children:"\u65e5\u5fd7\u8f93\u51fa"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528\u4e0a\u8ff0\u914d\u7f6e\uff0c\u7136\u540e\u5728\u8f93\u51fa\u65e5\u5fd7\u7684\u65f6\u5019\uff0c\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"Ctx"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u6307\u5b9a\u8f93\u51fa\u7684 ",(0,c.jsx)(n.code,{children:"context.Context"})," \u63a5\u53e3\u5bf9\u8c61\uff0c\u8bf7\u6ce8\u610f ",(0,c.jsx)(n.strong,{children:"\u4e0d\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u578b\u4f5c\u4e3aKey"}),"\uff0c\u5426\u5219\u65e0\u6cd5\u8f93\u51fa\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tvar ctx = context.Background()\n\n\t// \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528String\u4f5c\u4e3aKey\n\tctx = context.WithValue(ctx, "RequestId", "123456789")\n\n\t// \u5982\u9700\u5c06Key\u63d0\u53d6\u4e3a\u516c\u5171\u53d8\u91cf\uff0c\u53ef\u4ee5\u4f7f\u7528gctx.StrKey\u7c7b\u578b\uff0c\u6216\u76f4\u63a5\u4f7f\u7528string\u7c7b\u578b\n\tconst userIdKey gctx.StrKey = "UserId" // or const userIdKey = "UserId"\n\tctx = context.WithValue(ctx, userIdKey, "10000")\n\n\t// \u4e0d\u80fd\u81ea\u5b9a\u4e49\u7c7b\u578b\n\ttype notPrintKeyType string\n\tconst notPrintKey notPrintKeyType = "NotPrintKey"\n\tctx = context.WithValue(ctx, notPrintKey, "notPrintValue") // \u4e0d\u4f1a\u6253\u5370 notPrintValue\n\n\tg.Log().Error(ctx, "runtime error")\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"2024-09-26 11:45:33.790 [ERRO] {123456789, 10000} runtime error\nStack:\n1.  main.main\n    /Users/teemo/GolandProjects/gogf/demo/main.go:24\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u65e5\u5fd7\u793a\u4f8b",children:"\u65e5\u5fd7\u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(21978).A+"",width:"2800",height:"538"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u4f20\u9012\u7ed9-handler",children:["\u4f20\u9012\u7ed9 ",(0,c.jsx)(n.code,{children:"Handler"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u4e86\u65e5\u5fd7\u5bf9\u8c61\u7684 ",(0,c.jsx)(n.code,{children:"Handler"}),"\uff0c\u90a3\u4e48\u6bcf\u4e2a\u65e5\u5fd7\u6253\u5370\u4f20\u9012\u7684 ",(0,c.jsx)(n.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u5c06\u4f1a\u4f20\u9012\u7ed9 ",(0,c.jsx)(n.code,{children:"Handler"})," \u4e2d\u3002\u5173\u4e8e\u65e5\u5fd7 ",(0,c.jsx)(n.code,{children:"Handler"})," \u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(n.a,{href:"/docs/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6-Handler",children:"\u65e5\u5fd7\u7ec4\u4ef6-Handler"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301",children:"\u94fe\u8def\u8ddf\u8e2a\u652f\u6301"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"glog"})," \u7ec4\u4ef6\u652f\u6301 ",(0,c.jsx)(n.code,{children:"OpenTelemetry"})," \u6807\u51c6\u7684\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\uff0c\u8be5\u652f\u6301\u662f\u5185\u7f6e\u7684\uff0c\u65e0\u9700\u5f00\u53d1\u8005\u505a\u4efb\u4f55\u8bbe\u7f6e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(n.a,{href:"/docs/%E6%9C%8D%E5%8A%A1%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7/%E6%9C%8D%E5%8A%A1%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA",children:"\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(82371).A+"",width:"2450",height:"894"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},82371:(e,n,t)=>{t.d(n,{A:()=>c});const c=t.p+"assets/images/a6ade54c58ba067b6be203a6e17b15e5-c66cb4f4b992630587c97e5617457a96.png"},21978:(e,n,t)=>{t.d(n,{A:()=>c});const c=t.p+"assets/images/d9b17863576dca859b0b13b98041130e-6f8721f1bdf36091bb8ab5eac0bcba1a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var c=t(96540);const r={},d=c.createContext(r);function s(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);