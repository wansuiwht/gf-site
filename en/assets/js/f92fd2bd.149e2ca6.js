"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["98275"],{105412:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory","title":"Session-Memory","description":"\u5185\u5B58\u5B58\u50A8","source":"@site/versioned_docs/version-2.4.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/Session","slug":"/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory","permalink":"/en/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Memory.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"Session-Memory","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Session-File","permalink":"/en/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-File"},"next":{"title":"Session-Redis-KeyValue","permalink":"/en/2.4.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-Redis-KeyValue"}}'),i=s("785893"),o=s("250065");let r={title:"Session-Memory",sidebar_position:1,hide_title:!0},l=void 0,c={},d=[{value:"\u5185\u5B58\u5B58\u50A8",id:"\u5185\u5B58\u5B58\u50A8",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u5185\u5B58\u5B58\u50A8",children:"\u5185\u5B58\u5B58\u50A8"}),"\n",(0,i.jsxs)(n.p,{children:["\u5185\u5B58\u5B58\u50A8\u6BD4\u8F83\u7B80\u5355\uFF0C\u6027\u80FD\u4E5F\u5F88\u9AD8\u6548\uFF0C\u4F46\u6CA1\u6709\u6301\u4E45\u5316\u5B58\u50A8 ",(0,i.jsx)(n.code,{children:"Session"})," \u6570\u636E\uFF0C\u56E0\u6B64\u5E94\u7528\u7A0B\u5E8F\u91CD\u542F\u4E4B\u540E\u4FBF\u4F1A\u4E22\u5931 ",(0,i.jsx)(n.code,{children:"Session"})," \u6570\u636E\uFF0C\u53EF\u7528\u4E8E\u7279\u5B9A\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\u3002 ",(0,i.jsx)(n.code,{children:"gsession"})," \u7684 ",(0,i.jsx)(n.code,{children:"\u5185\u5B58"})," \u5B58\u50A8\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"StorageMemory"})," \u5BF9\u8C61\u5B9E\u73B0\uFF0C"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/gsession"\n    "github.com/gogf/gf/v2/os/gtime"\n    "time"\n)\n\nfunc main() {\n    s := g.Server()\n    s.SetSessionMaxAge(time.Minute)\n    s.SetSessionStorage(gsession.NewStorageMemory())\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/set", func(r *ghttp.Request) {\n            r.Session.MustSet("time", gtime.Timestamp())\n            r.Response.Write("ok")\n        })\n        group.ALL("/get", func(r *ghttp.Request) {\n            r.Response.Write(r.Session.Data())\n        })\n        group.ALL("/del", func(r *ghttp.Request) {\n            _ = r.Session.RemoveAll()\n            r.Response.Write("ok")\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8BE5\u5B9E\u4F8B\u4E2D\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u8FC7\u671F\u5931\u6548\uFF0C\u6211\u4EEC\u5C06 ",(0,i.jsx)(n.code,{children:"Session"})," \u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A ",(0,i.jsx)(n.code,{children:"1\u5206\u949F"}),"\u3002\u6267\u884C\u540E\uFF0C"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9996\u5148\uFF0C\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/set",children:"http://127.0.0.1:8199/set"})," \u8BBE\u7F6E\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"Session"})," \u53D8\u91CF\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:["\u968F\u540E\uFF0C\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"})," \u53EF\u4EE5\u770B\u5230\u8BE5 ",(0,i.jsx)(n.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u8BBE\u7F6E\u5E76\u6210\u529F\u83B7\u53D6\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:["\u63A5\u7740\uFF0C\u6211\u4EEC\u505C\u6B62\u7A0B\u5E8F\uFF0C\u5E76\u91CD\u65B0\u542F\u52A8\uFF0C\u518D\u6B21\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/get",children:"http://127.0.0.1:8199/get"}),"\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,i.jsx)(n.code,{children:"Session"})," \u53D8\u91CF\u5DF2\u7ECF\u6CA1\u6709\u4E86\uFF1B"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let i={},o=t.createContext(i);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);