"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[59966],{848039:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var i=r(474848),t=r(28453);const c={title:"ORM\u4e8b\u52a1\u64cd\u4f5c",sidebar_position:3},s=void 0,d={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u64cd\u4f5c",title:"ORM\u4e8b\u52a1\u64cd\u4f5c",description:"\u4f7f\u7528 goframe \u7684 ORM \u7ec4\u4ef6\u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u6bd4\u8f83\u7b80\u4fbf\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002",source:"@site/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/11-\u6570\u636e\u5e93ORM/3-ORM\u4e8b\u52a1\u64cd\u4f5c.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/11-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u64cd\u4f5c",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u4e8b\u52a1\u64cd\u4f5c",draft:!1,unlisted:!1,tags:[],version:"1.15.x",sidebarPosition:3,frontMatter:{title:"ORM\u4e8b\u52a1\u64cd\u4f5c",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ORM\u65b9\u6cd5\u64cd\u4f5c",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65b9\u6cd5\u64cd\u4f5c"},next:{title:"ORM\u7ed3\u679c\u5904\u7406",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406"}},o={},a=[{value:"<code>Begin/Commit/Rollback</code>",id:"begincommitrollback",level:2},{value:"1. \u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",id:"1-\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",level:3},{value:"2. \u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",id:"2-\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",level:3},{value:"3. \u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",id:"3-\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",level:3},{value:"4. \u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",id:"4-\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",level:3},{value:"<code>Transaction</code> \u95ed\u5305\u64cd\u4f5c",id:"transaction-\u95ed\u5305\u64cd\u4f5c",level:2},{value:"\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c",id:"\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c",level:2},{value:"1.\xa0\u57fa\u672c\u64cd\u4f5c",id:"1\u57fa\u672c\u64cd\u4f5c",level:3},{value:"<code>db.Begin</code> \u4e0e <code>tx.Begin</code>",id:"dbbegin-\u4e0e-txbegin",level:4},{value:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",id:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",level:4},{value:"2. \u95ed\u5305\u64cd\u4f5c",id:"2-\u95ed\u5305\u64cd\u4f5c",level:3},{value:"3. <code>SavePoint/RollbackTo</code>",id:"3-savepointrollbackto",level:3}];function l(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"goframe"})," \u7684 ",(0,i.jsx)(e.code,{children:"ORM"})," \u7ec4\u4ef6\u8fdb\u884c\u4e8b\u52a1\u64cd\u4f5c\u6bd4\u8f83\u7b80\u4fbf\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u64cd\u4f5c\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4e00\u79cd\u662f\u5f00\u542f\u4e8b\u52a1\u4e4b\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61 ",(0,i.jsx)(e.code,{children:"*gdb.TX"}),"\uff0c\u968f\u540e\u53ef\u4ee5\u4f7f\u7528\u8be5\u5bf9\u8c61\u8fdb\u884c\u5982\u4e4b\u524d\u7ae0\u8282\u4ecb\u7ecd\u7684\u65b9\u6cd5\u64cd\u4f5c\u548c\u94fe\u5f0f\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u4e00\u79cd\u662f\u4ee5\u95ed\u5305\u7684\u5f62\u5f0f\u6765\u64cd\u4f5c\u4e8b\u52a1\uff0c\u6240\u6709\u7684\u4e8b\u52a1\u903b\u8f91\u5728\u95ed\u5305\u4e2d\u5b9e\u73b0\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,i.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb#TX",children:"https://godoc.org/github.com/gogf/gf/database/gdb#TX"})]}),"\n",(0,i.jsx)(e.h2,{id:"begincommitrollback",children:(0,i.jsx)(e.code,{children:"Begin/Commit/Rollback"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,i.jsx)(e.code,{children:"db.Begin"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u4e8b\u52a1\u7684\u64cd\u4f5c\u5bf9\u8c61\uff0c\u7c7b\u578b\u4e3a ",(0,i.jsx)(e.code,{children:"*gdb.Tx"}),"\uff0c\u901a\u8fc7\u8be5\u5bf9\u8c61\u6267\u884c\u540e\u7eed\u7684\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u5e76\u53ef\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"tx.Commit"})," \u63d0\u4ea4\u4fee\u6539\uff0c\u6216\u8005\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"tx.Rollback"})," \u56de\u6eda\u4fee\u6539\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5e38\u89c1\u95ee\u9898\u6ce8\u610f\uff1a\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c\u540e\uff0c\u8bf7\u52a1\u5fc5\u5728\u4e0d\u9700\u8981\u4f7f\u7528\u8be5\u4e8b\u52a1\u5bf9\u8c61\u65f6\uff0c\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Commit"}),"/ ",(0,i.jsx)(e.code,{children:"Rollback"})," \u64cd\u4f5c\u5173\u95ed\u6389\u8be5\u4e8b\u52a1\uff0c\u5efa\u8bae\u5145\u5206\u5229\u7528\u597d ",(0,i.jsx)(e.code,{children:"defer"})," \u65b9\u6cd5\u3002\u5982\u679c\u4e8b\u52a1\u4f7f\u7528\u540e\u4e0d\u5173\u95ed\uff0c\u5728\u5e94\u7528\u4fa7\u4f1a\u5f15\u8d77 ",(0,i.jsx)(e.code,{children:"goroutine"})," \u4e0d\u65ad\u6fc0\u589e\u6cc4\u9732\uff0c\u5728\u6570\u636e\u5e93\u4fa7\u4f1a\u5f15\u8d77\u4e8b\u52a1\u7ebf\u7a0b\u6570\u91cf\u88ab\u6253\u6ee1\uff0c\u4ee5\u81f3\u4e8e\u540e\u7eed\u7684\u4e8b\u52a1\u8bf7\u6c42\u6267\u884c\u8d85\u65f6\u3002\u6b64\u5916\uff0c\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528\u540e\u7eed\u4ecb\u7ecd\u7684 ",(0,i.jsx)(e.code,{children:"Transaction"})," \u95ed\u5305\u65b9\u6cd5\u6765\u5b89\u5168\u5b9e\u73b0\u4e8b\u52a1\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"1-\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c",children:"1. \u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    fmt.Println("\u5f00\u542f\u4e8b\u52a1\u64cd\u4f5c")\n}\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u6240\u6709 ",(0,i.jsx)(e.code,{children:"db"})," \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,i.jsx)(e.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb",children:"API\u6587\u6863"}),"\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"2-\u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c",children:"2. \u4e8b\u52a1\u56de\u6eda\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Save("user", gdb.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    tx.Rollback()\n    fmt.Println(r, err)\n}\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"3-\u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c",children:"3. \u4e8b\u52a1\u63d0\u4ea4\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Save("user", gdb.Map{\n        "id"   :  1,\n        "name" : "john",\n    })\n    tx.Commit()\n    fmt.Println(r, err)\n}\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"4-\u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c",children:"4. \u4e8b\u52a1\u94fe\u5f0f\u64cd\u4f5c"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"tx.Table"})," \u6216\u8005 ",(0,i.jsx)(e.code,{children:"tx.From"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u7684\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u4e0e ",(0,i.jsx)(e.code,{children:"db.Table"})," \u6216\u8005 ",(0,i.jsx)(e.code,{children:"db.From"})," \u65b9\u6cd5\u8fd4\u56de\u503c\u76f8\u540c\uff0c\u53ea\u4e0d\u8fc7\u6570\u636e\u5e93\u64cd\u4f5c\u5728\u4e8b\u52a1\u4e0a\u6267\u884c\uff0c\u53ef\u63d0\u4ea4\u6216\u56de\u6eda\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'if tx, err := db.Begin(); err == nil {\n    r, err := tx.Table("user").Data(gdb.Map{"id":1, "name": "john_1"}).Save()\n    tx.Commit()\n    fmt.Println(r, err)\n}\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5176\u4ed6\u94fe\u5f0f\u64cd\u4f5c\u8bf7\u53c2\u8003 ",(0,i.jsx)(e.a,{href:"output/goframe-v1.15-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%87%8D%E7%82%B9",children:"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)"})," \u7ae0\u8282\u3002"]}),"\n",(0,i.jsxs)(e.h2,{id:"transaction-\u95ed\u5305\u64cd\u4f5c",children:[(0,i.jsx)(e.code,{children:"Transaction"})," \u95ed\u5305\u64cd\u4f5c"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4e3a\u65b9\u4fbf\u5b89\u5168\u6267\u884c\u4e8b\u52a1\u64cd\u4f5c\uff0c ",(0,i.jsx)(e.code,{children:"gdb"})," \u63d0\u4f9b\u4e86\u4e8b\u52a1\u7684\u95ed\u5305\u64cd\u4f5c\uff0c\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Transaction"})," \u65b9\u6cd5\u5b9e\u73b0\uff0c\u8be5\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (db DB) Transaction(f func(tx *TX) error) (err error)\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u95ed\u5305\u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,i.jsx)(e.code,{children:"error"})," \u4e3a ",(0,i.jsx)(e.code,{children:"nil"})," \u65f6\uff0c\u90a3\u4e48\u95ed\u5305\u6267\u884c\u7ed3\u675f\u540e\u5f53\u524d\u4e8b\u52a1\u81ea\u52a8\u6267\u884c ",(0,i.jsx)(e.code,{children:"Commit"})," \u63d0\u4ea4\u64cd\u4f5c\uff1b\u5426\u5219\u81ea\u52a8\u6267\u884c ",(0,i.jsx)(e.code,{children:"Rollback"})," \u56de\u6eda\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u95ed\u5305\u5185\u90e8\u64cd\u4f5c\u4ea7\u751f ",(0,i.jsx)(e.code,{children:"panic"})," \u4e2d\u65ad\uff0c\u8be5\u4e8b\u52a1\u4e5f\u5c06\u8fdb\u884c\u56de\u6eda\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'db.Transaction(func(tx *gdb.TX) error {\n    // user\n    result, err := tx.Insert("user", g.Map{\n        "passport": "john",\n        "password": "12345678",\n        "nickname": "JohnGuo",\n    })\n    if err != nil {\n        return err\n    }\n    // user_detail\n    id, err := result.LastInsertId()\n    if err != nil {\n        return err\n    }\n    _, err = tx.Insert("user_detail", g.Map{\n        "uid":       id,\n        "site":      "https://johng.cn",\n        "true_name": "GuoQiang",\n    })\n    if err != nil {\n        return err\n    }\n    return nil\n})\n\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c",children:"\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c"}),"\n",(0,i.jsxs)(e.p,{children:["\u4ece ",(0,i.jsx)(e.code,{children:"GoFrame"})," \u7248\u672c ",(0,i.jsx)(e.code,{children:"v1.15.7"})," \u5f00\u59cb\uff0c\u63d0\u4f9b\u4e86\u5bf9\u6570\u636e\u5e93\u5d4c\u5957\u4e8b\u52a1\u7684\u652f\u6301\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6570\u636e\u5e93\u670d\u52a1\u5f80\u5f80\u5e76\u4e0d\u652f\u6301\u5d4c\u5957\u4e8b\u52a1\uff0c\u800c\u662f\u4f9d\u9760 ",(0,i.jsx)(e.code,{children:"ORM"})," \u7ec4\u4ef6\u5c42\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Transaction Save Point"})," \u7279\u6027\u5b9e\u73b0\u7684\u3002\u76f8\u5173\u65b9\u6cd5\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// Begin starts a nested transaction procedure.\nfunc (tx *TX) Begin() error\n\n// Commit commits current transaction.\n// Note that it releases previous saved transaction point if it's in a nested transaction procedure,\n// or else it commits the hole transaction.\nfunc (tx *TX) Commit() error\n\n// Rollback aborts current transaction.\n// Note that it aborts current transaction if it's in a nested transaction procedure,\n// or else it aborts the hole transaction.\nfunc (tx *TX) Rollback() error\n\n// SavePoint performs `SAVEPOINT xxx` SQL statement that saves transaction at current point.\n// The parameter `point` specifies the point name that will be saved to server.\nfunc (tx *TX) SavePoint(point string) error\n\n// RollbackTo performs `ROLLBACK TO SAVEPOINT xxx` SQL statement that rollbacks to specified saved transaction.\n// The parameter `point` specifies the point name that was saved previously.\nfunc (tx *TX) RollbackTo(point string) error\n\n// Transaction wraps the transaction logic using function `f`.\n// It rollbacks the transaction and returns the error from function `f` if\n// it returns non-nil error. It commits the transaction and returns nil if\n// function `f` returns nil.\n//\n// Note that, you should not Commit or Rollback the transaction in function `f`\n// as it is automatically handled by this function.\nfunc (tx *TX) Transaction(f func(tx *TX) error) (err error)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"1\u57fa\u672c\u64cd\u4f5c",children:"1.\xa0\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b ",(0,i.jsx)(e.code,{children:"SQL"}),"\uff0c\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5 ",(0,i.jsx)(e.code,{children:"id"})," \u548c ",(0,i.jsx)(e.code,{children:"name"}),"\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL COMMENT '\u7528\u6237ID',\n  `name` varchar(45) NOT NULL COMMENT '\u7528\u6237\u540d\u79f0',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u7a0b\u5e8f\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'tx, err := db.Begin()\nif err != nil {\n\tpanic(err)\n}\nif err = tx.Begin(); err != nil {\n\tpanic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert()\nif err = tx.Rollback(); err != nil {\n\tpanic(err)\n}\n_, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\nif err = tx.Commit(); err != nil {\n\tpanic(err)\n}\n'})}),"\n",(0,i.jsxs)(e.h4,{id:"dbbegin-\u4e0e-txbegin",children:[(0,i.jsx)(e.code,{children:"db.Begin"})," \u4e0e ",(0,i.jsx)(e.code,{children:"tx.Begin"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u6211\u4eec\u7684\u5d4c\u5957\u4e8b\u52a1\u4e2d\u51fa\u73b0\u4e86 ",(0,i.jsx)(e.code,{children:"db.Begin"})," \u548c ",(0,i.jsx)(e.code,{children:"tx.Begin"})," \u4e24\u79cd\u4e8b\u52a1\u5f00\u542f\u65b9\u5f0f\uff0c\u4e24\u8005\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f ",(0,i.jsx)(e.code,{children:"db.Begin"})," \u662f\u5728\u6570\u636e\u5e93\u670d\u52a1\u4e0a\u771f\u6b63\u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u4e8b\u52a1\u64cd\u4f5c\u5bf9\u8c61 ",(0,i.jsx)(e.code,{children:"tx"}),"\uff0c\u968f\u540e\u6240\u6709\u7684\u4e8b\u52a1\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7\u8be5 ",(0,i.jsx)(e.code,{children:"tx"})," \u4e8b\u52a1\u5bf9\u8c61\u6765\u64cd\u4f5c\u7ba1\u7406\u3002 ",(0,i.jsx)(e.code,{children:"tx.Begin"})," \u8868\u793a\u5728\u5f53\u524d\u4e8b\u52a1\u64cd\u4f5c\u4e2d\u5f00\u542f\u5d4c\u5957\u4e8b\u52a1\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5bf9\u5d4c\u5957\u4e8b\u52a1\u7684 ",(0,i.jsx)(e.code,{children:"SavePoint"})," \u91c7\u7528\u81ea\u52a8\u547d\u540d\uff0c\u547d\u540d\u683c\u5f0f\u4e3a ",(0,i.jsx)(e.code,{children:"transactionN"}),"\uff0c\u5176\u4e2d\u7684 ",(0,i.jsx)(e.code,{children:"N"})," \u8868\u793a\u5d4c\u5957\u7684\u5c42\u7ea7\u6570\u91cf\uff0c\u5982\u679c\u60a8\u770b\u5230\u65e5\u5fd7\u4e2d\u51fa\u73b0 ",(0,i.jsx)(e.code,{children:"SAVEPOINT `transaction1` "})," \u8868\u793a\u5f53\u524d\u5d4c\u5957\u5c42\u7ea7\u4e3a ",(0,i.jsx)(e.code,{children:"2"}),"\uff08\u4ece ",(0,i.jsx)(e.code,{children:"0"})," \u5f00\u59cb\u8ba1\u7b97\uff09\u3002"]}),"\n",(0,i.jsx)(e.h4,{id:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7",children:"\u66f4\u8be6\u7ec6\u7684\u65e5\u5fd7"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"goframe"})," \u7684 ",(0,i.jsx)(e.code,{children:"ORM"})," \u62e5\u6709\u76f8\u5f53\u5b8c\u5584\u7684\u65e5\u5fd7\u8bb0\u5f55\u673a\u5236\uff0c\u5982\u679c\u60a8\u6253\u5f00 ",(0,i.jsx)(e.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2021-05-02 13:40:15.483 [DEBU] [  0 ms] [default] SAVEPOINT `transaction0`\n2021-05-02 13:40:15.485 [DEBU] [  2 ms] [default] SHOW FULL COLUMNS FROM `user`\n2021-05-02 13:40:15.486 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-02 13:40:15.486 [DEBU] [  0 ms] [default] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-02 13:40:15.486 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-02 13:40:15.487 [DEBU] [  1 ms] [default] COMMIT\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\u67e5\u8be2\u6570\u636e\u5e93\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select * from `user`;\n+----+-------+\n| id | name  |\n+----+-------+\n|  2 | smith |\n+----+-------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u88ab\u6210\u529f\u56de\u6eda\uff0c\u53ea\u6709\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6267\u884c\u5e76\u63d0\u4ea4\u6210\u529f\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"2-\u95ed\u5305\u64cd\u4f5c",children:"2. \u95ed\u5305\u64cd\u4f5c"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u95ed\u5305\u64cd\u4f5c\u6765\u5b9e\u73b0\u5d4c\u5957\u4e8b\u52a1\uff0c\u540c\u6837\u4e5f\u662f\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"Transaction"})," \u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Transaction"})," \u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u5d4c\u5957\u4e8b\u52a1\u64cd\u4f5c\u7684\u65e0\u9650\u5c42\u7ea7\u5d4c\u5957\uff0c\u4f46\u662f\u4e0d\u63a8\u8350\u5c42\u7ea7\u8fc7\u6df1\u7684\u5d4c\u5957\u4e8b\u52a1\uff0c\u5426\u5219\u4e1a\u52a1\u903b\u8f91\u4e0a\u53ef\u80fd\u4e0d\u592a\u597d\u7ef4\u62a4\u3002\u672c\u793a\u4f8b\u6f14\u793a\u7684\u662f\u53ea\u6709\u4e00\u4e2a\u5c42\u7ea7\u7684\u4e8b\u52a1\u5d4c\u5957\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'if err = db.Transaction(func(tx *gdb.TX) error {\n\t// Nested transaction 1.\n\tif err = tx.Transaction(func(tx *gdb.TX) error {\n\t\t_, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert()\n\t\treturn err\n\t}); err != nil {\n\t\treturn err\n\t}\n\t// Nested transaction 2, panic.\n\tif err = tx.Transaction(func(tx *gdb.TX) error {\n\t\t_, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()\n\t\t// Create a panic that can make this transaction rollback automatically.\n\t\tpanic("error")\n\t}); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}); err != nil {\n\tpanic(err)\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6700\u540e\u7684\u4e8b\u52a1\u6267\u884c\u5931\u8d25\u4e4b\u540e\uff0c\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u5c06\u4f1a\u56de\u6eda\u3002\u6267\u884c\u540e\uff0c\u4ec0\u4e48\u6570\u636e\u90fd\u4e0d\u4f1a\u5199\u5165\u3002\u5982\u679c\u60a8\u6253\u5f00 ",(0,i.jsx)(e.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2021-05-02 13:42:01.935 [DEBU] [  1 ms] [default] SAVEPOINT `transaction0`\n2021-05-02 13:42:01.939 [DEBU] [  4 ms] [default] SHOW FULL COLUMNS FROM `user`\n2021-05-02 13:42:01.940 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-02 13:42:01.940 [DEBU] [  0 ms] [default] RELEASE SAVEPOINT `transaction0`\n2021-05-02 13:42:01.940 [DEBU] [  0 ms] [default] SAVEPOINT `transaction0`\n2021-05-02 13:42:01.941 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-02 13:42:01.941 [DEBU] [  0 ms] [default] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-02 13:42:01.941 [DEBU] [  0 ms] [default] ROLLBACK\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"3-savepointrollbackto",children:["3. ",(0,i.jsx)(e.code,{children:"SavePoint/RollbackTo"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u7075\u6d3b\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Transaction Save Point"})," \u7279\u6027\uff0c\u5e76\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684 ",(0,i.jsx)(e.code,{children:"SavePoint"})," \u547d\u540d\u4ee5\u53ca\u6307\u5b9a ",(0,i.jsx)(e.code,{children:"Point"})," \u56de\u6eda\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'tx, err := db.Begin()\nif err != nil {\n\tpanic(err)\n}\ndefer func() {\n\tif err := recover(); err != nil {\n\t\t_ = tx.Rollback()\n\t}\n}()\nif _, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert(); err != nil {\n\tpanic(err)\n}\nif err = tx.SavePoint("MyPoint"); err != nil {\n\tpanic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert(); err != nil {\n\tpanic(err)\n}\nif _, err = tx.Model(table).Data(g.Map{"id": 3, "name": "green"}).Insert(); err != nil {\n\tpanic(err)\n}\nif err = tx.RollbackTo("MyPoint"); err != nil {\n\tpanic(err)\n}\nif err = tx.Commit(); err != nil {\n\tpanic(err)\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u6253\u5f00 ",(0,i.jsx)(e.code,{children:"SQL"})," \u65e5\u5fd7\uff0c\u90a3\u4e48\u5c06\u4f1a\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff0c\u5c55\u793a\u4e86\u6574\u4e2a\u6570\u636e\u5e93\u8bf7\u6c42\u7684\u8be6\u7ec6\u6267\u884c\u6d41\u7a0b\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2021-05-02 13:59:36.788 [DEBU] [  3 ms] [default] SHOW FULL COLUMNS FROM `user`\n2021-05-02 13:59:36.788 [DEBU] [  0 ms] [default] INSERT INTO `user`(`name`,`id`) VALUES('john',1)\n2021-05-02 13:59:36.789 [DEBU] [  1 ms] [default] SAVEPOINT `MyPoint`\n2021-05-02 13:59:36.789 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-02 13:59:36.789 [DEBU] [  0 ms] [default] INSERT INTO `user`(`name`,`id`) VALUES('green',3)\n2021-05-02 13:59:36.789 [DEBU] [  0 ms] [default] ROLLBACK TO SAVEPOINT `MyPoint`\n2021-05-02 13:59:36.791 [DEBU] [  2 ms] [default] COMMIT\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\u67e5\u8be2\u6570\u636e\u5e93\u7ed3\u679c\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select * from `user`;\n+----+------+\n| id | name |\n+----+------+\n|  1 | john |\n+----+------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7\u5728\u7b2c\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"Insert"})," \u64cd\u4f5c\u540e\u4fdd\u5b58\u4e86\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"SavePoint"})," \u540d\u79f0 ",(0,i.jsx)(e.code,{children:"MyPoint"}),"\uff0c\u968f\u540e\u7684\u51e0\u6b21\u64cd\u4f5c\u90fd\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"RollbackTo"})," \u65b9\u6cd5\u88ab\u56de\u6eda\u6389\u4e86\uff0c\u56e0\u6b64\u53ea\u6709\u7b2c\u4e00\u6b21 ",(0,i.jsx)(e.code,{children:"Insert"})," \u64cd\u4f5c\u88ab\u6210\u529f\u63d0\u4ea4\u6267\u884c\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>d});var i=r(296540);const t={},c=i.createContext(t);function s(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);