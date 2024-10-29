"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[6437],{5602:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>g,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=t(74848),i=t(28453);const c={title:"\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c",sidebar_position:3,hide_title:!0},g=void 0,r={id:"\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c",title:"\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c",description:"\u5b8c\u6574\u7684\u65b9\u6cd5\u5217\u8868\u53ef\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a https://pkg.go.dev/github.com/gogf/gf/v2/os/glog",source:"@site/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6/3-\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c.md",sourceDirName:"2-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/2-\u6838\u5fc3\u7ec4\u4ef6/4-\u65e5\u5fd7\u7ec4\u4ef6/3-\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c.md",tags:[],version:"2.6.x",lastUpdatedBy:"John",lastUpdatedAt:1730214664e3,sidebarPosition:3,frontMatter:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u94fe\u5f0f\u64cd\u4f5c",sidebar_position:3,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u6587\u4ef6\u76ee\u5f55"},next:{title:"\u65e5\u5fd7\u7ec4\u4ef6-\u989c\u8272\u6253\u5370",permalink:"/gf-site/docs/2.6.x/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-\u989c\u8272\u6253\u5370"}},s={},l=[{value:"\u793a\u4f8b1, \u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1-\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u793a\u4f8b2, \u6253\u5370\u8c03\u7528\u884c\u53f7",id:"\u793a\u4f8b2-\u6253\u5370\u8c03\u7528\u884c\u53f7",level:2},{value:"\u793a\u4f8b3, \u6587\u4ef6\u56de\u6eaf <code>Skip</code>",id:"\u793a\u4f8b3-\u6587\u4ef6\u56de\u6eaf-skip",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u5b8c\u6574\u7684\u65b9\u6cd5\u5217\u8868\u53ef\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,o.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/glog",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/glog"})]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"glog"})," \u6a21\u5757\u652f\u6301\u975e\u5e38\u7b80\u4fbf\u7684 ",(0,o.jsx)(e.code,{children:"\u94fe\u5f0f\u64cd\u4f5c"})," \u65b9\u5f0f\uff0c\u4e3b\u8981\u7684\u94fe\u5f0f\u64cd\u4f5c\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"// \u91cd\u5b9a\u5411\u65e5\u5fd7\u8f93\u51fa\u63a5\u53e3\nfunc To(writer io.Writer) *Logger\n// \u65e5\u5fd7\u5185\u5bb9\u8f93\u51fa\u5230\u76ee\u5f55\nfunc Path(path string) *Logger\n// \u8bbe\u7f6e\u65e5\u5fd7\u6587\u4ef6\u5206\u7c7b\nfunc Cat(category string) *Logger\n// \u8bbe\u7f6e\u65e5\u5fd7\u6587\u4ef6\u683c\u5f0f\nfunc File(file string) *Logger\n// \u8bbe\u7f6e\u65e5\u5fd7\u6253\u5370\u7ea7\u522b\nfunc Level(level int) *Logger\n// \u8bbe\u7f6e\u65e5\u5fd7\u6253\u5370\u7ea7\u522b(\u5b57\u7b26\u4e32)\nfunc LevelStr(levelStr string) *Logger\n// \u8bbe\u7f6e\u6587\u4ef6\u56de\u6eaf\u503c\nfunc Skip(skip int) *Logger\n// \u662f\u5426\u5f00\u542ftrace\u6253\u5370\nfunc Stack(enabled bool) *Logger\n// \u5f00\u542ftrace\u6253\u5370\u5e76\u8bbe\u5b9a\u8fc7\u6ee4trace\u7684\u5b57\u7b26\u4e32\nfunc StackWithFilter(filter string) *Logger\n// \u662f\u5426\u5f00\u542f\u7ec8\u7aef\u8f93\u51fa\nfunc Stdout(enabled...bool) *Logger\n// \u662f\u5426\u8f93\u51fa\u65e5\u5fd7\u5934\u4fe1\u606f\nfunc Header(enabled...bool) *Logger\n// \u8f93\u51fa\u65e5\u5fd7\u8c03\u7528\u884c\u53f7\u4fe1\u606f\nfunc Line(long...bool) *Logger\n// \u5f02\u6b65\u8f93\u51fa\u65e5\u5fd7\nfunc Async(enabled...bool) *Logger\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u793a\u4f8b1-\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1, \u57fa\u672c\u4f7f\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gfile"\n)\n\nfunc main() {\n\tctx := context.TODO()\n\tpath := "/tmp/glog-cat"\n\tg.Log().SetPath(path)\n\tg.Log().Stdout(false).Cat("cat1").Cat("cat2").Print(ctx, "test")\n\tlist, err := gfile.ScanDir(path, "*", true)\n\tg.Dump(err)\n\tg.Dump(list)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-null",children:'[\n\t"/tmp/glog-cat/cat1",\n\t"/tmp/glog-cat/cat1/cat2",\n\t"/tmp/glog-cat/cat1/cat2/2018-10-10.log",\n]\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u793a\u4f8b2-\u6253\u5370\u8c03\u7528\u884c\u53f7",children:"\u793a\u4f8b2, \u6253\u5370\u8c03\u7528\u884c\u53f7"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tctx := context.TODO()\n\tg.Log().Line().Print(ctx, "this is the short file name with its line number")\n\tg.Log().Line(true).Print(ctx, "lone file name with line number")\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2019-05-23 09:22:58.141 glog_line.go:8: this is the short file name with its line number\n2019-05-23 09:22:58.142 /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/os/glog/glog_line.go:9: lone file name with line number\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"\u793a\u4f8b3-\u6587\u4ef6\u56de\u6eaf-skip",children:["\u793a\u4f8b3, \u6587\u4ef6\u56de\u6eaf ",(0,o.jsx)(e.code,{children:"Skip"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u6709\u65f6\u6211\u4eec\u901a\u8fc7\u4e00\u4e9b\u6a21\u5757\u5c01\u88c5\u4e86 ",(0,o.jsx)(e.code,{children:"glog"})," \u6a21\u5757\u6765\u6253\u5370\u65e5\u5fd7\uff0c\u4f8b\u5982\u5c01\u88c5\u4e86\u4e00\u4e2a ",(0,o.jsx)(e.code,{children:"logger"})," \u5305\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"logger.Print"})," \u6765\u6253\u5370\u65e5\u5fd7\uff0c\u8fd9\u4e2a\u65f6\u5019\u6253\u5370\u51fa\u6765\u7684\u8c03\u7528\u6587\u4ef6\u884c\u53f7\u603b\u662f\u540c\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u56e0\u4e3a\u5bf9\u4e8e ",(0,o.jsx)(e.code,{children:"glog"})," \u6765\u8bb2\uff0c\u5b83\u7684\u8c03\u7528\u65b9\u5373\u603b\u662f ",(0,o.jsx)(e.code,{children:"logger.Print"})," \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u56de\u6eaf\u503c\u6765\u8df3\u8fc7\u56de\u6eaf\u7684\u6587\u4ef6\u6570\uff0c\u4f7f\u7528 ",(0,o.jsx)(e.code,{children:"SetStackSkip"})," \u6216\u8005\u94fe\u5f0f\u65b9\u6cd5 ",(0,o.jsx)(e.code,{children:"Skip"})," \u5b9e\u73b0\u3002"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u6587\u4ef6\u56de\u6eaf\u503c\u7684\u8bbe\u7f6e\u540c\u6837\u4e5f\u4f1a\u5f71\u54cd ",(0,o.jsx)(e.code,{children:"Stack"})," \u8c03\u7528\u56de\u6eaf\u6253\u5370\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc PrintLog(ctx context.Context, content string) {\n\tg.Log().Skip(1).Line().Print(ctx, "line number with skip:", content)\n\tg.Log().Line().Print(ctx, "line number without skip:", content)\n}\n\nfunc main() {\n\tctx := context.TODO()\n\tPrintLog(ctx, "just test")\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:"2019-05-23 19:30:10.984 glog_line2.go:13: line number with skip: just test\n2019-05-23 19:30:10.984 glog_line2.go:9: line number without skip: just test\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>g,x:()=>r});var o=t(96540);const i={},c=o.createContext(i);function g(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:g(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);