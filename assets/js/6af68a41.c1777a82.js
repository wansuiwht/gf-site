"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[56768],{334119:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236","title":"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u8fd4\u56de\u7684\u7f13\u51b2\u63a7\u5236\u3002\u901a\u8fc7\u4f7f\u7528\u7f13\u51b2\u533a\u53ef\u4ee5\u63d0\u9ad8\u6267\u884c\u6548\u7387\u5e76\u63d0\u4f9b\u66f4\u7075\u6d3b\u7684\u8f93\u51fa\u63a7\u5236\u3002\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u4e2d\u95f4\u4ef6\u7edf\u4e00\u5904\u7406\u8fd4\u56de\u6570\u636e\uff0c\u907f\u514d\u9519\u8bef\u4fe1\u606f\u76f4\u63a5\u66b4\u9732\u7ed9\u5ba2\u6237\u7aef\uff0c\u5e76\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u4fe1\u606f\u63d0\u793a\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de","slug":"/docs/web/response-buffering","permalink":"/docs/web/response-buffering","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/web/response-buffering","title":"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236","sidebar_position":0,"hide_title":true,"keywords":["GoFrame\u6846\u67b6","Response\u7f13\u51b2","Go\u8bed\u8a00","\u670d\u52a1\u6548\u7387","\u8f93\u51fa\u63a7\u5236","\u7f13\u51b2\u533a","\u9519\u8bef\u5904\u7406","\u4e2d\u95f4\u4ef6","\u6570\u636e\u5904\u7406","\u54cd\u5e94\u8f93\u51fa"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u8fd4\u56de\u7684\u7f13\u51b2\u63a7\u5236\u3002\u901a\u8fc7\u4f7f\u7528\u7f13\u51b2\u533a\u53ef\u4ee5\u63d0\u9ad8\u6267\u884c\u6548\u7387\u5e76\u63d0\u4f9b\u66f4\u7075\u6d3b\u7684\u8f93\u51fa\u63a7\u5236\u3002\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u4e2d\u95f4\u4ef6\u7edf\u4e00\u5904\u7406\u8fd4\u56de\u6570\u636e\uff0c\u907f\u514d\u9519\u8bef\u4fe1\u606f\u76f4\u63a5\u66b4\u9732\u7ed9\u5ba2\u6237\u7aef\uff0c\u5e76\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u4fe1\u606f\u63d0\u793a\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u8fd4\u56de","permalink":"/docs/web/response"},"next":{"title":"\u6570\u636e\u8fd4\u56de-JSON/XML","permalink":"/docs/web/response-json-xml"}}');var t=r(474848),o=r(28453);const i={slug:"/docs/web/response-buffering",title:"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236",sidebar_position:0,hide_title:!0,keywords:["GoFrame\u6846\u67b6","Response\u7f13\u51b2","Go\u8bed\u8a00","\u670d\u52a1\u6548\u7387","\u8f93\u51fa\u63a7\u5236","\u7f13\u51b2\u533a","\u9519\u8bef\u5904\u7406","\u4e2d\u95f4\u4ef6","\u6570\u636e\u5904\u7406","\u54cd\u5e94\u8f93\u51fa"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u8fd4\u56de\u7684\u7f13\u51b2\u63a7\u5236\u3002\u901a\u8fc7\u4f7f\u7528\u7f13\u51b2\u533a\u53ef\u4ee5\u63d0\u9ad8\u6267\u884c\u6548\u7387\u5e76\u63d0\u4f9b\u66f4\u7075\u6d3b\u7684\u8f93\u51fa\u63a7\u5236\u3002\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u4e2d\u95f4\u4ef6\u7edf\u4e00\u5904\u7406\u8fd4\u56de\u6570\u636e\uff0c\u907f\u514d\u9519\u8bef\u4fe1\u606f\u76f4\u63a5\u66b4\u9732\u7ed9\u5ba2\u6237\u7aef\uff0c\u5e76\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\u4fe1\u606f\u63d0\u793a\u3002"},c=void 0,d={},p=[];function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Response"})," \u8f93\u51fa\u91c7\u7528\u4e86\u7f13\u51b2\u63a7\u5236\uff0c\u8f93\u51fa\u7684\u5185\u5bb9\u9884\u5148\u5199\u5165\u5230\u4e00\u5757\u7f13\u51b2\u533a\uff0c\u7b49\u5f85\u670d\u52a1\u65b9\u6cd5\u6267\u884c\u5b8c\u6bd5\u540e\u624d\u771f\u6b63\u5730\u8f93\u51fa\u5230\u5ba2\u6237\u7aef\u3002\u8be5\u7279\u6027\u5728\u63d0\u9ad8\u6267\u884c\u6548\u7387\u540c\u65f6\u4e3a\u8f93\u51fa\u5185\u5bb9\u7684\u63a7\u5236\u63d0\u4f9b\u4e86\u66f4\u9ad8\u7684\u7075\u6d3b\u6027\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (r *Response) Buffer() []byte\nfunc (r *Response) BufferLength() int\nfunc (r *Response) BufferString() string\nfunc (r *Response) Flush()\nfunc (r *Response) SetBuffer(data []byte)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"Output"})," \u4f5c\u7528\u7c7b\u4f3c\u4e8e ",(0,t.jsx)(n.code,{children:"Flush"})," \u5c06\u7f13\u51b2\u533a\u7684\u6570\u636e\u8f93\u51fa\u5230\u5ba2\u6237\u7aef\u5e76\u6e05\u7a7a\u7f13\u51b2\u533a\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u901a\u8fc7\u540e\u7f6e\u4e2d\u95f4\u4ef6\u7edf\u4e00\u5bf9\u8fd4\u56de\u7684\u6570\u636e\u505a\u5904\u7406\uff0c\u5982\u679c\u670d\u52a1\u65b9\u6cd5\u4ea7\u751f\u4e86\u5f02\u5e38\uff0c\u90a3\u4e48\u4e0d\u80fd\u5c06\u654f\u611f\u9519\u8bef\u4fe1\u606f\u63a8\u9001\u5230\u5ba2\u6237\u7aef\uff0c\u800c\u7edf\u4e00\u8bbe\u7f6e\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "net/http"\n)\n\nfunc MiddlewareErrorHandler(r *ghttp.Request) {\n    r.Middleware.Next()\n    if r.Response.Status >= http.StatusInternalServerError {\n        r.Response.ClearBuffer()\n        r.Response.Writeln("\u670d\u52a1\u5668\u5c45\u7136\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u5427\uff01")\n    }\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.Middleware(MiddlewareErrorHandler)\n        group.ALL("/user/list", func(r *ghttp.Request) {\n            panic("db error: sql is xxxxxxx")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"http://127.0.0.1:8199/api.v2/user/list",children:"http://127.0.0.1:8199/api.v2/user/list"})," \u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u8f93\u51fa\u4e86\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u670d\u52a1\u5668\u5c45\u7136\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u5427\uff01\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(296540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);