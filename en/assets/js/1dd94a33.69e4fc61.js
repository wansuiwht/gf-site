"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[64194],{207935:(o,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","title":"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","description":"\u901a\u8fc7\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u5bf9GoFrame\u6846\u67b6\u4e2d\u7684\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u4f7f\u7528\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u4ecb\u7ecd\u548c\u5206\u6790\u3002\u901a\u8fc7\u591a\u4e2a\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u6d4b\u8bd5\uff0c\u5c55\u793a\u4e86\u5176\u5728\u4e0d\u540c\u6761\u4ef6\u4e0b\u7684\u6548\u7387\u8868\u73b0\uff0c\u4e3a\u5f00\u53d1\u8005\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u65f6\u63d0\u4f9b\u4f18\u5316\u53c2\u8003\u548c\u6307\u5bfc\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362","slug":"/docs/core/gconv-benchmark","permalink":"/en/docs/core/gconv-benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/core/gconv-benchmark","title":"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","\u7c7b\u578b\u8f6c\u6362","\u6027\u80fd\u6d4b\u8bd5","\u57fa\u51c6\u6d4b\u8bd5","gconv","GoFrame\u6846\u67b6","\u57fa\u672c\u7c7b\u578b\u8f6c\u6362","Go\u8bed\u8a00","\u4f18\u5316","\u6027\u80fd"],"description":"\u901a\u8fc7\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u5bf9GoFrame\u6846\u67b6\u4e2d\u7684\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u4f7f\u7528\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u4ecb\u7ecd\u548c\u5206\u6790\u3002\u901a\u8fc7\u591a\u4e2a\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u6d4b\u8bd5\uff0c\u5c55\u793a\u4e86\u5176\u5728\u4e0d\u540c\u6761\u4ef6\u4e0b\u7684\u6548\u7387\u8868\u73b0\uff0c\u4e3a\u5f00\u53d1\u8005\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u65f6\u63d0\u4f9b\u4f18\u5316\u53c2\u8003\u548c\u6307\u5bfc\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7c7b\u578b\u8f6c\u6362-UnmarshalValue","permalink":"/en/docs/core/gconv-unmarshal-value"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406","permalink":"/en/docs/core/gcache"}}');var c=e(474848),t=e(28453);const a={slug:"/docs/core/gconv-benchmark",title:"\u7c7b\u578b\u8f6c\u6362-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:7,hide_title:!0,keywords:["GoFrame","\u7c7b\u578b\u8f6c\u6362","\u6027\u80fd\u6d4b\u8bd5","\u57fa\u51c6\u6d4b\u8bd5","gconv","GoFrame\u6846\u67b6","\u57fa\u672c\u7c7b\u578b\u8f6c\u6362","Go\u8bed\u8a00","\u4f18\u5316","\u6027\u80fd"],description:"\u901a\u8fc7\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u5bf9GoFrame\u6846\u67b6\u4e2d\u7684\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u4f7f\u7528\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u4ecb\u7ecd\u548c\u5206\u6790\u3002\u901a\u8fc7\u591a\u4e2a\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u6d4b\u8bd5\uff0c\u5c55\u793a\u4e86\u5176\u5728\u4e0d\u540c\u6761\u4ef6\u4e0b\u7684\u6548\u7387\u8868\u73b0\uff0c\u4e3a\u5f00\u53d1\u8005\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u65f6\u63d0\u4f9b\u4f18\u5316\u53c2\u8003\u548c\u6307\u5bfc\u3002"},r=void 0,p={},l=[];function i(o){const n={code:"code",p:"p",pre:"pre",...(0,t.R)(),...o.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'john@john-B85M:~/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/util/gconv$ go test *.go -bench=".*" -benchmem\ngoos: linux\ngoarch: amd64\nBenchmarkString-4               20000000                71.8 ns/op            24 B/op          2 allocs/op\nBenchmarkInt-4                  100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkInt8-4                 100000000               24.5 ns/op             8 B/op          1 allocs/op\nBenchmarkInt16-4                50000000                23.8 ns/op             8 B/op          1 allocs/op\nBenchmarkInt32-4                100000000               24.1 ns/op             8 B/op          1 allocs/op\nBenchmarkInt64-4                100000000               21.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint-4                 100000000               22.2 ns/op             8 B/op          1 allocs/op\nBenchmarkUint8-4                50000000                25.6 ns/op             8 B/op          1 allocs/op\nBenchmarkUint16-4               50000000                32.1 ns/op             8 B/op          1 allocs/op\nBenchmarkUint32-4               50000000                27.7 ns/op             8 B/op          1 allocs/op\nBenchmarkUint64-4               50000000                28.1 ns/op             8 B/op          1 allocs/op\nBenchmarkFloat32-4              10000000               155 ns/op              24 B/op          2 allocs/op\nBenchmarkFloat64-4              10000000               177 ns/op              24 B/op          2 allocs/op\nBenchmarkTime-4                  5000000               240 ns/op              72 B/op          4 allocs/op\nBenchmarkTimeDuration-4         50000000                26.2 ns/op             8 B/op          1 allocs/op\nBenchmarkBytes-4                10000000               149 ns/op             128 B/op          3 allocs/op\nBenchmarkStrings-4              10000000               223 ns/op              40 B/op          3 allocs/op\nBenchmarkInts-4                 20000000                55.0 ns/op            16 B/op          2 allocs/op\nBenchmarkFloats-4               10000000               186 ns/op              32 B/op          3 allocs/op\nBenchmarkInterfaces-4           20000000                66.6 ns/op            24 B/op          2 allocs/op\nPASS\nok      command-line-arguments  35.356s\n'})})]})}function m(o={}){const{wrapper:n}={...(0,t.R)(),...o.components};return n?(0,c.jsx)(n,{...o,children:(0,c.jsx)(i,{...o})}):i(o)}},28453:(o,n,e)=>{e.d(n,{R:()=>a,x:()=>r});var s=e(296540);const c={},t=s.createContext(c);function a(o){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function r(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(c):o.components||c:a(o.components),s.createElement(t.Provider,{value:n},o.children)}}}]);