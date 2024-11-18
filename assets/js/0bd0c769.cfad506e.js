"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["77690"],{373365:function(e,s,i){i.r(s),i.d(s,{metadata:()=>n,contentTitle:()=>r,default:()=>x,assets:()=>l,toc:()=>t,frontMatter:()=>c});var n=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/Session/Session","title":"Session","description":"GoFrame \u6846\u67B6\u63D0\u4F9B\u4E86\u5B8C\u5584\u7684 Session \u7BA1\u7406\u80FD\u529B\uFF0C\u7531 gsession \u7EC4\u4EF6\u5B9E\u73B0\u3002\u7531\u4E8E Session \u673A\u5236\u5728 HTTP \u670D\u52A1\u4E2D\u6700\u5E38\u7528\uFF0C\u56E0\u6B64\u540E\u7EED\u7AE0\u8282\u4E2D\u5C06\u7740\u91CD\u4EE5 HTTP \u670D\u52A1\u4E3A\u793A\u4F8B\u4ECB\u7ECD Session \u7684\u4F7F\u7528\u3002","source":"@site/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/Session","slug":"/WEB\u670D\u52A1\u5F00\u53D1/Session/","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/Session/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":7,"frontMatter":{"title":"Session","sidebar_position":7,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"Cookie","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/Cookie"},"next":{"title":"Session-File","permalink":"/2.3.x/WEB\u670D\u52A1\u5F00\u53D1/Session/Session-File"}}'),d=i("785893"),o=i("250065");let c={title:"Session",sidebar_position:7,hide_title:!0},r=void 0,l={},t=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"<code>gsession</code> \u6A21\u5757",id:"gsession-\u6A21\u5757",level:2},{value:"\u5B58\u50A8\u5B9E\u73B0\u65B9\u5F0F",id:"\u5B58\u50A8\u5B9E\u73B0\u65B9\u5F0F",level:2},{value:"<code>Session</code> \u7684\u521D\u59CB\u5316",id:"session-\u7684\u521D\u59CB\u5316",level:2},{value:"<code>Session</code> \u7684\u9500\u6BC1/\u6CE8\u9500",id:"session-\u7684\u9500\u6BC1\u6CE8\u9500",level:2}];function h(e){let s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"GoFrame"})," \u6846\u67B6\u63D0\u4F9B\u4E86\u5B8C\u5584\u7684 ",(0,d.jsx)(s.code,{children:"Session"})," \u7BA1\u7406\u80FD\u529B\uFF0C\u7531 ",(0,d.jsx)(s.code,{children:"gsession"})," \u7EC4\u4EF6\u5B9E\u73B0\u3002\u7531\u4E8E ",(0,d.jsx)(s.code,{children:"Session"})," \u673A\u5236\u5728 ",(0,d.jsx)(s.code,{children:"HTTP"})," \u670D\u52A1\u4E2D\u6700\u5E38\u7528\uFF0C\u56E0\u6B64\u540E\u7EED\u7AE0\u8282\u4E2D\u5C06\u7740\u91CD\u4EE5 ",(0,d.jsx)(s.code,{children:"HTTP"})," \u670D\u52A1\u4E3A\u793A\u4F8B\u4ECB\u7ECD ",(0,d.jsx)(s.code,{children:"Session"})," \u7684\u4F7F\u7528\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,d.jsxs)(s.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,d.jsx)(s.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gsession",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gsession"})]}),"\n",(0,d.jsxs)(s.p,{children:["\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"ghttp.Request"})," \u83B7\u53D6 ",(0,d.jsx)(s.code,{children:"Session"})," \u5BF9\u8C61\uFF0C\u56E0\u4E3A ",(0,d.jsx)(s.code,{children:"Cookie"})," \u548C ",(0,d.jsx)(s.code,{children:"Session"})," \u90FD\u662F\u548C\u8BF7\u6C42\u4F1A\u8BDD\u76F8\u5173\uFF0C\u56E0\u6B64\u90FD\u5C5E\u4E8E ",(0,d.jsx)(s.code,{children:"Request"})," \u7684\u6210\u5458\u5BF9\u8C61\uFF0C\u5E76\u5BF9\u5916\u516C\u5F00\u3002 ",(0,d.jsx)(s.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,d.jsx)(s.code,{children:"Session"})," \u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4\u662F ",(0,d.jsx)(s.code,{children:"24\u5C0F\u65F6"}),"\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"SessionId"})," \u9ED8\u8BA4\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"Cookie"})," \u6765\u4F20\u9012\uFF0C\u5E76\u4E14\u4E5F\u652F\u6301\u5BA2\u6237\u7AEF\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"Header"})," \u4F20\u9012 ",(0,d.jsx)(s.code,{children:"SessionId"}),"\uFF0C ",(0,d.jsx)(s.code,{children:"SessionId"})," \u7684\u8BC6\u522B\u540D\u79F0\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"ghttp.Server"})," \u7684 ",(0,d.jsx)(s.code,{children:"SetSessionIdName"})," \u8FDB\u884C\u4FEE\u6539\u3002 ",(0,d.jsx)(s.code,{children:"Session"})," \u7684\u64CD\u4F5C\u662F\u652F\u6301 ",(0,d.jsx)(s.code,{children:"\u5E76\u53D1\u5B89\u5168"})," \u7684\uFF0C\u8FD9\u4E5F\u662F\u6846\u67B6\u5728\u5BF9 ",(0,d.jsx)(s.code,{children:"Session"})," \u7684\u8BBE\u8BA1\u4E0A\u4E0D\u91C7\u7528\u76F4\u63A5\u4EE5 ",(0,d.jsx)(s.code,{children:"map"})," \u7684\u5F62\u5F0F\u64CD\u4F5C\u6570\u636E\u7684\u539F\u56E0\u3002\u5728 ",(0,d.jsx)(s.code,{children:"HTTP"})," \u8BF7\u6C42\u6D41\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"ghttp.Request"})," \u5BF9\u8C61\u6765\u83B7\u53D6 ",(0,d.jsx)(s.code,{children:"Session"})," \u5BF9\u8C61\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u6570\u636E\u64CD\u4F5C\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u6B64\u5916\uFF0C ",(0,d.jsx)(s.code,{children:"ghttp.Server"})," \u4E2D\u7684 ",(0,d.jsx)(s.code,{children:"SessionId"})," \u4F7F\u7528\u7684\u662F\u5BA2\u6237\u7AEF\u7684 ",(0,d.jsx)(s.code,{children:"RemoteAddr + Header"})," \u8BF7\u6C42\u4FE1\u606F\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"guid"})," \u6A21\u5757\u6765\u751F\u6210\u7684\uFF0C\u4FDD\u8BC1\u968F\u673A\u53CA\u552F\u4E00\u6027\uFF1A ",(0,d.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/net/ghttp/ghttp_request.go",children:"https://github.com/gogf/gf/blob/master/net/ghttp/ghttp_request.go"})]}),"\n",(0,d.jsxs)(s.h2,{id:"gsession-\u6A21\u5757",children:[(0,d.jsx)(s.code,{children:"gsession"})," \u6A21\u5757"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Session"})," \u7684\u7BA1\u7406\u529F\u80FD\u7531\u72EC\u7ACB\u7684 ",(0,d.jsx)(s.code,{children:"gsession"})," \u6A21\u5757\u5B9E\u73B0\uFF0C\u5E76\u5DF2\u5B8C\u7F8E\u6574\u5408\u5230\u4E86 ",(0,d.jsx)(s.code,{children:"ghttp.Server"})," \u4E2D\u3002\u7531\u4E8E\u8BE5\u6A21\u5757\u662F\u89E3\u8026\u72EC\u7ACB\u7684\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5E94\u7528\u5230\u66F4\u591A\u4E0D\u540C\u7684\u573A\u666F\u4E2D\uFF0C\u4F8B\u5982\uFF1A ",(0,d.jsx)(s.code,{children:"TCP"})," \u901A\u4FE1\u3001 ",(0,d.jsx)(s.code,{children:"gRPC"})," \u63A5\u53E3\u670D\u52A1\u7B49\u7B49\u3002\u5728 ",(0,d.jsx)(s.code,{children:"gsession"})," \u6A21\u5757\u4E2D\u6709\u6BD4\u8F83\u91CD\u8981\u7684\u4E09\u4E2A\u5BF9\u8C61/\u63A5\u53E3\uFF1A"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"gsession.Manager"}),"\uFF1A\u7BA1\u7406 ",(0,d.jsx)(s.code,{children:"Session"})," \u5BF9\u8C61\u3001 ",(0,d.jsx)(s.code,{children:"Storage"})," \u6301\u4E45\u5316\u5B58\u50A8\u5BF9\u8C61\u3001\u4EE5\u53CA\u8FC7\u671F\u65F6\u95F4\u63A7\u5236\u3002"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"gsession.Session"}),"\uFF1A\u5355\u4E2A ",(0,d.jsx)(s.code,{children:"Session"})," \u4F1A\u8BDD\u7BA1\u7406\u5BF9\u8C61\uFF0C\u7528\u4E8E ",(0,d.jsx)(s.code,{children:"Session"})," \u53C2\u6570\u7684\u589E\u5220\u67E5\u6539\u7B49\u6570\u636E\u7BA1\u7406\u64CD\u4F5C\u3002"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"gsession.Storage"}),"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u63A5\u53E3\u5B9A\u4E49\uFF0C\u7528\u4E8E ",(0,d.jsx)(s.code,{children:"Session"})," \u5BF9\u8C61\u7684\u6301\u4E45\u5316\u5B58\u50A8\u3001\u6570\u636E\u5199\u5165/\u8BFB\u53D6\u3001\u5B58\u6D3B\u66F4\u65B0\u7B49\u64CD\u4F5C\uFF0C\u5F00\u53D1\u8005\u53EF\u57FA\u4E8E\u8BE5\u63A5\u53E3\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u6301\u4E45\u5316\u5B58\u50A8\u7279\u6027\u3002 \u8BE5\u63A5\u53E3\u5B9A\u4E49\u8BE6\u89C1\uFF1A ",(0,d.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go",children:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go"})]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"\u5B58\u50A8\u5B9E\u73B0\u65B9\u5F0F",children:"\u5B58\u50A8\u5B9E\u73B0\u65B9\u5F0F"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gsession"})," \u5B9E\u73B0\u5E76\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u5E38\u89C1\u7684\u56DB\u79CD ",(0,d.jsx)(s.code,{children:"Session"})," \u5B58\u50A8\u5B9E\u73B0\u65B9\u5F0F\uFF1A"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Storage"}),(0,d.jsx)(s.th,{children:"\u652F\u6301\u5206\u5E03\u5F0F"}),(0,d.jsx)(s.th,{children:"\u652F\u6301\u6301\u4E45\u5316"}),(0,d.jsx)(s.th,{children:"\u5185\u5B58\u5360\u7528"}),(0,d.jsx)(s.th,{children:"\u6267\u884C\u6548\u7387"}),(0,d.jsx)(s.th,{children:"\u7B80\u8981\u4ECB\u7ECD"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"StorageFile"})}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u662F"}),(0,d.jsx)(s.td,{children:"\u4E2D"}),(0,d.jsx)(s.td,{children:"\u4E2D"}),(0,d.jsxs)(s.td,{children:["\u57FA\u4E8E\u6587\u4EF6\u5B58\u50A8\uFF08\u9ED8\u8BA4\uFF09\u3002\u5355\u8282\u70B9\u90E8\u7F72\u65B9\u5F0F\u4E0B\u6BD4\u8F83\u9AD8\u6548\u7684\u6301\u4E45\u5316\u5B58\u50A8\u65B9\u5F0F\uFF1A ",(0,d.jsx)(s.a,{href:"/2.3.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/Session/Session-File",children:"Session-File"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"StorageMemory"})}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u9AD8"}),(0,d.jsx)(s.td,{children:"\u9AD8"}),(0,d.jsxs)(s.td,{children:["\u57FA\u4E8E\u7EAF\u5185\u5B58\u5B58\u50A8\u3002\u5355\u8282\u70B9\u90E8\u7F72\uFF0C\u6027\u80FD\u6700\u9AD8\u6548\uFF0C\u4F46\u662F\u65E0\u6CD5\u6301\u4E45\u5316\u4FDD\u5B58\uFF0C\u91CD\u542F\u5373\u4E22\u5931\uFF1A ",(0,d.jsx)(s.a,{href:"/2.3.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/Session/Session-Memory",children:"Session-Memory"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"StorageRedis"})}),(0,d.jsx)(s.td,{children:"\u662F"}),(0,d.jsx)(s.td,{children:"\u662F"}),(0,d.jsx)(s.td,{children:"\u4E2D"}),(0,d.jsx)(s.td,{children:"\u4E2D"}),(0,d.jsxs)(s.td,{children:["\u57FA\u4E8E ",(0,d.jsx)(s.code,{children:"Redis"})," \u5B58\u50A8\uFF08 ",(0,d.jsx)(s.code,{children:"Key-Value"}),"\uFF09\u3002\u8FDC\u7A0B ",(0,d.jsx)(s.code,{children:"Redis"})," \u8282\u70B9\u5B58\u50A8 ",(0,d.jsx)(s.code,{children:"Session"})," \u6570\u636E\uFF0C\u652F\u6301\u5E94\u7528\u591A\u8282\u70B9\u90E8\u7F72\uFF1A ",(0,d.jsx)(s.a,{href:"/2.3.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/Session/Session-Redis-KeyValue",children:"Session-Redis-KeyValue"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"StorageRedisHashTable"})}),(0,d.jsx)(s.td,{children:"\u662F"}),(0,d.jsx)(s.td,{children:"\u662F"}),(0,d.jsx)(s.td,{children:"\u4F4E"}),(0,d.jsx)(s.td,{children:"\u4F4E"}),(0,d.jsxs)(s.td,{children:["\u57FA\u4E8E ",(0,d.jsx)(s.code,{children:"Redis"})," \u5B58\u50A8\uFF08 ",(0,d.jsx)(s.code,{children:"HashTable"}),"\uFF09\u3002\u8FDC\u7A0B ",(0,d.jsx)(s.code,{children:"Redis"})," \u8282\u70B9\u5B58\u50A8 ",(0,d.jsx)(s.code,{children:"Session"})," \u6570\u636E\uFF0C\u652F\u6301\u5E94\u7528\u591A\u8282\u70B9\u90E8\u7F72\uFF1A ",(0,d.jsx)(s.a,{href:"/2.3.x/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/Session/Session-Redis-HashTable",children:"Session-Redis-HashTable"})]})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u56DB\u79CD\u65B9\u5F0F\u5404\u6709\u4F18\u52A3\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u67E5\u770B\u5BF9\u5E94\u7AE0\u8282\u3002"}),"\n",(0,d.jsxs)(s.h2,{id:"session-\u7684\u521D\u59CB\u5316",children:[(0,d.jsx)(s.code,{children:"Session"})," \u7684\u521D\u59CB\u5316"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4EE5\u5E38\u89C1\u7684HTTP\u8BF7\u6C42\u4E3A\u4F8B\u3002 ",(0,d.jsx)(s.code,{children:"ghttp.Request"})," \u4E2D\u7684 ",(0,d.jsx)(s.code,{children:"Session"}),' \u5BF9\u8C61\u91C7\u7528\u4E86" ',(0,d.jsxs)(s.strong,{children:["\u61D2\u521D\u59CB\u5316( ",(0,d.jsx)(s.code,{children:"LazyInitialization"}),")"]}),'"\u8BBE\u8BA1\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u5728 ',(0,d.jsx)(s.code,{children:"Request"})," \u4E2D\u6709\u4E00\u4E2A ",(0,d.jsx)(s.code,{children:"Session"})," \u5C5E\u6027\u5BF9\u8C61\uFF0C\u4F46\u662F\u5E76\u672A\u521D\u59CB\u5316\uFF08\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF09\uFF0C\u53EA\u6709\u5728\u4F7F\u7528 ",(0,d.jsx)(s.code,{children:"Session"})," \u5C5E\u6027\u5BF9\u8C61\u7684\u65B9\u6CD5\u65F6\u624D\u4F1A\u771F\u6B63\u6267\u884C\u521D\u59CB\u5316\u3002\u8FD9\u6837\u7684\u8BBE\u8BA1\u65E2\u4FDD\u969C\u4E86\u672A\u4F7F\u7528 ",(0,d.jsx)(s.code,{children:"Session"})," \u7279\u6027\u7684\u8BF7\u6C42\u6267\u884C\u6027\u80FD\uFF0C\u4E5F\u4FDD\u8BC1\u4E86\u7EC4\u4EF6\u4F7F\u7528\u7684\u6613\u7528\u6027\u3002"]}),"\n",(0,d.jsxs)(s.h2,{id:"session-\u7684\u9500\u6BC1\u6CE8\u9500",children:[(0,d.jsx)(s.code,{children:"Session"})," \u7684\u9500\u6BC1/\u6CE8\u9500"]}),"\n",(0,d.jsxs)(s.p,{children:["\u7528\u6237 ",(0,d.jsx)(s.code,{children:"Session"})," \u4E0D\u518D\u4F7F\u7528\uFF0C\u4F8B\u5982\u7528\u6237\u6CE8\u9500\u767B\u5F55\u72B6\u6001\uFF0C\u9700\u8981\u4ECE\u5B58\u50A8\u4E2D\u786C\u5220\u9664\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8C03\u7528 ",(0,d.jsx)(s.code,{children:"RemoveAll"})," \u65B9\u6CD5\u3002"]})]})}function x(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,s,i){i.d(s,{Z:function(){return r},a:function(){return c}});var n=i(667294);let d={},o=n.createContext(d);function c(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);