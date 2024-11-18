"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["44832"],{724473:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>f,assets:()=>c,toc:()=>s,frontMatter:()=>a});var t=JSON.parse('{"id":"\u5F00\u53D1\u5DE5\u5177/\u955C\u50CF\u7F16\u8BD1-docker","title":"\u955C\u50CF\u7F16\u8BD1-docker","description":"\u4F7F\u7528\u65B9\u5F0F","source":"@site/versioned_docs/version-2.3.x/\u5F00\u53D1\u5DE5\u5177/\u955C\u50CF\u7F16\u8BD1-docker.md","sourceDirName":"\u5F00\u53D1\u5DE5\u5177","slug":"/\u5F00\u53D1\u5DE5\u5177/\u955C\u50CF\u7F16\u8BD1-docker","permalink":"/2.3.x/\u5F00\u53D1\u5DE5\u5177/\u955C\u50CF\u7F16\u8BD1-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/\u5F00\u53D1\u5DE5\u5177/\u955C\u50CF\u7F16\u8BD1-docker.md","tags":[],"version":"2.3.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":8,"frontMatter":{"title":"\u955C\u50CF\u7F16\u8BD1-docker","sidebar_position":8,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u8D44\u6E90\u6253\u5305-pack","permalink":"/2.3.x/\u5F00\u53D1\u5DE5\u5177/\u8D44\u6E90\u6253\u5305-pack"},"next":{"title":"\u517C\u5BB9\u4FEE\u590D-fix","permalink":"/2.3.x/\u5F00\u53D1\u5DE5\u5177/\u517C\u5BB9\u4FEE\u590D-fix"}}'),o=i("785893"),r=i("250065");let a={title:"\u955C\u50CF\u7F16\u8BD1-docker",sidebar_position:8,hide_title:!0},d=void 0,c={},s=[{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B",id:"\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B",level:2}];function l(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ gf docker -h\nUSAGE\n    gf docker [MAIN] [OPTION]\n\nARGUMENT\n    MAIN    main file path for "gf build", it\'s "main.go" in default. empty string for no binary build\n\nOPTION\n    -f, --file           file path of the Dockerfile. it\'s "manifest/docker/Dockerfile" in default\n    -s, --shell          path of the shell file which is executed before docker build\n    -b, --build          binary build options before docker image build, it\'s "-a amd64 -s linux" in default\n    -tn, --tagName       tag name for this docker, pattern like "image:tag". this option is required with TagPrefixes\n    -tp, --tagPrefixes   tag prefixes for this docker, which are used for docker push. this option is required with\n                         TagName\n    -p, --push           auto push the docker image to docker registry if "-t" option passed\n    -e, --extra          extra build options passed to "docker image"\n    -h, --help           more information about this command\n\nEXAMPLE\n    gf docker\n    gf docker -t hub.docker.com/john/image:tag\n    gf docker -p -t hub.docker.com/john/image:tag\n    gf docker main.go\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -p -t hub.docker.com/john/image:tag\n\nDESCRIPTION\n    The "docker" command builds the GF project to a docker images.\n    It runs "gf build" firstly to compile the project to binary file.\n    It then runs "docker build" command automatically to generate the docker image.\n    You should have docker installed, and there must be a Dockerfile in the root of the project.\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u81EA\u52A8\u7F16\u8BD1\u5E76\u751F\u6210 ",(0,o.jsx)(n.code,{children:"docker"})," \u955C\u50CF\u3002\u975E\u5FC5\u9700 ",(0,o.jsx)(n.code,{children:"FILE"})," \u53C2\u6570\u4E3A\u7F16\u8BD1\u6587\u4EF6\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A ",(0,o.jsx)(n.code,{children:"main.go"}),"\u3002\u975E\u5FC5\u9700\u53C2\u6570 ",(0,o.jsx)(n.code,{children:"OPTIONS"})," \u4E3A ",(0,o.jsx)(n.code,{children:"docker build"})," \u547D\u4EE4\u76F8\u540C\u53C2\u6570\u53CA\u9009\u9879\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ gf docker main.go -p -tn loads/gf-demos:test\n2020-12-31 00:47:28.207 start building...\n2020-12-31 00:47:28.207 go build -o ./bin/linux_amd64/main main.go\n2020-12-31 00:47:35.894 done!\nSending build context to Docker daemon  37.63MB\nStep 1/10 : FROM loads/alpine:3.8\n ---\x3e f9fb622e6db2\nStep 2/10 : LABEL maintainer="john@goframe.org"\n ---\x3e Using cache\n ---\x3e da238418d031\nStep 3/10 : ENV WORKDIR /var/www/gf-demos\n ---\x3e Using cache\n ---\x3e 3e7129c087c9\nStep 4/10 : ADD ./bin/linux_amd64/main   $WORKDIR/main\n ---\x3e 3661a9dea494\nStep 5/10 : RUN chmod +x $WORKDIR/main\n ---\x3e Running in 1d49d5d91080\nRemoving intermediate container 1d49d5d91080\n ---\x3e a03ee04e3380\nStep 6/10 : ADD public   $WORKDIR/public\n ---\x3e 63dd06d0e1a3\nStep 7/10 : ADD config   $WORKDIR/config\n ---\x3e fa7a57eba577\nStep 8/10 : ADD template $WORKDIR/template\n ---\x3e 7075609b0447\nStep 9/10 : WORKDIR $WORKDIR\n ---\x3e Running in a34ef38e1031\nRemoving intermediate container a34ef38e1031\n ---\x3e 580077998eaf\nStep 10/10 : CMD ./main\n ---\x3e Running in ed286b518ad9\nRemoving intermediate container ed286b518ad9\n ---\x3e fbbc05842901\nSuccessfully built fbbc05842901\nSuccessfully tagged loads/gf-demos:test\nThe push refers to repository [docker.io/loads/gf-demos]\nb4025b95a79f: Preparing\n9e0369a57507: Preparing\n46c68dcc8e12: Preparing\n59adbc083ee5: Preparing\n10e0b999ba57: Preparing\n8e850d7b086e: Waiting\nd5e057db20a2: Waiting\n92e898fd7f84: Waiting\nd9ff549177a9: Waiting\n...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B",children:"\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B"}),"\n",(0,o.jsxs)(n.p,{children:["\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u5DE5\u5177\u7684\u914D\u7F6E\uFF0C\u5728 ",(0,o.jsx)(n.code,{children:"hack/config.yaml"})," \u6587\u4EF6\u4E2D\u7EF4\u62A4\uFF0C\u4F8B\u5982 ",(0,o.jsx)(n.code,{children:"docker"})," \u547D\u4EE4\u7684\u914D\u7F6E\u793A\u4F8B\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'gfcli:\n  docker:\n    build: "-a amd64 -s linux -p temp -ew"\n    tagPrefixes:\n    - ccr.ccs.tencentyun.com/cdb.khaos.eros\n'})})]})}function f(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return a}});var t=i(667294);let o={},r=t.createContext(o);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);