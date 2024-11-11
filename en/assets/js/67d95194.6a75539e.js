"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[50006],{671164:(o,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>e,toc:()=>p});const e=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","title":"\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","description":"\u5728GoFrame\u6846\u67b6\u4e0b\uff0c\u94fe\u8868(container/glist)\u7684\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\u3002\u901a\u8fc7\u4e00\u7cfb\u5217\u57fa\u51c6\u6d4b\u8bd5\uff0c\u5305\u62ecPushBack\u3001PushFront\u3001Len\u3001PopFront\u548cPopBack\uff0c\u8bc4\u4f30\u4e86\u94fe\u8868\u64cd\u4f5c\u7684\u6548\u7387\u548c\u6027\u80fd\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u4f18\u5316\u4ee3\u7801\u6027\u80fd\u3002","source":"@site/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist","slug":"/docs/components/container-glist-benchmark","permalink":"/en/docs/components/container-glist-benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/components/container-glist-benchmark","title":"\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u94fe\u8868\u6027\u80fd\u6d4b\u8bd5","Go\u8bed\u8a00","\u6027\u80fd\u57fa\u51c6","PushBack","PushFront","Len","PopFront","PopBack"],"description":"\u5728GoFrame\u6846\u67b6\u4e0b\uff0c\u94fe\u8868(container/glist)\u7684\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\u3002\u901a\u8fc7\u4e00\u7cfb\u5217\u57fa\u51c6\u6d4b\u8bd5\uff0c\u5305\u62ecPushBack\u3001PushFront\u3001Len\u3001PopFront\u548cPopBack\uff0c\u8bc4\u4f30\u4e86\u94fe\u8868\u64cd\u4f5c\u7684\u6548\u7387\u548c\u6027\u80fd\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u4f18\u5316\u4ee3\u7801\u6027\u80fd\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528","permalink":"/en/docs/components/container-glist-example"},"next":{"title":"\u6cdb\u578b\u7c7b\u578b-gvar","permalink":"/en/docs/components/container-gvar"}}');var s=t(474848),c=t(28453);const r={slug:"/docs/components/container-glist-benchmark",title:"\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u94fe\u8868\u6027\u80fd\u6d4b\u8bd5","Go\u8bed\u8a00","\u6027\u80fd\u57fa\u51c6","PushBack","PushFront","Len","PopFront","PopBack"],description:"\u5728GoFrame\u6846\u67b6\u4e0b\uff0c\u94fe\u8868(container/glist)\u7684\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\u3002\u901a\u8fc7\u4e00\u7cfb\u5217\u57fa\u51c6\u6d4b\u8bd5\uff0c\u5305\u62ecPushBack\u3001PushFront\u3001Len\u3001PopFront\u548cPopBack\uff0c\u8bc4\u4f30\u4e86\u94fe\u8868\u64cd\u4f5c\u7684\u6548\u7387\u548c\u6027\u80fd\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u4f18\u5316\u4ee3\u7801\u6027\u80fd\u3002"},a=void 0,i={},p=[];function l(o){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,c.R)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/v2/blob/master/container/glist/glist_z_bench_test.go",children:"https://github.com/gogf/gf/v2/blob/master/container/glist/glist_z_bench_test.go"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"goos: linux\ngoarch: amd64\npkg: github.com/gogf/gf/v2/container/glist\nBenchmark_PushBack-4             5000000               268 ns/op              56 B/op          2 allocs/op\nBenchmark_PushFront-4           10000000               435 ns/op              56 B/op          2 allocs/op\nBenchmark_Len-4                 30000000              44.5 ns/op               0 B/op          0 allocs/op\nBenchmark_PopFront-4            20000000              71.1 ns/op               0 B/op          0 allocs/op\nBenchmark_PopBack-4             30000000              70.1 ns/op               0 B/op          0 allocs/op\nPASS\n"})})]})}function d(o={}){const{wrapper:n}={...(0,c.R)(),...o.components};return n?(0,s.jsx)(n,{...o,children:(0,s.jsx)(l,{...o})}):l(o)}},28453:(o,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var e=t(296540);const s={},c=e.createContext(s);function r(o){const n=e.useContext(c);return e.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function a(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:r(o.components),e.createElement(c.Provider,{value:n},o.children)}}}]);