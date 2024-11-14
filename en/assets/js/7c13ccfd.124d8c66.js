"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[80153],{985977:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u4e92\u65a5\u9501-gmutex","title":"\u4e92\u65a5\u9501-gmutex","description":"GoFrame\u6846\u67b6\u4e2d\u7684gmutex\u4e92\u65a5\u9501\uff0c\u8be5\u9501\u652f\u6301\u5e76\u53d1\u8bfb\u5199\u63a7\u5236\uff0c\u4e0e\u6807\u51c6\u5e93sync.RWMutex\u7c7b\u4f3c\u3002\u5176\u7279\u70b9\u662f\u5305\u542bTry*\u65b9\u6cd5\u548c*Func\u65b9\u6cd5\uff0c\u7528\u4e8e\u975e\u963b\u585e\u9501\u673a\u5236\u548c\u7279\u5b9a\u4f5c\u7528\u57df\u9501\u63a7\u5236\u3002\u901a\u8fc7\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5176\u4fbf\u6377\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u4ee5\u53ca\u4e0e\u6807\u51c6\u5e93\u9501\u7684\u57fa\u51c6\u6d4b\u8bd5\u5bf9\u6bd4\uff0c\u5c55\u793a\u4e86\u5176\u6027\u80fd\u4f18\u52bf\u3002\u9002\u7528\u4e8e\u9700\u8981\u9ad8\u6548\u9501\u673a\u5236\u7684\u5e76\u53d1\u7f16\u7a0b\u573a\u666f\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u4e92\u65a5\u9501-gmutex.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173","slug":"/docs/components/os-gmutex","permalink":"/en/2.7.x/docs/components/os-gmutex","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u4e92\u65a5\u9501-gmutex.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/components/os-gmutex","title":"\u4e92\u65a5\u9501-gmutex","sidebar_position":2,"hide_title":true,"keywords":["GoFrame\u6846\u67b6","gmutex\u4e92\u65a5\u9501","\u4e92\u65a5\u9501\u6559\u7a0b","\u5e76\u53d1\u8bfb\u5199\u63a7\u5236","\u9501\u673a\u5236\u4f18\u5316","TryLock\u65b9\u6cd5","Func\u65b9\u6cd5\u793a\u4f8b","\u57fa\u51c6\u6d4b\u8bd5","\u5e76\u53d1\u5b89\u5168","Go\u7f16\u7a0b"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684gmutex\u4e92\u65a5\u9501\uff0c\u8be5\u9501\u652f\u6301\u5e76\u53d1\u8bfb\u5199\u63a7\u5236\uff0c\u4e0e\u6807\u51c6\u5e93sync.RWMutex\u7c7b\u4f3c\u3002\u5176\u7279\u70b9\u662f\u5305\u542bTry*\u65b9\u6cd5\u548c*Func\u65b9\u6cd5\uff0c\u7528\u4e8e\u975e\u963b\u585e\u9501\u673a\u5236\u548c\u7279\u5b9a\u4f5c\u7528\u57df\u9501\u63a7\u5236\u3002\u901a\u8fc7\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5176\u4fbf\u6377\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u4ee5\u53ca\u4e0e\u6807\u51c6\u5e93\u9501\u7684\u57fa\u51c6\u6d4b\u8bd5\u5bf9\u6bd4\uff0c\u5c55\u793a\u4e86\u5176\u6027\u80fd\u4f18\u52bf\u3002\u9002\u7528\u4e8e\u9700\u8981\u9ad8\u6548\u9501\u673a\u5236\u7684\u5e76\u53d1\u7f16\u7a0b\u573a\u666f\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5185\u5b58\u9501-gmlock","permalink":"/en/2.7.x/docs/components/os-gmlock"},"next":{"title":"\u4e0a\u4e0b\u6587-gctx","permalink":"/en/2.7.x/docs/components/os-gctx"}}');var t=c(474848),s=c(28453);const i={slug:"/docs/components/os-gmutex",title:"\u4e92\u65a5\u9501-gmutex",sidebar_position:2,hide_title:!0,keywords:["GoFrame\u6846\u67b6","gmutex\u4e92\u65a5\u9501","\u4e92\u65a5\u9501\u6559\u7a0b","\u5e76\u53d1\u8bfb\u5199\u63a7\u5236","\u9501\u673a\u5236\u4f18\u5316","TryLock\u65b9\u6cd5","Func\u65b9\u6cd5\u793a\u4f8b","\u57fa\u51c6\u6d4b\u8bd5","\u5e76\u53d1\u5b89\u5168","Go\u7f16\u7a0b"],description:"GoFrame\u6846\u67b6\u4e2d\u7684gmutex\u4e92\u65a5\u9501\uff0c\u8be5\u9501\u652f\u6301\u5e76\u53d1\u8bfb\u5199\u63a7\u5236\uff0c\u4e0e\u6807\u51c6\u5e93sync.RWMutex\u7c7b\u4f3c\u3002\u5176\u7279\u70b9\u662f\u5305\u542bTry*\u65b9\u6cd5\u548c*Func\u65b9\u6cd5\uff0c\u7528\u4e8e\u975e\u963b\u585e\u9501\u673a\u5236\u548c\u7279\u5b9a\u4f5c\u7528\u57df\u9501\u63a7\u5236\u3002\u901a\u8fc7\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5176\u4fbf\u6377\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u4ee5\u53ca\u4e0e\u6807\u51c6\u5e93\u9501\u7684\u57fa\u51c6\u6d4b\u8bd5\u5bf9\u6bd4\uff0c\u5c55\u793a\u4e86\u5176\u6027\u80fd\u4f18\u52bf\u3002\u9002\u7528\u4e8e\u9700\u8981\u9ad8\u6548\u9501\u673a\u5236\u7684\u5e76\u53d1\u7f16\u7a0b\u573a\u666f\u3002"},r=void 0,u={},l=[{value:"\u57fa\u51c6\u6d4b\u8bd5",id:"\u57fa\u51c6\u6d4b\u8bd5",level:3},{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c <code>*Func</code> \u4f7f\u7528",id:"\u793a\u4f8b2-func-\u4f7f\u7528",level:3}];function g(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gmutex.Mutex"})," \u4e92\u65a5\u9501\u5bf9\u8c61\u652f\u6301\u8bfb\u5199\u63a7\u5236\uff0c\u4e92\u65a5\u9501\u529f\u80fd\u903b\u8f91\u4e0e\u6807\u51c6\u5e93 ",(0,t.jsx)(e.code,{children:"sync.RWMutex"})," \u7c7b\u4f3c\uff0c\u53ef\u5e76\u53d1\u8bfb\u4f46\u4e0d\u53ef\u5e76\u53d1\u5199\u3002"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u4e92\u65a5\u9501\u7684\u8bbe\u8ba1\u7ec6\u8282\uff0c\u63a8\u8350\u9605\u8bfb\u8f7b\u91cf\u7ea7\u9ad8\u6e05\u7248\u7684\u5b9e\u73b0\u6e90\u7801\uff1a ",(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/blob/master/os/gmutex/gmutex.go",children:"https://github.com/gogf/gf/blob/master/os/gmutex/gmutex.go"})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gmutex"\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmutex",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmutex"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:"type Mutex\n    func (m *Mutex) LockFunc(f func())\n    func (m *Mutex) TryLockFunc(f func()) (result bool)\ntype RWMutex\n    func New() *RWMutex\n    func (m *RWMutex) LockFunc(f func())\n    func (m *RWMutex) RLockFunc(f func())\n    func (m *RWMutex) TryLockFunc(f func()) (result bool)\n    func (m *RWMutex) TryRLockFunc(f func()) (result bool)\n"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u8be5\u4e92\u65a5\u9501\u6a21\u5757\u6700\u5927\u7684\u7279\u70b9\u662f\u652f\u6301 ",(0,t.jsx)(e.code,{children:"Try*"})," \u65b9\u6cd5\u4ee5\u53ca ",(0,t.jsx)(e.code,{children:"*Func"})," \u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Try*"})," \u65b9\u6cd5\u7528\u4e8e\u5b9e\u73b0\u5c1d\u8bd5\u83b7\u5f97\u7279\u5b9a\u7c7b\u578b\u7684\u9501\uff0c\u5982\u679c\u83b7\u5f97\u9501\u6210\u529f\u5219\u7acb\u5373\u8fd4\u56de ",(0,t.jsx)(e.code,{children:"true"}),"\uff0c\u5426\u5219\u7acb\u5373\u8fd4\u56de ",(0,t.jsx)(e.code,{children:"false"}),"\uff0c\u4e0d\u4f1a\u963b\u585e\u7b49\u5f85\uff0c\u8fd9\u5bf9\u4e8e\u9700\u8981\u4f7f\u7528\u975e\u963b\u585e\u9501\u673a\u5236\u7684\u4e1a\u52a1\u903b\u8f91\u975e\u5e38\u5b9e\u7528\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"*Func"})," \u65b9\u6cd5\u4f7f\u7528\u95ed\u5305\u533f\u540d\u51fd\u6570\u7684\u65b9\u5f0f\u5b9e\u73b0\u7279\u5b9a\u4f5c\u7528\u57df\u7684\u5e76\u53d1\u5b89\u5168\u9501\u63a7\u5236\uff0c\u8fd9\u5bf9\u4e8e\u7279\u5b9a\u4ee3\u7801\u5757\u7684\u5e76\u53d1\u5b89\u5168\u63a7\u5236\u7279\u522b\u65b9\u4fbf\uff0c\u7531\u4e8e\u5185\u90e8\u4f7f\u7528\u4e86 ",(0,t.jsx)(e.code,{children:"defer"})," \u6765\u91ca\u653e\u9501\uff0c\u56e0\u6b64\u5373\u4f7f\u51fd\u6570\u5185\u90e8\u4ea7\u751f\u5f02\u5e38\u9519\u8bef\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u9501\u673a\u5236\u7684\u5b89\u5168\u6027\u63a7\u5236\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u57fa\u51c6\u6d4b\u8bd5",children:"\u57fa\u51c6\u6d4b\u8bd5"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gmutex.Mutex"})," \u4e0e\u6807\u51c6\u5e93\u7684 ",(0,t.jsx)(e.code,{children:"sync.Mutex"})," \u53ca ",(0,t.jsx)(e.code,{children:"sync.RWMutex"})," \u7684\u57fa\u51c6\u6d4b\u8bd5\u5bf9\u6bd4\u7ed3\u679c\uff1a ",(0,t.jsx)(e.a,{href:"https://github.com/gogf/gf/v2/blob/master/os/gmutex/gmutex_bench_test.go",children:"gmutex_bench_test.go"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/os/gmutex\nBenchmark_Mutex_LockUnlock-4           50000000            31.5 ns/op\nBenchmark_RWMutex_LockUnlock-4         30000000            54.1 ns/op\nBenchmark_RWMutex_RLockRUnlock-4       50000000            27.9 ns/op\nBenchmark_GMutex_LockUnlock-4          50000000            27.2 ns/op\nBenchmark_GMutex_TryLock-4             100000000           16.7 ns/op\nBenchmark_GMutex_RLockRUnlock-4        50000000            38.0 ns/op\nBenchmark_GMutex_TryRLock-4            100000000           16.8 ns/op\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gmutex"\n)\n\nfunc main() {\n    ctx := gctx.New()\n    mu := gmutex.New()\n    for i := 0; i < 10; i++ {\n        go func(n int) {\n            mu.Lock()\n            defer mu.Unlock()\n            glog.Print(ctx, "Lock:", n)\n            time.Sleep(time.Second)\n        }(i)\n    }\n    for i := 0; i < 10; i++ {\n        go func(n int) {\n            mu.RLock()\n            defer mu.RUnlock()\n            glog.Print(ctx, "RLock:", n)\n            time.Sleep(time.Second)\n        }(i)\n    }\n    time.Sleep(15 * time.Second)\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"2019-07-13 16:19:55.417 Lock: 0\n2019-07-13 16:19:56.421 Lock: 1\n2019-07-13 16:19:57.424 RLock: 0\n2019-07-13 16:19:57.424 RLock: 4\n2019-07-13 16:19:57.425 RLock: 8\n2019-07-13 16:19:57.425 RLock: 2\n2019-07-13 16:19:57.425 RLock: 7\n2019-07-13 16:19:57.425 RLock: 5\n2019-07-13 16:19:57.425 RLock: 9\n2019-07-13 16:19:57.425 RLock: 1\n2019-07-13 16:19:57.425 RLock: 6\n2019-07-13 16:19:57.425 RLock: 3\n2019-07-13 16:19:58.429 Lock: 3\n2019-07-13 16:19:59.433 Lock: 4\n2019-07-13 16:20:00.438 Lock: 5\n2019-07-13 16:20:01.443 Lock: 6\n2019-07-13 16:20:02.448 Lock: 7\n2019-07-13 16:20:03.452 Lock: 8\n2019-07-13 16:20:04.456 Lock: 9\n2019-07-13 16:20:05.461 Lock: 2\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u91cc\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"glog"})," \u6253\u5370\u7684\u76ee\u7684\uff0c\u662f\u53ef\u4ee5\u65b9\u4fbf\u5730\u770b\u5230\u6253\u5370\u8f93\u51fa\u7684\u65f6\u95f4\u3002\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u7b2c3\u79d2\u7684\u65f6\u5019\uff0c\u8bfb\u9501\u62a2\u5360\u5230\u4e86\u673a\u4f1a\uff0c\u7531\u4e8e ",(0,t.jsx)(e.code,{children:"gmutex.Mutex"})," \u5bf9\u8c61\u652f\u6301\u5e76\u53d1\u8bfb\u4f46\u4e0d\u652f\u6301\u5e76\u53d1\u5199\uff0c\u56e0\u6b64\u8bfb\u9501\u62a2\u5360\u540e\u8fc5\u901f\u6267\u884c\u5b8c\u6bd5\uff1b\u800c\u5199\u9501\u4f9d\u65e7\u4fdd\u6301\u6bcf\u79d2\u6253\u5370\u4e00\u6761\u65e5\u5fd7\u7ee7\u7eed\u6267\u884c\u3002"]}),"\n",(0,t.jsxs)(e.h3,{id:"\u793a\u4f8b2-func-\u4f7f\u7528",children:["\u793a\u4f8b2\uff0c ",(0,t.jsx)(e.code,{children:"*Func"})," \u4f7f\u7528"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n\n    "github.com/gogf/gf/v2/os/glog"\n\n    "github.com/gogf/gf/v2/os/gmutex"\n)\n\nfunc main() {\n    mu := gmutex.New()\n    go mu.LockFunc(func() {\n        glog.Println("lock func1")\n        time.Sleep(1 * time.Second)\n    })\n    time.Sleep(time.Millisecond)\n    go mu.LockFunc(func() {\n        glog.Println("lock func2")\n    })\n    time.Sleep(2 * time.Second)\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"2019-07-13 16:28:10.381 lock func1\n2019-07-13 16:28:11.385 lock func2\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"*Func"})," \u65b9\u6cd5\u5b9e\u73b0\u7279\u5b9a\u4f5c\u7528\u57df\u7684\u9501\u63a7\u5236\u975e\u5e38\u65b9\u4fbf\u3002"]})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(g,{...n})}):g(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>i,x:()=>r});var o=c(296540);const t={},s=o.createContext(t);function i(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);