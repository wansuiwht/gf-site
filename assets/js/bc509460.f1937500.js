"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[13276],{39865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),i=r(28453);const o={slug:"/obs/metrics/attributes",title:"\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027",sidebar_position:4,hide_title:!0},s=void 0,c={id:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027",title:"\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027",description:"\u6307\u6807\u5c5e\u6027\u7528\u4e8e\u5728\u66f4\u4e0a\u5c42\u7684\u6307\u6807\u4f7f\u7528\u4e2d\u8fdb\u884c\u8fc7\u6ee4\u3001\u6c47\u603b\u3001\u7edf\u8ba1\u7b49\u9ad8\u7eac\u5ea6\u64cd\u4f5c\u3002\u5728 GoFrame \u6846\u67b6\u7684\u76d1\u63a7\u544a\u8b66\u7ec4\u4ef6\u4e2d\uff0c\u63d0\u4f9b\u4e863\u79cd\u5c5e\u6027\u6ce8\u5165\u65b9\u5f0f\uff1a \u5e38\u91cf\u5c5e\u6027\u3001 \u53d8\u91cf\u5c5e\u6027 \u548c \u5168\u5c40\u5c5e\u6027\u3002",source:"@site/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027.md",sourceDirName:"\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66",slug:"/obs/metrics/attributes",permalink:"/gf-site/docs/obs/metrics/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/\u670d\u52a1\u53ef\u89c2\u6d4b\u6027/\u670d\u52a1\u76d1\u63a7\u544a\u8b66/\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730442507e3,sidebarPosition:4,frontMatter:{slug:"/obs/metrics/attributes",title:"\u76d1\u63a7\u544a\u8b66-\u6307\u6807\u5c5e\u6027",sidebar_position:4,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u76d1\u63a7\u544a\u8b66-\u5f02\u6b65\u6307\u6807",permalink:"/gf-site/docs/obs/metrics/async"},next:{title:"\u76d1\u63a7\u544a\u8b66-\u5185\u7f6e\u6307\u6807",permalink:"/gf-site/docs/obs/metrics/builtin"}},m={},u=[{value:"\u5e38\u91cf\u5c5e\u6027",id:"\u5e38\u91cf\u5c5e\u6027",level:2},{value:"\u53d8\u91cf\u5c5e\u6027",id:"\u53d8\u91cf\u5c5e\u6027",level:2},{value:"\u5168\u5c40\u5c5e\u6027",id:"\u5168\u5c40\u5c5e\u6027",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u6307\u6807\u5c5e\u6027\u7528\u4e8e\u5728\u66f4\u4e0a\u5c42\u7684\u6307\u6807\u4f7f\u7528\u4e2d\u8fdb\u884c\u8fc7\u6ee4\u3001\u6c47\u603b\u3001\u7edf\u8ba1\u7b49\u9ad8\u7eac\u5ea6\u64cd\u4f5c\u3002\u5728 ",(0,n.jsx)(t.code,{children:"GoFrame"})," \u6846\u67b6\u7684\u76d1\u63a7\u544a\u8b66\u7ec4\u4ef6\u4e2d\uff0c\u63d0\u4f9b\u4e863\u79cd\u5c5e\u6027\u6ce8\u5165\u65b9\u5f0f\uff1a ",(0,n.jsx)(t.strong,{children:"\u5e38\u91cf\u5c5e\u6027"}),"\u3001 ",(0,n.jsx)(t.strong,{children:"\u53d8\u91cf\u5c5e\u6027"})," \u548c ",(0,n.jsx)(t.strong,{children:"\u5168\u5c40\u5c5e\u6027"}),"\u3002"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\u5728 ",(0,n.jsx)(t.code,{children:"OpenTelemetry"})," \u4e2d\u53eb\u505a\u6307\u6807\u5c5e\u6027\uff08 ",(0,n.jsx)(t.code,{children:"attributes"}),"\uff09\uff0c\u4f46\u5728 ",(0,n.jsx)(t.code,{children:"Prometheus"})," \u4e2d\u53eb\u505a\u6307\u6807\u6807\u7b7e\uff08 ",(0,n.jsx)(t.code,{children:"labels"}),"\uff09\uff0c\u4e24\u8005\u662f\u4e00\u4e2a\u542b\u4e49\u3002"]})}),"\n",(0,n.jsx)(t.h2,{id:"\u5e38\u91cf\u5c5e\u6027",children:"\u5e38\u91cf\u5c5e\u6027"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u5e38\u91cf\u5c5e\u6027"})," \u662f\u56fa\u5b9a\u7684\u4e00\u7cfb\u5217\u5c5e\u6027\u952e\u503c\u5bf9\uff0c\u53ef\u4ee5\u7ed1\u5b9a\u5230 ",(0,n.jsx)(t.code,{children:"Meter"})," \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7ed1\u5b9a\u5230\u6307\u6807\u5bf9\u8c61\u4e0a\u3002\u5982\u679c\u7ed1\u5b9a\u5230 ",(0,n.jsx)(t.code,{children:"Meter"})," \u4e0a\uff0c\u90a3\u4e48 ",(0,n.jsx)(t.code,{children:"Meter"})," \u4e0b\u6240\u6709\u521b\u5efa\u7684\u6307\u6807\u5bf9\u8c61\u5747\u5e26\u6709\u8be5\u5c5e\u6027\u952e\u503c\u5bf9\uff0c\u5982\u679c\u7ed1\u5b9a\u5230\u6307\u6807\u5bf9\u8c61\u4e0a\uff0c\u90a3\u4e48\u4ec5\u4f1a\u5728\u5f53\u524d\u6307\u6807\u4e0a\u751f\u6548\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "go.opentelemetry.io/otel/exporters/prometheus"\n\n    "github.com/gogf/gf/contrib/metric/otelmetric/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gmetric"\n)\n\nconst (\n    instrument        = "github.com/gogf/gf/example/metric/basic"\n    instrumentVersion = "v1.0"\n)\n\nvar (\n    meter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n        Instrument:        instrument,\n        InstrumentVersion: instrumentVersion,\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("meter_const_attr_1", 1),\n        },\n    })\n    counter = meter.MustCounter(\n        "goframe.metric.demo.counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for Counter usage",\n            Unit: "bytes",\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("metric_const_attr_1", 1),\n            },\n        },\n    )\n    observableCounter = meter.MustObservableCounter(\n        "goframe.metric.demo.observable_counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for ObservableCounter usage",\n            Unit: "%",\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("metric_const_attr_2", 2),\n            },\n        },\n    )\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    // Callback for observable metrics.\n    meter.MustRegisterCallback(func(ctx context.Context, obs gmetric.Observer) error {\n        obs.Observe(observableCounter, 10)\n        return nil\n    }, observableCounter)\n\n    // Prometheus exporter to export metrics as Prometheus format.\n    exporter, err := prometheus.New(\n        prometheus.WithoutCounterSuffixes(),\n        prometheus.WithoutUnits(),\n    )\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // OpenTelemetry provider.\n    provider := otelmetric.MustProvider(\n        otelmetric.WithReader(exporter),\n    )\n    provider.SetAsGlobal()\n    defer provider.Shutdown(ctx)\n\n    // Counter.\n    counter.Inc(ctx)\n    counter.Add(ctx, 10)\n\n    // HTTP Server for metrics exporting.\n    otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u901a\u8fc7\u521b\u5efa ",(0,n.jsx)(t.code,{children:"Meter"})," \u5bf9\u8c61\u6216\u8005 ",(0,n.jsx)(t.code,{children:"Metric"})," \u5bf9\u8c61\u65f6\u7684 ",(0,n.jsx)(t.code,{children:"MeterOption"})," \u6216 ",(0,n.jsx)(t.code,{children:"MetricOption"})," \u53c2\u6570\u4e2d\u7684 ",(0,n.jsx)(t.code,{children:"Attributes"})," \u5c5e\u6027\u5b57\u6bb5\u6765\u6307\u5b9a\u5e38\u91cf\u5c5e\u6027\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee\xa0",(0,n.jsx)(t.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u770b\u770b\u7ed3\u679c\u3002\u53ef\u4ee5\u770b\u5230\u7ed1\u5b9a\u5230 ",(0,n.jsx)(t.code,{children:"Meter"})," \u4e0a\u7684\u5e38\u91cf\u5c5e\u6027\u5728\u4e24\u4e2a\u6307\u6807\u4e0a\u751f\u6548\u4e86\uff0c\u4f46\u662f\u5728\u5404\u4e2a\u6307\u6807\u4e0a\u7ed1\u5b9a\u7684\u5e38\u91cf\u5c5e\u6027\u4ec5\u5728\u5bf9\u5e94\u7684\u6307\u6807\u4e0a\u751f\u6548\u4e86\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(72357).A+"",width:"2966",height:"2014"})}),"\n",(0,n.jsx)(t.h2,{id:"\u53d8\u91cf\u5c5e\u6027",children:"\u53d8\u91cf\u5c5e\u6027"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u53d8\u91cf\u5c5e\u6027"})," \u662f\u5728\u6307\u6807\u8fd0\u884c\u65f6\u6307\u5b9a\u7684\u5c5e\u6027\u952e\u503c\u5bf9\uff0c\u901a\u5e38\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u624d\u80fd\u786e\u5b9a\u5c5e\u6027\u7684\u952e\u503c\u5bf9\u4fe1\u606f\uff0c\u5e76\u4e14\u952e\u503c\u5bf9\u53ef\u80fd\u6839\u636e\u4e0d\u540c\u7684\u6267\u884c\u573a\u666f\u800c\u53d1\u751f\u53d8\u5316\uff0c\u56e0\u6b64\u53eb\u505a\u53d8\u91cf\u5c5e\u6027\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "go.opentelemetry.io/otel/exporters/prometheus"\n\n    "github.com/gogf/gf/contrib/metric/otelmetric/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gmetric"\n)\n\nconst (\n    instrument        = "github.com/gogf/gf/example/metric/basic"\n    instrumentVersion = "v1.0"\n)\n\nvar (\n    meter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n        Instrument:        instrument,\n        InstrumentVersion: instrumentVersion,\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("meter_const_attr_1", 1),\n        },\n    })\n    counter = meter.MustCounter(\n        "goframe.metric.demo.counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for Counter usage",\n            Unit: "bytes",\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("metric_const_attr_1", 1),\n            },\n        },\n    )\n    observableCounter = meter.MustObservableCounter(\n        "goframe.metric.demo.observable_counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for ObservableCounter usage",\n            Unit: "%",\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("metric_const_attr_2", 2),\n            },\n        },\n    )\n)\n\nfunc main() {\n    var ctx = gctx.New()\n    // Callback for observable metrics.\n    meter.MustRegisterCallback(func(ctx context.Context, obs gmetric.Observer) error {\n        obs.Observe(observableCounter, 10, gmetric.Option{\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("dynamic_attr_1", 1),\n            },\n        })\n        return nil\n    }, observableCounter)\n\n    // Prometheus exporter to export metrics as Prometheus format.\n    exporter, err := prometheus.New(\n        prometheus.WithoutCounterSuffixes(),\n        prometheus.WithoutUnits(),\n    )\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // OpenTelemetry provider.\n    provider := otelmetric.MustProvider(\n        otelmetric.WithReader(exporter),\n    )\n    provider.SetAsGlobal()\n    defer provider.Shutdown(ctx)\n\n    // Counter.\n    counter.Inc(ctx, gmetric.Option{\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("dynamic_attr_2", 2),\n        },\n    })\n    counter.Add(ctx, 10, gmetric.Option{\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("dynamic_attr_3", 3),\n        },\n    })\n\n    // HTTP Server for metrics exporting.\n    otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u5728\u8fd0\u884c\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"Option"})," \u53c2\u6570\u4e2d\u7684 ",(0,n.jsx)(t.code,{children:"Attributes"})," \u5c5e\u6027\u5b57\u6bb5\u6765\u6307\u5b9a\u6307\u6807\u53d8\u91cf\u5c5e\u6027\uff0c\u53d8\u91cf\u5c5e\u6027\u6bd4\u8f83\u7075\u6d3b\uff0c\u76f8\u540c\u7684\u6307\u6807\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u53d8\u91cf\u5c5e\u6027\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u540c\u6837\u7684\uff0c\u6267\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee\xa0",(0,n.jsx)(t.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u770b\u770b\u7ed3\u679c\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(5501).A+"",width:"2966",height:"2014"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5168\u5c40\u5c5e\u6027",children:"\u5168\u5c40\u5c5e\u6027"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u5168\u5c40\u5c5e\u6027"})," \u662f\u4e00\u79cd\u66f4\u52a0\u7075\u6d3b\u7684\u6307\u6807\u5c5e\u6027\u6ce8\u5165\u65b9\u5f0f\uff0c\u53ef\u4ee5\u6839\u636e ",(0,n.jsx)(t.code,{children:"Instrument"})," \u4fe1\u606f\u8fdb\u884c\u5c5e\u6027\u81ea\u52a8\u6ce8\u5165\uff0c\u5e76\u4e14\u53ef\u4ee5\u6839\u636e ",(0,n.jsx)(t.code,{children:"Instrument"})," \u540d\u79f0\u7684\u6b63\u5219\u5339\u914d\u6765\u5224\u65ad\u662f\u5426\u5f80\u8be5 ",(0,n.jsx)(t.code,{children:"Instrument"})," \u4e0b\u6240\u6709\u7684\u6307\u6807\u6ce8\u5165\u6307\u6807\u5c5e\u6027\u4fe1\u606f\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u793a\u4f8b\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "go.opentelemetry.io/otel/exporters/prometheus"\n\n    "github.com/gogf/gf/contrib/metric/otelmetric/v2"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/gmetric"\n)\n\nconst (\n    instrument        = "github.com/gogf/gf/example/metric/basic"\n    instrumentVersion = "v1.0"\n)\n\nvar (\n    meter = gmetric.GetGlobalProvider().Meter(gmetric.MeterOption{\n        Instrument:        instrument,\n        InstrumentVersion: instrumentVersion,\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("meter_const_attr_1", 1),\n        },\n    })\n    counter = meter.MustCounter(\n        "goframe.metric.demo.counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for Counter usage",\n            Unit: "bytes",\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("metric_const_attr_1", 1),\n            },\n        },\n    )\n    observableCounter = meter.MustObservableCounter(\n        "goframe.metric.demo.observable_counter",\n        gmetric.MetricOption{\n            Help: "This is a simple demo for ObservableCounter usage",\n            Unit: "%",\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("metric_const_attr_2", 2),\n            },\n        },\n    )\n)\n\nfunc main() {\n    var ctx = gctx.New()\n\n    gmetric.SetGlobalAttributes(gmetric.Attributes{\n        gmetric.NewAttribute("global_attr_1", 1),\n    }, gmetric.SetGlobalAttributesOption{\n        Instrument:        instrument,\n        InstrumentVersion: instrumentVersion,\n        InstrumentPattern: "",\n    })\n\n    // Callback for observable metrics.\n    meter.MustRegisterCallback(func(ctx context.Context, obs gmetric.Observer) error {\n        obs.Observe(observableCounter, 10, gmetric.Option{\n            Attributes: gmetric.Attributes{\n                gmetric.NewAttribute("dynamic_attr_1", 1),\n            },\n        })\n        return nil\n    }, observableCounter)\n\n    // Prometheus exporter to export metrics as Prometheus format.\n    exporter, err := prometheus.New(\n        prometheus.WithoutCounterSuffixes(),\n        prometheus.WithoutUnits(),\n    )\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n\n    // OpenTelemetry provider.\n    provider := otelmetric.MustProvider(\n        otelmetric.WithReader(exporter),\n    )\n    provider.SetAsGlobal()\n    defer provider.Shutdown(ctx)\n\n    // Counter.\n    counter.Inc(ctx, gmetric.Option{\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("dynamic_attr_2", 2),\n        },\n    })\n    counter.Add(ctx, 10, gmetric.Option{\n        Attributes: gmetric.Attributes{\n            gmetric.NewAttribute("dynamic_attr_3", 3),\n        },\n    })\n\n    // HTTP Server for metrics exporting.\n    otelmetric.StartPrometheusMetricsServer(8000, "/metrics")\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"gmetric.SetGlobalAttributes"})," \u65b9\u6cd5\u8bbe\u7f6e\u5168\u5c40\u5c5e\u6027\uff0c\u5e76\u4e14\u6839\u636e\u53c2\u6570 ",(0,n.jsx)(t.code,{children:"gmetric.SetGlobalAttributesOption"})," \u9650\u5236\u5f71\u54cd\u7684\u6307\u6807\u8303\u56f4\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u540c\u6837\u7684\uff0c\u6267\u884c\u540e\uff0c\u6211\u4eec\u8bbf\u95ee\xa0",(0,n.jsx)(t.a,{href:"http://127.0.0.1:8000/metrics",children:"http://127.0.0.1:8000/metrics"})," \u770b\u770b\u7ed3\u679c\u3002\u53ef\u4ee5\u770b\u5230\uff0c\u5168\u5c40\u5c5e\u6027\u5df2\u7ecf\u81ea\u52a8\u6dfb\u52a0\u5230\u4e86\u6307\u6807\u4e2d\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(3855).A+"",width:"2966",height:"2014"})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},5501:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/17cd106aa40f6ca397486301bdaf16cd-d911aa6a01e4505632cce93328ce1cef.png"},72357:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/7604946c482b5592bf13db15e99486f5-75d69059171e18ddcc8037c4a6bf053a.png"},3855:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/dfc79773cb999c35208fe27c98e1ab48-4dc78437e183e52ebba5275526a76aa1.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);