"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12248],{950146:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e","title":"\u670d\u52a1\u7aef\u914d\u7f6e","description":"\u670d\u52a1\u7aef\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u5305\u62ec\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u8bfb\u53d6\u548c\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6\u3002\u63d0\u4f9b\u4e86\u4e00\u4efd\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff0c\u6db5\u76d6\u670d\u52a1\u540d\u79f0\u3001\u670d\u52a1\u76d1\u542c\u5730\u5740\u3001\u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u3001\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u53ca\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\u7684\u8bbe\u7f6e\u65b9\u6cd5\u3002\u8be5\u914d\u7f6e\u4e0e\u6846\u67b6\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e00\u81f4\uff0c\u786e\u4fdd\u4e86\u4fbf\u6377\u7684\u670d\u52a1\u90e8\u7f72\u548c\u9ad8\u6548\u7684\u65e5\u5fd7\u7ba1\u7406\uff0c\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u548c\u4f7f\u7528\u53c2\u6570\u65e5\u5fd7\u7ec4\u4ef6\u7684\u914d\u7f6e\u8fdb\u884c\u72ec\u7acb\u7684`grpc server`\u65e5\u5fd7\u7ba1\u7406\u3002","source":"@site/docs/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e.md","sourceDirName":"docs/\u5fae\u670d\u52a1\u5f00\u53d1","slug":"/docs/micro-service/config","permalink":"/en/docs/micro-service/config","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u7aef\u914d\u7f6e.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":3,"frontMatter":{"slug":"/docs/micro-service/config","title":"\u670d\u52a1\u7aef\u914d\u7f6e","sidebar_position":3,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","\u914d\u7f6e\u7ba1\u7406","\u670d\u52a1\u7aef\u914d\u7f6e","GrpcServerConfig","\u65e5\u5fd7\u914d\u7f6e","\u65e5\u5fd7\u7ec4\u4ef6","\u670d\u52a1\u76d1\u542c","\u81ea\u52a8\u6620\u5c04","\u9519\u8bef\u65e5\u5fd7"],"description":"\u670d\u52a1\u7aef\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u5305\u62ec\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u8bfb\u53d6\u548c\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6\u3002\u63d0\u4f9b\u4e86\u4e00\u4efd\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff0c\u6db5\u76d6\u670d\u52a1\u540d\u79f0\u3001\u670d\u52a1\u76d1\u542c\u5730\u5740\u3001\u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u3001\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u53ca\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\u7684\u8bbe\u7f6e\u65b9\u6cd5\u3002\u8be5\u914d\u7f6e\u4e0e\u6846\u67b6\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e00\u81f4\uff0c\u786e\u4fdd\u4e86\u4fbf\u6377\u7684\u670d\u52a1\u90e8\u7f72\u548c\u9ad8\u6548\u7684\u65e5\u5fd7\u7ba1\u7406\uff0c\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u548c\u4f7f\u7528\u53c2\u6570\u65e5\u5fd7\u7ec4\u4ef6\u7684\u914d\u7f6e\u8fdb\u884c\u72ec\u7acb\u7684`grpc server`\u65e5\u5fd7\u7ba1\u7406\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u811a\u624b\u67b6\u6a21\u5757","permalink":"/en/docs/micro-service/scaffold"},"next":{"title":"\u62e6\u622a\u5668\u7ec4\u4ef6","permalink":"/en/docs/micro-service/interceptor"}}');var t=o(474848),s=o(28453);const i={slug:"/docs/micro-service/config",title:"\u670d\u52a1\u7aef\u914d\u7f6e",sidebar_position:3,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","\u914d\u7f6e\u7ba1\u7406","\u670d\u52a1\u7aef\u914d\u7f6e","GrpcServerConfig","\u65e5\u5fd7\u914d\u7f6e","\u65e5\u5fd7\u7ec4\u4ef6","\u670d\u52a1\u76d1\u542c","\u81ea\u52a8\u6620\u5c04","\u9519\u8bef\u65e5\u5fd7"],description:"\u670d\u52a1\u7aef\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u5305\u62ec\u5982\u4f55\u901a\u8fc7GoFrame\u6846\u67b6\u8bfb\u53d6\u548c\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6\u3002\u63d0\u4f9b\u4e86\u4e00\u4efd\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff0c\u6db5\u76d6\u670d\u52a1\u540d\u79f0\u3001\u670d\u52a1\u76d1\u542c\u5730\u5740\u3001\u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u3001\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u53ca\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\u7684\u8bbe\u7f6e\u65b9\u6cd5\u3002\u8be5\u914d\u7f6e\u4e0e\u6846\u67b6\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e00\u81f4\uff0c\u786e\u4fdd\u4e86\u4fbf\u6377\u7684\u670d\u52a1\u90e8\u7f72\u548c\u9ad8\u6548\u7684\u65e5\u5fd7\u7ba1\u7406\uff0c\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u548c\u4f7f\u7528\u53c2\u6570\u65e5\u5fd7\u7ec4\u4ef6\u7684\u914d\u7f6e\u8fdb\u884c\u72ec\u7acb\u7684`grpc server`\u65e5\u5fd7\u7ba1\u7406\u3002"},c=void 0,d={},l=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e\u6a21\u677f",id:"\u914d\u7f6e\u6a21\u677f",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsx)(r.p,{children:"\u670d\u52a1\u7aef\u652f\u6301\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u6709\u7684\u914d\u7f6e\u5c06\u4f1a\u81ea\u52a8\u6620\u5c04\u5230\u914d\u7f6e\u5bf9\u8c61\u4e2d\u3002\u914d\u7f6e\u5bf9\u8c61\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:"// GrpcServerConfig is the configuration for server.\ntype GrpcServerConfig struct {\n    Address          string              // (optional) Address for server listening.\n    Name             string              // (optional) Name for current service.\n    Logger           *glog.Logger        // (optional) Logger for server.\n    LogPath          string              // (optional) LogPath specifies the directory for storing logging files.\n    LogStdout        bool                // (optional) LogStdout specifies whether printing logging content to stdout.\n    ErrorStack       bool                // (optional) ErrorStack specifies whether logging stack information when error.\n    ErrorLogEnabled  bool                // (optional) ErrorLogEnabled enables error logging content to files.\n    ErrorLogPattern  string              // (optional) ErrorLogPattern specifies the error log file pattern like: error-{Ymd}.log\n    AccessLogEnabled bool                // (optional) AccessLogEnabled enables access logging content to file.\n    AccessLogPattern string              // (optional) AccessLogPattern specifies the error log file pattern like: access-{Ymd}.log\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u914d\u7f6e\u6587\u4ef6\u7684\u81ea\u52a8\u8bfb\u53d6\u903b\u8f91\u4e0e\u6846\u67b6\u4e00\u81f4\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,t.jsx)(r.a,{href:"/en/docs/core/gcfg",children:"\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,t.jsx)(r.h2,{id:"\u914d\u7f6e\u6a21\u677f",children:"\u914d\u7f6e\u6a21\u677f"}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2a\u5b8c\u6574\u7684\u914d\u7f6e\u6a21\u677f\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'grpc:\n  name:             "demo"  # \u670d\u52a1\u540d\u79f0\n  address:          ":8000" # \u81ea\u5b9a\u4e49\u670d\u52a1\u76d1\u542c\u5730\u5740\n  logPath:          "./log" # \u65e5\u5fd7\u5b58\u50a8\u76ee\u5f55\u8def\u5f84\n  logStdout:        true    # \u65e5\u5fd7\u662f\u5426\u8f93\u51fa\u5230\u7ec8\u7aef\n  errorLogEnabled:  true    # \u662f\u5426\u5f00\u542f\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\n  accessLogEnabled: true    # \u662f\u5426\u5f00\u542f\u8bbf\u95ee\u65e5\u5fd7\u8bb0\u5f55\n  errorStack:       true    # \u5f53\u4ea7\u751f\u9519\u8bef\u65f6\uff0c\u662f\u5426\u8bb0\u5f55\u9519\u8bef\u5806\u6808\n\n  # \u65e5\u5fd7\u6269\u5c55\u914d\u7f6e(\u53c2\u6570\u65e5\u5fd7\u7ec4\u4ef6\u914d\u7f6e)\n  logger:\n    path:                  "/var/log/"   # \u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u8868\u793a\u5173\u95ed\uff0c\u4ec5\u8f93\u51fa\u5230\u7ec8\u7aef\n    file:                  "{Y-m-d}.log" # \u65e5\u5fd7\u6587\u4ef6\u683c\u5f0f\u3002\u9ed8\u8ba4\u4e3a"{Y-m-d}.log"\n    prefix:                ""            # \u65e5\u5fd7\u5185\u5bb9\u8f93\u51fa\u524d\u7f00\u3002\u9ed8\u8ba4\u4e3a\u7a7a\n    level:                 "all"         # \u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b\n    stdout:                true          # \u65e5\u5fd7\u662f\u5426\u540c\u65f6\u8f93\u51fa\u5230\u7ec8\u7aef\u3002\u9ed8\u8ba4true\n    rotateSize:            0             # \u6309\u7167\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f\u5bf9\u6587\u4ef6\u8fdb\u884c\u6eda\u52a8\u5207\u5206\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u5173\u95ed\u6eda\u52a8\u5207\u5206\u7279\u6027\n    rotateExpire:          0             # \u6309\u7167\u65e5\u5fd7\u6587\u4ef6\u65f6\u95f4\u95f4\u9694\u5bf9\u6587\u4ef6\u6eda\u52a8\u5207\u5206\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u5173\u95ed\u6eda\u52a8\u5207\u5206\u7279\u6027\n    rotateBackupLimit:     0             # \u6309\u7167\u5207\u5206\u7684\u6587\u4ef6\u6570\u91cf\u6e05\u7406\u5207\u5206\u6587\u4ef6\uff0c\u5f53\u6eda\u52a8\u5207\u5206\u7279\u6027\u5f00\u542f\u65f6\u6709\u6548\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u4e0d\u5907\u4efd\uff0c\u5207\u5206\u5219\u5220\u9664\n    rotateBackupExpire:    0             # \u6309\u7167\u5207\u5206\u7684\u6587\u4ef6\u6709\u6548\u671f\u6e05\u7406\u5207\u5206\u6587\u4ef6\uff0c\u5f53\u6eda\u52a8\u5207\u5206\u7279\u6027\u5f00\u542f\u65f6\u6709\u6548\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u4e0d\u5907\u4efd\uff0c\u5207\u5206\u5219\u5220\u9664\n    rotateBackupCompress:  0             # \u6eda\u52a8\u5207\u5206\u6587\u4ef6\u7684\u538b\u7f29\u6bd4\uff080-9\uff09\u3002\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u4e0d\u538b\u7f29\n    rotateCheckInterval:   "1h"          # \u6eda\u52a8\u5207\u5206\u7684\u65f6\u95f4\u68c0\u6d4b\u95f4\u9694\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8bbe\u7f6e\u3002\u9ed8\u8ba4\u4e3a1\u5c0f\u65f6\n\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u5176\u4e2d\u7684\u65e5\u5fd7\u914d\u7f6e\u4e0e ",(0,t.jsx)(r.code,{children:"http server"})," \u4e00\u81f4\uff0c\u53ef\u4ee5\u72ec\u7acb\u4f7f\u7528\u65e5\u5fd7\u7ec4\u4ef6\u7684\u914d\u7f6e\u9879\u6765\u914d\u7f6e ",(0,t.jsx)(r.code,{children:"grpc server"})," \u7684\u65e5\u5fd7\u3002\u5173\u4e8e\u65e5\u5fd7\u7ec4\u4ef6\u7684\u914d\u7f6e\uff0c\u53ef\u53c2\u8003\u8be5\u6587\u6863\u8be6\u7ec6\u4e86\u89e3\uff1a ",(0,t.jsx)(r.a,{href:"/en/docs/core/glog-config",children:"\u65e5\u5fd7\u7ec4\u4ef6-\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u6ca1\u6709\u914d\u7f6e ",(0,t.jsx)(r.code,{children:"address"})," \u7684\u60c5\u51b5\u4e0b\uff0c ",(0,t.jsx)(r.code,{children:"grpc server"})," \u5c06\u4f1a\u4f7f\u7528\u672c\u5730\u7f51\u5361\u7684\u6240\u6709 ",(0,t.jsx)(r.code,{children:"ip"})," \u5730\u5740\u52a0\u4e0a ",(0,t.jsx)(r.strong,{children:"\u968f\u673a\u7a7a\u95f2\u7aef\u53e3"})," \u6765\u542f\u52a8\uff08\u9ed8\u8ba4\u914d\u7f6e ",(0,t.jsx)(r.code,{children:":0"}),"\uff09\u3002\u5982\u679c\u60f3\u8981\u6307\u5b9a ",(0,t.jsx)(r.code,{children:"ip"})," \u4f46\u662f\u4f7f\u7528\u968f\u673a\u7a7a\u95f2\u7aef\u53e3\u542f\u52a8 ",(0,t.jsx)(r.code,{children:"grpc server"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"ip:0"})," \u7684\u683c\u5f0f\u6765\u914d\u7f6e ",(0,t.jsx)(r.code,{children:"address"}),"\uff0c\u4f8b\u5982\uff1a ",(0,t.jsx)(r.code,{children:"192.168.1.1:0, 10.0.1.1:0"}),"\u3002"]})]})}function g(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>c});var n=o(296540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);