"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[26016],{47363:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect","title":"\u6570\u636e\u8fd4\u56de-Redirect","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528RedirectTo\u548cRedirectBack\u65b9\u6cd5\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c\u529f\u80fd\u3002\u901a\u8fc7Location Header\u5b9e\u73b0\u9875\u9762\u4e4b\u95f4\u7684\u8df3\u8f6c\uff0c\u5305\u62ec\u8df3\u8f6c\u5230\u6307\u5b9a\u5730\u5740\u548c\u8fd4\u56de\u5230\u4e0a\u4e00\u9875\u9762\u3002\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5728\u672c\u5730\u670d\u52a1\u4e2d\u8bbe\u7f6e\u9875\u9762\u91cd\u5b9a\u5411\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u7406\u89e3HTTP\u5730\u5740\u5904\u7406\u53caReferer Header\u7684\u5e94\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de","slug":"/docs/web/response-redirect","permalink":"/2.7.x/docs/web/response-redirect","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/web/response-redirect","title":"\u6570\u636e\u8fd4\u56de-Redirect","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u8fd4\u56de","\u9875\u9762\u8df3\u8f6c","RedirectTo","RedirectBack","Location Header","\u7f51\u9875\u91cd\u5b9a\u5411","HTTP\u5730\u5740","Referer Header"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528RedirectTo\u548cRedirectBack\u65b9\u6cd5\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c\u529f\u80fd\u3002\u901a\u8fc7Location Header\u5b9e\u73b0\u9875\u9762\u4e4b\u95f4\u7684\u8df3\u8f6c\uff0c\u5305\u62ec\u8df3\u8f6c\u5230\u6307\u5b9a\u5730\u5740\u548c\u8fd4\u56de\u5230\u4e0a\u4e00\u9875\u9762\u3002\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5728\u672c\u5730\u670d\u52a1\u4e2d\u8bbe\u7f6e\u9875\u9762\u91cd\u5b9a\u5411\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u7406\u89e3HTTP\u5730\u5740\u5904\u7406\u53caReferer Header\u7684\u5e94\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u8fd4\u56de-JSON/XML","permalink":"/2.7.x/docs/web/response-json-xml"},"next":{"title":"\u6570\u636e\u8fd4\u56de-Exit\u63a7\u5236","permalink":"/2.7.x/docs/web/response-exit-exitall-exithook"}}');var c=r(474848),i=r(28453);const o={slug:"/docs/web/response-redirect",title:"\u6570\u636e\u8fd4\u56de-Redirect",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u8fd4\u56de","\u9875\u9762\u8df3\u8f6c","RedirectTo","RedirectBack","Location Header","\u7f51\u9875\u91cd\u5b9a\u5411","HTTP\u5730\u5740","Referer Header"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528RedirectTo\u548cRedirectBack\u65b9\u6cd5\u5b9e\u73b0\u9875\u9762\u8df3\u8f6c\u529f\u80fd\u3002\u901a\u8fc7Location Header\u5b9e\u73b0\u9875\u9762\u4e4b\u95f4\u7684\u8df3\u8f6c\uff0c\u5305\u62ec\u8df3\u8f6c\u5230\u6307\u5b9a\u5730\u5740\u548c\u8fd4\u56de\u5230\u4e0a\u4e00\u9875\u9762\u3002\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5728\u672c\u5730\u670d\u52a1\u4e2d\u8bbe\u7f6e\u9875\u9762\u91cd\u5b9a\u5411\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u7406\u89e3HTTP\u5730\u5740\u5904\u7406\u53caReferer Header\u7684\u5e94\u7528\u3002"},d=void 0,s={},a=[{value:"<code>RedirectTo</code>",id:"redirectto",level:2},{value:"<code>RedirectBack</code>",id:"redirectback",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"RedirectTo/RedirectBack"})," \u6765\u5b9e\u73b0\u9875\u9762\u4e4b\u95f4\u7684\u8df3\u8f6c\uff0c\u8be5\u529f\u80fd\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"Location Header"})," \u5b9e\u73b0\u3002\u76f8\u5173\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func (r *Response) RedirectBack(code ...int)\nfunc (r *Response) RedirectTo(location string, code ...int)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"redirectto",children:(0,c.jsx)(n.code,{children:"RedirectTo"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ReditectTo"})," \u7528\u4ee5\u5f15\u5bfc\u5ba2\u6237\u7aef\u8df3\u8f6c\u5230\u6307\u5b9a\u7684\u5730\u5740\uff0c\u5730\u5740\u53ef\u4ee5\u662f\u4e00\u4e2a\u672c\u5730\u670d\u52a1\u7684\u76f8\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5b8c\u6574\u7684 ",(0,c.jsx)(n.code,{children:"HTTP"})," \u5730\u5740\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.RedirectTo("/login")\n    })\n    s.BindHandler("/login", func(r *ghttp.Request) {\n        r.Response.Writeln("Login First")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,c.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"}),"\xa0\u968f\u540e\u53ef\u4ee5 \u53d1\u73b0\u6d4f\u89c8\u5668\u7acb\u5373\u8df3\u8f6c\u5230\u4e86 ",(0,c.jsx)(n.a,{href:"http://127.0.0.1:8199/login",children:"http://127.0.0.1:8199/login"})," \u9875\u9762\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"redirectback",children:(0,c.jsx)(n.code,{children:"RedirectBack"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"RedirectBack"})," \u7528\u4ee5\u5f15\u5bfc\u5ba2\u6237\u7aef\u8df3\u8f6c\u5230\u4e0a\u4e00\u9875\u9762\u5730\u5740\uff0c\u4e0a\u4e00\u9875\u9762\u5730\u5740\u662f\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"Referer Header"})," \u83b7\u53d6\u7684\uff0c\u4e00\u822c\u6765\u8bf4\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\u90fd\u4f1a\u4f20\u9012\u8fd9\u4e00Header\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page", func(r *ghttp.Request) {\n        r.Response.Writeln(`<a href="/back">back</a>`)\n    })\n    s.BindHandler("/back", func(r *ghttp.Request) {\n        r.Response.RedirectBack()\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,c.jsx)(n.a,{href:"http://127.0.0.1:8199/page",children:"http://127.0.0.1:8199/page"})," \u70b9\u51fb\u9875\u9762\u7684 ",(0,c.jsx)(n.code,{children:"back"})," \u8fde\u63a5 \uff0c\u53ef\u4ee5\u53d1\u73b0\u70b9\u51fb\u540e\u9875\u9762\u968f\u540e\u53c8\u8df3\u8f6c\u4e86\u56de\u6765\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(296540);const c={},i=t.createContext(c);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);