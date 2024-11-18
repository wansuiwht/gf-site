"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["23362"],{346571:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>s});var r=JSON.parse('{"id":"\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u534F\u8BAE\u7F16\u8BD1-gen pb","title":"\u534F\u8BAE\u7F16\u8BD1-gen pb","description":"\u8BE5\u529F\u80FD\u7279\u6027\u4ECE v2.4 \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u3002","source":"@site/versioned_docs/version-2.5.x/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u534F\u8BAE\u7F16\u8BD1-gen pb.md","sourceDirName":"\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen","slug":"/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u534F\u8BAE\u7F16\u8BD1-gen pb","permalink":"/2.5.x/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u534F\u8BAE\u7F16\u8BD1-gen pb","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u534F\u8BAE\u7F16\u8BD1-gen pb.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":4,"frontMatter":{"title":"\u534F\u8BAE\u7F16\u8BD1-gen pb","sidebar_position":4,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u679A\u4E3E\u7EF4\u62A4-gen enums","permalink":"/2.5.x/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u679A\u4E3E\u7EF4\u62A4-gen enums"},"next":{"title":"\u6570\u636E\u8868PB-gen pbentity","permalink":"/2.5.x/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u6570\u636E\u8868PB-gen pbentity"}}'),i=t("785893"),d=t("250065");let s={title:"\u534F\u8BAE\u7F16\u8BD1-gen pb",sidebar_position:4,hide_title:!0},l=void 0,o={},c=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u547D\u4EE4\u4F7F\u7528",id:"\u547D\u4EE4\u4F7F\u7528",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function h(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u8BE5\u529F\u80FD\u7279\u6027\u4ECE ",(0,i.jsx)(n.code,{children:"v2.4"})," \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u7528\u4E8E\u7F16\u8BD1 ",(0,i.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\uFF0C\u751F\u6210\u5BF9\u5E94\u7684 ",(0,i.jsx)(n.code,{children:"protobuf go"})," \u6587\u4EF6\u4EE5\u53CA\u5BF9\u5E94\u7684\u63A7\u5236\u5668\u6587\u4EF6\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u547D\u4EE4\u4F7F\u7528",children:"\u547D\u4EE4\u4F7F\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ gf gen pb -h\nUSAGE\n    gf gen pb [OPTION]\n\nOPTION\n    -p, --path   protobuf file folder path\n    -a, --api    output folder path storing generated go files of api\n    -c, --ctrl   output folder path storing generated go files of controller\n    -h, --help   more information about this command\n\nEXAMPLE\n    gf gen pb\n    gf gen pb -p . -a . -p .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528\u6846\u67B6\u63A8\u8350\u7684\u9879\u76EE\u5DE5\u7A0B\u811A\u624B\u67B6\uFF0C\u5E76\u4E14\u7CFB\u7EDF\u5B89\u88C5\u4E86 ",(0,i.jsx)(n.code,{children:"make"})," \u5DE5\u5177\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"make pb"})," \u5FEB\u6377\u6307\u4EE4\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u540D\u79F0"}),(0,i.jsx)(n.th,{children:"\u5FC5\u987B"}),(0,i.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,i.jsx)(n.th,{children:"\u542B\u4E49"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"path"})}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"manifest/protobuf"})}),(0,i.jsxs)(n.td,{children:["\u6307\u5411 ",(0,i.jsx)(n.code,{children:"proto"})," \u534F\u8BAE\u5B9A\u4E49\u6587\u4EF6"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"api"})}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"api"})}),(0,i.jsx)(n.td,{children:"\u6307\u5411\u751F\u6210\u7684\u63A5\u53E3\u6587\u4EF6\u5B58\u653E\u76EE\u5F55"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ctrl"})}),(0,i.jsx)(n.td,{children:"\u5426"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"internal/controller"})}),(0,i.jsx)(n.td,{children:"\u6307\u5411\u751F\u6210\u7684\u63A7\u5236\u5668\u6587\u4EF6\u5B58\u653E\u76EE\u5F55"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u751F\u6210\u63A7\u5236\u5668\u6587\u4EF6\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8BC6\u522B\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u5BF9\u5E94\u7684\u63A5\u53E3\u5B9E\u73B0\u65B9\u6CD5\uFF0C\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u5219\u4E0D\u518D\u91CD\u590D\u751F\u6210\u5BF9\u5E94\u7684\u63A5\u53E3\u65B9\u6CD5\uFF0C\u9632\u6B62\u8986\u76D6\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C\u5728 ",(0,i.jsx)(n.code,{children:"proto"})," \u76EE\u5F55\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u5E76\u4E14\u6307\u5B9A\u7684 ",(0,i.jsx)(n.code,{children:"path"})," \u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\uFF0C\u90A3\u4E48\u5C06\u4F1A\u81EA\u52A8\u7F16\u8BD1\u672C\u5730 ",(0,i.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\uFF0C\u4E14\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u751F\u6210\u5230\u5F53\u524D\u76EE\u5F55\uFF0C\u5E76\u81EA\u52A8\u5173\u95ED\u63A7\u5236\u5668\u6587\u4EF6\u7684\u751F\u6210\u529F\u80FD\u3002"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(667294);let i={},d=r.createContext(i);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);