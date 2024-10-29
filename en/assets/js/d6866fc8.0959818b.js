"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[64366],{56852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(74848),s=t(28453);const r={title:"\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d",sidebar_position:4,hide_title:!0},o=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d",title:"\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d",description:"Response \u5bf9\u8c61\u652f\u6301\u6587\u4ef6\u4e0b\u8f7d\u3002",source:"@site/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/4-\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/4-\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d",sidebar_position:4,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8fd4\u56de-Exit\u63a7\u5236",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Exit\u63a7\u5236"},next:{title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",permalink:"/gf-site/en/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790"}},c={},l=[{value:"<code>ServeFile</code>",id:"servefile",level:2},{value:"<code>ServeFileDownload</code>",id:"servefiledownload",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Response"})," \u5bf9\u8c61\u652f\u6301\u6587\u4ef6\u4e0b\u8f7d\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func (r *Response) ServeFile(path string, allowIndex ...bool)\nfunc (r *Response) ServeFileDownload(path string, name ...string)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"servefile",children:(0,i.jsx)(n.code,{children:"ServeFile"})}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u7ed9\u5b9a\u6587\u4ef6\u8def\u5f84 ",(0,i.jsx)(n.code,{children:"path"}),"\uff0c ",(0,i.jsx)(n.code,{children:"ServeFile"})," \u65b9\u6cd5\u5c06\u4f1a\u81ea\u52a8\u8bc6\u522b\u6587\u4ef6\u683c\u5f0f\uff0c\u5982\u679c\u662f\u76ee\u5f55\u6216\u8005\u6587\u672c\u5185\u5bb9\u5c06\u4f1a\u76f4\u63a5\u5c55\u793a\u6587\u4ef6\u5185\u5bb9\u3002\u5982\u679c ",(0,i.jsx)(n.code,{children:"path"})," \u53c2\u6570\u4e3a\u76ee\u5f55\uff0c\u90a3\u4e48\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"allowIndex"})," \u63a7\u5236\u662f\u5426\u53ef\u4ee5\u5c55\u793a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5217\u8868\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(52879).A+"",width:"1312",height:"734"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/", func(r *ghttp.Request) {\n\t\tr.Response.ServeFile("test.txt")\n\t})\n\ts.SetPort(8999)\n\ts.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8999",children:"http://127.0.0.1:8999"})," \u53ef\u4ee5\u53d1\u73b0\u6587\u4ef6\u5185\u5bb9\u88ab\u5c55\u793a\u5230\u4e86\u9875\u9762\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"servefiledownload",children:(0,i.jsx)(n.code,{children:"ServeFileDownload"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ServeFileDownload"})," \u662f\u76f8\u5bf9\u4f7f\u7528\u9891\u7387\u6bd4\u8f83\u9ad8\u7684\u65b9\u6cd5\uff0c\u7528\u4e8e\u76f4\u63a5\u5f15\u5bfc\u5ba2\u6237\u7aef\u4e0b\u8f7d\u6307\u5b9a\u8def\u5f84\u7684\u6587\u4ef6\uff0c\u5e76\u53ef\u4ee5\u91cd\u65b0\u7ed9\u5b9a\u4e0b\u8f7d\u7684\u6587\u4ef6\u540d\u79f0\u3002 ",(0,i.jsx)(n.code,{children:"ServeFileDownload"})," \u65b9\u6cd5\u91c7\u7528\u7684\u662f\u6d41\u5f0f\u4e0b\u8f7d\u63a7\u5236\uff0c\u5bf9\u5185\u5b58\u5360\u7528\u8f83\u5c11\u3002\u4f7f\u7528\u793a\u4f8b\uff0c\u6211\u4eec\u628a\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"ServeFile"})," \u65b9\u6cd5\u6539\u4e3a ",(0,i.jsx)(n.code,{children:"ServeFileDownload"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/", func(r *ghttp.Request) {\n\t\tr.Response.ServeFileDownload("test.txt")\n\t})\n\ts.SetPort(8999)\n\ts.Run()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8999",children:"http://127.0.0.1:8999"})," \u53ef\u4ee5\u53d1\u73b0\u6587\u4ef6\u88ab\u5f15\u5bfc\u4e0b\u8f7d\uff0c\u800c\u4e0d\u662f\u5c55\u793a\u9875\u9762\u5185\u5bb9\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},52879:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2bb757548c004e021cf802495fe8d2be-eda9cca79fc294c2dff6d241649cf838.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);