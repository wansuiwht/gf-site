"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[38087],{814224:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"docs/\u9879\u76ee\u90e8\u7f72/\u5bb9\u5668\u90e8\u7f72","title":"\u5bb9\u5668\u90e8\u7f72","description":"\u4f7f\u7528Docker\u5316\u65b9\u5f0f\u90e8\u7f72Golang\u5e94\u7528\uff0c\u6df1\u5165\u63a2\u8ba8\u4e86\u4ea4\u53c9\u7f16\u8bd1\u6280\u672f\uff0c\u5982\u4f55\u5728alpine\u955c\u50cf\u4e0a\u6784\u5efa\u5e76\u5206\u53d1Docker\u955c\u50cf\u3002\u5728\u4f01\u4e1a\u7ea7\u73af\u5883\u4e0b\uff0c\u63a8\u8350\u7ed3\u5408Kubernetes\u6216Docker Swarm\u8fdb\u884c\u5bb9\u5668\u7f16\u6392\u4ee5\u63d0\u9ad8\u7cfb\u7edf\u6269\u5c55\u6027\u548c\u53ef\u9760\u6027\u3002","source":"@site/docs/docs/\u9879\u76ee\u90e8\u7f72/\u5bb9\u5668\u90e8\u7f72.md","sourceDirName":"docs/\u9879\u76ee\u90e8\u7f72","slug":"/docs/deploy/container","permalink":"/en/docs/deploy/container","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u9879\u76ee\u90e8\u7f72/\u5bb9\u5668\u90e8\u7f72.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":2,"frontMatter":{"slug":"/docs/deploy/container","title":"\u5bb9\u5668\u90e8\u7f72","sidebar_position":2,"hide_title":true,"keywords":["\u5bb9\u5668\u90e8\u7f72","docker","golang","\u4ea4\u53c9\u7f16\u8bd1","\u9759\u6001\u7f16\u8bd1","alpine","Dockerfile","\u955c\u50cf\u5206\u53d1","kubernetes","docker swarm"],"description":"\u4f7f\u7528Docker\u5316\u65b9\u5f0f\u90e8\u7f72Golang\u5e94\u7528\uff0c\u6df1\u5165\u63a2\u8ba8\u4e86\u4ea4\u53c9\u7f16\u8bd1\u6280\u672f\uff0c\u5982\u4f55\u5728alpine\u955c\u50cf\u4e0a\u6784\u5efa\u5e76\u5206\u53d1Docker\u955c\u50cf\u3002\u5728\u4f01\u4e1a\u7ea7\u73af\u5883\u4e0b\uff0c\u63a8\u8350\u7ed3\u5408Kubernetes\u6216Docker Swarm\u8fdb\u884c\u5bb9\u5668\u7f16\u6392\u4ee5\u63d0\u9ad8\u7cfb\u7edf\u6269\u5c55\u6027\u548c\u53ef\u9760\u6027\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u4ee3\u7406\u90e8\u7f72","permalink":"/en/docs/deploy/proxy"},"next":{"title":"\u5176\u4ed6\u8d44\u6599","permalink":"/en/docs/other"}}');var s=c(474848),d=c(28453);const o={slug:"/docs/deploy/container",title:"\u5bb9\u5668\u90e8\u7f72",sidebar_position:2,hide_title:!0,keywords:["\u5bb9\u5668\u90e8\u7f72","docker","golang","\u4ea4\u53c9\u7f16\u8bd1","\u9759\u6001\u7f16\u8bd1","alpine","Dockerfile","\u955c\u50cf\u5206\u53d1","kubernetes","docker swarm"],description:"\u4f7f\u7528Docker\u5316\u65b9\u5f0f\u90e8\u7f72Golang\u5e94\u7528\uff0c\u6df1\u5165\u63a2\u8ba8\u4e86\u4ea4\u53c9\u7f16\u8bd1\u6280\u672f\uff0c\u5982\u4f55\u5728alpine\u955c\u50cf\u4e0a\u6784\u5efa\u5e76\u5206\u53d1Docker\u955c\u50cf\u3002\u5728\u4f01\u4e1a\u7ea7\u73af\u5883\u4e0b\uff0c\u63a8\u8350\u7ed3\u5408Kubernetes\u6216Docker Swarm\u8fdb\u884c\u5bb9\u5668\u7f16\u6392\u4ee5\u63d0\u9ad8\u7cfb\u7edf\u6269\u5c55\u6027\u548c\u53ef\u9760\u6027\u3002"},i=void 0,l={},t=[{value:"1. \u7f16\u8bd1\u7a0b\u5e8f",id:"1-\u7f16\u8bd1\u7a0b\u5e8f",level:2},{value:"2. \u7f16\u8bd1\u955c\u50cf",id:"2-\u7f16\u8bd1\u955c\u50cf",level:2},{value:"3. \u8fd0\u884c\u955c\u50cf",id:"3-\u8fd0\u884c\u955c\u50cf",level:2},{value:"4. \u955c\u50cf\u5206\u53d1",id:"4-\u955c\u50cf\u5206\u53d1",level:2},{value:"5. \u5bb9\u5668\u7f16\u6392",id:"5-\u5bb9\u5668\u7f16\u6392",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5bb9\u5668\u90e8\u7f72\u5373\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"docker"})," \u5316\u90e8\u7f72 ",(0,s.jsx)(n.code,{children:"golang"})," \u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u662f\u5728\u4e91\u670d\u52a1\u65f6\u4ee3\u6700\u6d41\u884c\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u4e5f\u662f\u6700\u63a8\u8350\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728\u4ee5\u4e0b\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u7edf\u4e00\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"main"})," \u4f5c\u4e3a\u9879\u76ee\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u7f16\u8bd1\u7a0b\u5e8f",children:"1. \u7f16\u8bd1\u7a0b\u5e8f"}),"\n",(0,s.jsxs)(n.p,{children:["\u8de8\u5e73\u53f0\u4ea4\u53c9\u7f16\u8bd1\u662f ",(0,s.jsx)(n.code,{children:"golang"})," \u7684\u7279\u70b9\u4e4b\u4e00\uff0c\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u7f16\u8bd1\u51fa\u6211\u4eec\u9700\u8981\u7684\u76ee\u6807\u670d\u52a1\u5668\u5e73\u53f0\u7684\u7248\u672c\uff0c\u800c\u4e14\u662f\u9759\u6001\u7f16\u8bd1\uff0c\u975e\u5e38\u5bb9\u6613\u5730\u89e3\u51b3\u4e86\u8fd0\u884c\u4f9d\u8d56\u95ee\u9898\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u53ef\u4ee5\u9759\u6001\u7f16\u8bd1 ",(0,s.jsx)(n.code,{children:"Linux"})," \u5e73\u53f0 ",(0,s.jsx)(n.code,{children:"amd64"})," \u67b6\u6784\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main main.go\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u751f\u6210\u7684 ",(0,s.jsx)(n.code,{children:"main"})," \u4fbf\u662f\u6211\u4eec\u9759\u6001\u7f16\u8bd1\u7684\uff0c\u53ef\u90e8\u7f72\u4e8e ",(0,s.jsx)(n.code,{children:"Linux amd64"})," \u4e0a\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u7f16\u8bd1\u955c\u50cf",children:"2. \u7f16\u8bd1\u955c\u50cf"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u9700\u8981\u5c06\u8be5\u53ef\u6267\u884c\u6587\u4ef6 ",(0,s.jsx)(n.code,{children:"main"})," \u7f16\u8bd1\u751f\u6210 ",(0,s.jsx)(n.code,{children:"docker"})," \u955c\u50cf\uff0c\u4ee5\u4fbf\u4e8e\u5206\u53d1\u53ca\u90e8\u7f72\u3002 ",(0,s.jsx)(n.code,{children:"Golang"})," \u7684\u8fd0\u884c\u73af\u5883\u63a8\u8350\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"alpine"})," \u57fa\u7840\u7cfb\u7edf\u955c\u50cf\uff0c\u7f16\u8bd1\u51fa\u7684\u5bb9\u5668\u955c\u50cf\u7ea6\u4e3a ",(0,s.jsx)(n.code,{children:"20MB"})," \u5de6\u53f3\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u53c2\u8003\u7684 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u6587\u4ef6\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dockerfile",children:'FROM loads/alpine:3.8\n\nLABEL maintainer="john@goframe.org"\n\n###############################################################################\n#                                INSTALLATION\n###############################################################################\n\n# \u8bbe\u7f6e\u56fa\u5b9a\u7684\u9879\u76ee\u8def\u5f84\nENV WORKDIR /app/main\n\n# \u6dfb\u52a0\u5e94\u7528\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5e76\u8bbe\u7f6e\u6267\u884c\u6743\u9650\nADD ./main   $WORKDIR/main\nRUN chmod +x $WORKDIR/main\n\n# \u6dfb\u52a0\u9759\u6001\u8d44\u6e90\u6587\u4ef6\nADD resource $WORKDIR/resource\n\n###############################################################################\n#                                   START\n###############################################################################\nWORKDIR $WORKDIR\nCMD ./main\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c\u6211\u4eec\u7684\u57fa\u7840\u955c\u50cf\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"loads/alpine:3.8"}),"\uff0c\u4e2d\u56fd\u56fd\u5185\u7684\u7528\u6237\u63a8\u8350\u4f7f\u7528\u8be5\u57fa\u7840\u955c\u50cf\uff0c\u57fa\u7840\u955c\u50cf\u7684 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u5730\u5740\uff1a ",(0,s.jsx)(n.a,{href:"https://github.com/gqcn/dockerfiles",children:"https://github.com/gqcn/dockerfiles"})," \uff0c\u4ed3\u5e93\u5730\u5740\uff1a ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/u/loads",children:"https://hub.docker.com/u/loads"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u968f\u540e\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"docker build -t main ."})," \u6307\u4ee4\u7f16\u8bd1\u751f\u6210\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"main"})," \u7684 ",(0,s.jsx)(n.code,{children:"docker"})," \u955c\u50cf\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f\u4e8b\u9879"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u67d0\u4e9b\u9879\u76ee\u7684\u67b6\u6784\u8bbe\u8ba1\u4e2d\uff0c ",(0,s.jsx)(n.strong,{children:"\u9759\u6001\u6587\u4ef6"})," \u548c ",(0,s.jsx)(n.strong,{children:"\u914d\u7f6e\u6587\u4ef6"})," \u53ef\u80fd\u4e0d\u4f1a\u968f\u7740\u955c\u50cf\u8fdb\u884c\u7f16\u8bd1\u53d1\u5e03\uff0c\u800c\u662f\u5206\u5f00\u8fdb\u884c\u7ba1\u7406\u548c\u53d1\u5e03\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"MVVM"})," \u6a21\u5f0f\u7684\u9879\u76ee\u4e2d(\u4f8b\u5982\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"vue"})," \u6846\u67b6)\uff0c\u5f80\u5f80\u662f\u524d\u540e\u7aef\u975e\u5e38\u72ec\u7acb\u7684\uff0c\u56e0\u6b64\u5728\u955c\u50cf\u4e2d\u5f80\u5f80\u5e76\u4e0d\u4f1a\u5305\u542b ",(0,s.jsx)(n.code,{children:"public"})," \u76ee\u5f55\u3002\u800c\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"\u914d\u7f6e\u7ba1\u7406\u4e2d\u5fc3"}),"(\u4f8b\u5982\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"consul"}),"/ ",(0,s.jsx)(n.code,{children:"etcd"}),"/ ",(0,s.jsx)(n.code,{children:"zookeeper"}),")\u7684\u9879\u76ee\u4e2d\uff0c\u4e5f\u5f80\u5f80\u5e76\u4e0d\u9700\u8981 ",(0,s.jsx)(n.code,{children:"config"})," \u76ee\u5f55\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\u5bf9\u4e8e\u4ee5\u4e0a\u793a\u4f8b\u7684 ",(0,s.jsx)(n.code,{children:"Dockerfile"})," \u7684\u4f7f\u7528\uff0c\u4ec5\u4f5c\u53c2\u8003\uff0c\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8bf7\u8fdb\u884c\u5fc5\u8981\u7684\u8c03\u6574\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"3-\u8fd0\u884c\u955c\u50cf",children:"3. \u8fd0\u884c\u955c\u50cf"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u53ef\u76f4\u63a5\u8fd0\u884c\u521a\u624d\u7f16\u8bd1\u6210\u7684\u955c\u50cf\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run main\n"})}),"\n",(0,s.jsx)(n.h2,{id:"4-\u955c\u50cf\u5206\u53d1",children:"4. \u955c\u50cf\u5206\u53d1"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bb9\u5668\u7684\u5206\u53d1\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"docker"})," \u5b98\u65b9\u7684\u5e73\u53f0\uff1a ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/",children:"https://hub.docker.com/"})," \uff0c\u56fd\u5185\u4e5f\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u963f\u91cc\u4e91\uff1a ",(0,s.jsx)(n.a,{href:"https://www.aliyun.com/product/acr",children:"https://www.aliyun.com/product/acr"})," \u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"5-\u5bb9\u5668\u7f16\u6392",children:"5. \u5bb9\u5668\u7f16\u6392"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f01\u4e1a\u7ea7\u751f\u4ea7\u73af\u5883\u4e2d\uff0c ",(0,s.jsx)(n.code,{children:"docker"})," \u5bb9\u5668\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,s.jsx)(n.code,{children:"kubernetes"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"docker swarm"})," \u5bb9\u5668\u7f16\u6392\u5de5\u5177\u4e00\u8d77\u4f7f\u7528\u3002 \u5bb9\u5668\u7f16\u6392\u6d89\u53ca\u5230\u7684\u5185\u5bb9\u6bd4\u8f83\u591a\uff0c\u611f\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u8d44\u6599\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://kubernetes.io/",children:"https://kubernetes.io/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/swarm/",children:"https://docs.docker.com/swarm/"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>i});var r=c(296540);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);