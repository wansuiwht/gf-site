"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[86832],{477533:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528Hook\u7279\u6027\uff0c\u4e3aModel\u5bf9\u8c61\u7ed1\u5b9aCURD\u94a9\u5b50\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u589e\u5f3a\u548c\u4f18\u5316\u3002\u6587\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u76f8\u5173\u5b9a\u4e49\u3001Hook\u6ce8\u518c\u65b9\u6cd5\u4ee5\u53ca\u4f7f\u7528\u793a\u4f8b\uff0c\u901a\u8fc7\u6302\u94a9\u51fd\u6570\u5bf9\u67e5\u8be2\u64cd\u4f5c\u8fdb\u884c\u4e86\u6f14\u793a\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c","slug":"/docs/core/gdb-chaining-hook","permalink":"/en/docs/core/gdb-chaining-hook","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731511511000,"sidebarPosition":13,"frontMatter":{"slug":"/docs/core/gdb-chaining-hook","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","sidebar_position":13,"hide_title":true,"keywords":["GoFrame\u6846\u67b6","ORM\u94fe\u5f0f\u64cd\u4f5c","Hook\u7279\u6027","CURD\u94a9\u5b50","\u6a21\u578b","\u6570\u636e\u5e93\u67e5\u8be2","gdb","Go\u8bed\u8a00","\u7f16\u7a0b\u793a\u4f8b","\u4ee3\u7801\u4f18\u5316"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528Hook\u7279\u6027\uff0c\u4e3aModel\u5bf9\u8c61\u7ed1\u5b9aCURD\u94a9\u5b50\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u589e\u5f3a\u548c\u4f18\u5316\u3002\u6587\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u76f8\u5173\u5b9a\u4e49\u3001Hook\u6ce8\u518c\u65b9\u6cd5\u4ee5\u53ca\u4f7f\u7528\u793a\u4f8b\uff0c\u901a\u8fc7\u6302\u94a9\u51fd\u6570\u5bf9\u67e5\u8be2\u64cd\u4f5c\u8fdb\u884c\u4e86\u6f14\u793a\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u5e93\u5207\u6362","permalink":"/en/docs/core/gdb-chaining-schema"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027","permalink":"/en/docs/core/gdb-chaining-handler"}}');var r=n(474848),c=n(28453);const s={slug:"/docs/core/gdb-chaining-hook",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027",sidebar_position:13,hide_title:!0,keywords:["GoFrame\u6846\u67b6","ORM\u94fe\u5f0f\u64cd\u4f5c","Hook\u7279\u6027","CURD\u94a9\u5b50","\u6a21\u578b","\u6570\u636e\u5e93\u67e5\u8be2","gdb","Go\u8bed\u8a00","\u7f16\u7a0b\u793a\u4f8b","\u4ee3\u7801\u4f18\u5316"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528Hook\u7279\u6027\uff0c\u4e3aModel\u5bf9\u8c61\u7ed1\u5b9aCURD\u94a9\u5b50\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u589e\u5f3a\u548c\u4f18\u5316\u3002\u6587\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u76f8\u5173\u5b9a\u4e49\u3001Hook\u6ce8\u518c\u65b9\u6cd5\u4ee5\u53ca\u4f7f\u7528\u793a\u4f8b\uff0c\u901a\u8fc7\u6302\u94a9\u51fd\u6570\u5bf9\u67e5\u8be2\u64cd\u4f5c\u8fdb\u884c\u4e86\u6f14\u793a\u3002"},d=void 0,i={},l=[{value:"\u76f8\u5173\u5b9a\u4e49",id:"\u76f8\u5173\u5b9a\u4e49",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Hook"})," \u7279\u6027\u5141\u8bb8\u6211\u4eec\u5bf9\u7279\u6027\u7684 ",(0,r.jsx)(o.code,{children:"Model"})," \u7ed1\u5b9a ",(0,r.jsx)(o.code,{children:"CURD"})," \u94a9\u5b50\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(o.h2,{id:"\u76f8\u5173\u5b9a\u4e49",children:"\u76f8\u5173\u5b9a\u4e49"}),"\n",(0,r.jsxs)(o.p,{children:["\u76f8\u5173 ",(0,r.jsx)(o.code,{children:"Hook"})," \u51fd\u6570\uff1a"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:"type (\n    HookFuncSelect func(ctx context.Context, in *HookSelectInput) (result Result, err error)\n    HookFuncInsert func(ctx context.Context, in *HookInsertInput) (result sql.Result, err error)\n    HookFuncUpdate func(ctx context.Context, in *HookUpdateInput) (result sql.Result, err error)\n    HookFuncDelete func(ctx context.Context, in *HookDeleteInput) (result sql.Result, err error)\n)\n\n// HookHandler manages all supported hook functions for Model.\ntype HookHandler struct {\n    Select HookFuncSelect\n    Insert HookFuncInsert\n    Update HookFuncUpdate\n    Delete HookFuncDelete\n}\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"Hook"})," \u6ce8\u518c\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:"// Hook sets the hook functions for current model.\nfunc (m *Model) Hook(hook HookHandler) *Model\n"})}),"\n",(0,r.jsx)(o.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsxs)(o.p,{children:["\u67e5\u8be2 ",(0,r.jsx)(o.code,{children:"birth_day"})," \u5b57\u6bb5\u65f6\uff0c\u540c\u65f6\u8ba1\u7b97\u51fa\u5f53\u524d\u7528\u6237\u7684\u5e74\u9f84\uff1a"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-go",children:'// Hook function definition.\nvar hook = gdb.HookHandler{\n    Select: func(ctx context.Context, in *gdb.HookSelectInput) (result gdb.Result, err error) {\n        result, err = in.Next(ctx)\n        if err != nil {\n            return\n        }\n        for i, record := range result {\n            if !record["birth_day"].IsEmpty() {\n                age := gtime.Now().Sub(record["birth_day"].GTime()).Hours() / 24 / 365\n                record["age"] = gvar.New(age)\n            }\n            result[i] = record\n        }\n        return\n    },\n}\n// It registers hook function, creates and returns a new `model`.\nmodel := g.Model("user").Hook(hook)\n\n// The hook function takes effect on each ORM operation when using the `model`.\nall, err := model.Where("status", "online").OrderAsc(`id`).All()\n'})})]})}function u(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>d});var t=n(296540);const r={},c=t.createContext(r);function s(e){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);