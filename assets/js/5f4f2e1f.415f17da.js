"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[66194],{266225:(r,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u5904\u7406-gerror","title":"\u9519\u8bef\u5904\u7406-gerror","description":"GoFrame\u6846\u67b6\u4e0b\u7684gerror\u6a21\u5757\u7528\u4e8e\u9519\u8bef\u5904\u7406\u3002gerror\u6a21\u5757\u4f5c\u4e3aGoFrame\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u673a\u5236\uff0c\u63d0\u5347\u4e86\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u9002\u7528\u4e8eGo\u8bed\u8a00\u7684\u8f6f\u4ef6\u5f00\u53d1\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u5904\u7406-gerror.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406","slug":"/docs/components/error-gerror","permalink":"/2.7.x/docs/components/error-gerror","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u9519\u8bef\u7ba1\u7406/\u9519\u8bef\u5904\u7406-gerror.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/error-gerror","title":"\u9519\u8bef\u5904\u7406-gerror","sidebar_position":0,"hide_title":true,"description":"GoFrame\u6846\u67b6\u4e0b\u7684gerror\u6a21\u5757\u7528\u4e8e\u9519\u8bef\u5904\u7406\u3002gerror\u6a21\u5757\u4f5c\u4e3aGoFrame\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u673a\u5236\uff0c\u63d0\u5347\u4e86\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u9002\u7528\u4e8eGo\u8bed\u8a00\u7684\u8f6f\u4ef6\u5f00\u53d1\u3002","keywords":["GoFrame","GoFrame\u6846\u67b6","gerror","\u9519\u8bef\u5904\u7406","Go\u8bed\u8a00","\u7f16\u7a0b","\u8f6f\u4ef6\u5f00\u53d1","\u4ee3\u7801\u53ef\u8bfb\u6027","\u4ee3\u7801\u7ef4\u62a4","\u6838\u5fc3\u7ec4\u4ef6"]},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u7ba1\u7406","permalink":"/2.7.x/docs/components/error"},"next":{"title":"\u9519\u8bef\u7801\u63a5\u53e3-gcode","permalink":"/2.7.x/docs/components/error-gcode"}}');var n=o(474848),s=o(28453);const i={slug:"/docs/components/error-gerror",title:"\u9519\u8bef\u5904\u7406-gerror",sidebar_position:0,hide_title:!0,description:"GoFrame\u6846\u67b6\u4e0b\u7684gerror\u6a21\u5757\u7528\u4e8e\u9519\u8bef\u5904\u7406\u3002gerror\u6a21\u5757\u4f5c\u4e3aGoFrame\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u9519\u8bef\u5904\u7406\u673a\u5236\uff0c\u63d0\u5347\u4e86\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u9002\u7528\u4e8eGo\u8bed\u8a00\u7684\u8f6f\u4ef6\u5f00\u53d1\u3002",keywords:["GoFrame","GoFrame\u6846\u67b6","gerror","\u9519\u8bef\u5904\u7406","Go\u8bed\u8a00","\u7f16\u7a0b","\u8f6f\u4ef6\u5f00\u53d1","\u4ee3\u7801\u53ef\u8bfb\u6027","\u4ee3\u7801\u7ef4\u62a4","\u6838\u5fc3\u7ec4\u4ef6"]},c=void 0,d={},a=[];function p(r){const e={a:"a",code:"code",p:"p",...(0,s.R)(),...r.components};return(0,n.jsxs)(e.p,{children:["\u9519\u8bef\u5904\u7406\u529f\u80fd\u7531 ",(0,n.jsx)(e.code,{children:"gerror"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,n.jsx)(e.a,{href:"/2.7.x/docs/core/gerror",children:"\u9519\u8bef\u5904\u7406"})," \u7ae0\u8282\u3002"]})}function m(r={}){const{wrapper:e}={...(0,s.R)(),...r.components};return e?(0,n.jsx)(e,{...r,children:(0,n.jsx)(p,{...r})}):p(r)}},28453:(r,e,o)=>{o.d(e,{R:()=>i,x:()=>c});var t=o(296540);const n={},s=t.createContext(n);function i(r){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function c(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(n):r.components||n:i(r.components),t.createElement(s.Provider,{value:e},r.children)}}}]);