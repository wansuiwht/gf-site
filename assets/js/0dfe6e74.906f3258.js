"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["37868"],{571228:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"docs/\u6846\u67B6\u8BBE\u8BA1/\u9690\u5F0F\u4E0E\u663E\u5F0F\u521D\u59CB\u5316","title":"\u9690\u5F0F\u4E0E\u663E\u5F0F\u521D\u59CB\u5316","description":"\u7A0B\u5E8F\u542F\u52A8\u65F6\u9700\u8981\u6267\u884C\u7684\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u5305\u62ECGoFrame\u6846\u67B6\u4E2D\u7684\u9690\u5F0F\u521D\u59CB\u5316\u548C\u663E\u5F0F\u521D\u59CB\u5316\u3002\u9690\u5F0F\u521D\u59CB\u5316\u901A\u8FC7\u5305\u7684init\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u4F46\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u542F\u52A8\u5931\u8D25\uFF0C\u5EFA\u8BAE\u663E\u5F0F\u8C03\u7528\u8FDB\u884C\u590D\u6742\u521D\u59CB\u5316\u3002\u663E\u5F0F\u521D\u59CB\u5316\u5728\u4E1A\u52A1\u5F00\u53D1\u4E2D\u66F4\u4E3A\u53EF\u53D6\uFF0C\u4EE5\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u53EF\u7EF4\u62A4\u6027\u3002","source":"@site/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u9690\u5F0F\u4E0E\u663E\u5F0F\u521D\u59CB\u5316.md","sourceDirName":"docs/\u6846\u67B6\u8BBE\u8BA1","slug":"/docs/design/initialization","permalink":"/docs/design/initialization","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67B6\u8BBE\u8BA1/\u9690\u5F0F\u4E0E\u663E\u5F0F\u521D\u59CB\u5316.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":7,"frontMatter":{"slug":"/docs/design/initialization","title":"\u9690\u5F0F\u4E0E\u663E\u5F0F\u521D\u59CB\u5316","sidebar_position":7,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","\u9690\u5F0F\u521D\u59CB\u5316","\u663E\u5F0F\u521D\u59CB\u5316","Golang","\u670D\u52A1\u5668\u914D\u7F6E","\u6570\u636E\u5E93\u914D\u7F6E","\u6A21\u5757\u521D\u59CB\u5316","\u9519\u8BEF\u5B9A\u4F4D","\u521D\u59CB\u5316\u903B\u8F91"],"description":"\u7A0B\u5E8F\u542F\u52A8\u65F6\u9700\u8981\u6267\u884C\u7684\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u5305\u62ECGoFrame\u6846\u67B6\u4E2D\u7684\u9690\u5F0F\u521D\u59CB\u5316\u548C\u663E\u5F0F\u521D\u59CB\u5316\u3002\u9690\u5F0F\u521D\u59CB\u5316\u901A\u8FC7\u5305\u7684init\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u4F46\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u542F\u52A8\u5931\u8D25\uFF0C\u5EFA\u8BAE\u663E\u5F0F\u8C03\u7528\u8FDB\u884C\u590D\u6742\u521D\u59CB\u5316\u3002\u663E\u5F0F\u521D\u59CB\u5316\u5728\u4E1A\u52A1\u5F00\u53D1\u4E2D\u66F4\u4E3A\u53EF\u53D6\uFF0C\u4EE5\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u53EF\u7EF4\u62A4\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u63A5\u53E3\u5316\u4E0E\u6CDB\u578B\u8BBE\u8BA1","permalink":"/docs/design/interface-generic"},"next":{"title":"Golang\u679A\u4E3E\u503C\u7BA1\u7406","permalink":"/docs/design/enums"}}'),s=i("785893"),d=i("250065");let c={slug:"/docs/design/initialization",title:"\u9690\u5F0F\u4E0E\u663E\u5F0F\u521D\u59CB\u5316",sidebar_position:7,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","\u9690\u5F0F\u521D\u59CB\u5316","\u663E\u5F0F\u521D\u59CB\u5316","Golang","\u670D\u52A1\u5668\u914D\u7F6E","\u6570\u636E\u5E93\u914D\u7F6E","\u6A21\u5757\u521D\u59CB\u5316","\u9519\u8BEF\u5B9A\u4F4D","\u521D\u59CB\u5316\u903B\u8F91"],description:"\u7A0B\u5E8F\u542F\u52A8\u65F6\u9700\u8981\u6267\u884C\u7684\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u5305\u62ECGoFrame\u6846\u67B6\u4E2D\u7684\u9690\u5F0F\u521D\u59CB\u5316\u548C\u663E\u5F0F\u521D\u59CB\u5316\u3002\u9690\u5F0F\u521D\u59CB\u5316\u901A\u8FC7\u5305\u7684init\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u4F46\u53EF\u80FD\u5BFC\u81F4\u7A0B\u5E8F\u542F\u52A8\u5931\u8D25\uFF0C\u5EFA\u8BAE\u663E\u5F0F\u8C03\u7528\u8FDB\u884C\u590D\u6742\u521D\u59CB\u5316\u3002\u663E\u5F0F\u521D\u59CB\u5316\u5728\u4E1A\u52A1\u5F00\u53D1\u4E2D\u66F4\u4E3A\u53EF\u53D6\uFF0C\u4EE5\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u53EF\u7EF4\u62A4\u6027\u3002"},r=void 0,o={},a=[{value:"\u4E00\u3001\u9690\u5F0F\u521D\u59CB\u5316",id:"\u4E00\u9690\u5F0F\u521D\u59CB\u5316",level:2},{value:"\u4E8C\u3001\u663E\u5F0F\u521D\u59CB\u5316",id:"\u4E8C\u663E\u5F0F\u521D\u59CB\u5316",level:2},{value:"\u4E09\u3001\u5982\u4F55\u9009\u62E9",id:"\u4E09\u5982\u4F55\u9009\u62E9",level:2}];function l(e){let n={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:['\u6211\u4EEC\u77E5\u9053\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\u4F1A\u9700\u8981\u6267\u884C\u4E00\u4E9B"\u521D\u59CB\u5316"\u7684\u903B\u8F91\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1A ',(0,s.jsx)(n.code,{children:"Server"})," \u914D\u7F6E\u3001\u5404\u79CD\u6570\u636E\u5E93\uFF08 ",(0,s.jsx)(n.code,{children:"MySQL"}),"\u3001 ",(0,s.jsx)(n.code,{children:"Redis"}),"\u3001 ",(0,s.jsx)(n.code,{children:"Kafka"})," \u7B49\uFF09\u914D\u7F6E\u3001\u4E1A\u52A1\u5BF9\u8C61\u914D\u7F6E\u7B49\u7B49\u3002\u7EDD\u5927\u591A\u6570\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u6709\u4E24\u79CD\u521D\u59CB\u5316\u65B9\u5F0F\uFF1A\u9690\u5F0F\u521D\u59CB\u5316\u548C\u663E\u5F0F\u521D\u59CB\u5316\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E00\u9690\u5F0F\u521D\u59CB\u5316",children:"\u4E00\u3001\u9690\u5F0F\u521D\u59CB\u5316"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u7279\u522B\u6CE8\u610F\uFF1A\u5728 ",(0,s.jsx)(n.code,{children:"Golang v1.21"})," \u7248\u672C\u540E\uFF0C ",(0,s.jsx)(n.code,{children:"init"})," \u7684\u521D\u59CB\u5316\u6267\u884C\u987A\u5E8F\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5E76\u4E14\u53EF\u80FD\u4F1A\u5F15\u8D77\u4F9D\u8D56 ",(0,s.jsx)(n.code,{children:"init"})," \u6765\u6267\u884C\u521D\u59CB\u5316\u903B\u8F91\u7684\u5305\u7684\u95EE\u9898\u3002\u56E0\u6B64\uFF0C\u4E0D\u5EFA\u8BAE\u5728 ",(0,s.jsx)(n.code,{children:"init"})," \u4E2D\u6267\u884C ",(0,s.jsx)(n.strong,{children:"\u590D\u6742\u7684\u521D\u59CB\u5316\u903B\u8F91"}),"\uFF0C ",(0,s.jsx)(n.strong,{children:"\u5EFA\u8BAE\u662F\u901A\u8FC7\u663E\u5F0F\u8C03\u7528\u65B9\u5F0F\u6765\u5B9E\u73B0\u6A21\u5757\u590D\u6742\u7684\u521D\u59CB\u5316\u903B\u8F91"}),"\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u9690\u5F0F\u521D\u59CB\u5316\u4E00\u822C\u901A\u8FC7\u5305\u521D\u59CB\u5316\u65B9\u6CD5 ",(0,s.jsx)(n.code,{children:"init"})," \u6267\u884C\u521D\u59CB\u5316\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u521D\u59CB\u5316\u903B\u8F91\u5B58\u5728\u9519\u8BEF\u7684\u53EF\u80FD\uFF0C\u7531\u4E8E ",(0,s.jsx)(n.code,{children:"init"})," \u65B9\u6CD5\u7684\u9519\u8BEF\u65E0\u6CD5\u88AB\u4E0A\u5C42\u6355\u83B7\uFF0C\u521D\u59CB\u5316\u51FA\u9519\u65F6\u5F80\u5F80\u76F4\u63A5\u7EC8\u6B62\u7A0B\u5E8F\u542F\u52A8\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(510169).Z+"",width:"2880",height:"1646"})}),"\n",(0,s.jsx)(n.p,{children:"\u9690\u5F0F\u521D\u59CB\u5316\u51FA\u9519\u65F6\u5F80\u5F80\u76F4\u63A5\u7EC8\u6B62\u7A0B\u5E8F\u542F\u52A8"}),"\n",(0,s.jsx)(n.p,{children:"\u9690\u5F0F\u521D\u59CB\u5316\u7684\u597D\u5904\u662F\u4E0D\u9700\u8981\u624B\u52A8\u8C03\u7528\u521D\u59CB\u5316\u65B9\u6CD5\uFF0C\u5BF9\u4E8E\u5F00\u53D1\u8005\u9690\u85CF\u4E86\u521D\u59CB\u5316\u7EC6\u8282\uFF0C\u56E0\u6B64\u5F00\u53D1\u8005\u6CA1\u6709\u5FC3\u667A\u8D1F\u62C5\u3002\u4F46\u662F\u7F3A\u70B9\u4E5F\u540C\u6837\u5982\u6B64\uFF0C\u5F00\u53D1\u8005\u4E0D\u77E5\u9053\u521D\u59CB\u5316\u7EC6\u8282\uFF0C\u4E00\u65E6\u51FA\u73B0\u9519\u8BEF\u65F6\uFF0C\u5F88\u96BE\u5FEB\u901F\u5B9A\u4F4D\u9519\u8BEF\u539F\u56E0\u3002\u56E0\u6B64\u4F7F\u7528\u9690\u5F0F\u521D\u59CB\u5316\u65F6\uFF0C\u5F80\u5F80\u8981\u6C42\u5728\u521D\u59CB\u5316\u51FA\u9519\u65F6\u5C06\u8BE6\u7EC6\u7684\u9519\u8BEF\u4EE5\u53CA\u5806\u6808\u4FE1\u606F\u6253\u5370\u51FA\u6765\u4FBF\u4E8E\u9519\u8BEF\u5B9A\u4F4D\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684\u5F88\u591A\u6A21\u5757\u90FD\u91C7\u7528\u4E86\u9690\u5F0F\u521D\u59CB\u5316\uFF0C\u9690\u85CF\u6A21\u5757\u7684\u521D\u59CB\u5316\u7EC6\u8282\uFF0C\u51CF\u5C11\u5F00\u53D1\u8005\u7684\u5FC3\u667A\u8D1F\u62C5\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(415588).Z+"",width:"2880",height:"1646"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GoFrame"})," \u4E2D\u7684\u6A21\u5757\u666E\u904D\u5B58\u5728\u9690\u5F0F\u521D\u59CB\u5316\u8BBE\u8BA1"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(493720).Z+"",width:"3072",height:"1764"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u7684 ",(0,s.jsx)(n.code,{children:"main"})," \u5305\u9690\u5F0F ",(0,s.jsx)(n.code,{children:"imports"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u4E8E\u5305 ",(0,s.jsx)(n.code,{children:"init"})," \u65B9\u6CD5\u7684\u521D\u59CB\u5316\u6D41\u7A0B\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(978441).Z+"",width:"2166",height:"948"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4E8C\u663E\u5F0F\u521D\u59CB\u5316",children:"\u4E8C\u3001\u663E\u5F0F\u521D\u59CB\u5316"}),"\n",(0,s.jsxs)(n.p,{children:["\u663E\u5F0F\u521D\u59CB\u5316\u8981\u6C42\u5F00\u53D1\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0C\u5982\u5728 ",(0,s.jsx)(n.code,{children:"main"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"boot"})," \u6A21\u5757\u4E2D\uFF0C\u8C03\u7528\u7279\u5B9A\u7684\u65B9\u6CD5\u6765\u6267\u884C\u521D\u59CB\u5316\u64CD\u4F5C\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u57FA\u7840\u7EC4\u4EF6\u7684\u521D\u59CB\u5316\u5F80\u5F80\u91C7\u7528\u9690\u5F0F\u521D\u59CB\u5316\u591A\u4E00\u4E9B\uFF0C\u56E0\u4E3A\u5BF9\u4E8E\u4F7F\u7528\u8005\u6765\u8BB2\u5E76\u4E0D\u5173\u5FC3\u5E95\u5C42\u57FA\u7840\u6A21\u5757\u7684\u521D\u59CB\u5316\u903B\u8F91\uFF0C\u800C\u4E1A\u52A1\u6A21\u5757\u7684\u521D\u59CB\u5316\u5927\u591A\u6570\u4F1A\u91C7\u7528\u663E\u5F0F\u521D\u59CB\u5316\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(251170).Z+"",width:"2880",height:"1646"}),"\u5728 ",(0,s.jsx)(n.code,{children:"boot"})," \u5305\u4E2D\u6309\u7167\u987A\u5E8F\u6267\u884C\u663E\u5F0F\u521D\u59CB\u5316"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(581143).Z+"",width:"2880",height:"1646"}),"\u5728 ",(0,s.jsx)(n.code,{children:"main"})," \u5305\u8C03\u7528 ",(0,s.jsx)(n.code,{children:"boot.Boot()"})," \u65B9\u6CD5\u6267\u884C\u521D\u59CB\u5316"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4E09\u5982\u4F55\u9009\u62E9",children:"\u4E09\u3001\u5982\u4F55\u9009\u62E9"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4E1A\u52A1\u573A\u666F\u4E0B\uFF0C\u975E\u7279\u6B8A\u5FC5\u8981\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u5927\u5BB6\u91C7\u7528 ",(0,s.jsx)(n.strong,{children:"\u663E\u5F0F\u521D\u59CB\u5316"})," \u7684\u65B9\u5F0F\uFF0C\u4EE5\u4FDD\u8BC1\u66F4\u597D\u7684\u53EF\u7EF4\u62A4\u6027\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},251170:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/0124c249f03cd1f9fd78fe0970ffbda6-241d14f0a8db591cea05bc6d5329544a.png"},978441:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/40b3b7c2b75dcb36be348c840ca0eb3e-a3d6ae889acbf11171d2f637a0778f94.png"},581143:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/8417caae0e203d44d43c6bca369b3023-8ec6bf1660f960c0ddf5a615b2a00570.png"},510169:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/9190e5a8e2acf34a70442c6814a52327-0a3885ec217a5784bfe25e400e9ee9e5.png"},493720:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/b0b839a86595ee57f2c5a1b39c559df0-ebe01b0730cac6e1474a31c3cd8fb4d9.png"},415588:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/d019031d40a93f6318a933271d63c503-707bd17a2482aac25e2b7d6f0b4da59c.png"},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var t=i(667294);let s={},d=t.createContext(s);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);