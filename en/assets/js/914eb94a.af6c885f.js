"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["15809"],{559772:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>t,frontMatter:()=>d});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u94FE\u5F0F\u64CD\u4F5C\u65F6\u5207\u6362\u6570\u636E\u5E93\u3002\u6211\u4EEC\u901A\u8FC7\u4E0D\u540C\u7684\u914D\u7F6E\u5206\u7EC4\u3001\u8FD0\u884C\u65F6\u66F4\u6539\u5355\u4F8B\u5BF9\u8C61\u7684\u6570\u636E\u5E93\u914D\u7F6E\u3001\u4F7F\u7528Schema\u65B9\u6CD5\u8FDB\u884C\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u901A\u8FC7\u8868\u540D\u4E2D\u5E26\u6570\u636E\u5E93\u540D\u79F0\u6765\u5B9E\u73B0\u591A\u79CD\u6570\u636E\u5E93\u5207\u6362\u65B9\u6848\u3002\u8FD9\u4E9B\u65B9\u6CD5\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u65B9\u5F0F\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C","slug":"/docs/core/gdb-chaining-schema","permalink":"/en/2.7.x/docs/core/gdb-chaining-schema","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":12,"frontMatter":{"slug":"/docs/core/gdb-chaining-schema","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362","sidebar_position":12,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u94FE\u5F0F\u64CD\u4F5C","\u6570\u636E\u5E93\u5207\u6362","DB\u5BF9\u8C61","Model\u5BF9\u8C61","\u914D\u7F6E\u5206\u7EC4","Schema\u65B9\u6CD5","\u8DE8\u57DF\u64CD\u4F5C"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u94FE\u5F0F\u64CD\u4F5C\u65F6\u5207\u6362\u6570\u636E\u5E93\u3002\u6211\u4EEC\u901A\u8FC7\u4E0D\u540C\u7684\u914D\u7F6E\u5206\u7EC4\u3001\u8FD0\u884C\u65F6\u66F4\u6539\u5355\u4F8B\u5BF9\u8C61\u7684\u6570\u636E\u5E93\u914D\u7F6E\u3001\u4F7F\u7528Schema\u65B9\u6CD5\u8FDB\u884C\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u901A\u8FC7\u8868\u540D\u4E2D\u5E26\u6570\u636E\u5E93\u540D\u79F0\u6765\u5B9E\u73B0\u591A\u79CD\u6570\u636E\u5E93\u5207\u6362\u65B9\u6848\u3002\u8FD9\u4E9B\u65B9\u6CD5\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u65B9\u5F0F\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65F6\u95F4\u7EF4\u62A4-\u6574\u578B\u5B57\u6BB5","permalink":"/en/2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u65F6\u95F4\u7EF4\u62A4/\u65F6\u95F4\u7EF4\u62A4-\u6574\u578B\u5B57\u6BB5"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-Hook\u7279\u6027","permalink":"/en/2.7.x/docs/core/gdb-chaining-hook"}}'),s=o("785893"),c=o("250065");let d={slug:"/docs/core/gdb-chaining-schema",title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u5E93\u5207\u6362",sidebar_position:12,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u94FE\u5F0F\u64CD\u4F5C","\u6570\u636E\u5E93\u5207\u6362","DB\u5BF9\u8C61","Model\u5BF9\u8C61","\u914D\u7F6E\u5206\u7EC4","Schema\u65B9\u6CD5","\u8DE8\u57DF\u64CD\u4F5C"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u94FE\u5F0F\u64CD\u4F5C\u65F6\u5207\u6362\u6570\u636E\u5E93\u3002\u6211\u4EEC\u901A\u8FC7\u4E0D\u540C\u7684\u914D\u7F6E\u5206\u7EC4\u3001\u8FD0\u884C\u65F6\u66F4\u6539\u5355\u4F8B\u5BF9\u8C61\u7684\u6570\u636E\u5E93\u914D\u7F6E\u3001\u4F7F\u7528Schema\u65B9\u6CD5\u8FDB\u884C\u94FE\u5F0F\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u901A\u8FC7\u8868\u540D\u4E2D\u5E26\u6570\u636E\u5E93\u540D\u79F0\u6765\u5B9E\u73B0\u591A\u79CD\u6570\u636E\u5E93\u5207\u6362\u65B9\u6848\u3002\u8FD9\u4E9B\u65B9\u6CD5\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u65B9\u5F0F\u3002"},i=void 0,l={},t=[];function a(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u77E5\u9053\u6570\u636E\u5E93\u7684\u914D\u7F6E\u4E2D\u6709\u652F\u6301\u5BF9\u9ED8\u8BA4\u6570\u636E\u5E93\u7684\u914D\u7F6E\uFF0C\u56E0\u6B64 ",(0,s.jsx)(n.code,{children:"DB"})," \u5BF9\u8C61\u53CA ",(0,s.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u5DF2\u7ECF\u7ED1\u5B9A\u5230\u4E86\u7279\u5B9A\u7684\u6570\u636E\u5E93\u4E0A\u3002\u8FD0\u884C\u65F6\u5207\u6362\u6570\u636E\u5E93\u6709\u51E0\u79CD\u65B9\u6848\uFF08\u5047\u5982\u6211\u4EEC\u7684\u6570\u636E\u5E93\u6709 ",(0,s.jsx)(n.code,{children:"user"})," \u7528\u6237\u6570\u636E\u5E93\u548C ",(0,s.jsx)(n.code,{children:"order"})," \u8BA2\u5355\u6570\u636E\u5E93\uFF09\uFF1A"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u4E0D\u540C\u7684\u914D\u7F6E\u5206\u7EC4\u6765\u5B9E\u73B0\u3002\u8FD9\u9700\u8981\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u4E0D\u540C\u7684\u5206\u7EC4\u914D\u7F6E\uFF0C\u968F\u540E\u5728\u7A0B\u5E8F\u4E2D\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:'g.DB("\u5206\u7EC4\u540D\u79F0")'})," \u6765\u83B7\u53D6\u7279\u5B9A\u6570\u636E\u5E93\u7684\u5355\u4F8B\u5BF9\u8C61\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u8FD0\u884C\u65F6 ",(0,s.jsx)(n.code,{children:"DB.SetSchema"})," \u65B9\u6CD5\u5207\u6362\u5355\u4F8B\u5BF9\u8C61\u7684\u6570\u636E\u5E93\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u7531\u4E8E\u4FEE\u6539\u7684\u662F\u5355\u4F8B\u5BF9\u8C61\u7684\u6570\u636E\u5E93\u914D\u7F6E\uFF0C\u56E0\u6B64\u5F71\u54CD\u662F\u5168\u5C40\u7684\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'g.DB().SetSchema("user-schema")\ng.DB().SetSchema("order-schema")\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C ",(0,s.jsx)(n.code,{children:"Schema"})," \u65B9\u6CD5\u521B\u5EFA ",(0,s.jsx)(n.code,{children:"Schema"})," \u6570\u636E\u5E93\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7\u8BE5\u6570\u636E\u5E93\u5BF9\u8C61\u521B\u5EFA\u6A21\u578B\u5BF9\u8C61\u5E76\u6267\u884C\u540E\u7EED\u94FE\u5F0F\u64CD\u4F5C\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'g.DB().Schema("user-schema").Model("user").All()\ng.DB().Schema("order-schema").Model("order").All()\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4E5F\u53EF\u4EE5\u901A\u8FC7\u94FE\u5F0F\u64CD\u4F5C ",(0,s.jsx)(n.code,{children:"Model.Schema"})," \u65B9\u6CD5\u8BBE\u7F6E\u5F53\u524D\u94FE\u5F0F\u64CD\u4F5C\u5BF9\u5E94\u7684\u6570\u636E\u5E93\uFF0C\u6CA1\u6709\u8BBE\u7F6E\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u7684\u662F\u5176 ",(0,s.jsx)(n.code,{children:"DB"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"TX"})," \u9ED8\u8BA4\u8FDE\u63A5\u7684\u6570\u636E\u5E93\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'g.Model("user").Schema("user-schema").All()\ng.Model("order").Schema("order-schema").All()\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u6CE8\u610F\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\u7684\u5DEE\u522B\uFF0C\u524D\u4E00\u79CD\u65B9\u5F0F\u6765\u81EA\u4E8E ",(0,s.jsx)(n.code,{children:"Schema"})," \u5BF9\u8C61\u521B\u5EFA ",(0,s.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u540E\u6267\u884C\u64CD\u4F5C\uFF1B\u540E\u4E00\u79CD\u65B9\u5F0F\u662F\u901A\u8FC7\u4FEE\u6539\u5F53\u524D ",(0,s.jsx)(n.code,{children:"Model"})," \u5BF9\u8C61\u64CD\u4F5C\u7684\u6570\u636E\u5E93\u540D\u79F0\u8FBE\u5230\u5207\u6362\u6570\u636E\u5E93\u7684\u76EE\u7684\u3002"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6B64\u5916\uFF0C\u5047\u5982\u5F53\u524D\u6570\u636E\u5E93\u64CD\u4F5C\u914D\u7F6E\u7684\u7528\u6237\u6709\u6743\u9650\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u8868\u540D\u4E2D\u5E26\u6570\u636E\u5E93\u540D\u79F0\u5B9E\u73B0\u8DE8\u57DF\u64CD\u4F5C\uFF0C\u751A\u81F3\u8DE8\u57DF\u5173\u8054\u67E5\u8BE2\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `order`.`order` o LEFT JOIN `user`.`user` u ON (o.uid=u.id) WHERE u.id=1 LIMIT 1\ng.Model("order.order o").LeftJoin("user.user u", "o.uid=u.id").Where("u.id", 1).One()\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var r=o(667294);let s={},c=r.createContext(s);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);