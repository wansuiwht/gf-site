"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["66698"],{796900:function(e,t,o){o.r(t),o.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>l,assets:()=>i,toc:()=>a,frontMatter:()=>r});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u547D\u4EE4\u7BA1\u7406-gcmd","title":"\u547D\u4EE4\u7BA1\u7406-gcmd","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u547D\u4EE4\u7BA1\u7406\u7EC4\u4EF6gcmd\u8FDB\u884C\u547D\u4EE4\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u5982\u4F55\u521B\u5EFA\u548C\u7BA1\u7406\u547D\u4EE4\u3001\u6267\u884C\u547D\u4EE4\u4EE5\u53CA\u547D\u4EE4\u7684\u53C2\u6570\u914D\u7F6E\u3002\u662FGoFrame\u6838\u5FC3\u7EC4\u4EF6\u4E4B\u4E00\uFF0C\u9002\u7528\u4E8E\u5404\u79CD\u5F00\u53D1\u573A\u666F\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u547D\u4EE4\u7BA1\u7406-gcmd.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/docs/components/os-gcmd","permalink":"/en/docs/components/os-gcmd","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u547D\u4EE4\u7BA1\u7406-gcmd.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/os-gcmd","title":"\u547D\u4EE4\u7BA1\u7406-gcmd","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u7BA1\u7406","gcmd","\u6838\u5FC3\u7EC4\u4EF6","\u547D\u4EE4\u884C\u5DE5\u5177","\u5F00\u53D1\u6846\u67B6","\u547D\u4EE4\u6267\u884C","\u4EE3\u7801\u7BA1\u7406","\u8F6F\u4EF6\u5F00\u53D1"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u547D\u4EE4\u7BA1\u7406\u7EC4\u4EF6gcmd\u8FDB\u884C\u547D\u4EE4\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u5982\u4F55\u521B\u5EFA\u548C\u7BA1\u7406\u547D\u4EE4\u3001\u6267\u884C\u547D\u4EE4\u4EE5\u53CA\u547D\u4EE4\u7684\u53C2\u6570\u914D\u7F6E\u3002\u662FGoFrame\u6838\u5FC3\u7EC4\u4EF6\u4E4B\u4E00\uFF0C\u9002\u7528\u4E8E\u5404\u79CD\u5F00\u53D1\u573A\u666F\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u4E0A\u4E0B\u6587-gctx","permalink":"/en/docs/components/os-gctx"},"next":{"title":"\u65E5\u5FD7\u7BA1\u7406-glog","permalink":"/en/docs/components/os-glog"}}'),s=o("785893"),c=o("250065");let r={slug:"/docs/components/os-gcmd",title:"\u547D\u4EE4\u7BA1\u7406-gcmd",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u547D\u4EE4\u7BA1\u7406","gcmd","\u6838\u5FC3\u7EC4\u4EF6","\u547D\u4EE4\u884C\u5DE5\u5177","\u5F00\u53D1\u6846\u67B6","\u547D\u4EE4\u6267\u884C","\u4EE3\u7801\u7BA1\u7406","\u8F6F\u4EF6\u5F00\u53D1"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684\u547D\u4EE4\u7BA1\u7406\u7EC4\u4EF6gcmd\u8FDB\u884C\u547D\u4EE4\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u5982\u4F55\u521B\u5EFA\u548C\u7BA1\u7406\u547D\u4EE4\u3001\u6267\u884C\u547D\u4EE4\u4EE5\u53CA\u547D\u4EE4\u7684\u53C2\u6570\u914D\u7F6E\u3002\u662FGoFrame\u6838\u5FC3\u7EC4\u4EF6\u4E4B\u4E00\uFF0C\u9002\u7528\u4E8E\u5404\u79CD\u5F00\u53D1\u573A\u666F\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"},d=void 0,i={},a=[];function m(e){let t={a:"a",p:"p",...(0,c.a)(),...e.components};return(0,s.jsxs)(t.p,{children:["\u5177\u4F53\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,s.jsx)(t.a,{href:"/en/docs/core/gcmd",children:"\u547D\u4EE4\u7BA1\u7406"})]})}function l(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return d},a:function(){return r}});var n=o(667294);let s={},c=n.createContext(s);function r(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);