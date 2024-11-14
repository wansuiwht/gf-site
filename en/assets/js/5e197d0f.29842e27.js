"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[29048],{770406:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5","title":"\u73af\u5883\u5b89\u88c5","description":"\u8be5\u7ae0\u8282\u4e3a\u624b\u6478\u624b\u5b89\u88c5 Golang \u5f00\u53d1\u73af\u5883\u53ca IDE \u914d\u7f6e\u6559\u7a0b\uff0c\u4ec5\u9488\u5bf9 Golang \u840c\u65b0\uff0c\u8001\u53f8\u673a\u8bf7\u5ffd\u7565\u3002","source":"@site/versioned_docs/version-2.5.x/\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5.md","sourceDirName":"\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c","slug":"/\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5","permalink":"/en/2.5.x/\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c/\u73af\u5883\u5b89\u88c5.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"\u73af\u5883\u5b89\u88c5","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u51c6\u5907\u5de5\u4f5c","permalink":"/en/2.5.x/\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c/"},"next":{"title":"Go Module","permalink":"/en/2.5.x/\u9879\u76ee\u5f00\u53d1/\u51c6\u5907\u5de5\u4f5c/Go Module"}}');var i=d(474848),t=d(28453);const l={title:"\u73af\u5883\u5b89\u88c5",sidebar_position:0,hide_title:!0},c=void 0,o={},r=[{value:"Go\u5f00\u53d1\u73af\u5883\u5b89\u88c5",id:"go\u5f00\u53d1\u73af\u5883\u5b89\u88c5",level:2},{value:"Step1 - \u4e0b\u8f7dGo\u5f00\u53d1\u5305",id:"step1---\u4e0b\u8f7dgo\u5f00\u53d1\u5305",level:3},{value:"Step2 - \u5b89\u88c5\u5f15\u5bfc",id:"step2---\u5b89\u88c5\u5f15\u5bfc",level:3},{value:"IDE\u5f00\u53d1\u73af\u5883\u5b89\u88c5",id:"ide\u5f00\u53d1\u73af\u5883\u5b89\u88c5",level:2},{value:"Goland\u7684\u4f7f\u7528",id:"goland\u7684\u4f7f\u7528",level:3},{value:"Step1. \u6253\u5f00IDE",id:"step1-\u6253\u5f00ide",level:4},{value:"Step2. \u521b\u5efa\u9879\u76ee",id:"step2-\u521b\u5efa\u9879\u76ee",level:4},{value:"Step3. \u521b\u5efa\u7a0b\u5e8f",id:"step3-\u521b\u5efa\u7a0b\u5e8f",level:4},{value:"Step4. \u6267\u884c\u8fd0\u884c",id:"step4-\u6267\u884c\u8fd0\u884c",level:4},{value:"VSCode\u7684\u4f7f\u7528",id:"vscode\u7684\u4f7f\u7528",level:3},{value:"Step1.\u4e0b\u8f7d\u5b89\u88c5",id:"step1\u4e0b\u8f7d\u5b89\u88c5",level:4},{value:"Step2.\u5b89\u88c5Go\u6269\u5c55",id:"step2\u5b89\u88c5go\u6269\u5c55",level:4},{value:"Step3.HelloWorld",id:"step3helloworld",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["\u8be5\u7ae0\u8282\u4e3a\u624b\u6478\u624b\u5b89\u88c5 ",(0,i.jsx)(s.code,{children:"Golang"})," \u5f00\u53d1\u73af\u5883\u53ca ",(0,i.jsx)(s.code,{children:"IDE"})," \u914d\u7f6e\u6559\u7a0b\uff0c\u4ec5\u9488\u5bf9 ",(0,i.jsx)(s.code,{children:"Golang"})," \u840c\u65b0\uff0c\u8001\u53f8\u673a\u8bf7\u5ffd\u7565\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"go\u5f00\u53d1\u73af\u5883\u5b89\u88c5",children:"Go\u5f00\u53d1\u73af\u5883\u5b89\u88c5"}),"\n",(0,i.jsx)(s.h3,{id:"step1---\u4e0b\u8f7dgo\u5f00\u53d1\u5305",children:"Step1 - \u4e0b\u8f7dGo\u5f00\u53d1\u5305"}),"\n",(0,i.jsxs)(s.p,{children:["\u8bbf\u95eeGo\u56fd\u5185\u955c\u50cf\u7ad9\u4e0b\u8f7d\u9875\u9762 ",(0,i.jsx)(s.a,{href:"https://golang.google.cn/dl/",children:"https://golang.google.cn/dl/"}),"\uff0c\u5e76\u5728\u9875\u9762\u6700\u4e0a\u65b9\u7684\u7248\u672c\u4e2d\u9009\u62e9\u4f60\u5f53\u524d\u7684\u7cfb\u7edf\u7248\u672c\uff0c\u4f1a\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684Go\u5f00\u53d1\u5305:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(628113).A+"",width:"1025",height:"532"})}),"\n",(0,i.jsx)(s.h3,{id:"step2---\u5b89\u88c5\u5f15\u5bfc",children:"Step2 - \u5b89\u88c5\u5f15\u5bfc"}),"\n",(0,i.jsxs)(s.p,{children:["\u8bbf\u95ee\u5b98\u65b9\u5b89\u88c5\u4ecb\u7ecd\u9875\u9762 ",(0,i.jsx)(s.a,{href:"https://golang.google.cn/doc/install",children:"https://golang.google.cn/doc/install"}),"\uff0c\u6309\u7167\u5f53\u524d\u7cfb\u7edf\u7248\u672c\u6267\u884c\u5bf9\u5e94\u7684\u5b89\u88c5\u6d41\u7a0b\u5373\u53ef\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["Windows( ",(0,i.jsx)(s.code,{children:"msi"}),")\u548cMacOS( ",(0,i.jsx)(s.code,{children:"pkg"}),")\u63a8\u8350\u4f7f\u7528\u5b89\u88c5\u5305\u7684\u65b9\u5f0f\u6765\u5b89\u88c5\u3002\u4f5c\u8005\u5f53\u524dMacOS\u5b89\u88c5\u5305( ",(0,i.jsx)(s.code,{children:"pkg"}),")\u5b89\u88c5\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(246160).A+"",width:"620",height:"438"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(218285).A+"",width:"620",height:"438"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(538215).A+"",width:"620",height:"438"})}),"\n",(0,i.jsx)(s.p,{children:"Go\u7684\u5f00\u53d1\u5305\u5347\u7ea7\u4e5f\u662f\u540c\u6837\u7684\u8fc7\u7a0b\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"ide\u5f00\u53d1\u73af\u5883\u5b89\u88c5",children:"IDE\u5f00\u53d1\u73af\u5883\u5b89\u88c5"}),"\n",(0,i.jsxs)(s.p,{children:["\u76ee\u524d ",(0,i.jsx)(s.code,{children:"Go"})," \u7684 ",(0,i.jsx)(s.code,{children:"IDE"})," \u6709\u4e24\u6b3e\u6bd4\u8f83\u6d41\u884c\uff0c\u4e00\u6b3e\u662f ",(0,i.jsx)(s.code,{children:"VSCode+Plugins"}),"\uff08\u514d\u8d39\uff09\uff0c\u53e6\u4e00\u6b3e\u662f ",(0,i.jsx)(s.code,{children:"JetBrains"})," \u516c\u53f8\u7684 ",(0,i.jsx)(s.code,{children:"Goland"}),"\uff08\u6536\u8d39\uff09\u3002\u7531\u4e8e ",(0,i.jsx)(s.code,{children:"JetBrains"})," \u4e5f\u662f ",(0,i.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u8d5e\u52a9\u5546\uff0c\u56e0\u6b64\u6211\u4eec\u4f18\u5148\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"Goland"})," \u6765\u4f5c\u4e3a\u5f00\u53d1IDE\uff0c\u4e0b\u8f7d\u53ca\u6ce8\u518c\u8bf7\u53c2\u8003\u7f51\u4e0a\u6559\u7a0b\uff08 ",(0,i.jsx)(s.a,{href:"https://www.baidu.com/s?wd=goland%20%E5%AE%89%E8%A3%85",children:"\u767e\u5ea6"})," \u6216 ",(0,i.jsx)(s.a,{href:"https://www.google.com/search?q=goland+%E5%AE%89%E8%A3%85",children:"Google"}),"\uff09\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"JetBrains"})," \u7684\u5b98\u65b9\u7f51\u7ad9\u4e3a\uff1a ",(0,i.jsx)(s.a,{href:"https://www.jetbrains.com/?from=GoFrame",children:"https://www.jetbrains.com"})]}),"\n",(0,i.jsx)(s.h3,{id:"goland\u7684\u4f7f\u7528",children:"Goland\u7684\u4f7f\u7528"}),"\n",(0,i.jsxs)(s.p,{children:["\u6211\u4eec\u6765\u521b\u5efa\u7b2c\u4e00\u4e2a ",(0,i.jsx)(s.code,{children:"Go"})," \u7a0b\u5e8f\u5427\uff0c\u8001\u89c4\u77e9\uff0c\u4e0a ",(0,i.jsx)(s.code,{children:"hello world"}),"\u3002"]}),"\n",(0,i.jsx)(s.h4,{id:"step1-\u6253\u5f00ide",children:"Step1. \u6253\u5f00IDE"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(239669).A+"",width:"800",height:"500"})}),"\n",(0,i.jsx)(s.h4,{id:"step2-\u521b\u5efa\u9879\u76ee",children:"Step2. \u521b\u5efa\u9879\u76ee"}),"\n",(0,i.jsxs)(s.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,i.jsx)(s.code,{children:"Go"})," \u5b89\u88c5\u6587\u4ef6\u7684\u8def\u5f84( ",(0,i.jsx)(s.code,{children:"SDK"}),")\uff0c ",(0,i.jsx)(s.a,{href:"https://golang.google.cn/doc/install",children:"\u5b98\u65b9\u5b89\u88c5\u6587\u6863"})," \u6709\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5176\u4e2d\u7684 ",(0,i.jsx)(s.code,{children:"Location"})," \u968f\u610f\u9009\u62e9\u4e00\u4e2a\u672c\u5730\u8def\u5f84\u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(549938).A+"",width:"666",height:"482"})}),"\n",(0,i.jsx)(s.h4,{id:"step3-\u521b\u5efa\u7a0b\u5e8f",children:"Step3. \u521b\u5efa\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(s.p,{children:["\u65b0\u5efa\u4e00\u4e2a ",(0,i.jsx)(s.code,{children:"go"})," \u6587\u4ef6\uff0c\u53eb\u505a ",(0,i.jsx)(s.code,{children:"hello.go"}),"\uff0c\u5e76\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("hello world!")\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(488755).A+"",width:"931",height:"534"})}),"\n",(0,i.jsx)(s.h4,{id:"step4-\u6267\u884c\u8fd0\u884c",children:"Step4. \u6267\u884c\u8fd0\u884c"}),"\n",(0,i.jsxs)(s.p,{children:["\u83dc\u5355\u680f ",(0,i.jsx)(s.code,{children:"Run"})," - ",(0,i.jsx)(s.code,{children:"Run"})," - ",(0,i.jsx)(s.code,{children:"go build hello.go"}),"\u3002"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(576707).A+"",width:"800",height:"542"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(725427).A+"",width:"692",height:"593"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:d(12403).A+"",width:"828",height:"528"})}),"\n",(0,i.jsxs)(s.p,{children:["\u606d\u559c\u4f60\uff0c\u7b2c\u4e00\u4e2a ",(0,i.jsx)(s.code,{children:"Go"})," \u7a0b\u5e8f\u4fbf\u6210\u529f\u4e86\uff01"]}),"\n",(0,i.jsx)(s.h3,{id:"vscode\u7684\u4f7f\u7528",children:"VSCode\u7684\u4f7f\u7528"}),"\n",(0,i.jsx)(s.h4,{id:"step1\u4e0b\u8f7d\u5b89\u88c5",children:(0,i.jsx)(s.a,{href:"https://code.visualstudio.com/",children:"Step1.\u4e0b\u8f7d\u5b89\u88c5"})}),"\n",(0,i.jsx)(s.h4,{id:"step2\u5b89\u88c5go\u6269\u5c55",children:(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/zh-cn/learn/modules/go-get-started/4-install-visual-studio-code?ns-enrollment-type=learningpath&ns-enrollment-id=learn.languages.go-first-steps",children:"Step2.\u5b89\u88c5Go\u6269\u5c55"})}),"\n",(0,i.jsx)(s.h4,{id:"step3helloworld",children:(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/zh-cn/learn/modules/go-get-started/5-hello-world",children:"Step3.HelloWorld"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},246160:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/04ba12fa5ce2c30ead010f2af330697e-55d6bd95cd25b0b9677da47b167e2452.png"},218285:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/181070757dcf072cb77d95ed2f9d6490-a63b2b6f05373fa6ee76e4797119bc90.png"},538215:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/247eed72e9cd9a33ab736fd3af38da57-9211f606160796bedbb3593a50520b67.png"},12403:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/362285f596e22219d8a5926b9a721fca-827d97f0ea59b603e30ab50dd828ef00.png"},628113:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/367d967e59f8e3452d1be3a1414502ba-f9d11574b304156e13d860b888bf4fc3.png"},549938:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/62884412178633ab248fb5c80afdb3d9-ca15106972625163f1424ca75d8ef711.png"},725427:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/664984081f6c24f92a96e46b4c8ec5e8-139dbbd238fb06bd06c84fbb854598e6.png"},488755:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/664ac3b24b4da6b9379e7390ff6ad49f-7b9c51f69cdabdc408b9e8425612e1c3.png"},239669:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/a9b24e59878f1138351dfdbf4e3a01bb-7c584cace99e641f4c5a904bb220b58e.png"},576707:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/b32411e22118a18ccf109dcf05f3b973-a61fe1daa243d8a5561306bc92aa4472.png"},28453:(e,s,d)=>{d.d(s,{R:()=>l,x:()=>c});var n=d(296540);const i={},t=n.createContext(i);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);