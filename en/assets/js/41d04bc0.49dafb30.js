"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["76383"],{734756:function(o,n,e){e.r(n),e.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>d,assets:()=>i,toc:()=>a,frontMatter:()=>t});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370","description":"GoFrame\u6846\u67B6\u65E5\u5FD7\u7EC4\u4EF6\u4E2D\u5806\u6808\u6253\u5370\u7684\u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u5141\u8BB8\u5F00\u53D1\u8005\u81EA\u52A8\u6253\u5370\u65E5\u5FD7\u8C03\u7528\u65B9\u6CD5\u7684\u5806\u6808\u4FE1\u606F\uFF0C\u5E76\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u6CD5\u83B7\u53D6\u6216\u6253\u5370\u5806\u6808\u4FE1\u606F\u3002\u8FD9\u4E9B\u529F\u80FD\u5BF9\u4E8E\u8C03\u8BD5\u9519\u8BEF\u65E5\u5FD7\u4FE1\u606F\u975E\u5E38\u6709\u7528\uFF0C\u7279\u522B\u662F\u5728\u5904\u7406\u590D\u6742\u5E94\u7528\u7A0B\u5E8F\u65F6\u3002\u672C\u6587\u901A\u8FC7\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u5E94\u7528\u65E5\u5FD7\u7EC4\u4EF6\u7684\u5806\u6808\u6253\u5370\u7279\u6027\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6","slug":"/docs/core/glog-stack","permalink":"/en/docs/core/glog-stack","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6/\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/core/glog-stack","title":"\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u65E5\u5FD7\u7EC4\u4EF6","\u5806\u6808\u6253\u5370","glog","GetStack","PrintStack","gerror","\u9519\u8BEF\u65E5\u5FD7","\u8C03\u8BD5"],"description":"GoFrame\u6846\u67B6\u65E5\u5FD7\u7EC4\u4EF6\u4E2D\u5806\u6808\u6253\u5370\u7684\u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u5141\u8BB8\u5F00\u53D1\u8005\u81EA\u52A8\u6253\u5370\u65E5\u5FD7\u8C03\u7528\u65B9\u6CD5\u7684\u5806\u6808\u4FE1\u606F\uFF0C\u5E76\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u6CD5\u83B7\u53D6\u6216\u6253\u5370\u5806\u6808\u4FE1\u606F\u3002\u8FD9\u4E9B\u529F\u80FD\u5BF9\u4E8E\u8C03\u8BD5\u9519\u8BEF\u65E5\u5FD7\u4FE1\u606F\u975E\u5E38\u6709\u7528\uFF0C\u7279\u522B\u662F\u5728\u5904\u7406\u590D\u6742\u5E94\u7528\u7A0B\u5E8F\u65F6\u3002\u672C\u6587\u901A\u8FC7\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u5E94\u7528\u65E5\u5FD7\u7EC4\u4EF6\u7684\u5806\u6808\u6253\u5370\u7279\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u5F02\u6B65\u8F93\u51FA","permalink":"/en/docs/core/glog-async"},"next":{"title":"\u65E5\u5FD7\u7EC4\u4EF6-\u8C03\u8BD5\u4FE1\u606F","permalink":"/en/docs/core/glog-debug"}}'),g=e("785893"),c=e("250065");let t={slug:"/docs/core/glog-stack",title:"\u65E5\u5FD7\u7EC4\u4EF6-\u5806\u6808\u6253\u5370",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u65E5\u5FD7\u7EC4\u4EF6","\u5806\u6808\u6253\u5370","glog","GetStack","PrintStack","gerror","\u9519\u8BEF\u65E5\u5FD7","\u8C03\u8BD5"],description:"GoFrame\u6846\u67B6\u65E5\u5FD7\u7EC4\u4EF6\u4E2D\u5806\u6808\u6253\u5370\u7684\u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u5141\u8BB8\u5F00\u53D1\u8005\u81EA\u52A8\u6253\u5370\u65E5\u5FD7\u8C03\u7528\u65B9\u6CD5\u7684\u5806\u6808\u4FE1\u606F\uFF0C\u5E76\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u6CD5\u83B7\u53D6\u6216\u6253\u5370\u5806\u6808\u4FE1\u606F\u3002\u8FD9\u4E9B\u529F\u80FD\u5BF9\u4E8E\u8C03\u8BD5\u9519\u8BEF\u65E5\u5FD7\u4FE1\u606F\u975E\u5E38\u6709\u7528\uFF0C\u7279\u522B\u662F\u5728\u5904\u7406\u590D\u6742\u5E94\u7528\u7A0B\u5E8F\u65F6\u3002\u672C\u6587\u901A\u8FC7\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7406\u89E3\u548C\u5E94\u7528\u65E5\u5FD7\u7EC4\u4EF6\u7684\u5806\u6808\u6253\u5370\u7279\u6027\u3002"},s=void 0,i={},a=[{value:"\u793A\u4F8B1\uFF0C\u901A\u8FC7 <code>Error</code> \u65B9\u6CD5\u89E6\u53D1",id:"\u793A\u4F8B1\u901A\u8FC7-error-\u65B9\u6CD5\u89E6\u53D1",level:3},{value:"\u793A\u4F8B2\uFF0C\u901A\u8FC7 <code>Stack</code> \u65B9\u6CD5\u6253\u5370",id:"\u793A\u4F8B2\u901A\u8FC7-stack-\u65B9\u6CD5\u6253\u5370",level:3},{value:"\u793A\u4F8B3\uFF0C\u6253\u5370 <code>gerror.Error</code>",id:"\u793A\u4F8B3\u6253\u5370-gerrorerror",level:3}];function l(o){let n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...o.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(n.p,{children:["\u9519\u8BEF\u65E5\u5FD7\u4FE1\u606F\u652F\u6301 ",(0,g.jsx)(n.code,{children:"Stack"})," \u7279\u6027\uFF0C\u8BE5\u7279\u6027\u53EF\u4EE5\u81EA\u52A8\u6253\u5370\u51FA\u5F53\u524D\u8C03\u7528\u65E5\u5FD7\u7EC4\u4EF6\u65B9\u6CD5\u7684\u5806\u6808\u4FE1\u606F\uFF0C\u8BE5\u5806\u6808\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7 ",(0,g.jsx)(n.code,{children:"Notice*/Warning*/Error*/Critical*/Panic*/Fatal*"})," \u7B49\u9519\u8BEF\u65E5\u5FD7\u8F93\u51FA\u65B9\u6CD5\u89E6\u53D1\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,g.jsx)(n.code,{children:"GetStack/PrintStack"})," \u83B7\u53D6/\u6253\u5370\u3002\u9519\u8BEF\u4FE1\u606F\u7684 ",(0,g.jsx)(n.code,{children:"stack"})," \u4FE1\u606F\u5BF9\u4E8E\u8C03\u8BD5\u6765\u8BF4\u76F8\u5F53\u6709\u7528\u3002"]}),"\n",(0,g.jsxs)(n.h3,{id:"\u793A\u4F8B1\u901A\u8FC7-error-\u65B9\u6CD5\u89E6\u53D1",children:["\u793A\u4F8B1\uFF0C\u901A\u8FC7 ",(0,g.jsx)(n.code,{children:"Error"})," \u65B9\u6CD5\u89E6\u53D1"]}),"\n",(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc Test(ctx context.Context) {\n    glog.Error(ctx, "This is error!")\n}\n\nfunc main() {\n    ctx := context.TODO()\n    Test(ctx)\n}\n\n'})}),"\n",(0,g.jsx)(n.p,{children:"\u6253\u5370\u51FA\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:"language-html",children:"2022-01-05 15:08:54.998 [ERRO] This is error!\nStack:\n1.  main.Test\n    C:/hailaz/test/main.go:10\n2.  main.main\n    C:/hailaz/test/main.go:15\n"})}),"\n",(0,g.jsxs)(n.h3,{id:"\u793A\u4F8B2\u901A\u8FC7-stack-\u65B9\u6CD5\u6253\u5370",children:["\u793A\u4F8B2\uFF0C\u901A\u8FC7 ",(0,g.jsx)(n.code,{children:"Stack"})," \u65B9\u6CD5\u6253\u5370"]}),"\n",(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    ctx := context.TODO()\n    glog.PrintStack(ctx)\n    glog.New().PrintStack(ctx)\n\n    fmt.Println(glog.GetStack())\n    fmt.Println(glog.New().GetStack())\n}\n\n'})}),"\n",(0,g.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:"language-html",children:"2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:11\n\n2019-07-12 22:20:28.070 Stack:\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:12\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:14\n\n1. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_stack.go:15\n"})}),"\n",(0,g.jsxs)(n.h3,{id:"\u793A\u4F8B3\u6253\u5370-gerrorerror",children:["\u793A\u4F8B3\uFF0C\u6253\u5370 ",(0,g.jsx)(n.code,{children:"gerror.Error"})]}),"\n",(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:"glog"})," \u65E5\u5FD7\u6A21\u5757\u652F\u6301\u5BF9\u6807\u51C6\u9519\u8BEF\u4EE5\u53CA ",(0,g.jsx)(n.code,{children:"gerror"})," \u9519\u8BEF\u7684\u5806\u6808\u6253\u5370\u652F\u6301\u3002"]}),"\n",(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "errors"\n\n    "github.com/gogf/gf/v2/errors/gerror"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc MakeError() error {\n    return errors.New("connection closed with normal error")\n}\n\nfunc MakeGError() error {\n    return gerror.New("connection closed with gerror")\n}\n\nfunc TestGError(ctx context.Context) {\n    err1 := MakeError()\n    err2 := MakeGError()\n    glog.Error(ctx, err1)\n    glog.Errorf(ctx, "%+v", err2)\n}\n\nfunc main() {\n    ctx := context.TODO()\n    TestGError(ctx)\n}\n\n'})}),"\n",(0,g.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\uFF1A"}),"\n",(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:"language-html",children:"2019-07-12 22:23:11.467 [ERRO] connection closed with normal error\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:20\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\n\n2019-07-12 22:23:11.467 [ERRO] connection closed with gerror\n1. connection closed with gerror\n    1). main.MakeGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:14\n    2). main.TestGError\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:19\n    3). main.main\n        /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\nStack:\n1. main.TestGError\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:21\n2. main.main\n   /home/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_gerror.go:25\n"})})]})}function d(o={}){let{wrapper:n}={...(0,c.a)(),...o.components};return n?(0,g.jsx)(n,{...o,children:(0,g.jsx)(l,{...o})}):l(o)}},250065:function(o,n,e){e.d(n,{Z:function(){return s},a:function(){return t}});var r=e(667294);let g={},c=r.createContext(g);function t(o){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof o?o(n):{...n,...o}},[n,o])}function s(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(g):o.components||g:t(o.components),r.createElement(c.Provider,{value:n},o.children)}}}]);