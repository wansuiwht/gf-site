"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[3608],{411997:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllOneArrayValueCount","title":"ORM\u67e5\u8be2-All/One/Array/Value/Count","description":"All/One/Array/Value/Count","source":"@site/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllOneArrayValueCount.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllOneArrayValueCount","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllOneArrayValueCount","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllOneArrayValueCount.md","tags":[],"version":"2.1.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"ORM\u67e5\u8be2-All/One/Array/Value/Count","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u67e5\u8be2-Where/WhereOr/WhereNot","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-WhereWhereOrWhereNot"},"next":{"title":"ORM\u67e5\u8be2-Scan","permalink":"/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Scan"}}');var o=r(474848),d=r(28453);const i={title:"ORM\u67e5\u8be2-All/One/Array/Value/Count",sidebar_position:1,hide_title:!0},s=void 0,c={},t=[{value:"<code>All/One/Array/Value/Count</code>",id:"allonearrayvaluecount",level:2},{value:"<code>Find*</code> \u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2",id:"find-\u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"allonearrayvaluecount",children:(0,o.jsx)(n.code,{children:"All/One/Array/Value/Count"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u4e94\u4e2a\u65b9\u6cd5\u662f\u6570\u636e\u67e5\u8be2\u6bd4\u8f83\u5e38\u7528\u7684\u65b9\u6cd5\uff0c\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func (m *Model) All(where ...interface{} (Result, error)\nfunc (m *Model) One(where ...interface{}) (Record, error)\nfunc (m *Model) Array(fieldsAndWhere ...interface{}) ([]Value, error)\nfunc (m *Model) Value(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) Count(where ...interface{}) (int, error)\nfunc (m *Model) CountColumn(column string) (int, error)\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"All"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u591a\u6761\u8bb0\u5f55\u7684\u5217\u8868/\u6570\u7ec4\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"One"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u5355\u6761\u8bb0\u5f55\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Array"})," \u7528\u4e8e\u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\u5217\u7684\u6570\u636e\uff0c\u8fd4\u56de\u6570\u7ec4\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Value"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u4e00\u4e2a\u5b57\u6bb5\u503c\uff0c\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,o.jsx)(n.code,{children:"Fields"})," \u65b9\u6cd5\u4f7f\u7528\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Count"})," \u7528\u4e8e\u67e5\u8be2\u5e76\u8fd4\u56de\u8bb0\u5f55\u6570\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u770b\u5f97\u5230\u8fd9\u56db\u4e2a\u65b9\u6cd5\u5b9a\u4e49\u4e2d\u4e5f\u652f\u6301\u6761\u4ef6\u53c2\u6570\u7684\u76f4\u63a5\u8f93\u5165\uff0c\u53c2\u6570\u7c7b\u578b\u4e0e ",(0,o.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u4e00\u81f4\u3002\u4f46\u9700\u8981\u6ce8\u610f\uff0c\u5176\u4e2d ",(0,o.jsx)(n.code,{children:"Array"})," \u548c ",(0,o.jsx)(n.code,{children:"Value"})," \u65b9\u6cd5\u7684\u53c2\u6570\u4e2d\u81f3\u5c11\u5e94\u8be5\u8f93\u5165\u5b57\u6bb5\u53c2\u6570\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `user` WHERE `score`>60\nModel("user").Where("score>?", 60).All()\n\n// SELECT * FROM `user` WHERE `score`>60 LIMIT 1\nModel("user").Where("score>?", 60).One()\n\n// SELECT `name` FROM `user` WHERE `score`>60\nModel("user").Fields("name").Where("score>?", 60).Array()\n\n// SELECT `name` FROM `user` WHERE `uid`=1 LIMIT 1\nModel("user").Fields("name").Where("uid", 1).Value()\n\n// SELECT COUNT(1) FROM `user` WHERE `status` IN(1,2,3)\nModel("user").Where("status", g.Slice{1,2,3}).Count()\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"find-\u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2",children:[(0,o.jsx)(n.code,{children:"Find*"})," \u652f\u6301\u4e3b\u952e\u6761\u4ef6\u7684\u6570\u636e\u67e5\u8be2"]}),"\n",(0,o.jsx)(n.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"func (m *Model) FindAll(where ...interface{}) (Result, error)\nfunc (m *Model) FindOne(where ...interface{}) (Record, error)\nfunc (m *Model) FindArray(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) FindValue(fieldsAndWhere ...interface{}) (Value, error)\nfunc (m *Model) FindCount(where ...interface{}) (int, error)\nfunc (m *Model) FindScan(pointer interface{}, where ...interface{}) error\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Find*"})," \u65b9\u6cd5\u5305\u542b\uff1a ",(0,o.jsx)(n.code,{children:"FindAll/FindOne/FineValue/FindCount/FindScan"}),"\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4e0e ",(0,o.jsx)(n.code,{children:"All/One/Array/Value/Count/Scan"})," \u65b9\u6cd5\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5f53\u65b9\u6cd5\u76f4\u63a5\u7ed9\u5b9a\u6761\u4ef6\u53c2\u6570\u65f6\uff0c\u524d\u8005\u7684\u6548\u679c\u4e0e ",(0,o.jsx)(n.code,{children:"WherePri"})," \u65b9\u6cd5\u4e00\u81f4\uff1b\u800c\u540e\u8005\u7684\u6548\u679c\u4e0e ",(0,o.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u4e00\u81f4\u3002\u4e5f\u5c31\u662f\u8bf4 ",(0,o.jsx)(n.code,{children:"Find*"})," \u65b9\u6cd5\u7684\u6761\u4ef6\u53c2\u6570\u652f\u6301\u667a\u80fd\u4e3b\u952e\u8bc6\u522b\u7279\u6027\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT * FROM `scores` WHERE `id`=1\nModel("scores").FindAll(1)\n\n// SELECT * FROM `scores` WHERE `id`=1 LIMIT 1\nModel("scores").FindOne(1)\n\n// SELECT `name` FROM `scores` WHERE `id`=1\nModel("scores").FindArray("name", 1)\n\n// SELECT `name` FROM `scores` WHERE `id`=1 LIMIT 1\nModel("user").FindValue("name", 1)\n\n// SELECT COUNT(1) FROM `user`  WHERE `id`=1\nModel("user").FindCount(1)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5173\u4e8e ",(0,o.jsx)(n.code,{children:"Scan/FindScan"})," \u65b9\u6cd5\u4ecb\u7ecd\uff0c\u8bf7\u67e5\u770b\u540e\u7eed\u7ae0\u8282\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var l=r(296540);const o={},d=l.createContext(o);function i(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);