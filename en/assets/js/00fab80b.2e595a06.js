"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[30876],{326490:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>o});const d=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u89c4\u8303\u8def\u7531-\u5982\u4f55\u4f7f\u7528","title":"\u89c4\u8303\u8def\u7531-\u5982\u4f55\u4f7f\u7528","description":"\u5728GoFrame\u6846\u67b6\u4e0b\u5b9a\u4e49\u8def\u7531\u65b9\u6cd5\u3001\u7ba1\u7406\u548c\u6ce8\u518c\u8def\u7531\uff0c\u4ee5\u53ca\u8bf7\u6c42\u5bf9\u8c61\u548c\u8fd4\u56de\u5bf9\u8c61\u7684\u89c4\u8303\u5316\u7ed3\u6784\u3002\u901a\u8fc7\u4f7f\u7528\u5206\u7ec4\u8def\u7531\u7684Bind\u65b9\u6cd5\u548c\u57fa\u672c\u7684BindHandler\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6548\u5730\u7ba1\u7406\u8def\u7531\u3002\u8fd8\u5305\u62ec\u5982\u4f55\u8fdb\u884c\u8f93\u5165\u6570\u636e\u6821\u9a8c\u4ee5\u53ca\u4f7f\u7528\u7edf\u4e00\u7684\u540e\u7f6e\u4e2d\u95f4\u4ef6\u8fdb\u884c\u6570\u636e\u5904\u7406\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u89c4\u8303\u8def\u7531-\u5982\u4f55\u4f7f\u7528.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531","slug":"/docs/web/router-registering-strict-router-usage","permalink":"/en/docs/web/router-registering-strict-router-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8def\u7531\u7ba1\u7406/\u8def\u7531\u7ba1\u7406-\u8def\u7531\u6ce8\u518c/\u8def\u7531\u6ce8\u518c-\u89c4\u8303\u8def\u7531/\u89c4\u8303\u8def\u7531-\u5982\u4f55\u4f7f\u7528.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/web/router-registering-strict-router-usage","title":"\u89c4\u8303\u8def\u7531-\u5982\u4f55\u4f7f\u7528","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u8def\u7531\u65b9\u6cd5\u5b9a\u4e49","\u8bf7\u6c42\u5bf9\u8c61","\u54cd\u5e94\u5bf9\u8c61","\u89c4\u8303\u5316\u8def\u7531","Bind\u65b9\u6cd5","BindHandler","\u6570\u636e\u6821\u9a8c","OpenAPIv3"],"description":"\u5728GoFrame\u6846\u67b6\u4e0b\u5b9a\u4e49\u8def\u7531\u65b9\u6cd5\u3001\u7ba1\u7406\u548c\u6ce8\u518c\u8def\u7531\uff0c\u4ee5\u53ca\u8bf7\u6c42\u5bf9\u8c61\u548c\u8fd4\u56de\u5bf9\u8c61\u7684\u89c4\u8303\u5316\u7ed3\u6784\u3002\u901a\u8fc7\u4f7f\u7528\u5206\u7ec4\u8def\u7531\u7684Bind\u65b9\u6cd5\u548c\u57fa\u672c\u7684BindHandler\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6548\u5730\u7ba1\u7406\u8def\u7531\u3002\u8fd8\u5305\u62ec\u5982\u4f55\u8fdb\u884c\u8f93\u5165\u6570\u636e\u6821\u9a8c\u4ee5\u53ca\u4f7f\u7528\u7edf\u4e00\u7684\u540e\u7f6e\u4e2d\u95f4\u4ef6\u8fdb\u884c\u6570\u636e\u5904\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u89c4\u8303\u8def\u7531-\u57fa\u672c\u793a\u4f8b","permalink":"/en/docs/web/router-registering-strict-router-example"},"next":{"title":"\u89c4\u8303\u8def\u7531-\u5e38\u89c1\u95ee\u9898","permalink":"/en/docs/web/router-registering-strict-router-faq"}}');var s=r(474848),i=r(28453);const c={slug:"/docs/web/router-registering-strict-router-usage",title:"\u89c4\u8303\u8def\u7531-\u5982\u4f55\u4f7f\u7528",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u8def\u7531\u65b9\u6cd5\u5b9a\u4e49","\u8bf7\u6c42\u5bf9\u8c61","\u54cd\u5e94\u5bf9\u8c61","\u89c4\u8303\u5316\u8def\u7531","Bind\u65b9\u6cd5","BindHandler","\u6570\u636e\u6821\u9a8c","OpenAPIv3"],description:"\u5728GoFrame\u6846\u67b6\u4e0b\u5b9a\u4e49\u8def\u7531\u65b9\u6cd5\u3001\u7ba1\u7406\u548c\u6ce8\u518c\u8def\u7531\uff0c\u4ee5\u53ca\u8bf7\u6c42\u5bf9\u8c61\u548c\u8fd4\u56de\u5bf9\u8c61\u7684\u89c4\u8303\u5316\u7ed3\u6784\u3002\u901a\u8fc7\u4f7f\u7528\u5206\u7ec4\u8def\u7531\u7684Bind\u65b9\u6cd5\u548c\u57fa\u672c\u7684BindHandler\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6548\u5730\u7ba1\u7406\u8def\u7531\u3002\u8fd8\u5305\u62ec\u5982\u4f55\u8fdb\u884c\u8f93\u5165\u6570\u636e\u6821\u9a8c\u4ee5\u53ca\u4f7f\u7528\u7edf\u4e00\u7684\u540e\u7f6e\u4e2d\u95f4\u4ef6\u8fdb\u884c\u6570\u636e\u5904\u7406\u3002"},t=void 0,l={},o=[{value:"\u8def\u7531\u65b9\u6cd5\u5b9a\u4e49",id:"\u8def\u7531\u65b9\u6cd5\u5b9a\u4e49",level:2},{value:"\u8def\u7531\u7edf\u4e00\u6ce8\u518c",id:"\u8def\u7531\u7edf\u4e00\u6ce8\u518c",level:2},{value:"<code>Group.Bind</code> \u65b9\u6cd5",id:"groupbind-\u65b9\u6cd5",level:3},{value:"<code>BindHandler</code> \u65b9\u6cd5",id:"bindhandler-\u65b9\u6cd5",level:3},{value:"\u89c4\u8303\u53c2\u6570\u7ed3\u6784",id:"\u89c4\u8303\u53c2\u6570\u7ed3\u6784",level:2},{value:"\u8f93\u5165\u6570\u636e\u6821\u9a8c",id:"\u8f93\u5165\u6570\u636e\u6821\u9a8c",level:2},{value:"\u7edf\u4e00\u8fd4\u56de\u4e2d\u95f4\u4ef6",id:"\u7edf\u4e00\u8fd4\u56de\u4e2d\u95f4\u4ef6",level:2},{value:"\u6269\u5c55\u4ecb\u7ecd",id:"\u6269\u5c55\u4ecb\u7ecd",level:2},{value:"<code>OpenAPIv3</code> \u534f\u8bae",id:"openapiv3-\u534f\u8bae",level:3},{value:"<code>Ctx</code> \u4e2d\u7684 <code>Request</code> \u5bf9\u8c61",id:"ctx-\u4e2d\u7684-request-\u5bf9\u8c61",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u8def\u7531\u65b9\u6cd5\u5b9a\u4e49",children:"\u8def\u7531\u65b9\u6cd5\u5b9a\u4e49"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u8def\u7531\u65b9\u6cd5\u5b9a\u4e49\u4f7f\u7528\u56fa\u5b9a\u7684\u683c\u5f0f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func Handler(ctx context.Context, req *Request) (res *Response, err error)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4e2d\u8f93\u5165\u53c2\u6570\u548c\u8f93\u51fa\u53c2\u6570\u90fd\u662f\u4e24\u4e2a\uff0c\u5e76\u4e14\u90fd\u662f\u5fc5\u987b\u7684\u4e00\u4e2a\u90fd\u4e0d\u80fd\u5c11\u3002\u7b80\u5355\u4ecb\u7ecd\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(n.th,{children:"\u6ce8\u610f\u4e8b\u9879"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ctx context.Context"})}),(0,s.jsx)(n.td,{children:"\u4e0a\u4e0b\u6587"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"Server"})," \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u4ece\u8bf7\u6c42\u4e2d\u83b7\u53d6\u5e76\u4f20\u9012\u7ed9\u63a5\u53e3\u65b9\u6cd5"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"req *Request"})}),(0,s.jsx)(n.td,{children:"\u8bf7\u6c42\u5bf9\u8c61"}),(0,s.jsx)(n.td,{children:"\u5c31\u7b97\u6ca1\u6709\u63a5\u6536\u53c2\u6570\u4e5f\u8981\u5b9a\u4e49\uff0c\u56e0\u4e3a\u8bf7\u6c42\u7ed3\u6784\u4f53\u4e2d\u4e0d\u4ec5\u4ec5\u5305\u542b\u8bf7\u6c42\u53c2\u6570\u7684\u5b9a\u4e49\uff0c\u4e5f\u5305\u542b\u4e86\u63a5\u53e3\u7684\u8bf7\u6c42\u5b9a\u4e49\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"res *Response"})}),(0,s.jsx)(n.td,{children:"\u8fd4\u56de\u5bf9\u8c61"}),(0,s.jsx)(n.td,{children:"\u5c31\u7b97\u6ca1\u6709\u8fd4\u56de\u53c2\u6570\u4e5f\u8981\u5b9a\u4e49\uff0c\u56e0\u4e3a\u8fd4\u56de\u7ed3\u6784\u4f53\u4e2d\u4e0d\u4ec5\u4ec5\u5305\u542b\u8fd4\u56de\u53c2\u6570\u7684\u5b9a\u4e49\uff0c\u4e5f\u53ef\u4ee5\u5305\u542b\u63a5\u53e3\u8fd4\u56de\u5b9a\u4e49\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"err error"})}),(0,s.jsx)(n.td,{children:"\u9519\u8bef\u5bf9\u8c61"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"Server"})," \u901a\u8fc7\u8be5\u53c2\u6570\u5224\u65ad\u63a5\u53e3\u6267\u884c\u6210\u529f\u6216\u5931\u8d25\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8def\u7531\u7edf\u4e00\u6ce8\u518c",children:"\u8def\u7531\u7edf\u4e00\u6ce8\u518c"}),"\n",(0,s.jsxs)(n.h3,{id:"groupbind-\u65b9\u6cd5",children:[(0,s.jsx)(n.code,{children:"Group.Bind"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u5bf9\u8c61\u5316\u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u6240\u6709\u8def\u7531\u65b9\u6cd5\uff0c\u5e76\u901a\u8fc7 ",(0,s.jsx)(n.strong,{children:"\u5206\u7ec4\u8def\u7531"})," \u7684 ",(0,s.jsx)(n.code,{children:"Bind"})," \u65b9\u6cd5\u6267\u884c\u7edf\u4e00\u6ce8\u518c\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u89c4\u8303\u5316\u8def\u7531\u65b9\u5f0f\u4e0b\uff0c\u8def\u7531\u5730\u5740\u4ee5\u53ca\u8bf7\u6c42\u65b9\u5f0f\u5c06\u7531\u8bf7\u6c42\u7ed3\u6784\u4f53\u5728 ",(0,s.jsx)(n.code,{children:"g.Meta"})," \u5143\u6570\u636e\u5bf9\u8c61\u4e2d\u901a\u8fc7\u6807\u7b7e\u5b9a\u4e49\uff0c\u901a\u8fc7\u5206\u7ec4\u8def\u7531\u53ef\u4ee5\u5b9a\u4e49\u5206\u7ec4\u4e0b\u7684\u6240\u6709\u8def\u7531\u524d\u7f00\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(226200).A+"",width:"1792",height:"1035"})}),"\n",(0,s.jsxs)(n.h3,{id:"bindhandler-\u65b9\u6cd5",children:[(0,s.jsx)(n.code,{children:"BindHandler"})," \u65b9\u6cd5"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u57fa\u7840\u7684 ",(0,s.jsx)(n.code,{children:"BindHandler"})," \u65b9\u6cd5\u6765\u6ce8\u518c\u89c4\u8303\u8def\u7531\uff0c\u4f46\u662f\u8be5\u65b9\u6cd5\u53ea\u80fd\u6ce8\u518c\u4e00\u4e2a\u8def\u7531\u51fd\u6570\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'s := g.Server()\ns.BindHandler("/user/{uid}", func(ctx context.Context, req *SaveReq) (res *SaveRes, err error) {\n    // ...\n})\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u89c4\u8303\u53c2\u6570\u7ed3\u6784",children:"\u89c4\u8303\u53c2\u6570\u7ed3\u6784"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u89c4\u8303\u5316\u8def\u7531\u6ce8\u518c\u4e2d\uff0c\u975e\u5e38\u91cd\u8981\u7684\u662f\u8bf7\u6c42/\u8fd4\u56de\u53c2\u6570\u7ed3\u6784\u4f53\u7684\u5b9a\u4e49\uff0c\u5728\u8be5\u7ed3\u6784\u4f53\u4e0d\u4ec5\u4ec5\u5305\u542b\u4e86\u8f93\u5165\u53c2\u6570\u7684\u5b9a\u4e49\uff0c\u4e5f\u5305\u542b\u4e86\u63a5\u53e3\u7684\u5b9a\u4e49\uff0c\u7279\u522b\u662f\u8def\u7531\u5730\u5740\u3001\u8bf7\u6c42\u65b9\u6cd5\u3001\u63a5\u53e3\u63cf\u8ff0\u7b49\u4fe1\u606f\u3002\u901a\u8fc7\u7ed3\u6784\u4f53\u65b9\u5f0f\u7684\u6570\u636e\u7ed3\u6784\u53c2\u6570\u7ef4\u62a4\uff0c\u66f4\u6709\u5229\u4e8e\u66f4\u4e30\u5bcc\u7684\u63a5\u53e3\u80fd\u529b\u6269\u5c55\u3001\u56e2\u961f\u95f4\u7684\u63a5\u53e3\u4ea4\u4e92\u3001\u957f\u671f\u7684\u63a5\u53e3\u7ef4\u62a4\u3001\u81ea\u52a8\u5316\u7684\u63a5\u53e3\u6587\u6863\u751f\u6210\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4fdd\u8bc1\u547d\u540d\u89c4\u8303\u5316\uff0c\u8f93\u5165\u6570\u636e\u7ed3\u6784\u4ee5",(0,s.jsx)(n.code,{children:"XxxReq"}),"\u65b9\u5f0f\u547d\u540d\uff0c\u8f93\u51fa\u6570\u636e\u7ed3\u6784\u4ee5",(0,s.jsx)(n.code,{children:"XxxRes"}),"\u65b9\u5f0f\u547d\u540d\u3002\u5373\u4fbf\u8f93\u5165\u6216\u8005\u8f93\u51fa\u53c2\u6570\u4e3a\u7a7a\uff0c\u4e5f\u9700\u8981\u5b9a\u4e49\u76f8\u5e94\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u6837\u7684\u76ee\u7684\u4e00\u4e2a\u662f\u4fbf\u4e8e\u540e\u7eed\u6269\u5c55\uff0c\u53e6\u4e00\u4e2a\u662f\u4fbf\u4e8e\u63a5\u53e3\u4fe1\u606f\u7684\u7ba1\u7406\u3002\u5173\u4e8e\u7ed3\u6784\u4f53\u4e2d\u6d89\u53ca\u5230 ",(0,s.jsx)(n.code,{children:"OpenAPIv3"})," \u534f\u8bae\u7684\u6807\u7b7e\u4ecb\u7ecd\u8bf7\u67e5\u770b\u540e\u7eed\u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u8bf7\u6c42\u53c2\u6570\u81ea\u52a8\u8f6c\u6362\u5230\u8bf7\u6c42\u6570\u636e\u7ed3\u6784\uff0c\u5b57\u6bb5\u6620\u5c04\u8f6c\u6362\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u4e5f\u4f1a\u81ea\u52a8\u5ffd\u7565\u7279\u6b8a\u5b57\u7b26\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"",children:(0,s.jsx)(n.img,{src:r(820257).A+"",width:"1792",height:"1035"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8f93\u5165\u6570\u636e\u6821\u9a8c",children:"\u8f93\u5165\u6570\u636e\u6821\u9a8c"}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6c42\u7ed3\u6784\u4f53\u5728\u8fdb\u5165 ",(0,s.jsx)(n.code,{children:"API"})," \u63a5\u53e3\u6267\u884c\u524d\u5c06\u4f1a\u88ab\u81ea\u52a8\u6267\u884c\u6821\u9a8c\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u6761\u89c4\u5219\u6821\u9a8c\u5931\u8d25\uff0c\u90a3\u4e48\u5c06\u7ec8\u6b62\u540e\u7eed\u89c4\u5219\u7684\u6821\u9a8c\uff08\u81ea\u52a8\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"bail"})," \u6821\u9a8c\u4fee\u9970\u89c4\u5219\uff09\u3002\u6821\u9a8c\u529f\u80fd\u4f7f\u7528\u7684\u662f\u6846\u67b6\u7edf\u4e00\u7684\u6821\u9a8c\u7ec4\u4ef6\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a ",(0,s.jsx)(n.a,{href:"/en/docs/core/gvalid",children:"\u6570\u636e\u6821\u9a8c"})]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u9700\u8981\u7279\u522b\u6ce8\u610f\uff1a\u5982\u679c\u53c2\u6570\u6821\u9a8c\u5b58\u5728\u591a\u6761\u6821\u9a8c\u89c4\u5219\uff0c\u5e76\u4e14\u89c4\u5219\u4e2d\u5b58\u5728 ",(0,s.jsx)(n.code,{children:"required*"})," \u89c4\u5219\u65f6\uff0c\u90a3\u4e48\u5efa\u8bae\u5c06 ",(0,s.jsx)(n.code,{children:"required*"})," \u6821\u9a8c\u89c4\u5219\u653e\u7f6e\u4e8e\u6240\u6709\u89c4\u5219\u4e4b\u524d\uff0c\u5426\u5219\u89c4\u8303\u8def\u7531\u4e2d\u5185\u7f6e\u542f\u7528\u7684 ",(0,s.jsx)(n.code,{children:"bail"})," \u6821\u9a8c\u89c4\u5219\u7684\u7279\u6027\uff08\u6821\u9a8c\u5931\u8d25\u5373\u505c\u6b62\u540e\u7eed\u6821\u9a8c\uff09\u6709\u53ef\u80fd\u4f1a\u5f15\u8d77\u540e\u7eed\u89c4\u5219\u7684 ",(0,s.jsx)(n.code,{children:"required*"})," \u89c4\u5219\u4e0d\u751f\u6548\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u7edf\u4e00\u8fd4\u56de\u4e2d\u95f4\u4ef6",children:"\u7edf\u4e00\u8fd4\u56de\u4e2d\u95f4\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u53e3\u7684\u6570\u636e\u8fd4\u56de\u5904\u7406\u9700\u8981\u8bbe\u7f6e ",(0,s.jsx)(n.strong,{children:"\u7edf\u4e00\u7684\u540e\u7f6e\u4e2d\u95f4\u4ef6"}),"\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Server"})," \u9ed8\u8ba4\u63d0\u4f9b\u7684\u6570\u636e\u8fd4\u56de\u4e2d\u95f4\u4ef6\u3002\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u65f6\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.code,{children:"Server"})," \u9ed8\u8ba4\u63d0\u4f9b\u7684\u4e2d\u95f4\u4ef6 ",(0,s.jsx)(n.code,{children:"MiddlewareHandlerResponse"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u5728\u81ea\u5b9a\u4e49\u8fd4\u56de\u4e2d\u95f4\u4ef6\u65f6\u4e00\u4e2a\u91cd\u8981\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// GetHandlerResponse retrieves and returns the handler response object and its error.\nfunc (r *Request) GetHandlerResponse() interface{}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u540e\u7f6e\u4e2d\u95f4\u4ef6\u6267\u884c\u65f6\u901a\u8fc7\u8bf7\u6c42\u5bf9\u8c61\u7684 ",(0,s.jsx)(n.code,{children:"GetHandlerResponse"})," \u65b9\u6cd5\u83b7\u53d6\u5f53\u524d\u4e1a\u52a1\u6267\u884c\u7684\u7ed3\u679c\uff0c\u5e76\u6839\u636e\u9700\u8981\u505a\u76f8\u5e94\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6269\u5c55\u4ecb\u7ecd",children:"\u6269\u5c55\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.h3,{id:"openapiv3-\u534f\u8bae",children:[(0,s.jsx)(n.code,{children:"OpenAPIv3"})," \u534f\u8bae"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Server"})," \u7ec4\u4ef6\u81ea\u52a8\u751f\u6210\u7684\u63a5\u53e3\u6587\u6863\u4f7f\u7528\u7684\u662f\u6700\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"OpenAPIv3"})," \u534f\u8bae\u3002\u66f4\u591a\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(n.a,{href:"/en/docs/web/api-document",children:"\u63a5\u53e3\u6587\u6863"})]}),"\n",(0,s.jsxs)(n.h3,{id:"ctx-\u4e2d\u7684-request-\u5bf9\u8c61",children:[(0,s.jsx)(n.code,{children:"Ctx"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"RequestFromCtx/g.RequestFromCtx"})," \u65b9\u6cd5\u4ece ",(0,s.jsx)(n.code,{children:"ctx"})," \u4e2d\u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u65b9\u6cd5\u5b9a\u4e49\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func RequestFromCtx(ctx context.Context) *Request\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func (c *cHello) Hello(ctx context.Context, req *apiv1.HelloReq) (res *apiv1.HelloRes, err error) {\n    g.RequestFromCtx(ctx).Response.Writeln("Hello World!")\n    return\n}\n'})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},820257:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/43ccaf0d2e204185da41deddc05246ff-79753e50647ce7f5027630d04d86b026.png"},226200:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/9ecfa0a73fc10e3810e7ff80ddbedc92-fcb511bb0d7b921a24514a0e8d742916.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var d=r(296540);const s={},i=d.createContext(s);function c(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);