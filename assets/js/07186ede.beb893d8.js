"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["22344"],{335967:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>g,assets:()=>d,toc:()=>a,frontMatter:()=>t});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u7ED3\u679C\u5904\u7406","title":"Redis-\u7ED3\u679C\u5904\u7406","description":"\u53EF\u4EE5\u770B\u5230\u901A\u8FC7\u5BA2\u6237\u7AEF\u65B9\u6CD5 Do/Receive \u83B7\u53D6\u53EF\u4F9B\u65B9\u4FBF\u8F6C\u6362\u7684 gvar.Var \u901A\u7528\u53D8\u91CF\u7ED3\u679C\u3002\u901A\u8FC7 gvar.Var \u7684\u5F3A\u5927\u8F6C\u6362\u529F\u80FD\u53EF\u4EE5\u8F6C\u6362\u4E3A\u4EFB\u610F\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u57FA\u672C\u6570\u636E\u7C7B\u578B Int, String, Strings\uFF0C\u6216\u8005\u7ED3\u6784\u4F53 Struct \u7B49\u7B49\u3002","source":"@site/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u7ED3\u679C\u5904\u7406.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u7ED3\u679C\u5904\u7406","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u7ED3\u679C\u5904\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u7ED3\u679C\u5904\u7406.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"Redis-\u7ED3\u679C\u5904\u7406","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Redis-Conn\u5BF9\u8C61","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-Conn\u5BF9\u8C61"},"next":{"title":"Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1","permalink":"/2.0.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u63A5\u53E3\u5316\u8BBE\u8BA1"}}'),c=i("785893"),s=i("250065");let t={title:"Redis-\u7ED3\u679C\u5904\u7406",sidebar_position:3,hide_title:!0},o=void 0,d={},a=[{value:"<code>Do</code> \u793A\u4F8B",id:"do-\u793A\u4F8B",level:3},{value:"<code>Receive</code> \u793A\u4F8B",id:"receive-\u793A\u4F8B",level:3},{value:"<code>HashSet</code> \u793A\u4F8B",id:"hashset-\u793A\u4F8B",level:3}];function l(e){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u901A\u8FC7\u5BA2\u6237\u7AEF\u65B9\u6CD5 ",(0,c.jsx)(n.code,{children:"Do/Receive"})," \u83B7\u53D6\u53EF\u4F9B\u65B9\u4FBF\u8F6C\u6362\u7684 ",(0,c.jsx)(n.code,{children:"gvar.Var"})," \u901A\u7528\u53D8\u91CF\u7ED3\u679C\u3002\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"gvar.Var"})," \u7684\u5F3A\u5927\u8F6C\u6362\u529F\u80FD\u53EF\u4EE5\u8F6C\u6362\u4E3A\u4EFB\u610F\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u57FA\u672C\u6570\u636E\u7C7B\u578B ",(0,c.jsx)(n.code,{children:"Int"}),", ",(0,c.jsx)(n.code,{children:"String"}),", ",(0,c.jsx)(n.code,{children:"Strings"}),"\uFF0C\u6216\u8005\u7ED3\u6784\u4F53 ",(0,c.jsx)(n.code,{children:"Struct"})," \u7B49\u7B49\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"do-\u793A\u4F8B",children:[(0,c.jsx)(n.code,{children:"Do"})," \u793A\u4F8B"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n\n    conn, _ := g.Redis().Conn(ctx)\n    defer conn.Close(ctx)\n    conn.Do(ctx, "SET", "k", "v")\n    v, _ := conn.Do(ctx, "GET", "k")\n    fmt.Println(v.String())\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-v"})}),"\n",(0,c.jsxs)(n.h3,{id:"receive-\u793A\u4F8B",children:[(0,c.jsx)(n.code,{children:"Receive"})," \u793A\u4F8B"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n    )\n\n    conn, _ := g.Redis().Conn(ctx)\n    defer conn.Close(ctx)\n    _, err := conn.Do(ctx, "SUBSCRIBE", "channel")\n    if err != nil {\n        panic(err)\n    }\n    for {\n        reply, err := conn.Receive(ctx)\n        if err != nil {\n            panic(err)\n        }\n        fmt.Println(reply.Strings())\n    }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7A0B\u5E8F\u5C06\u963B\u585E\u7B49\u5F85\u83B7\u53D6\u6570\u636E\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u53E6\u5916\u6253\u5F00\u4E00\u4E2A\u7EC8\u7AEF\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"redis-cli"})," \u547D\u4EE4\u8FDB\u5165 ",(0,c.jsx)(n.code,{children:"Redis Server"}),"\uFF0C\u53D1\u5E03\u4E00\u6761\u6D88\u606F\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ redis-cli\n127.0.0.1:6379> publish channel test\n(integer) 1\n127.0.0.1:6379>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u968F\u540E\u7A0B\u5E8F\u7EC8\u7AEF\u7ACB\u5373\u6253\u5370\u51FA\u4ECE ",(0,c.jsx)(n.code,{children:"Redis Server"})," \u83B7\u53D6\u7684\u6570\u636E\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"[message channel test]\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"hashset-\u793A\u4F8B",children:[(0,c.jsx)(n.code,{children:"HashSet"})," \u793A\u4F8B"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"HashSet"})," \u662F\u6211\u4EEC\u6BD4\u8F83\u5E38\u7528\u7684 ",(0,c.jsx)(n.code,{children:"Redis"})," \u6570\u636E\u7ED3\u6784\uFF0C\u6211\u4EEC\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5730\u5C06 ",(0,c.jsx)(n.code,{children:"Redis"})," \u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"HashSet"})," \u83B7\u53D6\u5E76\u8F6C\u6362\u4E3A ",(0,c.jsx)(n.code,{children:"Golang Map"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        err    error\n        result *gvar.Var\n        key    = "user"\n    )\n\n    _, err = g.Redis().Do(ctx,"HSET", key, "id", 10000)\n    if err != nil {\n        panic(err)\n    }\n    _, err = g.Redis().Do(ctx,"HSET", key, "name", "john")\n    if err != nil {\n        panic(err)\n    }\n    result, err = g.Redis().Do(ctx,"HGETALL", key)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(result.Map())\n}\n'})})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return t}});var r=i(667294);let c={},s=r.createContext(c);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);