"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[29190],{76318:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=e(74848),i=e(28453);const s={title:"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",sidebar_position:8,hide_title:!0},r=void 0,a={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",description:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 DB.Stats \u65b9\u6cd5\u83b7\u53d6 orm \u5bf9\u8c61\u7684\u8fde\u63a5\u6c60\u72b6\u6001\u3002\u6211\u4eec\u6765\u770b\u4e2a\u793a\u4f8b\uff1a",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027/8-ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027/8-ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:8,frontMatter:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u8fde\u63a5\u6c60\u72b6\u6001",sidebar_position:8,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362"},next:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301",permalink:"/gf-site/en/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u5185\u5d4c\u7ed3\u6784\u652f\u6301"}},c={},d=[];function l(n){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(t.code,{children:"DB.Stats"})," \u65b9\u6cd5\u83b7\u53d6 ",(0,o.jsx)(t.code,{children:"orm"})," \u5bf9\u8c61\u7684\u8fde\u63a5\u6c60\u72b6\u6001\u3002\u6211\u4eec\u6765\u770b\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'package main\n\nimport (\n\t_ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\n\t"github.com/gogf/gf/v2/database/gdb"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\tdb, err := gdb.New(gdb.ConfigNode{\n\t\tLink: "mysql:root:12345678@tcp(127.0.0.1:3306)/test",\n\t})\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\terr = db.PingMaster()\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tstats := db.Stats(ctx)\n\tg.Dump(stats)\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u6bcf\u4e2a\u94fe\u63a5\u7684\u6570\u636e\u5e93\u8282\u70b9\u4ee5\u53ca\u5bf9\u5e94\u7684\u8fde\u63a5\u6c60\u72b6\u6001\u4fe1\u606f\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'[\n    {\n        node:  {\n            Host:                 "127.0.0.1",\n            Port:                 "3306",\n            User:                 "root",\n            Pass:                 "12345678",\n            Name:                 "test",\n            Type:                 "mysql",\n            Link:                 "",\n            Extra:                "",\n            Role:                 "",\n            Debug:                false,\n            Prefix:               "",\n            DryRun:               false,\n            Weight:               0,\n            Charset:              "utf8",\n            Protocol:             "tcp",\n            Timezone:             "",\n            Namespace:            "",\n            MaxIdleConnCount:     0,\n            MaxOpenConnCount:     0,\n            MaxConnLifeTime:      0,\n            QueryTimeout:         0,\n            ExecTimeout:          0,\n            TranTimeout:          0,\n            PrepareTimeout:       0,\n            CreatedAt:            "",\n            UpdatedAt:            "",\n            DeletedAt:            "",\n            TimeMaintainDisabled: false,\n        },\n        stats: {\n            MaxOpenConnections: 0,\n            OpenConnections:    1,\n            InUse:              0,\n            Idle:               1,\n            WaitCount:          0,\n            WaitDuration:       0,\n            MaxIdleClosed:      0,\n            MaxIdleTimeClosed:  0,\n            MaxLifetimeClosed:  0,\n        },\n    },\n]\n'})})]})}function u(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>a});var o=e(96540);const i={},s=o.createContext(i);function r(n){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:t},n.children)}}}]);