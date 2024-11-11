"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[6271],{505345:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/Golang\u679a\u4e3e\u503c\u7ba1\u7406","title":"Golang\u679a\u4e3e\u503c\u7ba1\u7406","description":"\u5982\u4f55\u5728Go\u8bed\u8a00\u4e2d\u5b9e\u73b0\u679a\u4e3e\u503c\uff0c\u867d\u7136Go\u8bed\u8a00\u672c\u8eab\u4e0d\u652f\u6301enum\u5b9a\u4e49\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7const\u6765\u6a21\u62df\u679a\u4e3e\u7c7b\u578b\u3002\u8fd9\u79cd\u65b9\u6cd5\u5728Kubernetes\u9879\u76ee\u4e2d\u5e7f\u6cdb\u4f7f\u7528\u3002\u6b64\u5916\uff0c\u672c\u6587\u8fd8\u63a2\u8ba8\u4e86\u5982\u4f55\u5728\u8de8\u670d\u52a1\u8c03\u7528\u548c\u524d\u540e\u7aef\u534f\u4f5c\u4e2d\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c\u7684\u95ee\u9898\uff0c\u5e76\u63d0\u4f9b\u4e86\u4f7f\u7528OpenAPI\u6807\u51c6\u534f\u8bae\u4e0e\u76f8\u5173\u5de5\u5177\u6765\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/Golang\u679a\u4e3e\u503c\u7ba1\u7406.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1","slug":"/docs/design/enums","permalink":"/docs/design/enums","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/Golang\u679a\u4e3e\u503c\u7ba1\u7406.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/design/enums","title":"Golang\u679a\u4e3e\u503c\u7ba1\u7406","sidebar_position":9,"hide_title":true,"keywords":["GoFrame\u6846\u67b6","Go\u8bed\u8a00","\u679a\u4e3e\u5b9e\u73b0","Kubernetes\u679a\u4e3e","Go\u5e38\u91cf","\u8de8\u670d\u52a1\u679a\u4e3e","OpenAPI\u679a\u4e3e","enumeration in Go","API\u5f00\u53d1","SDK\u751f\u6210"],"description":"\u5982\u4f55\u5728Go\u8bed\u8a00\u4e2d\u5b9e\u73b0\u679a\u4e3e\u503c\uff0c\u867d\u7136Go\u8bed\u8a00\u672c\u8eab\u4e0d\u652f\u6301enum\u5b9a\u4e49\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7const\u6765\u6a21\u62df\u679a\u4e3e\u7c7b\u578b\u3002\u8fd9\u79cd\u65b9\u6cd5\u5728Kubernetes\u9879\u76ee\u4e2d\u5e7f\u6cdb\u4f7f\u7528\u3002\u6b64\u5916\uff0c\u672c\u6587\u8fd8\u63a2\u8ba8\u4e86\u5982\u4f55\u5728\u8de8\u670d\u52a1\u8c03\u7528\u548c\u524d\u540e\u7aef\u534f\u4f5c\u4e2d\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c\u7684\u95ee\u9898\uff0c\u5e76\u63d0\u4f9b\u4e86\u4f7f\u7528OpenAPI\u6807\u51c6\u534f\u8bae\u4e0e\u76f8\u5173\u5de5\u5177\u6765\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u9690\u5f0f\u4e0e\u663e\u5f0f\u521d\u59cb\u5316","permalink":"/docs/design/initialization"},"next":{"title":"Context: \u4e1a\u52a1\u6d41\u7a0b\u5171\u4eab\u53d8\u91cf","permalink":"/docs/design/context-variable"}}');var s=o(474848),i=o(28453);const d={slug:"/docs/design/enums",title:"Golang\u679a\u4e3e\u503c\u7ba1\u7406",sidebar_position:9,hide_title:!0,keywords:["GoFrame\u6846\u67b6","Go\u8bed\u8a00","\u679a\u4e3e\u5b9e\u73b0","Kubernetes\u679a\u4e3e","Go\u5e38\u91cf","\u8de8\u670d\u52a1\u679a\u4e3e","OpenAPI\u679a\u4e3e","enumeration in Go","API\u5f00\u53d1","SDK\u751f\u6210"],description:"\u5982\u4f55\u5728Go\u8bed\u8a00\u4e2d\u5b9e\u73b0\u679a\u4e3e\u503c\uff0c\u867d\u7136Go\u8bed\u8a00\u672c\u8eab\u4e0d\u652f\u6301enum\u5b9a\u4e49\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7const\u6765\u6a21\u62df\u679a\u4e3e\u7c7b\u578b\u3002\u8fd9\u79cd\u65b9\u6cd5\u5728Kubernetes\u9879\u76ee\u4e2d\u5e7f\u6cdb\u4f7f\u7528\u3002\u6b64\u5916\uff0c\u672c\u6587\u8fd8\u63a2\u8ba8\u4e86\u5982\u4f55\u5728\u8de8\u670d\u52a1\u8c03\u7528\u548c\u524d\u540e\u7aef\u534f\u4f5c\u4e2d\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c\u7684\u95ee\u9898\uff0c\u5e76\u63d0\u4f9b\u4e86\u4f7f\u7528OpenAPI\u6807\u51c6\u534f\u8bae\u4e0e\u76f8\u5173\u5de5\u5177\u6765\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002"},a=void 0,r={},c=[{value:"Go\u5b9e\u73b0\u679a\u4e3e\u503c",id:"go\u5b9e\u73b0\u679a\u4e3e\u503c",level:2},{value:"\u5982\u4f55\u8de8\u670d\u52a1\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c",id:"\u5982\u4f55\u8de8\u670d\u52a1\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"go\u5b9e\u73b0\u679a\u4e3e\u503c",children:"Go\u5b9e\u73b0\u679a\u4e3e\u503c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Go"})," \u8bed\u8a00\u5e76\u6ca1\u6709\u63d0\u4f9b ",(0,s.jsx)(n.code,{children:"enum"})," \u7684\u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"const"})," \u6765\u6a21\u62df\u679a\u4e3e\u7c7b\u578b\uff0c\u8fd9\u4e5f\u662f ",(0,s.jsx)(n.code,{children:"Go"})," \u8bed\u8a00\u4e2d\u7ea6\u5b9a\u4fd7\u6210\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"Kubernetes"}),' \u9879\u76ee\u4e2d\uff0c\u6709\u5927\u91cf\u7684\u4ee5\u5e38\u91cf\u5f62\u5f0f\u5b9a\u4e49\u7684"\u679a\u4e3e\u503c"\uff1a']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'// PodPhase is a label for the condition of a pod at the current time.\ntype PodPhase string\n\n// These are the valid statuses of pods.\nconst (\n    // PodPending means the pod has been accepted by the system, but one or more of the containers\n    // has not been started. This includes time before being bound to a node, as well as time spent\n    // pulling images onto the host.\n    PodPending PodPhase = "Pending"\n    // PodRunning means the pod has been bound to a node and all of the containers have been started.\n    // At least one container is still running or is in the process of being restarted.\n    PodRunning PodPhase = "Running"\n    // PodSucceeded means that all containers in the pod have voluntarily terminated\n    // with a container exit code of 0, and the system is not going to restart any of these containers.\n    PodSucceeded PodPhase = "Succeeded"\n    // PodFailed means that all containers in the pod have terminated, and at least one container has\n    // terminated in a failure (exited with a non-zero exit code or was stopped by the system).\n    PodFailed PodPhase = "Failed"\n    // PodUnknown means that for some reason the state of the pod could not be obtained, typically due\n    // to an error in communicating with the host of the pod.\n    PodUnknown PodPhase = "Unknown"\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5982\u4f55\u8de8\u670d\u52a1\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c",children:"\u5982\u4f55\u8de8\u670d\u52a1\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u53ea\u662f\u9879\u76ee\u5185\u90e8\u4f7f\u7528\u679a\u4e3e\u503c\u6bd4\u8f83\u7b80\u5355\uff0c\u5b9a\u4e49\u5b8c\u4e86\u5185\u90e8\u4f7f\u7528\u5373\u53ef\uff0c\u4f46\u6d89\u53ca\u5230\u8de8\u670d\u52a1\u4e4b\u95f4\u8c03\u7528\uff0c\u6216\u8005\u524d\u540e\u7aef\u534f\u4f5c\u65f6\uff0c\u6548\u7387\u5c31\u6bd4\u8f83\u4f4e\u4e86\u3002\u5f53\u670d\u52a1\u9700\u8981\u7ed9\u5916\u90e8\u8c03\u7528\u8005\u5c55\u793a\u63a5\u53e3\u80fd\u529b\u65f6\uff0c\u5f80\u5f80\u9700\u8981\u751f\u6210 ",(0,s.jsx)(n.code,{children:"API"})," \u63a5\u53e3\u6587\u6863\uff08\u6216\u8005\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"proto"}),"\uff09\uff0c\u5f80\u5f80\u4e5f\u9700\u8981\u6839\u636e\u63a5\u53e3\u6587\u6863\uff08\u6587\u4ef6\uff09\u751f\u6210\u8c03\u7528\u7684\u5ba2\u6237\u7aef ",(0,s.jsx)(n.code,{children:"SDK"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u662f\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"proto"}),"\uff0c\u5f80\u5f80\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u6e90\u7801\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u95ee\u9898\u4e0d\u5927\u3002\u6211\u4eec\u8fd9\u91cc\u4e3b\u8981\u8ba8\u8bba\u7684\u662f\u63a5\u53e3\u6587\u6863\u7ef4\u62a4\u679a\u4e3e\u503c\u7684\u95ee\u9898\uff0c\u7279\u522b\u662f\u524d\u540e\u7aef\u534f\u4f5c\u65f6\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OpenAPI"})," \u6807\u51c6\u534f\u8bae\u6765\u7ef4\u62a4\u679a\u4e3e\u503c\u7684\u95ee\u9898\u3002\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u4e86\u4e13\u95e8\u7684\u5de5\u5177\u6765\u7ef4\u62a4\u8fd9\u4e9b\u679a\u4e3e\u503c\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/docs/cli/gen-enums",children:"\u679a\u4e3e\u7ef4\u62a4-gen enums"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>a});var t=o(296540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);