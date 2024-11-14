"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[22043],{839118:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684ORM\u94fe\u5f0f\u64cd\u4f5c\u6765\u83b7\u53d6\u6570\u636e\u5e93\u8868\u5b57\u6bb5\u7684\u6280\u5de7\uff0c\u5305\u62ec\u4f7f\u7528FieldsStr\u548cFieldsExStr\u65b9\u6cd5\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u5b57\u6bb5\u53ca\u6392\u9664\u5b57\u6bb5\u7684\u7528\u6cd5\uff0c\u652f\u6301\u5b57\u6bb5\u524d\u7f00\u81ea\u5b9a\u4e49\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u53ef\u8bfb\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c","slug":"/docs/core/gdb-chaining-fields-retrieving","permalink":"/en/2.7.x/docs/core/gdb-chaining-fields-retrieving","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/core/gdb-chaining-fields-retrieving","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6","sidebar_position":7,"hide_title":true,"keywords":["ORM","\u94fe\u5f0f\u64cd\u4f5c","\u5b57\u6bb5\u83b7\u53d6","FieldsStr","FieldsExStr","GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93\u5b57\u6bb5","\u5b57\u6bb5\u524d\u7f00","\u5b57\u6bb5\u6392\u9664"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684ORM\u94fe\u5f0f\u64cd\u4f5c\u6765\u83b7\u53d6\u6570\u636e\u5e93\u8868\u5b57\u6bb5\u7684\u6280\u5de7\uff0c\u5305\u62ec\u4f7f\u7528FieldsStr\u548cFieldsExStr\u65b9\u6cd5\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u5b57\u6bb5\u53ca\u6392\u9664\u5b57\u6bb5\u7684\u7528\u6cd5\uff0c\u652f\u6301\u5b57\u6bb5\u524d\u7f00\u81ea\u5b9a\u4e49\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u53ef\u8bfb\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u8fc7\u6ee4","permalink":"/en/2.7.x/docs/core/gdb-chaining-fields-filtering"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u4e8b\u52a1\u5904\u7406","permalink":"/en/2.7.x/docs/core/gdb-chaining-transaction"}}');var d=i(474848),r=i(28453);const l={slug:"/docs/core/gdb-chaining-fields-retrieving",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u5b57\u6bb5\u83b7\u53d6",sidebar_position:7,hide_title:!0,keywords:["ORM","\u94fe\u5f0f\u64cd\u4f5c","\u5b57\u6bb5\u83b7\u53d6","FieldsStr","FieldsExStr","GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93\u5b57\u6bb5","\u5b57\u6bb5\u524d\u7f00","\u5b57\u6bb5\u6392\u9664"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684ORM\u94fe\u5f0f\u64cd\u4f5c\u6765\u83b7\u53d6\u6570\u636e\u5e93\u8868\u5b57\u6bb5\u7684\u6280\u5de7\uff0c\u5305\u62ec\u4f7f\u7528FieldsStr\u548cFieldsExStr\u65b9\u6cd5\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u5b57\u6bb5\u53ca\u6392\u9664\u5b57\u6bb5\u7684\u7528\u6cd5\uff0c\u652f\u6301\u5b57\u6bb5\u524d\u7f00\u81ea\u5b9a\u4e49\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u548c\u4ee3\u7801\u53ef\u8bfb\u6027\u3002"},c=void 0,o={},t=[{value:"<code>FieldsStr/FieldsExStr</code> \u5b57\u6bb5\u83b7\u53d6",id:"fieldsstrfieldsexstr-\u5b57\u6bb5\u83b7\u53d6",level:2},{value:"<code>FieldsStr</code> \u793a\u4f8b",id:"fieldsstr-\u793a\u4f8b",level:3},{value:"<code>FieldsExStr</code> \u793a\u4f8b",id:"fieldsexstr-\u793a\u4f8b",level:3}];function a(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h2,{id:"fieldsstrfieldsexstr-\u5b57\u6bb5\u83b7\u53d6",children:[(0,d.jsx)(s.code,{children:"FieldsStr/FieldsExStr"})," \u5b57\u6bb5\u83b7\u53d6"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"FieldsStr"}),' \u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u5b57\u6bb5\uff0c\u5e76\u53ef\u7ed9\u5b9a\u5b57\u6bb5\u524d\u7f00\uff0c\u5b57\u6bb5\u4e4b\u95f4\u4f7f\u7528" ',(0,d.jsx)(s.code,{children:","}),'"\u7b26\u53f7\u8fde\u63a5\u6210\u5b57\u7b26\u4e32\u8fd4\u56de\uff1b']}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"FieldsExStr"}),' \u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u8868\u4e2d\u4f8b\u5916\u7684\u5b57\u6bb5\uff0c\u5e76\u53ef\u7ed9\u5b9a\u5b57\u6bb5\u524d\u7f00\uff0c\u5b57\u6bb5\u4e4b\u95f4\u4f7f\u7528" ',(0,d.jsx)(s.code,{children:","}),'"\u7b26\u53f7\u8fde\u63a5\u6210\u5b57\u7b26\u4e32\u8fd4\u56de\uff1b']}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"fieldsstr-\u793a\u4f8b",children:[(0,d.jsx)(s.code,{children:"FieldsStr"})," \u793a\u4f8b"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u5047\u5982 ",(0,d.jsx)(s.code,{children:"user"})," \u8868\u67094\u4e2a\u5b57\u6bb5 ",(0,d.jsx)(s.code,{children:"uid"}),", ",(0,d.jsx)(s.code,{children:"nickname"}),", ",(0,d.jsx)(s.code,{children:"passport"}),", ",(0,d.jsx)(s.code,{children:"password"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67e5\u8be2\u5b57\u6bb5"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// uid,nickname,passport,password\ng.Model("user").FieldsStr()\n'})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67e5\u8be2\u5b57\u6bb5\u7ed9\u6307\u5b9a\u524d\u7f00"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// gf_uid,gf_nickname,gf_passport,gf_password\ng.Model("user").FieldsStr("gf_")\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.h3,{id:"fieldsexstr-\u793a\u4f8b",children:[(0,d.jsx)(s.code,{children:"FieldsExStr"})," \u793a\u4f8b"]}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["\u5047\u5982 ",(0,d.jsx)(s.code,{children:"user"})," \u8868\u67094\u4e2a\u5b57\u6bb5 ",(0,d.jsx)(s.code,{children:"uid"}),", ",(0,d.jsx)(s.code,{children:"nickname"}),", ",(0,d.jsx)(s.code,{children:"passport"}),", ",(0,d.jsx)(s.code,{children:"password"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67e5\u8be2\u5b57\u6bb5\u6392\u9664"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// uid,nickname\ng.Model("user").FieldsExStr("passport, password")\n'})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsx)(s.p,{children:"\u67e5\u8be2\u5b57\u6bb5\u6392\u9664\u5e76\u7ed9\u5b9a\u524d\u7f00"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-go",children:'// gf_uid,gf_nickname\ng.Model("user").FieldsExStr("passport, password", "gf_")\n'})}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>c});var n=i(296540);const d={},r=n.createContext(d);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);