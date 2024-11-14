"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[21480],{558954:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027","title":"ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027","description":"GoFrame\u6846\u67b6\u4e2dORM\u7ec4\u4ef6\u652f\u6301\u7684\u4e09\u79cd\u5b50\u67e5\u8be2\u7279\u6027\uff1aWhere\u5b50\u67e5\u8be2\u3001Having\u5b50\u67e5\u8be2\u53caFrom\u5b50\u67e5\u8be2\u3002\u901a\u8fc7\u793a\u4f8b\u8bb2\u89e3\u5982\u4f55\u5728Where\u3001Having\u6761\u4ef6\u4ee5\u53ca\u4f7f\u7528Model\u65b9\u6cd5\u521b\u5efa\u6a21\u578b\u65f6\u5229\u7528\u5b50\u67e5\u8be2\u63d0\u5347\u6570\u636e\u5e93\u67e5\u8be2\u6548\u7387\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2","slug":"/docs/core/gdb-chaining-query-sub-query","permalink":"/2.7.x/docs/core/gdb-chaining-query-sub-query","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-sub-query","title":"ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027","sidebar_position":8,"hide_title":true,"keywords":["ORM","\u5b50\u67e5\u8be2","Where \u5b50\u67e5\u8be2","Having \u5b50\u67e5\u8be2","From \u5b50\u67e5\u8be2","GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93\u67e5\u8be2","\u6570\u636e\u6a21\u578b","\u5b50\u67e5\u8be2\u8bed\u53e5"],"description":"GoFrame\u6846\u67b6\u4e2dORM\u7ec4\u4ef6\u652f\u6301\u7684\u4e09\u79cd\u5b50\u67e5\u8be2\u7279\u6027\uff1aWhere\u5b50\u67e5\u8be2\u3001Having\u5b50\u67e5\u8be2\u53caFrom\u5b50\u67e5\u8be2\u3002\u901a\u8fc7\u793a\u4f8b\u8bb2\u89e3\u5982\u4f55\u5728Where\u3001Having\u6761\u4ef6\u4ee5\u53ca\u4f7f\u7528Model\u65b9\u6cd5\u521b\u5efa\u6a21\u578b\u65f6\u5229\u7528\u5b50\u67e5\u8be2\u63d0\u5347\u6570\u636e\u5e93\u67e5\u8be2\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67e5\u8be2-Union/UnionAll","permalink":"/2.7.x/docs/core/gdb-chaining-query-union"},"next":{"title":"ORM\u67e5\u8be2-\u5e38\u7528\u64cd\u4f5c\u793a\u4f8b","permalink":"/2.7.x/docs/core/gdb-chaining-query-example"}}');var o=s(474848),i=s(28453);const d={slug:"/docs/core/gdb-chaining-query-sub-query",title:"ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027",sidebar_position:8,hide_title:!0,keywords:["ORM","\u5b50\u67e5\u8be2","Where \u5b50\u67e5\u8be2","Having \u5b50\u67e5\u8be2","From \u5b50\u67e5\u8be2","GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93\u67e5\u8be2","\u6570\u636e\u6a21\u578b","\u5b50\u67e5\u8be2\u8bed\u53e5"],description:"GoFrame\u6846\u67b6\u4e2dORM\u7ec4\u4ef6\u652f\u6301\u7684\u4e09\u79cd\u5b50\u67e5\u8be2\u7279\u6027\uff1aWhere\u5b50\u67e5\u8be2\u3001Having\u5b50\u67e5\u8be2\u53caFrom\u5b50\u67e5\u8be2\u3002\u901a\u8fc7\u793a\u4f8b\u8bb2\u89e3\u5982\u4f55\u5728Where\u3001Having\u6761\u4ef6\u4ee5\u53ca\u4f7f\u7528Model\u65b9\u6cd5\u521b\u5efa\u6a21\u578b\u65f6\u5229\u7528\u5b50\u67e5\u8be2\u63d0\u5347\u6570\u636e\u5e93\u67e5\u8be2\u6548\u7387\u3002"},a=void 0,c={},t=[{value:"<code>Where</code> \u5b50\u67e5\u8be2",id:"where-\u5b50\u67e5\u8be2",level:2},{value:"<code>Having</code> \u5b50\u67e5\u8be2",id:"having-\u5b50\u67e5\u8be2",level:2},{value:"<code>From</code> \u5b50\u67e5\u8be2",id:"from-\u5b50\u67e5\u8be2",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u76ee\u524d\u652f\u6301\u5e38\u89c1\u7684\u4e09\u79cd\u8bed\u6cd5\u7684\u5b50\u67e5\u8be2\uff1a ",(0,o.jsx)(n.code,{children:"Where"})," \u5b50\u67e5\u8be2\u3001 ",(0,o.jsx)(n.code,{children:"Having"})," \u5b50\u67e5\u8be2\u53ca ",(0,o.jsx)(n.code,{children:"From"})," \u5b50\u67e5\u8be2\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"where-\u5b50\u67e5\u8be2",children:[(0,o.jsx)(n.code,{children:"Where"})," \u5b50\u67e5\u8be2"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,o.jsx)(n.code,{children:"Where"})," \u6761\u4ef6\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2\u8bed\u53e5\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Model("orders").Where("amount > ?", g.Model("orders").Fields("AVG(amount)")).Scan(&orders)\n// SELECT * FROM "orders" WHERE amount > (SELECT AVG(amount) FROM "orders")\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"having-\u5b50\u67e5\u8be2",children:[(0,o.jsx)(n.code,{children:"Having"})," \u5b50\u67e5\u8be2"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,o.jsx)(n.code,{children:"Having"})," \u6761\u4ef6\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2\u8bed\u53e5\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'subQuery := g.Model("users").Fields("AVG(age)").WhereLike("name", "name%")\ng.Model("users").Fields("AVG(age) as avgage").Group("name").Having("AVG(age) > ?", subQuery).Scan(&results)\n// SELECT AVG(age) as avgage FROM `users` GROUP BY `name` HAVING AVG(age) > (SELECT AVG(age) FROM `users` WHERE name LIKE "name%")\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"from-\u5b50\u67e5\u8be2",children:[(0,o.jsx)(n.code,{children:"From"})," \u5b50\u67e5\u8be2"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u5728\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"Model"})," \u65b9\u6cd5\u521b\u5efa\u6a21\u578b\u65f6\u4f7f\u7528\u5b50\u67e5\u8be2\u8bed\u53e5\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Model("? as u", g.Model("users").Fields("name", "age")).Where("age", 18).Scan(&users)\n// SELECT * FROM (SELECT `name`,`age` FROM `users`) as u WHERE `age` = 18\n\nsubQuery1 := g.Model("users").Fields("name")\nsubQuery2 := g.Model("pets").Fields("name")\ng.Model("? as u, ? as p", subQuery1, subQuery2).Scan(&users)\n// SELECT * FROM (SELECT `name` FROM `users`) as u, (SELECT `name` FROM `pets`) as p\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var r=s(296540);const o={},i=r.createContext(o);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);