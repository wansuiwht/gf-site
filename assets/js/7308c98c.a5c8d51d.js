"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["79323"],{301668:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>s,toc:()=>a,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","title":"ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884CORM\u4E8B\u52A1\u5904\u7406\u7684\u57FA\u7840\u64CD\u4F5C\uFF0C\u5305\u62EC\u5982\u4F55\u4F7F\u7528Begin\u3001Commit\u548CRollback\u65B9\u6CD5\u6765\u5F00\u542F\u3001\u63D0\u4EA4\u548C\u56DE\u6EDA\u4E8B\u52A1\u3002\u540C\u65F6\u7279\u522B\u63D0\u793A\u4E8B\u52A1\u64CD\u4F5C\u540E\u9700\u8981\u53CA\u65F6\u5173\u95ED\u4E8B\u52A1\u4EE5\u907F\u514D\u8D44\u6E90\u6CC4\u9732\uFF0C\u5EFA\u8BAE\u4F7F\u7528Transaction\u95ED\u5305\u65B9\u6CD5\u5B9E\u73B0\u5B89\u5168\u4E8B\u52A1\u64CD\u4F5C\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406","slug":"/docs/core/gdb-transaction-basic","permalink":"/docs/core/gdb-transaction-basic","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-transaction-basic","title":"ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C","sidebar_position":0,"hide_title":true,"keywords":["\u4E8B\u52A1\u64CD\u4F5C","Begin","Commit","Rollback","GoFrame","\u6570\u636E\u5E93\u64CD\u4F5C","Transaction","\u95ED\u5305\u65B9\u6CD5","gdb.Tx","\u94FE\u5F0F\u64CD\u4F5C"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884CORM\u4E8B\u52A1\u5904\u7406\u7684\u57FA\u7840\u64CD\u4F5C\uFF0C\u5305\u62EC\u5982\u4F55\u4F7F\u7528Begin\u3001Commit\u548CRollback\u65B9\u6CD5\u6765\u5F00\u542F\u3001\u63D0\u4EA4\u548C\u56DE\u6EDA\u4E8B\u52A1\u3002\u540C\u65F6\u7279\u522B\u63D0\u793A\u4E8B\u52A1\u64CD\u4F5C\u540E\u9700\u8981\u53CA\u65F6\u5173\u95ED\u4E8B\u52A1\u4EE5\u907F\u514D\u8D44\u6E90\u6CC4\u9732\uFF0C\u5EFA\u8BAE\u4F7F\u7528Transaction\u95ED\u5305\u65B9\u6CD5\u5B9E\u73B0\u5B89\u5168\u4E8B\u52A1\u64CD\u4F5C\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u4E8B\u52A1\u5904\u7406","permalink":"/docs/core/gdb-transaction"},"next":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u95ED\u5305\u64CD\u4F5C","permalink":"/docs/core/gdb-transaction-closure"}}'),t=i("785893"),o=i("250065");let c={slug:"/docs/core/gdb-transaction-basic",title:"ORM\u4E8B\u52A1\u5904\u7406-\u5E38\u89C4\u64CD\u4F5C",sidebar_position:0,hide_title:!0,keywords:["\u4E8B\u52A1\u64CD\u4F5C","Begin","Commit","Rollback","GoFrame","\u6570\u636E\u5E93\u64CD\u4F5C","Transaction","\u95ED\u5305\u65B9\u6CD5","gdb.Tx","\u94FE\u5F0F\u64CD\u4F5C"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u8FDB\u884CORM\u4E8B\u52A1\u5904\u7406\u7684\u57FA\u7840\u64CD\u4F5C\uFF0C\u5305\u62EC\u5982\u4F55\u4F7F\u7528Begin\u3001Commit\u548CRollback\u65B9\u6CD5\u6765\u5F00\u542F\u3001\u63D0\u4EA4\u548C\u56DE\u6EDA\u4E8B\u52A1\u3002\u540C\u65F6\u7279\u522B\u63D0\u793A\u4E8B\u52A1\u64CD\u4F5C\u540E\u9700\u8981\u53CA\u65F6\u5173\u95ED\u4E8B\u52A1\u4EE5\u907F\u514D\u8D44\u6E90\u6CC4\u9732\uFF0C\u5EFA\u8BAE\u4F7F\u7528Transaction\u95ED\u5305\u65B9\u6CD5\u5B9E\u73B0\u5B89\u5168\u4E8B\u52A1\u64CD\u4F5C\u3002"},d=void 0,s={},a=[{value:"\u4E00\u3001\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C",id:"\u4E00\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C",level:2},{value:"\u4E8C\u3001\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C",id:"\u4E8C\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C",level:2},{value:"\u4E09\u3001\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C",id:"\u4E09\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C",level:2},{value:"\u56DB\u3001\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C",id:"\u56DB\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5E38\u89C4\u7684\u4E8B\u52A1\u64CD\u4F5C\u65B9\u6CD5\u4E3A ",(0,t.jsx)(n.code,{children:"Begin/Commit/Rollback"}),"\uFF0C\u6BCF\u4E00\u4E2A\u65B9\u6CD5\u6307\u5B9A\u7279\u5B9A\u7684\u4E8B\u52A1\u64CD\u4F5C\u3002\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u6267\u884C ",(0,t.jsx)(n.code,{children:"db.Begin"})," \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E8B\u52A1\u7684\u64CD\u4F5C\u63A5\u53E3\uFF0C\u7C7B\u578B\u4E3A ",(0,t.jsx)(n.code,{children:"gdb.Tx"}),"\uFF0C\u901A\u8FC7\u8BE5\u5BF9\u8C61\u6267\u884C\u540E\u7EED\u7684\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u5E76\u53EF\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"tx.Commit"})," \u63D0\u4EA4\u4FEE\u6539\uFF0C\u6216\u8005\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"tx.Rollback"})," \u56DE\u6EDA\u4FEE\u6539\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["\u5E38\u89C1\u95EE\u9898\u6CE8\u610F\uFF1A\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C\u540E\uFF0C\u8BF7\u52A1\u5FC5\u5728\u4E0D\u9700\u8981\u4F7F\u7528\u8BE5\u4E8B\u52A1\u5BF9\u8C61\u65F6\uFF0C\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"Commit"}),"/ ",(0,t.jsx)(n.code,{children:"Rollback"})," \u64CD\u4F5C\u5173\u95ED\u6389\u8BE5\u4E8B\u52A1\uFF0C\u5EFA\u8BAE\u5145\u5206\u5229\u7528\u597D ",(0,t.jsx)(n.code,{children:"defer"})," \u65B9\u6CD5\u3002\u5982\u679C\u4E8B\u52A1\u4F7F\u7528\u540E\u4E0D\u5173\u95ED\uFF0C\u5728\u5E94\u7528\u4FA7\u4F1A\u5F15\u8D77 ",(0,t.jsx)(n.code,{children:"goroutine"})," \u4E0D\u65AD\u6FC0\u589E\u6CC4\u9732\uFF0C\u5728\u6570\u636E\u5E93\u4FA7\u4F1A\u5F15\u8D77\u4E8B\u52A1\u7EBF\u7A0B\u6570\u91CF\u88AB\u6253\u6EE1\uFF0C\u4EE5\u81F3\u4E8E\u540E\u7EED\u7684\u4E8B\u52A1\u8BF7\u6C42\u6267\u884C\u8D85\u65F6\u3002\u6B64\u5916\uFF0C\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u4F7F\u7528\u540E\u7EED\u4ECB\u7ECD\u7684 ",(0,t.jsx)(n.code,{children:"Transaction"})," \u95ED\u5305\u65B9\u6CD5\u6765\u5B89\u5168\u5B9E\u73B0\u4E8B\u52A1\u64CD\u4F5C\uFF1A ",(0,t.jsx)(n.a,{href:"/docs/core/gdb-transaction-closure",children:"ORM\u4E8B\u52A1\u5904\u7406-\u95ED\u5305\u64CD\u4F5C"})]})}),"\n",(0,t.jsx)(n.h2,{id:"\u4E00\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C",children:"\u4E00\u3001\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'db := g.DB()\n\nif tx, err := db.Begin(ctx); err == nil {\n    fmt.Println("\u5F00\u542F\u4E8B\u52A1\u64CD\u4F5C")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4E8B\u52A1\u64CD\u4F5C\u5BF9\u8C61\u53EF\u4EE5\u6267\u884C\u6240\u6709 ",(0,t.jsx)(n.code,{children:"db"})," \u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"API\u6587\u6863"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4E8C\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C",children:"\u4E8C\u3001\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err != nil {\n        tx.Rollback()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4E09\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C",children:"\u4E09\u3001\u4E8B\u52A1\u63D0\u4EA4\u64CD\u4F5C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(ctx); err == nil {\n    r, err := tx.Save("user", g.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u56DB\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C",children:"\u56DB\u3001\u4E8B\u52A1\u94FE\u5F0F\u64CD\u4F5C"}),"\n",(0,t.jsxs)(n.p,{children:["\u4E8B\u52A1\u64CD\u4F5C\u5BF9\u8C61\u4ECD\u7136\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"tx.Model"})," \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u94FE\u5F0F\u64CD\u4F5C\u7684\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u4E0E ",(0,t.jsx)(n.code,{children:"db.Model"})," \u65B9\u6CD5\u8FD4\u56DE\u503C\u76F8\u540C\uFF0C\u53EA\u4E0D\u8FC7\u6570\u636E\u5E93\u64CD\u4F5C\u5728\u4E8B\u52A1\u4E0A\u6267\u884C\uFF0C\u53EF\u63D0\u4EA4\u6216\u56DE\u6EDA\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Model("user").Data(g.Map{"id":1, "name": "john_1"}).Save()\n    if err == nil {\n       tx.Commit()\n    }\n    fmt.Println(r)\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4ED6\u94FE\u5F0F\u64CD\u4F5C\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"/docs/core/gdb-chaining",children:"ORM\u94FE\u5F0F\u64CD\u4F5C(\uD83D\uDD25\u91CD\u70B9\uD83D\uDD25)"})," \u7AE0\u8282\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return c}});var r=i(667294);let t={},o=r.createContext(t);function c(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);