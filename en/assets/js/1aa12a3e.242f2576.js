"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[21804],{817583:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>g,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3","title":"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3","description":"\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528glog\u6a21\u5757\u7684Writer\u63a5\u53e3\u6765\u81ea\u5b9a\u4e49\u65e5\u5fd7\u8f93\u51fa\u3002\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49Writer\u5bf9\u8c61\uff0c\u53ef\u4ee5\u7075\u6d3b\u5730\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230\u4e0d\u540c\u7684\u76ee\u6807\u5982\u6587\u4ef6\u3001\u6807\u51c6\u8f93\u51fa\u548cGraylog\u7b49\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u793a\u4f8b\u4ee3\u7801\u8bf4\u660e\u5982\u4f55\u5b9e\u73b0\u65e5\u5fd7HOOK\u529f\u80fd\uff0c\u4ee5\u4fbf\u53ca\u65f6\u5c06\u4e25\u91cd\u9519\u8bef\u901a\u77e5\u5230\u76d1\u63a7\u670d\u52a1\u3002","source":"@site/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6","slug":"/docs/core/glog-writer","permalink":"/en/docs/core/glog-writer","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6838\u5fc3\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6/\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":11,"frontMatter":{"slug":"/docs/core/glog-writer","title":"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3","sidebar_position":11,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u65e5\u5fd7\u7ec4\u4ef6","Writer\u63a5\u53e3","\u65e5\u5fd7\u81ea\u5b9a\u4e49\u8f93\u51fa","\u81ea\u5b9a\u4e49Writer","glog\u6a21\u5757","\u65e5\u5fd7HOOK","graylog","\u96c6\u4e2d\u5f0f\u65e5\u5fd7\u7ba1\u7406"],"description":"\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528glog\u6a21\u5757\u7684Writer\u63a5\u53e3\u6765\u81ea\u5b9a\u4e49\u65e5\u5fd7\u8f93\u51fa\u3002\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49Writer\u5bf9\u8c61\uff0c\u53ef\u4ee5\u7075\u6d3b\u5730\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230\u4e0d\u540c\u7684\u76ee\u6807\u5982\u6587\u4ef6\u3001\u6807\u51c6\u8f93\u51fa\u548cGraylog\u7b49\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u793a\u4f8b\u4ee3\u7801\u8bf4\u660e\u5982\u4f55\u5b9e\u73b0\u65e5\u5fd7HOOK\u529f\u80fd\uff0c\u4ee5\u4fbf\u53ca\u65f6\u5c06\u4e25\u91cd\u9519\u8bef\u901a\u77e5\u5230\u76d1\u63a7\u670d\u52a1\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-\u8c03\u8bd5\u4fe1\u606f","permalink":"/en/docs/core/glog-debug"},"next":{"title":"\u65e5\u5fd7\u7ec4\u4ef6-Flags\u7279\u6027","permalink":"/en/docs/core/glog-flags"}}');var t=n(474848),i=n(28453);const c={slug:"/docs/core/glog-writer",title:"\u65e5\u5fd7\u7ec4\u4ef6-Writer\u63a5\u53e3",sidebar_position:11,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u65e5\u5fd7\u7ec4\u4ef6","Writer\u63a5\u53e3","\u65e5\u5fd7\u81ea\u5b9a\u4e49\u8f93\u51fa","\u81ea\u5b9a\u4e49Writer","glog\u6a21\u5757","\u65e5\u5fd7HOOK","graylog","\u96c6\u4e2d\u5f0f\u65e5\u5fd7\u7ba1\u7406"],description:"\u5982\u4f55\u5728GoFrame\u6846\u67b6\u4e2d\u4f7f\u7528glog\u6a21\u5757\u7684Writer\u63a5\u53e3\u6765\u81ea\u5b9a\u4e49\u65e5\u5fd7\u8f93\u51fa\u3002\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49Writer\u5bf9\u8c61\uff0c\u53ef\u4ee5\u7075\u6d3b\u5730\u5c06\u65e5\u5fd7\u8f93\u51fa\u5230\u4e0d\u540c\u7684\u76ee\u6807\u5982\u6587\u4ef6\u3001\u6807\u51c6\u8f93\u51fa\u548cGraylog\u7b49\u3002\u6b64\u5916\uff0c\u8fd8\u63d0\u4f9b\u4e86\u793a\u4f8b\u4ee3\u7801\u8bf4\u660e\u5982\u4f55\u5b9e\u73b0\u65e5\u5fd7HOOK\u529f\u80fd\uff0c\u4ee5\u4fbf\u53ca\u65f6\u5c06\u4e25\u91cd\u9519\u8bef\u901a\u77e5\u5230\u76d1\u63a7\u670d\u52a1\u3002"},g=void 0,l={},s=[{value:"\u81ea\u5b9a\u4e49 <code>Writer</code> \u63a5\u53e3",id:"\u81ea\u5b9a\u4e49-writer-\u63a5\u53e3",level:2},{value:"\u793a\u4f8b1\uff0c\u5b9e\u73b0\u65e5\u5fd7 <code>HOOK</code>",id:"\u793a\u4f8b1\u5b9e\u73b0\u65e5\u5fd7-hook",level:2},{value:"\u793a\u4f8b2\uff0c\u6574\u5408 <code>graylog</code>",id:"\u793a\u4f8b2\u6574\u5408-graylog",level:2}];function d(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Writer"})," \u63a5\u53e3\u662f\u6700\u5e95\u5c42\u7684 ",(0,t.jsx)(r.code,{children:"IO"})," \u5199\u5165\u63a5\u53e3\uff0c\u5982\u679c\u4e1a\u52a1\u9700\u8981\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5185\u5bb9\u6253\u5370\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"Handler"})," \u7279\u6027\uff0c\u53c2\u8003\u7ae0\u8282\uff1a ",(0,t.jsx)(r.a,{href:"/en/docs/core/glog-handler",children:"\u65e5\u5fd7\u7ec4\u4ef6-Handler"})]})}),"\n",(0,t.jsxs)(r.h2,{id:"\u81ea\u5b9a\u4e49-writer-\u63a5\u53e3",children:["\u81ea\u5b9a\u4e49 ",(0,t.jsx)(r.code,{children:"Writer"})," \u63a5\u53e3"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"glog"})," \u6a21\u5757\u5b9e\u73b0\u4e86\u6807\u51c6\u8f93\u51fa\u4ee5\u53ca\u6587\u4ef6\u8f93\u51fa\u7684\u65e5\u5fd7\u5185\u5bb9\u6253\u5370\u3002\u5f53\u7136\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,t.jsx)(r.code,{children:"io.Writer"})," \u63a5\u53e3\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u65e5\u5fd7\u5185\u5bb9\u8f93\u51fa\u3002 ",(0,t.jsx)(r.code,{children:"io.Writer"})," \u662f\u6807\u51c6\u5e93\u63d0\u4f9b\u7684\u5185\u5bb9\u8f93\u51fa\u63a5\u53e3\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"type Writer interface {\n    Write(p []byte) (n int, err error)\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"SetWriter"})," \u65b9\u6cd5\u6216\u8005\u94fe\u5f0f\u65b9\u6cd5 ",(0,t.jsx)(r.code,{children:"To"})," \u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49 ",(0,t.jsx)(r.code,{children:"Writer"})," \u8f93\u51fa\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8be5 ",(0,t.jsx)(r.code,{children:"Writer"})," \u4e2d\u5b9e\u73b0\u5b9a\u4e49\u7684\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4e2d\u6574\u5408\u5176\u4ed6\u7684\u6a21\u5757\u529f\u80fd\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u6b64\u5916\uff0c ",(0,t.jsx)(r.code,{children:"glog.Logger"})," \u5bf9\u8c61\u5df2\u7ecf\u5b9e\u73b0\u4e86 ",(0,t.jsx)(r.code,{children:"io.Writer"})," \u63a5\u53e3\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5c06 ",(0,t.jsx)(r.code,{children:"glog"})," \u6574\u5408\u4f7f\u7528\u5230\u5176\u4ed6\u7684\u6a21\u5757\u4e2d\u3002"]}),"\n",(0,t.jsxs)(r.h2,{id:"\u793a\u4f8b1\u5b9e\u73b0\u65e5\u5fd7-hook",children:["\u793a\u4f8b1\uff0c\u5b9e\u73b0\u65e5\u5fd7 ",(0,t.jsx)(r.code,{children:"HOOK"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 ",(0,t.jsx)(r.code,{children:"Writer"})," \u5bf9\u8c61 ",(0,t.jsx)(r.code,{children:"MyWriter"}),"\uff0c\u5728\u8be5\u5bf9\u8c61\u5b9e\u73b0\u7684 ",(0,t.jsx)(r.code,{children:"Writer"})," \u63a5\u53e3\u4e2d\u6211\u4eec\u5bf9\u65e5\u5fd7\u5185\u5bb9\u8fdb\u884c\u5224\u65ad\uff0c\u5982\u679c\u51fa\u73b0\u4e86 ",(0,t.jsx)(r.code,{children:"PANI"})," \u6216\u8005 ",(0,t.jsx)(r.code,{children:"FATA"})," \u9519\u8bef\uff0c\u90a3\u4e48\u8868\u793a\u662f\u975e\u5e38\u4e25\u91cd\u7684\u9519\u8bef\uff0c\u8be5\u63a5\u53e3\u5c06\u4f1a\u7b2c\u4e00\u65f6\u95f4\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"HTTP"})," \u63a5\u53e3\u544a\u77e5 ",(0,t.jsx)(r.code,{children:"Monitor"})," \u76d1\u63a7\u670d\u52a1\u3002\u968f\u540e\u518d\u5c06\u65e5\u5fd7\u5185\u5bb9\u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"glog"})," \u6a21\u5757\u6309\u7167\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u548c\u6807\u51c6\u8f93\u51fa\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/gogf/gf/v2/text/gregex"\n)\n\ntype MyWriter struct {\n    logger *glog.Logger\n}\n\nfunc (w *MyWriter) Write(p []byte) (n int, err error) {\n    var (\n        s   = string(p)\n        ctx = context.Background()\n    )\n    if gregex.IsMatchString(`PANI|FATA`, s) {\n        fmt.Println("SERIOUS ISSUE OCCURRED!! I\'d better tell monitor in first time!")\n        g.Client().PostContent(ctx, "http://monitor.mydomain.com", s)\n    }\n    return w.logger.Write(p)\n}\n\nfunc main() {\n    var ctx = context.Background()\n    glog.SetWriter(&MyWriter{\n        logger: glog.New(),\n    })\n    glog.Fatal(ctx, "FATAL ERROR")\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"SERIOUS ISSUE OCCURRED!! I'd better tell monitor in first time!\n2019-05-23 20:14:49.374 [FATA] FATAL ERROR\nStack:\n1. /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/os/glog/glog_writer_hook.go:27\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"\u793a\u4f8b2\u6574\u5408-graylog",children:["\u793a\u4f8b2\uff0c\u6574\u5408 ",(0,t.jsx)(r.code,{children:"graylog"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5047\u5982\u6211\u4eec\u9700\u8981\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6\u53ca\u6807\u51c6\u8f93\u51fa\uff0c\u5e76\u4e14\u540c\u65f6\u4e5f\u9700\u8981\u8f93\u51fa\u65e5\u5fd7\u5230 ",(0,t.jsx)(r.code,{children:"Graylog"}),"\uff0c\u5f88\u660e\u663e\u8fd9\u4e2a\u4e5f\u662f\u9700\u8981\u81ea\u5b9a\u4e49 ",(0,t.jsx)(r.code,{children:"Writer"})," \u624d\u80fd\u5b9e\u73b0\u3002\u5f53\u7136\u540c\u7406\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8f93\u51fa\u5230\u5176\u4ed6\u7684\u65e5\u5fd7\u6536\u96c6\u7ec4\u4ef6\u6216\u8005\u6570\u636e\u5e93\u4e2d\u3002"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Graylog"})," \u662f\u4e0e ",(0,t.jsx)(r.code,{children:"ELK"})," \u53ef\u4ee5\u76f8\u63d0\u5e76\u8bba\u7684\u4e00\u6b3e\u96c6\u4e2d\u5f0f\u65e5\u5fd7\u7ba1\u7406\u65b9\u6848\uff0c\u652f\u6301\u6570\u636e\u6536\u96c6\u3001\u68c0\u7d22\u3001\u53ef\u89c6\u5316 ",(0,t.jsx)(r.code,{children:"Dashboard"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n\n    "github.com/gogf/gf/v2/os/glog"\n    "github.com/robertkowalski/graylog-golang"\n)\n\ntype MyGrayLogWriter struct {\n    gelf    *gelf.Gelf\n    logger  *glog.Logger\n}\n\nfunc (w *MyGrayLogWriter) Write(p []byte) (n int, err error) {\n    w.gelf.Send(p)\n    return w.logger.Write(p)\n}\n\nfunc main() {\n    var ctx = context.Background()\n    glog.SetWriter(&MyGrayLogWriter{\n        logger : glog.New(),\n        gelf   : gelf.New(gelf.Config{\n            GraylogPort     : 80,\n            GraylogHostname : "graylog-host.com",\n            Connection      : "wan",\n            MaxChunkSizeWan : 42,\n            MaxChunkSizeLan : 1337,\n        }),\n    })\n    glog.Println(ctx, "test log")\n}\n'})})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>g});var o=n(296540);const t={},i=o.createContext(t);function c(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function g(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);