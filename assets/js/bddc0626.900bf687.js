"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[90416],{186192:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var o=e(474848),s=e(28453);const r={title:"gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",sidebar_position:4},i=void 0,c={id:"\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",title:"gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",description:"\u6570\u636e\u683c\u5f0f\u8f6c\u6362\u6709\u5f88\u591a\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\uff1a https://godoc.org/github.com/gogf/gf/encoding/gjson",source:"@site/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801/0-gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/4-gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362.md",sourceDirName:"2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801/0-gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801",slug:"/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",permalink:"/gf-site/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/2-\u6a21\u5757\u5217\u8868/2-\u7f16\u7801\u89e3\u7801/0-gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/4-gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:4,frontMatter:{title:"gjson-\u6570\u636e\u683c\u5f0f\u8f6c\u6362",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"gjson-\u52a8\u6001\u521b\u5efa\u4fee\u6539",permalink:"/gf-site/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gjson -\u6570\u636e\u52a8\u6001\u7f16\u89e3\u7801/gjson-\u52a8\u6001\u521b\u5efa\u4fee\u6539"},next:{title:"gparser (\u901a\u7528\u7f16\u7801\u89e3\u6790)",permalink:"/gf-site/docs/1.15.x/\u6a21\u5757\u5217\u8868/\u7f16\u7801\u89e3\u7801/gparser -\u901a\u7528\u7f16\u7801\u89e3\u6790"}},d={},g=[];function a(n){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u6570\u636e\u683c\u5f0f\u8f6c\u6362\u6709\u5f88\u591a\u65b9\u6cd5\uff0c\u5177\u4f53\u8bf7\u67e5\u770b\u63a5\u53e3\u6587\u6863\uff1a ",(0,o.jsx)(t.a,{href:"https://godoc.org/github.com/gogf/gf/encoding/gjson",children:"https://godoc.org/github.com/gogf/gf/encoding/gjson"})]}),"\n",(0,o.jsxs)(t.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6709\u4e00\u4e9b ",(0,o.jsx)(t.code,{children:"Must*"})," \u8f6c\u6362\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4fdd\u8bc1\u5fc5\u987b\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5426\u5219\u76f4\u63a5 ",(0,o.jsx)(t.code,{children:"panic"}),"\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u6211\u4eec\u5c31\u6765\u4e00\u4e2a\u4f8b\u5b50\u8bf4\u660e\u5373\u53ef\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'data :=\n    `{\n    "users" : {\n        "count" : 1,\n        "array" : ["John", "Ming"]\n    }\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    fmt.Println("JSON:")\n    fmt.Println(j.MustToJsonString())\n    fmt.Println("======================")\n\n    fmt.Println("XML:")\n    fmt.Println(j.MustToXmlString())\n    fmt.Println("======================")\n\n    fmt.Println("YAML:")\n    fmt.Println(j.MustToYamlString())\n    fmt.Println("======================")\n\n    fmt.Println("TOML:")\n    fmt.Println(j.MustToTomlString())\n}\n\n// Output:\n// JSON:\n// {"users":{"array":["John","Ming"],"count":1}}\n// ======================\n// XML:\n// <users><array>John</array><array>Ming</array><count>1</count></users>\n// ======================\n// YAML:\n// users:\n//     array:\n//       - John\n//       - Ming\n//     count: 1\n//\n// ======================\n// TOML:\n// [users]\n//   array = ["John", "Ming"]\n//   count = 1.0\n\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"gjson"})," \u652f\u6301\u5c06 ",(0,o.jsx)(t.code,{children:"JSON"})," \u8f6c\u6362\u4e3a\u5176\u4ed6\u5e38\u89c1\u7684\u6570\u636e\u683c\u5f0f\uff0c\u76ee\u524d\u652f\u6301\uff1a ",(0,o.jsx)(t.code,{children:"JSON"}),"\u3001 ",(0,o.jsx)(t.code,{children:"XML"}),"\u3001 ",(0,o.jsx)(t.code,{children:"INI"}),"\u3001 ",(0,o.jsx)(t.code,{children:"YAML/YML"}),"\u3001 ",(0,o.jsx)(t.code,{children:"TOML"}),"\u3001 ",(0,o.jsx)(t.code,{children:"Struct"})," \u6570\u636e\u683c\u5f0f\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u6362\u3002"]})]})}function l(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>c});var o=e(296540);const s={},r=o.createContext(s);function i(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);