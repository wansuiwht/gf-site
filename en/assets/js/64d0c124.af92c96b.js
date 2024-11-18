"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["90954"],{980134:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E","title":"SameSite \u8BBE\u7F6E","description":"SameSite \u4ECB\u7ECD","source":"@site/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E","permalink":"/en/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":10,"frontMatter":{"title":"SameSite \u8BBE\u7F6E","sidebar_position":10,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"PProf\u670D\u52A1\u6027\u80FD\u5206\u6790","permalink":"/en/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/PProf\u670D\u52A1\u6027\u80FD\u5206\u6790"},"next":{"title":"\u6027\u80FD\u6D4B\u8BD5","permalink":"/en/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/\u6027\u80FD\u6D4B\u8BD5"}}'),s=n("785893"),r=n("250065");let a={title:"SameSite \u8BBE\u7F6E",sidebar_position:10,hide_title:!0},o=void 0,c={},d=[{value:"SameSite \u4ECB\u7ECD",id:"samesite-\u4ECB\u7ECD",level:2},{value:"\u53C2\u8003\u6587\u6863",id:"\u53C2\u8003\u6587\u6863",level:3},{value:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42",id:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42",level:3},{value:"\u5982\u4F55\u8BBE\u7F6E\uFF1F",id:"\u5982\u4F55\u8BBE\u7F6E",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"samesite-\u4ECB\u7ECD",children:"SameSite \u4ECB\u7ECD"}),"\n",(0,s.jsx)(t.h3,{id:"\u53C2\u8003\u6587\u6863",children:"\u53C2\u8003\u6587\u6863"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://web.dev/samesite-cookies-explained/",children:"https://web.dev/samesite-cookies-explained/"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://web.dev/samesite-cookie-recipes/",children:"https://web.dev/samesite-cookie-recipes/"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://web.dev/schemeful-samesite/",children:"https://web.dev/schemeful-samesite/"})}),"\n",(0,s.jsx)(t.h3,{id:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42",children:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.chromestatus.com/feature/5096179480133632",children:"https://www.chromestatus.com/feature/5096179480133632"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5982\u4F55\u8BBE\u7F6E",children:"\u5982\u4F55\u8BBE\u7F6E\uFF1F"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Cookie.SetHttpCookie(&http.Cookie{\n            Name:     "test",\n            Value:    "1234",\n            Secure:   true,\n            SameSite: http.SameSiteNoneMode,// \u81EA\u5B9A\u4E49samesite\uFF0C\u914D\u5408secure\u4E00\u8D77\u4F7F\u7528\n        })\n    })\n    s.SetAddr("127.0.0.1:8080")\n    s.Run()\n}\n'})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var i=n(667294);let s={},r=i.createContext(s);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);