"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[65438],{872505:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.3 2018-12-26","title":"v1.3 2018-12-26","description":"\u672c\u6b21\u53d1\u5e03\u7684GoFrame\u6846\u67b6v1.3\u7248\u672c\u6db5\u76d6\u591a\u4e2a\u65b0\u7279\u6027\uff0c\u5305\u62ecgform\u7684\u91cd\u6784\u3001WebServer\u5206\u7ec4\u8def\u7531\u53caRewrite\u8def\u7531\u91cd\u5199\u7279\u6027\uff0c\u5e76\u6539\u5584\u6846\u67b6\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u81ea\u52a8\u8bc6\u522b\u3002\u6b64\u5916\uff0c\u96c6\u6210\u4e86Travis CI\u81ea\u52a8\u5316\u6784\u5efa\u4e0e\u6d4b\u8bd5\uff0c\u4f18\u5316\u4e86WebServer\u9759\u6001\u6587\u4ef6\u670d\u52a1\uff0c\u63d0\u5347\u4e86gcache\u6027\u80fd\uff0c\u5e76\u4fee\u590d\u591a\u9879\u529f\u80fdBug\uff0c\u589e\u5f3a\u4e86\u6574\u4f53\u7684\u7a33\u5b9a\u6027\u548c\u6269\u5c55\u6027\u3002","source":"@site/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.3 2018-12-26.md","sourceDirName":"release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x","slug":"/release/v1.3","permalink":"/release/v1.3","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.3 2018-12-26.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":13,"frontMatter":{"slug":"/release/v1.3","title":"v1.3 2018-12-26","sidebar_position":13,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","v1.3","gform","WebServer","gcache","gredis","Travis CI","gview","Bug Fix"],"description":"\u672c\u6b21\u53d1\u5e03\u7684GoFrame\u6846\u67b6v1.3\u7248\u672c\u6db5\u76d6\u591a\u4e2a\u65b0\u7279\u6027\uff0c\u5305\u62ecgform\u7684\u91cd\u6784\u3001WebServer\u5206\u7ec4\u8def\u7531\u53caRewrite\u8def\u7531\u91cd\u5199\u7279\u6027\uff0c\u5e76\u6539\u5584\u6846\u67b6\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u81ea\u52a8\u8bc6\u522b\u3002\u6b64\u5916\uff0c\u96c6\u6210\u4e86Travis CI\u81ea\u52a8\u5316\u6784\u5efa\u4e0e\u6d4b\u8bd5\uff0c\u4f18\u5316\u4e86WebServer\u9759\u6001\u6587\u4ef6\u670d\u52a1\uff0c\u63d0\u5347\u4e86gcache\u6027\u80fd\uff0c\u5e76\u4fee\u590d\u591a\u9879\u529f\u80fdBug\uff0c\u589e\u5f3a\u4e86\u6574\u4f53\u7684\u7a33\u5b9a\u6027\u548c\u6269\u5c55\u6027\u3002"},"sidebar":"releaseSidebar","previous":{"title":"v1.4 2019-01-24","permalink":"/release/v1.4"},"next":{"title":"v1.2 2018-11-26","permalink":"/release/v1.2"}}');var n=i(474848),c=i(28453);const d={slug:"/release/v1.3",title:"v1.3 2018-12-26",sidebar_position:13,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","v1.3","gform","WebServer","gcache","gredis","Travis CI","gview","Bug Fix"],description:"\u672c\u6b21\u53d1\u5e03\u7684GoFrame\u6846\u67b6v1.3\u7248\u672c\u6db5\u76d6\u591a\u4e2a\u65b0\u7279\u6027\uff0c\u5305\u62ecgform\u7684\u91cd\u6784\u3001WebServer\u5206\u7ec4\u8def\u7531\u53caRewrite\u8def\u7531\u91cd\u5199\u7279\u6027\uff0c\u5e76\u6539\u5584\u6846\u67b6\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u81ea\u52a8\u8bc6\u522b\u3002\u6b64\u5916\uff0c\u96c6\u6210\u4e86Travis CI\u81ea\u52a8\u5316\u6784\u5efa\u4e0e\u6d4b\u8bd5\uff0c\u4f18\u5316\u4e86WebServer\u9759\u6001\u6587\u4ef6\u670d\u52a1\uff0c\u63d0\u5347\u4e86gcache\u6027\u80fd\uff0c\u5e76\u4fee\u590d\u591a\u9879\u529f\u80fdBug\uff0c\u589e\u5f3a\u4e86\u6574\u4f53\u7684\u7a33\u5b9a\u6027\u548c\u6269\u5c55\u6027\u3002"},t=void 0,l={},o=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",level:3},{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",level:3},{value:"\u529f\u80fd\u6539\u8fdb",id:"\u529f\u80fd\u6539\u8fdb",level:3},{value:"Bug Fix",id:"bug-fix",level:3}];function h(e){const r={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"\u65b0\u7279\u6027",children:"\u65b0\u7279\u6027"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\u5bf9 ",(0,n.jsx)(r.code,{children:"gform"})," \u5b8c\u6210\u91cd\u6784\uff0c\u4ee5\u63d0\u9ad8\u6269\u5c55\u6027\uff0c\u5e76\u4fee\u590d\u90e8\u5206\u7ec6\u8282\u95ee\u9898\u3001\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b( ",(0,n.jsx)(r.a,{href:"https://wiki.goframe.org/database/orm/index",children:"https://goframe.org/database/orm/index"}),")\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"WebServer"})," \u8def\u7531\u6ce8\u518c\u65b0\u589e\u5206\u7ec4\u8def\u7531\u7279\u6027( ",(0,n.jsx)(r.a,{href:"https://wiki.goframe.org/net/ghttp/group",children:"https://goframe.org/net/ghttp/group"}),");"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"WebServer"})," \u65b0\u589e ",(0,n.jsx)(r.code,{children:"Rewrite"})," \u8def\u7531\u91cd\u5199\u7279\u6027( ",(0,n.jsx)(r.a,{href:"https://wiki.goframe.org/net/ghttp/static",children:"https://goframe.org/net/ghttp/static"}),");"]}),"\n",(0,n.jsx)(r.li,{children:"\u589e\u52a0\u6846\u67b6\u8fd0\u884c\u65f6\u5bf9\u5f00\u53d1\u73af\u5883\u7684\u81ea\u52a8\u8bc6\u522b\uff1b"}),"\n",(0,n.jsxs)(r.li,{children:["\u589e\u52a0\u4e86 ",(0,n.jsx)(r.code,{children:"Travis CI"})," \u81ea\u52a8\u5316\u6784\u5efa/\u6d4b\u8bd5\uff1b"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"\u65b0\u529f\u80fd",children:"\u65b0\u529f\u80fd"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"WebServer"})," \u9759\u6001\u6587\u4ef6\u670d\u52a1\u529f\u80fd\uff0c\u589e\u52a0 ",(0,n.jsx)(r.code,{children:"SetStaticPath"}),"/ ",(0,n.jsx)(r.code,{children:"AddStaticPath"})," \u65b9\u6cd5( ",(0,n.jsx)(r.a,{href:"https://wiki.goframe.org/net/ghttp/static",children:"https://goframe.org/net/ghttp/static"}),")\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"gform"})," \u65b0\u589e ",(0,n.jsx)(r.code,{children:"Filter"})," \u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\uff0c\u7528\u4e8e\u8fc7\u6ee4\u53c2\u6570\u4e2d\u7684\u975e\u8868\u5b57\u6bb5\u952e\u503c\u5bf9\uff08 ",(0,n.jsx)(r.a,{href:"https://wiki.goframe.org/database/orm/linkop",children:"https://goframe.org/database/orm/linkop"}),"\uff09\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"gcache"})," \u65b0\u589e ",(0,n.jsx)(r.code,{children:"Data"})," \u65b9\u6cd5\uff0c\u7528\u4ee5\u83b7\u53d6\u6240\u6709\u7684\u7f13\u5b58\u6570\u636e\u9879\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"gredis"})," \u589e\u52a0 ",(0,n.jsx)(r.code,{children:"GetConn"})," \u65b9\u6cd5\u83b7\u53d6\u539f\u751fredis\u8fde\u63a5\u5bf9\u8c61\uff1b"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"\u529f\u80fd\u6539\u8fdb",children:"\u529f\u80fd\u6539\u8fdb"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"gform"})," \u7684 ",(0,n.jsx)(r.code,{children:"Where"})," \u65b9\u6cd5\uff0c\u652f\u6301 ",(0,n.jsx)(r.code,{children:"slice"})," \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u5e76\u66f4\u65b9\u4fbf\u5730\u652f\u6301 ",(0,n.jsx)(r.code,{children:"in"})," \u64cd\u4f5c\u67e5\u8be2\uff08 ",(0,n.jsx)(r.a,{href:"https://wiki.goframe.org/database/orm/linkop",children:"https://goframe.org/database/orm/linkop"}),"\uff09\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"gproc"})," \u8fdb\u7a0b\u95f4\u901a\u4fe1\u6570\u636e\u7ed3\u6784\uff0c\u5c06 ",(0,n.jsx)(r.code,{children:"pid"})," \u5b57\u6bb5\u4ece ",(0,n.jsx)(r.code,{children:"16bit"})," \u6269\u5c55\u4e3a ",(0,n.jsx)(r.code,{children:"24bit"}),"\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"gconv"}),"/ ",(0,n.jsx)(r.code,{children:"gmap"}),"/ ",(0,n.jsx)(r.code,{children:"garray"}),"\uff0c\u589e\u52a0\u82e5\u5e72\u64cd\u4f5c\u65b9\u6cd5\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"gview"})," \u6a21\u677f\u5f15\u64ce\u4e2d\u7684 ",(0,n.jsx)(r.code,{children:"date"})," \u5185\u7f6e\u51fd\u6570\uff0c\u5f53\u7ed9\u5b9a\u7684\u65f6\u95f4\u6233\u4e3a\u7a7a\u65f6\u6253\u5370\u5f53\u524d\u7684\u7cfb\u7edf\u65f6\u95f4\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"gview"})," \u6a21\u677f\u5f15\u64ce\u4e2d\uff0c\u5f53\u6253\u5370\u7684\u53d8\u91cf\u4e0d\u5b58\u5728\u65f6\uff0c\u663e\u793a\u4e3a\u7a7a\uff08\u6807\u51c6\u5e93\u9ed8\u8ba4\u663e\u793a\u4e3a ",(0,n.jsx)(r.code,{children:"<no value>"}),"\uff09\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"WebServer"}),"\uff0c\u53bb\u6389 ",(0,n.jsx)(r.code,{children:"HANGUP"})," \u7684\u4fe1\u53f7\u76d1\u542c\uff0c\u907f\u514d\u7a0b\u5e8f\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"nohup"})," \u8fd0\u884c\u65f6\u4ea7\u751f\u5f02\u5e38\u9000\u51fa\u95ee\u9898\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u6539\u8fdb ",(0,n.jsx)(r.code,{children:"gcache"})," \u6027\u80fd\uff0c\u5e76\u5b8c\u5584\u57fa\u51c6\u6d4b\u8bd5\uff1b"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\u4fee\u590d ",(0,n.jsx)(r.code,{children:"gcache"})," \u5728\u975eLRU\u7279\u6027\u5f00\u542f\u65f6\u7684\u7f13\u5b58\u5173\u95ed\u8d44\u6e90\u7ade\u4e89\u95ee\u9898\uff0c\u5e76\u4fee\u590d ",(0,n.jsx)(r.code,{children:"doSetWithLockCheck"})," \u5185\u90e8\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u95ee\u9898\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4fee\u590d ",(0,n.jsx)(r.code,{children:"grand.intn"})," \u5185\u90e8\u65b9\u6cd5\u5728 ",(0,n.jsx)(r.code,{children:"x86"})," \u67b6\u6784\u4e0b\u7684\u968f\u673a\u6570\u4f4d\u6ea2\u51fa\u95ee\u9898\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4fee\u590d ",(0,n.jsx)(r.code,{children:"gbinary"})," \u4e2d ",(0,n.jsx)(r.code,{children:"Int"})," \u65b9\u6cd5\u9488\u5bf9 ",(0,n.jsx)(r.code,{children:"[]byte"})," \u53c2\u6570\u957f\u5ea6\u81ea\u52a8\u5339\u914d\u9020\u6210\u7684\u5b57\u8282\u957f\u5ea6\u6ea2\u51fa\u95ee\u9898\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4fee\u590d ",(0,n.jsx)(r.code,{children:"gjson"})," \u7531\u4e8e\u5b98\u65b9\u6807\u51c6\u5e93 ",(0,n.jsx)(r.code,{children:"json"})," \u4e0d\u652f\u6301 ",(0,n.jsx)(r.code,{children:"map[interface{}]*"})," \u7c7b\u578b\u9020\u6210\u7684Go\u53d8\u91cf\u7f16\u7801\u95ee\u9898\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4fee\u590d ",(0,n.jsx)(r.code,{children:"garray"})," \u4e2d\u90e8\u5206\u65b9\u6cd5\u7684\u6570\u636e\u7ade\u4e89\u95ee\u9898\uff0c\u4fee\u590d\u4e8c\u5206\u67e5\u627e\u6392\u5e8f\u95ee\u9898\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4fee\u590d ",(0,n.jsx)(r.code,{children:"ghttp.Request.GetVar"})," \u65b9\u6cd5\u83b7\u53d6\u53c2\u6570\u95ee\u9898\uff1b"]}),"\n",(0,n.jsxs)(r.li,{children:["\u4fee\u590d ",(0,n.jsx)(r.code,{children:"gform"})," \u7684\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u4e0d\u8d77\u4f5c\u7528\u7684\u95ee\u9898\uff1b"]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>t});var s=i(296540);const n={},c=s.createContext(n);function d(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);