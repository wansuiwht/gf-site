"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[3422],{894825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6/\u56fd\u9645\u5316-gi18n","title":"\u56fd\u9645\u5316-gi18n","description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7f51\u7ad9\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u56fd\u9645\u5316\u652f\u6301\u6a21\u5757gi18n\uff0c\u65e8\u5728\u7b80\u5316Web\u5e94\u7528\u7a0b\u5e8f\u7684\u591a\u8bed\u8a00\u5b9e\u73b0\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u9ad8\u6548\u5730\u6ee1\u8db3\u5168\u7403\u7528\u6237\u7684\u8bed\u8a00\u9700\u6c42\uff0c\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c\u548c\u4ea7\u54c1\u7684\u53ef\u63a5\u53d7\u5ea6\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6/\u56fd\u9645\u5316-gi18n.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6","slug":"/docs/components/i18n-gi18n","permalink":"/2.7.x/docs/components/i18n-gi18n","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/I18N\u7ec4\u4ef6/\u56fd\u9645\u5316-gi18n.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/i18n-gi18n","title":"\u56fd\u9645\u5316-gi18n","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u56fd\u9645\u5316","i18n","gi18n","\u591a\u8bed\u8a00\u652f\u6301","Web\u5f00\u53d1","\u6846\u67b6","\u8f6f\u4ef6\u672c\u5730\u5316","\u5f00\u6e90"],"description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7f51\u7ad9\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u56fd\u9645\u5316\u652f\u6301\u6a21\u5757gi18n\uff0c\u65e8\u5728\u7b80\u5316Web\u5e94\u7528\u7a0b\u5e8f\u7684\u591a\u8bed\u8a00\u5b9e\u73b0\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u9ad8\u6548\u5730\u6ee1\u8db3\u5168\u7403\u7528\u6237\u7684\u8bed\u8a00\u9700\u6c42\uff0c\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c\u548c\u4ea7\u54c1\u7684\u53ef\u63a5\u53d7\u5ea6\u3002"},"sidebar":"mainSidebar","previous":{"title":"I18N\u7ec4\u4ef6","permalink":"/2.7.x/docs/components/i18n"},"next":{"title":"NoSQL Redis","permalink":"/2.7.x/docs/components/contrib-nosql-redis"}}');var i=t(474848),s=t(28453);const r={slug:"/docs/components/i18n-gi18n",title:"\u56fd\u9645\u5316-gi18n",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u56fd\u9645\u5316","i18n","gi18n","\u591a\u8bed\u8a00\u652f\u6301","Web\u5f00\u53d1","\u6846\u67b6","\u8f6f\u4ef6\u672c\u5730\u5316","\u5f00\u6e90"],description:"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u7f51\u7ad9\u65f6\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u56fd\u9645\u5316\u652f\u6301\u6a21\u5757gi18n\uff0c\u65e8\u5728\u7b80\u5316Web\u5e94\u7528\u7a0b\u5e8f\u7684\u591a\u8bed\u8a00\u5b9e\u73b0\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u9ad8\u6548\u5730\u6ee1\u8db3\u5168\u7403\u7528\u6237\u7684\u8bed\u8a00\u9700\u6c42\uff0c\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c\u548c\u4ea7\u54c1\u7684\u53ef\u63a5\u53d7\u5ea6\u3002"},c=void 0,d={},a=[];function p(e){const n={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(n.p,{children:["\u8be6\u60c5\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,i.jsx)(n.a,{href:"/2.7.x/docs/core/gi18n",children:"I18N\u56fd\u9645\u5316"})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(296540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);