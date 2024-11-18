"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["63446"],{378642:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6","title":"UDP\u7EC4\u4EF6","description":"UDP (User Datagram Protocol) \u4E00\u79CD\u65E0\u8FDE\u63A5\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u63D0\u4F9B\u9762\u5411\u4E8B\u52A1\u7684\u7B80\u5355\u4E0D\u53EF\u9760\u4FE1\u606F\u4F20\u9001\u670D\u52A1\u3002 UDP \u670D\u52A1\u7AEF\u901A\u8FC7 gudp.Server \u5B9E\u73B0\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7 gudp.Conn \u5BF9\u8C61\u6216\u8005\u5DE5\u5177\u65B9\u6CD5\u5B9E\u73B0\u3002","source":"@site/versioned_docs/version-2.2.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6.md","sourceDirName":"\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6","slug":"/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/","permalink":"/en/2.2.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6.md","tags":[],"version":"2.2.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"UDP\u7EC4\u4EF6","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027","permalink":"/en/2.2.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/TCP\u7EC4\u4EF6/TCP\u7EC4\u4EF6-\u8FDE\u63A5\u6C60\u7279\u6027"},"next":{"title":"UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61","permalink":"/en/2.2.x/\u7F51\u7EDC\u670D\u52A1\u5F00\u53D1/UDP\u7EC4\u4EF6/UDP\u7EC4\u4EF6-\u8FDE\u63A5\u5BF9\u8C61"}}'),s=r("785893"),o=r("250065");let d={title:"UDP\u7EC4\u4EF6",sidebar_position:1,hide_title:!0},i=void 0,c={},l=[];function a(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UDP (User Datagram Protocol)"})," \u4E00\u79CD\u65E0\u8FDE\u63A5\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u63D0\u4F9B\u9762\u5411\u4E8B\u52A1\u7684\u7B80\u5355\u4E0D\u53EF\u9760\u4FE1\u606F\u4F20\u9001\u670D\u52A1\u3002 ",(0,s.jsx)(n.code,{children:"UDP"})," \u670D\u52A1\u7AEF\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"gudp.Server"})," \u5B9E\u73B0\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"gudp.Conn"})," \u5BF9\u8C61\u6216\u8005\u5DE5\u5177\u65B9\u6CD5\u5B9E\u73B0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u65B9\u5F0F"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'import "github.com/gogf/gf/v2/net/gudp"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u63A5\u53E3\u6587\u6863"}),"\uFF1A ",(0,s.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/gudp"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type Server\n    func GetServer(name ...interface{}) *Server\n    func NewServer(address string, handler func(*Conn), names ...string) *Server\n    func (s *Server) Close() error\n    func (s *Server) Run() error\n    func (s *Server) SetAddress(address string)\n    func (s *Server) SetHandler(handler func(*Conn))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,s.jsx)(n.code,{children:"GetServer"})," \u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u901A\u8FC7\u7ED9\u5B9A\u4E00\u4E2A\u552F\u4E00\u7684\u540D\u79F0\u83B7\u53D6/\u521B\u5EFA\u4E00\u4E2AServer\uFF0C\u540E\u7EED\u53EF\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"SetAddress"})," \u548C ",(0,s.jsx)(n.code,{children:"SetHandler"})," \u65B9\u6CD5\u52A8\u6001\u4FEE\u6539Server\u5C5E\u6027\uFF1B ",(0,s.jsx)(n.code,{children:"NewServer"})," \u5219\u76F4\u63A5\u6839\u636E\u7ED9\u5B9A\u53C2\u6570\u521B\u5EFA\u4E00\u4E2AServer\u5BF9\u8C61\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6765\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/net/gudp"\n)\n\nfunc main() {\n    gudp.NewServer("127.0.0.1:8999", func(conn *gudp.Conn) {\n        defer conn.Close()\n        for {\n            if data, _ := conn.Recv(-1); len(data) > 0 {\n                fmt.Println(string(data))\n            }\n        }\n    }).Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UDPServer"})," \u662F\u963B\u585E\u8FD0\u884C\u7684\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u81EA\u5B9A\u4E49\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u6839\u636E\u8BFB\u53D6\u5185\u5BB9\u8FDB\u884C\u5E76\u53D1\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Linux"})," \u4E0B\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5411\u670D\u52A1\u7AEF\u53D1\u9001 ",(0,s.jsx)(n.code,{children:"UDP"})," \u6570\u636E\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u968F\u540E\u67E5\u770B\u670D\u52A1\u7AEF\u7AEF\u662F\u5426\u6709\u8F93\u51FA\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'echo "hello" > /dev/udp/127.0.0.1/8999\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);