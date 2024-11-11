"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[20670],{408075:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c","title":"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884cORM\u4e8b\u52a1\u5904\u7406\u7684\u57fa\u7840\u64cd\u4f5c\uff0c\u5305\u62ec\u5982\u4f55\u4f7f\u7528Begin\u3001Commit\u548cRollback\u65b9\u6cd5\u6765\u5f00\u542f\u3001\u63d0\u4ea4\u548c\u56de\u6eda\u4e8b\u52a1\u3002\u540c\u65f6\u7279\u522b\u63d0\u793a\u4e8b\u52a1\u64cd\u4f5c\u540e\u9700\u8981\u53ca\u65f6\u5173\u95ed\u4e8b\u52a1\u4ee5\u907f\u514d\u8d44\u6e90\u6cc4\u9732\uff0c\u5efa\u8bae\u4f7f\u7528Transaction\u95ed\u5305\u65b9\u6cd5\u5b9e\u73b0\u5b89\u5168\u4e8b\u52a1\u64cd\u4f5c\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406","slug":"/docs/core/gdb-transaction-basic","permalink":"/en/docs/core/gdb-transaction-basic","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u5904\u7406/ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-transaction-basic","title":"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c","sidebar_position":0,"hide_title":true,"keywords":["\u4e8b\u52a1\u64cd\u4f5c","Begin","Commit","Rollback","GoFrame","\u6570\u636e\u5e93\u64cd\u4f5c","Transaction","\u95ed\u5305\u65b9\u6cd5","gdb.Tx","\u94fe\u5f0f\u64cd\u4f5c"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884cORM\u4e8b\u52a1\u5904\u7406\u7684\u57fa\u7840\u64cd\u4f5c\uff0c\u5305\u62ec\u5982\u4f55\u4f7f\u7528Begin\u3001Commit\u548cRollback\u65b9\u6cd5\u6765\u5f00\u542f\u3001\u63d0\u4ea4\u548c\u56de\u6eda\u4e8b\u52a1\u3002\u540c\u65f6\u7279\u522b\u63d0\u793a\u4e8b\u52a1\u64cd\u4f5c\u540e\u9700\u8981\u53ca\u65f6\u5173\u95ed\u4e8b\u52a1\u4ee5\u907f\u514d\u8d44\u6e90\u6cc4\u9732\uff0c\u5efa\u8bae\u4f7f\u7528Transaction\u95ed\u5305\u65b9\u6cd5\u5b9e\u73b0\u5b89\u5168\u4e8b\u52a1\u64cd\u4f5c\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u4e8b\u52a1\u5904\u7406","permalink":"/en/docs/core/gdb-transaction"},"next":{"title":"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c","permalink":"/en/docs/core/gdb-transaction-closure"}}');var o=r(474848),t=r(28453);const c={slug:"/docs/core/gdb-transaction-basic",title:"ORM\u4e8b\u52a1\u5904\u7406-\u5e38\u89c4\u64cd\u4f5c",sidebar_position:0,hide_title:!0,keywords:["\u4e8b\u52a1\u64cd\u4f5c","Begin","Commit","Rollback","GoFrame","\u6570\u636e\u5e93\u64cd\u4f5c","Transaction","\u95ed\u5305\u65b9\u6cd5","gdb.Tx","\u94fe\u5f0f\u64cd\u4f5c"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u8fdb\u884cORM\u4e8b\u52a1\u5904\u7406\u7684\u57fa\u7840\u64cd\u4f5c\uff0c\u5305\u62ec\u5982\u4f55\u4f7f\u7528Begin\u3001Commit\u548cRollback\u65b9\u6cd5\u6765\u5f00\u542f\u3001\u63d0\u4ea4\u548c\u56de\u6eda\u4e8b\u52a1\u3002\u540c\u65f6\u7279\u522b\u63d0\u793a\u4e8b\u52a1\u64cd\u4f5c\u540e\u9700\u8981\u53ca\u65f6\u5173\u95ed\u4e8b\u52a1\u4ee5\u907f\u514d\u8d44\u6e90\u6cc4\u9732\uff0c\u5efa\u8bae\u4f7f\u7528Transaction\u95ed\u5305\u65b9\u6cd5\u5b9e\u73b0\u5b89\u5168\u4e8b\u52a1\u64cd\u4f5c\u3002"},d=void 0,s={},a=[{value:"\u4e00\u3001\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",id:"\u4e00\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",level:2},{value:"\u4e8c\u3001\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",id:"\u4e8c\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",level:2},{value:"\u4e09\u3001\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",id:"\u4e09\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",level:2},{value:"\u56db\u3001\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",id:"\u56db\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u5e38\u89c4\u7684\u4e8b\u52a1\u64cd\u4f5c\u65b9\u6cd5\u4e3a ",(0,o.jsx)(n.code,{children:"Begin/Commit/Rollback"}),"\uff0c\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u6307\u5b9a\u7279\u5b9a\u7684\u4e8b\u52a1\u64cd\u4f5c\u3002\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,o.jsx)(n.code,{children:"db.Begin"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e8b\u52a1\u7684\u64cd\u4f5c\u63a5\u53e3\uff0c\u7c7b\u578b\u4e3a ",(0,o.jsx)(n.code,{children:"gdb.Tx"}),"\uff0c\u901a\u8fc7\u8be5\u5bf9\u8c61\u6267\u884c\u540e\u7eed\u7684\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u5e76\u53ef\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"tx.Commit"})," \u63d0\u4ea4\u4fee\u6539\uff0c\u6216\u8005\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"tx.Rollback"})," \u56de\u6eda\u4fee\u6539\u3002"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["\u5e38\u89c1\u95ee\u9898\u6ce8\u610f\uff1a\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u540e\uff0c\u8bf7\u52a1\u5fc5\u5728\u4e0d\u9700\u8981\u4f7f\u7528\u8be5\u4e8b\u52a1\u5bf9\u8c61\u65f6\uff0c\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"Commit"}),"/ ",(0,o.jsx)(n.code,{children:"Rollback"})," \u64cd\u4f5c\u5173\u95ed\u6389\u8be5\u4e8b\u52a1\uff0c\u5efa\u8bae\u5145\u5206\u5229\u7528\u597d ",(0,o.jsx)(n.code,{children:"defer"})," \u65b9\u6cd5\u3002\u5982\u679c\u4e8b\u52a1\u4f7f\u7528\u540e\u4e0d\u5173\u95ed\uff0c\u5728\u5e94\u7528\u4fa7\u4f1a\u5f15\u8d77 ",(0,o.jsx)(n.code,{children:"goroutine"})," \u4e0d\u65ad\u6fc0\u589e\u6cc4\u9732\uff0c\u5728\u6570\u636e\u5e93\u4fa7\u4f1a\u5f15\u8d77\u4e8b\u52a1\u7ebf\u7a0b\u6570\u91cf\u88ab\u6253\u6ee1\uff0c\u4ee5\u81f3\u4e8e\u540e\u7eed\u7684\u4e8b\u52a1\u8bf7\u6c42\u6267\u884c\u8d85\u65f6\u3002\u6b64\u5916\uff0c\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528\u540e\u7eed\u4ecb\u7ecd\u7684 ",(0,o.jsx)(n.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u6765\u5b89\u5168\u5b9e\u73b0\u4e8b\u52a1\u64cd\u4f5c\uff1a ",(0,o.jsx)(n.a,{href:"/en/docs/core/gdb-transaction-closure",children:"ORM\u4e8b\u52a1\u5904\u7406-\u95ed\u5305\u64cd\u4f5c"})]})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e00\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",children:"\u4e00\u3001\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'db := g.DB()\n\nif tx, err := db.Begin(ctx); err == nil {\n    fmt.Println("\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u6240\u6709 ",(0,o.jsx)(n.code,{children:"db"})," \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"API\u6587\u6863"}),"\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4e8c\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",children:"\u4e8c\u3001\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err != nil {\n        tx.Rollback()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e09\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",children:"\u4e09\u3001\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u56db\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",children:"\u56db\u3001\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"tx.Model"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u7684\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e0e ",(0,o.jsx)(n.code,{children:"db.Model"})," \u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u540c\uff0c\u53ea\u4e0d\u8fc7\u6570\u636e\u5e93\u64cd\u4f5c\u5728\u4e8b\u52a1\u4e0a\u6267\u884c\uff0c\u53ef\u63d0\u4ea4\u6216\u56de\u6eda\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Model("user").Data(g.Map{"id":1, "name": "john_1"}).Save()\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u4ed6\u94fe\u5f0f\u64cd\u4f5c\u8bf7\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"/en/docs/core/gdb-chaining",children:"ORM\u94fe\u5f0f\u64cd\u4f5c(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)"})," \u7ae0\u8282\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var i=r(296540);const o={},t=i.createContext(o);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);