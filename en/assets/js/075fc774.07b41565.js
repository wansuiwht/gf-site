"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[30626],{803920:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-GroupOrderHaving","title":"ORM\u67e5\u8be2-Group/Order/Having","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684ORM\u8fdb\u884c\u67e5\u8be2\u64cd\u4f5c\uff0c\u5305\u62ec\u5206\u7ec4\u3001\u6392\u5e8f\u548c\u6761\u4ef6\u8fc7\u6ee4\u3002\u901a\u8fc7Group\u65b9\u6cd5\u5b9e\u73b0\u6570\u636e\u5206\u7ec4\uff0c\u901a\u8fc7Order\u65b9\u6cd5\u8fdb\u884c\u6392\u5e8f\uff0c\u4ee5\u53ca\u901a\u8fc7Having\u65b9\u6cd5\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u6761\u4ef6\u8fc7\u6ee4\uff0c\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u4ee3\u7801\u793a\u4f8b\u548c\u65b9\u6cd5\u8bf4\u660e\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u638c\u63e1\u6570\u636e\u5e93\u64cd\u4f5c\u6280\u80fd\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-GroupOrderHaving.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2","slug":"/docs/core/gdb-chaining-query-group-order-having","permalink":"/en/2.7.x/docs/core/gdb-chaining-query-group-order-having","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-GroupOrderHaving.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-group-order-having","title":"ORM\u67e5\u8be2-Group/Order/Having","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM","Group","Order","Having","\u6392\u5e8f","\u5206\u7ec4\u67e5\u8be2","\u6761\u4ef6\u8fc7\u6ee4","\u6570\u636e\u5e93\u67e5\u8be2"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684ORM\u8fdb\u884c\u67e5\u8be2\u64cd\u4f5c\uff0c\u5305\u62ec\u5206\u7ec4\u3001\u6392\u5e8f\u548c\u6761\u4ef6\u8fc7\u6ee4\u3002\u901a\u8fc7Group\u65b9\u6cd5\u5b9e\u73b0\u6570\u636e\u5206\u7ec4\uff0c\u901a\u8fc7Order\u65b9\u6cd5\u8fdb\u884c\u6392\u5e8f\uff0c\u4ee5\u53ca\u901a\u8fc7Having\u65b9\u6cd5\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u6761\u4ef6\u8fc7\u6ee4\uff0c\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u4ee3\u7801\u793a\u4f8b\u548c\u65b9\u6cd5\u8bf4\u660e\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u638c\u63e1\u6570\u636e\u5e93\u64cd\u4f5c\u6280\u80fd\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin","permalink":"/en/2.7.x/docs/core/gdb-chaining-query-join"},"next":{"title":"ORM\u67e5\u8be2-Union/UnionAll","permalink":"/en/2.7.x/docs/core/gdb-chaining-query-union"}}');var d=n(474848),i=n(28453);const s={slug:"/docs/core/gdb-chaining-query-group-order-having",title:"ORM\u67e5\u8be2-Group/Order/Having",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM","Group","Order","Having","\u6392\u5e8f","\u5206\u7ec4\u67e5\u8be2","\u6761\u4ef6\u8fc7\u6ee4","\u6570\u636e\u5e93\u67e5\u8be2"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u7684ORM\u8fdb\u884c\u67e5\u8be2\u64cd\u4f5c\uff0c\u5305\u62ec\u5206\u7ec4\u3001\u6392\u5e8f\u548c\u6761\u4ef6\u8fc7\u6ee4\u3002\u901a\u8fc7Group\u65b9\u6cd5\u5b9e\u73b0\u6570\u636e\u5206\u7ec4\uff0c\u901a\u8fc7Order\u65b9\u6cd5\u8fdb\u884c\u6392\u5e8f\uff0c\u4ee5\u53ca\u901a\u8fc7Having\u65b9\u6cd5\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u6761\u4ef6\u8fc7\u6ee4\uff0c\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u4ee3\u7801\u793a\u4f8b\u548c\u65b9\u6cd5\u8bf4\u660e\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u638c\u63e1\u6570\u636e\u5e93\u64cd\u4f5c\u6280\u80fd\u3002"},t=void 0,c={},a=[{value:"<code>Group/Order</code> \u5206\u7ec4\u4e0e\u6392\u5e8f",id:"grouporder-\u5206\u7ec4\u4e0e\u6392\u5e8f",level:2},{value:"<code>Having</code> \u6761\u4ef6\u8fc7\u6ee4",id:"having-\u6761\u4ef6\u8fc7\u6ee4",level:2}];function l(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h2,{id:"grouporder-\u5206\u7ec4\u4e0e\u6392\u5e8f",children:[(0,d.jsx)(r.code,{children:"Group/Order"})," \u5206\u7ec4\u4e0e\u6392\u5e8f"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"Group"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u5206\u7ec4\uff0c ",(0,d.jsx)(r.code,{children:"Order"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u6392\u5e8f\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age\ng.Model("user").Fields("COUNT(*) total,age").Group("age").All()\n\n// SELECT * FROM `student` ORDER BY class asc,course asc,score desc\ng.Model("student").Order("class asc,course asc,score desc").All()\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u540c\u65f6\uff0c ",(0,d.jsx)(r.code,{children:"goframe"})," \u7684 ",(0,d.jsx)(r.code,{children:"ORM"})," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u6392\u5e8f\u65b9\u6cd5\uff1a"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",children:"// \u6309\u7167\u6307\u5b9a\u5b57\u6bb5\u9012\u589e\u6392\u5e8f\nfunc (m *Model) OrderAsc(column string) *Model\n// \u6309\u7167\u6307\u5b9a\u5b57\u6bb5\u9012\u51cf\u6392\u5e8f\nfunc (m *Model) OrderDesc(column string) *Model\n// \u968f\u673a\u6392\u5e8f\nfunc (m *Model) OrderRandom() *Model\n"})}),"\n",(0,d.jsx)(r.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",children:'// SELECT `id`,`title` FROM `article` ORDER BY `created_at` ASC\ng.Model("article").Fields("id,title").OrderAsc("created_at").All()\n\n// SELECT `id`,`title` FROM `article` ORDER BY `views` DESC\ng.Model("article").Fields("id,title").OrderDesc("views").All()\n\n// SELECT `id`,`title` FROM `article` ORDER BY RAND()\ng.Model("article").Fields("id,title").OrderRandom().All()\n'})}),"\n",(0,d.jsxs)(r.h2,{id:"having-\u6761\u4ef6\u8fc7\u6ee4",children:[(0,d.jsx)(r.code,{children:"Having"})," \u6761\u4ef6\u8fc7\u6ee4"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"Having"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u6761\u4ef6\u8fc7\u6ee4\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age HAVING total>100\ng.Model("user").Fields("COUNT(*) total,age").Group("age").Having("total>100").All()\n\n// SELECT * FROM `student` ORDER BY class HAVING score>60\ng.Model("student").Order("class").Having("score>?", 60).All()\n'})})]})}function g(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>t});var o=n(296540);const d={},i=o.createContext(d);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);