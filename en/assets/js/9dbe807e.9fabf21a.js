"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["41504"],{789613:function(e,t,o){o.r(t),o.d(t,{metadata:()=>r,contentTitle:()=>i,default:()=>l,assets:()=>a,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362\u7279\u6027\uFF0C\u901A\u8FC7\u7279\u5B9A\u63A5\u53E3\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3A\u6240\u9700\u7C7B\u578B\uFF0C\u65E0\u8BBA\u662F\u76F4\u63A5\u7C7B\u578B\u8FD8\u662Fstruct\u5C5E\u6027\u3002\u6B64\u529F\u80FD\u589E\u5F3A\u4E86GoFrame\u6846\u67B6\u7684\u7075\u6D3B\u6027\uFF0C\u63D0\u4F9B\u9AD8\u6548\u89E3\u51B3\u65B9\u6848\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u5B9E\u73B0\u66F4\u9AD8\u7EA7\u7684\u6570\u636E\u5E93\u4EA4\u4E92\u3002","source":"@site/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/docs/core/gdb-senior-custom-type-converting","permalink":"/en/docs/core/gdb-senior-custom-type-converting","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/core/gdb-senior-custom-type-converting","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","sidebar_position":10,"hide_title":true,"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362\u7279\u6027\uFF0C\u901A\u8FC7\u7279\u5B9A\u63A5\u53E3\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3A\u6240\u9700\u7C7B\u578B\uFF0C\u65E0\u8BBA\u662F\u76F4\u63A5\u7C7B\u578B\u8FD8\u662Fstruct\u5C5E\u6027\u3002\u6B64\u529F\u80FD\u589E\u5F3A\u4E86GoFrame\u6846\u67B6\u7684\u7075\u6D3B\u6027\uFF0C\u63D0\u4F9B\u9AD8\u6548\u89E3\u51B3\u65B9\u6848\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u5B9E\u73B0\u66F4\u9AD8\u7EA7\u7684\u6570\u636E\u5E93\u4EA4\u4E92\u3002","keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","\u7C7B\u578B\u8F6C\u6362\u63A5\u53E3","\u67E5\u8BE2\u7ED3\u679C\u5904\u7406","\u7075\u6D3B\u6269\u5C55","\u9AD8\u6548\u89E3\u51B3\u65B9\u6848","struct\u5C5E\u6027","UnmarshalValue"]},"sidebar":"mainSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","permalink":"/en/docs/core/gdb-senior-nested-struct-support"},"next":{"title":"ORM\u63A5\u53E3\u5F00\u53D1","permalink":"/en/docs/core/gdb-interface"}}'),n=o("785893"),s=o("250065");let c={slug:"/docs/core/gdb-senior-custom-type-converting",title:"ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362",sidebar_position:10,hide_title:!0,description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528ORM\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362\u7279\u6027\uFF0C\u901A\u8FC7\u7279\u5B9A\u63A5\u53E3\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u4E3A\u6240\u9700\u7C7B\u578B\uFF0C\u65E0\u8BBA\u662F\u76F4\u63A5\u7C7B\u578B\u8FD8\u662Fstruct\u5C5E\u6027\u3002\u6B64\u529F\u80FD\u589E\u5F3A\u4E86GoFrame\u6846\u67B6\u7684\u7075\u6D3B\u6027\uFF0C\u63D0\u4F9B\u9AD8\u6548\u89E3\u51B3\u65B9\u6848\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u5B9E\u73B0\u66F4\u9AD8\u7EA7\u7684\u6570\u636E\u5E93\u4EA4\u4E92\u3002",keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","\u7C7B\u578B\u8F6C\u6362\u63A5\u53E3","\u67E5\u8BE2\u7ED3\u679C\u5904\u7406","\u7075\u6D3B\u6269\u5C55","\u9AD8\u6548\u89E3\u51B3\u65B9\u6848","struct\u5C5E\u6027","UnmarshalValue"]},i=void 0,a={},d=[];function u(e){let t={a:"a",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(t.p,{children:["\u5F53\u6211\u4EEC\u9700\u8981\u5C06\u67E5\u8BE2\u7684\u7ED3\u679C\u8F6C\u6362\u5230\u81EA\u5B9A\u4E49\u7684\u7C7B\u578B\u4E2D\uFF0C\u65E0\u8BBA\u662F\u4F5C\u4E3A\u76F4\u63A5\u8F6C\u6362\u7684\u7C7B\u578B\u8FD8\u662F\u4F5C\u4E3A ",(0,n.jsx)(t.code,{children:"struct"})," \u7684\u5C5E\u6027\uFF0C\u90FD\u53EF\u4EE5\u901A\u8FC7\u5B9E\u73B0\u7279\u5B9A\u7684\u63A5\u53E3\u6765\u5B9E\u73B0\u3002\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u53C2\u8003 ",(0,n.jsx)(t.a,{href:"/en/docs/core/gconv-unmarshal-value",children:"\u7C7B\u578B\u8F6C\u6362-UnmarshalValue"})," \u7AE0\u8282\u3002"]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return i},a:function(){return c}});var r=o(667294);let n={},s=r.createContext(n);function c(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);