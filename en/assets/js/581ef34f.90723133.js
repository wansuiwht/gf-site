"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["16389"],{675627:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-HashTable","title":"Session-Redis-HashTable","description":"RedisHashTableStorage","source":"@site/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-HashTable.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/Session","slug":"/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-HashTable","permalink":"/en/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-HashTable","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-HashTable.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"Session-Redis-HashTable","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Session-Redis-KeyValue","permalink":"/en/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-KeyValue"},"next":{"title":"Session-Storage\u63A5\u53E3\u5F00\u53D1","permalink":"/en/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Storage\u63A5\u53E3\u5F00\u53D1"}}'),t=n("785893"),o=n("250065");let r={title:"Session-Redis-HashTable",sidebar_position:3,hide_title:!0},d=void 0,a={},l=[{value:"RedisHashTableStorage",id:"redishashtablestorage",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function c(e){let s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"redishashtablestorage",children:"RedisHashTableStorage"}),"\n",(0,t.jsxs)(s.p,{children:["\u4E0E ",(0,t.jsx)(s.code,{children:"RedisKeyValueStorage"})," \u4E0D\u540C\u7684\u5730\u65B9\u5728\u4E8E ",(0,t.jsx)(s.code,{children:"RedisHashTableStorage"})," \u5E95\u5C42\u4F7F\u7528 ",(0,t.jsx)(s.code,{children:"HashTable"})," \u5B58\u50A8 ",(0,t.jsx)(s.code,{children:"Session"})," \u6570\u636E\uFF0C\u6BCF\u4E00\u6B21\u5BF9 ",(0,t.jsx)(s.code,{children:"Session"})," \u7684\u589E\u5220\u67E5\u6539\u90FD\u662F\u76F4\u63A5\u8BBF\u95EE ",(0,t.jsx)(s.code,{children:"Redis"})," \u670D\u52A1\u5B9E\u73B0\uFF08\u5355\u6761\u6570\u636E\u9879\u64CD\u4F5C\uFF09\uFF0C\u4E0D\u5B58\u5728\u50CF ",(0,t.jsx)(s.code,{children:"RedisKeyValueStorage"})," \u90A3\u6837\u521D\u59CB\u5316\u5168\u91CF\u62C9\u53D6\u4E00\u6B21\uFF0C\u8BF7\u6C42\u7ED3\u675F\u540E\u5982\u6709\u4FEE\u6539\u518D\u5168\u91CF\u66F4\u65B0\u5230 ",(0,t.jsx)(s.code,{children:"Redis"})," \u670D\u52A1\u7684\u64CD\u4F5C\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gsession"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    s := g.Server()\n    s.SetSessionMaxAge(time.Minute)\n    s.SetSessionStorage(gsession.NewStorageRedisHashTable(g.Redis()))\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/set", func(r *ghttp.Request) {\n            r.Session.Set("time", gtime.Timestamp())\n            r.Response.Write("ok")\n        })\n        group.ALL("/get", func(r *ghttp.Request) {\n            r.Response.Write(r.Session.Data())\n        })\n        group.ALL("/del", func(r *ghttp.Request) {\n            _ = r.Session.RemoveAll()\n            r.Response.Write("ok")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u5728\u8BE5\u5B9E\u4F8B\u4E2D\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u8FC7\u671F\u5931\u6548\uFF0C\u6211\u4EEC\u5C06 ",(0,t.jsx)(s.code,{children:"Session"})," \u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A ",(0,t.jsx)(s.code,{children:"1\u5206\u949F"}),"\u3002\u6267\u884C\u540E\uFF0C"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u9996\u5148\uFF0C\u8BBF\u95EE ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8BBE\u7F6E\u4E00\u4E2A ",(0,t.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\uFF1B"]}),"\n",(0,t.jsxs)(s.li,{children:["\u968F\u540E\uFF0C\u8BBF\u95EE ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u8BE5 ",(0,t.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u8BBE\u7F6E\u5E76\u6210\u529F\u83B7\u53D6\uFF1B"]}),"\n",(0,t.jsxs)(s.li,{children:["\u63A5\u7740\uFF0C\u6211\u4EEC\u505C\u6B62\u7A0B\u5E8F\uFF0C\u5E76\u91CD\u65B0\u542F\u52A8\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,t.jsx)(s.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u4ECE ",(0,t.jsx)(s.code,{children:"Redis"})," \u5B58\u50A8\u4E2D\u6062\u590D\uFF1B\u5982\u679C\u6211\u4EEC\u624B\u52A8\u4FEE\u6539 ",(0,t.jsx)(s.code,{children:"Redis"})," \u4E2D\u7684\u5BF9\u5E94\u952E\u503C\u6570\u636E\uFF0C\u9875\u9762\u5237\u65B0\u65F6\u4E5F\u4F1A\u8BFB\u53D6\u5230\u6700\u65B0\u7684\u503C\uFF1B"]}),"\n",(0,t.jsxs)(s.li,{children:["\u7B49\u5F851\u5206\u949F\u540E\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,t.jsx)(s.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u65E0\u6CD5\u83B7\u53D6\u8BE5 ",(0,t.jsx)(s.code,{children:"Session"}),"\uFF0C\u56E0\u4E3A\u8BE5 ",(0,t.jsx)(s.code,{children:"Session"})," \u5DF2\u7ECF\u8FC7\u671F\uFF1B"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var i=n(667294);let t={},o=i.createContext(t);function r(e){let s=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);