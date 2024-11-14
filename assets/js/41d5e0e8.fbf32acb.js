"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[50107],{598824:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362","title":"\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gconv.Map\u65b9\u6cd5\u5b9e\u73b0\u7c7b\u578b\u8f6c\u6362\uff0c\u5305\u62ec\u5c06\u4efb\u610fmap\u6216struct/*struct\u7c7b\u578b\u8f6c\u6362\u4e3amap[string]interface{}\u7c7b\u578b\u3002\u652f\u6301\u5c5e\u6027\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u5e76\u53ef\u901a\u8fc7MapDeep\u65b9\u6cd5\u5b9e\u73b0\u9012\u5f52\u8f6c\u6362\uff0c\u89e3\u6790\u51fa\u5d4c\u5957\u5bf9\u8c61\u7684\u8be6\u7ec6\u7ed3\u6784\uff0c\u9002\u5408\u591a\u5c42\u6b21\u6570\u636e\u5904\u7406\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362","slug":"/docs/core/gconv-map","permalink":"/docs/core/gconv-map","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7c7b\u578b\u8f6c\u6362/\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/core/gconv-map","title":"\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","\u7c7b\u578b\u8f6c\u6362","Map\u8f6c\u6362","GoFrame\u6846\u67b6","\u5c5e\u6027\u6807\u7b7e","\u9012\u5f52\u8f6c\u6362","\u81ea\u5b9a\u4e49\u6807\u7b7e","MapDeep","struct\u8f6c\u6362","gconv"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gconv.Map\u65b9\u6cd5\u5b9e\u73b0\u7c7b\u578b\u8f6c\u6362\uff0c\u5305\u62ec\u5c06\u4efb\u610fmap\u6216struct/*struct\u7c7b\u578b\u8f6c\u6362\u4e3amap[string]interface{}\u7c7b\u578b\u3002\u652f\u6301\u5c5e\u6027\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u5e76\u53ef\u901a\u8fc7MapDeep\u65b9\u6cd5\u5b9e\u73b0\u9012\u5f52\u8f6c\u6362\uff0c\u89e3\u6790\u51fa\u5d4c\u5957\u5bf9\u8c61\u7684\u8be6\u7ec6\u7ed3\u6784\uff0c\u9002\u5408\u591a\u5c42\u6b21\u6570\u636e\u5904\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7c7b\u578b\u8f6c\u6362-\u57fa\u672c\u7c7b\u578b","permalink":"/docs/core/gconv-basic"},"next":{"title":"\u7c7b\u578b\u8f6c\u6362-Struct\u8f6c\u6362","permalink":"/docs/core/gconv-struct"}}');var r=c(474848),t=c(28453);const i={slug:"/docs/core/gconv-map",title:"\u7c7b\u578b\u8f6c\u6362-Map\u8f6c\u6362",sidebar_position:1,hide_title:!0,keywords:["GoFrame","\u7c7b\u578b\u8f6c\u6362","Map\u8f6c\u6362","GoFrame\u6846\u67b6","\u5c5e\u6027\u6807\u7b7e","\u9012\u5f52\u8f6c\u6362","\u81ea\u5b9a\u4e49\u6807\u7b7e","MapDeep","struct\u8f6c\u6362","gconv"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u4e2d\u7684gconv.Map\u65b9\u6cd5\u5b9e\u73b0\u7c7b\u578b\u8f6c\u6362\uff0c\u5305\u62ec\u5c06\u4efb\u610fmap\u6216struct/*struct\u7c7b\u578b\u8f6c\u6362\u4e3amap[string]interface{}\u7c7b\u578b\u3002\u652f\u6301\u5c5e\u6027\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u5e76\u53ef\u901a\u8fc7MapDeep\u65b9\u6cd5\u5b9e\u73b0\u9012\u5f52\u8f6c\u6362\uff0c\u89e3\u6790\u51fa\u5d4c\u5957\u5bf9\u8c61\u7684\u8be6\u7ec6\u7ed3\u6784\uff0c\u9002\u5408\u591a\u5c42\u6b21\u6570\u636e\u5904\u7406\u3002"},o=void 0,a={},d=[{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u6807\u7b7e",id:"\u5c5e\u6027\u6807\u7b7e",level:2},{value:"\u81ea\u5b9a\u4e49\u6807\u7b7e",id:"\u81ea\u5b9a\u4e49\u6807\u7b7e",level:2},{value:"\u9012\u5f52\u8f6c\u6362",id:"\u9012\u5f52\u8f6c\u6362",level:2}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gconv.Map"})," \u652f\u6301\u5c06\u4efb\u610f\u7684 ",(0,r.jsx)(e.code,{children:"map"})," \u6216 ",(0,r.jsx)(e.code,{children:"struct"}),"/ ",(0,r.jsx)(e.code,{children:"*struct"})," \u7c7b\u578b\u8f6c\u6362\u4e3a\u5e38\u7528\u7684 ",(0,r.jsx)(e.code,{children:"map[string]interface{}"})," \u7c7b\u578b\u3002\u5f53\u8f6c\u6362\u53c2\u6570\u4e3a ",(0,r.jsx)(e.code,{children:"struct"}),"/ ",(0,r.jsx)(e.code,{children:"*struct"})," \u7c7b\u578b\u65f6\uff0c\u652f\u6301\u81ea\u52a8\u8bc6\u522b ",(0,r.jsx)(e.code,{children:"struct"})," \u7684 ",(0,r.jsx)(e.code,{children:"c/gconv/json"})," \u6807\u7b7e\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"Map"})," \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,r.jsx)(e.code,{children:"tags"})," \u6307\u5b9a\u81ea\u5b9a\u4e49\u7684\u8f6c\u6362\u6807\u7b7e\uff0c\u4ee5\u53ca\u591a\u4e2a\u6807\u7b7e\u89e3\u6790\u7684\u4f18\u5148\u7ea7\u3002\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u8fd4\u56de ",(0,r.jsx)(e.code,{children:"nil"}),"\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u5c5e\u6027\u6807\u7b7e\uff1a\u5f53\u8f6c\u6362 ",(0,r.jsx)(e.code,{children:"struct"}),"/ ",(0,r.jsx)(e.code,{children:"*struct"})," \u7c7b\u578b\u65f6\uff0c\u652f\u6301 ",(0,r.jsx)(e.code,{children:"c/gconv/json"})," \u5c5e\u6027\u6807\u7b7e\uff0c\u4e5f\u652f\u6301 ",(0,r.jsx)(e.code,{children:"-"})," \u53ca ",(0,r.jsx)(e.code,{children:"omitempty"})," \u6807\u7b7e\u5c5e\u6027\u3002\u5f53\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"-"})," \u6807\u7b7e\u5c5e\u6027\u65f6\uff0c\u8868\u793a\u8be5\u5c5e\u6027\u4e0d\u6267\u884c\u8f6c\u6362\uff1b\u5f53\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"omitempty"})," \u6807\u7b7e\u5c5e\u6027\u65f6\uff0c\u8868\u793a\u5f53\u5c5e\u6027\u4e3a\u7a7a\u65f6\uff08\u7a7a\u6307\u9488 ",(0,r.jsx)(e.code,{children:"nil"}),", \u6570\u5b57 ",(0,r.jsx)(e.code,{children:"0"}),", \u5b57\u7b26\u4e32 ",(0,r.jsx)(e.code,{children:'""'}),", \u7a7a\u6570\u7ec4 ",(0,r.jsx)(e.code,{children:"[]"})," \u7b49\uff09\u4e0d\u6267\u884c\u8f6c\u6362\u3002\u5177\u4f53\u8bf7\u67e5\u770b\u968f\u540e\u793a\u4f8b\u3002"]})}),"\n",(0,r.jsx)(e.p,{children:"\u5e38\u7528\u8f6c\u6362\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func Map(value interface{}, tags ...string) map[string]interface{}\nfunc MapDeep(value interface{}, tags ...string) map[string]interface{}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c ",(0,r.jsx)(e.code,{children:"MapDeep"})," \u652f\u6301\u9012\u5f52\u8f6c\u6362\uff0c\u5373\u4f1a\u9012\u5f52\u8f6c\u6362\u5c5e\u6027\u4e2d\u7684 ",(0,r.jsx)(e.code,{children:"struct"}),"/ ",(0,r.jsx)(e.code,{children:"*struct"})," \u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u66f4\u591a\u7684 ",(0,r.jsx)(e.code,{children:"map"})," \u76f8\u5173\u8f6c\u6362\u65b9\u6cd5\u8bf7\u53c2\u8003\u63a5\u53e3\u6587\u6863\uff1a ",(0,r.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv",children:"https://pkg.go.dev/github.com/gogf/gf/v2/util/gconv"})]})}),"\n",(0,r.jsx)(e.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    type User struct {\n        Uid  int    `c:"uid"`\n        Name string `c:"name"`\n    }\n    // \u5bf9\u8c61\n    g.Dump(gconv.Map(User{\n        Uid:  1,\n        Name: "john",\n    }))\n    // \u5bf9\u8c61\u6307\u9488\n    g.Dump(gconv.Map(&User{\n        Uid:  1,\n        Name: "john",\n    }))\n\n    // \u4efb\u610fmap\u7c7b\u578b\n    g.Dump(gconv.Map(map[int]int{\n        100: 10000,\n    }))\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "name": "john",\n    "uid": 1,\n}\n\n{\n    "name": "john",\n    "uid": 1,\n}\n\n{\n    "100": 10000,\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u5c5e\u6027\u6807\u7b7e",children:"\u5c5e\u6027\u6807\u7b7e"}),"\n",(0,r.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"c/gconv/json"})," \u6807\u7b7e\u6765\u81ea\u5b9a\u4e49\u8f6c\u6362\u540e\u7684 ",(0,r.jsx)(e.code,{children:"map"})," \u952e\u540d\uff0c\u5f53\u591a\u4e2a\u6807\u7b7e\u5b58\u5728\u65f6\uff0c\u6309\u7167 ",(0,r.jsx)(e.code,{children:"gconv/c/json"})," \u7684\u6807\u7b7e\u987a\u5e8f\u8fdb\u884c\u4f18\u5148\u7ea7\u8bc6\u522b\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    type User struct {\n        Uid      int\n        Name     string `c:"-"`\n        NickName string `c:"nickname, omitempty"`\n        Pass1    string `c:"password1"`\n        Pass2    string `c:"password2"`\n    }\n    user := User{\n        Uid:   100,\n        Name:  "john",\n        Pass1: "123",\n        Pass2: "456",\n    }\n    g.Dump(gconv.Map(user))\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "Uid": 100,\n    "password1": "123",\n    "password2": "456",\n    "nickname": "",\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u6807\u7b7e",children:"\u81ea\u5b9a\u4e49\u6807\u7b7e"}),"\n",(0,r.jsxs)(e.p,{children:["\u6b64\u5916\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u7ed9 ",(0,r.jsx)(e.code,{children:"struct"})," \u7684\u5c5e\u6027\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u6807\u7b7e\u540d\u79f0\uff0c\u5e76\u5728 ",(0,r.jsx)(e.code,{children:"map"})," \u8f6c\u6362\u65f6\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6307\u5b9a\u6807\u7b7e\u4f18\u5148\u7ea7\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/util/gconv"\n)\n\nfunc main() {\n    type User struct {\n        Id   int    `c:"uid"`\n        Name string `my-tag:"nick-name" c:"name"`\n    }\n    user := &User{\n        Id:   1,\n        Name: "john",\n    }\n    g.Dump(gconv.Map(user, "my-tag"))\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "nick-name": "john",\n    "uid": 1,\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u9012\u5f52\u8f6c\u6362",children:"\u9012\u5f52\u8f6c\u6362"}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u53c2\u6570\u4e3a ",(0,r.jsx)(e.code,{children:"map"}),"/ ",(0,r.jsx)(e.code,{children:"struct"}),"/ ",(0,r.jsx)(e.code,{children:"*struct"})," \u7c7b\u578b\u65f6\uff0c\u5982\u679c\u952e\u503c/\u5c5e\u6027\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff08\u6216\u8005\u5bf9\u8c61\u6307\u9488\uff09\u65f6\uff0c\u5e76\u4e14\u4e0d\u662f ",(0,r.jsx)(e.code,{children:"embedded"})," \u7ed3\u6784\u4f53\u4e14\u6ca1\u6709\u4efb\u4f55\u7684\u522b\u540d\u6807\u7b7e\u7ed1\u5b9a\uff0c ",(0,r.jsx)(e.code,{children:"Map"})," \u65b9\u6cd5\u5c06\u4f1a\u5c06\u5bf9\u8c61\u8f6c\u6362\u4e3a\u7ed3\u679c\u7684\u4e00\u4e2a\u952e\u503c\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"MapDeep"})," \u65b9\u6cd5\u9012\u5f52\u8f6c\u6362\u53c2\u6570\u7684\u5b50\u5bf9\u8c61\uff0c\u5373\u628a\u5c5e\u6027\u4e5f\u8f6c\u6362\u4e3a ",(0,r.jsx)(e.code,{children:"map"})," \u7c7b\u578b\u3002\u6211\u4eec\u6765\u770b\u4e2a\u4f8b\u5b50\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/util/gconv"\n    "reflect"\n)\n\nfunc main() {\n    type Base struct {\n        Id   int    `c:"id"`\n        Date string `c:"date"`\n    }\n    type User struct {\n        UserBase Base   `c:"base"`\n        Passport string `c:"passport"`\n        Password string `c:"password"`\n        Nickname string `c:"nickname"`\n    }\n    user := &User{\n        UserBase: Base{\n            Id:   1,\n            Date: "2019-10-01",\n        },\n        Passport: "john",\n        Password: "123456",\n        Nickname: "JohnGuo",\n    }\n    m1 := gconv.Map(user)\n    m2 := gconv.MapDeep(user)\n    g.Dump(m1, m2)\n    fmt.Println(reflect.TypeOf(m1["base"]))\n    fmt.Println(reflect.TypeOf(m2["base"]))\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'{\n    "base":     {\n        Id:   1,\n        Date: "2019-10-01",\n    },\n    "passport": "john",\n    "password": "123456",\n    "nickname": "JohnGuo",\n}\n{\n    "base":     {\n        "id":   1,\n        "date": "2019-10-01",\n    },\n    "passport": "john",\n    "password": "123456",\n    "nickname": "JohnGuo",\n}\nmain.Base\nmap[string]interface {}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u770b\u51fa\u6765\u5dee\u522b\u4e86\u5417\uff1f"})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>i,x:()=>o});var s=c(296540);const r={},t=s.createContext(r);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);