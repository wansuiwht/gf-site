"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["80743"],{615381:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>a,assets:()=>o,toc:()=>h,frontMatter:()=>l});var s=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u5FAE\u670D\u52A1\u5927\u4ED3\u7BA1\u7406\u6A21\u5F0F","title":"\u5FAE\u670D\u52A1\u5927\u4ED3\u7BA1\u7406\u6A21\u5F0F","description":"GoFrame\u6846\u67B6\u5BF9\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406\u6A21\u5F0F\u7684\u652F\u6301\uFF0C\u8BE6\u7EC6\u63CF\u8FF0\u5982\u4F55\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u8FDB\u884C\u4EE3\u7801\u5F00\u53D1\u548C\u670D\u52A1\u534F\u4F5C\u3002\u8BA8\u8BBA\u4E86\u5355\u4ED3\u7BA1\u7406\u7684\u4F18\u7F3A\u70B9\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u5212\u5206\u4ED3\u5E93\u804C\u8D23\u3001\u7BA1\u7406\u4EE3\u7801\u53EF\u89C1\u6027\u3001\u7EDF\u4E00\u955C\u50CF\u4ED3\u5E93\u7B49\u65B9\u6CD5\u4F18\u5316\u5FAE\u670D\u52A1\u534F\u4F5C\u3002\u540C\u65F6\uFF0C\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u6846\u67B6\u6307\u4EE4\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u90E8\u7F72\u5FAE\u670D\u52A1\u9879\u76EE\u3002","source":"@site/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u5FAE\u670D\u52A1\u5927\u4ED3\u7BA1\u7406\u6A21\u5F0F.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1","slug":"/docs/design/project-mono-repo","permalink":"/en/docs/design/project-mono-repo","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u5DE5\u7A0B\u5F00\u53D1\u8BBE\u8BA1/\u5FAE\u670D\u52A1\u5927\u4ED3\u7BA1\u7406\u6A21\u5F0F.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/design/project-mono-repo","title":"\u5FAE\u670D\u52A1\u5927\u4ED3\u7BA1\u7406\u6A21\u5F0F","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","\u5FAE\u670D\u52A1","\u5355\u4ED3\u7BA1\u7406","\u4EE3\u7801\u5F00\u53D1","\u6743\u9650\u7BA1\u7406","\u670D\u52A1\u534F\u4F5C","\u5927\u4ED3\u7BA1\u7406","\u4EE3\u7801\u4ED3\u5E93","\u5BB9\u5668\u5316\u652F\u6301","\u6846\u67B6\u6307\u4EE4"],"description":"GoFrame\u6846\u67B6\u5BF9\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406\u6A21\u5F0F\u7684\u652F\u6301\uFF0C\u8BE6\u7EC6\u63CF\u8FF0\u5982\u4F55\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u8FDB\u884C\u4EE3\u7801\u5F00\u53D1\u548C\u670D\u52A1\u534F\u4F5C\u3002\u8BA8\u8BBA\u4E86\u5355\u4ED3\u7BA1\u7406\u7684\u4F18\u7F3A\u70B9\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u5212\u5206\u4ED3\u5E93\u804C\u8D23\u3001\u7BA1\u7406\u4EE3\u7801\u53EF\u89C1\u6027\u3001\u7EDF\u4E00\u955C\u50CF\u4ED3\u5E93\u7B49\u65B9\u6CD5\u4F18\u5316\u5FAE\u670D\u52A1\u534F\u4F5C\u3002\u540C\u65F6\uFF0C\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u6846\u67B6\u6307\u4EE4\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u90E8\u7F72\u5FAE\u670D\u52A1\u9879\u76EE\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u6A21\u578B\u4E0E\u4E1A\u52A1\u6A21\u578B","permalink":"/en/docs/design/project-models"},"next":{"title":"\u5168\u94FE\u8DEF\u8DDF\u8E2A\u8BBE\u8BA1","permalink":"/en/docs/design/tracing"}}'),i=d("785893"),c=d("250065");let l={slug:"/docs/design/project-mono-repo",title:"\u5FAE\u670D\u52A1\u5927\u4ED3\u7BA1\u7406\u6A21\u5F0F",sidebar_position:5,hide_title:!0,keywords:["GoFrame","\u5FAE\u670D\u52A1","\u5355\u4ED3\u7BA1\u7406","\u4EE3\u7801\u5F00\u53D1","\u6743\u9650\u7BA1\u7406","\u670D\u52A1\u534F\u4F5C","\u5927\u4ED3\u7BA1\u7406","\u4EE3\u7801\u4ED3\u5E93","\u5BB9\u5668\u5316\u652F\u6301","\u6846\u67B6\u6307\u4EE4"],description:"GoFrame\u6846\u67B6\u5BF9\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406\u6A21\u5F0F\u7684\u652F\u6301\uFF0C\u8BE6\u7EC6\u63CF\u8FF0\u5982\u4F55\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u8FDB\u884C\u4EE3\u7801\u5F00\u53D1\u548C\u670D\u52A1\u534F\u4F5C\u3002\u8BA8\u8BBA\u4E86\u5355\u4ED3\u7BA1\u7406\u7684\u4F18\u7F3A\u70B9\uFF0C\u4EE5\u53CA\u5982\u4F55\u901A\u8FC7\u5212\u5206\u4ED3\u5E93\u804C\u8D23\u3001\u7BA1\u7406\u4EE3\u7801\u53EF\u89C1\u6027\u3001\u7EDF\u4E00\u955C\u50CF\u4ED3\u5E93\u7B49\u65B9\u6CD5\u4F18\u5316\u5FAE\u670D\u52A1\u534F\u4F5C\u3002\u540C\u65F6\uFF0C\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u6846\u67B6\u6307\u4EE4\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u90E8\u7F72\u5FAE\u670D\u52A1\u9879\u76EE\u3002"},r=void 0,o={},h=[{value:"\u4E00\u3001\u524D\u7F6E\u9605\u8BFB",id:"\u4E00\u524D\u7F6E\u9605\u8BFB",level:2},{value:"\u4E8C\u3001\u5927\u4ED3\u7BA1\u7406",id:"\u4E8C\u5927\u4ED3\u7BA1\u7406",level:2},{value:"1\u3001\u4ED3\u5E93\u804C\u8D23\u8303\u56F4\u7684\u5212\u5206",id:"1\u4ED3\u5E93\u804C\u8D23\u8303\u56F4\u7684\u5212\u5206",level:3},{value:"1\uFF09\u5F53\u56E2\u961F\u5185\u90E8\u7684\u534F\u4F5C\u9891\u7387\u9AD8\u4E8E\u56E2\u961F\u95F4\u534F\u4F5C\u9891\u7387\u65F6",id:"1\u5F53\u56E2\u961F\u5185\u90E8\u7684\u534F\u4F5C\u9891\u7387\u9AD8\u4E8E\u56E2\u961F\u95F4\u534F\u4F5C\u9891\u7387\u65F6",level:4},{value:"2\uFF09\u5F53\u591A\u4E2A\u56E2\u961F\u4E4B\u95F4\u7684\u591A\u4E2A\u670D\u52A1\u534F\u4F5C\u9891\u7387\u975E\u5E38\u9AD8\u65F6",id:"2\u5F53\u591A\u4E2A\u56E2\u961F\u4E4B\u95F4\u7684\u591A\u4E2A\u670D\u52A1\u534F\u4F5C\u9891\u7387\u975E\u5E38\u9AD8\u65F6",level:4},{value:"2\u3001\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u95F4\u5982\u4F55\u534F\u4F5C",id:"2\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u95F4\u5982\u4F55\u534F\u4F5C",level:3},{value:"1\uFF09\u4EE3\u7801\u53EF\u89C1\u6027\u7684\u7BA1\u7406",id:"1\u4EE3\u7801\u53EF\u89C1\u6027\u7684\u7BA1\u7406",level:4},{value:"2\uFF09\u670D\u52A1\u95F4\u63A5\u53E3\u7684\u8C03\u7528",id:"2\u670D\u52A1\u95F4\u63A5\u53E3\u7684\u8C03\u7528",level:4},{value:"3\uFF09\u517C\u5BB9\u6027\u7684\u4E25\u683C\u8981\u6C42",id:"3\u517C\u5BB9\u6027\u7684\u4E25\u683C\u8981\u6C42",level:4},{value:"3\u3001\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u5BB9\u5668\u5316\u652F\u6301",id:"3\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u5BB9\u5668\u5316\u652F\u6301",level:3},{value:"1\uFF09\u955C\u50CF\u4ED3\u5E93\u7684\u7EDF\u4E00\u7BA1\u7406",id:"1\u955C\u50CF\u4ED3\u5E93\u7684\u7EDF\u4E00\u7BA1\u7406",level:4},{value:"2\uFF09\u7EDF\u4E00\u7F16\u8BD1\u3001\u63D0\u4EA4\u6307\u4EE4",id:"2\u7EDF\u4E00\u7F16\u8BD1\u63D0\u4EA4\u6307\u4EE4",level:4},{value:"3\uFF09\u7EDF\u4E00\u90E8\u7F72\u3001\u8C03\u8BD5\u6307\u4EE4",id:"3\u7EDF\u4E00\u90E8\u7F72\u8C03\u8BD5\u6307\u4EE4",level:4},{value:"4\u3001\u5927\u4ED3\u4E0B\u7684\u6846\u67B6\u5176\u4ED6\u6307\u4EE4",id:"4\u5927\u4ED3\u4E0B\u7684\u6846\u67B6\u5176\u4ED6\u6307\u4EE4",level:3},{value:"1\uFF09 <code>make cli</code>",id:"1-make-cli",level:4},{value:"2\uFF09 <code>make up</code>",id:"2-make-up",level:4},{value:"3\uFF09 <code>make dao</code>",id:"3-make-dao",level:4},{value:"4\uFF09 <code>make service</code>",id:"4-make-service",level:4},{value:"5\uFF09 <code>make enums</code>",id:"5-make-enums",level:4},{value:"6\uFF09\u66F4\u591A\u6307\u4EE4",id:"6\u66F4\u591A\u6307\u4EE4",level:4}];function t(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u672C\u6587\u65E8\u5728\u4ECB\u7ECD ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5BF9\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u6A21\u5F0F\u7684\u652F\u6301\uFF0C\u6307\u5BFC\u5F00\u53D1\u8005\u5982\u4F55\u5728\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u6A21\u5F0F\u4E0B\u8FDB\u884C\u4EE3\u7801\u5F00\u53D1\u548C\u5206\u5DE5\u534F\u4F5C\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E00\u524D\u7F6E\u9605\u8BFB",children:"\u4E00\u3001\u524D\u7F6E\u9605\u8BFB"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5F00\u59CB\u672C\u7AE0\u8282\u4E4B\u524D\uFF0C\u5EFA\u8BAE\u5148\u4E86\u89E3\u4E00\u4E0B\u5355\u4F53\u4ED3\u5E93( ",(0,i.jsx)(n.code,{children:"monolith"}),")\u3001\u5FAE\u670D\u52A1-\u591A\u4ED3\u7BA1\u7406( ",(0,i.jsx)(n.code,{children:"multi-repo"}),")\u3001\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u7684\u57FA\u672C\u6982\u5FF5\u4EE5\u53CA\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF1A ",(0,i.jsx)(n.a,{href:"https://wiki.goframe.org/pages/viewpage.action?pageId=87246750",children:"\u5355\u4F53\u4ED3\u5E93\u4E0E\u591A\u4ED3\u5E93\u90FD\u6709\u54EA\u4E9B\u4F18\u52BF\u52A3\u52BF\uFF0C\u5FAE\u670D\u52A1\u9009\u62E9\u54EA\u79CD\u65B9\u6848\u6BD4\u8F83\u597D\uFF1F"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE3\u7801\u4ED3\u5E93\u7684\u7BA1\u7406\u7EA6\u675F\u5E76\u4E0D\u5C5E\u4E8E\u6846\u67B6\u804C\u8D23\u7684\u4E00\u90E8\u5206\uFF0C ",(0,i.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u811A\u624B\u67B6\u672C\u8EAB\u4E5F\u652F\u6301\u4E24\u79CD\u4ED3\u5E93\u9879\u76EE\u521D\u59CB\u5316\u7684\u547D\u4EE4 - \u5355\u4ED3\u5E93( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u3001\u591A\u4ED3\u5E93( ",(0,i.jsx)(n.code,{children:"monolith/multi-repo"}),")\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u56E2\u961F\u7684\u9700\u6C42\u3002\u5177\u4F53\u9009\u62E9\u54EA\u79CD\u4EE3\u7801\u4ED3\u5E93\u7BA1\u7406\u6A21\u5F0F\u7531\u5F00\u53D1\u56E2\u961F\u6839\u636E\u81EA\u8EAB\u9700\u6C42\u3001\u573A\u666F\u3001\u4E60\u60EF\u6765\u81EA\u884C\u9009\u62E9\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u4E3A\u7B80\u5316\u548C\u6E05\u6670\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u7684\u63CF\u8FF0\uFF0C\u540E\u7EED\u6211\u4EEC\u7EDF\u4E00\u4EE5 ",(0,i.jsx)(n.strong,{children:"\u5927\u4ED3\u7BA1\u7406"})," \u6765\u6307\u4EE3\u5FAE\u670D\u52A1-\u5355\u4ED3\u7BA1\u7406( ",(0,i.jsx)(n.code,{children:"mono-repo"}),")\u6A21\u5F0F\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u4E8C\u5927\u4ED3\u7BA1\u7406",children:"\u4E8C\u3001\u5927\u4ED3\u7BA1\u7406"}),"\n",(0,i.jsx)(n.h3,{id:"1\u4ED3\u5E93\u804C\u8D23\u8303\u56F4\u7684\u5212\u5206",children:"1\u3001\u4ED3\u5E93\u804C\u8D23\u8303\u56F4\u7684\u5212\u5206"}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7\u524D\u7F6E\u9605\u8BFB\u7684\u6587\u7AE0\u5927\u5BB6\u4E5F\u77E5\u9053\uFF0C\u8FD9\u4E2A\u4E16\u754C\u4E0A\u6CA1\u6709\u94F6\u5F39\uFF0C\u5927\u4ED3\u6709\u4F18\u70B9\u4E5F\u6709\u7F3A\u70B9\uFF0C\u5176\u4E2D\u6700\u660E\u663E\u7684\u7F3A\u70B9\u5C31\u662F ",(0,i.jsx)(n.strong,{children:"\u6743\u9650\u7684\u7BA1\u63A7"})," \u4EE5\u53CA ",(0,i.jsx)(n.strong,{children:"\u4ED3\u5E93\u7684\u81A8\u80C0"}),"\u3002\u4E3A\u4E86\u66F4\u597D\u5730\u7BA1\u7406\u4EE3\u7801\u4ED3\u5E93\uFF0C\u907F\u514D\u8FD9\u4E24\u70B9\u7F3A\u9677\u5E26\u6765\u66F4\u9AD8\u7684\u6210\u672C\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u51CF\u5C0F\u5927\u4ED3\u4E2D\u7684\u5FAE\u670D\u52A1\u89C4\u6A21\u3002\u81F3\u4E8E\u4ED3\u5E93\u4E2D\u9700\u8981\u7EF4\u62A4\u54EA\u4E9B\u5FAE\u670D\u52A1\uFF0C\u9700\u8981\u6839\u636E\u670D\u52A1\u4E4B\u95F4\u7684\u534F\u4F5C\u9891\u7387\u6765\u51B3\u5B9A\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"1\u5F53\u56E2\u961F\u5185\u90E8\u7684\u534F\u4F5C\u9891\u7387\u9AD8\u4E8E\u56E2\u961F\u95F4\u534F\u4F5C\u9891\u7387\u65F6",children:"1\uFF09\u5F53\u56E2\u961F\u5185\u90E8\u7684\u534F\u4F5C\u9891\u7387\u9AD8\u4E8E\u56E2\u961F\u95F4\u534F\u4F5C\u9891\u7387\u65F6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5178\u578B\u7684\u573A\u666F\u662F\u9488\u5BF9 ",(0,i.jsx)(n.strong,{children:"\u975E\u5FAE\u670D\u52A1\u5316\u67B6\u6784\u7684\u4EA7\u54C1"}),"\uFF0C\u53EF\u4EE5\u5C06\u670D\u52A1\u7BA1\u7406\u7684\u6743\u9650\u804C\u8D23\u6309\u7167\u5404\u4E2A\u4E1A\u52A1\u56E2\u961F\u8FDB\u884C\u5212\u5206\u3002\u8FD9\u6837\u56E2\u961F\u5185\u90E8\u53EF\u4EE5\u5C06\u5206\u6563\u7684\u82E5\u5E72\u670D\u52A1\u901A\u8FC7\u7EDF\u4E00\u7684\u4EE3\u7801\u4ED3\u5E93\u7EF4\u62A4\u8D77\u6765\uFF0C\u5145\u5206\u5229\u7528\u5927\u4ED3\u7BA1\u7406\u7684\u4F18\u52BF\uFF0C\u63D0\u9AD8\u56E2\u961F\u5185\u90E8\u7684\u5F00\u53D1\u548C\u7EF4\u62A4\u6548\u7387\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53E6\u5916\u4E00\u79CD\u573A\u666F\u662F\u4E1A\u52A1\u7684\u5FAE\u670D\u52A1\u6570\u91CF\u672C\u8EAB\u4E0D\u591A\uFF08\u4F8B\u5982 ",(0,i.jsx)(n.code,{children:"50"})," \u4E2A\u4EE5\u5185\uFF09\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4E5F\u53EF\u4EE5\u5408\u5E76\u6210\u4E00\u4E2A\u5927\u4ED3\u8FDB\u884C\u7BA1\u7406\u3002\u9700\u8981\u6CE8\u610F\uFF0C\u5927\u4ED3\u7BA1\u7406\u7684\u670D\u52A1\u6570\u91CF\u5E76\u4E0D\u662F\u7531\u7EC4\u7EC7\u67B6\u6784\u4E2D\u7684\u4EBA\u5458\u6570\u91CF\u6765\u51B3\u5B9A\u7684\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"2\u5F53\u591A\u4E2A\u56E2\u961F\u4E4B\u95F4\u7684\u591A\u4E2A\u670D\u52A1\u534F\u4F5C\u9891\u7387\u975E\u5E38\u9AD8\u65F6",children:"2\uFF09\u5F53\u591A\u4E2A\u56E2\u961F\u4E4B\u95F4\u7684\u591A\u4E2A\u670D\u52A1\u534F\u4F5C\u9891\u7387\u975E\u5E38\u9AD8\u65F6"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53\u4E1A\u52A1\u7684\u5FAE\u670D\u52A1\u6570\u91CF\u6BD4\u8F83\u591A\uFF0C\u5E76\u4E14\u5404\u4E2A\u670D\u52A1\u4E4B\u95F4\u7684\u4EA4\u4E92\u534F\u4F5C\u6BD4\u8F83\u9891\u7E41\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8003\u8651\u5C06\u8FD9\u4E9B\u670D\u52A1\u5408\u5E76\u5230\u5927\u4ED3\u4E2D\u8FDB\u884C\u7BA1\u7406\uFF0C\u53EF\u4EE5\u6781\u5927\u63D0\u9AD8\u534F\u4F5C\u6548\u7387\u3002\u8FD9\u79CD\u60C5\u51B5\u5927\u90E8\u5206\u51FA\u73B0\u5728\u5FAE\u670D\u52A1\u5728\u540C\u4E00\u4EA7\u54C1\u7EBF\u3001\u8DE8\u56E2\u961F\u4F46\u4E0D\u8DE8\u4E2D\u5FC3\u6216\u90E8\u95E8\u7684\u60C5\u51B5\u4E0B\u3002\u4F46\u7531\u4E8E\u6D89\u53CA\u8DE8\u591A\u4E2A\u56E2\u961F\u7684\u534F\u4F5C\uFF0C\u8FD9\u5BF9\u4EBA\u5458\u7684\u7EC4\u7EC7\u67B6\u6784\u7BA1\u7406\u6709\u4E00\u5B9A\u8981\u6C42\uFF0C\u9700\u8981\u7531\u4E00\u5B9A\u6743\u9650\u7684\u7BA1\u7406\u8005\u6765\u63A8\u52A8\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u5FAE\u670D\u52A1\u7684\u7BA1\u7406\u5E76\u4E0D\u4EC5\u662F\u4EE3\u7801\u7684\u7EC4\u7EC7\u7BA1\u7406\uFF0C\u66F4\u662F\u4EBA\u5458\u7EC4\u7EC7\u67B6\u6784\u7684\u7BA1\u7406\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"2\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u95F4\u5982\u4F55\u534F\u4F5C",children:"2\u3001\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u95F4\u5982\u4F55\u534F\u4F5C"}),"\n",(0,i.jsx)(n.h4,{id:"1\u4EE3\u7801\u53EF\u89C1\u6027\u7684\u7BA1\u7406",children:"1\uFF09\u4EE3\u7801\u53EF\u89C1\u6027\u7684\u7BA1\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u670D\u52A1\u4E0E\u670D\u52A1\u4E4B\u95F4\u80FD\u591F\u66B4\u9732\u7684\u4EC5\u4EC5\u662F\u63A5\u53E3\uFF0C\u4E5F\u5C31\u662F ",(0,i.jsx)(n.code,{children:"API"}),"\u3002\u5404\u4E2A\u670D\u52A1\u5185\u90E8\u7684\u903B\u8F91\u5E94\u5F53\u5BF9\u5916\u4E0D\u53EF\u89C1\u3002\u5728 ",(0,i.jsx)(n.code,{children:"Golang"})," \u91CC\u9762\u6709\u5F88\u597D\u7684 ",(0,i.jsx)(n.code,{children:"internal"})," \u7279\u6027\uFF0C\u6B63\u597D\u53EF\u4EE5\u6EE1\u8DB3\u53EF\u89C1\u6027\u7BA1\u7406\u7684\u8981\u6C42\u3002\u5982\u4E0B\u56FE\u5927\u4ED3\u4EE3\u7801\u793A\u4F8B\uFF0C\u5728 ",(0,i.jsx)(n.code,{children:"app"})," \u76EE\u5F55\u4E0B\u7BA1\u7406\u4E86\u82E5\u5E72\u7684\u670D\u52A1\uFF0C\u6BCF\u4E00\u4E2A\u670D\u52A1\u66B4\u9732\u4E86\u81EA\u8EAB\u7684 ",(0,i.jsx)(n.code,{children:"api"})," \u76EE\u5F55\uFF0C\u4F9B\u5176\u4ED6\u670D\u52A1\u76F4\u63A5\u5F15\u7528\uFF08\u63D0\u9AD8\u670D\u52A1\u95F4\u534F\u4F5C\u6548\u7387\uFF09\uFF0C\u4F46\u5185\u90E8\u7684\u4E1A\u52A1\u903B\u8F91\u5305\u542B\u5728\u4E86 ",(0,i.jsx)(n.code,{children:"internal"})," \u76EE\u5F55\u4E0B\uFF0C\u5BF9\u5176\u4ED6\u670D\u52A1\u4E0D\u53EF\u89C1\uFF08\u4E5F\u5C31\u65E0\u6CD5\u5F15\u7528\uFF09\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(175456).Z+"",width:"1014",height:"1832"})}),"\n",(0,i.jsx)(n.h4,{id:"2\u670D\u52A1\u95F4\u63A5\u53E3\u7684\u8C03\u7528",children:"2\uFF09\u670D\u52A1\u95F4\u63A5\u53E3\u7684\u8C03\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u534F\u8BAE\u6587\u4EF6\u5355\u72EC\u7EF4\u62A4\u5230\u5404\u81EA\u670D\u52A1\u76EE\u5F55\u4E0B\uFF0C\u5982\u679C\u6D89\u53CA\u5230\u534F\u8BAE\u6587\u4EF6\u7F16\u8BD1\uFF0C\u90A3\u4E48\u7F16\u8BD1\u7684\u6587\u4EF6\u4E5F\u5B58\u653E\u5230\u81EA\u8EAB\u7684\u670D\u52A1\u76EE\u5F55\u4E0B\u3002\u8C03\u7528\u7AEF\u4E0D\u9700\u8981\u5355\u72EC\u518D\u5BF9\u76EE\u6807\u670D\u52A1\u7684\u534F\u8BAE\u6587\u4EF6\u91CD\u65B0\u7F16\u8BD1\u7BA1\u7406\u3002\u4EE5 ",(0,i.jsx)(n.code,{children:"HTTP API"})," \u7684\u63A5\u53E3\u5B9A\u4E49\u4E3A\u4F8B\uFF0C\u8C03\u7528\u7AEF\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\u76EE\u6807\u7AEF\u670D\u52A1\u7684 ",(0,i.jsx)(n.code,{children:"API"})," \u63A5\u53E3\u5B9A\u4E49\uFF1A\uFF08\u4EE5\u4E0B\u622A\u56FE\u4E2D ",(0,i.jsx)(n.code,{children:"khaos-shark"})," \u4E3A\u8C03\u7528\u7AEF\uFF0C ",(0,i.jsx)(n.code,{children:"khaos-oss"})," \u4E3A\u670D\u52A1\u7AEF\uFF09"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(789738).Z+"",width:"3072",height:"1750"})}),"\n",(0,i.jsxs)(n.p,{children:["\u9488\u5BF9\u4E8E\u5FAE\u670D\u52A1\u95F4\u7684 ",(0,i.jsx)(n.code,{children:"RPC"})," \u63A5\u53E3\u8C03\u7528\u4E5F\u662F\u540C\u6837\u7684\u9053\u7406\uFF1A\uFF08\u4EE5\u4E0B\u622A\u56FE\u4E2D ",(0,i.jsx)(n.code,{children:"user-api"})," \u4E3A\u8C03\u7528\u7AEF\uFF0C ",(0,i.jsx)(n.code,{children:"user-rpc"})," \u4E3A\u670D\u52A1\u7AEF\uFF09"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(809466).Z+"",width:"3840",height:"2110"})}),"\n",(0,i.jsx)(n.h4,{id:"3\u517C\u5BB9\u6027\u7684\u4E25\u683C\u8981\u6C42",children:"3\uFF09\u517C\u5BB9\u6027\u7684\u4E25\u683C\u8981\u6C42"}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7\u4EE5\u4E0A\u4ECB\u7ECD\u53EF\u4EE5\u53D1\u73B0\uFF0C\u901A\u8FC7\u5927\u4ED3\u7684\u4EE3\u7801\u7BA1\u7406\uFF0C\u4F7F\u5F97\u5927\u4ED3\u4E2D\u6240\u6709\u670D\u52A1\u7684\u7248\u672C\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BCF\u5F53\u4F9D\u8D56\u7684\u670D\u52A1 ",(0,i.jsx)(n.code,{children:"API"})," \u66F4\u65B0\u65F6\uFF0C\u8C03\u7528\u7AEF\u670D\u52A1\uFF08\u4F7F\u7528\u7684 ",(0,i.jsx)(n.code,{children:"SDK"}),"\uFF09\u4E5F\u5C06\u81EA\u52A8\u5F97\u5230\u66F4\u65B0\u3002\u8FD9\u5C31\u8981\u6C42\u4ED3\u5E93\u4E2D\u6240\u6709\u670D\u52A1\u7684\u63A5\u53E3\u8BBE\u8BA1\uFF0C ",(0,i.jsx)(n.strong,{children:"\u5FC5\u987B\u4E25\u683C\u4FDD\u8BC1\u517C\u5BB9\u6027"}),"\uFF0C\u5426\u5219\u63A5\u53E3\u95F4\u8C03\u7528\u5C06\u4F1A\u51FA\u73B0\u95EE\u9898\uFF1A\u8F7B\u8005\u8C03\u7528\u7AEF\u670D\u52A1\u7F16\u8BD1\u5931\u8D25\u9700\u8981\u8C03\u6574\u4EE3\u7801\uFF0C\u91CD\u8005\u7F16\u8BD1\u6210\u529F\u4F46\u8FD0\u884C\u65F6\u62A5\u9519\u5F71\u54CD\u4E1A\u52A1\u3002\u6B64\u5916\uFF0C\u516C\u5171\u5F15\u7528\u7684\u5927\u4ED3\u57FA\u7840\u7EC4\u4EF6\u4E5F\u4F1A\u53D7\u5230\u517C\u5BB9\u6027\u7684\u5F71\u54CD\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4FDD\u8BC1\u517C\u5BB9\u6027\u4EE3\u7801\u8BBE\u8BA1\u7684\u51E0\u4E2A\u8981\u70B9\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u4E0D\u968F\u610F\u5220\u51CF\u63A5\u53E3\u53C2\u6570\uFF0C\u4FEE\u6539\u53C2\u6570\u540D\u79F0\u3001\u53C2\u6570\u7C7B\u578B\u3001\u53C2\u6570\u6821\u9A8C\u903B\u8F91\u3002"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["\u5F53\u63A5\u53E3\u5FC5\u987B\u8981\u8FDB\u884C\u975E\u517C\u5BB9\u66F4\u65B0\u65F6\uFF0C\u5E94\u5F53\u4F7F\u7528\u63A5\u53E3\u7248\u672C\u53F7\u6765\u7BA1\u7406\uFF08\u5982 ",(0,i.jsx)(n.code,{children:"v1, v2, v3..."}),"\uFF09\u3002"]})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u516C\u5171\u7EC4\u4EF6\u5C3D\u91CF\u4F7F\u7528\u7A33\u5B9A\u6210\u719F\u7684\u5916\u90E8\u7EC4\u4EF6\uFF0C\u5982\u679C\u662F\u5FC5\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u9700\u8981\u4FDD\u8BC1\u5BF9\u5916\u66B4\u9732\u65B9\u6CD5\u7684\u517C\u5BB9\u6027\u3002"})," ",(0,i.jsxs)(n.em,{children:["\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u4E00\u4E9B\u5F88\u57FA\u7840\u7684\u529F\u80FD\uFF0C\u6BD4\u5982\u8BF4 ",(0,i.jsx)(n.code,{children:"json.Marshal&Unmarshal"}),"\uFF0C\u6709\u7684\u4EBA\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E93/\u51FD\u6570\uFF0C\u4F46\u662F\u540E\u9762\u7684\u4EBA\u53EF\u80FD\u90FD\u4E0D\u77E5\u9053\u8FD9\u4E2A\u5E93\uFF0C\u4E5F\u4E0D\u592A\u4FE1\u4EFB\u8FD9\u4E2A\u51FD\u6570\uFF0C\u5C31\u4F1A\u53C8\u91CD\u65B0\u5199\u4E00\u4E2A...\u4E45\u800C\u4E45\u4E4B\u8FD9\u4E9B\u5E93/\u51FD\u6570\u5374\u53C8\u65E0\u4EBA\u7EF4\u62A4\u3002"]})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u5BB9\u5668\u5316\u652F\u6301",children:"3\u3001\u5927\u4ED3\u4E0B\u7684\u5FAE\u670D\u52A1\u5BB9\u5668\u5316\u652F\u6301"}),"\n",(0,i.jsx)(n.h4,{id:"1\u955C\u50CF\u4ED3\u5E93\u7684\u7EDF\u4E00\u7BA1\u7406",children:"1\uFF09\u955C\u50CF\u4ED3\u5E93\u7684\u7EDF\u4E00\u7BA1\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u5206\u6563\u7684\u955C\u50CF\u4ED3\u5E93\u5C06\u4F1A\u964D\u4F4E\u670D\u52A1\u5BB9\u5668\u5316\u7684\u7BA1\u7406\u7EF4\u62A4\u6548\u7387\u3002\u4E3A\u4FBF\u4E8E\u7EDF\u4E00\u670D\u52A1\u5BB9\u5668\u5316\u7BA1\u7406\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u5927\u4ED3\u4E0B\u7684\u670D\u52A1\u4F7F\u7528\u7EDF\u4E00\u7684\u955C\u50CF\u4ED3\u5E93\u3002\u955C\u50CF\u4ED3\u5E93\u7684\u5730\u5740\u7EDF\u4E00\u7EF4\u62A4\u5230\u5404\u4E2A\u670D\u52A1\u4E0B\u7684\u5DE5\u5177\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(811153).Z+"",width:"3072",height:"1748"})}),"\n",(0,i.jsx)(n.h4,{id:"2\u7EDF\u4E00\u7F16\u8BD1\u63D0\u4EA4\u6307\u4EE4",children:"2\uFF09\u7EDF\u4E00\u7F16\u8BD1\u3001\u63D0\u4EA4\u6307\u4EE4"}),"\n",(0,i.jsx)(n.p,{children:"\u6846\u67B6\u63D0\u4F9B\u4E86\u5E38\u7528\u7684\u6307\u4EE4\u6765\u5B9E\u73B0\u7A0B\u5E8F\u7684\u7F16\u8BD1\u3001\u955C\u50CF\u7684\u7F16\u8BD1\u3001\u955C\u50CF\u7684\u63D0\u4EA4\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make build"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7F16\u8BD1\u7A0B\u5E8F\uFF0C\u751F\u6210\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u4ECB\u7ECD\u8BF7\u53C2\u8003\u6587\u6863\uFF1A ",(0,i.jsx)(n.a,{href:"/en/docs/cli/build",children:"\u4EA4\u53C9\u7F16\u8BD1-build"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make image"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7F16\u8BD1\u7A0B\u5E8F\u5E76\u7F16\u8BD1\u955C\u50CF\uFF0C\u751F\u6210 ",(0,i.jsx)(n.code,{children:"Docker"})," \u955C\u50CF\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"make image TAG=xxx"})," \u53EF\u4EE5\u6307\u5B9A\u7F16\u8BD1\u751F\u6210\u7684\u955C\u50CF\u6807\u7B7E\u540D\u79F0\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u4ECB\u7ECD\u8BF7\u53C2\u8003\u6587\u6863\uFF1A ",(0,i.jsx)(n.a,{href:"/en/docs/cli/docker",children:"\u955C\u50CF\u7F16\u8BD1-docker"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make image.push"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7F16\u8BD1\u7A0B\u5E8F\u3001\u7F16\u8BD1\u955C\u50CF\u5E76\u63A8\u9001\u955C\u50CF\u5230\u5DF2\u914D\u7F6E\u597D\u7684\u955C\u50CF\u4ED3\u5E93\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"make image.push TAG=xxx"})," \u53EF\u4EE5\u6307\u5B9A\u7F16\u8BD1\u751F\u6210\u7684\u955C\u50CF\u6807\u7B7E\u540D\u79F0\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"3\u7EDF\u4E00\u90E8\u7F72\u8C03\u8BD5\u6307\u4EE4",children:"3\uFF09\u7EDF\u4E00\u90E8\u7F72\u3001\u8C03\u8BD5\u6307\u4EE4"}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67B6\u63D0\u4F9B\u4E86\u5E38\u7528\u7684\u6307\u4EE4\u6765\u5B9E\u73B0 ",(0,i.jsx)(n.code,{children:"Kubernetes"})," \u96C6\u7FA4\u7684\u5BB9\u5668\u5316\u90E8\u7F72\uFF0C\u4EE5\u53CA\u4E00\u4F53\u5316\u7F16\u8BD1\u90E8\u7F72\u7684\u5F00\u53D1\u6307\u4EE4\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make deploy TAG=xxx"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u90E8\u7F72\u5F53\u524D\u670D\u52A1\u5230\u672C\u5730 ",(0,i.jsx)(n.code,{children:"kubeconfig"})," \u5DF2\u8FDE\u63A5\u7684 ",(0,i.jsx)(n.code,{children:"kubernetes"})," \u96C6\u7FA4\u4E2D\uFF0C\u5176\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"TAG"})," \u7528\u4E8E\u6307\u5B9A ",(0,i.jsx)(n.code,{children:"deploy"})," \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"overlays"})," \u76EE\u5F55\u3002\u7BA1\u7406\u90E8\u7F72 ",(0,i.jsx)(n.code,{children:"yaml"})," \u6587\u4EF6\u4F7F\u7528\u7684\u662F\u884C\u4E1A\u5185\u5E38\u7528\u7684 ",(0,i.jsx)(n.code,{children:"kustomize"})," \u5DE5\u5177\uFF0C\u5177\u4F53\u4ECB\u7ECD\u6587\u6863\u8BF7\u53C2\u8003\uFF1A ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/tasks/manage-kubernetes-objects/kustomization/",children:"https://kubernetes.io/zh-cn/docs/tasks/manage-kubernetes-objects/kustomization/"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:d(636739).Z+"",width:"3072",height:"1750"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"make image.push deploy TAG=xxx"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u662F\u5F00\u53D1\u8C03\u8BD5\u6307\u4EE4\uFF0C\u7528\u4E8E\u4E00\u6761\u6307\u4EE4 \u7F16\u8BD1\u4E8C\u8FDB\u5236\u6587\u4EF6\u3001\u7F16\u8BD1\u5E76\u63A8\u9001 ",(0,i.jsx)(n.code,{children:"Docker"})," \u955C\u50CF\u3001\u90E8\u7F72 ",(0,i.jsx)(n.code,{children:"Kubernetes"})," \u5E94\u7528\u5E76\u91CD\u542F\u5E94\u7528\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"4\u5927\u4ED3\u4E0B\u7684\u6846\u67B6\u5176\u4ED6\u6307\u4EE4",children:"4\u3001\u5927\u4ED3\u4E0B\u7684\u6846\u67B6\u5176\u4ED6\u6307\u4EE4"}),"\n",(0,i.jsxs)(n.p,{children:["\u6846\u67B6\u9488\u5BF9\u4E8E\u9879\u76EE\u5DE5\u7A0B\u7BA1\u7406\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u5DE5\u5177\u6307\u4EE4\u652F\u6301\uFF0C\u8FD9\u4E9B\u6307\u4EE4\u5F80\u5F80\u9700\u8981\u518D\u7279\u5B9A\u7684\u670D\u52A1\u76EE\u5F55\u4E0B\u6267\u884C\uFF0C\u4F8B\u5982 ",(0,i.jsx)(n.code,{children:"./app/\u670D\u52A1\u540D\u79F0"})]}),"\n",(0,i.jsxs)(n.h4,{id:"1-make-cli",children:["1\uFF09 ",(0,i.jsx)(n.code,{children:"make cli"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4E8E\u5347\u7EA7\u672C\u5730\u7684\u6846\u67B6 ",(0,i.jsx)(n.code,{children:"CLI"})," \u5230\u6700\u65B0\u7A33\u5B9A\u7248\u672C\u3002"]}),"\n",(0,i.jsxs)(n.h4,{id:"2-make-up",children:["2\uFF09 ",(0,i.jsx)(n.code,{children:"make up"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u5347\u7EA7\u672C\u5730\u7684\u6846\u67B6\u5230\u6700\u65B0\u793E\u533A\u7A33\u5B9A\u7248\u672C\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u4ECB\u7ECD\u8BF7\u53C2\u8003\u6587\u6863\uFF1A ",(0,i.jsx)(n.a,{href:"/en/docs/cli/up",children:"\u6846\u67B6\u5347\u7EA7-up"})]}),"\n",(0,i.jsxs)(n.h4,{id:"3-make-dao",children:["3\uFF09 ",(0,i.jsx)(n.code,{children:"make dao"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4E8E\u751F\u6210 ",(0,i.jsx)(n.code,{children:"DAO/Entity/DO"})," \u4EE3\u7801\u6587\u4EF6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u4ECB\u7ECD\u8BF7\u53C2\u8003\u6587\u6863\uFF1A ",(0,i.jsx)(n.a,{href:"/en/docs/cli/gen-dao",children:"\u6570\u636E\u89C4\u8303-gen dao"})]}),"\n",(0,i.jsxs)(n.h4,{id:"4-make-service",children:["4\uFF09 ",(0,i.jsx)(n.code,{children:"make service"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4E8E\u89E3\u6790 ",(0,i.jsx)(n.code,{children:"logic"})," \u76EE\u5F55\u5E76\u81EA\u52A8\u751F\u6210\u5185\u8C03\u7528\u63A5\u53E3\u3002\u8BE5\u6307\u4EE4\u5728 ",(0,i.jsx)(n.code,{children:"Goland IDE"})," \u4E0B\u5F80\u5F80\u4F7F\u7528\u81EA\u52A8\u5316\u7684 ",(0,i.jsx)(n.code,{children:"Watcher"})," \u6587\u4EF6\u53D8\u52A8\u6765\u81EA\u52A8\u751F\u6210\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\u5B98\u65B9\u6587\u6863\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u4ECB\u7ECD\u8BF7\u53C2\u8003\u6587\u6863\uFF1A ",(0,i.jsx)(n.a,{href:"/en/docs/cli/gen-service",children:"\u6A21\u5757\u89C4\u8303-gen service"})]}),"\n",(0,i.jsxs)(n.h4,{id:"5-make-enums",children:["5\uFF09 ",(0,i.jsx)(n.code,{children:"make enums"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4E8E\u89E3\u6790\u6307\u5B9A\u4EE3\u7801\u76EE\u5F55\uFF08\u9ED8\u8BA4\u4E3A ",(0,i.jsx)(n.code,{children:"api"})," \u76EE\u5F55\uFF09\u5E76\u81EA\u52A8\u751F\u6210 ",(0,i.jsx)(n.code,{children:"enums"})," \u52A0\u8F7D\u4EE3\u7801\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u4ECB\u7ECD\u8BF7\u53C2\u8003\u6587\u6863\uFF1A ",(0,i.jsx)(n.a,{href:"/en/docs/cli/gen-enums",children:"\u679A\u4E3E\u7EF4\u62A4-gen enums"})]}),"\n",(0,i.jsx)(n.h4,{id:"6\u66F4\u591A\u6307\u4EE4",children:"6\uFF09\u66F4\u591A\u6307\u4EE4"}),"\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u7684\u6307\u4EE4\u652F\u6301\u8BF7\u53C2\u8003\u6846\u67B6\u5B98\u7F51\u5DE5\u5177\u4ECB\u7ECD\u7AE0\u8282\uFF1A ",(0,i.jsx)(n.a,{href:"/en/docs/cli",children:"\u5F00\u53D1\u5DE5\u5177"})]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},636739:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/353b86069be6e3cb8834aab4aad32e84-3b27bb6bd46ad3b6a67d0a65245b3487.png"},811153:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/424878f3a64d0cca7899c6fd13a8b9c7-2150624de20d43a359ff6a06e92b9377.png"},789738:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/b0035d25d52202b3f1b38d18980bf3ff-5db9af58149b3a773ea029236a8f80e0.png"},809466:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/f02efd1e4c03b3cb111cb7b9015290ee-492f73639f5718b6bd81e7487275cddc.png"},175456:function(e,n,d){d.d(n,{Z:function(){return s}});let s=d.p+"assets/images/f9028ffb7bc51e7496f1d55b79091f73-2aaf25707e67167e56683b5474ab72dd.png"},250065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return l}});var s=d(667294);let i={},c=s.createContext(i);function l(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);