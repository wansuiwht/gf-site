"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[2274],{28210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const i={title:"CSRF\u9632\u5fa1\u8bbe\u7f6e",sidebar_position:5,hide_title:!0},s=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e",title:"CSRF\u9632\u5fa1\u8bbe\u7f6e",description:"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff08\u82f1\u8bed\uff1a Cross-Site Request Forgery\uff09\uff0c\u4e5f\u88ab\u79f0\u4e3aone-click attack\u6216\u8005session riding\uff0c\u901a\u5e38\u7f29\u5199\u4e3aCSRF \u6216\u8005XSRF\uff0c \u662f\u4e00\u79cd\u631f\u5236\u7528\u6237\u5728\u5f53\u524d\u5df2\u767b\u5f55\u7684Web\u5e94\u7528\u7a0b\u5e8f\u4e0a\u6267\u884c\u975e\u672c\u610f\u7684\u64cd\u4f5c\u7684\u653b\u51fb\u65b9\u6cd5\u3002\u8ddf\u8de8\u7f51\u7ad9\u811a\u672c\uff08 XSS\uff09\u76f8\u6bd4\uff0c XSS \u5229\u7528\u7684\u662f\u7528\u6237\u5bf9\u6307\u5b9a\u7f51\u7ad9\u7684\u4fe1\u4efb\uff0c CSRF \u5229\u7528\u7684\u662f\u7f51\u7ad9\u5bf9\u7528\u6237\u7f51\u9875\u6d4f\u89c8\u5668\u7684\u4fe1\u4efb\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/5-CSRF\u9632\u5fa1\u8bbe\u7f6e.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CSRF\u9632\u5fa1\u8bbe\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/5-CSRF\u9632\u5fa1\u8bbe\u7f6e.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:5,frontMatter:{title:"CSRF\u9632\u5fa1\u8bbe\u7f6e",sidebar_position:5,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"CORS\u8de8\u57df\u5904\u7406",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/CORS\u8de8\u57df\u5904\u7406"},next:{title:"HOOK\u4e8b\u4ef6\u56de\u8c03",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HOOK\u4e8b\u4ef6\u56de\u8c03"}},d={},l=[{value:"\u5982\u4f55\u9632\u5fa1",id:"\u5982\u4f55\u9632\u5fa1",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5f15\u5165\u63d2\u4ef6\u5305",id:"\u5f15\u5165\u63d2\u4ef6\u5305",level:3},{value:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6",id:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6",level:3},{value:"\u524d\u7aef\u5bf9\u63a5",id:"\u524d\u7aef\u5bf9\u63a5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e",id:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e",level:3},{value:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c",id:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020"}),"\uff08\u82f1\u8bed\uff1a ",(0,r.jsx)(t.code,{children:"Cross-Site Request Forgery"}),"\uff09\uff0c\u4e5f\u88ab\u79f0\u4e3a",(0,r.jsx)(t.strong,{children:"one-click attack"}),"\u6216\u8005",(0,r.jsx)(t.strong,{children:"session riding"}),"\uff0c\u901a\u5e38\u7f29\u5199\u4e3a",(0,r.jsx)(t.strong,{children:"CSRF"})," \u6216\u8005",(0,r.jsx)(t.strong,{children:"XSRF"}),"\uff0c \u662f\u4e00\u79cd\u631f\u5236\u7528\u6237\u5728\u5f53\u524d\u5df2\u767b\u5f55\u7684Web\u5e94\u7528\u7a0b\u5e8f\u4e0a\u6267\u884c\u975e\u672c\u610f\u7684\u64cd\u4f5c\u7684\u653b\u51fb\u65b9\u6cd5\u3002\u8ddf\u8de8\u7f51\u7ad9\u811a\u672c\uff08 ",(0,r.jsx)(t.code,{children:"XSS"}),"\uff09\u76f8\u6bd4\uff0c ",(0,r.jsx)(t.strong,{children:"XSS"})," \u5229\u7528\u7684\u662f\u7528\u6237\u5bf9\u6307\u5b9a\u7f51\u7ad9\u7684\u4fe1\u4efb\uff0c ",(0,r.jsx)(t.code,{children:"CSRF"})," \u5229\u7528\u7684\u662f\u7f51\u7ad9\u5bf9\u7528\u6237\u7f51\u9875\u6d4f\u89c8\u5668\u7684\u4fe1\u4efb\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5982\u4f55\u9632\u5fa1",children:"\u5982\u4f55\u9632\u5fa1"}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd9\u91cc\u6211\u4eec\u9009\u62e9\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"token"})," \u7684\u65b9\u5f0f\u5bf9\u8bf7\u6c42\u8fdb\u884c\u6821\u9a8c\uff0c\u901a\u8fc7\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c ",(0,r.jsx)(t.code,{children:"CSRF"})," \u8de8\u7ad9\u70b9\u9632\u5fa1\u63d2\u4ef6\u7531\u793e\u533a\u5305\u63d0\u4f9b\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5bf9\u63a5\u53e3\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\uff0c\u589e\u52a0 ",(0,r.jsx)(t.code,{children:"token"})," \u6821\u9a8c\u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u4ee5\u9605\u8bfb\u63d2\u4ef6\u6e90\u7801 ",(0,r.jsx)(t.a,{href:"https://github.com/gogf/csrf",children:"https://github.com/gogf/csrf"})]}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,r.jsx)(t.h3,{id:"\u5f15\u5165\u63d2\u4ef6\u5305",children:"\u5f15\u5165\u63d2\u4ef6\u5305"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'import "github.com/gogf/csrf"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6",children:"\u914d\u7f6e\u63a5\u53e3\u4e2d\u95f4\u4ef6"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"csrf"})," \u63d2\u4ef6\u652f\u6301\u81ea\u5b9a\u4e49 ",(0,r.jsx)(t.code,{children:"csrf.Config"})," \u914d\u7f6e\uff0c ",(0,r.jsx)(t.code,{children:"Config"})," \u4e2d\u7684 ",(0,r.jsx)(t.code,{children:"Cookie.Name"})," \u662f\u4e2d\u95f4\u4ef6\u8bbe\u7f6e\u5230\u8bf7\u6c42\u8fd4\u56de ",(0,r.jsx)(t.code,{children:"Cookie"})," ",(0,r.jsx)(t.strong,{children:"\u4e2d"})," ",(0,r.jsx)(t.code,{children:"token"})," \u7684\u540d\u79f0\uff0c ",(0,r.jsx)(t.code,{children:"ExpireTime"})," \u662f ",(0,r.jsx)(t.code,{children:"token"})," \u8d85\u65f6\u65f6\u95f4\uff0c ",(0,r.jsx)(t.code,{children:"TokenLength"})," \u662f ",(0,r.jsx)(t.code,{children:"token"})," \u957f\u5ea6\uff0c ",(0,r.jsx)(t.code,{children:"TokenRequestKey"})," \u662f\u540e\u7eed\u8bf7\u6c42\u9700\u6c42\u5e26\u4e0a\u7684\u53c2\u6570\u540d\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'s := g.Server()\ns.Group("/api.v2", func(group *ghttp.RouterGroup) {\n\tgroup.Middleware(csrf.NewWithCfg(csrf.Config{\n\t\tCookie: &http.Cookie{\n\t\t\tName: "_csrf",// token name in cookie\n\t\t},\n\t\tExpireTime:      time.Hour * 24,\n\t\tTokenLength:     32,\n\t\tTokenRequestKey: "X-Token",// use this key to read token in request param\n\t}))\n\tgroup.ALL("/csrf", func(r *ghttp.Request) {\n\t\tr.Response.Writeln(r.Method + ": " + r.RequestURI)\n\t})\n})\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u524d\u7aef\u5bf9\u63a5",children:"\u524d\u7aef\u5bf9\u63a5"}),"\n",(0,r.jsxs)(t.p,{children:["\u901a\u8fc7\u914d\u7f6e\u540e\uff0c\u524d\u7aef\u5728POST\u8bf7\u6c42\u524d\u4ece ",(0,r.jsx)(t.code,{children:"Cookie"})," \u4e2d\u8bfb\u53d6 ",(0,r.jsx)(t.code,{children:"_csrf"})," \u7684\u503c\uff08\u5373 ",(0,r.jsx)(t.code,{children:"token"}),"\uff09\uff0c\u7136\u540e\u8bf7\u6c42\u53d1\u51fa\u65f6\u5c06 ",(0,r.jsx)(t.code,{children:"token"})," \u4ee5 ",(0,r.jsx)(t.code,{children:"X-Token"}),"\uff08 ",(0,r.jsx)(t.code,{children:"TokenRequestKey"})," \u6240\u8bbe\u7f6e\uff09\u53c2\u6570\u540d\u7f6e\u5165\u8bf7\u6c42\u4e2d\uff08\u53ef\u4ee5\u662f ",(0,r.jsx)(t.code,{children:"Header"})," \u6216\u8005 ",(0,r.jsx)(t.code,{children:"Form"}),"\uff09\u5373\u53ef\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"token"})," \u6821\u9a8c\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,r.jsx)(t.h3,{id:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e",children:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"net/http"\n\t"time"\n\n\t"github.com/gogf/csrf"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\n// default cfg\nfunc main() {\n\ts := g.Server()\n\ts.Group("/api.v2", func(group *ghttp.RouterGroup) {\n\t\tgroup.Middleware(csrf.New())\n\t\tgroup.ALL("/csrf", func(r *ghttp.Request) {\n\t\t\tr.Response.Writeln(r.Method + ": " + r.RequestURI)\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"net/http"\n\t"time"\n\n\t"github.com/gogf/csrf"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\n// set cfg\nfunc main() {\n\ts := g.Server()\n\ts.Group("/api.v2", func(group *ghttp.RouterGroup) {\n\t\tgroup.Middleware(csrf.NewWithCfg(csrf.Config{\n\t\t\tCookie: &http.Cookie{\n\t\t\t\tName: "_csrf",// token name in cookie\n\t\t\t\tSecure:   true,\n\t\t\t\tSameSite: http.SameSiteNoneMode,// \u81ea\u5b9a\u4e49samesite\n\t\t\t},\n\t\t\tExpireTime:      time.Hour * 24,\n\t\t\tTokenLength:     32,\n\t\t\tTokenRequestKey: "X-Token",// use this key to read token in request param\n\t\t}))\n\t\tgroup.ALL("/csrf", func(r *ghttp.Request) {\n\t\t\tr.Response.Writeln(r.Method + ": " + r.RequestURI)\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c",children:"\u901a\u8fc7\u8bf7\u6c42\u4f53\u9a8c\u6548\u679c"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://localhost:8199/api.v2/csrf",children:"http://localhost:8199/api.v2/csrf"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);