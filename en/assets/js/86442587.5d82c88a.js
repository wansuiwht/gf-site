"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[33121],{748070:(A,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"quick/\u5feb\u901f\u5f00\u59cb/Hello World","title":"Hello World","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684Hello World Web Server\u3002GoFrame\u662f\u4e00\u6b3e\u6a21\u5757\u5316\u7684Go\u8bed\u8a00\u6846\u67b6\uff0c\u63d0\u4f9b\u65b9\u4fbf\u7684Web\u670d\u52a1\u5668\u6784\u5efa\u65b9\u5f0f\u3002\u672c\u6587\u8be6\u7ec6\u89e3\u6790\u4e86\u4ee3\u7801\u793a\u4f8b\uff0c\u5305\u62ecServer\u5bf9\u8c61\u7684\u521b\u5efa\u3001\u8def\u7531\u7ed1\u5b9a\u3001\u7aef\u53e3\u8bbe\u7f6e\u53ca\u8fd0\u884c\u7ed3\u679c\u7684\u89e3\u8bfb\uff0c\u4e3a\u521d\u5b66\u8005\u63d0\u4f9b\u4e86\u4e00\u6761\u5feb\u901f\u5165\u95e8\u7684\u8def\u5f84\u3002","source":"@site/docs/quick/\u5feb\u901f\u5f00\u59cb/Hello World.md","sourceDirName":"quick/\u5feb\u901f\u5f00\u59cb","slug":"/quick/hello-world","permalink":"/en/quick/hello-world","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/quick/\u5feb\u901f\u5f00\u59cb/Hello World.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":2,"frontMatter":{"slug":"/quick/hello-world","title":"Hello World","hide_title":true,"sidebar_position":2,"keywords":["GoFrame\u6846\u67b6","Web Server","Go\u8bed\u8a00","\u6a21\u5757\u5316\u6846\u67b6","\u8def\u7531\u7ed1\u5b9a","\u81ea\u52a8\u63a5\u53e3\u6587\u6863","g.Server","\u7f51\u7edc\u8bf7\u6c42","Server\u5bf9\u8c61","GoFrame\u6559\u7a0b"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684Hello World Web Server\u3002GoFrame\u662f\u4e00\u6b3e\u6a21\u5757\u5316\u7684Go\u8bed\u8a00\u6846\u67b6\uff0c\u63d0\u4f9b\u65b9\u4fbf\u7684Web\u670d\u52a1\u5668\u6784\u5efa\u65b9\u5f0f\u3002\u672c\u6587\u8be6\u7ec6\u89e3\u6790\u4e86\u4ee3\u7801\u793a\u4f8b\uff0c\u5305\u62ecServer\u5bf9\u8c61\u7684\u521b\u5efa\u3001\u8def\u7531\u7ed1\u5b9a\u3001\u7aef\u53e3\u8bbe\u7f6e\u53ca\u8fd0\u884c\u7ed3\u679c\u7684\u89e3\u8bfb\uff0c\u4e3a\u521d\u5b66\u8005\u63d0\u4f9b\u4e86\u4e00\u6761\u5feb\u901f\u5165\u95e8\u7684\u8def\u5f84\u3002"},"sidebar":"quickSidebar","previous":{"title":"\u4e0b\u8f7d\u4e0e\u4f7f\u7528","permalink":"/en/quick/install"},"next":{"title":"\u83b7\u53d6\u8bf7\u6c42\u53c2\u6570","permalink":"/en/quick/request-input"}}');var t=r(474848),d=r(28453);const l={slug:"/quick/hello-world",title:"Hello World",hide_title:!0,sidebar_position:2,keywords:["GoFrame\u6846\u67b6","Web Server","Go\u8bed\u8a00","\u6a21\u5757\u5316\u6846\u67b6","\u8def\u7531\u7ed1\u5b9a","\u81ea\u52a8\u63a5\u53e3\u6587\u6863","g.Server","\u7f51\u7edc\u8bf7\u6c42","Server\u5bf9\u8c61","GoFrame\u6559\u7a0b"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684Hello World Web Server\u3002GoFrame\u662f\u4e00\u6b3e\u6a21\u5757\u5316\u7684Go\u8bed\u8a00\u6846\u67b6\uff0c\u63d0\u4f9b\u65b9\u4fbf\u7684Web\u670d\u52a1\u5668\u6784\u5efa\u65b9\u5f0f\u3002\u672c\u6587\u8be6\u7ec6\u89e3\u6790\u4e86\u4ee3\u7801\u793a\u4f8b\uff0c\u5305\u62ecServer\u5bf9\u8c61\u7684\u521b\u5efa\u3001\u8def\u7531\u7ed1\u5b9a\u3001\u7aef\u53e3\u8bbe\u7f6e\u53ca\u8fd0\u884c\u7ed3\u679c\u7684\u89e3\u8bfb\uff0c\u4e3a\u521d\u5b66\u8005\u63d0\u4f9b\u4e86\u4e00\u6761\u5feb\u901f\u5165\u95e8\u7684\u8def\u5f84\u3002"},s=void 0,o={},c=[{value:"Hello World",id:"hello-world",level:2},{value:"\u6267\u884c\u7ed3\u679c",id:"\u6267\u884c\u7ed3\u679c",level:2},{value:"\u5b66\u4e60\u603b\u7ed3",id:"\u5b66\u4e60\u603b\u7ed3",level:2}];function i(A){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"GoFrame"})," \u662f\u4e00\u6b3e\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe\u6bd4\u8f83\u5b8c\u5584\u7684\u6a21\u5757\u5316\u6846\u67b6\uff0c\n",(0,t.jsx)(e.code,{children:"Web Server"})," \u6a21\u5757\u662f\u5176\u4e2d\u6bd4\u8f83\u6838\u5fc3\u7684\u6a21\u5757\uff0c\u6211\u4eec\u8fd9\u91cc\u5c06 ",(0,t.jsx)(e.code,{children:"Web"})," \u670d\u52a1\u5f00\u53d1\u4f5c\u4e3a\u6846\u67b6\u5165\u95e8\u7684\u9009\u62e9\uff0c\u4fbf\u4e8e\u5927\u5bb6\u66f4\u5bb9\u6613\u5b66\u4e60\u548c\u7406\u89e3\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"hello-world",children:"Hello World"}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u5148\u6765\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684",(0,t.jsx)(e.code,{children:"Web Server"}),"\u7a0b\u5e8f\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Response.Write("Hello World!")\n    })\n    s.SetPort(8000)\n    s.Run()\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u6765\u770b\u770b\u8fd9\u6bb5\u4ee3\u7801\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u4efb\u4f55\u65f6\u5019\uff0c\u60a8\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"g.Server()"})," \u65b9\u6cd5\u83b7\u5f97\u4e00\u4e2a\u9ed8\u8ba4\u7684 ",(0,t.jsx)(e.code,{children:"Server"})," \u5bf9\u8c61\uff0c\u8be5\u65b9\u6cd5\u91c7\u7528",(0,t.jsx)(e.strong,{children:"\u5355\u4f8b\u6a21\u5f0f"}),"\u8bbe\u8ba1\uff0c\n\u4e5f\u5c31\u662f\u8bf4\uff0c\u591a\u6b21\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u8fd4\u56de\u7684\u662f\u540c\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"Server"})," \u5bf9\u8c61\u3002\u5176\u4e2d\u7684",(0,t.jsx)(e.code,{children:"g"}),"\u7ec4\u4ef6\u662f\u6846\u67b6\u63d0\u4f9b\u7684\u4e00\u4e2a\u8026\u5408\u7ec4\u4ef6\uff0c\u5c01\u88c5\u548c\u521d\u59cb\u5316\u4e00\u4e9b\u5e38\u7528\u7684\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4e3a\u4e1a\u52a1\u9879\u76ee\u63d0\u4f9b\u4fbf\u6377\u5316\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u901a\u8fc7",(0,t.jsx)(e.code,{children:"Server"}),"\u5bf9\u8c61\u7684",(0,t.jsx)(e.code,{children:"BindHandler"}),"\u65b9\u6cd5\u7ed1\u5b9a\u8def\u7531\u4ee5\u53ca\u56de\u8c03\u51fd\u6570\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u7ed1\u5b9a\u4e86",(0,t.jsx)(e.code,{children:"/"}),"\u8def\u7531\uff0c\u5e76\u6307\u5b9a\u56de\u8c03\u51fd\u6570\u8fd4\u56de",(0,t.jsx)(e.code,{children:"Hello World"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u8f93\u5165\u53c2\u6570\u4e3a\u5f53\u524d\u8bf7\u6c42\u5bf9\u8c61",(0,t.jsx)(e.code,{children:"r *ghttp.Request"}),"\uff0c\u8be5\u5bf9\u8c61\u5305\u542b\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7",(0,t.jsx)(e.code,{children:"r.Response"}),"\u8fd4\u56de\u5bf9\u8c61\u76f4\u63a5",(0,t.jsx)(e.code,{children:"Write"}),"\u8fd4\u56de\u7ed3\u679c\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u901a\u8fc7",(0,t.jsx)(e.code,{children:"SetPort"}),"\u65b9\u6cd5\u8bbe\u7f6e\u5f53\u524d",(0,t.jsx)(e.code,{children:"Server"}),"\u76d1\u542c\u7aef\u53e3\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u76d1\u542c",(0,t.jsx)(e.code,{children:"8000"}),"\u7aef\u53e3\uff0c\u5982\u679c\u5728\u6ca1\u6709\u8bbe\u7f6e\u7aef\u53e3\u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u9ed8\u8ba4\u4f1a\u76d1\u542c\u4e00\u4e2a\u968f\u673a\u7684\u7aef\u53e3\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"Run()"})," \u65b9\u6cd5\u963b\u585e\u6267\u884c ",(0,t.jsx)(e.code,{children:"Server"})," \u7684\u76d1\u542c\u8fd0\u884c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6267\u884c\u7ed3\u679c",children:"\u6267\u884c\u7ed3\u679c"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd0\u884c\u8be5\u7a0b\u5e8f\uff0c\u60a8\u5c06\u5728\u7ec8\u7aef\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"$ go run main.go\n2024-10-27 21:30:39.412 [INFO] pid[58889]: http server started listening on [:8000]\n2024-10-27 21:30:39.412 [INFO] {08a0b0086e5202184111100658330800} openapi specification is disabled\n\n  ADDRESS | METHOD | ROUTE |     HANDLER     | MIDDLEWARE  \n----------|--------|-------|-----------------|-------------\n  :8000   | ALL    | /     | main.main.func1 |             \n----------|--------|-------|-----------------|-------------\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u9ed8\u8ba4\u7684\u65e5\u5fd7\u6253\u5370\u4e2d\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5f53\u524d\u8fdb\u7a0b\u53f7",(0,t.jsx)(e.code,{children:"58889"}),"\uff0c\u4ee5\u53ca\u76d1\u542c\u7684\u5730\u5740",(0,t.jsx)(e.code,{children:":8000"}),"\uff08\u8868\u793a\u76d1\u542c\u672c\u673a\u6240\u6709IP\u5730\u5740\u7684",(0,t.jsx)(e.code,{children:"8000"}),"\u7aef\u53e3\uff09\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u7531\u4e8e\u6846\u67b6\u5e26\u6709\u81ea\u52a8\u63a5\u53e3\u6587\u6863\u751f\u6210\u529f\u80fd\uff0c\u672c\u793a\u4f8b\u4e2d\u672a\u542f\u7528\uff0c\u56e0\u6b64\u63d0\u793a",(0,t.jsx)(e.code,{children:"openapi specification is disabled"}),"\u3002\n\u5173\u4e8e\u63a5\u53e3\u6587\u6863\u7684\u81ea\u52a8\u751f\u6210\uff0c\u5728\u5f00\u53d1\u624b\u518c\u4e2d\u5bf9\u5e94\u7ae0\u8282\u4f1a\u8be6\u7ec6\u8bb2\u89e3\uff0c\u672c\u793a\u4f8b\u4e0d\u4f5c\u4ecb\u7ecd\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u6700\u540e\u4f1a\u6253\u5370\u5f53\u524d",(0,t.jsx)(e.code,{children:"Server"}),"\u7684\u8def\u7531\u5217\u8868\u3002\u7531\u4e8e\u6211\u4eec\u53ea\u76d1\u542c\u4e86",(0,t.jsx)(e.code,{children:"/"}),"\u8def\u7531\uff0c\u90a3\u4e48\u8fd9\u91cc\u53ea\u6253\u5370\u4e86\u4e00\u4e2a\u8def\u7531\u4fe1\u606f\u3002\u5728\u8def\u7531\u4fe1\u606f\u8868\u4e2d\uff1a","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"ADDRESS"}),"\uff1a\u8868\u793a\u8be5\u8def\u7531\u7684\u76d1\u542c\u5730\u5740\uff0c\u540c\u4e00\u4e2a\u8fdb\u7a0b\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u591a\u4e2a",(0,t.jsx)(e.code,{children:"Server"}),"\uff0c\u4e0d\u540c\u7684",(0,t.jsx)(e.code,{children:"Server"}),"\u53ef\u4ee5\u76d1\u542c\u4e0d\u540c\u7684\u5730\u5740\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"METHOD"}),"\uff1a\u8868\u793a\u8def\u7531\u76d1\u542c\u7684",(0,t.jsx)(e.code,{children:"HTTP Method"}),"\u4fe1\u606f\uff0c\u6bd4\u5982",(0,t.jsx)(e.code,{children:"GET/POST/PUT/DELETE"}),"\u7b49\u3002\u8fd9\u91cc\u7684",(0,t.jsx)(e.code,{children:"ALL"}),"\u6807\u8bc6\u76d1\u542c\u6240\u6709\u7684",(0,t.jsx)(e.code,{children:"HTTP Method"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"ROUTE"}),"\uff1a\u8868\u793a\u76d1\u542c\u7684\u5177\u4f53\u8def\u7531\u5730\u5740\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"HANDLER"}),"\uff1a\u8868\u793a\u8def\u7531\u56de\u8c03\u51fd\u6570\u7684\u540d\u79f0\u3002\u7531\u4e8e\u672c\u793a\u4f8b\u4f7f\u7528\u7684\u662f\u95ed\u5305\u51fd\u6570\uff0c\u56e0\u6b64\u770b\u5230\u7684\u662f\u4e00\u4e2a\u4e34\u65f6\u51fd\u6570\u540d\u79f0",(0,t.jsx)(e.code,{children:"main.main.func1"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"MIDDLEWARE"}),"\uff1a\u8868\u793a\u7ed1\u5b9a\u5230\u5f53\u524d\u8def\u7531\u7684\u4e2d\u95f4\u4ef6\u51fd\u6570\u540d\u79f0\uff0c\u4e2d\u95f4\u4ef6\u662f",(0,t.jsx)(e.code,{children:"Server"}),"\u4e2d\u4e00\u79cd\u7ecf\u5178\u7684\u62e6\u622a\u5668\uff0c\u540e\u7eed\u7ae0\u8282\u4e2d\u4f1a\u6709\u8be6\u7ec6\u8bb2\u89e3\uff0c\u8fd9\u91cc\u6682\u4e0d\u505a\u4ecb\u7ecd\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u5c1d\u8bd5\u8bbf\u95ee ",(0,t.jsx)(e.a,{href:"http://127.0.0.1:8000/",children:"http://127.0.0.1:8000/"})," \u60a8\u5c06\u5728\u9875\u9762\u4e2d\u770b\u5230\u8f93\u51fa"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img_1.png",src:r(638009).A+"",width:"742",height:"254"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5b66\u4e60\u603b\u7ed3",children:"\u5b66\u4e60\u603b\u7ed3"}),"\n",(0,t.jsxs)(e.p,{children:["\u606d\u559c\u60a8\uff01\u60a8\u5b66\u4f1a\u4e86\u4f7f\u7528",(0,t.jsx)(e.code,{children:"GoFrame"}),"\u6846\u67b6\u5f00\u53d1\u7b2c\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"Web Server"}),"\u7a0b\u5e8f\uff01"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4e0b\u4e00\u6b65\uff0c\u6211\u4eec\u5c06\u4f1a\u5c1d\u8bd5\u7740\u5728",(0,t.jsx)(e.code,{children:"Web Server"}),"\u4e2d\u83b7\u53d6\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u53c2\u6570\u4fe1\u606f\u3002"]})]})}function v(A={}){const{wrapper:e}={...(0,d.R)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(i,{...A})}):i(A)}},638009:(A,e,r)=>{r.d(e,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuYAAAD+CAYAAAB2g8CMAAAlR0lEQVR4Xu3d+5MV1b338f0P5Nf8lKpU5Yf84A+pOqnKeVLlCcmTc/J4YmL5UCbqMeZoNBo8mogaVIhGEYPIRRFBBOQiqHhFBcQbICiKGEVBBQXkfhEEuQwgzMyefuazfVa79rf3pXtPz541e96vqk8F9uru6d3jkO9e8+3VhS37uqINOzsIIYQQQgghfZjCpj3JFwkhhBBCCCHNTeHT3ckXq2XXF53RkRNd0Venu6L2zijq6ooAAAAA5KCweU9nogD3o8L90LFiVKQIBwAAAHpNzcL888PFqLNodwEAAACQt8Knu9sTBfknuzui418xRQ4AAAA0S2GT6THfsrczOt1BUQ4AAAA0U9mMufrJ2ynKAQAAgKaLl0vcuKsjOnmaohwAAADoC92F+dc3fx44wl2eAAAAQF8pbN7bWWphYTlEAAAAoO8UtuwrRofbmC0HAAAA+lJhy94O+xoAAACAJivsOdhpXwMAAADQZIUjx2ljAVBbZ2dXdKq9MzrxVUfUdrIjOnq8PTrS1h4d7s6Xx04TQgghJIcUvjpFYQ4g6XRHMTreXYirALf/cBBCCCEk/xROt1OYA/iaZsZVjDMTTgghhDQ/Bft/zAAGnvbugvzYCYpxQgghpC9DYQ4MYJohV8+4/YeBEEIIIc1PoauLJwsBA9HJU52JfxAIIYQQ0nehMAcGGM2S07ZCCCGEhBdaWYABREse2n8ECCGEEBJGKMyBAYLWFUIIISTs0MoCDAB6MJD94SeEEEJIWGHGHGhxeRXlR463l9Y4P3W6M+roLEbFYlfkf67Xn/WaxrRN6eFEx+llJ4QQQtKGwhxoYT1tXzncdrp0jI7Oxn+zpn11DB3LHp8QQggh34TCHGhRPbnRUzPdmvXOm47JLDohhBBSOYVisWj/vxNAP6clEe0Pe9podru39XQmnxBCCGnFMGMOtKBG1ik/2r1PT1pWstLX0te050EIIYQM1FCYAy2mkdlo3ajZV/S17fkQQgghAzEU5kALaaSFpRmtK/U08mGCEEIIabXQYw60kLaT2WafQyjKHYpzQgghAz3MmAMtoj3jbHlftq9UQ1sLIYSQgRwKc6BFZLnhUzddhoobQgkhhAzUFLr8R/cB6Jey9pY3c/WVrHRu9nwJIYSQgRBmzIEWkKUFpKd95atXr44uuOCCUr773e+WRa/de++9pW16gn5zQgghAzH9qjD/+OOPS0FlXJ9y69atK2XevHnRsGHDorPOOqsU/VnR65W47ZT+4nBbuvYPPXWzUa4gt8V4tbgivVE8IZQQQshAS79pZVHB+dRTT5VC8ZnE9SmnotsvsGvFFuj9rTA/3VFM/GBXy6nTjc2Wq8C2hbdfgNcq2BstznWu9vzzzsEjX0V79h8pZf+h44nxStm260C0eMmr0cRJD0TPPr8k2rx1d2IbP59/cSz+GmnzxeGTieNkyc69B6MXXloWTZ02K5r8wPRoUff5bt3xeWK7nmbj5h3RgudfiO67f2o0Y9bc6JVlr5fer92up2nk+5QmO/ccjJaveDNa+MLL0UcbP4sOHT2V2KZedK1fenVFNHP23Gj6jNnRku7rvnVn9mv97vvd/4Y/83z392taNP/JBdFba9YmtqkX/Xez4o23o3mPPRFNmTq99L1Zv2FLYjtCSLjpF4W5X3RSeFbGNfqaZsj92fG08Yvz/laYp21jOdx22u6aii269XfNnldqV9FrKsQr7dMInbN9H3nlky07o9+e/815XnvdXxPb+FnaXcD975//e9n7chk06KfRqtXvJfZR/uMX/yexfb2MHjM+cZw0UWE5/aE50RlnnJE4pjJuwn09LvqVXfu+jG659fbE8ZV//df/1V1gLkzs02iyfp/qRUX+pO4PEuf95jeJfwfOPvvs6Jo/X1v6mnY/G13r2Q8/WtrHHkfR10hzrT/cuCX6n6uvSeyvXHLJpdGad9cn9qmUpa+t6r5O5yeOodx084josx37EvsQQsJL8IU5BWd6A/1aVZoldy0rKtgd195SaXv7Wn9wJGUbSyO95bbAzjL7bWfZGynOe6vX/JnnXkgUr9cOvSGxncvzi18u27ZaNEtt922kMP/HXeMSx0mTMWMnJI5lo8K2kZlhF81Y/9dFFyeOazP3kScS+2ZN1u9TvWh2u1oR7OfXvz4nWrnqncT+fu6ZeH9iP5vhI26pea31Gwd9LbufHxX+/1z7YWJfP68sXZnYz+aCCy8svX+7LyEkrATdYz7QC81GDNRrpmLb/h+RX4xXYwtxm9BlWY0l60osfmHtZsmzsn3pWQp7yXuFlr0HjkQ3DLu5rNBzqVbwLVvxVtl2d4+7pzSLufvzw9Frr6+OLvvjlWXjm7ftKdt//hMLSu0k9eIXu/feNyVxHvViPzyo1Ubnsn33gWjWw4+WFbjTZsxO7J82t428Mz7Ov/zLD6Onn10c7dp7qFRk+mPK2/9cl9g/TRr5PqXJ5X+8Iv7ZVsGr9pM3314brftoU6nt4w+XXV7287/+482JYyiLX1xatt0DD86ItmzfW7rWaiPxZ9FnzXkksb+igv2/LvpdvN3vfndx97m81/3ej5baWv405Kp4TMW7XrfHUDZt3V12LpodV/uK2n7UWuT/ZuDaodcn9ieEhJVgC/OBWmDmYSBeO3tzZ1bV2l9Cd6o93Yxy1ps+7Wx3raLcta9Uo/G0x6okr5tAVWQNGvTT+DxUqN43+cH479UKvv++5A/xNjNnJ4sstStccunl8TYqxO029aJjDPLOTUWe3aZWVOT953+eHe9fabb6pVdXxuMqqFX82m3qZdNnu+NjKCog7Tb+rP0fLvtjYrxeGv0+1Ytmnf1Ct1LRfeDLE9Ffh90Yb3fnP8YktrEF9fwnnklss3T5G2Vfq1JRvWjJK/E2Kp7tNmq58T9IPDRrbuIYyj9G3x1vo6Lcjm/p/nDmz8qvebexD0uEkOYkyMLcFpYrVqywm6AOew1buTi3s96NqlSch+5Eyv7yrE/59AvztEV3rYLbzr5nkbaHvl7mP/lsfA6DB58Xbdi0Pdrw6bb4tUoFn4owN64CsVpbwouvvBZvd81fhibG6+Wxx5+J97/9jtGJ8XpR/7vbX+/Njrv8+S/XxdvNezRZvNfL2PET4/1VgNtxRR8y1Gfutst682Ej36c0eWrBwvjnetSddyXGXVS4uu3+eMWViXH9lsSNX3rpZYlxFxXJbrtKxbtfdKs/3I4r+vDgtjn33HMT4yrm/X+vqrWqPPr40/E2Nw//W2KcEBJOgivMbUFJUd44ey1bsTi3LSx2hZVq/H1qJXRtJ9MVrVlWY/GL7XpFtL9tPX5LS60i3sprdRZX8N097t74prx6BZ9aNNQjrps+bxp+S2LcRTcLuuPoRkU7Xis6lzPP/Ld4/6yz5Yo/S60i3467qKh02zXyAUKFsttf186Ou0y4d1K83Zx58xPjtdLI98lF7TTVVjN55rnF8c/1/VMeTIy7+K0hV/5pSGLc7y1/8unnEuMu6lF329140/CyMb+gHjx4cNUPfIo+HLht7Sz/su4PZG7sb7felti30tfT7LkdJ4SEk6AKc1tIUpT3nL2mrVac+7PlaYtycfvUS+iOpmzz6Ogs2l2rSjtbnlWWgt+nc7fvp5G8teb9UmHqv5a24KsXv+AdcUv1AqlSVLi6fUeOyj5brpz3m/PjY6xdtzEx7qL2Fbed2lnseK3s++JovK9+e2DH/fi/QdAsvR2vlUa/T+oRdz+3w268OTH+wYefxuPq51ariN1GmTP3sXi7sePuSYz7fejvr/8kMe5SqxhevvKteOyGv96Y2NfP+Hvui7fVzLc/NnHSlHhs7iOPJ/b1oxVe3LZZf4tBCGleglmVxRaQFOX5sde2lYrzgV6Yp12RpVhM/3Pe6Mx2PY0W5jp3+37ySpqCL038G0CfqDGLaqMVTvy2j0aXtFOR7Y6hm/7seLVtVWzb8WrRbK3b79fnJNsq/KztLljdtuf+38GJ8axJ830actXVZT+7la6DCnY3rtVZ/PXGNTv/cPeHJP8Y6s+2x/D7tSt9jWrb+tdarS3u9bHj703s50c3k7pt9ZsIf8xvl9Fa6nZfP/57102hdpwQEkaCKMxt4eiKxzzS39n302gqXd9W4PeFp1mFpdWkfeJnlh9zVwApaWhWXUlTxGc9tujc7fvJK2kKvnp5asGi+Bhn/+rX0cEj9deudnlo1rx43ztH350YTxt3jHoz2YqKare9bua049WiFUPcfkOuuiYx7sefmR806KeJ8axJ8316cPqs+N8CzQ7bcUU3d06eMi3eTlEriZYS9F/TzZjVlkt022jlFTtm8/vf/3e8vb9az7QZ35yrPgzY/fz4SyHeNnJU2Zi/9OP766v/pkQZN2FivO2C515IjBNCwkifF+aVisY809/Z95NnWqE49//PdCCyP9DVkoUrgNLMaqe9+dPxZ+OzsO8nr6Qp+GrFL1aV19/8Z2KbatETMv3Z60afzOkXwfpgYMdt/ufqv8Tbv/fBhsR4tfjtKWlabtzyjGk+LNRLmu+TZryfW/Ri6aE/23btT4y77P7/D0fy/+3wo4K70mozit+eonYYO27jr/DiF85+e8qLryxP7OfHb8GxbS9+e8qe/YcT+/rRzb5u23ofBgghfZdCsZi+97Q3UJjXZt9PnqEw7//sD3S1ZOEKIArz2vnok61lhbXWIrfb1IpmeN2+d44emxhPG7/3W0sm2nEbzXa77Wv1o9uoVcLtd/vIfyTGbZpdmKeJWjjskzr1d6144r+m/P22OxI3Zepau3EtmWiPb6NC2m3v96OrJcW9vqTCQ6n8qKB329YqzHftO5TY14/fplOvH50Q0ncJ4ubPSsW5bcVoNP2dfT+NRj379vq2grxbWfye9UbWQ2+2vm5lyVqYZzm2E2Iri9oS/JVUst7wqVluv6jftrP6DG+auOOkKYI1q+6237w1QyvLmrXxfldceVVi3I8evuS2HTSoOa0s9aIC1y/K1Rby0cbP4uJ7x54vSiu3+NtMun9q4jhuLE0ri2bV3fZ+v/r0GbPj12fPfTSxnx99IHLb3j7yzrKxq6/5czxW77cfupHVbasbZe04ISSMBFGYiwpFv3Dk5s/82GvbKkW5NHrzZzV5H6+39fXNn1kK81a5+VNrRfsP89GqI9VW+KiW+6dMi/cfPWZ8Yjxr/CJ/174vE+N+/CeAqp3GjleLVvJw+9VrmdFMvNu2WTd/1stfrh0a/2zPmDknMe6i9+kX5/4Noop/Q6faYuz+fvzj7POutX/zp54ka/fzo9ltt+095uZPrUnuxuq1xPiz93oAkh0nhISRPu8x99kCkuK85+w1baWiXPx1zPOY4XbHUvpDYd4byyX2VmHe6DKMeS2XWClZCz7NdPtreWvm2K21nTaaTfaL4227DiS2yZoLLrwoPl61/mhFq4i47bQajB2vFRXxbt96M/MvvLQs3vba6/6aGM+arN8nG82KVyuSK0Wz6W7bxS8uLRvz1xWv1Qqka+22sw8HWvHG2/HY9TfUvj5atcVt+/iT5U+VnTR5ajymZR7tvn78G1E//nRrYpwQEkaCKszFFpIU542z17LVinKxDxjqSTtLXk8QbaaQHjBUrzDPUvD78nrAUKVkKfi0oscll14eb68/a7lDu1293DNxcnyMu+7u+Wy5Mm7CffEx5z5S/Ymery5/45v320DBrIcnuf3tw278aBbYbTfvsScT41mT5ftUKf5Dg7QCix23mTnnm38LJj8wrWxM7S1urNITPV2Wew//GT6i/OFU+mDgxlS01/qNi79uuu5r8Mf8Al9LJ9p9XTSz7389O04ICSfBtLL4bEFJcZ6dvYatWJQ7eRTUtsDvD7PlciLl4+r1WPss/CK61ux22sLcny2vV+xbOnf7fvJK2oJPhZP/OPuLfvf7TG0gLmqD8W+K3L6757PlyspVa+Jzq9Vm4t/4Of+J8tnXNPE/VFRbmUUfVvzWGl1ju03WpP0+VYs+VPk/3/7ShZXiL0M438xSv/HWP+OxWiuz+K0jTz3zfGJcTxV149XaUDQj77bRso523L8ZVam2Go1/46dWpLHjhJBwEmRhLrawpDhPz167Vi7KHf8m0EZaWvz9lf7iVHu62eQjx9vtrjX5BbdSrejW624d82rssWptW4nO3b6fvJK24PtbdzHjttOssVpa7DZpMnb8xPg4Y8ZOSIxXiwq0G4bdHN1+x+iqRaW/Pvn0mQ8nxhcteTUeV+H8+cG2xDb1vo6WdHTHUPSUTruN9nXj1dY7r/d1bNJ8n7bvOlDqwdbs9Jp31yfG/RaUPw25quqHollzHin7t+DDjcmnZPptIZVu3tRKK25cPen7DyWvtX9Tp4puu6pK6Tc03qor1ZY49Ftdhl6XvDafbNlZ1sZTq/2GENL3Ca6VxWcLTIrz+uw1GwhFudgZbyXNrHel/XrSDtNsnZ3pb4zs6Mz2s25nuasV57Von7Sz75XonO37yDNpCj6/mFZUpOuGzVqpdAOmCsFGZ8v9lVRU0NpxxV/OUFGbzIcbP4s2bt4RPTBtZtnYnCpFXpqvo/fnttH7UKuKHlSkp30Ou2lE2dep1u+e5uv4SfN9GtP9fv1C1y51qDXn/Z9ztXTcP+XB0my12k5U+PqrnCij7rwr8XUULbvob6cPBGozURE8Y9bDZWOPzn8qsb+LX3irxWZZ93noZlOdq9/CovdTqbhX9GHJL7yvHXp96brrKbKLlrxSthTkjTcNT+xPCAkrwc6YO7bQpDivzl6rgVKUO7alRdFril9s6896zc6Su+37m7Qrs5w8lb7P3PGLaiVLYe0X9krWFhbROdv3kWfSFHz+e0ibSu0bfkFbbyUOP3qSqH+zqG70tNu43Hf/1MS52Nw84tbEflm+jm529Xvtq+WpZxYm9s3ydfyk+T6pIPV/lvUwILuNClYVufbnvlK0pKHd38/UaQ8l9rEZeUf58oY2W7bvrXs+KrrXfbQpsa8fv9e8WjTLrxtS7b6EkLASfGEutuCkOE+y12igFeWOiu5KBXe9aJ/+NFPuS9uDfbgt24OGHFuc6+8quivNoOs1O0vu9mmEztm+jzyjGU53jtfdMCwxrvhFZNp8umVX2TH8hwDpeFoz236dWpn+0Jx4Xz2B04770Qy23+Ptf13NnKswtvtk/Tp6P5qRt19DGTTop6VVWew+jXwdlzTfJ/V+u6UM7Q2bfnTttR64ZqjtvwPa/5o/XxstX/lWYr9K0Sop/vKJLiqmNXNe66ZOl08/21X2hFA/Q666uvTkT7tPpaxa/W7Zuul+7hg1OvN/c4SQvkm/KMzFLzwHatFZC9enXKXZ82rpj7PkvtMd6ZcTzLI6i8/OfvtR0W0LcT9ZZtl9vbkaS3+MesLTrgKjwlk3hKpIV5aueDPatbf2kyFdsnwdtVG89OrK0kowupl01er3Ui8fmeXrpI2+tt67fb1atO3qd94vzThr9tqOp4mOoQ8FuklUee311Yl+8TRRK4yWZpz32BPRwsUvlz0pNG3UvqP+ej0o6ZHu77vam7Qijd2OEBJuCsVi+vWN+5oKTorO6rg+5VzLim1b0Z9de0t/nSW30j4BNOtNoD4V2LUKcJtG+9Kd3rzpkxBCCAkx/WbGHEB1adtZlEZ6zX1uJZZKRbqbPe9JQS693VtOCCGEhBgKc6AFZFmdRcm6Qksz9fZKLIQQQkiooTAHWsSxE+lbP46eaLylpbfp3Oz5EkIIIQMh/arHHEB17RlnmrM+DbQZsrTkEEIIIa0WZsyBFtJ2Mlth29N+8zzRV04IIWSgh8IcaCFZe82VEIpzinJCCCGkuzDv6gr3JjAA2TVS5PZlWwvtK4QQQsjXYcYcaEFZbgR10U2XzVytRV+LGz0JIYSQb0JhDrSgRlpaXJrR2tLIrD4hhBDS6qGVBWhRp9obL3711M1Tp/Mv0HVMnuhJCCGEVA6FOdDCejozfbjt6xn0nrS4aF8dQ8eyxyeEEELIN6EwB1rciZxurtRMt27U1Kx3R2cxKha7Iv+fD/1Zr2lM22hbZscJIYSQ9KHHHBgA8irOCSGEENJ7oTAHBoietrUQQgghpHdDYQ4MID25IZQQQgghvRsKc2CA0VKKjaxzTgghhJDeDYU5MEDR2kIIIYSEFVZlAQYwzZ63neTGUEIIISSEUJgDiNppbyGEEEL6PBTmAGKaQdf644fbKNIJIYSQZqdQLBbt/zcDQHS6o/j1Q4Io0gkhhJCmhJs/AdSlmXQttagHFakn/ejx9lLBzsw6IYQQkl8ozAEAAIAA0GMOAAAABIDCHAAAAAgArSwAAABAACjMAQAAgADQygIAAAAEgBlzAAAAIAAU5gAAAEAAKMwBAACAABSKxaJ9DQAAAECTMWMOAAAABIDCHAAAAAhAYffe3dGOXTsIIYQQQgghfZjCzt07Ey8SQgghhBBCmhtaWQAAAIAAUJgDAAAAASh0dXXZ1wAAAAA0GTPmAAAAQAAozAEAAIAA0MoCAAAABIDCHAAAAAgAhTkAAAAQAHrMAQAAgABQmAMAAAABoDAHAAAAAkBhDgAAAASAwhwAAAAIAKuyAAAAAAGgMAcAAAACQGEOAAAABKBQLBbtawAAAACajJs/AQAAgABQmAMAAAABoMccAAAACACFOQAAABAAWlkAAACAAFCYAwAAAAGglQUAAAAIADPmAAAAQAAozAEAAIAAUJgDAAAAASgUi0X7GgAAAIAmY8YcAAAACEDLFOb79++Pdu7cmcixY8fsphXZ/Vza29vtpsiRvd55Xvevvvoqamtri06ePGmHAAAAgpNLYX7gwIHozTffLGXfvn12OLZ+/fp4u7xbaL7//e9HhUIhkZEjR9pNEz7//PPEfi6vvfaa3bzPdXR0xNfxk08+scMVaVlMt8+GDRvscJ/o7ev+i1/8onSs733ve3aoojVr1pSuz3vvvWeHAAAAel0uPeazZ8+OC6pJkybZ4diPfvSjeLujR4/a4R4544wzEsWdkqYw1wcLu1+eBWLevvzyy/j8fvnLX9rhig4ePBjv86tf/coO94nevu5ZC3P3tb/97W/bIQAAgF6Xy4x5CIW5T7P27uukKcytp59+OtcCsTd861vfKp2fflOQxrp16+L3dMMNN9jhIOR93SnMAQBAf0JhXkHeBWJv+MlPfhKfY5qnty5evDjeftq0aXY4CHlfdwpzAADQnxTSFHX1UJg335VXXhmfo1pC6pk6dWq8/bJly+xwEPK+7hTmAACgPwluxvzEiRPRzJkzo2uuuSY688wzox//+MelP8+fPz/VzLD0VWG+fPnyaMSIEaW+7x/+8IfRxRdfHI0bN660ykjexo8fH5/j2rVr49dPnTpVuoaKbhJ1hg8fHm+/ffv2+HWnJ+e+devWaNSoUaXoZlR9XV3D3/72t9EPfvCD0vfw8ssvj95++227a5lGrrve74MPPhhdeumlpa910UUXlX4joPdPYQ4AAPqToApzFZjVVldRzjnnnOjQoUN2t4RmF+anT5+Orr/++sT5uqgfXK0keVq4cGF8/EWLFsWv68OMe/2hhx6KX1fB6l7v7OyMX8/j3F9++eV4+2effTa67rrrEsdxqfR9d7Jed/2mwH+/fs4666x4jMIcAAD0B8G0snzwwQdlhdXPf/7z6I477ohuvfXW0kyoe12zoPU0uzC/6aab4u1VyKrNRF9Xq5/47ynPZfg+/vjj+LgPPPBA6TUV2f7X03k4rkjVtfTlce5+YT548OD4z24GW0Wyu1nVft99Wa+732evD3T6rYA+ZKiw9s+dwhwAAPQHuRfmaeMXaDqHn/3sZ/GYWll8Kjj9Gd8FCxaUjVvNLMz9tbhVfGqtdt/EiRPj8XPPPbdsrCfUquGOq+Ja9BsH95qiJSQdV6yef/758Wt5nbtfmCvf+c53SuuB+7TE4+2331566E81Wa77G2+8EW+rVhn/v6e9e/eW/eaFwhwAAPQHQRTmS5YsiV9XP3kl6l1222gGtpZmFuZjxoyJt9WfK/HXWN+yZYsdbpgKYB3zwgsvLP19xowZpb+72WnlyJEjpT5s9/fbbrst3j+vc7eF+bvvvms3SSXLddd7dtuuWLHCDkePP/54PJ61MNd1BQAAaLbce8zVB652lkrxWwz8wlwtK+513dTonlCprFq1qhTNkKrA0jYqPGtpZmGumw7dtpVuqpQJEybE26iIzYtu1NQxNWMsusFSf9cMuivOdf66OdN9/Xnz5sX753XufmHek4cXZbnu7gOD/puq9JAs/zcKaQtz90HHtvsAAAA0Q+6FeSM95loBxL2eNl988YV35HLNLMz9Pmf/pkqfboh020yfPt0ON8zdtOlaL1z7xnPPPVdaEUV/1soqftvH6tWr4/3zOne/MNeHrEZlue5uO/ehpBJXaKctzLUajbbX/Q0AAADNFkRh7r+uIkoFZr2EUpi74q9WX7Jm/N3x/FaSntIyge64/nves2dP3B9+3nnnRY899lg85q95nte5+4X53Llz7XBqaa+72nPcdvqtQTUq2rVN2sLcLa/o9+EDAAA0SxCFuXrG3eu6SbCnmlmYuxVjarXXvPrqq/Hxxo4da4cbtnTp0vi4ms3W/7r+aK0Zrr+r6Ha95PYc8zp3u1xio9Jed62T7rartUqPa3dJW5hrpRt9ENH9DAAAAM0WRGE+dOjQ+PU8iiK/ML/lllvscF1+gVitr9rRaiVuW/U1V6K+brfNk08+aYcbtm3btvi4ar/Q/6pvXLT6iRtzH3y0ZKIvr3PvjcK83nV3s/3+yjOW67NPW5gDAAD0pdxXZWmkMJ8yZUr8uv9QnEb563nXmlGtRqt8uP1Hjx5th8v4D9OpVkxedtll8TZ+j3dP+TPHLn4fuN9DrujmUF9e555XYZ7luvvvbf/+/XY42rBhQzxOYQ4AAPqDIArz3bt3x6+r9eLYsWPeXuXUW75jxw77coKbUVVqrZ1diT8TXa+w11Mx3bZakcZeT3/2XjO4x48fLxvvKX85Q2XdunXx2IgRI8rG7r77bm/P/M49r8I8y3X3V4vRDa6W/1uYNIW5flOjG1dddC4AAADNFERhLupf9gspFY2u31wF4vLly+Pl/XRjYz033nhj2fE0E//666+XUq+w1/J7boUORW0iKjjd/rr50NH187e94oorop07d5Zms995552yB92omMybblR0x1f0dR2/8Fbsg5nyOve8CvMs111/9tdr10Op9IHu0KFD0V133VX2vtMU5ro2/j7q3wcAAGimQqU1oLPKozDXQ3DcEn/1kqYw18y6fTS7y9///ne7ecLKlSsT+7nohkifbhj0i8RK0XuvNuPcE3ov7mvYBy+pxcM/B/tkT8nj3PMqzCXLdZ81a1Zim0qhMAcAAP1BLjd/aok8V9BMnjzZDsfc8nVKW1ubHS7RDYZ+G4ofva61uzdt2mR3q+jgwYPRkCFDymZ+lbQrtagtRDdI2gJfs/eWHuKjmyvtOSvDhg0r9b33Bv/mzFGjRtnh+KFMSrXiuqfn7q/csnDhQjucWZbrrt8K2A8W+rueJutuek1TmD///PNlx6i1KgwAAEBvyKUw7w1qY9HNhprJ1BNA9WTKPNpuept+E6DzVqGnGxD91pLQ9ddz138Xmzdvjs+7P/x3AgAAYOXSYw4AAACgZyjMAQAAgAAE28oCAAAADCQU5gAAAEAAaGUBAAAAAsCMOQAAABAACnMAAAAgABTmAAAAQAAKxWLRvgYAAACgyZgxBwAAAAJAYQ4AAAAEgMIcAAAACAA95gAAAEAAmDEHAAAAAkBhDgAAAASg0NXVZV8DAAAA0GTMmAMAAAABoDAHAAAAAkArCwAAABAACnMAAAAgABTmAAAAQADoMQcAAAACQGEOAAAABIDCHAAAAAgAhTkAAAAQAApzAAAAIACsygIAAAAEgMIcAAAACACFOQAAABCAQrFYtK8BAAAAaDJu/gQAAAACQGEOAAAABIAecwAAACAAFOYAAABAAGhlAQAAAAJAYQ4AAAAEgFYWAAAAIADMmAMAAAABoDAHAAAAAkBhDgAAAASgUCwW7WsAAAAAmowZcwAAACAAFOYAAABAACjMAQAAgADQYw4AAAAEgBlzAAAAIAAU5gAAAEAACl1dXfY1AAAAAE3GjDkAAAAQAApzAAAAIAC0sgAAAAABoDAHAAAAAkBhDgAAAASAHnMAAAAgABTmAAAAQAAozAEAAIAAUJgDAAAAAaAwBwAAAALAqiwAAABAACjMAQAAgABQmAMAAAABKBSLRfsaAAAAgCbj5k8AAAAgABTmAAAAQADoMQcAAAACQGEOAAAABIBWFgAAACAAFOYAAABAAGhlAQAAAALAjDkAAAAQAApzAAAAIAAU5gAAAEAACsVi0b4GAAAAoMmYMQcAAAACQGEOAAAABIDCHAAAAAgAPeYAAABAAJgxBwAAAAJAYQ4AAAAEoNDV1WVfAwAAANBkzJgDAAAAAaAwBwAAAAJAKwsAAAAQAApzAAAAIAAU5gAAAEAA6DEHAAAAAkBhDgAAAASAwhwAAAAIAIU5AAAAEAAKcwAAACAArMoCAAAABIDCHAAAAAgAhTkAAAAQgEKxWLSvAQAAAGgybv4EAAAAAkBhDgAAAASAHnMAAAAgABTmAAAAQABoZQEAAAACQGEOAAAABIBWFgAAACAAzJgDAAAAAaAwBwAAAAJAYQ4AAAAEoFAsFu1rAAAAAJqMGXMAAAAgABTmAAAAQAD+H12y8u6GzeQZAAAAAElFTkSuQmCC"},28453:(A,e,r)=>{r.d(e,{R:()=>l,x:()=>s});var n=r(296540);const t={},d=n.createContext(t);function l(A){const e=n.useContext(d);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:l(A.components),n.createElement(d.Provider,{value:e},A.children)}}}]);