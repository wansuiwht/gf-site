"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[43498],{690405:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f","title":"\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f","description":"GoFrame\u6846\u67b6\u5bf9\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406\u6a21\u5f0f\u7684\u652f\u6301\uff0c\u8be6\u7ec6\u63cf\u8ff0\u5982\u4f55\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u8fdb\u884c\u4ee3\u7801\u5f00\u53d1\u548c\u670d\u52a1\u534f\u4f5c\u3002\u8ba8\u8bba\u4e86\u5355\u4ed3\u7ba1\u7406\u7684\u4f18\u7f3a\u70b9\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u5212\u5206\u4ed3\u5e93\u804c\u8d23\u3001\u7ba1\u7406\u4ee3\u7801\u53ef\u89c1\u6027\u3001\u7edf\u4e00\u955c\u50cf\u4ed3\u5e93\u7b49\u65b9\u6cd5\u4f18\u5316\u5fae\u670d\u52a1\u534f\u4f5c\u3002\u540c\u65f6\uff0c\u63d0\u4f9b\u4e86\u76f8\u5173\u7684\u6846\u67b6\u6307\u4ee4\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u90e8\u7f72\u5fae\u670d\u52a1\u9879\u76ee\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1","slug":"/docs/design/project-mono-repo","permalink":"/docs/design/project-mono-repo","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/design/project-mono-repo","title":"\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","\u5fae\u670d\u52a1","\u5355\u4ed3\u7ba1\u7406","\u4ee3\u7801\u5f00\u53d1","\u6743\u9650\u7ba1\u7406","\u670d\u52a1\u534f\u4f5c","\u5927\u4ed3\u7ba1\u7406","\u4ee3\u7801\u4ed3\u5e93","\u5bb9\u5668\u5316\u652f\u6301","\u6846\u67b6\u6307\u4ee4"],"description":"GoFrame\u6846\u67b6\u5bf9\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406\u6a21\u5f0f\u7684\u652f\u6301\uff0c\u8be6\u7ec6\u63cf\u8ff0\u5982\u4f55\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u8fdb\u884c\u4ee3\u7801\u5f00\u53d1\u548c\u670d\u52a1\u534f\u4f5c\u3002\u8ba8\u8bba\u4e86\u5355\u4ed3\u7ba1\u7406\u7684\u4f18\u7f3a\u70b9\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u5212\u5206\u4ed3\u5e93\u804c\u8d23\u3001\u7ba1\u7406\u4ee3\u7801\u53ef\u89c1\u6027\u3001\u7edf\u4e00\u955c\u50cf\u4ed3\u5e93\u7b49\u65b9\u6cd5\u4f18\u5316\u5fae\u670d\u52a1\u534f\u4f5c\u3002\u540c\u65f6\uff0c\u63d0\u4f9b\u4e86\u76f8\u5173\u7684\u6846\u67b6\u6307\u4ee4\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u90e8\u7f72\u5fae\u670d\u52a1\u9879\u76ee\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b","permalink":"/docs/design/project-models"},"next":{"title":"\u5168\u94fe\u8def\u8ddf\u8e2a\u8bbe\u8ba1","permalink":"/docs/design/tracing"}}');var i=s(474848),c=s(28453);const l={slug:"/docs/design/project-mono-repo",title:"\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f",sidebar_position:5,hide_title:!0,keywords:["GoFrame","\u5fae\u670d\u52a1","\u5355\u4ed3\u7ba1\u7406","\u4ee3\u7801\u5f00\u53d1","\u6743\u9650\u7ba1\u7406","\u670d\u52a1\u534f\u4f5c","\u5927\u4ed3\u7ba1\u7406","\u4ee3\u7801\u4ed3\u5e93","\u5bb9\u5668\u5316\u652f\u6301","\u6846\u67b6\u6307\u4ee4"],description:"GoFrame\u6846\u67b6\u5bf9\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406\u6a21\u5f0f\u7684\u652f\u6301\uff0c\u8be6\u7ec6\u63cf\u8ff0\u5982\u4f55\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u8fdb\u884c\u4ee3\u7801\u5f00\u53d1\u548c\u670d\u52a1\u534f\u4f5c\u3002\u8ba8\u8bba\u4e86\u5355\u4ed3\u7ba1\u7406\u7684\u4f18\u7f3a\u70b9\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u5212\u5206\u4ed3\u5e93\u804c\u8d23\u3001\u7ba1\u7406\u4ee3\u7801\u53ef\u89c1\u6027\u3001\u7edf\u4e00\u955c\u50cf\u4ed3\u5e93\u7b49\u65b9\u6cd5\u4f18\u5316\u5fae\u670d\u52a1\u534f\u4f5c\u3002\u540c\u65f6\uff0c\u63d0\u4f9b\u4e86\u76f8\u5173\u7684\u6846\u67b6\u6307\u4ee4\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u90e8\u7f72\u5fae\u670d\u52a1\u9879\u76ee\u3002"},r=void 0,o={},h=[{value:"\u4e00\u3001\u524d\u7f6e\u9605\u8bfb",id:"\u4e00\u524d\u7f6e\u9605\u8bfb",level:2},{value:"\u4e8c\u3001\u5927\u4ed3\u7ba1\u7406",id:"\u4e8c\u5927\u4ed3\u7ba1\u7406",level:2},{value:"1\u3001\u4ed3\u5e93\u804c\u8d23\u8303\u56f4\u7684\u5212\u5206",id:"1\u4ed3\u5e93\u804c\u8d23\u8303\u56f4\u7684\u5212\u5206",level:3},{value:"1\uff09\u5f53\u56e2\u961f\u5185\u90e8\u7684\u534f\u4f5c\u9891\u7387\u9ad8\u4e8e\u56e2\u961f\u95f4\u534f\u4f5c\u9891\u7387\u65f6",id:"1\u5f53\u56e2\u961f\u5185\u90e8\u7684\u534f\u4f5c\u9891\u7387\u9ad8\u4e8e\u56e2\u961f\u95f4\u534f\u4f5c\u9891\u7387\u65f6",level:4},{value:"2\uff09\u5f53\u591a\u4e2a\u56e2\u961f\u4e4b\u95f4\u7684\u591a\u4e2a\u670d\u52a1\u534f\u4f5c\u9891\u7387\u975e\u5e38\u9ad8\u65f6",id:"2\u5f53\u591a\u4e2a\u56e2\u961f\u4e4b\u95f4\u7684\u591a\u4e2a\u670d\u52a1\u534f\u4f5c\u9891\u7387\u975e\u5e38\u9ad8\u65f6",level:4},{value:"2\u3001\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u95f4\u5982\u4f55\u534f\u4f5c",id:"2\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u95f4\u5982\u4f55\u534f\u4f5c",level:3},{value:"1\uff09\u4ee3\u7801\u53ef\u89c1\u6027\u7684\u7ba1\u7406",id:"1\u4ee3\u7801\u53ef\u89c1\u6027\u7684\u7ba1\u7406",level:4},{value:"2\uff09\u670d\u52a1\u95f4\u63a5\u53e3\u7684\u8c03\u7528",id:"2\u670d\u52a1\u95f4\u63a5\u53e3\u7684\u8c03\u7528",level:4},{value:"3\uff09\u517c\u5bb9\u6027\u7684\u4e25\u683c\u8981\u6c42",id:"3\u517c\u5bb9\u6027\u7684\u4e25\u683c\u8981\u6c42",level:4},{value:"3\u3001\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u5bb9\u5668\u5316\u652f\u6301",id:"3\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u5bb9\u5668\u5316\u652f\u6301",level:3},{value:"1\uff09\u955c\u50cf\u4ed3\u5e93\u7684\u7edf\u4e00\u7ba1\u7406",id:"1\u955c\u50cf\u4ed3\u5e93\u7684\u7edf\u4e00\u7ba1\u7406",level:4},{value:"2\uff09\u7edf\u4e00\u7f16\u8bd1\u3001\u63d0\u4ea4\u6307\u4ee4",id:"2\u7edf\u4e00\u7f16\u8bd1\u63d0\u4ea4\u6307\u4ee4",level:4},{value:"3\uff09\u7edf\u4e00\u90e8\u7f72\u3001\u8c03\u8bd5\u6307\u4ee4",id:"3\u7edf\u4e00\u90e8\u7f72\u8c03\u8bd5\u6307\u4ee4",level:4},{value:"4\u3001\u5927\u4ed3\u4e0b\u7684\u6846\u67b6\u5176\u4ed6\u6307\u4ee4",id:"4\u5927\u4ed3\u4e0b\u7684\u6846\u67b6\u5176\u4ed6\u6307\u4ee4",level:3},{value:"1\uff09 <code>make cli</code>",id:"1-make-cli",level:4},{value:"2\uff09 <code>make up</code>",id:"2-make-up",level:4},{value:"3\uff09 <code>make dao</code>",id:"3-make-dao",level:4},{value:"4\uff09 <code>make service</code>",id:"4-make-service",level:4},{value:"5\uff09 <code>make enums</code>",id:"5-make-enums",level:4},{value:"6\uff09\u66f4\u591a\u6307\u4ee4",id:"6\u66f4\u591a\u6307\u4ee4",level:4}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u672c\u6587\u65e8\u5728\u4ecb\u7ecd ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u5bf9\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u6a21\u5f0f\u7684\u652f\u6301\uff0c\u6307\u5bfc\u5f00\u53d1\u8005\u5982\u4f55\u5728\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u6a21\u5f0f\u4e0b\u8fdb\u884c\u4ee3\u7801\u5f00\u53d1\u548c\u5206\u5de5\u534f\u4f5c\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e00\u524d\u7f6e\u9605\u8bfb",children:"\u4e00\u3001\u524d\u7f6e\u9605\u8bfb"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5f00\u59cb\u672c\u7ae0\u8282\u4e4b\u524d\uff0c\u5efa\u8bae\u5148\u4e86\u89e3\u4e00\u4e0b\u5355\u4f53\u4ed3\u5e93( ",(0,i.jsx)(n.code,{children:"monolith"}),")\u3001\u5fae\u670d\u52a1-\u591a\u4ed3\u7ba1\u7406( ",(0,i.jsx)(n.code,{children:"multi-repo"}),")\u3001\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u7684\u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u5404\u81ea\u7684\u4f18\u7f3a\u70b9\uff1a ",(0,i.jsx)(n.a,{href:"https://wiki.goframe.org/pages/viewpage.action?pageId=87246750",children:"\u5355\u4f53\u4ed3\u5e93\u4e0e\u591a\u4ed3\u5e93\u90fd\u6709\u54ea\u4e9b\u4f18\u52bf\u52a3\u52bf\uff0c\u5fae\u670d\u52a1\u9009\u62e9\u54ea\u79cd\u65b9\u6848\u6bd4\u8f83\u597d\uff1f"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee3\u7801\u4ed3\u5e93\u7684\u7ba1\u7406\u7ea6\u675f\u5e76\u4e0d\u5c5e\u4e8e\u6846\u67b6\u804c\u8d23\u7684\u4e00\u90e8\u5206\uff0c ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u811a\u624b\u67b6\u672c\u8eab\u4e5f\u652f\u6301\u4e24\u79cd\u4ed3\u5e93\u9879\u76ee\u521d\u59cb\u5316\u7684\u547d\u4ee4 - \u5355\u4ed3\u5e93( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u3001\u591a\u4ed3\u5e93( ",(0,i.jsx)(n.code,{children:"monolith/multi-repo"}),")\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u56e2\u961f\u7684\u9700\u6c42\u3002\u5177\u4f53\u9009\u62e9\u54ea\u79cd\u4ee3\u7801\u4ed3\u5e93\u7ba1\u7406\u6a21\u5f0f\u7531\u5f00\u53d1\u56e2\u961f\u6839\u636e\u81ea\u8eab\u9700\u6c42\u3001\u573a\u666f\u3001\u4e60\u60ef\u6765\u81ea\u884c\u9009\u62e9\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u4e3a\u7b80\u5316\u548c\u6e05\u6670\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u7684\u63cf\u8ff0\uff0c\u540e\u7eed\u6211\u4eec\u7edf\u4e00\u4ee5 ",(0,i.jsx)(n.strong,{children:"\u5927\u4ed3\u7ba1\u7406"})," \u6765\u6307\u4ee3\u5fae\u670d\u52a1-\u5355\u4ed3\u7ba1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u6a21\u5f0f\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u4e8c\u5927\u4ed3\u7ba1\u7406",children:"\u4e8c\u3001\u5927\u4ed3\u7ba1\u7406"}),"\n",(0,i.jsx)(n.h3,{id:"1\u4ed3\u5e93\u804c\u8d23\u8303\u56f4\u7684\u5212\u5206",children:"1\u3001\u4ed3\u5e93\u804c\u8d23\u8303\u56f4\u7684\u5212\u5206"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u524d\u7f6e\u9605\u8bfb\u7684\u6587\u7ae0\u5927\u5bb6\u4e5f\u77e5\u9053\uff0c\u8fd9\u4e2a\u4e16\u754c\u4e0a\u6ca1\u6709\u94f6\u5f39\uff0c\u5927\u4ed3\u6709\u4f18\u70b9\u4e5f\u6709\u7f3a\u70b9\uff0c\u5176\u4e2d\u6700\u660e\u663e\u7684\u7f3a\u70b9\u5c31\u662f ",(0,i.jsx)(n.strong,{children:"\u6743\u9650\u7684\u7ba1\u63a7"})," \u4ee5\u53ca ",(0,i.jsx)(n.strong,{children:"\u4ed3\u5e93\u7684\u81a8\u80c0"}),"\u3002\u4e3a\u4e86\u66f4\u597d\u5730\u7ba1\u7406\u4ee3\u7801\u4ed3\u5e93\uff0c\u907f\u514d\u8fd9\u4e24\u70b9\u7f3a\u9677\u5e26\u6765\u66f4\u9ad8\u7684\u6210\u672c\uff0c\u6211\u4eec\u5efa\u8bae\u5c3d\u53ef\u80fd\u51cf\u5c0f\u5927\u4ed3\u4e2d\u7684\u5fae\u670d\u52a1\u89c4\u6a21\u3002\u81f3\u4e8e\u4ed3\u5e93\u4e2d\u9700\u8981\u7ef4\u62a4\u54ea\u4e9b\u5fae\u670d\u52a1\uff0c\u9700\u8981\u6839\u636e\u670d\u52a1\u4e4b\u95f4\u7684\u534f\u4f5c\u9891\u7387\u6765\u51b3\u5b9a\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"1\u5f53\u56e2\u961f\u5185\u90e8\u7684\u534f\u4f5c\u9891\u7387\u9ad8\u4e8e\u56e2\u961f\u95f4\u534f\u4f5c\u9891\u7387\u65f6",children:"1\uff09\u5f53\u56e2\u961f\u5185\u90e8\u7684\u534f\u4f5c\u9891\u7387\u9ad8\u4e8e\u56e2\u961f\u95f4\u534f\u4f5c\u9891\u7387\u65f6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5178\u578b\u7684\u573a\u666f\u662f\u9488\u5bf9 ",(0,i.jsx)(n.strong,{children:"\u975e\u5fae\u670d\u52a1\u5316\u67b6\u6784\u7684\u4ea7\u54c1"}),"\uff0c\u53ef\u4ee5\u5c06\u670d\u52a1\u7ba1\u7406\u7684\u6743\u9650\u804c\u8d23\u6309\u7167\u5404\u4e2a\u4e1a\u52a1\u56e2\u961f\u8fdb\u884c\u5212\u5206\u3002\u8fd9\u6837\u56e2\u961f\u5185\u90e8\u53ef\u4ee5\u5c06\u5206\u6563\u7684\u82e5\u5e72\u670d\u52a1\u901a\u8fc7\u7edf\u4e00\u7684\u4ee3\u7801\u4ed3\u5e93\u7ef4\u62a4\u8d77\u6765\uff0c\u5145\u5206\u5229\u7528\u5927\u4ed3\u7ba1\u7406\u7684\u4f18\u52bf\uff0c\u63d0\u9ad8\u56e2\u961f\u5185\u90e8\u7684\u5f00\u53d1\u548c\u7ef4\u62a4\u6548\u7387\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53e6\u5916\u4e00\u79cd\u573a\u666f\u662f\u4e1a\u52a1\u7684\u5fae\u670d\u52a1\u6570\u91cf\u672c\u8eab\u4e0d\u591a\uff08\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"50"})," \u4e2a\u4ee5\u5185\uff09\uff0c\u8fd9\u4e2a\u65f6\u5019\u4e5f\u53ef\u4ee5\u5408\u5e76\u6210\u4e00\u4e2a\u5927\u4ed3\u8fdb\u884c\u7ba1\u7406\u3002\u9700\u8981\u6ce8\u610f\uff0c\u5927\u4ed3\u7ba1\u7406\u7684\u670d\u52a1\u6570\u91cf\u5e76\u4e0d\u662f\u7531\u7ec4\u7ec7\u67b6\u6784\u4e2d\u7684\u4eba\u5458\u6570\u91cf\u6765\u51b3\u5b9a\u7684\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"2\u5f53\u591a\u4e2a\u56e2\u961f\u4e4b\u95f4\u7684\u591a\u4e2a\u670d\u52a1\u534f\u4f5c\u9891\u7387\u975e\u5e38\u9ad8\u65f6",children:"2\uff09\u5f53\u591a\u4e2a\u56e2\u961f\u4e4b\u95f4\u7684\u591a\u4e2a\u670d\u52a1\u534f\u4f5c\u9891\u7387\u975e\u5e38\u9ad8\u65f6"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u4e1a\u52a1\u7684\u5fae\u670d\u52a1\u6570\u91cf\u6bd4\u8f83\u591a\uff0c\u5e76\u4e14\u5404\u4e2a\u670d\u52a1\u4e4b\u95f4\u7684\u4ea4\u4e92\u534f\u4f5c\u6bd4\u8f83\u9891\u7e41\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u5c06\u8fd9\u4e9b\u670d\u52a1\u5408\u5e76\u5230\u5927\u4ed3\u4e2d\u8fdb\u884c\u7ba1\u7406\uff0c\u53ef\u4ee5\u6781\u5927\u63d0\u9ad8\u534f\u4f5c\u6548\u7387\u3002\u8fd9\u79cd\u60c5\u51b5\u5927\u90e8\u5206\u51fa\u73b0\u5728\u5fae\u670d\u52a1\u5728\u540c\u4e00\u4ea7\u54c1\u7ebf\u3001\u8de8\u56e2\u961f\u4f46\u4e0d\u8de8\u4e2d\u5fc3\u6216\u90e8\u95e8\u7684\u60c5\u51b5\u4e0b\u3002\u4f46\u7531\u4e8e\u6d89\u53ca\u8de8\u591a\u4e2a\u56e2\u961f\u7684\u534f\u4f5c\uff0c\u8fd9\u5bf9\u4eba\u5458\u7684\u7ec4\u7ec7\u67b6\u6784\u7ba1\u7406\u6709\u4e00\u5b9a\u8981\u6c42\uff0c\u9700\u8981\u7531\u4e00\u5b9a\u6743\u9650\u7684\u7ba1\u7406\u8005\u6765\u63a8\u52a8\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u5fae\u670d\u52a1\u7684\u7ba1\u7406\u5e76\u4e0d\u4ec5\u662f\u4ee3\u7801\u7684\u7ec4\u7ec7\u7ba1\u7406\uff0c\u66f4\u662f\u4eba\u5458\u7ec4\u7ec7\u67b6\u6784\u7684\u7ba1\u7406\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"2\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u95f4\u5982\u4f55\u534f\u4f5c",children:"2\u3001\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u95f4\u5982\u4f55\u534f\u4f5c"}),"\n",(0,i.jsx)(n.h4,{id:"1\u4ee3\u7801\u53ef\u89c1\u6027\u7684\u7ba1\u7406",children:"1\uff09\u4ee3\u7801\u53ef\u89c1\u6027\u7684\u7ba1\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u670d\u52a1\u4e0e\u670d\u52a1\u4e4b\u95f4\u80fd\u591f\u66b4\u9732\u7684\u4ec5\u4ec5\u662f\u63a5\u53e3\uff0c\u4e5f\u5c31\u662f ",(0,i.jsx)(n.code,{children:"API"}),"\u3002\u5404\u4e2a\u670d\u52a1\u5185\u90e8\u7684\u903b\u8f91\u5e94\u5f53\u5bf9\u5916\u4e0d\u53ef\u89c1\u3002\u5728 ",(0,i.jsx)(n.code,{children:"Golang"})," \u91cc\u9762\u6709\u5f88\u597d\u7684 ",(0,i.jsx)(n.code,{children:"internal"})," \u7279\u6027\uff0c\u6b63\u597d\u53ef\u4ee5\u6ee1\u8db3\u53ef\u89c1\u6027\u7ba1\u7406\u7684\u8981\u6c42\u3002\u5982\u4e0b\u56fe\u5927\u4ed3\u4ee3\u7801\u793a\u4f8b\uff0c\u5728 ",(0,i.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u4e0b\u7ba1\u7406\u4e86\u82e5\u5e72\u7684\u670d\u52a1\uff0c\u6bcf\u4e00\u4e2a\u670d\u52a1\u66b4\u9732\u4e86\u81ea\u8eab\u7684 ",(0,i.jsx)(n.code,{children:"api"})," \u76ee\u5f55\uff0c\u4f9b\u5176\u4ed6\u670d\u52a1\u76f4\u63a5\u5f15\u7528\uff08\u63d0\u9ad8\u670d\u52a1\u95f4\u534f\u4f5c\u6548\u7387\uff09\uff0c\u4f46\u5185\u90e8\u7684\u4e1a\u52a1\u903b\u8f91\u5305\u542b\u5728\u4e86 ",(0,i.jsx)(n.code,{children:"internal"})," \u76ee\u5f55\u4e0b\uff0c\u5bf9\u5176\u4ed6\u670d\u52a1\u4e0d\u53ef\u89c1\uff08\u4e5f\u5c31\u65e0\u6cd5\u5f15\u7528\uff09\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(706208).A+"",width:"1014",height:"1832"})}),"\n",(0,i.jsx)(n.h4,{id:"2\u670d\u52a1\u95f4\u63a5\u53e3\u7684\u8c03\u7528",children:"2\uff09\u670d\u52a1\u95f4\u63a5\u53e3\u7684\u8c03\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u534f\u8bae\u6587\u4ef6\u5355\u72ec\u7ef4\u62a4\u5230\u5404\u81ea\u670d\u52a1\u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u6d89\u53ca\u5230\u534f\u8bae\u6587\u4ef6\u7f16\u8bd1\uff0c\u90a3\u4e48\u7f16\u8bd1\u7684\u6587\u4ef6\u4e5f\u5b58\u653e\u5230\u81ea\u8eab\u7684\u670d\u52a1\u76ee\u5f55\u4e0b\u3002\u8c03\u7528\u7aef\u4e0d\u9700\u8981\u5355\u72ec\u518d\u5bf9\u76ee\u6807\u670d\u52a1\u7684\u534f\u8bae\u6587\u4ef6\u91cd\u65b0\u7f16\u8bd1\u7ba1\u7406\u3002\u4ee5 ",(0,i.jsx)(n.code,{children:"HTTP API"})," \u7684\u63a5\u53e3\u5b9a\u4e49\u4e3a\u4f8b\uff0c\u8c03\u7528\u7aef\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528\u76ee\u6807\u7aef\u670d\u52a1\u7684 ",(0,i.jsx)(n.code,{children:"API"})," \u63a5\u53e3\u5b9a\u4e49\uff1a\uff08\u4ee5\u4e0b\u622a\u56fe\u4e2d ",(0,i.jsx)(n.code,{children:"khaos-shark"})," \u4e3a\u8c03\u7528\u7aef\uff0c ",(0,i.jsx)(n.code,{children:"khaos-oss"})," \u4e3a\u670d\u52a1\u7aef\uff09"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(136061).A+"",width:"3072",height:"1750"})}),"\n",(0,i.jsxs)(n.p,{children:["\u9488\u5bf9\u4e8e\u5fae\u670d\u52a1\u95f4\u7684 ",(0,i.jsx)(n.code,{children:"RPC"})," \u63a5\u53e3\u8c03\u7528\u4e5f\u662f\u540c\u6837\u7684\u9053\u7406\uff1a\uff08\u4ee5\u4e0b\u622a\u56fe\u4e2d ",(0,i.jsx)(n.code,{children:"user-api"})," \u4e3a\u8c03\u7528\u7aef\uff0c ",(0,i.jsx)(n.code,{children:"user-rpc"})," \u4e3a\u670d\u52a1\u7aef\uff09"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(982013).A+"",width:"3840",height:"2110"})}),"\n",(0,i.jsx)(n.h4,{id:"3\u517c\u5bb9\u6027\u7684\u4e25\u683c\u8981\u6c42",children:"3\uff09\u517c\u5bb9\u6027\u7684\u4e25\u683c\u8981\u6c42"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u4ee5\u4e0a\u4ecb\u7ecd\u53ef\u4ee5\u53d1\u73b0\uff0c\u901a\u8fc7\u5927\u4ed3\u7684\u4ee3\u7801\u7ba1\u7406\uff0c\u4f7f\u5f97\u5927\u4ed3\u4e2d\u6240\u6709\u670d\u52a1\u7684\u7248\u672c\u4fdd\u6301\u4e00\u81f4\uff0c\u6bcf\u5f53\u4f9d\u8d56\u7684\u670d\u52a1 ",(0,i.jsx)(n.code,{children:"API"})," \u66f4\u65b0\u65f6\uff0c\u8c03\u7528\u7aef\u670d\u52a1\uff08\u4f7f\u7528\u7684 ",(0,i.jsx)(n.code,{children:"SDK"}),"\uff09\u4e5f\u5c06\u81ea\u52a8\u5f97\u5230\u66f4\u65b0\u3002\u8fd9\u5c31\u8981\u6c42\u4ed3\u5e93\u4e2d\u6240\u6709\u670d\u52a1\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c ",(0,i.jsx)(n.strong,{children:"\u5fc5\u987b\u4e25\u683c\u4fdd\u8bc1\u517c\u5bb9\u6027"}),"\uff0c\u5426\u5219\u63a5\u53e3\u95f4\u8c03\u7528\u5c06\u4f1a\u51fa\u73b0\u95ee\u9898\uff1a\u8f7b\u8005\u8c03\u7528\u7aef\u670d\u52a1\u7f16\u8bd1\u5931\u8d25\u9700\u8981\u8c03\u6574\u4ee3\u7801\uff0c\u91cd\u8005\u7f16\u8bd1\u6210\u529f\u4f46\u8fd0\u884c\u65f6\u62a5\u9519\u5f71\u54cd\u4e1a\u52a1\u3002\u6b64\u5916\uff0c\u516c\u5171\u5f15\u7528\u7684\u5927\u4ed3\u57fa\u7840\u7ec4\u4ef6\u4e5f\u4f1a\u53d7\u5230\u517c\u5bb9\u6027\u7684\u5f71\u54cd\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4fdd\u8bc1\u517c\u5bb9\u6027\u4ee3\u7801\u8bbe\u8ba1\u7684\u51e0\u4e2a\u8981\u70b9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u4e0d\u968f\u610f\u5220\u51cf\u63a5\u53e3\u53c2\u6570\uff0c\u4fee\u6539\u53c2\u6570\u540d\u79f0\u3001\u53c2\u6570\u7c7b\u578b\u3001\u53c2\u6570\u6821\u9a8c\u903b\u8f91\u3002"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["\u5f53\u63a5\u53e3\u5fc5\u987b\u8981\u8fdb\u884c\u975e\u517c\u5bb9\u66f4\u65b0\u65f6\uff0c\u5e94\u5f53\u4f7f\u7528\u63a5\u53e3\u7248\u672c\u53f7\u6765\u7ba1\u7406\uff08\u5982 ",(0,i.jsx)(n.code,{children:"v1, v2, v3..."}),"\uff09\u3002"]})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u516c\u5171\u7ec4\u4ef6\u5c3d\u91cf\u4f7f\u7528\u7a33\u5b9a\u6210\u719f\u7684\u5916\u90e8\u7ec4\u4ef6\uff0c\u5982\u679c\u662f\u5fc5\u8981\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u9700\u8981\u4fdd\u8bc1\u5bf9\u5916\u66b4\u9732\u65b9\u6cd5\u7684\u517c\u5bb9\u6027\u3002"})," ",(0,i.jsxs)(n.em,{children:["\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u4e00\u4e9b\u5f88\u57fa\u7840\u7684\u529f\u80fd\uff0c\u6bd4\u5982\u8bf4 ",(0,i.jsx)(n.code,{children:"json.Marshal&Unmarshal"}),"\uff0c\u6709\u7684\u4eba\u5c01\u88c5\u4e86\u4e00\u4e9b\u5e93/\u51fd\u6570\uff0c\u4f46\u662f\u540e\u9762\u7684\u4eba\u53ef\u80fd\u90fd\u4e0d\u77e5\u9053\u8fd9\u4e2a\u5e93\uff0c\u4e5f\u4e0d\u592a\u4fe1\u4efb\u8fd9\u4e2a\u51fd\u6570\uff0c\u5c31\u4f1a\u53c8\u91cd\u65b0\u5199\u4e00\u4e2a...\u4e45\u800c\u4e45\u4e4b\u8fd9\u4e9b\u5e93/\u51fd\u6570\u5374\u53c8\u65e0\u4eba\u7ef4\u62a4\u3002"]})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u5bb9\u5668\u5316\u652f\u6301",children:"3\u3001\u5927\u4ed3\u4e0b\u7684\u5fae\u670d\u52a1\u5bb9\u5668\u5316\u652f\u6301"}),"\n",(0,i.jsx)(n.h4,{id:"1\u955c\u50cf\u4ed3\u5e93\u7684\u7edf\u4e00\u7ba1\u7406",children:"1\uff09\u955c\u50cf\u4ed3\u5e93\u7684\u7edf\u4e00\u7ba1\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u5206\u6563\u7684\u955c\u50cf\u4ed3\u5e93\u5c06\u4f1a\u964d\u4f4e\u670d\u52a1\u5bb9\u5668\u5316\u7684\u7ba1\u7406\u7ef4\u62a4\u6548\u7387\u3002\u4e3a\u4fbf\u4e8e\u7edf\u4e00\u670d\u52a1\u5bb9\u5668\u5316\u7ba1\u7406\uff0c\u6211\u4eec\u5efa\u8bae\u5927\u4ed3\u4e0b\u7684\u670d\u52a1\u4f7f\u7528\u7edf\u4e00\u7684\u955c\u50cf\u4ed3\u5e93\u3002\u955c\u50cf\u4ed3\u5e93\u7684\u5730\u5740\u7edf\u4e00\u7ef4\u62a4\u5230\u5404\u4e2a\u670d\u52a1\u4e0b\u7684\u5de5\u5177\u914d\u7f6e\u6587\u4ef6\u4e2d\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(972379).A+"",width:"3072",height:"1748"})}),"\n",(0,i.jsx)(n.h4,{id:"2\u7edf\u4e00\u7f16\u8bd1\u63d0\u4ea4\u6307\u4ee4",children:"2\uff09\u7edf\u4e00\u7f16\u8bd1\u3001\u63d0\u4ea4\u6307\u4ee4"}),"\n",(0,i.jsx)(n.p,{children:"\u6846\u67b6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u6307\u4ee4\u6765\u5b9e\u73b0\u7a0b\u5e8f\u7684\u7f16\u8bd1\u3001\u955c\u50cf\u7684\u7f16\u8bd1\u3001\u955c\u50cf\u7684\u63d0\u4ea4\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make build"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7f16\u8bd1\u7a0b\u5e8f\uff0c\u751f\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u4ecb\u7ecd\u8bf7\u53c2\u8003\u6587\u6863\uff1a ",(0,i.jsx)(n.a,{href:"/docs/cli/build",children:"\u4ea4\u53c9\u7f16\u8bd1-build"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make image"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7f16\u8bd1\u7a0b\u5e8f\u5e76\u7f16\u8bd1\u955c\u50cf\uff0c\u751f\u6210 ",(0,i.jsx)(n.code,{children:"Docker"})," \u955c\u50cf\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"make image TAG=xxx"})," \u53ef\u4ee5\u6307\u5b9a\u7f16\u8bd1\u751f\u6210\u7684\u955c\u50cf\u6807\u7b7e\u540d\u79f0\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u4ecb\u7ecd\u8bf7\u53c2\u8003\u6587\u6863\uff1a ",(0,i.jsx)(n.a,{href:"/docs/cli/docker",children:"\u955c\u50cf\u7f16\u8bd1-docker"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make image.push"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7f16\u8bd1\u7a0b\u5e8f\u3001\u7f16\u8bd1\u955c\u50cf\u5e76\u63a8\u9001\u955c\u50cf\u5230\u5df2\u914d\u7f6e\u597d\u7684\u955c\u50cf\u4ed3\u5e93\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"make image.push TAG=xxx"})," \u53ef\u4ee5\u6307\u5b9a\u7f16\u8bd1\u751f\u6210\u7684\u955c\u50cf\u6807\u7b7e\u540d\u79f0\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"3\u7edf\u4e00\u90e8\u7f72\u8c03\u8bd5\u6307\u4ee4",children:"3\uff09\u7edf\u4e00\u90e8\u7f72\u3001\u8c03\u8bd5\u6307\u4ee4"}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67b6\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u6307\u4ee4\u6765\u5b9e\u73b0 ",(0,i.jsx)(n.code,{children:"Kubernetes"})," \u96c6\u7fa4\u7684\u5bb9\u5668\u5316\u90e8\u7f72\uff0c\u4ee5\u53ca\u4e00\u4f53\u5316\u7f16\u8bd1\u90e8\u7f72\u7684\u5f00\u53d1\u6307\u4ee4\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make deploy TAG=xxx"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u90e8\u7f72\u5f53\u524d\u670d\u52a1\u5230\u672c\u5730 ",(0,i.jsx)(n.code,{children:"kubeconfig"})," \u5df2\u8fde\u63a5\u7684 ",(0,i.jsx)(n.code,{children:"kubernetes"})," \u96c6\u7fa4\u4e2d\uff0c\u5176\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"TAG"})," \u7528\u4e8e\u6307\u5b9a ",(0,i.jsx)(n.code,{children:"deploy"})," \u76ee\u5f55\u4e0b\u7684 ",(0,i.jsx)(n.code,{children:"overlays"})," \u76ee\u5f55\u3002\u7ba1\u7406\u90e8\u7f72 ",(0,i.jsx)(n.code,{children:"yaml"})," \u6587\u4ef6\u4f7f\u7528\u7684\u662f\u884c\u4e1a\u5185\u5e38\u7528\u7684 ",(0,i.jsx)(n.code,{children:"kustomize"})," \u5de5\u5177\uff0c\u5177\u4f53\u4ecb\u7ecd\u6587\u6863\u8bf7\u53c2\u8003\uff1a ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/tasks/manage-kubernetes-objects/kustomization/",children:"https://kubernetes.io/zh-cn/docs/tasks/manage-kubernetes-objects/kustomization/"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(744600).A+"",width:"3072",height:"1750"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make image.push deploy TAG=xxx"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u662f\u5f00\u53d1\u8c03\u8bd5\u6307\u4ee4\uff0c\u7528\u4e8e\u4e00\u6761\u6307\u4ee4 \u7f16\u8bd1\u4e8c\u8fdb\u5236\u6587\u4ef6\u3001\u7f16\u8bd1\u5e76\u63a8\u9001 ",(0,i.jsx)(n.code,{children:"Docker"})," \u955c\u50cf\u3001\u90e8\u7f72 ",(0,i.jsx)(n.code,{children:"Kubernetes"})," \u5e94\u7528\u5e76\u91cd\u542f\u5e94\u7528\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"4\u5927\u4ed3\u4e0b\u7684\u6846\u67b6\u5176\u4ed6\u6307\u4ee4",children:"4\u3001\u5927\u4ed3\u4e0b\u7684\u6846\u67b6\u5176\u4ed6\u6307\u4ee4"}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67b6\u9488\u5bf9\u4e8e\u9879\u76ee\u5de5\u7a0b\u7ba1\u7406\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5de5\u5177\u6307\u4ee4\u652f\u6301\uff0c\u8fd9\u4e9b\u6307\u4ee4\u5f80\u5f80\u9700\u8981\u518d\u7279\u5b9a\u7684\u670d\u52a1\u76ee\u5f55\u4e0b\u6267\u884c\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"./app/\u670d\u52a1\u540d\u79f0"})]}),"\n",(0,i.jsxs)(n.h4,{id:"1-make-cli",children:["1\uff09 ",(0,i.jsx)(n.code,{children:"make cli"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4e8e\u5347\u7ea7\u672c\u5730\u7684\u6846\u67b6 ",(0,i.jsx)(n.code,{children:"CLI"})," \u5230\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u3002"]}),"\n",(0,i.jsxs)(n.h4,{id:"2-make-up",children:["2\uff09 ",(0,i.jsx)(n.code,{children:"make up"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4e8e\u5347\u7ea7\u672c\u5730\u7684\u6846\u67b6\u5230\u6700\u65b0\u793e\u533a\u7a33\u5b9a\u7248\u672c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u4ecb\u7ecd\u8bf7\u53c2\u8003\u6587\u6863\uff1a ",(0,i.jsx)(n.a,{href:"/docs/cli/up",children:"\u6846\u67b6\u5347\u7ea7-up"})]}),"\n",(0,i.jsxs)(n.h4,{id:"3-make-dao",children:["3\uff09 ",(0,i.jsx)(n.code,{children:"make dao"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4e8e\u751f\u6210 ",(0,i.jsx)(n.code,{children:"DAO/Entity/DO"})," \u4ee3\u7801\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u4ecb\u7ecd\u8bf7\u53c2\u8003\u6587\u6863\uff1a ",(0,i.jsx)(n.a,{href:"/docs/cli/gen-dao",children:"\u6570\u636e\u89c4\u8303-gen dao"})]}),"\n",(0,i.jsxs)(n.h4,{id:"4-make-service",children:["4\uff09 ",(0,i.jsx)(n.code,{children:"make service"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4e8e\u89e3\u6790 ",(0,i.jsx)(n.code,{children:"logic"})," \u76ee\u5f55\u5e76\u81ea\u52a8\u751f\u6210\u5185\u8c03\u7528\u63a5\u53e3\u3002\u8be5\u6307\u4ee4\u5728 ",(0,i.jsx)(n.code,{children:"Goland IDE"})," \u4e0b\u5f80\u5f80\u4f7f\u7528\u81ea\u52a8\u5316\u7684 ",(0,i.jsx)(n.code,{children:"Watcher"})," \u6587\u4ef6\u53d8\u52a8\u6765\u81ea\u52a8\u751f\u6210\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u5b98\u65b9\u6587\u6863\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u4ecb\u7ecd\u8bf7\u53c2\u8003\u6587\u6863\uff1a ",(0,i.jsx)(n.a,{href:"/docs/cli/gen-service",children:"\u6a21\u5757\u89c4\u8303-gen service"})]}),"\n",(0,i.jsxs)(n.h4,{id:"5-make-enums",children:["5\uff09 ",(0,i.jsx)(n.code,{children:"make enums"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4e8e\u89e3\u6790\u6307\u5b9a\u4ee3\u7801\u76ee\u5f55\uff08\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"api"})," \u76ee\u5f55\uff09\u5e76\u81ea\u52a8\u751f\u6210 ",(0,i.jsx)(n.code,{children:"enums"})," \u52a0\u8f7d\u4ee3\u7801\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u4ecb\u7ecd\u8bf7\u53c2\u8003\u6587\u6863\uff1a ",(0,i.jsx)(n.a,{href:"/docs/cli/gen-enums",children:"\u679a\u4e3e\u7ef4\u62a4-gen enums"})]}),"\n",(0,i.jsx)(n.h4,{id:"6\u66f4\u591a\u6307\u4ee4",children:"6\uff09\u66f4\u591a\u6307\u4ee4"}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u591a\u7684\u6307\u4ee4\u652f\u6301\u8bf7\u53c2\u8003\u6846\u67b6\u5b98\u7f51\u5de5\u5177\u4ecb\u7ecd\u7ae0\u8282\uff1a ",(0,i.jsx)(n.a,{href:"/docs/cli",children:"\u5f00\u53d1\u5de5\u5177"})]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},744600:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/353b86069be6e3cb8834aab4aad32e84-3b27bb6bd46ad3b6a67d0a65245b3487.png"},972379:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/424878f3a64d0cca7899c6fd13a8b9c7-2150624de20d43a359ff6a06e92b9377.png"},136061:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/b0035d25d52202b3f1b38d18980bf3ff-5db9af58149b3a773ea029236a8f80e0.png"},982013:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/f02efd1e4c03b3cb111cb7b9015290ee-492f73639f5718b6bd81e7487275cddc.png"},706208:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/f9028ffb7bc51e7496f1d55b79091f73-2aaf25707e67167e56683b5474ab72dd.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var d=s(296540);const i={},c=d.createContext(i);function l(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);