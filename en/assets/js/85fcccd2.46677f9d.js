"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[8147],{796282:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>t,frontMatter:()=>r,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"quick/\u9879\u76ee\u811a\u624b\u67b6/\u793a\u4f8b\u9879\u76ee","title":"\u793a\u4f8b\u9879\u76ee","description":"\u4e00\u4e2a\u7b80\u5355\u7684\u57fa\u4e8eHTTP\u7684API Service\u9879\u76ee\uff0c\u4f7f\u7528GoFrame\u6846\u67b6\u53caCLI\u5de5\u5177\u5f00\u53d1\u3002\u9879\u76ee\u6db5\u76d6\u4e86API\u63a5\u53e3\u5b9a\u4e49\u3001\u8def\u7531\u6ce8\u518c\u3001\u5e38\u91cf\u7ba1\u7406\u3001\u63a7\u5236\u5668\u4e0e\u670d\u52a1\u63a5\u53e3\u7684\u5b9e\u73b0\u53ca\u6570\u636e\u5e93\u8bbf\u95ee\u914d\u7f6e\u7b49\u5185\u5bb9\uff0c\u901a\u8fc7\u793a\u4f8b\u9879\u76ee\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u5e94\u7528\u6846\u67b6\u7279\u6027\u3002","source":"@site/versioned_docs/version-2.7.x/quick/\u9879\u76ee\u811a\u624b\u67b6/\u793a\u4f8b\u9879\u76ee.md","sourceDirName":"quick/\u9879\u76ee\u811a\u624b\u67b6","slug":"/quick/scaffold-demo","permalink":"/en/2.7.x/quick/scaffold-demo","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/quick/\u9879\u76ee\u811a\u624b\u67b6/\u793a\u4f8b\u9879\u76ee.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":2,"frontMatter":{"slug":"/quick/scaffold-demo","title":"\u793a\u4f8b\u9879\u76ee","hide_title":true,"sidebar_position":2,"keywords":["GoFrame","API Service","CLI\u5de5\u5177","\u6570\u636e\u5e93\u914d\u7f6e","\u6570\u636e\u6821\u9a8c","\u8def\u7531\u6ce8\u518c","\u63a7\u5236\u5668\u5b9a\u4e49","\u4e1a\u52a1\u6a21\u578b","\u670d\u52a1\u63a5\u53e3","\u4f9d\u8d56\u6ce8\u5165"],"description":"\u4e00\u4e2a\u7b80\u5355\u7684\u57fa\u4e8eHTTP\u7684API Service\u9879\u76ee\uff0c\u4f7f\u7528GoFrame\u6846\u67b6\u53caCLI\u5de5\u5177\u5f00\u53d1\u3002\u9879\u76ee\u6db5\u76d6\u4e86API\u63a5\u53e3\u5b9a\u4e49\u3001\u8def\u7531\u6ce8\u518c\u3001\u5e38\u91cf\u7ba1\u7406\u3001\u63a7\u5236\u5668\u4e0e\u670d\u52a1\u63a5\u53e3\u7684\u5b9e\u73b0\u53ca\u6570\u636e\u5e93\u8bbf\u95ee\u914d\u7f6e\u7b49\u5185\u5bb9\uff0c\u901a\u8fc7\u793a\u4f8b\u9879\u76ee\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u5e94\u7528\u6846\u67b6\u7279\u6027\u3002"},"sidebar":"quickSidebar","previous":{"title":"\u914d\u7f6e\u7ba1\u7406","permalink":"/en/2.7.x/quick/scaffold-config"},"next":{"title":"What\'s Next","permalink":"/en/2.7.x/quick/scaffold-next"}}');var c=n(474848),i=n(28453);const r={slug:"/quick/scaffold-demo",title:"\u793a\u4f8b\u9879\u76ee",hide_title:!0,sidebar_position:2,keywords:["GoFrame","API Service","CLI\u5de5\u5177","\u6570\u636e\u5e93\u914d\u7f6e","\u6570\u636e\u6821\u9a8c","\u8def\u7531\u6ce8\u518c","\u63a7\u5236\u5668\u5b9a\u4e49","\u4e1a\u52a1\u6a21\u578b","\u670d\u52a1\u63a5\u53e3","\u4f9d\u8d56\u6ce8\u5165"],description:"\u4e00\u4e2a\u7b80\u5355\u7684\u57fa\u4e8eHTTP\u7684API Service\u9879\u76ee\uff0c\u4f7f\u7528GoFrame\u6846\u67b6\u53caCLI\u5de5\u5177\u5f00\u53d1\u3002\u9879\u76ee\u6db5\u76d6\u4e86API\u63a5\u53e3\u5b9a\u4e49\u3001\u8def\u7531\u6ce8\u518c\u3001\u5e38\u91cf\u7ba1\u7406\u3001\u63a7\u5236\u5668\u4e0e\u670d\u52a1\u63a5\u53e3\u7684\u5b9e\u73b0\u53ca\u6570\u636e\u5e93\u8bbf\u95ee\u914d\u7f6e\u7b49\u5185\u5bb9\uff0c\u901a\u8fc7\u793a\u4f8b\u9879\u76ee\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7406\u89e3\u548c\u5e94\u7528\u6846\u67b6\u7279\u6027\u3002"},l=void 0,o={},h=[{value:"\u9879\u76ee\u4ecb\u7ecd",id:"\u9879\u76ee\u4ecb\u7ecd",level:2},{value:"\u8981\u70b9\u4ecb\u7ecd",id:"\u8981\u70b9\u4ecb\u7ecd",level:2},{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",level:3},{value:"\u8def\u7531\u6ce8\u518c",id:"\u8def\u7531\u6ce8\u518c",level:3},{value:"\u5e38\u91cf\u7ba1\u7406",id:"\u5e38\u91cf\u7ba1\u7406",level:3},{value:"\u63a7\u5236\u5668\u5b9a\u4e49",id:"\u63a7\u5236\u5668\u5b9a\u4e49",level:3},{value:"\u6570\u636e\u5e93\u8bbf\u95ee",id:"\u6570\u636e\u5e93\u8bbf\u95ee",level:3},{value:"\u9a71\u52a8\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09",id:"\u9a71\u52a8\u5f15\u5165\u4ec5\u4e00\u6b21",level:4},{value:"\u6570\u636e\u5e93\u914d\u7f6e",id:"\u6570\u636e\u5e93\u914d\u7f6e",level:4},{value:"dao\u4ee3\u7801\u751f\u6210",id:"dao\u4ee3\u7801\u751f\u6210",level:4},{value:"\u4e1a\u52a1\u6a21\u578b",id:"\u4e1a\u52a1\u6a21\u578b",level:3},{value:"\u670d\u52a1\u63a5\u53e3",id:"\u670d\u52a1\u63a5\u53e3",level:3},{value:"\u4e1a\u52a1\u5b9e\u73b0",id:"\u4e1a\u52a1\u5b9e\u73b0",level:3},{value:"\u4f9d\u8d56\u6ce8\u5165",id:"\u4f9d\u8d56\u6ce8\u5165",level:4},{value:"\u589e\u52a0\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09",id:"\u589e\u52a0\u5f15\u5165\u4ec5\u4e00\u6b21",level:4},{value:"\u4ee3\u7801\u751f\u6210",id:"\u4ee3\u7801\u751f\u6210",level:2},{value:"\u63a5\u53e3\u6d4b\u8bd5",id:"\u63a5\u53e3\u6d4b\u8bd5",level:2},{value:"\u7528\u6237\u6ce8\u518c - <code>/user/signup</code>",id:"\u7528\u6237\u6ce8\u518c---usersignup",level:3},{value:"\u7528\u6237\u767b\u5f55 - <code>/user/signin</code>",id:"\u7528\u6237\u767b\u5f55---usersignin",level:3},{value:"\u66f4\u591a\u793a\u4f8b",id:"\u66f4\u591a\u793a\u4f8b",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"\u793a\u4f8b\u662f\u6700\u597d\u7684\u6587\u6863"}),"\uff0c\u6211\u4eec\u4e3a\u5927\u5bb6\u51c6\u5907\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,c.jsx)(s.code,{children:"API"})," \u793a\u4f8b\u9879\u76ee\uff0c\u5927\u5bb6\u53ef\u4ee5\u901a\u8fc7\u793a\u4f8b\u9879\u76ee\u6e90\u7801\u66f4\u8fdb\u4e00\u6b65\u5b66\u4e60\u6846\u67b6\u4f7f\u7528\u3002\u5f53\u5927\u5bb6\u5728\u9605\u8bfb\u793a\u4f8b\u9879\u76ee\u7684\u6e90\u7801\u65f6\u6709\u7591\u95ee\u7684\u5730\u65b9\uff0c\u8bf7\u67e5\u9605\u5f00\u53d1\u624b\u518c\u4e2d\u5bf9\u5e94\u7684\u6a21\u5757\u6587\u6863\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u9879\u76ee\u4ecb\u7ecd",children:"\u9879\u76ee\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u57fa\u4e8e ",(0,c.jsx)(s.code,{children:"HTTP"})," \u7684 ",(0,c.jsx)(s.code,{children:"API Service"})," \u4e3a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u4ee5\u53ca\u76f8\u5e94\u7684 ",(0,c.jsx)(s.code,{children:"CLI"})," \u5de5\u5177\u6765\u5f00\u53d1\u4e00\u4e2a\u63a5\u53e3\u9879\u76ee\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4ee3\u7801\u5730\u5740\uff1a ",(0,c.jsx)(s.a,{href:"https://github.com/gogf/gf-demo-user",children:"https://github.com/gogf/gf-demo-user"})]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/gogf/gf-demo-user\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u8bf7\u5148\u5c1d\u8bd5\u5c06\u6b64\u9879\u76ee\u5728\u672c\u5730\u8fd0\u884c\u8d77\u6765\u3002\u518d\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u4f1a\u7ed9\u5927\u5bb6\u4ecb\u7ecd\u8fd9\u4e2a\u793a\u4f8b\u9879\u76ee\u7684\u4e00\u4e9b\u7ec6\u8282\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u8981\u70b9\u4ecb\u7ecd",children:"\u8981\u70b9\u4ecb\u7ecd"}),"\n",(0,c.jsx)(s.h3,{id:"\u63a5\u53e3\u5b9a\u4e49",children:"\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,c.jsxs)(s.p,{children:["\u63a5\u53e3\u6ce8\u518c\u6587\u4ef6\u4f4d\u4e8e ",(0,c.jsx)(s.code,{children:"api"})," \u76ee\u5f55\u4e0b\uff0c\u7531\u4e8e\u8be5\u9879\u76ee\u91c7\u7528\u4e86\u89c4\u8303\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u56e0\u6b64\u5728API\u7ed3\u6784\u4f53\u7684\u5c5e\u6027\u4e2d\u5305\u542b\u4e00\u4e9b\u6807\u7b7e\u3002\u5176\u4e2d\u7ed3\u6784\u4f53\u5c5e\u6027\u7684 ",(0,c.jsx)(s.code,{children:"v"})," \u6807\u7b7e\u8868\u793a\u6821\u9a8c\u89c4\u5219\uff0c\u8bf7\u6c42\u53c2\u6570\u8fdb\u5165 ",(0,c.jsx)(s.code,{children:"HTTP Server"})," \u540e\u5c06\u4f1a\u88ab\u81ea\u52a8\u6267\u884c\u6821\u9a8c\uff08\u6846\u67b6\u6709\u975e\u5e38\u5f3a\u5927\u7684\u6570\u636e\u6821\u9a8c\u7ec4\u4ef6\uff0c\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/core/gvalid",children:"\u6570\u636e\u6821\u9a8c"}),"\uff09"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u6846\u67b6\u4e2d\u6240\u6709\u6d89\u53ca\u5230\u7684\u6807\u7b7e\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/faq",children:"\u5e38\u89c1\u95ee\u9898(FAQ)"})]})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(347523).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h3,{id:"\u8def\u7531\u6ce8\u518c",children:"\u8def\u7531\u6ce8\u518c"}),"\n",(0,c.jsxs)(s.p,{children:["\u8def\u7531\u6ce8\u518c\u5f80\u5f80\u5728 ",(0,c.jsx)(s.code,{children:"cmd"})," \u5305\u4e2d\uff0c\u5728\u672c\u9879\u76ee\u4e2d\uff0c\u4ecd\u65e7\u91c7\u7528\u7075\u6d3b\u7684\u5206\u7ec4\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\u3002\u5728\u90e8\u5206\u8def\u7531\u4e2d\u5e26\u6709\u9274\u6743\u4e2d\u95f4\u4ef6\uff0c\u8fd9\u90e8\u5206\u8def\u7531\u9700\u8981\u9274\u6743\u540e\u624d\u80fd\u8bbf\u95ee\uff0c\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u4ed4\u7ec6\u7814\u7a76\u4e0b\u6e90\u7801\u7684\u5b9e\u73b0\u539f\u7406\u3002\u5173\u4e8e\u8def\u7531\u4e2d\u95f4\u4ef6\u7684\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/web/router-middleware",children:"\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(237080).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h3,{id:"\u5e38\u91cf\u7ba1\u7406",children:"\u5e38\u91cf\u7ba1\u7406"}),"\n",(0,c.jsxs)(s.p,{children:["\u9879\u76ee\u7684\u5168\u5c40\u8bbf\u95ee\u5e38\u91cf\u4f4d\u4e8e ",(0,c.jsx)(s.code,{children:"internal/consts"})," \u5305\u4e0b\uff0c\u4f9b\u9879\u76ee\u6240\u6709\u7684\u5305\u5168\u5c40\u53ef\u8bbf\u95ee\uff0c ",(0,c.jsx)(s.strong,{children:"\u5168\u5c40\u5e38\u91cf\u901a\u8fc7\u4e0d\u540c\u7684\u6587\u4ef6\u4ee5\u53ca\u540d\u79f0\u547d\u540d\u524d\u7f00\u6765\u533a\u5206\u4e0d\u540c\u7684\u4e1a\u52a1\u6a21\u5757"}),"\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u5efa\u8bae\u6240\u6709\u7684\u5e38\u91cf\u90fd\u4e22\u5230 ",(0,c.jsx)(s.code,{children:"internal/consts"})," \u4e0b\uff0c\u975e\u516c\u5f00\u7684\u5e38\u91cf\u5efa\u8bae\u653e\u5230\u5bf9\u5e94\u7684\u5305\u4e0b\u9762\u95ed\u73af\u7ef4\u62a4\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(493202).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h3,{id:"\u63a7\u5236\u5668\u5b9a\u4e49",children:"\u63a7\u5236\u5668\u5b9a\u4e49"}),"\n",(0,c.jsxs)(s.p,{children:["\u63a7\u5236\u5668\u5f80\u5f80\u4e0d\u5e26\u6709\u4efb\u4f55\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8d1f\u8d23 ",(0,c.jsx)(s.code,{children:"API"})," \u63a5\u53e3\u6570\u636e\u7ed3\u6784\u7684\u8f93\u5165\u4e0e\u8f93\u51fa\uff0c\u8c03\u7528\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,c.jsx)(s.code,{children:"service"})," \u5b9e\u73b0\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u5173\u4e8e\u9879\u76ee\u5de5\u7a0b\u8bbe\u8ba1\u4e2d\u5404\u4e2a\u90e8\u5206\u7684\u804c\u8d23\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/design/project-structure",children:"\u5de5\u7a0b\u76ee\u5f55\u8bbe\u8ba1\ud83d\udd25"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(421592).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h3,{id:"\u6570\u636e\u5e93\u8bbf\u95ee",children:"\u6570\u636e\u5e93\u8bbf\u95ee"}),"\n",(0,c.jsx)(s.h4,{id:"\u9a71\u52a8\u5f15\u5165\u4ec5\u4e00\u6b21",children:"\u9a71\u52a8\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09"}),"\n",(0,c.jsxs)(s.p,{children:["\u9996\u5148\uff0c\u9700\u8981\u5f15\u5165\u5bf9\u5e94\u7684\u9a71\u52a8\u6587\u4ef6\uff0c\u7531\u4e8e\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u7684\u662f ",(0,c.jsx)(s.code,{children:"MySQL"}),"\uff0c\u6211\u4eec\u9700\u8981\u5728 ",(0,c.jsx)(s.code,{children:"main.go"})," \u4e2d\u5f15\u5165\u4ee5\u4e0b\u9a71\u52a8\u6587\u4ef6\uff1a"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u5173\u4e8e\u9a71\u52a8\u7684\u652f\u6301\u4ee5\u53ca\u4f7f\u7528\u8bf7\u53c2\u8003\u94fe\u63a5\uff1a ",(0,c.jsx)(s.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(176364).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h4,{id:"\u6570\u636e\u5e93\u914d\u7f6e",children:"\u6570\u636e\u5e93\u914d\u7f6e"}),"\n",(0,c.jsxs)(s.p,{children:["\u6570\u636e\u5e93\u7684\u914d\u7f6e\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"database"})," \u914d\u7f6e\u9879\uff0c\u5173\u4e8e\u6570\u636e\u5e93\u914d\u7f6e\u7684\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/core/gdb-config",children:"ORM\u4f7f\u7528\u914d\u7f6e"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(565050).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h4,{id:"dao\u4ee3\u7801\u751f\u6210",children:"dao\u4ee3\u7801\u751f\u6210"}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u6211\u4eec ",(0,c.jsx)(s.strong,{children:"\u63a8\u8350\u4f7f\u7528"})," ",(0,c.jsx)(s.code,{children:"dao/do/entity"})," \u7684\u65b9\u5f0f\u64cd\u4f5c\u6570\u636e\u5e93\uff0c ",(0,c.jsx)(s.strong,{children:"\u8fd9\u4e9b\u6587\u4ef6\u90fd\u662f\u901a\u8fc7\u5f00\u53d1\u5de5\u5177\u81ea\u52a8\u751f\u6210\u7684\uff0c\u7531\u5f00\u53d1\u5de5\u5177\u7edf\u4e00\u7ef4\u62a4"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(768739).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4ee3\u7801\u751f\u6210\u65b9\u5f0f\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"make dao"})," \u547d\u4ee4\uff0c\u6216\u8005 ",(0,c.jsx)(s.code,{children:"gf gen dao"})," \u547d\u4ee4\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u5173\u4e8e\u6570\u636e\u5e93\u75db\u70b9\u53ca\u8bbe\u8ba1\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/design/project-dao",children:"DAO\u5c01\u88c5\u8bbe\u8ba1"}),"\uff0c\u5173\u4e8e\u6570\u636e\u5e93\u4ee3\u7801\u6587\u4ef6\u751f\u6210\u5de5\u5177\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/cli/gen-dao",children:"\u6570\u636e\u89c4\u8303-gen dao"})]})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(576925).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h3,{id:"\u4e1a\u52a1\u6a21\u578b",children:"\u4e1a\u52a1\u6a21\u578b"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e1a\u52a1\u9879\u76ee\u4e2d\u5185\u90e8 ",(0,c.jsx)(s.strong,{children:"\u6a21\u5757\u95f4\u4ea4\u4e92\u7684\u6570\u636e\u7ed3\u6784"})," \u7531 ",(0,c.jsx)(s.code,{children:"model"})," \u5305\u7ef4\u62a4\uff0c\u4f9b\u5168\u5c40\u8bbf\u95ee\u3002\u66f4\u591a\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/design/project-models",children:"\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(280790).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h3,{id:"\u670d\u52a1\u63a5\u53e3",children:"\u670d\u52a1\u63a5\u53e3"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"\u4e3a\u4e86\u964d\u4f4e\u4e1a\u52a1\u9879\u76ee\u5185\u90e8\u6a21\u5757\u95f4\u7684\u8026\u5408\uff0c\u6846\u67b6\u5c06\u6a21\u5757\u95f4\u7684\u4f9d\u8d56\u62bd\u8c61\u4e3a\u4e86\u63a5\u53e3"}),"\uff0c\u7531 ",(0,c.jsx)(s.code,{children:"internal/service"})," \u5305\u7ef4\u62a4\u3002 ",(0,c.jsx)(s.code,{children:"internal/service"})," \u53ef\u4ee5\u7531\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u7ef4\u62a4\u63a5\u53e3\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"internal/logic"})," \u4e1a\u52a1\u5c01\u88c5\u7684\u4ee3\u7801\u6309\u7167\u4e00\u5b9a\u89c4\u5219\u81ea\u52a8\u751f\u6210\u63a5\u53e3\u4ee3\u7801\u6587\u4ef6\u3002\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/cli/gen-service",children:"\u6a21\u5757\u89c4\u8303-gen service"})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(15310).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h3,{id:"\u4e1a\u52a1\u5b9e\u73b0",children:"\u4e1a\u52a1\u5b9e\u73b0"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e1a\u52a1\u7684\u5177\u4f53\u5b9e\u73b0\u7531 ",(0,c.jsx)(s.code,{children:"internal/logic"})," \u5305\u7ef4\u62a4\uff0c\u901a\u8fc7\u4f9d\u8d56\u6ce8\u5165\u7684\u65b9\u5f0f\u6ce8\u518c\u5177\u4f53\u7684\u5b9e\u73b0\u5bf9\u8c61\u5230 ",(0,c.jsx)(s.code,{children:"internal/service"})," \u5305\u4e0b\u3002"]}),"\n",(0,c.jsx)(s.h4,{id:"\u4f9d\u8d56\u6ce8\u5165",children:"\u4f9d\u8d56\u6ce8\u5165"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e1a\u52a1\u5b9e\u73b0\u7684\u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528\u7684\u662f\u533f\u540d\u5305\u521d\u59cb\u5316\u65b9\u6cd5 ",(0,c.jsx)(s.code,{children:"init"}),"\uff0c\u5728\u533f\u540d\u5305\u521d\u59cb\u5316\u65b9\u6cd5\u5185\u90e8\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"service.RegisterXxx"})," \u7684\u65b9\u5f0f\u6ce8\u5165\u5177\u4f53\u7684\u63a5\u53e3\u5b9e\u73b0\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(73362).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h4,{id:"\u589e\u52a0\u5f15\u5165\u4ec5\u4e00\u6b21",children:"\u589e\u52a0\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09"}),"\n",(0,c.jsxs)(s.p,{children:["\u533f\u540d\u5305\u521d\u59cb\u5316\u65b9\u6cd5\u9700\u8981\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"import"})," \u65b9\u5f0f\u5f15\u5165\uff0c\u8be5\u5f15\u5165\u7528\u4e8e\u5c06\u4e1a\u52a1\u903b\u8f91\u5177\u4f53\u5b9e\u73b0\u6ce8\u518c\u5230 ",(0,c.jsx)(s.code,{children:"internal/service"})," \u4e0b\u3002\u8fd9\u79cd\u4f9d\u8d56\u5f80\u5f80\u9700\u8981\u5728 ",(0,c.jsx)(s.code,{children:"main.go"})," \u4e2d\u9876\u90e8\u5f15\u5165\u3002"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u9700\u8981\u6ce8\u610f\uff0c\u5728\u901a\u8fc7\u6846\u67b6\u5f00\u53d1\u5de5\u5177\u81ea\u52a8\u751f\u6210 ",(0,c.jsx)(s.code,{children:"service"})," \u5c42\u63a5\u53e3\u6587\u4ef6\u65f6\uff0c\u5f00\u53d1\u5de5\u5177\u540c\u65f6\u4e5f\u4f1a\u81ea\u52a8\u66f4\u65b0\u6700\u5916\u5c42\u7684 ",(0,c.jsx)(s.code,{children:"main.go"}),"\uff0c\u81ea\u52a8\u589e\u52a0 ",(0,c.jsx)(s.code,{children:"logic"})," \u5f15\u5165\uff0c\u65e0\u9700\u5f00\u53d1\u8005\u64cd\u5fc3\u3002"]})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:n(342112).A+"",width:"3072",height:"1750"})}),"\n",(0,c.jsx)(s.h2,{id:"\u4ee3\u7801\u751f\u6210",children:"\u4ee3\u7801\u751f\u6210"}),"\n",(0,c.jsx)(s.p,{children:"\u6846\u67b6\u7684\u76ee\u7684\u662f\u8ba9\u5f00\u53d1\u8005\u5c06\u7cbe\u529b\u805a\u7126\u4e8e\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u672c\u8eab\u3002\u5728\u5f00\u53d1\u4e1a\u52a1\u9879\u76ee\u65f6\uff0c\u975e\u4e1a\u52a1\u76f8\u5173\u7684\u5197\u4f59\u4ee3\u7801\u90fd\u53ef\u4ee5\u901a\u8fc7\u5f00\u53d1\u5de5\u5177\u751f\u6210\uff0c\u4f8b\u5982\u4ee5\u4e0b\u5c42\u7ea7\u4ee3\u7801\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"controller"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"dao/entity/do"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"service"})}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u5f00\u53d1\u5de5\u5177\u7ae0\u8282\uff1a ",(0,c.jsx)(s.a,{href:"/en/2.7.x/docs/cli/gen",children:"\u4ee3\u7801\u751f\u6210-gen(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)"})]}),"\n",(0,c.jsx)(s.h2,{id:"\u63a5\u53e3\u6d4b\u8bd5",children:"\u63a5\u53e3\u6d4b\u8bd5"}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"curl"})," \u547d\u4ee4\u6765\u5bf9\u5176\u4e2d\u4e24\u4e2a\u63a5\u53e3\u6267\u884c\u7b80\u5355\u7684\u6d4b\u8bd5\u3002"]}),"\n",(0,c.jsxs)(s.h3,{id:"\u7528\u6237\u6ce8\u518c---usersignup",children:["\u7528\u6237\u6ce8\u518c - ",(0,c.jsx)(s.code,{children:"/user/signup"})]}),"\n",(0,c.jsxs)(s.p,{children:["\u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7 ",(0,c.jsx)(s.code,{children:"test001"}),"\uff0c\u6635\u79f0\u4e3a ",(0,c.jsx)(s.code,{children:"john"}),"\uff0c\u5bc6\u7801\u4e3a ",(0,c.jsx)(s.code,{children:"123456"}),"\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"curl -d 'nickname=john&passport=test001&password=123456&password2=123456' http://127.0.0.1:8000/user/sign-up\n"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:'{"code":0,"message":"","data":null}\n'})}),"\n",(0,c.jsx)(s.p,{children:"\u6211\u4eec\u518d\u6b21\u4f7f\u7528\u521a\u624d\u7684\u4fe1\u606f\u6ce8\u518c\u4e00\u6b21\u8bd5\u8bd5\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"curl -d 'nickname=john&passport=test001&password=123456&password2=123456' http://127.0.0.1:8000/user/sign-up\n"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:'{"code":50,"message":"Passport \\"test001\\" is already token by others","data":null}\n'})}),"\n",(0,c.jsx)(s.p,{children:"\u53ef\u4ee5\u770b\u5230\u6ce8\u518c\u5931\u8d25\u4e86\uff0c\u76f8\u540c\u540d\u79f0\u53ea\u80fd\u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7\u3002"}),"\n",(0,c.jsxs)(s.h3,{id:"\u7528\u6237\u767b\u5f55---usersignin",children:["\u7528\u6237\u767b\u5f55 - ",(0,c.jsx)(s.code,{children:"/user/signin"})]}),"\n",(0,c.jsx)(s.p,{children:"\u6211\u4eec\u5148\u8bbf\u95ee\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u7684\u63a5\u53e3\uff0c\u9a8c\u8bc1\u9274\u6743\u4e2d\u95f4\u4ef6\u662f\u5426\u751f\u6548\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"curl http://127.0.0.1:8000/user/profile\n\nForbidden\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u6211\u4eec\u7528\u521a\u624d\u6ce8\u518c\u7684\u8d26\u53f7\u767b\u5f55\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"curl -i -d 'passport=test001&password=123456' http://127.0.0.1:8000/user/sign-in\n"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:'HTTP/1.1 200 OK\nAccess-Control-Allow-Credentials: true\nAccess-Control-Allow-Headers: Origin,Content-Type,Accept,User-Agent,Cookie,Authorization,X-Auth-Token,X-Requested-With\nAccess-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,HEAD,CONNECT,OPTIONS,TRACE\nAccess-Control-Allow-Origin: *\nAccess-Control-Max-Age: 3628800\nContent-Type: application/json\nServer: GoFrame HTTP Server\nSet-Cookie: gfsessionid=14sc9nep0u6yl0cieluexn0n0w2008q7; Path=/; Expires=Wed, 09 Mar 2022 15:52:44 GMT; SameSite\nTrace-Id: 4830f6adbb72da16f34b7162f93080d8\nDate: Tue, 08 Mar 2022 15:52:44 GMT\nContent-Length: 35\n\n{"code":0,"message":"","data":null}\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,c.jsx)(s.code,{children:"-i"})," \u9009\u9879\u7528\u4e8e\u7ec8\u7aef\u6253\u5370\u51fa\u670d\u52a1\u7aef\u8fd4\u56de\u7684 ",(0,c.jsx)(s.code,{children:"Header"})," \u4fe1\u606f\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u83b7\u53d6 ",(0,c.jsx)(s.code,{children:"sessionid"}),"\u3002 ",(0,c.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u9ed8\u8ba4\u7684 ",(0,c.jsx)(s.code,{children:"sessionid"})," \u540d\u79f0\u4e3a ",(0,c.jsx)(s.code,{children:"gfsessionid"}),"\uff0c\u6211\u4eec\u770b\u5230\u8fd4\u56de\u7684 ",(0,c.jsx)(s.code,{children:"Header"})," \u4e2d\u5df2\u7ecf\u6709\u4e86\uff0c\u5e76\u4e14\u662f\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"Cookie"})," \u65b9\u5f0f\u8fd4\u56de\u7684\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u968f\u540e\u6211\u4eec\u518d\u6b21\u8bbf\u95ee\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u63a5\u53e3\uff0c\u5e76\u4e14\u8fd9\u6b21\u63d0\u4ea4 ",(0,c.jsx)(s.code,{children:"gfsessionid"}),"\uff0c\u8be5\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"Header"})," \u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"Cookie"})," \u63d0\u4ea4\uff0c\u670d\u52a1\u7aef\u90fd\u662f\u80fd\u591f\u81ea\u52a8\u8bc6\u522b\u7684\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"curl -H 'gfsessionid:14sc9nep0u6yl0cieluexn0n0w2008q7' http://127.0.0.1:8000/user/profile\n"})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:'{"code":0,"message":"","data":{"id":1,"passport":"test001","password":"123456","nickname":"john","createAt":"2022-03-08 23:51:40","updateAt":"2022-03-08 23:51:40"}}\n'})}),"\n",(0,c.jsx)(s.h2,{id:"\u66f4\u591a\u793a\u4f8b",children:"\u66f4\u591a\u793a\u4f8b"}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u63d0\u4f9b\u4e86\u53e6\u4e00\u4e2a\u8f83\u4e3a\u5b8c\u6574\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u611f\u5174\u8da3\u53ef\u4ee5\u7814\u7a76\u4e00\u4e0b\u6e90\u7801\uff1a ",(0,c.jsx)(s.a,{href:"https://github.com/gogf/focus-single",children:"https://github.com/gogf/focus-single"})]})]})}function t(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},280790:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/01f8c0b3d5e01a162c41f201f5d1bcd1-77db7adf247833c9fe6c8478226fe58d.png"},768739:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/10add189275bb6ec420efc35b3b43d97-beb615cf8df862d47a2adc249009429c.png"},493202:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/1630e4779942a487028be5ceca9cf87e-637a8852aa501d69c9ea8ee01e94266a.png"},347523:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/2b8717c25ab6f1b6e46961d282cac155-6016f5532c6c67548863d1af0c08904a.png"},421592:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/8478bdc21b81594947e19bd1a689890d-087ac89a1515f033b8a3a643d4e62095.png"},237080:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/a5aac1c0f6669392c63a269b1dfd267a-0f4cd3ece8ec4be365c7d7bcc7178470.png"},176364:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/ad562195cf35e0dcf33ca92e2b586fd6-0657b45295fd0734470bc79187ee3839.png"},565050:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/bad86361379ef3391562cb7568ca56e8-821c399031727a78193e302c8916ebf4.png"},15310:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/bfcd33e17d6d9cfd22036d05588e96c7-655b53debd6dffb2104b421565e2eae6.png"},576925:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/c1858c67cbbd91b975234ab58d2d92c8-017a8a0e8cebd0d4311b93d297ef431d.png"},342112:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/cb621abc568d76302ccee5051d7155c2-5c429ccd1e7dfb1a623b4a8f838c97bd.png"},73362:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/cea5324327261df331bae2eae717db06-2a734eac0fa7d32fa44ca3108c1499b2.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var d=n(296540);const c={},i=d.createContext(c);function r(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);