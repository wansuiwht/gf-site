"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[83717],{940322:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","title":"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","description":"Struct \u8f6c\u6362","source":"@site/versioned_docs/version-2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362.md","sourceDirName":"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson","slug":"/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","permalink":"/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":2,"frontMatter":{"title":"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362","sidebar_position":2,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u5c42\u7ea7\u8bbf\u95ee","permalink":"/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u5c42\u7ea7\u8bbf\u95ee"},"next":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539","permalink":"/2.3.x/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539"}}');var s=n(474848),o=n(28453);const i={title:"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362",sidebar_position:2,hide_title:!0},c=void 0,d={},u=[{value:"<code>Struct</code> \u8f6c\u6362",id:"struct-\u8f6c\u6362",level:2}];function a(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h2,{id:"struct-\u8f6c\u6362",children:[(0,s.jsx)(e.code,{children:"Struct"})," \u8f6c\u6362"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Struct"})," \u65b9\u6cd5\u7528\u4e8e\u5c06\u6574\u4e2a ",(0,s.jsx)(e.code,{children:"Json"})," \u5305\u542b\u7684\u6570\u636e\u5185\u5bb9\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u683c\u5f0f\u6216\u8005\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'data :=\n    `\n{\n    "count" : 1,\n    "array" : ["John", "Ming"]\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    type Users struct {\n        Count int\n        Array []string\n    }\n    users := new(Users)\n    if err := j.Scan(users); err != nil {\n        panic(err)\n    }\n    fmt.Printf(`%+v`, users)\n}\n\n// Output:\n// &{Count:1 Array:[John Ming]}\n'})})]})}function l(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var r=n(296540);const s={},o=r.createContext(s);function i(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);