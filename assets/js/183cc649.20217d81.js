"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["22595"],{901200:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>s,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect","title":"\u6570\u636E\u8FD4\u56DE-Redirect","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528RedirectTo\u548CRedirectBack\u65B9\u6CD5\u5B9E\u73B0\u9875\u9762\u8DF3\u8F6C\u529F\u80FD\u3002\u901A\u8FC7Location Header\u5B9E\u73B0\u9875\u9762\u4E4B\u95F4\u7684\u8DF3\u8F6C\uFF0C\u5305\u62EC\u8DF3\u8F6C\u5230\u6307\u5B9A\u5730\u5740\u548C\u8FD4\u56DE\u5230\u4E0A\u4E00\u9875\u9762\u3002\u672C\u793A\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u5728\u672C\u5730\u670D\u52A1\u4E2D\u8BBE\u7F6E\u9875\u9762\u91CD\u5B9A\u5411\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3HTTP\u5730\u5740\u5904\u7406\u53CAReferer Header\u7684\u5E94\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE","slug":"/docs/web/response-redirect","permalink":"/2.7.x/docs/web/response-redirect","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-Redirect.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/web/response-redirect","title":"\u6570\u636E\u8FD4\u56DE-Redirect","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u8FD4\u56DE","\u9875\u9762\u8DF3\u8F6C","RedirectTo","RedirectBack","Location Header","\u7F51\u9875\u91CD\u5B9A\u5411","HTTP\u5730\u5740","Referer Header"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528RedirectTo\u548CRedirectBack\u65B9\u6CD5\u5B9E\u73B0\u9875\u9762\u8DF3\u8F6C\u529F\u80FD\u3002\u901A\u8FC7Location Header\u5B9E\u73B0\u9875\u9762\u4E4B\u95F4\u7684\u8DF3\u8F6C\uFF0C\u5305\u62EC\u8DF3\u8F6C\u5230\u6307\u5B9A\u5730\u5740\u548C\u8FD4\u56DE\u5230\u4E0A\u4E00\u9875\u9762\u3002\u672C\u793A\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u5728\u672C\u5730\u670D\u52A1\u4E2D\u8BBE\u7F6E\u9875\u9762\u91CD\u5B9A\u5411\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3HTTP\u5730\u5740\u5904\u7406\u53CAReferer Header\u7684\u5E94\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u8FD4\u56DE-JSON/XML","permalink":"/2.7.x/docs/web/response-json-xml"},"next":{"title":"\u6570\u636E\u8FD4\u56DE-Exit\u63A7\u5236","permalink":"/2.7.x/docs/web/response-exit-exitall-exithook"}}'),c=r("785893"),i=r("250065");let o={slug:"/docs/web/response-redirect",title:"\u6570\u636E\u8FD4\u56DE-Redirect",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6570\u636E\u8FD4\u56DE","\u9875\u9762\u8DF3\u8F6C","RedirectTo","RedirectBack","Location Header","\u7F51\u9875\u91CD\u5B9A\u5411","HTTP\u5730\u5740","Referer Header"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528RedirectTo\u548CRedirectBack\u65B9\u6CD5\u5B9E\u73B0\u9875\u9762\u8DF3\u8F6C\u529F\u80FD\u3002\u901A\u8FC7Location Header\u5B9E\u73B0\u9875\u9762\u4E4B\u95F4\u7684\u8DF3\u8F6C\uFF0C\u5305\u62EC\u8DF3\u8F6C\u5230\u6307\u5B9A\u5730\u5740\u548C\u8FD4\u56DE\u5230\u4E0A\u4E00\u9875\u9762\u3002\u672C\u793A\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u5728\u672C\u5730\u670D\u52A1\u4E2D\u8BBE\u7F6E\u9875\u9762\u91CD\u5B9A\u5411\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u7406\u89E3HTTP\u5730\u5740\u5904\u7406\u53CAReferer Header\u7684\u5E94\u7528\u3002"},d=void 0,s={},a=[{value:"<code>RedirectTo</code>",id:"redirectto",level:2},{value:"<code>RedirectBack</code>",id:"redirectback",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"RedirectTo/RedirectBack"})," \u6765\u5B9E\u73B0\u9875\u9762\u4E4B\u95F4\u7684\u8DF3\u8F6C\uFF0C\u8BE5\u529F\u80FD\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"Location Header"})," \u5B9E\u73B0\u3002\u76F8\u5173\u65B9\u6CD5\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func (r *Response) RedirectBack(code ...int)\nfunc (r *Response) RedirectTo(location string, code ...int)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"redirectto",children:(0,c.jsx)(n.code,{children:"RedirectTo"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ReditectTo"})," \u7528\u4EE5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u8DF3\u8F6C\u5230\u6307\u5B9A\u7684\u5730\u5740\uFF0C\u5730\u5740\u53EF\u4EE5\u662F\u4E00\u4E2A\u672C\u5730\u670D\u52A1\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B8C\u6574\u7684 ",(0,c.jsx)(n.code,{children:"HTTP"})," \u5730\u5740\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.RedirectTo("/login")\n    })\n    s.BindHandler("/login", func(r *ghttp.Request) {\n        r.Response.Writeln("Login First")\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8FD0\u884C\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE ",(0,c.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"}),"\xa0\u968F\u540E\u53EF\u4EE5 \u53D1\u73B0\u6D4F\u89C8\u5668\u7ACB\u5373\u8DF3\u8F6C\u5230\u4E86 ",(0,c.jsx)(n.a,{href:"http://127.0.0.1:8199/login",children:"http://127.0.0.1:8199/login"})," \u9875\u9762\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"redirectback",children:(0,c.jsx)(n.code,{children:"RedirectBack"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"RedirectBack"})," \u7528\u4EE5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u8DF3\u8F6C\u5230\u4E0A\u4E00\u9875\u9762\u5730\u5740\uFF0C\u4E0A\u4E00\u9875\u9762\u5730\u5740\u662F\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"Referer Header"})," \u83B7\u53D6\u7684\uFF0C\u4E00\u822C\u6765\u8BF4\u6D4F\u89C8\u5668\u5BA2\u6237\u7AEF\u90FD\u4F1A\u4F20\u9012\u8FD9\u4E00Header\u3002\u4F7F\u7528\u793A\u4F8B\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/page", func(r *ghttp.Request) {\n        r.Response.Writeln(`<a href="/back">back</a>`)\n    })\n    s.BindHandler("/back", func(r *ghttp.Request) {\n        r.Response.RedirectBack()\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u8FD0\u884C\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE ",(0,c.jsx)(n.a,{href:"http://127.0.0.1:8199/page",children:"http://127.0.0.1:8199/page"})," \u70B9\u51FB\u9875\u9762\u7684 ",(0,c.jsx)(n.code,{children:"back"})," \u8FDE\u63A5 \uFF0C\u53EF\u4EE5\u53D1\u73B0\u70B9\u51FB\u540E\u9875\u9762\u968F\u540E\u53C8\u8DF3\u8F6C\u4E86\u56DE\u6765\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var t=r(667294);let c={},i=t.createContext(c);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);