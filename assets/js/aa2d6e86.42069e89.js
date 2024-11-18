"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["24116"],{903294:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>a,assets:()=>d,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CSRF\u9632\u5FA1\u8BBE\u7F6E","title":"CSRF\u9632\u5FA1\u8BBE\u7F6E","description":"\u8BB2\u89E3\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u901A\u8FC7CSRF\u9632\u5FA1\u8BBE\u7F6E\u4FDD\u62A4Web\u5E94\u7528\u7A0B\u5E8F\u5B89\u5168\u3002\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4F7F\u7528token\u6821\u9A8C\u673A\u5236\u5E76\u901A\u8FC7\u4E2D\u95F4\u4EF6\u5B9E\u73B0\u63D2\u4EF6\u5316\u9632\u62A4\u7684\u65B9\u6CD5\u3002\u5305\u62EC\u63D2\u4EF6\u7684\u5B89\u88C5\u548C\u914D\u7F6E\u4EE5\u53CA\u524D\u7AEF\u5BF9\u63A5\u7684\u5173\u952E\u6B65\u9AA4\u548C\u4EE3\u7801\u793A\u4F8B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u6709\u6548\u62B5\u5FA1CSRF\u653B\u51FB\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CSRF\u9632\u5FA1\u8BBE\u7F6E.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/docs/web/senior-csrf","permalink":"/2.7.x/docs/web/senior-csrf","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/CSRF\u9632\u5FA1\u8BBE\u7F6E.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/web/senior-csrf","title":"CSRF\u9632\u5FA1\u8BBE\u7F6E","sidebar_position":5,"hide_title":true,"keywords":["CSRF\u9632\u5FA1","GoFrame\u6846\u67B6","\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020","CSRF\u653B\u51FB","XSRF","token\u6821\u9A8C","\u4E2D\u95F4\u4EF6","\u63D2\u4EF6\u6279\u5904\u7406","\u7F51\u7EDC\u5B89\u5168","Web\u5E94\u7528\u7A0B\u5E8F\u5B89\u5168"],"description":"\u8BB2\u89E3\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u901A\u8FC7CSRF\u9632\u5FA1\u8BBE\u7F6E\u4FDD\u62A4Web\u5E94\u7528\u7A0B\u5E8F\u5B89\u5168\u3002\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4F7F\u7528token\u6821\u9A8C\u673A\u5236\u5E76\u901A\u8FC7\u4E2D\u95F4\u4EF6\u5B9E\u73B0\u63D2\u4EF6\u5316\u9632\u62A4\u7684\u65B9\u6CD5\u3002\u5305\u62EC\u63D2\u4EF6\u7684\u5B89\u88C5\u548C\u914D\u7F6E\u4EE5\u53CA\u524D\u7AEF\u5BF9\u63A5\u7684\u5173\u952E\u6B65\u9AA4\u548C\u4EE3\u7801\u793A\u4F8B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u6709\u6548\u62B5\u5FA1CSRF\u653B\u51FB\u3002"},"sidebar":"mainSidebar","previous":{"title":"CORS\u8DE8\u57DF\u5904\u7406","permalink":"/2.7.x/docs/web/senior-cors"},"next":{"title":"HOOK\u4E8B\u4EF6\u56DE\u8C03","permalink":"/2.7.x/docs/web/senior-hook"}}'),s=o("785893"),t=o("250065");let i={slug:"/docs/web/senior-csrf",title:"CSRF\u9632\u5FA1\u8BBE\u7F6E",sidebar_position:5,hide_title:!0,keywords:["CSRF\u9632\u5FA1","GoFrame\u6846\u67B6","\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020","CSRF\u653B\u51FB","XSRF","token\u6821\u9A8C","\u4E2D\u95F4\u4EF6","\u63D2\u4EF6\u6279\u5904\u7406","\u7F51\u7EDC\u5B89\u5168","Web\u5E94\u7528\u7A0B\u5E8F\u5B89\u5168"],description:"\u8BB2\u89E3\u5982\u4F55\u5728GoFrame\u6846\u67B6\u4E2D\u901A\u8FC7CSRF\u9632\u5FA1\u8BBE\u7F6E\u4FDD\u62A4Web\u5E94\u7528\u7A0B\u5E8F\u5B89\u5168\u3002\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4F7F\u7528token\u6821\u9A8C\u673A\u5236\u5E76\u901A\u8FC7\u4E2D\u95F4\u4EF6\u5B9E\u73B0\u63D2\u4EF6\u5316\u9632\u62A4\u7684\u65B9\u6CD5\u3002\u5305\u62EC\u63D2\u4EF6\u7684\u5B89\u88C5\u548C\u914D\u7F6E\u4EE5\u53CA\u524D\u7AEF\u5BF9\u63A5\u7684\u5173\u952E\u6B65\u9AA4\u548C\u4EE3\u7801\u793A\u4F8B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u6709\u6548\u62B5\u5FA1CSRF\u653B\u51FB\u3002"},c=void 0,d={},l=[{value:"\u5982\u4F55\u9632\u5FA1",id:"\u5982\u4F55\u9632\u5FA1",level:2},{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u5F15\u5165\u63D2\u4EF6\u5305",id:"\u5F15\u5165\u63D2\u4EF6\u5305",level:3},{value:"\u914D\u7F6E\u63A5\u53E3\u4E2D\u95F4\u4EF6",id:"\u914D\u7F6E\u63A5\u53E3\u4E2D\u95F4\u4EF6",level:3},{value:"\u524D\u7AEF\u5BF9\u63A5",id:"\u524D\u7AEF\u5BF9\u63A5",level:3},{value:"\u4EE3\u7801\u793A\u4F8B",id:"\u4EE3\u7801\u793A\u4F8B",level:2},{value:"\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E",id:"\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E",level:3},{value:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E",id:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E",level:3},{value:"\u901A\u8FC7\u8BF7\u6C42\u4F53\u9A8C\u6548\u679C",id:"\u901A\u8FC7\u8BF7\u6C42\u4F53\u9A8C\u6548\u679C",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020"}),"\uFF08\u82F1\u8BED\uFF1A ",(0,s.jsx)(n.code,{children:"Cross-Site Request Forgery"}),"\uFF09\uFF0C\u4E5F\u88AB\u79F0\u4E3A",(0,s.jsx)(n.strong,{children:"one-click attack"}),"\u6216\u8005",(0,s.jsx)(n.strong,{children:"session riding"}),"\uFF0C\u901A\u5E38\u7F29\u5199\u4E3A",(0,s.jsx)(n.strong,{children:"CSRF"})," \u6216\u8005",(0,s.jsx)(n.strong,{children:"XSRF"}),"\uFF0C \u662F\u4E00\u79CD\u631F\u5236\u7528\u6237\u5728\u5F53\u524D\u5DF2\u767B\u5F55\u7684Web\u5E94\u7528\u7A0B\u5E8F\u4E0A\u6267\u884C\u975E\u672C\u610F\u7684\u64CD\u4F5C\u7684\u653B\u51FB\u65B9\u6CD5\u3002\u8DDF\u8DE8\u7F51\u7AD9\u811A\u672C\uFF08 ",(0,s.jsx)(n.code,{children:"XSS"}),"\uFF09\u76F8\u6BD4\uFF0C ",(0,s.jsx)(n.strong,{children:"XSS"})," \u5229\u7528\u7684\u662F\u7528\u6237\u5BF9\u6307\u5B9A\u7F51\u7AD9\u7684\u4FE1\u4EFB\uFF0C ",(0,s.jsx)(n.code,{children:"CSRF"})," \u5229\u7528\u7684\u662F\u7F51\u7AD9\u5BF9\u7528\u6237\u7F51\u9875\u6D4F\u89C8\u5668\u7684\u4FE1\u4EFB\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5982\u4F55\u9632\u5FA1",children:"\u5982\u4F55\u9632\u5FA1"}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"token"})," \u7684\u65B9\u5F0F\u5BF9\u8BF7\u6C42\u8FDB\u884C\u6821\u9A8C\uFF0C\u901A\u8FC7\u4E2D\u95F4\u4EF6\u7684\u65B9\u5F0F\u5B9E\u73B0\uFF0C ",(0,s.jsx)(n.code,{children:"CSRF"})," \u8DE8\u7AD9\u70B9\u9632\u5FA1\u63D2\u4EF6\u7531\u793E\u533A\u5305\u63D0\u4F9B\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u5BF9\u63A5\u53E3\u6DFB\u52A0\u4E2D\u95F4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u589E\u52A0 ",(0,s.jsx)(n.code,{children:"token"})," \u6821\u9A8C\u529F\u80FD\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u611F\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u9605\u8BFB\u63D2\u4EF6\u6E90\u7801 ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/csrf",children:"https://github.com/gogf/csrf"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,s.jsx)(n.h3,{id:"\u5F15\u5165\u63D2\u4EF6\u5305",children:"\u5F15\u5165\u63D2\u4EF6\u5305"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/csrf"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u914D\u7F6E\u63A5\u53E3\u4E2D\u95F4\u4EF6",children:"\u914D\u7F6E\u63A5\u53E3\u4E2D\u95F4\u4EF6"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"csrf"})," \u63D2\u4EF6\u652F\u6301\u81EA\u5B9A\u4E49 ",(0,s.jsx)(n.code,{children:"csrf.Config"})," \u914D\u7F6E\uFF0C ",(0,s.jsx)(n.code,{children:"Config"})," \u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"Cookie.Name"})," \u662F\u4E2D\u95F4\u4EF6\u8BBE\u7F6E\u5230\u8BF7\u6C42\u8FD4\u56DE ",(0,s.jsx)(n.code,{children:"Cookie"})," ",(0,s.jsx)(n.strong,{children:"\u4E2D"})," ",(0,s.jsx)(n.code,{children:"token"})," \u7684\u540D\u79F0\uFF0C ",(0,s.jsx)(n.code,{children:"ExpireTime"})," \u662F ",(0,s.jsx)(n.code,{children:"token"})," \u8D85\u65F6\u65F6\u95F4\uFF0C ",(0,s.jsx)(n.code,{children:"TokenLength"})," \u662F ",(0,s.jsx)(n.code,{children:"token"})," \u957F\u5EA6\uFF0C ",(0,s.jsx)(n.code,{children:"TokenRequestKey"})," \u662F\u540E\u7EED\u8BF7\u6C42\u9700\u6C42\u5E26\u4E0A\u7684\u53C2\u6570\u540D\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'s := g.Server()\ns.Group("/api.v2", func(group *ghttp.RouterGroup) {\n    group.Middleware(csrf.NewWithCfg(csrf.Config{\n        Cookie: &http.Cookie{\n            Name: "_csrf",// token name in cookie\n        },\n        ExpireTime:      time.Hour * 24,\n        TokenLength:     32,\n        TokenRequestKey: "X-Token",// use this key to read token in request param\n    }))\n    group.ALL("/csrf", func(r *ghttp.Request) {\n        r.Response.Writeln(r.Method + ": " + r.RequestURI)\n    })\n})\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u524D\u7AEF\u5BF9\u63A5",children:"\u524D\u7AEF\u5BF9\u63A5"}),"\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u914D\u7F6E\u540E\uFF0C\u524D\u7AEF\u5728POST\u8BF7\u6C42\u524D\u4ECE ",(0,s.jsx)(n.code,{children:"Cookie"})," \u4E2D\u8BFB\u53D6 ",(0,s.jsx)(n.code,{children:"_csrf"})," \u7684\u503C\uFF08\u5373 ",(0,s.jsx)(n.code,{children:"token"}),"\uFF09\uFF0C\u7136\u540E\u8BF7\u6C42\u53D1\u51FA\u65F6\u5C06 ",(0,s.jsx)(n.code,{children:"token"})," \u4EE5 ",(0,s.jsx)(n.code,{children:"X-Token"}),"\uFF08 ",(0,s.jsx)(n.code,{children:"TokenRequestKey"})," \u6240\u8BBE\u7F6E\uFF09\u53C2\u6570\u540D\u7F6E\u5165\u8BF7\u6C42\u4E2D\uFF08\u53EF\u4EE5\u662F ",(0,s.jsx)(n.code,{children:"Header"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"Form"}),"\uFF09\u5373\u53EF\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"token"})," \u6821\u9A8C\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4EE3\u7801\u793A\u4F8B",children:"\u4EE3\u7801\u793A\u4F8B"}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E",children:"\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n    "time"\n\n    "github.com/gogf/csrf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// default cfg\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.Middleware(csrf.New())\n        group.ALL("/csrf", func(r *ghttp.Request) {\n            r.Response.Writeln(r.Method + ": " + r.RequestURI)\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E",children:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "net/http"\n    "time"\n\n    "github.com/gogf/csrf"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// set cfg\nfunc main() {\n    s := g.Server()\n    s.Group("/api.v2", func(group *ghttp.RouterGroup) {\n        group.Middleware(csrf.NewWithCfg(csrf.Config{\n            Cookie: &http.Cookie{\n                Name: "_csrf",// token name in cookie\n                Secure:   true,\n                SameSite: http.SameSiteNoneMode,// \u81EA\u5B9A\u4E49samesite\n            },\n            ExpireTime:      time.Hour * 24,\n            TokenLength:     32,\n            TokenRequestKey: "X-Token",// use this key to read token in request param\n        }))\n        group.ALL("/csrf", func(r *ghttp.Request) {\n            r.Response.Writeln(r.Method + ": " + r.RequestURI)\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u901A\u8FC7\u8BF7\u6C42\u4F53\u9A8C\u6548\u679C",children:"\u901A\u8FC7\u8BF7\u6C42\u4F53\u9A8C\u6548\u679C"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://localhost:8199/api.v2/csrf",children:"http://localhost:8199/api.v2/csrf"})})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return i}});var r=o(667294);let s={},t=r.createContext(s);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);