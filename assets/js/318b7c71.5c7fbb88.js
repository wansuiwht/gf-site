"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["13838"],{234728:function(e,n,o){o.r(n),o.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>g,assets:()=>d,toc:()=>c,frontMatter:()=>t});var i=JSON.parse('{"id":"docs/\u5F00\u53D1\u5DE5\u5177/\u7248\u672C\u67E5\u770B-version","title":"\u7248\u672C\u67E5\u770B-version","description":"\u4F7F\u7528GoFrame\u547D\u4EE4\u884C\u5DE5\u5177\u67E5\u770B\u7248\u672C\u4FE1\u606F\uFF0C\u5305\u62ECgf -v\u548Cgf version\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u5185\u5BB9\u6DB5\u76D6\u4E0D\u540C\u7248\u672C\u7684\u4F7F\u7528\u793A\u4F8B\uFF0C\u5C55\u793AGoFrame\u5728\u9879\u76EE\u4E2D\u7684\u5177\u4F53\u7248\u672C\u4FE1\u606F\uFF0C\u5E76\u8BF4\u660ECLI\u7F16\u8BD1\u7EC6\u8282\u548C\u6CE8\u610F\u4E8B\u9879\uFF0C\u5E2E\u52A9\u7528\u6237\u51C6\u786E\u7406\u89E3GoFrame\u7248\u672C\u4E0EGolang\u53CA\u76F8\u5173\u6280\u672F\u7684\u5173\u7CFB\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5F00\u53D1\u5DE5\u5177/\u7248\u672C\u67E5\u770B-version.md","sourceDirName":"docs/\u5F00\u53D1\u5DE5\u5177","slug":"/docs/cli/version","permalink":"/2.7.x/docs/cli/version","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5F00\u53D1\u5DE5\u5177/\u7248\u672C\u67E5\u770B-version.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/cli/version","title":"\u7248\u672C\u67E5\u770B-version","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gf\u547D\u4EE4\u884C","\u7248\u672C\u67E5\u770B","gf version","CLI\u5DE5\u5177","Golang\u7248\u672C","\u6280\u672F\u6587\u6863","\u4EE3\u7801\u7F16\u8BD1","\u73AF\u5883\u914D\u7F6E"],"description":"\u4F7F\u7528GoFrame\u547D\u4EE4\u884C\u5DE5\u5177\u67E5\u770B\u7248\u672C\u4FE1\u606F\uFF0C\u5305\u62ECgf -v\u548Cgf version\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u5185\u5BB9\u6DB5\u76D6\u4E0D\u540C\u7248\u672C\u7684\u4F7F\u7528\u793A\u4F8B\uFF0C\u5C55\u793AGoFrame\u5728\u9879\u76EE\u4E2D\u7684\u5177\u4F53\u7248\u672C\u4FE1\u606F\uFF0C\u5E76\u8BF4\u660ECLI\u7F16\u8BD1\u7EC6\u8282\u548C\u6CE8\u610F\u4E8B\u9879\uFF0C\u5E2E\u52A9\u7528\u6237\u51C6\u786E\u7406\u89E3GoFrame\u7248\u672C\u4E0EGolang\u53CA\u76F8\u5173\u6280\u672F\u7684\u5173\u7CFB\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5DE5\u5177\u5B89\u88C5-install","permalink":"/2.7.x/docs/cli/install"},"next":{"title":"\u6846\u67B6\u5347\u7EA7-up","permalink":"/2.7.x/docs/cli/up"}}'),r=o("785893"),s=o("250065");let t={slug:"/docs/cli/version",title:"\u7248\u672C\u67E5\u770B-version",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gf\u547D\u4EE4\u884C","\u7248\u672C\u67E5\u770B","gf version","CLI\u5DE5\u5177","Golang\u7248\u672C","\u6280\u672F\u6587\u6863","\u4EE3\u7801\u7F16\u8BD1","\u73AF\u5883\u914D\u7F6E"],description:"\u4F7F\u7528GoFrame\u547D\u4EE4\u884C\u5DE5\u5177\u67E5\u770B\u7248\u672C\u4FE1\u606F\uFF0C\u5305\u62ECgf -v\u548Cgf version\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\u5185\u5BB9\u6DB5\u76D6\u4E0D\u540C\u7248\u672C\u7684\u4F7F\u7528\u793A\u4F8B\uFF0C\u5C55\u793AGoFrame\u5728\u9879\u76EE\u4E2D\u7684\u5177\u4F53\u7248\u672C\u4FE1\u606F\uFF0C\u5E76\u8BF4\u660ECLI\u7F16\u8BD1\u7EC6\u8282\u548C\u6CE8\u610F\u4E8B\u9879\uFF0C\u5E2E\u52A9\u7528\u6237\u51C6\u786E\u7406\u89E3GoFrame\u7248\u672C\u4E0EGolang\u53CA\u76F8\u5173\u6280\u672F\u7684\u5173\u7CFB\u3002"},l=void 0,d={},c=[{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"<code>&gt;= v2.5.7</code>",id:"-v257",level:3},{value:"<code>&lt; v2.5.6</code>",id:"-v256",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gf -v"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"gf version"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u4EE5\u67E5\u770B\u5F53\u524D ",(0,r.jsx)(n.code,{children:"gf"})," \u547D\u4EE4\u884C\u5DE5\u5177\u7F16\u8BD1\u65F6\u7684\u7248\u672C\u4FE1\u606F\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"-v257",children:(0,r.jsx)(n.code,{children:">= v2.5.7"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"$ gf version\nv2.7.2\nWelcome to GoFrame!\nEnv Detail:\n  Go Version: go1.22.2 linux/amd64\n  GF Version(go.mod):\n    github.com/gogf/gf/contrib/drivers/mysql/v2@v2.7.2\n    github.com/gogf/gf/v2@v2.7.2\nCLI Detail:\n  Installed At: /data/home/v_hlaghuang/go/bin/gf\n  Built Go Version: go1.20.8\n  Built GF Version: v2.7.2\n  Git Commit: 2024-06-26 10:08:04 b11caba5b03ed54fbb1415151f7d62b6d913179d\n  Built Time: 2024-06-26 10:09:50\nOthers Detail:\n  Docs: https://goframe.org\n  Now : 2024-07-17T15:48:57+08:00\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-v256",children:(0,r.jsx)(n.code,{children:"< v2.5.6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"$ gf version\nGoFrame CLI Tool v2.0.0, https://goframe.org\nGoFrame Version: v2.0.0-beta.0.20211214160159-19c9f0a48845 in current go.mod\nCLI Installed At: /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-cli/main\nCLI Built Detail:\n  Go Version:  go1.16.3\n  GF Version:  v2.0.0-beta\n  Git Commit:  2021-12-15 22:43:12 7884058b5df346d34ebab035224e415afb556c19\n  Build Time:  2021-12-15 23:00:43\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6253\u5370\u7684\u7248\u672C\u4FE1\u606F\u4E2D\u4F1A\u81EA\u52A8\u68C0\u6D4B\u5F53\u524D\u9879\u76EE\u4F7F\u7528\u7684 ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u7248\u672C\uFF08\u81EA\u52A8\u89E3\u6790 ",(0,r.jsx)(n.code,{children:"go.mod"}),"\uFF09\uFF0C\u5E76\u4EE5 ",(0,r.jsx)(n.code,{children:"GoFrame Version"})," \u7684\u4FE1\u606F\u6253\u5370\u51FA\u6765\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"CLI Built Detail"})," \u4FE1\u606F\u4E2D\u5C55\u793A\u7684\u662F\u5F53\u524D\u4E8C\u8FDB\u5236\u7F16\u8BD1\u65F6\u4F7F\u7528\u7684\u5404\u79CD ",(0,r.jsx)(n.code,{children:"Golang"})," \u7248\u672C\u4EE5\u53CA ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u7248\u672C\u4FE1\u606F\uFF0C\u7F16\u8BD1\u65F6\u7684 ",(0,r.jsx)(n.code,{children:"Git"})," \u63D0\u4EA4\u7248\u672C\u3001\u5F53\u524D\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u7F16\u8BD1\u65F6\u95F4\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5927\u5BB6\u8BF7\u52FF\u5C06 ",(0,r.jsx)(n.code,{children:"GoFrame Version"})," \u548C ",(0,r.jsx)(n.code,{children:"CLI Built Detail"})," \u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"GF Version"})," \u6DF7\u6DC6\u3002"]})})]})}function g(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return t}});var i=o(667294);let r={},s=i.createContext(r);function t(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);