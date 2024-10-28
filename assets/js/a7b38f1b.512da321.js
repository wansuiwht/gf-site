"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[8685],{631290:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var t=o(474848),i=o(28453);const d={title:"docker \u955c\u50cf\u7f16\u8bd1",sidebar_position:9},r=void 0,c={id:"\u5f00\u53d1\u5de5\u5177/docker \u955c\u50cf\u7f16\u8bd1",title:"docker \u955c\u50cf\u7f16\u8bd1",description:"\u4f7f\u7528\u65b9\u5f0f\uff1a",source:"@site/versioned_docs/version-1.15.x/0-\u5f00\u53d1\u5de5\u5177/9-docker \u955c\u50cf\u7f16\u8bd1.md",sourceDirName:"0-\u5f00\u53d1\u5de5\u5177",slug:"/\u5f00\u53d1\u5de5\u5177/docker \u955c\u50cf\u7f16\u8bd1",permalink:"/gf-site/docs/1.15.x/\u5f00\u53d1\u5de5\u5177/docker \u955c\u50cf\u7f16\u8bd1",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.15.x/0-\u5f00\u53d1\u5de5\u5177/9-docker \u955c\u50cf\u7f16\u8bd1.md",tags:[],version:"1.15.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:9,frontMatter:{title:"docker \u955c\u50cf\u7f16\u8bd1",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"get \u4f9d\u8d56\u5305\u4e0b\u8f7d",permalink:"/gf-site/docs/1.15.x/\u5f00\u53d1\u5de5\u5177/get \u4f9d\u8d56\u5305\u4e0b\u8f7d"},next:{title:"mod \u5305\u7ba1\u7406\u6269\u5c55\u529f\u80fd",permalink:"/gf-site/docs/1.15.x/\u5f00\u53d1\u5de5\u5177/mod \u5305\u7ba1\u7406\u6269\u5c55\u529f\u80fd"}},a={},s=[];function g(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ gf docker -h\nUSAGE\n    gf docker [FILE] [OPTION]\n\nARGUMENT\n    FILE      file path for "gf build", it\'s "main.go" in default.\n    OPTION    the same options as "docker build" except some options as follows defined\n\nOPTION\n    -p, --push  auto push the docker image to docker registry if "-t" option passed\n\nEXAMPLES\n    gf docker\n    gf docker -t hub.docker.com/john/image:tag\n    gf docker -p -t hub.docker.com/john/image:tag\n    gf docker main.go\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -t hub.docker.com/john/image:tag\n    gf docker main.go -p -t hub.docker.com/john/image:tag\n\nDESCRIPTION\n    The "docker" command builds the GF project to a docker images.\n    It runs "gf build" firstly to compile the project to binary file.\n    It then runs "docker build" command automatically to generate the docker image.\n    You should have docker installed, and there must be a Dockerfile in the root of the project.\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u81ea\u52a8\u7f16\u8bd1\u5e76\u751f\u6210 ",(0,t.jsx)(n.code,{children:"docker"})," \u955c\u50cf\u3002\u975e\u5fc5\u9700 ",(0,t.jsx)(n.code,{children:"FILE"})," \u53c2\u6570\u4e3a\u7f16\u8bd1\u6587\u4ef6\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a ",(0,t.jsx)(n.code,{children:"main.go"}),"\u3002\u975e\u5fc5\u9700\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"OPTIONS"})," \u4e3a ",(0,t.jsx)(n.code,{children:"docker build"})," \u547d\u4ee4\u76f8\u540c\u53c2\u6570\u53ca\u9009\u9879\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ gf docker main.go -p -t loads/gf-demos:test\n2020-12-31 00:47:28.207 start building...\n2020-12-31 00:47:28.207 go build -o ./bin/linux_amd64/main main.go\n2020-12-31 00:47:35.894 done!\nSending build context to Docker daemon  37.63MB\nStep 1/10 : FROM loads/alpine:3.8\n ---\x3e f9fb622e6db2\nStep 2/10 : LABEL maintainer="john@goframe.org"\n ---\x3e Using cache\n ---\x3e da238418d031\nStep 3/10 : ENV WORKDIR /var/www/gf-demos\n ---\x3e Using cache\n ---\x3e 3e7129c087c9\nStep 4/10 : ADD ./bin/linux_amd64/main   $WORKDIR/main\n ---\x3e 3661a9dea494\nStep 5/10 : RUN chmod +x $WORKDIR/main\n ---\x3e Running in 1d49d5d91080\nRemoving intermediate container 1d49d5d91080\n ---\x3e a03ee04e3380\nStep 6/10 : ADD public   $WORKDIR/public\n ---\x3e 63dd06d0e1a3\nStep 7/10 : ADD config   $WORKDIR/config\n ---\x3e fa7a57eba577\nStep 8/10 : ADD template $WORKDIR/template\n ---\x3e 7075609b0447\nStep 9/10 : WORKDIR $WORKDIR\n ---\x3e Running in a34ef38e1031\nRemoving intermediate container a34ef38e1031\n ---\x3e 580077998eaf\nStep 10/10 : CMD ./main\n ---\x3e Running in ed286b518ad9\nRemoving intermediate container ed286b518ad9\n ---\x3e fbbc05842901\nSuccessfully built fbbc05842901\nSuccessfully tagged loads/gf-demos:test\nThe push refers to repository [docker.io/loads/gf-demos]\nb4025b95a79f: Preparing\n9e0369a57507: Preparing\n46c68dcc8e12: Preparing\n59adbc083ee5: Preparing\n10e0b999ba57: Preparing\n8e850d7b086e: Waiting\nd5e057db20a2: Waiting\n92e898fd7f84: Waiting\nd9ff549177a9: Waiting\n...\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(296540);const i={},d=t.createContext(i);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);