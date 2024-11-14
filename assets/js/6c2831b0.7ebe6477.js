"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[4170],{574718:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","title":"TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","description":"gtcp \u6a21\u5757\u63d0\u4f9b\u4e86\u7b80\u4fbf\u6613\u7528\u7684 gtcp.Conn \u94fe\u63a5\u64cd\u4f5c\u5bf9\u8c61\u3002","source":"@site/versioned_docs/version-2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61.md","sourceDirName":"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","slug":"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/","permalink":"/2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"TCP\u7ec4\u4ef6","permalink":"/2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/"},"next":{"title":"\u8fde\u63a5\u5bf9\u8c61-\u6d88\u606f\u5305\u5904\u7406","permalink":"/2.5.x/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61/\u8fde\u63a5\u5bf9\u8c61-\u6d88\u606f\u5305\u5904\u7406"}}');var c=r(474848),i=r(28453);const o={title:"TCP\u7ec4\u4ef6-\u8fde\u63a5\u5bf9\u8c61",sidebar_position:0,hide_title:!0},d=void 0,l={},s=[{value:"\u5199\u5165\u64cd\u4f5c",id:"\u5199\u5165\u64cd\u4f5c",level:2},{value:"\u8bfb\u53d6\u64cd\u4f5c",id:"\u8bfb\u53d6\u64cd\u4f5c",level:2},{value:"\u8d85\u65f6\u5904\u7406",id:"\u8d85\u65f6\u5904\u7406",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u793a\u4f8b1\uff0c\u7b80\u5355\u4f7f\u7528",id:"\u793a\u4f8b1\u7b80\u5355\u4f7f\u7528",level:3},{value:"\u793a\u4f8b2\uff0c\u56de\u663e\u670d\u52a1",id:"\u793a\u4f8b2\u56de\u663e\u670d\u52a1",level:3},{value:"\u793a\u4f8b3\uff0cHTTP\u5ba2\u6237\u7aef",id:"\u793a\u4f8b3http\u5ba2\u6237\u7aef",level:3}];function a(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"gtcp"})," \u6a21\u5757\u63d0\u4f9b\u4e86\u7b80\u4fbf\u6613\u7528\u7684 ",(0,c.jsx)(e.code,{children:"gtcp.Conn"})," \u94fe\u63a5\u64cd\u4f5c\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gtcp"\n'})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:"type Conn\n    func NewConn(addr string, timeout ...int) (*Conn, error)\n    func NewConnByNetConn(conn net.Conn) *Conn\n    func NewConnKeyCrt(addr, crtFile, keyFile string) (*Conn, error)\n    func NewConnTLS(addr string, tlsConfig *tls.Config) (*Conn, error)\n    func (c *Conn) Close() error\n    func (c *Conn) LocalAddr() net.Addr\n    func (c *Conn) Recv(length int, retry ...Retry) ([]byte, error)\n    func (c *Conn) RecvLine(retry ...Retry) ([]byte, error)\n    func (c *Conn) RecvWithTimeout(length int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) RemoteAddr() net.Addr\n    func (c *Conn) Send(data []byte, retry ...Retry) error\n    func (c *Conn) SendRecv(data []byte, receive int, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendRecvWithTimeout(data []byte, receive int, timeout time.Duration, retry ...Retry) ([]byte, error)\n    func (c *Conn) SendWithTimeout(data []byte, timeout time.Duration, retry ...Retry) error\n    func (c *Conn) SetDeadline(t time.Time) error\n    func (c *Conn) SetRecvBufferWait(bufferWaitDuration time.Duration)\n    func (c *Conn) SetRecvDeadline(t time.Time) error\n    func (c *Conn) SetSendDeadline(t time.Time) error\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u5199\u5165\u64cd\u4f5c",children:"\u5199\u5165\u64cd\u4f5c"}),"\n",(0,c.jsxs)(e.p,{children:["TCP\u901a\u4fe1\u5199\u5165\u64cd\u4f5c\u7531 ",(0,c.jsx)(e.code,{children:"Send"})," \u65b9\u6cd5\u5b9e\u73b0\uff0c\u5e76\u63d0\u4f9b\u4e86\u9519\u8bef\u91cd\u8bd5\u7684\u673a\u5236\uff0c\u7531\u7b2c\u4e8c\u4e2a\u975e\u5fc5\u9700\u53c2\u6570 ",(0,c.jsx)(e.code,{children:"retry"})," \u63d0\u4f9b\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,c.jsx)(e.code,{children:"Send"})," \u65b9\u6cd5\u4e0d\u5e26\u4efb\u4f55\u7684\u7f13\u51b2\u673a\u5236\uff0c\u4e5f\u5c31\u662f\u8bf4\u6bcf\u8c03\u7528\u4e00\u6b21 ",(0,c.jsx)(e.code,{children:"Send"})," \u65b9\u6cd5\u5c06\u4f1a\u7acb\u5373\u8c03\u7528\u5e95\u5c42\u7684TCP Write\u65b9\u6cd5\u5199\u5165\u6570\u636e(\u7f13\u51b2\u673a\u5236\u4f9d\u9760\u7cfb\u7edf\u5e95\u5c42\u5b9e\u73b0)\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60f3\u8981\u8fdb\u884c\u8f93\u51fa\u7f13\u51b2\u63a7\u5236\uff0c\u8bf7\u5728\u4e1a\u52a1\u5c42\u8fdb\u884c\u5904\u7406\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u8fdb\u884cTCP\u5199\u5165\u65f6\uff0c\u53ef\u9760\u7684\u901a\u4fe1\u573a\u666f\u4e0b\u5f80\u5f80\u662f\u4e00\u5199\u4e00\u8bfb\uff0c\u5373 ",(0,c.jsx)(e.code,{children:"Send"})," \u6210\u529f\u4e4b\u540e\u63a5\u7740\u4fbf\u5f00\u59cb ",(0,c.jsx)(e.code,{children:"Recv"})," \u83b7\u53d6\u76ee\u6807\u7684\u53cd\u9988\u7ed3\u679c\u3002\u56e0\u6b64 ",(0,c.jsx)(e.code,{children:"gtcp.Conn"})," \u4e5f\u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684 ",(0,c.jsx)(e.code,{children:"SendRecv"})," \u65b9\u6cd5\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bfb\u53d6\u64cd\u4f5c",children:"\u8bfb\u53d6\u64cd\u4f5c"}),"\n",(0,c.jsxs)(e.p,{children:["TCP\u901a\u4fe1\u8bfb\u53d6\u64cd\u4f5c\u7531 ",(0,c.jsx)(e.code,{children:"Recv"})," \u65b9\u6cd5\u5b9e\u73b0\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u9519\u8bef\u91cd\u8bd5\u7684\u673a\u5236\uff0c\u7531\u7b2c\u4e8c\u4e2a\u975e\u5fc5\u9700\u53c2\u6570 ",(0,c.jsx)(e.code,{children:"retry"})," \u63d0\u4f9b\u3002 ",(0,c.jsx)(e.code,{children:"Recv"})," \u65b9\u6cd5\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684\u8bfb\u53d6\u7f13\u51b2\u63a7\u5236\uff0c\u8bfb\u53d6\u6570\u636e\u65f6\u53ef\u4ee5\u6307\u5b9a\u8bfb\u53d6\u7684\u957f\u5ea6\uff08\u7531 ",(0,c.jsx)(e.code,{children:"length"})," \u53c2\u6570\u6307\u5b9a\uff09\uff0c\u5f53\u8bfb\u53d6\u5230\u6307\u5b9a\u957f\u5ea6\u7684\u6570\u636e\u540e\u5c06\u4f1a\u7acb\u5373\u8fd4\u56de\u3002\u5982\u679c ",(0,c.jsx)(e.code,{children:"length < 0"})," \u90a3\u4e48\u5c06\u4f1a\u8bfb\u53d6\u6240\u6709\u53ef\u8bfb\u53d6\u7684\u7f13\u51b2\u533a\u6570\u636e\u5e76\u8fd4\u56de\u3002\u5f53 ",(0,c.jsx)(e.code,{children:"length = 0"})," \u65f6\u8868\u793a\u83b7\u53d6\u4e00\u6b21\u7f13\u51b2\u533a\u7684\u6570\u636e\u540e\u7acb\u5373\u8fd4\u56de\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"Recv(-1)"})," \u53ef\u4ee5\u8bfb\u53d6\u6240\u6709\u7f13\u51b2\u533a\u53ef\u8bfb\u6570\u636e(\u957f\u5ea6\u4e0d\u5b9a\uff0c\u5982\u679c\u53d1\u9001\u7684\u6570\u636e\u5305\u592a\u957f\u6709\u53ef\u80fd\u4f1a\u88ab\u622a\u65ad)\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u5305\u7684\u89e3\u6790\u95ee\u9898\uff0c\u5bb9\u6613\u4ea7\u751f\u975e\u5b8c\u6574\u5305\u7684\u60c5\u51b5\u3002\u8fd9\u4e2a\u65f6\u5019\uff0c\u4e1a\u52a1\u5c42\u9700\u8981\u6839\u636e\u65e2\u5b9a\u7684\u6570\u636e\u5305\u7ed3\u6784\u81ea\u5df1\u8d1f\u8d23\u5305\u7684\u5b8c\u6574\u6027\u5904\u7406\u3002\u63a8\u8350\u4f7f\u7528\u540e\u7eed\u4ecb\u7ecd\u7684 ",(0,c.jsx)(e.code,{children:"\u7b80\u5355\u534f\u8bae"})," \u901a\u8fc7 ",(0,c.jsx)(e.code,{children:"SendPkg"}),"/ ",(0,c.jsx)(e.code,{children:"RecvPkg"})," \u6765\u5b9e\u73b0\u6d88\u606f\u5305\u7684\u53d1\u9001/\u63a5\u6536\uff0c\u5177\u4f53\u8bf7\u67e5\u770b\u540e\u7eed\u7ae0\u8282\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8d85\u65f6\u5904\u7406",children:"\u8d85\u65f6\u5904\u7406"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"gtcp.Conn"})," \u5bf9TCP\u901a\u4fe1\u65f6\u7684\u6570\u636e\u5199\u5165\u548c\u8bfb\u53d6\u63d0\u4f9b\u4e86\u8d85\u65f6\u5904\u7406\uff0c\u901a\u8fc7\u65b9\u6cd5\u4e2d\u7684 ",(0,c.jsx)(e.code,{children:"timeout"})," \u53c2\u6570\u6307\u5b9a\uff0c\u8fd9\u5757\u6bd4\u8f83\u7b80\u5355\uff0c\u4e0d\u8fc7\u591a\u9610\u8ff0\u3002"]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsxs)(e.p,{children:["\u6211\u4eec\u63a5\u4e0b\u6765\u901a\u8fc7\u901a\u8fc7\u51e0\u4e2a\u4f8b\u5b50\u6765\u770b\u770b\u5982\u4f55\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"gtcp.Conn"})," \u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,c.jsx)(e.h3,{id:"\u793a\u4f8b1\u7b80\u5355\u4f7f\u7528",children:"\u793a\u4f8b1\uff0c\u7b80\u5355\u4f7f\u7528"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    // Server\n    go gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                  fmt.Println(string(data))\n            }\n            if err != nil {\n                break\n            }\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    conn, err := gtcp.NewConn("127.0.0.1:8999")\n    if err != nil {\n        panic(err)\n    }\n    for i := 0; i < 10000; i++ {\n        if err := conn.Send([]byte(gconv.String(i))); err != nil {\n            glog.Error(err)\n        }\n        time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"Server"})," \u7aef\uff0c\u63a5\u6536\u5230\u5ba2\u6237\u7aef\u7684\u6570\u636e\u540e\u7acb\u5373\u6253\u5370\u5230\u7ec8\u7aef\u4e0a\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"Client"})," \u7aef\uff0c\u4f7f\u7528\u540c\u4e00\u4e2a\u8fde\u63a5\u5bf9\u8c61\uff0c\u5728\u5faa\u73af\u4e2d\u6bcf\u96941\u79d2\u5411\u670d\u52a1\u7aef\u53d1\u9001\u5f53\u524d\u9012\u589e\u7684\u6570\u5b57\u3002\u540c\u65f6\uff0c\u8be5\u529f\u80fd\u4e5f\u53ef\u4ee5\u6f14\u793a\u51fa\u5e95\u5c42 ",(0,c.jsx)(e.code,{children:"Socket"})," \u901a\u4fe1\u5e76\u6ca1\u6709\u4f7f\u7528\u7f13\u51b2\u5b9e\u73b0\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6267\u884c\u4e00\u6b21 ",(0,c.jsx)(e.code,{children:"Send"})," \u5373\u7acb\u523b\u5411\u670d\u52a1\u7aef\u53d1\u9001\u6570\u636e\u3002\u56e0\u6b64\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u5728\u672c\u5730\u81ea\u884c\u7ba1\u7406\u597d\u9700\u8981\u53d1\u9001\u7684\u7f13\u51b2\u6570\u636e\u3002"]}),"\n",(0,c.jsx)(e.li,{children:"\u6267\u884c\u7ed3\u679c \u6267\u884c\u540e\uff0c\u53ef\u4ee5\u770b\u5230Server\u5728\u7ec8\u7aef\u4e0a\u8f93\u51fa\u4ee5\u4e0b\u4fe1\u606f\uff1a"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"    2018-07-11 22:11:08.650 0\n    2018-07-11 22:11:09.651 1\n    2018-07-11 22:11:10.651 2\n    2018-07-11 22:11:11.651 3\n    2018-07-11 22:11:12.651 4\n    2018-07-11 22:11:13.651 5\n    2018-07-11 22:11:14.652 6\n    2018-07-11 22:11:15.652 7\n    2018-07-11 22:11:16.652 8\n    2018-07-11 22:11:17.652 9\n    2018-07-11 22:11:18.652 10\n    2018-07-11 22:11:19.653 11\n    ...\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u793a\u4f8b2\u56de\u663e\u670d\u52a1",children:"\u793a\u4f8b2\uff0c\u56de\u663e\u670d\u52a1"}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u4eec\u5c06\u4e4b\u524d\u7684\u56de\u663e\u670d\u52a1\u6539\u8fdb\u4e00\u4e0b\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "time"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n    // Server\n    go gtcp.NewServer("127.0.0.1:8999", func(conn *gtcp.Conn) {\n        defer conn.Close()\n        for {\n            data, err := conn.Recv(-1)\n            if len(data) > 0 {\n                if err := conn.Send(append([]byte("> "), data...)); err != nil {\n                  fmt.Println(err)\n                }\n            }\n            if err != nil {\n                break\n            }\n        }\n    }).Run()\n\n    time.Sleep(time.Second)\n\n    // Client\n    for {\n       if conn, err := gtcp.NewConn("127.0.0.1:8999"); err == nil {\n           if b, err := conn.SendRecv([]byte(gtime.Datetime()), -1); err == nil {\n               fmt.Println(string(b), conn.LocalAddr(), conn.RemoteAddr())\n           } else {\n               fmt.Println(err)\n           }\n           conn.Close()\n       } else {\n           glog.Error(err)\n       }\n       time.Sleep(time.Second)\n    }\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u8be5\u793a\u4f8b\u7a0b\u5e8f\u4e2d\uff0c ",(0,c.jsx)(e.code,{children:"Client"})," \u6bcf\u96941\u79d2\u949f\u5411 ",(0,c.jsx)(e.code,{children:"Server"})," \u53d1\u9001\u5f53\u524d\u7684\u65f6\u95f4\u4fe1\u606f\uff0c ",(0,c.jsx)(e.code,{children:"Server"})," \u63a5\u6536\u5230\u4e4b\u540e\u8fd4\u56de\u539f\u6570\u636e\u4fe1\u606f\uff0c ",(0,c.jsx)(e.code,{children:"Client"})," \u63a5\u6536\u5230 ",(0,c.jsx)(e.code,{children:"Server"})," \u7aef\u8fd4\u56de\u4fe1\u606f\u540e\u7acb\u5373\u6253\u5370\u5230\u7ec8\u7aef\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"> 2018-07-19 23:25:43 127.0.0.1:34306 127.0.0.1:8999\n> 2018-07-19 23:25:44 127.0.0.1:34308 127.0.0.1:8999\n> 2018-07-19 23:25:45 127.0.0.1:34312 127.0.0.1:8999\n> 2018-07-19 23:25:46 127.0.0.1:34314 127.0.0.1:8999\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u793a\u4f8b3http\u5ba2\u6237\u7aef",children:"\u793a\u4f8b3\uff0cHTTP\u5ba2\u6237\u7aef"}),"\n",(0,c.jsxs)(e.p,{children:["\u6211\u4eec\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u4f7f\u7528gtcp\u5305\u6765\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684HTTP\u5ba2\u6237\u7aef\uff0c\u8bfb\u53d6\u5e76\u6253\u5370\u51fa\u767e\u5ea6\u9996\u9875\u7684 ",(0,c.jsx)(e.code,{children:"header"})," \u548c ",(0,c.jsx)(e.code,{children:"content"})," \u5185\u5bb9\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "bytes"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    conn, err := gtcp.NewConn("www.baidu.com:80")\n    if err != nil {\n        panic(err)\n    }\n    defer conn.Close()\n\n    if err := conn.Send([]byte("GET / HTTP/1.1\\r\\n\\r\\n")); err != nil {\n        panic(err)\n    }\n\n    header        := make([]byte, 0)\n    content       := make([]byte, 0)\n    contentLength := 0\n    for {\n        data, err := conn.RecvLine()\n        // header\u8bfb\u53d6\uff0c\u89e3\u6790\u6587\u672c\u957f\u5ea6\n        if len(data) > 0 {\n            array := bytes.Split(data, []byte(": "))\n            // \u83b7\u5f97\u9875\u9762\u5185\u5bb9\u957f\u5ea6\n            if contentLength == 0 && len(array) == 2 && bytes.EqualFold([]byte("Content-Length"), array[0]) {\n                contentLength = gconv.Int(string(array[1][:len(array[1])-1]))           }\n            header = append(header, data...)\n            header = append(header, \'\\n\')\n        }\n        // header\u8bfb\u53d6\u5b8c\u6bd5\uff0c\u8bfb\u53d6\u6587\u672c\u5185\u5bb9\n        if contentLength > 0 && len(data) == 1 {\n            content, _ = conn.Recv(contentLength)\n            break\n        }\n        if err != nil {\n            fmt.Errorf("ERROR: %s\\n", err.Error())\n            break\n        }\n    }\n\n    if len(header) > 0 {\n        fmt.Println(string(header))\n    }\n    if len(content) > 0 {\n        fmt.Println(string(content))\n    }\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'HTTP/1.1 200 OK\nAccept-Ranges: bytes\nCache-Control: no-cache\nConnection: Keep-Alive\nContent-Length: 14615\nContent-Type: text/html\nDate: Sat, 21 Jul 2018 04:21:03 GMT\nEtag: "5b3c3650-3917"\nLast-Modified: Wed, 04 Jul 2018 02:52:00 GMT\nP3p: CP=" OTI DSP COR IVA OUR IND COM "\nPragma: no-cache\nServer: BWS/1.1\n...\n(\u7565)\n'})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>d});var t=r(296540);const c={},i=t.createContext(c);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);