"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[57789],{624462:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"release/v2.7 2024-04-09","title":"v2.7 2024-04-09","description":"GoFrame\u6846\u67b6\u53d1\u5e03v2.7.0\u7248\u672c\uff0c\u65b0\u589emetric\u76d1\u63a7\u7ec4\u4ef6\u5e76\u63d0\u4f9bHTTP Client\u548cServer\u7684\u76d1\u63a7\u6307\u6807\u5b9e\u73b0\uff0c\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u7684Save\u64cd\u4f5c\uff0c\u6539\u8fdbgcron\u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6\uff0c\u589e\u5f3agdb\u6570\u636e\u5e93\u7ec4\u4ef6\u529f\u80fd\u3002\u540c\u65f6\uff0c\u4fee\u590d\u82e5\u5e72\u7cfb\u7edf\u95ee\u9898\uff0c\u63d0\u5347\u6846\u67b6\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002","source":"@site/docs/release/v2.7 2024-04-09.md","sourceDirName":"release","slug":"/release/v2.7","permalink":"/en/release/v2.7","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/v2.7 2024-04-09.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731404158000,"sidebarPosition":0,"frontMatter":{"slug":"/release/v2.7","title":"v2.7 2024-04-09","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","metric\u76d1\u63a7","OpenTelemetry","\u6570\u636e\u5e93\u652f\u6301","\u5b9a\u65f6\u4efb\u52a1","gcron","HTTP\u76d1\u63a7","\u4e2d\u95f4\u4ef6","\u4ee3\u7801\u751f\u6210","gmetric\u7ec4\u4ef6"],"description":"GoFrame\u6846\u67b6\u53d1\u5e03v2.7.0\u7248\u672c\uff0c\u65b0\u589emetric\u76d1\u63a7\u7ec4\u4ef6\u5e76\u63d0\u4f9bHTTP Client\u548cServer\u7684\u76d1\u63a7\u6307\u6807\u5b9e\u73b0\uff0c\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u7684Save\u64cd\u4f5c\uff0c\u6539\u8fdbgcron\u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6\uff0c\u589e\u5f3agdb\u6570\u636e\u5e93\u7ec4\u4ef6\u529f\u80fd\u3002\u540c\u65f6\uff0c\u4fee\u590d\u82e5\u5e72\u7cfb\u7edf\u95ee\u9898\uff0c\u63d0\u5347\u6846\u67b6\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002"},"sidebar":"releaseSidebar","previous":{"title":"\u7248\u672c\u53d1\u5e03\u8bf4\u660e","permalink":"/en/release/note"},"next":{"title":"v2.6 2023-12-19","permalink":"/en/release/v2.6"}}');var d=c(474848),i=c(28453);const r={slug:"/release/v2.7",title:"v2.7 2024-04-09",sidebar_position:0,hide_title:!0,keywords:["GoFrame","metric\u76d1\u63a7","OpenTelemetry","\u6570\u636e\u5e93\u652f\u6301","\u5b9a\u65f6\u4efb\u52a1","gcron","HTTP\u76d1\u63a7","\u4e2d\u95f4\u4ef6","\u4ee3\u7801\u751f\u6210","gmetric\u7ec4\u4ef6"],description:"GoFrame\u6846\u67b6\u53d1\u5e03v2.7.0\u7248\u672c\uff0c\u65b0\u589emetric\u76d1\u63a7\u7ec4\u4ef6\u5e76\u63d0\u4f9bHTTP Client\u548cServer\u7684\u76d1\u63a7\u6307\u6807\u5b9e\u73b0\uff0c\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u7684Save\u64cd\u4f5c\uff0c\u6539\u8fdbgcron\u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6\uff0c\u589e\u5f3agdb\u6570\u636e\u5e93\u7ec4\u4ef6\u529f\u80fd\u3002\u540c\u65f6\uff0c\u4fee\u590d\u82e5\u5e72\u7cfb\u7edf\u95ee\u9898\uff0c\u63d0\u5347\u6846\u67b6\u6027\u80fd\u548c\u7a33\u5b9a\u6027\u3002"},l=void 0,o={},h=[{value:"\u7ec4\u4ef6\u6539\u8fdb",id:"\u7ec4\u4ef6\u6539\u8fdb",level:2},{value:"\u793e\u533a\u7ec4\u4ef6",id:"\u793e\u533a\u7ec4\u4ef6",level:2},{value:"\u5f00\u53d1\u5de5\u5177",id:"\u5f00\u53d1\u5de5\u5177",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["\u5927\u5bb6\u597d\uff0c ",(0,d.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u4eca\u5929\u53d1\u5e03\u4e86 ",(0,d.jsx)(n.code,{children:"v2.7.0"})," \u6b63\u5f0f\u7248\u672c\u5566\uff01 \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"]}),"\n",(0,d.jsxs)(n.p,{children:["\u672c\u6b21\u7248\u672c\u6700\u5927\u7684\u770b\u70b9\u662f\u63d0\u4f9b\u4e86 ",(0,d.jsx)(n.code,{children:"metric"})," \u76d1\u63a7\u7ec4\u4ef6\uff0c\u4e3b\u5e93\u63d0\u4f9b\u4e86\u63a5\u53e3\u5316\u7684 ",(0,d.jsx)(n.code,{children:"metric"})," \u8bbe\u8ba1\uff0c\u793e\u533a\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u57fa\u4e8e ",(0,d.jsx)(n.code,{children:"OpenTelemetry"})," \u7684 ",(0,d.jsx)(n.code,{children:"metric"})," \u63a5\u53e3\u5b9e\u73b0\u3002\u8be5\u7279\u6027\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5173\u95ed\u7684\uff0c\u53ea\u6709\u5728\u5f15\u5165\u5177\u4f53\u7684\u63a5\u53e3\u5b9e\u73b0\u6216\u8005\u793e\u533a\u5b9e\u73b0\u65f6\u624d\u4f1a\u9ed8\u8ba4\u542f\u7528\u3002\u5f53\u524d\u7248\u672c\u540c\u65f6\u63d0\u4f9b\u4e86 ",(0,d.jsx)(n.code,{children:"HTTP Client&Server"})," \u7684\u76d1\u63a7\u6307\u6807\u5b9e\u73b0\uff0c\u5176\u4ed6\u7ec4\u4ef6\u7684\u76d1\u63a7\u6307\u6807\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u9646\u7eed\u63d0\u4f9b\u3002\u8be6\u60c5\u8bf7\u53c2\u8003\u6587\u6863\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/obs/metrics",children:"\u670d\u52a1\u76d1\u63a7\u544a\u8b66"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u540c\u65f6\uff0c\u5728\u672c\u6b21\u7248\u672c\u4e2d\u5b9e\u73b0\u4e86\u5bf9 ",(0,d.jsx)(n.code,{children:"dm/mssql/oracle/pgsql/sqlite"})," \u6570\u636e\u5e93\u7684 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u652f\u6301\uff0c\u611f\u8c22\u793e\u533a\u5c0f\u4f19\u4f34 ",(0,d.jsx)(n.a,{href:"https://github.com/oldme-git",children:"https://github.com/oldme-git"})," \ud83d\udc96\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5728\u672c\u6b21\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5bf9 ",(0,d.jsx)(n.code,{children:"gcron"})," \u5b9a\u65f6\u4efb\u52a1\u7ec4\u4ef6\u5bf9\u79d2\u7ea7\u5b57\u6bb5\u589e\u52a0\u4e86\u5ffd\u7565\u7b26\u53f7 ",(0,d.jsx)(n.code,{children:"#"})," \u7684\u7279\u6027\uff0c\u7528\u4e8e\u5c06 ",(0,d.jsx)(n.code,{children:"6"})," \u6bb5\u5f0f\u7684 ",(0,d.jsx)(n.code,{children:"cron pattern"})," \u8f6c\u6362\u4e3a\u7c7b\u4f3c\u4e8e ",(0,d.jsx)(n.code,{children:"5"})," \u6bb5\u5f0f\u7684 ",(0,d.jsx)(n.code,{children:"linux crontab pattern"})," \u529f\u80fd\uff0c\u7528\u4e8e\u89e3\u51b3\u79d2\u7ea7\u7c92\u5ea6\u4e0b\u7531\u4e8e\u5ef6\u8fdf\u5f15\u8d77\u7684\u4efb\u52a1\u6267\u884c\u4e0d\u51c6\u786e\u95ee\u9898\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/components/os-gcron-pattern",children:"\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u7531\u4e8e\u672c\u6b21\u7248\u672c\u53d8\u66f4\u5185\u5bb9\u8f83\u591a\uff0c\u4ee5\u4e0b\u4e2d\u6587\u4ecb\u7ecd\u4e00\u4e9b\u8f83\u4e3a\u91cd\u8981\u7684\u6539\u8fdb\u70b9\uff0c\u8be6\u7ec6\u7684 ",(0,d.jsx)(n.code,{children:"ChangeLog"})," \u8bf7\u53c2\u8003\uff1a ",(0,d.jsx)(n.a,{href:"https://github.com/gogf/gf/releases/tag/v2.7.0",children:"https://github.com/gogf/gf/releases/tag/v2.7.0"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5b8c\u6574\u4ee3\u7801\u53d8\u66f4\u8bf7\u53c2\u8003\uff1a",(0,d.jsx)(n.a,{href:"https://github.com/gogf/gf/compare/v2.6.0...v2.7.0",children:"https://github.com/gogf/gf/compare/v2.6.0...v2.7.0"})]}),"\n",(0,d.jsx)(n.p,{children:"\u611f\u8c22\u6240\u6709\u53c2\u4e0e\u672c\u6b21\u7248\u672c\u7684\u8d21\u732e\u5f00\u53d1\u8005\u4eec\ud83d\udc96\uff01"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:c(580621).A+"",width:"1228",height:"316"})}),"\n",(0,d.jsx)(n.h2,{id:"\u7ec4\u4ef6\u6539\u8fdb",children:"\u7ec4\u4ef6\u6539\u8fdb"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gdb"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"Stats"})," \u63a5\u53e3\u5b9a\u4e49\u53ca\u5b9e\u73b0\uff0c\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u6570\u636e\u5e93 ",(0,d.jsx)(n.code,{children:"orm"})," \u5bf9\u8c61\u7ef4\u62a4\u7684\u8fde\u63a5\u6c60\u4fe1\u606f\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/core/gdb-senior-connection-pool",children:"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"FormatUpsert"})," \u63a5\u53e3\u5b9a\u4e49\u53ca\u5b9e\u73b0\uff0c\u7528\u4e8e\u4e0d\u540c\u6570\u636e\u5e93\u7c7b\u578b\u5b9e\u73b0\u5199\u5165/\u66f4\u65b0\u64cd\u4f5c\uff0c\u5373 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"SqlType"})," \u7c7b\u578b\uff0c\u5e76\u5c06\u5df2\u6709\u7684 ",(0,d.jsx)(n.code,{children:"sql type"})," \u7c7b\u578b\u5b9a\u4e49\u4ece ",(0,d.jsx)(n.code,{children:"string"})," \u7c7b\u578b\u6539\u4e3a\u4e86 ",(0,d.jsx)(n.code,{children:"SqlType"})," \u7c7b\u578b\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"Model.OnConflict"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5b9e\u73b0\u90e8\u5206\u6570\u636e\u5e93\u7c7b\u578b\u5f53\u5b57\u6bb5\u552f\u4e00\u952e\u51b2\u7a81\u65f6\u7684\u66f4\u65b0\u7b56\u7565\uff0c\u7279\u522b\u662f\u5b9e\u73b0 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"ClearTableFieldsAll"})," \u65b9\u6cd5\u5931\u6548\u7684\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"ghttp"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"MiddlewareNeverDoneCtx"})," \u4e2d\u95f4\u4ef6\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\uff0c\u907f\u514d\u5ba2\u6237\u7aef\u53d6\u6d88\u8bf7\u6c42\u65f6\u670d\u52a1\u7aef\u6536\u5230\u7684 ",(0,d.jsx)(n.code,{children:"context cancel"})," \u95ee\u9898\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/web/faq",children:"\u5e38\u89c1\u95ee\u9898"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"http server"})," \u7684\u76d1\u63a7\u6307\u6807\u5b9e\u73b0\uff0c\u9ed8\u8ba4\u5173\u95ed\u4e0d\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u53ea\u6709\u5728\u5f00\u542f ",(0,d.jsx)(n.code,{children:"metrics"})," \u7279\u6027\u65f6\u624d\u4f1a\u81ea\u52a8\u5f00\u542f\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/web/senior-server-metrics",children:"HTTPServer-\u76d1\u63a7\u6307\u6807"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"tracing"})," \u8bb0\u5f55\uff0c\u5c06 ",(0,d.jsx)(n.code,{children:"span"})," \u540d\u79f0\u4ece ",(0,d.jsx)(n.code,{children:"query uri"})," \u6539\u4e3a\u4e86 ",(0,d.jsx)(n.code,{children:"route uri"}),"\uff0c\u4fbf\u4e8e\u67e5\u770b\u65f6\u66f4\u5bb9\u6613\u805a\u5408\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"EnterTime"})," \u53ca ",(0,d.jsx)(n.code,{children:"LeaveTime"})," \u5c5e\u6027\u7c7b\u578b\uff0c\u4ece ",(0,d.jsx)(n.code,{children:"int64"})," \u6539\u4e3a\u4e86 ",(0,d.jsx)(n.code,{children:"*gtime.Time"})," \u7c7b\u578b\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5c06 ",(0,d.jsx)(n.code,{children:"WebSocket"})," \u65b9\u6cd5\u6807\u8bb0\u5e9f\u5f03\uff0c\u5c06\u4f1a\u5728\u672a\u6765\u7684\u5927\u7248\u672c\u4e2d\u53bb\u6389\uff0c\u4e5f\u4f1a\u53bb\u6389 ",(0,d.jsx)(n.code,{children:"http server"})," \u5bf9 ",(0,d.jsx)(n.code,{children:"websocket"})," \u7684\u5185\u5d4c\u8026\u5408\u652f\u6301\u3002\u672a\u6765\u5efa\u8bae\u901a\u8fc7\u5176\u4ed6\u7684 ",(0,d.jsx)(n.code,{children:"websocket"})," \u5f00\u6e90\u7ec4\u4ef6\u7ed3\u5408 ",(0,d.jsx)(n.code,{children:"http server"})," \u4e00\u8d77\u4f7f\u7528\uff0c\u66f4\u52a0\u89e3\u8026\u7075\u6d3b\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d\u7531\u4e8e ",(0,d.jsx)(n.code,{children:"Request Body"})," \u9ed8\u8ba4\u53ef\u91cd\u590d\u8bfb\u53d6\u7684\u95ee\u9898\u5f15\u53d1\u7684\u5927\u6587\u4ef6\u4e0a\u4f20\u5360\u7528\u5185\u5b58\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"StartPProfServer"})," \u65b9\u6cd5\u7684 ",(0,d.jsx)(n.code,{children:"pattern"})," \u53c2\u6570\u5931\u6548\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6587\u4ef6\u4e0b\u8f7d\u65b9\u6cd5 ",(0,d.jsx)(n.code,{children:"Request.ServeFileDownload"})," \u65b9\u6cd5\u65b0\u589e ",(0,d.jsx)(n.code,{children:"Access-Control-Expose-Headers Header"})," \u8fd4\u56de\uff0c\u4ee5\u652f\u6301 ",(0,d.jsx)(n.code,{children:"ajax"})," \u6587\u4ef6\u8bf7\u6c42\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u670d\u52a1\u914d\u7f6e\u65b0\u589e ",(0,d.jsx)(n.code,{children:"SwaggerUITemplate"})," \u914d\u7f6e\u9879\uff0c\u7528\u4e8e\u5feb\u6377\u914d\u7f6e ",(0,d.jsx)(n.code,{children:"SwaggerUI"})," \u9875\u9762\u7684 ",(0,d.jsx)(n.code,{children:"HTML"})," \u5185\u5bb9\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"http server"})," \u542f\u52a8\u8def\u7531\u6253\u5370\u65f6\u4e0d\u518d\u6253\u5370\u5185\u7f6e\u7684\u4e2d\u95f4\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gclient"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d\u5728\u5f00\u542f\u670d\u52a1\u53d1\u73b0\u7684\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7684 ",(0,d.jsx)(n.code,{children:"http"})," \u8bf7\u6c42\u5747\u4f1a\u5f3a\u5236\u8d70\u670d\u52a1\u53d1\u73b0\u7684\u57df\u540d\u89e3\u6790\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"http client"})," \u7684\u76d1\u63a7\u6307\u6807\u5b9e\u73b0\uff0c\u9ed8\u8ba4\u5173\u95ed\u4e0d\u4f1a\u5f71\u54cd\u6027\u80fd\uff0c\u53ea\u6709\u5728\u5f00\u542f ",(0,d.jsx)(n.code,{children:"metrics"})," \u7279\u6027\u65f6\u624d\u4f1a\u81ea\u52a8\u5f00\u542f\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/web/http-client-metrics",children:"HTTPClient-\u76d1\u63a7\u6307\u6807"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gcron"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e\u5ffd\u7565\u7b26\u53f7 ",(0,d.jsx)(n.code,{children:"#"}),"\uff0c\u5bf9 ",(0,d.jsx)(n.code,{children:"cron pattern"})," \u4e2d\u7684 ",(0,d.jsx)(n.strong,{children:"\u79d2\u5b57\u6bb5"})," \u8fdb\u884c\u5360\u4f4d\uff0c\u8868\u793a\u5ffd\u7565\u79d2\u5b57\u6bb5\uff0c\u7528\u4e8e\u5c06 ",(0,d.jsx)(n.code,{children:"6"})," \u6bb5\u5f0f\u7684 ",(0,d.jsx)(n.code,{children:"cron pattern"})," \u8f6c\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"5"})," \u6bb5\u5f0f\u7684 ",(0,d.jsx)(n.code,{children:"linux crontab pattern"}),"\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/components/os-gcron-pattern",children:"\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d\u5728\u786e\u5b9a\u7684\u79d2\u7ea7\u4efb\u52a1\u573a\u666f\u4e2d\uff08\u4f8b\u5982 ",(0,d.jsx)(n.code,{children:"2\xa0* * * * *"}),"\uff09\uff0c\u5f53\u5e95\u5c42\u65f6\u95f4\u51fa\u73b0\u4e0d\u51c6\u786e\u65f6\u53ef\u80fd\u5f15\u53d1\u4e24\u6b21\u4efb\u52a1\u6267\u884c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gerror"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"gerror.HasCode"})," \u65b9\u6cd5\u9012\u5f52\u903b\u8f91\u5931\u6548\u7684\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"g"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"DumpJson"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5b9e\u73b0\u5bf9\u4efb\u610f\u53d8\u91cf\u6309\u7167 ",(0,d.jsx)(n.code,{children:"JSON"})," \u683c\u5f0f\u8fdb\u884c\u6253\u5370\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gcache"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d\u5927\u91cf\u521b\u5efa ",(0,d.jsx)(n.code,{children:"Cache"})," \u5bf9\u8c61\u5f15\u53d1\u7684 ",(0,d.jsx)(n.code,{children:"goroutine"})," \u8fc7\u591a\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gcmd"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"RunWithSpecificArgs"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",(0,d.jsx)(n.code,{children:"arguments"})," \u8fd0\u884c\u547d\u4ee4\u5bf9\u8c61\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u4fee\u590d\u90e8\u5206\u573a\u666f\u4e0b\u7531\u4e8e\u53c2\u6570\u7ed3\u6784\u4f53\u540d\u79f0\u548c\u7ed3\u6784\u4f53\u6807\u7b7e\u540d\u79f0\u51b2\u7a81\u5f15\u53d1\u7684\u53c2\u6570\u4e22\u5931\u95ee\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gfsnotify"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"gfsnotify"})," \u5bf9\u8c61\u5173\u95ed\u65f6\u53ef\u80fd\u5f15\u53d1\u7684 ",(0,d.jsx)(n.code,{children:"panic"})," \u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"glog"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"rotate"})," \u7279\u6027\u5bf9 ",(0,d.jsx)(n.code,{children:"gz"})," \u540e\u7f00\u65e5\u5fd7\u538b\u7f29\u6587\u4ef6\u7684\u91cd\u590d ",(0,d.jsx)(n.code,{children:"rotate"})," \u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gmetric"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"gmetric"})," \u7ec4\u4ef6\uff0c\u91c7\u7528\u4e86\u89e3\u8026\u8bbe\u8ba1\uff0c\u53ea\u6709\u63a5\u53e3\u5b9a\u4e49\u548c ",(0,d.jsx)(n.code,{children:"Noop"})," \u7684\u5b9e\u73b0\uff0c\u771f\u5b9e\u7684\u5b9e\u73b0\u5728\u793e\u533a\u7ec4\u4ef6\u4e2d\u3002\u53ea\u6709\u5f15\u5165\u5177\u4f53\u7684\u5b9e\u73b0\u624d\u4f1a\u771f\u5b9e\u5f00\u542f ",(0,d.jsx)(n.code,{children:"metric"})," \u7279\u6027\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/obs/metrics",children:"\u670d\u52a1\u76d1\u63a7\u544a\u8b66"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gproc"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d\u8fdb\u7a0b\u53c2\u6570\u89e3\u6790\u5728 ",(0,d.jsx)(n.code,{children:"windows"})," \u4e0b\u53ef\u80fd\u5931\u8d25\u7684\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Signal"})," \u4fe1\u53f7\u76d1\u542c\u5b9e\u73b0\uff0c\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u589e\u52a0\u4fe1\u53f7\u76d1\u542c\u5904\u7406\u65b9\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gview"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d\u7531\u4e8e ",(0,d.jsx)(n.code,{children:"os.Getwd"})," \u65b9\u6cd5\u6267\u884c\u5931\u8d25\u5f15\u8d77\u7684\u5065\u58ee\u6027\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gconv"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"json.RawMessage"})," \u652f\u6301\u63a5\u53d7 ",(0,d.jsx)(n.code,{children:"slice"})," \u7c7b\u578b\u7684\u53c2\u6570\u8f6c\u6362\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"MapDeep"})," \u5185\u90e8\u8f6c\u6362\u7f3a\u5931 ",(0,d.jsx)(n.code,{children:"Deep"})," \u53c2\u6570\u5f15\u53d1\u7684\u9012\u5f52\u8f6c\u6362\u5931\u8d25\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"MapRange"})," \u6539\u8fdb\u5185\u90e8 ",(0,d.jsx)(n.code,{children:"Map"})," \u904d\u5386\u903b\u8f91\uff0c\u63d0\u9ad8\u6267\u884c\u6027\u80fd\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u793e\u533a\u7ec4\u4ef6",children:"\u793e\u533a\u7ec4\u4ef6"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u793e\u533a ",(0,d.jsx)(n.code,{children:"contrib/drivers"})," \u6570\u636e\u5e93\u7ec4\u4ef6\u7684\u6539\u8fdb\uff1a"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"contrib/drivers/dm"})," \u7ec4\u4ef6\u65b0\u589e\u5bf9 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u7684\u652f\u6301\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"contrib/drivers/mssql"})," \u7ec4\u4ef6\u65b0\u589e\u5bf9 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u7684\u652f\u6301\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"contrib/drivers/oracle"})," \u7ec4\u4ef6\u65b0\u589e\u5bf9 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u7684\u652f\u6301\uff0c\u5e76\u4fee\u590d\u5199\u5165\u53c2\u6570\u4e0d\u652f\u6301 ",(0,d.jsx)(n.code,{children:"gdb.Raw"})," \u7c7b\u578b\u7684\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"contrib/drivers/pgsql"})," \u7ec4\u4ef6\u65b0\u589e\u5bf9 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u7684\u652f\u6301\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"contrib/drivers/sqlite"})," \u7ec4\u4ef6\u65b0\u589e\u5bf9 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u7684\u652f\u6301\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"contrib/drivers/sqlitecgo"})," \u7ec4\u4ef6\u65b0\u589e\u5bf9 ",(0,d.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u7684\u652f\u6301\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"contrib/metric/otelmetric"})," \u7ec4\u4ef6\uff0c\u5b9e\u73b0\u4e86\u5bf9 ",(0,d.jsx)(n.code,{children:"OpenTelemetry Metric"})," \u7684\u652f\u6301\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/obs/metrics",children:"\u670d\u52a1\u76d1\u63a7\u544a\u8b66"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"contrib/nosql/redis"})," \u7ec4\u4ef6\uff1a"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e ",(0,d.jsx)(n.code,{children:"SentinelUsername"})," \u53ca ",(0,d.jsx)(n.code,{children:"SentinelPassword"})," \u53c2\u6570\u914d\u7f6e\uff0c\u4ee5\u6269\u5c55\u5bf9 ",(0,d.jsx)(n.code,{children:"Redis Sentinel"})," \u6a21\u5f0f\u7684\u652f\u6301\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/components/contrib-nosql-redis-config",children:"Redis-\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"Redis"})," \u63a5\u53e3\u5b9e\u73b0\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u7075\u6d3b\u81ea\u5b9a\u4e49\u6269\u5c55\u3001\u8986\u76d6\u793e\u533a\u7ec4\u4ef6\u5bf9\u8c61 ",(0,d.jsx)(n.code,{children:"redis.Redis"})," \u7c7b\u578b\u7684\u5b9e\u73b0\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/components/contrib-nosql-redis-interface",children:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"contrib/registry/etcd"})," \u7ec4\u4ef6\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u914d\u7f6e ",(0,d.jsx)(n.code,{children:"etcd"})," \u94fe\u63a5\u7684\u6821\u9a8c\u4fe1\u606f\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"contrib/rpc/grpcx"})," \u7ec4\u4ef6\uff1a"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5bf9\u542f\u7528 ",(0,d.jsx)(n.code,{children:"tracing"})," \u7279\u6027\u65f6\uff0c\u5b89\u5168\u622a\u65ad\u8bf7\u6c42\u5185\u5bb9\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65b0\u589e\u5bf9 ",(0,d.jsx)(n.code,{children:"logger"})," \u914d\u7f6e\u9879\u7684\u652f\u6301\uff0c\u5141\u8bb8\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"logger"})," \u914d\u7f6e\u9879\u914d\u7f6e ",(0,d.jsx)(n.code,{children:"grpc server"})," \u7684\u65e5\u5fd7\u5bf9\u8c61\uff1a ",(0,d.jsx)(n.a,{href:"/en/docs/micro-service/config",children:"\u670d\u52a1\u7aef\u914d\u7f6e"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"contrib/trace/otlphttp"})," \u53ca ",(0,d.jsx)(n.code,{children:"contrib/trace/otlpgrpc"})," \u7ec4\u4ef6\uff0c\u4fee\u590d\u5728\u77ed\u8fdb\u7a0b\u573a\u666f\u4e0b\u6b63\u5e38 ",(0,d.jsx)(n.code,{children:"ShutDown"})," \u4ecd\u53ef\u80fd\u4f1a\u51fa\u73b0\u7684 ",(0,d.jsx)(n.code,{children:"trace"})," \u6570\u636e\u4e22\u5931\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5f00\u53d1\u5de5\u5177",children:"\u5f00\u53d1\u5de5\u5177"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"gen dao"})," \u751f\u6210\u7684 ",(0,d.jsx)(n.code,{children:"entity"})," \u6e90\u6587\u4ef6\uff0c\u589e\u52a0 ",(0,d.jsx)(n.code,{children:"orm"})," \u6807\u7b7e\uff0c\u4ee5\u63d0\u9ad8\u6570\u636e\u5e93\u67e5\u8be2\u7ed3\u679c\u8f6c\u6362\u5230 ",(0,d.jsx)(n.code,{children:"entity"})," \u5bf9\u8c61\u7684\u6548\u7387\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"gen service"})," \u547d\u4ee4\uff0c\u4fee\u590d\u751f\u6210\u7684\u6e90\u7801\u6587\u4ef6\u4e2d\uff0c\u65b9\u6cd5\u987a\u5e8f\u4e0d\u4e00\u81f4\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"build"})," \u547d\u4ee4\uff0c\u5c06\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5b58\u653e\u76ee\u5f55 ",(0,d.jsx)(n.code,{children:"path"})," \u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u4ece ",(0,d.jsx)(n.code,{children:"./temp"})," \u6539\u4e3a\u4e86 ",(0,d.jsx)(n.code,{children:"."})," \u5373\u5f53\u524d\u76ee\u5f55\uff0c\u4ee5\u89e3\u51b3\u8be5\u53c2\u6570\u81ea\u5b9a\u4e49\u5931\u6548\u7684\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,d.jsx)(n.code,{children:"init"})," \u547d\u4ee4\uff0c\u65b0\u589e ",(0,d.jsx)(n.code,{children:"-module/g"})," \u53c2\u6570\uff0c\u7528\u4e8e\u5728\u521d\u59cb\u5316\u9879\u76ee\u65f6\u663e\u5f0f\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"go module"})," \u540d\u79f0\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"gen dao"})," \u5728\u591a\u4e2a\u6570\u636e\u5e93\u751f\u6210\u914d\u7f6e\u4e0b\uff0c\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"clear"})," \u53c2\u6570\u65f6\u5220\u9664\u5df2\u751f\u6210\u7684 ",(0,d.jsx)(n.code,{children:"dao"})," \u6e90\u6587\u4ef6\u7684\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"gen pbentity"})," \u547d\u4ee4\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",(0,d.jsx)(n.code,{children:"jsonCase"})," \u53c2\u6570\u65e0\u6548\u7684\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4fee\u590d ",(0,d.jsx)(n.code,{children:"run"})," \u547d\u4ee4\u7684 ",(0,d.jsx)(n.code,{children:"-w"})," \u6307\u5b9a\u76d1\u542c\u76ee\u5f55\u53c2\u6570\u5931\u6548\u7684\u95ee\u9898\u3002"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},580621:(e,n,c)=>{c.d(n,{A:()=>s});const s=c.p+"assets/images/950e1af6550f59942ab68e09ffb63c72-5b310816bdfa35b80a266f53ae864458.png"},28453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>l});var s=c(296540);const d={},i=s.createContext(d);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);