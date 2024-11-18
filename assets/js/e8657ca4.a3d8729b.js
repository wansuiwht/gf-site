"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["40927"],{642015:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>s});var i=JSON.parse('{"id":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-ScanAndCount","title":"ORM\u67E5\u8BE2-ScanAndCount","description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u67E5\u8BE2\u65F6\u7B80\u5316\u5206\u9875\u67E5\u8BE2\u573A\u666F\u3002\u901A\u8FC7ScanAndCount\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E00\u6B21\u64CD\u4F5C\u4E2D\u5B8C\u6210\u6570\u636E\u67E5\u8BE2\u548C\u603B\u6570\u91CF\u67E5\u8BE2\uFF0C\u6709\u6548\u51CF\u5C11\u4EE3\u7801\u5197\u4F59\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u9002\u7528\u4E8E\u9700\u8981\u540C\u65F6\u83B7\u53D6\u6570\u636E\u548C\u5176\u603B\u6570\u91CF\u7684\u60C5\u51B5\uFF0C\u5982\u5206\u9875\u67E5\u8BE2\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-ScanAndCount.md","sourceDirName":"docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2","slug":"/docs/core/gdb-chaining-query-scan-and-count","permalink":"/2.7.x/docs/core/gdb-chaining-query-scan-and-count","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u6570\u636E\u67E5\u8BE2/ORM\u67E5\u8BE2-ScanAndCount.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/core/gdb-chaining-query-scan-and-count","title":"ORM\u67E5\u8BE2-ScanAndCount","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","ORM\u67E5\u8BE2","ScanAndCount","\u5206\u9875\u67E5\u8BE2","Limit","Page","\u6570\u636E\u67E5\u8BE2","\u603B\u6570\u91CF\u67E5\u8BE2","\u94FE\u5F0F\u67E5\u8BE2"],"description":"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u67E5\u8BE2\u65F6\u7B80\u5316\u5206\u9875\u67E5\u8BE2\u573A\u666F\u3002\u901A\u8FC7ScanAndCount\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E00\u6B21\u64CD\u4F5C\u4E2D\u5B8C\u6210\u6570\u636E\u67E5\u8BE2\u548C\u603B\u6570\u91CF\u67E5\u8BE2\uFF0C\u6709\u6548\u51CF\u5C11\u4EE3\u7801\u5197\u4F59\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u9002\u7528\u4E8E\u9700\u8981\u540C\u65F6\u83B7\u53D6\u6570\u636E\u548C\u5176\u603B\u6570\u91CF\u7684\u60C5\u51B5\uFF0C\u5982\u5206\u9875\u67E5\u8BE2\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u67E5\u8BE2-Scan","permalink":"/2.7.x/docs/core/gdb-chaining-query-scan"},"next":{"title":"ORM\u67E5\u8BE2-LeftJoin/RightJoin/InnerJoin","permalink":"/2.7.x/docs/core/gdb-chaining-query-join"}}'),o=t("785893"),r=t("250065");let s={slug:"/docs/core/gdb-chaining-query-scan-and-count",title:"ORM\u67E5\u8BE2-ScanAndCount",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","ORM\u67E5\u8BE2","ScanAndCount","\u5206\u9875\u67E5\u8BE2","Limit","Page","\u6570\u636E\u67E5\u8BE2","\u603B\u6570\u91CF\u67E5\u8BE2","\u94FE\u5F0F\u67E5\u8BE2"],description:"\u5728\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884CORM\u67E5\u8BE2\u65F6\u7B80\u5316\u5206\u9875\u67E5\u8BE2\u573A\u666F\u3002\u901A\u8FC7ScanAndCount\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4E00\u6B21\u64CD\u4F5C\u4E2D\u5B8C\u6210\u6570\u636E\u67E5\u8BE2\u548C\u603B\u6570\u91CF\u67E5\u8BE2\uFF0C\u6709\u6548\u51CF\u5C11\u4EE3\u7801\u5197\u4F59\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u9002\u7528\u4E8E\u9700\u8981\u540C\u65F6\u83B7\u53D6\u6570\u636E\u548C\u5176\u603B\u6570\u91CF\u7684\u60C5\u51B5\uFF0C\u5982\u5206\u9875\u67E5\u8BE2\u3002"},c=void 0,d={},a=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function l(n){let e={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728\u5206\u9875\u67E5\u8BE2\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u5F80\u5F80\u9700\u8981\u5148\u8C03\u7528 ",(0,o.jsx)(e.code,{children:"Scan"})," \u65B9\u6CD5\u7ED3\u5408 ",(0,o.jsx)(e.code,{children:"Limit/Page"})," \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\u67E5\u8BE2\u5217\u8868\uFF0C\u968F\u540E\u518D\u53BB\u6389 ",(0,o.jsx)(e.code,{children:"Limit/Page"})," \u94FE\u5F0F\u64CD\u4F5C\u65B9\u6CD5\u67E5\u8BE2\u603B\u6570\u91CF\u3002\u8FD9\u4E00\u8FC7\u7A0B\u8F83\u4E3A\u7E41\u7410\uFF0C\u56E0\u6B64\u4ECE ",(0,o.jsx)(e.code,{children:"v2.5.0"})," \u7248\u672C\u5F00\u59CB\uFF0C\u6846\u67B6\u63D0\u4F9B\u4E86 ",(0,o.jsx)(e.code,{children:"ScanAndCount"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u7B80\u5316\u5206\u9875\u67E5\u8BE2\u7684\u573A\u666F\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"\u793A\u4F8B\u4EE3\u7801\u6765\u6E90\u4E8E\u4E1A\u52A1\u9879\u76EE\u6848\u4F8B\uFF0C\u4EC5\u4F9B\u53C2\u8003\u7406\u89E3\uFF0C\u65E0\u6CD5\u72EC\u7ACB\u8FD0\u884C\u3002"})}),"\n",(0,o.jsx)(e.p,{children:"\u4F7F\u7528\u4F20\u7EDF\u7684\u5206\u9875\u67E5\u8BE2\u903B\u8F91\u4EE3\u7801\uFF1A"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"// GetList \u83B7\u53D6\u5B9E\u4F8B\u7684\u7528\u6237\u5217\u8868.\nfunc (s sUserInfo) GetList(ctx context.Context, in model.UserInfoGetListInput) (items []entity.UserInfo, total int, err error) {\n    items = make([]entity.UserInfo, 0)\n    orm := dao.UserInfo.Ctx(ctx).OmitEmpty().Where(do.UserInfo{\n        ResourceId: in.ResourceId,\n        Status:     in.Statuses,\n    })\n    err = orm.Order(in.OrderBy, in.OrderDirection).Limit(in.Offset, in.Limit).Scan(&items)\n    if err != nil {\n        return\n    }\n    total, err = orm.Count()\n    return\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,o.jsx)(e.code,{children:"ScanAndCount"})," \u65B9\u6CD5\u5B9E\u73B0\u5206\u9875\u67E5\u8BE2\uFF1A"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"// GetList \u83B7\u53D6\u5B9E\u4F8B\u7684\u7528\u6237\u5217\u8868.\nfunc (s sUserInfo) GetList(ctx context.Context, in model.UserInfoGetListInput) (items []entity.UserInfo, total int, err error) {\n    items = make([]entity.UserInfo, 0)\n    err = dao.UserInfo.Ctx(ctx).OmitEmpty().\n        Where(do.UserInfo{\n            ResourceId: in.ResourceId,\n            Status:     in.Statuses,\n        }).\n        Order(in.OrderBy, in.OrderDirection).\n        Limit(in.Offset, in.Limit).\n        ScanAndCount(&items, &total, true)\n    return\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u4EC5\u7528\u4E8E\u9700\u8981\u540C\u65F6\u67E5\u8BE2\u6570\u636E\u548C\u603B\u6570\u91CF\u7684\u573A\u666F\uFF0C\u4E00\u822C\u4E3A\u5206\u9875\u573A\u666F\u3002"}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"ScanAndCount"})," \u7684\u7B2C ",(0,o.jsx)(e.code,{children:"3"})," \u4E2A\u53C2\u6570 ",(0,o.jsx)(e.code,{children:"useFieldForCount"})," \u8868\u793A\u662F\u5426\u5728\u6267\u884C ",(0,o.jsx)(e.code,{children:"Count"})," \u64CD\u4F5C\u7684\u65F6\u5019\u5C06 ",(0,o.jsx)(e.code,{children:"Fields"})," \u4F5C\u4E3A ",(0,o.jsx)(e.code,{children:"Count"})," \u53C2\u6570\uFF0C\u4E00\u822C\u4E3A ",(0,o.jsx)(e.code,{children:"true"})," \u5373\u53EF\u3002\u4F20\u9012 ",(0,o.jsx)(e.code,{children:"false"})," \u8868\u793A\u6267\u884C ",(0,o.jsx)(e.code,{children:"COUNT(1)"})," \u67E5\u8BE2\u603B\u6570\u91CF\u3002"]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return s}});var i=t(667294);let o={},r=i.createContext(o);function s(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);