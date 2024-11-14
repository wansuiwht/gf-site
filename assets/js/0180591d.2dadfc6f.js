"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[87347],{407520:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/TOML\u7f16\u89e3\u7801-gtoml","title":"TOML\u7f16\u89e3\u7801-gtoml","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cTOML\u6570\u636e\u683c\u5f0f\u7684\u7f16\u7801\u89e3\u6790\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u5f15\u5165gogf\u7684gtoml\u5305\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5bf9TOML\u683c\u5f0f\u7684\u6570\u636e\u8fdb\u884c\u7f16\u89e3\u7801\u64cd\u4f5c\u3002\u6587\u7ae0\u8fd8\u63d0\u4f9b\u4e86\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u6df1\u5165\u4e86\u89e3gtoml\u7684\u4f7f\u7528\u7ec6\u8282\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/TOML\u7f16\u89e3\u7801-gtoml.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801","slug":"/docs/components/encoding-gtoml","permalink":"/2.7.x/docs/components/encoding-gtoml","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/TOML\u7f16\u89e3\u7801-gtoml.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/components/encoding-gtoml","title":"TOML\u7f16\u89e3\u7801-gtoml","sidebar_position":9,"hide_title":true,"keywords":["TOML","\u7f16\u89e3\u7801","gtoml","GoFrame","\u6570\u636e\u683c\u5f0f","GoFrame\u6846\u67b6","\u63a5\u53e3\u6587\u6863","\u7f16\u7801\u89e3\u6790","gogf","\u5bfc\u5165"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cTOML\u6570\u636e\u683c\u5f0f\u7684\u7f16\u7801\u89e3\u6790\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u5f15\u5165gogf\u7684gtoml\u5305\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5bf9TOML\u683c\u5f0f\u7684\u6570\u636e\u8fdb\u884c\u7f16\u89e3\u7801\u64cd\u4f5c\u3002\u6587\u7ae0\u8fd8\u63d0\u4f9b\u4e86\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u6df1\u5165\u4e86\u89e3gtoml\u7684\u4f7f\u7528\u7ec6\u8282\u3002"},"sidebar":"mainSidebar","previous":{"title":"YAML\u7f16\u89e3\u7801-gyaml","permalink":"/2.7.x/docs/components/encoding-gyaml"},"next":{"title":"\u5b57\u7b26\u96c6\u8f6c\u6362-gcharset","permalink":"/2.7.x/docs/components/encoding-gcharset"}}');var s=t(474848),i=t(28453);const r={slug:"/docs/components/encoding-gtoml",title:"TOML\u7f16\u89e3\u7801-gtoml",sidebar_position:9,hide_title:!0,keywords:["TOML","\u7f16\u89e3\u7801","gtoml","GoFrame","\u6570\u636e\u683c\u5f0f","GoFrame\u6846\u67b6","\u63a5\u53e3\u6587\u6863","\u7f16\u7801\u89e3\u6790","gogf","\u5bfc\u5165"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cTOML\u6570\u636e\u683c\u5f0f\u7684\u7f16\u7801\u89e3\u6790\u7684\u65b9\u6cd5\u3002\u901a\u8fc7\u5f15\u5165gogf\u7684gtoml\u5305\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5bf9TOML\u683c\u5f0f\u7684\u6570\u636e\u8fdb\u884c\u7f16\u89e3\u7801\u64cd\u4f5c\u3002\u6587\u7ae0\u8fd8\u63d0\u4f9b\u4e86\u63a5\u53e3\u6587\u6863\u7684\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u6df1\u5165\u4e86\u89e3gtoml\u7684\u4f7f\u7528\u7ec6\u8282\u3002"},c=void 0,g={},d=[];function l(o){const e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"TOML"})," \u6570\u636e\u683c\u5f0f\u7f16\u7801\u89e3\u6790\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gtoml"\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gtoml",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gtoml"})})]})}function m(o={}){const{wrapper:e}={...(0,i.R)(),...o.components};return e?(0,s.jsx)(e,{...o,children:(0,s.jsx)(l,{...o})}):l(o)}},28453:(o,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var n=t(296540);const s={},i=n.createContext(s);function r(o){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function c(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:r(o.components),n.createElement(i.Provider,{value:e},o.children)}}}]);