"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["91710"],{159596:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"quick/\u5FEB\u901F\u5F00\u59CB/\u4F7F\u7528\u89C4\u8303\u8DEF\u7531","title":"\u4F7F\u7528\u89C4\u8303\u8DEF\u7531","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u89C4\u8303\u8DEF\u7531\uFF0C\u4EE5\u7B80\u5316\u8DEF\u7531\u6CE8\u518C\uFF0C\u805A\u7126\u4E1A\u52A1\u903B\u8F91\u3002\u901A\u8FC7\u5B9A\u4E49\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6807\u51C6\u5316\u8DEF\u7531\u6CE8\u518C\uFF0C\u5E76\u4F7F\u7528\u5BF9\u8C61\u5316\u7684\u65B9\u5F0F\u7BA1\u7406\u8DEF\u7531\uFF0C\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\u3002\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u548C\u6267\u884C\u7ED3\u679C\u6307\u5BFC\u8BFB\u8005\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u5E94\u7528\u3002","source":"@site/docs/quick/\u5FEB\u901F\u5F00\u59CB/\u4F7F\u7528\u89C4\u8303\u8DEF\u7531.md","sourceDirName":"quick/\u5FEB\u901F\u5F00\u59CB","slug":"/quick/strict-router","permalink":"/en/quick/strict-router","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u5FEB\u901F\u5F00\u59CB/\u4F7F\u7528\u89C4\u8303\u8DEF\u7531.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731757313000,"sidebarPosition":5,"frontMatter":{"slug":"/quick/strict-router","title":"\u4F7F\u7528\u89C4\u8303\u8DEF\u7531","hide_title":true,"sidebar_position":5,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u89C4\u8303\u8DEF\u7531","\u8DEF\u7531\u6CE8\u518C","\u6570\u636E\u7ED3\u6784","\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406","Go\u8BED\u8A00","web server","HTTP\u65B9\u6CD5","\u8DEF\u7531\u56DE\u8C03"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u89C4\u8303\u8DEF\u7531\uFF0C\u4EE5\u7B80\u5316\u8DEF\u7531\u6CE8\u518C\uFF0C\u805A\u7126\u4E1A\u52A1\u903B\u8F91\u3002\u901A\u8FC7\u5B9A\u4E49\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6807\u51C6\u5316\u8DEF\u7531\u6CE8\u518C\uFF0C\u5E76\u4F7F\u7528\u5BF9\u8C61\u5316\u7684\u65B9\u5F0F\u7BA1\u7406\u8DEF\u7531\uFF0C\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\u3002\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u548C\u6267\u884C\u7ED3\u679C\u6307\u5BFC\u8BFB\u8005\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u5E94\u7528\u3002"},"sidebar":"quickSidebar","previous":{"title":"\u8BF7\u6C42\u6570\u636E\u7ED3\u6784","permalink":"/en/quick/request-struct"},"next":{"title":"\u4E2D\u95F4\u4EF6\u521D\u8BD5\u7528","permalink":"/en/quick/middleware"}}'),i=r("785893"),s=r("250065");let c={slug:"/quick/strict-router",title:"\u4F7F\u7528\u89C4\u8303\u8DEF\u7531",hide_title:!0,sidebar_position:5,keywords:["GoFrame","GoFrame\u6846\u67B6","\u89C4\u8303\u8DEF\u7531","\u8DEF\u7531\u6CE8\u518C","\u6570\u636E\u7ED3\u6784","\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406","Go\u8BED\u8A00","web server","HTTP\u65B9\u6CD5","\u8DEF\u7531\u56DE\u8C03"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528\u89C4\u8303\u8DEF\u7531\uFF0C\u4EE5\u7B80\u5316\u8DEF\u7531\u6CE8\u518C\uFF0C\u805A\u7126\u4E1A\u52A1\u903B\u8F91\u3002\u901A\u8FC7\u5B9A\u4E49\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6807\u51C6\u5316\u8DEF\u7531\u6CE8\u518C\uFF0C\u5E76\u4F7F\u7528\u5BF9\u8C61\u5316\u7684\u65B9\u5F0F\u7BA1\u7406\u8DEF\u7531\uFF0C\u63D0\u5347\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\u3002\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u548C\u6267\u884C\u7ED3\u679C\u6307\u5BFC\u8BFB\u8005\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u5E94\u7528\u3002"},l=void 0,d={},o=[{value:"\u6570\u636E\u7ED3\u6784\u5B9A\u4E49",id:"\u6570\u636E\u7ED3\u6784\u5B9A\u4E49",level:2},{value:"\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406",id:"\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406",level:2},{value:"\u5B8C\u6574\u793A\u4F8B\u4EE3\u7801",id:"\u5B8C\u6574\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6267\u884C\u7ED3\u679C",id:"\u6267\u884C\u7ED3\u679C",level:2},{value:"\u5B66\u4E60\u5C0F\u7ED3",id:"\u5B66\u4E60\u5C0F\u7ED3",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u4E3A\u4E86\u7B80\u5316\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\uFF0C\u907F\u514D\u4E00\u4E9B\u7E41\u7410\u7684\u53C2\u6570\u5904\u7406\u7EC6\u8282\uFF0C\n\u8BA9\u5F00\u53D1\u8005\u5C06\u7CBE\u529B\u805A\u7126\u4E8E\u4E1A\u52A1\u903B\u8F91\u672C\u8EAB\uFF0C",(0,i.jsx)(n.code,{children:"GoFrame"}),"\u6846\u67B6\u63D0\u4F9B\u4E86\u89C4\u8303\u5316\u7684\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\u3002\n\u89C4\u8303\u5316\u7684\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\uFF0C\u6211\u4EEC\u4E3A\u4E86\u89C1\u540D\u77E5\u610F\uFF0C\u4FBF\u547D\u540D\u4E3A\u4E86",(0,i.jsx)(n.strong,{children:"\u89C4\u8303\u8DEF\u7531"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636E\u7ED3\u6784\u5B9A\u4E49",children:"\u6570\u636E\u7ED3\u6784\u5B9A\u4E49"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u89C4\u8303\u8DEF\u7531\u4E2D\uFF0C\u6211\u4EEC\u540C\u6837\u5B9A\u4E49\u4E00\u4E2A\u8BF7\u6C42\u7684\u6570\u636E\u7ED3\u6784\u6765\u63A5\u6536\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u53C2\u6570\u4FE1\u606F\uFF0C\u4F46\u540C\u65F6\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u8FD4\u56DE\u5BF9\u8C61\u3002\n\u76EE\u7684\u662F\u4E3A\u4E86\u672A\u6765\u8FD4\u56DE\u53C2\u6570\u6269\u5C55\u7684\u9700\u8981\uFF0C\u4EE5\u53CA\u672A\u6765\u6807\u51C6\u5316\u63A5\u53E3\u6587\u6863\u751F\u6210\u7684\u9700\u8981\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type HelloReq struct {\n    g.Meta `path:"/" method:"get"`\n    Name   string `v:"required" dc:"\u59D3\u540D"`\n    Age    int    `v:"required" dc:"\u5E74\u9F84"`\n}\ntype HelloRes struct {}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7B80\u8981\u4ECB\u7ECD\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u8BF7\u6C42\u5BF9\u8C61\u4E2D\uFF0C\u6211\u4EEC\u591A\u4E86\u4E00\u4E2A",(0,i.jsx)(n.code,{children:"g.Meta"}),"\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5E76\u7ED9\u5B9A\u4E86\u4E00\u4E9B\u7ED3\u6784\u4F53\u6807\u7B7E\u3002\u8BE5\u5BF9\u8C61\u4E3A",(0,i.jsx)(n.strong,{children:"\u5143\u6570\u636E\u5BF9\u8C61"}),"\uFF0C\u7528\u4E8E\u7ED9\u7ED3\u6784\u4F53\u5D4C\u5165\n\u4E00\u4E9B\u5B9A\u4E49\u7684\u6807\u7B7E\u4FE1\u606F\u3002\u4F8B\u5982\u5728\u672C\u793A\u4F8B\u4E2D\uFF1A","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path"}),"\uFF1A\u8868\u793A\u6CE8\u518C\u7684\u8DEF\u7531\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"method"}),"\uFF1A\u8868\u793A\u6CE8\u518C\u7ED1\u5B9A\u7684",(0,i.jsx)(n.code,{children:"HTTP Method"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u5C5E\u6027\u4E2D\u540C\u6837\u51FA\u73B0\u4E24\u4E2A\u65B0\u7684\u6807\u7B7E\u540D\u79F0\uFF1A","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v"}),"\uFF1A\u8868\u793A\u6821\u9A8C\u89C4\u5219\uFF0C\u4E3A",(0,i.jsx)(n.code,{children:"valid"}),"\u7684\u7F29\u5199\uFF0C\u7528\u4E8E\u81EA\u52A8\u6821\u9A8C\u8BE5\u53C2\u6570\u3002\u8FD9\u91CC\u4F7F\u7528",(0,i.jsx)(n.code,{children:'v:"required"'}),"\u8868\u793A\u8BE5\u53C2\u6570\u4E3A\u5FC5\u9700\u53C2\u6570\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u672A\u4F20\u9012\u8BE5\u53C2\u6570\u65F6\uFF0C\u670D\u52A1\u7AEF\u5C06\u4F1A\u6821\u9A8C\u5931\u8D25\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dc"}),"\uFF1A\u8868\u793A\u53C2\u6570\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4E3A",(0,i.jsx)(n.code,{children:"description"}),"\u7684\u7F29\u5199\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8BE5\u53C2\u6570\u7684\u542B\u4E49\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u5728\u5F00\u53D1\u624B\u518C\u7684\u5BF9\u5E94\u7AE0\u8282\u4E2D\uFF0C\u6709\u5173\u4E8E\u5168\u90E8\u6807\u7B7E\u4FE1\u606F\u4EE5\u53CA\u6821\u9A8C\u7EC4\u4EF6\u7684\u8BE6\u7EC6\u8BB2\u89E3\uFF0C\u8FD9\u91CC\u53EA\u9700\u8981\u4E86\u89E3\u5176\u4F5C\u7528\u5373\u53EF\uFF0C\u4E0D\u505A\u8FC7\u591A\u4ECB\u7ECD\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406",children:"\u8DEF\u7531\u5BF9\u8C61\u7BA1\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u4E3A\u4E86\u66F4\u597D\u5730\u7BA1\u7406\u8DEF\u7531\u6CE8\u518C\uFF0C\u7279\u522B\u662F\u63A5\u53E3\u6BD4\u8F83\u591A\u7684\u573A\u666F\u4E0B\uFF0C\u5982\u679C\u624B\u52A8\u4E00\u4E00\u53BB\u914D\u7F6E\u8DEF\u7531\u4E0E\u56DE\u8C03\u51FD\u6570\u5173\u7CFB\u592A\u8FC7\u4E8E\u7E41\u7410\u3002\n\u6211\u4EEC\u901A\u8FC7\u5BF9\u8C61\u5316\u7684\u5F62\u5F0F\u6765\u5C01\u88C5\u8DEF\u7531\u56DE\u8C03\u51FD\u6570\uFF0C\u901A\u8FC7\u5BF9\u8C61\u5316\u5C01\u88C5\u7684\u65B9\u5F0F\u6765\u7B80\u5316\u6211\u4EEC\u7684\u8DEF\u7531\u7BA1\u7406\u3002\n\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u8DEF\u7531\u5BF9\u8C61\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'type Hello struct{}\n\nfunc (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {\n    r := g.RequestFromCtx(ctx)\n    r.Response.Writef(\n        "Hello %s! Your Age is %d",\n        req.Name,\n        req.Age,\n    )\n    return\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A",(0,i.jsx)(n.code,{children:"Hello"}),"\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7528\u4E8E\u5C01\u88C5\u8DEF\u7531\u56DE\u8C03\u51FD\u6570\uFF0C\u5176\u6240\u6709\u5B9A\u4E49\u7684\u516C\u5F00\u65B9\u6CD5\u90FD\u5C06\u88AB\u4F5C\u4E3A\u8DEF\u7531\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u6CE8\u518C\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53EF\u4EE5\u770B\u5230\u8BE5\u8DEF\u7531\u5BF9\u8C61\u7684",(0,i.jsx)(n.code,{children:"Say"}),"\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u7684\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u76F8\u6BD4\u8F83\u4E8E",(0,i.jsx)(n.code,{children:"func(*ghttp.Request)"}),"\u7684\u56DE\u8C03\u51FD\u6570\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u66F4\u7B26\u5408\u4E1A\u52A1\u903B\u8F91\u51FD\u6570\u7684\u5B9A\u4E49\u98CE\u683C\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u8DEF\u7531\u56DE\u8C03\u65B9\u6CD5",(0,i.jsx)(n.code,{children:"Say"}),"\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7",(0,i.jsx)(n.code,{children:"g.RequestFromCtx"}),"\u65B9\u6CD5\u4ECE",(0,i.jsx)(n.code,{children:"ctx"}),"\u83B7\u53D6\u539F\u59CB\u7684",(0,i.jsx)(n.code,{children:"*ghttp.Request"}),"\u8BF7\u6C42\u5BF9\u8C61\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u8FD4\u56DE\u5185\u5BB9\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5B8C\u6574\u793A\u4F8B\u4EE3\u7801",children:"\u5B8C\u6574\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u8C03\u6574\u6211\u4EEC\u524D\u9762\u7684",(0,i.jsx)(n.code,{children:"Web Server"}),"\u7A0B\u5E8F\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype HelloReq struct {\n    g.Meta `path:"/" method:"get"`\n    Name   string `v:"required" dc:"\u59D3\u540D"`\n    Age    int    `v:"required" dc:"\u5E74\u9F84"`\n}\ntype HelloRes struct{}\n\ntype Hello struct{}\n\nfunc (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {\n    r := g.RequestFromCtx(ctx)\n    r.Response.Writef(\n        "Hello %s! Your Age is %d",\n        req.Name,\n        req.Age,\n    )\n    return\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Bind(\n            new(Hello),\n        )\n    })\n    s.SetPort(8000)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672C\u793A\u4F8B\u4E2D\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7",(0,i.jsx)(n.code,{children:"s.Group"}),"\u7684\u5206\u7EC4\u8DEF\u7531\u65B9\u5F0F\u5B9A\u4E49\u4E00\u7EC4\u8DEF\u7531\u6CE8\u518C\uFF0C\u5728\u5176\u56DE\u8C03\u65B9\u6CD5\u4E2D\u6CE8\u518C\u7684\u6240\u6709\u8DEF\u7531\uFF0C\u90FD\u4F1A\u5E26\u6709\u5176\u5B9A\u4E49\u7684\u5206\u7EC4\u8DEF\u7531\u524D\u7F00",(0,i.jsx)(n.code,{children:"/"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7",(0,i.jsx)(n.code,{children:"group.Bind"}),"\u65B9\u6CD5\u6CE8\u518C\u8DEF\u7531\u5BF9\u8C61\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u904D\u5386\u8DEF\u7531\u5BF9\u8C61\u7684\u6240\u6709\u516C\u5F00\u65B9\u6CD5\uFF0C\u8BFB\u53D6\u65B9\u6CD5\u7684\u8F93\u5165\u8F93\u51FA\u7ED3\u6784\u4F53\u5B9A\u4E49\uFF0C\u5E76\u5BF9\u5176\u6267\u884C\u8DEF\u7531\u6CE8\u518C\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6267\u884C\u7ED3\u679C",children:"\u6267\u884C\u7ED3\u679C"}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD0\u884C\u540E\uFF0C\u6211\u4EEC\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/?name=john&age=18",children:"http://127.0.0.1:8000/?name=john&age=18"})," \u53EF\u4EE5\u770B\u5230\uFF0C\u9875\u9762\u8F93\u51FA\u7ED3\u679C\u7B26\u5408\u9884\u671F\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:r(683514).Z+"",width:"1024",height:"226"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u5C1D\u8BD5\u4E00\u4E0B\u9519\u8BEF\u7684\u53C2\u6570\u8BF7\u6C42 ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," \u4F46\u6211\u4EEC\u53D1\u73B0\uFF0C\u9875\u9762\u6CA1\u6709\u8F93\u51FA\u4EFB\u4F55\u7684\u7ED3\u679C\uFF1F\n",(0,i.jsxs)(n.strong,{children:["\u8FD9\u662F\u7531\u4E8E\u53C2\u6570\u6821\u9A8C\u5931\u8D25\uFF0C\u5E76\u672A\u8FDB\u5165\u5230\u6211\u4EEC\u7684\u8DEF\u7531\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u800C\u662F\u88AB",(0,i.jsx)(n.code,{children:"Server"}),"\u76F4\u63A5\u8FD4\u56DE\u4E86\u3002"]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5B66\u4E60\u5C0F\u7ED3",children:"\u5B66\u4E60\u5C0F\u7ED3"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672C\u7AE0\u8282\u6211\u4EEC\u5B66\u4F1A\u4E86\u89C4\u8303\u7684\u8DEF\u7531\u6CE8\u518C\u65B9\u5F0F\uFF0C\u4F46\u662F\u8FD8\u7F3A\u5C11\u5BF9\u8FD4\u56DE\u7ED3\u679C\uFF0C\u7279\u522B\u662F\u4EA7\u751F\u9519\u8BEF\u4E4B\u540E\u7684\u7EDF\u4E00\u5904\u7406\u63A7\u5236\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90A3\u4E48\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5982\u4F55\u6355\u83B7\u6821\u9A8C\u5931\u8D25\u9519\u8BEF\u5E76\u81EA\u5B9A\u4E49\u8FD4\u56DE\u6570\u636E\u5462\uFF1F\u6211\u4EEC\u5C06\u5728\u4E0B\u4E00\u7AE0\u8282\u66F4\u8FDB\u4E00\u6B65\u4ECB\u7ECD\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},683514:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/img-0c2fc34c17e9ca5ab24ca490b332cc85.png"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var t=r(667294);let i={},s=t.createContext(i);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);