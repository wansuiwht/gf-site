"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[51019],{77456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(74848),r=n(28453);const s={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",sidebar_position:13,hide_title:!0},c=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",description:"Hook \u7279\u6027\u5141\u8bb8\u6211\u4eec\u5bf9\u7279\u6027\u7684 Model \u7ed1\u5b9a CURD \u94a9\u5b50\u5904\u7406\u3002",source:"@site/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/13-ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",permalink:"/gf-site/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/13-ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:13,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",sidebar_position:13,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362",permalink:"/gf-site/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362"},next:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",permalink:"/gf-site/docs/2.7.x/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027"}},d={},l=[{value:"\u76f8\u5173\u5b9a\u4e49",id:"\u76f8\u5173\u5b9a\u4e49",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Hook"})," \u7279\u6027\u5141\u8bb8\u6211\u4eec\u5bf9\u7279\u6027\u7684 ",(0,o.jsx)(t.code,{children:"Model"})," \u7ed1\u5b9a ",(0,o.jsx)(t.code,{children:"CURD"})," \u94a9\u5b50\u5904\u7406\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u76f8\u5173\u5b9a\u4e49",children:"\u76f8\u5173\u5b9a\u4e49"}),"\n",(0,o.jsxs)(t.p,{children:["\u76f8\u5173 ",(0,o.jsx)(t.code,{children:"Hook"})," \u51fd\u6570\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"type (\n\tHookFuncSelect func(ctx context.Context, in *HookSelectInput) (result Result, err error)\n\tHookFuncInsert func(ctx context.Context, in *HookInsertInput) (result sql.Result, err error)\n\tHookFuncUpdate func(ctx context.Context, in *HookUpdateInput) (result sql.Result, err error)\n\tHookFuncDelete func(ctx context.Context, in *HookDeleteInput) (result sql.Result, err error)\n)\n\n// HookHandler manages all supported hook functions for Model.\ntype HookHandler struct {\n\tSelect HookFuncSelect\n\tInsert HookFuncInsert\n\tUpdate HookFuncUpdate\n\tDelete HookFuncDelete\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Hook"})," \u6ce8\u518c\u65b9\u6cd5\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"// Hook sets the hook functions for current model.\nfunc (m *Model) Hook(hook HookHandler) *Model\n"})}),"\n",(0,o.jsx)(t.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,o.jsxs)(t.p,{children:["\u67e5\u8be2 ",(0,o.jsx)(t.code,{children:"birth_day"})," \u5b57\u6bb5\u65f6\uff0c\u540c\u65f6\u8ba1\u7b97\u51fa\u5f53\u524d\u7528\u6237\u7684\u5e74\u9f84\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'// Hook function definition.\nvar hook = gdb.HookHandler{\n\tSelect: func(ctx context.Context, in *gdb.HookSelectInput) (result gdb.Result, err error) {\n\t\tresult, err = in.Next(ctx)\n\t\tif err != nil {\n\t\t\treturn\n\t\t}\n\t\tfor i, record := range result {\n\t\t\tif !record["birth_day"].IsEmpty() {\n\t\t\t\tage := gtime.Now().Sub(record["birth_day"].GTime()).Hours() / 24 / 365\n\t\t\t\trecord["age"] = gvar.New(age)\n\t\t\t}\n\t\t\tresult[i] = record\n\t\t}\n\t\treturn\n\t},\n}\n// It registers hook function, creates and returns a new `model`.\nmodel := g.Model("user").Hook(hook)\n\n// The hook function takes effect on each ORM operation when using the `model`.\nall, err := model.Where("status", "online").OrderAsc(`id`).All()\n'})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);