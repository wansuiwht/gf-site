"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[92372],{807785:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u6570\u636e\u683c\u5f0f\u8f6c\u6362","title":"\u901a\u7528\u7f16\u89e3\u7801-\u6570\u636e\u683c\u5f0f\u8f6c\u6362","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6570\u636e\u683c\u5f0f\u8f6c\u6362\uff0c\u5305\u62ecJSON\u3001XML\u3001YAML\u3001TOML\u7b49\u591a\u79cd\u683c\u5f0f\u7684\u76f8\u4e92\u8f6c\u6362\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u3002\u4f7f\u7528gjson\u5e93\uff0c\u53ef\u4ee5\u5229\u7528Must*\u65b9\u6cd5\u786e\u4fdd\u6570\u636e\u683c\u5f0f\u7684\u5b89\u5168\u8f6c\u6362\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u6570\u636e\u683c\u5f0f\u8f6c\u6362.md","sourceDirName":"docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson","slug":"/docs/components/encoding-gjson-format-converting","permalink":"/2.7.x/docs/components/encoding-gjson-format-converting","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u6570\u636e\u683c\u5f0f\u8f6c\u6362.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/components/encoding-gjson-format-converting","title":"\u901a\u7528\u7f16\u89e3\u7801-\u6570\u636e\u683c\u5f0f\u8f6c\u6362","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u683c\u5f0f\u8f6c\u6362","gjson","JSON","XML","YAML","TOML","\u7f16\u89e3\u7801","\u63a5\u53e3\u6587\u6863"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6570\u636e\u683c\u5f0f\u8f6c\u6362\uff0c\u5305\u62ecJSON\u3001XML\u3001YAML\u3001TOML\u7b49\u591a\u79cd\u683c\u5f0f\u7684\u76f8\u4e92\u8f6c\u6362\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u3002\u4f7f\u7528gjson\u5e93\uff0c\u53ef\u4ee5\u5229\u7528Must*\u65b9\u6cd5\u786e\u4fdd\u6570\u636e\u683c\u5f0f\u7684\u5b89\u5168\u8f6c\u6362\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539","permalink":"/2.7.x/docs/components/encoding-gjson-dynamic-creating-and-editing"},"next":{"title":"\u901a\u7528\u7f16\u89e3\u7801-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/2.7.x/docs/components/encoding-gjson-funcs"}}');var s=o(474848),r=o(28453);const i={slug:"/docs/components/encoding-gjson-format-converting",title:"\u901a\u7528\u7f16\u89e3\u7801-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u6570\u636e\u683c\u5f0f\u8f6c\u6362","gjson","JSON","XML","YAML","TOML","\u7f16\u89e3\u7801","\u63a5\u53e3\u6587\u6863"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u8fdb\u884c\u6570\u636e\u683c\u5f0f\u8f6c\u6362\uff0c\u5305\u62ecJSON\u3001XML\u3001YAML\u3001TOML\u7b49\u591a\u79cd\u683c\u5f0f\u7684\u76f8\u4e92\u8f6c\u6362\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\u3002\u4f7f\u7528gjson\u5e93\uff0c\u53ef\u4ee5\u5229\u7528Must*\u65b9\u6cd5\u786e\u4fdd\u6570\u636e\u683c\u5f0f\u7684\u5b89\u5168\u8f6c\u6362\u3002"},c=void 0,d={},a=[];function g(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u6570\u636e\u683c\u5f0f\u8f6c\u6362\u6709\u5f88\u591a\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\uff1a ",(0,s.jsx)(e.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson",children:"https://pkg.go.dev/github.com/gogf/gf/v2/encoding/gjson"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6709\u4e00\u4e9b ",(0,s.jsx)(e.code,{children:"Must*"})," \u8f6c\u6362\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4fdd\u8bc1\u5fc5\u987b\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5426\u5219\u76f4\u63a5 ",(0,s.jsx)(e.code,{children:"panic"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u5c31\u6765\u4e00\u4e2a\u4f8b\u5b50\u8bf4\u660e\u5373\u53ef\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'data :=\n    `{\n    "users" : {\n        "count" : 1,\n        "array" : ["John", "Ming"]\n    }\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    fmt.Println("JSON:")\n    fmt.Println(j.MustToJsonString())\n    fmt.Println("======================")\n\n    fmt.Println("XML:")\n    fmt.Println(j.MustToXmlString())\n    fmt.Println("======================")\n\n    fmt.Println("YAML:")\n    fmt.Println(j.MustToYamlString())\n    fmt.Println("======================")\n\n    fmt.Println("TOML:")\n    fmt.Println(j.MustToTomlString())\n}\n\n// Output:\n// JSON:\n// {"users":{"array":["John","Ming"],"count":1}}\n// ======================\n// XML:\n// <users><array>John</array><array>Ming</array><count>1</count></users>\n// ======================\n// YAML:\n// users:\n//     array:\n//       - John\n//       - Ming\n//     count: 1\n//\n// ======================\n// TOML:\n// [users]\n//   array = ["John", "Ming"]\n//   count = 1.0\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"gjson"})," \u652f\u6301\u5c06 ",(0,s.jsx)(e.code,{children:"JSON"})," \u8f6c\u6362\u4e3a\u5176\u4ed6\u5e38\u89c1\u7684\u6570\u636e\u683c\u5f0f\uff0c\u76ee\u524d\u652f\u6301\uff1a ",(0,s.jsx)(e.code,{children:"JSON"}),"\u3001 ",(0,s.jsx)(e.code,{children:"XML"}),"\u3001 ",(0,s.jsx)(e.code,{children:"INI"}),"\u3001 ",(0,s.jsx)(e.code,{children:"YAML/YML"}),"\u3001 ",(0,s.jsx)(e.code,{children:"TOML"}),"\u3001 ",(0,s.jsx)(e.code,{children:"PROPERTIES"}),"\u3001 ",(0,s.jsx)(e.code,{children:"Struct"})," \u6570\u636e\u683c\u5f0f\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u6362\u3002"]})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(g,{...n})}):g(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>c});var t=o(296540);const s={},r=t.createContext(s);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);