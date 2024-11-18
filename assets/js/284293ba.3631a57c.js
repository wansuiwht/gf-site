"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["8680"],{108892:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>m,assets:()=>l,toc:()=>g,frontMatter:()=>r});var t=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/XML\u7F16\u89E3\u7801-gxml","title":"XML\u7F16\u89E3\u7801-gxml","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gxml\u8FDB\u884CXML\u6570\u636E\u683C\u5F0F\u7684\u7F16\u7801\u548C\u89E3\u6790\u3002\u63D0\u4F9B\u4E86gxml\u5E93\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u4EE5\u53CA\u76F8\u5173\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5728Go\u8BED\u8A00\u9879\u76EE\u4E2D\u8F7B\u677E\u5904\u7406XML\u6570\u636E\u3002\u5177\u4F53\u5B9E\u73B0\u5305\u62ECimport\u8BED\u53E5\u4E0Egxml\u5E93\u7684\u8C03\u7528\u793A\u4F8B\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/XML\u7F16\u89E3\u7801-gxml.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/docs/components/encoding-gxml","permalink":"/2.7.x/docs/components/encoding-gxml","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/XML\u7F16\u89E3\u7801-gxml.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/encoding-gxml","title":"XML\u7F16\u89E3\u7801-gxml","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","XML","XML\u7F16\u89E3\u7801","\u6570\u636E\u683C\u5F0F","gxml","\u7F16\u7801\u89E3\u6790","Go\u8BED\u8A00","\u7F16\u7A0B","\u63A5\u53E3\u6587\u6863"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gxml\u8FDB\u884CXML\u6570\u636E\u683C\u5F0F\u7684\u7F16\u7801\u548C\u89E3\u6790\u3002\u63D0\u4F9B\u4E86gxml\u5E93\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u4EE5\u53CA\u76F8\u5173\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5728Go\u8BED\u8A00\u9879\u76EE\u4E2D\u8F7B\u677E\u5904\u7406XML\u6570\u636E\u3002\u5177\u4F53\u5B9E\u73B0\u5305\u62ECimport\u8BED\u53E5\u4E0Egxml\u5E93\u7684\u8C03\u7528\u793A\u4F8B\u3002"},"sidebar":"mainSidebar","previous":{"title":"URL\u7F16\u89E3\u7801-gurl","permalink":"/2.7.x/docs/components/encoding-gurl"},"next":{"title":"INI\u7F16\u89E3\u7801-gini","permalink":"/2.7.x/docs/components/encoding-gini"}}'),i=o("785893"),s=o("250065");let r={slug:"/docs/components/encoding-gxml",title:"XML\u7F16\u89E3\u7801-gxml",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","XML","XML\u7F16\u89E3\u7801","\u6570\u636E\u683C\u5F0F","gxml","\u7F16\u7801\u89E3\u6790","Go\u8BED\u8A00","\u7F16\u7A0B","\u63A5\u53E3\u6587\u6863"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gxml\u8FDB\u884CXML\u6570\u636E\u683C\u5F0F\u7684\u7F16\u7801\u548C\u89E3\u6790\u3002\u63D0\u4F9B\u4E86gxml\u5E93\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u4EE5\u53CA\u76F8\u5173\u63A5\u53E3\u6587\u6863\u7684\u94FE\u63A5\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5728Go\u8BED\u8A00\u9879\u76EE\u4E2D\u8F7B\u677E\u5904\u7406XML\u6570\u636E\u3002\u5177\u4F53\u5B9E\u73B0\u5305\u62ECimport\u8BED\u53E5\u4E0Egxml\u5E93\u7684\u8C03\u7528\u793A\u4F8B\u3002"},c=void 0,l={},g=[];function d(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"XML\u6570\u636E\u683C\u5F0F\u7F16\u7801\u89E3\u6790\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gxml"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gxml",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gxml"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return r}});var t=o(667294);let i={},s=t.createContext(i);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);