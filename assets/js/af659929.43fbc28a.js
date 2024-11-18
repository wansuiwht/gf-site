"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["41521"],{22249:function(e,n,c){c.r(n),c.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B","title":"ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B","description":"GoFrame\u6846\u67B6\u4E2DORM\u7ED3\u679C\u5904\u7406\u7684\u51E0\u79CD\u7ED3\u679C\u7C7B\u578B\uFF0C\u5305\u62ECValue\u3001Record\u548CResult\u7684\u6570\u636E\u7ED3\u6784\u5B9A\u4E49\u3002\u901A\u8FC7\u793A\u4F8B\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5982\u4F55\u5C06\u6570\u636E\u8868\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\uFF0C\u4EE5\u53CAResult/Record\u7C7B\u578B\u5728\u7279\u5B9A\u5B57\u6BB5\u68C0\u7D22\u573A\u666F\u4E0B\u7684\u5E94\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406","slug":"/docs/core/gdb-result-types","permalink":"/2.7.x/docs/core/gdb-result-types","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u7ED3\u679C\u5904\u7406/ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-result-types","title":"ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","\u6570\u636E\u7ED3\u6784","ORM","\u7ED3\u679C\u7C7B\u578B","Record","Result","gdb","\u6570\u636E\u5E93","Go\u8BED\u8A00","\u6570\u636E\u5904\u7406"],"description":"GoFrame\u6846\u67B6\u4E2DORM\u7ED3\u679C\u5904\u7406\u7684\u51E0\u79CD\u7ED3\u679C\u7C7B\u578B\uFF0C\u5305\u62ECValue\u3001Record\u548CResult\u7684\u6570\u636E\u7ED3\u6784\u5B9A\u4E49\u3002\u901A\u8FC7\u793A\u4F8B\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5982\u4F55\u5C06\u6570\u636E\u8868\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\uFF0C\u4EE5\u53CAResult/Record\u7C7B\u578B\u5728\u7279\u5B9A\u5B57\u6BB5\u68C0\u7D22\u573A\u666F\u4E0B\u7684\u5E94\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u7ED3\u679C\u5904\u7406","permalink":"/2.7.x/docs/core/gdb-result"},"next":{"title":"ORM\u7ED3\u679C\u5904\u7406-\u4E3A\u7A7A\u5224\u65AD","permalink":"/2.7.x/docs/core/gdb-result-empty-check"}}'),r=c("785893"),d=c("250065");let i={slug:"/docs/core/gdb-result-types",title:"ORM\u7ED3\u679C\u5904\u7406-\u7ED3\u679C\u7C7B\u578B",sidebar_position:0,hide_title:!0,keywords:["GoFrame","\u6570\u636E\u7ED3\u6784","ORM","\u7ED3\u679C\u7C7B\u578B","Record","Result","gdb","\u6570\u636E\u5E93","Go\u8BED\u8A00","\u6570\u636E\u5904\u7406"],description:"GoFrame\u6846\u67B6\u4E2DORM\u7ED3\u679C\u5904\u7406\u7684\u51E0\u79CD\u7ED3\u679C\u7C7B\u578B\uFF0C\u5305\u62ECValue\u3001Record\u548CResult\u7684\u6570\u636E\u7ED3\u6784\u5B9A\u4E49\u3002\u901A\u8FC7\u793A\u4F8B\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5982\u4F55\u5C06\u6570\u636E\u8868\u8BB0\u5F55\u8F6C\u6362\u4E3Astruct\u5BF9\u8C61\uFF0C\u4EE5\u53CAResult/Record\u7C7B\u578B\u5728\u7279\u5B9A\u5B57\u6BB5\u68C0\u7D22\u573A\u666F\u4E0B\u7684\u5E94\u7528\u3002"},t=void 0,o={},l=[{value:"\u4E00\u3001\u6570\u636E\u7ED3\u6784",id:"\u4E00\u6570\u636E\u7ED3\u6784",level:2},{value:"\u4E8C\u3001 <code>Record</code> \u6570\u636E\u8BB0\u5F55",id:"\u4E8C-record-\u6570\u636E\u8BB0\u5F55",level:2},{value:"\u4E09\u3001 <code>Result</code> \u6570\u636E\u96C6\u5408",id:"\u4E09-result-\u6570\u636E\u96C6\u5408",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4E00\u6570\u636E\u7ED3\u6784",children:"\u4E00\u3001\u6570\u636E\u7ED3\u6784"}),"\n",(0,r.jsx)(n.p,{children:"\u67E5\u8BE2\u7ED3\u679C\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Value  = *gvar.Var              // \u8FD4\u56DE\u6570\u636E\u8868\u8BB0\u5F55\u503C\ntype Record   map[string]Value       // \u8FD4\u56DE\u6570\u636E\u8868\u8BB0\u5F55\u952E\u503C\u5BF9\ntype Result   []Record               // \u8FD4\u56DE\u6570\u636E\u8868\u8BB0\u5F55\u5217\u8868\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Value/Record/Result"})," \u7528\u4E8EORM\u64CD\u4F5C\u7684\u7ED3\u679C\u6570\u636E\u7C7B\u578B\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Result"})," \u8868\u793A ",(0,r.jsx)(n.strong,{children:"\u6570\u636E\u8868\u8BB0\u5F55\u5217\u8868"}),"\uFF0C ",(0,r.jsx)(n.code,{children:"Record"})," \u8868\u793A ",(0,r.jsx)(n.strong,{children:"\u4E00\u6761\u6570\u636E\u8868\u8BB0\u5F55"}),"\uFF0C ",(0,r.jsx)(n.code,{children:"Value"})," \u8868\u793A\u8BB0\u5F55\u4E2D\u7684 ",(0,r.jsx)(n.strong,{children:"\u4E00\u6761\u952E\u503C\u6570\u636E"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Value"})," \u662F ",(0,r.jsx)(n.code,{children:"*gvar.Var"})," \u7C7B\u578B\u7684\u522B\u540D\u7C7B\u578B\uFF0C\u662F\u4E00\u4E2A\u8FD0\u884C\u65F6\u6CDB\u578B\uFF0C\u4EE5\u4FBF\u652F\u6301\u6570\u636E\u8868\u4E0D\u540C\u7684\u5B57\u6BB5\u7C7B\u578B\uFF0C\u65B9\u4FBF\u4E8E\u540E\u7EED\u7684\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4E3E\u4E2A\uD83C\uDF30\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:c(764037).Z+"",width:"2268",height:"452"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:c(377183).Z+"",width:"2212",height:"440"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:c(106567).Z+"",width:"2204",height:"448"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4E8C-record-\u6570\u636E\u8BB0\u5F55",children:["\u4E8C\u3001 ",(0,r.jsx)(n.code,{children:"Record"})," \u6570\u636E\u8BB0\u5F55"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb"})," \u4E3A\u6570\u636E\u8868\u8BB0\u5F55\u64CD\u4F5C\u63D0\u4F9B\u4E86\u6781\u9AD8\u7684\u7075\u6D3B\u6027\u548C\u7B80\u4FBF\u6027\uFF0C\u9664\u4E86\u652F\u6301\u4EE5 ",(0,r.jsx)(n.code,{children:"map"})," \u7684\u5F62\u5F0F\u8BBF\u95EE/\u64CD\u4F5C\u6570\u636E\u8868\u8BB0\u5F55\u4EE5\u5916\uFF0C\u4E5F\u652F\u6301\u5C06\u6570\u636E\u8868\u8BB0\u5F55\u8F6C\u6362\u4E3A ",(0,r.jsx)(n.code,{children:"struct"})," \u8FDB\u884C\u5904\u7406\u3002\u6211\u4EEC\u4EE5\u4E0B\u4F7F\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u6765\u6F14\u793A\u8BE5\u7279\u6027\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\uFF0C\u6211\u4EEC\u7684\u7528\u6237\u8868\u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF08\u7B80\u5355\u8BBE\u8BA1\u7684\u793A\u4F8B\u8868\uFF09\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '\u6635\u79F0',\n  `site` varchar(255) NOT NULL DEFAULT '' COMMENT '\u4E3B\u9875',\n  PRIMARY KEY (`uid`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u6B21\uFF0C\u6211\u4EEC\u7684\u8868\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"uid  name   site\n1    john   https://goframe.org\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540E\uFF0C\u6211\u4EEC\u7684\u793A\u4F8B\u7A0B\u5E8F\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\ntype User struct {\n    Uid  int\n    Name string\n}\n\nfunc main() {\n    var (\n        user *User\n        ctx  = gctx.New()\n    )\n    err := g.DB().Model("user").Where("uid", 1).Scan(&user)\n    if err != nil {\n        g.Log().Header(false).Fatal(ctx, err)\n    }\n    if user != nil {\n        g.Log().Header(false).Print(ctx, user)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"Uid":1,"Name":"john"}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD9\u91CC\uFF0C\u6211\u4EEC\u81EA\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,r.jsx)(n.code,{children:"struct"}),"\uFF0C\u91CC\u9762\u53EA\u5305\u542B\u4E86 ",(0,r.jsx)(n.code,{children:"Uid"})," \u548C ",(0,r.jsx)(n.code,{children:"Name"})," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u7684\u5C5E\u6027\u5E76\u4E0D\u548C\u6570\u636E\u8868\u7684\u5B57\u6BB5\u4E00\u81F4\uFF0C\u8FD9\u4E5F\u662F ",(0,r.jsx)(n.code,{children:"ORM"})," \u7075\u6D3B\u7684\u7279\u6027\u4E4B\u4E00\uFF1A\u652F\u6301\u6307\u5B9A\u5C5E\u6027\u83B7\u53D6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"gdb.Model.Scan"})," \u65B9\u6CD5\u53EF\u4EE5\u5C06\u67E5\u8BE2\u5230\u7684\u6570\u636E\u8BB0\u5F55\u8F6C\u6362\u4E3A ",(0,r.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61\u6216\u8005 ",(0,r.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61\u6570\u7EC4\u3002\u7531\u4E8E\u8FD9\u91CC\u4F20\u9012\u7684\u53C2\u6570\u4E3A ",(0,r.jsx)(n.code,{children:"&user"})," \u5373 ",(0,r.jsx)(n.code,{children:"**User"})," \u7C7B\u578B\uFF0C\u90A3\u4E48\u5C06\u4F1A\u8F6C\u6362\u4E3A\u4E00\u4E2A ",(0,r.jsx)(n.strong,{children:"\u7ED3\u6784\u4F53\u5BF9\u8C61"}),"\uFF0C\u5982\u679C\u4F20\u9012\u4E3A ",(0,r.jsx)(n.code,{children:"[]*User"})," \u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u5C06\u4F1A\u8F6C\u6362\u4E3A ",(0,r.jsx)(n.strong,{children:"\u7ED3\u6784\u4F53\u6570\u7EC4"})," \u7ED3\u679C\uFF0C\u8BF7\u67E5\u770B\u540E\u7EED\u793A\u4F8B\u3002\u5177\u4F53\u65B9\u6CD5\u4ECB\u7ECD\u8BF7\u67E5\u770B\u94FE\u5F0F\u64CD\u4F5C\u7AE0\u8282\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5C5E\u6027\u5B57\u6BB5\u6620\u5C04\u89C4\u5219\uFF1A"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C ",(0,r.jsx)(n.code,{children:"map"})," \u4E2D\u7684\u952E\u540D\u4E3A ",(0,r.jsx)(n.code,{children:"uid,name,site"}),"\uFF0C\u800C ",(0,r.jsx)(n.code,{children:"struct"})," \u4E2D\u7684\u5C5E\u6027\u4E3A ",(0,r.jsx)(n.code,{children:"Uid,Name"}),"\uFF0C\u90A3\u4E48\u4ED6\u4EEC\u4E4B\u95F4\u662F\u5982\u4F55\u6267\u884C\u6620\u5C04\u7684\u5462\uFF1F\u4E3B\u8981\u662F\u4EE5\u4E0B\u51E0\u70B9\u7B80\u5355\u7684\u89C4\u5219\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"struct"})," \u4E2D\u9700\u8981\u5339\u914D\u7684\u5C5E\u6027\u5FC5\u987B\u4E3A ",(0,r.jsx)(n.code,{children:"\u516C\u5F00\u5C5E\u6027"}),"(\u9996\u5B57\u6BCD\u5927\u5199)\uFF1B"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8BB0\u5F55\u7ED3\u679C\u4E2D\u952E\u540D\u4F1A\u81EA\u52A8\u6309\u7167 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199"})})," \u4E14 ",(0,r.jsxs)(n.strong,{children:["\u5FFD\u7565 ",(0,r.jsx)(n.code,{children:"-/_/\u7A7A\u683C"})," \u7B26\u53F7"]})," \u7684\u5F62\u5F0F\u4E0E ",(0,r.jsx)(n.code,{children:"struct"})," \u5C5E\u6027\u8FDB\u884C\u5339\u914D\uFF1B"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u5339\u914D\u6210\u529F\uFF0C\u90A3\u4E48\u5C06\u952E\u503C\u8D4B\u503C\u7ED9\u5C5E\u6027\uFF0C\u5982\u679C\u65E0\u6CD5\u5339\u914D\uFF0C\u90A3\u4E48\u5FFD\u7565\u8BE5\u952E\u503C\uFF1B"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u51E0\u4E2A\u5339\u914D\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"\u8BB0\u5F55\u952E\u540D    struct\u5C5E\u6027     \u662F\u5426\u5339\u914D\nname       Name           match\nEmail      Email          match\nnickname   NickName       match\nNICKNAME   NickName       match\nNick-Name  NickName       match\nnick_name  NickName       match\nnick_name  Nick_Name      match\nNickName   Nick_Name      match\nNick-Name  Nick_Name      match\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u7531\u4E8E\u6570\u636E\u5E93\u7ED3\u679C\u96C6\u8F6C ",(0,r.jsx)(n.code,{children:"struct"})," \u7684\u5E95\u5C42\u662F\u4F9D\u9760 ",(0,r.jsx)(n.code,{children:"gconv.Struct"})," \u65B9\u6CD5\u5B9E\u73B0\u7684\uFF0C\u56E0\u6B64\u5982\u679C\u60F3\u8981\u5B9E\u73B0 ",(0,r.jsx)(n.strong,{children:"\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u8F6C\u6362"}),"\uFF0C\u4EE5\u53CA\u66F4\u8BE6\u7EC6\u7684\u6620\u5C04\u89C4\u5219\u8BF4\u660E\uFF0C\u8BF7\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"/2.7.x/docs/core/gconv-struct",children:"\u7C7B\u578B\u8F6C\u6362-Struct\u8F6C\u6362"})," \u7AE0\u8282\u3002"]})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4E09-result-\u6570\u636E\u96C6\u5408",children:["\u4E09\u3001 ",(0,r.jsx)(n.code,{children:"Result"})," \u6570\u636E\u96C6\u5408"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Result/Record"})," \u6570\u636E\u7C7B\u578B\u6839\u636E\u6570\u636E\u7ED3\u679C\u96C6\u64CD\u4F5C\u7684\u9700\u8981\uFF0C\u5F80\u5F80\u9700\u8981\u6839\u636E\u8BB0\u5F55\u4E2D ",(0,r.jsx)(n.strong,{children:"\u7279\u5B9A\u7684\u5B57\u6BB5"})," \u4F5C\u4E3A\u952E\u540D\u8FDB\u884C\u6570\u636E\u68C0\u7D22\uFF0C\u56E0\u6B64\u5B83\u5305\u542B\u591A\u4E2A\u7528\u4E8E\u8F6C\u6362 ",(0,r.jsx)(n.code,{children:"Map/List"})," \u7684\u65B9\u6CD5\uFF0C\u540C\u65F6\u4E5F\u5305\u542B\u4E86\u5E38\u7528\u6570\u636E\u7ED3\u6784 ",(0,r.jsx)(n.code,{children:"JSON/XML"})," \u7684\u8F6C\u6362\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4E8E\u65B9\u6CD5\u6BD4\u8F83\u7B80\u5355\uFF0C\u8FD9\u91CC\u4FBF\u4E0D\u518D\u4E3E\u4F8B\u8BF4\u660E\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E24\u4E2A\u65B9\u6CD5 ",(0,r.jsx)(n.code,{children:"Record.Map"})," \u53CA ",(0,r.jsx)(n.code,{children:"Result.List"}),"\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E5F\u662F\u4F7F\u7528\u6BD4\u8F83\u9891\u7E41\u7684\u65B9\u6CD5\uFF0C\u7528\u4EE5\u5C06 ",(0,r.jsx)(n.code,{children:"ORM"})," \u67E5\u8BE2\u7ED3\u679C\u4FE1\u606F\u8F6C\u6362\u4E3A\u53EF\u505A\u5C55\u793A\u7684\u6570\u636E\u7C7B\u578B\u3002\u7531\u4E8E\u7ED3\u679C\u96C6\u5B57\u6BB5\u503C\u5E95\u5C42\u4E3A ",(0,r.jsx)(n.code,{children:"[]byte"})," \u7C7B\u578B\uFF0C\u867D\u7136\u4F7F\u7528\u4E86\u65B0\u7684 ",(0,r.jsx)(n.code,{children:"Value"})," \u7C7B\u578B\u505A\u4E86\u5C01\u88C5\uFF0C\u5E76\u4E14\u4E5F\u63D0\u4F9B\u4E86\u6570\u5341\u79CD\u5E38\u89C1\u7684\u7C7B\u578B\u8F6C\u6362\u65B9\u6CD5\uFF08\u5177\u4F53\u8BF7\u9605\u8BFB ",(0,r.jsx)(n.a,{href:"/2.7.x/docs/components/container-gvar",children:"\u6CDB\u578B\u7C7B\u578B-gvar"})," \u7AE0\u8282\uFF09\uFF0C\u4F46\u662F\u5927\u591A\u6570\u65F6\u5019\u9700\u8981\u76F4\u63A5\u5C06\u7ED3\u679C ",(0,r.jsx)(n.code,{children:"Result"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"Record"})," \u76F4\u63A5\u4F5C\u4E3A ",(0,r.jsx)(n.code,{children:"json"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"xml"})," \u6570\u636E\u7ED3\u6784\u8FD4\u56DE\uFF0C\u5C31\u9700\u8981\u505A\u8F6C\u6362\u624D\u884C\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "database/sql"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\ntype User struct {\n    Uid  int\n    Name string\n    Site string\n}\n\nfunc main() {\n    var (\n        user []*User\n        ctx  = gctx.New()\n    )\n    err := g.DB().Model("user").Where("uid", 1).Scan(&user)\n    if err != nil && err != sql.ErrNoRows {\n        g.Log().Header(false).Fatal(ctx, err)\n    }\n    if user != nil {\n        g.Log().Header(false).Print(ctx, user)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[{"Uid":1,"Name":"john","Site":"https://goframe.org"}]\n'})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},377183:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/73f857180655a5dc19eb8deb79d3a774-23eac3296f477332bac92111bfa42db2.png"},764037:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/c4af671f6f43d161fc776afdffaaa047-cedc04da064207c474c509e73e20a187.png"},106567:function(e,n,c){c.d(n,{Z:function(){return s}});let s=c.p+"assets/images/d8aedba99def08d9ad5e244dd0bde66a-202fea008f89960ecfef39c6805ee9a7.png"},250065:function(e,n,c){c.d(n,{Z:function(){return t},a:function(){return i}});var s=c(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);