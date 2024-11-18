"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["61786"],{462215:function(e,n,o){o.r(n),o.d(n,{metadata:()=>d,contentTitle:()=>t,default:()=>u,assets:()=>c,toc:()=>i,frontMatter:()=>a});var d=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-RawSQL","title":"ORM\u9AD8\u7EA7\u7279\u6027-RawSQL","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u7684RawSQL\u7279\u6027\uFF0C\u901A\u8FC7\u4F7F\u7528gdb.Raw\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5728\u751F\u6210\u7684SQL\u8BED\u53E5\u4E2D\u5D4C\u5165\u81EA\u5B9A\u4E49\u7684SQL\u7247\u6BB5\uFF0C\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5728Insert\u3001Update\u548CSelect\u64CD\u4F5C\u4E2D\u4F7F\u7528RawSQL\u7684\u65B9\u6CD5\u53CA\u5176\u793A\u4F8B\uFF0C\u786E\u4FDDSQL\u8BED\u53E5\u7684\u5B89\u5168\u6027\u548C\u7075\u6D3B\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-RawSQL.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/docs/core/gdb-senior-raw-sql","permalink":"/en/2.7.x/docs/core/gdb-senior-raw-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-RawSQL.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/core/gdb-senior-raw-sql","title":"ORM\u9AD8\u7EA7\u7279\u6027-RawSQL","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","ORM","RawSQL","SQL\u6CE8\u5165","gdb.Raw","\u6570\u636E\u63D2\u5165","\u6570\u636E\u66F4\u65B0","\u6570\u636E\u67E5\u8BE2","\u9884\u5904\u7406\u6A21\u5F0F","SQL\u8BED\u53E5"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u7684RawSQL\u7279\u6027\uFF0C\u901A\u8FC7\u4F7F\u7528gdb.Raw\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5728\u751F\u6210\u7684SQL\u8BED\u53E5\u4E2D\u5D4C\u5165\u81EA\u5B9A\u4E49\u7684SQL\u7247\u6BB5\uFF0C\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5728Insert\u3001Update\u548CSelect\u64CD\u4F5C\u4E2D\u4F7F\u7528RawSQL\u7684\u65B9\u6CD5\u53CA\u5176\u793A\u4F8B\uFF0C\u786E\u4FDDSQL\u8BED\u53E5\u7684\u5B89\u5168\u6027\u548C\u7075\u6D3B\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027","permalink":"/en/2.7.x/docs/core/gdb-senior"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-SQL\u6355\u83B7","permalink":"/en/2.7.x/docs/core/gdb-senior-catch-sql"}}'),s=o("785893"),r=o("250065");let a={slug:"/docs/core/gdb-senior-raw-sql",title:"ORM\u9AD8\u7EA7\u7279\u6027-RawSQL",sidebar_position:0,hide_title:!0,keywords:["GoFrame","ORM","RawSQL","SQL\u6CE8\u5165","gdb.Raw","\u6570\u636E\u63D2\u5165","\u6570\u636E\u66F4\u65B0","\u6570\u636E\u67E5\u8BE2","\u9884\u5904\u7406\u6A21\u5F0F","SQL\u8BED\u53E5"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u7684RawSQL\u7279\u6027\uFF0C\u901A\u8FC7\u4F7F\u7528gdb.Raw\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5728\u751F\u6210\u7684SQL\u8BED\u53E5\u4E2D\u5D4C\u5165\u81EA\u5B9A\u4E49\u7684SQL\u7247\u6BB5\uFF0C\u5B9E\u73B0\u66F4\u7075\u6D3B\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u3002\u8BE6\u7EC6\u8BB2\u89E3\u4E86\u5728Insert\u3001Update\u548CSelect\u64CD\u4F5C\u4E2D\u4F7F\u7528RawSQL\u7684\u65B9\u6CD5\u53CA\u5176\u793A\u4F8B\uFF0C\u786E\u4FDDSQL\u8BED\u53E5\u7684\u5B89\u5168\u6027\u548C\u7075\u6D3B\u6027\u3002"},t=void 0,c={},i=[{value:"\u5728 <code>Insert</code> \u4E2D\u4F7F\u7528 <code>RawSQL</code>",id:"\u5728-insert-\u4E2D\u4F7F\u7528-rawsql",level:2},{value:"\u5728 <code>Update</code> \u4E2D\u4F7F\u7528 <code>RawSQL</code>",id:"\u5728-update-\u4E2D\u4F7F\u7528-rawsql",level:2},{value:"\u5728 <code>Select</code> \u4E2D\u4F7F\u7528 <code>RawSQL</code>",id:"\u5728-select-\u4E2D\u4F7F\u7528-rawsql",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u7531\u4E8E ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u5B89\u5168\u6027\u4FDD\u969C\uFF0C\u6240\u6709\u8F93\u5165\u7684\u53C2\u6570\u5728\u5E95\u5C42\u90FD\u5C06\u4F7F\u7528\u9884\u5904\u7406\u6A21\u5F0F\u6267\u884C\uFF0C\u9632\u6B62\u5E38\u89C1\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u6CE8\u5165\u98CE\u9669\u3002\u5728\u67D0\u4E00\u4E9B\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u671F\u671B\u5728\u751F\u6210\u6267\u884C\u7684SQL\u8BED\u53E5\u4E2D\u5D4C\u5165\u81EA\u5B9A\u4E49\u7684SQL\u8BED\u53E5\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684 ",(0,s.jsx)(n.code,{children:"RawSQL"})," \u7279\u6027\uFF0C\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u7C7B\u578B\u6765\u5B9E\u73B0\u3002\u6211\u4EEC\u6765\u770B\u51E0\u4E2A\u793A\u4F8B\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u5728-insert-\u4E2D\u4F7F\u7528-rawsql",children:["\u5728 ",(0,s.jsx)(n.code,{children:"Insert"})," \u4E2D\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"RawSQL"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u7684\u53C2\u6570\u5C06\u4F1A\u76F4\u63A5\u4F5C\u4E3A ",(0,s.jsx)(n.code,{children:"SQL"})," \u7247\u6BB5\u5D4C\u5165\u5230\u63D0\u4EA4\u5230\u5E95\u5C42\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8BED\u53E5\u4E2D\uFF0C\u4E0D\u4F1A\u88AB\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u53C2\u6570\u7C7B\u578B\u3001\u4E5F\u4E0D\u4F1A\u88AB\u5F53\u505A\u9884\u5904\u7406\u53C2\u6570\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(\'id+2\',\'john\',\'123456\',\'now()\')\ng.Model("user").Data(g.Map{\n    "id":          "id+2",\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": "now()",\n}).Insert()\n// \u6267\u884C\u62A5\u9519\uFF1AError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540E\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(id+2,\'john\',\'123456\',now())\ng.Model("user").Data(g.Map{\n    "id":          gdb.Raw("id+2"),\n    "passport":    "john",\n    "password":    "123456",\n    "nickname":    "JohnGuo",\n    "create_time": gdb.Raw("now()"),\n}).Insert()\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5728-update-\u4E2D\u4F7F\u7528-rawsql",children:["\u5728 ",(0,s.jsx)(n.code,{children:"Update"})," \u4E2D\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"RawSQL"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET login_count=\'login_count+1\',update_time=\'now()\' WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": "login_count+1",\n    "update_time": "now()",\n}).Where("id", 1).Update()\n// \u6267\u884C\u62A5\u9519\uFF1AError Code: 1136. Column count doesn\'t match value count at row 1\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540E\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// UPDATE `user` SET login_count=login_count+1,update_time=now() WHERE id=1\ng.Model("user").Data(g.Map{\n    "login_count": gdb.Raw("login_count+1"),\n    "update_time": gdb.Raw("now()"),\n}).Where("id", 1).Update()\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5728-select-\u4E2D\u4F7F\u7528-rawsql",children:["\u5728 ",(0,s.jsx)(n.code,{children:"Select"})," \u4E2D\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"RawSQL"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u65F6\u95F4\u51FD\u6570 ",(0,s.jsx)(n.code,{children:"now()"})," \u5C06\u4F1A\u88AB\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u4F5C\u4E3A ",(0,s.jsx)(n.code,{children:"SQL"})," \u53C2\u6570\u6267\u884C\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `created_at`<\'now()\'\ng.Model("user").WhereLT("created_at", "now()").All()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"gdb.Raw"})," \u6539\u9020\u540E\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `created_at`<now()\ng.Model("user").WhereLT("created_at", gdb.Raw("now()")).All()\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return a}});var d=o(667294);let s={},r=d.createContext(s);function a(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);