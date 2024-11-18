"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["38058"],{337978:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var t=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/URL\u7F16\u89E3\u7801-gurl","title":"URL\u7F16\u89E3\u7801-gurl","description":"URL \u7F16\u7801\u89E3\u6790\u3002","source":"@site/versioned_docs/version-2.6.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/URL\u7F16\u89E3\u7801-gurl.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801","slug":"/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/URL\u7F16\u89E3\u7801-gurl","permalink":"/en/2.6.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/URL\u7F16\u89E3\u7801-gurl","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/URL\u7F16\u89E3\u7801-gurl.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"URL\u7F16\u89E3\u7801-gurl","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTML\u7F16\u89E3\u7801-ghtml","permalink":"/en/2.6.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/HTML\u7F16\u89E3\u7801-ghtml"},"next":{"title":"XML\u7F16\u89E3\u7801-gxml","permalink":"/en/2.6.x/\u7EC4\u4EF6\u5217\u8868/\u7F16\u7801\u89E3\u7801/XML\u7F16\u89E3\u7801-gxml"}}'),l=r("785893"),i=r("250065");let d={title:"URL\u7F16\u89E3\u7801-gurl",sidebar_position:5,hide_title:!0},s=void 0,c={},o=[{value:"<code>URL</code> \u53C2\u6570\u6784\u5EFA",id:"url-\u53C2\u6570\u6784\u5EFA",level:2},{value:"<code>URL</code> \u53C2\u6570\u7F16\u7801\u4E0E\u89E3\u7801",id:"url-\u53C2\u6570\u7F16\u7801\u4E0E\u89E3\u7801",level:2},{value:"\u89E3\u6790 <code>URL</code>",id:"\u89E3\u6790-url",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"URL"})," \u7F16\u7801\u89E3\u6790\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/encoding/gurl"\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gurl",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gurl"})}),"\n",(0,l.jsxs)(n.h2,{id:"url-\u53C2\u6570\u6784\u5EFA",children:[(0,l.jsx)(n.code,{children:"URL"})," \u53C2\u6570\u6784\u5EFA"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/encoding/gurl"\n    "net/url"\n)\n\nfunc main() {\n    // \u6784\u5EFAurl\u53C2\u6570\n    values := url.Values{}\n    values.Add("name", "gopher")\n    values.Add("limit", "20")\n    values.Add("page", "7")\n\n    // \u751F\u6210URL\u7F16\u7801\u67E5\u8BE2\u5B57\u7B26\u4E32 limit=20&name=gopher&page=7\n    urlStr := gurl.BuildQuery(values)\n    fmt.Println(urlStr)\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"limit=20&name=gopher&page=7\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"url-\u53C2\u6570\u7F16\u7801\u4E0E\u89E3\u7801",children:[(0,l.jsx)(n.code,{children:"URL"})," \u53C2\u6570\u7F16\u7801\u4E0E\u89E3\u7801"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/encoding/gurl"\n    "log"\n)\n\nfunc main() {\n    // \u7F16\u7801\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u8F6C\u4E49\uFF0C\u4EE5\u4FBF\u53EF\u4EE5\u5C06\u5176\u5B89\u5168\u5730\u653E\u7F6E\u5728URL\u67E5\u8BE2\u4E2D\u3002\n    encodeStr := gurl.Encode("limit=20&name=gopher&page=7")\n    fmt.Println(encodeStr)\n\n    // \u8FDB\u884CURL\u89E3\u7801\n    decodeStr, err := gurl.Decode("limit%3D20%26name%3Dgopher%26page%3D7")\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(decodeStr)\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"limit%3D20%26name%3Dgopher%26page%3D7\nlimit=20&name=gopher&page=7\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u89E3\u6790-url",children:["\u89E3\u6790 ",(0,l.jsx)(n.code,{children:"URL"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"component"})," \u53C2\u6570\u503C\u53EF\u9009\u9879:"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u503C"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"-1"}),(0,l.jsx)(n.td,{children:"all"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"scheme"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"host"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4"}),(0,l.jsx)(n.td,{children:"port"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"8"}),(0,l.jsx)(n.td,{children:"user"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"16"}),(0,l.jsx)(n.td,{children:"pass"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"32"}),(0,l.jsx)(n.td,{children:"path"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"64"}),(0,l.jsx)(n.td,{children:"query"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"128"}),(0,l.jsx)(n.td,{children:"fragment"})]})]})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/encoding/gurl"\n    "log"\n)\n\nfunc main() {\n    // \u89E3\u6790URL\u5E76\u8FD4\u56DE\u5176\u7EC4\u4EF6\n    data, err := gurl.ParseURL("http://127.0.0.1:8199/goods?limit=20&name=gopher&page=7", -1)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(data)\n    fmt.Println(data["host"])\n    fmt.Println(data["query"])\n    fmt.Println(data["path"])\n    fmt.Println(data["scheme"])\n    fmt.Println(data["fragment"])\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"map[fragment: host:127.0.0.1 pass: path:/goods port:8199 query:limit=20&name=gopher&page=7 scheme:http user:]\n127.0.0.1\nlimit=20&name=gopher&page=7\n/goods\nhttp\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var t=r(667294);let l={},i=t.createContext(l);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);