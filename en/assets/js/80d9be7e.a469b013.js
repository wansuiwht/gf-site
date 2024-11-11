"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[64769],{643109:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65e5\u5fd7\u7ba1\u7406-glog","title":"\u65e5\u5fd7\u7ba1\u7406-glog","description":"\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u7684glog\u6a21\u5757\u5b9e\u73b0\u65e5\u5fd7\u7ba1\u7406\u529f\u80fd\uff0c\u5e2e\u52a9\u7528\u6237\u638c\u63e1\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u9ad8\u6548\u65e5\u5fd7\u5904\u7406\u7684\u65b9\u6cd5\u4e0e\u6280\u5de7\u3002\u8be6\u7ec6\u4e86\u89e3\u6a21\u5757\u5316\u8bbe\u8ba1\u4e0e\u65e5\u5fd7\u8bb0\u5f55\u7684\u4f7f\u7528\u65b9\u5f0f\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65e5\u5fd7\u7ba1\u7406-glog.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/docs/components/os-glog","permalink":"/en/docs/components/os-glog","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65e5\u5fd7\u7ba1\u7406-glog.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/components/os-glog","title":"\u65e5\u5fd7\u7ba1\u7406-glog","sidebar_position":5,"hide_title":true,"description":"\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u7684glog\u6a21\u5757\u5b9e\u73b0\u65e5\u5fd7\u7ba1\u7406\u529f\u80fd\uff0c\u5e2e\u52a9\u7528\u6237\u638c\u63e1\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u9ad8\u6548\u65e5\u5fd7\u5904\u7406\u7684\u65b9\u6cd5\u4e0e\u6280\u5de7\u3002\u8be6\u7ec6\u4e86\u89e3\u6a21\u5757\u5316\u8bbe\u8ba1\u4e0e\u65e5\u5fd7\u8bb0\u5f55\u7684\u4f7f\u7528\u65b9\u5f0f\u3002","keywords":["GoFrame","GoFrame\u6846\u67b6","glog\u6a21\u5757","\u65e5\u5fd7\u7ba1\u7406","\u65e5\u5fd7\u529f\u80fd","\u65e5\u5fd7\u7ec4\u4ef6","\u65e5\u5fd7\u8bb0\u5f55","\u65e5\u5fd7\u5904\u7406","\u5f00\u53d1\u6846\u67b6","\u6a21\u5757\u5316\u8bbe\u8ba1"]},"sidebar":"mainSidebar","previous":{"title":"\u547d\u4ee4\u7ba1\u7406-gcmd","permalink":"/en/docs/components/os-gcmd"},"next":{"title":"\u65f6\u95f4\u7ba1\u7406-gtime","permalink":"/en/docs/components/os-gtime"}}');var s=t(474848),r=t(28453);const c={slug:"/docs/components/os-glog",title:"\u65e5\u5fd7\u7ba1\u7406-glog",sidebar_position:5,hide_title:!0,description:"\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u7684glog\u6a21\u5757\u5b9e\u73b0\u65e5\u5fd7\u7ba1\u7406\u529f\u80fd\uff0c\u5e2e\u52a9\u7528\u6237\u638c\u63e1\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u9ad8\u6548\u65e5\u5fd7\u5904\u7406\u7684\u65b9\u6cd5\u4e0e\u6280\u5de7\u3002\u8be6\u7ec6\u4e86\u89e3\u6a21\u5757\u5316\u8bbe\u8ba1\u4e0e\u65e5\u5fd7\u8bb0\u5f55\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",keywords:["GoFrame","GoFrame\u6846\u67b6","glog\u6a21\u5757","\u65e5\u5fd7\u7ba1\u7406","\u65e5\u5fd7\u529f\u80fd","\u65e5\u5fd7\u7ec4\u4ef6","\u65e5\u5fd7\u8bb0\u5f55","\u65e5\u5fd7\u5904\u7406","\u5f00\u53d1\u6846\u67b6","\u6a21\u5757\u5316\u8bbe\u8ba1"]},i=void 0,d={},a=[];function l(o){const e={a:"a",code:"code",p:"p",...(0,r.R)(),...o.components};return(0,s.jsxs)(e.p,{children:["\u65e5\u5fd7\u7ba1\u7406\u529f\u80fd\u7531 ",(0,s.jsx)(e.code,{children:"glog"})," \u6a21\u5757\u5b9e\u73b0\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,s.jsx)(e.a,{href:"/en/docs/core/glog",children:"\u65e5\u5fd7\u7ec4\u4ef6"})," \u7ae0\u8282\u3002"]})}function g(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,s.jsx)(e,{...o,children:(0,s.jsx)(l,{...o})}):l(o)}},28453:(o,e,t)=>{t.d(e,{R:()=>c,x:()=>i});var n=t(296540);const s={},r=n.createContext(s);function c(o){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function i(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:c(o.components),n.createElement(r.Provider,{value:e},o.children)}}}]);