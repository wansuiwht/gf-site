"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["13762"],{792024:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>x,assets:()=>d,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1","title":"ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1","description":"\u4ECE GoFrame ORM \u652F\u6301\u6570\u636E\u5E93\u5D4C\u5957\u4E8B\u52A1\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6570\u636E\u5E93\u670D\u52A1\u5F80\u5F80\u5E76\u4E0D\u652F\u6301\u5D4C\u5957\u4E8B\u52A1\uFF0C\u800C\u662F\u4F9D\u9760 ORM \u7EC4\u4EF6\u5C42\u901A\u8FC7 Transaction Save Point \u7279\u6027\u5B9E\u73B0\u7684\u3002\u76F8\u5173\u65B9\u6CD5\uFF1A","source":"@site/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406","slug":"/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u4E8B\u52A1\u5904\u7406-\u95ED\u5305\u64CD\u4F5C","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u4E8B\u52A1\u5904\u7406/ORM\u4E8B\u52A1\u5904\u7406-\u95ED\u5305\u64CD\u4F5C"},"next":{"title":"ORM\u65F6\u533A\u5904\u7406","permalink":"/2.1.x/\u6838\u5FC3\u7EC4\u4EF6-\u91CD\u70B9/\u6570\u636E\u5E93ORM/ORM\u65F6\u533A\u5904\u7406"}}'),i=r("785893"),c=r("250065");let a={title:"ORM\u4E8B\u52A1\u5904\u7406-\u5D4C\u5957\u4E8B\u52A1",sidebar_position:2,hide_title:!0},s=void 0,d={},o=[{value:"\u4E00\u3001\u793A\u4F8BSQL",id:"\u4E00\u793A\u4F8Bsql",level:2},{value:"\u4E8C\u3001\u5E38\u89C4\u64CD\u4F5C",id:"\u4E8C\u5E38\u89C4\u64CD\u4F5C",level:2},{value:"1\u3001 <code>db.Begin</code> \u4E0E <code>tx.Begin</code>",id:"1-dbbegin-\u4E0E-txbegin",level:3},{value:"2\u3001\u66F4\u8BE6\u7EC6\u7684\u65E5\u5FD7",id:"2\u66F4\u8BE6\u7EC6\u7684\u65E5\u5FD7",level:3},{value:"\u4E09\u3001\u95ED\u5305\u64CD\u4F5C(\u63A8\u8350)",id:"\u4E09\u95ED\u5305\u64CD\u4F5C\u63A8\u8350",level:2},{value:"\u56DB\u3001 <code>SavePoint/RollbackTo</code>",id:"\u56DB-savepointrollbackto",level:2},{value:"\u4E94\u3001\u5D4C\u5957\u4E8B\u52A1\u5728\u5DE5\u7A0B\u4E2D\u7684\u53C2\u8003\u793A\u4F8B",id:"\u4E94\u5D4C\u5957\u4E8B\u52A1\u5728\u5DE5\u7A0B\u4E2D\u7684\u53C2\u8003\u793A\u4F8B",level:2},{value:"<code>controller</code>",id:"controller",level:3},{value:"<code>service</code>",id:"service",level:3},{value:"<code>dao</code>",id:"dao",level:3}];function l(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u4ECE ",(0,i.jsx)(n.code,{children:"GoFrame ORM"})," \u652F\u6301\u6570\u636E\u5E93\u5D4C\u5957\u4E8B\u52A1\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6570\u636E\u5E93\u670D\u52A1\u5F80\u5F80\u5E76\u4E0D\u652F\u6301\u5D4C\u5957\u4E8B\u52A1\uFF0C\u800C\u662F\u4F9D\u9760 ",(0,i.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u5C42\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Transaction Save Point"})," \u7279\u6027\u5B9E\u73B0\u7684\u3002\u76F8\u5173\u65B9\u6CD5\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// Begin starts a nested transaction procedure.\nfunc (tx *TX) Begin() error\n\n// Commit commits current transaction.\n// Note that it releases previous saved transaction point if it's in a nested transaction procedure,\n// or else it commits the hole transaction.\nfunc (tx *TX) Commit() error\n\n// Rollback aborts current transaction.\n// Note that it aborts current transaction if it's in a nested transaction procedure,\n// or else it aborts the hole transaction.\nfunc (tx *TX) Rollback() error\n\n// SavePoint performs `SAVEPOINT xxx` SQL statement that saves transaction at current point.\n// The parameter `point` specifies the point name that will be saved to server.\nfunc (tx *TX) SavePoint(point string) error\n\n// RollbackTo performs `ROLLBACK TO SAVEPOINT xxx` SQL statement that rollbacks to specified saved transaction.\n// The parameter `point` specifies the point name that was saved previously.\nfunc (tx *TX) RollbackTo(point string) error\n\n// Transaction wraps the transaction logic using function `f`.\n// It rollbacks the transaction and returns the error from function `f` if\n// it returns non-nil error. It commits the transaction and returns nil if\n// function `f` returns nil.\n//\n// Note that, you should not Commit or Rollback the transaction in function `f`\n// as it is automatically handled by this function.\nfunc (tx *TX) Transaction(ctx context.Context, f func(ctx context.Context, tx *TX) error) (err error)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u540C\u6837\u7684\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Transaction"})," \u95ED\u5305\u65B9\u6CD5\u6765\u5B9E\u73B0\u5D4C\u5957\u4E8B\u52A1\u64CD\u4F5C\u3002\u4E3A\u4E86\u4FDD\u8BC1\u6587\u6863\u7684\u5B8C\u6574\u6027\uFF0C\u56E0\u6B64\u6211\u4EEC\u8FD9\u91CC\u4ECD\u7136\u4ECE\u6700\u57FA\u672C\u7684\u4E8B\u52A1\u64CD\u4F5C\u65B9\u6CD5\u5F00\u59CB\u6765\u4ECB\u7ECD\u5D4C\u5957\u4E8B\u52A1\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E00\u793A\u4F8Bsql",children:"\u4E00\u3001\u793A\u4F8BSQL"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B ",(0,i.jsx)(n.code,{children:"SQL"}),"\uFF0C\u5305\u542B\u4E24\u4E2A\u5B57\u6BB5 ",(0,i.jsx)(n.code,{children:"id"})," \u548C ",(0,i.jsx)(n.code,{children:"name"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL COMMENT '\u7528\u6237ID',\n  `name` varchar(45) NOT NULL COMMENT '\u7528\u6237\u540D\u79F0',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4E8C\u5E38\u89C4\u64CD\u4F5C",children:"\u4E8C\u3001\u5E38\u89C4\u64CD\u4F5C"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'tx, err := db.Begin()\nif err != nil {\n    panic(err)\n}\nif err = tx.Begin(); err != nil {\n    panic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert()\nif err = tx.Rollback(); err != nil {\n    panic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\nif err = tx.Commit(); err != nil {\n    panic(err)\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"1-dbbegin-\u4E0E-txbegin",children:["1\u3001 ",(0,i.jsx)(n.code,{children:"db.Begin"})," \u4E0E ",(0,i.jsx)(n.code,{children:"tx.Begin"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u6211\u4EEC\u7684\u5D4C\u5957\u4E8B\u52A1\u4E2D\u51FA\u73B0\u4E86 ",(0,i.jsx)(n.code,{children:"db.Begin"})," \u548C ",(0,i.jsx)(n.code,{children:"tx.Begin"})," \u4E24\u79CD\u4E8B\u52A1\u5F00\u542F\u65B9\u5F0F\uFF0C\u4E24\u8005\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F ",(0,i.jsx)(n.code,{children:"db.Begin"})," \u662F\u5728\u6570\u636E\u5E93\u670D\u52A1\u4E0A\u771F\u6B63\u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1\u64CD\u4F5C\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u4E8B\u52A1\u64CD\u4F5C\u5BF9\u8C61 ",(0,i.jsx)(n.code,{children:"tx"}),"\uFF0C\u968F\u540E\u6240\u6709\u7684\u4E8B\u52A1\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7\u8BE5 ",(0,i.jsx)(n.code,{children:"tx"})," \u4E8B\u52A1\u5BF9\u8C61\u6765\u64CD\u4F5C\u7BA1\u7406\u3002 ",(0,i.jsx)(n.code,{children:"tx.Begin"})," \u8868\u793A\u5728\u5F53\u524D\u4E8B\u52A1\u64CD\u4F5C\u4E2D\u5F00\u542F\u5D4C\u5957\u4E8B\u52A1\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5BF9\u5D4C\u5957\u4E8B\u52A1\u7684 ",(0,i.jsx)(n.code,{children:"SavePoint"})," \u91C7\u7528\u81EA\u52A8\u547D\u540D\uFF0C\u547D\u540D\u683C\u5F0F\u4E3A ",(0,i.jsx)(n.code,{children:"transactionN"}),"\uFF0C\u5176\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"N"})," \u8868\u793A\u5D4C\u5957\u7684\u5C42\u7EA7\u6570\u91CF\uFF0C\u5982\u679C\u60A8\u770B\u5230\u65E5\u5FD7\u4E2D\u51FA\u73B0 ",(0,i.jsx)(n.code,{children:"SAVEPOINT `transaction1` "})," \u8868\u793A\u5F53\u524D\u5D4C\u5957\u5C42\u7EA7\u4E3A ",(0,i.jsx)(n.code,{children:"2"}),"\uFF08\u4ECE ",(0,i.jsx)(n.code,{children:"0"})," \u5F00\u59CB\u8BA1\u7B97\uFF09\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"2\u66F4\u8BE6\u7EC6\u7684\u65E5\u5FD7",children:"2\u3001\u66F4\u8BE6\u7EC6\u7684\u65E5\u5FD7"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"goframe"})," \u7684 ",(0,i.jsx)(n.code,{children:"ORM"})," \u62E5\u6709\u76F8\u5F53\u5B8C\u5584\u7684\u65E5\u5FD7\u8BB0\u5F55\u673A\u5236\uFF0C\u5982\u679C\u60A8\u6253\u5F00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u65E5\u5FD7\uFF0C\u90A3\u4E48\u5C06\u4F1A\u770B\u5230\u4EE5\u4E0B\u65E5\u5FD7\u4FE1\u606F\uFF0C\u5C55\u793A\u4E86\u6574\u4E2A\u6570\u636E\u5E93\u8BF7\u6C42\u7684\u8BE6\u7EC6\u6267\u884C\u6D41\u7A0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:12:10.776 [DEBU] [  4 ms] [default] [txid:1] BEGIN\n2021-05-22 21:12:10.776 [DEBU] [  0 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:12:10.789 [DEBU] [ 13 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:12:10.790 [DEBU] [  1 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:12:10.791 [DEBU] [  1 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:12:10.791 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:12:10.792 [DEBU] [  1 ms] [default] [txid:1] COMMIT\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"[txid:1]"})," \u8868\u793A ",(0,i.jsx)(n.code,{children:"ORM"})," \u7EC4\u4EF6\u8BB0\u5F55\u7684\u4E8B\u52A1ID\uFF0C\u591A\u4E2A\u771F\u5B9E\u7684\u4E8B\u52A1\u540C\u65F6\u64CD\u4F5C\u65F6\uFF0C\u6BCF\u4E2A\u4E8B\u52A1\u7684ID\u5C06\u4F1A\u4E0D\u540C\u3002\u5728\u540C\u4E00\u4E2A\u771F\u5B9E\u4E8B\u52A1\u4E0B\u7684\u5D4C\u5957\u4E8B\u52A1\u7684\u4E8B\u52A1ID\u662F\u4E00\u6837\u7684\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\u67E5\u8BE2\u6570\u636E\u5E93\u7ED3\u679C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from `user`;\n+----+-------+\n| id | name  |\n+----+-------+\n|  2 | smith |\n+----+-------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u88AB\u6210\u529F\u56DE\u6EDA\uFF0C\u53EA\u6709\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u6267\u884C\u5E76\u63D0\u4EA4\u6210\u529F\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E09\u95ED\u5305\u64CD\u4F5C\u63A8\u8350",children:"\u4E09\u3001\u95ED\u5305\u64CD\u4F5C(\u63A8\u8350)"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u95ED\u5305\u64CD\u4F5C\u6765\u5B9E\u73B0\u5D4C\u5957\u4E8B\u52A1\uFF0C\u540C\u6837\u4E5F\u662F\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Transaction"})," \u65B9\u6CD5\u5B9E\u73B0\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n    // Nested transaction 1.\n    if err := tx.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n        _, err := tx.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n        return err\n    }); err != nil {\n        return err\n    }\n    // Nested transaction 2, panic.\n    if err := tx.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n        _, err := tx.Model(table).Ctx(ctx).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n        // Create a panic that can make this transaction rollback automatically.\n        panic("error")\n        return err\n    }); err != nil {\n        return err\n    }\n    return nil\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5D4C\u5957\u4E8B\u52A1\u7684\u95ED\u5305\u5D4C\u5957\u4E2D\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u5176\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"tx"})," \u5BF9\u8C61\uFF0C\u800C\u662F\u76F4\u63A5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"db"})," \u5BF9\u8C61\u6216\u8005 ",(0,i.jsx)(n.code,{children:"dao"})," \u5305\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u66F4\u5E38\u89C1\u4E00\u4E9B\u3002\u7279\u522B\u662F\u5728\u65B9\u6CD5\u5C42\u7EA7\u8C03\u7528\u65F6\uFF0C\u4F7F\u5F97\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\u5E76\u4E0D\u7528\u5173\u5FC3 ",(0,i.jsx)(n.code,{children:"tx"})," \u5BF9\u8C61\u7684\u4F20\u9012\uFF0C\u4E5F\u5E76\u4E0D\u7528\u5173\u5FC3\u5F53\u524D\u4E8B\u52A1\u662F\u5426\u9700\u8981\u5D4C\u5957\u6267\u884C\uFF0C\u4E00\u5207\u90FD\u7531\u7EC4\u4EF6\u81EA\u52A8\u7EF4\u62A4\uFF0C\u6781\u5927\u51CF\u5C11\u5F00\u53D1\u8005\u7684\u5FC3\u667A\u8D1F\u62C5\u3002\u4F46\u662F\u52A1\u5FC5\u8BB0\u5F97\u5C06 ",(0,i.jsx)(n.code,{children:"ctx"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u5C42\u5C42\u4F20\u9012\u4E0B\u53BB\u54E6\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n    // Nested transaction 1.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n        _, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n        return err\n    }); err != nil {\n        return err\n    }\n    // Nested transaction 2, panic.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n        _, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n        // Create a panic that can make this transaction rollback automatically.\n        panic("error")\n        return err\n    }); err != nil {\n        return err\n    }\n    return nil\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u6253\u5F00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u65E5\u5FD7\uFF0C\u90A3\u4E48\u6267\u884C\u540E\u5C06\u4F1A\u770B\u5230\u4EE5\u4E0B\u65E5\u5FD7\u4FE1\u606F\uFF0C\u5C55\u793A\u4E86\u6574\u4E2A\u6570\u636E\u5E93\u8BF7\u6C42\u7684\u8BE6\u7EC6\u6267\u884C\u6D41\u7A0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:18:46.672 [DEBU] [  2 ms] [default] [txid:1] BEGIN\n2021-05-22 21:18:46.672 [DEBU] [  0 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:18:46.673 [DEBU] [  0 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:18:46.674 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:18:46.674 [DEBU] [  0 ms] [default] [txid:1] RELEASE SAVEPOINT `transaction0`\n2021-05-22 21:18:46.675 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:18:46.675 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`name`,`id`) VALUES('smith',2)\n2021-05-22 21:18:46.675 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:18:46.676 [DEBU] [  1 ms] [default] [txid:1] ROLLBACK\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u5982 ",(0,i.jsx)(n.code,{children:"ctx"})," \u4E0A\u4E0B\u6587\u53D8\u91CF\u6CA1\u6709\u5C42\u5C42\u4F20\u9012\u4E0B\u53BB\uFF0C\u90A3\u4E48\u5D4C\u5957\u4E8B\u52A1\u5C06\u4F1A\u5931\u8D25\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u9519\u8BEF\u7684\u4F8B\u5B50\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n    // Nested transaction 1.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n        _, err := db.Model(table).Ctx(ctx).Data(g.Map{"id": 1, "name": "john"}).Insert()\n        return err\n    }); err != nil {\n        return err\n    }\n    // Nested transaction 2, panic.\n    if err := db.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n        _, err := db.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n        // Create a panic that can make this transaction rollback automatically.\n        panic("error")\n        return err\n    }); err != nil {\n        return err\n    }\n    return nil\n})\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5F00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u6267\u884C\u65E5\u5FD7\uFF0C\u6267\u884C\u540E\uFF0C\u60A8\u5C06\u4F1A\u770B\u5230\u4EE5\u4E0B\u65E5\u5FD7\u5185\u5BB9\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:29:38.841 [DEBU] [  3 ms] [default] [txid:1] BEGIN\n2021-05-22 21:29:38.842 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:29:38.843 [DEBU] [  1 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:29:38.845 [DEBU] [  2 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:29:38.845 [DEBU] [  0 ms] [default] [txid:1] RELEASE SAVEPOINT `transaction0`\n2021-05-22 21:29:38.846 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:29:38.847 [DEBU] [  1 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:29:38.848 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:29:38.848 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u7B2C\u4E8C\u6761 ",(0,i.jsx)(n.code,{children:"INSERT"})," \u64CD\u4F5C ",(0,i.jsx)(n.code,{children:"INSERT INTO `user`(`id`,`name`) VALUES(2,'smith') "})," \u6CA1\u6709\u4E8B\u52A1ID\u6253\u5370\uFF0C\u8868\u793A\u6CA1\u6709\u4F7F\u7528\u5230\u4E8B\u52A1\uFF0C\u90A3\u4E48\u8BE5\u64CD\u4F5C\u5C06\u4F1A\u88AB\u771F\u6B63\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u6267\u884C\uFF0C\u5E76\u4E0D\u80FD\u88AB\u56DE\u6EDA\u3002"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u56DB-savepointrollbackto",children:["\u56DB\u3001 ",(0,i.jsx)(n.code,{children:"SavePoint/RollbackTo"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F00\u53D1\u8005\u4E5F\u53EF\u4EE5\u7075\u6D3B\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"Transaction Save Point"})," \u7279\u6027\uFF0C\u5E76\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684 ",(0,i.jsx)(n.code,{children:"SavePoint"})," \u547D\u540D\u4EE5\u53CA\u6307\u5B9A ",(0,i.jsx)(n.code,{children:"Point"})," \u56DE\u6EDA\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'tx, err := db.Begin()\nif err != nil {\n    panic(err)\n}\ndefer func() {\n    if err := recover(); err != nil {\n        _ = tx.Rollback()\n    }\n}()\nif _, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert(); err != nil {\n    panic(err)\n}\nif err = tx.SavePoint("MyPoint"); err != nil {\n    panic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert(); err != nil {\n    panic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 3, "name": "green"}).Insert(); err != nil {\n    panic(err)\n}\nif err = tx.RollbackTo("MyPoint"); err != nil {\n    panic(err)\n}\nif err = tx.Commit(); err != nil {\n    panic(err)\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u6253\u5F00 ",(0,i.jsx)(n.code,{children:"SQL"})," \u65E5\u5FD7\uFF0C\u90A3\u4E48\u5C06\u4F1A\u770B\u5230\u4EE5\u4E0B\u65E5\u5FD7\u4FE1\u606F\uFF0C\u5C55\u793A\u4E86\u6574\u4E2A\u6570\u636E\u5E93\u8BF7\u6C42\u7684\u8BE6\u7EC6\u6267\u884C\u6D41\u7A0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:38:51.992 [DEBU] [  3 ms] [default] [txid:1] BEGIN\n2021-05-22 21:38:52.002 [DEBU] [  9 ms] [default] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:38:52.002 [DEBU] [  0 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:38:52.003 [DEBU] [  1 ms] [default] [txid:1] SAVEPOINT `MyPoint`\n2021-05-22 21:38:52.004 [DEBU] [  1 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:38:52.005 [DEBU] [  1 ms] [default] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(3,'green')\n2021-05-22 21:38:52.006 [DEBU] [  0 ms] [default] [txid:1] ROLLBACK TO SAVEPOINT `MyPoint`\n2021-05-22 21:38:52.006 [DEBU] [  0 ms] [default] [txid:1] COMMIT\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u540E\u67E5\u8BE2\u6570\u636E\u5E93\u7ED3\u679C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from `user`;\n+----+------+\n| id | name |\n+----+------+\n|  1 | john |\n+----+------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u901A\u8FC7\u5728\u7B2C\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"Insert"})," \u64CD\u4F5C\u540E\u4FDD\u5B58\u4E86\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"SavePoint"})," \u540D\u79F0 ",(0,i.jsx)(n.code,{children:"MyPoint"}),"\uFF0C\u968F\u540E\u7684\u51E0\u6B21\u64CD\u4F5C\u90FD\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"RollbackTo"})," \u65B9\u6CD5\u88AB\u56DE\u6EDA\u6389\u4E86\uFF0C\u56E0\u6B64\u53EA\u6709\u7B2C\u4E00\u6B21 ",(0,i.jsx)(n.code,{children:"Insert"})," \u64CD\u4F5C\u88AB\u6210\u529F\u63D0\u4EA4\u6267\u884C\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4E94\u5D4C\u5957\u4E8B\u52A1\u5728\u5DE5\u7A0B\u4E2D\u7684\u53C2\u8003\u793A\u4F8B",children:"\u4E94\u3001\u5D4C\u5957\u4E8B\u52A1\u5728\u5DE5\u7A0B\u4E2D\u7684\u53C2\u8003\u793A\u4F8B"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E3A\u4E86\u7B80\u5316\u793A\u4F8B\uFF0C\u6211\u4EEC\u8FD8\u662F\u4F7F\u7528\u7528\u6237\u6A21\u5757\u76F8\u5173\u7684\u793A\u4F8B\uFF0C\u4F8B\u5982\u7528\u6237\u6CE8\u518C\uFF0C\u901A\u8FC7\u4E8B\u52A1\u64CD\u4F5C\u4FDD\u5B58\u7528\u6237\u57FA\u672C\u4FE1\u606F( ",(0,i.jsx)(n.code,{children:"user"}),")\u3001\u8BE6\u7EC6\u4FE1\u606F( ",(0,i.jsx)(n.code,{children:"user_detail"}),")\u4E24\u4E2A\u8868\uFF0C\u4EFB\u4E00\u4E2A\u8868\u64CD\u4F5C\u5931\u8D25\u6574\u4E2A\u6CE8\u518C\u64CD\u4F5C\u90FD\u5C06\u5931\u8D25\u3002\u4E3A\u5C55\u793A\u5D4C\u5957\u4E8B\u52A1\u6548\u679C\uFF0C\u6211\u4EEC\u5C06\u7528\u6237\u57FA\u672C\u4FE1\u606F\u7BA1\u7406\u548C\u7528\u6237\u8BE6\u7EC6\u4FE1\u606F\u7BA1\u7406\u5212\u5206\u4E3A\u4E86\u4E24\u4E2A ",(0,i.jsx)(n.code,{children:"dao"})," \u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u5982\u6211\u4EEC\u7684\u9879\u76EE\u6309\u7167 ",(0,i.jsx)(n.code,{children:"goframe"})," \u6807\u51C6\u9879\u76EE\u5DE5\u7A0B\u5316\u5206\u4E3A\u4E09\u5C42 ",(0,i.jsx)(n.code,{children:"api-service-dao"}),"\uFF0C\u90A3\u4E48\u6211\u4EEC\u7684\u5D4C\u5957\u4E8B\u52A1\u64CD\u4F5C\u53EF\u80FD\u662F\u8FD9\u6837\u7684\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"controller",children:(0,i.jsx)(n.code,{children:"controller"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u7528\u6237\u6CE8\u518CHTTP\u63A5\u53E3\nfunc (*cUser) Signup(r *ghttp.Request) {\n    // ....\n    service.User().Signup(r.Context(), userServiceSignupReq)\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u627F\u63A5HTTP\u8BF7\u6C42\uFF0C\u5E76\u4E14\u5C06 ",(0,i.jsx)(n.code,{children:"Context"})," \u4E0A\u4E0B\u6587\u8FB9\u53D8\u91CF\u4F20\u9012\u7ED9\u540E\u7EED\u7684\u6D41\u7A0B\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"service",children:(0,i.jsx)(n.code,{children:"service"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// \u7528\u6237\u6CE8\u518C\u4E1A\u52A1\u903B\u8F91\u5904\u7406\nfunc (*userService) Signup(ctx context.Context, r *model.UserServiceSignupReq) {\n    // ....\n    dao.User.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n        err := dao.User.Ctx(ctx).Save(r.UserInfo)\n        if err != nil {\n            return err\n        }\n        err := dao.UserDetail.Ctx(ctx).Save(r.UserDetail)\n        if err != nil {\n            return err\n        }\n        return nil\n    })\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5185\u90E8\u7684 ",(0,i.jsx)(n.code,{children:"user"})," \u8868\u548C ",(0,i.jsx)(n.code,{children:"user_detail"})," \u8868\u4F7F\u7528\u4E86\u5D4C\u5957\u4E8B\u52A1\u6765\u7EDF\u4E00\u6267\u884C\u4E8B\u52A1\u64CD\u4F5C\u3002\u6CE8\u610F\u5728\u95ED\u5305\u5185\u90E8\u9700\u8981\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Ctx"})," \u65B9\u6CD5\u5C06\u4E0A\u4E0B\u6587\u53D8\u91CF\u4F20\u9012\u7ED9\u4E0B\u4E00\u5C42\u7EA7\u3002\u5047\u5982\u5728\u95ED\u5305\u4E2D\u5B58\u5728\u5BF9\u5176\u4ED6 ",(0,i.jsx)(n.code,{children:"service"})," \u5BF9\u8C61\u7684\u8C03\u7528\uFF0C\u90A3\u4E48\u4E5F\u9700\u8981\u5C06 ",(0,i.jsx)(n.code,{children:"ctx"})," \u53D8\u91CF\u4F20\u9012\u8FC7\u53BB\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func (*userService) Signup(ctx context.Context, r *model.UserServiceSignupReq) {\n    // ....\n    dao.User.Transaction(ctx, func(ctx context.Context, tx *gdb.TX) (err error) {\n        if err = dao.User.Ctx(ctx).Save(r.UserInfo); err != nil {\n            return err\n        }\n        if err = dao.UserDetail.Ctx(ctx).Save(r.UserDetail); err != nil {\n            return err\n        }\n        if err = service.XXXA().Call(ctx, ...); err != nil {\n            return err\n        }\n        if err = service.XXXB().Call(ctx, ...); err != nil {\n            return err\n        }\n        if err = service.XXXC().Call(ctx, ...); err != nil {\n            return err\n        }\n        // ...\n        return nil\n    })\n    // ...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dao",children:(0,i.jsx)(n.code,{children:"dao"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dao"})," \u5C42\u7684\u4EE3\u7801\u7531 ",(0,i.jsx)(n.code,{children:"goframe cli"})," \u5DE5\u5177\u5168\u81EA\u52A8\u5316\u751F\u6210\u53CA\u7EF4\u62A4\u5373\u53EF\u3002"]})]})}function x(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return a}});var t=r(667294);let i={},c=t.createContext(i);function a(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);