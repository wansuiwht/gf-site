"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12382],{667967:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(474848),o=i(28453);const r={title:"init \u9879\u76ee\u521b\u5efa",sidebar_position:2},s=void 0,c={id:"\u5f00\u53d1\u5de5\u5177/init \u9879\u76ee\u521b\u5efa",title:"init \u9879\u76ee\u521b\u5efa",description:"\u4f7f\u7528\u65b9\u5f0f\uff1a",source:"@site/versioned_docs/version-1.15.x/0-\u5f00\u53d1\u5de5\u5177/2-init \u9879\u76ee\u521b\u5efa.md",sourceDirName:"0-\u5f00\u53d1\u5de5\u5177",slug:"/\u5f00\u53d1\u5de5\u5177/init \u9879\u76ee\u521b\u5efa",permalink:"/gf-site/docs/1.15.x/\u5f00\u53d1\u5de5\u5177/init \u9879\u76ee\u521b\u5efa",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/0-\u5f00\u53d1\u5de5\u5177/2-init \u9879\u76ee\u521b\u5efa.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:2,frontMatter:{title:"init \u9879\u76ee\u521b\u5efa",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"version \u7248\u672c\u67e5\u770b",permalink:"/gf-site/docs/1.15.x/\u5f00\u53d1\u5de5\u5177/version \u7248\u672c\u67e5\u770b"},next:{title:"build \u4ea4\u53c9\u7f16\u8bd1",permalink:"/gf-site/docs/1.15.x/\u5f00\u53d1\u5de5\u5177/build \u4ea4\u53c9\u7f16\u8bd1"}},d={},l=[];function a(n){const e={code:"code",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"$ gf init -h\nUSAGE\n    gf init NAME\n\nARGUMENT\n    NAME  name for the project. It will create a folder with NAME in current directory.\n          The NAME will also be the module name for the project.\n\nEXAMPLES\n    gf init my-app\n    gf init my-project-name\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"init"})," \u547d\u4ee4\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u4e00\u4e2a\u793a\u4f8b\u7684 ",(0,t.jsx)(e.code,{children:"GF"})," \u7a7a\u6846\u67b6\u9879\u76ee\uff0c\u5e76\u53ef\u7ed9\u5b9a\u9879\u76ee\u540d\u79f0\u53c2\u6570\u3002\u751f\u6210\u7684\u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u4ec5\u4f9b\u53c2\u8003\uff0c\u6839\u636e\u4e1a\u52a1\u9879\u76ee\u5177\u4f53\u60c5\u51b5\u53ef\u81ea\u884c\u8c03\u6574\u3002\u751f\u6210\u7684\u76ee\u5f55\u7ed3\u6784\u8bf7\u53c2\u8003 \u65b0\u5efa\u9879\u76ee \u7ae0\u8282\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"GF"})," \u6846\u67b6\u5f00\u53d1\u63a8\u8350\u7edf\u4e00\u4f7f\u7528\u5b98\u65b9\u7684 ",(0,t.jsx)(e.code,{children:"go module"})," \u7279\u6027\u8fdb\u884c\u4f9d\u8d56\u5305\u7ba1\u7406\uff0c\u56e0\u6b64\u7a7a\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u4e5f\u6709\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"go.mod"})," \u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"1\u3001\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521d\u59cb\u5316\u9879\u76ee"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"$ gf init .\ninitializing...\ninitialization done!\nyou can now run 'gf run main.go' to start your journey, enjoy!\n"})}),"\n",(0,t.jsxs)(e.p,{children:["2\u3001\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,t.jsx)(e.code,{children:"myapp"})," \u7684\u9879\u76ee"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"$ gf init myapp\ninitializing...\ninitialization done!\nyou can now run 'gf run main.go' to start your journey, enjoy!\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var t=i(296540);const o={},r=t.createContext(o);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);