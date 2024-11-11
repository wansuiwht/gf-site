"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[42418],{324729:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>t,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5","title":"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5","description":"\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u6709\u6548\u5730\u5904\u7406\u9519\u8bef\uff0c\u5305\u62ec\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u7684\u5806\u6808\u4fe1\u606f\u548c\u6b63\u786e\u4f7f\u7528Wrap\u65b9\u5f0f\u5305\u88f9\u9519\u8bef\u5bf9\u8c61\uff0c\u907f\u514d\u9519\u8bef\u4fe1\u606f\u7684\u91cd\u590d\u3002\u901a\u8fc7\u5177\u4f53\u4ee3\u7801\u793a\u4f8b\uff0c\u5c55\u793a\u5e94\u5982\u4f55\u4f18\u5316\u9519\u8bef\u5904\u7406\uff0c\u63d0\u9ad8GoFrame\u6846\u67b6\u7684\u5e94\u7528\u7a0b\u5e8f\u7a33\u5b9a\u6027\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406","slug":"/docs/core/gerror-practice","permalink":"/docs/core/gerror-practice","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/core/gerror-practice","title":"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u6700\u4f73\u5b9e\u8df5","\u9519\u8bef\u5806\u6808","Wrap\u65b9\u5f0f","\u9519\u8bef\u5bf9\u8c61","Golang","\u6253\u5370\u9519\u8bef","\u9519\u8bef\u4fe1\u606f"],"description":"\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u6709\u6548\u5730\u5904\u7406\u9519\u8bef\uff0c\u5305\u62ec\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u7684\u5806\u6808\u4fe1\u606f\u548c\u6b63\u786e\u4f7f\u7528Wrap\u65b9\u5f0f\u5305\u88f9\u9519\u8bef\u5bf9\u8c61\uff0c\u907f\u514d\u9519\u8bef\u4fe1\u606f\u7684\u91cd\u590d\u3002\u901a\u8fc7\u5177\u4f53\u4ee3\u7801\u793a\u4f8b\uff0c\u5c55\u793a\u5e94\u5982\u4f55\u4f18\u5316\u9519\u8bef\u5904\u7406\uff0c\u63d0\u9ad8GoFrame\u6846\u67b6\u7684\u5e94\u7528\u7a0b\u5e8f\u7a33\u5b9a\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027","permalink":"/docs/core/gerror-other"},"next":{"title":"\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5","permalink":"/docs/core/gerror-benchmark"}}');var s=r(474848),c=r(28453);const a={slug:"/docs/core/gerror-practice",title:"\u9519\u8bef\u5904\u7406-\u6700\u4f73\u5b9e\u8df5",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u9519\u8bef\u5904\u7406","\u6700\u4f73\u5b9e\u8df5","\u9519\u8bef\u5806\u6808","Wrap\u65b9\u5f0f","\u9519\u8bef\u5bf9\u8c61","Golang","\u6253\u5370\u9519\u8bef","\u9519\u8bef\u4fe1\u606f"],description:"\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u6709\u6548\u5730\u5904\u7406\u9519\u8bef\uff0c\u5305\u62ec\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u7684\u5806\u6808\u4fe1\u606f\u548c\u6b63\u786e\u4f7f\u7528Wrap\u65b9\u5f0f\u5305\u88f9\u9519\u8bef\u5bf9\u8c61\uff0c\u907f\u514d\u9519\u8bef\u4fe1\u606f\u7684\u91cd\u590d\u3002\u901a\u8fc7\u5177\u4f53\u4ee3\u7801\u793a\u4f8b\uff0c\u5c55\u793a\u5e94\u5982\u4f55\u4f18\u5316\u9519\u8bef\u5904\u7406\uff0c\u63d0\u9ad8GoFrame\u6846\u67b6\u7684\u5e94\u7528\u7a0b\u5e8f\u7a33\u5b9a\u6027\u3002"},t=void 0,i={},d=[{value:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f",id:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f",level:2},{value:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61Wrap\u65b9\u5f0f",id:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61wrap\u65b9\u5f0f",level:2}];function g(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f",children:"\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u5806\u6808\u4fe1\u606f"}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"fmt/glog"})," \u6216\u8005\u5176\u4ed6\u5305\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u8f93\u51fa\u9519\u8bef\u5806\u6808\u4fe1\u606f\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n)\n\nfunc main() {\n    _, err := gjson.Encode(func() {})\n    fmt.Printf("err: %v", err)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: json.Marshal failed: json: unsupported type: func()\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6253\u5370\u9519\u8bef\u5bf9\u8c61\u4e2d\u7684\u9519\u8bef\u5806\u6808\u4fe1\u606f\uff0c\u5e94\u5f53\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"%+v"})," \u7684\u683c\u5f0f\u5316\u65b9\u5f0f\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n)\n\nfunc main() {\n    _, err := gjson.Encode(func() {})\n    fmt.Printf("err: %+v", err)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: json.Marshal failed: json: unsupported type: func()\n1. json.Marshal failed\n   1).  github.com/gogf/gf/v2/internal/json.Marshal\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/internal/json/json.go:30\n   2).  github.com/gogf/gf/v2/encoding/gjson.Encode\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/encoding/gjson/gjson_stdlib_json_util.go:41\n   3).  main.main\n        /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.test/main.go:10\n2. json: unsupported type: func()\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61wrap\u65b9\u5f0f",children:"\u6b63\u786e\u7684\u9519\u8bef\u5bf9\u8c61Wrap\u65b9\u5f0f"}),"\n",(0,s.jsxs)(e.p,{children:["\u5f53\u5bf9\u9519\u8bef\u5bf9\u8c61\u8fdb\u884c ",(0,s.jsx)(e.code,{children:"Wrap"})," \u65f6\uff0c\u4e0d\u8981\u5c06\u9519\u8bef\u5bf9\u8c61\u6253\u5370\u5230 ",(0,s.jsx)(e.code,{children:"Wrap"})," \u7684\u9519\u8bef\u4fe1\u606f\u4e2d\uff0c\u56e0\u4e3a ",(0,s.jsx)(e.code,{children:"Wrap"})," \u65f6\u672c\u8eab\u4f1a\u5c06\u76ee\u6807\u9519\u8bef\u5bf9\u8c61\u5305\u88f9\u5230\u521b\u5efa\u7684\u65b0\u7684\u9519\u8bef\u5bf9\u8c61\u5185\u90e8\u3002\u5982\u679c\u5c06\u9519\u8bef\u4fe1\u606f\u518d\u6253\u5370\u5305\u542b\u5728\u9519\u8bef\u5b57\u7b26\u4e32\u4e2d\uff0c\u90a3\u4e48\u5728\u6253\u5370\u9519\u8bef\u5806\u6808\u7684\u65f6\u5019\u4f1a\u51fa\u73b0\u9519\u8bef\u4fe1\u606f\u91cd\u590d\u3002\u4f8b\u5982\uff08\u4e3a\u7b80\u5316\u793a\u4f8b\uff0c\u8fd9\u91cc\u6ca1\u6709\u6253\u5370\u5806\u6808\u4fe1\u606f\uff09\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n    _, err1 := gjson.Encode(func() {})\n    err2 := gerror.Wrapf(err1, `error occurred: %v`, err1)\n    fmt.Printf("err: %v", err2)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u6253\u5370\u7684\u9519\u8bef\u4fe1\u606f\u51fa\u73b0\u4e86\u91cd\u590d\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: error occurred: json.Marshal failed: json: unsupported type: func(): json.Marshal failed: json: unsupported type: func()\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u5c06\u4e0a\u9762\u7684\u793a\u4f8b\u4ee3\u7801\u4fee\u590d\u4e00\u4e0b\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/encoding/gjson"\n    "github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n    _, err1 := gjson.Encode(func() {})\n    err2 := gerror.Wrap(err1, `error occurred`)\n    fmt.Printf("err: %v", err2)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"err: error occurred: json.Marshal failed: json: unsupported type: func()\n"})})]})}function l(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>t});var o=r(296540);const s={},c=o.createContext(s);function a(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);