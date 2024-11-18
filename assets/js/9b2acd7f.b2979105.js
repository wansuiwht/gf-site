"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["17667"],{828119:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>t,default:()=>x,assets:()=>o,toc:()=>l,frontMatter:()=>c});var i=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/NoSQL Redis","title":"NoSQL Redis","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/NoSQL Redis.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/NoSQL Redis.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":12,"frontMatter":{"title":"NoSQL Redis","sidebar_position":12,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362"},"next":{"title":"Redis-\u914D\u7F6E\u7BA1\u7406","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/NoSQL Redis/Redis-\u914D\u7F6E\u7BA1\u7406"}}'),d=n("785893"),r=n("250065");let c={title:"NoSQL Redis",sidebar_position:12,hide_title:!0},t=void 0,o={},l=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u7EC4\u4EF6\u7279\u6027",id:"\u7EC4\u4EF6\u7279\u6027",level:2}];function h(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Redis"})," \u5BA2\u6237\u7AEF\u7531 ",(0,d.jsx)(s.code,{children:"gredis"})," \u7EC4\u4EF6\u5B9E\u73B0\uFF0C\u5E95\u5C42\u91C7\u7528\u4E86\u94FE\u63A5\u6C60\u8BBE\u8BA1\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4E3A\u4E86\u4FDD\u8BC1\u901A\u7528\u6027\u548C\u6269\u5C55\u6027\uFF0C ",(0,d.jsx)(s.code,{children:"gredis"})," \u7EC4\u4EF6\u91C7\u7528\u4E86 ",(0,d.jsx)(s.strong,{children:"\u547D\u4EE4\u901A\u9053"})," \u7684\u65B9\u5F0F\u6267\u884C ",(0,d.jsx)(s.code,{children:"Redis"})," \u64CD\u4F5C\u3002\u5F53\u60A8\u4E0D\u77E5\u9053\u547D\u4EE4\u901A\u9053\u7684\u53C2\u6570\u5982\u4F55\u4F20\u9012\u65F6\uFF0C\u53EF\u4EE5\u53C2\u8003\u7EC8\u7AEF\u547D\u4EE4\u884C\u7684\u53C2\u6570\u4F20\u9012\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u548C\u547D\u4EE4\u884C\u7684\u53C2\u6570\u4F20\u9012\u4FDD\u6301\u4E00\u81F4\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/database/gredis"\n'})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"\u7B80\u8981\u4ECB\u7ECD\uFF1A"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gredis"})," \u4F7F\u7528\u4E86\u8FDE\u63A5\u6C60\u6765\u8FDB\u884C ",(0,d.jsx)(s.code,{children:"Redis"})," \u8FDE\u63A5\u7BA1\u7406\uFF0C\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"Config"})," \u914D\u7F6E\u5BF9\u8C61\u6216\u8005 ",(0,d.jsx)(s.code,{children:"Set*"})," \u65B9\u6CD5\u53EF\u4EE5\u5BF9\u8FDE\u63A5\u6C60\u7684\u5C5E\u6027\u8FDB\u884C\u7BA1\u7406\uFF0C\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"Stats"})," \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u8FDE\u63A5\u6C60\u7684\u7EDF\u8BA1\u4FE1\u606F\u3002\u6211\u4EEC\u6700\u5E38\u7528\u7684\u662F ",(0,d.jsx)(s.code,{children:"Do"})," \u65B9\u6CD5\uFF0C\u6267\u884C\u540C\u6B65\u6307\u4EE4\uFF0C\u901A\u8FC7\u5411 ",(0,d.jsx)(s.code,{children:"Redis Server"})," \u53D1\u9001\u5BF9\u5E94\u7684 ",(0,d.jsx)(s.code,{children:"Redis API"})," \u547D\u4EE4\uFF0C\u6765\u4F7F\u7528 ",(0,d.jsx)(s.code,{children:"Redis Server"})," \u7684\u670D\u52A1\u3002 ",(0,d.jsx)(s.code,{children:"Do"})," \u65B9\u6CD5\u6700\u5927\u7684\u7279\u70B9\u662F\u5185\u90E8\u81EA\u884C\u4ECE\u8FDE\u63A5\u6C60\u4E2D\u83B7\u53D6\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u4F7F\u7528\u5B8C\u6BD5\u540E\u81EA\u52A8\u4E22\u56DE\u8FDE\u63A5\u6C60\u4E2D\uFF0C\u5F00\u53D1\u8005\u65E0\u9700\u624B\u52A8\u8C03\u7528 ",(0,d.jsx)(s.code,{children:"Close"})," \u65B9\u6CD5\uFF0C\u65B9\u4FBF\u4F7F\u7528\u3002"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"Redis"})," \u4E2D\u6587\u624B\u518C\u8BF7\u53C2\u8003\uFF1A ",(0,d.jsx)(s.a,{href:"http://redisdoc.com/",children:"http://redisdoc.com/"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"Redis"})," \u5B98\u65B9\u547D\u4EE4\u8BF7\u53C2\u8003\uFF1A ",(0,d.jsx)(s.a,{href:"https://redis.io/commands",children:"https://redis.io/commands"})]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gredis.Redis"})," \u5BA2\u6237\u7AEF\u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u4E2A ",(0,d.jsx)(s.code,{children:"Close"})," \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u5173\u95ED ",(0,d.jsx)(s.code,{children:"Redis"})," \u5BA2\u6237\u7AEF\uFF08\u540C\u65F6\u5173\u95ED\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u6C60\uFF09\uFF0C\u800C\u4E0D\u662F\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u5F00\u53D1\u8005\u57FA\u672C\u4E0D\u4F1A\u7528\u5230\uFF0C\u975E\u9AD8\u7EA7\u73A9\u5BB6\u8BF7\u4E0D\u8981\u4F7F\u7528\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u7EC4\u4EF6\u7279\u6027",children:"\u7EC4\u4EF6\u7279\u6027"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"gredis"})," \u5177\u6709\u4EE5\u4E0B\u663E\u8457\u7279\u6027\uFF1A"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u4F7F\u7528\u7B80\u4FBF\uFF0C\u529F\u80FD\u5F3A\u5927"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u7EDF\u4E00\u914D\u7F6E\u7EC4\u4EF6\u8FDB\u884C\u914D\u7F6E"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u652F\u6301\u5355\u5B9E\u4F8B\u53CA\u96C6\u7FA4\u5316\u64CD\u4F5C"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u652F\u6301 ",(0,d.jsx)(s.code,{children:"Redis"})," \u670D\u52A1\u6240\u6709\u7279\u6027"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u652F\u6301 ",(0,d.jsx)(s.code,{children:"OpenTelemetry"})," \u53EF\u89C2\u6D4B\u6027"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u652F\u6301\u5355\u4F8B\u5BF9\u8C61\u3001\u4E5F\u652F\u6301\u52A8\u6001\u521B\u5EFA\u5BF9\u8C61"}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u5F88\u9AD8\u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027"}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return c}});var i=n(667294);let d={},r=i.createContext(d);function c(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);