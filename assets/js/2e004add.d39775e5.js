"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[49829],{6507:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=c(74848),i=c(28453);const r={title:"ORM\u65f6\u533a\u5904\u7406",sidebar_position:5},d=void 0,s={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406",title:"ORM\u65f6\u533a\u5904\u7406",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/5-ORM\u65f6\u533a\u5904\u7406.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u65f6\u533a\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/5-ORM\u65f6\u533a\u5904\u7406.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:172951756e4,sidebarPosition:5,frontMatter:{title:"ORM\u65f6\u533a\u5904\u7406",sidebar_position:5},sidebar:"hiddenSidebar",previous:{title:"ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u7ed3\u679c\u5904\u7406/ORM\u7ed3\u679c\u5904\u7406-\u7a7a\u6570\u7ec4\u7ed3\u6784\u8fd4\u56de"},next:{title:"ORM\u6a21\u578b\u751f\u6210",permalink:"/gf-site/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6a21\u578b\u751f\u6210"}},o={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u8f6c\u6362\u793a\u4f8b",id:"\u8f6c\u6362\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u8bbe\u7f6e <code>loc=Local</code>",id:"\u793a\u4f8b1\u8bbe\u7f6e-loclocal",level:3},{value:"\u793a\u4f8b2\uff0c\u4e0d\u8bbe\u7f6e <code>loc</code> \u53c2\u6570",id:"\u793a\u4f8b2\u4e0d\u8bbe\u7f6e-loc-\u53c2\u6570",level:3},{value:"\u6539\u8fdb\u5efa\u8bae",id:"\u6539\u8fdb\u5efa\u8bae",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7531\u4e8e\u5927\u5bb6\u95ee\u5f97\u6bd4\u8f83\u591a\uff0c\u56e0\u6b64\u5355\u72ec\u5f00\u4e86\u4e00\u4e2a\u7ae0\u8282\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e0b ",(0,t.jsx)(n.code,{children:"ORM"})," \u4e2d\u7684\u65f6\u533a\u5904\u7406\u662f\u600e\u4e48\u4e00\u56de\u4e8b\u3002\u6211\u4eec\u8fd9\u91cc\u4ee5 ",(0,t.jsx)(n.code,{children:"MySQL"})," \u6570\u636e\u5e93\u4e3a\u4f8b\u6765\u4ecb\u7ecd\u65f6\u533a\u8f6c\u6362\u7684\u4e8b\u60c5\uff0c\u672c\u5730\u65f6\u533a\u6211\u4eec\u8bbe\u5b9a\u4e3a ",(0,t.jsx)(n.code,{children:"+8"})," \u65f6\u533a\uff0c\u6570\u636e\u5e93\u65f6\u533a\u4e5f\u662f ",(0,t.jsx)(n.code,{children:"+8"})," \u65f6\u533a\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MySQL"})," \u6570\u636e\u5e93\u9a71\u52a8\u7528\u5f97\u6700\u591a\u7684\u662f\u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5305\uff1a ",(0,t.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"})," \uff0c\u5728\u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5305\u4e2d\u6709\u8fd9\u4e48\u4e00\u4e2a\u53c2\u6570:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:c(98602).A+"",width:"1872",height:"768"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5927\u6982\u7684\u610f\u601d\u662f\uff0c\u5f53\u4f60\u63d0\u4ea4\u7684\u65f6\u95f4\u53c2\u6570\u4e3a ",(0,t.jsx)(n.code,{children:"time.Time"})," \u65f6\uff0c\u8be5\u53c2\u6570\u7528\u6765\u8f6c\u6362\u53c2\u6570\u65f6\u533a\u7684\u3002\u5f53\u4f60\u5728\u8fde\u63a5\u6570\u636e\u5e93\u65f6\uff0c\u8be5\u53c2\u6570\u4f20\u9012 ",(0,t.jsx)(n.code,{children:"loc=Local"}),"\uff0c\u90a3\u4e48\u8be5 ",(0,t.jsx)(n.code,{children:"driver"})," \u5c06\u4f1a\u81ea\u52a8\u5c06\u4f60\u63d0\u4ea4\u7684 ",(0,t.jsx)(n.code,{children:"time.Time"})," \u53c2\u6570\u8f6c\u6362\u4e3a\u672c\u5730\u7a0b\u5e8f\u8bbe\u7f6e\u7684\u65f6\u533a\uff0c\u6ca1\u6709\u624b\u52a8\u8bbe\u7f6e\u65f6\uff0c\u90a3\u4e48\u8be5\u65f6\u533a\u4e3a ",(0,t.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\u3002\u90a3\u4e48\u6211\u4eec\u6765\u770b\u4e24\u4e2a\u4f8b\u5b50\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8f6c\u6362\u793a\u4f8b",children:"\u8f6c\u6362\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.h3,{id:"\u793a\u4f8b1\u8bbe\u7f6e-loclocal",children:["\u793a\u4f8b1\uff0c\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"loc=Local"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'database:\n  link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 18:00:00\' AND create_time<\'2020-10-27 19:00:00\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"time.Parse"})," \u521b\u5efa\u7684 ",(0,t.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,t.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u5c06\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,t.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u4e3a ",(0,t.jsx)(n.code,{children:"+8"})," \u65f6\u533a\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"time.ParseInLocation"})," \u521b\u5efa\u7684 ",(0,t.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,t.jsx)(n.code,{children:"+8"})," \u65f6\u533a\uff0c\u548c ",(0,t.jsx)(n.code,{children:"loc=Local"})," \u7684\u65f6\u533a\u4e00\u81f4\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u4e0d\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,t.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\u5728\u5199\u5165\u6570\u636e\u4e2d\u5305\u542b ",(0,t.jsx)(n.code,{children:"time.Time"})," \u53c2\u6570\u65f6\uff0c\u4e5f\u9700\u8981\u6ce8\u610f\u65f6\u533a\u8f6c\u6362\u7684\u95ee\u9898\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u793a\u4f8b2\u4e0d\u8bbe\u7f6e-loc-\u53c2\u6570",children:["\u793a\u4f8b2\uff0c\u4e0d\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"loc"})," \u53c2\u6570"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'database:\n  link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4ee3\u7801\u793a\u4f8b"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")\nt2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 10:00:00\' AND create_time<\'2020-10-27 11:00:00\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"time.Parse"})," \u521b\u5efa\u7684 ",(0,t.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,t.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u5c06\u4e0d\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,t.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)\nt2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)\ndb.Model("user").Ctx(ctx).Where("create_time>? and create_time<?", t1, t2).One()\n// SELECT * FROM `user` WHERE create_time>\'2020-10-27 02:00:00\' AND create_time<\'2020-10-27 03:00:00\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7531\u4e8e\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"time.ParseInLocation"})," \u521b\u5efa\u7684 ",(0,t.jsx)(n.code,{children:"time.Time"})," \u65f6\u95f4\u5bf9\u8c61\u662f ",(0,t.jsx)(n.code,{children:"+8"})," \u65f6\u533a\uff0c\u90a3\u4e48\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u6267\u884c\u65f6\u4f1a\u88ab\u5e95\u5c42\u7684 ",(0,t.jsx)(n.code,{children:"driver"})," \u4fee\u6539\u4e3a ",(0,t.jsx)(n.code,{children:"UTC"})," \u65f6\u533a\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\u5728\u5199\u5165\u6570\u636e\u4e2d\u5305\u542b ",(0,t.jsx)(n.code,{children:"time.Time"})," \u53c2\u6570\u65f6\uff0c\u4e5f\u9700\u8981\u6ce8\u610f\u65f6\u533a\u8f6c\u6362\u7684\u95ee\u9898\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6539\u8fdb\u5efa\u8bae",children:"\u6539\u8fdb\u5efa\u8bae"}),"\n",(0,t.jsxs)(n.p,{children:["\u5efa\u8bae\u5728\u914d\u7f6e\u4e2d\u7edf\u4e00\u52a0\u4e0a ",(0,t.jsx)(n.code,{children:"locl"})," \u914d\u7f6e\uff0c\u4f8b\u5982\uff08MySQL\uff09\uff1a ",(0,t.jsx)(n.code,{children:"loc=Local&parseTime=true"}),"\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u53ef\u4f9b\u53c2\u8003\u7684\u914d\u7f6e\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'database:\n  logger:\n    level:  "all"\n    stdout: true\n  default:\n    link:  "mysql:root:12345678@tcp(192.168.1.10:3306)/mydb?loc=Local&parseTime=true"\n    debug: true\n  order:\n    link:  "mysql:root:12345678@tcp(192.168.1.20:3306)/order?loc=Local&parseTime=true"\n    debug: true\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},98602:(e,n,c)=>{c.d(n,{A:()=>t});const t=c.p+"assets/images/86813361650854a9b17490267709df8a-4cb46e19a4360a42a197ba31624f3fd8.png"},28453:(e,n,c)=>{c.d(n,{R:()=>d,x:()=>s});var t=c(96540);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);