"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["3865"],{114734:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>a,assets:()=>l,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E","title":"HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E","description":"\u5728GoFrame\u6846\u67B6\u7684HTTP\u5BA2\u6237\u7AEF\u4E2D\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740\uFF0C\u652F\u6301http\u548Csocks5\u4E24\u79CD\u5F62\u5F0F\u3002\u901A\u8FC7SetProxy\u548CProxy\u65B9\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u8F7B\u677E\u914D\u7F6E\u4EE3\u7406\uFF0C\u5B9E\u73B0\u5BF9\u5916\u7F51\u8D44\u6E90\u7684\u8BBF\u95EE\uFF0C\u5305\u62EC\u666E\u901A\u8C03\u7528\u793A\u4F8B\u548C\u94FE\u5F0F\u8C03\u7528\u793A\u4F8B\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u638C\u63E1\u4EE3\u7406\u529F\u80FD\u7684\u4F7F\u7528\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/docs/web/http-client-proxy","permalink":"/en/docs/web/http-client-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/web/http-client-proxy","title":"HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","HTTP\u5BA2\u6237\u7AEF","\u4EE3\u7406\u8BBE\u7F6E","SetProxy","Proxy\u65B9\u6CD5","http\u4EE3\u7406","socks5\u4EE3\u7406","\u94FE\u5F0F\u8C03\u7528","HTTP\u8BF7\u6C42"],"description":"\u5728GoFrame\u6846\u67B6\u7684HTTP\u5BA2\u6237\u7AEF\u4E2D\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740\uFF0C\u652F\u6301http\u548Csocks5\u4E24\u79CD\u5F62\u5F0F\u3002\u901A\u8FC7SetProxy\u548CProxy\u65B9\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u8F7B\u677E\u914D\u7F6E\u4EE3\u7406\uFF0C\u5B9E\u73B0\u5BF9\u5916\u7F51\u8D44\u6E90\u7684\u8BBF\u95EE\uFF0C\u5305\u62EC\u666E\u901A\u8C03\u7528\u793A\u4F8B\u548C\u94FE\u5F0F\u8C03\u7528\u793A\u4F8B\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u638C\u63E1\u4EE3\u7406\u529F\u80FD\u7684\u4F7F\u7528\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u8BF7\u6C42\u4FE1\u606F\u6253\u5370","permalink":"/en/docs/web/http-client-raw-request-response"},"next":{"title":"HTTPClient-\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6","permalink":"/en/docs/web/http-client-middleware"}}'),o=n("785893"),i=n("250065");let s={slug:"/docs/web/http-client-proxy",title:"HTTPClient-\u4EE3\u7406Proxy\u8BBE\u7F6E",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","HTTP\u5BA2\u6237\u7AEF","\u4EE3\u7406\u8BBE\u7F6E","SetProxy","Proxy\u65B9\u6CD5","http\u4EE3\u7406","socks5\u4EE3\u7406","\u94FE\u5F0F\u8C03\u7528","HTTP\u8BF7\u6C42"],description:"\u5728GoFrame\u6846\u67B6\u7684HTTP\u5BA2\u6237\u7AEF\u4E2D\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740\uFF0C\u652F\u6301http\u548Csocks5\u4E24\u79CD\u5F62\u5F0F\u3002\u901A\u8FC7SetProxy\u548CProxy\u65B9\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u8F7B\u677E\u914D\u7F6E\u4EE3\u7406\uFF0C\u5B9E\u73B0\u5BF9\u5916\u7F51\u8D44\u6E90\u7684\u8BBF\u95EE\uFF0C\u5305\u62EC\u666E\u901A\u8C03\u7528\u793A\u4F8B\u548C\u94FE\u5F0F\u8C03\u7528\u793A\u4F8B\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u638C\u63E1\u4EE3\u7406\u529F\u80FD\u7684\u4F7F\u7528\u3002"},c=void 0,l={},d=[{value:"\u4EE3\u7406 <code>Proxy</code> \u8BBE\u7F6E",id:"\u4EE3\u7406-proxy-\u8BBE\u7F6E",level:2},{value:"\u666E\u901A\u8C03\u7528\u793A\u4F8B",id:"\u666E\u901A\u8C03\u7528\u793A\u4F8B",level:2},{value:"\u94FE\u5F0F\u8C03\u7528\u793A\u4F8B",id:"\u94FE\u5F0F\u8C03\u7528\u793A\u4F8B",level:2}];function p(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"\u4EE3\u7406-proxy-\u8BBE\u7F6E",children:["\u4EE3\u7406 ",(0,o.jsx)(t.code,{children:"Proxy"})," \u8BBE\u7F6E"]}),"\n",(0,o.jsxs)(t.p,{children:["HTTP\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\u65F6\u53EF\u4EE5\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740 ",(0,o.jsx)(t.code,{children:"proxyURL"}),"\uFF0C\u8BE5\u8BE5\u7279\u6027\u4F7F\u7528 ",(0,o.jsx)(t.code,{children:"SetProxy*"})," \u76F8\u5173\u65B9\u6CD5\u5B9E\u73B0\u3002\u4EE3\u7406\u4E3B\u8981\u652F\u6301 ",(0,o.jsx)(t.code,{children:"http"})," \u548C ",(0,o.jsx)(t.code,{children:"socks5"})," \u4E24\u79CD\u5F62\u5F0F\uFF0C\u5206\u522B\u4E3A ",(0,o.jsx)(t.code,{children:"http://USER:PASSWORD@IP:PORT"})," \u6216 ",(0,o.jsx)(t.code,{children:"socks5://USER:PASSWORD@IP:PORT"})," \u5F62\u5F0F\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u65B9\u6CD5\u5217\u8868\uFF1A"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"func (c *Client) SetProxy(proxyURL string)\nfunc (c *Client) Proxy(proxyURL string) *Client\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u6211\u4EEC\u6765\u770B\u4E0B\u5BA2\u6237\u7AEF\u8BBE\u7F6E ",(0,o.jsx)(t.code,{children:"proxyURL"})," \u7684\u793A\u4F8B\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u666E\u901A\u8C03\u7528\u793A\u4F8B",children:"\u666E\u901A\u8C03\u7528\u793A\u4F8B"}),"\n",(0,o.jsxs)(t.p,{children:["\u4F7F\u7528 ",(0,o.jsx)(t.code,{children:"SetProxy"})," \u914D\u7F6E\u65B9\u6CD5\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'client := g.Client()\nclient.SetProxy("http://127.0.0.1:1081")\nclient.SetTimeout(5 * time.Second)\nresponse, err := client.Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nresponse.RawDump()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"\u94FE\u5F0F\u8C03\u7528\u793A\u4F8B",children:"\u94FE\u5F0F\u8C03\u7528\u793A\u4F8B"}),"\n",(0,o.jsxs)(t.p,{children:["\u4F7F\u7528 ",(0,o.jsx)(t.code,{children:"Proxy"})," \u94FE\u5F0F\u65B9\u6CD5\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'client := g.Client()\nresponse, err := client.Proxy("http://127.0.0.1:1081").Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nfmt.Println(response.RawResponse())\n'})})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(667294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);