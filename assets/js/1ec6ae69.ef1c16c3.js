"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["40294"],{471558:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>a,frontMatter:()=>c});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165","title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165","description":"Data/Where/WherePri/And/Or \u65B9\u6CD5\u652F\u6301\u4EFB\u610F\u7684 string/map/slice/struct/struct \u6570\u636E\u7C7B\u578B\u53C2\u6570\uFF0C\u8BE5\u7279\u6027\u4E3A gdb \u63D0\u4F9B\u4E86\u5F88\u9AD8\u7684\u7075\u6D3B\u6027\u3002\u5F53\u4F7F\u7528 struct/ struct \u5BF9\u8C61\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\u65F6\uFF0C\u5C06\u4F1A\u88AB\u81EA\u52A8\u89E3\u6790\u4E3A map \u7C7B\u578B\uFF0C\u53EA\u6709 struct \u7684 \u516C\u5F00\u5C5E\u6027 \u80FD\u591F\u88AB\u8F6C\u6362\uFF0C\u5E76\u4E14\u652F\u6301 orm/ gconv/ json \u6807\u7B7E\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8F6C\u6362\u540E\u7684\u952E\u540D\uFF0C\u5373\u4E0E\u8868\u5B57\u6BB5\u7684\u6620\u5C04\u5173\u7CFB\u3002","source":"@site/versioned_docs/version-2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165","permalink":"/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":5,"frontMatter":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165","sidebar_position":5,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664","permalink":"/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u66F4\u65B0\u5220\u9664"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4","permalink":"/2.6.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/ORM\u94FE\u5F0F\u64CD\u4F5C-\u5B57\u6BB5\u8FC7\u6EE4"}}'),s=t("785893"),i=t("250065");let c={title:"ORM\u94FE\u5F0F\u64CD\u4F5C-\u5BF9\u8C61\u8F93\u5165",sidebar_position:5,hide_title:!0},o=void 0,d={},a=[];function l(e){let n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Data/Where/WherePri/And/Or"})," \u65B9\u6CD5\u652F\u6301\u4EFB\u610F\u7684 ",(0,s.jsx)(n.code,{children:"string/map/slice/struct/*struct"})," \u6570\u636E\u7C7B\u578B\u53C2\u6570\uFF0C\u8BE5\u7279\u6027\u4E3A ",(0,s.jsx)(n.code,{children:"gdb"})," \u63D0\u4F9B\u4E86\u5F88\u9AD8\u7684\u7075\u6D3B\u6027\u3002\u5F53\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"struct"}),"/ ",(0,s.jsx)(n.code,{children:"*struct"})," \u5BF9\u8C61\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\u65F6\uFF0C\u5C06\u4F1A\u88AB\u81EA\u52A8\u89E3\u6790\u4E3A ",(0,s.jsx)(n.code,{children:"map"})," \u7C7B\u578B\uFF0C\u53EA\u6709 ",(0,s.jsx)(n.code,{children:"struct"})," \u7684 ",(0,s.jsx)(n.strong,{children:"\u516C\u5F00\u5C5E\u6027"})," \u80FD\u591F\u88AB\u8F6C\u6362\uFF0C\u5E76\u4E14\u652F\u6301 ",(0,s.jsx)(n.code,{children:"orm"}),"/ ",(0,s.jsx)(n.code,{children:"gconv"}),"/ ",(0,s.jsx)(n.code,{children:"json"})," \u6807\u7B7E\uFF0C\u7528\u4E8E\u5B9A\u4E49\u8F6C\u6362\u540E\u7684\u952E\u540D\uFF0C\u5373\u4E0E\u8868\u5B57\u6BB5\u7684\u6620\u5C04\u5173\u7CFB\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type User struct {\n    Uid      int    `orm:"user_id"`\n    Name     string `orm:"user_name"`\n    NickName string `orm:"nick_name"`\n}\n// \u6216\u8005\ntype User struct {\n    Uid      int    `gconv:"user_id"`\n    Name     string `gconv:"user_name"`\n    NickName string `gconv:"nick_name"`\n}\n// \u6216\u8005\ntype User struct {\n    Uid      int    `json:"user_id"`\n    Name     string `json:"user_name"`\n    NickName string `json:"nick_name"`\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C ",(0,s.jsx)(n.code,{children:"struct"})," \u7684\u5C5E\u6027\u5E94\u8BE5\u662F\u516C\u5F00\u5C5E\u6027\uFF08\u9996\u5B57\u6BCD\u5927\u5199\uFF09\uFF0C ",(0,s.jsx)(n.code,{children:"orm"})," \u6807\u7B7E\u5BF9\u5E94\u7684\u662F\u6570\u636E\u8868\u7684\u5B57\u6BB5\u540D\u79F0\u3002\u8868\u5B57\u6BB5\u7684\u5BF9\u5E94\u5173\u7CFB\u6807\u7B7E\u65E2\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"orm"}),"\uFF0C\u4E5F\u53EF\u4EE5\u7528 ",(0,s.jsx)(n.code,{children:"gconv"}),"\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4F20\u7EDF\u7684 ",(0,s.jsx)(n.code,{children:"json"})," \u6807\u7B7E\uFF0C\u4F46\u662F\u5F53\u4E09\u79CD\u6807\u7B7E\u90FD\u5B58\u5728\u65F6\uFF0C ",(0,s.jsx)(n.code,{children:"orm"})," \u6807\u7B7E\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002\u4E3A\u907F\u514D\u5C06 ",(0,s.jsx)(n.code,{children:"struct"})," \u5BF9\u8C61\u8F6C\u6362\u4E3A ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636E\u683C\u5F0F\u8FD4\u56DE\u65F6\u4E0E ",(0,s.jsx)(n.code,{children:"JSON"})," \u7F16\u7801\u6807\u7B7E\u51B2\u7A81\uFF0C\u63A8\u8350\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"orm"})," \u6807\u7B7E\u6765\u5B9E\u73B0\u6570\u636E\u5E93 ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u6620\u5C04\u5173\u7CFB\u3002\u66F4\u8BE6\u7EC6\u7684\u8F6C\u6362\u89C4\u5219\u8BF7\u67E5\u770B ",(0,s.jsx)(n.a,{href:"/2.6.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-Map%E8%BD%AC%E6%8D%A2",children:"\u7C7B\u578B\u8F6C\u6362-Map\u8F6C\u6362"})," \u7AE0\u8282\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var r=t(667294);let s={},i=r.createContext(s);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);