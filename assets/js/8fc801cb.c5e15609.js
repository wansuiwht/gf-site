"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[81466],{758906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var r=t(474848),i=t(28453);const c={title:"HTTPClient-\u81ea\u5b9a\u4e49Header",sidebar_position:3},d=void 0,l={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Header",title:"HTTPClient-\u81ea\u5b9a\u4e49Header",description:"HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u7684 Header \u5185\u5bb9\uff0c\u8be5\u7279\u6027\u4f7f\u7528 SetHeader* \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/3-HTTPClient-\u81ea\u5b9a\u4e49Header.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Header",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Header",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"HTTPClient-\u81ea\u5b9a\u4e49Header",sidebar_position:3},sidebar:"hiddenSidebar",previous:{title:"HTTPClient-\u81ea\u5b9a\u4e49Cookie",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie"},next:{title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType"}},s={},o=[{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:3},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:3}];function a(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u7684 ",(0,r.jsx)(n.code,{children:"Header"})," \u5185\u5bb9\uff0c\u8be5\u7279\u6027\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SetHeader*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"func (c *Client) SetHeader(key, value string) *Client\nfunc (c *Client) SetHeaderMap(m map[string]string) *Client\nfunc (c *Client) SetHeaderRaw(headers string) *Client\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Header"})," \u6765\u81ea\u5b9a\u4e49\u53d1\u9001\u81ea\u5b9a\u4e49\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f ",(0,r.jsx)(n.code,{children:"Span-Id"})," \u53ca ",(0,r.jsx)(n.code,{children:"Trace-Id"})," \u6d88\u606f\u5934\u7684\u793a\u4f8b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/", func(r *ghttp.Request) {\n\t\tr.Response.Writef(\n\t\t\t"Span-Id:%s,Trace-Id:%s",\n\t\t\tr.Header.Get("Span-Id"),\n\t\t\tr.Header.Get("Trace-Id"),\n\t\t)\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u662f\u4f5c\u4e3a\u793a\u4f8b\uff0c\u670d\u52a1\u7aef\u7684\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u76f4\u63a5\u5c06\u63a5\u6536\u5230\u7684 ",(0,r.jsx)(n.code,{children:"Span-Id"})," \u53ca ",(0,r.jsx)(n.code,{children:"Trace-Id"})," \u53c2\u6570\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SetHeader"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n   \t"fmt"\n\n   \t"github.com/gogf/gf/v2/frame/g"\n   \t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n   \tc := g.Client()\n   \tc.SetHeader("Span-Id", "0.0.1")\n   \tc.SetHeader("Trace-Id", "NBC56410N97LJ016FQA")\n   \tif r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n   \t\tpanic(e)\n   \t} else {\n   \t\tfmt.Println(r.ReadAllString())\n   \t}\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"g.Client()"})," \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684HTTP\u8bf7\u6c42\u5ba2\u6237\u7aef\u5bf9\u8c61\uff0c\u5e76\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"c.SetHeader"})," \u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684 ",(0,r.jsx)(n.code,{children:"Header"})," \u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SetHeaderRaw"})," \u65b9\u6cd5"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u65b9\u6cd5\u66f4\u52a0\u7b80\u5355\uff0c\u53ef\u4ee5\u901a\u8fc7\u539f\u59cb\u7684Header\u5b57\u7b26\u4e32\u6765\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8bf7\u6c42Header\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n   \t"fmt"\n\n   \t"github.com/gogf/gf/v2/frame/g"\n   \t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n   \tc := g.Client()\n   \tc.SetHeaderRaw(`\n           Referer: https://localhost\n           Span-Id: 0.0.1\n           Trace-Id: NBC56410N97LJ016FQA\n           User-Agent: MyTestClient\n       `)\n   \tif r, e := c.Get(gctx.New(), "http://127.0.0.1:8199/"); e != nil {\n   \t\tpanic(e)\n   \t} else {\n   \t\tfmt.Println(r.ReadAllString())\n   \t}\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u7ed3\u679c"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u5c06\u4f1a\u6253\u5370\u51fa\u670d\u52a1\u7aef\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Span-Id:0.0.1,Trace-Id:NBC56410N97LJ016FQA\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(296540);const i={},c=r.createContext(i);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);