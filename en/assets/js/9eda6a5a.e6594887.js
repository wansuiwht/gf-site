"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[61393],{705813:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7","title":"ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7","description":"GoFrame\u6846\u67b6\u4e2dORM\u7684\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3b\u8981\u5173\u6ce8SQL\u6355\u83b7\u548c\u8f6c\u6362\u529f\u80fd\u3002\u901a\u8fc7CatchSQL\u548cToSQL\u65b9\u6cd5\uff0c\u80fd\u591f\u5728\u6267\u884cSQL\u8bed\u53e5\u524d\u6355\u83b7\u6216\u9884\u4f30SQL\u64cd\u4f5c\uff0c\u5e76\u914d\u5408\u4e0a\u4e0b\u6587\u5bf9\u8c61\u5b9e\u73b0\u64cd\u4f5c\u8bb0\u5f55\u4e0e\u8c03\u8bd5\u3002\u8fd9\u4e9b\u529f\u80fd\u6709\u52a9\u4e8e\u5f00\u53d1\u8005\u9ad8\u6548\u8c03\u8bd5\u548c\u6d4b\u8bd5\u6570\u636e\u5e93\u64cd\u4f5c\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/docs/core/gdb-senior-catch-sql","permalink":"/en/2.7.x/docs/core/gdb-senior-catch-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gdb-senior-catch-sql","title":"ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","CatchSQL","ToSQL","SQL\u6355\u83b7","SQL\u8f6c\u6362","ORM\u7279\u6027","Go\u8bed\u8a00","\u6570\u636e\u5e93\u64cd\u4f5c","SQL\u8c03\u8bd5","\u4e0a\u4e0b\u6587\u5bf9\u8c61"],"description":"GoFrame\u6846\u67b6\u4e2dORM\u7684\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3b\u8981\u5173\u6ce8SQL\u6355\u83b7\u548c\u8f6c\u6362\u529f\u80fd\u3002\u901a\u8fc7CatchSQL\u548cToSQL\u65b9\u6cd5\uff0c\u80fd\u591f\u5728\u6267\u884cSQL\u8bed\u53e5\u524d\u6355\u83b7\u6216\u9884\u4f30SQL\u64cd\u4f5c\uff0c\u5e76\u914d\u5408\u4e0a\u4e0b\u6587\u5bf9\u8c61\u5b9e\u73b0\u64cd\u4f5c\u8bb0\u5f55\u4e0e\u8c03\u8bd5\u3002\u8fd9\u4e9b\u529f\u80fd\u6709\u52a9\u4e8e\u5f00\u53d1\u8005\u9ad8\u6548\u8c03\u8bd5\u548c\u6d4b\u8bd5\u6570\u636e\u5e93\u64cd\u4f5c\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-RawSQL","permalink":"/en/2.7.x/docs/core/gdb-senior-raw-sql"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u8c03\u8bd5\u6a21\u5f0f","permalink":"/en/2.7.x/docs/core/gdb-senior-debugging"}}');var s=t(474848),c=t(28453);const o={slug:"/docs/core/gdb-senior-catch-sql",title:"ORM\u9ad8\u7ea7\u7279\u6027-SQL\u6355\u83b7",sidebar_position:1,hide_title:!0,keywords:["GoFrame","CatchSQL","ToSQL","SQL\u6355\u83b7","SQL\u8f6c\u6362","ORM\u7279\u6027","Go\u8bed\u8a00","\u6570\u636e\u5e93\u64cd\u4f5c","SQL\u8c03\u8bd5","\u4e0a\u4e0b\u6587\u5bf9\u8c61"],description:"GoFrame\u6846\u67b6\u4e2dORM\u7684\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3b\u8981\u5173\u6ce8SQL\u6355\u83b7\u548c\u8f6c\u6362\u529f\u80fd\u3002\u901a\u8fc7CatchSQL\u548cToSQL\u65b9\u6cd5\uff0c\u80fd\u591f\u5728\u6267\u884cSQL\u8bed\u53e5\u524d\u6355\u83b7\u6216\u9884\u4f30SQL\u64cd\u4f5c\uff0c\u5e76\u914d\u5408\u4e0a\u4e0b\u6587\u5bf9\u8c61\u5b9e\u73b0\u64cd\u4f5c\u8bb0\u5f55\u4e0e\u8c03\u8bd5\u3002\u8fd9\u4e9b\u529f\u80fd\u6709\u52a9\u4e8e\u5f00\u53d1\u8005\u9ad8\u6548\u8c03\u8bd5\u548c\u6d4b\u8bd5\u6570\u636e\u5e93\u64cd\u4f5c\u3002"},i=void 0,d={},a=[{value:"<code>CatchSQL</code>",id:"catchsql",level:2},{value:"<code>ToSQL</code>",id:"tosql",level:2}];function l(n){const e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["\u9700\u8981\u6ce8\u610f\uff0c\u6846\u67b6SQL\u6355\u83b7\u7684\u539f\u7406\u662f\uff0c\u4efb\u4f55SQL\u64cd\u4f5c\u751f\u6210\u7684 ",(0,s.jsx)(e.strong,{children:"SQL\u8bed\u53e5\u6a21\u677f"})," \u52a0\u4e0a ",(0,s.jsx)(e.strong,{children:"SQL\u6267\u884c\u53c2\u6570"}),"\uff0c\u5728\u88ab\u63d0\u4ea4\u7ed9\u5e95\u5c42\u6570\u636e\u5e93\u5f15\u64ce\u524d\u4f1a\u88ab\u6846\u67b6\u62e6\u622a\uff0c\u5e76\u901a\u8fc7\u6846\u67b6\u7ec4\u4ef6\u81ea\u52a8\u683c\u5f0f\u5316\u751f\u6210\u53ef\u4f9b\u4eba\u5de5\u9605\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c ",(0,s.jsx)(e.strong,{children:"\u4ec5\u4f9b\u53c2\u8003\u548c\u8c03\u8bd5"}),"\uff0c\u5e76\u4e0d\u662f\u5b8c\u6574\u63d0\u4ea4\u7ed9\u5e95\u5c42\u6570\u636e\u5e93\u5f15\u64ce\u7684SQL\u8bed\u53e5\u3002\u6355\u83b7\u7684SQL\u8bed\u53e5\u548cORM\u7ec4\u4ef6\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\u540e\u8f93\u51fa\u7684SQL\u8bed\u53e5\u662f\u76f8\u540c\u7684\uff0c\u5b83\u4eec\u90fd\u7531\u76f8\u540c\u7ec4\u4ef6\u751f\u6210\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"catchsql",children:(0,s.jsx)(e.code,{children:"CatchSQL"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"gdb.CatchSQL"})," \u65b9\u6cd5\u6765\u6355\u83b7\u6307\u5b9a\u8303\u56f4\u5185\u6267\u884c\u7684 ",(0,s.jsx)(e.code,{children:"SQL"})," \u5217\u8868\u3002\u8be5\u65b9\u6cd5\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// CatchSQL catches and returns all sql statements that are EXECUTED in given closure function.\n// Be caution that, all the following sql statements should use the context object passing by function `f`.\nfunc CatchSQL(ctx context.Context, f func(ctx context.Context) error) (sqlArray []string, err error)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u8be5\u65b9\u6cd5\u901a\u8fc7\u4e00\u4e2a\u95ed\u5305\u51fd\u6570\u6765\u6267\u884c ",(0,s.jsx)(e.code,{children:"SQL"})," \u8bed\u53e5\uff0c\u5728\u95ed\u5305\u51fd\u6570\u6267\u884c\u7684\u6240\u6709 ",(0,s.jsx)(e.code,{children:"SQL"})," \u64cd\u4f5c\u90fd\u5c06\u88ab\u8bb0\u5f55\u5e76\u4f5c\u4e3a ",(0,s.jsx)(e.code,{children:"[]string"})," \u7c7b\u578b\u3002\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u95ed\u5305\u4e2d\u6267\u884c\u7684 ",(0,s.jsx)(e.code,{children:"SQL"})," \u64cd\u4f5c\u90fd\u5e94\u5f53\u4f20\u9012 ",(0,s.jsx)(e.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u5426\u5219 ",(0,s.jsx)(e.code,{children:"SQL"})," \u64cd\u4f5c\u5bf9\u5e94\u7684\u8bed\u53e5\u65e0\u6cd5\u8bb0\u5f55\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"user.sql"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `user` (\n    `id`          int(10) unsigned NOT NULL AUTO_INCREMENT,\n    `passport`    varchar(45) NULL,\n    `password`    char(32) NULL,\n    `nickname`    varchar(45) NULL,\n    `create_time` timestamp(6) NULL,\n    PRIMARY KEY (id)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"main.go"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\ntype User struct {\n    Id         int\n    Passport   string\n    Password   string\n    Nickname   string\n    CreateTime *gtime.Time\n}\n\nfunc initUser(ctx context.Context) error {\n    _, err := g.Model("user").Ctx(ctx).Data(User{\n        Id:       1,\n        Passport: "john",\n        Password: "12345678",\n        Nickname: "John",\n    }).Insert()\n    return err\n}\n\nfunc main() {\n    var ctx = gctx.New()\n    sqlArray, err := gdb.CatchSQL(ctx, func(ctx context.Context) error {\n        return initUser(ctx)\n    })\n    if err != nil {\n        panic(err)\n    }\n    g.Dump(sqlArray)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"[\n    \"SHOW FULL COLUMNS FROM `user`\",\n    \"INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`created_at`,`updated_at`) VALUES(1,'john','12345678','John','2023-12-19 21:43:57','2023-12-19 21:43:57') \",\n]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"tosql",children:(0,s.jsx)(e.code,{children:"ToSQL"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"gdb.ToSQL"})," \u6765\u5c06\u7ed9\u5b9a\u7684 ",(0,s.jsx)(e.code,{children:"SQL"})," \u64cd\u4f5c\u8f6c\u6362\u4e3a ",(0,s.jsx)(e.code,{children:"SQL"})," \u8bed\u53e5\uff0c\u5e76\u4e0d\u771f\u6b63\u63d0\u4ea4\u6267\u884c\u3002\u8be5\u65b9\u6cd5\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:"// ToSQL formats and returns the last one of sql statements in given closure function\n// WITHOUT TRULY EXECUTING IT.\n// Be caution that, all the following sql statements should use the context object passing by function `f`.\nfunc ToSQL(ctx context.Context, f func(ctx context.Context) error) (sql string, err error)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u8be5\u65b9\u6cd5\u901a\u8fc7\u4e00\u4e2a\u95ed\u5305\u51fd\u6570\u6765\u9884\u4f30 ",(0,s.jsx)(e.code,{children:"SQL"})," \u8bed\u53e5\uff0c\u5728\u95ed\u5305\u51fd\u6570\u4e2d\u7684\u6240\u6709 ",(0,s.jsx)(e.code,{children:"SQL"})," \u64cd\u4f5c\u90fd\u5c06\u88ab\u9884\u4f30\uff0c\u4f46\u53ea\u4f1a\u8fd4\u56de\u6700\u540e\u4e00\u6761 ",(0,s.jsx)(e.code,{children:"SQL"})," \u8bed\u53e5\u4f5c\u4e3a ",(0,s.jsx)(e.code,{children:"string"})," \u7c7b\u578b\u8fd4\u56de\u3002\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u95ed\u5305\u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"SQL"})," \u64cd\u4f5c\u90fd\u5e94\u5f53\u4f20\u9012 ",(0,s.jsx)(e.code,{children:"ctx"})," \u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u5426\u5219 ",(0,s.jsx)(e.code,{children:"SQL"})," \u64cd\u4f5c\u5bf9\u5e94\u7684\u8bed\u53e5\u65e0\u6cd5\u8bb0\u5f55\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"user.sql"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE `user` (\n    `id`          int(10) unsigned NOT NULL AUTO_INCREMENT,\n    `passport`    varchar(45) NULL,\n    `password`    char(32) NULL,\n    `nickname`    varchar(45) NULL,\n    `create_time` timestamp(6) NULL,\n    PRIMARY KEY (id)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"main.go"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\ntype User struct {\n    Id         int\n    Passport   string\n    Password   string\n    Nickname   string\n    CreateTime *gtime.Time\n}\n\nfunc initUser(ctx context.Context) error {\n    _, err := g.Model("user").Ctx(ctx).Data(User{\n        Id:       1,\n        Passport: "john",\n        Password: "12345678",\n        Nickname: "John",\n    }).Insert()\n    return err\n}\n\nfunc main() {\n    var ctx = gctx.New()\n    sql, err := gdb.ToSQL(ctx, func(ctx context.Context) error {\n        return initUser(ctx)\n    })\n    if err != nil {\n        panic(err)\n    }\n    g.Dump(sql)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\"INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`created_at`,`updated_at`) VALUES(1,'john','12345678','John','2023-12-19 21:49:21','2023-12-19 21:49:21') \"\n"})})]})}function g(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var r=t(296540);const s={},c=r.createContext(s);function o(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);