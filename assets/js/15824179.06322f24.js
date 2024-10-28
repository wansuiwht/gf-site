"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[63534],{907296:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=n(474848),i=n(28453);const s={title:"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",sidebar_position:3},o=void 0,d={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",title:"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",description:"NewOption \u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9519\u8bef\u5bf9\u8c61\u521b\u5efa",source:"@site/versioned_docs/version-2.1.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/5-\u9519\u8bef\u5904\u7406/3-\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/5-\u9519\u8bef\u5904\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",permalink:"/gf-site/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.1.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/5-\u9519\u8bef\u5904\u7406/3-\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027.md",tags:[],version:"2.1.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"\u9519\u8bef\u5904\u7406-\u5176\u4ed6\u7279\u6027",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u9519\u8bef\u5904\u7406-\u9519\u8bef\u6bd4\u8f83",permalink:"/gf-site/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u9519\u8bef\u6bd4\u8f83"},next:{title:"\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u9519\u8bef\u5904\u7406/\u9519\u8bef\u5904\u7406-\u6027\u80fd\u6d4b\u8bd5"}},c={},l=[{value:"<code>NewOption</code> \u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9519\u8bef\u5bf9\u8c61\u521b\u5efa",id:"newoption-\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9519\u8bef\u5bf9\u8c61\u521b\u5efa",level:2},{value:"<code>fmt</code> \u683c\u5f0f\u5316",id:"fmt-\u683c\u5f0f\u5316",level:2},{value:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301",id:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301",level:2}];function a(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h2,{id:"newoption-\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9519\u8bef\u5bf9\u8c61\u521b\u5efa",children:[(0,t.jsx)(r.code,{children:"NewOption"})," \u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9519\u8bef\u5bf9\u8c61\u521b\u5efa"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u8bf4\u660e\uff1a\u7528\u4e8e\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u9519\u8bef\u5bf9\u8c61\u521b\u5efa\u3002"}),"\n",(0,t.jsx)(r.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"NewOption(option Option) error\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'func ExampleNewOption() {\n   \terr := gerror.NewOption(gerror.Option{\n  \t\tText: "this feature is disabled in this storage",\n  \t\tCode: gcode.CodeNotSupported,\n  \t})\n}\n'})}),"\n",(0,t.jsxs)(r.h2,{id:"fmt-\u683c\u5f0f\u5316",children:[(0,t.jsx)(r.code,{children:"fmt"})," \u683c\u5f0f\u5316"]}),"\n",(0,t.jsxs)(r.p,{children:["\u901a\u8fc7\u4ee5\u4e0a\u793a\u4f8b\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"%+v"})," \u7684\u6253\u5370\u683c\u5f0f\u53ef\u4ee5\u6253\u5370\u51fa\u5b8c\u6574\u7684\u5806\u6808\u4fe1\u606f\uff0c\u5f53\u7136 ",(0,t.jsx)(r.code,{children:"gerror.Error"})," \u5bf9\u8c61\u652f\u6301\u591a\u79cdfmt\u683c\u5f0f\uff1a"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u683c\u5f0f\u7b26"}),(0,t.jsx)(r.th,{children:"\u8f93\u51fa\u5185\u5bb9"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"%v"}),", ",(0,t.jsx)(r.code,{children:"%s"})]}),(0,t.jsxs)(r.td,{children:["\u6253\u5370\u6240\u6709\u7684\u5c42\u7ea7\u9519\u8bef\u4fe1\u606f\uff0c\u6784\u6210\u5b8c\u6210\u7684\u5b57\u7b26\u4e32\u8fd4\u56de\uff0c\u591a\u4e2a\u5c42\u7ea7\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:":"})," \u62fc\u63a5\u3002"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"%-v"}),", ",(0,t.jsx)(r.code,{children:"%-s"})]}),(0,t.jsx)(r.td,{children:"\u6253\u5370\u5f53\u524d\u5c42\u7ea7\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u8fd4\u56de\u5b57\u7b26\u4e32\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%+s"})}),(0,t.jsx)(r.td,{children:"\u6253\u5370\u5b8c\u6574\u7684\u5806\u6808\u4fe1\u606f\u5217\u8868\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"%+v"})}),(0,t.jsxs)(r.td,{children:["\u6253\u5370\u6240\u6709\u7684\u5c42\u7ea7\u9519\u8bef\u4fe1\u606f\u5b57\u7b26\u4e32\uff0c\u4ee5\u53ca\u5b8c\u6574\u7684\u5806\u6808\u4fe1\u606f\uff0c\u7b49\u540c\u4e8e ",(0,t.jsx)(r.code,{children:"%s\\n%+s"}),"\u3002"]})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'package main\n\nimport (\n\t"errors"\n\t"fmt"\n\t"github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n\tvar err error\n\terr = errors.New("sql error")\n\terr = gerror.Wrap(err, "adding failed")\n\terr = gerror.Wrap(err, "api calling failed")\n\tfmt.Printf(" %%s: %s\\n", err)\n\tfmt.Printf("%%-s: %-s\\n", err)\n\tfmt.Println("%+s: ")\n\tfmt.Printf("%+s\\n", err)\n}\n\n// Output:\n//  %s: api calling failed: adding failed: sql error\n// %-s: api calling failed\n// %+s:\n// 1. api calling failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:14\n// 2. adding failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:13\n// 3. sql error\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301",children:"\u65e5\u5fd7\u8f93\u51fa\u652f\u6301"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"glog"})," \u65e5\u5fd7\u7ba1\u7406\u6a21\u5757\u5929\u7136\u652f\u6301\u5bf9 ",(0,t.jsx)(r.code,{children:"gerror"})," \u9519\u8bef\u5806\u6808\u6253\u5370\u652f\u6301\uff0c\u8fd9\u79cd\u652f\u6301\u4e0d\u662f\u5f3a\u8026\u5408\u6027\u7684\uff0c\u800c\u662f\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"fmt"})," \u683c\u5f0f\u5316\u6253\u5370\u63a5\u53e3\u652f\u6301\u7684\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'package main\n\nimport (\n\t"errors"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/errors/gerror"\n)\n\nfunc main() {\n\tvar err error\n\terr = errors.New("sql error")\n\terr = gerror.Wrap(err, "adding failed")\n\terr = gerror.Wrap(err, "api calling failed")\n\tg.Log().Printf("%+v", err)\n}\n\n// Output:\n// 2020-10-17 15:22:26.793 api calling failed: adding failed: sql error\n// 1. api calling failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:14\n// 2. adding failed\n//     1).  main.main\n//         /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/.example/other/test.go:13\n// 3. sql error\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var t=n(296540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);