"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["27295"],{928786:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>r});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20","title":"\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u7684\u57FA\u672C\u6B65\u9AA4\u548C\u65B9\u6CD5\u3002\u501F\u52A9HTTPClient\u7AE0\u8282\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6DF1\u5165\u7406\u89E3\u548C\u638C\u63E1\u5982\u4F55\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42\uFF0C\u4EE5\u786E\u4FDD\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u6709\u6548\u5730\u7BA1\u7406\u6587\u4EF6\u6570\u636E\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165","slug":"/docs/web/request-file-uploading","permalink":"/en/2.7.x/docs/web/request-file-uploading","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u8BF7\u6C42\u8F93\u5165/\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/web/request-file-uploading","title":"\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20","sidebar_position":7,"hide_title":true,"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u7684\u57FA\u672C\u6B65\u9AA4\u548C\u65B9\u6CD5\u3002\u501F\u52A9HTTPClient\u7AE0\u8282\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6DF1\u5165\u7406\u89E3\u548C\u638C\u63E1\u5982\u4F55\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42\uFF0C\u4EE5\u786E\u4FDD\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u6709\u6548\u5730\u7BA1\u7406\u6587\u4EF6\u6570\u636E\u3002","keywords":["GoFrame","GoFrame\u6846\u67B6","\u6587\u4EF6\u4E0A\u4F20","\u8BF7\u6C42\u8F93\u5165","HTTPClient","\u4E0A\u4F20\u6B65\u9AA4","\u5904\u7406\u8BF7\u6C42","\u5F00\u53D1\u8FC7\u7A0B","\u529F\u80FD\u6A21\u5757","\u6587\u6863"]},"sidebar":"mainSidebar","previous":{"title":"\u8BF7\u6C42\u8F93\u5165-Context","permalink":"/en/2.7.x/docs/web/request-context"},"next":{"title":"\u6570\u636E\u8FD4\u56DE","permalink":"/en/2.7.x/docs/web/response"}}'),i=n("785893"),s=n("250065");let r={slug:"/docs/web/request-file-uploading",title:"\u8BF7\u6C42\u8F93\u5165-\u6587\u4EF6\u4E0A\u4F20",sidebar_position:7,hide_title:!0,description:"\u5728GoFrame\u6846\u67B6\u4E2D\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u7684\u57FA\u672C\u6B65\u9AA4\u548C\u65B9\u6CD5\u3002\u501F\u52A9HTTPClient\u7AE0\u8282\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6DF1\u5165\u7406\u89E3\u548C\u638C\u63E1\u5982\u4F55\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42\uFF0C\u4EE5\u786E\u4FDD\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u6709\u6548\u5730\u7BA1\u7406\u6587\u4EF6\u6570\u636E\u3002",keywords:["GoFrame","GoFrame\u6846\u67B6","\u6587\u4EF6\u4E0A\u4F20","\u8BF7\u6C42\u8F93\u5165","HTTPClient","\u4E0A\u4F20\u6B65\u9AA4","\u5904\u7406\u8BF7\u6C42","\u5F00\u53D1\u8FC7\u7A0B","\u529F\u80FD\u6A21\u5757","\u6587\u6863"]},a=void 0,l={},d=[];function c(e){let t={a:"a",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(t.p,{children:["\u6587\u4EF6\u4E0A\u4F20\u8BF7\u5177\u4F53\u53C2\u8003 ",(0,i.jsx)(t.a,{href:"/en/2.7.x/docs/web/http-client-file-uploading",children:"HTTPClient-\u6587\u4EF6\u4E0A\u4F20"})," \u7AE0\u8282\u3002"]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var o=n(667294);let i={},s=o.createContext(i);function r(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);