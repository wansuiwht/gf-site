"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["70314"],{641249:function(e,r,i){i.r(r),i.d(r,{metadata:()=>n,contentTitle:()=>l,default:()=>a,assets:()=>t,toc:()=>o,frontMatter:()=>d});var n=JSON.parse('{"id":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.3 2018-12-26","title":"v1.3 2018-12-26","description":"\u672C\u6B21\u53D1\u5E03\u7684GoFrame\u6846\u67B6v1.3\u7248\u672C\u6DB5\u76D6\u591A\u4E2A\u65B0\u7279\u6027\uFF0C\u5305\u62ECgform\u7684\u91CD\u6784\u3001WebServer\u5206\u7EC4\u8DEF\u7531\u53CARewrite\u8DEF\u7531\u91CD\u5199\u7279\u6027\uFF0C\u5E76\u6539\u5584\u6846\u67B6\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u81EA\u52A8\u8BC6\u522B\u3002\u6B64\u5916\uFF0C\u96C6\u6210\u4E86Travis CI\u81EA\u52A8\u5316\u6784\u5EFA\u4E0E\u6D4B\u8BD5\uFF0C\u4F18\u5316\u4E86WebServer\u9759\u6001\u6587\u4EF6\u670D\u52A1\uFF0C\u63D0\u5347\u4E86gcache\u6027\u80FD\uFF0C\u5E76\u4FEE\u590D\u591A\u9879\u529F\u80FDBug\uFF0C\u589E\u5F3A\u4E86\u6574\u4F53\u7684\u7A33\u5B9A\u6027\u548C\u6269\u5C55\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.3 2018-12-26.md","sourceDirName":"release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x","slug":"/release/v1.3.0","permalink":"/2.7.x/release/v1.3.0","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/release/\u5386\u53F2\u7248\u672C\u8BB0\u5F55 v1.x/v1.3 2018-12-26.md","tags":[],"version":"2.7.x","lastUpdatedBy":"hailaz","lastUpdatedAt":1731902366000,"sidebarPosition":13,"frontMatter":{"slug":"/release/v1.3.0","title":"v1.3 2018-12-26","sidebar_position":13,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","v1.3","gform","WebServer","gcache","gredis","Travis CI","gview","Bug Fix"],"description":"\u672C\u6B21\u53D1\u5E03\u7684GoFrame\u6846\u67B6v1.3\u7248\u672C\u6DB5\u76D6\u591A\u4E2A\u65B0\u7279\u6027\uFF0C\u5305\u62ECgform\u7684\u91CD\u6784\u3001WebServer\u5206\u7EC4\u8DEF\u7531\u53CARewrite\u8DEF\u7531\u91CD\u5199\u7279\u6027\uFF0C\u5E76\u6539\u5584\u6846\u67B6\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u81EA\u52A8\u8BC6\u522B\u3002\u6B64\u5916\uFF0C\u96C6\u6210\u4E86Travis CI\u81EA\u52A8\u5316\u6784\u5EFA\u4E0E\u6D4B\u8BD5\uFF0C\u4F18\u5316\u4E86WebServer\u9759\u6001\u6587\u4EF6\u670D\u52A1\uFF0C\u63D0\u5347\u4E86gcache\u6027\u80FD\uFF0C\u5E76\u4FEE\u590D\u591A\u9879\u529F\u80FDBug\uFF0C\u589E\u5F3A\u4E86\u6574\u4F53\u7684\u7A33\u5B9A\u6027\u548C\u6269\u5C55\u6027\u3002"},"sidebar":"releaseSidebar","previous":{"title":"v1.4 2019-01-24","permalink":"/2.7.x/release/v1.4.0"},"next":{"title":"v1.2 2018-11-26","permalink":"/2.7.x/release/v1.2.0"}}'),s=i("785893"),c=i("250065");let d={slug:"/release/v1.3.0",title:"v1.3 2018-12-26",sidebar_position:13,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","v1.3","gform","WebServer","gcache","gredis","Travis CI","gview","Bug Fix"],description:"\u672C\u6B21\u53D1\u5E03\u7684GoFrame\u6846\u67B6v1.3\u7248\u672C\u6DB5\u76D6\u591A\u4E2A\u65B0\u7279\u6027\uFF0C\u5305\u62ECgform\u7684\u91CD\u6784\u3001WebServer\u5206\u7EC4\u8DEF\u7531\u53CARewrite\u8DEF\u7531\u91CD\u5199\u7279\u6027\uFF0C\u5E76\u6539\u5584\u6846\u67B6\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u81EA\u52A8\u8BC6\u522B\u3002\u6B64\u5916\uFF0C\u96C6\u6210\u4E86Travis CI\u81EA\u52A8\u5316\u6784\u5EFA\u4E0E\u6D4B\u8BD5\uFF0C\u4F18\u5316\u4E86WebServer\u9759\u6001\u6587\u4EF6\u670D\u52A1\uFF0C\u63D0\u5347\u4E86gcache\u6027\u80FD\uFF0C\u5E76\u4FEE\u590D\u591A\u9879\u529F\u80FDBug\uFF0C\u589E\u5F3A\u4E86\u6574\u4F53\u7684\u7A33\u5B9A\u6027\u548C\u6269\u5C55\u6027\u3002"},l=void 0,t={},o=[{value:"\u65B0\u7279\u6027",id:"\u65B0\u7279\u6027",level:3},{value:"\u65B0\u529F\u80FD",id:"\u65B0\u529F\u80FD",level:3},{value:"\u529F\u80FD\u6539\u8FDB",id:"\u529F\u80FD\u6539\u8FDB",level:3},{value:"Bug Fix",id:"bug-fix",level:3}];function h(e){let r={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"\u65B0\u7279\u6027",children:"\u65B0\u7279\u6027"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\u5BF9 ",(0,s.jsx)(r.code,{children:"gform"})," \u5B8C\u6210\u91CD\u6784\uFF0C\u4EE5\u63D0\u9AD8\u6269\u5C55\u6027\uFF0C\u5E76\u4FEE\u590D\u90E8\u5206\u7EC6\u8282\u95EE\u9898\u3001\u5B8C\u5584\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B( ",(0,s.jsx)(r.a,{href:"https://wiki.goframe.org/database/orm/index",children:"https://goframe.org/database/orm/index"}),")\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"WebServer"})," \u8DEF\u7531\u6CE8\u518C\u65B0\u589E\u5206\u7EC4\u8DEF\u7531\u7279\u6027( ",(0,s.jsx)(r.a,{href:"https://wiki.goframe.org/net/ghttp/group",children:"https://goframe.org/net/ghttp/group"}),");"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"WebServer"})," \u65B0\u589E ",(0,s.jsx)(r.code,{children:"Rewrite"})," \u8DEF\u7531\u91CD\u5199\u7279\u6027( ",(0,s.jsx)(r.a,{href:"https://wiki.goframe.org/net/ghttp/static",children:"https://goframe.org/net/ghttp/static"}),");"]}),"\n",(0,s.jsx)(r.li,{children:"\u589E\u52A0\u6846\u67B6\u8FD0\u884C\u65F6\u5BF9\u5F00\u53D1\u73AF\u5883\u7684\u81EA\u52A8\u8BC6\u522B\uFF1B"}),"\n",(0,s.jsxs)(r.li,{children:["\u589E\u52A0\u4E86 ",(0,s.jsx)(r.code,{children:"Travis CI"})," \u81EA\u52A8\u5316\u6784\u5EFA/\u6D4B\u8BD5\uFF1B"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u65B0\u529F\u80FD",children:"\u65B0\u529F\u80FD"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"WebServer"})," \u9759\u6001\u6587\u4EF6\u670D\u52A1\u529F\u80FD\uFF0C\u589E\u52A0 ",(0,s.jsx)(r.code,{children:"SetStaticPath"}),"/ ",(0,s.jsx)(r.code,{children:"AddStaticPath"})," \u65B9\u6CD5( ",(0,s.jsx)(r.a,{href:"https://wiki.goframe.org/net/ghttp/static",children:"https://goframe.org/net/ghttp/static"}),")\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"gform"})," \u65B0\u589E ",(0,s.jsx)(r.code,{children:"Filter"})," \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8FC7\u6EE4\u53C2\u6570\u4E2D\u7684\u975E\u8868\u5B57\u6BB5\u952E\u503C\u5BF9\uFF08 ",(0,s.jsx)(r.a,{href:"https://wiki.goframe.org/database/orm/linkop",children:"https://goframe.org/database/orm/linkop"}),"\uFF09\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"gcache"})," \u65B0\u589E ",(0,s.jsx)(r.code,{children:"Data"})," \u65B9\u6CD5\uFF0C\u7528\u4EE5\u83B7\u53D6\u6240\u6709\u7684\u7F13\u5B58\u6570\u636E\u9879\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"gredis"})," \u589E\u52A0 ",(0,s.jsx)(r.code,{children:"GetConn"})," \u65B9\u6CD5\u83B7\u53D6\u539F\u751Fredis\u8FDE\u63A5\u5BF9\u8C61\uFF1B"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u529F\u80FD\u6539\u8FDB",children:"\u529F\u80FD\u6539\u8FDB"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"gform"})," \u7684 ",(0,s.jsx)(r.code,{children:"Where"})," \u65B9\u6CD5\uFF0C\u652F\u6301 ",(0,s.jsx)(r.code,{children:"slice"})," \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u5E76\u66F4\u65B9\u4FBF\u5730\u652F\u6301 ",(0,s.jsx)(r.code,{children:"in"})," \u64CD\u4F5C\u67E5\u8BE2\uFF08 ",(0,s.jsx)(r.a,{href:"https://wiki.goframe.org/database/orm/linkop",children:"https://goframe.org/database/orm/linkop"}),"\uFF09\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"gproc"})," \u8FDB\u7A0B\u95F4\u901A\u4FE1\u6570\u636E\u7ED3\u6784\uFF0C\u5C06 ",(0,s.jsx)(r.code,{children:"pid"})," \u5B57\u6BB5\u4ECE ",(0,s.jsx)(r.code,{children:"16bit"})," \u6269\u5C55\u4E3A ",(0,s.jsx)(r.code,{children:"24bit"}),"\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"gconv"}),"/ ",(0,s.jsx)(r.code,{children:"gmap"}),"/ ",(0,s.jsx)(r.code,{children:"garray"}),"\uFF0C\u589E\u52A0\u82E5\u5E72\u64CD\u4F5C\u65B9\u6CD5\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"gview"})," \u6A21\u677F\u5F15\u64CE\u4E2D\u7684 ",(0,s.jsx)(r.code,{children:"date"})," \u5185\u7F6E\u51FD\u6570\uFF0C\u5F53\u7ED9\u5B9A\u7684\u65F6\u95F4\u6233\u4E3A\u7A7A\u65F6\u6253\u5370\u5F53\u524D\u7684\u7CFB\u7EDF\u65F6\u95F4\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"gview"})," \u6A21\u677F\u5F15\u64CE\u4E2D\uFF0C\u5F53\u6253\u5370\u7684\u53D8\u91CF\u4E0D\u5B58\u5728\u65F6\uFF0C\u663E\u793A\u4E3A\u7A7A\uFF08\u6807\u51C6\u5E93\u9ED8\u8BA4\u663E\u793A\u4E3A ",(0,s.jsx)(r.code,{children:"<no value>"}),"\uFF09\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"WebServer"}),"\uFF0C\u53BB\u6389 ",(0,s.jsx)(r.code,{children:"HANGUP"})," \u7684\u4FE1\u53F7\u76D1\u542C\uFF0C\u907F\u514D\u7A0B\u5E8F\u901A\u8FC7 ",(0,s.jsx)(r.code,{children:"nohup"})," \u8FD0\u884C\u65F6\u4EA7\u751F\u5F02\u5E38\u9000\u51FA\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u6539\u8FDB ",(0,s.jsx)(r.code,{children:"gcache"})," \u6027\u80FD\uFF0C\u5E76\u5B8C\u5584\u57FA\u51C6\u6D4B\u8BD5\uFF1B"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"gcache"})," \u5728\u975ELRU\u7279\u6027\u5F00\u542F\u65F6\u7684\u7F13\u5B58\u5173\u95ED\u8D44\u6E90\u7ADE\u4E89\u95EE\u9898\uFF0C\u5E76\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"doSetWithLockCheck"})," \u5185\u90E8\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"grand.intn"})," \u5185\u90E8\u65B9\u6CD5\u5728 ",(0,s.jsx)(r.code,{children:"x86"})," \u67B6\u6784\u4E0B\u7684\u968F\u673A\u6570\u4F4D\u6EA2\u51FA\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"gbinary"})," \u4E2D ",(0,s.jsx)(r.code,{children:"Int"})," \u65B9\u6CD5\u9488\u5BF9 ",(0,s.jsx)(r.code,{children:"[]byte"})," \u53C2\u6570\u957F\u5EA6\u81EA\u52A8\u5339\u914D\u9020\u6210\u7684\u5B57\u8282\u957F\u5EA6\u6EA2\u51FA\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"gjson"})," \u7531\u4E8E\u5B98\u65B9\u6807\u51C6\u5E93 ",(0,s.jsx)(r.code,{children:"json"})," \u4E0D\u652F\u6301 ",(0,s.jsx)(r.code,{children:"map[interface{}]*"})," \u7C7B\u578B\u9020\u6210\u7684Go\u53D8\u91CF\u7F16\u7801\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"garray"})," \u4E2D\u90E8\u5206\u65B9\u6CD5\u7684\u6570\u636E\u7ADE\u4E89\u95EE\u9898\uFF0C\u4FEE\u590D\u4E8C\u5206\u67E5\u627E\u6392\u5E8F\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"ghttp.Request.GetVar"})," \u65B9\u6CD5\u83B7\u53D6\u53C2\u6570\u95EE\u9898\uFF1B"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4FEE\u590D ",(0,s.jsx)(r.code,{children:"gform"})," \u7684\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u4E0D\u8D77\u4F5C\u7528\u7684\u95EE\u9898\uFF1B"]}),"\n"]})]})}function a(e={}){let{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,r,i){i.d(r,{Z:function(){return l},a:function(){return d}});var n=i(667294);let s={},c=n.createContext(s);function d(e){let r=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);