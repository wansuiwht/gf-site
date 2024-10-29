"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[36209],{66739:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var n=t(74848),i=t(28453);const o={title:"Session-Redis-HashTable",sidebar_position:3,hide_title:!0},r=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-HashTable",title:"Session-Redis-HashTable",description:"RedisHashTableStorage",source:"@site/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/7-Session/3-Session-Redis-HashTable.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/7-Session",slug:"/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-HashTable",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-HashTable",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/7-Session/3-Session-Redis-HashTable.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:3,frontMatter:{title:"Session-Redis-HashTable",sidebar_position:3,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Session-Redis-KeyValue",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Redis-KeyValue"},next:{title:"Session-Storage\u63a5\u53e3\u5f00\u53d1",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/Session/Session-Storage\u63a5\u53e3\u5f00\u53d1"}},c={},a=[{value:"RedisHashTableStorage",id:"redishashtablestorage",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"redishashtablestorage",children:"RedisHashTableStorage"}),"\n",(0,n.jsxs)(s.p,{children:["\u4e0e ",(0,n.jsx)(s.code,{children:"RedisKeyValueStorage"})," \u4e0d\u540c\u7684\u5730\u65b9\u5728\u4e8e ",(0,n.jsx)(s.code,{children:"RedisHashTableStorage"})," \u5e95\u5c42\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"HashTable"})," \u5b58\u50a8 ",(0,n.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff0c\u6bcf\u4e00\u6b21\u5bf9 ",(0,n.jsx)(s.code,{children:"Session"})," \u7684\u589e\u5220\u67e5\u6539\u90fd\u662f\u76f4\u63a5\u8bbf\u95ee ",(0,n.jsx)(s.code,{children:"Redis"})," \u670d\u52a1\u5b9e\u73b0\uff08\u5355\u6761\u6570\u636e\u9879\u64cd\u4f5c\uff09\uff0c\u4e0d\u5b58\u5728\u50cf ",(0,n.jsx)(s.code,{children:"RedisKeyValueStorage"})," \u90a3\u6837\u521d\u59cb\u5316\u5168\u91cf\u62c9\u53d6\u4e00\u6b21\uff0c\u8bf7\u6c42\u7ed3\u675f\u540e\u5982\u6709\u4fee\u6539\u518d\u5168\u91cf\u66f4\u65b0\u5230 ",(0,n.jsx)(s.code,{children:"Redis"})," \u670d\u52a1\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gsession"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"time"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.SetSessionMaxAge(time.Minute)\n\ts.SetSessionStorage(gsession.NewStorageRedisHashTable(g.Redis()))\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/set", func(r *ghttp.Request) {\n\t\t\tr.Session.Set("time", gtime.Timestamp())\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t\tgroup.ALL("/get", func(r *ghttp.Request) {\n\t\t\tr.Response.Write(r.Session.Data())\n\t\t})\n\t\tgroup.ALL("/del", func(r *ghttp.Request) {\n\t\t\t_ = r.Session.RemoveAll()\n\t\t\tr.Response.Write("ok")\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u5728\u8be5\u5b9e\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u89c2\u5bdf\u8fc7\u671f\u5931\u6548\uff0c\u6211\u4eec\u5c06 ",(0,n.jsx)(s.code,{children:"Session"})," \u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(s.code,{children:"1\u5206\u949f"}),"\u3002\u6267\u884c\u540e\uff0c"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\u9996\u5148\uff0c\u8bbf\u95ee ",(0,n.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8bbe\u7f6e\u4e00\u4e2a ",(0,n.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\uff1b"]}),"\n",(0,n.jsxs)(s.li,{children:["\u968f\u540e\uff0c\u8bbf\u95ee ",(0,n.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u8be5 ",(0,n.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u5e76\u6210\u529f\u83b7\u53d6\uff1b"]}),"\n",(0,n.jsxs)(s.li,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u505c\u6b62\u7a0b\u5e8f\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,n.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,n.jsx)(s.code,{children:"Session"})," \u53d8\u91cf\u5df2\u7ecf\u4ece ",(0,n.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\u4e2d\u6062\u590d\uff1b\u5982\u679c\u6211\u4eec\u624b\u52a8\u4fee\u6539 ",(0,n.jsx)(s.code,{children:"Redis"})," \u4e2d\u7684\u5bf9\u5e94\u952e\u503c\u6570\u636e\uff0c\u9875\u9762\u5237\u65b0\u65f6\u4e5f\u4f1a\u8bfb\u53d6\u5230\u6700\u65b0\u7684\u503c\uff1b"]}),"\n",(0,n.jsxs)(s.li,{children:["\u7b49\u5f851\u5206\u949f\u540e\uff0c\u518d\u6b21\u8bbf\u95ee ",(0,n.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u65e0\u6cd5\u83b7\u53d6\u8be5 ",(0,n.jsx)(s.code,{children:"Session"}),"\uff0c\u56e0\u4e3a\u8be5 ",(0,n.jsx)(s.code,{children:"Session"})," \u5df2\u7ecf\u8fc7\u671f\uff1b"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>d});var n=t(96540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);