"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12822],{15:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(74848),r=t(28453);const o={title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",sidebar_position:7},s=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",description:"\u4ee3\u7406 Proxy \u8bbe\u7f6e",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/7-HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/7-HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:172951756e4,sidebarPosition:7,frontMatter:{title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",sidebar_position:7},sidebar:"hiddenSidebar",previous:{title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370"},next:{title:"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6",permalink:"/gf-site/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668\u4e2d\u95f4\u4ef6"}},l={},d=[{value:"\u4ee3\u7406 <code>Proxy</code> \u8bbe\u7f6e",id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",level:2},{value:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",level:2},{value:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",children:["\u4ee3\u7406 ",(0,i.jsx)(n.code,{children:"Proxy"})," \u8bbe\u7f6e"]}),"\n",(0,i.jsxs)(n.p,{children:["HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740 ",(0,i.jsx)(n.code,{children:"proxyURL"}),"\uff0c\u8be5\u8be5\u7279\u6027\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"SetProxy*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002\u4ee3\u7406\u4e3b\u8981\u652f\u6301 ",(0,i.jsx)(n.code,{children:"http"})," \u548c ",(0,i.jsx)(n.code,{children:"socks5"})," \u4e24\u79cd\u5f62\u5f0f\uff0c\u5206\u522b\u4e3a ",(0,i.jsx)(n.code,{children:"http://USER:PASSWORD@IP:PORT"})," \u6216 ",(0,i.jsx)(n.code,{children:"socks5://USER:PASSWORD@IP:PORT"})," \u5f62\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func (c *Client) SetProxy(proxyURL string)\nfunc (c *Client) Proxy(proxyURL string) *Client\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u770b\u4e0b\u5ba2\u6237\u7aef\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"proxyURL"})," \u7684\u793a\u4f8b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",children:"\u666e\u901a\u8c03\u7528\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"SetProxy"})," \u914d\u7f6e\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'client := g.Client()\nclient.SetProxy("http://127.0.0.1:1081")\nclient.SetTimeout(5 * time.Second)\nresponse, err := client.Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nresponse.RawDump()\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",children:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"Proxy"})," \u94fe\u5f0f\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'client := g.Client()\nresponse, err := client.Proxy("http://127.0.0.1:1081").Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nfmt.Println(response.RawResponse())\n'})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);