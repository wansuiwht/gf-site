"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[2061],{176513:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(474848),i=t(28453);const s={title:"\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",sidebar_position:6},c=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",title:"\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",description:"I18N\u53d8\u91cf",source:"@site/versioned_docs/version-1.15.x/1-\u6838\u5fc3\u7ec4\u4ef6/9-\u6a21\u677f\u5f15\u64ce/6-\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6/9-\u6a21\u677f\u5f15\u64ce",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",draft:!1,unlisted:!1,tags:[],version:"1.15.x",sidebarPosition:6,frontMatter:{title:"\u6a21\u677f\u5f15\u64ce-\u5176\u4ed6\u4f7f\u7528",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u6a21\u677f\u5f15\u64ce/\u6a21\u677f\u5f15\u64ce-XSS\u5904\u7406"},next:{title:"\u94fe\u8def\u8ddf\u8e2a",permalink:"/docs/1.15.x/\u6838\u5fc3\u7ec4\u4ef6/\u94fe\u8def\u8ddf\u8e2a/"}},a={},l=[{value:"I18N\u53d8\u91cf",id:"i18n\u53d8\u91cf",level:2},{value:"HTTP\u5bf9\u8c61\u89c6\u56fe",id:"http\u5bf9\u8c61\u89c6\u56fe",level:2},{value:"\u63a7\u5236\u5668\u89c6\u56fe\u7ba1\u7406",id:"\u63a7\u5236\u5668\u89c6\u56fe\u7ba1\u7406",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"i18n\u53d8\u91cf",children:"I18N\u53d8\u91cf"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u6a21\u677f\u5f15\u64ce\u4e2d\u5185\u7f6e\u4e86\u5bf9 ",(0,r.jsx)(e.code,{children:"i18n"})," \u7279\u6027\u7684\u652f\u6301\uff0c\u589e\u52a0\u4e86 ",(0,r.jsx)(e.code,{children:"I18nLanguage"})," \u6a21\u677f\u53d8\u91cf\uff0c\u5f53\u5f00\u53d1\u8005\u4e3a\u6a21\u677f\u53d8\u91cf\u8d4b\u503c\u8be5\u53d8\u91cf\u65f6\uff0c\u5c06\u4f1a\u6309\u7167\u8be5\u53d8\u91cf\u6307\u5b9a\u7684\u8bed\u8a00\u8fdb\u884c\u8f6c\u8bd1\u3002\u8be5\u7279\u6027\u4f7f\u5f97\u4f7f\u7528\u540c\u4e00\u4e2a\u6a21\u677f\u5f15\u64ce\u5bf9\u8c61\uff0c\u9488\u5bf9\u4e8e\u540c\u4e00\u4e2a\u9875\u9762\uff0c\u53ef\u4ee5\u6309\u7167\u53d8\u91cf\u914d\u7f6e\u8f93\u51fa\u4e0d\u540c\u7684\u56fd\u9645\u5316\u8f6c\u8bd1\u5185\u5bb9\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/frame/g"\n)\n\nfunc main() {\n\tcontent := `{{.name}} says "a{#hello}{#world}!"`\n\tresult1, _ := g.View().ParseContent(content, g.Map{\n\t\t"name":         "john",\n\t\t"I18nLanguage": "zh-CN",\n\t})\n\tfmt.Println(result1)\n\n\tresult2, _ := g.View().ParseContent(content, g.Map{\n\t\t"name":         "john",\n\t\t"I18nLanguage": "ja",\n\t})\n\tfmt.Println(result2)\n}\n\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a\uff08\u4fdd\u8bc1\u5f53\u524d\u8fd0\u884c\u76ee\u5f55\u5e26\u6709 ",(0,r.jsx)(e.code,{children:"i18n"})," \u8f6c\u8bd1\u914d\u7f6e\u6587\u4ef6\uff09"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-undefined",children:'john says "\u4f60\u597d\u4e16\u754c!"\njohn says "\u3053\u3093\u306b\u3061\u306f\u4e16\u754c!"\n\n'})}),"\n",(0,r.jsx)(e.h2,{id:"http\u5bf9\u8c61\u89c6\u56fe",children:"HTTP\u5bf9\u8c61\u89c6\u56fe"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gf"})," \u6846\u67b6\u7684 ",(0,r.jsx)(e.code,{children:"WebServer"})," \u7684\u8fd4\u56de\u5bf9\u8c61\u4e2d\u63d0\u4f9b\u4e86\u57fa\u7840\u7684\u6a21\u677f\u89e3\u6790\u65b9\u6cd5\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func (r *Response) WriteTpl(tpl string, params map[string]interface{}, funcMap ...map[string]interface{}) error\nfunc (r *Response) WriteTplContent(content string, params map[string]interface{}, funcMap ...map[string]interface{}) error\n\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,r.jsx)(e.code,{children:"WriteTpl"})," \u7528\u4e8e\u8f93\u51fa\u6a21\u677f\u6587\u4ef6\uff0c ",(0,r.jsx)(e.code,{children:"WriteTplContent"})," \u7528\u4e8e\u76f4\u63a5\u89e3\u6790\u8f93\u51fa\u6a21\u677f\u5185\u5bb9\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"github.com/gogf/gf/frame/g"\n\t"github.com/gogf/gf/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/", func(r *ghttp.Request) {\n\t\tr.Cookie.Set("theme", "default")\n\t\tr.Session.Set("name", "john")\n\t\tr.Response.WriteTplContent(`Cookie:{{.Cookie.theme}}, Session:{{.Session.name}}`, nil)\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:"Cookie:default, Session:john\n\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u63a7\u5236\u5668\u89c6\u56fe\u7ba1\u7406",children:"\u63a7\u5236\u5668\u89c6\u56fe\u7ba1\u7406"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"gf"})," \u4e3a\u8def\u7531\u63a7\u5236\u5668\u6ce8\u518c\u65b9\u5f0f\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u6a21\u677f\u5f15\u64ce\u652f\u6301\uff0c\u7531 ",(0,r.jsx)(e.code,{children:"gmvc.View"})," \u89c6\u56fe\u5bf9\u8c61\u8fdb\u884c\u7ba1\u7406\uff0c\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u6570\u636e ",(0,r.jsx)(e.code,{children:"\u9694\u79bb\u6027"}),"\u3002\u63a7\u5236\u5668\u89c6\u56fe\u662f\u5e76\u53d1\u5b89\u5168\u8bbe\u8ba1\u7684\uff0c\u5141\u8bb8\u5728\u591a\u7ebf\u7a0b\u4e2d\u5f02\u6b65\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u63a7\u5236\u5668\u6ce8\u518c\u65b9\u5f0f\u7c7b\u4f3c\u4e8ePHP\u6267\u884c\u6d41\u7a0b\uff0c\u76f8\u5bf9\u6765\u8bf4\u6027\u80fd\u6bd4\u8f83\u4f4e\u6548\uff0c\u56e0\u6b64\u672a\u6765\u4e0d\u518d\u63a8\u8350\u4f7f\u7528\u63a7\u5236\u5668\u6ce8\u518c\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"func (view *View) Assign(key string, value interface{})\nfunc (view *View) Assigns(data gview.Params)\n\nfunc (view *View) Parse(file string) ([]byte, error)\nfunc (view *View) ParseContent(content string) ([]byte, error)\n\nfunc (view *View) Display(files ...string) error\nfunc (view *View) DisplayContent(content string) error\n\nfunc (view *View) LockFunc(f func(vars map[string]interface{}))\nfunc (view *View) RLockFunc(f func(vars map[string]interface{}))\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b1\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/net/ghttp"\n    "github.com/gogf/gf/frame/gmvc"\n)\n\ntype ControllerTemplate struct {\n    gmvc.Controller\n}\n\nfunc (c *ControllerTemplate) Info() {\n    c.View.Assign("name", "john")\n    c.View.Assigns(map[string]interface{}{\n        "age"   : 18,\n        "score" : 100,\n    })\n    c.View.Display("index.tpl")\n}\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindController("/template", new(ControllerTemplate))\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,r.jsx)(e.code,{children:"index.tpl"})," \u7684\u6a21\u677f\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:"<html>\n    <head>\n        <title>gf template engine</title>\n    </head>\n    <body>\n        <p>Name: {{.name}}</p>\n        <p>Age:  {{.age}}</p>\n        <p>Score:{{.score}}</p>\n    </body>\n</html>\n\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8199/template/info",children:"http://127.0.0.1:8199/template/info"})," \u53ef\u4ee5\u770b\u5230\u6a21\u677f\u88ab\u89e3\u6790\u5e76\u5c55\u793a\u5230\u9875\u9762\u4e0a\u3002\u5982\u679c\u9875\u9762\u62a5\u9519\u627e\u4e0d\u5230\u6a21\u677f\u6587\u4ef6\uff0c\u6ca1\u6709\u5173\u7cfb\uff0c\u56e0\u4e3a\u8fd9\u91cc\u5e76\u6ca1\u6709\u5bf9\u6a21\u677f\u76ee\u5f55\u505a\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u662f\u5f53\u524d\u53ef\u884c\u6587\u4ef6\u7684\u6267\u884c\u76ee\u5f55\uff08 ",(0,r.jsx)(e.code,{children:"Linux&Mac"})," \u4e0b\u662f ",(0,r.jsx)(e.code,{children:"/tmp"})," \u76ee\u5f55\uff0c ",(0,r.jsx)(e.code,{children:"Windows"})," \u4e0b\u662f ",(0,r.jsx)(e.code,{children:"C:\\Documents and Settings\\\u7528\u6237\u540d\\Local Settings\\Temp"}),"\uff09\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c\u7ed9\u5b9a\u7684\u6a21\u677f\u6587\u4ef6file\u53c2\u6570\u662f\u9700\u8981\u5e26\u5b8c\u6574\u7684\u6587\u4ef6\u540d\u540e\u7f00\uff0c\u4f8b\u5982\uff1a ",(0,r.jsx)(e.code,{children:"index.tpl"}),"\uff0c ",(0,r.jsx)(e.code,{children:"index.html"})," \u7b49\u7b49\uff0c\u6a21\u677f\u5f15\u64ce\u5bf9\u6a21\u677f\u6587\u4ef6\u540e\u7f00\u540d\u6ca1\u6709\u8981\u6c42\uff0c\u7528\u6237\u53ef\u5b8c\u5168\u81ea\u5b9a\u4e49\u3002\u6b64\u5916\uff0c\u6a21\u677f\u6587\u4ef6\u53c2\u6570\u4e5f\u652f\u6301\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84(\u5b8c\u6574\u7684\u6587\u4ef6\u8def\u5f84)\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u6a21\u677f\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/net/ghttp"\n    "github.com/gogf/gf/frame/gmvc"\n)\n\ntype ControllerTemplate struct {\n    gmvc.Controller\n}\n\nfunc (c *ControllerTemplate) Info() {\n    c.View.Assign("name", "john")\n    c.View.Assigns(map[string]interface{}{\n        "age"   : 18,\n        "score" : 100,\n    })\n    c.View.DisplayContent(`\n        <html>\n            <head>\n                <title>gf template engine</title>\n            </head>\n            <body>\n                <p>Name: {{.name}}</p>\n                <p>Age:  {{.age}}</p>\n                <p>Score:{{.score}}</p>\n            </body>\n        </html>\n    `)\n}\n\nfunc main() {\n    s := ghttp.GetServer()\n    s.BindController("/template", new(ControllerTemplate{}))\n    s.SetPort(8199)\n    s.Run()\n}\n\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,r.jsx)(e.a,{href:"http://127.0.0.1:8199/template/info",children:"http://127.0.0.1:8199/template/info"})," \u53ef\u4ee5\u770b\u5230\u89e3\u6790\u540e\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:"<html>\n    <head>\n        <title>gf template engine</title>\n    </head>\n    <body>\n        <p>Name: john</p>\n        <p>Age:  18</p>\n        <p>Score:100</p>\n    </body>\n</html>\n\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var r=t(296540);const i={},s=r.createContext(i);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);