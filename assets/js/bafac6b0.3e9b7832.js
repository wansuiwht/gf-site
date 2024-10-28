"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[14802],{176170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var o=n(474848),c=n(28453);const r={title:"\u5e38\u89c1\u95ee\u9898",sidebar_position:13},s=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/\u5e38\u89c1\u95ee\u9898",title:"\u5e38\u89c1\u95ee\u9898",description:"\u670d\u52a1\u7aef\u9891\u7e41\u51fa\u73b0 context cancel \u9519\u8bef",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/13-\u5e38\u89c1\u95ee\u9898.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u5e38\u89c1\u95ee\u9898",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5e38\u89c1\u95ee\u9898",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"\u5e38\u89c1\u95ee\u9898",sidebar_position:13},sidebar:"hiddenSidebar",previous:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6027\u80fd\u6d4b\u8bd5"},next:{title:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1",permalink:"/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/"}},i={},l=[{value:"\u670d\u52a1\u7aef\u9891\u7e41\u51fa\u73b0 <code>context cancel</code> \u9519\u8bef",id:"\u670d\u52a1\u7aef\u9891\u7e41\u51fa\u73b0-context-cancel-\u9519\u8bef",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"\u670d\u52a1\u7aef\u9891\u7e41\u51fa\u73b0-context-cancel-\u9519\u8bef",children:["\u670d\u52a1\u7aef\u9891\u7e41\u51fa\u73b0 ",(0,o.jsx)(t.code,{children:"context cancel"})," \u9519\u8bef"]}),"\n",(0,o.jsxs)(t.p,{children:["\u5f53 ",(0,o.jsx)(t.strong,{children:"\u5ba2\u6237\u7aef\u4e3b\u52a8\u53d6\u6d88\u8bf7\u6c42"}),"(\u4f8b\u5982\u4e3b\u52a8\u53d6\u6d88\uff0c\u6216\u8005\u8bf7\u6c42\u8d85\u8fc7\u5ba2\u6237\u7aef\u8bbe\u7f6e\u7684\u65f6\u95f4)\u540e\uff0c\u7279\u522b\u662f\u6d4f\u89c8\u5668\u8bbf\u95ee\u65f6\u76f4\u63a5\u53d6\u6d88\u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u53ef\u80fd\u4f1a\u9047\u5230 ",(0,o.jsx)(t.code,{children:"context canceled"})," \u7684\u9519\u8bef\u3002\u8fd9\u4e2a\u5c5e\u4e8e\u6b63\u5e38\u73b0\u8c61\uff0c ",(0,o.jsx)(t.code,{children:"Golang"})," \u6807\u51c6\u5e93\u7684 ",(0,o.jsx)(t.code,{children:"http server"})," \u8bbe\u8ba1\u4ea6\u5982\u6b64\u3002\u5f53\u5ba2\u6237\u7aef\u4e0d\u518d\u9700\u8981\u8fd9\u4e2a\u8bf7\u6c42\u7684\u7ed3\u679c\u65f6\u4f1a\u53d6\u6d88\u8bf7\u6c42\uff0c\u8fd9\u65f6\u670d\u52a1\u7aef\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u4e5f\u6ca1\u6709\u4e86\u610f\u4e49\u3002\u5982\u679c\u4ecb\u610f\u8fd9\u4e2a\u9519\u8bef\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u4e2d\u95f4\u4ef6\u589e\u52a0 ",(0,o.jsx)(t.code,{children:"NeverDoneCtx"})," \u7684\u5904\u7406\u903b\u8f91\uff0c\u8fd9\u4e2a\u65f6\u5019\u670d\u52a1\u7aef\u4f1a\u5ffd\u7565\u5ba2\u6237\u7aef\u7684\u53d6\u6d88\u8bf7\u6c42\u5e76\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// MiddlewareNeverDoneCtx sets the context never done for current process.\nfunc MiddlewareNeverDoneCtx(r *Request) {\n\tr.SetCtx(r.GetNeverDoneCtx())\n\tr.Middleware.Next()\n}\n"})})]})}function x(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var o=n(296540);const c={},r=o.createContext(c);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);