"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["84816"],{815738:function(e,t,o){o.r(t),o.d(t,{metadata:()=>c,contentTitle:()=>i,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>r});var c=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u7F13\u5B58\u7BA1\u7406-gcache","title":"\u7F13\u5B58\u7BA1\u7406-gcache","description":"\u901A\u8FC7GoFrame\u6846\u67B6\u4E2D\u7684gcache\u6A21\u5757\u5B9E\u73B0\u7F13\u5B58\u7BA1\u7406\u3002\u4E86\u89E3\u5982\u4F55\u5728\u60A8\u7684Web\u5F00\u53D1\u9879\u76EE\u4E2D\u4F7F\u7528\u8BE5\u6A21\u5757\u4EE5\u63D0\u9AD8\u6027\u80FD\u548C\u6548\u7387\uFF0C\u5E76\u83B7\u53D6\u6709\u5173\u7F13\u5B58\u7B56\u7565\u3001\u914D\u7F6E\u548C\u6700\u4F73\u5B9E\u8DF5\u7684\u6DF1\u5165\u6307\u5BFC\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u7F13\u5B58\u7BA1\u7406-gcache.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/docs/components/os-gcache","permalink":"/en/docs/components/os-gcache","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u7F13\u5B58\u7BA1\u7406-gcache.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":8,"frontMatter":{"slug":"/docs/components/os-gcache","title":"\u7F13\u5B58\u7BA1\u7406-gcache","sidebar_position":8,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gcache","\u7F13\u5B58\u7BA1\u7406","Web\u5F00\u53D1","\u540E\u7AEF\u6846\u67B6","\u5F00\u6E90","\u9AD8\u6027\u80FD","Go\u8BED\u8A00","\u7EC4\u4EF6"],"description":"\u901A\u8FC7GoFrame\u6846\u67B6\u4E2D\u7684gcache\u6A21\u5757\u5B9E\u73B0\u7F13\u5B58\u7BA1\u7406\u3002\u4E86\u89E3\u5982\u4F55\u5728\u60A8\u7684Web\u5F00\u53D1\u9879\u76EE\u4E2D\u4F7F\u7528\u8BE5\u6A21\u5757\u4EE5\u63D0\u9AD8\u6027\u80FD\u548C\u6548\u7387\uFF0C\u5E76\u83B7\u53D6\u6709\u5173\u7F13\u5B58\u7B56\u7565\u3001\u914D\u7F6E\u548C\u6700\u4F73\u5B9E\u8DF5\u7684\u6DF1\u5165\u6307\u5BFC\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5B9A\u65F6\u4EFB\u52A1-gcron\u4E0Egtimer","permalink":"/en/docs/components/os-gcron-differ-with-gtimer"},"next":{"title":"\u6587\u4EF6\u7BA1\u7406-gfile","permalink":"/en/docs/components/os-gfile"}}'),n=o("785893"),s=o("250065");let r={slug:"/docs/components/os-gcache",title:"\u7F13\u5B58\u7BA1\u7406-gcache",sidebar_position:8,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gcache","\u7F13\u5B58\u7BA1\u7406","Web\u5F00\u53D1","\u540E\u7AEF\u6846\u67B6","\u5F00\u6E90","\u9AD8\u6027\u80FD","Go\u8BED\u8A00","\u7EC4\u4EF6"],description:"\u901A\u8FC7GoFrame\u6846\u67B6\u4E2D\u7684gcache\u6A21\u5757\u5B9E\u73B0\u7F13\u5B58\u7BA1\u7406\u3002\u4E86\u89E3\u5982\u4F55\u5728\u60A8\u7684Web\u5F00\u53D1\u9879\u76EE\u4E2D\u4F7F\u7528\u8BE5\u6A21\u5757\u4EE5\u63D0\u9AD8\u6027\u80FD\u548C\u6548\u7387\uFF0C\u5E76\u83B7\u53D6\u6709\u5173\u7F13\u5B58\u7B56\u7565\u3001\u914D\u7F6E\u548C\u6700\u4F73\u5B9E\u8DF5\u7684\u6DF1\u5165\u6307\u5BFC\u3002"},i=void 0,a={},d=[];function l(e){let t={a:"a",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(t.p,{children:["\u7F13\u5B58\u7BA1\u7406\u7531 ",(0,n.jsx)(t.code,{children:"gcache"})," \u6A21\u5757\u5B9E\u73B0\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,n.jsx)(t.a,{href:"/en/docs/core/gcache",children:"\u7F13\u5B58\u7BA1\u7406"})," \u7AE0\u8282\u3002"]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return r}});var c=o(667294);let n={},s=c.createContext(n);function r(e){let t=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);