"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[22249],{477190:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","title":"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cUDP\u7ec4\u4ef6\u5f00\u53d1\uff0c\u7279\u522b\u662fgudp.Conn\u8fde\u63a5\u5bf9\u8c61\u7684\u4f7f\u7528\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u51fd\u6570\u63a5\u53e3\u8bf4\u660e\u4ee5\u53ca\u4e00\u4e2a\u5b8c\u6574\u7684\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u638c\u63e1UDP\u8fde\u63a5\u5bf9\u8c61\u7684\u5177\u4f53\u64cd\u4f5c\u548c\u5e94\u7528\u573a\u666f\u3002","source":"@site/docs/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61.md","sourceDirName":"docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6","slug":"/docs/network/gudp-conn","permalink":"/docs/network/gudp-conn","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731418950000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/network/gudp-conn","title":"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","gudp.Conn","UDP\u7ec4\u4ef6","UDP\u8fde\u63a5","gudp\u6a21\u5757","\u7f51\u7edc\u7f16\u7a0b","Go\u8bed\u8a00","\u6570\u636e\u901a\u4fe1","\u7f16\u7a0b\u793a\u4f8b"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cUDP\u7ec4\u4ef6\u5f00\u53d1\uff0c\u7279\u522b\u662fgudp.Conn\u8fde\u63a5\u5bf9\u8c61\u7684\u4f7f\u7528\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u51fd\u6570\u63a5\u53e3\u8bf4\u660e\u4ee5\u53ca\u4e00\u4e2a\u5b8c\u6574\u7684\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u638c\u63e1UDP\u8fde\u63a5\u5bf9\u8c61\u7684\u5177\u4f53\u64cd\u4f5c\u548c\u5e94\u7528\u573a\u666f\u3002"},"sidebar":"mainSidebar","previous":{"title":"UDP\u7ec4\u4ef6","permalink":"/docs/network/gudp"},"next":{"title":"UDP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5","permalink":"/docs/network/gudp-funcs"}}');var r=e(474848),d=e(28453);const c={slug:"/docs/network/gudp-conn",title:"UDP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","gudp.Conn","UDP\u7ec4\u4ef6","UDP\u8fde\u63a5","gudp\u6a21\u5757","\u7f51\u7edc\u7f16\u7a0b","Go\u8bed\u8a00","\u6570\u636e\u901a\u4fe1","\u7f16\u7a0b\u793a\u4f8b"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884cUDP\u7ec4\u4ef6\u5f00\u53d1\uff0c\u7279\u522b\u662fgudp.Conn\u8fde\u63a5\u5bf9\u8c61\u7684\u4f7f\u7528\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u51fd\u6570\u63a5\u53e3\u8bf4\u660e\u4ee5\u53ca\u4e00\u4e2a\u5b8c\u6574\u7684\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u638c\u63e1UDP\u8fde\u63a5\u5bf9\u8c61\u7684\u5177\u4f53\u64cd\u4f5c\u548c\u5e94\u7528\u573a\u666f\u3002"},s=void 0,i={},g=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function l(n){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"gudp"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u975e\u5e38\u7b80\u4fbf\u6613\u7528\u7684 ",(0,r.jsx)(t.code,{children:"gudp.Conn"})," \u94fe\u63a5\u64cd\u4f5c\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a ",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})]}),"\n",(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"gudp.Conn"})," \u7684\u64cd\u4f5c\u7edd\u5927\u90e8\u5206\u7c7b\u4f3c\u4e8e ",(0,r.jsx)(t.code,{children:"gtcp"})," \u7684\u64cd\u4f5c\u65b9\u5f0f\uff08\u5927\u90e8\u5206\u7684\u65b9\u6cd5\u540d\u79f0\u4e5f\u76f8\u540c\uff09\uff0c\u4f46\u7531\u4e8e ",(0,r.jsx)(t.code,{children:"UDP"})," \u662f\u9762\u5411\u975e\u8fde\u63a5\u7684\u534f\u8bae\uff0c\u56e0\u6b64 ",(0,r.jsx)(t.code,{children:"gudp.Conn"}),"\uff08\u5e95\u5c42\u901a\u4fe1\u7aef\u53e3\uff09\u4e5f\u53ea\u80fd\u5b8c\u6210\u6700\u591a\u4e00\u6b21\u6570\u636e\u5199\u5165\u548c\u8bfb\u53d6\uff0c\u5ba2\u6237\u7aef\u4e0b\u4e00\u6b21\u518d\u4e0e\u76ee\u6807\u670d\u52a1\u7aef\u8fdb\u884c\u901a\u4fe1\u7684\u65f6\u5019\uff0c\u5c06\u9700\u8981\u521b\u5efa\u65b0\u7684 ",(0,r.jsx)(t.code,{children:"Conn"})," \u5bf9\u8c61\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/gudp"\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n\tvar (\n\t\tctx    = context.Background()\n\t\tlogger = g.Log()\n\t)\n\t// Server\n\tgo gudp.NewServer("127.0.0.1:8999", func(conn *gudp.ServerConn) {\n\t\tdefer conn.Close()\n\t\tfor {\n\t\t\tdata, addr, err := conn.Recv(-1)\n\t\t\tif len(data) > 0 {\n\t\t\t\tif err = conn.Send(append([]byte("> "), data...), addr); err != nil {\n\t\t\t\t\tlogger.Error(ctx, err)\n\t\t\t\t}\n\t\t\t}\n\t\t\tif err != nil {\n\t\t\t\tlogger.Error(ctx, err)\n\t\t\t}\n\t\t}\n\t}).Run()\n\n\ttime.Sleep(time.Second)\n\n\t// Client\n\tfor {\n\t\tif conn, err := gudp.NewClientConn("127.0.0.1:8999"); err == nil {\n\t\t\tif b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n\t\t\t\tfmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n\t\t\t} else {\n\t\t\t\tlogger.Error(ctx, err)\n\t\t\t}\n\t\t\tconn.Close()\n\t\t} else {\n\t\t\tlogger.Error(ctx, err)\n\t\t}\n\t\ttime.Sleep(time.Second)\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u8be5\u793a\u4f8b\u4e0e ",(0,r.jsx)(t.code,{children:"gtcp.Conn"})," \u4e2d\u7684\u901a\u4fe1\u793a\u4f8b\u7c7b\u4f3c\uff0c\u4e0d\u540c\u7684\u662f\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u65e0\u6cd5\u4fdd\u6301\u8fde\u63a5\uff0c\u6bcf\u6b21\u901a\u4fe1\u90fd\u9700\u8981\u521b\u5efa\u7684\u65b0\u7684\u8fde\u63a5\u5bf9\u8c61\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"> 2018-07-21 23:13:31 127.0.0.1:33271 127.0.0.1:8999\n> 2018-07-21 23:13:32 127.0.0.1:45826 127.0.0.1:8999\n> 2018-07-21 23:13:33 127.0.0.1:58027 127.0.0.1:8999\n> 2018-07-21 23:13:34 127.0.0.1:33056 127.0.0.1:8999\n> 2018-07-21 23:13:35 127.0.0.1:39260 127.0.0.1:8999\n> 2018-07-21 23:13:36 127.0.0.1:33967 127.0.0.1:8999\n> 2018-07-21 23:13:37 127.0.0.1:52359 127.0.0.1:8999\n...\n"})})]})}function a(n={}){const{wrapper:t}={...(0,d.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>s});var o=e(296540);const r={},d=o.createContext(r);function c(n){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(d.Provider,{value:t},n.children)}}}]);