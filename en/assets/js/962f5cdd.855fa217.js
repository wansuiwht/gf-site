"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["65880"],{910513:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>d,assets:()=>s,toc:()=>a,frontMatter:()=>l});var i=JSON.parse('{"id":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528","title":"\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528","description":"\u57FA\u672C\u4F7F\u7528","source":"@site/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528.md","sourceDirName":"\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool","slug":"/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u5BF9\u8C61\u590D\u7528-gpool","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5BF9\u8C61\u590D\u7528-gpool/"},"next":{"title":"\u5E76\u53D1\u5B89\u5168\u73AF-gring","permalink":"/en/2.3.x/\u7EC4\u4EF6\u5217\u8868/\u6570\u636E\u7ED3\u6784/\u5E76\u53D1\u5B89\u5168\u73AF-gring/"}}'),o=t("785893"),r=t("250065");let l={title:"\u5BF9\u8C61\u590D\u7528-\u57FA\u672C\u4F7F\u7528",sidebar_position:0,hide_title:!0},c=void 0,s={},a=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u521B\u5EFA\u53CA\u9500\u6BC1\u65B9\u6CD5",id:"\u521B\u5EFA\u53CA\u9500\u6BC1\u65B9\u6CD5",level:2}];function p(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/container/gpool"\n    "fmt"\n    "time"\n)\n\nfunc main () {\n    // \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u6C60\uFF0C\u8FC7\u671F\u65F6\u95F4\u4E3A1\u79D2\n    p := gpool.New(time.Second, nil)\n\n    // \u4ECE\u6C60\u4E2D\u53D6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD4\u56DEnil\u53CA\u9519\u8BEF\u4FE1\u606F\n    fmt.Println(p.Get())\n\n    // \u4E22\u4E00\u4E2A\u5BF9\u8C61\u5230\u6C60\u4E2D\n    p.Put(1)\n\n    // \u91CD\u65B0\u4ECE\u6C60\u4E2D\u53D6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD4\u56DE1\n    fmt.Println(p.Get())\n\n    // \u7B49\u5F852\u79D2\u540E\u91CD\u8BD5\uFF0C\u53D1\u73B0\u5BF9\u8C61\u5DF2\u8FC7\u671F\uFF0C\u8FD4\u56DEnil\u53CA\u9519\u8BEF\u4FE1\u606F\n    time.Sleep(2*time.Second)\n    fmt.Println(p.Get())\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u521B\u5EFA\u53CA\u9500\u6BC1\u65B9\u6CD5",children:"\u521B\u5EFA\u53CA\u9500\u6BC1\u65B9\u6CD5"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u7ED9\u5B9A\u52A8\u6001\u521B\u5EFA\u53CA\u9500\u6BC1\u65B9\u6CD5\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/container/gpool"\n    "github.com/gogf/gf/v2/net/gtcp"\n    "github.com/gogf/gf/v2/os/glog"\n    "time"\n)\n\nfunc main() {\n    // \u521B\u5EFA\u5BF9\u8C61\u590D\u7528\u6C60\uFF0C\u5BF9\u8C61\u8FC7\u671F\u65F6\u95F4\u4E3A3\u79D2\uFF0C\u5E76\u7ED9\u5B9A\u521B\u5EFA\u53CA\u9500\u6BC1\u65B9\u6CD5\n    p := gpool.New(3*time.Second, func() (interface{}, error) {\n        return gtcp.NewConn("www.baidu.com:80")\n    }, func(i interface{}) {\n        glog.Println("expired")\n        i.(*gtcp.Conn).Close()\n    })\n    conn, err := p.Get()\n    if err != nil {\n        panic(err)\n    }\n    result, err := conn.(*gtcp.Conn).SendRecv([]byte("HEAD / HTTP/1.1\\n\\n"), -1)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(string(result))\n    // \u4E22\u56DE\u6C60\u4E2D\u4EE5\u4FBF\u91CD\u590D\u4F7F\u7528\n    p.Put(conn)\n    // \u7B49\u5F85\u4E00\u5B9A\u65F6\u95F4\u89C2\u5BDF\u8FC7\u671F\u65B9\u6CD5\u8C03\u7528\n    time.Sleep(4*time.Second)\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884C\u540E\uFF0C\u7EC8\u7AEF\u8F93\u51FA\u7ED3\u679C\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'HTTP/1.1 302 Found\nConnection: Keep-Alive\nContent-Length: 17931\nContent-Type: text/html\nDate: Wed, 29 May 2019 11:23:20 GMT\nEtag: "54d9749e-460b"\nServer: bfe/1.0.8.18\n\n2019-05-29 19:23:24.732 expired\n'})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var i=t(667294);let o={},r=i.createContext(o);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);