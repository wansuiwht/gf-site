"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[35155],{589382:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session","title":"Session","description":"GoFrame\u6846\u67b6\u4e2dSession\u7ba1\u7406\u7684\u76f8\u5173\u529f\u80fd\uff0c\u5305\u62ecSession\u7684\u57fa\u672c\u6982\u5ff5\u3001gsession\u6a21\u5757\u7684\u5b9e\u73b0\u65b9\u5f0f\u53ca\u5176\u5728\u4e0d\u540c\u573a\u666f\u4e2d\u7684\u5e94\u7528\u3002\u8be6\u7ec6\u8ba8\u8bba\u4e86SessionId\u7684\u4f20\u9012\u65b9\u5f0f\u548cSession\u7684\u521d\u59cb\u5316\u3001\u9500\u6bc1\u7b49\u64cd\u4f5c\uff0c\u63d0\u4f9b\u4e86\u56db\u79cd\u5e38\u89c1\u7684Session\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f\u53ca\u5176\u7279\u70b9\uff0c\u4e3a\u5f00\u53d1\u8005\u5728HTTP\u7b49\u591a\u79cd\u670d\u52a1\u73af\u5883\u4e0b\u7684Session\u7ba1\u7406\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5de5\u5177\u652f\u6301\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/Session","slug":"/docs/web/session","permalink":"/2.7.x/docs/web/session","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/Session/Session.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/web/session","title":"Session","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","Session\u7ba1\u7406","gsession","HTTP\u670d\u52a1","SessionId","\u5e76\u53d1\u5b89\u5168","ghttp.Request","gsession\u6a21\u5757","Session\u5b58\u50a8"],"description":"GoFrame\u6846\u67b6\u4e2dSession\u7ba1\u7406\u7684\u76f8\u5173\u529f\u80fd\uff0c\u5305\u62ecSession\u7684\u57fa\u672c\u6982\u5ff5\u3001gsession\u6a21\u5757\u7684\u5b9e\u73b0\u65b9\u5f0f\u53ca\u5176\u5728\u4e0d\u540c\u573a\u666f\u4e2d\u7684\u5e94\u7528\u3002\u8be6\u7ec6\u8ba8\u8bba\u4e86SessionId\u7684\u4f20\u9012\u65b9\u5f0f\u548cSession\u7684\u521d\u59cb\u5316\u3001\u9500\u6bc1\u7b49\u64cd\u4f5c\uff0c\u63d0\u4f9b\u4e86\u56db\u79cd\u5e38\u89c1\u7684Session\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f\u53ca\u5176\u7279\u70b9\uff0c\u4e3a\u5f00\u53d1\u8005\u5728HTTP\u7b49\u591a\u79cd\u670d\u52a1\u73af\u5883\u4e0b\u7684Session\u7ba1\u7406\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5de5\u5177\u652f\u6301\u3002"},"sidebar":"mainSidebar","previous":{"title":"Cookie","permalink":"/2.7.x/docs/web/cookie"},"next":{"title":"Session-File","permalink":"/2.7.x/docs/web/session-file"}}');var o=n(474848),r=n(28453),d=n(103514);const c={slug:"/docs/web/session",title:"Session",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","Session\u7ba1\u7406","gsession","HTTP\u670d\u52a1","SessionId","\u5e76\u53d1\u5b89\u5168","ghttp.Request","gsession\u6a21\u5757","Session\u5b58\u50a8"],description:"GoFrame\u6846\u67b6\u4e2dSession\u7ba1\u7406\u7684\u76f8\u5173\u529f\u80fd\uff0c\u5305\u62ecSession\u7684\u57fa\u672c\u6982\u5ff5\u3001gsession\u6a21\u5757\u7684\u5b9e\u73b0\u65b9\u5f0f\u53ca\u5176\u5728\u4e0d\u540c\u573a\u666f\u4e2d\u7684\u5e94\u7528\u3002\u8be6\u7ec6\u8ba8\u8bba\u4e86SessionId\u7684\u4f20\u9012\u65b9\u5f0f\u548cSession\u7684\u521d\u59cb\u5316\u3001\u9500\u6bc1\u7b49\u64cd\u4f5c\uff0c\u63d0\u4f9b\u4e86\u56db\u79cd\u5e38\u89c1\u7684Session\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f\u53ca\u5176\u7279\u70b9\uff0c\u4e3a\u5f00\u53d1\u8005\u5728HTTP\u7b49\u591a\u79cd\u670d\u52a1\u73af\u5883\u4e0b\u7684Session\u7ba1\u7406\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5de5\u5177\u652f\u6301\u3002"},t=void 0,l={},h=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"<code>gsession</code> \u6a21\u5757",id:"gsession-\u6a21\u5757",level:2},{value:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"<code>Session</code> \u7684\u521d\u59cb\u5316",id:"session-\u7684\u521d\u59cb\u5316",level:2},{value:"<code>Session</code> \u7684\u9500\u6bc1/\u6ce8\u9500",id:"session-\u7684\u9500\u6bc1\u6ce8\u9500",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u7ba1\u7406\u80fd\u529b\uff0c\u7531 ",(0,o.jsx)(s.code,{children:"gsession"})," \u7ec4\u4ef6\u5b9e\u73b0\u3002\u7531\u4e8e ",(0,o.jsx)(s.code,{children:"Session"})," \u673a\u5236\u5728 ",(0,o.jsx)(s.code,{children:"HTTP"})," \u670d\u52a1\u4e2d\u6700\u5e38\u7528\uff0c\u56e0\u6b64\u540e\u7eed\u7ae0\u8282\u4e2d\u5c06\u7740\u91cd\u4ee5 ",(0,o.jsx)(s.code,{children:"HTTP"})," \u670d\u52a1\u4e3a\u793a\u4f8b\u4ecb\u7ecd ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u4f7f\u7528\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(s.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,o.jsx)(s.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gsession",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gsession"})]}),"\n",(0,o.jsxs)(s.p,{children:["\u4efb\u4f55\u65f6\u5019\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"ghttp.Request"})," \u83b7\u53d6 ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\uff0c\u56e0\u4e3a ",(0,o.jsx)(s.code,{children:"Cookie"})," \u548c ",(0,o.jsx)(s.code,{children:"Session"})," \u90fd\u662f\u548c\u8bf7\u6c42\u4f1a\u8bdd\u76f8\u5173\uff0c\u56e0\u6b64\u90fd\u5c5e\u4e8e ",(0,o.jsx)(s.code,{children:"Request"})," \u7684\u6210\u5458\u5bf9\u8c61\uff0c\u5e76\u5bf9\u5916\u516c\u5f00\u3002 ",(0,o.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u7684 ",(0,o.jsx)(s.code,{children:"Session"})," \u9ed8\u8ba4\u8fc7\u671f\u65f6\u95f4\u662f ",(0,o.jsx)(s.code,{children:"24\u5c0f\u65f6"}),"\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"SessionId"})," \u9ed8\u8ba4\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Cookie"})," \u6765\u4f20\u9012\uff0c\u5e76\u4e14\u4e5f\u652f\u6301\u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"Header"})," \u4f20\u9012 ",(0,o.jsx)(s.code,{children:"SessionId"}),"\uff0c ",(0,o.jsx)(s.code,{children:"SessionId"})," \u7684\u8bc6\u522b\u540d\u79f0\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"ghttp.Server"})," \u7684 ",(0,o.jsx)(s.code,{children:"SetSessionIdName"})," \u8fdb\u884c\u4fee\u6539\u3002 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u64cd\u4f5c\u662f\u652f\u6301 ",(0,o.jsx)(s.code,{children:"\u5e76\u53d1\u5b89\u5168"})," \u7684\uff0c\u8fd9\u4e5f\u662f\u6846\u67b6\u5728\u5bf9 ",(0,o.jsx)(s.code,{children:"Session"})," \u7684\u8bbe\u8ba1\u4e0a\u4e0d\u91c7\u7528\u76f4\u63a5\u4ee5 ",(0,o.jsx)(s.code,{children:"map"})," \u7684\u5f62\u5f0f\u64cd\u4f5c\u6570\u636e\u7684\u539f\u56e0\u3002\u5728 ",(0,o.jsx)(s.code,{children:"HTTP"})," \u8bf7\u6c42\u6d41\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"ghttp.Request"})," \u5bf9\u8c61\u6765\u83b7\u53d6 ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\uff0c\u5e76\u6267\u884c\u76f8\u5e94\u7684\u6570\u636e\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(s.p,{children:["\u6b64\u5916\uff0c ",(0,o.jsx)(s.code,{children:"ghttp.Server"})," \u4e2d\u7684 ",(0,o.jsx)(s.code,{children:"SessionId"})," \u4f7f\u7528\u7684\u662f\u5ba2\u6237\u7aef\u7684 ",(0,o.jsx)(s.code,{children:"RemoteAddr + Header"})," \u8bf7\u6c42\u4fe1\u606f\u901a\u8fc7 ",(0,o.jsx)(s.code,{children:"guid"})," \u6a21\u5757\u6765\u751f\u6210\u7684\uff0c\u4fdd\u8bc1\u968f\u673a\u53ca\u552f\u4e00\u6027\uff1a ",(0,o.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/net/ghttp/ghttp_request.go",children:"https://github.com/gogf/gf/blob/master/net/ghttp/ghttp_request.go"})]}),"\n",(0,o.jsxs)(s.h2,{id:"gsession-\u6a21\u5757",children:[(0,o.jsx)(s.code,{children:"gsession"})," \u6a21\u5757"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"Session"})," \u7684\u7ba1\u7406\u529f\u80fd\u7531\u72ec\u7acb\u7684 ",(0,o.jsx)(s.code,{children:"gsession"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5e76\u5df2\u5b8c\u7f8e\u6574\u5408\u5230\u4e86 ",(0,o.jsx)(s.code,{children:"ghttp.Server"})," \u4e2d\u3002\u7531\u4e8e\u8be5\u6a21\u5757\u662f\u89e3\u8026\u72ec\u7acb\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u5e94\u7528\u5230\u66f4\u591a\u4e0d\u540c\u7684\u573a\u666f\u4e2d\uff0c\u4f8b\u5982\uff1a ",(0,o.jsx)(s.code,{children:"TCP"})," \u901a\u4fe1\u3001 ",(0,o.jsx)(s.code,{children:"gRPC"})," \u63a5\u53e3\u670d\u52a1\u7b49\u7b49\u3002\u5728 ",(0,o.jsx)(s.code,{children:"gsession"})," \u6a21\u5757\u4e2d\u6709\u6bd4\u8f83\u91cd\u8981\u7684\u4e09\u4e2a\u5bf9\u8c61/\u63a5\u53e3\uff1a"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"gsession.Manager"}),"\uff1a\u7ba1\u7406 ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\u3001 ",(0,o.jsx)(s.code,{children:"Storage"})," \u6301\u4e45\u5316\u5b58\u50a8\u5bf9\u8c61\u3001\u4ee5\u53ca\u8fc7\u671f\u65f6\u95f4\u63a7\u5236\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"gsession.Session"}),"\uff1a\u5355\u4e2a ",(0,o.jsx)(s.code,{children:"Session"})," \u4f1a\u8bdd\u7ba1\u7406\u5bf9\u8c61\uff0c\u7528\u4e8e ",(0,o.jsx)(s.code,{children:"Session"})," \u53c2\u6570\u7684\u589e\u5220\u67e5\u6539\u7b49\u6570\u636e\u7ba1\u7406\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"gsession.Storage"}),"\uff1a\u8fd9\u662f\u4e00\u4e2a\u63a5\u53e3\u5b9a\u4e49\uff0c\u7528\u4e8e ",(0,o.jsx)(s.code,{children:"Session"})," \u5bf9\u8c61\u7684\u6301\u4e45\u5316\u5b58\u50a8\u3001\u6570\u636e\u5199\u5165/\u8bfb\u53d6\u3001\u5b58\u6d3b\u66f4\u65b0\u7b49\u64cd\u4f5c\uff0c\u5f00\u53d1\u8005\u53ef\u57fa\u4e8e\u8be5\u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u6301\u4e45\u5316\u5b58\u50a8\u7279\u6027\u3002 \u8be5\u63a5\u53e3\u5b9a\u4e49\u8be6\u89c1\uff1a ",(0,o.jsx)(s.a,{href:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go",children:"https://github.com/gogf/gf/blob/master/os/gsession/gsession_storage.go"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f",children:"\u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"gsession"})," \u5b9e\u73b0\u5e76\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u5e38\u89c1\u7684\u56db\u79cd ",(0,o.jsx)(s.code,{children:"Session"})," \u5b58\u50a8\u5b9e\u73b0\u65b9\u5f0f\uff1a"]}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Storage"}),(0,o.jsx)(s.th,{children:"\u652f\u6301\u5206\u5e03\u5f0f"}),(0,o.jsx)(s.th,{children:"\u652f\u6301\u6301\u4e45\u5316"}),(0,o.jsx)(s.th,{children:"\u5185\u5b58\u5360\u7528"}),(0,o.jsx)(s.th,{children:"\u6267\u884c\u6548\u7387"}),(0,o.jsx)(s.th,{children:"\u7b80\u8981\u4ecb\u7ecd"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"StorageFile"})}),(0,o.jsx)(s.td,{children:"\u5426"}),(0,o.jsx)(s.td,{children:"\u662f"}),(0,o.jsx)(s.td,{children:"\u4e2d"}),(0,o.jsx)(s.td,{children:"\u4e2d"}),(0,o.jsxs)(s.td,{children:["\u57fa\u4e8e\u6587\u4ef6\u5b58\u50a8\uff08\u9ed8\u8ba4\uff09\u3002\u5355\u8282\u70b9\u90e8\u7f72\u65b9\u5f0f\u4e0b\u6bd4\u8f83\u9ad8\u6548\u7684\u6301\u4e45\u5316\u5b58\u50a8\u65b9\u5f0f\uff1a ",(0,o.jsx)(s.a,{href:"/2.7.x/docs/web/session-file",children:"Session-File"})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"StorageMemory"})}),(0,o.jsx)(s.td,{children:"\u5426"}),(0,o.jsx)(s.td,{children:"\u5426"}),(0,o.jsx)(s.td,{children:"\u9ad8"}),(0,o.jsx)(s.td,{children:"\u9ad8"}),(0,o.jsxs)(s.td,{children:["\u57fa\u4e8e\u7eaf\u5185\u5b58\u5b58\u50a8\u3002\u5355\u8282\u70b9\u90e8\u7f72\uff0c\u6027\u80fd\u6700\u9ad8\u6548\uff0c\u4f46\u662f\u65e0\u6cd5\u6301\u4e45\u5316\u4fdd\u5b58\uff0c\u91cd\u542f\u5373\u4e22\u5931\uff1a ",(0,o.jsx)(s.a,{href:"/2.7.x/docs/web/session-memory",children:"Session-Memory"})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"StorageRedis"})}),(0,o.jsx)(s.td,{children:"\u662f"}),(0,o.jsx)(s.td,{children:"\u662f"}),(0,o.jsx)(s.td,{children:"\u4e2d"}),(0,o.jsx)(s.td,{children:"\u4e2d"}),(0,o.jsxs)(s.td,{children:["\u57fa\u4e8e ",(0,o.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\uff08 ",(0,o.jsx)(s.code,{children:"Key-Value"}),"\uff09\u3002\u8fdc\u7a0b ",(0,o.jsx)(s.code,{children:"Redis"})," \u8282\u70b9\u5b58\u50a8 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff0c\u652f\u6301\u5e94\u7528\u591a\u8282\u70b9\u90e8\u7f72\uff1a ",(0,o.jsx)(s.a,{href:"/2.7.x/docs/web/session-redis-key-value",children:"Session-Redis-KeyValue"})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"StorageRedisHashTable"})}),(0,o.jsx)(s.td,{children:"\u662f"}),(0,o.jsx)(s.td,{children:"\u662f"}),(0,o.jsx)(s.td,{children:"\u4f4e"}),(0,o.jsx)(s.td,{children:"\u4f4e"}),(0,o.jsxs)(s.td,{children:["\u57fa\u4e8e ",(0,o.jsx)(s.code,{children:"Redis"})," \u5b58\u50a8\uff08 ",(0,o.jsx)(s.code,{children:"HashTable"}),"\uff09\u3002\u8fdc\u7a0b ",(0,o.jsx)(s.code,{children:"Redis"})," \u8282\u70b9\u5b58\u50a8 ",(0,o.jsx)(s.code,{children:"Session"})," \u6570\u636e\uff0c\u652f\u6301\u5e94\u7528\u591a\u8282\u70b9\u90e8\u7f72\uff1a ",(0,o.jsx)(s.a,{href:"/2.7.x/docs/web/session-redis-hash-table",children:"Session-Redis-HashTable"})]})]})]})]}),"\n",(0,o.jsx)(s.p,{children:"\u56db\u79cd\u65b9\u5f0f\u5404\u6709\u4f18\u52a3\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u67e5\u770b\u5bf9\u5e94\u7ae0\u8282\u3002"}),"\n",(0,o.jsxs)(s.h2,{id:"session-\u7684\u521d\u59cb\u5316",children:[(0,o.jsx)(s.code,{children:"Session"})," \u7684\u521d\u59cb\u5316"]}),"\n",(0,o.jsxs)(s.p,{children:["\u4ee5\u5e38\u89c1\u7684HTTP\u8bf7\u6c42\u4e3a\u4f8b\u3002 ",(0,o.jsx)(s.code,{children:"ghttp.Request"})," \u4e2d\u7684 ",(0,o.jsx)(s.code,{children:"Session"}),' \u5bf9\u8c61\u91c7\u7528\u4e86" ',(0,o.jsxs)(s.strong,{children:["\u61d2\u521d\u59cb\u5316( ",(0,o.jsx)(s.code,{children:"LazyInitialization"}),")"]}),'"\u8bbe\u8ba1\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u5728 ',(0,o.jsx)(s.code,{children:"Request"})," \u4e2d\u6709\u4e00\u4e2a ",(0,o.jsx)(s.code,{children:"Session"})," \u5c5e\u6027\u5bf9\u8c61\uff0c\u4f46\u662f\u5e76\u672a\u521d\u59cb\u5316\uff08\u4e00\u4e2a\u7a7a\u5bf9\u8c61\uff09\uff0c\u53ea\u6709\u5728\u4f7f\u7528 ",(0,o.jsx)(s.code,{children:"Session"})," \u5c5e\u6027\u5bf9\u8c61\u7684\u65b9\u6cd5\u65f6\u624d\u4f1a\u771f\u6b63\u6267\u884c\u521d\u59cb\u5316\u3002\u8fd9\u6837\u7684\u8bbe\u8ba1\u65e2\u4fdd\u969c\u4e86\u672a\u4f7f\u7528 ",(0,o.jsx)(s.code,{children:"Session"})," \u7279\u6027\u7684\u8bf7\u6c42\u6267\u884c\u6027\u80fd\uff0c\u4e5f\u4fdd\u8bc1\u4e86\u7ec4\u4ef6\u4f7f\u7528\u7684\u6613\u7528\u6027\u3002"]}),"\n",(0,o.jsxs)(s.h2,{id:"session-\u7684\u9500\u6bc1\u6ce8\u9500",children:[(0,o.jsx)(s.code,{children:"Session"})," \u7684\u9500\u6bc1/\u6ce8\u9500"]}),"\n",(0,o.jsxs)(s.p,{children:["\u7528\u6237 ",(0,o.jsx)(s.code,{children:"Session"})," \u4e0d\u518d\u4f7f\u7528\uff0c\u4f8b\u5982\u7528\u6237\u6ce8\u9500\u767b\u5f55\u72b6\u6001\uff0c\u9700\u8981\u4ece\u5b58\u50a8\u4e2d\u786c\u5220\u9664\uff0c\u90a3\u4e48\u53ef\u4ee5\u8c03\u7528 ",(0,o.jsx)(s.code,{children:"RemoveAll"})," \u65b9\u6cd5\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n","\n",(0,o.jsx)(d.A,{})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},103514:(e,s,n)=>{n.d(s,{A:()=>S});n(296540);var i=n(634164),o=n(944718),r=n(328774),d=n(853465),c=n(316654),t=n(721312),l=n(751107);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var a=n(474848);function x(e){let{href:s,children:n}=e;return(0,a.jsx)(r.A,{href:s,className:(0,i.A)("card padding--lg",h.cardContainer),children:n})}function j(e){let{href:s,icon:n,title:o,description:r}=e;return(0,a.jsxs)(x,{href:s,children:[(0,a.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",h.cardTitle),title:o,children:[n," ",o]}),r&&(0,a.jsx)("p",{className:(0,i.A)("text--truncate",h.cardDescription),title:r,children:r})]})}function g(e){let{item:s}=e;const n=(0,o.Nr)(s),i=function(){const{selectMessage:e}=(0,d.W)();return s=>e(s,(0,t.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return n?(0,a.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??i(s.items.length)}):null}function u(e){let{item:s}=e;const n=(0,c.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(s.docId??void 0);return(0,a.jsx)(j,{href:s.href,icon:n,title:s.label,description:s.description??i?.description})}function m(e){let{item:s}=e;switch(s.type){case"link":return(0,a.jsx)(u,{item:s});case"category":return(0,a.jsx)(g,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function p(e){let{className:s}=e;const n=(0,o.$S)();return(0,a.jsx)(S,{items:n.items,className:s})}function S(e){const{items:s,className:n}=e;if(!s)return(0,a.jsx)(p,{...e});const r=(0,o.d1)(s);return(0,a.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,s)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(m,{item:e})},s)))})}},853465:(e,s,n)=>{n.d(s,{W:()=>l});var i=n(296540),o=n(144586);const r=["zero","one","two","few","many","other"];function d(e){return r.filter((s=>e.includes(s)))}const c={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function t(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,i.useMemo)((()=>{try{return function(e){const s=new Intl.PluralRules(e);return{locale:e,pluralForms:d(s.resolvedOptions().pluralCategories),select:e=>s.select(e)}}(e)}catch(s){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${s.message}\n`),c}}),[e])}function l(){const e=t();return{selectMessage:(s,n)=>function(e,s,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const o=n.select(s),r=n.pluralForms.indexOf(o);return i[Math.min(r,i.length-1)]}(n,s,e)}}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var i=n(296540);const o={},r=i.createContext(o);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);