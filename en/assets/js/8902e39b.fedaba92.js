"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[67793],{212037:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027","description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528ORM\u94fe\u5f0f\u64cd\u4f5c\u5b9e\u73b0Handler\u7279\u6027\uff0c\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u590d\u7528\u5e38\u89c1\u7684\u67e5\u8be2\u903b\u8f91\u548c\u5206\u9875\u64cd\u4f5c\uff0c\u4ece\u800c\u7b80\u5316\u4ee3\u7801\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002Handler\u7279\u6027\u5141\u8bb8\u5f00\u53d1\u8005\u5b9a\u4e49\u901a\u7528\u903b\u8f91\u5e76\u5e94\u7528\u4e8e\u6570\u636e\u5e93\u6a21\u578b\uff0c\u5b9e\u73b0\u66f4\u4e3a\u7b80\u6d01\u548c\u53ef\u7ef4\u62a4\u7684\u4ee3\u7801\u7ed3\u6784\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c","slug":"/docs/core/gdb-chaining-handler","permalink":"/en/2.7.x/docs/core/gdb-chaining-handler","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":14,"frontMatter":{"slug":"/docs/core/gdb-chaining-handler","title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027","sidebar_position":14,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM\u94fe\u5f0f\u64cd\u4f5c","Handler\u7279\u6027","\u67e5\u8be2\u793a\u4f8b","\u5206\u9875\u793a\u4f8b","\u4ee3\u7801\u590d\u7528","\u6570\u636e\u5e93\u64cd\u4f5c","Go\u8bed\u8a00","gdb\u5e93"],"description":"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528ORM\u94fe\u5f0f\u64cd\u4f5c\u5b9e\u73b0Handler\u7279\u6027\uff0c\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u590d\u7528\u5e38\u89c1\u7684\u67e5\u8be2\u903b\u8f91\u548c\u5206\u9875\u64cd\u4f5c\uff0c\u4ece\u800c\u7b80\u5316\u4ee3\u7801\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002Handler\u7279\u6027\u5141\u8bb8\u5f00\u53d1\u8005\u5b9a\u4e49\u901a\u7528\u903b\u8f91\u5e76\u5e94\u7528\u4e8e\u6570\u636e\u5e93\u6a21\u578b\uff0c\u5b9e\u73b0\u66f4\u4e3a\u7b80\u6d01\u548c\u53ef\u7ef4\u62a4\u7684\u4ee3\u7801\u7ed3\u6784\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-Hook\u7279\u6027","permalink":"/en/2.7.x/docs/core/gdb-chaining-hook"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501","permalink":"/en/2.7.x/docs/core/gdb-chaining-locks"}}');var t=r(474848),a=r(28453);const o={slug:"/docs/core/gdb-chaining-handler",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",sidebar_position:14,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM\u94fe\u5f0f\u64cd\u4f5c","Handler\u7279\u6027","\u67e5\u8be2\u793a\u4f8b","\u5206\u9875\u793a\u4f8b","\u4ee3\u7801\u590d\u7528","\u6570\u636e\u5e93\u64cd\u4f5c","Go\u8bed\u8a00","gdb\u5e93"],description:"\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528ORM\u94fe\u5f0f\u64cd\u4f5c\u5b9e\u73b0Handler\u7279\u6027\uff0c\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u590d\u7528\u5e38\u89c1\u7684\u67e5\u8be2\u903b\u8f91\u548c\u5206\u9875\u64cd\u4f5c\uff0c\u4ece\u800c\u7b80\u5316\u4ee3\u7801\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002Handler\u7279\u6027\u5141\u8bb8\u5f00\u53d1\u8005\u5b9a\u4e49\u901a\u7528\u903b\u8f91\u5e76\u5e94\u7528\u4e8e\u6570\u636e\u5e93\u6a21\u578b\uff0c\u5b9e\u73b0\u66f4\u4e3a\u7b80\u6d01\u548c\u53ef\u7ef4\u62a4\u7684\u4ee3\u7801\u7ed3\u6784\u3002"},i=void 0,s={},c=[{value:"\u793a\u4f8b1\uff0c\u67e5\u8be2",id:"\u793a\u4f8b1\u67e5\u8be2",level:2},{value:"\u793a\u4f8b2\uff0c\u5206\u9875",id:"\u793a\u4f8b2\u5206\u9875",level:2}];function l(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Handler"})," \u7279\u6027\u5141\u8bb8\u60a8\u8f7b\u677e\u5730\u590d\u7528\u5e38\u89c1\u7684\u903b\u8f91\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b1\u67e5\u8be2",children:"\u793a\u4f8b1\uff0c\u67e5\u8be2"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:'func AmountGreaterThan1000(m *gdb.Model) *gdb.Model {\n    return m.WhereGT("amount", 1000)\n}\n\nfunc PaidWithCreditCard(m *gdb.Model) *gdb.Model {\n    return m.Where("pay_mode_sign", "credit_card")\n}\n\nfunc PaidWithCod(m *gdb.Model) *gdb.Model {\n    return m.Where("pay_mode_sign", "cod")\n}\n\nfunc OrderStatus(statuses []string) func(m *gdb.Model) *gdb.Model {\n    return func(m *gdb.Model) *gdb.Model {\n        return m.Where("status", statuses)\n    }\n}\n\nvar (\n    m = g.Model("product_order")\n)\n\nm.Handler(AmountGreaterThan1000, PaidWithCreditCard).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'credit_card\'\n// \u67e5\u627e\u6240\u6709\u91d1\u989d\u5927\u4e8e 1000 \u7684\u4fe1\u7528\u5361\u8ba2\u5355\n\nm.Handler(AmountGreaterThan1000, PaidWithCod).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `pay_mode_sign`=\'cod\'\n// \u67e5\u627e\u6240\u6709\u91d1\u989d\u5927\u4e8e 1000 \u7684 COD \u8ba2\u5355\n\nm.Handler(AmountGreaterThan1000, OrderStatus([]string{"paid", "shipped"})).Scan(&orders)\n// SELECT * FROM `product_order` WHERE `amount`>1000 AND `status` IN(\'paid\',\'shipped\')\n// \u67e5\u627e\u6240\u6709\u91d1\u989d\u5927\u4e8e1000 \u7684\u5df2\u4ed8\u6b3e\u6216\u5df2\u53d1\u8d27\u8ba2\u5355\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b2\u5206\u9875",children:"\u793a\u4f8b2\uff0c\u5206\u9875"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:"func Paginate(r *ghttp.Request) func(m *gdb.Model) *gdb.Model {\n    return func(m *gdb.Model) *gdb.Model {\n        type Pagination struct {\n            Page int\n            Size int\n        }\n        var pagination Pagination\n        _ = r.Parse(&pagination)\n        switch {\n        case pagination.Size > 100:\n            pagination.Size = 100\n\n        case pagination.Size <= 0:\n            pagination.Size = 10\n        }\n        return m.Page(pagination.Page, pagination.Size)\n    }\n}\n\nm.Handler(Paginate(r)).Scan(&users)\nm.Handler(Paginate(r)).Scan(&articles)\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>i});var d=r(296540);const t={},a=d.createContext(t);function o(n){const e=d.useContext(a);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),d.createElement(a.Provider,{value:e},n.children)}}}]);