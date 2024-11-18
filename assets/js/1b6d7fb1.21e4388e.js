"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30914"],{182199:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>g,assets:()=>c,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","title":"TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","description":"gtcp \u6A21\u5757\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\u65B9\u6CD5\u3002","source":"@site/versioned_docs/version-2.0.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5.md","sourceDirName":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6","slug":"/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","permalink":"/2.0.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636","permalink":"/2.0.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61/\u8FDE\u63A5\u5BF9\u8C61-\u901A\u4FE1\u5F00\u53D1\u8FDB\u9636"},"next":{"title":"TCP\u7EC4\u4EF6-TLS\u52A0\u5BC6","permalink":"/2.0.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-TLS\u52A0\u5BC6"}}'),i=t("785893"),o=t("250065");let d={title:"TCP\u7EC4\u4EF6-\u5DE5\u5177\u65B9\u6CD5",sidebar_position:1,hide_title:!0},s=void 0,c={},a=[];function l(e){let n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gtcp"})," \u6A21\u5757\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\u65B9\u6CD5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gtcp"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gtcp"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"func LoadKeyCrt(crtFile, keyFile string) (*tls.Config, error)\nfunc NewNetConn(addr string, timeout ...int) (net.Conn, error)\nfunc NewNetConnKeyCrt(addr, crtFile, keyFile string) (net.Conn, error)\nfunc NewNetConnTLS(addr string, tlsConfig *tls.Config) (net.Conn, error)\nfunc Send(addr string, data []byte, retry ...Retry) error\nfunc SendPkg(addr string, data []byte, option ...PkgOption) error\nfunc SendPkgWithTimeout(addr string, data []byte, timeout time.Duration, option ...PkgOption) error\nfunc SendRecv(addr string, data []byte, receive int, retry ...Retry) ([]byte, error)\nfunc SendRecvPkg(addr string, data []byte, option ...PkgOption) ([]byte, error)\nfunc SendRecvPkgWithTimeout(addr string, data []byte, timeout time.Duration, option ...PkgOption) ([]byte, error)\nfunc SendRecvWithTimeout(addr string, data []byte, receive int, timeout time.Duration, retry ...Retry) ([]byte, error)\nfunc SendWithTimeout(addr string, data []byte, timeout time.Duration, retry ...Retry) error\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NewNetConn"})," \u7528\u4E8E\u7B80\u5316\u6807\u51C6\u5E93\u8FDE\u63A5\u5BF9\u8C61 ",(0,i.jsx)(n.code,{children:"net.Conn"})," \u7684\u521B\u5EFA\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NewNetConnTLS"})," \u548C ",(0,i.jsx)(n.code,{children:"NewNetConnKeyCrt"})," \u7528\u4E8E\u521B\u5EFA\u652F\u6301TLS\u5B89\u5168\u52A0\u5BC6\u901A\u4FE1\u7684TCP\u5BA2\u6237\u7AEF\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Send*"})," \u7CFB\u5217\u65B9\u6CD5\u76F4\u63A5\u901A\u8FC7\u7ED9\u5B9A\u5730\u5740\u8FDB\u884C\u6570\u636E\u53D1\u9001\uFF0C\u5E76\u83B7\u53D6\u8BE5\u8BF7\u6C42\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u7528\u4E8E\u77ED\u94FE\u63A5\u8BF7\u6C42\u7684\u60C5\u51B5\uFF1B"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u4E3A\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u6211\u4EEC\u4F7F\u7528\u5DE5\u5177\u65B9\u6CD5\u6765\u8BBF\u95EE\u6307\u5B9A\u7684Web\u7AD9\u70B9\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/net/gtcp"\n)\n\nfunc main() {\n    data, err := gtcp.SendRecv("www.baidu.com:80", []byte("HEAD / HTTP/1.1\\n\\n"), -1)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(data))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7TCP\u8BBF\u95EE\u767E\u5EA6\u9996\u9875\uFF0C\u6A21\u62DFHTTP\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u5E76\u83B7\u5F97\u8FD4\u56DE\u7ED3\u679C\u3002 \u6267\u884C\u540E\uFF0C\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'HTTP/1.1 302 Found\nConnection: Keep-Alive\nContent-Length: 17931\nContent-Type: text/html\nDate: Tue, 04 Jun 2019 15:53:09 GMT\nEtag: "54d9749e-460b"\nServer: bfe/1.0.8.18\n'})})]})}function g(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var r=t(667294);let i={},o=r.createContext(i);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);