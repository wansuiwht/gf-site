"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["16547"],{621443:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType","title":"HTTPClient-\u81EA\u5B9A\u4E49ContentType","description":"\u793A\u4F8B1\uFF0C\u63D0\u4EA4 Json \u8BF7\u6C42","source":"@site/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49ContentType.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"HTTPClient-\u81EA\u5B9A\u4E49ContentType","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Header","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Header"},"next":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Transport","permalink":"/2.5.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Transport"}}'),o=t("785893"),r=t("250065");let s={title:"HTTPClient-\u81EA\u5B9A\u4E49ContentType",sidebar_position:4,hide_title:!0},d=void 0,l={},c=[{value:"\u793A\u4F8B1\uFF0C\u63D0\u4EA4 <code>Json</code> \u8BF7\u6C42",id:"\u793A\u4F8B1\u63D0\u4EA4-json-\u8BF7\u6C42",level:2},{value:"\u793A\u4F8B2\uFF0C\u63D0\u4EA4 <code>Xml</code> \u8BF7\u6C42",id:"\u793A\u4F8B2\u63D0\u4EA4-xml-\u8BF7\u6C42",level:2},{value:"\u793A\u4F8B3\uFF0C\u81EA\u5B9A\u4E49 <code>ContentType</code>",id:"\u793A\u4F8B3\u81EA\u5B9A\u4E49-contenttype",level:2}];function a(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h2,{id:"\u793A\u4F8B1\u63D0\u4EA4-json-\u8BF7\u6C42",children:["\u793A\u4F8B1\uFF0C\u63D0\u4EA4 ",(0,o.jsx)(n.code,{children:"Json"})," \u8BF7\u6C42"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentJson().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8BE5\u8BF7\u6C42\u5C06\u4F1A\u5C06 ",(0,o.jsx)(n.code,{children:"Content-Type"})," \u8BBE\u7F6E\u4E3A ",(0,o.jsx)(n.code,{children:"application/json"}),"\uFF0C\u5E76\u4E14\u5C06\u63D0\u4EA4\u53C2\u6570\u81EA\u52A8\u7F16\u7801\u4E3A ",(0,o.jsx)(n.code,{children:"Json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}\n'})}),"\n",(0,o.jsxs)(n.h2,{id:"\u793A\u4F8B2\u63D0\u4EA4-xml-\u8BF7\u6C42",children:["\u793A\u4F8B2\uFF0C\u63D0\u4EA4 ",(0,o.jsx)(n.code,{children:"Xml"})," \u8BF7\u6C42"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentXml().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8BE5\u8BF7\u6C42\u5C06\u4F1A\u5C06 ",(0,o.jsx)(n.code,{children:"Content-Type"})," \u8BBE\u7F6E\u4E3A ",(0,o.jsx)(n.code,{children:"application/xml"}),"\uFF0C\u5E76\u4E14\u5C06\u63D0\u4EA4\u53C2\u6570\u81EA\u52A8\u7F16\u7801\u4E3A ",(0,o.jsx)(n.code,{children:"Xml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"<doc><amount>19.99</amount><create_time>2020-03-26 12:00:00</create_time><sku_id>10000</sku_id><uid>1</uid></doc>\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"\u793A\u4F8B3\u81EA\u5B9A\u4E49-contenttype",children:["\u793A\u4F8B3\uFF0C\u81EA\u5B9A\u4E49 ",(0,o.jsx)(n.code,{children:"ContentType"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"ContentType"})," \u65B9\u6CD5\u81EA\u5B9A\u4E49\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684 ",(0,o.jsx)(n.code,{children:"ContentType"}),"\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'g.Client().ContentType("application/json").PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(667294);let o={},r=i.createContext(o);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);