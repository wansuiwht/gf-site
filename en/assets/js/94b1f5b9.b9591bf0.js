"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["63121"],{721416:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>i,default:()=>x,assets:()=>d,toc:()=>a,frontMatter:()=>s});var o=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u5E38\u89C1\u95EE\u9898","title":"\u5E38\u89C1\u95EE\u9898","description":"\u89E3\u7B54\u6709\u5173\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0context cancel\u9519\u8BEF\u7684\u5E38\u89C1\u95EE\u9898\u3002\u8BE5\u9519\u8BEF\u901A\u5E38\u662F\u7531\u4E8E\u5BA2\u6237\u7AEF\u4E3B\u52A8\u53D6\u6D88\u8BF7\u6C42\u5F15\u8D77\u7684\uFF0C\u6587\u4E2D\u4ECB\u7ECD\u4E86\u4E00\u79CD\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u6765\u5904\u7406\u6B64\u95EE\u9898\u7684\u65B9\u6CD5\uFF0C\u4F7F\u670D\u52A1\u7AEF\u80FD\u591F\u5FFD\u7565\u5BA2\u6237\u7AEF\u7684\u53D6\u6D88\u8BF7\u6C42\u5E76\u7EE7\u7EED\u6267\u884C\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u5E38\u89C1\u95EE\u9898.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1","slug":"/docs/web/faq","permalink":"/en/2.7.x/docs/web/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u5E38\u89C1\u95EE\u9898.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":13,"frontMatter":{"slug":"/docs/web/faq","title":"\u5E38\u89C1\u95EE\u9898","sidebar_position":13,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","context cancel","Golang","http server","\u5BA2\u6237\u7AEF\u8BF7\u6C42","\u4E2D\u95F4\u4EF6","NeverDoneCtx","\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6","\u9519\u8BEF\u5904\u7406"],"description":"\u89E3\u7B54\u6709\u5173\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0context cancel\u9519\u8BEF\u7684\u5E38\u89C1\u95EE\u9898\u3002\u8BE5\u9519\u8BEF\u901A\u5E38\u662F\u7531\u4E8E\u5BA2\u6237\u7AEF\u4E3B\u52A8\u53D6\u6D88\u8BF7\u6C42\u5F15\u8D77\u7684\uFF0C\u6587\u4E2D\u4ECB\u7ECD\u4E86\u4E00\u79CD\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u6765\u5904\u7406\u6B64\u95EE\u9898\u7684\u65B9\u6CD5\uFF0C\u4F7F\u670D\u52A1\u7AEF\u80FD\u591F\u5FFD\u7565\u5BA2\u6237\u7AEF\u7684\u53D6\u6D88\u8BF7\u6C42\u5E76\u7EE7\u7EED\u6267\u884C\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6027\u80FD\u6D4B\u8BD5","permalink":"/en/2.7.x/docs/web/performance"},"next":{"title":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1","permalink":"/en/2.7.x/docs/network"}}'),r=n("785893"),c=n("250065");let s={slug:"/docs/web/faq",title:"\u5E38\u89C1\u95EE\u9898",sidebar_position:13,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","context cancel","Golang","http server","\u5BA2\u6237\u7AEF\u8BF7\u6C42","\u4E2D\u95F4\u4EF6","NeverDoneCtx","\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6","\u9519\u8BEF\u5904\u7406"],description:"\u89E3\u7B54\u6709\u5173\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u65F6\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0context cancel\u9519\u8BEF\u7684\u5E38\u89C1\u95EE\u9898\u3002\u8BE5\u9519\u8BEF\u901A\u5E38\u662F\u7531\u4E8E\u5BA2\u6237\u7AEF\u4E3B\u52A8\u53D6\u6D88\u8BF7\u6C42\u5F15\u8D77\u7684\uFF0C\u6587\u4E2D\u4ECB\u7ECD\u4E86\u4E00\u79CD\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u6765\u5904\u7406\u6B64\u95EE\u9898\u7684\u65B9\u6CD5\uFF0C\u4F7F\u670D\u52A1\u7AEF\u80FD\u591F\u5FFD\u7565\u5BA2\u6237\u7AEF\u7684\u53D6\u6D88\u8BF7\u6C42\u5E76\u7EE7\u7EED\u6267\u884C\u3002"},i=void 0,d={},a=[{value:"\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0 <code>context cancel</code> \u9519\u8BEF",id:"\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0-context-cancel-\u9519\u8BEF",level:2}];function l(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h2,{id:"\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0-context-cancel-\u9519\u8BEF",children:["\u670D\u52A1\u7AEF\u9891\u7E41\u51FA\u73B0 ",(0,r.jsx)(t.code,{children:"context cancel"})," \u9519\u8BEF"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5F53 ",(0,r.jsx)(t.strong,{children:"\u5BA2\u6237\u7AEF\u4E3B\u52A8\u53D6\u6D88\u8BF7\u6C42"}),"(\u4F8B\u5982\u4E3B\u52A8\u53D6\u6D88\uFF0C\u6216\u8005\u8BF7\u6C42\u8D85\u8FC7\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u7684\u65F6\u95F4)\u540E\uFF0C\u7279\u522B\u662F\u6D4F\u89C8\u5668\u8BBF\u95EE\u65F6\u76F4\u63A5\u53D6\u6D88\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u53EF\u80FD\u4F1A\u9047\u5230 ",(0,r.jsx)(t.code,{children:"context canceled"})," \u7684\u9519\u8BEF\u3002\u8FD9\u4E2A\u5C5E\u4E8E\u6B63\u5E38\u73B0\u8C61\uFF0C ",(0,r.jsx)(t.code,{children:"Golang"})," \u6807\u51C6\u5E93\u7684 ",(0,r.jsx)(t.code,{children:"http server"})," \u8BBE\u8BA1\u4EA6\u5982\u6B64\u3002\u5F53\u5BA2\u6237\u7AEF\u4E0D\u518D\u9700\u8981\u8FD9\u4E2A\u8BF7\u6C42\u7684\u7ED3\u679C\u65F6\u4F1A\u53D6\u6D88\u8BF7\u6C42\uFF0C\u8FD9\u65F6\u670D\u52A1\u7AEF\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u4E5F\u6CA1\u6709\u4E86\u610F\u4E49\u3002\u5982\u679C\u4ECB\u610F\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u4E2D\u95F4\u4EF6\u589E\u52A0 ",(0,r.jsx)(t.code,{children:"NeverDoneCtx"})," \u7684\u5904\u7406\u903B\u8F91\uFF0C\u8FD9\u4E2A\u65F6\u5019\u670D\u52A1\u7AEF\u4F1A\u5FFD\u7565\u5BA2\u6237\u7AEF\u7684\u53D6\u6D88\u8BF7\u6C42\u5E76\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// MiddlewareNeverDoneCtx sets the context never done for current process.\nfunc MiddlewareNeverDoneCtx(r *Request) {\n    r.SetCtx(r.GetNeverDoneCtx())\n    r.Middleware.Next()\n}\n"})})]})}function x(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var o=n(667294);let r={},c=o.createContext(r);function s(e){let t=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);