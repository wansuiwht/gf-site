"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["4924"],{781457:function(n,e,c){c.r(e),c.d(e,{metadata:()=>o,contentTitle:()=>s,default:()=>u,assets:()=>t,toc:()=>g,frontMatter:()=>l});var o=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5185\u5B58\u9501-gmlock","title":"\u5185\u5B58\u9501-gmlock","description":"\u5185\u5B58\u9501\u6A21\u5757\uFF0C\u4E5F\u79F0\u4E4B\u4E3A \u52A8\u6001\u4E92\u65A5\u9501 \u6A21\u5757\uFF0C\u652F\u6301\u6309\u7167 \u7ED9\u5B9A\u952E\u540D\u52A8\u6001\u751F\u6210\u4E92\u65A5\u9501\uFF0C\u5E76\u53D1\u5B89\u5168\u5E76\u652F\u6301 Try*Lock \u7279\u6027\u3002","source":"@site/versioned_docs/version-2.2.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5185\u5B58\u9501-gmlock.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5185\u5B58\u9501-gmlock","permalink":"/2.2.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5185\u5B58\u9501-gmlock","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5185\u5B58\u9501-gmlock.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"\u5185\u5B58\u9501-gmlock","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.2.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u5B9A\u65F6\u5668-gtimer/\u5B9A\u65F6\u5668-\u6027\u80FD\u6D4B\u8BD5"},"next":{"title":"\u4E92\u65A5\u9501-gmutex","permalink":"/2.2.x/\u7EC4\u4EF6\u5217\u8868/\u7CFB\u7EDF\u76F8\u5173/\u4E92\u65A5\u9501-gmutex"}}'),r=c("785893"),i=c("250065");let l={title:"\u5185\u5B58\u9501-gmlock",sidebar_position:1,hide_title:!0},s=void 0,t={},g=[{value:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528",id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",level:3},{value:"\u793A\u4F8B2\uFF0CTryLock\u975E\u963B\u585E\u9501",id:"\u793A\u4F8B2trylock\u975E\u963B\u585E\u9501",level:3}];function d(n){let e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u5185\u5B58\u9501\u6A21\u5757\uFF0C\u4E5F\u79F0\u4E4B\u4E3A ",(0,r.jsx)(e.code,{children:"\u52A8\u6001\u4E92\u65A5\u9501"})," \u6A21\u5757\uFF0C\u652F\u6301\u6309\u7167 ",(0,r.jsx)(e.code,{children:"\u7ED9\u5B9A\u952E\u540D\u52A8\u6001\u751F\u6210\u4E92\u65A5\u9501"}),"\uFF0C\u5E76\u53D1\u5B89\u5168\u5E76\u652F\u6301 ",(0,r.jsx)(e.code,{children:"Try*Lock"})," \u7279\u6027\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5F53\u7EF4\u62A4\u5927\u91CF\u52A8\u6001\u4E92\u65A5\u9501\u7684\u573A\u666F\u65F6\uFF0C\u5982\u679C\u4E0D\u518D\u4F7F\u7528\u7684\u4E92\u65A5\u9501\u5BF9\u8C61\uFF0C\u8BF7\u624B\u52A8\u8C03\u7528 ",(0,r.jsx)(e.code,{children:"Remove"})," \u65B9\u6CD5\u5220\u9664\u6389\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/os/gmlock"\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4F7F\u7528\u573A\u666F"}),"\uFF1A \u9700\u8981 ",(0,r.jsx)(e.code,{children:"\u52A8\u6001\u521B\u5EFA\u4E92\u65A5\u9501"}),"\uFF0C\u6216\u8005\u9700\u8981 ",(0,r.jsx)(e.code,{children:"\u7EF4\u62A4\u5927\u91CF\u52A8\u6001\u9501"})," \u7684\u573A\u666F\uFF1B"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmlock",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/gmlock"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func Lock(key string)\nfunc LockFunc(key string, f func())\nfunc RLock(key string)\nfunc RLockFunc(key string, f func())\nfunc RUnlock(key string)\nfunc Remove(key string)\nfunc TryLock(key string) bool\nfunc TryLockFunc(key string, f func()) bool\nfunc TryRLock(key string) bool\nfunc TryRLockFunc(key string, f func()) bool\nfunc Unlock(key string)\ntype Locker\n    func New() *Locker\n    func (l *Locker) Clear()\n    func (l *Locker) Lock(key string)\n    func (l *Locker) LockFunc(key string, f func())\n    func (l *Locker) RLock(key string)\n    func (l *Locker) RLockFunc(key string, f func())\n    func (l *Locker) RUnlock(key string)\n    func (l *Locker) Remove(key string)\n    func (l *Locker) TryLock(key string) bool\n    func (l *Locker) TryLockFunc(key string, f func()) bool\n    func (l *Locker) TryRLock(key string) bool\n    func (l *Locker) TryRLockFunc(key string, f func()) bool\n    func (l *Locker) Unlock(key string)\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u793A\u4F8B1\u57FA\u672C\u4F7F\u7528",children:"\u793A\u4F8B1\uFF0C\u57FA\u672C\u4F7F\u7528"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "time"\n    "sync"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gmlock"\n)\n\nfunc main() {\n    key := "lock"\n    wg  := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func(i int) {\n            gmlock.Lock(key)\n            glog.Println(i)\n            time.Sleep(time.Second)\n            gmlock.Unlock(key)\n            wg.Done()\n        }(i)\n    }\n    wg.Wait()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u6A21\u62DF\u4E86\u540C\u65F6\u5F00\u542F ",(0,r.jsx)(e.code,{children:"10"})," \u4E2A ",(0,r.jsx)(e.code,{children:"goroutine"}),"\uFF0C\u4F46\u540C\u4E00\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u4E2A ",(0,r.jsx)(e.code,{children:"goroutine"})," \u83B7\u5F97\u9501\uFF0C\u83B7\u5F97\u9501\u7684 ",(0,r.jsx)(e.code,{children:"goroutine"})," \u6267\u884C ",(0,r.jsx)(e.code,{children:"1"})," \u79D2\u540E\u9000\u51FA\uFF0C\u5176\u4ED6 ",(0,r.jsx)(e.code,{children:"goroutine"})," \u624D\u80FD\u83B7\u5F97\u9501\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:"2018-10-15 23:57:28.295 9\n2018-10-15 23:57:29.296 0\n2018-10-15 23:57:30.296 1\n2018-10-15 23:57:31.296 2\n2018-10-15 23:57:32.296 3\n2018-10-15 23:57:33.297 4\n2018-10-15 23:57:34.297 5\n2018-10-15 23:57:35.297 6\n2018-10-15 23:57:36.298 7\n2018-10-15 23:57:37.298 8\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u793A\u4F8B2trylock\u975E\u963B\u585E\u9501",children:"\u793A\u4F8B2\uFF0CTryLock\u975E\u963B\u585E\u9501"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"TryLock"})," \u65B9\u6CD5\u662F\u6709\u8FD4\u56DE\u503C\u7684\uFF0C\u5B83\u8868\u793A\u7528\u6765\u5C1D\u8BD5\u83B7\u53D6\u9501\uFF0C\u5982\u679C\u83B7\u53D6\u6210\u529F\uFF0C\u5219\u8FD4\u56DE ",(0,r.jsx)(e.code,{children:"true"}),"\uFF1B\u5982\u679C\u83B7\u53D6\u5931\u8D25\uFF08\u5373\u4E92\u65A5\u9501\u5DF2\u88AB\u5176\u4ED6 ",(0,r.jsx)(e.code,{children:"goroutine"})," \u83B7\u53D6\uFF09\uFF0C\u5219\u8FD4\u56DE ",(0,r.jsx)(e.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "sync"\n    "github.com/gogf/gf/v2/os/glog"\n    "time"\n    "github.com/gogf/gf/v2/os/gmlock"\n)\n\nfunc main() {\n    key := "lock"\n    wg  := sync.WaitGroup{}\n    for i := 0; i < 10; i++ {\n        wg.Add(1)\n        go func(i int) {\n            if gmlock.TryLock(key) {\n                glog.Println(i)\n                time.Sleep(time.Second)\n                gmlock.Unlock(key)\n            } else {\n                glog.Println(false)\n            }\n            wg.Done()\n        }(i)\n    }\n    wg.Wait()\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u540C\u7406\uFF0C\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u540C\u65F6\u4E5F\u53EA\u6709 ",(0,r.jsx)(e.code,{children:"1"})," \u4E2A ",(0,r.jsx)(e.code,{children:"goroutine"})," \u80FD\u83B7\u5F97\u9501\uFF0C\u5176\u4ED6 ",(0,r.jsx)(e.code,{children:"goroutine"})," \u5728 ",(0,r.jsx)(e.code,{children:"TryLock"})," \u5931\u8D25\u4FBF\u76F4\u63A5\u9000\u51FA\u4E86\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:"2018-10-16 00:01:59.172 9\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.172 false\n2018-10-16 00:01:59.176 false\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,c){c.d(e,{Z:function(){return s},a:function(){return l}});var o=c(667294);let r={},i=o.createContext(r);function l(n){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);