"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["42213"],{785971:function(e,o,t){t.r(o),t.d(o,{metadata:()=>n,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>d,frontMatter:()=>s});var n=JSON.parse('{"id":"docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u7C7B\u578B\u8F6C\u6362-gconv","title":"\u7C7B\u578B\u8F6C\u6362-gconv","description":"GoFrame\u6846\u67B6\u4E2D\u7684\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u7531gconv\u6A21\u5757\u5B9E\u73B0\u3002\u901A\u8FC7\u5F15\u7528\u5177\u4F53\u7AE0\u8282\uFF0C\u7528\u6237\u53EF\u4EE5\u6DF1\u5165\u4E86\u89E3\u5982\u4F55\u5728GoFrame\u4E2D\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u4EE5\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u53EF\u9760\u6027\u3002","source":"@site/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u7C7B\u578B\u8F6C\u6362-gconv.md","sourceDirName":"docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177","slug":"/docs/components/util-gconv","permalink":"/en/docs/components/util-gconv","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u7EC4\u4EF6\u5217\u8868/\u5B9E\u7528\u5DE5\u5177/\u7C7B\u578B\u8F6C\u6362-gconv.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/components/util-gconv","title":"\u7C7B\u578B\u8F6C\u6362-gconv","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","gconv\u6A21\u5757","\u7C7B\u578B\u8F6C\u6362","GoFrame\u7C7B\u578B\u8F6C\u6362","gconv\u7C7B\u578B\u8F6C\u6362","GoFrame gconv","GoFrame\u6587\u6863","GoFrame\u7EC4\u4EF6","\u6838\u5FC3\u529F\u80FD"],"description":"GoFrame\u6846\u67B6\u4E2D\u7684\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u7531gconv\u6A21\u5757\u5B9E\u73B0\u3002\u901A\u8FC7\u5F15\u7528\u5177\u4F53\u7AE0\u8282\uFF0C\u7528\u6237\u53EF\u4EE5\u6DF1\u5165\u4E86\u89E3\u5982\u4F55\u5728GoFrame\u4E2D\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u4EE5\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u53EF\u9760\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u5143\u6570\u636E-gmeta","permalink":"/en/docs/components/util-gmeta"},"next":{"title":"\u6570\u636E\u6821\u9A8C-gvalid","permalink":"/en/docs/components/util-gvalid"}}'),c=t("785893"),r=t("250065");let s={slug:"/docs/components/util-gconv",title:"\u7C7B\u578B\u8F6C\u6362-gconv",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","gconv\u6A21\u5757","\u7C7B\u578B\u8F6C\u6362","GoFrame\u7C7B\u578B\u8F6C\u6362","gconv\u7C7B\u578B\u8F6C\u6362","GoFrame gconv","GoFrame\u6587\u6863","GoFrame\u7EC4\u4EF6","\u6838\u5FC3\u529F\u80FD"],description:"GoFrame\u6846\u67B6\u4E2D\u7684\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u7531gconv\u6A21\u5757\u5B9E\u73B0\u3002\u901A\u8FC7\u5F15\u7528\u5177\u4F53\u7AE0\u8282\uFF0C\u7528\u6237\u53EF\u4EE5\u6DF1\u5165\u4E86\u89E3\u5982\u4F55\u5728GoFrame\u4E2D\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u4EE5\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u4EE3\u7801\u53EF\u9760\u6027\u3002"},i=void 0,a={},d=[];function l(e){let o={a:"a",code:"code",p:"p",...(0,r.a)(),...e.components};return(0,c.jsxs)(o.p,{children:["\u7C7B\u578B\u8F6C\u6362\u529F\u80FD\u7531 ",(0,c.jsx)(o.code,{children:"gconv"})," \u6A21\u5757\u5B9E\u73B0\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,c.jsx)(o.a,{href:"/en/docs/core/gconv",children:"\u7C7B\u578B\u8F6C\u6362"})," \u7AE0\u8282\u3002"]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,o,t){t.d(o,{Z:function(){return i},a:function(){return s}});var n=t(667294);let c={},r=n.createContext(c);function s(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);