"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[61643],{327551:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u538b\u7f29\u89e3\u538b-gcompress","title":"\u538b\u7f29/\u89e3\u538b-gcompress","description":"\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u538b\u7f29\u548c\u89e3\u538b\u7f29\u529f\u80fd\uff0c\u7279\u522b\u662f`Zlib`\u548c`GZip`\u7b97\u6cd5\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7GoFrame\u6846\u67b6\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u6570\u636e\u538b\u7f29\u89e3\u538b\uff0c\u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\u3002\u672c\u9875\u9762\u63d0\u4f9b\u8be6\u7ec6\u7684\u8c03\u7528\u793a\u4f8b\u548c\u76f8\u5173\u6280\u672f\u6587\u6863\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u4e0a\u624b\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u538b\u7f29\u89e3\u538b-gcompress.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801","slug":"/docs/components/encoding-gcompress","permalink":"/docs/components/encoding-gcompress","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u538b\u7f29\u89e3\u538b-gcompress.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/components/encoding-gcompress","title":"\u538b\u7f29/\u89e3\u538b-gcompress","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gcompress","\u538b\u7f29","\u89e3\u538b","\u4e8c\u8fdb\u5236\u6570\u636e","Zlib","GZip","\u63a5\u53e3\u6587\u6863","GoFrame\u7f16\u7801"],"description":"\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u538b\u7f29\u548c\u89e3\u538b\u7f29\u529f\u80fd\uff0c\u7279\u522b\u662f`Zlib`\u548c`GZip`\u7b97\u6cd5\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7GoFrame\u6846\u67b6\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u6570\u636e\u538b\u7f29\u89e3\u538b\uff0c\u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\u3002\u672c\u9875\u9762\u63d0\u4f9b\u8be6\u7ec6\u7684\u8c03\u7528\u793a\u4f8b\u548c\u76f8\u5173\u6280\u672f\u6587\u6863\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u4e0a\u624b\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5b57\u7b26\u96c6\u8f6c\u6362-gcharset","permalink":"/docs/components/encoding-gcharset"},"next":{"title":"\u6570\u636e\u7ba1\u7406","permalink":"/docs/components/database"}}');var t=s(474848),c=s(28453);const r={slug:"/docs/components/encoding-gcompress",title:"\u538b\u7f29/\u89e3\u538b-gcompress",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gcompress","\u538b\u7f29","\u89e3\u538b","\u4e8c\u8fdb\u5236\u6570\u636e","Zlib","GZip","\u63a5\u53e3\u6587\u6863","GoFrame\u7f16\u7801"],description:"\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u538b\u7f29\u548c\u89e3\u538b\u7f29\u529f\u80fd\uff0c\u7279\u522b\u662f`Zlib`\u548c`GZip`\u7b97\u6cd5\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7GoFrame\u6846\u67b6\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u6570\u636e\u538b\u7f29\u89e3\u538b\uff0c\u5177\u4f53\u5b9e\u73b0\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\u3002\u672c\u9875\u9762\u63d0\u4f9b\u8be6\u7ec6\u7684\u8c03\u7528\u793a\u4f8b\u548c\u76f8\u5173\u6280\u672f\u6587\u6863\u94fe\u63a5\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u4e0a\u624b\u3002"},i=void 0,d={},p=[];function a(e){const o={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["\u4e8c\u8fdb\u5236\u6570\u636e\u538b\u7f29/\u89e3\u538b\uff0c\u652f\u6301 ",(0,t.jsx)(o.code,{children:"Zlib"}),"/ ",(0,t.jsx)(o.code,{children:"GZip"})," \u7b97\u6cd5\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gcompress"\n'})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gcompress",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gcompress"})})]})}function g(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>i});var n=s(296540);const t={},c=n.createContext(t);function r(e){const o=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(c.Provider,{value:o},e.children)}}}]);