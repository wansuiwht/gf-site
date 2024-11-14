"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[61528],{241272:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406","title":"Redis-\u914d\u7f6e\u7ba1\u7406","description":"gredis \u7ec4\u4ef6\u652f\u6301\u4e24\u79cd\u65b9\u5f0f\u6765\u7ba1\u7406 redis \u914d\u7f6e\u548c\u83b7\u53d6 redis \u5bf9\u8c61\uff0c\u4e00\u79cd\u662f\u901a\u8fc7 \u914d\u7f6e\u7ec4\u4ef6+\u5355\u4f8b\u5bf9\u8c61 \u7684\u65b9\u5f0f\uff1b\u4e00\u79cd\u662f\u6a21\u5757\u5316\u901a\u8fc7 \u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5 \u53ca\u5bf9\u8c61\u521b\u5efa\u65b9\u6cd5\u3002","source":"@site/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406","permalink":"/en/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406.md","tags":[],"version":"2.4.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"Redis-\u914d\u7f6e\u7ba1\u7406","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"NoSQL Redis","permalink":"/en/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/"},"next":{"title":"Redis-\u4f7f\u7528\u793a\u4f8b","permalink":"/en/2.4.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b"}}');var i=n(474848),r=n(28453);const c={title:"Redis-\u914d\u7f6e\u7ba1\u7406",sidebar_position:0,hide_title:!0},l=void 0,t={},h=[{value:"\u914d\u7f6e\u6587\u4ef6\uff08\u63a8\u8350\uff09",id:"\u914d\u7f6e\u6587\u4ef6\u63a8\u8350",level:2},{value:"\u5355\u5b9e\u4f8b\u914d\u7f6e",id:"\u5355\u5b9e\u4f8b\u914d\u7f6e",level:3},{value:"\u96c6\u7fa4\u5316\u914d\u7f6e",id:"\u96c6\u7fa4\u5316\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u9879\u8bf4\u660e",id:"\u914d\u7f6e\u9879\u8bf4\u660e",level:3},{value:"\u914d\u7f6e\u65b9\u6cd5\uff08\u9ad8\u7ea7\uff09",id:"\u914d\u7f6e\u65b9\u6cd5\u9ad8\u7ea7",level:2}];function o(e){const d={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gredis"})," \u7ec4\u4ef6\u652f\u6301\u4e24\u79cd\u65b9\u5f0f\u6765\u7ba1\u7406 ",(0,i.jsx)(d.code,{children:"redis"})," \u914d\u7f6e\u548c\u83b7\u53d6 ",(0,i.jsx)(d.code,{children:"redis"})," \u5bf9\u8c61\uff0c\u4e00\u79cd\u662f\u901a\u8fc7 ",(0,i.jsx)(d.strong,{children:"\u914d\u7f6e\u7ec4\u4ef6+\u5355\u4f8b\u5bf9\u8c61"})," \u7684\u65b9\u5f0f\uff1b\u4e00\u79cd\u662f\u6a21\u5757\u5316\u901a\u8fc7 ",(0,i.jsx)(d.strong,{children:"\u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5"})," \u53ca\u5bf9\u8c61\u521b\u5efa\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u914d\u7f6e\u6587\u4ef6\u63a8\u8350",children:"\u914d\u7f6e\u6587\u4ef6\uff08\u63a8\u8350\uff09"}),"\n",(0,i.jsxs)(d.p,{children:["\u7edd\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"g.Redis"})," \u5355\u4f8b\u65b9\u5f0f\u6765\u64cd\u4f5c ",(0,i.jsx)(d.code,{children:"redis"}),"\u3002\u56e0\u6b64\u540c\u6837\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406 ",(0,i.jsx)(d.code,{children:"Redis"})," \u914d\u7f6e\uff0c\u5728 ",(0,i.jsx)(d.code,{children:"config.yaml"})," \u4e2d\u7684\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(d.h3,{id:"\u5355\u5b9e\u4f8b\u914d\u7f6e",children:"\u5355\u5b9e\u4f8b\u914d\u7f6e"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{children:"# Redis \u914d\u7f6e\u793a\u4f8b\nredis:\n  # \u5355\u5b9e\u4f8b\u914d\u7f6e\u793a\u4f8b1\n  default:\n    address: 127.0.0.1:6379\n    db:      1\n\n  # \u5355\u5b9e\u4f8b\u914d\u7f6e\u793a\u4f8b2\n  cache:\n    address:     127.0.0.1:6379\n    db:          1\n    pass:        123456\n    idleTimeout: 600\n"})}),"\n",(0,i.jsxs)(d.p,{children:["\u5176\u4e2d\u7684 ",(0,i.jsx)(d.code,{children:"default"})," \u548c ",(0,i.jsx)(d.code,{children:"cache"})," \u5206\u522b\u8868\u793a\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\uff0c\u6211\u4eec\u5728\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8be5\u540d\u79f0\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684 ",(0,i.jsx)(d.code,{children:"redis"})," \u5355\u4f8b\u5bf9\u8c61\u3002\u4e0d\u4f20\u9012\u5206\u7ec4\u540d\u79f0\u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"redis.default"})," \u914d\u7f6e\u5206\u7ec4\u9879)\u6765\u83b7\u53d6\u5bf9\u5e94\u914d\u7f6e\u7684 ",(0,i.jsx)(d.code,{children:"redis"})," \u5ba2\u6237\u7aef\u5355\u4f8b\u5bf9\u8c61\u3002"]}),"\n",(0,i.jsx)(d.h3,{id:"\u96c6\u7fa4\u5316\u914d\u7f6e",children:"\u96c6\u7fa4\u5316\u914d\u7f6e"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{children:"# Redis \u914d\u7f6e\u793a\u4f8b\nredis:\n   # \u96c6\u7fa4\u6a21\u5f0f\u914d\u7f6e\u65b9\u6cd5\n  group:\n    address: 127.0.0.1:6379,127.0.0.1:6370\n    db:      1\n"})}),"\n",(0,i.jsx)(d.h3,{id:"\u914d\u7f6e\u9879\u8bf4\u660e",children:"\u914d\u7f6e\u9879\u8bf4\u660e"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u914d\u7f6e\u9879\u540d\u79f0"}),(0,i.jsx)(d.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,i.jsx)(d.th,{children:"\u9ed8\u8ba4\u503c"}),(0,i.jsx)(d.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"address"})}),(0,i.jsx)(d.td,{children:"\u662f"}),(0,i.jsx)(d.td,{children:"-"}),(0,i.jsxs)(d.td,{children:["\u683c\u5f0f\uff1a ",(0,i.jsx)(d.code,{children:"\u5730\u5740:\u7aef\u53e3"}),(0,i.jsx)("br",{}),"\u652f\u6301 ",(0,i.jsx)(d.code,{children:"Redis"})," \u5355\u5b9e\u4f8b\u6a21\u5f0f\u548c\u96c6\u7fa4\u6a21\u5f0f\u914d\u7f6e\uff0c\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:","})," \u5206\u5272\u591a\u4e2a\u5730\u5740\u3002\u4f8b\u5982\uff1a",(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"192.168.1.1:6379, 192.168.1.2:6379"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"db"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsx)(d.td,{children:"\u6570\u636e\u5e93\u7d22\u5f15"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"pass"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"-"})}),(0,i.jsx)(d.td,{children:"\u8bbf\u95ee\u6388\u6743\u5bc6\u7801"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"minIdle"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsx)(d.td,{children:"\u5141\u8bb8\u95f2\u7f6e\u7684\u6700\u5c0f\u8fde\u63a5\u6570"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"maxIdle"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"10"})}),(0,i.jsxs)(d.td,{children:["\u5141\u8bb8\u95f2\u7f6e\u7684\u6700\u5927\u8fde\u63a5\u6570( ",(0,i.jsx)(d.code,{children:"0"})," \u8868\u793a\u4e0d\u9650\u5236)"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"maxActive"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"100"})}),(0,i.jsxs)(d.td,{children:["\u6700\u5927\u8fde\u63a5\u6570\u91cf\u9650\u5236( ",(0,i.jsx)(d.code,{children:"0"})," \u8868\u793a\u4e0d\u9650\u5236)"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"idleTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"10"})}),(0,i.jsxs)(d.td,{children:["\u8fde\u63a5\u6700\u5927\u7a7a\u95f2\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u5b57\u7b26\u4e32\u4f8b\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"maxConnLifetime"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"30"})}),(0,i.jsxs)(d.td,{children:["\u8fde\u63a5\u6700\u957f\u5b58\u6d3b\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u5b57\u7b26\u4e32\u4f8b\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"waitTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:["\u7b49\u5f85\u8fde\u63a5\u6c60\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u5b57\u7b26\u4e32\u4f8b\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"dialTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"TCP"})," \u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u5b57\u7b26\u4e32\u4f8b\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"readTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"TCP"})," \u7684 ",(0,i.jsx)(d.code,{children:"Read"})," \u64cd\u4f5c\u8d85\u65f6\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u5b57\u7b26\u4e32\u4f8b\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"writeTimeout"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"TCP"})," \u7684 ",(0,i.jsx)(d.code,{children:"Write"})," \u64cd\u4f5c\u8d85\u65f6\u65f6\u95f4\uff0c\u4f7f\u7528\u65f6\u95f4\u5b57\u7b26\u4e32\u4f8b\u5982 ",(0,i.jsx)(d.code,{children:"30s/1m/1d"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"masterName"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"-"})}),(0,i.jsxs)(d.td,{children:["\u54e8\u5175\u6a21\u5f0f\u4e0b\u4f7f\u7528, \u8bbe\u7f6e ",(0,i.jsx)(d.code,{children:"MasterName"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tls"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u662f\u5426\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"TLS"})," \u8ba4\u8bc1"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tlsSkipVerify"})}),(0,i.jsx)(d.td,{children:"\u5426"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u901a\u8fc7 ",(0,i.jsx)(d.code,{children:"TLS"})," \u8fde\u63a5\u65f6\uff0c\u662f\u5426\u7981\u7528\u670d\u52a1\u5668\u540d\u79f0\u9a8c\u8bc1"]})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(d.p,{children:"config.yaml\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{children:'# Redis \u914d\u7f6e\u793a\u4f8b\nredis:\n  # \u5355\u5b9e\u4f8b\u914d\u7f6e\u793a\u4f8b1\n  default:\n    address: 127.0.0.1:6379\n    db:      1\n    pass:    "password" # \u5728\u6b64\u914d\u7f6e\u5bc6\u7801, \u6ca1\u6709\u53ef\u53bb\u6389\n'})}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    _, err := g.Redis().Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis().Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})}),"\n",(0,i.jsx)(d.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-value"})}),"\n",(0,i.jsx)(d.h2,{id:"\u914d\u7f6e\u65b9\u6cd5\u9ad8\u7ea7",children:"\u914d\u7f6e\u65b9\u6cd5\uff08\u9ad8\u7ea7\uff09"}),"\n",(0,i.jsxs)(d.p,{children:["\u7531\u4e8e ",(0,i.jsx)(d.code,{children:"GoFrame"})," \u662f\u6a21\u5757\u5316\u7684\u6846\u67b6\uff0c\u9664\u4e86\u53ef\u4ee5\u901a\u8fc7\u8026\u5408\u4e14\u4fbf\u6377\u7684 ",(0,i.jsx)(d.code,{children:"g"})," \u6a21\u5757\u6765\u81ea\u52a8\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u5e76\u83b7\u5f97\u5355\u4f8b\u5bf9\u8c61\u4e4b\u5916\uff0c\u4e5f\u652f\u6301\u6709\u80fd\u529b\u7684\u5f00\u53d1\u8005\u6a21\u5757\u5316\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"gredis"})," \u5305\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gredis"})," \u63d0\u4f9b\u4e86\u5168\u5c40\u7684\u5206\u7ec4\u914d\u7f6e\u529f\u80fd\uff0c\u76f8\u5173\u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-go",children:"func SetConfig(config Config, name ...string)\nfunc SetConfigByMap(m map[string]interface{}, name ...string) error\nfunc GetConfig(name ...string) (config Config, ok bool)\nfunc RemoveConfig(name ...string)\nfunc ClearConfig()\n"})}),"\n",(0,i.jsx)(d.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n    "github.com/gogf/gf/v2/database/gredis"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nvar (\n    config = gredis.Config{\n        Address: "127.0.0.1:6379",\n        Db:      1,\n        Pass:    "password",\n    }\n    group = "cache"\n    ctx   = gctx.New()\n)\n\nfunc main() {\n    gredis.SetConfig(&config, group)\n\n    _, err := g.Redis(group).Set(ctx, "key", "value")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    value, err := g.Redis(group).Get(ctx, "key")\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    fmt.Println(value.String())\n}\n'})})]})}function x(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>c,x:()=>l});var s=n(296540);const i={},r=s.createContext(i);function c(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);