"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[54201],{933485:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Exist","title":"ORM\u67e5\u8be2-Exist","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684Exist\u65b9\u6cd5\u80fd\u591f\u6709\u6548\u5224\u65ad\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u7684\u6570\u636e\u662f\u5426\u5b58\u5728\u800c\u65e0\u9700\u83b7\u53d6\u5b8c\u6574\u6570\u636e\u7ed3\u679c\u3002\u914d\u5408MySQL\u8868\u7ed3\u6784\uff0c\u901a\u8fc7SELECT 1\u65b9\u5f0f\u63d0\u5347\u67e5\u8be2\u6548\u7387\uff0c\u964d\u4f4e\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u4f20\u8f93\u3002\u672c\u6587\u5305\u542b\u65b9\u6cd5\u5b9a\u4e49\u3001MySQL\u8868\u7ed3\u6784\u793a\u4f8b\u53ca\u5b9e\u9645\u4f7f\u7528\u60c5\u5883\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4f18\u5316\u6a21\u578b\u67e5\u8be2\u73af\u8282\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Exist.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2","slug":"/docs/core/gdb-chaining-query-exist","permalink":"/docs/core/gdb-chaining-query-exist","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Exist.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731502829000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-exist","title":"ORM\u67e5\u8be2-Exist","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM\u67e5\u8be2","Exist\u65b9\u6cd5","\u6570\u636e\u68c0\u7d22","MySQL\u8868\u7ed3\u6784","\u6a21\u578b\u67e5\u8be2","Where\u6761\u4ef6","Go\u8bed\u8a00","\u67e5\u8be2\u6548\u7387"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684Exist\u65b9\u6cd5\u80fd\u591f\u6709\u6548\u5224\u65ad\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u7684\u6570\u636e\u662f\u5426\u5b58\u5728\u800c\u65e0\u9700\u83b7\u53d6\u5b8c\u6574\u6570\u636e\u7ed3\u679c\u3002\u914d\u5408MySQL\u8868\u7ed3\u6784\uff0c\u901a\u8fc7SELECT 1\u65b9\u5f0f\u63d0\u5347\u67e5\u8be2\u6548\u7387\uff0c\u964d\u4f4e\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u4f20\u8f93\u3002\u672c\u6587\u5305\u542b\u65b9\u6cd5\u5b9a\u4e49\u3001MySQL\u8868\u7ed3\u6784\u793a\u4f8b\u53ca\u5b9e\u9645\u4f7f\u7528\u60c5\u5883\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4f18\u5316\u6a21\u578b\u67e5\u8be2\u73af\u8282\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67e5\u8be2-AllAndCount","permalink":"/docs/core/gdb-chaining-query-all-and-count"},"next":{"title":"ORM\u67e5\u8be2-Scan","permalink":"/docs/core/gdb-chaining-query-scan"}}');var t=s(474848),r=s(28453);const o={slug:"/docs/core/gdb-chaining-query-exist",title:"ORM\u67e5\u8be2-Exist",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM\u67e5\u8be2","Exist\u65b9\u6cd5","\u6570\u636e\u68c0\u7d22","MySQL\u8868\u7ed3\u6784","\u6a21\u578b\u67e5\u8be2","Where\u6761\u4ef6","Go\u8bed\u8a00","\u67e5\u8be2\u6548\u7387"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u7684Exist\u65b9\u6cd5\u80fd\u591f\u6709\u6548\u5224\u65ad\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u7684\u6570\u636e\u662f\u5426\u5b58\u5728\u800c\u65e0\u9700\u83b7\u53d6\u5b8c\u6574\u6570\u636e\u7ed3\u679c\u3002\u914d\u5408MySQL\u8868\u7ed3\u6784\uff0c\u901a\u8fc7SELECT 1\u65b9\u5f0f\u63d0\u5347\u67e5\u8be2\u6548\u7387\uff0c\u964d\u4f4e\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u4f20\u8f93\u3002\u672c\u6587\u5305\u542b\u65b9\u6cd5\u5b9a\u4e49\u3001MySQL\u8868\u7ed3\u6784\u793a\u4f8b\u53ca\u5b9e\u9645\u4f7f\u7528\u60c5\u5883\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4f18\u5316\u6a21\u578b\u67e5\u8be2\u73af\u8282\u3002"},c=void 0,d={},l=[{value:"\u793a\u4f8bSQL",id:"\u793a\u4f8bsql",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Exist"}),"\u65b9\u6cd5\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u68c0\u7d22\u6240\u7ed9\u7684",(0,t.jsx)(n.code,{children:"Where"}),"\u6761\u4ef6\u6570\u636e\u662f\u5426\u5b58\u5728\uff0c\u800c\u4e0d\u662f\u67e5\u8be2\u5b8c\u6574\u7684\u6570\u636e\u7ed3\u679c\u540e\u8fd4\u56de\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func (m *Model) Exist(where ...interface{}) (bool, error)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8bsql",children:"\u793a\u4f8bSQL"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u662f\u540e\u7eed\u793a\u4f8b\u4ee3\u7801\u4e2d\u7528\u5230\u7684",(0,t.jsx)(n.code,{children:"MySQL"}),"\u8868\u7ed3\u6784\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `user` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  `name` varchar(45) NOT NULL\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u8be2\u5b8c\u6574\u6570\u636e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE (id > 1) AND `deleted_at`=0\ng.Model("user").Where("id > ?", 1).All()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"Exist"}),"\u65b9\u6cd5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// SELECT 1 FROM `user` WHERE (id > 1) AND `deleted_at`=0 LIMIT 1\ng.Model("user").Where("id > ?", 1).Exist()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u5e95\u5c42\u662f\u4f7f\u7528",(0,t.jsx)(n.code,{children:"SELECT 1"}),"\u6765\u67e5\u8be2\u7ed3\u679c\uff0c\u5373\u5982\u679c\u7ed3\u679c\u5b58\u5728\u5219\u8fd4\u56de",(0,t.jsx)(n.code,{children:"1"}),"\uff0c\u5426\u5219\u4ec0\u4e48\u4e5f\u4e0d\u8fd4\u56de\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(296540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);