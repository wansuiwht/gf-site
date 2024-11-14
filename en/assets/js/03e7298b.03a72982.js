"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[25913],{761665:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027","title":"TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027","description":"gtcp \u6a21\u5757\u63d0\u4f9b\u4e86\u8fde\u63a5\u6c60\u7684\u7279\u6027\uff0c\u7531 gtcp.PoolConn \u5bf9\u8c61\u5b9e\u73b0\uff0c\u8fde\u63a5\u6c60\u7f13\u5b58\u56fa\u5b9a\u5b58\u6d3b\u65f6\u95f4\u4e3a600\u79d2\uff0c\u4e14\u5185\u90e8\u5b9e\u73b0\u4e86\u6570\u636e\u53d1\u9001\u65f6\u7684\u65ad\u5f00\u91cd\u8fde\u673a\u5236\u3002\u8fde\u63a5\u6c60\u975e\u5e38\u9002\u5408\u4e8e\u9891\u7e41\u7684\u77ed\u94fe\u63a5\u64cd\u4f5c\u4e14\u8fde\u63a5\u5e76\u53d1\u91cf\u5927\u7684\u573a\u666f\u3002\u6211\u4eec\u63a5\u4e0b\u6765\u4f7f\u7528\u4e24\u4e2a\u793a\u4f8b\u6765\u6f14\u793a\u4e00\u4e0b\u8fde\u63a5\u6c60\u7684\u4f5c\u7528\u3002","source":"@site/versioned_docs/version-2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027.md","sourceDirName":"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6","slug":"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027","permalink":"/en/2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6","permalink":"/en/2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6"},"next":{"title":"UDP\u7ec4\u4ef6","permalink":"/en/2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/UDP\u7ec4\u4ef6/"}}');var r=o(474848),i=o(28453);const c={title:"TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027",sidebar_position:3,hide_title:!0},l=void 0,d={},s=[{value:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528",id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u793a\u4f8b2\uff0c\u8fde\u63a5\u65ad\u5f00\u60c5\u51b5",id:"\u793a\u4f8b2\u8fde\u63a5\u65ad\u5f00\u60c5\u51b5",level:2}];function g(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gtcp"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u8fde\u63a5\u6c60\u7684\u7279\u6027\uff0c\u7531 ",(0,r.jsx)(e.code,{children:"gtcp.PoolConn"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c\u8fde\u63a5\u6c60\u7f13\u5b58\u56fa\u5b9a\u5b58\u6d3b\u65f6\u95f4\u4e3a600\u79d2\uff0c\u4e14\u5185\u90e8\u5b9e\u73b0\u4e86\u6570\u636e\u53d1\u9001\u65f6\u7684\u65ad\u5f00\u91cd\u8fde\u673a\u5236\u3002\u8fde\u63a5\u6c60\u975e\u5e38\u9002\u5408\u4e8e\u9891\u7e41\u7684\u77ed\u94fe\u63a5\u64cd\u4f5c\u4e14\u8fde\u63a5\u5e76\u53d1\u91cf\u5927\u7684\u573a\u666f\u3002\u6211\u4eec\u63a5\u4e0b\u6765\u4f7f\u7528\u4e24\u4e2a\u793a\u4f8b\u6765\u6f14\u793a\u4e00\u4e0b\u8fde\u63a5\u6c60\u7684\u4f5c\u7528\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gtcp"\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"type PoolConn\n    func NewPoolConn(addr string, timeout ...int) (*PoolConn, error)\n    func (c *PoolConn) Close() error\n    func (c *PoolConn) Recv(length int, retry ...Retry) ([]byte, error)\n    func (c *PoolConn) RecvLine(retry ...Retry) ([]byte, error)\n    func (c *PoolConn) RecvPkg(option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) RecvPkgWithTimeout(timeout time.Duration, option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) RecvWithTimeout(length int, timeout time.Duration, retry ...Retry) (data []byte, err error)\n    func (c *PoolConn) Send(data []byte, retry ...Retry) error\n    func (c *PoolConn) SendPkg(data []byte, option ...PkgOption) (err error)\n    func (c *PoolConn) SendPkgWithTimeout(data []byte, timeout time.Duration, option ...PkgOption) error\n    func (c *PoolConn) SendRecv(data []byte, receive int, retry ...Retry) ([]byte, error)\n    func (c *PoolConn) SendRecvPkg(data []byte, option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) SendRecvPkgWithTimeout(data []byte, timeout time.Duration, option ...PkgOption) ([]byte, error)\n    func (c *PoolConn) SendRecvWithTimeout(data []byte, receive int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *PoolConn) SendWithTimeout(data []byte, timeout time.Duration, retry ...Retry) error\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u7531\u4e8e ",(0,r.jsx)(e.code,{children:"gtcp.PoolConn"})," \u7ee7\u627f\u4e8e ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u56e0\u6b64\u540c\u65f6\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u7684\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b1\u57fa\u672c\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    // Server\n    go gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                    fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    for {\n       if conn, err := gtcp.NewPoolConn("127.0.0.1:8999"); err == nil {\n           if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n               fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n           } else {\n               fmt.Println(err)\n           }\n           conn.Close()\n       } else {\n           glog.Error(err)\n       }\n       time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0cServer\u521b\u5efa\u65b0\u7684goroutine\u5f02\u6b65\u8fd0\u884c\uff0cClient\u5728main goroutine\u4e2d\u6267\u884c\u3002Server\u7aef\u662f\u4e00\u4e2a\u56de\u663e\u670d\u52a1\u5668\uff0cClient\u6bcf\u96941\u79d2\u5411Server\u7aef\u53d1\u9001\u5f53\u524d\u7684\u65f6\u95f4\uff0c\u7ecf\u8fc7Server\u7aef\u56de\u663e\u8fd4\u56de\u540e\uff0c\u5728Client\u7aef\u6253\u5370\u51fa\u53cc\u65b9\u7684\u8fde\u63a5\u7aef\u53e3\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"> 2018-07-11 23:29:54 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:55 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:56 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:57 127.0.0.1:55876 127.0.0.1:8999\n> 2018-07-11 23:29:58 127.0.0.1:55876 127.0.0.1:8999\n...\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0cClient\u7684\u7aef\u53e3\u4e00\u76f4\u672a\u53d8\uff0c\u6bcf\u4e00\u6b21\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:'gtcp.NewConn("127.0.0.1:8999")'})," \u83b7\u5f97\u7684\u90fd\u662f\u540c\u4e00\u4e2a ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u5bf9\u8c61\uff0c\u4e14\u6bcf\u4e00\u6b21 ",(0,r.jsx)(e.code,{children:"conn.Close()"})," \u65f6\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u5173\u95ed\u8fde\u63a5\uff0c\u800c\u662f\u5c06\u8be5\u5bf9\u8c61\u91cd\u65b0\u4e22\u56de\u5230\u8fde\u63a5\u6c60\u91cc\u5faa\u73af\u4f7f\u7528\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b2\u8fde\u63a5\u65ad\u5f00\u60c5\u51b5",children:"\u793a\u4f8b2\uff0c\u8fde\u63a5\u65ad\u5f00\u60c5\u51b5"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u662f\u4e3a\u4e86\u5c55\u793a\u5f53\u670d\u52a1\u7aef\u5173\u95ed\u8fde\u63a5\u540e\uff0c\u8be5\u8fde\u63a5\u5bf9\u8c61\u8fd8\u662f\u5426\u6709\u6548\u7684\u5904\u7406\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    // Server\n    go gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                    fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n            return\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    for {\n       if conn, err := gtcp.NewPoolConn("127.0.0.1:8999"); err == nil {\n           if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n               fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n           } else {\n               fmt.Println(err)\n           }\n           conn.Close()\n       } else {\n           glog.Error(err)\n       }\n       time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"> 2018-07-20 12:56:15 127.0.0.1:59368 127.0.0.1:8999\nEOF\n> 2018-07-20 12:56:17 127.0.0.1:59376 127.0.0.1:8999\nEOF\n> 2018-07-20 12:56:19 127.0.0.1:59378 127.0.0.1:8999\nEOF\n...\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0cServer\u6bcf\u5904\u7406\u5b8c\u6bd5\u4e00\u6761\u8bf7\u6c42\u4e4b\u540e\u4fbf\u5173\u95ed\u94fe\u63a5\u3002Client\u5728\u7b2c\u4e00\u6761\u8bf7\u6c42\u53d1\u9001\u5b8c\u6bd5\u540e\uff0c\u7531\u4e8e\u8fde\u63a5\u6c60\u7684IO\u590d\u7528\u7279\u6027\uff0c\u4e0b\u4e00\u6b21\u83b7\u53d6\u5230\u7684\u5c06\u662f\u540c\u4e00\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u7531\u4e8eServer\u94fe\u63a5\u5df2\u4e3b\u52a8\u5173\u95ed\uff0c\u7b2c\u4e8c\u6b21\u8bf7\u6c42\u5199\u5165\u6210\u529f\uff08\u5176\u5b9e\u5e76\u672a\u6210\u529f\u53d1\u9001\u5230Server\u7aef\uff0c\u9700\u8981\u901a\u8fc7\u4e0b\u4e00\u6b21\u7684\u8bfb\u53d6\u64cd\u4f5c\u624d\u80fd\u68c0\u6d4b\u5230\u94fe\u63a5\u9519\u8bef\uff09\uff0c\u4f46\u662f\u8bfb\u53d6\u5374\u5931\u8d25\u4e86\uff08 ",(0,r.jsx)(e.code,{children:"EOF"})," \u8868\u793a\u76ee\u6807\u8fde\u63a5\u5173\u95ed\uff09\uff0c\u56e0\u6b64\u8fd9\u4e2a\u65f6\u5019Client\u6267\u884c ",(0,r.jsx)(e.code,{children:"Close"})," \u65f6\u5c06\u4f1a\u9500\u6bc1\u8be5\u8fde\u63a5\u64cd\u4f5c\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u8fdb\u4e00\u6b65\u590d\u7528\u3002\u4e0b\u4e00\u6b21\u518d\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"gtcp.NewPoolConn"})," \u83b7\u5f97\u8fde\u63a5\u5bf9\u8c61\u65f6\uff0cClient\u5c06\u4f1a\u4e0eServer\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5\u8fdb\u884c\u6570\u636e\u901a\u4fe1\u3002\u6240\u4ee5\u4f60\u770b\u5230Client\u7684\u7aef\u53e3\u4e00\u76f4\u5728\u53d8\u5316\uff0c\u90a3\u662f\u56e0\u4e3a\u8be5 ",(0,r.jsx)(e.code,{children:"gtcp.Conn"})," \u5bf9\u8c61\u5df2\u7ecf\u662f\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5\u5bf9\u8c61\uff0c\u4e4b\u524d\u7684\u8fde\u63a5\u5bf9\u8c61\u5df2\u7ecf\u88ab\u9500\u6bc1\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8fde\u63a5\u5bf9\u8c61\u7684IO\u590d\u7528\u6d89\u53ca\u5230\u5341\u5206\u5fae\u5999\u7684\u8fde\u63a5\u72b6\u6001\u53d8\u5316\u95ee\u9898\uff0c\u7531\u4e8e\u70b9\u5bf9\u70b9\u7f51\u7edc\u901a\u4fe1\u672c\u8eab\u662f\u6bd4\u8f83\u590d\u6742\u7684\u73af\u5883\uff0c\u8fde\u63a5\u5bf9\u8c61\u7684\u72b6\u6001\u968f\u65f6\u53ef\u80fd\u88ab\u52a8\u53d1\u751f\u7740\u53d8\u5316\uff0c\u56e0\u6b64\uff0c\u5728\u4f7f\u7528gtcp\u8fde\u63a5\u6c60\u7279\u6027\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u5f53\u901a\u4fe1\u9519\u8bef\u4ea7\u751f\u65f6\u7684\u8fde\u63a5\u5bf9\u8c61\u91cd\u5efa\u673a\u5236\uff0c\u4e00\u65e6\u4ea7\u751f\u9519\u8bef\uff0c\u7acb\u5373\u4e22\u5f03\uff08 ",(0,r.jsx)(e.code,{children:"Close"}),"\uff09\u8be5\u5bf9\u8c61( ",(0,r.jsx)(e.code,{children:"gtcp.PoolConn"}),")\u5e76\u91cd\u5efa\uff08 ",(0,r.jsx)(e.code,{children:"gtcp.NewPoolConn"}),"\uff09\u3002"]})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>l});var t=o(296540);const r={},i=t.createContext(r);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);