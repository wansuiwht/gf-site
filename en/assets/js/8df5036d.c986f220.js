"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[54377],{700138:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b","title":"\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8bbe\u7f6e\u548c\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684Hello\u670d\u52a1\u793a\u4f8b\uff0c\u91cd\u70b9\u5c55\u793a\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u4f7f\u7528\u3001\u8def\u7531\u5b9a\u4e49\u548cSwaggerUI\u9875\u9762\u7684\u81ea\u52a8\u751f\u6210\u3002\u6b64\u5916\uff0c\u8fd8\u63a2\u8ba8\u4e86\u63a5\u53e3\u6587\u6863\u751f\u6210\u3001\u8fd4\u56de\u4e2d\u95f4\u4ef6\u5904\u7406\u4ee5\u53ca\u5982\u4f55\u5b9a\u4e49\u89c4\u8303\u5316\u63a5\u53e3\u8def\u5f84\u7b49\u95ee\u9898\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u79cd\u4fbf\u6377\u7684\u65b9\u6cd5\u6765\u751f\u6210\u548c\u6d4b\u8bd5API\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531","slug":"/docs/web/router-registering-strict-router-example","permalink":"/en/docs/web/router-registering-strict-router-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/web/router-registering-strict-router-example","title":"\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u8def\u7531","\u63a5\u53e3\u6587\u6863","SwaggerUI","OpenAPIv3","\u4e2d\u95f4\u4ef6","Web\u6846\u67b6","API\u6d4b\u8bd5","Go\u8bed\u8a00"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8bbe\u7f6e\u548c\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684Hello\u670d\u52a1\u793a\u4f8b\uff0c\u91cd\u70b9\u5c55\u793a\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u4f7f\u7528\u3001\u8def\u7531\u5b9a\u4e49\u548cSwaggerUI\u9875\u9762\u7684\u81ea\u52a8\u751f\u6210\u3002\u6b64\u5916\uff0c\u8fd8\u63a2\u8ba8\u4e86\u63a5\u53e3\u6587\u6863\u751f\u6210\u3001\u8fd4\u56de\u4e2d\u95f4\u4ef6\u5904\u7406\u4ee5\u53ca\u5982\u4f55\u5b9a\u4e49\u89c4\u8303\u5316\u63a5\u53e3\u8def\u5f84\u7b49\u95ee\u9898\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u79cd\u4fbf\u6377\u7684\u65b9\u6cd5\u6765\u751f\u6210\u548c\u6d4b\u8bd5API\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531","permalink":"/en/docs/web/router-registering-strict-router"},"next":{"title":"\u89c4\u8303\u8def\u7531-\u5982\u4f55\u4f7f\u7528","permalink":"/en/docs/web/router-registering-strict-router-usage"}}');var s=r(474848),i=r(28453);const c={slug:"/docs/web/router-registering-strict-router-example",title:"\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u8def\u7531","\u63a5\u53e3\u6587\u6863","SwaggerUI","OpenAPIv3","\u4e2d\u95f4\u4ef6","Web\u6846\u67b6","API\u6d4b\u8bd5","Go\u8bed\u8a00"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u8bbe\u7f6e\u548c\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684Hello\u670d\u52a1\u793a\u4f8b\uff0c\u91cd\u70b9\u5c55\u793a\u4e86\u914d\u7f6e\u6587\u4ef6\u7684\u4f7f\u7528\u3001\u8def\u7531\u5b9a\u4e49\u548cSwaggerUI\u9875\u9762\u7684\u81ea\u52a8\u751f\u6210\u3002\u6b64\u5916\uff0c\u8fd8\u63a2\u8ba8\u4e86\u63a5\u53e3\u6587\u6863\u751f\u6210\u3001\u8fd4\u56de\u4e2d\u95f4\u4ef6\u5904\u7406\u4ee5\u53ca\u5982\u4f55\u5b9a\u4e49\u89c4\u8303\u5316\u63a5\u53e3\u8def\u5f84\u7b49\u95ee\u9898\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u79cd\u4fbf\u6377\u7684\u65b9\u6cd5\u6765\u751f\u6210\u548c\u6d4b\u8bd5API\u3002"},d=void 0,o={},a=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"SwaggerUI",id:"swaggerui",level:2},{value:"\u8fd4\u56de\u4e2d\u95f4\u4ef6",id:"\u8fd4\u56de\u4e2d\u95f4\u4ef6",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"YAML"})," \u914d\u7f6e\u6587\u4ef6\uff1a ",(0,s.jsx)(n.code,{children:"config.yaml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'server:\n  address:     ":8199"\n  openapiPath: "/api.json"\n  swaggerPath: "/swagger"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b\u4ee3\u7801",children:"\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u4ece\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,s.jsx)(n.code,{children:"Hello"})," \u4f8b\u5b50\u5f00\u59cb\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\ntype HelloReq struct {\n    g.Meta `path:"/hello" method:"get"`\n    Name   string `v:"required" dc:"Your name"`\n}\ntype HelloRes struct {\n    Reply string `dc:"Reply content"`\n}\n\ntype Hello struct{}\n\nfunc (Hello) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {\n    g.Log().Debugf(ctx, `receive say: %+v`, req)\n    res = &HelloRes{\n        Reply: fmt.Sprintf(`Hi %s`, req.Name),\n    }\n    return\n}\n\nfunc main() {\n    s := g.Server()\n    s.Use(ghttp.MiddlewareHandlerResponse)\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.Bind(\n            new(Hello),\n        )\n    })\n    s.Run()\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u62f7\u8d1d\u8fd9\u6bb5\u4ee3\u7801\uff0c\u6211\u4eec\u8fd0\u884c\u8d77\u6765\u8bd5\u8bd5\uff0c\u7ec8\u7aef\u8f93\u51fa\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"2021-11-19 23:31:35.277 25580: http server started listening on [:8199]\n\n  SERVER  | DOMAIN  | ADDRESS | METHOD |   ROUTE    |                          HANDLER                          |    MIDDLEWARE\n----------|---------|---------|--------|------------|-----------------------------------------------------------|--------------------\n  default | default | :8199   | ALL    | /*         | github.com/gogf/gf/v2/net/ghttp.MiddlewareHandlerResponse | GLOBAL MIDDLEWARE\n----------|---------|---------|--------|------------|-----------------------------------------------------------|--------------------\n  default | default | :8199   | ALL    | /api.json  | github.com/gogf/gf/v2/net/ghttp.(*Server).openapiSpec-fm  |\n----------|---------|---------|--------|------------|-----------------------------------------------------------|--------------------\n  default | default | :8199   | GET    | /hello     | main.(*Hello).Say                                         |\n----------|---------|---------|--------|------------|-----------------------------------------------------------|--------------------\n  default | default | :8199   | ALL    | /swagger/* | github.com/gogf/gf/v2/net/ghttp.(*Server).swaggerUI-fm    | HOOK_BEFORE_SERVE\n----------|---------|---------|--------|------------|-----------------------------------------------------------|--------------------\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u9664\u4e86\u6211\u4eec\u7684\u4e1a\u52a1\u8def\u7531\u4e4b\u5916\uff0c ",(0,s.jsx)(n.code,{children:"Server"})," \u81ea\u52a8\u5e2e\u6211\u4eec\u6ce8\u518c\u4e86\u4e24\u4e2a\u8def\u7531\uff1a ",(0,s.jsx)(n.code,{children:"/api.json"})," \u548c ",(0,s.jsx)(n.code,{children:"/swagger/*"}),"\u3002\u524d\u8005\u662f\u81ea\u52a8\u751f\u6210\u7684\u57fa\u4e8e\u6807\u51c6\u7684 ",(0,s.jsx)(n.code,{children:"OpenAPIv3"})," \u534f\u8bae\u7684\u63a5\u53e3\u6587\u6863\uff0c\u540e\u8005\u662f\u81ea\u52a8\u751f\u6210 ",(0,s.jsx)(n.code,{children:"SwaggerUI"})," \u9875\u9762\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u67e5\u770b\u548c\u8c03\u8bd5\u3002\u8fd9\u4e24\u4e2a\u529f\u80fd\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u524d\u9762\u793a\u4f8b\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"openapiPath"})," \u548c ",(0,s.jsx)(n.code,{children:"swaggerPath"})," \u4e24\u4e2a\u914d\u7f6e\u9879\u5f00\u542f\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u63a5\u53e3\u6587\u6863",children:"\u63a5\u53e3\u6587\u6863"}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"OpenAPIv3"})," \u534f\u8bae\u751f\u6210\uff0c\u4e00\u822c\u6765\u8bf4\u9700\u8981\u7ed3\u5408\u76f8\u5e94\u7684 ",(0,s.jsx)(n.code,{children:"UI"})," \u5de5\u5177\u67e5\u770b\uff0c\u5730\u5740\uff1a ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/api.json",children:"http://127.0.0.1:8199/api.json"})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"OpenAPIv3"})," \u534f\u8bae\u662f\u89c4\u8303\u7684\u63a5\u53e3\u5b9a\u4e49\u534f\u8bae\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u6839\u636e\u534f\u8bae\u5185\u5bb9\u53ef\u4ee5\u505a\u5f88\u591a\u4e8b\uff0c\u4f8b\u5982\uff1a\u81ea\u5b9a\u4e49UI\u5c55\u793a\u3001Client\u4ee3\u7801\u751f\u6210\u3001\u534f\u8bae\u8f6c\u6362\u7b49\u7b49\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"swaggerui",children:"SwaggerUI"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u770b\u770b\u8fd9\u4e2a ",(0,s.jsx)(n.code,{children:"SwaggerUI"})," \u9875\u9762\uff1a ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/swagger/",children:"http://127.0.0.1:8199/swagger/"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(558770).A+"",width:"3582",height:"1274"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u53ea\u6709\u4e00\u4e2a\u6211\u4eec\u7684\u8def\u7531\u5730\u5740\u4ee5\u53ca\u5bf9\u5e94\u7684\u8f93\u5165\u8f93\u51fa\u7ed3\u6784\u4f53\u3002\u5f53\u7136\uff0c\u8fd9\u53ea\u662f\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u5728\u771f\u5b9e\u7684\u9879\u76ee\u4e2d\u901a\u8fc7\u4e00\u4e9b\u914d\u7f6e\u4f7f\u5f97\u9875\u9762\u66f4\u52a0\u4e30\u5bcc\u591a\u5f69\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u63a5\u7740\u5728\u8fd9\u4e2a\u9875\u9762\u4e0a\u505a\u4e0b\u63a5\u53e3\u6d4b\u8bd5\u5427\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(337072).A+"",width:"2754",height:"1854"})}),"\n",(0,s.jsxs)(n.p,{children:["\u55ef\uff0c\u63a5\u53e3\u8fd4\u56de\u4e86\u4e00\u4e2a\u56fa\u5b9a\u6570\u636e\u683c\u5f0f\u7684 ",(0,s.jsx)(n.code,{children:"Json"})," \u5185\u5bb9\uff0c\u4f46\u662f\u80fd\u770b\u5230\u5176\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"data"})," \u4e3a\u6211\u4eec\u9700\u8981\u7684\u8fd4\u56de\u7ed3\u679c\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u63d0\u793a\uff1a\u6700\u65b0\u7248\u672c\u7684 ",(0,s.jsx)(n.code,{children:"SwaggerUI"})," \u9875\u9762\u5df2\u7ecf\u4e0d\u652f\u6301\u63a5\u53e3\u6d4b\u8bd5\u529f\u80fd\uff0c\u5982\u679c\u5bf9\u6b64\u6709\u8981\u6c42\u7684\u540c\u5b66\u53ef\u4ee5\u81ea\u5b9a\u4e49 ",(0,s.jsx)(n.code,{children:"SwaggerUI"}),"\uff08\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/en/docs/web/api-document-swagger-ui",children:"\u63a5\u53e3\u6587\u6863-\u81ea\u5b9a\u4e49UI"}),"\uff09\uff0c \u4e5f\u53ef\u4ee5\u5bfc\u5165\u63a5\u53e3\u6587\u4ef6 ",(0,s.jsx)(n.code,{children:"api.json"})," \u5230\u7b2c\u4e09\u65b9\u5de5\u5177\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"apifox"}),"\uff09\u8fdb\u884c\u6d4b\u8bd5\uff1a"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(349537).A+"",width:"1723",height:"646"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u4e2d\u95f4\u4ef6",children:"\u8fd4\u56de\u4e2d\u95f4\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u7b49\u7b49\uff0c\u4f3c\u4e4e\u6f0f\u6389\u4e86\u4ec0\u4e48\u4e1c\u897f\uff1f\u662f\u7684\uff0c\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Server"})," \u7ec4\u4ef6\u63d0\u4f9b\u7684\u4e2d\u95f4\u4ef6\uff0c\u5b83\u662f\u62ff\u6765\u505a\u4ec0\u4e48\u7684\u5462\uff1f\u6211\u4eec\u5f00\u770b\u770b\u5b83\u7684\u65b9\u6cd5\u5b9a\u4e49\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(899601).A+"",width:"3584",height:"2070"})}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u7684\uff0c\u5b83\u5728\u6211\u4eec\u6ca1\u6709\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684\u8fd4\u56de\u6570\u636e\u683c\u5f0f\u5904\u7406\u4e2d\u95f4\u4ef6\u65f6\uff0c\u4f7f\u7528\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684\u4e2d\u95f4\u4ef6\u5904\u7406\u6211\u4eec\u7684\u8bf7\u6c42\uff0c\u5e76\u8fd4\u56de\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6570\u636e\u683c\u5f0f\u3002"})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},337072:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/9c5c2e6539f653a9f8774916521bd009-25418d7f2af9b6caf2bfa86b523e8b0e.png"},899601:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/c3600fa69faf060cb5c4839e2966ab6c-227170af0e5f6c6a304bfb586f286de4.png"},558770:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/f6deafda84d2d6c88d147f9b4869876f-cab4ac02ac82b53e2dcb64735c5e1e4d.png"},349537:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/fe95116df6dfa97448b5a9bcacde87ca-270c64915ea7e84dd0a8ca6f92018e9e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var t=r(296540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);