"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[72238],{983186:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var s=d(474848),i=d(28453);const r={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",sidebar_position:6},c=void 0,l={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",description:"Fields/FieldsEx \u5b57\u6bb5\u8fc7\u6ee4",source:"@site/versioned_docs/version-2.1.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/6-ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",draft:!1,unlisted:!1,tags:[],version:"2.1.x",sidebarPosition:6,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5bf9\u8c61\u8f93\u5165"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6"}},o={},t=[{value:"<code>Fields/FieldsEx</code> \u5b57\u6bb5\u8fc7\u6ee4",id:"fieldsfieldsex-\u5b57\u6bb5\u8fc7\u6ee4",level:2},{value:"<code>Fields</code> \u793a\u4f8b",id:"fields-\u793a\u4f8b",level:3},{value:"<code>FieldsEx</code> \u793a\u4f8b",id:"fieldsex-\u793a\u4f8b",level:3},{value:"<code>OmitEmpty</code> \u7a7a\u503c\u8fc7\u6ee4",id:"omitempty-\u7a7a\u503c\u8fc7\u6ee4",level:2},{value:"\u5199\u5165/\u66f4\u65b0\u64cd\u4f5c",id:"\u5199\u5165\u66f4\u65b0\u64cd\u4f5c",level:3},{value:"\u6570\u636e\u67e5\u8be2\u64cd\u4f5c",id:"\u6570\u636e\u67e5\u8be2\u64cd\u4f5c",level:3},{value:"<code>OmitNil</code> \u7a7a\u503c\u8fc7\u6ee4",id:"omitnil-\u7a7a\u503c\u8fc7\u6ee4",level:2},{value:"<code>Filter</code> \u5b57\u6bb5\u8fc7\u6ee4(\u5df2\u5185\u7f6e)",id:"filter-\u5b57\u6bb5\u8fc7\u6ee4\u5df2\u5185\u7f6e",level:2}];function h(e){const n={code:"code",del:"del",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"fieldsfieldsex-\u5b57\u6bb5\u8fc7\u6ee4",children:[(0,s.jsx)(n.code,{children:"Fields/FieldsEx"})," \u5b57\u6bb5\u8fc7\u6ee4"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fields"})," \u7528\u4e8e\u6307\u5b9a\u9700\u8981\u64cd\u4f5c\u7684\u8868\u5b57\u6bb5\uff0c\u5305\u62ec\u67e5\u8be2\u5b57\u6bb5\u3001\u5199\u5165\u5b57\u6bb5\u3001\u66f4\u65b0\u5b57\u6bb5\u7b49\u8fc7\u6ee4\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FieldsEx"})," \u7528\u4e8e\u4f8b\u5916\u7684\u5b57\u6bb5\u6307\u5b9a\uff0c\u53ef\u7528\u4e8e\u67e5\u8be2\u5b57\u6bb5\u3001\u5199\u5165\u5b57\u6bb5\u3001\u66f4\u65b0\u5b57\u6bb5\u7b49\u8fc7\u6ee4\uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"fields-\u793a\u4f8b",children:[(0,s.jsx)(n.code,{children:"Fields"})," \u793a\u4f8b"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5047\u5982 ",(0,s.jsx)(n.code,{children:"user"})," \u8868\u67094\u4e2a\u5b57\u6bb5 ",(0,s.jsx)(n.code,{children:"uid"}),", ",(0,s.jsx)(n.code,{children:"nickname"}),", ",(0,s.jsx)(n.code,{children:"passport"}),", ",(0,s.jsx)(n.code,{children:"password"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u67e5\u8be2\u5b57\u6bb5\u8fc7\u6ee4"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'    // SELECT `uid`,`nickname` FROM `user` ORDER BY `uid` asc\n    db.Table("user").Fields("uid, nickname").Order("uid asc").All()\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u5199\u5165\u5b57\u6bb5\u8fc7\u6ee4"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'m := g.Map{\n        "uid"      : 10000,\n        "nickname" : "John Guo",\n        "passport" : "john",\n        "password" : "123456",\n    }\n    db.Table(table).Fields("nickname,passport,password").Data(m).Insert()\n    // INSERT INTO `user`(`nickname`,`passport`,`password`) VALUES(\'John Guo\',\'john\',\'123456\')\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"fieldsex-\u793a\u4f8b",children:[(0,s.jsx)(n.code,{children:"FieldsEx"})," \u793a\u4f8b"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5047\u5982 ",(0,s.jsx)(n.code,{children:"user"})," \u8868\u67094\u4e2a\u5b57\u6bb5 ",(0,s.jsx)(n.code,{children:"uid"}),", ",(0,s.jsx)(n.code,{children:"nickname"}),", ",(0,s.jsx)(n.code,{children:"passport"}),", ",(0,s.jsx)(n.code,{children:"password"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u67e5\u8be2\u5b57\u6bb5\u6392\u9664"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'    // SELECT `uid`,`nickname` FROM `user`\n    db.Table("user").FieldsEx("passport, password").All()\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u5199\u5165\u5b57\u6bb5\u6392\u9664"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'    m := g.Map{\n        "uid"      : 10000,\n        "nickname" : "John Guo",\n        "passport" : "john",\n        "password" : "123456",\n    }\n    db.Table(table).FieldsEx("uid").Data(m).Insert()\n    // INSERT INTO `user`(`nickname`,`passport`,`password`) VALUES(\'John Guo\',\'john\',\'123456\')\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"omitempty-\u7a7a\u503c\u8fc7\u6ee4",children:[(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u7a7a\u503c\u8fc7\u6ee4"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53 ",(0,s.jsx)(n.code,{children:"map"}),"/ ",(0,s.jsx)(n.code,{children:"struct"})," \u4e2d\u5b58\u5728\u7a7a\u503c\u5982 ",(0,s.jsx)(n.code,{children:"nil"}),", ",(0,s.jsx)(n.code,{children:'""'}),", ",(0,s.jsx)(n.code,{children:"0"})," \u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,s.jsx)(n.code,{children:"gdb"})," \u5c06\u4f1a\u5c06\u5176\u5f53\u505a\u6b63\u5e38\u7684\u8f93\u5165\u53c2\u6570\uff0c\u56e0\u6b64\u8fd9\u4e9b\u53c2\u6570\u4e5f\u4f1a\u88ab\u66f4\u65b0\u5230\u6570\u636e\u8868\u3002 ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u7279\u6027\u53ef\u4ee5\u5728\u5c06\u6570\u636e\u5199\u5165\u5230\u6570\u636e\u5e93\u4e4b\u524d\u8fc7\u6ee4\u7a7a\u503c\u6570\u636e\u7684\u5b57\u6bb5\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"func (m *Model) OmitEmpty() *Model\nfunc (m *Model) OmitEmptyWhere() *Model\nfunc (m *Model) OmitEmptyData() *Model\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u4f1a\u540c\u65f6\u8fc7\u6ee4 ",(0,s.jsx)(n.code,{children:"Where"})," \u53ca ",(0,s.jsx)(n.code,{children:"Data"})," \u4e2d\u7684\u7a7a\u503c\u6570\u636e\uff0c\u800c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OmitEmptyWhere/OmitEmptyData"})," \u65b9\u6cd5\u53ef\u4ee5\u6267\u884c\u7279\u5b9a\u7684\u5b57\u6bb5\u8fc7\u6ee4\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5199\u5165\u66f4\u65b0\u64cd\u4f5c",children:"\u5199\u5165/\u66f4\u65b0\u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u7a7a\u503c\u4f1a\u5f71\u54cd\u4e8e\u5199\u5165/\u66f4\u65b0\u64cd\u4f5c\u65b9\u6cd5\uff0c\u5982 ",(0,s.jsx)(n.code,{children:"Insert"}),", ",(0,s.jsx)(n.code,{children:"Replace"}),", ",(0,s.jsx)(n.code,{children:"Update"}),", ",(0,s.jsx)(n.code,{children:"Save"})," \u64cd\u4f5c\u3002\u5982\u4ee5\u4e0b\u64cd\u4f5c\uff08\u4ee5 ",(0,s.jsx)(n.code,{children:"map"})," \u4e3a\u4f8b\uff0c ",(0,s.jsx)(n.code,{children:"struct"})," \u540c\u7406\uff09\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// UPDATE `user` SET `name`=\'john\',update_time=null WHERE `id`=1\ndb.Table("user").Data(g.Map{\n    "name"        : "john",\n    "update_time" : nil,\n}).Where("id", 1).Update()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9488\u5bf9\u7a7a\u503c\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u6765\u8fc7\u6ee4\u6389\u8fd9\u4e9b\u7a7a\u503c\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0a\u793a\u4f8b\u53ef\u4ee5\u4fee\u6539\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// UPDATE `user` SET `name`=\'john\' WHERE `id`=1\ndb.Table("user").OmitEmpty().Data(g.Map{\n    "name"        : "john",\n    "update_time" : nil,\n}).Where("id", 1).Update()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e ",(0,s.jsx)(n.code,{children:"struct"})," \u6570\u636e\u53c2\u6570\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8fdb\u884c\u7a7a\u503c\u8fc7\u6ee4\u3002\u64cd\u4f5c\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'type User struct {\n    Id         int    `orm:"id"`\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    NickName   string `orm:"nickname"`\n    CreateTime string `orm:"create_time"`\n    UpdateTime string `orm:"update_time"`\n}\nuser := User{\n    Id        : 1,\n    NickName  : "john",\n    UpdateTime: gtime.Now().String(),\n}\ndb.Table("user").OmitEmpty().Data(user).Insert()\n// INSERT INTO `user`(`id`,`nickname`,`update_time`) VALUES(1,\'john\',\'2019-10-01 12:00:00\')\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\u54df\uff0c\u6279\u91cf\u5199\u5165/\u66f4\u65b0\u64cd\u4f5c\u4e2d ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u5c06\u4f1a\u5931\u6548\uff0c\u56e0\u4e3a\u5728\u6279\u91cf\u64cd\u4f5c\u4e2d\uff0c\u5fc5\u987b\u4fdd\u8bc1\u6bcf\u4e2a\u5199\u5165\u8bb0\u5f55\u7684\u5b57\u6bb5\u662f\u7edf\u4e00\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u4e8e ",(0,s.jsx)(n.code,{children:"omitempty"})," \u6807\u7b7e\u4e0e ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9488\u5bf9\u4e8e ",(0,s.jsx)(n.code,{children:"struct"})," \u7684\u7a7a\u503c\u8fc7\u6ee4\u5927\u5bb6\u4f1a\u60f3\u5230 ",(0,s.jsx)(n.code,{children:"omitempty"})," \u7684\u6807\u7b7e\u3002\u8be5\u6807\u7b7e\u5e38\u7528\u4e8e ",(0,s.jsx)(n.code,{children:"json"})," \u8f6c\u6362\u7684\u7a7a\u503c\u8fc7\u6ee4\uff0c\u4e5f\u5728\u67d0\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684 ",(0,s.jsx)(n.code,{children:"ORM"})," \u5e93\u4e2d\u7528\u4f5c ",(0,s.jsx)(n.code,{children:"struct"})," \u5230\u6570\u636e\u8868\u5b57\u6bb5\u7684\u7a7a\u503c\u8fc7\u6ee4\uff0c\u5373\u5f53\u5c5e\u6027\u4e3a\u7a7a\u503c\u65f6\u4e0d\u505a\u8f6c\u6362\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"omitempty"})," \u6807\u7b7e\u4e0e ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u6240\u8fbe\u5230\u7684\u6548\u679c\u662f\u4e00\u6837\u7684\u3002\u5728 ",(0,s.jsx)(n.code,{children:"ORM"})," \u64cd\u4f5c\u4e2d\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u5bf9 ",(0,s.jsx)(n.code,{children:"struct"})," \u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"omitempty"})," \u7684\u6807\u7b7e\u6765\u63a7\u5236\u5b57\u6bb5\u7684\u7a7a\u503c\u8fc7\u6ee4\uff0c\u800c\u5efa\u8bae\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u6765\u505a\u63a7\u5236\u3002\u56e0\u4e3a\u8be5\u6807\u7b7e\u4e00\u65e6\u52a0\u4e0a\u4e4b\u540e\u4fbf\u7ed1\u5b9a\u5230\u4e86 ",(0,s.jsx)(n.code,{children:"struct"})," \u4e0a\uff0c\u6ca1\u6709\u529e\u6cd5\u505a\u7075\u6d3b\u63a7\u5236\uff1b\u800c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u6027\u5730\u3001\u6839\u636e\u4e1a\u52a1\u573a\u666f\u5bf9 ",(0,s.jsx)(n.code,{children:"struct"})," \u505a\u7a7a\u503c\u8fc7\u6ee4\uff0c\u64cd\u4f5c\u66f4\u52a0\u7075\u6d3b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6570\u636e\u67e5\u8be2\u64cd\u4f5c",children:"\u6570\u636e\u67e5\u8be2\u64cd\u4f5c"}),"\n",(0,s.jsxs)(n.p,{children:["\u7a7a\u503c\u4e5f\u4f1a\u5f71\u54cd\u6570\u636e\u67e5\u8be2\u64cd\u4f5c\uff0c\u4e3b\u8981\u662f\u5f71\u54cd ",(0,s.jsx)(n.code,{children:"where"})," \u6761\u4ef6\u53c2\u6570\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u8fc7\u6ee4\u6761\u4ef6\u53c2\u6570\u4e2d\u7684\u7a7a\u503c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// SELECT * FROM `user` WHERE `passport`=\'john\' LIMIT 1\nr, err := db.Table("user").Where(g.Map{\n    "nickname" : "",\n    "passport" : "john",\n}).OmitEmpty().One()\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'type User struct {\n    Id         int    `orm:"id"`\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    NickName   string `orm:"nickname"`\n    CreateTime string `orm:"create_time"`\n    UpdateTime string `orm:"update_time"`\n}\nuser := User{\n    Passport : "john",\n}\nr, err := db.Table("user").OmitEmpty().Where(user).One()\n// SELECT * FROM `user` WHERE `passport`=\'john\' LIMIT 1\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"omitnil-\u7a7a\u503c\u8fc7\u6ee4",children:[(0,s.jsx)(n.code,{children:"OmitNil"})," \u7a7a\u503c\u8fc7\u6ee4"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53 ",(0,s.jsx)(n.code,{children:"map"}),"/ ",(0,s.jsx)(n.code,{children:"struct"})," \u4e2d\u5b58\u5728\u7a7a\u503c\u5982 ",(0,s.jsx)(n.code,{children:"nil"})," \u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c ",(0,s.jsx)(n.code,{children:"gdb"})," \u5c06\u4f1a\u5c06\u5176\u5f53\u505a\u6b63\u5e38\u7684\u8f93\u5165\u53c2\u6570\uff0c\u56e0\u6b64\u8fd9\u4e9b\u53c2\u6570\u4e5f\u4f1a\u88ab\u66f4\u65b0\u5230\u6570\u636e\u8868\u3002 ",(0,s.jsx)(n.code,{children:"OmitNil"})," \u7279\u6027\u53ef\u4ee5\u5728\u5c06\u6570\u636e\u5199\u5165\u5230\u6570\u636e\u5e93\u4e4b\u524d\u8fc7\u6ee4\u7a7a\u503c\u6570\u636e\u7684\u5b57\u6bb5\u3002\u4e0e ",(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u7279\u6027\u7684\u533a\u522b\u5728\u4e8e\uff0c ",(0,s.jsx)(n.code,{children:"OmitNil"})," \u53ea\u4f1a\u8fc7\u6ee4\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"nil"})," \u7684\u7a7a\u503c\u5b57\u6bb5\uff0c\u5176\u4ed6\u7a7a\u503c\u5982 ",(0,s.jsx)(n.code,{children:'""'}),", ",(0,s.jsx)(n.code,{children:"0"})," \u5e76\u4e0d\u4f1a\u88ab\u8fc7\u6ee4\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"func (m *Model) OmitNil() *Model\nfunc (m *Model) OmitNilWhere() *Model\nfunc (m *Model) OmitNilData() *Model\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"OmitEmpty"})," \u65b9\u6cd5\u4f1a\u540c\u65f6\u8fc7\u6ee4 ",(0,s.jsx)(n.code,{children:"Where"})," \u53ca ",(0,s.jsx)(n.code,{children:"Data"})," \u4e2d\u7684\u7a7a\u503c\u6570\u636e\uff0c\u800c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OmitEmptyWhere/OmitEmptyData"})," \u65b9\u6cd5\u53ef\u4ee5\u6267\u884c\u7279\u5b9a\u7684\u5b57\u6bb5\u8fc7\u6ee4\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"filter-\u5b57\u6bb5\u8fc7\u6ee4\u5df2\u5185\u7f6e",children:[(0,s.jsx)(n.code,{children:"Filter"})," \u5b57\u6bb5\u8fc7\u6ee4(\u5df2\u5185\u7f6e)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.del,{children:[(0,s.jsx)(n.code,{children:"gdb"})," \u53ef\u4ee5\u81ea\u52a8\u540c\u6b65 ",(0,s.jsx)(n.strong,{children:"\u6570\u636e\u8868\u7ed3\u6784"})," \u5230\u7a0b\u5e8f\u7f13\u5b58\u4e2d(\u7f13\u5b58\u4e0d\u8fc7\u671f\uff0c\u76f4\u81f3\u7a0b\u5e8f\u91cd\u542f/\u91cd\u65b0\u90e8\u7f72)\uff0c\u5e76\u4e14\u53ef\u4ee5\u8fc7\u6ee4\u63d0\u4ea4\u53c2\u6570\u4e2d\u4e0d\u7b26\u5408\u8868\u7ed3\u6784\u7684\u6570\u636e\u9879\uff0c\u8be5\u7279\u6027\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Filter"})," \u65b9\u6cd5\u5b9e\u73b0\u3002\u5e38\u7528\u4e8e\u65b0\u589e/\u5220\u9664\u64cd\u4f5c\u4e2d\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"map/struct/[]map/[]string"})," \u53c2\u6570\u7c7b\u578b\u7684\u573a\u666f\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.del,{children:["\u4f7f\u7528\u793a\u4f8b\uff0c\u5047\u5982 ",(0,s.jsx)(n.code,{children:"user"})," \u8868\u67094\u4e2a\u5b57\u6bb5 ",(0,s.jsx)(n.code,{children:"uid"}),", ",(0,s.jsx)(n.code,{children:"nickname"}),", ",(0,s.jsx)(n.code,{children:"passport"}),", ",(0,s.jsx)(n.code,{children:"password"}),"\uff1a"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'r, err := db.Table("user").Filter().Data(g.Map{\n    "id"          : 1,\n    "uid"         : 1,\n    "passport"    : "john",\n    "password"    : "123456",\n}).Insert()\n// INSERT INTO user(uid,passport,password) VALUES(1, "john", "123456")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.del,{children:["\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"id"})," \u4e3a\u4e0d\u5b58\u5728\u7684\u5b57\u6bb5\uff0c\u5728\u5199\u5165\u6570\u636e\u65f6\u5c06\u4f1a\u88ab\u8fc7\u6ee4\u6389\uff0c\u4e0d\u81f3\u4e8e\u88ab\u6784\u9020\u6210\u5199\u5165SQL\u4e2d\u4ea7\u751f\u6267\u884c\u9519\u8bef\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.del,{children:["\u6570\u636e\u5e93\u6ca1\u6709\u8bbe\u8ba1\u4e3a ",(0,s.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\u505a\u81ea\u52a8\u8fc7\u6ee4\uff0c\u800c\u662f\u9700\u8981\u5f00\u53d1\u8005\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"Filter"})," \u65b9\u6cd5\u6765\u624b\u52a8\u6307\u5b9a\u8fc7\u6ee4\uff0c\u76ee\u7684\u662f\u53cb\u597d\u5730\u63d0\u9192\u5f00\u53d1\u8005\u53ef\u80fd\u8bef\u5199/\u4f20\u9012\u9519\u8bef\u4e86\u5b57\u6bb5\u540d\u79f0\u3002\u5982\u679c\u5f3a\u5236\u6027\u7684\u81ea\u52a8\u8fc7\u6ee4\u53ef\u80fd\u4f1a\u5f15\u8d77\u96be\u4ee5\u9884\u6599\u7684\u4e1a\u52a1\u903b\u8f91\u5f02\u5e38\uff0c\u4f8b\u5982\uff0c\u7531\u4e8e\u5b57\u6bb5\u540d\u79f0\u62fc\u5199\u9519\u8bef\u5bfc\u81f4\u81ea\u52a8\u8fc7\u6ee4\u4e86\u672c\u6765\u9700\u8981\u8f93\u5165\u7684\u5b57\u6bb5\uff0c\u5bfc\u81f4\u5199\u5165\u6570\u636e\u5e93\u7684\u6570\u636e\u4e0d\u5b8c\u6574\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ece ",(0,s.jsx)(n.code,{children:"GoFrame v1.15.7"})," \u7248\u672c\u5f00\u59cb\uff0c\u6839\u636e\u793e\u533a\u6574\u4f53\u53cd\u9988\uff0c\u4e3a\u63d0\u9ad8\u7ec4\u4ef6\u6613\u7528\u6027\uff0c ",(0,s.jsx)(n.code,{children:"filter"})," \u7279\u6027\u88ab\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u5f00\u542f\uff0c\u4e0d\u518d\u9700\u8981\u663e\u793a\u8c03\u7528\uff0c ",(0,s.jsx)(n.code,{children:"Filter"})," \u65b9\u6cd5\u5df2\u88ab\u6807\u8bb0\u5e9f\u5f03\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>l});var s=d(296540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);