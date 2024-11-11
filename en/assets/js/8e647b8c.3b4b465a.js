"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[31040],{286019:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa","description":"GoFrame\u6846\u67b6\u4e2dORM\u7ec4\u4ef6\u7684\u65e5\u5fd7\u8f93\u51fa\u529f\u80fd\uff0c\u91cd\u70b9\u8bb2\u89e3\u4e86\u5982\u4f55\u901a\u8fc7SetLogger\u548cGetLogger\u65b9\u6cd5\u8bbe\u7f6e\u65e5\u5fd7\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528\u65e5\u5fd7\u8f93\u51fa\u529f\u80fd\u3002\u6587\u4e2d\u793a\u4f8b\u5c55\u793a\u4e86SQL\u8bed\u53e5\u7684\u8c03\u8bd5\u8fc7\u7a0b\uff0c\u5305\u62ec\u65e5\u5fd7\u7ea7\u522b\u3001\u6267\u884c\u8017\u65f6\u3001SQL\u8bed\u53e5\u7b49\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u7406\u89e3\u548c\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027","slug":"/docs/core/gdb-senior-logging","permalink":"/en/docs/core/gdb-senior-logging","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gdb-senior-logging","title":"ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM\u65e5\u5fd7","SQL\u8c03\u8bd5","\u65e5\u5fd7\u914d\u7f6e","\u4e8b\u52a1ID","\u6570\u636e\u5e93\u9a71\u52a8","SQL\u8bed\u53e5","\u65e5\u5fd7\u8f93\u51fa","\u8c03\u8bd5\u5de5\u5177"],"description":"GoFrame\u6846\u67b6\u4e2dORM\u7ec4\u4ef6\u7684\u65e5\u5fd7\u8f93\u51fa\u529f\u80fd\uff0c\u91cd\u70b9\u8bb2\u89e3\u4e86\u5982\u4f55\u901a\u8fc7SetLogger\u548cGetLogger\u65b9\u6cd5\u8bbe\u7f6e\u65e5\u5fd7\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528\u65e5\u5fd7\u8f93\u51fa\u529f\u80fd\u3002\u6587\u4e2d\u793a\u4f8b\u5c55\u793a\u4e86SQL\u8bed\u53e5\u7684\u8c03\u8bd5\u8fc7\u7a0b\uff0c\u5305\u62ec\u65e5\u5fd7\u7ea7\u522b\u3001\u6267\u884c\u8017\u65f6\u3001SQL\u8bed\u53e5\u7b49\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u7406\u89e3\u548c\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u8c03\u8bd5\u6a21\u5f0f","permalink":"/en/docs/core/gdb-senior-debugging"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027-\u5b57\u6bb5\u6620\u5c04","permalink":"/en/docs/core/gdb-senior-fields-mapping"}}');var s=d(474848),r=d(28453);const c={slug:"/docs/core/gdb-senior-logging",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u65e5\u5fd7\u8f93\u51fa",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM\u65e5\u5fd7","SQL\u8c03\u8bd5","\u65e5\u5fd7\u914d\u7f6e","\u4e8b\u52a1ID","\u6570\u636e\u5e93\u9a71\u52a8","SQL\u8bed\u53e5","\u65e5\u5fd7\u8f93\u51fa","\u8c03\u8bd5\u5de5\u5177"],description:"GoFrame\u6846\u67b6\u4e2dORM\u7ec4\u4ef6\u7684\u65e5\u5fd7\u8f93\u51fa\u529f\u80fd\uff0c\u91cd\u70b9\u8bb2\u89e3\u4e86\u5982\u4f55\u901a\u8fc7SetLogger\u548cGetLogger\u65b9\u6cd5\u8bbe\u7f6e\u65e5\u5fd7\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u542f\u7528\u65e5\u5fd7\u8f93\u51fa\u529f\u80fd\u3002\u6587\u4e2d\u793a\u4f8b\u5c55\u793a\u4e86SQL\u8bed\u53e5\u7684\u8c03\u8bd5\u8fc7\u7a0b\uff0c\u5305\u62ec\u65e5\u5fd7\u7ea7\u522b\u3001\u6267\u884c\u8017\u65f6\u3001SQL\u8bed\u53e5\u7b49\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u7406\u89e3\u548c\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u3002"},i=void 0,t={},l=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ORM"})," \u65e5\u5fd7\u7684\u8f93\u51fa\uff0c\u662f\u5728\u63d0\u4ea4\u5e95\u5c42\u6570\u636e\u5e93 ",(0,s.jsx)(n.code,{children:"driver"})," \u4e4b\u524d\uff0c ",(0,s.jsx)(n.code,{children:"ORM"})," \u5c06\u94fe\u5f0f\u64cd\u4f5c\u6216\u8005 ",(0,s.jsx)(n.code,{children:"SQL"})," \u6784\u6210\u7684\u6a21\u677f\u4e0e\u6267\u884c\u53c2\u6570\u8fdb\u884c\u683c\u5f0f\u5316\u6253\u5370\u5c55\u793a\uff0c\u4f9b\u4eba\u5de5\u9605\u8bfb\u8c03\u8bd5\u3002\u7531\u4e8e\u5e95\u5c42 ",(0,s.jsx)(n.code,{children:"driver"})," \u53ef\u80fd\u4f1a\u5bf9\u63d0\u4ea4\u53c2\u6570\u8fdb\u884c\u4e8c\u6b21\u7684\u8f6c\u6362\uff0c\u6240\u4ee5\u8fd9\u91cc\u7684\u65e5\u5fd7\u8f93\u51fa\u4ec5\u4f9b\u53c2\u8003\uff0c\u5e76\u4e0d\u5b8c\u5168\u662f\u5e95\u5c42\u771f\u6b63\u6267\u884c\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u65e5\u5fd7\u8f93\u51fa\u5f80\u5f80\u662f\u6253\u5370\u4e00\u4e9b\u8c03\u8bd5\u6216\u8005 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\uff0c\u65e5\u5fd7\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"SetLogger/GetLogger"})," \u65b9\u6cd5\u6765\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u6765\u505a\u914d\u7f6e\uff0c\u65e5\u5fd7\u7684\u914d\u7f6e\u8bf7\u67e5\u770b ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684 ",(0,s.jsx)(n.a,{href:"/en/docs/core/gdb-config",children:"ORM\u4f7f\u7528\u914d\u7f6e"})," \u7ae0\u8282\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5f00\u542f\u4e86\u65e5\u5fd7\u8f93\u51fa\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'database:\n  logger:\n  - path:   "/var/log/gf-app/sql"\n    level:  "all"\n    stdout: true\n  default:\n  - link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    debug: true\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u8fd9\u91cc\u4f7f\u7528\u5173\u952e\u5b57 ",(0,s.jsx)(n.code,{children:"logger"})," \u4f5c\u4e3a ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u65e5\u5fd7\u914d\u7f6e\u9879\u540d\u79f0\uff0c\u56e0\u6b64\u60a8\u65e0\u6cd5\u4f7f\u7528\u8be5\u540d\u5b57\u4f5c\u4e3a\u6570\u636e\u5e93\u914d\u7f6e\u5206\u7ec4\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u8f93\u51fa\u7684\u65e5\u5fd7\u76f8\u5f53\u8be6\u5c3d\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"2021-05-22 21:12:10.776 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  4 ms] [default] [rows:0  ] [txid:1] BEGIN\n2021-05-22 21:12:10.776 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  0 ms] [default] [rows:0  ] [txid:1] SAVEPOINT `transaction0`\n2021-05-22 21:12:10.789 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [ 13 ms] [default] [rows:8  ] [txid:1] SHOW FULL COLUMNS FROM `user`\n2021-05-22 21:12:10.790 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  1 ms] [default] [rows:1  ] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')\n2021-05-22 21:12:10.791 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  1 ms] [default] [rows:0  ] [txid:1] ROLLBACK TO SAVEPOINT `transaction0`\n2021-05-22 21:12:10.791 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  0 ms] [default] [rows:1  ] [txid:1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')\n2021-05-22 21:12:10.792 [DEBU] {38d45cbf2743db16f1062074f7473e5c} [  1 ms] [default] [rows:0  ] [txid:1] COMMIT\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u65e5\u5fd7\u5305\u542b\u4ee5\u4e0b\u51e0\u90e8\u5206\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u65e5\u671f\u53ca\u65f6\u95f4\uff0c\u7cbe\u786e\u5230\u6beb\u79d2\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u65e5\u5fd7\u7ea7\u522b\u3002\u56e0\u4e3a ",(0,s.jsx)(n.code,{children:"SQL"})," \u65e5\u5fd7\u4e3b\u8981\u7528\u4e8e\u529f\u80fd\u8c03\u8bd5/\u95ee\u9898\u6392\u67e5\uff0c\u751f\u4ea7\u73af\u5883\u5f80\u5f80\u9700\u8981\u5173\u95ed\u6389\uff0c\u56e0\u6b64\u65e5\u5fd7\u7ea7\u522b\u56fa\u5b9a\u4e3a ",(0,s.jsx)(n.code,{children:"DEBUG"})," \u7ea7\u522b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u6267\u884c\u8017\u65f6\u3002\u4ece\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u5230\u63a5\u6536\u5230\u6570\u636e\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002\u5f53\u6267\u884c\u65f6\u95f4\u4e0d\u8db3 ",(0,s.jsx)(n.code,{children:"1"})," \u6beb\u79d2\u65f6\uff0c\u5c55\u793a\u4e3a ",(0,s.jsx)(n.code,{children:"0"})," \u6beb\u79d2\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u6240\u5904\u7684\u6570\u636e\u5e93\u914d\u7f6e\u5206\u7ec4\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"default"}),"\u3002\u5173\u4e8e\u914d\u7f6e\u5206\u7ec4\u7684\u4ecb\u7ecd\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/en/docs/core/gdb-config",children:"ORM\u4f7f\u7528\u914d\u7f6e"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u6240\u5c5e\u7684 ",(0,s.jsx)(n.strong,{children:"\u4e8b\u52a1ID"}),"\u3002\u5982\u679c\u5f53\u524d ",(0,s.jsx)(n.code,{children:"SQL"})," \u4e0d\u5c5e\u4e8e\u4e8b\u52a1\u64cd\u4f5c\u65f6\uff0c\u4e0d\u5b58\u5728\u8be5\u5b57\u6bb5\u3002\u5173\u4e8e\u4e8b\u52a1ID\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/en/docs/core/gdb-transaction",children:"ORM\u4e8b\u52a1\u5904\u7406"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5177\u4f53\u6267\u884c\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u5e95\u5c42\u4f7f\u7528\u7684\u662f ",(0,s.jsx)(n.code,{children:"SQL"})," \u9884\u5904\u7406\uff0c\u8fd9\u91cc\u7684 ",(0,s.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u662f\u901a\u8fc7\u7ec4\u4ef6\u81ea\u52a8\u62fc\u63a5\u7684\u7ed3\u679c\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>i});var o=d(296540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);