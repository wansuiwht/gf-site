"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["54533"],{426477:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>g,assets:()=>c,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E","title":"\u670D\u52A1\u7AEF\u914D\u7F6E","description":"\u57FA\u672C\u4ECB\u7ECD","source":"@site/versioned_docs/version-2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E.md","sourceDirName":"\u5FAE\u670D\u52A1\u5F00\u53D1","slug":"/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E","permalink":"/en/2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u670D\u52A1\u7AEF\u914D\u7F6E.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":3,"frontMatter":{"title":"\u670D\u52A1\u7AEF\u914D\u7F6E","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u811A\u624B\u67B6\u6A21\u5757","permalink":"/en/2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u811A\u624B\u67B6\u6A21\u5757"},"next":{"title":"\u62E6\u622A\u5668\u7EC4\u4EF6","permalink":"/en/2.6.x/\u5FAE\u670D\u52A1\u5F00\u53D1/\u62E6\u622A\u5668\u7EC4\u4EF6"}}'),o=r("785893"),i=r("250065");let s={title:"\u670D\u52A1\u7AEF\u914D\u7F6E",sidebar_position:3,hide_title:!0},l=void 0,c={},d=[{value:"\u57FA\u672C\u4ECB\u7ECD",id:"\u57FA\u672C\u4ECB\u7ECD",level:2},{value:"\u914D\u7F6E\u6A21\u677F",id:"\u914D\u7F6E\u6A21\u677F",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57FA\u672C\u4ECB\u7ECD",children:"\u57FA\u672C\u4ECB\u7ECD"}),"\n",(0,o.jsx)(n.p,{children:"\u670D\u52A1\u7AEF\u652F\u6301\u914D\u7F6E\u6587\u4EF6\uFF0C\u6240\u6709\u7684\u914D\u7F6E\u5C06\u4F1A\u81EA\u52A8\u6620\u5C04\u5230\u914D\u7F6E\u5BF9\u8C61\u4E2D\u3002\u914D\u7F6E\u5BF9\u8C61\u5982\u4E0B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// GrpcServerConfig is the configuration for server.\ntype GrpcServerConfig struct {\n    Address          string              // (optional) Address for server listening.\n    Name             string              // (optional) Name for current service.\n    Logger           *glog.Logger        // (optional) Logger for server.\n    LogPath          string              // (optional) LogPath specifies the directory for storing logging files.\n    LogStdout        bool                // (optional) LogStdout specifies whether printing logging content to stdout.\n    ErrorStack       bool                // (optional) ErrorStack specifies whether logging stack information when error.\n    ErrorLogEnabled  bool                // (optional) ErrorLogEnabled enables error logging content to files.\n    ErrorLogPattern  string              // (optional) ErrorLogPattern specifies the error log file pattern like: error-{Ymd}.log\n    AccessLogEnabled bool                // (optional) AccessLogEnabled enables access logging content to file.\n    AccessLogPattern string              // (optional) AccessLogPattern specifies the error log file pattern like: access-{Ymd}.log\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u914D\u7F6E\u6587\u4EF6\u7684\u81EA\u52A8\u8BFB\u53D6\u903B\u8F91\u4E0E\u6846\u67B6\u4E00\u81F4\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,o.jsx)(n.a,{href:"/en/2.6.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86/",children:"\u914D\u7F6E\u7BA1\u7406"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u914D\u7F6E\u6A21\u677F",children:"\u914D\u7F6E\u6A21\u677F"}),"\n",(0,o.jsx)(n.p,{children:"\u4E00\u4E2A\u5B8C\u6574\u7684\u914D\u7F6E\u6A21\u677F\u793A\u4F8B\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'grpc:\n  name:             "demo"  # \u670D\u52A1\u540D\u79F0\n  address:          ":8000" # \u81EA\u5B9A\u4E49\u670D\u52A1\u76D1\u542C\u5730\u5740\n  logPath:          "./log" # \u65E5\u5FD7\u5B58\u50A8\u76EE\u5F55\u8DEF\u5F84\n  logStdout:        true    # \u65E5\u5FD7\u662F\u5426\u8F93\u51FA\u5230\u7EC8\u7AEF\n  errorLogEnabled:  true    # \u662F\u5426\u5F00\u542F\u9519\u8BEF\u65E5\u5FD7\u8BB0\u5F55\n  accessLogEnabled: true    # \u662F\u5426\u5F00\u542F\u8BBF\u95EE\u65E5\u5FD7\u8BB0\u5F55\n  errorStack:       true    # \u5F53\u4EA7\u751F\u9519\u8BEF\u65F6\uFF0C\u662F\u5426\u8BB0\u5F55\u9519\u8BEF\u5806\u6808\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u6CA1\u6709\u914D\u7F6E ",(0,o.jsx)(n.code,{children:"address"})," \u7684\u60C5\u51B5\u4E0B\uFF0C ",(0,o.jsx)(n.code,{children:"grpc server"})," \u5C06\u4F1A\u4F7F\u7528\u672C\u5730\u7F51\u5361\u7684\u6240\u6709 ",(0,o.jsx)(n.code,{children:"ip"})," \u5730\u5740\u52A0\u4E0A ",(0,o.jsx)(n.strong,{children:"\u968F\u673A\u7A7A\u95F2\u7AEF\u53E3"})," \u6765\u542F\u52A8\uFF08\u9ED8\u8BA4\u914D\u7F6E ",(0,o.jsx)(n.code,{children:":0"}),"\uFF09\u3002\u5982\u679C\u60F3\u8981\u6307\u5B9A ",(0,o.jsx)(n.code,{children:"ip"})," \u4F46\u662F\u4F7F\u7528\u968F\u673A\u7A7A\u95F2\u7AEF\u53E3\u542F\u52A8 ",(0,o.jsx)(n.code,{children:"grpc server"}),"\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"ip:0"})," \u7684\u683C\u5F0F\u6765\u914D\u7F6E ",(0,o.jsx)(n.code,{children:"address"}),"\uFF0C\u4F8B\u5982\uFF1A ",(0,o.jsx)(n.code,{children:"192.168.1.1:0, 10.0.1.1:0"}),"\u3002"]})]})}function g(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(667294);let o={},i=t.createContext(o);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);