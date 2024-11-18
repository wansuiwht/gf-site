"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["85608"],{181554:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>p,default:()=>_,assets:()=>c,toc:()=>l,frontMatter:()=>r});var o=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","title":"\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","description":"https://github.com/gogf/gf/v2/blob/master/container/gset/gset\\\\z\\\\bench\\\\test.go","source":"@site/versioned_docs/version-2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset","slug":"/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","permalink":"/2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528","permalink":"/2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u57FA\u672C\u4F7F\u7528"},"next":{"title":"\u96C6\u5408\u7C7B\u578B-\u65B9\u6CD5\u4ECB\u7ECD","permalink":"/2.0.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u96C6\u5408\u7C7B\u578B-gset/\u96C6\u5408\u7C7B\u578B-\u65B9\u6CD5\u4ECB\u7ECD"}}'),s=t("785893"),a=t("250065");let r={title:"\u96C6\u5408\u7C7B\u578B-\u6027\u80FD\u6D4B\u8BD5",sidebar_position:1,hide_title:!0},p=void 0,c={},l=[];function i(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/gset/gset_z_bench_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/gset/gset_z_bench_test.go"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"goos: linux\ngoarch: amd64\nBenchmark_IntSet_Add-4                  10000000               277 ns/op               8 B/op          0 allocs/op\nBenchmark_IntSet_Contains-4             20000000              60.6 ns/op               0 B/op          0 allocs/op\nBenchmark_IntSet_Remove-4               10000000               211 ns/op               0 B/op          0 allocs/op\nBenchmark_AnySet_Add-4                   5000000               312 ns/op              21 B/op          1 allocs/op\nBenchmark_AnySet_Contains-4             30000000              68.2 ns/op               0 B/op          0 allocs/op\nBenchmark_AnySet_Remove-4                5000000               267 ns/op               0 B/op          0 allocs/op\nBenchmark_StrSet_Add-4                   5000000               383 ns/op              20 B/op          1 allocs/op\nBenchmark_StrSet_Contains-4             10000000               160 ns/op               7 B/op          0 allocs/op\nBenchmark_StrSet_Remove-4                5000000               306 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Add-4           10000000               258 ns/op              35 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Contains-4      20000000               146 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_IntSet_Remove-4        10000000               173 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnySet_Add-4            5000000               355 ns/op              41 B/op          1 allocs/op\nBenchmark_Unsafe_AnySet_Contains-4      10000000               150 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_AnySet_Remove-4        200000000             11.9 ns/op               0 B/op          0 allocs/op\nBenchmark_Unsafe_StrSet_Add-4            5000000               486 ns/op              59 B/op          1 allocs/op\nBenchmark_Unsafe_StrSet_Contains-4       5000000               298 ns/op               7 B/op          0 allocs/op\nBenchmark_Unsafe_StrSet_Remove-4        10000000               158 ns/op               7 B/op          0 allocs/op\n"})})]})}function _(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return p},a:function(){return r}});var o=t(667294);let s={},a=o.createContext(s);function r(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);