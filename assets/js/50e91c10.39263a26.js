"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[95221],{934089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u51fd\u6570\u6ce8\u518c","title":"\u8def\u7531\u6ce8\u518c-\u51fd\u6570\u6ce8\u518c","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u8def\u7531\u6ce8\u518c\uff0c\u4e3b\u8981\u63a2\u8ba8\u4e86\u51fd\u6570\u6ce8\u518c\u65b9\u6cd5\u7684\u7075\u6d3b\u6027\u3002\u901a\u8fc7\u5b9e\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5229\u7528\u5305\u65b9\u6cd5\u548c\u5bf9\u8c61\u65b9\u6cd5\u8fdb\u884c\u8def\u7531\u51fd\u6570\u7684\u6ce8\u518c\uff0c\u4ee5\u53ca\u5982\u4f55\u786e\u4fdd\u5e76\u53d1\u5b89\u5168\u3002\u793a\u4f8b\u5305\u62ec\u751f\u6210\u7b80\u5355\u7684\u201cHello World\u201d\u548c\u8ba1\u7b97\u603b\u8bbf\u95ee\u91cf\u7684\u65b9\u6cd5\uff0c\u5b9e\u73b0\u4e86\u901a\u8fc7\u5e76\u53d1\u5b89\u5168\u7c7b\u578bgtype.Int\u7684\u4f7f\u7528\u6765\u7ef4\u62a4\u8bbf\u95ee\u8ba1\u6570\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u51fd\u6570\u6ce8\u518c.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c","slug":"/docs/web/router-registering-callback","permalink":"/docs/web/router-registering-callback","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u51fd\u6570\u6ce8\u518c.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/web/router-registering-callback","title":"\u8def\u7531\u6ce8\u518c-\u51fd\u6570\u6ce8\u518c","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u8def\u7531\u6ce8\u518c","\u51fd\u6570\u6ce8\u518c","\u5bf9\u8c61\u65b9\u6cd5","\u5305\u65b9\u6cd5","ghttp","\u5b9e\u4f8b\u5316\u65b9\u6cd5","\u5e76\u53d1\u5b89\u5168","\u6846\u67b6\u793a\u4f8b"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u8def\u7531\u6ce8\u518c\uff0c\u4e3b\u8981\u63a2\u8ba8\u4e86\u51fd\u6570\u6ce8\u518c\u65b9\u6cd5\u7684\u7075\u6d3b\u6027\u3002\u901a\u8fc7\u5b9e\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5229\u7528\u5305\u65b9\u6cd5\u548c\u5bf9\u8c61\u65b9\u6cd5\u8fdb\u884c\u8def\u7531\u51fd\u6570\u7684\u6ce8\u518c\uff0c\u4ee5\u53ca\u5982\u4f55\u786e\u4fdd\u5e76\u53d1\u5b89\u5168\u3002\u793a\u4f8b\u5305\u62ec\u751f\u6210\u7b80\u5355\u7684\u201cHello World\u201d\u548c\u8ba1\u7b97\u603b\u8bbf\u95ee\u91cf\u7684\u65b9\u6cd5\uff0c\u5b9e\u73b0\u4e86\u901a\u8fc7\u5e76\u53d1\u5b89\u5168\u7c7b\u578bgtype.Int\u7684\u4f7f\u7528\u6765\u7ef4\u62a4\u8bbf\u95ee\u8ba1\u6570\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c","permalink":"/docs/web/router-registering"},"next":{"title":"\u8def\u7531\u6ce8\u518c-\u5bf9\u8c61\u6ce8\u518c","permalink":"/docs/web/router-registering-struct"}}');var o=t(474848),s=t(28453);const l={slug:"/docs/web/router-registering-callback",title:"\u8def\u7531\u6ce8\u518c-\u51fd\u6570\u6ce8\u518c",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u8def\u7531\u6ce8\u518c","\u51fd\u6570\u6ce8\u518c","\u5bf9\u8c61\u65b9\u6cd5","\u5305\u65b9\u6cd5","ghttp","\u5b9e\u4f8b\u5316\u65b9\u6cd5","\u5e76\u53d1\u5b89\u5168","\u6846\u67b6\u793a\u4f8b"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884c\u8def\u7531\u6ce8\u518c\uff0c\u4e3b\u8981\u63a2\u8ba8\u4e86\u51fd\u6570\u6ce8\u518c\u65b9\u6cd5\u7684\u7075\u6d3b\u6027\u3002\u901a\u8fc7\u5b9e\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5229\u7528\u5305\u65b9\u6cd5\u548c\u5bf9\u8c61\u65b9\u6cd5\u8fdb\u884c\u8def\u7531\u51fd\u6570\u7684\u6ce8\u518c\uff0c\u4ee5\u53ca\u5982\u4f55\u786e\u4fdd\u5e76\u53d1\u5b89\u5168\u3002\u793a\u4f8b\u5305\u62ec\u751f\u6210\u7b80\u5355\u7684\u201cHello World\u201d\u548c\u8ba1\u7b97\u603b\u8bbf\u95ee\u91cf\u7684\u65b9\u6cd5\uff0c\u5b9e\u73b0\u4e86\u901a\u8fc7\u5e76\u53d1\u5b89\u5168\u7c7b\u578bgtype.Int\u7684\u4f7f\u7528\u6765\u7ef4\u62a4\u8bbf\u95ee\u8ba1\u6570\u3002"},i=void 0,c={},d=[{value:"\u51fd\u6570\u6ce8\u518c",id:"\u51fd\u6570\u6ce8\u518c",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"<code>Hello World</code>",id:"hello-world",level:3},{value:"\u5305\u65b9\u6cd5\u6ce8\u518c",id:"\u5305\u65b9\u6cd5\u6ce8\u518c",level:3},{value:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c",id:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u51fd\u6570\u6ce8\u518c",children:"\u51fd\u6570\u6ce8\u518c"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u51fd\u6570\u6ce8\u518c"})," \u65b9\u5f0f\u662f\u6700\u7b80\u5355\u4e14\u6700\u7075\u6d3b\u7684\u7684\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u6ce8\u518c\u7684\u8def\u7531 ",(0,o.jsx)(n.code,{children:"handler"})," \u53ef\u4ee5\u662f\u4e00\u4e2a\u5b9e\u4f8b\u5316 ",(0,o.jsx)(n.strong,{children:"\u5bf9\u8c61\u7684\u65b9\u6cd5\u5730\u5740"}),"\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a ",(0,o.jsx)(n.strong,{children:"\u5305\u65b9\u6cd5\u5730\u5740"}),"\u3002\u76f8\u5173\u65b9\u6cd5\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func (s *Server) BindHandler(pattern string, handler interface{})\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsx)(n.h3,{id:"hello-world",children:(0,o.jsx)(n.code,{children:"Hello World"})}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Write("\u54c8\u55bd\u4e16\u754c\uff01")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee ",(0,o.jsx)(n.a,{href:"http://127.0.0.1:8199",children:"http://127.0.0.1:8199"})," \u53ef\u4ee5\u770b\u5230\u6211\u4eec\u719f\u6089\u7684\u5185\u5bb9\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u5305\u65b9\u6cd5\u6ce8\u518c",children:"\u5305\u65b9\u6cd5\u6ce8\u518c"}),"\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u518c\u7684\u8def\u7531\u51fd\u6570 ",(0,o.jsx)(n.code,{children:"handler"})," \u53c2\u6570\u53ef\u4ee5\u662f\u4e00\u4e2a\u5305\u65b9\u6cd5\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/container/gtype"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nvar (\n    total = gtype.NewInt()\n)\n\nfunc Total(r *ghttp.Request) {\n    r.Response.Write("total:", total.Add(1))\n}\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/total", Total)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u5305\u65b9\u6cd5\u7684\u5f62\u5f0f\u6765\u6ce8\u518c\u8def\u7531\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de\u603b\u5171\u8bbf\u95ee\u7684\u6b21\u6570\uff0c\u7531\u4e8e\u6d89\u53ca\u5230\u5e76\u53d1\u5b89\u5168\uff0c\u56e0\u6b64 ",(0,o.jsx)(n.code,{children:"total"})," \u53d8\u91cf\u4f7f\u7528\u4e86 ",(0,o.jsx)(n.code,{children:"gtype.Int"})," \u5e76\u53d1\u5b89\u5168\u7c7b\u578b\u3002\u6267\u884c\u540e\uff0c\u5f53\u6211\u4eec\u4e0d\u505c\u8bbf\u95ee ",(0,o.jsx)(n.a,{href:"http://127.0.0.1:8199/total",children:"http://127.0.0.1:8199/total"})," \u65f6\uff0c\u53ef\u4ee5\u770b\u5230\u8fd4\u56de\u7684\u6570\u503c\u4e0d\u505c\u9012\u589e\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c",children:"\u5bf9\u8c61\u65b9\u6cd5\u6ce8\u518c"}),"\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u518c\u7684\u8def\u7531\u51fd\u6570 ",(0,o.jsx)(n.code,{children:"handler"})," \u53c2\u6570\u53ef\u4ee5\u662f\u4e00\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/container/gtype"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype Controller struct {\n    total *gtype.Int\n}\n\nfunc (c *Controller) Total(r *ghttp.Request) {\n    r.Response.Write("total:", c.total.Add(1))\n}\n\nfunc main() {\n    s := g.Server()\n    c := &Controller{\n        total: gtype.NewInt(),\n    }\n    s.BindHandler("/total", c.Total)\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u8be5\u793a\u4f8b\u4e0e\u793a\u4f8b1\u7684\u5b9e\u73b0\u7684\u6548\u679c\u4e00\u81f4\uff0c\u4f46\u6211\u4eec\u4f7f\u7528\u4e86\u5bf9\u8c61\u6765\u5c01\u88c5\u4e1a\u52a1\u903b\u8f91\u6240\u9700\u7684\u53d8\u91cf\uff0c\u4f7f\u7528\u8def\u7531\u51fd\u6570\u6ce8\u518c\u6765\u7075\u6d3b\u6ce8\u518c\u5bf9\u5e94\u7684\u5bf9\u8c61\u65b9\u6cd5\u3002"})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(296540);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);