"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["81227"],{639478:function(e,n,c){c.r(n),c.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>j,assets:()=>o,toc:()=>h,frontMatter:()=>l});var i=JSON.parse('{"id":"release/v2.6 2023-12-19","title":"v2.6 2023-12-19","description":"GoFrame\u6846\u67B6\u53D1\u5E03v2.6.0\u7248\u672C\uFF0C\u5347\u7EA7Golang\u7248\u672C\uFF0C\u6539\u5584\u5F02\u6B65goroutine\u3001\u65B0\u589E\u65E5\u5FD7\u6253\u5370\u7ED3\u6784\u5316\u529F\u80FD\uFF0C\u6269\u5C55\u6570\u636E\u5E93\u5B9E\u73B0\u548C\u670D\u52A1\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u4F18\u5316\u5F00\u53D1\u5DE5\u5177\u53CA\u9519\u8BEF\u5904\u7406\u6A21\u5757\u3002\u6B64\u5916\uFF0C\u6539\u8FDBgmutex\u4E92\u65A5\u64CD\u4F5C\u548Cgcfg\u914D\u7F6E\u7BA1\u7406\uFF0C\u63D0\u5347\u6846\u67B6\u7684\u7A33\u5B9A\u6027\u548C\u529F\u80FD\u4E30\u5BCC\u6027\u3002","source":"@site/docs/release/v2.6 2023-12-19.md","sourceDirName":"release","slug":"/release/v2.6.0","permalink":"/en/release/v2.6.0","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/release/v2.6 2023-12-19.md","tags":[],"version":"current","lastUpdatedBy":"hailaz","lastUpdatedAt":1731902366000,"sidebarPosition":1,"frontMatter":{"slug":"/release/v2.6.0","title":"v2.6 2023-12-19","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","v2.6.0","\u4EE3\u7801\u6539\u8FDB","Bug\u4FEE\u590D","\u6570\u636E\u5E93\u5B9E\u73B0","\u670D\u52A1\u6CE8\u518C\u53D1\u73B0","\u5FAE\u670D\u52A1\u7EC4\u4EF6","\u5F00\u53D1\u5DE5\u5177","\u5F02\u6B65goroutine","\u65E5\u5FD7\u6253\u5370"],"description":"GoFrame\u6846\u67B6\u53D1\u5E03v2.6.0\u7248\u672C\uFF0C\u5347\u7EA7Golang\u7248\u672C\uFF0C\u6539\u5584\u5F02\u6B65goroutine\u3001\u65B0\u589E\u65E5\u5FD7\u6253\u5370\u7ED3\u6784\u5316\u529F\u80FD\uFF0C\u6269\u5C55\u6570\u636E\u5E93\u5B9E\u73B0\u548C\u670D\u52A1\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u4F18\u5316\u5F00\u53D1\u5DE5\u5177\u53CA\u9519\u8BEF\u5904\u7406\u6A21\u5757\u3002\u6B64\u5916\uFF0C\u6539\u8FDBgmutex\u4E92\u65A5\u64CD\u4F5C\u548Cgcfg\u914D\u7F6E\u7BA1\u7406\uFF0C\u63D0\u5347\u6846\u67B6\u7684\u7A33\u5B9A\u6027\u548C\u529F\u80FD\u4E30\u5BCC\u6027\u3002"},"sidebar":"releaseSidebar","previous":{"title":"v2.7 2024-04-09","permalink":"/en/release/v2.7.0"},"next":{"title":"v2.5 2023-07-17","permalink":"/en/release/v2.5.0"}}'),s=c("785893"),d=c("250065");let l={slug:"/release/v2.6.0",title:"v2.6 2023-12-19",sidebar_position:1,hide_title:!0,keywords:["GoFrame","v2.6.0","\u4EE3\u7801\u6539\u8FDB","Bug\u4FEE\u590D","\u6570\u636E\u5E93\u5B9E\u73B0","\u670D\u52A1\u6CE8\u518C\u53D1\u73B0","\u5FAE\u670D\u52A1\u7EC4\u4EF6","\u5F00\u53D1\u5DE5\u5177","\u5F02\u6B65goroutine","\u65E5\u5FD7\u6253\u5370"],description:"GoFrame\u6846\u67B6\u53D1\u5E03v2.6.0\u7248\u672C\uFF0C\u5347\u7EA7Golang\u7248\u672C\uFF0C\u6539\u5584\u5F02\u6B65goroutine\u3001\u65B0\u589E\u65E5\u5FD7\u6253\u5370\u7ED3\u6784\u5316\u529F\u80FD\uFF0C\u6269\u5C55\u6570\u636E\u5E93\u5B9E\u73B0\u548C\u670D\u52A1\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u4F18\u5316\u5F00\u53D1\u5DE5\u5177\u53CA\u9519\u8BEF\u5904\u7406\u6A21\u5757\u3002\u6B64\u5916\uFF0C\u6539\u8FDBgmutex\u4E92\u65A5\u64CD\u4F5C\u548Cgcfg\u914D\u7F6E\u7BA1\u7406\uFF0C\u63D0\u5347\u6846\u67B6\u7684\u7A33\u5B9A\u6027\u548C\u529F\u80FD\u4E30\u5BCC\u6027\u3002"},r=void 0,o={},h=[{value:"\u529F\u80FD\u6539\u8FDB",id:"\u529F\u80FD\u6539\u8FDB",level:2},{value:"\u793E\u533A\u7EC4\u4EF6",id:"\u793E\u533A\u7EC4\u4EF6",level:2},{value:"\u914D\u7F6E\u7BA1\u7406",id:"\u914D\u7F6E\u7BA1\u7406",level:3},{value:"\u6570\u636E\u5E93\u5B9E\u73B0",id:"\u6570\u636E\u5E93\u5B9E\u73B0",level:3},{value:"\u670D\u52A1\u6CE8\u518C\u53D1\u73B0",id:"\u670D\u52A1\u6CE8\u518C\u53D1\u73B0",level:3},{value:"\u5FAE\u670D\u52A1\u7EC4\u4EF6",id:"\u5FAE\u670D\u52A1\u7EC4\u4EF6",level:3},{value:"\u5F00\u53D1\u5DE5\u5177",id:"\u5F00\u53D1\u5DE5\u5177",level:2}];function x(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5927\u5BB6\u597D\u554A\uFF0C ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u4ECA\u5929\u53D1\u5E03\u4E86 ",(0,s.jsx)(n.code,{children:"v2.6.0"})," \u6B63\u5F0F\u7248\u672C\u5566\uFF01\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F"]}),"\n",(0,s.jsxs)(n.p,{children:["\u672C\u6B21\u7248\u672C\u4E3B\u8981\u662F\u5927\u91CF\u7684\u4EE3\u7801\u6539\u8FDB\u548C ",(0,s.jsx)(n.code,{children:"BugFix"})," \u5DE5\u4F5C\u3002\u7531\u4E8E\u672C\u6B21\u7248\u672C\u53D8\u66F4\u5185\u5BB9\u8F83\u591A\uFF0C\u4EE5\u4E0B\u4E2D\u6587\u4ECB\u7ECD\u4E00\u4E9B\u8F83\u4E3A\u91CD\u8981\u7684\u6539\u8FDB\u70B9\uFF0C\u8BE6\u7EC6\u7684 ",(0,s.jsx)(n.code,{children:"ChangeLog"})," \u8BF7\u53C2\u8003\uFF08\u7279\u522B\u662F ",(0,s.jsx)(n.code,{children:"BugFix"}),"\uFF09\uFF1A ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/releases/tag/v2.6.0",children:"https://github.com/gogf/gf/releases/tag/v2.6.0"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5B8C\u6574\u4EE3\u7801\u53D8\u66F4:",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/compare/v2.5.0...v2.6.0",children:"https://github.com/gogf/gf/compare/v2.5.0...v2.6.0"})]}),"\n",(0,s.jsx)(n.p,{children:"\u611F\u8C22\u672C\u6B21\u6240\u6709\u7684\u8D21\u732E\u5F00\u53D1\u8005\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c(354459).Z+"",width:"992",height:"468"})}),"\n",(0,s.jsx)(n.h2,{id:"\u529F\u80FD\u6539\u8FDB",children:"\u529F\u80FD\u6539\u8FDB"}),"\n",(0,s.jsxs)(n.p,{children:["\u6846\u67B6\u6700\u4F4E\u4F9D\u8D56\u7684 ",(0,s.jsx)(n.code,{children:"Golang"})," \u7248\u672C\u4ECE ",(0,s.jsx)(n.code,{children:"v1.15"})," \u5347\u7EA7\u5230 ",(0,s.jsx)(n.code,{children:"v1.18"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"g"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"g.Go\u65B9"})," \u6CD5\uFF0C\u7528\u4E8E\u4FBF\u6377\u521B\u5EFA\u5E26\u6709 ",(0,s.jsx)(n.code,{children:"ctx"})," \u548C ",(0,s.jsx)(n.code,{children:"recover"})," \u53C2\u6570\u7684\u5F02\u6B65 ",(0,s.jsx)(n.code,{children:"goroutine"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"glog"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"Handler"})," \u56DE\u8C03\u5904\u7406\u51FD\u6570\u7684 ",(0,s.jsx)(n.code,{children:"HandlerInput"})," \u8F93\u5165\u53C2\u6570\uFF0C\u589E\u52A0 ",(0,s.jsx)(n.code,{children:"Values"})," \u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u4E3A\u65E5\u5FD7\u6253\u5370\u65F6\u7684\u8F93\u5165\u53C2\u6570\u5217\u8868\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/core/glog-handler",children:"\u65E5\u5FD7\u7EC4\u4EF6-Handler"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"HandlerStructure"})," \u901A\u7528\u7EC4\u4EF6\u65B9\u6CD5\uFF0C\u5C06\u65E5\u5FD7\u6253\u5370\u5185\u5BB9\u6309\u7167\u7ED3\u6784\u5316\u53C2\u6570\u6253\u5370\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/core/glog-handler",children:"\u65E5\u5FD7\u7EC4\u4EF6-Handler"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB\u65E5\u5FD7\u6587\u4EF6 ",(0,s.jsx)(n.code,{children:"rotate"})," \u903B\u8F91\uFF0C\u89E3\u51B3\u5728\u4E2A\u522B\u573A\u666F\u4E0B\u6587\u4EF6\u65E0\u6CD5 ",(0,s.jsx)(n.code,{children:"rotate"})," \u7684\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gerror"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u589E\u52A0\u9519\u8BEF\u5806\u6808\u6A21\u5F0F\uFF08 ",(0,s.jsx)(n.code,{children:"brief/detail"}),"\uFF09\uFF1A\u5728 ",(0,s.jsx)(n.code,{children:"brief"})," \u6A21\u5F0F\u4E0B\uFF0C\u9519\u8BEF\u5806\u6808\u4EC5\u4F1A\u6253\u5370\u975E\u6846\u67B6\u7EC4\u4EF6\u5806\u6808\u3002\u5728 ",(0,s.jsx)(n.code,{children:"detail"})," \u6A21\u5F0F\u4E0B\uFF0C\u9519\u8BEF\u5806\u6808\u4F1A\u6253\u5370\u5B8C\u6574\u7684\u6846\u67B6\u4EE3\u7801\u8C03\u7528\u94FE\u8DEF\u3002\u6846\u67B6\u9ED8\u8BA4\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"brief"})," \u6A21\u5F0F\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/core/gerror-other",children:"\u9519\u8BEF\u5904\u7406-\u5176\u4ED6\u7279\u6027"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcode"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"gcode.CodeInternalPanic"})," \u9519\u8BEF\u7801\uFF0C\u6846\u67B6\u7EC4\u4EF6\u6355\u83B7\u7684\u6240\u6709 ",(0,s.jsx)(n.code,{children:"panic"})," \u9519\u8BEF\u5C06\u4F1A\u4EE5\u6B64\u9519\u8BEF\u7801\u8FD4\u56DE\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gmap"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"Diff"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5BF9\u6BD4\u5E76\u8FD4\u56DE\u4E24\u4E2A ",(0,s.jsx)(n.code,{children:"Map"})," \u7684\u5DEE\u5F02\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gaes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"PKCS7Padding/PKCS7UnPadding"})," \u65B9\u6CD5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gdb"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5220\u9664 ",(0,s.jsx)(n.code,{children:"ConvertDataForRecord"})," \u8F6C\u6362\u65B9\u6CD5\uFF0C\u65B0\u589E ",(0,s.jsx)(n.code,{children:"ConvertValueForField"})," \u8F6C\u6362\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:"CheckLocalTypeForField"})," \u65B9\u6CD5\uFF0C\u8FD4\u56DE\u53C2\u6570\u7C7B\u578B ",(0,s.jsx)(n.code,{children:"string"})," \u4FEE\u6539\u4E3A ",(0,s.jsx)(n.code,{children:"LocalType"})," \u7C7B\u578B\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8FD9\u4E24\u4E2A\u4E3B\u8981\u662F\u6570\u636E\u5E93\u5B9E\u73B0\u4F1A\u7528\u5230\uFF0C\u901A\u5E38\u5728\u793E\u533A\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u3002\u5982\u679C\u4F7F\u7528\u8005\u672C\u5730\u6709 ",(0,s.jsx)(n.code,{children:"gdb.DB"})," \u63A5\u53E3\u7684\u5B9E\u73B0\u9700\u8981\u6CE8\u610F\u8FD9\u4E2A\u6539\u52A8\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"Model.Partition"})," \u65B9\u6CD5\uFF0C\u5141\u8BB8\u6570\u636E\u5E93\u64CD\u4F5C\u65F6\u7528\u6237\u663E\u5F0F\u6307\u5B9A\u5206\u533A\u53C2\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"Model.LeftJoinOnFields/RightJoinOnFields/InnerJoinOnFields"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u66F4\u4FBF\u6377\u5B9E\u73B0 ",(0,s.jsx)(n.code,{children:"Join"})," \u5173\u8054\u64CD\u4F5C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,s.jsx)(n.code,{children:"Model.WherePrefixNotIn"})," \u65B9\u6CD5\u5B9E\u73B0\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gredis"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"Cluster"})," \u914D\u7F6E\u9879\uFF0C\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u4F7F\u7528\u96C6\u7FA4\u6A21\u5F0F\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/components/contrib-nosql-redis-config",children:"Redis-\u914D\u7F6E\u7BA1\u7406"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"Protocol"})," \u914D\u7F6E\u9879\uFF0C\u7528\u4E8E\u6307\u5B9A ",(0,s.jsx)(n.code,{children:"RESP"})," \u7248\u672C\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/components/contrib-nosql-redis-config",children:"Redis-\u914D\u7F6E\u7BA1\u7406"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gi18n"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB\u8F6C\u8BD1\u6587\u4EF6\u8BFB\u53D6\u903B\u8F91\uFF0C\u652F\u6301\u4ECE\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u81EA\u52A8\u8BFB\u53D6\u6587\u4EF6\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/core/gi18n-config",children:"I18N\u56FD\u9645\u5316-\u914D\u7F6E\u7BA1\u7406"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gclient"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"NoUrlEncode"})," \u7279\u6027\uFF0C\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"GET"})," \u8BF7\u6C42\u4E0D\u81EA\u52A8\u5BF9\u53C2\u6570\u505A ",(0,s.jsx)(n.code,{children:"UrlEncode"})," \u7F16\u7801\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ghttp"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB\u9000\u51FA\u4FE1\u53F7\u5904\u7406\uFF0C\u652F\u6301 ",(0,s.jsx)(n.code,{children:"windows"})," \u5E73\u53F0\u4E0B\u7684\u9000\u51FA\u4FE1\u53F7\u6355\u83B7\u540E\u4F18\u96C5\u9000\u51FA\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"goai"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301\u81EA\u52A8\u8BC6\u522B ",(0,s.jsx)(n.code,{children:"ghttp.UploadFile"})," \u7C7B\u578B\u4E3A ",(0,s.jsx)(n.code,{children:"OpenAPIv3"})," \u7684 ",(0,s.jsx)(n.code,{children:"File"})," \u7C7B\u578B\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53BB\u6389 ",(0,s.jsx)(n.code,{children:"Path"})," \u5BF9\u8C61\u4E0A\u4E0E ",(0,s.jsx)(n.code,{children:"Method"})," \u5BF9\u8C61\u4E0A\u91CD\u590D\u7684\u63CF\u8FF0\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u63A5\u53E3\u793A\u4F8B\u7684\u5B57\u6BB5\u7C7B\u578B\u6309\u7167\u53C2\u6570\u6570\u636E\u7C7B\u578B\u81EA\u52A8\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcfg"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"AdapterContent"})," \u914D\u7F6E\u63A5\u53E3\u5B9E\u73B0\uFF0C\u4F7F\u7528\u5177\u4F53\u7684\u914D\u7F6E\u5185\u5BB9\u6765\u5B9E\u73B0\u914D\u7F6E\u7BA1\u7406\u5BF9\u8C61\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/core/gcfg-interface-adapter-content",children:"\u914D\u7F6E\u7BA1\u7406-AdapterContent"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gctx"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"NeverDone"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5305\u88F9\u7ED9\u5B9A\u7684 ",(0,s.jsx)(n.code,{children:"ctx"})," \u5BF9\u8C61\u5E76\u8FD4\u56DE\u4E00\u4E2A\u6C38\u4E0D\u4F1A\u8FC7\u671F\u548C ",(0,s.jsx)(n.code,{children:"Cancel"})," \u7684 ",(0,s.jsx)(n.code,{children:"ctx"})," \u5BF9\u8C61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gfile"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9ED8\u8BA4\u521B\u5EFA\u7684\u6587\u4EF6\u6A21\u5F0F\u4ECE ",(0,s.jsx)(n.code,{children:"0777"})," \u6539\u4E3A\u4E86 ",(0,s.jsx)(n.code,{children:"0755"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"Copy/CopyFile/CopyDir"})," \u65B9\u6CD5\uFF0C\u589E\u52A0 ",(0,s.jsx)(n.code,{children:"CopyOption"})," \u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u63A7\u5236\u590D\u5236\u903B\u8F91\u7684\u53EF\u9009\u9879\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gmutex"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Golang"})," \u65B0\u7248\u672C\u7684 ",(0,s.jsx)(n.code,{children:"mutex"})," \u6539\u8FDB ",(0,s.jsx)(n.code,{children:"gmutex.Mutex"})," \u5BF9\u8C61\uFF0C\u76F4\u63A5\u4F7F\u7528\u65B0\u7248\u672C\u6807\u51C6\u5E93\u7684 ",(0,s.jsx)(n.code,{children:"TryLock/TryRLock"}),"\uFF0C\u4E0D\u518D\u81EA\u884C\u5B9E\u73B0\u8FD9\u4E9B\u91CD\u590D\u7684\u65B9\u6CD5\u3002\u4FDD\u7559 ",(0,s.jsx)(n.code,{children:"LockFunc/TryLockFunc"})," \u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"gmutex.RWMutex"})," \u5BF9\u8C61\uFF0C\u6269\u5C55\u81EA\u6807\u51C6\u5E93\u7684 ",(0,s.jsx)(n.code,{children:"sync.RWMutex"})," \u5BF9\u8C61\uFF0C\u6269\u5C55\u65B0\u589E\u4E86 ",(0,s.jsx)(n.code,{children:"LockFunc/TryLockFunc\u3001RLockFunc/TryRLockFunc"})," \u65B9\u6CD5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gstr"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"List2/ListAndTrim2/List3/ListAndTrim3"})," \u65B9\u6CD5\uFF0C\u5B9E\u73B0\u7C7B\u4F3C\u4E8E ",(0,s.jsx)(n.code,{children:"PHP list"})," \u65B9\u6CD5\u7279\u6027\uFF0C\u5C06\u5B57\u7B26\u4E32\u62C6\u5206\u540E\u4F5C\u4E3A\u591A\u4E2A\u7ED3\u679C\u503C\u8FD4\u56DE\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"CaseConvert"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u6309\u7167\u7ED9\u5B9A\u7684 ",(0,s.jsx)(n.code,{children:"CaseType"})," \u7C7B\u578B\u53C2\u6570\u6267\u884C\u5B57\u7B26\u4E32\u547D\u540D\u683C\u5F0F\u8F6C\u6362\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gconv"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"ConvertWithRefer"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u7ED9\u5B9A\u53C2\u6570\u4F5C\u4E3A\u7C7B\u578B\u53C2\u8003\uFF0C\u5E76\u8F6C\u6362\u7ED9\u5B9A\u53C2\u6570\u4E3A\u6307\u5B9A\u53C2\u6570\u7684\u7C7B\u578B\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gutil"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"FillStructWithDefault"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u81EA\u52A8\u901A\u8FC7\u8BFB\u53D6 ",(0,s.jsx)(n.code,{children:"struct tag"})," \u8BFB\u53D6\u9ED8\u8BA4\u503C\u5E76\u586B\u5145\u7ED9\u5B9A\u7684 ",(0,s.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61/\u6307\u9488\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gvalid"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,s.jsx)(n.code,{children:"enums"})," \u6821\u9A8C\u89C4\u5219\u4E0D\u652F\u6301 ",(0,s.jsx)(n.code,{children:"map"})," \u53C2\u6570\u7C7B\u578B\u7684\u95EE\u9898\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793E\u533A\u7EC4\u4EF6",children:"\u793E\u533A\u7EC4\u4EF6"}),"\n",(0,s.jsx)(n.h3,{id:"\u914D\u7F6E\u7BA1\u7406",children:"\u914D\u7F6E\u7BA1\u7406"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"contrib/config/consul"})," \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\u63A5\u53E3\u7684 ",(0,s.jsx)(n.code,{children:"consul"})," \u670D\u52A1\u5B9E\u73B0\uFF1A ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/config/consul",children:"https://github.com/gogf/gf/tree/master/contrib/config/consul"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6570\u636E\u5E93\u5B9E\u73B0",children:"\u6570\u636E\u5E93\u5B9E\u73B0"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"contrib/drivers/dm"})," \u7EC4\u4EF6\uFF1A"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301 ",(0,s.jsx)(n.code,{children:"schema"})," \u53C2\u6570\u914D\u7F6E\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301 ",(0,s.jsx)(n.code,{children:"time.Time/*time.Time"})," \u65F6\u95F4\u7C7B\u578B\u53C2\u6570\u64CD\u4F5C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"contrib/drivers/sqlite"})," \u7EC4\u4EF6\uFF0C\u652F\u6301 ",(0,s.jsx)(n.code,{children:"Insert Ignore"})," \u53CA ",(0,s.jsx)(n.code,{children:"Save"})," \u64CD\u4F5C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"contrib/drivers/sqlitecgo"})," \u7EC4\u4EF6\uFF0C\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"cgo"})," \u65B9\u5F0F\u652F\u6301 ",(0,s.jsx)(n.code,{children:"i386"})," \u7CFB\u7EDF\u67B6\u6784\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"contrib/nosql/redis"})," \u7EC4\u4EF6\uFF1A"]}),"\n",(0,s.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,s.jsx)(n.code,{children:"TLSConfig"})," \u914D\u7F6E\uFF0C\u4EE5\u652F\u6301 ",(0,s.jsx)(n.code,{children:"TLS"})," \u94FE\u63A5 ",(0,s.jsx)(n.code,{children:"Redis Server"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u589E\u52A0 ",(0,s.jsx)(n.code,{children:"Protocol"})," \u914D\u7F6E\u9879\uFF0C\u4EE5\u652F\u6301\u6700\u65B0\u7248\u672C\u7684 ",(0,s.jsx)(n.code,{children:"Redis Server"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u670D\u52A1\u6CE8\u518C\u53D1\u73B0",children:"\u670D\u52A1\u6CE8\u518C\u53D1\u73B0"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65B0\u589E ",(0,s.jsx)(n.code,{children:"contrib/registry/nacos"})," \u7EC4\u4EF6\uFF0C\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"nacos"})," \u5B9E\u73B0\u5FAE\u670D\u52A1\u7684\u6CE8\u518C\u53D1\u73B0\uFF1A ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/registry/nacos",children:"https://github.com/gogf/gf/tree/master/contrib/registry/nacos"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"contrib/registry/file"})," \u7EC4\u4EF6\uFF0C\u81EA\u52A8\u5220\u9664\u8FC7\u671F\u7684\u6CE8\u518C\u9879\uFF0C\u907F\u514D\u5BA2\u6237\u7AEF\u53D1\u73B0\u5E76\u8FDE\u63A5\u8FC7\u671F\u7684\u670D\u52A1\u7AEF\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,s.jsx)(n.code,{children:"contrib/registry/polaris"})," \u7EC4\u4EF6\u90E8\u5206\u5B9E\u73B0\u95EE\u9898\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5FAE\u670D\u52A1\u7EC4\u4EF6",children:"\u5FAE\u670D\u52A1\u7EC4\u4EF6"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"contrib/rpc/grpcx"})," \u7EC4\u4EF6\uFF1A"]}),"\n",(0,s.jsx)(n.li,{children:"\u5BA2\u6237\u7AEF\u652F\u6301\u76F4\u63A5\u7ED9\u5B9A\u94FE\u63A5\u5730\u5740\u8BBF\u95EE\u670D\u52A1\u7AEF\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5B8C\u5584\u5355\u6D4B\uFF0C\u63D0\u9AD8\u4EE3\u7801\u8D28\u91CF\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5F00\u53D1\u5DE5\u5177",children:"\u5F00\u53D1\u5DE5\u5177"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"cli"})," \u5DE5\u5177\u5B89\u88C5\u65B9\u5F0F\uFF0C\u989D\u5916\u652F\u6301 ",(0,s.jsx)(n.code,{children:"go install"})," \u5B89\u88C5\u65B9\u5F0F\uFF1A ",(0,s.jsx)(n.code,{children:"go install github.com/gogf/gf/cmd/gf/v2@latest"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"gf run"})," \u547D\u4EE4\uFF0C\u65B0\u589E ",(0,s.jsx)(n.code,{children:"WatchPaths/-w"})," \u914D\u7F6E\uFF0C\u652F\u6301\u6307\u5B9A\u76D1\u542C\u7684\u8DEF\u5F84\u5217\u8868\uFF0C\u907F\u514D\u9ED8\u8BA4\u76D1\u542C\u672C\u5730\u9879\u76EE\u6240\u6709\u9879\u76EE\u6587\u4EF6\u5F15\u53D1 ",(0,s.jsx)(n.code,{children:"too many opened files"})," \u95EE\u9898\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/cli/run",children:"\u81EA\u52A8\u7F16\u8BD1-run"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"gf gen ctrl"})," \u547D\u4EE4\uFF0C\u65B0\u589E ",(0,s.jsx)(n.code,{children:"Merge/-m"})," \u9009\u9879\uFF0C\u7528\u4EE5\u63A7\u5236\u751F\u6210\u7684\u63A7\u5236\u5668\u4EE3\u7801\u6587\u4EF6\u6309\u7167 ",(0,s.jsx)(n.code,{children:"api"})," \u5C42\u7684\u6587\u4EF6\u751F\u6210\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u6309\u7167 ",(0,s.jsx)(n.code,{children:"api"})," \u63A5\u53E3\u62C6\u5206\u4E3A\u4E0D\u540C\u7684\u63A5\u53E3\u5B9E\u73B0\u6587\u4EF6\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/cli/gen-ctrl",children:"\u63A5\u53E3\u89C4\u8303-gen ctrl"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"gf gen dao"})," \u547D\u4EE4\uFF0C\u65B0\u589E ",(0,s.jsx)(n.code,{children:"RemoveFieldPrefix/-rf"})," \u9009\u9879\uFF0C\u7528\u4E8E\u81EA\u52A8\u53BB\u6389\u751F\u6210\u8868\u5B57\u6BB5\u7684\u540D\u79F0\u524D\u7F00\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/cli/gen-dao",children:"\u6570\u636E\u89C4\u8303-gen dao"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"gf gen pbentity"})," \u547D\u4EE4\uFF0C\u65B0\u589E ",(0,s.jsx)(n.code,{children:"RemoveFieldPrefix/-rf"})," \u9009\u9879\uFF0C\u7528\u4E8E\u81EA\u52A8\u53BB\u6389\u751F\u6210\u8868\u5B57\u6BB5\u7684\u540D\u79F0\u524D\u7F00\uFF1A ",(0,s.jsx)(n.a,{href:"/en/docs/cli/gen-pbentity",children:"\u6570\u636E\u8868PB-gen pbentity"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"gf gen service"})," \u547D\u4EE4\uFF0C\u652F\u6301\u81EA\u52A8\u8BC6\u522B ",(0,s.jsx)(n.code,{children:"logic"})," \u6A21\u5757\u5BF9\u8C61\u7684\u65B9\u6CD5\u6CE8\u91CA\u751F\u6210\u5230 ",(0,s.jsx)(n.code,{children:"service"})," \u63A5\u53E3\u6587\u4EF6\u4E2D\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB ",(0,s.jsx)(n.code,{children:"gf version/gf -v"})," \u547D\u4EE4\uFF0C\u66F4\u8BE6\u7EC6\u7684\u5DE5\u5177\u7248\u672C\u3001\u8FD0\u884C\u73AF\u5883\u3001\u6846\u67B6\u7248\u672C\u4FE1\u606F\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6539\u8FDB\u5F00\u53D1\u5DE5\u5177\u7684\u521D\u59CB\u5316\u6548\u7387\uFF0C\u53BB\u6389\u5F71\u54CD\u521D\u59CB\u5316\u6548\u7387\u7684 ",(0,s.jsx)(n.code,{children:"init"})," \u5305\u65B9\u6CD5\u903B\u8F91\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4FEE\u590D ",(0,s.jsx)(n.code,{children:"gf gen dao"})," \u547D\u4EE4\u4E2D\u6307\u5B9A ",(0,s.jsx)(n.code,{children:"Link"})," \u6570\u636E\u5E93\u914D\u7F6E\u5931\u6548\u7684\u95EE\u9898\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u4ED6\u4E00\u4E9B\u7EC6\u8282\u4FEE\u590D\u3002"}),"\n"]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},354459:function(e,n,c){c.d(n,{Z:function(){return i}});let i=c.p+"assets/images/8cbb41ea81e456eb8a5a145520c9462a-3b599ecc240001260724f9f61b451e1c.png"},250065:function(e,n,c){c.d(n,{Z:function(){return r},a:function(){return l}});var i=c(667294);let s={},d=i.createContext(s);function l(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);