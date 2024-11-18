"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["65035"],{83377:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D","title":"\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u901A\u8FC7Response\u5BF9\u8C61\u5B9E\u73B0\u6587\u4EF6\u4E0B\u8F7D\u529F\u80FD\u3002\u901A\u8FC7ServeFile\u65B9\u6CD5\u53EF\u4EE5\u5C55\u793A\u6587\u4EF6\u5185\u5BB9\uFF0C\u800C\u901A\u8FC7ServeFileDownload\u65B9\u6CD5\u5219\u53EF\u4EE5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u4E0B\u8F7D\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\uFF0C\u5145\u5206\u5229\u7528\u6D41\u5F0F\u4E0B\u8F7D\u6280\u672F\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u63D0\u5347\u6027\u80FD\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE","slug":"/docs/web/response-file-downloading","permalink":"/en/docs/web/response-file-downloading","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/\u6570\u636E\u8FD4\u56DE/\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/web/response-file-downloading","title":"\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u6587\u4EF6\u4E0B\u8F7D","ServeFile","ServeFileDownload","\u54CD\u5E94\u6587\u4EF6\u4E0B\u8F7D","Go\u8BED\u8A00","ghttp","\u670D\u52A1\u5668","\u6D41\u5F0F\u4E0B\u8F7D"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u901A\u8FC7Response\u5BF9\u8C61\u5B9E\u73B0\u6587\u4EF6\u4E0B\u8F7D\u529F\u80FD\u3002\u901A\u8FC7ServeFile\u65B9\u6CD5\u53EF\u4EE5\u5C55\u793A\u6587\u4EF6\u5185\u5BB9\uFF0C\u800C\u901A\u8FC7ServeFileDownload\u65B9\u6CD5\u5219\u53EF\u4EE5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u4E0B\u8F7D\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\uFF0C\u5145\u5206\u5229\u7528\u6D41\u5F0F\u4E0B\u8F7D\u6280\u672F\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u63D0\u5347\u6027\u80FD\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636E\u8FD4\u56DE-Exit\u63A7\u5236","permalink":"/en/docs/web/response-exit-exitall-exithook"},"next":{"title":"\u6570\u636E\u8FD4\u56DE-\u6A21\u677F\u89E3\u6790","permalink":"/en/docs/web/response-template"}}'),r=o("785893"),s=o("250065");let i={slug:"/docs/web/response-file-downloading",title:"\u6570\u636E\u8FD4\u56DE-\u6587\u4EF6\u4E0B\u8F7D",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u6587\u4EF6\u4E0B\u8F7D","ServeFile","ServeFileDownload","\u54CD\u5E94\u6587\u4EF6\u4E0B\u8F7D","Go\u8BED\u8A00","ghttp","\u670D\u52A1\u5668","\u6D41\u5F0F\u4E0B\u8F7D"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u901A\u8FC7Response\u5BF9\u8C61\u5B9E\u73B0\u6587\u4EF6\u4E0B\u8F7D\u529F\u80FD\u3002\u901A\u8FC7ServeFile\u65B9\u6CD5\u53EF\u4EE5\u5C55\u793A\u6587\u4EF6\u5185\u5BB9\uFF0C\u800C\u901A\u8FC7ServeFileDownload\u65B9\u6CD5\u5219\u53EF\u4EE5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u4E0B\u8F7D\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\uFF0C\u5145\u5206\u5229\u7528\u6D41\u5F0F\u4E0B\u8F7D\u6280\u672F\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u63D0\u5347\u6027\u80FD\u3002"},l=void 0,d={},c=[{value:"<code>ServeFile</code>",id:"servefile",level:2},{value:"<code>ServeFileDownload</code>",id:"servefiledownload",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Response"})," \u5BF9\u8C61\u652F\u6301\u6587\u4EF6\u4E0B\u8F7D\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76F8\u5173\u65B9\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func (r *Response) ServeFile(path string, allowIndex ...bool)\nfunc (r *Response) ServeFileDownload(path string, name ...string)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"servefile",children:(0,r.jsx)(n.code,{children:"ServeFile"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7\u7ED9\u5B9A\u6587\u4EF6\u8DEF\u5F84 ",(0,r.jsx)(n.code,{children:"path"}),"\uFF0C ",(0,r.jsx)(n.code,{children:"ServeFile"})," \u65B9\u6CD5\u5C06\u4F1A\u81EA\u52A8\u8BC6\u522B\u6587\u4EF6\u683C\u5F0F\uFF0C\u5982\u679C\u662F\u76EE\u5F55\u6216\u8005\u6587\u672C\u5185\u5BB9\u5C06\u4F1A\u76F4\u63A5\u5C55\u793A\u6587\u4EF6\u5185\u5BB9\u3002\u5982\u679C ",(0,r.jsx)(n.code,{children:"path"})," \u53C2\u6570\u4E3A\u76EE\u5F55\uFF0C\u90A3\u4E48\u7B2C\u4E8C\u4E2A\u53C2\u6570 ",(0,r.jsx)(n.code,{children:"allowIndex"})," \u63A7\u5236\u662F\u5426\u53EF\u4EE5\u5C55\u793A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5217\u8868\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(251865).Z+"",width:"1312",height:"734"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.ServeFile("test.txt")\n    })\n    s.SetPort(8999)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8BBF\u95EE ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8999",children:"http://127.0.0.1:8999"})," \u53EF\u4EE5\u53D1\u73B0\u6587\u4EF6\u5185\u5BB9\u88AB\u5C55\u793A\u5230\u4E86\u9875\u9762\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"servefiledownload",children:(0,r.jsx)(n.code,{children:"ServeFileDownload"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ServeFileDownload"})," \u662F\u76F8\u5BF9\u4F7F\u7528\u9891\u7387\u6BD4\u8F83\u9AD8\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u76F4\u63A5\u5F15\u5BFC\u5BA2\u6237\u7AEF\u4E0B\u8F7D\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\uFF0C\u5E76\u53EF\u4EE5\u91CD\u65B0\u7ED9\u5B9A\u4E0B\u8F7D\u7684\u6587\u4EF6\u540D\u79F0\u3002 ",(0,r.jsx)(n.code,{children:"ServeFileDownload"})," \u65B9\u6CD5\u91C7\u7528\u7684\u662F\u6D41\u5F0F\u4E0B\u8F7D\u63A7\u5236\uFF0C\u5BF9\u5185\u5B58\u5360\u7528\u8F83\u5C11\u3002\u4F7F\u7528\u793A\u4F8B\uFF0C\u6211\u4EEC\u628A\u4E0A\u9762\u793A\u4F8B\u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"ServeFile"})," \u65B9\u6CD5\u6539\u4E3A ",(0,r.jsx)(n.code,{children:"ServeFileDownload"})," \u65B9\u6CD5\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.ServeFileDownload("test.txt")\n    })\n    s.SetPort(8999)\n    s.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8BBF\u95EE ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8999",children:"http://127.0.0.1:8999"})," \u53EF\u4EE5\u53D1\u73B0\u6587\u4EF6\u88AB\u5F15\u5BFC\u4E0B\u8F7D\uFF0C\u800C\u4E0D\u662F\u5C55\u793A\u9875\u9762\u5185\u5BB9\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},251865:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/2bb757548c004e021cf802495fe8d2be-eda9cca79fc294c2dff6d241649cf838.png"},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return i}});var t=o(667294);let r={},s=t.createContext(r);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);