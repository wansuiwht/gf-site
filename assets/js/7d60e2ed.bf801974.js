"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[38146],{703690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount","title":"ORM\u67e5\u8be2-AllAndCount","description":"\u8be5\u65b9\u6cd5\u4ece v2.5.0 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u7528\u4e8e\u540c\u65f6\u67e5\u8be2\u6570\u636e\u8bb0\u5f55\u5217\u8868\u53ca\u603b\u6570\u91cf\uff0c\u4e00\u822c\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u4e2d\uff0c\u7b80\u5316\u5206\u9875\u67e5\u8be2\u903b\u8f91\u3002","source":"@site/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2","slug":"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllAndCount.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"ORM\u67e5\u8be2-AllAndCount","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u67e5\u8be2-All/One/Array/Value/Count","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-AllOneArrayValueCount"},"next":{"title":"ORM\u67e5\u8be2-Scan","permalink":"/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Scan"}}');var o=t(474848),l=t(28453);const s={title:"ORM\u67e5\u8be2-AllAndCount",sidebar_position:2,hide_title:!0},i=void 0,d={},u=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u4ece ",(0,o.jsx)(n.code,{children:"v2.5.0"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\uff0c\u7528\u4e8e\u540c\u65f6\u67e5\u8be2\u6570\u636e\u8bb0\u5f55\u5217\u8868\u53ca\u603b\u6570\u91cf\uff0c\u4e00\u822c\u7528\u4e8e\u5206\u9875\u67e5\u8be2\u573a\u666f\u4e2d\uff0c\u7b80\u5316\u5206\u9875\u67e5\u8be2\u903b\u8f91\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// AllAndCount retrieves all records and the total count of records from the model.\n// If useFieldForCount is true, it will use the fields specified in the model for counting;\n// otherwise, it will use a constant value of 1 for counting.\n// It returns the result as a slice of records, the total count of records, and an error if any.\n// The where parameter is an optional list of conditions to use when retrieving records.\n//\n// Example:\n//\n//    var model Model\n//    var result Result\n//    var count int\n//    where := []interface{}{"name = ?", "John"}\n//    result, count, err := model.AllAndCount(true)\n//    if err != nil {\n//        // Handle error.\n//    }\n//    fmt.Println(result, count)\nfunc (m *Model) AllAndCount(useFieldForCount bool) (result Result, totalCount int, err error)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u65b9\u6cd5\u5185\u90e8\u67e5\u8be2\u603b\u6570\u91cf\u65f6\uff0c\u5c06\u4f1a\u5ffd\u7565\u67e5\u8be2\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"Limit/Page"})," \u64cd\u4f5c\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(`uid`,`name`) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(true)\n\n// SELECT `uid`,`name` FROM `user` WHERE `status`=\'deleted\' LIMIT 0,10\n// SELECT COUNT(1) FROM `user` WHERE `status`=\'deleted\'\nall, count, err := Model("user").Fields("uid", "name").Where("status", "deleted").Limit(0, 10).AllAndCount(false)\n'})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(296540);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);