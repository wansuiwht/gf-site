"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["73292"],{106168:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>h,default:()=>l,assets:()=>i,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash","title":"\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"BASE64\u7F16\u89E3\u7801-gbase64","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/BASE64\u7F16\u89E3\u7801-gbase64"},"next":{"title":"HTML\u7F16\u89E3\u7801-ghtml","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/HTML\u7F16\u89E3\u7801-ghtml"}}'),t=r("785893"),c=r("250065");let d={title:"\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570-ghash",sidebar_position:3,hide_title:!0},h=void 0,i={},o=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u57FA\u51C6\u6D4B\u8BD5",id:"\u57FA\u51C6\u6D4B\u8BD5",level:2},{value:"\u91CD\u590D\u6D4B\u8BD5",id:"\u91CD\u590D\u6D4B\u8BD5",level:2}];function a(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,t.jsxs)(e.p,{children:["\u5E38\u7528\u7ECF\u5178\u54C8\u5E0C\u51FD\u6570Go\u8BED\u8A00\u5B9E\u73B0\uFF0C\u63D0\u4F9B ",(0,t.jsx)(e.code,{children:"uint32"})," \u53CA ",(0,t.jsx)(e.code,{children:"uint64"})," \u7C7B\u578B\u7684\u54C8\u5E0C\u51FD\u6570\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/ghash"\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghash",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/ghash"})}),"\n",(0,t.jsx)(e.h2,{id:"\u57FA\u51C6\u6D4B\u8BD5",children:"\u57FA\u51C6\u6D4B\u8BD5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"goos: darwin\ngoarch: amd64\npkg: github.com/gogf/gf/v2/encoding/ghash\ncpu: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz\nBenchmark_BKDR\nBenchmark_BKDR-12          39315165            26.88 ns/op\nBenchmark_BKDR64\nBenchmark_BKDR64-12        62891215            22.61 ns/op\nBenchmark_SDBM\nBenchmark_SDBM-12          49689925            25.40 ns/op\nBenchmark_SDBM64\nBenchmark_SDBM64-12        48860472            24.38 ns/op\nBenchmark_RS\nBenchmark_RS-12            39463418            25.52 ns/op\nBenchmark_RS64\nBenchmark_RS64-12         53318370            19.45 ns/op\nBenchmark_JS\nBenchmark_JS-12            53751033            23.20 ns/op\nBenchmark_JS64\nBenchmark_JS64-12          62440287            19.25 ns/op\nBenchmark_PJW\nBenchmark_PJW-12           42439626            27.85 ns/op\nBenchmark_PJW64\nBenchmark_PJW64-12         37491696            33.28 ns/op\nBenchmark_ELF\nBenchmark_ELF-12           38034584            31.74 ns/op\nBenchmark_ELF64\nBenchmark_ELF64-12         44047201            27.58 ns/op\nBenchmark_DJB\nBenchmark_DJB-12           46994352            22.60 ns/op\nBenchmark_DJB64\nBenchmark_DJB64-12         61980186            19.19 ns/op\nBenchmark_AP\nBenchmark_AP-12            29544234            40.58 ns/op\nBenchmark_AP64\nBenchmark_AP64-12          28123783            42.48 ns/op\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u91CD\u590D\u6D4B\u8BD5",children:"\u91CD\u590D\u6D4B\u8BD5"}),"\n",(0,t.jsxs)(e.p,{children:["\u6D4B\u8BD5\u7ED3\u679C\u4E0E\u6D4B\u8BD5\u5185\u5BB9\u6709\u5173\u8054\u6027\u548C\u968F\u673A\u6027\uFF0C\u6211\u8FD9\u91CC\u901A\u8FC7 ",(0,t.jsx)(e.code,{children:"uint64"})," \u6570\u503C\u7684\u8303\u56F4\u904D\u5386\u6765\u8FDB\u884C\u7B80\u5355\u7684\u91CD\u590D\u6027\u6D4B\u8BD5\uFF0C\u672C\u8EAB\u4E0D\u591F\u4E25\u8C28\uFF0C\u56E0\u6B64\u4EC5\u4F9B\u8DA3\u5473\u6027\u53C2\u8003\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "encoding/binary"\n    "fmt"\n    "math"\n\n    "github.com/gogf/gf/v2/encoding/ghash"\n)\n\nfunc main() {\n    var (\n        m    = make(map[uint64]struct{})\n        b    = make([]byte, 8)\n        ok   bool\n        hash uint64\n    )\n    for i := uint64(0); i < math.MaxUint64; i++ {\n        binary.LittleEndian.PutUint64(b, i)\n        hash = ghash.PJW64(b)\n        if _, ok = m[hash]; ok {\n            fmt.Println("repeated found:", i)\n            break\n        }\n        m[hash] = struct{}{}\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u54C8\u5E0C\u51FD\u6570"}),(0,t.jsx)(e.th,{children:"\u91CD\u590D\u4F4D\u7F6E"}),(0,t.jsx)(e.th,{children:"\u5907\u6CE8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"AP64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"8388640"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"BKDR64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"33536"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"DJB64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"8448"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"ELF64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"4096"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"JS64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"734"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"PJW64"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"2"})}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"RS64"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"32G Memory OOM"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"SDBM64"})}),(0,t.jsx)(e.td,{children:"-"}),(0,t.jsx)(e.td,{children:"32G Memory OOM"})]})]})]})]})}function l(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return h},a:function(){return d}});var s=r(667294);let t={},c=s.createContext(t);function d(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);