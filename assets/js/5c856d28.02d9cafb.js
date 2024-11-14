"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[29270],{507200:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6","title":"\u62e6\u622a\u5668\u7ec4\u4ef6","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528GRPC\u62e6\u622a\u5668\u7684\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u62e6\u622a\u5668\u5b9e\u73b0\uff0c\u5305\u62ec\u94fe\u8def\u8ddf\u8e2a\u3001\u9519\u8bef\u5904\u7406\u548c\u81ea\u52a8\u9519\u8bef\u6821\u9a8c\u7b49\u529f\u80fd\u3002\u901a\u8fc7\u4f7f\u7528grpcx\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u7075\u6d3b\u5730\u6dfb\u52a0\u548c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668\uff0c\u63d0\u9ad8GRPC\u670d\u52a1\u548c\u5ba2\u6237\u7aef\u7684\u53ef\u6269\u5c55\u6027\u4e0e\u7a33\u5b9a\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6.md","sourceDirName":"docs/\u5fae\u670d\u52a1\u5f00\u53d1","slug":"/docs/micro-service/interceptor","permalink":"/2.7.x/docs/micro-service/interceptor","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u62e6\u622a\u5668\u7ec4\u4ef6.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/micro-service/interceptor","title":"\u62e6\u622a\u5668\u7ec4\u4ef6","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","GRPC\u62e6\u622a\u5668","\u670d\u52a1\u7aef\u62e6\u622a\u5668","\u5ba2\u6237\u7aef\u62e6\u622a\u5668","grpcx\u7ec4\u4ef6","\u94fe\u8def\u8ddf\u8e2a","\u9519\u8bef\u5904\u7406","\u81ea\u52a8\u9519\u8bef\u6821\u9a8c","\u670d\u52a1\u7aefPanic\u6355\u83b7"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528GRPC\u62e6\u622a\u5668\u7684\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u62e6\u622a\u5668\u5b9e\u73b0\uff0c\u5305\u62ec\u94fe\u8def\u8ddf\u8e2a\u3001\u9519\u8bef\u5904\u7406\u548c\u81ea\u52a8\u9519\u8bef\u6821\u9a8c\u7b49\u529f\u80fd\u3002\u901a\u8fc7\u4f7f\u7528grpcx\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u7075\u6d3b\u5730\u6dfb\u52a0\u548c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668\uff0c\u63d0\u9ad8GRPC\u670d\u52a1\u548c\u5ba2\u6237\u7aef\u7684\u53ef\u6269\u5c55\u6027\u4e0e\u7a33\u5b9a\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u670d\u52a1\u7aef\u914d\u7f6e","permalink":"/2.7.x/docs/micro-service/config"},"next":{"title":"\u670d\u52a1\u6ce8\u518c\u53d1\u73b0","permalink":"/2.7.x/docs/micro-service/registry-discovery"}}');var c=n(474848),i=n(28453);const s={slug:"/docs/micro-service/interceptor",title:"\u62e6\u622a\u5668\u7ec4\u4ef6",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","GRPC\u62e6\u622a\u5668","\u670d\u52a1\u7aef\u62e6\u622a\u5668","\u5ba2\u6237\u7aef\u62e6\u622a\u5668","grpcx\u7ec4\u4ef6","\u94fe\u8def\u8ddf\u8e2a","\u9519\u8bef\u5904\u7406","\u81ea\u52a8\u9519\u8bef\u6821\u9a8c","\u670d\u52a1\u7aefPanic\u6355\u83b7"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528GRPC\u62e6\u622a\u5668\u7684\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u62e6\u622a\u5668\u5b9e\u73b0\uff0c\u5305\u62ec\u94fe\u8def\u8ddf\u8e2a\u3001\u9519\u8bef\u5904\u7406\u548c\u81ea\u52a8\u9519\u8bef\u6821\u9a8c\u7b49\u529f\u80fd\u3002\u901a\u8fc7\u4f7f\u7528grpcx\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u7075\u6d3b\u5730\u6dfb\u52a0\u548c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668\uff0c\u63d0\u9ad8GRPC\u670d\u52a1\u548c\u5ba2\u6237\u7aef\u7684\u53ef\u6269\u5c55\u6027\u4e0e\u7a33\u5b9a\u6027\u3002"},t=void 0,l={},o=[{value:"\u62e6\u622a\u5668\u4f7f\u7528",id:"\u62e6\u622a\u5668\u4f7f\u7528",level:2},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3},{value:"\u62e6\u622a\u5668\u5217\u8868",id:"\u62e6\u622a\u5668\u5217\u8868",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"GRPC"})," \u652f\u6301\u62e6\u622a\u5668\u7279\u6027\uff0c\u63d0\u9ad8\u4e86 ",(0,c.jsx)(r.code,{children:"GRPC"})," \u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u3002"]}),"\n",(0,c.jsx)(r.h2,{id:"\u62e6\u622a\u5668\u4f7f\u7528",children:"\u62e6\u622a\u5668\u4f7f\u7528"}),"\n",(0,c.jsx)(r.h3,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,c.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"grpcx.Server.ChainUnary"})," \u589e\u52a0\u989d\u5916\u7684\u670d\u52a1\u7aef\u62e6\u622a\u5668\uff1a"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-go",children:"c := grpcx.Server.NewConfig()\nc.Options = append(c.Options, []grpc.ServerOption{\n    grpcx.Server.ChainUnary(\n        grpcx.Server.UnaryValidate,\n    )}...,\n)\ns := grpcx.Server.New(c)\nuser.Register(s)\ns.Run()\n"})}),"\n",(0,c.jsx)(r.h3,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,c.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"grpcx.Client.ChainUnary"})," \u589e\u52a0\u989d\u5916\u7684\u670d\u52a1\u7aef\u62e6\u622a\u5668\uff1a"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:'conn = grpcx.Client.MustNewGrpcClientConn("demo", grpcx.Client.ChainUnary(\n    grpcx.Client.UnaryTracing,\n))\n'})}),"\n",(0,c.jsx)(r.h2,{id:"\u62e6\u622a\u5668\u5217\u8868",children:"\u62e6\u622a\u5668\u5217\u8868"}),"\n",(0,c.jsxs)(r.p,{children:["\u6846\u67b6\u7684 ",(0,c.jsx)(r.code,{children:"grpcx"})," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5e38\u7528\u62e6\u622a\u5668\uff0c\u90e8\u5206\u5185\u7f6e\uff0c\u90e8\u5206\u53ef\u9009\u62e9\u63d2\u62d4\u4f7f\u7528\u3002"]}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"\u62e6\u622a\u5668"}),(0,c.jsx)(r.th,{children:"\u4f7f\u7528\u90e8\u4f4d"}),(0,c.jsx)(r.th,{children:"\u662f\u5426\u5185\u7f6e"}),(0,c.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"UnaryError"})}),(0,c.jsx)(r.td,{children:"\u5ba2\u6237\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsx)(r.td,{children:"\u652f\u6301\u6846\u67b6\u9519\u8bef\u5904\u7406\u7ec4\u4ef6\u3002"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"UnaryTracing"})}),(0,c.jsx)(r.td,{children:"\u5ba2\u6237\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsx)(r.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\u3002"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"StreamTracing"})}),(0,c.jsx)(r.td,{children:"\u5ba2\u6237\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsx)(r.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\uff08\u957f\u8fde\u63a5\uff09\u3002"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"UnaryError"})}),(0,c.jsx)(r.td,{children:"\u670d\u52a1\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsx)(r.td,{children:"\u652f\u6301\u6846\u67b6\u9519\u8bef\u5904\u7406\u7ec4\u4ef6\u3002"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"UnaryRecover"})}),(0,c.jsx)(r.td,{children:"\u670d\u52a1\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsxs)(r.td,{children:["\u652f\u6301\u670d\u52a1\u7aef ",(0,c.jsx)(r.code,{children:"panic"})," \u81ea\u52a8\u6355\u83b7\u4e0d\u5d29\u6e83\u3002"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"UnaryAllowNilRes"})}),(0,c.jsx)(r.td,{children:"\u670d\u52a1\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsxs)(r.td,{children:["\u652f\u6301 ",(0,c.jsx)(r.code,{children:"nil"})," \u7684 ",(0,c.jsx)(r.code,{children:"Res"})," \u5bf9\u8c61\u8fd4\u56de\u3002"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"UnaryValidate"})}),(0,c.jsx)(r.td,{children:"\u670d\u52a1\u7aef"}),(0,c.jsx)(r.td,{children:"-"}),(0,c.jsx)(r.td,{children:"\u652f\u6301\u6846\u67b6\u7684\u81ea\u52a8\u9519\u8bef\u6821\u9a8c\uff0c\u57fa\u4e8e\u7ed3\u6784\u4f53\u6807\u7b7e\u3002\u9700\u8981\u624b\u52a8\u5f15\u5165\u3002"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"UnaryTracing"})}),(0,c.jsx)(r.td,{children:"\u670d\u52a1\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsx)(r.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\u3002"})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"StreamTracing"})}),(0,c.jsx)(r.td,{children:"\u670d\u52a1\u7aef"}),(0,c.jsx)(r.td,{children:"\u662f"}),(0,c.jsx)(r.td,{children:"\u652f\u6301\u94fe\u8def\u8ddf\u8e2a\uff08\u957f\u8fde\u63a5\uff09\u3002"})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>t});var d=n(296540);const c={},i=d.createContext(c);function s(e){const r=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),d.createElement(i.Provider,{value:r},e.children)}}}]);