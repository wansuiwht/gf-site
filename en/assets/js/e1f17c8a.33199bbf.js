"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[56501],{583086:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v0.x/v0.1 2018-04-23","title":"v0.1 2018-04-23","description":"v0.1\u7248\u672c\u66f4\u65b0\u53d1\u5e03\uff0c\u65b0\u589e\u591a\u4e2a\u6a21\u5757\u5e76\u6539\u8fdb\u73b0\u6709\u529f\u80fd\uff0c\u5305\u62ecGoFrame\u6846\u67b6\u7684gfsnotify\u6587\u4ef6\u76d1\u63a7\u3001\u914d\u7f6e\u548c\u6a21\u677f\u5f15\u64ce\u66f4\u65b0\u673a\u5236\u3001gconv\u7c7b\u578b\u8f6c\u6362\u3001gpage\u5206\u9875\u7ba1\u7406\u3001\u591a\u6837\u5316\u65e5\u5fd7\u5904\u7406\u3001gredis\u5c01\u88c5Redis\u64cd\u4f5c\uff0c\u589e\u5f3aghttp\u548cgdb\u529f\u80fd\uff0c\u63d0\u4f9b\u8be6\u7ec6\u5f00\u53d1\u6587\u6863\uff0c\u5e76\u4fee\u590d\u591a\u9879\u95ee\u9898\u3002","source":"@site/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v0.x/v0.1 2018-04-23.md","sourceDirName":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v0.x","slug":"/release/v0.1","permalink":"/en/release/v0.1","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v0.x/v0.1 2018-04-23.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731404158000,"sidebarPosition":2,"frontMatter":{"slug":"/release/v0.1","title":"v0.1 2018-04-23","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gfsnotify","\u914d\u7f6e\u7ba1\u7406","\u6a21\u677f\u5f15\u64ce","gconv","gpage\u5206\u9875","ghttp","gredis\u5305","gdb\u6570\u636e\u5e93ORM"],"description":"v0.1\u7248\u672c\u66f4\u65b0\u53d1\u5e03\uff0c\u65b0\u589e\u591a\u4e2a\u6a21\u5757\u5e76\u6539\u8fdb\u73b0\u6709\u529f\u80fd\uff0c\u5305\u62ecGoFrame\u6846\u67b6\u7684gfsnotify\u6587\u4ef6\u76d1\u63a7\u3001\u914d\u7f6e\u548c\u6a21\u677f\u5f15\u64ce\u66f4\u65b0\u673a\u5236\u3001gconv\u7c7b\u578b\u8f6c\u6362\u3001gpage\u5206\u9875\u7ba1\u7406\u3001\u591a\u6837\u5316\u65e5\u5fd7\u5904\u7406\u3001gredis\u5c01\u88c5Redis\u64cd\u4f5c\uff0c\u589e\u5f3aghttp\u548cgdb\u529f\u80fd\uff0c\u63d0\u4f9b\u8be6\u7ec6\u5f00\u53d1\u6587\u6863\uff0c\u5e76\u4fee\u590d\u591a\u9879\u95ee\u9898\u3002"},"sidebar":"releaseSidebar","previous":{"title":"v0.2 2018-05-21","permalink":"/en/release/v0.2"}}');var t=n(474848),r=n(28453);const o={slug:"/release/v0.1",title:"v0.1 2018-04-23",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gfsnotify","\u914d\u7f6e\u7ba1\u7406","\u6a21\u677f\u5f15\u64ce","gconv","gpage\u5206\u9875","ghttp","gredis\u5305","gdb\u6570\u636e\u5e93ORM"],description:"v0.1\u7248\u672c\u66f4\u65b0\u53d1\u5e03\uff0c\u65b0\u589e\u591a\u4e2a\u6a21\u5757\u5e76\u6539\u8fdb\u73b0\u6709\u529f\u80fd\uff0c\u5305\u62ecGoFrame\u6846\u67b6\u7684gfsnotify\u6587\u4ef6\u76d1\u63a7\u3001\u914d\u7f6e\u548c\u6a21\u677f\u5f15\u64ce\u66f4\u65b0\u673a\u5236\u3001gconv\u7c7b\u578b\u8f6c\u6362\u3001gpage\u5206\u9875\u7ba1\u7406\u3001\u591a\u6837\u5316\u65e5\u5fd7\u5904\u7406\u3001gredis\u5c01\u88c5Redis\u64cd\u4f5c\uff0c\u589e\u5f3aghttp\u548cgdb\u529f\u80fd\uff0c\u63d0\u4f9b\u8be6\u7ec6\u5f00\u53d1\u6587\u6863\uff0c\u5e76\u4fee\u590d\u591a\u9879\u95ee\u9898\u3002"},l=void 0,c={},g=[];function d(e){const s={a:"a",li:"li",ol:"ol",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u589e\u52a0gfsnotify\u6587\u4ef6\u76d1\u63a7\u6a21\u5757\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"\u914d\u7f6e\u7ba1\u7406\u6a21\u5757\u589e\u52a0\u914d\u7f6e\u6587\u4ef6\u81ea\u52a8\u68c0\u6d4b\u66f4\u65b0\u673a\u5236\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"\u6a21\u677f\u5f15\u64ce\u589e\u52a0\u5bf9\u6a21\u677f\u6587\u4ef6\u7684\u81ea\u52a8\u68c0\u6d4b\u66f4\u65b0\u673a\u5236\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"\u6539\u8fdbgconv\u5305\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u529f\u80fd\uff0c\u63d0\u9ad8\u8f6c\u6362\u6027\u80fd\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"\u589e\u52a0gpage\u5206\u9875\u7ba1\u7406\u5305\uff0c\u652f\u6301\u52a8\u6001\u5206\u9875\u3001\u9759\u6001\u5206\u9875\u4ee5\u53ca\u81ea\u5b9a\u4e49\u5206\u9875\u6837\u5f0f\u7279\u6027\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"ghttp.Request\u589e\u52a0Exit\u65b9\u6cd5\uff0c\u7528\u4ee5\u6807\u8bb0\u670d\u52a1\u9000\u51fa\uff0c\u5f53\u5728\u670d\u52a1\u6267\u884c\u524d\u8c03\u7528\u540e\uff0c\u670d\u52a1\u5c06\u4e0d\u518d\u6267\u884c\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"ghttp.Response\u53bb\u6389WriteString\u65b9\u6cd5\uff0c\u7edf\u4e00\u4f7f\u7528Write\u65b9\u6cd5\u8fd4\u56de\u6570\u636e\u6d41\uff0c\u662f\u4f7f\u7528\u7075\u6d3b\u7684\u53c2\u6570\u5f62\u5f0f\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"\u6a21\u677f\u5f15\u64ce\u589e\u52a0\u6a21\u677f\u53d8\u91cf\u66b4\u9732\u63a5\u53e3LockFunc/RLockFunc\uff0c\u4ee5\u4fbf\u652f\u6301\u5f00\u53d1\u8005\u7075\u6d3b\u5904\u7406\u6a21\u677f\u53d8\u91cf\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"ghttp.Server\u589e\u52a0access & error log\u529f\u80fd\uff0c\u5e76\u652f\u6301\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5904\u7406\u56de\u8c03\u51fd\u6570\u6ce8\u518c\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"\u589e\u52a0gredis\u5305\uff0c\u652f\u6301\u5bf9redis\u7684\u5ba2\u6237\u7aef\u64cd\u4f5c\u5c01\u88c5\uff0c\u5e76\u5c06gredis.Redis\u5bf9\u8c61\u52a0\u5165\u5230gins\u5355\u4f8b\u7ba1\u7406\u5668\u4e2d\u8fdb\u884c\u7edf\u4e00\u914d\u7f6e\u7ba1\u7406\u7ef4\u62a4\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"gins\u5355\u4f8b\u7ba1\u7406\u5668\u589e\u52a0\u5bf9\u5355\u4f8b\u5bf9\u8c61\u914d\u7f6e\u6587\u4ef6\u7684\u81ea\u52a8\u68c0\u6d4b\u66f4\u65b0\u673a\u5236\uff0c\u5f53\u914d\u7f6e\u6587\u4ef6\u5728\u5916\u90e8\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u81ea\u52a8\u5237\u65b0\u5355\u4f8b\u7ba1\u7406\u5668\u4e2d\u7684\u5355\u4f8b\u5bf9\u8c61\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"gdb\u6570\u636e\u5e93ORM\u5305\u589e\u52a0And/Or\u6761\u4ef6\u94fe\u5f0f\u65b9\u6cd5\uff0c\u5e76\u6539\u8fdbWhere/Data\u65b9\u6cd5\u53c2\u6570\u7075\u6d3b\u6027\uff1b"}),"\n",(0,t.jsx)(s.li,{children:"\u5bf9\u4e8e\u65b0\u589e\u52a0\u7684\u6a21\u5757\uff0c\u540c\u65f6\u4e5f\u589e\u52a0\u4e86\u5bf9\u5e94\u7684\u5f00\u53d1\u6587\u6863\uff0c\u5e76\u68b3\u7406\u5b8c\u5584\u4e86\u73b0\u6709\u7684\u5176\u4ed6\u6a21\u5757\u5f00\u53d1\u6587\u6863\uff1b"}),"\n",(0,t.jsxs)(s.li,{children:["\u4fee\u590dISSUE:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["#IISWI ",(0,t.jsx)(s.a,{href:"http://github.com/gogf/gf/issues/IISWI",children:"github.com/gogf/gf/issues/IISWI"})]}),"\n",(0,t.jsxs)(s.li,{children:["#IISMY ",(0,t.jsx)(s.a,{href:"http://github.com/gogf/gf/issues/IISMY",children:"github.com/gogf/gf/issues/IISMY"})]}),"\n",(0,t.jsxs)(s.li,{children:["\u53cd\u9988\u5e76\u8ddf\u8e2a\u5b8c\u6210\u7b2c\u4e09\u65b9\u4f9d\u8d56mxj\u5305\u7684ISSUE\u4fee\u590d( ",(0,t.jsx)(s.a,{href:"http://github.com/clbanning/mxj/issues/48",children:"github.com/clbanning/mxj/issues/48"}),")\uff1b"]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(296540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);