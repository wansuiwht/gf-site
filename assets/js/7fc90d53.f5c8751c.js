"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[28216],{144763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a","title":"\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528struct tag\u4e3a\u8bf7\u6c42\u8f93\u5165\u5bf9\u8c61\u7684\u5c5e\u6027\u7ed1\u5b9a\u9ed8\u8ba4\u503c\u7684\u529f\u80fd\u3002\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5b9a\u4e49\u53c2\u6570\u5bf9\u8c61\u5e76\u4e3a\u5176\u5c5e\u6027\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u670d\u52a1\u7aef\u5904\u7406\u548c\u9a8c\u8bc1\u8bf7\u6c42\u53c2\u6570\u3002\u7279\u522b\u5f3a\u8c03\u4e86\u5728\u672a\u63d0\u4ea4\u53c2\u6570\u65f6\uff0c\u9ed8\u8ba4\u503c\u5c06\u751f\u6548\uff0c\u800c\u5728\u63d0\u4ea4\u4e86\u53c2\u6570\uff08\u5373\u4f7f\u4e3a\u7a7a\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u503c\u5c06\u88ab\u5ffd\u7565\u3002\u540c\u65f6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5173\u4e8e\u9ed8\u8ba4\u503c\u53c2\u6570\u7ed1\u5b9a\u7684\u6ce8\u610f\u4e8b\u9879\u5efa\u8bae\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165","slug":"/docs/web/request-default-value","permalink":"/2.7.x/docs/web/request-default-value","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/request-default-value","title":"\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u8bf7\u6c42\u8f93\u5165","\u9ed8\u8ba4\u503c\u7ed1\u5b9a","struct tag","\u53c2\u6570\u5bf9\u8c61","\u5206\u9875","\u670d\u52a1\u7aef","\u4e2d\u95f4\u4ef6","ghttp"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528struct tag\u4e3a\u8bf7\u6c42\u8f93\u5165\u5bf9\u8c61\u7684\u5c5e\u6027\u7ed1\u5b9a\u9ed8\u8ba4\u503c\u7684\u529f\u80fd\u3002\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5b9a\u4e49\u53c2\u6570\u5bf9\u8c61\u5e76\u4e3a\u5176\u5c5e\u6027\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u670d\u52a1\u7aef\u5904\u7406\u548c\u9a8c\u8bc1\u8bf7\u6c42\u53c2\u6570\u3002\u7279\u522b\u5f3a\u8c03\u4e86\u5728\u672a\u63d0\u4ea4\u53c2\u6570\u65f6\uff0c\u9ed8\u8ba4\u503c\u5c06\u751f\u6548\uff0c\u800c\u5728\u63d0\u4ea4\u4e86\u53c2\u6570\uff08\u5373\u4f7f\u4e3a\u7a7a\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u503c\u5c06\u88ab\u5ffd\u7565\u3002\u540c\u65f6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5173\u4e8e\u9ed8\u8ba4\u503c\u53c2\u6570\u7ed1\u5b9a\u7684\u6ce8\u610f\u4e8b\u9879\u5efa\u8bae\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8bf7\u6c42\u8f93\u5165-JSON/XML","permalink":"/2.7.x/docs/web/request-json-xml-parameter"},"next":{"title":"\u8bf7\u6c42\u8f93\u5165-\u81ea\u5b9a\u4e49\u53c2\u6570","permalink":"/2.7.x/docs/web/request-custom-parameters"}}');var r=n(474848),c=n(28453);const d={slug:"/docs/web/request-default-value",title:"\u8bf7\u6c42\u8f93\u5165-\u9ed8\u8ba4\u503c\u7ed1\u5b9a",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u8bf7\u6c42\u8f93\u5165","\u9ed8\u8ba4\u503c\u7ed1\u5b9a","struct tag","\u53c2\u6570\u5bf9\u8c61","\u5206\u9875","\u670d\u52a1\u7aef","\u4e2d\u95f4\u4ef6","ghttp"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528struct tag\u4e3a\u8bf7\u6c42\u8f93\u5165\u5bf9\u8c61\u7684\u5c5e\u6027\u7ed1\u5b9a\u9ed8\u8ba4\u503c\u7684\u529f\u80fd\u3002\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5b9a\u4e49\u53c2\u6570\u5bf9\u8c61\u5e76\u4e3a\u5176\u5c5e\u6027\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u670d\u52a1\u7aef\u5904\u7406\u548c\u9a8c\u8bc1\u8bf7\u6c42\u53c2\u6570\u3002\u7279\u522b\u5f3a\u8c03\u4e86\u5728\u672a\u63d0\u4ea4\u53c2\u6570\u65f6\uff0c\u9ed8\u8ba4\u503c\u5c06\u751f\u6548\uff0c\u800c\u5728\u63d0\u4ea4\u4e86\u53c2\u6570\uff08\u5373\u4f7f\u4e3a\u7a7a\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u503c\u5c06\u88ab\u5ffd\u7565\u3002\u540c\u65f6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5173\u4e8e\u9ed8\u8ba4\u503c\u53c2\u6570\u7ed1\u5b9a\u7684\u6ce8\u610f\u4e8b\u9879\u5efa\u8bae\u3002"},i=void 0,o={},a=[{value:"\u53c2\u6570\u5bf9\u8c61\u5b9a\u4e49",id:"\u53c2\u6570\u5bf9\u8c61\u5b9a\u4e49",level:2},{value:"\u53c2\u6570\u5bf9\u8c61\u4f7f\u7528",id:"\u53c2\u6570\u5bf9\u8c61\u4f7f\u7528",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u4ece ",(0,r.jsx)(t.code,{children:"v1.15"})," \u7248\u672c\u5f00\u59cb\uff0c ",(0,r.jsx)(t.code,{children:"Request"})," \u8bf7\u6c42\u5bf9\u8c61\u652f\u6301\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"struct tag"})," \u7684\u65b9\u5f0f\u4e3a\u8f93\u5165\u5bf9\u8c61\u7684\u5c5e\u6027\u7ed1\u5b9a\u9ed8\u8ba4\u503c\u3002\u9ed8\u8ba4\u503c\u7684 ",(0,r.jsx)(t.code,{children:"struct tag"})," \u540d\u79f0\u4e3a ",(0,r.jsx)(t.code,{children:"d"}),"(\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"default"}),")\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\u4ee5\u4fbf\u66f4\u597d\u7406\u89e3\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u53c2\u6570\u5bf9\u8c61\u5b9a\u4e49",children:"\u53c2\u6570\u5bf9\u8c61\u5b9a\u4e49"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'type GetListReq struct {\n    g.Meta `path:"/" method:"get"`\n    Type   string `v:"required#\u8bf7\u9009\u62e9\u5185\u5bb9\u6a21\u578b" dc:"\u5185\u5bb9\u6a21\u578b"`\n    Page   int    `v:"min:0#\u5206\u9875\u53f7\u7801\u9519\u8bef"      dc:"\u5206\u9875\u53f7\u7801" d:"1"`\n    Size   int    `v:"max:50#\u5206\u9875\u6570\u91cf\u6700\u592750\u6761" dc:"\u5206\u9875\u6570\u91cf\uff0c\u6700\u592750" d:"10"`\n    Sort   int    `v:"in:0,1,2#\u6392\u5e8f\u7c7b\u578b\u4e0d\u5408\u6cd5" dc:"\u6392\u5e8f\u7c7b\u578b(0:\u6700\u65b0, \u9ed8\u8ba4\u30021:\u6d3b\u8dc3, 2:\u70ed\u5ea6)"`\n}\ntype GetListRes struct {\n    Items []Item `dc:"\u5185\u5bb9\u5217\u8868"`\n}\n\ntype Item struct {\n    Id    int64  `dc:"\u5185\u5bb9ID"`\n    Title string `dc:"\u5185\u5bb9\u6807\u9898"`\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd9\u4e2a\u662f\u4e00\u4e2a\u67e5\u8be2\u5185\u5bb9\u5217\u8868\u8bf7\u6c42\u7684\u53c2\u6570\u63a5\u53d7\u5bf9\u8c61\uff0c\u5176\u4e2d\u6211\u4eec\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"d"})," \u7684\u6807\u7b7e\u4e3a\u5c5e\u6027 ",(0,r.jsx)(t.code,{children:"Page"})," \u548c ",(0,r.jsx)(t.code,{children:"Size"})," \u6307\u5b9a\u4e86\u9ed8\u8ba4\u503c\uff0c\u5f53\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e0d\u4f20\u9012\u65f6\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.jsx)(t.code,{children:"1"})," \u548c ",(0,r.jsx)(t.code,{children:"10"}),"\uff0c\u8868\u793a\u5206\u9875\u4ece\u7b2c ",(0,r.jsx)(t.code,{children:"1"})," \u9875\u5f00\u59cb\uff0c\u6bcf\u9875\u67e5\u8be2\u6570\u91cf\u4e3a ",(0,r.jsx)(t.code,{children:"10"}),"\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u53c2\u6570\u5bf9\u8c61\u4f7f\u7528",children:"\u53c2\u6570\u5bf9\u8c61\u4f7f\u7528"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype GetListReq struct {\n    g.Meta `path:"/" method:"get"`\n    Type   string `v:"required#\u8bf7\u9009\u62e9\u5185\u5bb9\u6a21\u578b" dc:"\u5185\u5bb9\u6a21\u578b"`\n    Page   int    `v:"min:0#\u5206\u9875\u53f7\u7801\u9519\u8bef"      dc:"\u5206\u9875\u53f7\u7801" d:"1"`\n    Size   int    `v:"max:50#\u5206\u9875\u6570\u91cf\u6700\u592750\u6761" dc:"\u5206\u9875\u6570\u91cf\uff0c\u6700\u592750" d:"10"`\n    Sort   int    `v:"in:0,1,2#\u6392\u5e8f\u7c7b\u578b\u4e0d\u5408\u6cd5" dc:"\u6392\u5e8f\u7c7b\u578b(0:\u6700\u65b0, \u9ed8\u8ba4\u30021:\u6d3b\u8dc3, 2:\u70ed\u5ea6)"`\n}\ntype GetListRes struct {\n    Items []Item `dc:"\u5185\u5bb9\u5217\u8868"`\n}\n\ntype Item struct {\n    Id    int64  `dc:"\u5185\u5bb9ID"`\n    Title string `dc:"\u5185\u5bb9\u6807\u9898"`\n}\n\ntype Controller struct{}\n\nfunc (Controller) GetList(ctx context.Context, req *GetListReq) (res *GetListRes, err error) {\n    g.Log().Info(ctx, req)\n    return\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/content", func(group *ghttp.RouterGroup) {\n        group.Middleware(ghttp.MiddlewareHandlerResponse)\n        group.Bind(&Controller{})\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6211\u4eec\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\uff0c\u5e76\u67e5\u770b\u670d\u52a1\u7aef\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/content?type=ask",children:"http://127.0.0.1:8199/content?type=ask"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'2023-03-21 21:58:23.058 [INFO] {2883f9c2dc734e170a35c73ea3560b4b} {"Type":"ask","Page":1,"Size":10,"Sort":0}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/content?type=ask&page=",children:"http://127.0.0.1:8199/content?type=ask&page="})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'2023-03-21 21:58:32.555 [INFO] {b86e22f9de734e170b35c73edf07859d} {"Type":"ask","Page":1,"Size":10,"Sort":0}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/content?type=ask&page=2",children:"http://127.0.0.1:8199/content?type=ask&page=2"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'2023-03-21 22:01:02.907 [INFO] {a016c8fa01744e170f35c73e99082f53} {"Type":"ask","Page":2,"Size":10,"Sort":0}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u8c03\u7528\u7aef\u4e0d\u4f20\u9012\u6216\u8005\u4f20\u9012\u7a7a\u7684 ",(0,r.jsx)(t.code,{children:"page"})," \u53c2\u6570\u65f6\uff0c\u670d\u52a1\u7aef\u90fd\u5c06\u4f7f\u7528\u5b9a\u4e49\u7684\u9ed8\u8ba4\u503c\uff1b\u800c\u5f53\u8c03\u7528\u7aef\u4f20\u9012\u5177\u4f53\u7684 ",(0,r.jsx)(t.code,{children:"page"})," \u53c2\u6570\u65f6\uff0c\u9ed8\u8ba4\u503c\u5e76\u4e0d\u4f1a\u751f\u6548\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(t.p,{children:["\u9ed8\u8ba4\u503c\u53c2\u6570\u7ed1\u5b9a\u662f\u6839\u636e\u5ba2\u6237\u7aef ",(0,r.jsx)(t.strong,{children:"\u672a\u63d0\u4ea4\u8be5\u53c2\u6570"})," \u6765\u8bc6\u522b\u662f\u5426\u542f\u7528\u9ed8\u8ba4\u503c\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u5df2\u7ecf\u63d0\u4ea4\u4e86\u8be5\u53c2\u6570\uff0c ",(0,r.jsx)(t.strong,{children:"\u5373\u4fbf\u8be5\u53c2\u6570\u503c\u662f\u7a7a\u5b57\u7b26\u4e32"})," \u4e5f\u4f1a\u88ab\u5f53\u505a\u5ba2\u6237\u7aef\u5df2\u7ecf\u4f20\u9012\u4e86\u5177\u4f53\u7684\u503c\uff0c\u90a3\u4e48\u670d\u52a1\u7aef\u6570\u636e\u7ed3\u6784\u4e0a\u7684\u9ed8\u8ba4\u503c\u6807\u7b7e\u5c06\u4e0d\u4f1a\u751f\u6548\u3002"]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var s=n(296540);const r={},c=s.createContext(r);function d(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);