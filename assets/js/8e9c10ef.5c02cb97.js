"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[88996],{863284:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u5e38\u89c1\u95ee\u9898","title":"ORM\u5e38\u89c1\u95ee\u9898","description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u64cd\u4f5c\u65f6\u53ef\u80fd\u9047\u5230\u7684\u51e0\u79cd\u5e38\u89c1\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u8fc7\u671f\u5bfc\u81f4\u7684\u8fde\u63a5\u9519\u8bef\u3001update\u548cinsert\u64cd\u4f5c\u4e0d\u751f\u6548\u3001\u65e0\u6cd5\u627e\u5230\u6570\u636e\u5e93\u9a71\u52a8\u3001\u67e5\u8be2\u6761\u4ef6\u5e26\u6709WHERE 0=1\u7684\u95ee\u9898\u4ee5\u53caMySQL\u8868\u60c5\u5b58\u50a8\u4e71\u7801\u95ee\u9898\u7b49\u3002\u540c\u65f6\u7ed9\u51fa\u4e86\u4e00\u4e9b\u914d\u7f6e\u5efa\u8bae\u4ee5\u4f18\u5316\u4f7f\u7528\u4f53\u9a8c\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u5e38\u89c1\u95ee\u9898.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM","slug":"/docs/core/gdb-faq","permalink":"/docs/core/gdb-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u5e38\u89c1\u95ee\u9898.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/core/gdb-faq","title":"ORM\u5e38\u89c1\u95ee\u9898","sidebar_position":11,"hide_title":true,"keywords":["ORM\u5e38\u89c1\u95ee\u9898","GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93\u8fde\u63a5\u6c60","MaxLifeTime","SQL\u67e5\u8be2","\u6570\u636e\u5e93\u9a71\u52a8","\u8c03\u8bd5\u65e5\u5fd7","\u7a7a\u6570\u7ec4\u6761\u4ef6","\u5b57\u7b26\u96c6\u8bbe\u7f6e"],"description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u64cd\u4f5c\u65f6\u53ef\u80fd\u9047\u5230\u7684\u51e0\u79cd\u5e38\u89c1\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u8fc7\u671f\u5bfc\u81f4\u7684\u8fde\u63a5\u9519\u8bef\u3001update\u548cinsert\u64cd\u4f5c\u4e0d\u751f\u6548\u3001\u65e0\u6cd5\u627e\u5230\u6570\u636e\u5e93\u9a71\u52a8\u3001\u67e5\u8be2\u6761\u4ef6\u5e26\u6709WHERE 0=1\u7684\u95ee\u9898\u4ee5\u53caMySQL\u8868\u60c5\u5b58\u50a8\u4e71\u7801\u95ee\u9898\u7b49\u3002\u540c\u65f6\u7ed9\u51fa\u4e86\u4e00\u4e9b\u914d\u7f6e\u5efa\u8bae\u4ee5\u4f18\u5316\u4f7f\u7528\u4f53\u9a8c\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53casql.ErrNoRows\u5224\u65ad","permalink":"/docs/core/gdb-practice-avoid-object-initialization-and-sql-errnorows-error"},"next":{"title":"I18N\u56fd\u9645\u5316","permalink":"/docs/core/gi18n"}}');var r=i(474848),s=i(28453);const t={slug:"/docs/core/gdb-faq",title:"ORM\u5e38\u89c1\u95ee\u9898",sidebar_position:11,hide_title:!0,keywords:["ORM\u5e38\u89c1\u95ee\u9898","GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93\u8fde\u63a5\u6c60","MaxLifeTime","SQL\u67e5\u8be2","\u6570\u636e\u5e93\u9a71\u52a8","\u8c03\u8bd5\u65e5\u5fd7","\u7a7a\u6570\u7ec4\u6761\u4ef6","\u5b57\u7b26\u96c6\u8bbe\u7f6e"],description:"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cORM\u64cd\u4f5c\u65f6\u53ef\u80fd\u9047\u5230\u7684\u51e0\u79cd\u5e38\u89c1\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u8fc7\u671f\u5bfc\u81f4\u7684\u8fde\u63a5\u9519\u8bef\u3001update\u548cinsert\u64cd\u4f5c\u4e0d\u751f\u6548\u3001\u65e0\u6cd5\u627e\u5230\u6570\u636e\u5e93\u9a71\u52a8\u3001\u67e5\u8be2\u6761\u4ef6\u5e26\u6709WHERE 0=1\u7684\u95ee\u9898\u4ee5\u53caMySQL\u8868\u60c5\u5b58\u50a8\u4e71\u7801\u95ee\u9898\u7b49\u3002\u540c\u65f6\u7ed9\u51fa\u4e86\u4e00\u4e9b\u914d\u7f6e\u5efa\u8bae\u4ee5\u4f18\u5316\u4f7f\u7528\u4f53\u9a8c\u3002"},c=void 0,o={},a=[{value:"<code>driver: bad connection</code>",id:"driver-bad-connection",level:2},{value:"<code>update/insert</code> \u64cd\u4f5c\u4e0d\u751f\u6548",id:"updateinsert-\u64cd\u4f5c\u4e0d\u751f\u6548",level:2},{value:"<code>cannot find database driver for specified database type &quot;xxx&quot;\uff0c did you misspell type name &quot;xxx&quot; or forget importing the database driver?</code>",id:"cannot-find-database-driver-for-specified-database-type-xxx-did-you-misspell-type-name-xxx-or-forget-importing-the-database-driver",level:2},{value:"\u6570\u636e\u5e93\u6253\u5f00 <code>DEBUG</code> \u65e5\u5fd7\u540e\uff0c\u67e5\u8be2\u7684 <code>SQL</code> \u8bed\u53e5\u4e2d\u53d1\u73b0\u51fa\u73b0 <code>WHERE 0=1</code> \u7684\u8bed\u53e5",id:"\u6570\u636e\u5e93\u6253\u5f00-debug-\u65e5\u5fd7\u540e\u67e5\u8be2\u7684-sql-\u8bed\u53e5\u4e2d\u53d1\u73b0\u51fa\u73b0-where-01-\u7684\u8bed\u53e5",level:2},{value:"MYSQL\u4e2d\u7684\u8868\u60c5,\u7528SQL\u67e5\u8be2\u540e,\u4e71\u7801\u95ee\u9898",id:"mysql\u4e2d\u7684\u8868\u60c5\u7528sql\u67e5\u8be2\u540e\u4e71\u7801\u95ee\u9898",level:2}];function l(e){const d={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h2,{id:"driver-bad-connection",children:(0,r.jsx)(d.code,{children:"driver: bad connection"})}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.img,{src:i(591473).A+"",width:"3440",height:"808"})}),"\n",(0,r.jsxs)(d.p,{children:["\u5982\u679c\u6570\u636e\u5e93\u6267\u884c\u51fa\u73b0\u8be5\u9519\u8bef\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u672c\u5730\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u7684\u8fde\u63a5\u5df2\u7ecf\u8fc7\u671f\uff0c\u53ef\u4ee5\u68c0\u67e5\u4e00\u4e0b\u5ba2\u6237\u7aef\u914d\u7f6e\u7684 ",(0,r.jsx)(d.code,{children:"MaxLifeTime"})," \u914d\u7f6e\u662f\u5426\u8d85\u8fc7\u6570\u636e\u5e93\u670d\u52a1\u7aef\u8bbe\u7f6e\u7684\u8fde\u63a5\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u3002\u66f4\u591a\u5ba2\u6237\u7aef\u914d\u7f6e\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,r.jsx)(d.a,{href:"/docs/core/gdb-config",children:"ORM\u4f7f\u7528\u914d\u7f6e"})]}),"\n",(0,r.jsxs)(d.h2,{id:"updateinsert-\u64cd\u4f5c\u4e0d\u751f\u6548",children:[(0,r.jsx)(d.code,{children:"update/insert"})," \u64cd\u4f5c\u4e0d\u751f\u6548"]}),"\n",(0,r.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(d.code,{children:"orm"})," \u65f6,\u914d\u7f6e\u6587\u4ef6\u4e2d\uff1a"]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-toml",children:'dryRun = "(\u53ef\u9009)ORM\u7a7a\u8dd1(\u53ea\u8bfb\u4e0d\u5199)"\n'})}),"\n",(0,r.jsx)(d.p,{children:"\u8fd9\u884c\u914d\u7f6e\u4e00\u5b9a\u8981\u5220\u6389\u6216\u8005\u8bbe\u7f6e\u4e3a0"}),"\n",(0,r.jsxs)(d.p,{children:["\u5426\u5219\u51fa\u73b0 ",(0,r.jsx)(d.code,{children:"update insert"})," \u64cd\u4f5c\u4e0d\u751f\u6548\u7684\u73b0\u8c61\u3002"]}),"\n",(0,r.jsx)(d.h2,{id:"cannot-find-database-driver-for-specified-database-type-xxx-did-you-misspell-type-name-xxx-or-forget-importing-the-database-driver",children:(0,r.jsx)(d.code,{children:'cannot find database driver for specified database type "xxx"\uff0c did you misspell type name "xxx" or forget importing the database driver?'})}),"\n",(0,r.jsxs)(d.p,{children:["\u7a0b\u5e8f\u4ee3\u7801\u6ca1\u6709\u5f15\u5165\u4f9d\u8d56\u7684\u6570\u636e\u5e93\u9a71\u52a8\uff0c\u9700\u8981\u6ce8\u610f\u4ece ",(0,r.jsx)(d.code,{children:"GoFrame v2.1"})," \u7248\u672c\u5f00\u59cb\uff0c\u9700\u8981\u624b\u52a8\u5f15\u5165\u793e\u533a\u9a71\u52a8\uff0c\u8bf7\u53c2\u8003\uff1a"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})}),"\n"]}),"\n",(0,r.jsxs)(d.h2,{id:"\u6570\u636e\u5e93\u6253\u5f00-debug-\u65e5\u5fd7\u540e\u67e5\u8be2\u7684-sql-\u8bed\u53e5\u4e2d\u53d1\u73b0\u51fa\u73b0-where-01-\u7684\u8bed\u53e5",children:["\u6570\u636e\u5e93\u6253\u5f00 ",(0,r.jsx)(d.code,{children:"DEBUG"})," \u65e5\u5fd7\u540e\uff0c\u67e5\u8be2\u7684 ",(0,r.jsx)(d.code,{children:"SQL"})," \u8bed\u53e5\u4e2d\u53d1\u73b0\u51fa\u73b0 ",(0,r.jsx)(d.code,{children:"WHERE 0=1"})," \u7684\u8bed\u53e5"]}),"\n",(0,r.jsxs)(d.p,{children:["\u51fa\u73b0 ",(0,r.jsx)(d.code,{children:"WHERE 0=1"})," \u7684\u60c5\u51b5\u662f\u7531\u4e8e\u67e5\u8be2\u6761\u4ef6\u4e2d\u5b58\u5728\u6570\u7ec4\u6761\u4ef6\uff0c\u5e76\u4e14\u6570\u7ec4\u7684\u957f\u5ea6\u4e3a ",(0,r.jsx)(d.code,{children:"0"}),"\u3002\u8fd9\u79cd\u60c5\u51b5 ",(0,r.jsx)(d.code,{children:"ORM"})," \u65e0\u6cd5\u81ea\u52a8\u8fc7\u6ee4\u8fd9\u79cd\u7a7a\u6570\u7ec4\u6761\u4ef6\uff08\u8fd9\u79cd\u6761\u4ef6\u8fc7\u6ee4\u53ef\u80fd\u4f1a\u5f15\u8d77\u4e1a\u52a1\u5f02\u5e38\uff09\uff0c\u9700\u8981\u5f00\u53d1\u8005\u6839\u636e\u4e1a\u52a1\u573a\u666f\uff0c\u663e\u793a\u8c03\u7528 ",(0,r.jsx)(d.code,{children:"OmitEmpty"})," \u6216\u8005 ",(0,r.jsx)(d.code,{children:"OmitEmptyWhere"})," \u6765\u544a\u8bc9 ",(0,r.jsx)(d.code,{children:"ORM"})," \u53ef\u4ee5\u8fc7\u6ee4\u8fd9\u4e9b\u7a7a\u6570\u7ec4\u7684\u6761\u4ef6\u3002"]}),"\n",(0,r.jsx)(d.h2,{id:"mysql\u4e2d\u7684\u8868\u60c5\u7528sql\u67e5\u8be2\u540e\u4e71\u7801\u95ee\u9898",children:"MYSQL\u4e2d\u7684\u8868\u60c5,\u7528SQL\u67e5\u8be2\u540e,\u4e71\u7801\u95ee\u9898"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.img,{src:i(746442).A+"",width:"242",height:"87"})}),"\n",(0,r.jsx)(d.p,{children:"\u89e3\u51b3\u529e\u6cd5:"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"config.toml"})," \u6587\u4ef6 \u6570\u636e\u5e93\u914d\u7f6e\u7684 ",(0,r.jsx)(d.code,{children:"charset"})," \u8bbe\u7f6e\u4e3a ",(0,r.jsx)(d.code,{children:"utf8mb4"})," \u9ed8\u8ba4\u662f ",(0,r.jsx)(d.code,{children:"utf8"})]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"MySQL"})," \u5b58\u50a8\u8868\u60c5\u65f6\u6ce8\u610f\uff1a"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["\u6570\u636e\u5e93\u7f16\u7801 ",(0,r.jsx)(d.code,{children:"utf8mb4"})]}),"\n",(0,r.jsxs)(d.li,{children:["\u8868\u7684\u7f16\u7801\u662f ",(0,r.jsx)(d.code,{children:"utf8mb4"})]}),"\n",(0,r.jsxs)(d.li,{children:["\u8868\u4e2d\u5185\u5bb9\u5b57\u6bb5\u662f ",(0,r.jsx)(d.code,{children:"utf8mb4"})]}),"\n"]})]})}function h(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},591473:(e,d,i)=>{i.d(d,{A:()=>n});const n=i.p+"assets/images/7b384b6f57115b11938d9c0a30dde732-2f9af306f3cbc5efe6a8eb12f1a5eb95.png"},746442:(e,d,i)=>{i.d(d,{A:()=>n});const n=i.p+"assets/images/867e951b823bb2652a6b7d62f70a1ff3-81f4a16885143f2c2f2bcc8f52a64e10.png"},28453:(e,d,i)=>{i.d(d,{R:()=>t,x:()=>c});var n=i(296540);const r={},s=n.createContext(r);function t(e){const d=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(s.Provider,{value:d},e.children)}}}]);