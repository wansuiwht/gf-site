"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["79358"],{170250:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>d,frontMatter:()=>o});var i=JSON.parse('{"id":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u5E38\u89C1\u95EE\u9898","title":"HTTPClient-\u5E38\u89C1\u95EE\u9898","description":"\u89E3\u91CA\u5982\u4F55\u6709\u6548\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gclient.Client\u5BF9\u8C61\uFF0C\u4EE5\u63D0\u9AD8\u6548\u7387\u548C\u964D\u4F4E\u8D44\u6E90\u4F7F\u7528\u3002\u5305\u542Bgclient.Client\u5BF9\u8C61\u590D\u7528\u7684\u5EFA\u8BAE\u4EE5\u53CA\u5982\u4F55\u5904\u7406\u975E\u6CD5\u5B57\u7B26\u95EE\u9898\uFF0C\u901A\u8FC7\u793A\u4F8B\u6F14\u793A\u8BBE\u7F6E\u6B63\u786E\u7684ContentType\u3002","source":"@site/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u5E38\u89C1\u95EE\u9898.md","sourceDirName":"docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/docs/web/http-client-faq","permalink":"/en/docs/web/http-client-faq","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u5E38\u89C1\u95EE\u9898.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/web/http-client-faq","title":"HTTPClient-\u5E38\u89C1\u95EE\u9898","sidebar_position":9,"hide_title":true,"keywords":["HTTPClient","GoFrame","GoFrame\u6846\u67B6","gclient.Client","\u8FDE\u63A5\u6C60","\u9AD8\u6548","\u8D44\u6E90\u4F7F\u7528","\u77ED\u8FDE\u63A5\u8BF7\u6C42","\u8868\u5355\u8BF7\u6C42","ContentType"],"description":"\u89E3\u91CA\u5982\u4F55\u6709\u6548\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gclient.Client\u5BF9\u8C61\uFF0C\u4EE5\u63D0\u9AD8\u6548\u7387\u548C\u964D\u4F4E\u8D44\u6E90\u4F7F\u7528\u3002\u5305\u542Bgclient.Client\u5BF9\u8C61\u590D\u7528\u7684\u5EFA\u8BAE\u4EE5\u53CA\u5982\u4F55\u5904\u7406\u975E\u6CD5\u5B57\u7B26\u95EE\u9898\uFF0C\u901A\u8FC7\u793A\u4F8B\u6F14\u793A\u8BBE\u7F6E\u6B63\u786E\u7684ContentType\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u62E6\u622A\u5668/\u4E2D\u95F4\u4EF6","permalink":"/en/docs/web/http-client-middleware"},"next":{"title":"HTTPClient-\u76D1\u63A7\u6307\u6807","permalink":"/en/docs/web/http-client-metrics"}}'),l=t("785893"),s=t("250065");let o={slug:"/docs/web/http-client-faq",title:"HTTPClient-\u5E38\u89C1\u95EE\u9898",sidebar_position:9,hide_title:!0,keywords:["HTTPClient","GoFrame","GoFrame\u6846\u67B6","gclient.Client","\u8FDE\u63A5\u6C60","\u9AD8\u6548","\u8D44\u6E90\u4F7F\u7528","\u77ED\u8FDE\u63A5\u8BF7\u6C42","\u8868\u5355\u8BF7\u6C42","ContentType"],description:"\u89E3\u91CA\u5982\u4F55\u6709\u6548\u4F7F\u7528GoFrame\u6846\u67B6\u4E2D\u7684gclient.Client\u5BF9\u8C61\uFF0C\u4EE5\u63D0\u9AD8\u6548\u7387\u548C\u964D\u4F4E\u8D44\u6E90\u4F7F\u7528\u3002\u5305\u542Bgclient.Client\u5BF9\u8C61\u590D\u7528\u7684\u5EFA\u8BAE\u4EE5\u53CA\u5982\u4F55\u5904\u7406\u975E\u6CD5\u5B57\u7B26\u95EE\u9898\uFF0C\u901A\u8FC7\u793A\u4F8B\u6F14\u793A\u8BBE\u7F6E\u6B63\u786E\u7684ContentType\u3002"},c=void 0,r={},d=[{value:"\u662F\u5426\u9700\u8981\u4FDD\u5B58\u590D\u7528\u521B\u5EFA\u7684 <code>gclient.Client</code> \u5BF9\u8C61",id:"\u662F\u5426\u9700\u8981\u4FDD\u5B58\u590D\u7528\u521B\u5EFA\u7684-gclientclient-\u5BF9\u8C61",level:2},{value:"<code>invalid semicolon separator in query</code>",id:"invalid-semicolon-separator-in-query",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h2,{id:"\u662F\u5426\u9700\u8981\u4FDD\u5B58\u590D\u7528\u521B\u5EFA\u7684-gclientclient-\u5BF9\u8C61",children:["\u662F\u5426\u9700\u8981\u4FDD\u5B58\u590D\u7528\u521B\u5EFA\u7684 ",(0,l.jsx)(n.code,{children:"gclient.Client"})," \u5BF9\u8C61"]}),"\n",(0,l.jsxs)(n.p,{children:["\u65E0\u8BBA\u662F\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"g.Client"})," \u6216\u8005 ",(0,l.jsx)(n.code,{children:"gclient.New"})," \u65B9\u6CD5\u521B\u5EFA ",(0,l.jsx)(n.code,{children:"gclient.Client"})," \u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u90FD\u5E94\u8BE5\u4FDD\u5B58\u4E0B\u6765\u590D\u7528\uFF0C\u800C\u4E0D\u662F\u6BCF\u4E00\u6B21\u90FD\u65B0\u5EFA ",(0,l.jsx)(n.code,{children:"Client"})," \u5BF9\u8C61\uFF0C\u8FD9\u6837\u53EF\u4EE5\u63D0\u9AD8\u6548\u7387\u3001\u964D\u4F4E\u8D44\u6E90\u4F7F\u7528\u3001\u4F7F\u7528\u65B9\u5F0F\u5BF9 ",(0,l.jsx)(n.code,{children:"GC"})," \u53CB\u597D\u3002\u8BE5\u5BF9\u8C61\u5185\u5EFA\u8FDE\u63A5\u6C60\u8BBE\u8BA1\uFF0C\u53EF\u5145\u5206\u7BA1\u7406\u5927\u91CF\u7684\u77ED\u8FDE\u63A5\u8BF7\u6C42\u3002\u7531\u4E8E ",(0,l.jsx)(n.code,{children:"Client"})," \u5BF9\u8C61\u5BF9\u8D44\u6E90\u6D88\u8017\u4E0D\u662F\u5F88\u9AD8\uFF0C\u6240\u4EE5\u5F88\u591A\u540C\u5B66\u53EF\u80FD\u90FD\u6CA1\u592A\u6CE8\u610F\u8FD9\u4E2A\u70B9\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4EC0\u4E48\u60C5\u51B5\u4E0B\u6211\u5E94\u8BE5\u65B0\u5EFA ",(0,l.jsx)(n.code,{children:"gclient.Client"})," \u5BF9\u8C61\u800C\u4E0D\u662F\u590D\u7528\u5462\uFF1F\u4F60\u53EF\u4EE5\u6309\u7167\u4E1A\u52A1\u6A21\u5757\u7684\u89E3\u8026\u8BBE\u8BA1\uFF0C\u6BCF\u4E2A\u4E1A\u52A1\u6A21\u5757\u5355\u72EC\u7BA1\u7406\u7EF4\u62A4\u81EA\u5DF1\u7684 ",(0,l.jsx)(n.code,{children:"gclient.Client"})," \u5BF9\u8C61\u3002\u4E5F\u53EF\u4EE5\u5F53\u9488\u5BF9\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"Client"})," \u7684\u914D\u7F6E\u4E0D\u540C\u65F6\uFF0C\u90A3\u4E48\u53EF\u4EE5\u65B0\u5EFA\u4E0D\u540C\u7684 ",(0,l.jsx)(n.code,{children:"Client"})," \u6765\u4F7F\u7528\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"invalid-semicolon-separator-in-query",children:(0,l.jsx)(n.code,{children:"invalid semicolon separator in query"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u95EE\u9898\u539F\u56E0"}),"\uFF1A\u9ED8\u8BA4 ",(0,l.jsx)(n.strong,{children:"\u8868\u5355\u8BF7\u6C42"})," \u4E2D\u5E26 ",(0,l.jsx)(n.code,{children:";"})," \u5B57\u7B26\u662F\u975E\u6CD5\u7684\uFF08\u9700\u8981 ",(0,l.jsx)(n.code,{children:"urlencode"}),"\uFF09\u3002\u5177\u4F53\u8BF7\u53C2\u8003\u8BA8\u8BBA\uFF1A ",(0,l.jsx)(n.a,{href:"https://github.com/golang/go/issues/25192",children:"https://github.com/golang/go/issues/25192"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u9519\u8BEF\u793A\u4F8B"}),"\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl localhost:8000/Execute -d \'{\n    "Component": "mysql",\n    "ResourceId": "cdb-gy6hm0ee",\n    "Port": 6379,\n    "SQL": "show databases;",\n    "UserName": "root",\n    "Password": ""\n}\'\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u4FEE\u590D\u793A\u4F8B"}),"\uFF1A"]}),"\n",(0,l.jsxs)(n.p,{children:["\u63D0\u4EA4\u8BF7\u6C42\u7684\u65F6\u5019\u9700\u8981\u6CE8\u660E ",(0,l.jsx)(n.code,{children:"ContentType"}),"\uFF0C\u4F8B\u5982\u8FD9\u91CC\u5E94\u5F53\u6807\u660E\u662F ",(0,l.jsx)(n.code,{children:"JSON"})," \u8BF7\u6C42\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" localhost:8000/Execute -d \'{\n    "Component": "mysql",\n    "ResourceId": "cdb-gy6hm0ee",\n    "Port": 6379,\n    "SQL": "show databases;",\n    "UserName": "root",\n    "Password": ""\n}\'\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var i=t(667294);let l={},s=i.createContext(l);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);