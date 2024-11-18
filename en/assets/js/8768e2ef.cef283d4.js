"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["30193"],{538612:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>s});var n=JSON.parse('{"id":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C","title":"\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C","description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Jaeger\u5B9E\u73B0\u94FE\u8DEF\u8FFD\u8E2A\u3002\u6211\u4EEC\u5C06\u901A\u8FC7Jaeger\u548COpenTelemetry\u7ED3\u5408\u7684\u65B9\u5F0F\uFF0C\u5C55\u793A\u5982\u4F55\u5728\u7CFB\u7EDF\u4E2D\u5F15\u5165\u5206\u5E03\u5F0F\u8FFD\u8E2A\uFF0C\u5305\u62ECJaeger\u7684\u5FEB\u901F\u90E8\u7F72\u65B9\u6CD5\uFF0C\u4EE5\u53CAGoFrame\u6846\u67B6\u4E2D\u793A\u4F8B\u4EE3\u7801\u7684\u4F4D\u7F6E\u548C\u5C01\u88C5\u597D\u7684\u6CE8\u518C\u6A21\u5757\u3002","source":"@site/docs/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C.md","sourceDirName":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A","slug":"/docs/obs/tracing-prepare","permalink":"/en/docs/obs/tracing-prepare","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/obs/tracing-prepare","title":"\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67B6","OpenTelemetry","Jaeger","\u5206\u5E03\u5F0F\u8FFD\u8E2A","\u94FE\u8DEF\u8DDF\u8E2A","docker","OTLP HTTP","OTLP GRPC","\u793A\u4F8B\u4EE3\u7801"],"description":"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Jaeger\u5B9E\u73B0\u94FE\u8DEF\u8FFD\u8E2A\u3002\u6211\u4EEC\u5C06\u901A\u8FC7Jaeger\u548COpenTelemetry\u7ED3\u5408\u7684\u65B9\u5F0F\uFF0C\u5C55\u793A\u5982\u4F55\u5728\u7CFB\u7EDF\u4E2D\u5F15\u5165\u5206\u5E03\u5F0F\u8FFD\u8E2A\uFF0C\u5305\u62ECJaeger\u7684\u5FEB\u901F\u90E8\u7F72\u65B9\u6CD5\uFF0C\u4EE5\u53CAGoFrame\u6846\u67B6\u4E2D\u793A\u4F8B\u4EE3\u7801\u7684\u4F4D\u7F6E\u548C\u5C01\u88C5\u597D\u7684\u6CE8\u518C\u6A21\u5757\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-\u80CC\u666F\u77E5\u8BC6","permalink":"/en/docs/obs/tracing-intro"},"next":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-\u57FA\u672C\u793A\u4F8B","permalink":"/en/docs/obs/tracing-example"}}'),c=t("785893"),i=t("250065");let s={slug:"/docs/obs/tracing-prepare",title:"\u94FE\u8DEF\u8DDF\u8E2A-\u51C6\u5907\u5DE5\u4F5C",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67B6","OpenTelemetry","Jaeger","\u5206\u5E03\u5F0F\u8FFD\u8E2A","\u94FE\u8DEF\u8DDF\u8E2A","docker","OTLP HTTP","OTLP GRPC","\u793A\u4F8B\u4EE3\u7801"],description:"\u5728GoFrame\u6846\u67B6\u4E2D\u4F7F\u7528Jaeger\u5B9E\u73B0\u94FE\u8DEF\u8FFD\u8E2A\u3002\u6211\u4EEC\u5C06\u901A\u8FC7Jaeger\u548COpenTelemetry\u7ED3\u5408\u7684\u65B9\u5F0F\uFF0C\u5C55\u793A\u5982\u4F55\u5728\u7CFB\u7EDF\u4E2D\u5F15\u5165\u5206\u5E03\u5F0F\u8FFD\u8E2A\uFF0C\u5305\u62ECJaeger\u7684\u5FEB\u901F\u90E8\u7F72\u65B9\u6CD5\uFF0C\u4EE5\u53CAGoFrame\u6846\u67B6\u4E2D\u793A\u4F8B\u4EE3\u7801\u7684\u4F4D\u7F6E\u548C\u5C01\u88C5\u597D\u7684\u6CE8\u518C\u6A21\u5757\u3002"},o=void 0,a={},d=[{value:"Jaeger",id:"jaeger",level:2},{value:"\u51C6\u5907\u5DE5\u4F5C",id:"\u51C6\u5907\u5DE5\u4F5C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801\u5730\u5740",id:"\u793A\u4F8B\u4EE3\u7801\u5730\u5740",level:2},{value:"Jaeger\u6CE8\u518C\u5C01\u88C5\uFF08\u5373\u5C06\u57282.6.0\u7248\u672C\u79FB\u9664\uFF09",id:"jaeger\u6CE8\u518C\u5C01\u88C5\u5373\u5C06\u5728260\u7248\u672C\u79FB\u9664",level:2},{value:"OTLP HTTP\u6CE8\u518C\u5C01\u88C5",id:"otlp-http\u6CE8\u518C\u5C01\u88C5",level:2},{value:"OTLP GRPC\u6CE8\u518C\u5C01\u88C5",id:"otlp-grpc\u6CE8\u518C\u5C01\u88C5",level:2}];function l(e){let r={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:["\u5BF9 ",(0,c.jsx)(r.code,{children:"OpenTelemetry"})," \u7684\u6982\u5FF5\u6709\u521D\u6B65\u4E86\u89E3\u540E\uFF0C\u6211\u4EEC\u63A5\u7740\u4EE5 ",(0,c.jsx)(r.code,{children:"Jaeger"})," \u4E3A\u4F8B\u6765\u6F14\u793A\u5982\u4F55\u5728\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u5B9E\u73B0\u94FE\u8DEF\u8FFD\u8E2A\u3002"]}),"\n",(0,c.jsx)(r.h2,{id:"jaeger",children:"Jaeger"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),"\\\u02C8y\u0101-g\u0259r\\ \u662FUber\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u8FFD\u8E2A\u7CFB\u7EDF\uFF0C\u662F\u652F\u6301 ",(0,c.jsx)(r.code,{children:"OpenTelemetry"})," \u7684\u7CFB\u7EDF\u4E4B\u4E00\uFF0C\u4E5F\u662F ",(0,c.jsx)(r.code,{children:"CNCF"})," \u9879\u76EE\u3002\u672C\u7BC7\u5C06\u4F7F\u7528 ",(0,c.jsx)(r.code,{children:"Jaeger"})," \u6765\u6F14\u793A\u5982\u4F55\u5728\u7CFB\u7EDF\u4E2D\u5F15\u5165\u5206\u5E03\u5F0F\u8FFD\u8E2A\u3002\u4EE5\u4E0B\u662F ",(0,c.jsx)(r.code,{children:"Opentracing+Jaeger"})," \u7684\u67B6\u6784\u56FE\uFF0C\u9488\u5BF9\u4E8E\u4F7F\u7528 ",(0,c.jsx)(r.code,{children:"OpenTelemetry"})," \u4E5F\u662F\u5982\u6B64\u3002"]}),"\n",(0,c.jsx)(r.h2,{id:"",children:(0,c.jsx)(r.img,{src:t(72785).Z+"",width:"2512",height:"1344"})}),"\n",(0,c.jsx)(r.h2,{id:"\u51C6\u5907\u5DE5\u4F5C",children:"\u51C6\u5907\u5DE5\u4F5C"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Jaeger"})," \u63D0\u4F9B\u4E86 ",(0,c.jsx)(r.code,{children:"all-in-one"})," \u955C\u50CF\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5FEB\u901F\u5F00\u59CB\u6D4B\u8BD5\uFF1A"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"docker run --rm --name jaeger \\\n  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \\\n  -p 6831:6831/udp \\\n  -p 6832:6832/udp \\\n  -p 5778:5778 \\\n  -p 16686:16686 \\\n  -p 4317:4317 \\\n  -p 4318:4318 \\\n  -p 14250:14250 \\\n  -p 14268:14268 \\\n  -p 14269:14269 \\\n  -p 9411:9411 \\\n  jaegertracing/all-in-one:1.55\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u5982\u679C ",(0,c.jsx)(r.code,{children:"docker"})," \u955C\u50CF\u62C9\u53D6\u592A\u6162\uFF0C\u60A8\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u6539 ",(0,c.jsx)(r.code,{children:"docker"})," \u62C9\u53D6\u7AD9\u70B9\u7684\u955C\u50CF\u5730\u5740\uFF0C\u4F8B\u5982\uFF1A ",(0,c.jsx)(r.a,{href:"http://mirrors.ustc.edu.cn/help/dockerhub.html?highlight=docker",children:"http://mirrors.ustc.edu.cn/help/dockerhub.html?highlight=docker"})]}),"\n",(0,c.jsxs)(r.p,{children:["\u955C\u50CF\u542F\u52A8\u540E\uFF0C\u901A\u8FC7 ",(0,c.jsx)(r.a,{href:"http://localhost:16686/",children:"http://localhost:16686"})," \u53EF\u4EE5\u6253\u5F00 ",(0,c.jsx)(r.code,{children:"Jaeger UI"}),"\u3002"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{src:t(172241).Z+"",width:"1918",height:"896"})}),"\n",(0,c.jsx)(r.h2,{id:"\u793A\u4F8B\u4EE3\u7801\u5730\u5740",children:"\u793A\u4F8B\u4EE3\u7801\u5730\u5740"}),"\n",(0,c.jsxs)(r.p,{children:["\u6211\u4EEC\u7684\u793A\u4F8B\u4EE3\u7801\u5728 ",(0,c.jsx)(r.code,{children:"gf"})," \u4E3B\u5E93\u4E2D\uFF0C\u5730\u5740\uFF1A ",(0,c.jsx)(r.a,{href:"https://github.com/gogf/gf/tree/master/example/trace",children:"https://github.com/gogf/gf/tree/master/example/trace"})]}),"\n",(0,c.jsx)(r.h2,{id:"jaeger\u6CE8\u518C\u5C01\u88C5\u5373\u5C06\u5728260\u7248\u672C\u79FB\u9664",children:"Jaeger\u6CE8\u518C\u5C01\u88C5\uFF08\u5373\u5C06\u57282.6.0\u7248\u672C\u79FB\u9664\uFF09"}),"\n",(0,c.jsxs)(r.p,{children:["\u4E3A\u65B9\u4FBF\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u6211\u4EEC\u901A\u8FC7\u793E\u533A\u6A21\u5757\u7684\u5F62\u5F0F\uFF0C\u5DF2\u7ECF\u5C01\u88C5\u597D\u4E86\u5BF9 ",(0,c.jsx)(r.code,{children:"jaeger"})," \u7684\u521D\u59CB\u5316\u903B\u8F91\uFF0C\u4EE3\u7801\u5730\u5740\uFF1A ",(0,c.jsx)(r.a,{href:"https://github.com/gogf/gf/tree/master/contrib/trace/jaeger",children:"https://github.com/gogf/gf/tree/master/contrib/trace/jaeger"})]}),"\n",(0,c.jsx)(r.h2,{id:"otlp-http\u6CE8\u518C\u5C01\u88C5",children:"OTLP HTTP\u6CE8\u518C\u5C01\u88C5"}),"\n",(0,c.jsxs)(r.p,{children:["\u4E3A\u65B9\u4FBF\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u6211\u4EEC\u901A\u8FC7\u793E\u533A\u6A21\u5757\u7684\u5F62\u5F0F\uFF0C\u5DF2\u7ECF\u5C01\u88C5\u597D\u4E86\u5BF9 ",(0,c.jsx)(r.code,{children:"otelhttp"})," \u7684\u521D\u59CB\u5316\u903B\u8F91\uFF0C\u4EE3\u7801\u5730\u5740\uFF1A ",(0,c.jsx)(r.a,{href:"https://github.com/gogf/gf/tree/master/contrib/trace/otlphttp",children:"https://github.com/gogf/gf/tree/master/contrib/trace/otlphttp"})]}),"\n",(0,c.jsx)(r.h2,{id:"otlp-grpc\u6CE8\u518C\u5C01\u88C5",children:"OTLP GRPC\u6CE8\u518C\u5C01\u88C5"}),"\n",(0,c.jsxs)(r.p,{children:["\u4E3A\u65B9\u4FBF\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u6211\u4EEC\u901A\u8FC7\u793E\u533A\u6A21\u5757\u7684\u5F62\u5F0F\uFF0C\u5DF2\u7ECF\u5C01\u88C5\u597D\u4E86\u5BF9 ",(0,c.jsx)(r.code,{children:"otelgrpc"})," \u7684\u521D\u59CB\u5316\u903B\u8F91\uFF0C\u4EE3\u7801\u5730\u5740\uFF1A ",(0,c.jsx)(r.a,{href:"https://github.com/gogf/gf/tree/master/contrib/trace/otlpgrpc",children:"https://github.com/gogf/gf/tree/master/contrib/trace/otlpgrpc"})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},172241:function(e,r,t){t.d(r,{Z:function(){return n}});let n=t.p+"assets/images/870c4c69cfd848787f88b074f0879519-e8f8ffbbe85f12b7ca426a6a20e32f3b.png"},72785:function(e,r,t){t.d(r,{Z:function(){return n}});let n=t.p+"assets/images/cd8d6734e501e9ac4917920666cb0867-0dfc53f098d5b704ad93a0423dbd8ceb.png"},250065:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return s}});var n=t(667294);let c={},i=n.createContext(c);function s(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);