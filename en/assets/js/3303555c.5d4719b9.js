"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[43672],{697040:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u5de5\u5177\u65b9\u6cd5-gutil","title":"\u5de5\u5177\u65b9\u6cd5-gutil","description":"gutil\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u4e2d\u7528\u4e8e\u5c01\u88c5\u5e38\u7528\u5f00\u53d1\u5de5\u5177\u65b9\u6cd5\u7684\u6a21\u5757\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4fbf\u5229\u7684\u51fd\u6570\uff0c\u652f\u6301\u6570\u636e\u7ed3\u6784\u7684\u53cb\u597d\u8f93\u51fa\uff0c\u5982Dump\u548cDumpWithType\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7github\u5e93\u5f15\u5165gutil\u7ec4\u4ef6\uff0c\u4ee5\u63d0\u9ad8Go\u8bed\u8a00\u9879\u76ee\u5f00\u53d1\u6548\u7387\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u5de5\u5177\u65b9\u6cd5-gutil.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177","slug":"/docs/components/util-gutil","permalink":"/en/2.7.x/docs/components/util-gutil","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u5b9e\u7528\u5de5\u5177/\u5de5\u5177\u65b9\u6cd5-gutil.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/components/util-gutil","title":"\u5de5\u5177\u65b9\u6cd5-gutil","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gutil","\u5de5\u5177\u65b9\u6cd5","Go\u8bed\u8a00","\u5f00\u53d1\u7ec4\u4ef6","\u6570\u636e\u683c\u5f0f\u5316","\u63a5\u53e3\u6587\u6863","Dump\u51fd\u6570","DumpWithType"],"description":"gutil\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u4e2d\u7528\u4e8e\u5c01\u88c5\u5e38\u7528\u5f00\u53d1\u5de5\u5177\u65b9\u6cd5\u7684\u6a21\u5757\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4fbf\u5229\u7684\u51fd\u6570\uff0c\u652f\u6301\u6570\u636e\u7ed3\u6784\u7684\u53cb\u597d\u8f93\u51fa\uff0c\u5982Dump\u548cDumpWithType\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7github\u5e93\u5f15\u5165gutil\u7ec4\u4ef6\uff0c\u4ee5\u63d0\u9ad8Go\u8bed\u8a00\u9879\u76ee\u5f00\u53d1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5206\u9875\u7ba1\u7406-gpage","permalink":"/en/2.7.x/docs/components/util-gpage"},"next":{"title":"\u5355\u5143\u6d4b\u8bd5","permalink":"/en/2.7.x/docs/components/test"}}');var r=i(474848),s=i(28453);const o={slug:"/docs/components/util-gutil",title:"\u5de5\u5177\u65b9\u6cd5-gutil",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gutil","\u5de5\u5177\u65b9\u6cd5","Go\u8bed\u8a00","\u5f00\u53d1\u7ec4\u4ef6","\u6570\u636e\u683c\u5f0f\u5316","\u63a5\u53e3\u6587\u6863","Dump\u51fd\u6570","DumpWithType"],description:"gutil\u7ec4\u4ef6\u662fGoFrame\u6846\u67b6\u4e2d\u7528\u4e8e\u5c01\u88c5\u5e38\u7528\u5f00\u53d1\u5de5\u5177\u65b9\u6cd5\u7684\u6a21\u5757\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4fbf\u5229\u7684\u51fd\u6570\uff0c\u652f\u6301\u6570\u636e\u7ed3\u6784\u7684\u53cb\u597d\u8f93\u51fa\uff0c\u5982Dump\u548cDumpWithType\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7github\u5e93\u5f15\u5165gutil\u7ec4\u4ef6\uff0c\u4ee5\u63d0\u9ad8Go\u8bed\u8a00\u9879\u76ee\u5f00\u53d1\u6548\u7387\u3002"},c=void 0,l={},u=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:2},{value:"<code>Dump</code>",id:"dump",level:3},{value:"<code>DumpWithType</code>",id:"dumpwithtype",level:3},{value:"<code>DumpTo</code>",id:"dumpto",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gutil"})," \u7ec4\u4ef6\u5c01\u88c5\u4e86\u4e00\u4e9b\u5f00\u53d1\u4e2d\u5e38\u7528\u7684\u5de5\u5177\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/util/gutil"\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u63a5\u53e3\u6587\u6863\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gutil",children:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gutil"})}),"\n",(0,r.jsx)(e.h2,{id:"\u5e38\u7528\u65b9\u6cd5",children:"\u5e38\u7528\u65b9\u6cd5"}),"\n",(0,r.jsx)(e.h3,{id:"dump",children:(0,r.jsx)(e.code,{children:"Dump"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8bf4\u660e\uff1a ",(0,r.jsx)(e.code,{children:"Dump"})," \u5c06 ",(0,r.jsx)(e.code,{children:"values"})," \u4ee5\u66f4\u597d\u7684\u53ef\u8bfb\u6027\u7684\u65b9\u5f0f\u8f93\u51fa\u5728\u6807\u51c6\u8f93\u51fa\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"Dump(values ...interface{})\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'type User struct {\n      Name string\n      Age int\n}\n\ntype Location struct {\n      Province string\n      City string\n}\n\ntype UserInfo struct {\n      U User\n      L Location\n}\n\nfunc main() {\n      userList := make([]UserInfo, 0)\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u90ed\u5f3a",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u56db\u5ddd",\n              City:     "\u6210\u90fd",\n          },\n      })\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u9ec4\u9a9e",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u6c5f\u82cf",\n              City:     "\u5357\u4eac",\n          },\n      })\n\n      gutil.Dump(userList)\n}\n\n// Output:\n[\n      {\n          U: {\n              Name: "\u90ed\u5f3a",\n              Age:  18,\n          },\n          L: {\n              Province: "\u56db\u5ddd",\n              City:     "\u6210\u90fd",\n          },\n      },\n      {\n          U: {\n              Name: "\u9ec4\u9a9e",\n              Age:  18,\n          },\n          L: {\n              Province: "\u6c5f\u82cf",\n              City:     "\u5357\u4eac",\n          },\n      },\n]\n'})}),"\n",(0,r.jsx)(e.h3,{id:"dumpwithtype",children:(0,r.jsx)(e.code,{children:"DumpWithType"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8bf4\u660e\uff1a ",(0,r.jsx)(e.code,{children:"DumpWithType"})," \u548c ",(0,r.jsx)(e.code,{children:"Dump"})," \u7c7b\u4f3c\uff0c\u4f46\u662f\u591a\u4e86\u7c7b\u578b\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"DumpWithType(values ...interface{})\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'type User struct {\n      Name string\n      Age int\n}\n\ntype Location struct {\n      Province string\n      City string\n}\n\ntype UserInfo struct {\n      U User\n      L Location\n}\n\nfunc main() {\n      userList := make([]UserInfo, 0)\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u90ed\u5f3a",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u56db\u5ddd",\n              City:     "\u6210\u90fd",\n          },\n      })\n      userList = append(userList, UserInfo{\n          U: User{\n              Name: "\u9ec4\u9a9e",\n              Age:  18,\n          },\n          L: Location{\n              Province: "\u6c5f\u82cf",\n              City:     "\u5357\u4eac",\n          },\n      })\n\n      gutil.DumpWithType(userList)\n}\n\n// Output:\n[]main.UserInfo(2) [\n      main.UserInfo(2) {\n          U: main.User(2) {\n              Name: string(6) "\u90ed\u5f3a",\n              Age:  int(18),\n          },\n          L: main.Location(2) {\n              Province: string(6) "\u56db\u5ddd",\n              City:     string(6) "\u6210\u90fd",\n          },\n      },\n      main.UserInfo(2) {\n          U: main.User(2) {\n              Name: string(6) "\u9ec4\u9a9e",\n              Age:  int(18),\n          },\n          L: main.Location(2) {\n              Province: string(6) "\u6c5f\u82cf",\n              City:     string(6) "\u5357\u4eac",\n          },\n      },\n]\n'})}),"\n",(0,r.jsx)(e.h3,{id:"dumpto",children:(0,r.jsx)(e.code,{children:"DumpTo"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8bf4\u660e\uff1a ",(0,r.jsx)(e.code,{children:"DumpTo"})," \u5c06 ",(0,r.jsx)(e.code,{children:"value"})," \u4ee5\u81ea\u5b9a\u4e49\u7684\u8f93\u51fa\u5f62\u5f0f\u5199\u5165\u5230 ",(0,r.jsx)(e.code,{children:"write"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"DumpTo(writer io.Writer, value interface{}, option DumpOption)\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n      "bytes"\n      "fmt"\n      "github.com/gogf/gf/v2/util/gutil"\n      "io"\n)\n\ntype UserInfo struct {\n      Name     string\n      Age      int\n      Province string\n      City     string\n}\n\ntype DumpWriter struct {\n      Content string\n}\n\nfunc (d *DumpWriter) Write(p []byte) (n int, err error) {\n      buffer := bytes.NewBuffer(nil)\n      buffer.WriteString("I\'m Start!\\n")\n      buffer.WriteString(string(p))\n      buffer.WriteString("\\nI\'m End!\\n")\n\n      d.Content = buffer.String()\n\n      return buffer.Len(), nil\n}\n\nfunc main() {\n      u := UserInfo{\n          "a", 18, "b", "c",\n      }\n\n      var dw io.Writer = &DumpWriter{}\n\n      gutil.DumpTo(dw, u, gutil.DumpOption{})\n\n      fmt.Println(dw.(*DumpWriter).Content)\n}\n\n// Output:\nI\'m Start!\n{\n      Name:     "a",\n      Age:      18,\n      Province: "b",\n      City:     "c",\n}\nI\'m End!\n'})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>c});var t=i(296540);const r={},s=t.createContext(r);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);