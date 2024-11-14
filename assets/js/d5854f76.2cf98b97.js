"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[39666],{477726:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u5f00\u53d1\u5de5\u5177/\u517c\u5bb9\u4fee\u590d-fix","title":"\u517c\u5bb9\u4fee\u590d-fix","description":"GoFrame\u6846\u67b6\u63d0\u4f9b\u7684\u517c\u5bb9\u4fee\u590d\u547d\u4ee4gf fix\uff0c\u5e2e\u52a9\u5728\u6846\u67b6\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u89e3\u51b3\u5411\u4e0b\u517c\u5bb9\u6027\u95ee\u9898\u3002\u8be5\u547d\u4ee4\u81eav2.3\u7248\u672c\u8d77\u63d0\u4f9b\uff0c\u901a\u8fc7\u81ea\u52a8\u66f4\u65b0\u672c\u5730\u4ee3\u7801\uff0c\u5904\u7406\u8f83\u5c0f\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u5e76\u53ef\u91cd\u590d\u6267\u884c\u4ee5\u786e\u4fdd\u65e0\u526f\u4f5c\u7528\u3002","source":"@site/docs/docs/\u5f00\u53d1\u5de5\u5177/\u517c\u5bb9\u4fee\u590d-fix.md","sourceDirName":"docs/\u5f00\u53d1\u5de5\u5177","slug":"/docs/cli/fix","permalink":"/docs/cli/fix","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5f00\u53d1\u5de5\u5177/\u517c\u5bb9\u4fee\u590d-fix.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731501513000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/cli/fix","title":"\u517c\u5bb9\u4fee\u590d-fix","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u517c\u5bb9\u4fee\u590d","CLI\u4f7f\u7528","\u4ee3\u7801\u66f4\u65b0","\u7248\u672c\u5347\u7ea7","\u5411\u4e0b\u517c\u5bb9","gf fix","\u547d\u4ee4\u884c\u5de5\u5177","\u81ea\u52a8\u4fee\u6b63"],"description":"GoFrame\u6846\u67b6\u63d0\u4f9b\u7684\u517c\u5bb9\u4fee\u590d\u547d\u4ee4gf fix\uff0c\u5e2e\u52a9\u5728\u6846\u67b6\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u89e3\u51b3\u5411\u4e0b\u517c\u5bb9\u6027\u95ee\u9898\u3002\u8be5\u547d\u4ee4\u81eav2.3\u7248\u672c\u8d77\u63d0\u4f9b\uff0c\u901a\u8fc7\u81ea\u52a8\u66f4\u65b0\u672c\u5730\u4ee3\u7801\uff0c\u5904\u7406\u8f83\u5c0f\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u5e76\u53ef\u91cd\u590d\u6267\u884c\u4ee5\u786e\u4fdd\u65e0\u526f\u4f5c\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u955c\u50cf\u7f16\u8bd1-docker","permalink":"/docs/cli/docker"},"next":{"title":"\u5de5\u5177\u5e2e\u52a9-help","permalink":"/docs/cli/help"}}');var o=n(474848),s=n(28453);const r={slug:"/docs/cli/fix",title:"\u517c\u5bb9\u4fee\u590d-fix",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u517c\u5bb9\u4fee\u590d","CLI\u4f7f\u7528","\u4ee3\u7801\u66f4\u65b0","\u7248\u672c\u5347\u7ea7","\u5411\u4e0b\u517c\u5bb9","gf fix","\u547d\u4ee4\u884c\u5de5\u5177","\u81ea\u52a8\u4fee\u6b63"],description:"GoFrame\u6846\u67b6\u63d0\u4f9b\u7684\u517c\u5bb9\u4fee\u590d\u547d\u4ee4gf fix\uff0c\u5e2e\u52a9\u5728\u6846\u67b6\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u89e3\u51b3\u5411\u4e0b\u517c\u5bb9\u6027\u95ee\u9898\u3002\u8be5\u547d\u4ee4\u81eav2.3\u7248\u672c\u8d77\u63d0\u4f9b\uff0c\u901a\u8fc7\u81ea\u52a8\u66f4\u65b0\u672c\u5730\u4ee3\u7801\uff0c\u5904\u7406\u8f83\u5c0f\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u5e76\u53ef\u91cd\u590d\u6267\u884c\u4ee5\u786e\u4fdd\u65e0\u526f\u4f5c\u7528\u3002"},c=void 0,d={},l=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function a(e){const i={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.admonition,{type:"tip",children:(0,o.jsxs)(i.p,{children:["\u8be5\u547d\u4ee4\u4ece\u6846\u67b6 ",(0,o.jsx)(i.code,{children:"v2.3"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]})}),"\n",(0,o.jsx)(i.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,o.jsx)(i.p,{children:"\u5f53\u5b98\u65b9\u6846\u67b6\u7248\u672c\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5c3d\u6700\u5927\u53ef\u80fd\u4fdd\u8bc1\u5411\u4e0b\u517c\u5bb9\u6027\u3002\u4f46\u786e\u5b9e\u9047\u5230\u5341\u5206\u56f0\u96be\u7684\u573a\u666f\uff0c\u96be\u4ee5\u4fdd\u8bc1\u5b8c\u5168\u5411\u4e0b\u517c\u5bb9\u6027\u7684\u65f6\u5019\uff0c\u5e76\u4e14\u662f\u8f83\u5c0f\u7684\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u8003\u8651\u5230\u65b0\u589e\u5927\u7248\u672c\u53f7\u7684\u6210\u672c\u8f83\u9ad8\uff0c\u90a3\u4e48\u5b98\u65b9\u4f1a\u901a\u8fc7\u8be5\u547d\u4ee4\u63d0\u4f9b\u81ea\u52a8\u4fee\u6b63\u517c\u5bb9\u95ee\u9898\u3002\u5e76\u4e14\u5b98\u65b9\u4f1a\u4fdd\u8bc1\u8be5\u6307\u4ee4\u53ef\u91cd\u590d\u6267\u884c\uff0c\u65e0\u526f\u4f5c\u7528\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-text",children:"$ gf fix -h\nUSAGE\n    gf fix\n\nOPTION\n    -/--path     directory path, it uses current working directory in default\n    -h, --help   more information about this command\n"})}),"\n",(0,o.jsxs)(i.p,{children:["\u7528\u4ee5\u4f4e\u7248\u672c\uff08\u5f53\u524d ",(0,o.jsx)(i.code,{children:"go.mod"})," \u4e2d\u7684 ",(0,o.jsx)(i.code,{children:"GoFrame"})," \u7248\u672c\uff09\u5347\u7ea7\u9ad8\u7248\u672c\uff08\u5f53\u524d ",(0,o.jsx)(i.code,{children:"CLI"})," \u4f7f\u7528\u7684 ",(0,o.jsx)(i.code,{children:"GoFrame"})," \u7248\u672c\uff09\u81ea\u52a8\u66f4\u65b0\u672c\u5730\u4ee3\u7801\u4e0d\u517c\u5bb9\u53d8\u66f4\u3002"]}),"\n",(0,o.jsx)(i.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,o.jsxs)(i.p,{children:["\u547d\u4ee4\u6267\u884c\u524d\u8bf7 ",(0,o.jsx)(i.code,{children:"git"})," \u63d0\u4ea4\u672c\u5730\u4fee\u6539\u5185\u5bb9\u6216\u6267\u884c\u76ee\u5f55\u5907\u4efd\u3002"]})]})}function f(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>c});var t=n(296540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);