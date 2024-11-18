"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["70825"],{433352:function(e,r,o){o.r(r),o.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>g,assets:()=>d,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5E38\u89C1\u95EE\u9898","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u5E38\u89C1\u95EE\u9898","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55\u65F6\uFF0C\u6253\u5370error\u53D8\u91CF\u7684\u5806\u6808\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u6253\u5370\u65E5\u5FD7\u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808\u3002\u63D0\u4F9B\u4E86\u5177\u4F53\u7684Go\u4EE3\u7801\u793A\u4F8B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u51C6\u786E\u5730\u8FDB\u884C\u9519\u8BEF\u65E5\u5FD7\u7684\u8BB0\u5F55\u548C\u8C03\u8BD5\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5E38\u89C1\u95EE\u9898.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/docs/core/glog-faq","permalink":"/2.7.x/docs/core/glog-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5E38\u89C1\u95EE\u9898.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":14,"frontMatter":{"slug":"/docs/core/glog-faq","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u5E38\u89C1\u95EE\u9898","sidebar_position":14,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u65E5\u5FD7\u7EC4\u4EF6","\u5E38\u89C1\u95EE\u9898","error\u53D8\u91CF","\u9519\u8BEF\u5806\u6808","\u65E5\u5FD7\u65B9\u6CD5","\u6253\u5370\u9519\u8BEF","g.Log","GoFrame\u65E5\u5FD7"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55\u65F6\uFF0C\u6253\u5370error\u53D8\u91CF\u7684\u5806\u6808\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u6253\u5370\u65E5\u5FD7\u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808\u3002\u63D0\u4F9B\u4E86\u5177\u4F53\u7684Go\u4EE3\u7801\u793A\u4F8B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u51C6\u786E\u5730\u8FDB\u884C\u9519\u8BEF\u65E5\u5FD7\u7684\u8BB0\u5F55\u548C\u8C03\u8BD5\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-Rotate\u7279\u6027","permalink":"/2.7.x/docs/core/glog-rotate"},"next":{"title":"\u9519\u8BEF\u5904\u7406","permalink":"/2.7.x/docs/core/gerror"}}'),n=o("785893"),s=o("250065");let i={slug:"/docs/core/glog-faq",title:"\u65E5\u5FD7\u7EC4\u4EF6-\u5E38\u89C1\u95EE\u9898",sidebar_position:14,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u65E5\u5FD7\u7EC4\u4EF6","\u5E38\u89C1\u95EE\u9898","error\u53D8\u91CF","\u9519\u8BEF\u5806\u6808","\u65E5\u5FD7\u65B9\u6CD5","\u6253\u5370\u9519\u8BEF","g.Log","GoFrame\u65E5\u5FD7"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55\u65F6\uFF0C\u6253\u5370error\u53D8\u91CF\u7684\u5806\u6808\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u6253\u5370\u65E5\u5FD7\u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808\u3002\u63D0\u4F9B\u4E86\u5177\u4F53\u7684Go\u4EE3\u7801\u793A\u4F8B\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u51C6\u786E\u5730\u8FDB\u884C\u9519\u8BEF\u65E5\u5FD7\u7684\u8BB0\u5F55\u548C\u8C03\u8BD5\u3002"},c=void 0,d={},l=[{value:"\u5982\u679C\u6253\u5370 <code>error</code> \u53D8\u91CF\uFF0C\u6253\u5370\u51FA <code>error</code> \u5BF9\u5E94\u7684\u5806\u6808\u800C\u4E0D\u662F\u65E5\u5FD7\u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808",id:"\u5982\u679C\u6253\u5370-error-\u53D8\u91CF\u6253\u5370\u51FA-error-\u5BF9\u5E94\u7684\u5806\u6808\u800C\u4E0D\u662F\u65E5\u5FD7\u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808",level:2}];function a(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h2,{id:"\u5982\u679C\u6253\u5370-error-\u53D8\u91CF\u6253\u5370\u51FA-error-\u5BF9\u5E94\u7684\u5806\u6808\u800C\u4E0D\u662F\u65E5\u5FD7\u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808",children:["\u5982\u679C\u6253\u5370 ",(0,n.jsx)(r.code,{children:"error"})," \u53D8\u91CF\uFF0C\u6253\u5370\u51FA ",(0,n.jsx)(r.code,{children:"error"})," \u5BF9\u5E94\u7684\u5806\u6808\u800C\u4E0D\u662F\u65E5\u5FD7\u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808"]}),"\n",(0,n.jsxs)(r.p,{children:["\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u53EA\u4F1A\u6253\u5370 ",(0,n.jsx)(r.code,{children:"error"})," \u7684\u5B57\u7B26\u4E32\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E76\u4E14\u5806\u6808\u53EA\u662F\u65E5\u5FD7\u65B9\u6CD5 ",(0,n.jsx)(r.code,{children:"Error"})," \u8C03\u7528\u65F6\u7684\u5806\u6808\uFF1A"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:"g.Log().Error(ctx, err)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679C\u60F3\u8981\u6253\u5370 ",(0,n.jsx)(r.code,{children:"error"})," \u53D8\u91CF\u7684\u5806\u6808\uFF0C\u5E76\u4E0D\u60F3\u6253\u5370 ",(0,n.jsx)(r.code,{children:"Error"})," \u65B9\u6CD5\u8C03\u7528\u65F6\u7684\u5806\u6808\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\uFF1A"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:'g.Log().Printf(ctx, "%+v", err)\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u53C2\u8003\u8FDE\u63A5\uFF1A"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/gogf/gf/issues/1640",children:"https://github.com/gogf/gf/issues/1640"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/2.7.x/docs/core/gerror-other",children:"\u9519\u8BEF\u5904\u7406-\u5176\u4ED6\u7279\u6027"})}),"\n"]})]})}function g(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return c},a:function(){return i}});var t=o(667294);let n={},s=t.createContext(n);function i(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);