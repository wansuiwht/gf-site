"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[47339],{268841:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807","title":"\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807","description":"\u5df2\u652f\u6301\u76d1\u63a7\u6307\u6807\u7684GoFrame\u6846\u67b6\u7ec4\u4ef6\uff0c\u5305\u62ecHTTP Client\u548cHTTP Server\u3002\u8bfb\u8005\u53ef\u4ee5\u901a\u8fc7\u6587\u6863\u94fe\u63a5\u83b7\u53d6\u66f4\u8be6\u7ec6\u7684\u76d1\u63a7\u6307\u6807\u4fe1\u606f\u3002\u5176\u4ed6\u7ec4\u4ef6\u6307\u6807\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u9646\u7eed\u63d0\u4f9b\uff0c\u4fdd\u8bc1\u5bf9\u7cfb\u7edf\u6027\u80fd\u7684\u5168\u9762\u76d1\u6d4b\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807.md","sourceDirName":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66","slug":"/docs/obs/metrics-components","permalink":"/en/2.7.x/docs/obs/metrics-components","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/obs/metrics-components","title":"\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807","sidebar_position":6,"hide_title":true,"keywords":["\u76d1\u63a7\u544a\u8b66","\u7ec4\u4ef6\u6307\u6807","HTTP Client","HTTP Server","\u76d1\u63a7\u6307\u6807","GoFrame","GoFrame\u6846\u67b6","WEB\u670d\u52a1\u5f00\u53d1","\u9ad8\u7ea7\u7279\u6027","\u6027\u80fd\u76d1\u6d4b"],"description":"\u5df2\u652f\u6301\u76d1\u63a7\u6307\u6807\u7684GoFrame\u6846\u67b6\u7ec4\u4ef6\uff0c\u5305\u62ecHTTP Client\u548cHTTP Server\u3002\u8bfb\u8005\u53ef\u4ee5\u901a\u8fc7\u6587\u6863\u94fe\u63a5\u83b7\u53d6\u66f4\u8be6\u7ec6\u7684\u76d1\u63a7\u6307\u6807\u4fe1\u606f\u3002\u5176\u4ed6\u7ec4\u4ef6\u6307\u6807\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u9646\u7eed\u63d0\u4f9b\uff0c\u4fdd\u8bc1\u5bf9\u7cfb\u7edf\u6027\u80fd\u7684\u5168\u9762\u76d1\u6d4b\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807","permalink":"/en/2.7.x/docs/obs/metrics-builtin"},"next":{"title":"\u5e38\u89c1\u95ee\u9898(FAQ)","permalink":"/en/2.7.x/docs/faq"}}');var r=s(474848),o=s(28453);const i={slug:"/docs/obs/metrics-components",title:"\u76d1\u63a7\u544a\u8b66-\u7ec4\u4ef6\u6307\u6807",sidebar_position:6,hide_title:!0,keywords:["\u76d1\u63a7\u544a\u8b66","\u7ec4\u4ef6\u6307\u6807","HTTP Client","HTTP Server","\u76d1\u63a7\u6307\u6807","GoFrame","GoFrame\u6846\u67b6","WEB\u670d\u52a1\u5f00\u53d1","\u9ad8\u7ea7\u7279\u6027","\u6027\u80fd\u76d1\u6d4b"],description:"\u5df2\u652f\u6301\u76d1\u63a7\u6307\u6807\u7684GoFrame\u6846\u67b6\u7ec4\u4ef6\uff0c\u5305\u62ecHTTP Client\u548cHTTP Server\u3002\u8bfb\u8005\u53ef\u4ee5\u901a\u8fc7\u6587\u6863\u94fe\u63a5\u83b7\u53d6\u66f4\u8be6\u7ec6\u7684\u76d1\u63a7\u6307\u6807\u4fe1\u606f\u3002\u5176\u4ed6\u7ec4\u4ef6\u6307\u6807\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u9646\u7eed\u63d0\u4f9b\uff0c\u4fdd\u8bc1\u5bf9\u7cfb\u7edf\u6027\u80fd\u7684\u5168\u9762\u76d1\u6d4b\u3002"},c=void 0,d={},l=[];function a(e){const t={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u5df2\u652f\u6301\u76d1\u63a7\u6307\u6807\u7684\u7684\u6846\u67b6\u7ec4\u4ef6\uff0c\u5176\u4ed6\u7ec4\u4ef6\u6307\u6807\u5728\u540e\u7eed\u7248\u672c\u4e2d\u9646\u7eed\u63d0\u4f9b\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u7ec4\u4ef6"}),(0,r.jsx)(t.th,{children:"\u6587\u6863\u5730\u5740"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"HTTP Client"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/en/2.7.x/docs/web/http-client-metrics",children:"HTTPClient-\u76d1\u63a7\u6307\u6807"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"HTTP Server"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/en/2.7.x/docs/web/senior-server-metrics",children:"HTTPServer-\u76d1\u63a7\u6307\u6807"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(296540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);