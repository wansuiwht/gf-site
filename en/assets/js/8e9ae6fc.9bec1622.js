"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[8808],{309455:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/NoSQL Redis","title":"NoSQL Redis","description":"Redis\u5ba2\u6237\u7aef\u7531 gredis \u6a21\u5757\u5b9e\u73b0\uff0c\u5e95\u5c42\u91c7\u7528\u4e86\u94fe\u63a5\u6c60\u8bbe\u8ba1\u3002","source":"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/NoSQL Redis.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/NoSQL Redis.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":12,"frontMatter":{"title":"NoSQL Redis","sidebar_position":12,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf"},"next":{"title":"Redis-\u914d\u7f6e\u7ba1\u7406","permalink":"/en/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"}}');var n=i(474848),o=i(28453);const r={title:"NoSQL Redis",sidebar_position:12,hide_title:!0},t=void 0,c={},l=[];function a(e){const s={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Redis\u5ba2\u6237\u7aef\u7531 ",(0,n.jsx)(s.code,{children:"gredis"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5e95\u5c42\u91c7\u7528\u4e86\u94fe\u63a5\u6c60\u8bbe\u8ba1\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u76ee\u524d ",(0,n.jsx)(s.code,{children:"gredis"})," \u6682\u4e0d\u652f\u6301\u5b98\u65b9 ",(0,n.jsx)(s.code,{children:"redis"})," \u96c6\u7fa4\u529f\u80fd\uff0c\u4f46\u652f\u6301\u963f\u91cc\u4e91 ",(0,n.jsx)(s.code,{children:"redis"})," \u96c6\u7fa4\u529f\u80fd\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-go",children:'import "github.com/gogf/gf/database/gredis"\n\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://godoc.org/github.com/gogf/gf/database/gredis",children:"https://godoc.org/github.com/gogf/gf/database/gredis"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u57fa\u672c\u4ecb\u7ecd\uff1a"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"gredis"})," \u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u6765\u8fdb\u884c ",(0,n.jsx)(s.code,{children:"Redis"})," \u8fde\u63a5\u7ba1\u7406\uff0c\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"Config"})," \u914d\u7f6e\u5bf9\u8c61\u6216\u8005 ",(0,n.jsx)(s.code,{children:"Set*"})," \u65b9\u6cd5\u53ef\u4ee5\u5bf9\u8fde\u63a5\u6c60\u7684\u5c5e\u6027\u8fdb\u884c\u7ba1\u7406\uff0c\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"Stats"})," \u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u8fde\u63a5\u6c60\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u6700\u5e38\u7528\u7684\u662f ",(0,n.jsx)(s.code,{children:"Do/DoVar"})," \u65b9\u6cd5\uff0c\u6267\u884c\u540c\u6b65\u6307\u4ee4\uff0c\u901a\u8fc7\u5411 ",(0,n.jsx)(s.code,{children:"Redis Server"})," \u53d1\u9001\u5bf9\u5e94\u7684 ",(0,n.jsx)(s.code,{children:"Redis API"})," \u547d\u4ee4\uff0c\u6765\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"Redis Server"})," \u7684\u670d\u52a1\u3002 ",(0,n.jsx)(s.code,{children:"Do/Var"})," \u65b9\u6cd5\u6700\u5927\u7684\u7279\u70b9\u662f\u5185\u90e8\u81ea\u884c\u4ece\u8fde\u63a5\u6c60\u4e2d\u83b7\u53d6\u8fde\u63a5\u5bf9\u8c61\uff0c\u4f7f\u7528\u5b8c\u6bd5\u540e\u81ea\u52a8\u4e22\u56de\u8fde\u63a5\u6c60\u4e2d\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u624b\u52a8\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"Close"})," \u65b9\u6cd5\uff0c\u65b9\u4fbf\u4f7f\u7528\u3002"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Redis\u4e2d\u6587\u624b\u518c\u8bf7\u53c2\u8003\uff1a ",(0,n.jsx)(s.a,{href:"http://redisdoc.com/",children:"http://redisdoc.com/"})]}),"\n",(0,n.jsxs)(s.li,{children:["Redis\u5b98\u65b9\u547d\u4ee4\u8bf7\u53c2\u8003\uff1a ",(0,n.jsx)(s.a,{href:"https://redis.io/commands",children:"https://redis.io/commands"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"gredis.Redis"})," \u5ba2\u6237\u7aef\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,n.jsx)(s.code,{children:"Close"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u7528\u4e8e\u5173\u95edRedis\u5ba2\u6237\u7aef\uff08\u540c\u65f6\u5173\u95ed\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u6c60\uff09\uff0c\u800c\u4e0d\u662f\u8fde\u63a5\u5bf9\u8c61\uff0c\u5f00\u53d1\u8005\u57fa\u672c\u4e0d\u4f1a\u7528\u5230\uff0c\u975e\u9ad8\u7ea7\u73a9\u5bb6\u8bf7\u4e0d\u8981\u4f7f\u7528\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>t});var d=i(296540);const n={},o=d.createContext(n);function r(e){const s=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(o.Provider,{value:s},e.children)}}}]);