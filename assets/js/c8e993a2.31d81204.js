"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[69929],{865891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","title":"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","description":"\u5728GoFrame\u6846\u67b6\u7684HTTP\u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\uff0c\u652f\u6301http\u548csocks5\u4e24\u79cd\u5f62\u5f0f\u3002\u901a\u8fc7SetProxy\u548cProxy\u65b9\u6cd5\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u914d\u7f6e\u4ee3\u7406\uff0c\u5b9e\u73b0\u5bf9\u5916\u7f51\u8d44\u6e90\u7684\u8bbf\u95ee\uff0c\u5305\u62ec\u666e\u901a\u8c03\u7528\u793a\u4f8b\u548c\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u638c\u63e1\u4ee3\u7406\u529f\u80fd\u7684\u4f7f\u7528\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/docs/web/http-client-proxy","permalink":"/2.7.x/docs/web/http-client-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/web/http-client-proxy","title":"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","HTTP\u5ba2\u6237\u7aef","\u4ee3\u7406\u8bbe\u7f6e","SetProxy","Proxy\u65b9\u6cd5","http\u4ee3\u7406","socks5\u4ee3\u7406","\u94fe\u5f0f\u8c03\u7528","HTTP\u8bf7\u6c42"],"description":"\u5728GoFrame\u6846\u67b6\u7684HTTP\u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\uff0c\u652f\u6301http\u548csocks5\u4e24\u79cd\u5f62\u5f0f\u3002\u901a\u8fc7SetProxy\u548cProxy\u65b9\u6cd5\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u914d\u7f6e\u4ee3\u7406\uff0c\u5b9e\u73b0\u5bf9\u5916\u7f51\u8d44\u6e90\u7684\u8bbf\u95ee\uff0c\u5305\u62ec\u666e\u901a\u8c03\u7528\u793a\u4f8b\u548c\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u638c\u63e1\u4ee3\u7406\u529f\u80fd\u7684\u4f7f\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370","permalink":"/2.7.x/docs/web/http-client-raw-request-response"},"next":{"title":"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6","permalink":"/2.7.x/docs/web/http-client-middleware"}}');var o=n(474848),s=n(28453);const i={slug:"/docs/web/http-client-proxy",title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","HTTP\u5ba2\u6237\u7aef","\u4ee3\u7406\u8bbe\u7f6e","SetProxy","Proxy\u65b9\u6cd5","http\u4ee3\u7406","socks5\u4ee3\u7406","\u94fe\u5f0f\u8c03\u7528","HTTP\u8bf7\u6c42"],description:"\u5728GoFrame\u6846\u67b6\u7684HTTP\u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740\uff0c\u652f\u6301http\u548csocks5\u4e24\u79cd\u5f62\u5f0f\u3002\u901a\u8fc7SetProxy\u548cProxy\u65b9\u6cd5\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u914d\u7f6e\u4ee3\u7406\uff0c\u5b9e\u73b0\u5bf9\u5916\u7f51\u8d44\u6e90\u7684\u8bbf\u95ee\uff0c\u5305\u62ec\u666e\u901a\u8c03\u7528\u793a\u4f8b\u548c\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u638c\u63e1\u4ee3\u7406\u529f\u80fd\u7684\u4f7f\u7528\u3002"},c=void 0,l={},d=[{value:"\u4ee3\u7406 <code>Proxy</code> \u8bbe\u7f6e",id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",level:2},{value:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",level:2},{value:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",children:["\u4ee3\u7406 ",(0,o.jsx)(t.code,{children:"Proxy"})," \u8bbe\u7f6e"]}),"\n",(0,o.jsxs)(t.p,{children:["HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740 ",(0,o.jsx)(t.code,{children:"proxyURL"}),"\uff0c\u8be5\u8be5\u7279\u6027\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"SetProxy*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002\u4ee3\u7406\u4e3b\u8981\u652f\u6301 ",(0,o.jsx)(t.code,{children:"http"})," \u548c ",(0,o.jsx)(t.code,{children:"socks5"})," \u4e24\u79cd\u5f62\u5f0f\uff0c\u5206\u522b\u4e3a ",(0,o.jsx)(t.code,{children:"http://USER:PASSWORD@IP:PORT"})," \u6216 ",(0,o.jsx)(t.code,{children:"socks5://USER:PASSWORD@IP:PORT"})," \u5f62\u5f0f\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"func (c *Client) SetProxy(proxyURL string)\nfunc (c *Client) Proxy(proxyURL string) *Client\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u6211\u4eec\u6765\u770b\u4e0b\u5ba2\u6237\u7aef\u8bbe\u7f6e ",(0,o.jsx)(t.code,{children:"proxyURL"})," \u7684\u793a\u4f8b\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",children:"\u666e\u901a\u8c03\u7528\u793a\u4f8b"}),"\n",(0,o.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"SetProxy"})," \u914d\u7f6e\u65b9\u6cd5\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'client := g.Client()\nclient.SetProxy("http://127.0.0.1:1081")\nclient.SetTimeout(5 * time.Second)\nresponse, err := client.Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nresponse.RawDump()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",children:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b"}),"\n",(0,o.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"Proxy"})," \u94fe\u5f0f\u65b9\u6cd5\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'client := g.Client()\nresponse, err := client.Proxy("http://127.0.0.1:1081").Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nfmt.Println(response.RawResponse())\n'})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);