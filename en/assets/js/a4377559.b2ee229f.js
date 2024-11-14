"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[33096],{937390:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4ecb\u7ecd","title":"\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4ecb\u7ecd","description":"GoFrame\u6846\u67b6\u4e2d\u76d1\u63a7\u544a\u8b66\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u91cd\u70b9\u4ecb\u7ecd\u4e86OpenTelemetry\u5173\u4e8e\u76d1\u63a7\u548c\u544a\u8b66\u8bbe\u8ba1\u7684\u76f8\u5173\u89c4\u8303\u548c\u7ec4\u4ef6\uff0c\u6db5\u76d6\u4e86Meter Provider\u3001Meter\u3001Instrument\u7b49\u7ec4\u4ef6\u4e0e\u6570\u636e\u6d41\u5173\u7cfb\u3002\u6587\u4e2d\u8fd8\u9610\u8ff0\u4e86\u6846\u67b6\u5982\u4f55\u901a\u8fc7gmetric\u7ec4\u4ef6\u5b9e\u73b0\u53ef\u89c2\u6d4b\u6027\uff0c\u91c7\u7528\u62bd\u8c61\u89e3\u8026\u8bbe\u8ba1\uff0c\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65\u591a\u79cd\u6307\u6807\u7c7b\u578b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u7075\u6d3b\u5904\u7406\u548c\u6269\u5c55\u76d1\u63a7\u529f\u80fd\u3002","source":"@site/docs/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4ecb\u7ecd.md","sourceDirName":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66","slug":"/docs/obs/metrics-intro","permalink":"/en/docs/obs/metrics-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4ecb\u7ecd.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":0,"frontMatter":{"slug":"/docs/obs/metrics-intro","title":"\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4ecb\u7ecd","sidebar_position":0,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u76d1\u63a7\u544a\u8b66","OpenTelemetry","\u6307\u6807\u7c7b\u578b","\u63d2\u4ef6\u63a5\u53e3\u5316","Metrics\u6807\u51c6","\u62bd\u8c61\u89e3\u8026\u8bbe\u8ba1","\u540c\u6b65\u6307\u6807","\u5f02\u6b65\u6307\u6807"],"description":"GoFrame\u6846\u67b6\u4e2d\u76d1\u63a7\u544a\u8b66\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u91cd\u70b9\u4ecb\u7ecd\u4e86OpenTelemetry\u5173\u4e8e\u76d1\u63a7\u548c\u544a\u8b66\u8bbe\u8ba1\u7684\u76f8\u5173\u89c4\u8303\u548c\u7ec4\u4ef6\uff0c\u6db5\u76d6\u4e86Meter Provider\u3001Meter\u3001Instrument\u7b49\u7ec4\u4ef6\u4e0e\u6570\u636e\u6d41\u5173\u7cfb\u3002\u6587\u4e2d\u8fd8\u9610\u8ff0\u4e86\u6846\u67b6\u5982\u4f55\u901a\u8fc7gmetric\u7ec4\u4ef6\u5b9e\u73b0\u53ef\u89c2\u6d4b\u6027\uff0c\u91c7\u7528\u62bd\u8c61\u89e3\u8026\u8bbe\u8ba1\uff0c\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65\u591a\u79cd\u6307\u6807\u7c7b\u578b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u7075\u6d3b\u5904\u7406\u548c\u6269\u5c55\u76d1\u63a7\u529f\u80fd\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u670d\u52a1\u76d1\u63a7\u544a\u8b66","permalink":"/en/docs/obs/metrics"},"next":{"title":"\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4f7f\u7528","permalink":"/en/docs/obs/metrics-example"}}');var n=d(474848),t=d(28453);const c={slug:"/docs/obs/metrics-intro",title:"\u76d1\u63a7\u544a\u8b66-\u57fa\u672c\u4ecb\u7ecd",sidebar_position:0,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u76d1\u63a7\u544a\u8b66","OpenTelemetry","\u6307\u6807\u7c7b\u578b","\u63d2\u4ef6\u63a5\u53e3\u5316","Metrics\u6807\u51c6","\u62bd\u8c61\u89e3\u8026\u8bbe\u8ba1","\u540c\u6b65\u6307\u6807","\u5f02\u6b65\u6307\u6807"],description:"GoFrame\u6846\u67b6\u4e2d\u76d1\u63a7\u544a\u8b66\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u91cd\u70b9\u4ecb\u7ecd\u4e86OpenTelemetry\u5173\u4e8e\u76d1\u63a7\u548c\u544a\u8b66\u8bbe\u8ba1\u7684\u76f8\u5173\u89c4\u8303\u548c\u7ec4\u4ef6\uff0c\u6db5\u76d6\u4e86Meter Provider\u3001Meter\u3001Instrument\u7b49\u7ec4\u4ef6\u4e0e\u6570\u636e\u6d41\u5173\u7cfb\u3002\u6587\u4e2d\u8fd8\u9610\u8ff0\u4e86\u6846\u67b6\u5982\u4f55\u901a\u8fc7gmetric\u7ec4\u4ef6\u5b9e\u73b0\u53ef\u89c2\u6d4b\u6027\uff0c\u91c7\u7528\u62bd\u8c61\u89e3\u8026\u8bbe\u8ba1\uff0c\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65\u591a\u79cd\u6307\u6807\u7c7b\u578b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u7075\u6d3b\u5904\u7406\u548c\u6269\u5c55\u76d1\u63a7\u529f\u80fd\u3002"},i=void 0,l={},h=[{value:"OpenTelemetry",id:"opentelemetry",level:2},{value:"\u76f8\u5173\u7ec4\u4ef6",id:"\u76f8\u5173\u7ec4\u4ef6",level:3},{value:"Meter Provider",id:"meter-provider",level:4},{value:"Meter",id:"meter",level:4},{value:"Instrument",id:"instrument",level:4},{value:"Measurements",id:"measurements",level:4},{value:"View",id:"view",level:4},{value:"Metric Reader",id:"metric-reader",level:4},{value:"Metric Exporter",id:"metric-exporter",level:4},{value:"\u76f8\u5173\u7c7b\u578b",id:"\u76f8\u5173\u7c7b\u578b",level:3},{value:"\u540c\u6b65\u7c7b\u578b",id:"\u540c\u6b65\u7c7b\u578b",level:4},{value:"\u5f02\u6b65\u7c7b\u578b",id:"\u5f02\u6b65\u7c7b\u578b",level:4},{value:"\u6846\u67b6\u76d1\u63a7\u7ec4\u4ef6",id:"\u6846\u67b6\u76d1\u63a7\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u62bd\u8c61",id:"\u7ec4\u4ef6\u62bd\u8c61",level:3},{value:"\u6307\u6807\u7c7b\u578b",id:"\u6307\u6807\u7c7b\u578b",level:3},{value:"\u540c\u6b65\u7c7b\u578b",id:"\u540c\u6b65\u7c7b\u578b-1",level:4},{value:"\u5f02\u6b65\u7c7b\u578b",id:"\u5f02\u6b65\u7c7b\u578b-1",level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\u5728\u4ecb\u7ecd\u6846\u67b6\u7684\u76d1\u63a7\u544a\u8b66\u4e4b\u524d\uff0c\u6211\u4eec\u79bb\u4e0d\u5f00\u4e1a\u5185\u53ef\u89c2\u6d4b\u6027\u7684\u6807\u51c6\u4ecb\u7ecd\uff0c ",(0,n.jsx)(r.code,{children:"OpenTelemetry"})," \u5173\u4e8e\u76d1\u63a7\u544a\u8b66\u8fd9\u5757\u7684\u8bbe\u8ba1\uff0c\u4ee5\u53ca\u76f8\u5173\u89c4\u8303\u3002 ",(0,n.jsx)(r.code,{children:"OpenTelemetry"})," \u5728\u8fd9\u5757\u7684\u5185\u5bb9\u4e5f\u6bd4\u8f83\u591a\uff0c\u6211\u4eec\u9009\u62e9\u4e00\u4e9b\u91cd\u70b9\u6765\u4ecb\u7ecd\u4e00\u4e0b\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"opentelemetry",children:"OpenTelemetry"}),"\n",(0,n.jsx)(r.h3,{id:"\u76f8\u5173\u7ec4\u4ef6",children:"\u76f8\u5173\u7ec4\u4ef6"}),"\n",(0,n.jsxs)(r.p,{children:["\u6211\u4eec\u6765\u770b\u4e00\u5f20 ",(0,n.jsx)(r.code,{children:"OpenTelemetry"})," \u7ec4\u4ef6\u7684\u5173\u7cfb\u56fe\uff0c\u5728 ",(0,n.jsx)(r.code,{children:"OpenTelemetry Metrics"})," \u6807\u51c6\u7684\u5b9e\u73b0\u4e2d\uff0c\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\u3002"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:d(678883).A+"",width:"1596",height:"804"})}),"\n",(0,n.jsx)(r.p,{children:"\u5728\u6807\u51c6\u5316\u6587\u6863\u7684\u843d\u5730\u65f6\uff0c\u5404\u4e2a\u7ec4\u4ef6\u901a\u5e38\u90fd\u662f\u91c7\u7528\u63a5\u53e3\u5316\u8bbe\u8ba1\uff0c\u4ee5\u63d0\u9ad8\u53ef\u6269\u5c55\u6027\uff1a"}),"\n",(0,n.jsx)(r.h4,{id:"meter-provider",children:"Meter Provider"}),"\n",(0,n.jsxs)(r.p,{children:["\u7528\u4e8e\u63a5\u53e3\u5316\u7ba1\u7406\u5168\u5c40\u7684 ",(0,n.jsx)(r.code,{children:"Meter"})," \u521b\u5efa\uff0c\u76f8\u5f53\u4e8e\u5168\u5c40\u7684\u76d1\u63a7\u6307\u6807\u7ba1\u7406\u5de5\u5382\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"meter",children:"Meter"}),"\n",(0,n.jsxs)(r.p,{children:["\u7528\u4e8e\u63a5\u53e3\u5316\u521b\u5efa\u5e76\u7ba1\u7406\u5168\u5c40\u7684 ",(0,n.jsx)(r.code,{children:"Instrument"}),"\uff0c\u4e0d\u540c\u7684 ",(0,n.jsx)(r.code,{children:"Meter"})," \u53ef\u4ee5\u770b\u505a\u662f\u4e0d\u540c\u7684\u7a0b\u5e8f\u7ec4\u4ef6\u3002\u4f8b\u5982\u6846\u67b6\u4e2d\u7684\u5404\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u770b\u505a\u662f\u4e0d\u540c\u7684 ",(0,n.jsx)(r.code,{children:"Meter"}),"\uff0c\u6bd4\u5982 ",(0,n.jsx)(r.code,{children:"gclient"})," \u548c ",(0,n.jsx)(r.code,{children:"ghttp"})," \u5c31\u662f\u4e24\u4e2a\u4e0d\u540c\u7684 ",(0,n.jsx)(r.code,{children:"Meter"}),"\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"instrument",children:"Instrument"}),"\n",(0,n.jsxs)(r.p,{children:["\u7528\u4e8e\u7ba1\u7406\u4e0d\u540c\u7ec4\u4ef6\u4e0b\u7684\u5404\u4e2a\u4e0d\u540c\u7c7b\u578b\u7684\u6307\u6807\uff0c\u4f8b\u5982\u5728 ",(0,n.jsx)(r.code,{children:"ghttp"})," \u4e0b\uff0c\u5c31\u4f1a\u6709 ",(0,n.jsx)(r.code,{children:"http.server.request.duration"}),"\u3001 ",(0,n.jsx)(r.code,{children:"http.server.request.body_size"})," \u7b49\u6307\u6807\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"measurements",children:"Measurements"}),"\n",(0,n.jsxs)(r.p,{children:["\u5bf9\u5e94\u6307\u6807\u4e0a\u62a5\u7684\u5177\u4f53\u7684 ",(0,n.jsx)(r.code,{children:"DataPoint"})," \u6307\u6807\u6570\u636e\uff0c\u662f\u4e00\u7cfb\u5217\u7684\u6570\u503c\u9879\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"view",children:"View"}),"\n",(0,n.jsxs)(r.p,{children:["\u5b9e\u73b0\u5bf9 ",(0,n.jsx)(r.code,{children:"Measurements"})," \u7684\u8ba1\u7b97\u3001\u6c47\u603b\u3001\u8fc7\u6ee4\u3001\u4fee\u6539\u7b49\u64cd\u4f5c\uff0c\u901a\u5e38\u6307\u6807\u90fd\u662f ",(0,n.jsx)(r.strong,{children:"\u6570\u503c\u7c7b\u578b"}),"\uff0c\u6240\u4ee5\u8fd9\u4e2a\u901a\u5e38\u90fd\u4f7f\u7528\u9ed8\u8ba4\u7684 ",(0,n.jsx)(r.code,{children:"View"})," \u5373\u53ef\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"metric-reader",children:"Metric Reader"}),"\n",(0,n.jsxs)(r.p,{children:["\u7528\u4e8e\u5b9e\u73b0\u5bf9\u6307\u6807\u7684\u6570\u636e\u6d41\u8bfb\u53d6\uff0c\u5185\u90e8\u5b9a\u4e49\u4e86\u5177\u4f53\u64cd\u4f5c\u6307\u6807\u7684\u6570\u636e\u7ed3\u6784\u3002 ",(0,n.jsx)(r.code,{children:"OpenTelemetry"})," \u5b98\u65b9\u793e\u533a\u63d0\u4f9b\u4e86\u591a\u79cd\u7075\u6d3b\u7684 ",(0,n.jsx)(r.code,{children:"Reader"})," \u5b9e\u73b0\uff0c\u4f8b\u5982 ",(0,n.jsx)(r.code,{children:"PeridRader"}),"\u3001 ",(0,n.jsx)(r.code,{children:"ManualReader"})," \u7b49\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"metric-exporter",children:"Metric Exporter"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Exporter"})," \u7528\u4e8e\u66b4\u9732\u672c\u5730\u6307\u6807\u5230\u5bf9\u5e94\u7684\u7b2c\u4e09\u65b9\u5382\u5546\uff0c\u5b9a\u4e49\u4e86\u5177\u4f53\u662f ",(0,n.jsx)(r.code,{children:"push"})," \u8fd8\u662f ",(0,n.jsx)(r.code,{children:"pull"})," \u7684\u6570\u636e\u4f20\u8f93\u65b9\u5f0f\u3002 ",(0,n.jsx)(r.code,{children:"Exporter"})," \u9700\u8981\u7528\u5230 ",(0,n.jsx)(r.code,{children:"Reader"}),"\uff0c\u5176\u4e2d ",(0,n.jsx)(r.code,{children:"Reader"})," \u53ea\u6709\u51e0\u79cd\u65b9\u5f0f\uff0c\u4f46\u662f ",(0,n.jsx)(r.code,{children:"Exporter"})," \u4f1a\u6839\u636e\u5382\u5546\u800c\u5b9a\uff0c\u4f1a\u6709\u5f88\u591a\uff0c\u4f8b\u5982\uff1a ",(0,n.jsx)(r.code,{children:"promtheus"}),"\u3001 ",(0,n.jsx)(r.code,{children:"zipkin"})," \u7b49\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u4e00\u4e2a ",(0,n.jsx)(r.code,{children:"Instrument"})," \u591a\u4e2a ",(0,n.jsx)(r.code,{children:"DataPoint"})," \u7684\u6570\u636e\u6d41\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:d(930852).A+"",width:"1600",height:"317"})}),"\n",(0,n.jsx)(r.h3,{id:"\u76f8\u5173\u7c7b\u578b",children:"\u76f8\u5173\u7c7b\u578b"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"OpenTelemetry"})," \u7684\u793e\u533a\u5b9e\u73b0\u4e3a\u4e86\u6ee1\u8db3\u4e0d\u540c\u7684\u4f7f\u7528\u573a\u666f\uff0c\u56e0\u6b64\u7c7b\u578b\u7684\u8bbe\u8ba1\u7c92\u5ea6\u6bd4\u8f83\u7ec6\uff0c\u5206\u4e3a ",(0,n.jsx)(r.code,{children:"int64"})," \u548c ",(0,n.jsx)(r.code,{children:"float64"})," \u6570\u636e\u7c7b\u578b\uff0c\u5e76\u4e14\u5305\u542b ",(0,n.jsx)(r.strong,{children:"\u540c\u6b65"})," \u548c ",(0,n.jsx)(r.strong,{children:"\u5f02\u6b65"})," \u6307\u6807\u7c7b\u578b\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"\u540c\u6b65\u7c7b\u578b",children:"\u540c\u6b65\u7c7b\u578b"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"\u540c\u6b65\u7c7b\u578b"})," \u7528\u4e8e\u5feb\u901f\u66b4\u9732\u76d1\u63a7\u6307\u6807\uff0c\u65e0\u8bba ",(0,n.jsx)(r.code,{children:"metrics reader"})," \u662f\u5426\u4f7f\u7528\u8be5\u76d1\u63a7\u6307\u6807\uff0c\u6307\u6807\u7684\u8ba1\u7b97\u7ed3\u679c\u5df2\u5b8c\u6210\uff0c\u5f85\u8bfb\u53d6\u4f7f\u7528\u3002\u4f8b\u5982\uff0cHTTP\u7684\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5927\u5c0f\uff0c\u8fd9\u4e9b\u6570\u503c\u5fc5\u987b\u5728\u8bf7\u6c42\u6267\u884c\u6d41\u7a0b\u4e2d\u8bb0\u5f55\u5230\u5bf9\u5e94\u7684\u76d1\u63a7\u6307\u6807\u6570\u503c\u4e2d\uff0c\u9002\u5408\u4f5c\u4e3a\u540c\u6b65\u6307\u6807\u6765\u7ba1\u7406\u3002"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u7c7b\u578b"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u63cf\u8ff0"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u793a\u4f8b"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Int64Counter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"int64"})," \u53ea\u589e\u4e0d\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5b57\u8282\u603b\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Int64UpDownCounter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"int64"})," \u53ef\u589e\u53ef\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u5f53\u524d\u6d3b\u8dc3\u8bf7\u6c42\u3001\u6267\u884c\u961f\u5217\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Float64Counter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ea\u589e\u4e0d\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5b57\u8282\u603b\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Float64UpDownCounter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u589e\u53ef\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5b57\u8282\u603b\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Int64Histogram"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"int64"})," \u53ef\u5206\u7ec4\u7684\u6307\u6807"]}),(0,n.jsxs)(r.td,{children:["\u8bf7\u6c42\u6267\u884c\u65f6\u95f4 ",(0,n.jsx)(r.code,{children:"p99"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Float64Histogram"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u5206\u7ec4\u7684\u6307\u6807"]}),(0,n.jsxs)(r.td,{children:["\u8bf7\u6c42\u6267\u884c\u65f6\u95f4 ",(0,n.jsx)(r.code,{children:"p99"})]})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"\u5f02\u6b65\u7c7b\u578b",children:"\u5f02\u6b65\u7c7b\u578b"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"\u5f02\u6b65\u7c7b\u578b"})," \u7684\u76d1\u63a7\u6307\u6807\u53ea\u6709\u5728 ",(0,n.jsx)(r.code,{children:"metrics reader"})," \u5f00\u59cb\u4f7f\u7528\u8be5\u76d1\u63a7\u6307\u6807\u65f6\u624d\u4f1a\u6267\u884c\u6307\u6807\u8ba1\u7b97\u903b\u8f91\u3002\u5f02\u6b65\u7c7b\u578b\u7684\u76d1\u63a7\u6307\u6807\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8be5\u56de\u8c03\u51fd\u6570\u7528\u4e8e\u751f\u6210\u6307\u6807\u6570\u503c\uff0c\u5e76\u5728 ",(0,n.jsx)(r.code,{children:"metrics reader"})," \u8bfb\u53d6\u6307\u6807\u65f6\u624d\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u673a\u5668CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf\u7684\u6307\u6807\uff0c\u5982\u679c\u6ca1\u6709\u76ee\u6807\u7aef\u62c9\u53d6\u6216\u8005\u4f7f\u7528\u8be5\u6307\u6807\u65f6\uff0c\u63d0\u524d\u8ba1\u7b97\u6307\u6807\u503c\u6beb\u65e0\u610f\u4e49\u4e14\u6d6a\u8d39\u8ba1\u7b97\u8d44\u6e90\uff0c\u9002\u5408\u4f5c\u4e3a\u5f02\u6b65\u6307\u6807\u6765\u7ba1\u7406\u3002"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u7c7b\u578b"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u63cf\u8ff0"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u793a\u4f8b"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Int64ObservableCouter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"int64"})," \u53ea\u589e\u4e0d\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Int64ObservableUpDownCounter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"int64"})," \u53ef\u589e\u53ef\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Float64ObservableCouter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ea\u589e\u4e0d\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Float64ObservableUpDownCounter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u589e\u53ef\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u5f53\u524d\u6d3b\u8dc3\u8bf7\u6c42\u3001\u6267\u884c\u961f\u5217\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Int64ObservableGauge"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"int64"})," \u53ef\u589e\u53ef\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Float64ObservableGauge"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u589e\u53ef\u51cf\u52a8\u6001\u8bbe\u7f6e\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"\u6846\u67b6\u76d1\u63a7\u7ec4\u4ef6",children:"\u6846\u67b6\u76d1\u63a7\u7ec4\u4ef6"}),"\n",(0,n.jsx)(r.h3,{id:"\u7ec4\u4ef6\u62bd\u8c61",children:"\u7ec4\u4ef6\u62bd\u8c61"}),"\n",(0,n.jsxs)(r.p,{children:["\u6846\u67b6\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"gmetric"})," \u7ec4\u4ef6\u6765\u5b9e\u73b0\u76d1\u63a7\u80fd\u529b\uff0c ",(0,n.jsx)(r.code,{children:"gmetric"})," \u7ec4\u4ef6\u5185\u90e8\u8bbe\u8ba1\u7684\u7ec4\u4ef6\u5c42\u7ea7\u5173\u7cfb\u540c ",(0,n.jsx)(r.code,{children:"OpenTelemetry Metrics"})," \u7c7b\u4f3c\uff1a"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:d(226990).A+"",width:"2264",height:"1188"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"gmetric"})," \u7ec4\u4ef6\u4f7f\u7528\u4e86 ",(0,n.jsx)(r.strong,{children:"\u62bd\u8c61\u89e3\u8026\u8bbe\u8ba1"}),"\uff0c\u4e00\u65b9\u9762\u662f\u56e0\u4e3a\u6846\u67b6\u8bbe\u8ba1\u9700\u8981\u51cf\u5c11\u5916\u90e8\u4f9d\u8d56\uff1b\u53e6\u4e00\u65b9\u9762\u662f\u4e3a\u4e86\u5b9e\u73b0\u76d1\u63a7\u7684\u81ea\u52a8\u5f00\u5173\u80fd\u529b\u3002\u7ec4\u4ef6\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528\u4e86 ",(0,n.jsx)(r.code,{children:"NoopPerform"})," \u7684\u5b9e\u73b0\u5bf9\u8c61\uff0c\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u76d1\u63a7\u80fd\u529b\u662f\u5173\u95ed\u7684\uff0c\u53ea\u6709\u5728\u771f\u6b63\u5f15\u5165\u76d1\u63a7\u63a5\u53e3\u5b9e\u73b0\u65f6\u624d\u4f1a\u81ea\u52a8\u5f00\u542f\u76d1\u63a7\u80fd\u529b\u3002"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:d(842947).A+"",width:"2188",height:"1158"})}),"\n",(0,n.jsx)(r.h3,{id:"\u6307\u6807\u7c7b\u578b",children:"\u6307\u6807\u7c7b\u578b"}),"\n",(0,n.jsxs)(r.p,{children:["\u6846\u67b6\u63d0\u4f9b\u7684\u6307\u6807\u7c7b\u578b\u76f8\u6bd4\u8f83 ",(0,n.jsx)(r.code,{children:"OpenTelmetry"})," \u793e\u533a\u5b9e\u73b0\u53bb\u6389\u4e86 ",(0,n.jsx)(r.code,{children:"int64"})," \u6570\u503c\u7c7b\u578b\uff0c\u800c\u662f\u4f7f\u7528\u4e86\u7edf\u4e00\u7684 ",(0,n.jsx)(r.code,{children:"float64"})," \u6570\u503c\u7c7b\u578b\u4ee5\u7b80\u5316\u4f7f\u7528\u3002\u4f46\u540c\u65f6\u9700\u8981\u6ce8\u610f\uff0c\u5f00\u53d1\u8005\u5728\u8bbe\u8ba1\u6307\u6807\u6570\u503c\u65f6 ",(0,n.jsx)(r.strong,{children:"\u5c3d\u53ef\u80fd\u907f\u514d\u5c0f\u6570\u8bbe\u8ba1\uff0c\u4ee5\u907f\u514d\u6570\u503c\u8ba1\u7b97\u7684\u7cbe\u5ea6\u95ee\u9898"}),"\u3002\u7279\u522b\u662f\u5728 ",(0,n.jsx)(r.code,{children:"Histogram"})," \u7c7b\u578b\u7684 ",(0,n.jsx)(r.code,{children:"Buckets"})," \u8bbe\u8ba1\u65f6\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u5c0f\u6570\u3002"]}),"\n",(0,n.jsx)(r.h4,{id:"\u540c\u6b65\u7c7b\u578b-1",children:"\u540c\u6b65\u7c7b\u578b"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u7c7b\u578b"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u63cf\u8ff0"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u793a\u4f8b"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Counter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ea\u589e\u4e0d\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5b57\u8282\u603b\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"UpDownCounter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u589e\u53ef\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5b57\u8282\u603b\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Histogram"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u5206\u7ec4\u7684\u6307\u6807"]}),(0,n.jsxs)(r.td,{children:["\u8bf7\u6c42\u6267\u884c\u65f6\u95f4 ",(0,n.jsx)(r.code,{children:"p99"})]})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"\u5f02\u6b65\u7c7b\u578b-1",children:"\u5f02\u6b65\u7c7b\u578b"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u7c7b\u578b"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u63cf\u8ff0"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u793a\u4f8b"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ObservableCounter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ea\u589e\u4e0d\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5b57\u8282\u603b\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ObservableUpDownCounter"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u589e\u53ef\u51cf\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u603b\u6570\u3001\u8bf7\u6c42\u5b57\u8282\u603b\u5927\u5c0f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ObservableGauge"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"float64"})," \u53ef\u589e\u53ef\u51cf\u52a8\u6001\u8bbe\u7f6e\u7684\u6307\u6807\u3002"]}),(0,n.jsx)(r.td,{children:"CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/prometheus/client_golang%20%22https://github.com/prometheus/client_golang%22",children:"https://github.com/prometheus/client_golang"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/open-telemetry/opentelemetry-go-contrib%20%22https://github.com/open-telemetry/opentelemetry-go-contrib%22",children:"https://github.com/open-telemetry/opentelemetry-go-contrib"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://opentelemetry.io/docs/specs/otel/metrics/api/%20%22https://opentelemetry.io/docs/specs/otel/metrics/api/%22",children:"https://opentelemetry.io/docs/specs/otel/metrics/api/"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://opentelemetry.io/docs/specs/otel/metrics/data-model%20%22https://opentelemetry.io/docs/specs/otel/metrics/data-model%22",children:"https://opentelemetry.io/docs/specs/otel/metrics/data-model"})}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},930852:(e,r,d)=>{d.d(r,{A:()=>s});const s=d.p+"assets/images/5d476c4969a41f996ac8c39a6d841f81-5e8613efc6f4ff59360078ee3f424969.png"},842947:(e,r,d)=>{d.d(r,{A:()=>s});const s=d.p+"assets/images/99374a3d9b7e4805c5c7c0bd3fefb221-da167af957d080c46339738b2e27375f.png"},226990:(e,r,d)=>{d.d(r,{A:()=>s});const s=d.p+"assets/images/a1f33528941fcf91e87b87aa8c0219cd-ae41f69a59c0dc0e1c004f5b69e60fc5.png"},678883:(e,r,d)=>{d.d(r,{A:()=>s});const s=d.p+"assets/images/f7c048b9050aa8d6c17f85e1dc1c0540-d6f63afe045891686e20a550f648cda4.png"},28453:(e,r,d)=>{d.d(r,{R:()=>c,x:()=>i});var s=d(296540);const n={},t=s.createContext(n);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);