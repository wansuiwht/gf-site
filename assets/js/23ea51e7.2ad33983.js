"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[80486],{23924:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(74848),c=t(28453);const o={title:"\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},r=void 0,d={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528",title:"\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528",description:"\u6267\u884cShell\u547d\u4ee4",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/14-\u8fdb\u7a0b\u7ba1\u7406-gproc/0-\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/14-\u8fdb\u7a0b\u7ba1\u7406-gproc",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/14-\u8fdb\u7a0b\u7ba1\u7406-gproc/0-\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:0,frontMatter:{title:"\u8fdb\u7a0b\u7ba1\u7406-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u8fdb\u7a0b\u7ba1\u7406-gproc",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/"},next:{title:"\u8fdb\u7a0b\u7ba1\u7406-\u8fdb\u7a0b\u901a\u4fe1",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u8fdb\u7a0b\u7ba1\u7406-gproc/\u8fdb\u7a0b\u7ba1\u7406-\u8fdb\u7a0b\u901a\u4fe1"}},s={},l=[{value:"\u6267\u884cShell\u547d\u4ee4",id:"\u6267\u884cshell\u547d\u4ee4",level:2},{value:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",id:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",level:2},{value:"\u591a\u8fdb\u7a0b\u7ba1\u7406",id:"\u591a\u8fdb\u7a0b\u7ba1\u7406",level:2}];function g(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u6267\u884cshell\u547d\u4ee4",children:"\u6267\u884cShell\u547d\u4ee4"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n\tr, err := gproc.ShellExec(gctx.New(), `sleep 3; echo "hello gf!";`)\n\tfmt.Println("result:", r)\n\tfmt.Println(err)\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u7a0b\u5e8f\u7b49\u5f85\u4e863\u79d2\u4e4b\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"result: hello gf!\n\n<nil>\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b",children:"\u4e3b\u8fdb\u7a0b\u4e0e\u5b50\u8fdb\u7a0b"}),"\n",(0,i.jsxs)(e.p,{children:["\u7531 ",(0,i.jsx)(e.code,{children:"gproc.Manager"})," \u5bf9\u8c61\u521b\u5efa\u7684\u8fdb\u7a0b\u90fd\u9ed8\u8ba4\u5e26\u5b50\u8fdb\u7a0b\u6807\u8bc6\uff0c\u5728\u5b50\u8fdb\u7a0b\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"gproc.IsChild()"})," \u65b9\u6cd5\u6765\u5224\u65ad\u81ea\u8eab\u662f\u5426\u4e3a\u5b50\u8fdb\u7a0b\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"os"\n\t"time"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\tif gproc.IsChild() {\n\t\tg.Log().Printf(ctx, "%d: Hi, I am child, waiting 3 seconds to die", gproc.Pid())\n\t\ttime.Sleep(time.Second)\n\t\tg.Log().Printf(ctx, "%d: 1", gproc.Pid())\n\t\ttime.Sleep(time.Second)\n\t\tg.Log().Printf(ctx, "%d: 2", gproc.Pid())\n\t\ttime.Sleep(time.Second)\n\t\tg.Log().Printf(ctx, "%d: 3", gproc.Pid())\n\t} else {\n\t\tm := gproc.NewManager()\n\t\tp := m.NewProcess(os.Args[0], os.Args, os.Environ())\n\t\tp.Start(ctx)\n\t\tp.Wait()\n\t\tg.Log().Printf(ctx, "%d: child died", gproc.Pid())\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2018-05-18 14:35:41.360 28285: Hi, I am child, waiting 3 seconds to die\n2018-05-18 14:35:42.361 28285: 1\n2018-05-18 14:35:43.361 28285: 2\n2018-05-18 14:35:44.361 28285: 3\n2018-05-18 14:35:44.362 28278: child died\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u591a\u8fdb\u7a0b\u7ba1\u7406",children:"\u591a\u8fdb\u7a0b\u7ba1\u7406"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gproc"})," \u9664\u4e86\u80fd\u591f\u521b\u5efa\u5b50\u8fdb\u7a0b\uff0c\u7ba1\u7406\u5b50\u8fdb\u7a0b\u4e4b\u5916\uff0c\u4e5f\u80fd\u7ba1\u7406\u975e\u81ea\u8eab\u521b\u5efa\u7684\u5176\u4ed6\u8fdb\u7a0b\u3002 ",(0,i.jsx)(e.code,{children:"gproc"})," \u53ef\u4ee5\u540c\u65f6\u7ba1\u7406\u591a\u4e2a\u8fdb\u7a0b\uff0c\u8fd9\u91cc\u4ee5\u5355\u4e2a\u8fdb\u7a0b\u4e3a\u4f8b\u6765\u6f14\u793a\u5bf9\u8fdb\u7a0b\u7684\u7ba1\u7406\u529f\u80fd\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6211\u4eec\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"gedit"})," \u8f6f\u4ef6(Linux\u4e0b\u5e38\u7528\u7684\u6587\u672c\u7f16\u8f91\u5668)\u968f\u610f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u5728\u8fdb\u7a0b\u5f53\u4e2d\u6211\u4eec\u770b\u5230\u8be5gedit\u7684\u8fdb\u7a0bID\u4e3a ",(0,i.jsx)(e.code,{children:"28536"})]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"    $ ps aux | grep gedit\n    john  28536  3.6  0.6 946208 56412 ?  Sl  14:39  0:00 gedit /home/john/Documents/text\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u6211\u4eec\u7684\u7a0b\u5e8f\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n   \t"fmt"\n\n   \t"github.com/gogf/gf/v2/os/gproc"\n)\n\nfunc main() {\n   \tpid := 28536\n   \tm := gproc.NewManager()\n   \tm.AddProcess(pid)\n   \tm.KillAll()\n   \tm.WaitAll()\n   \tfmt.Printf("%d was killed\\n", pid)\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c ",(0,i.jsx)(e.code,{children:"gedit"})," \u88ab\u5173\u95ed\uff0c\u7ec8\u7aef\u8f93\u51fa\u4fe1\u606f\u4e3a\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"28536 was killed\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>d});var i=t(96540);const c={},o=i.createContext(c);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);