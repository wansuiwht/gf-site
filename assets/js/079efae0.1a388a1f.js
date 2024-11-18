"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["18899"],{725541:function(e,t,s){s.r(t),s.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E","title":"SameSite\u8BBE\u7F6E","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u670D\u52A1\u5668\u4E2D\u8BBE\u7F6ESameSite\u5C5E\u6027\u3002\u901A\u8FC7\u8BE6\u7EC6\u7684\u4EE3\u7801\u4F8B\u5B50\uFF0C\u60A8\u53EF\u4EE5\u5B66\u4E60\u5982\u4F55\u914D\u7F6ESameSite\u4EE5\u786E\u4FDDcookie\u5B89\u5168\u6027\uFF0C\u5C24\u5176\u662F\u5728chrome89\u53CA\u4EE5\u4E0A\u7248\u672C\u4E2D\u5904\u7406\u4E0D\u540C\u534F\u8BAE\u7684\u8DE8\u7AD9\u8BF7\u6C42\u3002","source":"@site/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027","slug":"/docs/web/senior-same-site","permalink":"/2.7.x/docs/web/senior-same-site","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/WEB\u670D\u52A1\u5F00\u53D1/\u9AD8\u7EA7\u7279\u6027/SameSite \u8BBE\u7F6E.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/web/senior-same-site","title":"SameSite\u8BBE\u7F6E","sidebar_position":10,"hide_title":true,"keywords":["SameSite\u8BBE\u7F6E","GoFrame","cookie","chrome89","\u534F\u8BAE","\u8DE8\u7AD9\u8BF7\u6C42","http","secure","GoFrame\u6846\u67B6","\u670D\u52A1\u5668\u914D\u7F6E"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u670D\u52A1\u5668\u4E2D\u8BBE\u7F6ESameSite\u5C5E\u6027\u3002\u901A\u8FC7\u8BE6\u7EC6\u7684\u4EE3\u7801\u4F8B\u5B50\uFF0C\u60A8\u53EF\u4EE5\u5B66\u4E60\u5982\u4F55\u914D\u7F6ESameSite\u4EE5\u786E\u4FDDcookie\u5B89\u5168\u6027\uFF0C\u5C24\u5176\u662F\u5728chrome89\u53CA\u4EE5\u4E0A\u7248\u672C\u4E2D\u5904\u7406\u4E0D\u540C\u534F\u8BAE\u7684\u8DE8\u7AD9\u8BF7\u6C42\u3002"},"sidebar":"mainSidebar","previous":{"title":"PProf\u670D\u52A1\u6027\u80FD\u5206\u6790","permalink":"/2.7.x/docs/web/senior-pprof"},"next":{"title":"HTTPServer-\u76D1\u63A7\u6307\u6807","permalink":"/2.7.x/docs/web/senior-server-metrics"}}'),o=s("785893"),n=s("250065");let r={slug:"/docs/web/senior-same-site",title:"SameSite\u8BBE\u7F6E",sidebar_position:10,hide_title:!0,keywords:["SameSite\u8BBE\u7F6E","GoFrame","cookie","chrome89","\u534F\u8BAE","\u8DE8\u7AD9\u8BF7\u6C42","http","secure","GoFrame\u6846\u67B6","\u670D\u52A1\u5668\u914D\u7F6E"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u6784\u5EFA\u7684\u670D\u52A1\u5668\u4E2D\u8BBE\u7F6ESameSite\u5C5E\u6027\u3002\u901A\u8FC7\u8BE6\u7EC6\u7684\u4EE3\u7801\u4F8B\u5B50\uFF0C\u60A8\u53EF\u4EE5\u5B66\u4E60\u5982\u4F55\u914D\u7F6ESameSite\u4EE5\u786E\u4FDDcookie\u5B89\u5168\u6027\uFF0C\u5C24\u5176\u662F\u5728chrome89\u53CA\u4EE5\u4E0A\u7248\u672C\u4E2D\u5904\u7406\u4E0D\u540C\u534F\u8BAE\u7684\u8DE8\u7AD9\u8BF7\u6C42\u3002"},a=void 0,c={},d=[{value:"SameSite \u4ECB\u7ECD",id:"samesite-\u4ECB\u7ECD",level:2},{value:"\u53C2\u8003\u6587\u6863",id:"\u53C2\u8003\u6587\u6863",level:3},{value:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42",id:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42",level:3},{value:"\u5982\u4F55\u8BBE\u7F6E\uFF1F",id:"\u5982\u4F55\u8BBE\u7F6E",level:2}];function m(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"samesite-\u4ECB\u7ECD",children:"SameSite \u4ECB\u7ECD"}),"\n",(0,o.jsx)(t.h3,{id:"\u53C2\u8003\u6587\u6863",children:"\u53C2\u8003\u6587\u6863"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://web.dev/samesite-cookies-explained/",children:"https://web.dev/samesite-cookies-explained/"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://web.dev/samesite-cookie-recipes/",children:"https://web.dev/samesite-cookie-recipes/"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://web.dev/schemeful-samesite/",children:"https://web.dev/schemeful-samesite/"})}),"\n",(0,o.jsx)(t.h3,{id:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42",children:"chrome89\u5F00\u59CB\u534F\u8BAE\u4E0D\u540C\u4E5F\u5C5E\u4E8E\u8DE8\u7AD9\u8BF7\u6C42"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://www.chromestatus.com/feature/5096179480133632",children:"https://www.chromestatus.com/feature/5096179480133632"})}),"\n",(0,o.jsx)(t.h2,{id:"\u5982\u4F55\u8BBE\u7F6E",children:"\u5982\u4F55\u8BBE\u7F6E\uFF1F"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:'func main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request) {\n        r.Cookie.SetHttpCookie(&http.Cookie{\n            Name:     "test",\n            Value:    "1234",\n            Secure:   true,\n            SameSite: http.SameSiteNoneMode,// \u81EA\u5B9A\u4E49samesite\uFF0C\u914D\u5408secure\u4E00\u8D77\u4F7F\u7528\n        })\n    })\n    s.SetAddr("127.0.0.1:8080")\n    s.Run()\n}\n'})})]})}function l(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return r}});var i=s(667294);let o={},n=i.createContext(o);function r(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);