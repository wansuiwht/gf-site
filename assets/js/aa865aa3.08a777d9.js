"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[47689],{584721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(474848),o=n(28453);const i={title:"Session-Memory",sidebar_position:1},r=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Memory",title:"Session-Memory",description:"\u5185\u5b58\u5b58\u50a8",source:"@site/versioned_docs/version-2.2.x/3-WEB\u670d\u52a1\u5f00\u53d1/7-Session/1-Session-Memory.md",sourceDirName:"3-WEB\u670d\u52a1\u5f00\u53d1/7-Session",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Memory",permalink:"/docs/2.2.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Memory",draft:!1,unlisted:!1,tags:[],version:"2.2.x",sidebarPosition:1,frontMatter:{title:"Session-Memory",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Session-File",permalink:"/docs/2.2.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-File"},next:{title:"Session-Redis-KeyValue",permalink:"/docs/2.2.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-KeyValue"}},d={},l=[{value:"\u5185\u5b58\u5b58\u50a8",id:"\u5185\u5b58\u5b58\u50a8",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u5185\u5b58\u5b58\u50a8",children:"\u5185\u5b58\u5b58\u50a8"}),"\n",(0,s.jsxs)(t.p,{children:["\u5185\u5b58\u5b58\u50a8\u6bd4\u8f83\u7b80\u5355\uff0c\u6027\u80fd\u4e5f\u5f88\u9ad8\u6548\uff0c\u4f46\u6ca1\u6709\u6301\u4e45\u5316\u5b58\u50a8 ",(0,s.jsx)(t.code,{children:"Session"})," \u6570\u636e\uff0c\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u91cd\u542f\u4e4b\u540e\u4fbf\u4f1a\u4e22\u5931 ",(0,s.jsx)(t.code,{children:"Session"})," \u6570\u636e\uff0c\u53ef\u7528\u4e8e\u7279\u5b9a\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u3002 ",(0,s.jsx)(t.code,{children:"gsession"})," \u7684 ",(0,s.jsx)(t.code,{children:"\u5185\u5b58"})," \u5b58\u50a8\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"StorageMemory"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c"]}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gsession"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"time"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.SetSessionMaxAge(time.Minute)\n\ts.SetSessionStorage(gsession.NewStorageMemory())\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/set", func(r *ghttp.Request) {\n\t\t\tr.Session.MustSet("time", gtime.Timestamp())\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t\tgroup.ALL("/get", func(r *ghttp.Request) {\n\t\t\tr.Response.Write(r.Session.Data())\n\t\t})\n\t\tgroup.ALL("/del", func(r *ghttp.Request) {\n\t\t\t_ = r.Session.RemoveAll()\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u8be5\u5b9e\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u89c2\u5bdf\u8fc7\u671f\u5931\u6548\uff0c\u6211\u4eec\u5c06 ",(0,s.jsx)(t.code,{children:"Session"})," \u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(t.code,{children:"1\u5206\u949f"}),"\u3002\u6267\u884c\u540e\uff0c"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u9996\u5148\uff0c\u8bbf\u95ee ",(0,s.jsx)(t.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8bbe\u7f6e\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:"Session"})," \u53d8\u91cf\uff1b"]}),"\n",(0,s.jsxs)(t.li,{children:["\u968f\u540e\uff0c\u8bbf\u95ee ",(0,s.jsx)(t.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u8be5 ",(0,s.jsx)(t.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u5e76\u6210\u529f\u83b7\u53d6\uff1b"]}),"\n",(0,s.jsxs)(t.li,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u505c\u6b62\u7a0b\u5e8f\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,s.jsx)(t.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,s.jsx)(t.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u6ca1\u6709\u4e86\uff1b"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(296540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);