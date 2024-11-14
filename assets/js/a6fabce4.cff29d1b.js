"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[52907],{331835:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1","title":"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gredis\u5b9e\u73b0\u4e00\u4e2a\u63a5\u53e3\u5316\u8bbe\u8ba1\u7684Redis\u7ec4\u4ef6\uff0c\u5177\u5907\u5f3a\u5927\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49Redis Adapter\uff0c\u53ef\u4ee5\u8f7b\u677e\u8986\u76d6\u9ed8\u8ba4\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8be6\u7ec6\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u5728\u81ea\u5b9a\u4e49Do\u65b9\u6cd5\u4e2d\u5b9e\u73b0\u65e5\u5fd7\u6253\u5370\uff0c\u5e76\u5728\u4e1a\u52a1\u4e2d\u4f7f\u7528\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis","slug":"/docs/components/contrib-nosql-redis-interface","permalink":"/docs/components/contrib-nosql-redis-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/contrib-nosql-redis-interface","title":"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1","sidebar_position":4,"hide_title":true,"keywords":["Redis","\u63a5\u53e3\u5316\u8bbe\u8ba1","GoFrame","GoFrame\u6846\u67b6","gredis","\u81ea\u5b9a\u4e49Redis Adapter","\u6269\u5c55Redis\u65b9\u6cd5","Redis\u793e\u533a\u7ec4\u4ef6","SetAdapter\u65b9\u6cd5","GetAdapter\u65b9\u6cd5"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gredis\u5b9e\u73b0\u4e00\u4e2a\u63a5\u53e3\u5316\u8bbe\u8ba1\u7684Redis\u7ec4\u4ef6\uff0c\u5177\u5907\u5f3a\u5927\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49Redis Adapter\uff0c\u53ef\u4ee5\u8f7b\u677e\u8986\u76d6\u9ed8\u8ba4\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8be6\u7ec6\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u5728\u81ea\u5b9a\u4e49Do\u65b9\u6cd5\u4e2d\u5b9e\u73b0\u65e5\u5fd7\u6253\u5370\uff0c\u5e76\u5728\u4e1a\u52a1\u4e2d\u4f7f\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"Redis-Conn\u5bf9\u8c61","permalink":"/docs/components/contrib-nosql-redis-conn"},"next":{"title":"\u5fae\u670d\u52a1\u5f00\u53d1","permalink":"/docs/micro-service"}}');var i=r(474848),s=r(28453);const d={slug:"/docs/components/contrib-nosql-redis-interface",title:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1",sidebar_position:4,hide_title:!0,keywords:["Redis","\u63a5\u53e3\u5316\u8bbe\u8ba1","GoFrame","GoFrame\u6846\u67b6","gredis","\u81ea\u5b9a\u4e49Redis Adapter","\u6269\u5c55Redis\u65b9\u6cd5","Redis\u793e\u533a\u7ec4\u4ef6","SetAdapter\u65b9\u6cd5","GetAdapter\u65b9\u6cd5"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gredis\u5b9e\u73b0\u4e00\u4e2a\u63a5\u53e3\u5316\u8bbe\u8ba1\u7684Redis\u7ec4\u4ef6\uff0c\u5177\u5907\u5f3a\u5927\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49Redis Adapter\uff0c\u53ef\u4ee5\u8f7b\u677e\u8986\u76d6\u9ed8\u8ba4\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8be6\u7ec6\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u5728\u81ea\u5b9a\u4e49Do\u65b9\u6cd5\u4e2d\u5b9e\u73b0\u65e5\u5fd7\u6253\u5370\uff0c\u5e76\u5728\u4e1a\u52a1\u4e2d\u4f7f\u7528\u3002"},o=void 0,c={},a=[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"\u76f8\u5173\u65b9\u6cd5",id:"\u76f8\u5173\u65b9\u6cd5",level:2},{value:"\u81ea\u5b9e\u73b0Redis Adapter",id:"\u81ea\u5b9e\u73b0redis-adapter",level:2}];function g(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gredis"})," \u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5177\u6709\u5f3a\u5927\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis#Adapter"})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u65b9\u6cd5",children:"\u76f8\u5173\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// SetAdapter sets custom adapter for current redis client.\nfunc (r *Redis) SetAdapter(adapter Adapter)\n\n// GetAdapter returns the adapter that is set in current redis client.\nfunc (r *Redis) GetAdapter() Adapter\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u5b9e\u73b0redis-adapter",children:"\u81ea\u5b9e\u73b0Redis Adapter"}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67b6\u793e\u533a\u7ec4\u4ef6\u63d0\u4f9b\u4e86 ",(0,i.jsx)(n.code,{children:"Redis Adapter"})," \u7684\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u5982\u679c\u5f00\u53d1\u8005\u9700\u8981\u81ea\u5b9e\u73b0 ",(0,i.jsx)(n.code,{children:"Redis Adapter"})," \u6216\u8005\u60f3\u8981\u8986\u76d6\u5176\u4e2d\u7684\u67d0\u4e00\u4e9b\u65b9\u6cd5\uff0c\u53ef\u4ee5\u57fa\u4e8e\u8be5\u5b9e\u73b0\u6765\u6269\u5c55\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8be5\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,i.jsx)(n.code,{children:"Redis Adapter"}),"\uff0c\u5e76\u4e14\u8986\u76d6\u5b83\u7684 ",(0,i.jsx)(n.code,{children:"Do"})," \u5e95\u5c42\u65b9\u6cd5\u3002\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u6211\u4eec\u8fd9\u91cc\u5728\u81ea\u5b9e\u73b0\u7684 ",(0,i.jsx)(n.code,{children:"Do"})," \u65b9\u6cd5\u4e2d\u6253\u5370\u4e00\u6761\u65e5\u5fd7\u5373\u53ef\uff0c\u540e\u7eed\u903b\u8f91\u4ecd\u7136\u8d70\u793e\u533a ",(0,i.jsx)(n.code,{children:"Redis Adapter"})," \u7684\u5b9e\u73b0\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/container/gvar"\n    "github.com/gogf/gf/v2/database/gredis"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n    ctx    = gctx.New()\n    group  = "cache"\n    config = gredis.Config{\n        Address: "127.0.0.1:6379",\n        Db:      1,\n    }\n)\n\n// MyRedis description\ntype MyRedis struct {\n    *redis.Redis\n}\n\n// Do implements and overwrites the underlying function Do from Adapter.\nfunc (r *MyRedis) Do(ctx context.Context, command string, args ...interface{}) (*gvar.Var, error) {\n    fmt.Println("MyRedis Do:", command, args)\n    return r.Redis.Do(ctx, command, args...)\n}\n\nfunc main() {\n    gredis.RegisterAdapterFunc(func(config *gredis.Config) gredis.Adapter {\n        r := &MyRedis{redis.New(config)}\n        r.AdapterOperation = r // This is necessary.\n        return r\n    })\n    gredis.SetConfig(&config, group)\n\n    _, err := g.Redis(group).Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis(group).Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MyRedis Do: Set [key value]\nMyRedis Do: Get [key]\nvalue\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var t=r(296540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);