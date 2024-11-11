"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[23471],{293851:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807","title":"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807","description":"\u5728GoFrame\u6846\u67b6\u4e0b\u4f7f\u7528\u5f02\u6b65\u76d1\u63a7\u6307\u6807\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86ObservableCounter\u3001ObservableUpDownCounter\u548cObservableGauge\u4e09\u79cd\u5f02\u6b65\u6307\u6807\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7\u5b9a\u4e49Callback\u51fd\u6570\u7ba1\u7406\u6307\u6807\u6570\u503c\u53d8\u5316\uff0c\u5e76\u5229\u7528Prometheus\u5bfc\u51fa\u6307\u6807\u6570\u636e\u3002","source":"@site/docs/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807.md","sourceDirName":"docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66","slug":"/docs/obs/metrics-async","permalink":"/en/docs/obs/metrics-async","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/obs/metrics-async","title":"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u5f02\u6b65\u6307\u6807","\u76d1\u63a7\u544a\u8b66","ObservableCounter","ObservableUpDownCounter","ObservableGauge","Callback\u51fd\u6570","Prometheus\u5bfc\u51fa","OpenTelemetry"],"description":"\u5728GoFrame\u6846\u67b6\u4e0b\u4f7f\u7528\u5f02\u6b65\u76d1\u63a7\u6307\u6807\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86ObservableCounter\u3001ObservableUpDownCounter\u548cObservableGauge\u4e09\u79cd\u5f02\u6b65\u6307\u6807\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7\u5b9a\u4e49Callback\u51fd\u6570\u7ba1\u7406\u6307\u6807\u6570\u503c\u53d8\u5316\uff0c\u5e76\u5229\u7528Prometheus\u5bfc\u51fa\u6307\u6807\u6570\u636e\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u76d1\u63a7\u544a\u8b66-\u540c\u6b65\u6307\u6807","permalink":"/en/docs/obs/metrics-sync"},"next":{"title":"\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027","permalink":"/en/docs/obs/metrics-attributes"}}');var s=n(474848),o=n(28453);const c={slug:"/docs/obs/metrics-async",title:"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u5f02\u6b65\u6307\u6807","\u76d1\u63a7\u544a\u8b66","ObservableCounter","ObservableUpDownCounter","ObservableGauge","Callback\u51fd\u6570","Prometheus\u5bfc\u51fa","OpenTelemetry"],description:"\u5728GoFrame\u6846\u67b6\u4e0b\u4f7f\u7528\u5f02\u6b65\u76d1\u63a7\u6307\u6807\uff0c\u8be6\u7ec6\u8bf4\u660e\u4e86ObservableCounter\u3001ObservableUpDownCounter\u548cObservableGauge\u4e09\u79cd\u5f02\u6b65\u6307\u6807\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u901a\u8fc7\u5b9a\u4e49Callback\u51fd\u6570\u7ba1\u7406\u6307\u6807\u6570\u503c\u53d8\u5316\uff0c\u5e76\u5229\u7528Prometheus\u5bfc\u51fa\u6307\u6807\u6570\u636e\u3002"},i=void 0,l={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"Meter Callback",id:"meter-callback",level:2},{value:"Metric Callback",id:"metric-callback",level:2},{value:"Primetheus Exporter",id:"primetheus-exporter",level:2}];function b(e){const r={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u5f02\u6b65\u7c7b\u578b"})," \u7684\u76d1\u63a7\u6307\u6807\u53ea\u6709\u5728 ",(0,s.jsx)(r.code,{children:"metrics reader"})," \u5f00\u59cb\u4f7f\u7528\u8be5\u76d1\u63a7\u6307\u6807\u65f6\u624d\u4f1a\u6267\u884c\u6307\u6807\u8ba1\u7b97\u903b\u8f91\u3002\u5f02\u6b65\u7c7b\u578b\u7684\u76d1\u63a7\u6307\u6807\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8be5\u56de\u8c03\u51fd\u6570\u7528\u4e8e\u751f\u6210\u6307\u6807\u6570\u503c\uff0c\u5e76\u5728 ",(0,s.jsx)(r.code,{children:"metrics reader"})," \u8bfb\u53d6\u6307\u6807\u65f6\u624d\u4f1a\u89e6\u53d1\u56de\u8c03\u51fd\u6570\u3002\u4f8b\u5982\uff0c\u673a\u5668CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u91cf\u7684\u6307\u6807\uff0c\u5982\u679c\u6ca1\u6709\u76ee\u6807\u7aef\u62c9\u53d6\u6216\u8005\u4f7f\u7528\u8be5\u6307\u6807\u65f6\uff0c\u63d0\u524d\u8ba1\u7b97\u6307\u6807\u503c\u6beb\u65e0\u610f\u4e49\u4e14\u6d6a\u8d39\u8ba1\u7b97\u8d44\u6e90\uff0c\u9002\u5408\u4f5c\u4e3a\u5f02\u6b65\u6307\u6807\u6765\u7ba1\u7406\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"gmetric"})," \u63d0\u4f9b\u7684\u5f02\u6b65\u7c7b\u578b\u6307\u6807\u5305\u542b\uff1a ",(0,s.jsx)(r.code,{children:"ObservableCounter, ObservableUpDownCounter, OvservableGauge"}),"\u3002\u5f02\u6b65\u6307\u6807\u7c7b\u578b\u5747\u662f\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"Observable"})," \u5f00\u5934\u547d\u540d\uff0c\u4e09\u79cd\u5f02\u6b65\u6307\u6807\u7684\u64cd\u4f5c\u90fd\u5dee\u4e0d\u591a\uff0c\u5747\u662f\u5728\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u4e0b\u6709\u4e0d\u540c\u7684\u4f7f\u7528\u5dee\u5f02\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u6f14\u793a\u5f02\u6b65\u6307\u6807\u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "go.opentelemetry.io/otel/exporters/prometheus"\n\n    "github.com/gogf/gf/contrib/metric/otelmetric/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gmetric"\n)\n\nvar (\n    meter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n        Instrument:        "github.com/gogf/gf/example/metric/basic",\n        InstrumentVersion: "v1.0",\n    })\n    observableCounter = meter.MustObservableCounter(\n        "goframe.metric.demo.observable_counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for ObservableCounter usage",\n            Unit: "%",\n        },\n    )\n    observableUpDownCounter = meter.MustObservableUpDownCounter(\n        "goframe.metric.demo.observable_updown_counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for ObservableUpDownCounter usage",\n            Unit: "%",\n        },\n    )\n    observableGauge = meter.MustObservableGauge(\n        "goframe.metric.demo.observable_gauge",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for ObservableGauge usage",\n            Unit: "%",\n        },\n    )\n)\n\nfunc main() {\n    var ctx = gctx.New()\n\n    // Callback for observable metrics.\n    meter.MustRegisterCallback(func(ctx context.Context, obs gmetric.Observer) error {\n        obs.Observe(observableCounter, 10)\n        obs.Observe(observableUpDownCounter, 20)\n        obs.Observe(observableGauge, 30)\n        return nil\n    }, observableCounter, observableUpDownCounter, observableGauge)\n\n    // Prometheus exporter to export metrics as Prometheus format.\n    exporter, err := prometheus.New(\n        prometheus.WithoutCounterSuffixes(),\n        prometheus.WithoutUnits(),\n    )\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // OpenTelemetry provider.\n    provider := otelmetric.MustProvider(otelmetric.WithReader(exporter))\n    provider.SetAsGlobal()\n    defer provider.Shutdown(ctx)\n\n    // HTTP Server for metrics exporting.\n    otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n\n'})}),"\n",(0,s.jsx)(r.h2,{id:"meter-callback",children:"Meter Callback"}),"\n",(0,s.jsxs)(r.p,{children:["\u5f02\u6b65\u6307\u6807\u9700\u8981\u5b9a\u4e49 ",(0,s.jsx)(r.code,{children:"Callback"})," \u51fd\u6570\u6765\u7ba1\u7406\u6307\u6807\u6570\u503c\u53d8\u5316\uff0c\u53ea\u6709\u5728\u8bf7\u6c42\u6216\u4f7f\u7528\u8be5\u6307\u6807\u65f6\u624d\u4f1a\u6267\u884c\u8be5 ",(0,s.jsx)(r.code,{children:"Callback"})," \u51fd\u6570\u3002 ",(0,s.jsx)(r.code,{children:"Callback"})," \u51fd\u6570\u4e2d\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"Observe"})," \u51fd\u6570\u6765\u66f4\u65b0\u6307\u6807\u7684\u6570\u503c\uff0c\u9488\u5bf9\u4e0d\u540c\u5f02\u6b65\u6307\u6807\u7c7b\u578b\u7684 ",(0,s.jsx)(r.code,{children:"Observe"})," \u4f1a\u4ea7\u751f\u4e0d\u540c\u7684\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u9488\u5bf9 ",(0,s.jsx)(r.code,{children:"ObservableCounter/ObservableUpDownCounter"})," \u6307\u6807\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"Observe"})," \u51fd\u6570\u540e\u5c06\u4f1a\u5728\u539f\u6709\u6307\u6807\u6570\u503c\u4e0a\u8fdb\u884c\u589e\u51cf\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u9488\u5bf9 ",(0,s.jsx)(r.code,{children:"ObservableGauge"})," \u6307\u6807\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,s.jsx)(r.code,{children:"Observe"})," \u51fd\u6570\u540e\uff0c\u8be5\u6307\u6807\u7684\u503c\u66f4\u4f1a\u66f4\u65b0\u4e3a ",(0,s.jsx)(r.code,{children:"Observe"})," \u7ed9\u5b9a\u7684\u6570\u503c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"metric-callback",children:"Metric Callback"}),"\n",(0,s.jsxs)(r.p,{children:["\u9664\u4e86\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"Meter CallBack"})," \u6765\u5b9e\u73b0\u5f02\u6b65\u6307\u6807\u7684\u6570\u503c\u66f4\u65b0\uff0c\u4e5f\u53ef\u4ee5\u5728\u521b\u5efa\u6307\u6807\u65f6\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"MetricOption"})," \u6307\u5b9a ",(0,s.jsx)(r.code,{children:"Callback"})," \u51fd\u6570\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'observableCounter = meter.MustObservableCounter(\n    "goframe.metric.demo.observable_counter",\n    gmetric.MetricOption{\n        Help: "This is a simple demo for ObservableCounter usage",\n        Unit: "%",\n        Callback: func(ctx context.Context, obs gmetric.MetricObserver) error {\n            obs.Observe(10)\n            return nil\n        },\n    },\n)\n'})}),"\n",(0,s.jsx)(r.h2,{id:"primetheus-exporter",children:"Primetheus Exporter"}),"\n",(0,s.jsxs)(r.p,{children:["\u901a\u8fc7\u4ee5\u4e0b\u8def\u7531\u5c06\u6307\u6807\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"Prometheus"})," \u534f\u8bae\u66b4\u9732\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,s.jsx)(r.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u67e5\u770b\u66b4\u9732\u7684\u6307\u6807\uff1a"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(931004).A+"",width:"2858",height:"2014"})}),"\n",(0,s.jsx)(r.p,{children:"\u6211\u4eec\u8fd9\u91cc\u53ea\u5173\u6ce8\u672c\u6b21\u793a\u4f8b\u4e2d\u7684\u6307\u6807\uff0c\u5176\u4ed6\u81ea\u52a8\u66b4\u9732\u7684\u6307\u6807\u5728\u540e\u7eed\u7ae0\u8282\u4ecb\u7ecd\u3002"})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},931004:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/5e79d0fe7ae3773ee055a5d600abe7dd-1c2591143081cb2cfae2c39b619489bf.png"},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);