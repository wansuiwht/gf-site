"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["5157"],{331435:function(e,n,i){i.r(n),i.d(n,{metadata:()=>d,contentTitle:()=>o,default:()=>a,assets:()=>l,toc:()=>t,frontMatter:()=>c});var d=JSON.parse('{"id":"docs/\u5176\u4ED6\u8D44\u6599/\u5982\u4F55\u4ECEv1\u6109\u5FEB\u5347\u7EA7\u5230v2","title":"\u5982\u4F55\u4ECEv1\u6109\u5FEB\u5347\u7EA7\u5230v2","description":"GoFrame\u6846\u67B6\u53D1\u5E03\u4E86v2\u7248\u672C\uFF0C\u63A8\u8350\u4ECEv1\u5347\u7EA7\u81F3v2\u4EE5\u83B7\u53D6\u65B0\u529F\u80FD\u548C\u7A33\u5B9A\u6027\u63D0\u5347\u3002\u6CE8\u610F\u8C03\u6574import\u8DEF\u5F84\u5E76\u5904\u7406\u53EF\u80FD\u7684\u4EE3\u7801\u4FEE\u6539\u3002gredis\u7EC4\u4EF6\u96C6\u7FA4\u5316\u652F\u6301\u5E26\u6765\u914D\u7F6E\u53D8\u5316\uFF0CCLI\u5DE5\u5177\u4EA6\u6709\u91CD\u8981\u66F4\u65B0\u548C\u7CBE\u7B80\uFF0C\u5EFA\u8BAE\u53C2\u8003\u6307\u5357\u5B9E\u73B0\u987A\u5229\u8FC7\u6E21\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u5176\u4ED6\u8D44\u6599/\u5982\u4F55\u4ECEv1\u6109\u5FEB\u5347\u7EA7\u5230v2.md","sourceDirName":"docs/\u5176\u4ED6\u8D44\u6599","slug":"/docs/other/happy-upgrading-from-v1-to-v2","permalink":"/2.7.x/docs/other/happy-upgrading-from-v1-to-v2","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u5176\u4ED6\u8D44\u6599/\u5982\u4F55\u4ECEv1\u6109\u5FEB\u5347\u7EA7\u5230v2.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":5,"frontMatter":{"slug":"/docs/other/happy-upgrading-from-v1-to-v2","title":"\u5982\u4F55\u4ECEv1\u6109\u5FEB\u5347\u7EA7\u5230v2","sidebar_position":5,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u5347\u7EA7\u6307\u5BFC","\u517C\u5BB9\u6027","import\u8DEF\u5F84","gredis","v1","v2","\u5DE5\u7A0B\u76EE\u5F55","CLI\u5DE5\u5177"],"description":"GoFrame\u6846\u67B6\u53D1\u5E03\u4E86v2\u7248\u672C\uFF0C\u63A8\u8350\u4ECEv1\u5347\u7EA7\u81F3v2\u4EE5\u83B7\u53D6\u65B0\u529F\u80FD\u548C\u7A33\u5B9A\u6027\u63D0\u5347\u3002\u6CE8\u610F\u8C03\u6574import\u8DEF\u5F84\u5E76\u5904\u7406\u53EF\u80FD\u7684\u4EE3\u7801\u4FEE\u6539\u3002gredis\u7EC4\u4EF6\u96C6\u7FA4\u5316\u652F\u6301\u5E26\u6765\u914D\u7F6E\u53D8\u5316\uFF0CCLI\u5DE5\u5177\u4EA6\u6709\u91CD\u8981\u66F4\u65B0\u548C\u7CBE\u7B80\uFF0C\u5EFA\u8BAE\u53C2\u8003\u6307\u5357\u5B9E\u73B0\u987A\u5229\u8FC7\u6E21\u3002"},"sidebar":"mainSidebar","previous":{"title":"Golang\u5B66\u4E60\u8D44\u6E90","permalink":"/2.7.x/docs/other/golang-resource"},"next":{"title":"\u683C\u5F0F\u5316\u6253\u5370\u5360\u4F4D\u7B26","permalink":"/2.7.x/docs/other/printing-format"}}'),r=i("785893"),s=i("250065");let c={slug:"/docs/other/happy-upgrading-from-v1-to-v2",title:"\u5982\u4F55\u4ECEv1\u6109\u5FEB\u5347\u7EA7\u5230v2",sidebar_position:5,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u5347\u7EA7\u6307\u5BFC","\u517C\u5BB9\u6027","import\u8DEF\u5F84","gredis","v1","v2","\u5DE5\u7A0B\u76EE\u5F55","CLI\u5DE5\u5177"],description:"GoFrame\u6846\u67B6\u53D1\u5E03\u4E86v2\u7248\u672C\uFF0C\u63A8\u8350\u4ECEv1\u5347\u7EA7\u81F3v2\u4EE5\u83B7\u53D6\u65B0\u529F\u80FD\u548C\u7A33\u5B9A\u6027\u63D0\u5347\u3002\u6CE8\u610F\u8C03\u6574import\u8DEF\u5F84\u5E76\u5904\u7406\u53EF\u80FD\u7684\u4EE3\u7801\u4FEE\u6539\u3002gredis\u7EC4\u4EF6\u96C6\u7FA4\u5316\u652F\u6301\u5E26\u6765\u914D\u7F6E\u53D8\u5316\uFF0CCLI\u5DE5\u5177\u4EA6\u6709\u91CD\u8981\u66F4\u65B0\u548C\u7CBE\u7B80\uFF0C\u5EFA\u8BAE\u53C2\u8003\u6307\u5357\u5B9E\u73B0\u987A\u5229\u8FC7\u6E21\u3002"},o=void 0,l={},t=[{value:"\u5199\u5728\u524D\u9762",id:"\u5199\u5728\u524D\u9762",level:2},{value:"v1\u4E0Ev2\u7684\u517C\u5BB9\u6027",id:"v1\u4E0Ev2\u7684\u517C\u5BB9\u6027",level:2},{value:"\u5C06\u4F9D\u8D56\u66FF\u6362\u4E3Av2",id:"\u5C06\u4F9D\u8D56\u66FF\u6362\u4E3Av2",level:2},{value:"\u4E0B\u8F7D\u6700\u65B0v2\u7248\u672C",id:"\u4E0B\u8F7D\u6700\u65B0v2\u7248\u672C",level:2},{value:"\u5DE5\u7A0B\u76EE\u5F55\u7684\u8C03\u6574",id:"\u5DE5\u7A0B\u76EE\u5F55\u7684\u8C03\u6574",level:2},{value:"\u7F16\u8BD1\u8FD0\u884C\u4FEE\u6539",id:"\u7F16\u8BD1\u8FD0\u884C\u4FEE\u6539",level:2},{value:"CLI\u7684\u91CD\u8981\u53D8\u5316",id:"cli\u7684\u91CD\u8981\u53D8\u5316",level:2},{value:"\u4E00\u4E9B\u91CD\u8981\u8BF4\u660E",id:"\u4E00\u4E9B\u91CD\u8981\u8BF4\u660E",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5199\u5728\u524D\u9762",children:"\u5199\u5728\u524D\u9762"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u53D1\u5E03\u4E86 ",(0,r.jsx)(n.code,{children:"v2"})," \u7248\u672C\uFF0C\u8FD9\u662F\u4E00\u4E2A\u91CC\u7A0B\u7891\u7248\u672C\uFF0C\u5305\u542B\u4E86\u5F88\u591A\u65B0\u529F\u80FD\u7279\u6027\u548C\u5927\u91CF\u6539\u8FDB\uFF0C\u5E76\u4E14\u53D1\u5E03\u4E86\u4E00\u4E9B\u5F00\u521B\u6027\u7684\u7279\u6027\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u662F\u65B0\u7528\u6237\uFF0C\u8BF7\u76F4\u63A5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"v2"})," \u8D77\u98DE\u3002\u5982\u679C\u662F\u8001\u7528\u6237\uFF0C\u5899\u88C2\u63A8\u8350\u4ECE ",(0,r.jsx)(n.code,{children:"v1"})," \u5347\u7EA7\u4E3A ",(0,r.jsx)(n.code,{children:"v2"}),"\uFF0C\u66F4\u52A0\u7A33\u5B9A\u53EF\u9760\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"v2"})," \u5347\u7EA7\u7684\u51E0\u70B9\u91CD\u8981\u8BF4\u660E\uFF1A"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4E3A\u4FDD\u8BC1\u517C\u5BB9\u6027\uFF0C\u6309\u7167 ",(0,r.jsx)(n.code,{children:"Golang"})," \u5B98\u65B9 ",(0,r.jsx)(n.code,{children:"module"})," \u7BA1\u7406\u7684\u89C4\u8303\uFF0C\u6211\u4EEC\u5C06 ",(0,r.jsx)(n.code,{children:"import"})," \u8DEF\u5F84\u53D8\u5316\u4E86\uFF0C\u56E0\u6B64\u9700\u8981\u5168\u5C40\u66FF\u6362 ",(0,r.jsx)(n.code,{children:"import"})," \u8DEF\u5F84\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u7531\u4E8E\u662F\u5927\u7248\u672C\u5347\u7EA7\uFF0C\u56E0\u6B64\u5B58\u5728\u90E8\u5206\u65B9\u6CD5\u5220\u51CF\u3001\u66F4\u65B0\u7684\u60C5\u51B5\uFF0C\u5927\u5BB6\u653E\u5FC3\u4E00\u5207\u90FD\u6709\u66F4\u597D\u7684\u65B9\u6848\u63D0\u4F9B\u5566\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4E00\u822C\u6765\u8BF4\u5347\u7EA7\u540E\u91CD\u65B0\u7F16\u8BD1\uFF0C\u6839\u636E\u7F16\u8BD1\u9519\u8BEF\u63D0\u793A\u4FEE\u6539\u4EE3\u7801\u5373\u53EF\u5B8C\u6210\u5347\u7EA7\u3002"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gredis"})," \u7EC4\u4EF6\u7531\u4E8E\u652F\u6301\u96C6\u7FA4\u5316\uFF0C\u56E0\u6B64\u914D\u7F6E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u8FD9\u5757\u9700\u8981\u6CE8\u610F\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4EEC\u6CA1\u6709\u63D0\u4F9B\u5347\u7EA7\u5DE5\u5177\uFF0C\u56E0\u4E3A\u6211\u4EEC\u89C9\u5F97\u63D0\u4F9B\u5347\u7EA7\u6307\u5BFC\u5373\u53EF\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"v1\u4E0Ev2\u7684\u517C\u5BB9\u6027",children:"v1\u4E0Ev2\u7684\u517C\u5BB9\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u4E3A\u4E86\u4FDD\u8BC1\u9879\u76EE\u517C\u5BB9\u6027\uFF0C\u80FD\u591F\u540C\u65F6\u4F9D\u8D56 ",(0,r.jsx)(n.code,{children:"v1"})," \u548C ",(0,r.jsx)(n.code,{children:"v2"})," \u7248\u672C\uFF0C\u56E0\u6B64\u6211\u4EEC\u53D1\u5E03\u4E86 ",(0,r.jsx)(n.code,{children:"v1"})," \u6700\u540E\u4E00\u4E2A\u7248\u672C ",(0,r.jsx)(n.code,{children:"v1.16.7"}),"\uFF0C\u5927\u5BB6\u6709\u9700\u8981\u53EF\u4EE5\u5347\u7EA7\u3002\u5E76\u4E14\u89E3\u51B3\u4E86 ",(0,r.jsx)(n.code,{children:"client_tracing.go:73:3: undefined: attribute.Any"})," \u7684\u5E38\u89C1\u95EE\u9898\u3002\u4F46\u540C\u65F6\u4F9D\u8D56\u4E24\u4E2A\u7248\u672C\u7684 ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u53EF\u80FD\u4F1A\u964D\u4F4E\u9879\u76EE\u7EF4\u62A4\u6027\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u5927\u5BB6\u5C3D\u5FEB\u5347\u7EA7\u5230 ",(0,r.jsx)(n.code,{children:"v2"})," \u7248\u672C\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5C06\u4F9D\u8D56\u66FF\u6362\u4E3Av2",children:"\u5C06\u4F9D\u8D56\u66FF\u6362\u4E3Av2"}),"\n",(0,r.jsx)(n.p,{children:"\u5168\u5C40\u66FF\u6362\u6E90\u4EE3\u7801\u5373\u53EF\uFF0C\u89C4\u5219\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'"github.com/gogf/gf/ => "github.com/gogf/gf/v2/\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u50CF\u8FD9\u6837\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(129854).Z+"",width:"1562",height:"1234"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4E0B\u8F7D\u6700\u65B0v2\u7248\u672C",children:"\u4E0B\u8F7D\u6700\u65B0v2\u7248\u672C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get -u github.com/gogf/gf/v2@latest\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5DE5\u7A0B\u76EE\u5F55\u7684\u8C03\u6574",children:"\u5DE5\u7A0B\u76EE\u5F55\u7684\u8C03\u6574"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F ",(0,r.jsx)(n.code,{children:"GoFrame"})," \u5B98\u65B9\u63A8\u8350\u7684\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\uFF0C\u53EF\u4EE5\u53C2\u8003\u6700\u65B0\u7684\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784\u624B\u52A8\u8C03\u6574\u5373\u53EF\uFF1A ",(0,r.jsx)(n.a,{href:"/2.7.x/docs/design/project-structure",children:"\u5DE5\u7A0B\u76EE\u5F55\u8BBE\u8BA1\uD83D\uDD25"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6700\u65B0\u7684 ",(0,r.jsx)(n.code,{children:"cli"})," \u5DE5\u5177\u4E0D\u518D\u652F\u6301\u65E7\u7248\u5DE5\u7A0B\u76EE\u5F55\u7684\u9879\u76EE\u521B\u5EFA\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7F16\u8BD1\u8FD0\u884C\u4FEE\u6539",children:"\u7F16\u8BD1\u8FD0\u884C\u4FEE\u6539"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD0\u884C\u60A8\u7684\u9879\u76EE\uFF0C\u5982\u679C\u9047\u5230\u7F16\u8BD1\u95EE\u9898\uFF0C\u6839\u636E\u9519\u8BEF\u63D0\u793A\u8FDB\u884C\u624B\u52A8\u4FEE\u6539\uFF0C\u5982\u6B64\u5FAA\u73AF\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u60A8\u4E0D\u77E5\u9053\u5982\u4F55\u4FEE\u6539\uFF0C\u8BF7\u5728\u672C\u6587\u6863\u8BC4\u8BBA\uFF0C\u6211\u4EEC\u7684\u793E\u533A\u56E2\u961F\u5C0F\u4F19\u4F34\u5C06\u4F1A\u53CA\u65F6\u7ED9\u4E0E\u5347\u7EA7\u5E2E\u52A9\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"cli\u7684\u91CD\u8981\u53D8\u5316",children:"CLI\u7684\u91CD\u8981\u53D8\u5316"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53BB\u6389\u4E86 ",(0,r.jsx)(n.code,{children:"swagger"})," \u547D\u4EE4\u3002 ",(0,r.jsx)(n.code,{children:"v1"})," \u7248\u672C\u7684 ",(0,r.jsx)(n.code,{children:"gf swagger"})," \u547D\u4EE4\u65F6\u901A\u8FC7\u81EA\u52A8\u5B89\u88C5\u7B2C\u4E09\u65B9\u7684 ",(0,r.jsx)(n.code,{children:"swag"})," \u5DE5\u5177\uFF0C\u89E3\u6790\u6E90\u4EE3\u7801\u4E2D\u7684\u6CE8\u91CA\u751F\u6210\u7684 ",(0,r.jsx)(n.code,{children:"swagger"})," \u6587\u6863\u3002\u8FD9\u79CD\u6587\u6863\u7684\u7BA1\u7406\u7EF4\u62A4\u65B9\u5F0F\u4F1A\u6709\u4E00\u4E9B\u95EE\u9898\uFF1A\u4EC5\u652F\u6301 ",(0,r.jsx)(n.code,{children:"Swagger2.0"})," \u534F\u8BAE\u3001\u4F7F\u7528\u4F53\u9A8C\u5F88\u5DEE\u3001\u6CE8\u91CA\u96BE\u4EE5\u548C\u4EE3\u7801\u540C\u6B65\u7EF4\u62A4\uFF0C\u9020\u6210\u63A5\u53E3\u6587\u6863\u4E0E\u4EE3\u7801\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002\u65B0\u7248\u672C\u6709\u4E86\u89C4\u8303\u8DEF\u7531\uFF0C\u8BE5\u547D\u4EE4\u5373\u5E9F\u5F03\u6389\u4E86\u3002\u5982\u679C\u9700\u8981\u7EE7\u7EED\u4F7F\u7528\u8BE5\u547D\u4EE4\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u624B\u52A8\u5B89\u88C5\u4F7F\u7528\u7B2C\u4E09\u65B9 ",(0,r.jsx)(n.code,{children:"swag"})," \u5DE5\u5177\uFF1A ",(0,r.jsx)(n.a,{href:"https://github.com/swaggo/swag",children:"https://github.com/swaggo/swag"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u53BB\u6389\u4E86 ",(0,r.jsx)(n.code,{children:"update"})," \u547D\u4EE4\u3002 ",(0,r.jsx)(n.code,{children:"v2"})," \u7248\u672C\u5F00\u59CB\uFF0C ",(0,r.jsx)(n.code,{children:"CLI"})," \u5DE5\u5177\u7684\u5B89\u88C5\u4E0B\u8F7D\u7EDF\u4E00\u8D70 ",(0,r.jsx)(n.code,{children:"github"}),"\uFF0C\u4EE5\u51CF\u5C11 ",(0,r.jsx)(n.code,{children:"CLI"})," \u5DE5\u5177\u7684\u7EF4\u62A4\u5DE5\u4F5C\u91CF\u3002\u540E\u7EED\u53EF\u80FD\u4F1A\u91CD\u65B0\u589E\u52A0\u8BE5\u547D\u4EE4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4E00\u4E9B\u91CD\u8981\u8BF4\u660E",children:"\u4E00\u4E9B\u91CD\u8981\u8BF4\u660E"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gf-cli"})," \u7684\u4ED3\u5E93\u5DF2\u7ECF\u642C\u8FC1\u5230\u4E86 ",(0,r.jsx)(n.code,{children:"gf"})," \u4E3B\u5E93\u7EF4\u62A4\uFF0C\u4FBF\u4E8E\u4FDD\u8BC1\u5DE5\u5177\u4E0E\u6846\u67B6\u7248\u672C\u540C\u6B65\u3002\u539F\u6709\u4ED3\u5E93\u4E0D\u518D\u7EF4\u62A4\u3002\u5177\u4F53\u8BF7\u67E5\u770B\u8BF4\u660E\uFF1A ",(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/cmd/gf",children:"https://github.com/gogf/gf/tree/master/cmd/gf"})]}),"\n",(0,r.jsx)(n.li,{children:"\u6846\u67B6\u6838\u5FC3\u7EC4\u4EF6\u91C7\u7528\u4E86\u63A5\u53E3\u5316\u8BBE\u8BA1\uFF0C\u4E3A\u4FDD\u8BC1\u63A5\u53E3\u901A\u7528\u6027\uFF0C\u5BF9\u5916\u66B4\u9732\u7684\u65B9\u6CD5\u6709\u4E2A\u522B\u5220\u51CF\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6846\u67B6\u6838\u5FC3\u7EC4\u4EF6\u5927\u91CF\u4F7F\u7528\u4E86 ",(0,r.jsx)(n.code,{children:"gvar"})," \u6CDB\u578B\uFF0C\u4EE5\u63D0\u9AD8\u6613\u7528\u6027\u3001\u5C4F\u853D\u5E95\u5C42\u7684\u5177\u4F53\u7C7B\u578B\u5B9E\u73B0\u3002\u4E3A\u4FDD\u8BC1\u7A33\u5B9A\u6027\u548C\u6613\u7528\u6027\uFF0C\u6846\u67B6\u5728\u672A\u6765 ",(0,r.jsx)(n.code,{children:"2-3"})," \u5E74\u5185\u4E0D\u4F1A\u8003\u8651\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"Golang"})," \u5B98\u65B9\u6CDB\u578B\u3002\u5B98\u65B9\u6CDB\u578B\u5728\u6846\u67B6\u90E8\u5206\u7EC4\u4EF6\u7684\u90E8\u5206\u7279\u6027\u4E0B\u6709\u6539\u9020\u4EF7\u503C\u3002"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},129854:function(e,n,i){i.d(n,{Z:function(){return d}});let d=i.p+"assets/images/6e0a32d42cc581bd2f4220d721714f41-115e3b6aaae6c9d33d928b45f9590836.png"},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return c}});var d=i(667294);let r={},s=d.createContext(r);function c(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);