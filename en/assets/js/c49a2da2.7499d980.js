"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[60159],{793221:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907","title":"\u73af\u5883\u51c6\u5907","description":"\u4e3a\u5fae\u670d\u52a1\u5f00\u53d1\u51c6\u5907\u73af\u5883\uff0c\u4e3b\u8981\u5305\u62ecGRPC\u534f\u8bae\u7684\u4f9d\u8d56\u5b89\u88c5\u6307\u5357\u548cGoFrame\u6846\u67b6\u7684CLI\u5de5\u5177\u3002\u5b66\u4e60\u8005\u9700\u786e\u4fddGRPC\u76f8\u5173\u5de5\u5177\u7684\u5b89\u88c5\uff0c\u5e76\u638c\u63e1GRPC\u534f\u8bae\u5728GoFrame\u6846\u67b6\u4e2d\u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\u7684\u57fa\u672c\u5e94\u7528\u3002","source":"@site/docs/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907.md","sourceDirName":"docs/\u5fae\u670d\u52a1\u5f00\u53d1","slug":"/docs/micro-service/prepare-environment","permalink":"/en/docs/micro-service/prepare-environment","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u73af\u5883\u51c6\u5907.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/micro-service/prepare-environment","title":"\u73af\u5883\u51c6\u5907","sidebar_position":0,"hide_title":true,"keywords":["\u73af\u5883\u51c6\u5907","\u5fae\u670d\u52a1","GRPC\u534f\u8bae","GoFrame","GoFrame\u6846\u67b6","\u4f9d\u8d56\u5b89\u88c5","CLI\u5f00\u53d1\u5de5\u5177","protoc\u5de5\u5177","\u6846\u67b6\u5de5\u5177","\u534f\u8bae\u652f\u6301"],"description":"\u4e3a\u5fae\u670d\u52a1\u5f00\u53d1\u51c6\u5907\u73af\u5883\uff0c\u4e3b\u8981\u5305\u62ecGRPC\u534f\u8bae\u7684\u4f9d\u8d56\u5b89\u88c5\u6307\u5357\u548cGoFrame\u6846\u67b6\u7684CLI\u5de5\u5177\u3002\u5b66\u4e60\u8005\u9700\u786e\u4fddGRPC\u76f8\u5173\u5de5\u5177\u7684\u5b89\u88c5\uff0c\u5e76\u638c\u63e1GRPC\u534f\u8bae\u5728GoFrame\u6846\u67b6\u4e2d\u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\u7684\u57fa\u672c\u5e94\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5fae\u670d\u52a1\u5f00\u53d1","permalink":"/en/docs/micro-service"},"next":{"title":"\u5de5\u7a0b\u7ba1\u7406","permalink":"/en/docs/micro-service/structure"}}');var o=n(474848),t=n(28453);const c={slug:"/docs/micro-service/prepare-environment",title:"\u73af\u5883\u51c6\u5907",sidebar_position:0,hide_title:!0,keywords:["\u73af\u5883\u51c6\u5907","\u5fae\u670d\u52a1","GRPC\u534f\u8bae","GoFrame","GoFrame\u6846\u67b6","\u4f9d\u8d56\u5b89\u88c5","CLI\u5f00\u53d1\u5de5\u5177","protoc\u5de5\u5177","\u6846\u67b6\u5de5\u5177","\u534f\u8bae\u652f\u6301"],description:"\u4e3a\u5fae\u670d\u52a1\u5f00\u53d1\u51c6\u5907\u73af\u5883\uff0c\u4e3b\u8981\u5305\u62ecGRPC\u534f\u8bae\u7684\u4f9d\u8d56\u5b89\u88c5\u6307\u5357\u548cGoFrame\u6846\u67b6\u7684CLI\u5de5\u5177\u3002\u5b66\u4e60\u8005\u9700\u786e\u4fddGRPC\u76f8\u5173\u5de5\u5177\u7684\u5b89\u88c5\uff0c\u5e76\u638c\u63e1GRPC\u534f\u8bae\u5728GoFrame\u6846\u67b6\u4e2d\u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\u7684\u57fa\u672c\u5e94\u7528\u3002"},i=void 0,d={},l=[{value:"\u4f9d\u8d56\u5b89\u88c5",id:"\u4f9d\u8d56\u5b89\u88c5",level:2},{value:"\u6846\u67b6\u5de5\u5177",id:"\u6846\u67b6\u5de5\u5177",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["\u540e\u7eed\u5fae\u670d\u52a1\u7ae0\u8282\u4e3b\u8981\u4ee5 ",(0,o.jsx)(r.code,{children:"GRPC"})," \u534f\u8bae\u4e3a\u4e3b\uff0c\u4ecb\u7ecd\u5fae\u670d\u52a1\u7684\u5f00\u53d1\u3001\u7ec4\u4ef6\u53ca\u5de5\u5177\u4f7f\u7528\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"\u4f9d\u8d56\u5b89\u88c5",children:"\u4f9d\u8d56\u5b89\u88c5"}),"\n",(0,o.jsxs)(r.p,{children:["\u5728\u8fdb\u4e00\u6b65\u5b66\u4e60\u4e4b\u524d\uff0c\u8bf7\u5148\u4e86\u89e3 ",(0,o.jsx)(r.code,{children:"GRPC"})," \u76f8\u5173\u6982\u5ff5\uff0c\u5e76\u4e14\u5b89\u88c5\u5bf9\u5e94\u7684\u5de5\u5177\u5230\u672c\u5730\u5f00\u53d1\u73af\u5883\uff1a"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://grpc.io/",children:"https://grpc.io/"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://grpc.io/docs/languages/go/quickstart/",children:"https://grpc.io/docs/languages/go/quickstart/"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5982\u679c\u662f ",(0,o.jsx)(r.code,{children:"MacOS"})," \u73af\u5883\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,o.jsx)(r.code,{children:"brew"})," \u5de5\u5177\u5b89\u88c5\u4f9d\u8d56\uff1a"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"brew install grpc protoc-gen-go protoc-gen-go-grpc\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u4f9d\u8d56\u5de5\u5177\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8bf7\u53c2\u8003 ",(0,o.jsx)(r.a,{href:"https://grpc.io/docs/languages/go/quickstart/",children:"https://grpc.io/docs/languages/go/quickstart/"})," \u7ae0\u8282\u7684\u4ecb\u7ecd\u5b8c\u6210\u57fa\u7840\u7684 ",(0,o.jsx)(r.code,{children:"protoc"})," \u5de5\u5177\u4f7f\u7528\u5b66\u4e60\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"\u6846\u67b6\u5de5\u5177",children:"\u6846\u67b6\u5de5\u5177"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"GoFrame"})," \u6846\u67b6\u7684CLI\u5f00\u53d1\u5de5\u5177\u8bf7\u4fdd\u8bc1\u7248\u672c ",(0,o.jsx)(r.code,{children:">= v2.4"}),"\u3002\u5de5\u5177\u5b89\u88c5\u3001\u5347\u7ea7\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,o.jsx)(r.a,{href:"/en/docs/cli",children:"\u5f00\u53d1\u5de5\u5177"})]}),"\n",(0,o.jsxs)(r.p,{children:["\u6846\u67b6\u5de5\u5177\u9488\u5bf9 ",(0,o.jsx)(r.code,{children:"GRPC"})," \u534f\u8bae\uff0c\u63d0\u4f9b\u4e86\u989d\u5916\u7684\u547d\u4ee4\u652f\u6301\uff0c\u6781\u5927\u5730\u7b80\u5316\u4e86\u57fa\u4e8e ",(0,o.jsx)(r.code,{children:"GRPC"})," \u534f\u8bae\u7684\u5fae\u670d\u52a1\u5f00\u53d1\u3002"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var s=n(296540);const o={},t=s.createContext(o);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);