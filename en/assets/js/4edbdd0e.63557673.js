"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[56117],{495414:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4/\u65f6\u95f4\u7ef4\u62a4-\u57fa\u672c\u4f7f\u7528","title":"\u65f6\u95f4\u7ef4\u62a4-\u57fa\u672c\u4f7f\u7528","description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u7ba1\u7406\u6570\u636e\u5e93\u65f6\u95f4\u5b57\u6bb5\u7684\u57fa\u672c\u65b9\u6cd5\uff0c\u5305\u62eccreated_at\u3001updated_at\u548cdeleted_at\u5b57\u6bb5\u7684\u5199\u5165\u548c\u66f4\u65b0\u673a\u5236\uff0c\u4ee5\u53ca\u8f6f\u5220\u9664\u7279\u6027\u5bf9\u67e5\u8be2\u548c\u66f4\u65b0\u64cd\u4f5c\u7684\u5f71\u54cd\uff0c\u540c\u65f6\u5c55\u793a\u4e86\u8054\u8868\u67e5\u8be2\u548c\u5ffd\u7565\u65f6\u95f4\u7279\u6027Unscoped\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u8fd9\u4e9b\u793a\u4f8b\uff0c\u53ef\u4ee5\u6709\u6548\u7ba1\u7406\u6570\u636e\u7684\u8f6f\u5220\u9664\u548c\u65f6\u95f4\u6233\uff0c\u786e\u4fdd\u6570\u636e\u5e93\u8bb0\u5f55\u7684\u51c6\u786e\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4/\u65f6\u95f4\u7ef4\u62a4-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4","slug":"/docs/core/gdb-chaining-soft-time-example","permalink":"/en/2.7.x/docs/core/gdb-chaining-soft-time-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4/\u65f6\u95f4\u7ef4\u62a4-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-chaining-soft-time-example","title":"\u65f6\u95f4\u7ef4\u62a4-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","\u65f6\u95f4\u7ef4\u62a4","\u8f6f\u5220\u9664","created_at","updated_at","deleted_at","\u6570\u636e\u5e93\u64cd\u4f5c","\u8054\u8868\u67e5\u8be2","Unscoped","\u65f6\u95f4\u5b57\u6bb5"],"description":"\u672c\u6587\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u7ba1\u7406\u6570\u636e\u5e93\u65f6\u95f4\u5b57\u6bb5\u7684\u57fa\u672c\u65b9\u6cd5\uff0c\u5305\u62eccreated_at\u3001updated_at\u548cdeleted_at\u5b57\u6bb5\u7684\u5199\u5165\u548c\u66f4\u65b0\u673a\u5236\uff0c\u4ee5\u53ca\u8f6f\u5220\u9664\u7279\u6027\u5bf9\u67e5\u8be2\u548c\u66f4\u65b0\u64cd\u4f5c\u7684\u5f71\u54cd\uff0c\u540c\u65f6\u5c55\u793a\u4e86\u8054\u8868\u67e5\u8be2\u548c\u5ffd\u7565\u65f6\u95f4\u7279\u6027Unscoped\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u8fd9\u4e9b\u793a\u4f8b\uff0c\u53ef\u4ee5\u6709\u6548\u7ba1\u7406\u6570\u636e\u7684\u8f6f\u5220\u9664\u548c\u65f6\u95f4\u6233\uff0c\u786e\u4fdd\u6570\u636e\u5e93\u8bb0\u5f55\u7684\u51c6\u786e\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u65f6\u95f4\u7ef4\u62a4","permalink":"/en/2.7.x/docs/core/gdb-chaining-soft-time"},"next":{"title":"\u65f6\u95f4\u7ef4\u62a4-SoftTimeOption","permalink":"/en/2.7.x/docs/core/gdb-chaining-soft-time-option"}}');var a=n(474848),s=n(28453);const i={slug:"/docs/core/gdb-chaining-soft-time-example",title:"\u65f6\u95f4\u7ef4\u62a4-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0,keywords:["GoFrame","\u65f6\u95f4\u7ef4\u62a4","\u8f6f\u5220\u9664","created_at","updated_at","deleted_at","\u6570\u636e\u5e93\u64cd\u4f5c","\u8054\u8868\u67e5\u8be2","Unscoped","\u65f6\u95f4\u5b57\u6bb5"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u4f7f\u7528GoFrame\u6846\u67b6\u7ba1\u7406\u6570\u636e\u5e93\u65f6\u95f4\u5b57\u6bb5\u7684\u57fa\u672c\u65b9\u6cd5\uff0c\u5305\u62eccreated_at\u3001updated_at\u548cdeleted_at\u5b57\u6bb5\u7684\u5199\u5165\u548c\u66f4\u65b0\u673a\u5236\uff0c\u4ee5\u53ca\u8f6f\u5220\u9664\u7279\u6027\u5bf9\u67e5\u8be2\u548c\u66f4\u65b0\u64cd\u4f5c\u7684\u5f71\u54cd\uff0c\u540c\u65f6\u5c55\u793a\u4e86\u8054\u8868\u67e5\u8be2\u548c\u5ffd\u7565\u65f6\u95f4\u7279\u6027Unscoped\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u8fd9\u4e9b\u793a\u4f8b\uff0c\u53ef\u4ee5\u6709\u6548\u7ba1\u7406\u6570\u636e\u7684\u8f6f\u5220\u9664\u548c\u65f6\u95f4\u6233\uff0c\u786e\u4fdd\u6570\u636e\u5e93\u8bb0\u5f55\u7684\u51c6\u786e\u6027\u3002"},r=void 0,c={},o=[{value:"\u793a\u4f8bSQL",id:"\u793a\u4f8bsql",level:2},{value:"<code>created_at</code> \u5199\u5165\u65f6\u95f4",id:"created_at-\u5199\u5165\u65f6\u95f4",level:2},{value:"<code>deleted_at</code> \u6570\u636e\u8f6f\u5220\u9664",id:"deleted_at-\u6570\u636e\u8f6f\u5220\u9664",level:2},{value:"<code>updated_at</code> \u66f4\u65b0\u65f6\u95f4",id:"updated_at-\u66f4\u65b0\u65f6\u95f4",level:2},{value:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f",id:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f",level:2},{value:"<code>Unscoped</code> \u5ffd\u7565\u65f6\u95f4\u7279\u6027",id:"unscoped-\u5ffd\u7565\u65f6\u95f4\u7279\u6027",level:2}];function l(e){const d={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.p,{children:["\u4ee5\u4e0b\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9ed8\u8ba4\u793a\u4f8b\u4e2d\u7684\u6570\u636e\u8868\u5747\u5305\u542b\u4e86",(0,a.jsx)(d.code,{children:"created_at"}),"\u3001 ",(0,a.jsx)(d.code,{children:"updated_at"}),"\u3001 ",(0,a.jsx)(d.code,{children:"deleted_at"}),"\u8fd93\u4e2a\u5b57\u6bb5\uff0c\u5e76\u4e14\u5b57\u6bb5\u7c7b\u578b\u4e3a",(0,a.jsx)(d.code,{children:"datetime"}),"\u3002"]}),"\n",(0,a.jsx)(d.h2,{id:"\u793a\u4f8bsql",children:"\u793a\u4f8bSQL"}),"\n",(0,a.jsxs)(d.p,{children:["\u8fd9\u662f\u540e\u7eed\u793a\u4f8b\u4ee3\u7801\u4e2d\u7528\u5230\u7684",(0,a.jsx)(d.code,{children:"MySQL"}),"\u8868\u7ed3\u6784\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(45) NOT NULL,\n  `status` tinyint DEFAULT 0,\n  `created_at` datetime DEFAULT NULL,\n  `updated_at` datetime DEFAULT NULL,\n  `deleted_at` datetime DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\nCREATE TABLE IF NOT EXISTS `user_detail` (\n    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n    `address` varchar(45) NOT NULL,\n    PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,a.jsx)(d.admonition,{type:"tip",children:(0,a.jsxs)(d.ul,{children:["\n",(0,a.jsxs)(d.li,{children:["\u5982\u679c\u60a8\u9009\u62e9\u4f7f\u7528\u65f6\u95f4\u5b57\u6bb5\u7c7b\u578b\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u5c06\u8be5\u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u5141\u8bb8\u4e3a",(0,a.jsx)(d.code,{children:"NULL"}),"\uff0c\u8fd9\u6837\u8f6f\u5220\u9664\u624d\u80fd\u8d77\u4f5c\u7528\u3002"]}),"\n",(0,a.jsxs)(d.li,{children:["\u5982\u679c\u60a8\u5c1d\u8bd5\u6d4b\u8bd5\u67e5\u770b",(0,a.jsx)(d.code,{children:"ORM"}),"\u64cd\u4f5c\u6267\u884c\u7684",(0,a.jsx)(d.code,{children:"SQL"}),"\u8bed\u53e5\uff0c\u5efa\u8bae\u60a8\u6253\u5f00",(0,a.jsx)(d.code,{children:"debug"}),"\u6a21\u5f0f\uff08\u76f8\u5173\u6587\u6863\uff1a",(0,a.jsx)(d.a,{href:"/en/2.7.x/docs/core/gdb-senior-debugging",children:"\u8c03\u8bd5\u6a21\u5f0f"}),"\uff09\uff0c",(0,a.jsx)(d.code,{children:"SQL"}),"\u8bed\u53e5\u5c06\u4f1a\u81ea\u52a8\u6253\u5370\u5230\u65e5\u5fd7\u8f93\u51fa\u3002"]}),"\n"]})}),"\n",(0,a.jsxs)(d.h2,{id:"created_at-\u5199\u5165\u65f6\u95f4",children:[(0,a.jsx)(d.code,{children:"created_at"})," \u5199\u5165\u65f6\u95f4"]}),"\n",(0,a.jsxs)(d.p,{children:["\u5728\u6267\u884c ",(0,a.jsx)(d.code,{children:"Insert/InsertIgnore/BatchInsert/BatchInsertIgnore"})," \u65b9\u6cd5\u65f6\u81ea\u52a8\u5199\u5165\u8be5\u65f6\u95f4\uff0c\u968f\u540e\u7684\u66f4\u65b0/\u5220\u9664\u64cd\u4f5c\u4e0d\u4f1a\u5f15\u8d77",(0,a.jsx)(d.code,{children:"created_at"}),"\u5b57\u6bb5\u5185\u5bb9\u7684\u6539\u53d8\u3002"]}),"\n",(0,a.jsx)(d.admonition,{type:"warning",children:(0,a.jsxs)(d.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,a.jsx)(d.code,{children:"Replace"})," \u65b9\u6cd5\u4e5f\u4f1a\u66f4\u65b0\u8be5\u5b57\u6bb5\uff0c\u56e0\u4e3a\u8be5\u64cd\u4f5c\u76f8\u5f53\u4e8e\u5220\u9664\u5df2\u5b58\u5728\u7684\u65e7\u6570\u636e\u5e76\u91cd\u65b0\u5199\u4e00\u6761\u6570\u636e\u3002"]})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// INSERT INTO `user`(`name`,`created_at`,`updated_at`) VALUES(\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ng.Model("user").Data(g.Map{"name": "john"}).Insert()\n\n// INSERT IGNORE INTO `user`(`id`,`name`,`created_at`,`updated_at`) VALUES(10000,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ng.Model("user").Data(g.Map{"id": 10000, "name": "john"}).InsertIgnore()\n\n// REPLACE INTO `user`(`id`,`name`,`created_at`,`updated_at`) VALUES(10000,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`)\ng.Model("user").Data(g.Map{"id": 10000, "name": "john"}).Replace()\n\n// INSERT INTO `user`(`id`,`name`,`created_at`,`updated_at`) VALUES(10001,\'john\', `2020-06-06 21:00:00`, `2020-06-06 21:00:00`) ON DUPLICATE KEY UPDATE `id`=VALUES(`id`),`name`=VALUES(`name`),`updated_at`=VALUES(`updated_at`)\ng.Model("user").Data(g.Map{"id": 10001, "name": "john"}).Save()\n'})}),"\n",(0,a.jsxs)(d.h2,{id:"deleted_at-\u6570\u636e\u8f6f\u5220\u9664",children:[(0,a.jsx)(d.code,{children:"deleted_at"})," \u6570\u636e\u8f6f\u5220\u9664"]}),"\n",(0,a.jsxs)(d.p,{children:["\u5f53\u8f6f\u5220\u9664\u5b58\u5728\u65f6(\u5373",(0,a.jsx)(d.code,{children:"deleted_at"}),"\u5b57\u6bb5\u5b58\u5728\u65f6\uff09\uff0c\u6240\u6709\u7684\u67e5\u8be2\u8bed\u53e5\u90fd\u5c06\u4f1a\u81ea\u52a8\u52a0\u4e0a ",(0,a.jsx)(d.code,{children:"deleted_at"})," \u7684\u6761\u4ef6\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// UPDATE `user` SET `deleted_at`=\'2020-06-06 21:00:00\' WHERE id=10 AND `deleted_at` IS NULL\ng.Model("user").Where("id", 10).Delete()\n'})}),"\n",(0,a.jsx)(d.p,{children:"\u67e5\u8be2\u7684\u65f6\u5019\u4f1a\u53d1\u751f\u4e00\u4e9b\u53d8\u5316\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE id>1 AND `deleted_at` IS NULL\ng.Model("user").Where("id>?", 1).All()\n'})}),"\n",(0,a.jsxs)(d.p,{children:["\u53ef\u4ee5\u770b\u5230\u5f53\u6570\u636e\u8868\u4e2d\u5b58\u5728 ",(0,a.jsx)(d.code,{children:"deleted_at"})," \u5b57\u6bb5\u65f6\uff0c\u6240\u6709\u6d89\u53ca\u5230\u8be5\u8868\u7684\u67e5\u8be2\u64cd\u4f5c\u90fd\u5c06\u81ea\u52a8\u52a0\u4e0a ",(0,a.jsx)(d.code,{children:"deleted_at IS NULL"})," \u7684\u6761\u4ef6\u3002"]}),"\n",(0,a.jsxs)(d.h2,{id:"updated_at-\u66f4\u65b0\u65f6\u95f4",children:[(0,a.jsx)(d.code,{children:"updated_at"})," \u66f4\u65b0\u65f6\u95f4"]}),"\n",(0,a.jsxs)(d.p,{children:["\u5728\u6267\u884c ",(0,a.jsx)(d.code,{children:"Save/Update"})," \u65b9\u6cd5\u65f6\u81ea\u52a8\u5199\u5165\u8be5\u65f6\u95f4\u3002"]}),"\n",(0,a.jsx)(d.admonition,{type:"warning",children:(0,a.jsxs)(d.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,a.jsx)(d.code,{children:"Replace"})," \u65b9\u6cd5\u4e5f\u4f1a\u66f4\u65b0\u8be5\u5b57\u6bb5\uff0c\u56e0\u4e3a\u8be5\u64cd\u4f5c\u76f8\u5f53\u4e8e\u5220\u9664\u5df2\u5b58\u5728\u7684\u65e7\u6570\u636e\u5e76\u91cd\u65b0\u5199\u4e00\u6761\u6570\u636e\u3002"]})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// UPDATE `user` SET `name`=\'john guo\',`updated_at`=\'2020-06-06 21:00:00\' WHERE name=\'john\' AND `deleted_at` IS NULL\ng.Model("user").Data(g.Map{"name" : "john guo"}).Where("name", "john").Update()\n\n// UPDATE `user` SET `status`=1,`updated_at`=\'2020-06-06 21:00:00\' WHERE `deleted_at` IS NULL ORDER BY `id` ASC LIMIT 10\ng.Model("user").Data("status", 1).OrderAsc("id").Limit(10).Update()\n\n// INSERT INTO `user`(`id`,`name`,`update_at`) VALUES(1,\'john guo\',\'2020-12-29 20:16:14\') ON DUPLICATE KEY UPDATE `id`=VALUES(`id`),`name`=VALUES(`name`),`update_at`=VALUES(`update_at`)\ng.Model("user").Data(g.Map{"id": 1, "name": "john guo"}).Save()\n'})}),"\n",(0,a.jsx)(d.h2,{id:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f",children:"\u8054\u8868\u67e5\u8be2\u7684\u573a\u666f"}),"\n",(0,a.jsx)(d.p,{children:"\u5982\u679c\u5173\u8054\u67e5\u8be2\u7684\u51e0\u4e2a\u8868\u90fd\u542f\u7528\u4e86\u8f6f\u5220\u9664\u7279\u6027\u65f6\uff0c\u4f1a\u53d1\u751f\u4ee5\u4e0b\u8fd9\u79cd\u60c5\u51b5\uff0c\u5373\u6761\u4ef6\u8bed\u53e5\u4e2d\u4f1a\u589e\u52a0\u6240\u6709\u76f8\u5173\u8868\u7684\u8f6f\u5220\u9664\u65f6\u95f4\u5224\u65ad\u3002"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` AS `u` LEFT JOIN `user_detail` AS `ud` ON (ud.id=u.id) WHERE (`u`.`id`=10) AND `u`.`deleted_at` IS NULL LIMIT 1\ng.Model("user", "u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 10).One()\n'})}),"\n",(0,a.jsxs)(d.h2,{id:"unscoped-\u5ffd\u7565\u65f6\u95f4\u7279\u6027",children:[(0,a.jsx)(d.code,{children:"Unscoped"})," \u5ffd\u7565\u65f6\u95f4\u7279\u6027"]}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.code,{children:"Unscoped"})," \u7528\u4e8e\u5728\u94fe\u5f0f\u64cd\u4f5c\u4e2d\u5ffd\u7565\u81ea\u52a8\u65f6\u95f4\u66f4\u65b0\u7279\u6027\uff0c\u4f8b\u5982\u4e0a\u9762\u7684\u793a\u4f8b\uff0c\u52a0\u4e0a ",(0,a.jsx)(d.code,{children:"Unscoped"})," \u65b9\u6cd5\u540e\uff1a"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE id>1\ng.Model("user").Unscoped().Where("id>?", 1).All()\n\n// SELECT * FROM `user` AS `u` LEFT JOIN `user_detail` AS `ud` ON (ud.id=u.id) WHERE u.id=10 LIMIT 1\ng.Model("user", "u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 10).Unscoped().One()\n'})})]})}function u(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>i,x:()=>r});var t=n(296540);const a={},s=t.createContext(a);function i(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);