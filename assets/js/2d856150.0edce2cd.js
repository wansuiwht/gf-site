"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[55704],{949268:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58","description":"Insert/Replace/Save","source":"@site/versioned_docs/version-2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58","permalink":"/2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa","permalink":"/2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6a21\u578b\u521b\u5efa"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664","permalink":"/2.0.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u66f4\u65b0\u5220\u9664"}}');var r=s(474848),a=s(28453);const i={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5199\u5165\u4fdd\u5b58",sidebar_position:1,hide_title:!0},c=void 0,o={},l=[{value:"<code>Insert/Replace/Save</code>",id:"insertreplacesave",level:2},{value:"<code>InsertIgnore</code>",id:"insertignore",level:2},{value:"<code>InsertAndGetId</code>",id:"insertandgetid",level:2},{value:"<code>OnDuplicate/OnDuplicateEx</code>",id:"onduplicateonduplicateex",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c\u6570\u636e\u6279\u91cf\u5199\u5165",id:"\u793a\u4f8b2\u6570\u636e\u6279\u91cf\u5199\u5165",level:3},{value:"\u793a\u4f8b3\uff0c\u6570\u636e\u6279\u91cf\u4fdd\u5b58",id:"\u793a\u4f8b3\u6570\u636e\u6279\u91cf\u4fdd\u5b58",level:3},{value:"<code>RawSQL</code> \u8bed\u53e5\u5d4c\u5165",id:"rawsql-\u8bed\u53e5\u5d4c\u5165",level:2}];function t(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"insertreplacesave",children:(0,r.jsx)(n.code,{children:"Insert/Replace/Save"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u51e0\u4e2a\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u7528\u4e8e\u6570\u636e\u7684\u5199\u5165\uff0c\u5e76\u4e14\u652f\u6301\u81ea\u52a8\u7684\u5355\u6761\u6216\u8005\u6279\u91cf\u7684\u6570\u636e\u5199\u5165\uff0c\u533a\u522b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Insert"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"INSERT INTO"})," \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u5199\u5165\uff0c\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u8fd4\u56de\u5931\u8d25\uff0c\u5426\u5219\u5199\u5165\u4e00\u6761\u65b0\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Replace"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"REPLACE INTO"})," \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u5199\u5165\uff0c\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u4f1a\u5220\u9664\u539f\u6709\u7684\u8bb0\u5f55\uff0c\u5fc5\u5b9a\u4f1a\u5199\u5165\u4e00\u6761\u65b0\u8bb0\u5f55\u3002"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Save"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"INSERT INTO"})," \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u5199\u5165\uff0c\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u66f4\u65b0\u539f\u6709\u6570\u636e\uff0c\u5426\u5219\u5199\u5165\u4e00\u6761\u65b0\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728\u90e8\u5206\u6570\u636e\u5e93\u7c7b\u578b\u4e2d\uff0c\u5e76\u4e0d\u652f\u6301 ",(0,r.jsx)(n.code,{children:"Replace/Save"})," \u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u6570\u636e\u5e93\u7c7b\u578b\u4ecb\u7ecd\u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u51e0\u4e2a\u65b9\u6cd5\u9700\u8981\u7ed3\u5408 ",(0,r.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\u4f7f\u7528\uff0c\u8be5\u65b9\u6cd5\u7528\u4e8e\u4f20\u9012\u6570\u636e\u53c2\u6570\uff0c\u7528\u4e8e\u6570\u636e\u5199\u5165/\u66f4\u65b0\u7b49\u5199\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"insertignore",children:(0,r.jsx)(n.code,{children:"InsertIgnore"})}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4e8e\u5199\u5165\u6570\u636e\u65f6\u5982\u679c\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\uff0c\u5ffd\u7565\u9519\u8bef\u7ee7\u7eed\u6267\u884c\u5199\u5165\u3002\u8be5\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *Model) InsertIgnore(data ...interface{}) (result sql.Result, err error)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"insertandgetid",children:(0,r.jsx)(n.code,{children:"InsertAndGetId"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u4e8e\u5199\u5165\u6570\u636e\u65f6\u5e76\u76f4\u63a5\u8fd4\u56de\u81ea\u589e\u5b57\u6bb5\u7684 ",(0,r.jsx)(n.code,{children:"ID"}),"\u3002\u8be5\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (m *Model) InsertAndGetId(data ...interface{}) (lastInsertId int64, err error)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"onduplicateonduplicateex",children:(0,r.jsx)(n.code,{children:"OnDuplicate/OnDuplicateEx"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"OnDuplicate/OnDuplicateEx"})," \u65b9\u6cd5\u9700\u8981\u7ed3\u5408 ",(0,r.jsx)(n.code,{children:"Save"})," \u65b9\u6cd5\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u6307\u5b9a ",(0,r.jsx)(n.code,{children:"Save"})," \u65b9\u6cd5\u7684\u66f4\u65b0/\u4e0d\u66f4\u65b0\u5b57\u6bb5\uff0c\u53c2\u6570\u4e3a\u5b57\u7b26\u4e32\u3001\u5b57\u7b26\u4e32\u6570\u7ec4\u3001 ",(0,r.jsx)(n.code,{children:"Map"}),"\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'OnDuplicate("nickname, age")\nOnDuplicate("nickname", "age")\nOnDuplicate(g.Map{\n    "nickname": gdb.Raw("CONCAT(\'name_\', VALUES(`nickname`))"),\n})\nOnDuplicate(g.Map{\n    "nickname": "passport",\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"OnDuplicateEx"})," \u7528\u4e8e\u6392\u9664\u6307\u5b9a\u5ffd\u7565\u66f4\u65b0\u7684\u5b57\u6bb5\uff0c\u6392\u9664\u7684\u5b57\u6bb5\u9700\u8981\u5728\u5199\u5165\u7684\u6570\u636e\u96c6\u5408\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u636e\u5199\u5165/\u4fdd\u5b58\u65b9\u6cd5\u9700\u8981\u7ed3\u5408 ",(0,r.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\u4f7f\u7528\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john\')\ng.Model("user").Data(g.Map{"name": "john"}).Insert()\n\n// INSERT IGNORE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).InsertIgnore()\n\n// REPLACE INTO `user`(`uid`,`name`) VALUES(10000,\'john\')\ng.Model("user").Data(g.Map{"uid": 10000, "name": "john"}).Replace()\n\n// INSERT INTO `user`(`uid`,`name`) VALUES(10001,\'john\') ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\ng.Model("user").Data(g.Map{"uid": 10001, "name": "john"}).Save()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Data"})," \u65b9\u6cd5\uff0c\u800c\u7ed9\u5199\u5165/\u4fdd\u5b58\u65b9\u6cd5\u76f4\u63a5\u4f20\u9012\u6570\u636e\u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'g.Model("user").Insert(g.Map{"name": "john"})\ng.Model("user").Replace(g.Map{"uid": 10000, "name": "john"})\ng.Model("user").Save(g.Map{"uid": 10001, "name": "john"})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u636e\u53c2\u6570\u4e5f\u5e38\u7528 ",(0,r.jsx)(n.code,{children:"          struct        "})," \u7c7b\u578b\uff0c\u4f8b\u5982\u5f53\u8868\u5b57\u6bb5\u4e3a ",(0,r.jsx)(n.code,{children:"          uid/name/site        "})," \u65f6\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Uid  int    `orm:"uid"`\n    Name string `orm:"name"`\n    Site string `orm:"site"`\n}\nuser := &User{\n    Uid:  1,\n    Name: "john",\n    Site: "https://goframe.org",\n}\n// INSERT INTO `user`(`uid`,`name`,`site`) VALUES(1,\'john\',\'https://goframe.org\')\ng.Model("user").Data(user).Insert()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b2\u6570\u636e\u6279\u91cf\u5199\u5165",children:"\u793a\u4f8b2\uff0c\u6570\u636e\u6279\u91cf\u5199\u5165"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\'),(\'john_3\')\ng.Model("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Insert()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Batch"})," \u65b9\u6cd5\u6307\u5b9a\u6279\u91cf\u64cd\u4f5c\u4e2d\u5206\u6279\u5199\u5165\u6761\u6570\u6570\u91cf\uff08\u9ed8\u8ba4\u662f ",(0,r.jsx)(n.code,{children:"10"}),"\uff09\uff0c\u4ee5\u4e0b\u793a\u4f8b\u5c06\u4f1a\u88ab\u62c6\u5206\u4e3a\u4e24\u6761\u5199\u5165\u8bf7\u6c42\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`name`) VALUES(\'john_1\'),(\'john_2\')\n// INSERT INTO `user`(`name`) VALUES(\'john_3\')\ng.Model("user").Data(g.List{\n    {"name": "john_1"},\n    {"name": "john_2"},\n    {"name": "john_3"},\n}).Batch(2).Insert()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b3\u6570\u636e\u6279\u91cf\u4fdd\u5b58",children:"\u793a\u4f8b3\uff0c\u6570\u636e\u6279\u91cf\u4fdd\u5b58"}),"\n",(0,r.jsx)(n.p,{children:"\u6279\u91cf\u4fdd\u5b58\u64cd\u4f5c\u4e0e\u5355\u6761\u4fdd\u5b58\u64cd\u4f5c\u539f\u7406\u662f\u4e00\u6837\u7684\uff0c\u5f53\u5199\u5165\u7684\u6570\u636e\u4e2d\u5b58\u5728\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u65f6\u5c06\u4f1a\u66f4\u65b0\u539f\u6709\u8bb0\u5f55\u503c\uff0c\u5426\u5219\u65b0\u5199\u5165\u4e00\u6761\u8bb0\u5f55\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`uid`,`name`) VALUES(10000,\'john_1\'),(10001,\'john_2\'),(10002,\'john_3\')\n// ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)\ng.Model("user").Data(g.List{\n    {"uid":10000, "name": "john_1"},\n    {"uid":10001, "name": "john_2"},\n    {"uid":10002, "name": "john_3"},\n}).Save()\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"rawsql-\u8bed\u53e5\u5d4c\u5165",children:[(0,r.jsx)(n.code,{children:"RawSQL"})," \u8bed\u53e5\u5d4c\u5165"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u8be5\u7c7b\u578b\u7684\u53c2\u6570\u5c06\u4f1a\u76f4\u63a5\u4f5c\u4e3a ",(0,r.jsx)(n.code,{children:"SQL"})," \u7247\u6bb5\u5d4c\u5165\u5230\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u4e2d\uff0c\u4e0d\u4f1a\u88ab\u81ea\u52a8\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u53c2\u6570\u7c7b\u578b\u3001\u4e5f\u4e0d\u4f1a\u88ab\u5f53\u505a\u9884\u5904\u7406\u53c2\u6570\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(\'id+2\',\'john\',\'123456\',\'now()\')\ng.Model("user").Data(g.Map{\n    "id":          "id+2",\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": "now()",\n}).Insert()\n// \u6267\u884c\u62a5\u9519\uff1aError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(id+2,\'john\',\'123456\',now())\ng.Model("user").Data(g.Map{\n    "id":          gdb.Raw("id+2"),\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": gdb.Raw("now()"),\n}).Insert()\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var d=s(296540);const r={},a=d.createContext(r);function i(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);