"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["18917"],{965828:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>l,assets:()=>c,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u8C03\u8BD5\u6A21\u5F0F","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u8C03\u8BD5\u6A21\u5F0F","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u9AD8\u7EA7\u7279\u6027\u7684\u8C03\u8BD5\u6A21\u5F0F\u3002\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C\u901A\u8FC7Debug\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u9879\u6216SetDebug\u914D\u7F6E\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u4F7F\u6570\u636E\u5E93SQL\u64CD\u4F5C\u8BED\u53E5\u4EE5DEBUG\u7EA7\u522B\u8F93\u51FA\u5230\u7EC8\u7AEF\u6216\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8005\u8FDB\u884C\u95EE\u9898\u6392\u67E5\u548C\u6027\u80FD\u4F18\u5316\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u8C03\u8BD5\u6A21\u5F0F.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/docs/core/gdb-senior-debugging","permalink":"/docs/core/gdb-senior-debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u8C03\u8BD5\u6A21\u5F0F.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gdb-senior-debugging","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u8C03\u8BD5\u6A21\u5F0F","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u8C03\u8BD5\u6A21\u5F0F","SQL","\u65E5\u5FD7","\u6570\u636E\u5E93","\u914D\u7F6E\u793A\u4F8B","SetDebug","Debug\u914D\u7F6E"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u9AD8\u7EA7\u7279\u6027\u7684\u8C03\u8BD5\u6A21\u5F0F\u3002\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C\u901A\u8FC7Debug\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u9879\u6216SetDebug\u914D\u7F6E\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u4F7F\u6570\u636E\u5E93SQL\u64CD\u4F5C\u8BED\u53E5\u4EE5DEBUG\u7EA7\u522B\u8F93\u51FA\u5230\u7EC8\u7AEF\u6216\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8005\u8FDB\u884C\u95EE\u9898\u6392\u67E5\u548C\u6027\u80FD\u4F18\u5316\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-SQL\u6355\u83B7","permalink":"/docs/core/gdb-senior-catch-sql"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u65E5\u5FD7\u8F93\u51FA","permalink":"/docs/core/gdb-senior-logging"}}'),o=n("785893"),d=n("250065");let r={slug:"/docs/core/gdb-senior-debugging",title:"ORM\u9AD8\u7EA7\u7279\u6027-\u8C03\u8BD5\u6A21\u5F0F",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u8C03\u8BD5\u6A21\u5F0F","SQL","\u65E5\u5FD7","\u6570\u636E\u5E93","\u914D\u7F6E\u793A\u4F8B","SetDebug","Debug\u914D\u7F6E"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u9AD8\u7EA7\u7279\u6027\u7684\u8C03\u8BD5\u6A21\u5F0F\u3002\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C\u901A\u8FC7Debug\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u9879\u6216SetDebug\u914D\u7F6E\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u4F7F\u6570\u636E\u5E93SQL\u64CD\u4F5C\u8BED\u53E5\u4EE5DEBUG\u7EA7\u522B\u8F93\u51FA\u5230\u7EC8\u7AEF\u6216\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u4FBF\u4E8E\u5F00\u53D1\u8005\u8FDB\u884C\u95EE\u9898\u6392\u67E5\u548C\u6027\u80FD\u4F18\u5316\u3002"},i=void 0,c={},a=[];function u(e){let t={code:"code",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u4E3A\u4FBF\u4E8E\u5F00\u53D1\u9636\u6BB5\u8C03\u8BD5\uFF0C ",(0,o.jsx)(t.code,{children:"GoFrame ORM"})," \u652F\u6301\u8C03\u8BD5\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(t.code,{children:"Debug"})," \u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u9879\u6216\u8005 ",(0,o.jsx)(t.code,{children:"SetDebug"})," \u914D\u7F6E\u65B9\u5F0F\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF0C \u968F\u540E\u4EFB\u4F55\u7684\u6570\u636E\u5E93 ",(0,o.jsx)(t.code,{children:"SQL"})," \u64CD\u4F5C\u8BED\u53E5\u90FD\u5C06\u4F1A\u7531\u5185\u7F6E\u7684\u65E5\u5FD7\u5BF9\u8C61\uFF0C\u4EE5 ",(0,o.jsx)(t.code,{children:"DEBUG"})," \u7EA7\u522B\u8F93\u51FA\u5230\u7EC8\u7AEF\u6216\u8005\u65E5\u5FD7\u6587\u4EF6\u4E2D\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u5F00\u542F\u4E86\u8C03\u8BD5\u6A21\u5F0F\u7684\u914D\u7F6E\u793A\u4F8B\uFF1A"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'database:\n  default:\n  - link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    debug: true\n'})}),"\n",(0,o.jsx)(t.p,{children:"\u8F93\u51FA\u7684\u65E5\u5FD7\u5185\u5BB9\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"2021-05-22 21:12:10.776 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  4 ms] [default] [rows:0  ] [txid:1] BEGIN\n2021-05-22 21:12:10.776 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  0 ms] [default] [rows:0  ] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:12:10.789 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [ 13 ms] [default] [rows:8  ] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:12:10.790 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  1 ms] [default] [rows:1  ] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:12:10.791 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  1 ms] [default] [rows:0  ] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:12:10.791 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  0 ms] [default] [rows:1  ] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:12:10.792 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  1 ms] [default] [rows:0  ] [txid:1] COMMIT\n"})})]})}function l(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var s=n(667294);let o={},d=s.createContext(o);function r(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);