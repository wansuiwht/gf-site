"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[89472],{396331:(e,c,d)=>{d.r(c),d.d(c,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","title":"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","description":"GoFrame\u6846\u67b6\u4e2d\u7684\u7f13\u5b58\u7ba1\u7406\u6a21\u5757\uff0c\u91cd\u70b9\u8bb2\u89e3Redis\u7f13\u5b58\u7684\u9002\u914d\u5b9e\u73b0\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u5728\u591a\u8282\u70b9\u73af\u5883\u4e0b\u786e\u4fdd\u6570\u636e\u4e00\u81f4\u6027\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8bbe\u7f6eRedis\u5ba2\u6237\u7aef\u548c\u4f7f\u7528Redis\u7f13\u5b58\u9002\u914d\u5668\u7684\u8be6\u7ec6\u6b65\u9aa4\uff0c\u540c\u65f6\u63a2\u8ba8\u4e86Clear\u548cSize\u65b9\u6cd5\u5728\u591a\u5bf9\u8c61\u8fde\u63a5\u60c5\u51b5\u4e0b\u7684\u64cd\u4f5c\u6ce8\u610f\u4e8b\u9879\uff0c\u5e76\u5efa\u8bae\u9488\u5bf9\u4e0d\u540c\u4e1a\u52a1\u914d\u7f6e\u72ec\u7acb\u7684Redis db\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406","slug":"/docs/core/gcache-redis","permalink":"/en/docs/core/gcache-redis","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/core/gcache-redis","title":"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58","sidebar_position":2,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u7f13\u5b58\u7ba1\u7406","Redis\u7f13\u5b58","gcache","redis\u9002\u914d","Session\u5171\u4eab","\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58","redis db","\u7f13\u5b58\u5bf9\u8c61"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684\u7f13\u5b58\u7ba1\u7406\u6a21\u5757\uff0c\u91cd\u70b9\u8bb2\u89e3Redis\u7f13\u5b58\u7684\u9002\u914d\u5b9e\u73b0\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u5728\u591a\u8282\u70b9\u73af\u5883\u4e0b\u786e\u4fdd\u6570\u636e\u4e00\u81f4\u6027\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8bbe\u7f6eRedis\u5ba2\u6237\u7aef\u548c\u4f7f\u7528Redis\u7f13\u5b58\u9002\u914d\u5668\u7684\u8be6\u7ec6\u6b65\u9aa4\uff0c\u540c\u65f6\u63a2\u8ba8\u4e86Clear\u548cSize\u65b9\u6cd5\u5728\u591a\u5bf9\u8c61\u8fde\u63a5\u60c5\u51b5\u4e0b\u7684\u64cd\u4f5c\u6ce8\u610f\u4e8b\u9879\uff0c\u5e76\u5efa\u8bae\u9488\u5bf9\u4e0d\u540c\u4e1a\u52a1\u914d\u7f6e\u72ec\u7acb\u7684Redis db\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58","permalink":"/en/docs/core/gcache-memory"},"next":{"title":"\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd","permalink":"/en/docs/core/gcache-funcs"}}');var s=d(474848),n=d(28453);const r={slug:"/docs/core/gcache-redis",title:"\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",sidebar_position:2,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u7f13\u5b58\u7ba1\u7406","Redis\u7f13\u5b58","gcache","redis\u9002\u914d","Session\u5171\u4eab","\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58","redis db","\u7f13\u5b58\u5bf9\u8c61"],description:"GoFrame\u6846\u67b6\u4e2d\u7684\u7f13\u5b58\u7ba1\u7406\u6a21\u5757\uff0c\u91cd\u70b9\u8bb2\u89e3Redis\u7f13\u5b58\u7684\u9002\u914d\u5b9e\u73b0\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5\uff0c\u901a\u8fc7\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u5728\u591a\u8282\u70b9\u73af\u5883\u4e0b\u786e\u4fdd\u6570\u636e\u4e00\u81f4\u6027\u3002\u6587\u4e2d\u63d0\u4f9b\u4e86\u8bbe\u7f6eRedis\u5ba2\u6237\u7aef\u548c\u4f7f\u7528Redis\u7f13\u5b58\u9002\u914d\u5668\u7684\u8be6\u7ec6\u6b65\u9aa4\uff0c\u540c\u65f6\u63a2\u8ba8\u4e86Clear\u548cSize\u65b9\u6cd5\u5728\u591a\u5bf9\u8c61\u8fde\u63a5\u60c5\u51b5\u4e0b\u7684\u64cd\u4f5c\u6ce8\u610f\u4e8b\u9879\uff0c\u5e76\u5efa\u8bae\u9488\u5bf9\u4e0d\u540c\u4e1a\u52a1\u914d\u7f6e\u72ec\u7acb\u7684Redis db\u3002"},t=void 0,o={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5173\u4e8e <code>Clear/Size</code> \u7b49\u65b9\u6cd5",id:"\u5173\u4e8e-clearsize-\u7b49\u65b9\u6cd5",level:3},{value:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684 <code>redis db</code> \u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",id:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684-redis-db-\u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",level:3}];function l(e){const c={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(c.p,{children:["\u7f13\u5b58\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b\u4e86 ",(0,s.jsx)(c.code,{children:"gcache"})," \u7684 ",(0,s.jsx)(c.code,{children:"Redis"})," \u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002 ",(0,s.jsx)(c.code,{children:"Redis"})," \u7f13\u5b58\u5728\u591a\u8282\u70b9\u4fdd\u8bc1\u7f13\u5b58\u7684\u6570\u636e\u4e00\u81f4\u6027\u65f6\u975e\u5e38\u6709\u7528\uff0c\u7279\u522b\u662f ",(0,s.jsx)(c.code,{children:"Session"})," \u5171\u4eab\u3001\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58\u7b49\u573a\u666f\u4e2d\u3002"]}),"\n",(0,s.jsx)(c.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-go",children:'func ExampleCache_SetAdapter() {\n    var (\n        err         error\n        ctx         = gctx.New()\n        cache       = gcache.New()\n        redisConfig = &gredis.Config{\n            Address: "127.0.0.1:6379",\n            Db:      9,\n        }\n        cacheKey   = `key`\n        cacheValue = `value`\n    )\n    // Create redis client object.\n    redis, err := gredis.New(redisConfig)\n    if err != nil {\n        panic(err)\n    }\n    // Create redis cache adapter and set it to cache object.\n    cache.SetAdapter(gcache.NewAdapterRedis(redis))\n\n    // Set and Get using cache object.\n    err = cache.Set(ctx, cacheKey, cacheValue, time.Second)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Println(cache.MustGet(ctx, cacheKey).String())\n\n    // Get using redis client.\n    fmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())\n\n    // Output:\n    // value\n    // value\n}\n'})}),"\n",(0,s.jsx)(c.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(c.h3,{id:"\u5173\u4e8e-clearsize-\u7b49\u65b9\u6cd5",children:["\u5173\u4e8e ",(0,s.jsx)(c.code,{children:"Clear/Size"})," \u7b49\u65b9\u6cd5"]}),"\n",(0,s.jsxs)(c.p,{children:["\u9996\u5148\uff0c\u76f8\u540c\u7684 ",(0,s.jsx)(c.code,{children:"gredis.Config"})," \u603b\u662f\u4f1a\u8fde\u63a5\u5230\u76f8\u540c\u7684 ",(0,s.jsx)(c.code,{children:"redis db"})," \u4e2d\uff0c\u800c\u7531\u4e8e ",(0,s.jsx)(c.code,{children:"Redis"})," \u672c\u8eab\u6ca1\u6709\u6570\u636e\u5206\u7ec4\u529f\u80fd\uff0c\u6240\u4ee5\u5f53\u591a\u4e2a ",(0,s.jsx)(c.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u8fde\u63a5\u5230\u540c\u4e2a ",(0,s.jsx)(c.code,{children:"redis db"})," \u65f6\uff0c\u5c06\u4f1a\u5171\u4eab\u6574\u4e2a ",(0,s.jsx)(c.code,{children:"redis db"}),"\uff0c\u800c\u4e0d\u4f1a\u5355\u72ec\u5f00\u8f9f\u4e00\u4e2a\u5206\u7ec4\u7528\u6765\u5b58\u50a8\u5f53\u524d ",(0,s.jsx)(c.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\u3002\u56e0\u6b64\u5f53\u4f7f\u7528 ",(0,s.jsx)(c.code,{children:"Clear"}),"\u3001 ",(0,s.jsx)(c.code,{children:"Size"})," \u8fd9\u7c7b\u64cd\u4f5c\u65f6\uff0c\u5c06\u4f1a\u5bf9\u6574\u4e2a ",(0,s.jsx)(c.code,{children:"redis db"})," \u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u4e0e\u5185\u5b58\u7f13\u5b58\u4e00\u6837\u7684\u4ec5\u64cd\u4f5c\u5f53\u524d ",(0,s.jsx)(c.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u53cd\u76f4\u89c9\uff0c\u8bf7\u52a1\u5fc5\u8c28\u614e\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(c.h3,{id:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684-redis-db-\u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",children:["\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684 ",(0,s.jsx)(c.code,{children:"redis db"})," \u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b"]}),"\n",(0,s.jsxs)(c.p,{children:["\u53e6\u5916\uff0c\u5efa\u8bae\u5927\u5bb6\u5728\u4f7f\u7528 ",(0,s.jsx)(c.code,{children:"Redis"})," \u7f13\u5b58\u65f6\uff0c\u5355\u72ec\u914d\u7f6e\u4e0d\u540c\u7684 ",(0,s.jsx)(c.code,{children:"db"})," \u6765\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u548c\u5176\u4ed6\u7684\u4e1a\u52a1\u6570\u636e\u5171\u7528\u4e00\u4e2a ",(0,s.jsx)(c.code,{children:"db"}),"\u3002"]})]})}function h(e={}){const{wrapper:c}={...(0,n.R)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,c,d)=>{d.d(c,{R:()=>r,x:()=>t});var i=d(296540);const s={},n=i.createContext(s);function r(e){const c=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function t(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:c},e.children)}}}]);