"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[89843],{772354:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528","title":"\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528","description":"\u6267\u884cShell\u547d\u4ee4","source":"@site/versioned_docs/version-2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc","slug":"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528","permalink":"/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u8fdb\u7a0b\u7ba1\u7406-gproc","permalink":"/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/"},"next":{"title":"\u8fdb\u7a0b\u7ba1\u7406-\u8fdb\u7a0b\u901a\u4fe1","permalink":"/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u8fdb\u7a0b\u901a\u4fe1"}}');var t=i(474848),c=i(28453);const r={title:"\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},s=void 0,l={},d=[{value:"\u6267\u884cShell\u547d\u4ee4",id:"\u6267\u884cshell\u547d\u4ee4",level:2},{value:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",id:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",level:2},{value:"\u591a\u8fdb\u7a0b\u7ba1\u7406",id:"\u591a\u8fdb\u7a0b\u7ba1\u7406",level:2}];function g(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u6267\u884cshell\u547d\u4ee4",children:"\u6267\u884cShell\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n    r, err := gproc.ShellExec(gctx.New(), `sleep 3; echo "hello gf!";`)\n    fmt.Println("result:", r)\n    fmt.Println(err)\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u7a0b\u5e8f\u7b49\u5f85\u4e863\u79d2\u4e4b\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"result: hello gf!\n\n<nil>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",children:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b"}),"\n",(0,t.jsxs)(e.p,{children:["\u7531 ",(0,t.jsx)(e.code,{children:"gproc.Manager"})," \u5bf9\u8c61\u521b\u5efa\u7684\u8fdb\u7a0b\u90fd\u9ed8\u8ba4\u5e26\u5b50\u8fdb\u7a0b\u6807\u8bc6\uff0c\u5728\u5b50\u8fdb\u7a0b\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"gproc.IsChild()"})," \u65b9\u6cd5\u6765\u5224\u65ad\u81ea\u8eab\u662f\u5426\u4e3a\u5b50\u8fdb\u7a0b\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "os"\n    "time"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    if gproc.IsChild() {\n        g.Log().Printf(ctx, "%d: Hi, I am child, waiting 3 seconds to die", gproc.Pid())\n        time.Sleep(time.Second)\n        g.Log().Printf(ctx, "%d: 1", gproc.Pid())\n        time.Sleep(time.Second)\n        g.Log().Printf(ctx, "%d: 2", gproc.Pid())\n        time.Sleep(time.Second)\n        g.Log().Printf(ctx, "%d: 3", gproc.Pid())\n    } else {\n        m := gproc.NewManager()\n        p := m.NewProcess(os.Args[0], os.Args, os.Environ())\n        p.Start(ctx)\n        p.Wait()\n        g.Log().Printf(ctx, "%d: child died", gproc.Pid())\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"2018-05-18 14:35:41.360 28285: Hi, I am child, waiting 3 seconds to die\n2018-05-18 14:35:42.361 28285: 1\n2018-05-18 14:35:43.361 28285: 2\n2018-05-18 14:35:44.361 28285: 3\n2018-05-18 14:35:44.362 28278: child died\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u591a\u8fdb\u7a0b\u7ba1\u7406",children:"\u591a\u8fdb\u7a0b\u7ba1\u7406"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"gproc"})," \u9664\u4e86\u80fd\u591f\u521b\u5efa\u5b50\u8fdb\u7a0b\uff0c\u7ba1\u7406\u5b50\u8fdb\u7a0b\u4e4b\u5916\uff0c\u4e5f\u80fd\u7ba1\u7406\u975e\u81ea\u8eab\u521b\u5efa\u7684\u5176\u4ed6\u8fdb\u7a0b\u3002 ",(0,t.jsx)(e.code,{children:"gproc"})," \u53ef\u4ee5\u540c\u65f6\u7ba1\u7406\u591a\u4e2a\u8fdb\u7a0b\uff0c\u8fd9\u91cc\u4ee5\u5355\u4e2a\u8fdb\u7a0b\u4e3a\u4f8b\u6765\u6f14\u793a\u5bf9\u8fdb\u7a0b\u7684\u7ba1\u7406\u529f\u80fd\u3002"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u6211\u4eec\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"gedit"})," \u8f6f\u4ef6(Linux\u4e0b\u5e38\u7528\u7684\u6587\u672c\u7f16\u8f91\u5668)\u968f\u610f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u5728\u8fdb\u7a0b\u5f53\u4e2d\u6211\u4eec\u770b\u5230\u8be5gedit\u7684\u8fdb\u7a0bID\u4e3a ",(0,t.jsx)(e.code,{children:"28536"})]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"    $ ps aux | grep gedit\n    john  28536  3.6  0.6 946208 56412 ?  Sl  14:39  0:00 gedit /home/john/Documents/text\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"\u6211\u4eec\u7684\u7a0b\u5e8f\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n       "fmt"\n\n       "github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n       pid := 28536\n       m := gproc.NewManager()\n       m.AddProcess(pid)\n       m.KillAll()\n       m.WaitAll()\n       fmt.Printf("%d was killed\\n", pid)\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c ",(0,t.jsx)(e.code,{children:"gedit"})," \u88ab\u5173\u95ed\uff0c\u7ec8\u7aef\u8f93\u51fa\u4fe1\u606f\u4e3a\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"28536 was killed\n"})})]})}function a(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(g,{...n})}):g(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>s});var o=i(296540);const t={},c=o.createContext(t);function r(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);