"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[35495],{189703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u529f\u80fd\u8c03\u8bd5/\u8c03\u8bd5\u529f\u80fd-gdebug","title":"\u8c03\u8bd5\u529f\u80fd-gdebug","description":"GoFrame\u6846\u67b6\u901a\u8fc7gdebug\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u8c03\u8bd5\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u4e2d\u5806\u6808\u548c\u8c03\u7528\u94fe\u7684\u5206\u6790\u3002\u867d\u7136\u8c03\u8bd5\u65b9\u6cd5\u4e0e\u6027\u80fd\u6548\u7387\u76f8\u5173\u6027\u4e0d\u5f3a\uff0c\u4f46\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4e86\u89e3\u4ee3\u7801\u6267\u884c\u8def\u5f84\u548c\u8c03\u7528\u4fe1\u606f\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u529f\u80fd\u8c03\u8bd5/\u8c03\u8bd5\u529f\u80fd-gdebug.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u529f\u80fd\u8c03\u8bd5","slug":"/docs/components/debug-gdebug","permalink":"/en/docs/components/debug-gdebug","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u529f\u80fd\u8c03\u8bd5/\u8c03\u8bd5\u529f\u80fd-gdebug.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731055597000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/debug-gdebug","title":"\u8c03\u8bd5\u529f\u80fd-gdebug","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u8c03\u8bd5\u529f\u80fd","gdebug","GoFrame\u8c03\u8bd5","gdebug\u7ec4\u4ef6","\u5806\u6808\u5206\u6790","\u8c03\u7528\u94fe\u4fe1\u606f","\u6027\u80fd\u4f18\u5316","\u63a5\u53e3\u6587\u6863"],"description":"GoFrame\u6846\u67b6\u901a\u8fc7gdebug\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u8c03\u8bd5\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u4e2d\u5806\u6808\u548c\u8c03\u7528\u94fe\u7684\u5206\u6790\u3002\u867d\u7136\u8c03\u8bd5\u65b9\u6cd5\u4e0e\u6027\u80fd\u6548\u7387\u76f8\u5173\u6027\u4e0d\u5f3a\uff0c\u4f46\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4e86\u89e3\u4ee3\u7801\u6267\u884c\u8def\u5f84\u548c\u8c03\u7528\u4fe1\u606f\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u529f\u80fd\u8c03\u8bd5","permalink":"/en/docs/components/debug"},"next":{"title":"I18N\u7ec4\u4ef6","permalink":"/en/docs/components/i18n"}}');var r=t(474848),s=t(28453);const o={slug:"/docs/components/debug-gdebug",title:"\u8c03\u8bd5\u529f\u80fd-gdebug",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u8c03\u8bd5\u529f\u80fd","gdebug","GoFrame\u8c03\u8bd5","gdebug\u7ec4\u4ef6","\u5806\u6808\u5206\u6790","\u8c03\u7528\u94fe\u4fe1\u606f","\u6027\u80fd\u4f18\u5316","\u63a5\u53e3\u6587\u6863"],description:"GoFrame\u6846\u67b6\u901a\u8fc7gdebug\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u8c03\u8bd5\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u4e2d\u5806\u6808\u548c\u8c03\u7528\u94fe\u7684\u5206\u6790\u3002\u867d\u7136\u8c03\u8bd5\u65b9\u6cd5\u4e0e\u6027\u80fd\u6548\u7387\u76f8\u5173\u6027\u4e0d\u5f3a\uff0c\u4f46\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u4e86\u89e3\u4ee3\u7801\u6267\u884c\u8def\u5f84\u548c\u8c03\u7528\u4fe1\u606f\u3002"},c=void 0,d={},g=[];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"goframe"})," \u6846\u67b6\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u8c03\u8bd5\u529f\u80fd\uff0c\u7531 ",(0,r.jsx)(n.code,{children:"gdebug"})," \u7ec4\u4ef6\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u6240\u8c13\u7684\u201c\u8c03\u8bd5\u201d\u65b9\u6cd5\u5927\u591a\u6570\u548c\u5f00\u53d1\u73af\u5883\u6709\u4e00\u5b9a\u5173\u7cfb\uff0c\u5305\u542b\u5806\u6808\u548c\u8c03\u7528\u94fe\u4fe1\u606f\u5206\u6790\uff0c\u5e76\u4e14\u6027\u80fd\u5f80\u5f80\u4e0d\u662f\u7279\u522b\u9ad8\u3002"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/debug/gdebug"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863\uff1a"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/debug/gdebug",children:"https://pkg.go.dev/github.com/gogf/gf/v2/debug/gdebug"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func BinVersion() string\nfunc BinVersionMd5() string\nfunc Caller(skip ...int) (function string, path string, line int)\nfunc CallerDirectory() string\nfunc CallerFileLine() string\nfunc CallerFileLineShort() string\nfunc CallerFilePath() string\nfunc CallerFunction() string\nfunc CallerPackage() string\nfunc CallerWithFilter(filter string, skip ...int) (function string, path string, line int)\nfunc FuncName(f interface{}) string\nfunc FuncPath(f interface{}) string\nfunc GoroutineId() int\nfunc PrintStack(skip ...int)\nfunc Stack(skip ...int) string\nfunc StackWithFilter(filter string, skip ...int) string\nfunc StackWithFilters(filters []string, skip ...int) string\nfunc TestDataPath(names ...string) string\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u719f\u6089 ",(0,r.jsx)(n.code,{children:"PHP"})," \u7684\u540c\u5b66\u53ef\u80fd\u6bd4\u8f83\u597d\u7406\u89e3\uff0c\u8fd9\u91cc\u67d0\u4e9b\u65b9\u6cd5\u5176\u5b9e\u548c ",(0,r.jsx)(n.code,{children:"PHP"})," \u7684\u90e8\u5206 ",(0,r.jsx)(n.a,{href:"https://www.php.net/manual/en/language.constants.predefined.php",children:"\u9b54\u672f\u5e38\u91cf"})," \u529f\u80fd\u4e00\u81f4\u3002 ",(0,r.jsx)(n.code,{children:"CallerDirectory"})," \u5bf9\u5e94 ",(0,r.jsx)(n.code,{children:"__DIR__"}),"\uff0c ",(0,r.jsx)(n.code,{children:"CallerFilePath"})," \u5bf9\u5e94 ",(0,r.jsx)(n.code,{children:"__FILE__"}),"\uff0c ",(0,r.jsx)(n.code,{children:"CallerFunction"})," \u5bf9\u5e94 ",(0,r.jsx)(n.code,{children:"__FUNCTION__"}),"\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(296540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);