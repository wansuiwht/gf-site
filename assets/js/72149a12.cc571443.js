"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[15092],{494873:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u6570\u636e\u6821\u9a8c-gvalid","title":"\u6570\u636e\u6821\u9a8c-gvalid","description":"GoFrame\u6846\u67b6\u4e2d\u7684gvalid\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u662f\u5b9e\u73b0\u6570\u636e\u548c\u8868\u5355\u6821\u9a8c\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002gvalid\u5728GoFrame\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u89d2\u8272\uff0c\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6570\u636e\u9a8c\u8bc1\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u591a\u79cd\u5e94\u7528\u573a\u666f\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u6570\u636e\u6821\u9a8c-gvalid.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177","slug":"/docs/components/util-gvalid","permalink":"/docs/components/util-gvalid","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u6570\u636e\u6821\u9a8c-gvalid.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/util-gvalid","title":"\u6570\u636e\u6821\u9a8c-gvalid","sidebar_position":4,"hide_title":true,"description":"GoFrame\u6846\u67b6\u4e2d\u7684gvalid\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u662f\u5b9e\u73b0\u6570\u636e\u548c\u8868\u5355\u6821\u9a8c\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002gvalid\u5728GoFrame\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u89d2\u8272\uff0c\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6570\u636e\u9a8c\u8bc1\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u591a\u79cd\u5e94\u7528\u573a\u666f\u3002","keywords":["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u6821\u9a8c","gvalid\u6a21\u5757","\u6570\u636e\u9a8c\u8bc1","\u8868\u5355\u6821\u9a8c","\u6838\u5fc3\u7ec4\u4ef6","gvalid\u4f7f\u7528","GoFrame\u6570\u636e\u6821\u9a8c","\u8868\u5355\u9a8c\u8bc1\u5de5\u5177"]},"sidebar":"mainSidebar","previous":{"title":"\u7c7b\u578b\u8f6c\u6362-gconv","permalink":"/docs/components/util-gconv"},"next":{"title":"\u5206\u9875\u7ba1\u7406-gpage","permalink":"/docs/components/util-gpage"}}');var n=o(474848),s=o(28453);const a={slug:"/docs/components/util-gvalid",title:"\u6570\u636e\u6821\u9a8c-gvalid",sidebar_position:4,hide_title:!0,description:"GoFrame\u6846\u67b6\u4e2d\u7684gvalid\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u662f\u5b9e\u73b0\u6570\u636e\u548c\u8868\u5355\u6821\u9a8c\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002gvalid\u5728GoFrame\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u89d2\u8272\uff0c\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6570\u636e\u9a8c\u8bc1\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u591a\u79cd\u5e94\u7528\u573a\u666f\u3002",keywords:["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u6821\u9a8c","gvalid\u6a21\u5757","\u6570\u636e\u9a8c\u8bc1","\u8868\u5355\u6821\u9a8c","\u6838\u5fc3\u7ec4\u4ef6","gvalid\u4f7f\u7528","GoFrame\u6570\u636e\u6821\u9a8c","\u8868\u5355\u9a8c\u8bc1\u5de5\u5177"]},d=void 0,r={},c=[];function l(e){const t={a:"a",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(t.p,{children:["\u6570\u636e/\u8868\u5355\u6821\u9a8c\u7531 ",(0,n.jsx)(t.code,{children:"gvalid"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,n.jsx)(t.a,{href:"/docs/core/gvalid",children:"\u6570\u636e\u6821\u9a8c"})," \u7ae0\u8282\u3002"]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>d});var i=o(296540);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);