"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["22056"],{532013:function(e,r,o){o.r(r),o.d(r,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/2.6.\u603B\u7ED3","title":"2.6.\u603B\u7ED3","description":"\u4F7F\u7528GoFrame\u5B8C\u6210\u6CE8\u518C\u63A5\u53E3\u7684\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\uFF0C\u5B66\u4E60\u4E86\u5B89\u88C5\u6570\u636E\u5E93\u9A71\u52A8\u3001\u751F\u6210\u6570\u636E\u6A21\u578B\u3001\u901A\u8FC7DAO\u4E0E\u6570\u636E\u5E93\u4EA4\u4E92\u3001\u7F16\u5199API\u6587\u4EF6\u3001\u4F7F\u7528gf gen ctrl\u751F\u6210\u63A7\u5236\u5668\u3001\u4EE5\u53CA\u63A5\u53E3\u53C2\u6570\u6821\u68C0\u548C\u56FD\u9645\u5316\u5904\u7406\u65B9\u6CD5\uFF0C\u638C\u63E1\u4E86Controller\u5C42\u4E0ELogic\u5C42\u7684\u4E1A\u52A1\u903B\u8F91\u5BF9\u63A5\u3002","source":"@site/docs/course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/2.6.\u603B\u7ED3.md","sourceDirName":"course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C","slug":"/course/starbook/register-summary","permalink":"/course/starbook/register-summary","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/course/starbook/\u7B2C\u4E8C\u7AE0-\u7528\u6237\u6CE8\u518C/2.6.\u603B\u7ED3.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731815164000,"frontMatter":{"hide_title":true,"slug":"/course/starbook/register-summary","keywords":["GoFrame","\u6CE8\u518C\u63A5\u53E3","\u6570\u636E\u5E93\u9A71\u52A8","gf gen dao","\u6570\u636E\u6A21\u578B","GoFrame ORM","api\u6587\u4EF6","gf gen ctrl","\u63A7\u5236\u5668","\u63A5\u53E3\u53C2\u6570\u6821\u68C0"],"description":"\u4F7F\u7528GoFrame\u5B8C\u6210\u6CE8\u518C\u63A5\u53E3\u7684\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\uFF0C\u5B66\u4E60\u4E86\u5B89\u88C5\u6570\u636E\u5E93\u9A71\u52A8\u3001\u751F\u6210\u6570\u636E\u6A21\u578B\u3001\u901A\u8FC7DAO\u4E0E\u6570\u636E\u5E93\u4EA4\u4E92\u3001\u7F16\u5199API\u6587\u4EF6\u3001\u4F7F\u7528gf gen ctrl\u751F\u6210\u63A7\u5236\u5668\u3001\u4EE5\u53CA\u63A5\u53E3\u53C2\u6570\u6821\u68C0\u548C\u56FD\u9645\u5316\u5904\u7406\u65B9\u6CD5\uFF0C\u638C\u63E1\u4E86Controller\u5C42\u4E0ELogic\u5C42\u7684\u4E1A\u52A1\u903B\u8F91\u5BF9\u63A5\u3002"},"sidebar":"courseStarBookSidebar","previous":{"title":"2.5.\u63A5\u53E3\u6587\u6863","permalink":"/course/starbook/register-api-doc"},"next":{"title":"\u7B2C\u4E09\u7AE0-\u4F1A\u8BDD\u7BA1\u7406","permalink":"/course/starbook/session"}}'),n=o("785893"),s=o("250065");let i={hide_title:!0,slug:"/course/starbook/register-summary",keywords:["GoFrame","\u6CE8\u518C\u63A5\u53E3","\u6570\u636E\u5E93\u9A71\u52A8","gf gen dao","\u6570\u636E\u6A21\u578B","GoFrame ORM","api\u6587\u4EF6","gf gen ctrl","\u63A7\u5236\u5668","\u63A5\u53E3\u53C2\u6570\u6821\u68C0"],description:"\u4F7F\u7528GoFrame\u5B8C\u6210\u6CE8\u518C\u63A5\u53E3\u7684\u5B9E\u8DF5\u8FC7\u7A0B\u4E2D\uFF0C\u5B66\u4E60\u4E86\u5B89\u88C5\u6570\u636E\u5E93\u9A71\u52A8\u3001\u751F\u6210\u6570\u636E\u6A21\u578B\u3001\u901A\u8FC7DAO\u4E0E\u6570\u636E\u5E93\u4EA4\u4E92\u3001\u7F16\u5199API\u6587\u4EF6\u3001\u4F7F\u7528gf gen ctrl\u751F\u6210\u63A7\u5236\u5668\u3001\u4EE5\u53CA\u63A5\u53E3\u53C2\u6570\u6821\u68C0\u548C\u56FD\u9645\u5316\u5904\u7406\u65B9\u6CD5\uFF0C\u638C\u63E1\u4E86Controller\u5C42\u4E0ELogic\u5C42\u7684\u4E1A\u52A1\u903B\u8F91\u5BF9\u63A5\u3002"},c=void 0,l={},a=[];function d(e){let r={code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\u5728\u672C\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528",(0,n.jsx)(r.code,{children:"GoFrame"}),"\u5B8C\u6210\u4E86\u4E00\u4E2A\u6CE8\u518C\u63A5\u53E3\u3002\u521D\u6B65\u63A5\u89E6\u4E86",(0,n.jsx)(r.code,{children:"GoFrame"}),"\u5E76\u5B66\u4F1A\u4E86\u4EE5\u4E0B\u5185\u5BB9\uFF1A"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u5B89\u88C5\u6570\u636E\u5E93\u9A71\u52A8\uFF1B"}),"\n",(0,n.jsxs)(r.li,{children:["\u4F7F\u7528",(0,n.jsx)(r.code,{children:"gf gen dao"}),"\u751F\u6210\u6570\u636E\u6A21\u578B\uFF1B"]}),"\n",(0,n.jsxs)(r.li,{children:["\u901A\u8FC7",(0,n.jsx)(r.code,{children:"dao"}),"\u8C03\u7528",(0,n.jsx)(r.code,{children:"GoFrame ORM"}),"\u4E0E\u6570\u636E\u5E93\u4EA4\u4E92\uFF1B"]}),"\n",(0,n.jsxs)(r.li,{children:["\u7F16\u5199",(0,n.jsx)(r.code,{children:"api"}),"\u6587\u4EF6\u5E76\u4F7F\u7528",(0,n.jsx)(r.code,{children:"gf gen ctrl"}),"\u751F\u6210\u63A7\u5236\u5668\uFF1B"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Controller"}),"\u5C42\u8C03\u7528",(0,n.jsx)(r.code,{children:"Logic"}),"\u5C42\u5B8C\u6210\u4E1A\u52A1\u903B\u8F91\uFF1B"]}),"\n",(0,n.jsxs)(r.li,{children:["\u63A5\u53E3\u53C2\u6570\u6821\u68C0\u4E0E",(0,n.jsx)(r.code,{children:"i18n"}),"\u3002"]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return c},a:function(){return i}});var t=o(667294);let n={},s=t.createContext(n);function i(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);