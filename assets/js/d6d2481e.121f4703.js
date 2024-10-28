"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[56393],{574015:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>r,toc:()=>g});var i=t(474848),o=t(28453);const u={title:"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},c=void 0,r={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",title:"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/versioned_docs/version-2.3.x/2-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/6-\u961f\u5217\u7c7b\u578b-gqueue/0-\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"2-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/6-\u961f\u5217\u7c7b\u578b-gqueue",slug:"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/2-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/6-\u961f\u5217\u7c7b\u578b-gqueue/0-\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:0,frontMatter:{title:"\u961f\u5217\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u961f\u5217\u7c7b\u578b-gqueue",permalink:"/gf-site/docs/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/"},next:{title:"\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/docs/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5"}},s={},g=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u4f7f\u7528 <code>Queue.Pop</code>",id:"\u4f7f\u7528-queuepop",level:3},{value:"\u4f7f\u7528 <code>Queue.C</code>",id:"\u4f7f\u7528-queuec",level:3},{value:"\u5143\u7d20\u5165\u961f/\u51fa\u961f",id:"\u5143\u7d20\u5165\u961f\u51fa\u961f",level:2},{value:"\u961f\u5217\u957f\u5ea6",id:"\u961f\u5217\u957f\u5ea6",level:2},{value:"\u961f\u5217\u5173\u95ed",id:"\u961f\u5217\u5173\u95ed",level:2},{value:"<code>gqueue</code> \u4e0e <code>glist</code>",id:"gqueue-\u4e0e-glist",level:2}];function d(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,i.jsxs)(e.h3,{id:"\u4f7f\u7528-queuepop",children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Queue.Pop"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n    q := gqueue.New()\n\n    // \u6570\u636e\u751f\u4ea7\u8005\uff0c\u6bcf\u96941\u79d2\u5f80\u961f\u5217\u5199\u6570\u636e\n    gtimer.SetInterval(time.Second, func() {\n        v := gtime.Now().String()\n        q.Push(v)\n        fmt.Println("Push:", v)\n    })\n\n    // 3\u79d2\u540e\u5173\u95ed\u961f\u5217\n    gtimer.SetTimeout(3*time.Second, func() {\n        q.Close()\n    })\n\n    // \u6d88\u8d39\u8005\uff0c\u4e0d\u505c\u8bfb\u53d6\u961f\u5217\u6570\u636e\u5e76\u8f93\u51fa\u5230\u7ec8\u7aef\n\tfor {\n        if v := q.Pop(); v != nil {\n            fmt.Println(" Pop:", v)\n        } else {\n            break\n        }\n    }\n\n\t// \u7b2c3\u79d2\u65f6\u5173\u95ed\u961f\u5217\uff0c\u8fd9\u65f6\u7a0b\u5e8f\u7acb\u5373\u9000\u51fa\uff0c\u56e0\u6b64\u7ed3\u679c\u4e2d\u53ea\u4f1a\u6253\u53702\u79d2\u7684\u6570\u636e\u3002 \u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a\n\t// Output:\n\t// Push: 2021-09-07 14:03:00\n\t//  Pop: 2021-09-07 14:03:00\n\t// Push: 2021-09-07 14:03:01\n\t//  Pop: 2021-09-07 14:03:01\n}\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"\u4f7f\u7528-queuec",children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Queue.C"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t_ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n\t"github.com/gogf/gf/v2/container/gqueue"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gtime"\n\t"github.com/gogf/gf/v2/os/gtimer"\n)\n\nfunc main() {\n\tqueue := gqueue.New()\n\tgtimer.AddTimes(gctx.GetInitCtx(), time.Second, 3, func(ctx context.Context) {\n\t\tqueue.Push(gtime.Now().String())\n\t})\n\tfor {\n\t\tselect {\n\t\tcase queueItem := <-queue.C:\n\t\t\tfmt.Println(queueItem)\n\n\t\tcase <-time.After(3 * time.Second):\n\t\t\tfmt.Println("timeout, exit loop")\n\t\t\treturn\n\t\t}\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u5143\u7d20\u5165\u961f\u51fa\u961f",children:"\u5143\u7d20\u5165\u961f/\u51fa\u961f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n\tq := gqueue.New()\n\n\tfor i := 0; i < 10; i++ {\n\t\tq.Push(i)\n\t}\n\n\tfmt.Println(q.Pop())\n\tfmt.Println(q.Pop())\n\tfmt.Println(q.Pop())\n\n\t// Output:\n\t// 0\n\t// 1\n\t// 2\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u961f\u5217\u957f\u5ea6",children:"\u961f\u5217\u957f\u5ea6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n\tq := gqueue.New()\n\n\tq.Push(1)\n\tq.Push(2)\n\n\tfmt.Println(q.Len())\n\t// size\u662flen\u65b9\u6cd5\u7684\u522b\u79f0\n\tfmt.Println(q.Size())\n\n\t// May Output:\n\t// 2\n\t// 2\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u961f\u5217\u5173\u95ed",children:"\u961f\u5217\u5173\u95ed"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/os/gtimer"\n    "github.com/gogf/gf/v2/container/gqueue"\n)\n\nfunc main() {\n\tq := gqueue.New()\n\n\tfor i := 0; i < 10; i++ {\n\t\tq.Push(i)\n\t}\n\n\tfmt.Println(q.Pop())\n\tq.Close()\n\tfmt.Println(q.Pop())\n\tfmt.Println(q.Len())\n\n\t// Output:\n\t// 0\n\t// <nil>\n\t// 0\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"gqueue-\u4e0e-glist",children:[(0,i.jsx)(e.code,{children:"gqueue"})," \u4e0e ",(0,i.jsx)(e.code,{children:"glist"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"gqueue"})," \u7684\u5e95\u5c42\u57fa\u4e8e ",(0,i.jsx)(e.code,{children:"glist"})," \u94fe\u8868\u5b9e\u73b0\u52a8\u6001\u5927\u5c0f\u7279\u6027\uff0c\u5728\u961f\u5217\u6ee1\u6216\u8005\u5728\u961f\u5217\u7a7a\u65f6\u8bfb\u53d6\u6570\u636e\u4f1a\u4ea7\u751f\u963b\u585e\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"glist"})," \u662f\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u94fe\u8868\uff0c\u5e76\u53ef\u4ee5\u5141\u8bb8\u5728\u5173\u95ed\u5e76\u53d1\u5b89\u5168\u7279\u6027\u7684\u65f6\u548c\u4e00\u4e2a\u666e\u901a\u7684 ",(0,i.jsx)(e.code,{children:"list"})," \u94fe\u8868\u65e0\u5f02\uff0c\u5728\u5b58\u50a8\u548c\u8bfb\u53d6\u6570\u636e\u65f6\u4e0d\u4f1a\u53d1\u751f\u963b\u585e\u3002"]})]})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(296540);const o={},u=i.createContext(o);function c(n){const e=i.useContext(u);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(u.Provider,{value:e},n.children)}}}]);