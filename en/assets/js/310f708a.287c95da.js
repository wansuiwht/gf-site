"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["57638"],{772439:function(e,n,i){i.r(n),i.d(n,{metadata:()=>c,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>t});var c=JSON.parse('{"id":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u5DE5\u7A0B\u7BA1\u7406","title":"\u5DE5\u7A0B\u7BA1\u7406","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u5FAE\u670D\u52A1\u5F00\u53D1\u7684\u6807\u51C6\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\uFF0C\u5305\u62EC\u534F\u8BAE\u6587\u4EF6\u548C\u63A5\u53E3\u6587\u4EF6\u7684\u7BA1\u7406\u3002\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u5229\u7528GoFrame\u6846\u67B6\u7684\u5F00\u53D1\u5DE5\u5177\u751F\u6210\u6570\u636E\u8868\u7ED3\u6784\u5BF9\u5E94\u7684protobuf\u6587\u4EF6\uFF0C\u4EE5\u53CA\u5982\u4F55\u7F16\u8BD1\u534F\u8BAE\u6587\u4EF6\u751F\u6210\u63A5\u53E3\u548C\u63A7\u5236\u5668\u3002\u540C\u65F6\uFF0C\u8BF4\u660E\u4E86\u670D\u52A1\u7684\u542F\u52A8\u548C\u63A5\u53E3\u5B9E\u73B0\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u5E76\u4ECB\u7ECD\u4E86\u6807\u7B7E\u6CE8\u5165\u548C\u6570\u636E\u6821\u9A8C\u63D2\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u5DE5\u7A0B\u7BA1\u7406.md","sourceDirName":"docs/\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/docs/micro-service/structure","permalink":"/en/2.7.x/docs/micro-service/structure","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5FAE\u670D\u52A1\u5F00\u53D1/\u5DE5\u7A0B\u7BA1\u7406.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/micro-service/structure","title":"\u5DE5\u7A0B\u7BA1\u7406","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u5FAE\u670D\u52A1","\u5DE5\u7A0B\u76EE\u5F55","\u534F\u8BAE\u6587\u4EF6","\u63A5\u53E3\u6587\u4EF6","\u5F00\u53D1\u5DE5\u5177","\u670D\u52A1\u542F\u52A8","\u63A5\u53E3\u5B9E\u73B0","\u6570\u636E\u6821\u9A8C"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u5FAE\u670D\u52A1\u5F00\u53D1\u7684\u6807\u51C6\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\uFF0C\u5305\u62EC\u534F\u8BAE\u6587\u4EF6\u548C\u63A5\u53E3\u6587\u4EF6\u7684\u7BA1\u7406\u3002\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u5229\u7528GoFrame\u6846\u67B6\u7684\u5F00\u53D1\u5DE5\u5177\u751F\u6210\u6570\u636E\u8868\u7ED3\u6784\u5BF9\u5E94\u7684protobuf\u6587\u4EF6\uFF0C\u4EE5\u53CA\u5982\u4F55\u7F16\u8BD1\u534F\u8BAE\u6587\u4EF6\u751F\u6210\u63A5\u53E3\u548C\u63A7\u5236\u5668\u3002\u540C\u65F6\uFF0C\u8BF4\u660E\u4E86\u670D\u52A1\u7684\u542F\u52A8\u548C\u63A5\u53E3\u5B9E\u73B0\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u5E76\u4ECB\u7ECD\u4E86\u6807\u7B7E\u6CE8\u5165\u548C\u6570\u636E\u6821\u9A8C\u63D2\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u73AF\u5883\u51C6\u5907","permalink":"/en/2.7.x/docs/micro-service/prepare-environment"},"next":{"title":"\u811A\u624B\u67B6\u6A21\u5757","permalink":"/en/2.7.x/docs/micro-service/scaffold"}}'),r=i("785893"),s=i("250065");let t={slug:"/docs/micro-service/structure",title:"\u5DE5\u7A0B\u7BA1\u7406",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u5FAE\u670D\u52A1","\u5DE5\u7A0B\u76EE\u5F55","\u534F\u8BAE\u6587\u4EF6","\u63A5\u53E3\u6587\u4EF6","\u5F00\u53D1\u5DE5\u5177","\u670D\u52A1\u542F\u52A8","\u63A5\u53E3\u5B9E\u73B0","\u6570\u636E\u6821\u9A8C"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u8FDB\u884C\u5FAE\u670D\u52A1\u5F00\u53D1\u7684\u6807\u51C6\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\uFF0C\u5305\u62EC\u534F\u8BAE\u6587\u4EF6\u548C\u63A5\u53E3\u6587\u4EF6\u7684\u7BA1\u7406\u3002\u8BE6\u7EC6\u63CF\u8FF0\u4E86\u5982\u4F55\u5229\u7528GoFrame\u6846\u67B6\u7684\u5F00\u53D1\u5DE5\u5177\u751F\u6210\u6570\u636E\u8868\u7ED3\u6784\u5BF9\u5E94\u7684protobuf\u6587\u4EF6\uFF0C\u4EE5\u53CA\u5982\u4F55\u7F16\u8BD1\u534F\u8BAE\u6587\u4EF6\u751F\u6210\u63A5\u53E3\u548C\u63A7\u5236\u5668\u3002\u540C\u65F6\uFF0C\u8BF4\u660E\u4E86\u670D\u52A1\u7684\u542F\u52A8\u548C\u63A5\u53E3\u5B9E\u73B0\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u5E76\u4ECB\u7ECD\u4E86\u6807\u7B7E\u6CE8\u5165\u548C\u6570\u636E\u6821\u9A8C\u63D2\u4EF6\u7684\u4F7F\u7528\u65B9\u6CD5\u3002"},d=void 0,o={},l=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u534F\u8BAE\u6587\u4EF6",id:"\u534F\u8BAE\u6587\u4EF6",level:2},{value:"\u63A5\u53E3\u6587\u4EF6",id:"\u63A5\u53E3\u6587\u4EF6",level:2},{value:"\u5F00\u53D1\u5DE5\u5177",id:"\u5F00\u53D1\u5DE5\u5177",level:2},{value:"\u751F\u6210\u6570\u636E\u8868\u7ED3\u6784",id:"\u751F\u6210\u6570\u636E\u8868\u7ED3\u6784",level:3},{value:"\u7F16\u8BD1 <code>proto</code> \u534F\u8BAE\u6587\u4EF6",id:"\u7F16\u8BD1-proto-\u534F\u8BAE\u6587\u4EF6",level:3},{value:"\u670D\u52A1\u7684\u542F\u52A8",id:"\u670D\u52A1\u7684\u542F\u52A8",level:2},{value:"\u63A5\u53E3\u7684\u5B9E\u73B0\u4E0E\u6CE8\u518C",id:"\u63A5\u53E3\u7684\u5B9E\u73B0\u4E0E\u6CE8\u518C",level:2},{value:"\u6807\u7B7E\u6CE8\u5165\u4E0E\u6570\u636E\u6821\u9A8C",id:"\u6807\u7B7E\u6CE8\u5165\u4E0E\u6570\u636E\u6821\u9A8C",level:2},{value:"\u6807\u7B7E\u81EA\u52A8\u6CE8\u5165",id:"\u6807\u7B7E\u81EA\u52A8\u6CE8\u5165",level:3},{value:"\u6570\u636E\u6821\u9A8C\u63D2\u4EF6",id:"\u6570\u636E\u6821\u9A8C\u63D2\u4EF6",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,r.jsxs)(n.p,{children:["\u57FA\u4E8E\u5FAE\u670D\u52A1\u5F00\u53D1\u7684\u5DE5\u7A0B\u76EE\u5F55\u91C7\u7528\u7EDF\u4E00\u7684\u6846\u67B6\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,r.jsx)(n.a,{href:"/en/2.7.x/docs/design/project-structure",children:"\u5DE5\u7A0B\u76EE\u5F55\u8BBE\u8BA1\uD83D\uDD25"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u8FD9\u91CC\u4EE5\u9879\u76EE ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf-demo-grpc",children:"https://github.com/gogf/gf-demo-grpc"})," \u4E3A\u4F8B\u8BF4\u660E\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u534F\u8BAE\u6587\u4EF6",children:"\u534F\u8BAE\u6587\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:i(529324).Z+"",width:"962",height:"1564"}),"\u534F\u8BAE\u6587\u4EF6\u5B9A\u4E49\u5230 ",(0,r.jsx)(n.code,{children:"manifest/protobuf"})," \u76EE\u5F55\u4E0B\u3002\u76EE\u5F55\u4E0B\u7684\u534F\u8BAE\u6587\u4EF6\u8DEF\u5F84\u89C4\u5219\uFF1A ",(0,r.jsx)(n.code,{children:"\u6A21\u5757\u540D/\u7248\u672C\u53F7/xxx.proto\xa0"})," \u5176\u4E2D\u7684\u7248\u672C\u53F7\u4EE5 ",(0,r.jsx)(n.code,{children:"v1/v2"})," \u7C7B\u4F3C\u5F62\u5F0F\u7BA1\u7406\uFF0C\u4FBF\u4E8E\u7EF4\u62A4\u63A5\u53E3\u517C\u5BB9\u6027\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C\u6D89\u53CA\u5230\u6570\u636E\u8868\u6570\u636E\u7ED3\u6784\u901A\u8FC7\u6846\u67B6\u5F00\u53D1\u5DE5\u5177\u751F\u6210\u7684 ",(0,r.jsx)(n.code,{children:"protobuf"})," \u6587\u4EF6\u5B58\u653E\u5230 ",(0,r.jsx)(n.code,{children:"manifest/pbentity"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u63A5\u53E3\u6587\u4EF6",children:"\u63A5\u53E3\u6587\u4EF6"}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"proto"})," \u534F\u8BAE\u6587\u4EF6\u7F16\u8BD1\u751F\u6210\u7684\u63A5\u53E3\u6587\u6863\u5B58\u653E\u5230\u7EDF\u4E00\u7684 ",(0,r.jsx)(n.code,{children:"api"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5F00\u53D1\u5DE5\u5177",children:"\u5F00\u53D1\u5DE5\u5177"}),"\n",(0,r.jsx)(n.h3,{id:"\u751F\u6210\u6570\u636E\u8868\u7ED3\u6784",children:"\u751F\u6210\u6570\u636E\u8868\u7ED3\u6784"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"gf gen pbentity / make pbentity"})," \u547D\u4EE4\u81EA\u52A8\u6839\u636E\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u8868\u7ED3\u6784\u751F\u6210\u5BF9\u5E94\u7684 ",(0,r.jsx)(n.code,{children:"protobuf"})," \u534F\u8BAE\u6587\u4EF6\u3002\u547D\u4EE4\u4ECB\u7ECD\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,r.jsx)(n.a,{href:"/en/2.7.x/docs/cli/gen-pbentity",children:"\u6570\u636E\u8868PB-gen pbentity"})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u7F16\u8BD1-proto-\u534F\u8BAE\u6587\u4EF6",children:["\u7F16\u8BD1 ",(0,r.jsx)(n.code,{children:"proto"})," \u534F\u8BAE\u6587\u4EF6"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6846\u67B6\u63D0\u4F9B\u4E86 ",(0,r.jsx)(n.code,{children:"gf gen pb / make pb"})," \u547D\u4EE4\u81EA\u52A8\u7F16\u8BD1 ",(0,r.jsx)(n.code,{children:"proto"})," \u534F\u8BAE\u6587\u4EF6\uFF0C\u5E76\u751F\u6210\u5BF9\u5E94\u7684\u63A5\u53E3\u6587\u4EF6\u4EE5\u53CA\u63A7\u5236\u5668\u6587\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u670D\u52A1\u7684\u542F\u52A8",children:"\u670D\u52A1\u7684\u542F\u52A8"}),"\n",(0,r.jsxs)(n.p,{children:["\u670D\u52A1\u7684\u542F\u52A8\u63A7\u5236\u4ECD\u7136\u662F\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"cmd"})," \u76EE\u5F55\u6765\u7EF4\u62A4\u7684\uFF0C\u4F8B\u5982\uFF1A ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf-demo-grpc/blob/main/internal/cmd/cmd.go",children:"https://github.com/gogf/gf-demo-grpc/blob/main/internal/cmd/cmd.go"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u63A5\u53E3\u7684\u5B9E\u73B0\u4E0E\u6CE8\u518C",children:"\u63A5\u53E3\u7684\u5B9E\u73B0\u4E0E\u6CE8\u518C"}),"\n",(0,r.jsxs)(n.p,{children:["\u63A7\u5236\u5668\u7528\u4E8E ",(0,r.jsx)(n.code,{children:"proto"})," \u5B9A\u4E49\u7684\u63A5\u53E3\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u63A7\u5236\u5668\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u81EA\u52A8\u751F\u6210\uFF0C\u5E76\u81EA\u52A8\u751F\u6210 ",(0,r.jsx)(n.code,{children:"Register"})," \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5C06\u5177\u4F53\u5B9E\u73B0\u6CE8\u518C\u5230\u670D\u52A1\u5BF9\u8C61\u4E2D\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6CE8\u518C\u65B9\u6CD5\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(334624).Z+"",width:"2800",height:"1064"})}),"\n",(0,r.jsx)(n.p,{children:"\u542F\u52A8\u6CE8\u518C\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(676656).Z+"",width:"2918",height:"1276"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6807\u7B7E\u6CE8\u5165\u4E0E\u6570\u636E\u6821\u9A8C",children:"\u6807\u7B7E\u6CE8\u5165\u4E0E\u6570\u636E\u6821\u9A8C"}),"\n",(0,r.jsx)(n.h3,{id:"\u6807\u7B7E\u81EA\u52A8\u6CE8\u5165",children:"\u6807\u7B7E\u81EA\u52A8\u6CE8\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"gf gen pb/make pb"})," \u547D\u4EE4\u8FDB\u884C ",(0,r.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\u7F16\u8BD1\u65F6\uFF0C\u652F\u6301\u81EA\u52A8\u7684\u6807\u7B7E\u6CE8\u5165\u3002\u53EA\u9700\u8981\u901A\u8FC7\u6CE8\u91CA\u7684\u5F62\u5F0F\u5199\u5230 ",(0,r.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\u4E2D\uFF0C\u8FD9\u4E9B\u6CE8\u91CA\u5C06\u4F1A\u81EA\u52A8\u4F5C\u4E3A ",(0,r.jsx)(n.code,{children:"dc"})," \u6807\u7B7E\u5D4C\u5165\u5230\u7ED3\u6784\u4F53\u5C5E\u6027\u4E2D\u3002\u5982\u679C\u6CE8\u91CA\u89C4\u5219\u5F62\u5982 ",(0,r.jsx)(n.code,{children:"xxx:yyy "}),"\uFF0C\u90A3\u4E48\u5C06\u4F1A\u81EA\u52A8\u751F\u6210 ",(0,r.jsx)(n.code,{children:"xxx"})," \u7684\u6807\u7B7E\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(242915).Z+"",width:"2504",height:"1558"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(22631).Z+"",width:"3092",height:"586"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\uFF0C\u5728 ",(0,r.jsx)(n.code,{children:"GRPC"})," \u534F\u8BAE\u4E2D\uFF0C\u7531\u4E8E\u8F93\u5165\u8F93\u51FA\u5747\u662F\u91C7\u7528\u7ED3\u6784\u4F53\u5F62\u5F0F\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5B9E\u73B0\u50CF ",(0,r.jsx)(n.code,{children:"HTTP"})," \u670D\u52A1\u90A3\u6837\u7684\u9ED8\u8BA4\u503C\u7279\u6027\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636E\u6821\u9A8C\u63D2\u4EF6",children:"\u6570\u636E\u6821\u9A8C\u63D2\u4EF6"}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636E\u6821\u9A8C\u63D2\u4EF6\u5C06\u4F1A\u6839\u636E\u6807\u7B7E\u4E2D\u8BBE\u7F6E\u7684\u89C4\u5219\u5BF9\u8BF7\u6C42\u8FDB\u884C\u81EA\u52A8\u6821\u9A8C\uFF0C\u9700\u8981\u5728\u670D\u52A1\u7AEF\u901A\u8FC7\u62E6\u622A\u5668\u7684\u5F62\u5F0F\u624B\u52A8\u5F15\u5165\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(733957).Z+"",width:"2524",height:"1078"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},529324:function(e,n,i){i.d(n,{Z:function(){return c}});let c=i.p+"assets/images/016fd519878bf775e744f9f2d1c46cb8-a3990afef415a8002e1ba971e9bb92a6.png"},334624:function(e,n,i){i.d(n,{Z:function(){return c}});let c=i.p+"assets/images/50e4eb739f08fcc6479bb32c9e9a6ade-5cb18f03a59731bef6709d3d694384a8.png"},676656:function(e,n,i){i.d(n,{Z:function(){return c}});let c=i.p+"assets/images/5cda3b08b1346f392c4b717b71fa2710-626c6112e6753ccb6269fb4015a71989.png"},22631:function(e,n,i){i.d(n,{Z:function(){return c}});let c=i.p+"assets/images/620e319d848d5b91b93d86c33862f19a-4007722ffad38cf8f011bb345482adc3.png"},242915:function(e,n,i){i.d(n,{Z:function(){return c}});let c=i.p+"assets/images/96c4eaa4ff55045ac0d224539a903a2b-a50e5632e993a1b051006bdc6cb561d2.png"},733957:function(e,n,i){i.d(n,{Z:function(){return c}});let c=i.p+"assets/images/a38675f4912ab10e2680814f0dae2e0f-65c141a1427c25778cb43548a6029671.png"},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return t}});var c=i(667294);let r={},s=c.createContext(r);function t(e){let n=c.useContext(s);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);