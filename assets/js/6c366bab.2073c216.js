"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[14144],{180808:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u5e38\u89c1\u95ee\u9898","title":"\u6570\u636e\u6821\u9a8c-\u5e38\u89c1\u95ee\u9898","description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6570\u636e\u6821\u9a8c\u65f6\uff0cStruct\u9ed8\u8ba4\u503c\u5bf9required\u89c4\u5219\u7684\u5f71\u54cd\u53ca\u5176\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u4f7f\u7528\u6307\u9488\u7c7b\u578b\u7ed5\u8fc7\u9ed8\u8ba4\u503c\u5f71\u54cd\u3001\u7ec4\u5408\u6821\u9a8c\u89c4\u5219\u4ee5\u53caAssoc\u8054\u5408\u6821\u9a8c\u65b9\u6cd5\uff0c\u4ee5\u786e\u4fdd\u6821\u9a8c\u51c6\u786e\u6027\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u5e38\u89c1\u95ee\u9898.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c","slug":"/docs/core/gvalid-faq","permalink":"/docs/core/gvalid-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u5e38\u89c1\u95ee\u9898.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/core/gvalid-faq","title":"\u6570\u636e\u6821\u9a8c-\u5e38\u89c1\u95ee\u9898","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u6821\u9a8c","Struct\u9ed8\u8ba4\u503c","required\u89c4\u5219","\u6307\u9488\u7c7b\u578b","\u7ec4\u5408\u6821\u9a8c\u89c4\u5219","Assoc\u8054\u5408\u6821\u9a8c","API\u8f93\u5165\u8f93\u51fa","Server"],"description":"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6570\u636e\u6821\u9a8c\u65f6\uff0cStruct\u9ed8\u8ba4\u503c\u5bf9required\u89c4\u5219\u7684\u5f71\u54cd\u53ca\u5176\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u4f7f\u7528\u6307\u9488\u7c7b\u578b\u7ed5\u8fc7\u9ed8\u8ba4\u503c\u5f71\u54cd\u3001\u7ec4\u5408\u6821\u9a8c\u89c4\u5219\u4ee5\u53caAssoc\u8054\u5408\u6821\u9a8c\u65b9\u6cd5\uff0c\u4ee5\u786e\u4fdd\u6821\u9a8c\u51c6\u786e\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u6821\u9a8c-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/docs/core/gvalid-funcs"},"next":{"title":"\u7c7b\u578b\u8f6c\u6362","permalink":"/docs/core/gconv"}}');var d=c(474848),o=c(28453);const t={slug:"/docs/core/gvalid-faq",title:"\u6570\u636e\u6821\u9a8c-\u5e38\u89c1\u95ee\u9898",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u6821\u9a8c","Struct\u9ed8\u8ba4\u503c","required\u89c4\u5219","\u6307\u9488\u7c7b\u578b","\u7ec4\u5408\u6821\u9a8c\u89c4\u5219","Assoc\u8054\u5408\u6821\u9a8c","API\u8f93\u5165\u8f93\u51fa","Server"],description:"\u5728\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6570\u636e\u6821\u9a8c\u65f6\uff0cStruct\u9ed8\u8ba4\u503c\u5bf9required\u89c4\u5219\u7684\u5f71\u54cd\u53ca\u5176\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u62ec\u4f7f\u7528\u6307\u9488\u7c7b\u578b\u7ed5\u8fc7\u9ed8\u8ba4\u503c\u5f71\u54cd\u3001\u7ec4\u5408\u6821\u9a8c\u89c4\u5219\u4ee5\u53caAssoc\u8054\u5408\u6821\u9a8c\u65b9\u6cd5\uff0c\u4ee5\u786e\u4fdd\u6821\u9a8c\u51c6\u786e\u6027\u3002"},n=void 0,i={},l=[{value:"<code>Struct</code> \u9ed8\u8ba4\u503c\u5bf9 <code>required</code> \u89c4\u5219\u7684\u5f71\u54cd",id:"struct-\u9ed8\u8ba4\u503c\u5bf9-required-\u89c4\u5219\u7684\u5f71\u54cd",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h2,{id:"struct-\u9ed8\u8ba4\u503c\u5bf9-required-\u89c4\u5219\u7684\u5f71\u54cd",children:[(0,d.jsx)(r.code,{children:"Struct"})," \u9ed8\u8ba4\u503c\u5bf9 ",(0,d.jsx)(r.code,{children:"required"})," \u89c4\u5219\u7684\u5f71\u54cd"]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"Struct"})," \u7684\u5c5e\u6027\u4f1a\u6709 ",(0,d.jsx)(r.code,{children:"\u9ed8\u8ba4\u503c"}),"\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u5f15\u8d77 ",(0,d.jsx)(r.code,{children:"required"})," \u89c4\u5219\u7684\u5931\u6548\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-go",children:'type User struct {\n    Name string `v:"required"`\n    Age  uint   `v:"required"`\n}\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u5728\u8be5\u7ed3\u6784\u4f53\u6821\u9a8c\u4e2d\uff0c ",(0,d.jsx)(r.code,{children:"Age"})," \u5c5e\u6027\u7684 ",(0,d.jsx)(r.code,{children:"required"})," \u6821\u9a8c\u5c06\u4f1a\u5931\u6548\uff0c\u56e0\u4e3a ",(0,d.jsx)(r.code,{children:"Age"})," \u5373\u4fbf\u6ca1\u6709\u8f93\u5165\u4e5f\u4f1a\u6709\u9ed8\u8ba4\u503c ",(0,d.jsx)(r.code,{children:"0"}),"\u3002"]}),"\n",(0,d.jsxs)(r.p,{children:["\u8fd9\u91cc\u6709 ",(0,d.jsx)(r.strong,{children:"\u4e09\u79cd"})," \u89e3\u51b3\u65b9\u6848\uff1a"]}),"\n",(0,d.jsxs)(r.ol,{children:["\n",(0,d.jsxs)(r.li,{children:["\u5c06\u5c5e\u6027\u6539\u4e3a\u6307\u9488\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,d.jsx)(r.code,{children:"*int"}),"\u3001 ",(0,d.jsx)(r.code,{children:"*float64"}),"\u3001 ",(0,d.jsx)(r.code,{children:"*g.Var"})," \u7b49\uff0c\u901a\u8fc7\u6307\u9488\u7c7b\u578b\u9ed8\u8ba4\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"nil"})," \u7684\u7279\u70b9\u7ed5\u8fc7\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u4f7f\u7528\u7ec4\u5408\u6821\u9a8c\u89c4\u5219\u6765\u5f25\u8865\u9ed8\u8ba4\u503c\u5bf9 ",(0,d.jsx)(r.code,{children:"required"})," \u89c4\u5219\u7684\u5f71\u54cd\uff0c\u4f8b\u5982\u4ee5\u4e0a\u793a\u4f8b\u4e2d\u5c06 ",(0,d.jsx)(r.code,{children:"Age"})," \u5c5e\u6027\u7684\u6821\u9a8c\u89c4\u5219\u4fee\u6539\u4e3a ",(0,d.jsx)(r.code,{children:"required|min:1"})," \u5c06\u80fd\u8fbe\u5230\u4e1a\u52a1\u6821\u9a8c\u7684\u6548\u679c\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u4f7f\u7528 ",(0,d.jsx)(r.code,{children:"Struct"})," \u6821\u9a8c\u7684 ",(0,d.jsx)(r.code,{children:"Assoc"})," \u8054\u5408\u6821\u9a8c\u65b9\u6cd5\u8bbe\u7f6e\u8054\u5408\u6821\u9a8c\u53c2\u6570\uff0c\u5728\u6821\u9a8c ",(0,d.jsx)(r.code,{children:"Struct"})," \u7c7b\u578b\u53c2\u6570\u65f6\uff0c\u53c2\u6570\u503c\u5c06\u4ee5 ",(0,d.jsx)(r.code,{children:"Assoc"})," \u65b9\u6cd5\u4e2d\u7ed9\u5b9a\u7684\u53c2\u6570\u4e3a\u51c6\u6267\u884c\u6821\u9a8c\u3002\u5982\u679c\u4f7f\u7528\u6846\u67b6\u7684 ",(0,d.jsx)(r.code,{children:"Server"}),"\uff0c\u91c7\u7528\u7ed3\u6784\u5316\u7684 ",(0,d.jsx)(r.code,{children:"API"})," \u8f93\u5165\u8f93\u51fa\uff08 ",(0,d.jsx)(r.code,{children:"XxxReq/XxxRes"}),"\uff09\uff0c\u90a3\u4e48 ",(0,d.jsx)(r.code,{children:"Server"})," \u5c06\u4f1a\u81ea\u52a8\u8c03\u7528 ",(0,d.jsx)(r.code,{children:"Assoc"})," \u6267\u884c\u6821\u9a8c\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u62c5\u5fc3\u9ed8\u8ba4\u503c\u7684\u5f71\u54cd\u3002\u6587\u6863\u94fe\u63a5\uff1a ",(0,d.jsx)(r.a,{href:"/docs/core/gvalid-parameter-type-struct-assoc",children:"Struct\u6821\u9a8c-Assoc\u5173\u8054"})]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,r,c)=>{c.d(r,{R:()=>t,x:()=>n});var s=c(296540);const d={},o=s.createContext(d);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);