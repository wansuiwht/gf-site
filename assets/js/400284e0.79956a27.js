"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[45206],{20080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(74848),i=n(28453);const s={title:"Redis-\u547d\u4ee4\u4ea4\u4e92",sidebar_position:2,hide_title:!0},c=void 0,d={id:"\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92",title:"Redis-\u547d\u4ee4\u4ea4\u4e92",description:"Do \u65b9\u6cd5",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis/2-Redis-\u547d\u4ee4\u4ea4\u4e92.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis",slug:"/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis/2-Redis-\u547d\u4ee4\u4ea4\u4e92.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730214664e3,sidebarPosition:2,frontMatter:{title:"Redis-\u547d\u4ee4\u4ea4\u4e92",sidebar_position:2,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"Redis-\u4f7f\u7528\u793a\u4f8b",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b"},next:{title:"Redis-Conn\u5bf9\u8c61",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-Conn\u5bf9\u8c61"}},o={},a=[{value:"<code>Do</code> \u65b9\u6cd5",id:"do-\u65b9\u6cd5",level:2},{value:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316",id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",level:2},{value:"<code>map</code> \u5b58\u53d6",id:"map-\u5b58\u53d6",level:3},{value:"<code>struct</code> \u5b58\u53d6",id:"struct-\u5b58\u53d6",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h2,{id:"do-\u65b9\u6cd5",children:[(0,r.jsx)(t.code,{children:"Do"})," \u65b9\u6cd5"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Do"})," \u662f\u901a\u7528\u7684\u547d\u4ee4\u4ea4\u4e92\u65b9\u6cd5\uff0c\u6267\u884c\u540c\u6b65\u6307\u4ee4\uff0c\u901a\u8fc7\u5411 ",(0,r.jsx)(t.code,{children:"Redis Server"})," \u53d1\u9001\u5bf9\u5e94\u7684 ",(0,r.jsx)(t.code,{children:"Redis API"})," \u547d\u4ee4\uff0c\u6765\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"Redis Server"})," \u7684\u670d\u52a1\u3002 ",(0,r.jsx)(t.code,{children:"Do"})," \u65b9\u6cd5\u6700\u5927\u7684\u7279\u70b9\u662f\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"Redis"})," \u547d\u4ee4\u4e0e\u670d\u52a1\u7aef\u4ea4\u4e92\uff0c\u56e0\u6b64\u6269\u5c55\u5f88\u5f3a\uff0c\u6ca1\u6709\u63d0\u4f9b ",(0,r.jsx)(t.code,{children:"Redis"})," \u64cd\u4f5c\u65b9\u6cd5\u7684\u5176\u4ed6\u547d\u4ee4\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"Do"})," \u65b9\u6cd5\u6765\u5b9e\u73b0\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t)\n\tv, _ := g.Redis().Do(ctx, "SET", "k", "v")\n\tfmt.Println(v.String())\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u81ea\u52a8\u5e8f\u5217\u5316\u53cd\u5e8f\u5217\u5316",children:"\u81ea\u52a8\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316"}),"\n",(0,r.jsxs)(t.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a ",(0,r.jsx)(t.code,{children:"map"}),", ",(0,r.jsx)(t.code,{children:"slice"}),", ",(0,r.jsx)(t.code,{children:"struct"})," \u65f6\uff0c ",(0,r.jsx)(t.code,{children:"gredis"})," \u5185\u90e8\u652f\u6301\u81ea\u52a8\u5bf9\u5176\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"json"})," \u5e8f\u5217\u5316\uff0c\u5e76\u4e14\u8bfb\u53d6\u6570\u636e\u65f6\u53ef\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"gvar.Var"})," \u7684\u8f6c\u6362\u529f\u80fd\u5b9e\u73b0\u53cd\u5e8f\u5217\u5316\u3002"]}),"\n",(0,r.jsxs)(t.h3,{id:"map-\u5b58\u53d6",children:[(0,r.jsx)(t.code,{children:"map"})," \u5b58\u53d6"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gvar"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t\terr    error\n\t\tresult *gvar.Var\n\t\tkey    = "user"\n\t\tdata   = g.Map{\n\t\t\t"id":   10000,\n\t\t\t"name": "john",\n\t\t}\n\t)\n\t_, err = g.Redis().Do(ctx, "SET", key, data)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tresult, err = g.Redis().Do(ctx,"GET", key)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(result.Map())\n}\n'})}),"\n",(0,r.jsxs)(t.h3,{id:"struct-\u5b58\u53d6",children:[(0,r.jsx)(t.code,{children:"struct"})," \u5b58\u53d6"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gvar"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\ttype User struct {\n\t\tId   int\n\t\tName string\n\t}\n\n\tvar (\n\t\tctx = gctx.New()\n\t\terr    error\n\t\tresult *gvar.Var\n\t\tkey    = "user"\n\t\tuser   = g.Map{\n\t\t\t"id":   10000,\n\t\t\t"name": "john",\n\t\t}\n\t)\n\n\t_, err = g.Redis().Do(ctx, "SET", key, user)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tresult, err = g.Redis().Do(ctx, "GET", key)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tvar user2 *User\n\tif err = result.Struct(&user2); err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(user2.Id, user2.Name)\n}\n'})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);