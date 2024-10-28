"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[77251],{521680:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var r=n(474848),o=n(28453);const d={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406",sidebar_position:8},i=void 0,s={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406",description:"Model \u5bf9\u8c61\u4e5f\u53ef\u4ee5\u901a\u8fc7 TX \u4e8b\u52a1\u5bf9\u8c61\u521b\u5efa\uff0c\u901a\u8fc7\u4e8b\u52a1\u5bf9\u8c61\u521b\u5efa\u7684 Model \u5bf9\u8c61\u4e0e\u901a\u8fc7 DB \u6570\u636e\u5e93\u5bf9\u8c61\u521b\u5efa\u7684 Model \u5bf9\u8c61\u529f\u80fd\u662f\u4e00\u6837\u7684\uff0c\u53ea\u4e0d\u8fc7\u524d\u8005\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u57fa\u4e8e\u4e8b\u52a1\uff0c\u800c\u5f53\u4e8b\u52a1\u63d0\u4ea4\u6216\u8005\u56de\u6eda\u540e\uff0c\u5bf9\u5e94\u7684 Model \u5bf9\u8c61\u4e0d\u80fd\u88ab\u7ee7\u7eed\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u8fd4\u56de\u9519\u8bef\u3002\u56e0\u4e3a\u8be5 TX \u5bf9\u8c61\u4e0d\u80fd\u88ab\u7ee7\u7eed\u4f7f\u7528\uff0c\u4e00\u4e2a\u4e8b\u52a1\u5bf9\u8c61\u4ec5\u5bf9\u5e94\u4e8e\u4e00\u4e2a\u4e8b\u52a1\u6d41\u7a0b\uff0c Commit/ Rollback \u540e\u5373\u7ed3\u675f\u3002",source:"@site/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/8-ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/8-ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406.md",tags:[],version:"2.2.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:8,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e3b\u4ece\u5207\u6362",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e3b\u4ece\u5207\u6362"}},c={},l=[{value:"\u793a\u4f8b1\uff0c\u901a\u8fc7 <code>Transaction</code>",id:"\u793a\u4f8b1\u901a\u8fc7-transaction",level:2},{value:"\u793a\u4f8b2\uff0c\u901a\u8fc7 <code>TX</code> \u94fe\u5f0f\u64cd\u4f5c",id:"\u793a\u4f8b2\u901a\u8fc7-tx-\u94fe\u5f0f\u64cd\u4f5c",level:2}];function a(t){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Model"})," \u5bf9\u8c61\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"TX"})," \u4e8b\u52a1\u5bf9\u8c61\u521b\u5efa\uff0c\u901a\u8fc7\u4e8b\u52a1\u5bf9\u8c61\u521b\u5efa\u7684 ",(0,r.jsx)(e.code,{children:"Model"})," \u5bf9\u8c61\u4e0e\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"DB"})," \u6570\u636e\u5e93\u5bf9\u8c61\u521b\u5efa\u7684 ",(0,r.jsx)(e.code,{children:"Model"})," \u5bf9\u8c61\u529f\u80fd\u662f\u4e00\u6837\u7684\uff0c\u53ea\u4e0d\u8fc7\u524d\u8005\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u662f\u57fa\u4e8e\u4e8b\u52a1\uff0c\u800c\u5f53\u4e8b\u52a1\u63d0\u4ea4\u6216\u8005\u56de\u6eda\u540e\uff0c\u5bf9\u5e94\u7684 ",(0,r.jsx)(e.code,{children:"Model"})," \u5bf9\u8c61\u4e0d\u80fd\u88ab\u7ee7\u7eed\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u8fd4\u56de\u9519\u8bef\u3002\u56e0\u4e3a\u8be5 ",(0,r.jsx)(e.code,{children:"TX"})," \u5bf9\u8c61\u4e0d\u80fd\u88ab\u7ee7\u7eed\u4f7f\u7528\uff0c\u4e00\u4e2a\u4e8b\u52a1\u5bf9\u8c61\u4ec5\u5bf9\u5e94\u4e8e\u4e00\u4e2a\u4e8b\u52a1\u6d41\u7a0b\uff0c ",(0,r.jsx)(e.code,{children:"Commit"}),"/ ",(0,r.jsx)(e.code,{children:"Rollback"})," \u540e\u5373\u7ed3\u675f\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u672c\u7ae0\u8282\u4ec5\u5bf9\u94fe\u5f0f\u64cd\u4f5c\u6d89\u53ca\u5230\u7684\u4e8b\u52a1\u5904\u7406\u65b9\u6cd5\u505a\u7b80\u5355\u4ecb\u7ecd\uff0c\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"output/goframe-v2.2-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86",children:"ORM\u4e8b\u52a1\u5904\u7406"})," \u7ae0\u8282\u3002"]}),"\n",(0,r.jsxs)(e.h2,{id:"\u793a\u4f8b1\u901a\u8fc7-transaction",children:["\u793a\u4f8b1\uff0c\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Transaction"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e3a\u65b9\u4fbf\u4e8b\u52a1\u64cd\u4f5c\uff0c ",(0,r.jsx)(e.code,{children:"gdb"})," \u63d0\u4f9b\u4e86\u4e8b\u52a1\u7684\u95ed\u5305\u64cd\u4f5c\uff0c\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Transaction"})," \u65b9\u6cd5\u5b9e\u73b0\uff0c\u8be5\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (db DB) Transaction(ctx context.Context, f func(ctx context.Context, tx *TX) error) (err error)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u7ed9\u5b9a\u7684\u95ed\u5305\u65b9\u6cd5\u8fd4\u56de\u7684 ",(0,r.jsx)(e.code,{children:"error"})," \u4e3a ",(0,r.jsx)(e.code,{children:"nil"})," \u65f6\uff0c\u90a3\u4e48\u95ed\u5305\u6267\u884c\u7ed3\u675f\u540e\u5f53\u524d\u4e8b\u52a1\u81ea\u52a8\u6267\u884c ",(0,r.jsx)(e.code,{children:"Commit"})," \u63d0\u4ea4\u64cd\u4f5c\uff1b\u5426\u5219\u81ea\u52a8\u6267\u884c ",(0,r.jsx)(e.code,{children:"Rollback"})," \u56de\u6eda\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u95ed\u5305\u5185\u90e8\u64cd\u4f5c\u4ea7\u751f ",(0,r.jsx)(e.code,{children:"panic"})," \u4e2d\u65ad\uff0c\u8be5\u4e8b\u52a1\u4e5f\u5c06\u8fdb\u884c\u56de\u6eda\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'func Register() error {\n\treturn g.DB().Transaction(ctx, func(ctx context.Context, tx *gdb.TX) error {\n\t\tvar (\n\t\t\tresult sql.Result\n\t\t\terr    error\n\t\t)\n\t\t// \u5199\u5165\u7528\u6237\u57fa\u7840\u6570\u636e\n\t\tresult, err = tx.Table("user").Insert(g.Map{\n\t\t\t"name":  "john",\n\t\t\t"score": 100,\n\t\t\t//...\n\t\t})\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\t// \u5199\u5165\u7528\u6237\u8be6\u60c5\u6570\u636e\uff0c\u9700\u8981\u7528\u5230\u4e0a\u4e00\u6b21\u5199\u5165\u5f97\u5230\u7684\u7528\u6237uid\n\t\tresult, err = tx.Table("user_detail").Insert(g.Map{\n\t\t\t"uid":   result.LastInsertId(),\n\t\t\t"phone": "18010576258",\n\t\t\t//...\n\t\t})\n\t\treturn err\n\t})\n}\n'})}),"\n",(0,r.jsxs)(e.h2,{id:"\u793a\u4f8b2\u901a\u8fc7-tx-\u94fe\u5f0f\u64cd\u4f5c",children:["\u793a\u4f8b2\uff0c\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"TX"})," \u94fe\u5f0f\u64cd\u4f5c"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u94fe\u5f0f\u64cd\u4f5c\u4e2d\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"TX"})," \u65b9\u6cd5\u5207\u6362\u7ed1\u5b9a\u7684\u4e8b\u52a1\u5bf9\u8c61\u3002\u591a\u6b21\u94fe\u5f0f\u64cd\u4f5c\u53ef\u4ee5\u7ed1\u5b9a\u540c\u4e00\u4e2a\u4e8b\u52a1\u5bf9\u8c61\uff0c\u5728\u8be5\u4e8b\u52a1\u5bf9\u8c61\u4e2d\u6267\u884c\u5bf9\u5e94\u7684\u94fe\u5f0f\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'func Register() error {\n\tvar (\n\t\tuid int64\n\t\terr error\n\t)\n\ttx, err := g.DB().Begin()\n\tif err != nil {\n\t\treturn err\n\t}\n\t// \u65b9\u6cd5\u9000\u51fa\u65f6\u68c0\u9a8c\u8fd4\u56de\u503c\uff0c\n\t// \u5982\u679c\u7ed3\u679c\u6210\u529f\u5219\u6267\u884ctx.Commit()\u63d0\u4ea4,\n\t// \u5426\u5219\u6267\u884ctx.Rollback()\u56de\u6eda\u64cd\u4f5c\u3002\n\tdefer func() {\n\t\tif err != nil {\n\t\t\ttx.Rollback()\n\t\t} else {\n\t\t\ttx.Commit()\n\t\t}\n\t}()\n\t// \u5199\u5165\u7528\u6237\u57fa\u7840\u6570\u636e\n\tuid, err = AddUserInfo(tx, g.Map{\n\t\t"name":  "john",\n\t\t"score": 100,\n\t\t//...\n\t})\n\tif err != nil {\n\t\treturn err\n\t}\n\t// \u5199\u5165\u7528\u6237\u8be6\u60c5\u6570\u636e\uff0c\u9700\u8981\u7528\u5230\u4e0a\u4e00\u6b21\u5199\u5165\u5f97\u5230\u7684\u7528\u6237uid\n\terr = AddUserDetail(tx, g.Map{\n\t\t"uid":   uid,\n\t\t"phone": "18010576259",\n\t\t//...\n\t})\n\treturn err\n}\n\nfunc AddUserInfo(tx *gdb.TX, data g.Map) (int64, error) {\n\tresult, err := g.Model("user").TX(tx).Data(data).Insert()\n\tif err != nil {\n\t\treturn 0, err\n\t}\n\tuid, err := result.LastInsertId()\n\tif err != nil {\n\t\treturn 0, err\n\t}\n\treturn uid, nil\n}\n\nfunc AddUserDetail(tx *gdb.TX, data g.Map) error {\n\t_, err := g.Model("user_detail").TX(tx).Data(data).Insert()\n\treturn err\n}\n'})})]})}function x(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(a,{...t})}):a(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>s});var r=n(296540);const o={},d=r.createContext(o);function i(t){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(d.Provider,{value:e},t.children)}}}]);