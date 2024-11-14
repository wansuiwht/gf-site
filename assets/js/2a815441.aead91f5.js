"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[65967],{820181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b","title":"Redis-\u4f7f\u7528\u793a\u4f8b","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u5728Redis\u4e2d\u6267\u884c\u57fa\u672c\u64cd\u4f5c\u7684\u793a\u4f8b\uff0c\u5305\u62ecSet/Get\u3001SetEx\u3001HSet/HGetAll\u548cHMSet/HMGet\u64cd\u4f5c\u3002\u8fd9\u4e9b\u4ee3\u7801\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u7684Redis\u6a21\u5757\u8fdb\u884c\u6570\u636e\u5b58\u50a8\u548c\u68c0\u7d22\uff0c\u9002\u7528\u4e8e\u521d\u5b66\u8005\u5b66\u4e60\u5982\u4f55\u5728GoFrame\u6846\u67b6\u73af\u5883\u4e2d\u5b9e\u73b0Redis\u529f\u80fd\u3002\u672c\u793a\u4f8b\u540c\u65f6\u63d0\u9192\u7528\u6237\u5728Redis\u7248\u672c4.0.0\u53ca\u4ee5\u4e0a\u4e2dHMSET\u5df2\u5f03\u7528\uff0c\u5e94\u4f7f\u7528HSET\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-example","permalink":"/2.7.x/docs/components/contrib-nosql-redis-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-example","title":"Redis-\u4f7f\u7528\u793a\u4f8b","sidebar_position":1,"hide_title":true,"keywords":["Redis\u793a\u4f8b","GoFrame\u6846\u67b6","NoSQL\u6570\u636e\u5e93","Set\u64cd\u4f5c","Get\u64cd\u4f5c","SetEx\u64cd\u4f5c","HSet\u64cd\u4f5c","HMSet\u64cd\u4f5c","HGetAll\u64cd\u4f5c","HMGet\u64cd\u4f5c"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u5728Redis\u4e2d\u6267\u884c\u57fa\u672c\u64cd\u4f5c\u7684\u793a\u4f8b\uff0c\u5305\u62ecSet/Get\u3001SetEx\u3001HSet/HGetAll\u548cHMSet/HMGet\u64cd\u4f5c\u3002\u8fd9\u4e9b\u4ee3\u7801\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u7684Redis\u6a21\u5757\u8fdb\u884c\u6570\u636e\u5b58\u50a8\u548c\u68c0\u7d22\uff0c\u9002\u7528\u4e8e\u521d\u5b66\u8005\u5b66\u4e60\u5982\u4f55\u5728GoFrame\u6846\u67b6\u73af\u5883\u4e2d\u5b9e\u73b0Redis\u529f\u80fd\u3002\u672c\u793a\u4f8b\u540c\u65f6\u63d0\u9192\u7528\u6237\u5728Redis\u7248\u672c4.0.0\u53ca\u4ee5\u4e0a\u4e2dHMSET\u5df2\u5f03\u7528\uff0c\u5e94\u4f7f\u7528HSET\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis-\u914d\u7f6e\u7ba1\u7406","permalink":"/2.7.x/docs/components/contrib-nosql-redis-config"},"next":{"title":"Redis-\u547d\u4ee4\u4ea4\u4e92","permalink":"/2.7.x/docs/components/contrib-nosql-redis-do-and-serialization"}}');var r=t(474848),s=t(28453);const o={slug:"/docs/components/contrib-nosql-redis-example",title:"Redis-\u4f7f\u7528\u793a\u4f8b",sidebar_position:1,hide_title:!0,keywords:["Redis\u793a\u4f8b","GoFrame\u6846\u67b6","NoSQL\u6570\u636e\u5e93","Set\u64cd\u4f5c","Get\u64cd\u4f5c","SetEx\u64cd\u4f5c","HSet\u64cd\u4f5c","HMSet\u64cd\u4f5c","HGetAll\u64cd\u4f5c","HMGet\u64cd\u4f5c"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u5728Redis\u4e2d\u6267\u884c\u57fa\u672c\u64cd\u4f5c\u7684\u793a\u4f8b\uff0c\u5305\u62ecSet/Get\u3001SetEx\u3001HSet/HGetAll\u548cHMSet/HMGet\u64cd\u4f5c\u3002\u8fd9\u4e9b\u4ee3\u7801\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u7684Redis\u6a21\u5757\u8fdb\u884c\u6570\u636e\u5b58\u50a8\u548c\u68c0\u7d22\uff0c\u9002\u7528\u4e8e\u521d\u5b66\u8005\u5b66\u4e60\u5982\u4f55\u5728GoFrame\u6846\u67b6\u73af\u5883\u4e2d\u5b9e\u73b0Redis\u529f\u80fd\u3002\u672c\u793a\u4f8b\u540c\u65f6\u63d0\u9192\u7528\u6237\u5728Redis\u7248\u672c4.0.0\u53ca\u4ee5\u4e0a\u4e2dHMSET\u5df2\u5f03\u7528\uff0c\u5e94\u4f7f\u7528HSET\u3002"},c=void 0,d={},l=[{value:"<code>Set/Get</code> \u64cd\u4f5c",id:"setget-\u64cd\u4f5c",level:2},{value:"<code>SetEx</code> \u64cd\u4f5c",id:"setex-\u64cd\u4f5c",level:2},{value:"<code>HSet/HGetAll</code> \u64cd\u4f5c",id:"hsethgetall-\u64cd\u4f5c",level:2},{value:"<code>HMSet/HMGet</code> \u64cd\u4f5c",id:"hmsethmget-\u64cd\u4f5c",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"setget-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"Set/Get"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    _, err := g.Redis().Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-value"})}),"\n",(0,r.jsxs)(n.h2,{id:"setex-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"SetEx"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    err := g.Redis().SetEX(ctx, "key", "value", 1)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.String())\n\n    time.Sleep(time.Second)\n\n    value, err = g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.IsNil())\n    fmt.Println(value.Val())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-false",children:"value\ntrue\n<nil>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"hsethgetall-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"HSet/HGetAll"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    _, err := g.Redis().HSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    value, err := g.Redis().HGetAll(ctx, key)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.Map())\n\n    // scan to struct\n    type User struct {\n        Id    uint64\n        Name  string\n        Score float64\n    }\n    var user *User\n    if err = value.Scan(&user); err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(user)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'map[id:1 name:john score:100]\n{\n    Id:    1,\n    Name:  "john",\n    Score: 100,\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"hmsethmget-\u64cd\u4f5c",children:[(0,r.jsx)(n.code,{children:"HMSet/HMGet"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var (\n        ctx = gctx.New()\n        key = "key"\n    )\n    err := g.Redis().HMSet(ctx, key, g.Map{\n        "id":    1,\n        "name":  "john",\n        "score": 100,\n    })\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // retrieve hash map\n    values, err := g.Redis().HMGet(ctx, key, "id", "name")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    g.Dump(values.Strings())\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[\n    "1",\n    "john",\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"As per Redis 4.0.0, HMSET is considered deprecated. Please use HSET in new code. "})}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e ",(0,r.jsx)(n.code,{children:"Redis 4.0.0"}),"\uff0c ",(0,r.jsx)(n.code,{children:"HMSET"})," \u88ab\u89c6\u4e3a\u5df2\u5f03\u7528\u3002\u8bf7\u5728\u65b0\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"HSET"}),"\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(296540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);