"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[86329],{989609:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406/\u6570\u636e\u5e93ORM-gdb","title":"\u6570\u636e\u5e93ORM-gdb","description":"GoFrame\u6846\u67b6\u4e2d\u7684gdb\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u662f\u5b9e\u73b0\u6570\u636e\u5e93ORM\u529f\u80fd\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u9ad8\u6548\u7684\u6570\u636e\u64cd\u4f5c\u4e0e\u7ba1\u7406\u3002\u5728GoFrame\u6846\u67b6\u4e2d\uff0cgdb\u626e\u6f14\u7740\u81f3\u5173\u91cd\u8981\u7684\u89d2\u8272\uff0c\u6709\u52a9\u4e8e\u7b80\u5316\u6570\u636e\u5e93\u7684\u4ea4\u4e92\u548c\u7ba1\u7406\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406/\u6570\u636e\u5e93ORM-gdb.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406","slug":"/docs/components/database-gdb","permalink":"/en/2.7.x/docs/components/database-gdb","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ba1\u7406/\u6570\u636e\u5e93ORM-gdb.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/database-gdb","title":"\u6570\u636e\u5e93ORM-gdb","sidebar_position":0,"hide_title":true,"description":"GoFrame\u6846\u67b6\u4e2d\u7684gdb\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u662f\u5b9e\u73b0\u6570\u636e\u5e93ORM\u529f\u80fd\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u9ad8\u6548\u7684\u6570\u636e\u64cd\u4f5c\u4e0e\u7ba1\u7406\u3002\u5728GoFrame\u6846\u67b6\u4e2d\uff0cgdb\u626e\u6f14\u7740\u81f3\u5173\u91cd\u8981\u7684\u89d2\u8272\uff0c\u6709\u52a9\u4e8e\u7b80\u5316\u6570\u636e\u5e93\u7684\u4ea4\u4e92\u548c\u7ba1\u7406\u3002","keywords":["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93","ORM","gdb\u6a21\u5757","\u6570\u636e\u4ea4\u4e92","\u6570\u636e\u7ba1\u7406","\u6570\u636e\u5e93\u64cd\u4f5c","\u6838\u5fc3\u7ec4\u4ef6","gdb"]},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u7ba1\u7406","permalink":"/en/2.7.x/docs/components/database"},"next":{"title":"Redis\u5ba2\u6237\u7aef-gredis","permalink":"/en/2.7.x/docs/components/database-gredis"}}');var n=o(474848),d=o(28453);const r={slug:"/docs/components/database-gdb",title:"\u6570\u636e\u5e93ORM-gdb",sidebar_position:0,hide_title:!0,description:"GoFrame\u6846\u67b6\u4e2d\u7684gdb\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u662f\u5b9e\u73b0\u6570\u636e\u5e93ORM\u529f\u80fd\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u8d1f\u8d23\u9ad8\u6548\u7684\u6570\u636e\u64cd\u4f5c\u4e0e\u7ba1\u7406\u3002\u5728GoFrame\u6846\u67b6\u4e2d\uff0cgdb\u626e\u6f14\u7740\u81f3\u5173\u91cd\u8981\u7684\u89d2\u8272\uff0c\u6709\u52a9\u4e8e\u7b80\u5316\u6570\u636e\u5e93\u7684\u4ea4\u4e92\u548c\u7ba1\u7406\u3002",keywords:["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u5e93","ORM","gdb\u6a21\u5757","\u6570\u636e\u4ea4\u4e92","\u6570\u636e\u7ba1\u7406","\u6570\u636e\u5e93\u64cd\u4f5c","\u6838\u5fc3\u7ec4\u4ef6","gdb"]},a=void 0,i={},c=[];function b(e){const t={a:"a",code:"code",p:"p",...(0,d.R)(),...e.components};return(0,n.jsxs)(t.p,{children:["\u6570\u636e\u5e93 ",(0,n.jsx)(t.code,{children:"ORM"})," \u529f\u80fd\u7531 ",(0,n.jsx)(t.code,{children:"gdb"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,n.jsx)(t.a,{href:"/en/2.7.x/docs/core/gdb",children:"\u6570\u636e\u5e93ORM\ud83d\udd25"})," \u7ae0\u8282\u3002"]})}function p(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var s=o(296540);const n={},d=s.createContext(n);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);