"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["93367"],{96420:function(e,t,r){r.r(t),r.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","description":"GoFrame\u6846\u67B6\u4E2DORM\u7EC4\u4EF6\u5BF9\u5185\u5D4C\u7ED3\u6784\u7684\u9AD8\u7EA7\u7279\u6027\u652F\u6301\uFF0C\u5305\u62EC\u7ED3\u6784\u4F53\u7684\u53C2\u6570\u4F20\u9012\u548C\u7ED3\u679C\u5904\u7406\u3002\u901A\u8FC7\u793A\u4F8B\u8BB2\u89E3\u4E86\u5982\u4F55\u5728\u5B9E\u8DF5\u4E2D\u5E94\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u652F\u6301\u591A\u5C42\u7EA7\u7684struct\u5D4C\u5957\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027","slug":"/docs/core/gdb-senior-nested-struct-support","permalink":"/2.7.x/docs/core/gdb-senior-nested-struct-support","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u9AD8\u7EA7\u7279\u6027/ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":9,"frontMatter":{"slug":"/docs/core/gdb-senior-nested-struct-support","title":"ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301","sidebar_position":9,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM","\u5185\u5D4C\u7ED3\u6784","\u53C2\u6570\u4F20\u9012","\u7ED3\u679C\u5904\u7406","struct","\u5D4C\u5957struct","\u9AD8\u7EA7\u7279\u6027","\u6570\u636E\u5E93\u652F\u6301"],"description":"GoFrame\u6846\u67B6\u4E2DORM\u7EC4\u4EF6\u5BF9\u5185\u5D4C\u7ED3\u6784\u7684\u9AD8\u7EA7\u7279\u6027\u652F\u6301\uFF0C\u5305\u62EC\u7ED3\u6784\u4F53\u7684\u53C2\u6570\u4F20\u9012\u548C\u7ED3\u679C\u5904\u7406\u3002\u901A\u8FC7\u793A\u4F8B\u8BB2\u89E3\u4E86\u5982\u4F55\u5728\u5B9E\u8DF5\u4E2D\u5E94\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u652F\u6301\u591A\u5C42\u7EA7\u7684struct\u5D4C\u5957\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u8FDE\u63A5\u6C60\u72B6\u6001","permalink":"/2.7.x/docs/core/gdb-senior-connection-pool"},"next":{"title":"ORM\u9AD8\u7EA7\u7279\u6027-\u81EA\u5B9A\u4E49\u7C7B\u578B\u8F6C\u6362","permalink":"/2.7.x/docs/core/gdb-senior-custom-type-converting"}}'),n=r("785893"),o=r("250065");let i={slug:"/docs/core/gdb-senior-nested-struct-support",title:"ORM\u9AD8\u7EA7\u7279\u6027-\u5185\u5D4C\u7ED3\u6784\u652F\u6301",sidebar_position:9,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM","\u5185\u5D4C\u7ED3\u6784","\u53C2\u6570\u4F20\u9012","\u7ED3\u679C\u5904\u7406","struct","\u5D4C\u5957struct","\u9AD8\u7EA7\u7279\u6027","\u6570\u636E\u5E93\u652F\u6301"],description:"GoFrame\u6846\u67B6\u4E2DORM\u7EC4\u4EF6\u5BF9\u5185\u5D4C\u7ED3\u6784\u7684\u9AD8\u7EA7\u7279\u6027\u652F\u6301\uFF0C\u5305\u62EC\u7ED3\u6784\u4F53\u7684\u53C2\u6570\u4F20\u9012\u548C\u7ED3\u679C\u5904\u7406\u3002\u901A\u8FC7\u793A\u4F8B\u8BB2\u89E3\u4E86\u5982\u4F55\u5728\u5B9E\u8DF5\u4E2D\u5E94\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u652F\u6301\u591A\u5C42\u7EA7\u7684struct\u5D4C\u5957\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002"},c=void 0,d={},a=[];function u(e){let t={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"GoFrame ORM"})," \u7EC4\u4EF6\u9488\u5BF9\u4E8E ",(0,n.jsx)(t.code,{children:"struct"})," \u5185\u5D4C\u7ED3\u6784\u63D0\u4F9B\u4E86\u826F\u597D\u7684\u652F\u6301\uFF0C\u5305\u62EC\u53C2\u6570\u4F20\u9012\u3001\u7ED3\u679C\u5904\u7406\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'type Base struct {\n    Uid        int         `orm:"uid"`\n    CreateAt   *gtime.Time `orm:"create_at"`\n    UpdateAt   *gtime.Time `orm:"update_at"`\n    DeleteAt   *gtime.Time `orm:"delete_at"`\n}\ntype User struct {\n    Base\n    Passport   string `orm:"passport"`\n    Password   string `orm:"password"`\n    Nickname   string `orm:"nickname"`\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u5E76\u4E14\uFF0C\u65E0\u8BBA\u591A\u5C11\u5C42\u7EA7\u7684 ",(0,n.jsx)(t.code,{children:"struct"})," \u5D4C\u5957\uFF0C ",(0,n.jsx)(t.code,{children:"ORM"})," \u7684\u53C2\u6570\u4F20\u9012\u548C\u7ED3\u679C\u5904\u7406\u90FD\u652F\u6301\u3002"]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var s=r(667294);let n={},o=s.createContext(n);function i(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);