"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[75108],{303436:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>n,toc:()=>g});const n=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u5355\u5143\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5-gtest","title":"\u5355\u5143\u6d4b\u8bd5-gtest","description":"gtest\u6a21\u5757\u5728GoFrame\u6846\u67b6\u4e0b\u7684\u4f7f\u7528\uff0c\u63d0\u4f9b\u7b80\u4fbf\u548c\u8f7b\u91cf\u7ea7\u7684\u5355\u5143\u6d4b\u8bd5\u65b9\u6cd5\u3002gtest\u57fa\u4e8e\u6807\u51c6\u5e93testing\u8fdb\u884c\u529f\u80fd\u6269\u5c55\uff0c\u589e\u52a0\u4e86\u591a\u4e2a\u6d4b\u8bd5\u7279\u6027\uff0c\u5982\u6d4b\u8bd5\u7528\u4f8b\u9694\u79bb\u548c\u5e38\u7528\u65ad\u8a00\u65b9\u6cd5\u3002\u9002\u7528\u4e8e\u5927\u90e8\u5206\u7684\u5355\u5143\u6d4b\u8bd5\u573a\u666f\uff0c\u5e76\u5728\u9700\u8981\u66f4\u590d\u6742\u6d4b\u8bd5\u65f6\uff0c\u53ef\u7ed3\u5408\u7b2c\u4e09\u65b9\u6d4b\u8bd5\u6846\u67b6\u5982testify\u548cgoconvey\u4f7f\u7528\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5355\u5143\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5-gtest.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u5355\u5143\u6d4b\u8bd5","slug":"/docs/components/test-gtest","permalink":"/docs/components/test-gtest","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u5355\u5143\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5-gtest.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/components/test-gtest","title":"\u5355\u5143\u6d4b\u8bd5-gtest","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","\u5355\u5143\u6d4b\u8bd5","gtest","\u6d4b\u8bd5\u65ad\u8a00","GoFrame\u6846\u67b6","\u6d4b\u8bd5\u6846\u67b6","\u6d4b\u8bd5\u7528\u4f8b","Assert","goconvey","testify"],"description":"gtest\u6a21\u5757\u5728GoFrame\u6846\u67b6\u4e0b\u7684\u4f7f\u7528\uff0c\u63d0\u4f9b\u7b80\u4fbf\u548c\u8f7b\u91cf\u7ea7\u7684\u5355\u5143\u6d4b\u8bd5\u65b9\u6cd5\u3002gtest\u57fa\u4e8e\u6807\u51c6\u5e93testing\u8fdb\u884c\u529f\u80fd\u6269\u5c55\uff0c\u589e\u52a0\u4e86\u591a\u4e2a\u6d4b\u8bd5\u7279\u6027\uff0c\u5982\u6d4b\u8bd5\u7528\u4f8b\u9694\u79bb\u548c\u5e38\u7528\u65ad\u8a00\u65b9\u6cd5\u3002\u9002\u7528\u4e8e\u5927\u90e8\u5206\u7684\u5355\u5143\u6d4b\u8bd5\u573a\u666f\uff0c\u5e76\u5728\u9700\u8981\u66f4\u590d\u6742\u6d4b\u8bd5\u65f6\uff0c\u53ef\u7ed3\u5408\u7b2c\u4e09\u65b9\u6d4b\u8bd5\u6846\u67b6\u5982testify\u548cgoconvey\u4f7f\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5355\u5143\u6d4b\u8bd5","permalink":"/docs/components/test"},"next":{"title":"\u9519\u8bef\u7ba1\u7406","permalink":"/docs/components/error"}}');var c=s(474848),r=s(28453);const o={slug:"/docs/components/test-gtest",title:"\u5355\u5143\u6d4b\u8bd5-gtest",sidebar_position:0,hide_title:!0,keywords:["GoFrame","\u5355\u5143\u6d4b\u8bd5","gtest","\u6d4b\u8bd5\u65ad\u8a00","GoFrame\u6846\u67b6","\u6d4b\u8bd5\u6846\u67b6","\u6d4b\u8bd5\u7528\u4f8b","Assert","goconvey","testify"],description:"gtest\u6a21\u5757\u5728GoFrame\u6846\u67b6\u4e0b\u7684\u4f7f\u7528\uff0c\u63d0\u4f9b\u7b80\u4fbf\u548c\u8f7b\u91cf\u7ea7\u7684\u5355\u5143\u6d4b\u8bd5\u65b9\u6cd5\u3002gtest\u57fa\u4e8e\u6807\u51c6\u5e93testing\u8fdb\u884c\u529f\u80fd\u6269\u5c55\uff0c\u589e\u52a0\u4e86\u591a\u4e2a\u6d4b\u8bd5\u7279\u6027\uff0c\u5982\u6d4b\u8bd5\u7528\u4f8b\u9694\u79bb\u548c\u5e38\u7528\u65ad\u8a00\u65b9\u6cd5\u3002\u9002\u7528\u4e8e\u5927\u90e8\u5206\u7684\u5355\u5143\u6d4b\u8bd5\u573a\u666f\uff0c\u5e76\u5728\u9700\u8981\u66f4\u590d\u6742\u6d4b\u8bd5\u65f6\uff0c\u53ef\u7ed3\u5408\u7b2c\u4e09\u65b9\u6d4b\u8bd5\u6846\u67b6\u5982testify\u548cgoconvey\u4f7f\u7528\u3002"},i=void 0,d={},g=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"gtest"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u7b80\u4fbf\u5316\u7684\u3001\u8f7b\u91cf\u7ea7\u7684\u3001\u5e38\u7528\u7684\u5355\u5143\u6d4b\u8bd5\u65b9\u6cd5\u3002\u662f\u57fa\u4e8e\u6807\u51c6\u5e93 ",(0,c.jsx)(t.code,{children:"testing"})," \u7684\u529f\u80fd\u6269\u5c55\u5c01\u88c5\uff0c\u4e3b\u8981\u589e\u52a0\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u7279\u6027\uff1a"]}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u591a\u6d4b\u8bd5\u9879\u7684\u9694\u79bb\u3002"}),"\n",(0,c.jsx)(t.li,{children:"\u589e\u52a0\u5e38\u7528\u7684\u4e00\u7cfb\u5217\u6d4b\u8bd5\u65ad\u8a00\u65b9\u6cd5\u3002"}),"\n",(0,c.jsx)(t.li,{children:"\u65ad\u8a00\u65b9\u6cd5\u652f\u6301\u591a\u79cd\u5e38\u89c1\u683c\u5f0f\u65ad\u8a00\u3002\u63d0\u9ad8\u6613\u7528\u6027\u3002"}),"\n",(0,c.jsx)(t.li,{children:"\u6d4b\u8bd5\u5931\u8d25\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u683c\u5f0f\u7edf\u4e00\u3002"}),"\n"]}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"gtest"})," \u8bbe\u8ba1\u4e3a\u6bd4\u8f83\u7b80\u4fbf\u6613\u7528\uff0c\u53ef\u4ee5\u6ee1\u8db3\u7edd\u5927\u90e8\u5206\u7684\u5355\u5143\u6d4b\u8bd5\u573a\u666f\uff0c\u5982\u679c\u6d89\u53ca\u66f4\u590d\u6742\u7684\u6d4b\u8bd5\u573a\u666f\uff0c\u53ef\u4ee5\u8003\u8651\u7b2c\u4e09\u65b9\u7684 ",(0,c.jsx)(t.code,{children:"testify"}),"\u3001 ",(0,c.jsx)(t.code,{children:"goconvey"})," \u7b49\u6d4b\u8bd5\u6846\u67b6\u3002"]})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/test/gtest"\n'})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/test/gtest",children:"https://pkg.go.dev/github.com/gogf/gf/v2/test/gtest"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:"func C(t *testing.T, f func(t *T))\nfunc Assert(value, expect interface{})\nfunc AssertEQ(value, expect interface{})\nfunc AssertGE(value, expect interface{})\nfunc AssertGT(value, expect interface{})\nfunc AssertIN(value, expect interface{})\nfunc AssertLE(value, expect interface{})\nfunc AssertLT(value, expect interface{})\nfunc AssertNE(value, expect interface{})\nfunc AssertNI(value, expect interface{})\nfunc Error(message ...interface{})\nfunc Fatal(message ...interface{})\n"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"\u7b80\u8981\u8bf4\u660e"}),"\uff1a"]}),"\n",(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsxs)(t.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"C"})," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a ",(0,c.jsx)(t.code,{children:"Case"}),"\uff0c\u8868\u793a\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u3002\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u65b9\u6cd5\u53ef\u4ee5\u5305\u542b\u591a\u4e2a ",(0,c.jsx)(t.code,{children:"C"}),"\uff0c\u6bcf\u4e00\u4e2a ",(0,c.jsx)(t.code,{children:"C"})," \u5305\u542b\u7684\u7528\u4f8b\u5f80\u5f80\u8868\u793a\u8be5\u65b9\u6cd5\u7684\u5176\u4e2d\u4e00\u79cd\u53ef\u80fd\u6027\u6d4b\u8bd5\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:["\u65ad\u8a00\u65b9\u6cd5 ",(0,c.jsx)(t.code,{children:"Assert"})," \u652f\u6301\u4efb\u610f\u7c7b\u578b\u7684\u53d8\u91cf\u6bd4\u8f83\u3002 ",(0,c.jsx)(t.code,{children:"AssertEQ"})," \u8fdb\u884c\u65ad\u8a00\u6bd4\u8f83\u65f6\uff0c\u4f1a\u540c\u65f6\u6bd4\u8f83\u7c7b\u578b\uff0c\u5373\u4e25\u683c\u65ad\u8a00\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:["\u4f7f\u7528\u5927\u5c0f\u6bd4\u8f83\u65ad\u8a00\u65b9\u6cd5\u5982 ",(0,c.jsx)(t.code,{children:"AssertGE"})," \u65f6\uff0c\u53c2\u6570\u652f\u6301\u5b57\u7b26\u4e32\u53ca\u6570\u5b57\u6bd4\u8f83\uff0c\u5176\u4e2d\u5b57\u7b26\u4e32\u6bd4\u8f83\u4e3a\u5927\u5c0f\u5199\u654f\u611f\u3002"]}),"\n",(0,c.jsxs)(t.li,{children:["\u5305\u542b\u65ad\u8a00\u65b9\u6cd5 ",(0,c.jsx)(t.code,{children:"AssertIN"})," \u53ca ",(0,c.jsx)(t.code,{children:"AssertNI"})," \u652f\u6301 ",(0,c.jsx)(t.code,{children:"slice"})," \u7c7b\u578b\u53c2\u6570\uff0c\u6682\u4e0d\u652f\u6301 ",(0,c.jsx)(t.code,{children:"map"})," \u7c7b\u578b\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(t.p,{children:["\u7528\u4e8e\u5355\u5143\u6d4b\u8bd5\u7684\u5305\u540d\u65e2\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"\u5305\u540d_test"}),"\uff0c\u4e5f\u53ef\u76f4\u63a5\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"\u5305\u540d"}),"\uff08\u5373\u4e0e\u6d4b\u8bd5\u5305\u540c\u540d\uff09\u3002\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f\u90fd\u6bd4\u8f83\u5e38\u89c1\uff0c\u4e14\u5728 ",(0,c.jsx)(t.code,{children:"Go"})," \u5b98\u65b9\u6807\u51c6\u5e93\u4e2d\u4e5f\u5747\u6709\u6d89\u53ca\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u9700\u8981\u6d4b\u8bd5\u5305\u7684\u79c1\u6709\u65b9\u6cd5/\u79c1\u6709\u53d8\u91cf\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"\u5305\u540d"})," \u547d\u540d\u5f62\u5f0f\u3002\u4e14\u5728\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"\u5305\u540d"})," \u547d\u540d\u65b9\u5f0f\u65f6\uff0c\u6ce8\u610f\u4ec5\u7528\u4e8e\u5355\u5143\u6d4b\u8bd5\u7684\u76f8\u5173\u65b9\u6cd5\uff08\u975e ",(0,c.jsx)(t.code,{children:"Test*"})," \u6d4b\u8bd5\u65b9\u6cd5\uff09\u4e00\u822c\u5b9a\u4e49\u4e3a\u79c1\u6709\uff0c\u4e0d\u8981\u516c\u5f00\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,c.jsxs)(t.p,{children:["\u4f8b\u5982 ",(0,c.jsx)(t.code,{children:"gstr"})," \u6a21\u5757\u5176\u4e2d\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff1a"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'package gstr_test\n\nimport (\n    "github.com/gogf/gf/v2/test/gtest"\n    "github.com/gogf/gf/v2/text/gstr"\n    "testing"\n)\n\nfunc Test_Trim(t *testing.T) {\n    gtest.C(t, func(t *gtest.T) {\n        t.Assert(gstr.Trim(" 123456\\n "),      "123456")\n        t.Assert(gstr.Trim("#123456#;", "#;"), "123456")\n    })\n}\n'})}),"\n",(0,c.jsx)(t.p,{children:"\u4e5f\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-go",children:'package gstr_test\n\nimport (\n    . "github.com/gogf/gf/v2/test/gtest"\n    "github.com/gogf/gf/v2/text/gstr"\n    "testing"\n)\n\nfunc Test_Trim(t *testing.T) {\n    C(t, func() {\n        Assert(gstr.Trim(" 123456\\n "),      "123456")\n        Assert(gstr.Trim("#123456#;", "#;"), "123456")\n    })\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u53ef\u4ee5\u5305\u542b\u591a\u4e2a ",(0,c.jsx)(t.code,{children:"C"}),"\uff0c\u4e00\u4e2a ",(0,c.jsx)(t.code,{children:"C"})," \u4e5f\u53ef\u4ee5\u6267\u884c\u591a\u4e2a\u65ad\u8a00\u3002 \u65ad\u8a00\u6210\u529f\u65f6\u76f4\u63a5PASS\uff0c\u4f46\u662f\u5982\u679c\u65ad\u8a00\u5931\u8d25\uff0c\u4f1a\u8f93\u51fa\u5982\u4e0b\u7c7b\u4f3c\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u5e76\u7ec8\u6b62\u5f53\u524d\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u7684\u7ee7\u7eed\u6267\u884c\uff08\u4e0d\u4f1a\u7ec8\u6b62\u540e\u7eed\u7684\u5176\u4ed6\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\uff09\u3002"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"=== RUN   Test_Trim\n[ASSERT] EXPECT 123456#; == 123456\n1. /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/text/gstr/gstr_z_unit_trim_test.go:20\n2. /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/text/gstr/gstr_z_unit_trim_test.go:18\n--- FAIL: Test_Trim (0.00s)\nFAIL\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(296540);const c={},r=n.createContext(c);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);