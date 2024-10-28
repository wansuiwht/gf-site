"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[85596],{595724:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var n=i(474848),d=i(28453);const r={title:"NoSQL Redis",sidebar_position:11},c=void 0,o={id:"\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/NoSQL Redis",title:"NoSQL Redis",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis/11-NoSQL Redis.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/11-NoSQL Redis",slug:"/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/",permalink:"/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/",draft:!1,unlisted:!1,tags:[],version:"2.7.x",sidebarPosition:11,frontMatter:{title:"NoSQL Redis",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u56fd\u9645\u5316-gi18n",permalink:"/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6/\u56fd\u9645\u5316-gi18n"},next:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"}},l={},t=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7ec4\u4ef6\u7279\u6027",id:"\u7ec4\u4ef6\u7279\u6027",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Redis"})," \u5ba2\u6237\u7aef\u7531 ",(0,n.jsx)(s.code,{children:"gredis"})," \u7ec4\u4ef6\u5b9e\u73b0\uff0c\u5e95\u5c42\u91c7\u7528\u4e86\u94fe\u63a5\u6c60\u8bbe\u8ba1\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1\u901a\u7528\u6027\u548c\u6269\u5c55\u6027\uff0c ",(0,n.jsx)(s.code,{children:"gredis"})," \u7ec4\u4ef6\u91c7\u7528\u4e86 ",(0,n.jsx)(s.strong,{children:"\u547d\u4ee4\u901a\u9053"})," \u7684\u65b9\u5f0f\u6267\u884c ",(0,n.jsx)(s.code,{children:"Redis"})," \u64cd\u4f5c\u3002\u5f53\u60a8\u4e0d\u77e5\u9053\u547d\u4ee4\u901a\u9053\u7684\u53c2\u6570\u5982\u4f55\u4f20\u9012\u65f6\uff0c\u53ef\u4ee5\u53c2\u8003\u7ec8\u7aef\u547d\u4ee4\u884c\u7684\u53c2\u6570\u4f20\u9012\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u548c\u547d\u4ee4\u884c\u7684\u53c2\u6570\u4f20\u9012\u4fdd\u6301\u4e00\u81f4\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,n.jsx)(s.p,{children:"\u5b89\u88c5\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"go get -u github.com/gogf/gf/contrib/nosql/redis/v2\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5f15\u7528\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'import (\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t// other imported packages.\n)\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/gogf/gf/tree/master/contrib/nosql/redis",children:"https://github.com/gogf/gf/tree/master/contrib/nosql/redis"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u7b80\u8981\u4ecb\u7ecd\uff1a"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"gredis"})," \u4f7f\u7528\u4e86\u8fde\u63a5\u6c60\u6765\u8fdb\u884c ",(0,n.jsx)(s.code,{children:"Redis"})," \u8fde\u63a5\u7ba1\u7406\uff0c\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"Config"})," \u914d\u7f6e\u5bf9\u8c61\u6216\u8005 ",(0,n.jsx)(s.code,{children:"Set*"})," \u65b9\u6cd5\u53ef\u4ee5\u5bf9\u8fde\u63a5\u6c60\u7684\u5c5e\u6027\u8fdb\u884c\u7ba1\u7406\uff0c\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"Stats"})," \u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u8fde\u63a5\u6c60\u7684\u7edf\u8ba1\u4fe1\u606f\u3002 ",(0,n.jsx)(s.code,{children:"gredis"})," \u4f7f\u7528\u63a5\u53e3\u5316\u7684\u8bbe\u8ba1\u6765\u89e3\u8026\u5bf9 ",(0,n.jsx)(s.code,{children:"redis"})," \u7684\u5e95\u5c42\u4f9d\u8d56\uff0c\u901a\u8fc7\u793e\u533a\u7ec4\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\u4e86 ",(0,n.jsx)(s.code,{children:"100+"})," \u9879\u5e38\u7528\u65b9\u6cd5\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u5206\u7ec4\u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u63a5\u53e3\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"gredis.Redis"})," \u5ba2\u6237\u7aef\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,n.jsx)(s.code,{children:"Close"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u7528\u4e8e\u5173\u95ed ",(0,n.jsx)(s.code,{children:"Redis"})," \u5ba2\u6237\u7aef\uff08\u540c\u65f6\u5173\u95ed\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u6c60\uff09\uff0c\u800c\u4e0d\u662f\u8fde\u63a5\u5bf9\u8c61\uff0c\u5f00\u53d1\u8005\u57fa\u672c\u4e0d\u4f1a\u7528\u5230\uff0c\u975e\u9ad8\u7ea7\u73a9\u5bb6\u8bf7\u4e0d\u8981\u4f7f\u7528\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u7ec4\u4ef6\u7279\u6027",children:"\u7ec4\u4ef6\u7279\u6027"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"gredis"})," \u5177\u6709\u4ee5\u4e0b\u663e\u8457\u7279\u6027\uff1a"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u4f7f\u7528\u7b80\u4fbf\uff0c\u529f\u80fd\u5f3a\u5927"}),"\n",(0,n.jsx)(s.li,{children:"\u7edf\u4e00\u914d\u7f6e\u7ec4\u4ef6\u8fdb\u884c\u914d\u7f6e"}),"\n",(0,n.jsxs)(s.li,{children:["\u63d0\u4f9b ",(0,n.jsx)(s.code,{children:"100+"})," \u9879\u5e38\u7528\u65b9\u6cd5\u793e\u533a\u7ec4\u4ef6\u5b9e\u73b0"]}),"\n",(0,n.jsx)(s.li,{children:"\u652f\u6301\u5355\u5b9e\u4f8b\u53ca\u96c6\u7fa4\u5316\u64cd\u4f5c"}),"\n",(0,n.jsxs)(s.li,{children:["\u652f\u6301 ",(0,n.jsx)(s.code,{children:"Redis"})," \u670d\u52a1\u6240\u6709\u7279\u6027"]}),"\n",(0,n.jsxs)(s.li,{children:["\u652f\u6301 ",(0,n.jsx)(s.code,{children:"OpenTelemetry"})," \u53ef\u89c2\u6d4b\u6027"]}),"\n",(0,n.jsx)(s.li,{children:"\u652f\u6301\u5355\u4f8b\u5bf9\u8c61\u3001\u4e5f\u652f\u6301\u52a8\u6001\u521b\u5efa\u5bf9\u8c61"}),"\n",(0,n.jsx)(s.li,{children:"\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/NoSQL%20Redis/Redis-%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86",children:"Redis-\u914d\u7f6e\u7ba1\u7406"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/NoSQL%20Redis/Redis-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B",children:"Redis-\u4f7f\u7528\u793a\u4f8b"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/NoSQL%20Redis/Redis-%E5%91%BD%E4%BB%A4%E4%BA%A4%E4%BA%92",children:"Redis-\u547d\u4ee4\u4ea4\u4e92"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/NoSQL%20Redis/Redis-Conn%E5%AF%B9%E8%B1%A1",children:"Redis-Conn\u5bf9\u8c61"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/NoSQL%20Redis/Redis-%E6%8E%A5%E5%8F%A3%E5%8C%96%E8%AE%BE%E8%AE%A1",children:"Redis-\u63a5\u53e3\u5316\u8bbe\u8ba1"})}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>o});var n=i(296540);const d={},r=n.createContext(d);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);